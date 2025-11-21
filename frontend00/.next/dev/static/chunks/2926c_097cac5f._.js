(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/project1/node_modules/barcode-detector/dist/es/ponyfill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarcodeDetector",
    ()=>Eo,
    "ZXING_CPP_COMMIT",
    ()=>Co,
    "ZXING_WASM_SHA256",
    ()=>_o,
    "ZXING_WASM_VERSION",
    ()=>bo,
    "prepareZXingModule",
    ()=>Ve,
    "purgeZXingModule",
    ()=>To,
    "setZXingModuleOverrides",
    ()=>Po
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/project1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var Ie = (o)=>{
    throw TypeError(o);
};
var Me = (o, l, h)=>l.has(o) || Ie("Cannot " + h);
var Fe = (o, l, h)=>(Me(o, l, "read from private field"), h ? h.call(o) : l.get(o)), je = (o, l, h)=>l.has(o) ? Ie("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(o) : l.set(o, h), Re = (o, l, h, f)=>(Me(o, l, "write to private field"), f ? f.call(o, h) : l.set(o, h), h);
const Ft = [
    [
        "Aztec",
        "M"
    ],
    [
        "Codabar",
        "L"
    ],
    [
        "Code39",
        "L"
    ],
    [
        "Code93",
        "L"
    ],
    [
        "Code128",
        "L"
    ],
    [
        "DataBar",
        "L"
    ],
    [
        "DataBarExpanded",
        "L"
    ],
    [
        "DataMatrix",
        "M"
    ],
    [
        "EAN-8",
        "L"
    ],
    [
        "EAN-13",
        "L"
    ],
    [
        "ITF",
        "L"
    ],
    [
        "MaxiCode",
        "M"
    ],
    [
        "PDF417",
        "M"
    ],
    [
        "QRCode",
        "M"
    ],
    [
        "UPC-A",
        "L"
    ],
    [
        "UPC-E",
        "L"
    ],
    [
        "MicroQRCode",
        "M"
    ],
    [
        "rMQRCode",
        "M"
    ],
    [
        "DXFilmEdge",
        "L"
    ],
    [
        "DataBarLimited",
        "L"
    ]
], jt = Ft.map(([o])=>o), Ba = jt.filter((o, l)=>Ft[l][1] === "L"), Wa = jt.filter((o, l)=>Ft[l][1] === "M");
function Qt(o) {
    switch(o){
        case "Linear-Codes":
            return Ba.reduce((l, h)=>l | Qt(h), 0);
        case "Matrix-Codes":
            return Wa.reduce((l, h)=>l | Qt(h), 0);
        case "Any":
            return (1 << Ft.length) - 1;
        case "None":
            return 0;
        default:
            return 1 << jt.indexOf(o);
    }
}
function Ua(o) {
    if (o === 0) return "None";
    const l = 31 - Math.clz32(o);
    return jt[l];
}
function Va(o) {
    return o.reduce((l, h)=>l | Qt(h), 0);
}
const ka = [
    "LocalAverage",
    "GlobalHistogram",
    "FixedThreshold",
    "BoolCast"
];
function Ha(o) {
    return ka.indexOf(o);
}
const Le = [
    "Unknown",
    "ASCII",
    "ISO8859_1",
    "ISO8859_2",
    "ISO8859_3",
    "ISO8859_4",
    "ISO8859_5",
    "ISO8859_6",
    "ISO8859_7",
    "ISO8859_8",
    "ISO8859_9",
    "ISO8859_10",
    "ISO8859_11",
    "ISO8859_13",
    "ISO8859_14",
    "ISO8859_15",
    "ISO8859_16",
    "Cp437",
    "Cp1250",
    "Cp1251",
    "Cp1252",
    "Cp1256",
    "Shift_JIS",
    "Big5",
    "GB2312",
    "GB18030",
    "EUC_JP",
    "EUC_KR",
    "UTF16BE",
    /**
   * UnicodeBig [[deprecated]]
   */ "UTF16BE",
    "UTF8",
    "UTF16LE",
    "UTF32BE",
    "UTF32LE",
    "BINARY"
];
function Na(o) {
    return o === "UnicodeBig" ? Le.indexOf("UTF16BE") : Le.indexOf(o);
}
const za = [
    "Text",
    "Binary",
    "Mixed",
    "GS1",
    "ISO15434",
    "UnknownECI"
];
function Ga(o) {
    return za[o];
}
const Xa = [
    "Ignore",
    "Read",
    "Require"
];
function qa(o) {
    return Xa.indexOf(o);
}
const Ya = [
    "Plain",
    "ECI",
    "HRI",
    "Hex",
    "Escaped"
];
function Za(o) {
    return Ya.indexOf(o);
}
const Mt = {
    formats: [],
    tryHarder: !0,
    tryRotate: !0,
    tryInvert: !0,
    tryDownscale: !0,
    tryDenoise: !1,
    binarizer: "LocalAverage",
    isPure: !1,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    tryCode39ExtendedMode: !0,
    returnErrors: !1,
    eanAddOnSymbol: "Ignore",
    textMode: "HRI",
    characterSet: "Unknown"
};
function Be(o) {
    return {
        ...o,
        formats: Va(o.formats),
        binarizer: Ha(o.binarizer),
        eanAddOnSymbol: qa(o.eanAddOnSymbol),
        textMode: Za(o.textMode),
        characterSet: Na(o.characterSet)
    };
}
function Qa(o) {
    return {
        ...o,
        format: Ua(o.format),
        contentType: Ga(o.contentType),
        eccLevel: o.ecLevel
    };
}
const bo = "2.2.2", Co = "c0a7c6cd2165457c721c58045edd22ffee9624e9", Ja = {
    locateFile: (o, l)=>{
        const h = o.match(/_(.+?)\.wasm$/);
        return h ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.2.2/dist/${h[1]}/${o}` : l + o;
    }
}, It = /* @__PURE__ */ new WeakMap();
function Ka(o, l) {
    return Object.is(o, l) || Object.keys(o).length === Object.keys(l).length && Object.keys(o).every((h)=>Object.hasOwn(l, h) && o[h] === l[h]);
}
function Ue(o, { overrides: l, equalityFn: h = Ka, fireImmediately: f = !1 } = {}) {
    var C;
    const [O, I] = (C = It.get(o)) != null ? C : [
        Ja
    ], j = l != null ? l : O;
    let x;
    if (f) {
        if (I && (x = h(O, j))) return I;
        const M = o({
            ...j
        });
        return It.set(o, [
            j,
            M
        ]), M;
    }
    (x != null ? x : h(O, j)) || It.set(o, [
        j
    ]);
}
function to(o) {
    It.delete(o);
}
async function eo(o, l, h = Mt) {
    const f = {
        ...Mt,
        ...h
    }, C = await Ue(o, {
        fireImmediately: !0
    });
    let O, I;
    if ("width" in l && "height" in l && "data" in l) {
        const { data: x, data: { byteLength: M }, width: z, height: X } = l;
        I = C._malloc(M), C.HEAPU8.set(x, I), O = C.readBarcodesFromPixmap(I, z, X, Be(f));
    } else {
        let x, M;
        if ("buffer" in l) [x, M] = [
            l.byteLength,
            l
        ];
        else if ("byteLength" in l) [x, M] = [
            l.byteLength,
            new Uint8Array(l)
        ];
        else if ("size" in l) [x, M] = [
            l.size,
            new Uint8Array(await l.arrayBuffer())
        ];
        else throw new TypeError("Invalid input type");
        I = C._malloc(x), C.HEAPU8.set(M, I), O = C.readBarcodesFromImage(I, x, Be(f));
    }
    C._free(I);
    const j = [];
    for(let x = 0; x < O.size(); ++x)j.push(Qa(O.get(x)));
    return j;
}
({
    ...Mt,
    formats: [
        ...Mt.formats
    ]
});
var Kt = async function(o = {}) {
    var l, h, f = o, C, O, I = new Promise((e, t)=>{
        C = e, O = t;
    }), j = typeof window == "object", x = typeof Bun < "u", M = typeof WorkerGlobalScope < "u";
    typeof __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && !((h = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions) === null || h === void 0) && h.node && __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].type != "renderer";
    var z = "./this.program", X, q = "";
    function it(e) {
        return f.locateFile ? f.locateFile(e, q) : q + e;
    }
    var st, et;
    if (j || M || x) {
        try {
            q = new URL(".", X).href;
        } catch  {}
        M && (et = (e)=>{
            var t = new XMLHttpRequest();
            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
        }), st = async (e)=>{
            var t = await fetch(e, {
                credentials: "same-origin"
            });
            if (t.ok) return t.arrayBuffer();
            throw new Error(t.status + " : " + t.url);
        };
    }
    var vt = console.log.bind(console), G = console.error.bind(console), ut, yt, te = !1, Y, B, mt, rt, nt, P, ee, re;
    function ne() {
        var e = yt.buffer;
        Y = new Int8Array(e), mt = new Int16Array(e), f.HEAPU8 = B = new Uint8Array(e), rt = new Uint16Array(e), nt = new Int32Array(e), P = new Uint32Array(e), ee = new Float32Array(e), re = new Float64Array(e);
    }
    function Qe() {
        if (f.preRun) for(typeof f.preRun == "function" && (f.preRun = [
            f.preRun
        ]); f.preRun.length;)lr(f.preRun.shift());
        ae(ie);
    }
    function Je() {
        _.ya();
    }
    function Ke() {
        if (f.postRun) for(typeof f.postRun == "function" && (f.postRun = [
            f.postRun
        ]); f.postRun.length;)cr(f.postRun.shift());
        ae(oe);
    }
    var Z = 0, ct = null;
    function tr(e) {
        var t;
        Z++, (t = f.monitorRunDependencies) === null || t === void 0 || t.call(f, Z);
    }
    function er(e) {
        var t;
        if (Z--, (t = f.monitorRunDependencies) === null || t === void 0 || t.call(f, Z), Z == 0 && ct) {
            var r = ct;
            ct = null, r();
        }
    }
    function Rt(e) {
        var t;
        (t = f.onAbort) === null || t === void 0 || t.call(f, e), e = "Aborted(" + e + ")", G(e), te = !0, e += ". Build with -sASSERTIONS for more info.";
        var r = new WebAssembly.RuntimeError(e);
        throw O(r), r;
    }
    var gt;
    function rr() {
        return it("zxing_reader.wasm");
    }
    function nr(e) {
        if (e == gt && ut) return new Uint8Array(ut);
        if (et) return et(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function ar(e) {
        if (!ut) try {
            var t = await st(e);
            return new Uint8Array(t);
        } catch  {}
        return nr(e);
    }
    async function or(e, t) {
        try {
            var r = await ar(e), n = await WebAssembly.instantiate(r, t);
            return n;
        } catch (a) {
            G(`failed to asynchronously prepare wasm: ${a}`), Rt(a);
        }
    }
    async function ir(e, t, r) {
        if (!e && typeof WebAssembly.instantiateStreaming == "function") try {
            var n = fetch(t, {
                credentials: "same-origin"
            }), a = await WebAssembly.instantiateStreaming(n, r);
            return a;
        } catch (i) {
            G(`wasm streaming compile failed: ${i}`), G("falling back to ArrayBuffer instantiation");
        }
        return or(t, r);
    }
    function sr() {
        return {
            a: Nn
        };
    }
    async function ur() {
        function e(i, u) {
            return _ = i.exports, yt = _.xa, ne(), ye = _.Ba, er(), _;
        }
        tr();
        function t(i) {
            return e(i.instance);
        }
        var r = sr();
        if (f.instantiateWasm) return new Promise((i, u)=>{
            f.instantiateWasm(r, (s, c)=>{
                i(e(s));
            });
        });
        gt != null || (gt = rr());
        try {
            var n = await ir(ut, gt, r), a = t(n);
            return a;
        } catch (i) {
            return O(i), Promise.reject(i);
        }
    }
    var ae = (e)=>{
        for(; e.length > 0;)e.shift()(f);
    }, oe = [], cr = (e)=>oe.push(e), ie = [], lr = (e)=>ie.push(e), m = (e)=>qn(e), g = ()=>Yn(), wt = [], $t = 0, fr = (e)=>{
        var t = new Lt(e);
        return t.get_caught() || (t.set_caught(!0), $t--), t.set_rethrown(!1), wt.push(t), Qn(e), Gn(e);
    }, V = 0, dr = ()=>{
        y(0, 0);
        var e = wt.pop();
        Zn(e.excPtr), V = 0;
    };
    class Lt {
        constructor(t){
            this.excPtr = t, this.ptr = t - 24;
        }
        set_type(t) {
            P[this.ptr + 4 >> 2] = t;
        }
        get_type() {
            return P[this.ptr + 4 >> 2];
        }
        set_destructor(t) {
            P[this.ptr + 8 >> 2] = t;
        }
        get_destructor() {
            return P[this.ptr + 8 >> 2];
        }
        set_caught(t) {
            t = t ? 1 : 0, Y[this.ptr + 12] = t;
        }
        get_caught() {
            return Y[this.ptr + 12] != 0;
        }
        set_rethrown(t) {
            t = t ? 1 : 0, Y[this.ptr + 13] = t;
        }
        get_rethrown() {
            return Y[this.ptr + 13] != 0;
        }
        init(t, r) {
            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
        }
        set_adjusted_ptr(t) {
            P[this.ptr + 16 >> 2] = t;
        }
        get_adjusted_ptr() {
            return P[this.ptr + 16 >> 2];
        }
    }
    var bt = (e)=>Xn(e), Bt = (e)=>{
        var t = V;
        if (!t) return bt(0), 0;
        var r = new Lt(t);
        r.set_adjusted_ptr(t);
        var n = r.get_type();
        if (!n) return bt(0), t;
        for (var a of e){
            if (a === 0 || a === n) break;
            var i = r.ptr + 16;
            if (Jn(a, n, i)) return bt(a), t;
        }
        return bt(n), t;
    }, hr = ()=>Bt([]), pr = (e)=>Bt([
            e
        ]), vr = (e, t)=>Bt([
            e,
            t
        ]), yr = ()=>{
        var e = wt.pop();
        e || Rt("no exception to throw");
        var t = e.excPtr;
        throw e.get_rethrown() || (wt.push(e), e.set_rethrown(!0), e.set_caught(!1), $t++), V = t, V;
    }, mr = (e, t, r)=>{
        var n = new Lt(e);
        throw n.init(t, r), V = e, $t++, V;
    }, gr = ()=>$t, wr = (e)=>{
        throw V || (V = e), V;
    }, $r = ()=>Rt(""), Ct = {}, Wt = (e)=>{
        for(; e.length;){
            var t = e.pop(), r = e.pop();
            r(t);
        }
    };
    function lt(e) {
        return this.fromWireType(P[e >> 2]);
    }
    var at = {}, Q = {}, Tt = {}, br = class extends Error {
        constructor(e){
            super(e), this.name = "InternalError";
        }
    }, Pt = (e)=>{
        throw new br(e);
    }, J = (e, t, r)=>{
        e.forEach((s)=>Tt[s] = t);
        function n(s) {
            var c = r(s);
            c.length !== e.length && Pt("Mismatched type converter count");
            for(var d = 0; d < e.length; ++d)U(e[d], c[d]);
        }
        var a = new Array(t.length), i = [], u = 0;
        t.forEach((s, c)=>{
            Q.hasOwnProperty(s) ? a[c] = Q[s] : (i.push(s), at.hasOwnProperty(s) || (at[s] = []), at[s].push(()=>{
                a[c] = Q[s], ++u, u === i.length && n(a);
            }));
        }), i.length === 0 && n(a);
    }, Cr = (e)=>{
        var t = Ct[e];
        delete Ct[e];
        var r = t.rawConstructor, n = t.rawDestructor, a = t.fields, i = a.map((u)=>u.getterReturnType).concat(a.map((u)=>u.setterArgumentType));
        J([
            e
        ], i, (u)=>{
            var s = {};
            return a.forEach((c, d)=>{
                var p = c.fieldName, v = u[d], $ = u[d].optional, b = c.getter, E = c.getterContext, S = u[d + a.length], A = c.setter, D = c.setterContext;
                s[p] = {
                    read: (N)=>v.fromWireType(b(E, N)),
                    write: (N, R)=>{
                        var L = [];
                        A(D, N, S.toWireType(L, R)), Wt(L);
                    },
                    optional: $
                };
            }), [
                {
                    name: t.name,
                    fromWireType: (c)=>{
                        var d = {};
                        for(var p in s)d[p] = s[p].read(c);
                        return n(c), d;
                    },
                    toWireType: (c, d)=>{
                        for(var p in s)if (!(p in d) && !s[p].optional) throw new TypeError(`Missing field: "${p}"`);
                        var v = r();
                        for(p in s)s[p].write(v, d[p]);
                        return c !== null && c.push(n, v), v;
                    },
                    argPackAdvance: k,
                    readValueFromPointer: lt,
                    destructorFunction: n
                }
            ];
        });
    }, Tr = (e, t, r, n, a)=>{}, Pr = ()=>{
        for(var e = new Array(256), t = 0; t < 256; ++t)e[t] = String.fromCharCode(t);
        se = e;
    }, se, F = (e)=>{
        for(var t = "", r = e; B[r];)t += se[B[r++]];
        return t;
    }, ft = class extends Error {
        constructor(e){
            super(e), this.name = "BindingError";
        }
    }, T = (e)=>{
        throw new ft(e);
    };
    function _r(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var n = t.name;
        if (e || T(`type "${n}" must have a positive integer typeid pointer`), Q.hasOwnProperty(e)) {
            if (r.ignoreDuplicateRegistrations) return;
            T(`Cannot register type '${n}' twice`);
        }
        if (Q[e] = t, delete Tt[e], at.hasOwnProperty(e)) {
            var a = at[e];
            delete at[e], a.forEach((i)=>i());
        }
    }
    function U(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return _r(e, t, r);
    }
    var k = 8, Er = (e, t, r, n)=>{
        t = F(t), U(e, {
            name: t,
            fromWireType: function(a) {
                return !!a;
            },
            toWireType: function(a, i) {
                return i ? r : n;
            },
            argPackAdvance: k,
            readValueFromPointer: function(a) {
                return this.fromWireType(B[a]);
            },
            destructorFunction: null
        });
    }, Or = (e)=>({
            count: e.count,
            deleteScheduled: e.deleteScheduled,
            preservePointerOnDelete: e.preservePointerOnDelete,
            ptr: e.ptr,
            ptrType: e.ptrType,
            smartPtr: e.smartPtr,
            smartPtrType: e.smartPtrType
        }), Ut = (e)=>{
        function t(r) {
            return r.$$.ptrType.registeredClass.name;
        }
        T(t(e) + " instance already deleted");
    }, Vt = !1, ue = (e)=>{}, xr = (e)=>{
        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }, ce = (e)=>{
        e.count.value -= 1;
        var t = e.count.value === 0;
        t && xr(e);
    }, dt = (e)=>typeof FinalizationRegistry > "u" ? (dt = (t)=>t, e) : (Vt = new FinalizationRegistry((t)=>{
            ce(t.$$);
        }), dt = (t)=>{
            var r = t.$$, n = !!r.smartPtr;
            if (n) {
                var a = {
                    $$: r
                };
                Vt.register(t, a, t);
            }
            return t;
        }, ue = (t)=>Vt.unregister(t), dt(e)), Ar = ()=>{
        let e = _t.prototype;
        Object.assign(e, {
            isAliasOf (r) {
                if (!(this instanceof _t) || !(r instanceof _t)) return !1;
                var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
                r.$$ = r.$$;
                for(var i = r.$$.ptrType.registeredClass, u = r.$$.ptr; n.baseClass;)a = n.upcast(a), n = n.baseClass;
                for(; i.baseClass;)u = i.upcast(u), i = i.baseClass;
                return n === i && a === u;
            },
            clone () {
                if (this.$$.ptr || Ut(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                var r = dt(Object.create(Object.getPrototypeOf(this), {
                    $$: {
                        value: Or(this.$$)
                    }
                }));
                return r.$$.count.value += 1, r.$$.deleteScheduled = !1, r;
            },
            delete () {
                this.$$.ptr || Ut(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && T("Object already scheduled for deletion"), ue(this), ce(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
            },
            isDeleted () {
                return !this.$$.ptr;
            },
            deleteLater () {
                return this.$$.ptr || Ut(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && T("Object already scheduled for deletion"), this.$$.deleteScheduled = !0, this;
            }
        });
        const t = Symbol.dispose;
        t && (e[t] = e.delete);
    };
    function _t() {}
    var kt = (e, t)=>Object.defineProperty(t, "name", {
            value: e
        }), le = {}, fe = (e, t, r)=>{
        if (e[t].overloadTable === void 0) {
            var n = e[t];
            e[t] = function() {
                for(var a = arguments.length, i = new Array(a), u = 0; u < a; u++)i[u] = arguments[u];
                return e[t].overloadTable.hasOwnProperty(i.length) || T(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[i.length].apply(this, i);
            }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
        }
    }, de = (e, t, r)=>{
        f.hasOwnProperty(e) ? ((r === void 0 || f[e].overloadTable !== void 0 && f[e].overloadTable[r] !== void 0) && T(`Cannot register public name '${e}' twice`), fe(f, e, e), f[e].overloadTable.hasOwnProperty(r) && T(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), f[e].overloadTable[r] = t) : (f[e] = t, f[e].argCount = r);
    }, Sr = 48, Dr = 57, Ir = (e)=>{
        e = e.replace(/[^a-zA-Z0-9_]/g, "$");
        var t = e.charCodeAt(0);
        return t >= Sr && t <= Dr ? `_${e}` : e;
    };
    function Mr(e, t, r, n, a, i, u, s) {
        this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = u, this.downcast = s, this.pureVirtualFunctions = [];
    }
    var Ht = (e, t, r)=>{
        for(; t !== r;)t.upcast || T(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
        return e;
    }, Nt = (e)=>{
        if (e === null) return "null";
        var t = typeof e;
        return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
    };
    function Fr(e, t) {
        if (t === null) return this.isReference && T(`null is not a valid ${this.name}`), 0;
        t.$$ || T(`Cannot pass "${Nt(t)}" as a ${this.name}`), t.$$.ptr || T(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Ht(t.$$.ptr, r, this.registeredClass);
        return n;
    }
    function jr(e, t) {
        var r;
        if (t === null) return this.isReference && T(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
        (!t || !t.$$) && T(`Cannot pass "${Nt(t)}" as a ${this.name}`), t.$$.ptr || T(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && T(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
        var n = t.$$.ptrType.registeredClass;
        if (r = Ht(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch(t.$$.smartPtr === void 0 && T("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
            case 0:
                t.$$.smartPtrType === this ? r = t.$$.smartPtr : T(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
                break;
            case 1:
                r = t.$$.smartPtr;
                break;
            case 2:
                if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                else {
                    var a = t.clone();
                    r = this.rawShare(r, H.toHandle(()=>a.delete())), e !== null && e.push(this.rawDestructor, r);
                }
                break;
            default:
                T("Unsupporting sharing policy");
        }
        return r;
    }
    function Rr(e, t) {
        if (t === null) return this.isReference && T(`null is not a valid ${this.name}`), 0;
        t.$$ || T(`Cannot pass "${Nt(t)}" as a ${this.name}`), t.$$.ptr || T(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && T(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Ht(t.$$.ptr, r, this.registeredClass);
        return n;
    }
    var he = (e, t, r)=>{
        if (t === r) return e;
        if (r.baseClass === void 0) return null;
        var n = he(e, t, r.baseClass);
        return n === null ? null : r.downcast(n);
    }, Lr = {}, Br = (e, t)=>{
        for(t === void 0 && T("ptr should not be undefined"); e.baseClass;)t = e.upcast(t), e = e.baseClass;
        return t;
    }, Wr = (e, t)=>(t = Br(e, t), Lr[t]), Et = (e, t)=>{
        (!t.ptrType || !t.ptr) && Pt("makeClassHandle requires ptr and ptrType");
        var r = !!t.smartPtrType, n = !!t.smartPtr;
        return r !== n && Pt("Both smartPtrType and smartPtr must be specified"), t.count = {
            value: 1
        }, dt(Object.create(e, {
            $$: {
                value: t,
                writable: !0
            }
        }));
    };
    function Ur(e) {
        var t = this.getPointee(e);
        if (!t) return this.destructor(e), null;
        var r = Wr(this.registeredClass, t);
        if (r !== void 0) {
            if (r.$$.count.value === 0) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
            var n = r.clone();
            return this.destructor(e), n;
        }
        function a() {
            return this.isSmartPointer ? Et(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: t,
                smartPtrType: this,
                smartPtr: e
            }) : Et(this.registeredClass.instancePrototype, {
                ptrType: this,
                ptr: e
            });
        }
        var i = this.registeredClass.getActualType(t), u = le[i];
        if (!u) return a.call(this);
        var s;
        this.isConst ? s = u.constPointerType : s = u.pointerType;
        var c = he(t, this.registeredClass, s.registeredClass);
        return c === null ? a.call(this) : this.isSmartPointer ? Et(s.registeredClass.instancePrototype, {
            ptrType: s,
            ptr: c,
            smartPtrType: this,
            smartPtr: e
        }) : Et(s.registeredClass.instancePrototype, {
            ptrType: s,
            ptr: c
        });
    }
    var Vr = ()=>{
        Object.assign(Ot.prototype, {
            getPointee (e) {
                return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
            },
            destructor (e) {
                var t;
                (t = this.rawDestructor) === null || t === void 0 || t.call(this, e);
            },
            argPackAdvance: k,
            readValueFromPointer: lt,
            fromWireType: Ur
        });
    };
    function Ot(e, t, r, n, a, i, u, s, c, d, p) {
        this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = u, this.rawGetPointee = s, this.rawConstructor = c, this.rawShare = d, this.rawDestructor = p, !a && t.baseClass === void 0 ? n ? (this.toWireType = Fr, this.destructorFunction = null) : (this.toWireType = Rr, this.destructorFunction = null) : this.toWireType = jr;
    }
    var pe = (e, t, r)=>{
        f.hasOwnProperty(e) || Pt("Replacing nonexistent public symbol"), f[e].overloadTable !== void 0 && r !== void 0 ? f[e].overloadTable[r] = t : (f[e] = t, f[e].argCount = r);
    }, ve = [], ye, w = (e)=>{
        var t = ve[e];
        return t || (ve[e] = t = ye.get(e)), t;
    }, kr = function(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (e.includes("j")) return dynCallLegacy(e, t, r);
        var n = w(t), a = n(...r);
        return a;
    }, Hr = function(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        return function() {
            for(var n = arguments.length, a = new Array(n), i = 0; i < n; i++)a[i] = arguments[i];
            return kr(e, t, a, r);
        };
    }, W = function(e, t) {
        e = F(e);
        function r() {
            if (e.includes("j")) return Hr(e, t);
            var a = w(t);
            return a;
        }
        var n = r();
        return typeof n != "function" && T(`unknown function pointer with signature ${e}: ${t}`), n;
    };
    class Nr extends Error {
    }
    var me = (e)=>{
        var t = zn(e), r = F(t);
        return tt(t), r;
    }, xt = (e, t)=>{
        var r = [], n = {};
        function a(i) {
            if (!n[i] && !Q[i]) {
                if (Tt[i]) {
                    Tt[i].forEach(a);
                    return;
                }
                r.push(i), n[i] = !0;
            }
        }
        throw t.forEach(a), new Nr(`${e}: ` + r.map(me).join([
            ", "
        ]));
    }, zr = (e, t, r, n, a, i, u, s, c, d, p, v, $)=>{
        p = F(p), i = W(a, i), s && (s = W(u, s)), d && (d = W(c, d)), $ = W(v, $);
        var b = Ir(p);
        de(b, function() {
            xt(`Cannot construct ${p} due to unbound types`, [
                n
            ]);
        }), J([
            e,
            t,
            r
        ], n ? [
            n
        ] : [], (E)=>{
            E = E[0];
            var S, A;
            n ? (S = E.registeredClass, A = S.instancePrototype) : A = _t.prototype;
            var D = kt(p, function() {
                if (Object.getPrototypeOf(this) !== N) throw new ft(`Use 'new' to construct ${p}`);
                if (R.constructor_body === void 0) throw new ft(`${p} has no accessible constructor`);
                for(var Se = arguments.length, St = new Array(Se), Dt = 0; Dt < Se; Dt++)St[Dt] = arguments[Dt];
                var De = R.constructor_body[St.length];
                if (De === void 0) throw new ft(`Tried to invoke ctor of ${p} with invalid number of parameters (${St.length}) - expected (${Object.keys(R.constructor_body).toString()}) parameters instead!`);
                return De.apply(this, St);
            }), N = Object.create(A, {
                constructor: {
                    value: D
                }
            });
            D.prototype = N;
            var R = new Mr(p, D, N, $, S, i, s, d);
            if (R.baseClass) {
                var L, At;
                (At = (L = R.baseClass).__derivedClasses) !== null && At !== void 0 || (L.__derivedClasses = []), R.baseClass.__derivedClasses.push(R);
            }
            var La = new Ot(p, R, !0, !1, !1), xe = new Ot(p + "*", R, !1, !1, !1), Ae = new Ot(p + " const*", R, !1, !0, !1);
            return le[e] = {
                pointerType: xe,
                constPointerType: Ae
            }, pe(b, D), [
                La,
                xe,
                Ae
            ];
        });
    }, zt = (e, t)=>{
        for(var r = [], n = 0; n < e; n++)r.push(P[t + n * 4 >> 2]);
        return r;
    };
    function Gr(e) {
        for(var t = 1; t < e.length; ++t)if (e[t] !== null && e[t].destructorFunction === void 0) return !0;
        return !1;
    }
    function Gt(e, t, r, n, a, i) {
        var u = t.length;
        u < 2 && T("argTypes array size mismatch! Must at least get return value and 'this' types!");
        var s = t[1] !== null && r !== null, c = Gr(t), d = t[0].name !== "void", p = u - 2, v = new Array(p), $ = [], b = [], E = function() {
            b.length = 0;
            var S;
            $.length = s ? 2 : 1, $[0] = a, s && (S = t[1].toWireType(b, this), $[1] = S);
            for(var A = 0; A < p; ++A)v[A] = t[A + 2].toWireType(b, A < 0 || arguments.length <= A ? void 0 : arguments[A]), $.push(v[A]);
            var D = n(...$);
            function N(R) {
                if (c) Wt(b);
                else for(var L = s ? 1 : 2; L < t.length; L++){
                    var At = L === 1 ? S : v[L - 2];
                    t[L].destructorFunction !== null && t[L].destructorFunction(At);
                }
                if (d) return t[0].fromWireType(R);
            }
            return N(D);
        };
        return kt(e, E);
    }
    var Xr = (e, t, r, n, a, i)=>{
        var u = zt(t, r);
        a = W(n, a), J([], [
            e
        ], (s)=>{
            s = s[0];
            var c = `constructor ${s.name}`;
            if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[t - 1] !== void 0) throw new ft(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
            return s.registeredClass.constructor_body[t - 1] = ()=>{
                xt(`Cannot construct ${s.name} due to unbound types`, u);
            }, J([], u, (d)=>(d.splice(1, 0, null), s.registeredClass.constructor_body[t - 1] = Gt(c, d, null, a, i), [])), [];
        });
    }, ge = (e)=>{
        e = e.trim();
        const t = e.indexOf("(");
        return t === -1 ? e : e.slice(0, t);
    }, qr = (e, t, r, n, a, i, u, s, c, d)=>{
        var p = zt(r, n);
        t = F(t), t = ge(t), i = W(a, i), J([], [
            e
        ], (v)=>{
            v = v[0];
            var $ = `${v.name}.${t}`;
            t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && v.registeredClass.pureVirtualFunctions.push(t);
            function b() {
                xt(`Cannot call ${$} due to unbound types`, p);
            }
            var E = v.registeredClass.instancePrototype, S = E[t];
            return S === void 0 || S.overloadTable === void 0 && S.className !== v.name && S.argCount === r - 2 ? (b.argCount = r - 2, b.className = v.name, E[t] = b) : (fe(E, t, $), E[t].overloadTable[r - 2] = b), J([], p, (A)=>{
                var D = Gt($, A, v, i, u);
                return E[t].overloadTable === void 0 ? (D.argCount = r - 2, E[t] = D) : E[t].overloadTable[r - 2] = D, [];
            }), [];
        });
    }, we = [], K = [
        0,
        1,
        ,
        1,
        null,
        1,
        !0,
        1,
        !1,
        1
    ], Xt = (e)=>{
        e > 9 && --K[e + 1] === 0 && (K[e] = void 0, we.push(e));
    }, H = {
        toValue: (e)=>(e || T(`Cannot use deleted val. handle = ${e}`), K[e]),
        toHandle: (e)=>{
            switch(e){
                case void 0:
                    return 2;
                case null:
                    return 4;
                case !0:
                    return 6;
                case !1:
                    return 8;
                default:
                    {
                        const t = we.pop() || K.length;
                        return K[t] = e, K[t + 1] = 1, t;
                    }
            }
        }
    }, $e = {
        name: "emscripten::val",
        fromWireType: (e)=>{
            var t = H.toValue(e);
            return Xt(e), t;
        },
        toWireType: (e, t)=>H.toHandle(t),
        argPackAdvance: k,
        readValueFromPointer: lt,
        destructorFunction: null
    }, Yr = (e)=>U(e, $e), Zr = (e, t)=>{
        switch(t){
            case 4:
                return function(r) {
                    return this.fromWireType(ee[r >> 2]);
                };
            case 8:
                return function(r) {
                    return this.fromWireType(re[r >> 3]);
                };
            default:
                throw new TypeError(`invalid float width (${t}): ${e}`);
        }
    }, Qr = (e, t, r)=>{
        t = F(t), U(e, {
            name: t,
            fromWireType: (n)=>n,
            toWireType: (n, a)=>a,
            argPackAdvance: k,
            readValueFromPointer: Zr(t, r),
            destructorFunction: null
        });
    }, Jr = (e, t, r, n, a, i, u, s)=>{
        var c = zt(t, r);
        e = F(e), e = ge(e), a = W(n, a), de(e, function() {
            xt(`Cannot call ${e} due to unbound types`, c);
        }, t - 1), J([], c, (d)=>{
            var p = [
                d[0],
                null
            ].concat(d.slice(1));
            return pe(e, Gt(e, p, null, a, i), t - 1), [];
        });
    }, Kr = (e, t, r)=>{
        switch(t){
            case 1:
                return r ? (n)=>Y[n] : (n)=>B[n];
            case 2:
                return r ? (n)=>mt[n >> 1] : (n)=>rt[n >> 1];
            case 4:
                return r ? (n)=>nt[n >> 2] : (n)=>P[n >> 2];
            default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
        }
    }, tn = (e, t, r, n, a)=>{
        t = F(t);
        const i = n === 0;
        let u = (c)=>c;
        if (i) {
            var s = 32 - 8 * r;
            u = (c)=>c << s >>> s, a = u(a);
        }
        U(e, {
            name: t,
            fromWireType: u,
            toWireType: (c, d)=>d,
            argPackAdvance: k,
            readValueFromPointer: Kr(t, r, n !== 0),
            destructorFunction: null
        });
    }, en = (e, t, r)=>{
        var n = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array
        ], a = n[t];
        function i(u) {
            var s = P[u >> 2], c = P[u + 4 >> 2];
            return new a(Y.buffer, c, s);
        }
        r = F(r), U(e, {
            name: r,
            fromWireType: i,
            argPackAdvance: k,
            readValueFromPointer: i
        }, {
            ignoreDuplicateRegistrations: !0
        });
    }, rn = Object.assign({
        optional: !0
    }, $e), nn = (e, t)=>{
        U(e, rn);
    }, an = (e, t, r, n)=>{
        if (!(n > 0)) return 0;
        for(var a = r, i = r + n - 1, u = 0; u < e.length; ++u){
            var s = e.charCodeAt(u);
            if (s >= 55296 && s <= 57343) {
                var c = e.charCodeAt(++u);
                s = 65536 + ((s & 1023) << 10) | c & 1023;
            }
            if (s <= 127) {
                if (r >= i) break;
                t[r++] = s;
            } else if (s <= 2047) {
                if (r + 1 >= i) break;
                t[r++] = 192 | s >> 6, t[r++] = 128 | s & 63;
            } else if (s <= 65535) {
                if (r + 2 >= i) break;
                t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63;
            } else {
                if (r + 3 >= i) break;
                t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63;
            }
        }
        return t[r] = 0, r - a;
    }, ot = (e, t, r)=>an(e, B, t, r), be = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
        }
        return t;
    }, Ce = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Te = function(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN;
        for(var n = t + r, a = t; e[a] && !(a >= n);)++a;
        if (a - t > 16 && e.buffer && Ce) return Ce.decode(e.subarray(t, a));
        for(var i = ""; t < a;){
            var u = e[t++];
            if (!(u & 128)) {
                i += String.fromCharCode(u);
                continue;
            }
            var s = e[t++] & 63;
            if ((u & 224) == 192) {
                i += String.fromCharCode((u & 31) << 6 | s);
                continue;
            }
            var c = e[t++] & 63;
            if ((u & 240) == 224 ? u = (u & 15) << 12 | s << 6 | c : u = (u & 7) << 18 | s << 12 | c << 6 | e[t++] & 63, u < 65536) i += String.fromCharCode(u);
            else {
                var d = u - 65536;
                i += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023);
            }
        }
        return i;
    }, on = (e, t)=>e ? Te(B, e, t) : "", sn = (e, t)=>{
        t = F(t), U(e, {
            name: t,
            fromWireType (r) {
                for(var n = P[r >> 2], a = r + 4, i, s, u = a, s = 0; s <= n; ++s){
                    var c = a + s;
                    if (s == n || B[c] == 0) {
                        var d = c - u, p = on(u, d);
                        i === void 0 ? i = p : (i += "\0", i += p), u = c + 1;
                    }
                }
                return tt(r), i;
            },
            toWireType (r, n) {
                n instanceof ArrayBuffer && (n = new Uint8Array(n));
                var a, i = typeof n == "string";
                i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || T("Cannot pass non-string to std::string"), i ? a = be(n) : a = n.length;
                var u = Oe(4 + a + 1), s = u + 4;
                return P[u >> 2] = a, i ? ot(n, s, a + 1) : B.set(n, s), r !== null && r.push(tt, u), u;
            },
            argPackAdvance: k,
            readValueFromPointer: lt,
            destructorFunction (r) {
                tt(r);
            }
        });
    }, Pe = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, un = (e, t)=>{
        for(var r = e >> 1, n = r + t / 2, a = r; !(a >= n) && rt[a];)++a;
        if (a - r > 16 && Pe) return Pe.decode(rt.subarray(r, a));
        for(var i = "", u = r; !(u >= n); ++u){
            var s = rt[u];
            if (s == 0) break;
            i += String.fromCharCode(s);
        }
        return i;
    }, cn = (e, t, r)=>{
        if (r != null || (r = 2147483647), r < 2) return 0;
        r -= 2;
        for(var n = t, a = r < e.length * 2 ? r / 2 : e.length, i = 0; i < a; ++i){
            var u = e.charCodeAt(i);
            mt[t >> 1] = u, t += 2;
        }
        return mt[t >> 1] = 0, t - n;
    }, ln = (e)=>e.length * 2, fn = (e, t)=>{
        for(var r = 0, n = ""; !(r >= t / 4);){
            var a = nt[e + r * 4 >> 2];
            if (a == 0) break;
            if (++r, a >= 65536) {
                var i = a - 65536;
                n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023);
            } else n += String.fromCharCode(a);
        }
        return n;
    }, dn = (e, t, r)=>{
        if (r != null || (r = 2147483647), r < 4) return 0;
        for(var n = t, a = n + r - 4, i = 0; i < e.length; ++i){
            var u = e.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
                var s = e.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | s & 1023;
            }
            if (nt[t >> 2] = u, t += 4, t + 4 > a) break;
        }
        return nt[t >> 2] = 0, t - n;
    }, hn = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n >= 55296 && n <= 57343 && ++r, t += 4;
        }
        return t;
    }, pn = (e, t, r)=>{
        r = F(r);
        var n, a, i, u;
        t === 2 ? (n = un, a = cn, u = ln, i = (s)=>rt[s >> 1]) : t === 4 && (n = fn, a = dn, u = hn, i = (s)=>P[s >> 2]), U(e, {
            name: r,
            fromWireType: (s)=>{
                for(var c = P[s >> 2], d, p = s + 4, v = 0; v <= c; ++v){
                    var $ = s + 4 + v * t;
                    if (v == c || i($) == 0) {
                        var b = $ - p, E = n(p, b);
                        d === void 0 ? d = E : (d += "\0", d += E), p = $ + t;
                    }
                }
                return tt(s), d;
            },
            toWireType: (s, c)=>{
                typeof c != "string" && T(`Cannot pass non-string to C++ string type ${r}`);
                var d = u(c), p = Oe(4 + d + t);
                return P[p >> 2] = d / t, a(c, p + 4, d + t), s !== null && s.push(tt, p), p;
            },
            argPackAdvance: k,
            readValueFromPointer: lt,
            destructorFunction (s) {
                tt(s);
            }
        });
    }, vn = (e, t, r, n, a, i)=>{
        Ct[e] = {
            name: F(t),
            rawConstructor: W(r, n),
            rawDestructor: W(a, i),
            fields: []
        };
    }, yn = (e, t, r, n, a, i, u, s, c, d)=>{
        Ct[e].fields.push({
            fieldName: F(t),
            getterReturnType: r,
            getter: W(n, a),
            getterContext: i,
            setterArgumentType: u,
            setter: W(s, c),
            setterContext: d
        });
    }, mn = (e, t)=>{
        t = F(t), U(e, {
            isVoid: !0,
            name: t,
            argPackAdvance: 0,
            fromWireType: ()=>{},
            toWireType: (r, n)=>{}
        });
    }, qt = [], gn = (e, t, r, n)=>(e = qt[e], t = H.toValue(t), e(null, t, r, n)), wn = {}, $n = (e)=>{
        var t = wn[e];
        return t === void 0 ? F(e) : t;
    }, _e = ()=>{
        if (typeof globalThis == "object") return globalThis;
        function e(t) {
            t.$$$embind_global$$$ = t;
            var r = typeof $$$embind_global$$$ == "object" && t.$$$embind_global$$$ == t;
            return r || delete t.$$$embind_global$$$, r;
        }
        if (typeof $$$embind_global$$$ == "object" || (("TURBOPACK compile-time value", "object") == "object" && e(/*TURBOPACK member replacement*/ __turbopack_context__.g) ? $$$embind_global$$$ = /*TURBOPACK member replacement*/ __turbopack_context__.g : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
        throw Error("unable to get global object.");
    }, bn = (e)=>e === 0 ? H.toHandle(_e()) : (e = $n(e), H.toHandle(_e()[e])), Cn = (e)=>{
        var t = qt.length;
        return qt.push(e), t;
    }, Ee = (e, t)=>{
        var r = Q[e];
        return r === void 0 && T(`${t} has unknown type ${me(e)}`), r;
    }, Tn = (e, t)=>{
        for(var r = new Array(e), n = 0; n < e; ++n)r[n] = Ee(P[t + n * 4 >> 2], `parameter ${n}`);
        return r;
    }, Pn = (e, t, r)=>{
        var n = [], a = e.toWireType(n, r);
        return n.length && (P[t >> 2] = H.toHandle(n)), a;
    }, _n = Reflect.construct, En = (e, t, r)=>{
        var n = Tn(e, t), a = n.shift();
        e--;
        var i = new Array(e), u = (c, d, p, v)=>{
            for(var $ = 0, b = 0; b < e; ++b)i[b] = n[b].readValueFromPointer(v + $), $ += n[b].argPackAdvance;
            var E = r === 1 ? _n(d, i) : d.apply(c, i);
            return Pn(a, p, E);
        }, s = `methodCaller<(${n.map((c)=>c.name).join(", ")}) => ${a.name}>`;
        return Cn(kt(s, u));
    }, On = (e)=>{
        e > 9 && (K[e + 1] += 1);
    }, xn = (e)=>{
        var t = H.toValue(e);
        Wt(t), Xt(e);
    }, An = (e, t)=>{
        e = Ee(e, "_emval_take_value");
        var r = e.readValueFromPointer(t);
        return H.toHandle(r);
    }, Sn = (e, t, r, n)=>{
        var a = /* @__PURE__ */ new Date().getFullYear(), i = new Date(a, 0, 1), u = new Date(a, 6, 1), s = i.getTimezoneOffset(), c = u.getTimezoneOffset(), d = Math.max(s, c);
        P[e >> 2] = d * 60, nt[t >> 2] = +(s != c);
        var p = (b)=>{
            var E = b >= 0 ? "-" : "+", S = Math.abs(b), A = String(Math.floor(S / 60)).padStart(2, "0"), D = String(S % 60).padStart(2, "0");
            return `UTC${E}${A}${D}`;
        }, v = p(s), $ = p(c);
        c < s ? (ot(v, r, 17), ot($, n, 17)) : (ot(v, n, 17), ot($, r, 17));
    }, Dn = ()=>2147483648, In = (e, t)=>Math.ceil(e / t) * t, Mn = (e)=>{
        var t = yt.buffer, r = (e - t.byteLength + 65535) / 65536 | 0;
        try {
            return yt.grow(r), ne(), 1;
        } catch  {}
    }, Fn = (e)=>{
        var t = B.length;
        e >>>= 0;
        var r = Dn();
        if (e > r) return !1;
        for(var n = 1; n <= 4; n *= 2){
            var a = t * (1 + 0.2 / n);
            a = Math.min(a, e + 100663296);
            var i = Math.min(r, In(Math.max(e, a), 65536)), u = Mn(i);
            if (u) return !0;
        }
        return !1;
    }, Yt = {}, jn = ()=>z || "./this.program", ht = ()=>{
        if (!ht.strings) {
            var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: e,
                _: jn()
            };
            for(var r in Yt)Yt[r] === void 0 ? delete t[r] : t[r] = Yt[r];
            var n = [];
            for(var r in t)n.push(`${r}=${t[r]}`);
            ht.strings = n;
        }
        return ht.strings;
    }, Rn = (e, t)=>{
        var r = 0, n = 0;
        for (var a of ht()){
            var i = t + r;
            P[e + n >> 2] = i, r += ot(a, i, 1 / 0) + 1, n += 4;
        }
        return 0;
    }, Ln = (e, t)=>{
        var r = ht();
        P[e >> 2] = r.length;
        var n = 0;
        for (var a of r)n += be(a) + 1;
        return P[t >> 2] = n, 0;
    }, Bn = (e)=>52;
    function Wn(e, t, r, n, a) {
        return 70;
    }
    var Un = [
        null,
        [],
        []
    ], Vn = (e, t)=>{
        var r = Un[e];
        t === 0 || t === 10 ? ((e === 1 ? vt : G)(Te(r)), r.length = 0) : r.push(t);
    }, kn = (e, t, r, n)=>{
        for(var a = 0, i = 0; i < r; i++){
            var u = P[t >> 2], s = P[t + 4 >> 2];
            t += 8;
            for(var c = 0; c < s; c++)Vn(e, B[u + c]);
            a += s;
        }
        return P[n >> 2] = a, 0;
    }, Hn = (e)=>e;
    Pr(), Ar(), Vr(), f.noExitRuntime && f.noExitRuntime, f.print && (vt = f.print), f.printErr && (G = f.printErr), f.wasmBinary && (ut = f.wasmBinary), f.arguments && f.arguments, f.thisProgram && (z = f.thisProgram);
    var Nn = {
        s: fr,
        w: dr,
        a: hr,
        j: pr,
        m: vr,
        P: yr,
        p: mr,
        ga: gr,
        d: wr,
        ba: $r,
        ua: Cr,
        aa: Tr,
        pa: Er,
        sa: zr,
        ra: Xr,
        H: qr,
        na: Yr,
        V: Qr,
        W: Jr,
        x: tn,
        t: en,
        ta: nn,
        oa: sn,
        Q: pn,
        I: vn,
        va: yn,
        qa: mn,
        da: gn,
        wa: Xt,
        D: bn,
        ma: En,
        X: On,
        Y: xn,
        U: An,
        ca: Sn,
        ha: Fn,
        ea: Rn,
        fa: Ln,
        ia: Bn,
        _: Wn,
        S: kn,
        K: Pa,
        C: Ea,
        M: na,
        R: Ia,
        q: $a,
        b: ia,
        E: Ta,
        ka: xa,
        c: sa,
        ja: Aa,
        h: ra,
        i: fa,
        r: va,
        O: Ca,
        v: ma,
        F: wa,
        L: ba,
        z: Oa,
        J: Ma,
        $: Fa,
        Z: ja,
        k: ua,
        f: ea,
        e: oa,
        g: aa,
        N: Da,
        l: la,
        la: _a,
        o: ya,
        B: da,
        u: ga,
        T: pa,
        A: Sa,
        n: ca,
        G: ha,
        y: Hn
    }, _ = await ur();
    _.ya;
    var zn = _.za, tt = f._free = _.Aa, Oe = f._malloc = _.Ca, Gn = _.Da, y = _.Ea, Xn = _.Fa, qn = _.Ga, Yn = _.Ha, Zn = _.Ia, Qn = _.Ja, Jn = _.Ka;
    f.dynCall_viijii = _.La;
    var Kn = f.dynCall_iiijj = _.Ma;
    f.dynCall_jiji = _.Na;
    var ta = f.dynCall_jiiii = _.Oa;
    f.dynCall_iiiiij = _.Pa, f.dynCall_iiiiijj = _.Qa, f.dynCall_iiiiiijj = _.Ra;
    function ea(e, t) {
        var r = g();
        try {
            w(e)(t);
        } catch (n) {
            if (m(r), n !== n + 0) throw n;
            y(1, 0);
        }
    }
    function ra(e, t, r, n) {
        var a = g();
        try {
            return w(e)(t, r, n);
        } catch (i) {
            if (m(a), i !== i + 0) throw i;
            y(1, 0);
        }
    }
    function na(e, t, r, n, a) {
        var i = g();
        try {
            return w(e)(t, r, n, a);
        } catch (u) {
            if (m(i), u !== u + 0) throw u;
            y(1, 0);
        }
    }
    function aa(e, t, r, n) {
        var a = g();
        try {
            w(e)(t, r, n);
        } catch (i) {
            if (m(a), i !== i + 0) throw i;
            y(1, 0);
        }
    }
    function oa(e, t, r) {
        var n = g();
        try {
            w(e)(t, r);
        } catch (a) {
            if (m(n), a !== a + 0) throw a;
            y(1, 0);
        }
    }
    function ia(e, t) {
        var r = g();
        try {
            return w(e)(t);
        } catch (n) {
            if (m(r), n !== n + 0) throw n;
            y(1, 0);
        }
    }
    function sa(e, t, r) {
        var n = g();
        try {
            return w(e)(t, r);
        } catch (a) {
            if (m(n), a !== a + 0) throw a;
            y(1, 0);
        }
    }
    function ua(e) {
        var t = g();
        try {
            w(e)();
        } catch (r) {
            if (m(t), r !== r + 0) throw r;
            y(1, 0);
        }
    }
    function ca(e, t, r, n, a, i, u, s, c, d, p) {
        var v = g();
        try {
            w(e)(t, r, n, a, i, u, s, c, d, p);
        } catch ($) {
            if (m(v), $ !== $ + 0) throw $;
            y(1, 0);
        }
    }
    function la(e, t, r, n, a) {
        var i = g();
        try {
            w(e)(t, r, n, a);
        } catch (u) {
            if (m(i), u !== u + 0) throw u;
            y(1, 0);
        }
    }
    function fa(e, t, r, n, a) {
        var i = g();
        try {
            return w(e)(t, r, n, a);
        } catch (u) {
            if (m(i), u !== u + 0) throw u;
            y(1, 0);
        }
    }
    function da(e, t, r, n, a, i, u) {
        var s = g();
        try {
            w(e)(t, r, n, a, i, u);
        } catch (c) {
            if (m(s), c !== c + 0) throw c;
            y(1, 0);
        }
    }
    function ha(e, t, r, n, a, i, u, s, c, d, p, v, $, b, E, S) {
        var A = g();
        try {
            w(e)(t, r, n, a, i, u, s, c, d, p, v, $, b, E, S);
        } catch (D) {
            if (m(A), D !== D + 0) throw D;
            y(1, 0);
        }
    }
    function pa(e, t, r, n, a, i, u, s, c) {
        var d = g();
        try {
            w(e)(t, r, n, a, i, u, s, c);
        } catch (p) {
            if (m(d), p !== p + 0) throw p;
            y(1, 0);
        }
    }
    function va(e, t, r, n, a, i) {
        var u = g();
        try {
            return w(e)(t, r, n, a, i);
        } catch (s) {
            if (m(u), s !== s + 0) throw s;
            y(1, 0);
        }
    }
    function ya(e, t, r, n, a, i) {
        var u = g();
        try {
            w(e)(t, r, n, a, i);
        } catch (s) {
            if (m(u), s !== s + 0) throw s;
            y(1, 0);
        }
    }
    function ma(e, t, r, n, a, i, u) {
        var s = g();
        try {
            return w(e)(t, r, n, a, i, u);
        } catch (c) {
            if (m(s), c !== c + 0) throw c;
            y(1, 0);
        }
    }
    function ga(e, t, r, n, a, i, u, s) {
        var c = g();
        try {
            w(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (m(c), d !== d + 0) throw d;
            y(1, 0);
        }
    }
    function wa(e, t, r, n, a, i, u, s) {
        var c = g();
        try {
            return w(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (m(c), d !== d + 0) throw d;
            y(1, 0);
        }
    }
    function $a(e) {
        var t = g();
        try {
            return w(e)();
        } catch (r) {
            if (m(t), r !== r + 0) throw r;
            y(1, 0);
        }
    }
    function ba(e, t, r, n, a, i, u, s, c) {
        var d = g();
        try {
            return w(e)(t, r, n, a, i, u, s, c);
        } catch (p) {
            if (m(d), p !== p + 0) throw p;
            y(1, 0);
        }
    }
    function Ca(e, t, r, n, a, i, u) {
        var s = g();
        try {
            return w(e)(t, r, n, a, i, u);
        } catch (c) {
            if (m(s), c !== c + 0) throw c;
            y(1, 0);
        }
    }
    function Ta(e, t, r, n) {
        var a = g();
        try {
            return w(e)(t, r, n);
        } catch (i) {
            if (m(a), i !== i + 0) throw i;
            y(1, 0);
        }
    }
    function Pa(e, t, r, n) {
        var a = g();
        try {
            return w(e)(t, r, n);
        } catch (i) {
            if (m(a), i !== i + 0) throw i;
            y(1, 0);
        }
    }
    function _a(e, t, r, n, a, i, u, s) {
        var c = g();
        try {
            w(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (m(c), d !== d + 0) throw d;
            y(1, 0);
        }
    }
    function Ea(e, t, r, n, a, i) {
        var u = g();
        try {
            return w(e)(t, r, n, a, i);
        } catch (s) {
            if (m(u), s !== s + 0) throw s;
            y(1, 0);
        }
    }
    function Oa(e, t, r, n, a, i, u, s, c, d) {
        var p = g();
        try {
            return w(e)(t, r, n, a, i, u, s, c, d);
        } catch (v) {
            if (m(p), v !== v + 0) throw v;
            y(1, 0);
        }
    }
    function xa(e, t, r) {
        var n = g();
        try {
            return w(e)(t, r);
        } catch (a) {
            if (m(n), a !== a + 0) throw a;
            y(1, 0);
        }
    }
    function Aa(e, t, r, n, a) {
        var i = g();
        try {
            return w(e)(t, r, n, a);
        } catch (u) {
            if (m(i), u !== u + 0) throw u;
            y(1, 0);
        }
    }
    function Sa(e, t, r, n, a, i, u, s, c, d) {
        var p = g();
        try {
            w(e)(t, r, n, a, i, u, s, c, d);
        } catch (v) {
            if (m(p), v !== v + 0) throw v;
            y(1, 0);
        }
    }
    function Da(e, t, r, n, a, i, u) {
        var s = g();
        try {
            w(e)(t, r, n, a, i, u);
        } catch (c) {
            if (m(s), c !== c + 0) throw c;
            y(1, 0);
        }
    }
    function Ia(e, t, r, n) {
        var a = g();
        try {
            return w(e)(t, r, n);
        } catch (i) {
            if (m(a), i !== i + 0) throw i;
            y(1, 0);
        }
    }
    function Ma(e, t, r, n, a, i, u, s, c, d, p, v) {
        var $ = g();
        try {
            return w(e)(t, r, n, a, i, u, s, c, d, p, v);
        } catch (b) {
            if (m($), b !== b + 0) throw b;
            y(1, 0);
        }
    }
    function Fa(e, t, r, n, a, i, u) {
        var s = g();
        try {
            return Kn(e, t, r, n, a, i, u);
        } catch (c) {
            if (m(s), c !== c + 0) throw c;
            y(1, 0);
        }
    }
    function ja(e, t, r, n, a) {
        var i = g();
        try {
            return ta(e, t, r, n, a);
        } catch (u) {
            if (m(i), u !== u + 0) throw u;
            y(1, 0);
        }
    }
    function Zt() {
        if (Z > 0) {
            ct = Zt;
            return;
        }
        if (Qe(), Z > 0) {
            ct = Zt;
            return;
        }
        function e() {
            var t;
            f.calledRun = !0, !te && (Je(), C(f), (t = f.onRuntimeInitialized) === null || t === void 0 || t.call(f), Ke());
        }
        f.setStatus ? (f.setStatus("Running..."), setTimeout(()=>{
            setTimeout(()=>f.setStatus(""), 1), e();
        }, 1)) : e();
    }
    function Ra() {
        if (f.preInit) for(typeof f.preInit == "function" && (f.preInit = [
            f.preInit
        ]); f.preInit.length > 0;)f.preInit.shift()();
    }
    return Ra(), Zt(), l = I, l;
};
function Ve(o) {
    return Ue(Kt, o);
}
function To() {
    return to(Kt);
}
function Po(o) {
    Ve({
        overrides: o,
        equalityFn: Object.is,
        fireImmediately: !1
    });
}
async function ro(o, l) {
    return eo(Kt, o, l);
}
const _o = "1c961d9d9a1f0001f5d00486bcf8e1b1a91fcf9fe17ebcbd6e2b6efe21e23038", ke = [
    [
        "aztec",
        "Aztec"
    ],
    [
        "code_128",
        "Code128"
    ],
    [
        "code_39",
        "Code39"
    ],
    [
        "code_93",
        "Code93"
    ],
    [
        "codabar",
        "Codabar"
    ],
    [
        "databar",
        "DataBar"
    ],
    [
        "databar_expanded",
        "DataBarExpanded"
    ],
    [
        "databar_limited",
        "DataBarLimited"
    ],
    [
        "data_matrix",
        "DataMatrix"
    ],
    [
        "dx_film_edge",
        "DXFilmEdge"
    ],
    [
        "ean_13",
        "EAN-13"
    ],
    [
        "ean_8",
        "EAN-8"
    ],
    [
        "itf",
        "ITF"
    ],
    [
        "maxi_code",
        "MaxiCode"
    ],
    [
        "micro_qr_code",
        "MicroQRCode"
    ],
    [
        "pdf417",
        "PDF417"
    ],
    [
        "qr_code",
        "QRCode"
    ],
    [
        "rm_qr_code",
        "rMQRCode"
    ],
    [
        "upc_a",
        "UPC-A"
    ],
    [
        "upc_e",
        "UPC-E"
    ],
    [
        "linear_codes",
        "Linear-Codes"
    ],
    [
        "matrix_codes",
        "Matrix-Codes"
    ],
    [
        "any",
        "Any"
    ]
], no = [
    ...ke,
    [
        "unknown"
    ]
].map((o)=>o[0]), Jt = new Map(ke);
function ao(o) {
    for (const [l, h] of Jt)if (o === h) return l;
    return "unknown";
}
function oo(o) {
    if (He(o)) return {
        width: o.naturalWidth,
        height: o.naturalHeight
    };
    if (Ne(o)) return {
        width: o.width.baseVal.value,
        height: o.height.baseVal.value
    };
    if (ze(o)) return {
        width: o.videoWidth,
        height: o.videoHeight
    };
    if (Xe(o)) return {
        width: o.width,
        height: o.height
    };
    if (Ye(o)) return {
        width: o.displayWidth,
        height: o.displayHeight
    };
    if (Ge(o)) return {
        width: o.width,
        height: o.height
    };
    if (qe(o)) return {
        width: o.width,
        height: o.height
    };
    throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function He(o) {
    var l, h;
    try {
        return o instanceof ((h = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : h.HTMLImageElement);
    } catch  {
        return !1;
    }
}
function Ne(o) {
    var l, h;
    try {
        return o instanceof ((h = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : h.SVGImageElement);
    } catch  {
        return !1;
    }
}
function ze(o) {
    var l, h;
    try {
        return o instanceof ((h = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : h.HTMLVideoElement);
    } catch  {
        return !1;
    }
}
function Ge(o) {
    var l, h;
    try {
        return o instanceof ((h = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : h.HTMLCanvasElement);
    } catch  {
        return !1;
    }
}
function Xe(o) {
    try {
        return o instanceof ImageBitmap || Object.prototype.toString.call(o) === "[object ImageBitmap]";
    } catch  {
        return !1;
    }
}
function qe(o) {
    try {
        return o instanceof OffscreenCanvas || Object.prototype.toString.call(o) === "[object OffscreenCanvas]";
    } catch  {
        return !1;
    }
}
function Ye(o) {
    try {
        return o instanceof VideoFrame || Object.prototype.toString.call(o) === "[object VideoFrame]";
    } catch  {
        return !1;
    }
}
function io(o) {
    try {
        return o instanceof Blob || Object.prototype.toString.call(o) === "[object Blob]";
    } catch  {
        return !1;
    }
}
function so(o) {
    try {
        return o instanceof ImageData || Object.prototype.toString.call(o) === "[object ImageData]";
    } catch  {
        return !1;
    }
}
function uo(o, l) {
    try {
        const h = new OffscreenCanvas(o, l);
        if (h.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return h;
        throw void 0;
    } catch  {
        const h = document.createElement("canvas");
        return h.width = o, h.height = l, h;
    }
}
async function Ze(o) {
    if (He(o) && !await ho(o)) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (Ne(o) && !await po(o)) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (Ye(o) && vo(o)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (ze(o) && (o.readyState === 0 || o.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (Xe(o) && mo(o)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const { width: l, height: h } = oo(o);
    if (l === 0 || h === 0) return null;
    const C = uo(l, h).getContext("2d");
    C.drawImage(o, 0, 0);
    try {
        return C.getImageData(0, 0, l, h);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function co(o) {
    let l;
    try {
        l = await createImageBitmap(o);
    } catch  {
        try {
            if (globalThis.Image) {
                l = new Image();
                let C = "";
                try {
                    C = URL.createObjectURL(o), l.src = C, await l.decode();
                } finally{
                    URL.revokeObjectURL(C);
                }
            } else return o;
        } catch  {
            throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
        }
    }
    return await Ze(l);
}
function lo(o) {
    const { width: l, height: h } = o;
    if (l === 0 || h === 0) return null;
    const f = o.getContext("2d");
    try {
        return f.getImageData(0, 0, l, h);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function fo(o) {
    if (io(o)) return await co(o);
    if (so(o)) {
        if (yo(o)) throw new DOMException("The image data has been detached.", "InvalidStateError");
        return o;
    }
    return Ge(o) || qe(o) ? lo(o) : await Ze(o);
}
async function ho(o) {
    try {
        return await o.decode(), !0;
    } catch  {
        return !1;
    }
}
async function po(o) {
    var l;
    try {
        return await ((l = o.decode) == null ? void 0 : l.call(o)), !0;
    } catch  {
        return !1;
    }
}
function vo(o) {
    return o.format === null;
}
function yo(o) {
    return o.data.buffer.byteLength === 0;
}
function mo(o) {
    return o.width === 0 && o.height === 0;
}
function We(o, l) {
    return go(o) ? new DOMException(`${l}: ${o.message}`, o.name) : wo(o) ? new o.constructor(`${l}: ${o.message}`) : new Error(`${l}: ${o}`);
}
function go(o) {
    return o instanceof DOMException || Object.prototype.toString.call(o) === "[object DOMException]";
}
function wo(o) {
    return o instanceof Error || Object.prototype.toString.call(o) === "[object Error]";
}
var pt;
class Eo {
    constructor(l = {}){
        je(this, pt);
        var h;
        try {
            const f = (h = l == null ? void 0 : l.formats) == null ? void 0 : h.filter((C)=>C !== "unknown");
            if ((f == null ? void 0 : f.length) === 0) throw new TypeError("Hint option provided, but is empty.");
            for (const C of f != null ? f : [])if (!Jt.has(C)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${C}' is not a valid enum value of type BarcodeFormat.`);
            Re(this, pt, f != null ? f : []), Ve({
                fireImmediately: !0
            }).catch(()=>{});
        } catch (f) {
            throw We(f, "Failed to construct 'BarcodeDetector'");
        }
    }
    static async getSupportedFormats() {
        return no.filter((l)=>l !== "unknown");
    }
    async detect(l) {
        try {
            const h = await fo(l);
            if (h === null) return [];
            let f;
            const C = {
                tryCode39ExtendedMode: !1,
                textMode: "Plain",
                formats: Fe(this, pt).map((O)=>Jt.get(O))
            };
            try {
                f = await ro(h, C);
            } catch (O) {
                throw console.error(O), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
            }
            return f.map((O)=>{
                const { topLeft: { x: I, y: j }, topRight: { x, y: M }, bottomLeft: { x: z, y: X }, bottomRight: { x: q, y: it } } = O.position, st = Math.min(I, x, z, q), et = Math.min(j, M, X, it), vt = Math.max(I, x, z, q), G = Math.max(j, M, X, it);
                return {
                    boundingBox: new DOMRectReadOnly(st, et, vt - st, G - et),
                    rawValue: O.text,
                    format: ao(O.format),
                    cornerPoints: [
                        {
                            x: I,
                            y: j
                        },
                        {
                            x,
                            y: M
                        },
                        {
                            x: q,
                            y: it
                        },
                        {
                            x: z,
                            y: X
                        }
                    ]
                };
            });
        } catch (h) {
            throw We(h, "Failed to execute 'detect' on 'BarcodeDetector'");
        }
    }
}
pt = new WeakMap();
;
}),
"[project]/project1/node_modules/barcode-detector/dist/es/polyfill.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/ponyfill.js [app-client] (ecmascript)");
;
;
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarcodeDetector"]);
;
}),
"[project]/project1/node_modules/barcode-detector/dist/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$polyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/polyfill.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/ponyfill.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "compactObject",
    ()=>compactObject,
    "deprecated",
    ()=>deprecated,
    "detectBrowser",
    ()=>detectBrowser,
    "disableLog",
    ()=>disableLog,
    "disableWarnings",
    ()=>disableWarnings,
    "extractVersion",
    ()=>extractVersion,
    "filterStats",
    ()=>filterStats,
    "log",
    ()=>log,
    "walkStats",
    ()=>walkStats,
    "wrapPeerConnectionEvent",
    ()=>wrapPeerConnectionEvent
]);
'use strict';
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseFloat(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) {
        return;
    }
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) {
            return nativeAddEventListener.apply(this, arguments);
        }
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) {
                    cb.handleEvent(modifiedEvent);
                } else {
                    cb(modifiedEvent);
                }
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) {
            this._eventMap[eventNameToWrap] = new Map();
        }
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
            return nativeRemoveEventListener.apply(this, arguments);
        }
        if (!this._eventMap[eventNameToWrap].has(cb)) {
            return nativeRemoveEventListener.apply(this, arguments);
        }
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) {
            delete this._eventMap[eventNameToWrap];
        }
        if (Object.keys(this._eventMap).length === 0) {
            delete this._eventMap;
        }
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get () {
            return this['_on' + eventNameToWrap];
        },
        set (cb) {
            if (this['_on' + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                delete this['_on' + eventNameToWrap];
            }
            if (cb) {
                this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
            }
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== 'boolean') {
        return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
function disableWarnings(bool) {
    if (typeof bool !== 'boolean') {
        return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
    if (typeof window === 'object') {
        if (logDisabled_) {
            return;
        }
        if (typeof console !== 'undefined' && typeof console.log === 'function') {
            console.log.apply(console, arguments);
        }
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
        return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === 'undefined' || !window1.navigator || !window1.navigator.userAgent) {
        result.browser = 'Not a browser.';
        return result;
    }
    const { navigator } = window1;
    // Prefer navigator.userAgentData.
    if (navigator.userAgentData && navigator.userAgentData.brands) {
        const chromium = navigator.userAgentData.brands.find((brand)=>{
            return brand.brand === 'Chromium';
        });
        if (chromium) {
            return {
                browser: 'chrome',
                version: parseInt(chromium.version, 10)
            };
        }
    }
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = parseInt(extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1));
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = 'chrome';
        result.version = parseInt(extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = 'safari';
        result.version = parseInt(extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1));
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && 'currentDirection' in window1.RTCRtpTransceiver.prototype;
        // Only for internal usage.
        result._safariVersion = extractVersion(navigator.userAgent, /Version\/(\d+(\.?\d+))/, 1);
    } else {
        result.browser = 'Not a supported browser.';
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
function compactObject(data) {
    if (!isObject(data)) {
        return data;
    }
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) {
            return accumulator;
        }
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) {
        return;
    }
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith('Id')) {
            walkStats(stats, stats.get(base[name]), resultSet);
        } else if (name.endsWith('Ids')) {
            base[name].forEach((id)=>{
                walkStats(stats, stats.get(id), resultSet);
            });
        }
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
    const filteredResult = new Map();
    if (track === null) {
        return filteredResult;
    }
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === 'track' && value.trackIdentifier === track.id) {
            trackStats.push(value);
        }
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
                walkStats(result, stats, filteredResult);
            }
        });
    });
    return filteredResult;
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "shimGetUserMedia",
    ()=>shimGetUserMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
'use strict';
;
const logging = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["log"];
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) {
        return;
    }
    const constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) {
            return c;
        }
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
            }
            const r = typeof c[key] === 'object' ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === 'number') {
                r.min = r.max = r.exact;
            }
            const oldname_ = function(prefix, name) {
                if (prefix) {
                    return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                }
                return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === 'number') {
                    oc[oldname_('min', key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_('max', key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_('', key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_('', key)] = r.exact;
            } else {
                [
                    'min',
                    'max'
                ].forEach((mix)=>{
                    if (r[mix] !== undefined) {
                        cc.mandatory = cc.mandatory || {};
                        cc.mandatory[oldname_(mix, key)] = r[mix];
                    }
                });
            }
        });
        if (c.advanced) {
            cc.optional = (cc.optional || []).concat(c.advanced);
        }
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) {
            return func(constraints);
        }
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === 'object') {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === 'object' ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === 'environment' || face.ideal === 'environment') {
                    matches = [
                        'back',
                        'rear'
                    ];
                } else if (face.exact === 'user' || face.ideal === 'user') {
                    matches = [
                        'front'
                    ];
                }
                if (matches) {
                    // Look for matches in label, or use last cam for back (typical).
                    return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                        devices = devices.filter((d)=>d.kind === 'videoinput');
                        let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                        if (!dev && devices.length && matches.includes('back')) {
                            dev = devices[devices.length - 1]; // more likely the back cam
                        }
                        if (dev) {
                            constraints.video.deviceId = face.exact ? {
                                exact: dev.deviceId
                            } : {
                                ideal: dev.deviceId
                            };
                        }
                        constraints.video = constraintsToChrome_(constraints.video);
                        logging('chrome: ' + JSON.stringify(constraints));
                        return func(constraints);
                    });
                }
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) {
            return e;
        }
        return {
            name: ({
                PermissionDeniedError: 'NotAllowedError',
                PermissionDismissedError: 'NotAllowedError',
                InvalidStateError: 'NotAllowedError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                MediaDeviceKillSwitchOn: 'NotAllowedError',
                TabCaptureError: 'AbortError',
                ScreenCaptureError: 'AbortError',
                DeviceCaptureError: 'AbortError'
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ': ') + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) {
                    onError(shimError_(e));
                }
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException('', 'NotFoundError');
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "fixNegotiationNeeded",
    ()=>fixNegotiationNeeded,
    "shimAddTrackRemoveTrack",
    ()=>shimAddTrackRemoveTrack,
    "shimAddTrackRemoveTrackWithNative",
    ()=>shimAddTrackRemoveTrackWithNative,
    "shimGetSendersWithDtmf",
    ()=>shimGetSendersWithDtmf,
    "shimMediaStream",
    ()=>shimMediaStream,
    "shimOnTrack",
    ()=>shimOnTrack,
    "shimPeerConnection",
    ()=>shimPeerConnection,
    "shimSenderReceiverGetStats",
    ()=>shimSenderReceiverGetStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-client] (ecmascript)");
'use strict';
;
;
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) {
                    this.removeEventListener('track', this._ontrack);
                }
                this.addEventListener('track', this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener('addtrack', (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) {
                            receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        } else {
                            receiver = {
                                track: te.track
                            };
                        }
                        const event = new Event('track');
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) {
                            receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        } else {
                            receiver = {
                                track
                            };
                        }
                        const event = new Event('track');
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener('addstream', this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else {
        // even if RTCRtpTransceiver is in window, it is only used and
        // emitted in unified-plan. Unfortunately this means we need
        // to unconditionally wrap the event.
        __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'track', (e)=>{
            if (!e.transceiver) {
                Object.defineProperty(e, 'transceiver', {
                    value: {
                        receiver: e.receiver
                    }
                });
            }
            return e;
        });
    }
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === 'audio') {
                            this._dtmf = pc.createDTMFSender(track);
                        } else {
                            this._dtmf = null;
                        }
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) {
                    this._senders.splice(idx, 1);
                }
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) {
                    this._senders.splice(this._senders.indexOf(sender), 1);
                }
            });
        };
    } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') {
                        this._dtmf = this._pc.createDTMFSender(this.track);
                    } else {
                        this._dtmf = null;
                    }
                }
                return this._dtmf;
            }
        });
    }
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
        return;
    }
    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                const senders = origGetSenders.apply(this, []);
                senders.forEach((sender)=>sender._pc = this);
                return senders;
            };
        }
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) {
            window.RTCPeerConnection.prototype.addTrack = function addTrack() {
                const sender = origAddTrack.apply(this, arguments);
                sender._pc = this;
                return sender;
            };
        }
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterStats"](result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) {
            window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
                const receivers = origGetReceivers.apply(this, []);
                receivers.forEach((receiver)=>receiver._pc = this);
                return receivers;
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'track', (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterStats"](result, receiver.track, false));
        };
    }
    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
        return;
    }
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) {
                        err = true;
                    } else {
                        sender = s;
                    }
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) {
                        err = true;
                    } else {
                        receiver = r;
                    }
                }
                return r.track === track;
            });
            if (err || sender && receiver) {
                return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
            } else if (sender) {
                return sender.getStats();
            } else if (receiver) {
                return receiver.getStats();
            }
            return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) {
            return origAddTrack.apply(this, arguments);
        }
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) {
            this._shimmedLocalStreams[stream.id] = [
                stream,
                sender
            ];
        } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
            this._shimmedLocalStreams[stream.id].push(sender);
        }
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            }
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) {
            Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
                const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
                if (idx !== -1) {
                    this._shimmedLocalStreams[streamId].splice(idx, 1);
                }
                if (this._shimmedLocalStreams[streamId].length === 1) {
                    delete this._shimmedLocalStreams[streamId];
                }
            });
        }
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) {
        return;
    }
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
        return shimAddTrackRemoveTrackWithNative(window);
    }
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            }
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) {
            // this is not fully correct but all we can manage without
            // [[associated MediaStreams]] internal slot.
            throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
        }
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) {
            throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event('negotiationneeded'));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        'createOffer',
        'createAnswer'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === 'function';
                if (isLegacyCall) {
                    return nativeMethod.apply(this, [
                        (description)=>{
                            const desc = replaceInternalStreamId(this, description);
                            args[0].apply(null, [
                                desc
                            ]);
                        },
                        (err)=>{
                            if (args[1]) {
                                args[1].apply(null, err);
                            }
                        },
                        arguments[2]
                    ]);
                }
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) {
            return origSetLocalDescription.apply(this, arguments);
        }
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === '') {
                return description;
            }
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) {
            throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
        }
        const isLocal = sender._pc === this;
        if (!isLocal) {
            throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
        }
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) {
                stream = this._streams[streamid];
            }
        });
        if (stream) {
            if (stream.getTracks().length === 1) {
                // if this is the last track of the stream, remove the stream. This
                // takes care of any shimmed _senders.
                this.removeStream(this._reverseStreams[stream.id]);
            } else {
                // relying on the same odd chrome behaviour as above.
                stream.removeTrack(sender.track);
            }
            this.dispatchEvent(new Event('negotiationneeded'));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
        // very basic support for old versions.
        window.RTCPeerConnection = window.webkitRTCPeerConnection;
    }
    if (!window.RTCPeerConnection) {
        return;
    }
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) {
        [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(method) {
            const nativeMethod = window.RTCPeerConnection.prototype[method];
            const methodObj = {
                [method] () {
                    arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                    return nativeMethod.apply(this, arguments);
                }
            };
            window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
    }
}
function fixNegotiationNeeded(window, browserDetails) {
    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'negotiationneeded', (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
            if (pc.signalingState !== 'stable') {
                return;
            }
        }
        return e;
    });
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fixNegotiationNeeded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fixNegotiationNeeded"],
    "shimAddTrackRemoveTrack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTrackRemoveTrack"],
    "shimAddTrackRemoveTrackWithNative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTrackRemoveTrackWithNative"],
    "shimGetSendersWithDtmf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimGetSendersWithDtmf"],
    "shimGetUserMedia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimGetUserMedia"],
    "shimMediaStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimMediaStream"],
    "shimOnTrack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimOnTrack"],
    "shimPeerConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimPeerConnection"],
    "shimSenderReceiverGetStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimSenderReceiverGetStats"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-client] (ecmascript)");
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "shimGetUserMedia",
    ()=>shimGetUserMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
'use strict';
;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"]('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === 'object' && typeof c.audio === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, 'mozAutoGainControl', 'autoGainControl');
                remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === 'audio' && typeof c === 'object') {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, 'autoGainControl', 'mozAutoGainControl');
                    remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "shimGetDisplayMedia",
    ()=>shimGetDisplayMedia
]);
'use strict';
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
        return;
    }
    if (!window.navigator.mediaDevices) {
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
            err.name = 'NotFoundError';
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) {
            constraints.video = {
                mediaSource: preferredMediaSource
            };
        } else {
            constraints.video.mediaSource = preferredMediaSource;
        }
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "shimAddTransceiver",
    ()=>shimAddTransceiver,
    "shimCreateAnswer",
    ()=>shimCreateAnswer,
    "shimCreateOffer",
    ()=>shimCreateOffer,
    "shimGetParameters",
    ()=>shimGetParameters,
    "shimOnTrack",
    ()=>shimOnTrack,
    "shimPeerConnection",
    ()=>shimPeerConnection,
    "shimRTCDataChannel",
    ()=>shimRTCDataChannel,
    "shimReceiverGetStats",
    ()=>shimReceiverGetStats,
    "shimRemoveStream",
    ()=>shimRemoveStream,
    "shimSenderGetStats",
    ()=>shimSenderGetStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-client] (ecmascript)");
'use strict';
;
;
;
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
        Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
        return; // probably media.peerconnection.enabled=false in about:config
    }
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
        // very basic support for old versions.
        window.RTCPeerConnection = window.mozRTCPeerConnection;
    }
    if (browserDetails.version < 53) {
        // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
        [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(method) {
            const nativeMethod = window.RTCPeerConnection.prototype[method];
            const methodObj = {
                [method] () {
                    arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                    return nativeMethod.apply(this, arguments);
                }
            };
            window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
    }
    const modernStatsTypes = {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) {
                // Shim only promise getStats with spec-hyphens in type names
                // Leave callback version alone; misc old uses of forEach before Map
                try {
                    stats.forEach((stat)=>{
                        stat.type = modernStatsTypes[stat.type] || stat.type;
                    });
                } catch (e) {
                    if (e.name !== 'TypeError') {
                        throw e;
                    }
                    // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                    stats.forEach((stat, i)=>{
                        stats.set(i, Object.assign({}, stat, {
                            type: modernStatsTypes[stat.type] || stat.type
                        }));
                    });
                }
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
        return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
        return;
    }
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
    }
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
        window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
        return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
        return;
    }
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
        window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'track', (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
        return;
    }
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"]('removeStream', 'removeTrack');
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) {
                this.removeTrack(sender);
            }
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) {
        window.RTCDataChannel = window.DataChannel;
    }
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) {
        window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
            this.setParametersPromises = [];
            // WebIDL input coercion and validation
            let sendEncodings = arguments[1] && arguments[1].sendEncodings;
            if (sendEncodings === undefined) {
                sendEncodings = [];
            }
            sendEncodings = [
                ...sendEncodings
            ];
            const shouldPerformCheck = sendEncodings.length > 0;
            if (shouldPerformCheck) {
                // If sendEncodings params are provided, validate grammar
                sendEncodings.forEach((encodingParam)=>{
                    if ('rid' in encodingParam) {
                        const ridRegex = /^[a-z0-9]{0,16}$/i;
                        if (!ridRegex.test(encodingParam.rid)) {
                            throw new TypeError('Invalid RID value provided.');
                        }
                    }
                    if ('scaleResolutionDownBy' in encodingParam) {
                        if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                            throw new RangeError('scale_resolution_down_by must be >= 1.0');
                        }
                    }
                    if ('maxFramerate' in encodingParam) {
                        if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                            throw new RangeError('max_framerate must be >= 0.0');
                        }
                    }
                });
            }
            const transceiver = origAddTransceiver.apply(this, arguments);
            if (shouldPerformCheck) {
                // Check if the init options were applied. If not we do this in an
                // asynchronous way and save the promise reference in a global object.
                // This is an ugly hack, but at the same time is way more robust than
                // checking the sender parameters before and after the createOffer
                // Also note that after the createoffer we are not 100% sure that
                // the params were asynchronously applied so we might miss the
                // opportunity to recreate offer.
                const { sender } = transceiver;
                const params = sender.getParameters();
                if (!('encodings' in params) || params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                    params.encodings = sendEncodings;
                    sender.sendEncodings = sendEncodings;
                    this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                        delete sender.sendEncodings;
                    }).catch(()=>{
                        delete sender.sendEncodings;
                    }));
                }
            }
            return transceiver;
        };
    }
}
function shimGetParameters(window) {
    if (!(typeof window === 'object' && window.RTCRtpSender)) {
        return;
    }
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) {
        window.RTCRtpSender.prototype.getParameters = function getParameters() {
            const params = origGetParameters.apply(this, arguments);
            if (!('encodings' in params)) {
                params.encodings = [].concat(this.sendEncodings || [
                    {}
                ]);
            }
            return params;
        };
    }
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) {
            return Promise.all(this.setParametersPromises).then(()=>{
                return origCreateOffer.apply(this, arguments);
            }).finally(()=>{
                this.setParametersPromises = [];
            });
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) {
            return Promise.all(this.setParametersPromises).then(()=>{
                return origCreateAnswer.apply(this, arguments);
            }).finally(()=>{
                this.setParametersPromises = [];
            });
        }
        return origCreateAnswer.apply(this, arguments);
    };
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shimAddTransceiver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTransceiver"],
    "shimCreateAnswer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimCreateAnswer"],
    "shimCreateOffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimCreateOffer"],
    "shimGetDisplayMedia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimGetDisplayMedia"],
    "shimGetParameters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimGetParameters"],
    "shimGetUserMedia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimGetUserMedia"],
    "shimOnTrack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimOnTrack"],
    "shimPeerConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimPeerConnection"],
    "shimRTCDataChannel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimRTCDataChannel"],
    "shimReceiverGetStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimReceiverGetStats"],
    "shimRemoveStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimRemoveStream"],
    "shimSenderGetStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimSenderGetStats"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-client] (ecmascript)");
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/safari/safari_shim.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ __turbopack_context__.s([
    "shimAudioContext",
    ()=>shimAudioContext,
    "shimCallbacksAPI",
    ()=>shimCallbacksAPI,
    "shimConstraints",
    ()=>shimConstraints,
    "shimCreateOfferLegacy",
    ()=>shimCreateOfferLegacy,
    "shimGetUserMedia",
    ()=>shimGetUserMedia,
    "shimLocalStreamsAPI",
    ()=>shimLocalStreamsAPI,
    "shimRTCIceServerUrls",
    ()=>shimRTCIceServerUrls,
    "shimRemoteStreamsAPI",
    ()=>shimRemoteStreamsAPI,
    "shimTrackEventTransceiver",
    ()=>shimTrackEventTransceiver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
'use strict';
;
function shimLocalStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            return this._localStreams;
        };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            if (!this._localStreams.includes(stream)) {
                this._localStreams.push(stream);
            }
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) {
                streams.forEach((stream)=>{
                    if (!this._localStreams) {
                        this._localStreams = [
                            stream
                        ];
                    } else if (!this._localStreams.includes(stream)) {
                        this._localStreams.push(stream);
                    }
                });
            }
            return _addTrack.apply(this, arguments);
        };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            const index = this._localStreams.indexOf(stream);
            if (index === -1) {
                return;
            }
            this._localStreams.splice(index, 1);
            const tracks = stream.getTracks();
            this.getSenders().forEach((sender)=>{
                if (tracks.includes(sender.track)) {
                    this.removeTrack(sender);
                }
            });
        };
    }
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
            return this._remoteStreams ? this._remoteStreams : [];
        };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener('addstream', this._onaddstream);
                    this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) {
                            this._remoteStreams = [];
                        }
                        if (this._remoteStreams.includes(stream)) {
                            return;
                        }
                        this._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) {
                this.addEventListener('track', this._onaddstreampoly = function(e) {
                    e.streams.forEach((stream)=>{
                        if (!pc._remoteStreams) {
                            pc._remoteStreams = [];
                        }
                        if (pc._remoteStreams.indexOf(stream) >= 0) {
                            return;
                        }
                        pc._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        pc.dispatchEvent(event);
                    });
                });
            }
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
            navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
        }).bind(navigator);
    }
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) {
        return Object.assign({}, constraints, {
            video: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compactObject"](constraints.video)
        });
    }
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) {
        return;
    }
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (server.urls === undefined && server.url) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                }
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in OrigPeerConnection) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get () {
                return OrigPeerConnection.generateCertificate;
            }
        });
    }
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
        Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            }
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'audio');
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                    if (audioTransceiver.setDirection) {
                        audioTransceiver.setDirection('sendonly');
                    } else {
                        audioTransceiver.direction = 'sendonly';
                    }
                } else if (audioTransceiver.direction === 'recvonly') {
                    if (audioTransceiver.setDirection) {
                        audioTransceiver.setDirection('inactive');
                    } else {
                        audioTransceiver.direction = 'inactive';
                    }
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                this.addTransceiver('audio', {
                    direction: 'recvonly'
                });
            }
            if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            }
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'video');
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                    if (videoTransceiver.setDirection) {
                        videoTransceiver.setDirection('sendonly');
                    } else {
                        videoTransceiver.direction = 'sendonly';
                    }
                } else if (videoTransceiver.direction === 'recvonly') {
                    if (videoTransceiver.setDirection) {
                        videoTransceiver.setDirection('inactive');
                    } else {
                        videoTransceiver.direction = 'inactive';
                    }
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                this.addTransceiver('video', {
                    direction: 'recvonly'
                });
            }
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== 'object' || window.AudioContext) {
        return;
    }
    window.AudioContext = window.webkitAudioContext;
}
}),
"[project]/project1/node_modules/sdp/sdp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-env node */ // SDP helpers.
const SDPUtils = {};
// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substring(2, 12);
};
// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();
// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
    return blob.trim().split('\n').map((line)=>line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
    const parts = blob.split('\nm=');
    return parts.map((part, index)=>(index > 0 ? 'm=' + part : part).trim() + '\r\n');
};
// Returns the session description.
SDPUtils.getDescription = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
};
// Returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
};
// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter((line)=>line.indexOf(prefix) === 0);
};
// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
// Input can be prefixed with a=.
SDPUtils.parseCandidate = function(line) {
    let parts;
    // Parse both variants.
    if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
    } else {
        parts = line.substring(10).split(' ');
    }
    const candidate = {
        foundation: parts[0],
        component: {
            1: 'rtp',
            2: 'rtcp'
        }[parts[1]] || parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
    };
    for(let i = 8; i < parts.length; i += 2){
        switch(parts[i]){
            case 'raddr':
                candidate.relatedAddress = parts[i + 1];
                break;
            case 'rport':
                candidate.relatedPort = parseInt(parts[i + 1], 10);
                break;
            case 'tcptype':
                candidate.tcpType = parts[i + 1];
                break;
            case 'ufrag':
                candidate.ufrag = parts[i + 1]; // for backward compatibility.
                candidate.usernameFragment = parts[i + 1];
                break;
            default:
                if (candidate[parts[i]] === undefined) {
                    candidate[parts[i]] = parts[i + 1];
                }
                break;
        }
    }
    return candidate;
};
// Translates a candidate object into SDP candidate attribute.
// This does not include the a= prefix!
SDPUtils.writeCandidate = function(candidate) {
    const sdp = [];
    sdp.push(candidate.foundation);
    const component = candidate.component;
    if (component === 'rtp') {
        sdp.push(1);
    } else if (component === 'rtcp') {
        sdp.push(2);
    } else {
        sdp.push(component);
    }
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);
    const type = candidate.type;
    sdp.push('typ');
    sdp.push(type);
    if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress);
        sdp.push('rport');
        sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push('ufrag');
        sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return 'candidate:' + sdp.join(' ');
};
// Parses an ice-options line, returns an array of option tags.
// Sample input:
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
    return line.substring(14).split(' ');
};
// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
    let parts = line.substring(9).split(' ');
    const parsed = {
        payloadType: parseInt(parts.shift(), 10)
    };
    parts = parts[0].split('/');
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
};
// Generates a rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
    }
    const channels = codec.channels || codec.numChannels || 1;
    return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
};
// Parses a extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1],
        attributes: parts.slice(2).join(' ')
    };
};
// Generates an extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
    return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + (headerExtension.attributes ? ' ' + headerExtension.attributes : '') + '\r\n';
};
// Parses a fmtp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
// Non-key-value such as telephone-events `0-15` get parsed as
// {`0-15`:undefined}
SDPUtils.parseFmtp = function(line) {
    const parsed = {};
    let kv;
    const parts = line.substring(line.indexOf(' ') + 1).split(';');
    for(let j = 0; j < parts.length; j++){
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
};
// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
    let line = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
    }
    if (codec.parameters && Object.keys(codec.parameters).length) {
        const params = [];
        Object.keys(codec.parameters).forEach((param)=>{
            if (codec.parameters[param] !== undefined) {
                params.push(param + '=' + codec.parameters[param]);
            } else {
                params.push(param);
            }
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
    }
    return line;
};
// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
    const parts = line.substring(line.indexOf(' ') + 1).split(' ');
    return {
        type: parts.shift(),
        parameter: parts.join(' ')
    };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
    let lines = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
    }
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach((fb)=>{
            lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
        });
    }
    return lines;
};
// Parses a RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
    const sp = line.indexOf(' ');
    const parts = {
        ssrc: parseInt(line.substring(7, sp), 10)
    };
    const colon = line.indexOf(':', sp);
    if (colon > -1) {
        parts.attribute = line.substring(sp + 1, colon);
        parts.value = line.substring(colon + 1);
    } else {
        parts.attribute = line.substring(sp + 1);
    }
    return parts;
};
// Parse a ssrc-group line (see RFC 5576). Sample input:
// a=ssrc-group:semantics 12 34
SDPUtils.parseSsrcGroup = function(line) {
    const parts = line.substring(13).split(' ');
    return {
        semantics: parts.shift(),
        ssrcs: parts.map((ssrc)=>parseInt(ssrc, 10))
    };
};
// Extracts the MID (RFC 5888) from a media section.
// Returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
    const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
    if (mid) {
        return mid.substring(6);
    }
};
// Parses a fingerprint line for DTLS-SRTP.
SDPUtils.parseFingerprint = function(line) {
    const parts = line.substring(14).split(' ');
    return {
        algorithm: parts[0].toLowerCase(),
        value: parts[1].toUpperCase()
    };
};
// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
    // Note: a=setup line is ignored since we use the 'auto' role in Edge.
    return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
};
// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
    let sdp = 'a=setup:' + setupType + '\r\n';
    params.fingerprints.forEach((fp)=>{
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
    });
    return sdp;
};
// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3)
    };
};
SDPUtils.writeCryptoLine = function(parameters) {
    return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (typeof parameters.keyParams === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
};
// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
    if (keyParams.indexOf('inline:') !== 0) {
        return null;
    }
    const parts = keyParams.substring(7).split('|');
    return {
        keyMethod: 'inline',
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
    };
};
SDPUtils.writeCryptoKeyParams = function(keyParams) {
    return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
};
// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
    return lines.map(SDPUtils.parseCryptoLine);
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
    const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];
    if (!(ufrag && pwd)) {
        return null;
    }
    return {
        usernameFragment: ufrag.substring(12),
        password: pwd.substring(10)
    };
};
// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
    let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
    if (params.iceLite) {
        sdp += 'a=ice-lite\r\n';
    }
    return sdp;
};
// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
    const description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
    };
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    description.profile = mline[2];
    for(let i = 3; i < mline.length; i++){
        const pt = mline[i];
        const rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
            const codec = SDPUtils.parseRtpMap(rtpmapline);
            const fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch(codec.name.toUpperCase()){
                case 'RED':
                case 'ULPFEC':
                    description.fecMechanisms.push(codec.name.toUpperCase());
                    break;
                default:
                    break;
            }
        }
    }
    SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach((line)=>{
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:* ').map(SDPUtils.parseRtcpFb);
    description.codecs.forEach((codec)=>{
        wildcardRtcpFb.forEach((fb)=>{
            const duplicate = codec.rtcpFeedback.find((existingFeedback)=>{
                return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter;
            });
            if (!duplicate) {
                codec.rtcpFeedback.push(fb);
            }
        });
    });
    // FIXME: parse rtcp.
    return description;
};
// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
    let sdp = '';
    // Build the mline.
    sdp += 'm=' + kind + ' ';
    sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
    sdp += ' ' + (caps.profile || 'UDP/TLS/RTP/SAVPF') + ' ';
    sdp += caps.codecs.map((codec)=>{
        if (codec.preferredPayloadType !== undefined) {
            return codec.preferredPayloadType;
        }
        return codec.payloadType;
    }).join(' ') + '\r\n';
    sdp += 'c=IN IP4 0.0.0.0\r\n';
    sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach((codec)=>{
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
    });
    let maxptime = 0;
    caps.codecs.forEach((codec)=>{
        if (codec.maxptime > maxptime) {
            maxptime = codec.maxptime;
        }
    });
    if (maxptime > 0) {
        sdp += 'a=maxptime:' + maxptime + '\r\n';
    }
    if (caps.headerExtensions) {
        caps.headerExtensions.forEach((extension)=>{
            sdp += SDPUtils.writeExtmap(extension);
        });
    }
    // FIXME: write fecMechanisms.
    return sdp;
};
// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    const encodingParameters = [];
    const description = SDPUtils.parseRtpParameters(mediaSection);
    const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
    const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
    // filter a=ssrc:... cname:, ignore PlanB-msid
    const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((parts)=>parts.attribute === 'cname');
    const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    let secondarySsrc;
    const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map((line)=>{
        const parts = line.substring(17).split(' ');
        return parts.map((part)=>parseInt(part, 10));
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
        secondarySsrc = flows[0][1];
    }
    description.codecs.forEach((codec)=>{
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            let encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) {
                encParam.rtx = {
                    ssrc: secondarySsrc
                };
            }
            encodingParameters.push(encParam);
            if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                };
                encodingParameters.push(encParam);
            }
        }
    });
    if (encodingParameters.length === 0 && primarySsrc) {
        encodingParameters.push({
            ssrc: primarySsrc
        });
    }
    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
    if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) {
            bandwidth = parseInt(bandwidth[0].substring(7), 10);
        } else if (bandwidth[0].indexOf('b=AS:') === 0) {
            // use formula from JSEP to convert b=AS to TIAS value.
            bandwidth = parseInt(bandwidth[0].substring(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
        } else {
            bandwidth = undefined;
        }
        encodingParameters.forEach((params)=>{
            params.maxBitrate = bandwidth;
        });
    }
    return encodingParameters;
};
// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
    const rtcpParameters = {};
    // Gets the first SSRC. Note that with RTX there might be multiple
    // SSRCs.
    const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((obj)=>obj.attribute === 'cname')[0];
    if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
};
SDPUtils.writeRtcpParameters = function(rtcpParameters) {
    let sdp = '';
    if (rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
    }
    if (rtcpParameters.mux) {
        sdp += 'a=rtcp-mux\r\n';
    }
    if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
        sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n';
    }
    return sdp;
};
// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
    let parts;
    const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
    if (spec.length === 1) {
        parts = spec[0].substring(7).split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
    const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((msidParts)=>msidParts.attribute === 'msid');
    if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
};
// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
    const mline = SDPUtils.parseMLine(mediaSection);
    const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
    let maxMessageSize;
    if (maxSizeLine.length > 0) {
        maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
    }
    if (isNaN(maxMessageSize)) {
        maxMessageSize = 65536;
    }
    const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
    if (sctpPort.length > 0) {
        return {
            port: parseInt(sctpPort[0].substring(12), 10),
            protocol: mline.fmt,
            maxMessageSize
        };
    }
    const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
    if (sctpMapLines.length > 0) {
        const parts = sctpMapLines[0].substring(10).split(' ');
        return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize
        };
    }
};
// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
    let output = [];
    if (media.protocol !== 'DTLS/SCTP') {
        output = [
            'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctp-port:' + sctp.port + '\r\n'
        ];
    } else {
        output = [
            'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
        ];
    }
    if (sctp.maxMessageSize !== undefined) {
        output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
    }
    return output.join('');
};
// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 22);
};
// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    let sessionId;
    const version = sessVer !== undefined ? sessVer : 2;
    if (sessId) {
        sessionId = sessId;
    } else {
        sessionId = SDPUtils.generateSessionId();
    }
    const user = sessUser || 'thisisadapterortc';
    // FIXME: sess-id should be an NTP timestamp.
    return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};
// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    const lines = SDPUtils.splitLines(mediaSection);
    for(let i = 0; i < lines.length; i++){
        switch(lines[i]){
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
                return lines[i].substring(2);
            default:
        }
    }
    if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
    }
    return 'sendrecv';
};
SDPUtils.getKind = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    return mline[0].substring(2);
};
SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(' ', 2)[1] === '0';
};
SDPUtils.parseMLine = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const parts = lines[0].substring(2).split(' ');
    return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(' ')
    };
};
SDPUtils.parseOLine = function(mediaSection) {
    const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
    const parts = line.substring(2).split(' ');
    return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
    };
};
// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== 'string' || blob.length === 0) {
        return false;
    }
    const lines = SDPUtils.splitLines(blob);
    for(let i = 0; i < lines.length; i++){
        if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
            return false;
        }
    // TODO: check the modifier a bit more.
    }
    return true;
};
// Expose public methods.
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = SDPUtils;
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/common_shim.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "removeExtmapAllowMixed",
    ()=>removeExtmapAllowMixed,
    "shimAddIceCandidateNullOrEmpty",
    ()=>shimAddIceCandidateNullOrEmpty,
    "shimConnectionState",
    ()=>shimConnectionState,
    "shimMaxMessageSize",
    ()=>shimMaxMessageSize,
    "shimParameterlessSetLocalDescription",
    ()=>shimParameterlessSetLocalDescription,
    "shimRTCIceCandidate",
    ()=>shimRTCIceCandidate,
    "shimRTCIceCandidateRelayProtocol",
    ()=>shimRTCIceCandidateRelayProtocol,
    "shimSendThrowTypeError",
    ()=>shimSendThrowTypeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/sdp/sdp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
'use strict';
;
;
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
        return;
    }
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substring(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parseCandidate(args.candidate);
            for(const key in parsedCandidate){
                if (!(key in nativeCandidate)) {
                    Object.defineProperty(nativeCandidate, key, {
                        value: parsedCandidate[key]
                    });
                }
            }
            // Override serializer to not serialize the extra attributes.
            nativeCandidate.toJSON = function toJSON() {
                return {
                    candidate: nativeCandidate.candidate,
                    sdpMid: nativeCandidate.sdpMid,
                    sdpMLineIndex: nativeCandidate.sdpMLineIndex,
                    usernameFragment: nativeCandidate.usernameFragment
                };
            };
            return nativeCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'icecandidate', (e)=>{
        if (e.candidate) {
            Object.defineProperty(e, 'candidate', {
                value: new window.RTCIceCandidate(e.candidate),
                writable: 'false'
            });
        }
        return e;
    });
}
function shimRTCIceCandidateRelayProtocol(window) {
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'relayProtocol' in window.RTCIceCandidate.prototype) {
        return;
    }
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'icecandidate', (e)=>{
        if (e.candidate) {
            const parsedCandidate = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parseCandidate(e.candidate.candidate);
            if (parsedCandidate.type === 'relay') {
                // This is a libwebrtc-specific mapping of local type preference
                // to relayProtocol.
                e.candidate.relayProtocol = ({
                    0: 'tls',
                    1: 'tcp',
                    2: 'udp'
                })[parsedCandidate.priority >> 24];
            }
        }
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) {
        return;
    }
    if (!('sctp' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
            get () {
                return typeof this._sctp === 'undefined' ? null : this._sctp;
            }
        });
    }
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) {
            return false;
        }
        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parseMLine(mediaSection);
            return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) {
            return -1;
        }
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === 'firefox') {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) {
                    // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                    // fragmentation.
                    canSendMaxMessageSize = 16384;
                } else {
                    // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                    // messages. Thus, supporting ~2 GiB when sending.
                    canSendMaxMessageSize = 2147483637;
                }
            } else if (browserDetails.version < 60) {
                // Currently, all FF >= 57 will reset the remote maximum message size
                // to the default value when a data channel is created at a later
                // stage. :(
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            } else {
                // FF >= 60 supports sending ~2 GiB
                canSendMaxMessageSize = 2147483637;
            }
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
            maxMessageSize = 65535;
        }
        const match = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].matchPrefix(description.sdp, 'a=max-message-size:');
        if (match.length > 0) {
            maxMessageSize = parseInt(match[0].substring(19), 10);
        } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
            // If the maximum message size is not present in the remote SDP and
            // both local and remote are Firefox, the remote peer can receive
            // ~2 GiB.
            maxMessageSize = 2147483637;
        }
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
            const { sdpSemantics } = this.getConfiguration();
            if (sdpSemantics === 'plan-b') {
                Object.defineProperty(this, 'sctp', {
                    get () {
                        return typeof this._sctp === 'undefined' ? null : this._sctp;
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) {
                maxMessageSize = Number.POSITIVE_INFINITY;
            } else if (canSendMMS === 0 || remoteMMS === 0) {
                maxMessageSize = Math.max(canSendMMS, remoteMMS);
            } else {
                maxMessageSize = Math.min(canSendMMS, remoteMMS);
            }
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, 'maxMessageSize', {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
        return;
    }
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
                throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
            }
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"](window, 'datachannel', (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
        return;
    }
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, 'connectionState', {
        get () {
            return ({
                completed: 'connected',
                checking: 'connecting'
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'onconnectionstatechange', {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) {
                this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
            }
        },
        enumerable: true,
        configurable: true
    });
    [
        'setLocalDescription',
        'setRemoteDescription'
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event('connectionstatechange', e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) {
        return;
    }
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
        return;
    }
    if (browserDetails.browser === 'safari' && browserDetails._safariVersion >= 13.1) {
        return;
    }
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
            const sdp = desc.sdp.split('\n').filter((line)=>{
                return line.trim() !== 'a=extmap-allow-mixed';
            }).join('\n');
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) {
                arguments[0] = new window.RTCSessionDescription({
                    type: desc.type,
                    sdp
                });
            } else {
                desc.sdp = sdp;
            }
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
        return;
    }
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
        return;
    }
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) {
                arguments[1].apply(null);
            }
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') {
            return Promise.resolve();
        }
        return nativeAddIceCandidate.apply(this, arguments);
    };
}
function shimParameterlessSetLocalDescription(window, browserDetails) {
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
        return;
    }
    const nativeSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) {
        return;
    }
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        let desc = arguments[0] || {};
        if (typeof desc !== 'object' || desc.type && desc.sdp) {
            return nativeSetLocalDescription.apply(this, arguments);
        }
        // The remaining steps should technically happen when SLD comes off the
        // RTCPeerConnection's operations chain (not ahead of going on it), but
        // this is too difficult to shim. Instead, this shim only covers the
        // common case where the operations chain is empty. This is imperfect, but
        // should cover many cases. Rationale: Even if we can't reduce the glare
        // window to zero on imperfect implementations, there's value in tapping
        // into the perfect negotiation pattern that several browsers support.
        desc = {
            type: desc.type,
            sdp: desc.sdp
        };
        if (!desc.type) {
            switch(this.signalingState){
                case 'stable':
                case 'have-local-offer':
                case 'have-remote-pranswer':
                    desc.type = 'offer';
                    break;
                default:
                    desc.type = 'answer';
                    break;
            }
        }
        if (desc.sdp || desc.type !== 'offer' && desc.type !== 'answer') {
            return nativeSetLocalDescription.apply(this, [
                desc
            ]);
        }
        const func = desc.type === 'offer' ? this.createOffer : this.createAnswer;
        return func.apply(this).then((d)=>nativeSetLocalDescription.apply(this, [
                d
            ]));
    };
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/adapter_factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ __turbopack_context__.s([
    "adapterFactory",
    ()=>adapterFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/utils.js [app-client] (ecmascript)");
// Browser shims.
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/safari/safari_shim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/common_shim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/sdp/sdp.js [app-client] (ecmascript)");
;
;
;
;
;
;
function adapterFactory({ window } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
}) {
    // Utils.
    const logging = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["log"];
    const browserDetails = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBrowser"](window);
    const adapter = {
        browserDetails,
        commonShim: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
        extractVersion: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVersion"],
        disableLog: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableLog"],
        disableWarnings: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableWarnings"],
        // Expose sdp as a convenience. For production apps include directly.
        sdp: __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case 'chrome':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ || !__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimPeerConnection || !options.shimChrome) {
                logging('Chrome shim is not included in this adapter release.');
                return adapter;
            }
            if (browserDetails.version === null) {
                logging('Chrome shim can not determine version, not shimming.');
                return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
            // Must be called before shimPeerConnection.
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimParameterlessSetLocalDescription"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimMediaStream(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimPeerConnection(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimOnTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimAddTrackRemoveTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimGetSendersWithDtmf(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimSenderReceiverGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.fixNegotiationNeeded(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimRTCIceCandidateRelayProtocol"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimConnectionState"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimMaxMessageSize"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeExtmapAllowMixed"](window, browserDetails);
            break;
        case 'firefox':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ || !__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimPeerConnection || !options.shimFirefox) {
                logging('Firefox shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
            // Must be called before shimPeerConnection.
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimParameterlessSetLocalDescription"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimPeerConnection(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimOnTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimRemoveStream(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimSenderGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimReceiverGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimRTCDataChannel(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimAddTransceiver(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimGetParameters(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimCreateOffer(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimCreateAnswer(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimConnectionState"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimMaxMessageSize"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"](window, browserDetails);
            break;
        case 'safari':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ || !options.shimSafari) {
                logging('Safari shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
            // Must be called before shimCallbackAPI.
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimParameterlessSetLocalDescription"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimRTCIceServerUrls(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimCreateOfferLegacy(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimCallbacksAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimLocalStreamsAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimRemoteStreamsAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimTrackEventTransceiver(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.shimAudioContext(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimRTCIceCandidateRelayProtocol"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimMaxMessageSize"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"](window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeExtmapAllowMixed"](window, browserDetails);
            break;
        default:
            logging('Unsupported browser!');
            break;
    }
    return adapter;
}
}),
"[project]/project1/node_modules/webrtc-adapter/src/js/adapter_core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$adapter_factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/adapter_factory.js [app-client] (ecmascript)");
'use strict';
;
const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$adapter_factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adapterFactory"])({
    window: typeof window === 'undefined' ? undefined : window
});
const __TURBOPACK__default__export__ = adapter;
}),
"[project]/project1/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scanner",
    ()=>u,
    "boundingBox",
    ()=>E,
    "centerText",
    ()=>h,
    "outline",
    ()=>c,
    "useDevices",
    ()=>K
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/ponyfill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$adapter_core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/webrtc-adapter/src/js/adapter_core.js [app-client] (ecmascript)");
;
;
;
;
;
const B = {
    finder: !0,
    torch: !0,
    tracker: void 0,
    onOff: !1,
    zoom: !1
}, r = {
    facingMode: "environment",
    width: {
        min: 640,
        ideal: 720,
        max: 1920
    },
    height: {
        min: 640,
        ideal: 720,
        max: 1080
    }
}, s = {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    aspectRatio: "1/1"
}, C = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden"
};
function c(A, o) {
    for (const g of A){
        const [A, ...i] = g.cornerPoints;
        o.lineWidth = 2, o.strokeStyle = "yellow", o.beginPath(), o.moveTo(A.x, A.y);
        for (const { x: A, y: g } of i)o.lineTo(A, g);
        o.lineTo(A.x, A.y), o.closePath(), o.stroke();
    }
}
function E(A, o) {
    for (const g of A){
        const { boundingBox: { x: A, y: i, width: t, height: e } } = g;
        o.lineWidth = 2, o.strokeStyle = "yellow", o.strokeRect(A, i, t, e);
    }
}
function h(A, o) {
    A.forEach((A)=>{
        const { boundingBox: g, rawValue: i } = A, t = g.x + g.width / 2, e = g.y + g.height / 2, w = Math.max(12, 50 * g.width / o.canvas.width), n = w;
        let a;
        o.font = `${w}px sans-serif`, o.textAlign = "left";
        try {
            a = JSON.stringify(JSON.parse(i), null, 2);
        } catch  {
            a = i;
        }
        const B = a.split("\n"), r = Math.max(...B.map((A)=>o.measureText(A).width)), s = B.length * n, C = t - r / 2 - 10, c = e - s / 2 - 10, E = r + 20, h = s + 10;
        o.beginPath(), o.moveTo(C + 8, c), o.lineTo(C + E - 8, c), o.quadraticCurveTo(C + E, c, C + E, c + 8), o.lineTo(C + E, c + h - 8), o.quadraticCurveTo(C + E, c + h, C + E - 8, c + h), o.lineTo(C + 8, c + h), o.quadraticCurveTo(C, c + h, C, c + h - 8), o.lineTo(C, c + 8), o.quadraticCurveTo(C, c, C + 8, c), o.closePath(), o.fillStyle = "rgba(255, 255, 0, 0.9)", o.fill(), B.forEach((A, g)=>{
            const i = e + g * n - (B.length - 1) * n / 2;
            let w = t - r / 2, a = 0;
            const s = [
                ...A.matchAll(/"([^"]+)":/g)
            ], C = [
                ...A.matchAll(/:\s*("[^"]*"|\d+|true|false|null)/g)
            ];
            s.forEach((g, t)=>{
                const e = g[0].replace(":", ""), n = A.substring(a, g.index);
                if (o.fillStyle = "black", o.fillText(n, w, i), w += o.measureText(n).width, o.fillStyle = "blue", o.fillText(e, w, i), w += o.measureText(e).width, a = g.index + e.length, o.fillStyle = "black", o.fillText(": ", w, i), w += o.measureText(": ").width, t < C.length) {
                    const g = C[t], e = A.substring(a, g.index);
                    o.fillStyle = "black", o.fillText(e, w, i), w += o.measureText(e).width;
                    const n = g[0].match(/:\s*(.*)/)?.[1] ?? "";
                    o.fillStyle = "green", o.fillText(n, w, i), w += o.measureText(n).width, a = g.index + g[0].length;
                }
            }), o.fillStyle = "black";
            const c = A.substring(a);
            o.fillText(c, w, i);
        });
    });
}
var q = (A)=>A instanceof Date, M = (A)=>null == A;
const l = (A)=>"object" == typeof A;
var I = (A)=>!M(A) && !Array.isArray(A) && l(A) && !q(A), G = (A)=>M(A) || !l(A);
function Y(A, o) {
    if (G(A) || G(o)) return A === o;
    if (q(A) && q(o)) return A.getTime() === o.getTime();
    const g = A, i = o, t = Object.keys(g), e = Object.keys(i);
    if (t.length !== e.length) return !1;
    for (const A of t){
        const o = g[A];
        if (!e.includes(A)) return !1;
        if ("ref" !== A) {
            const g = i[A];
            if (q(o) && q(g) || I(o) && I(g) || Array.isArray(o) && Array.isArray(g) ? !Y(o, g) : o !== g) return !1;
        }
    }
    return !0;
}
function D(A) {
    const { onClick: i, disabled: t, className: e } = A, w = {
        cursor: t ? "default" : "pointer",
        stroke: t ? "grey" : "yellow",
        strokeLineJoin: "round",
        strokeLineCap: "round",
        strokeWidth: 1.5,
        ...A.style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: t ? void 0 : i,
        className: e,
        style: w,
        width: "28px",
        height: "28px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Camera Off"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M3 3L6.00007 6.00007M21 21L19.8455 19.8221M9.74194 4.06811C9.83646 4.04279 9.93334 4.02428 10.0319 4.01299C10.1453 4 10.2683 4 10.5141 4H13.5327C13.7786 4 13.9015 4 14.015 4.01299C14.6068 4.08078 15.1375 4.40882 15.4628 4.90782C15.5252 5.00345 15.5802 5.11345 15.6901 5.33333C15.7451 5.44329 15.7726 5.49827 15.8037 5.54609C15.9664 5.79559 16.2318 5.95961 16.5277 5.9935C16.5844 6 16.6459 6 16.7688 6H17.8234C18.9435 6 19.5036 6 19.9314 6.21799C20.3077 6.40973 20.6137 6.71569 20.8055 7.09202C21.0234 7.51984 21.0234 8.0799 21.0234 9.2V15.3496M19.8455 19.8221C19.4278 20 18.8702 20 17.8234 20H6.22344C5.10333 20 4.54328 20 4.11546 19.782C3.73913 19.5903 3.43317 19.2843 3.24142 18.908C3.02344 18.4802 3.02344 17.9201 3.02344 16.8V9.2C3.02344 8.0799 3.02344 7.51984 3.24142 7.09202C3.43317 6.71569 3.73913 6.40973 4.11546 6.21799C4.51385 6.015 5.0269 6.00103 6.00007 6.00007M19.8455 19.8221L14.5619 14.5619M14.5619 14.5619C14.0349 15.4243 13.0847 16 12 16C10.3431 16 9 14.6569 9 13C9 11.9153 9.57566 10.9651 10.4381 10.4381M14.5619 14.5619L10.4381 10.4381M10.4381 10.4381L6.00007 6.00007"
            })
        ]
    });
}
function F(A) {
    const { onClick: i, disabled: t, className: e } = A, w = {
        cursor: t ? "default" : "pointer",
        stroke: t ? "grey" : "yellow",
        strokeLineJoin: "round",
        strokeLineCap: "round",
        strokeWidth: 1.5,
        ...A.style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: t ? void 0 : i,
        className: e,
        style: w,
        width: "28px",
        height: "28px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Camera On"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
            })
        ]
    });
}
function T(A) {
    const { scanning: o, startScanning: i, stopScanning: e } = A, [w, n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    function a() {
        n(!0), o ? e() : i(), setTimeout(()=>n(!1), 1e3);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            bottom: 85,
            right: 8,
            position: "absolute",
            zIndex: 2,
            cursor: w ? "default" : "pointer"
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(o ? D : F, {
            disabled: w,
            onClick: a
        })
    });
}
function m(A) {
    const { onClick: i, className: t, style: e } = A;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: i,
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        className: t,
        style: e,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Torch Off"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                strokeWidth: .2,
                stroke: "yellow",
                fill: "yellow",
                d: "M14.516 15.158l.714.714-4.595 6.14-.75-.364L12.337 13H6.978L8.22 8.861l.803.803L8.322 12h3.036l1.793 1.792-1.475 5.16zm5.984 4.05L4.793 3.5l.707-.707 3.492 3.492L10.278 2h7.972l-5.025 7h7.149l-3.71 4.957 4.543 4.543zM12.707 10l3.243 3.243L18.376 10zM9.795 7.088l2.079 2.079L16.3 3h-5.278z"
            })
        ]
    });
}
function V(A) {
    const { onClick: i, className: t, style: e } = A;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: i,
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        className: t,
        style: e,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Torch On"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                strokeWidth: .2,
                stroke: "yellow",
                fill: "yellow",
                d: "M13.225 9l5.025-7h-7.972l-3.3 11h5.359l-2.452 8.648.75.364L20.374 9zm.438 3H8.322l2.7-9H16.3l-5.025 7h7.101l-6.7 8.953z"
            })
        ]
    });
}
function Q(A) {
    const { status: o, scanning: i, torchToggle: t } = A;
    function e(A) {
        t(A);
    }
    return i && t ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            bottom: 35,
            right: 8,
            position: "absolute",
            zIndex: 2,
            cursor: "pointer"
        },
        children: o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(m, {
            onClick: ()=>e(!1)
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(V, {
            onClick: ()=>e(!0)
        })
    }) : null;
}
function R(A) {
    const { onClick: i, className: t, disabled: e = !1 } = A, w = {
        cursor: e ? "default" : "pointer",
        stroke: e ? "grey" : "yellow",
        fill: e ? "grey" : "yellow",
        ...A.style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: e ? void 0 : i,
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        className: t,
        style: w,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Zoom In"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                strokeWidth: .3,
                d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z"
            })
        ]
    });
}
function d(A) {
    const { onClick: i, className: t, disabled: e = !1 } = A, w = {
        cursor: e ? "default" : "pointer",
        stroke: e ? "grey" : "yellow",
        fill: e ? "grey" : "yellow",
        ...A.style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        onClick: e ? void 0 : i,
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        className: t,
        style: w,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Zoom Out"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                strokeWidth: .3,
                d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z"
            })
        ]
    });
}
function N(A) {
    const { scanning: i, capabilities: t, onZoom: e, value: w } = A;
    if (!i || !e) return null;
    const a = (t.max - t.min) / 3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    bottom: 130,
                    right: 8,
                    position: "absolute",
                    zIndex: 2,
                    cursor: "pointer"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(d, {
                    disabled: w <= t.min,
                    onClick: function() {
                        e(Math.max(w - a, t.min));
                    }
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    bottom: 180,
                    right: 8,
                    position: "absolute",
                    zIndex: 2,
                    cursor: "pointer"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(R, {
                    disabled: w >= t.max,
                    onClick: function() {
                        e(Math.min(w + a, t.max));
                    }
                })
            })
        ]
    });
}
const f = {
    fullContainer: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    innerContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    borderBox: {
        position: "relative",
        width: "70%",
        aspectRatio: "1 / 1",
        border: "2px dashed rgba(239, 68, 68, 0.4)",
        borderRadius: "0.5rem"
    },
    cornerTopLeft: {
        position: "absolute",
        width: "15%",
        height: "15%",
        border: "4px solid #ef4444",
        top: 0,
        left: 0,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        borderTopLeftRadius: "0.5rem"
    },
    cornerTopRight: {
        position: "absolute",
        width: "15%",
        height: "15%",
        border: "4px solid #ef4444",
        top: 0,
        right: 0,
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderTopRightRadius: "0.5rem"
    },
    cornerBottomLeft: {
        position: "absolute",
        width: "15%",
        height: "15%",
        border: "4px solid #ef4444",
        bottom: 0,
        left: 0,
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderBottomLeftRadius: "0.5rem"
    },
    cornerBottomRight: {
        position: "absolute",
        width: "15%",
        height: "15%",
        border: "4px solid #ef4444",
        bottom: 0,
        right: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomRightRadius: "0.5rem"
    }
};
function p(A) {
    const { scanning: i, capabilities: t, onOff: e, torch: w, zoom: n, startScanning: a, stopScanning: B } = A;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: f.fullContainer,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            style: f.innerContainer,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    style: f.overlay,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        style: f.borderBox,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: f.cornerTopLeft
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: f.cornerTopRight
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: f.cornerBottomLeft
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: f.cornerBottomRight
                            })
                        ]
                    })
                }),
                e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T, {
                    scanning: i,
                    startScanning: a,
                    stopScanning: B
                }),
                w && t.torch && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Q, {
                    scanning: i,
                    status: w.status,
                    torchToggle: w.toggle
                }),
                n && t.zoom && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(N, {
                    scanning: i,
                    capabilities: t.zoom,
                    value: n.value,
                    onZoom: n.onChange
                })
            ]
        })
    });
}
function k(A) {
    if (null === A) throw new Error("Canvas should always be defined when component is mounted.");
    const o = A.getContext("2d");
    if (null === o) throw new Error("Canvas 2D context should be non-null");
    o.clearRect(0, 0, A.width, A.height);
}
function u(n) {
    const { onScan: c, constraints: E, formats: h = [
        "any"
    ], paused: q = !1, components: M, children: l, styles: I, classNames: G, allowMultiple: D, scanDelay: F, onError: T, sound: m } = n, V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...r,
            ...E
        }), [
        E
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...B,
            ...M
        }), [
        M
    ]), [f, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [K, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), [L, J] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(d), x = function() {
        const A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve({
            type: "stop",
            data: {}
        })), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [n, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), [B, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (A, i)=>{
            if (!window.isSecureContext) throw new Error("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.");
            if (void 0 === navigator?.mediaDevices?.getUserMedia) throw new Error("this browser has no Stream API support");
            const t = await navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: i
            });
            void 0 !== A.srcObject ? A.srcObject = t : void 0 !== A.mozSrcObject ? A.mozSrcObject = t : window.URL.createObjectURL ? A.src = window.URL.createObjectURL(t) : window.webkitURL ? A.src = window.webkitURL.createObjectURL(t) : A.src = t.id, await Promise.race([
                A.play(),
                new Promise((A)=>setTimeout(A, 3e3)).then(()=>{
                    throw new Error("Loading camera stream timed out after 3 seconds.");
                })
            ]), await new Promise((A)=>setTimeout(A, 500));
            const [e] = t.getVideoTracks();
            return r(e.getSettings()), a(e?.getCapabilities?.() ?? {}), o.current = t, g.current = e, {
                type: "start",
                data: {
                    videoEl: A,
                    stream: t,
                    constraints: i
                }
            };
        }, []), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (A, i)=>{
            A.src = "", A.srcObject = null, A.load();
            for (const A of i.getTracks())i.removeTrack(A), A.stop();
            return o.current = null, g.current = null, r({}), {
                type: "stop",
                data: {}
            };
        }, []), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (o, { constraints: g, restart: i = !1 })=>{
            if (A.current = A.current.then((A)=>{
                if ("start" === A.type) {
                    const { data: { videoEl: t, stream: e, constraints: w } } = A;
                    return i || o !== t || g !== w ? C(t, e).then(()=>s(o, g)) : A;
                }
                return s(o, g);
            }), "stop" === (await A.current).type) throw new Error("Something went wrong with the camera task queue (start task).");
        }, [
            s,
            C
        ]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
            if (A.current = A.current.then((A)=>{
                if ("stop" === A.type) return A;
                const { data: { videoEl: o, stream: g } } = A;
                return C(o, g);
            }), "start" === (await A.current).type) throw new Error("Something went wrong with the camera task queue (stop task).");
        }, [
            C
        ]), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (A)=>{
            const o = g.current;
            if (!o) throw new Error("No active video track found.");
            {
                A.advanced?.[0].zoom && o.getCapabilities().torch && await o.applyConstraints({
                    advanced: [
                        {
                            torch: !1
                        }
                    ]
                }), await o.applyConstraints(A);
                const g = o.getCapabilities(), i = o.getSettings();
                a(g), r(i);
            }
        }, []);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
                (async ()=>{
                    await E();
                })();
            }, [
            E
        ]), {
            capabilities: n,
            settings: B,
            startCamera: c,
            stopCamera: E,
            updateConstraints: h
        };
    }(), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(x), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(T), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(N.tracker);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        U.current = x;
    }, [
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        Z.current = T;
    }, [
        T
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        W.current = N.tracker;
    }, [
        N.tracker
    ]);
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((A)=>{
        !function(A, o, g, i) {
            const t = g;
            if (null == t) throw new Error("onFound handler should only be called when component is mounted. Thus tracking canvas is always defined.");
            const e = o;
            if (null == e) throw new Error("onFound handler should only be called when component is mounted. Thus video element is always defined.");
            if (0 === A.length || void 0 === i) k(t);
            else {
                const o = e.offsetWidth, g = e.offsetHeight, w = e.videoWidth, n = e.videoHeight, a = Math.max(o / w, g / n), B = w * a, r = n * a, s = B / w, C = r / n, c = (o - B) / 2, E = (g - r) / 2, h = ({ x: A, y: o })=>({
                        x: Math.floor(A * s),
                        y: Math.floor(o * C)
                    }), q = ({ x: A, y: o })=>({
                        x: Math.floor(A + c),
                        y: Math.floor(o + E)
                    }), M = A.map((A)=>{
                    const { boundingBox: o, cornerPoints: g } = A, { x: i, y: t } = q(h({
                        x: o.x,
                        y: o.y
                    })), { x: e, y: w } = h({
                        x: o.width,
                        y: o.height
                    });
                    return {
                        ...A,
                        cornerPoints: g.map((A)=>q(h(A))),
                        boundingBox: DOMRectReadOnly.fromRect({
                            x: i,
                            y: t,
                            width: e,
                            height: w
                        })
                    };
                });
                t.width = e.offsetWidth, t.height = e.offsetHeight;
                const l = t.getContext("2d");
                if (null === l) throw new Error("onFound handler should only be called when component is mounted. Thus tracking canvas 2D context is always defined.");
                i(M, l);
            }
        }(A, V.current, R.current, W.current);
    }, []), { startScanning: b, stopScanning: O } = function(o) {
        const { videoElementRef: g, onScan: t, onFound: n, retryDelay: a = 100, scanDelay: B = 0, formats: r = [], allowMultiple: s = !1, sound: C = !0 } = o, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarcodeDetector"]({
            formats: r
        })), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            c.current = new __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarcodeDetector"]({
                formats: r
            });
        }, [
            r
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            "undefined" != typeof window && C && (E.current = new Audio("string" == typeof C ? C : "data:audio/mp3;base64,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"));
        }, [
            C
        ]);
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((A)=>async (o)=>{
                if (null !== g.current && g.current.readyState > 1) {
                    const { lastScan: i, contentBefore: e, lastScanHadContent: w } = A;
                    if (o - i < a) h.current = window.requestAnimationFrame(q(A));
                    else {
                        const i = await c.current.detect(g.current), a = i.some((A)=>!e.includes(A.rawValue)), r = i.length > 0;
                        let M = A.lastOnScan;
                        (a || s && r && o - M >= B) && (C && E.current && E.current.paused && E.current.play().catch((A)=>console.error("Error playing the sound", A)), M = o, t(i)), r && n(i), !r && w && n(i);
                        const l = {
                            lastScan: o,
                            lastOnScan: M,
                            lastScanHadContent: r,
                            contentBefore: a ? i.map((A)=>A.rawValue) : e
                        };
                        h.current = window.requestAnimationFrame(q(l));
                    }
                }
            }, [
            g.current,
            t,
            n,
            a,
            s,
            B,
            C
        ]);
        return {
            startScanning: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
                const A = performance.now(), o = {
                    lastScan: A,
                    lastOnScan: A,
                    contentBefore: [],
                    lastScanHadContent: !1
                };
                h.current = window.requestAnimationFrame(q(o));
            }, [
                q
            ]),
            stopScanning: (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
                null !== h.current && (window.cancelAnimationFrame(h.current), h.current = null);
            }, [])
        };
    }({
        videoElementRef: V,
        onScan: c,
        onFound: v,
        formats: h,
        retryDelay: void 0 === N.tracker ? 500 : 10,
        scanDelay: F,
        allowMultiple: D,
        sound: m
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(u(!0), ()=>{
            u(!1);
        }), []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f && (O(), b());
    }, [
        f,
        b,
        O
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!Y(d, L)) {
            const A = d;
            E?.deviceId && delete A.facingMode, J(A);
        }
    }, [
        E,
        d,
        L
    ]);
    const P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            constraints: L,
            shouldStream: f && !q
        }), [
        L,
        f,
        q
    ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const A = V.current;
        if (null == A) throw new Error("Video should be defined when component is mounted.");
        const o = Q.current;
        if (null == o) throw new Error("Canvas should be defined when component is mounted.");
        const g = o.getContext("2d");
        if (null == g) throw new Error("Canvas should be defined when component is mounted.");
        if (P.shouldStream) {
            await U.current.stopCamera(), y(!1);
            try {
                await U.current.startCamera(A, P), A ? y(!0) : await U.current.stopCamera();
            } catch (A) {
                Z.current?.(A), console.error("error", A);
            }
        } else o.width = A.videoWidth, o.height = A.videoHeight, g.drawImage(A, 0, 0, A.videoWidth, A.videoHeight), await U.current.stopCamera(), y(!1);
    }, [
        P
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            await H();
        })();
    }, [
        H
    ]);
    const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>P.shouldStream && K, [
        P.shouldStream,
        K
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (S) {
            if (void 0 === Q.current) throw new Error("shouldScan effect should only be triggered when component is mounted. Thus pause frame canvas is defined");
            if (k(Q.current), void 0 === R.current) throw new Error("shouldScan effect should only be triggered when component is mounted. Thus tracking canvas is defined");
            k(R.current);
            const A = V.current;
            if (null == A) throw new Error("shouldScan effect should only be triggered when component is mounted. Thus video element is defined");
            b();
        }
    }, [
        S,
        b
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        style: {
            ...s,
            ...I?.container
        },
        className: G?.container,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("video", {
                ref: V,
                style: {
                    ...C,
                    ...I?.video,
                    visibility: q ? "hidden" : "visible"
                },
                className: G?.video,
                autoPlay: !0,
                muted: !0,
                playsInline: !0
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                ref: Q,
                style: {
                    display: q ? "block" : "none",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                ref: R,
                style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                },
                children: [
                    N.finder && (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(p, {
                        scanning: K,
                        capabilities: x.capabilities,
                        onOff: N.onOff,
                        zoom: N.zoom && x.settings.zoom ? {
                            value: x.settings.zoom,
                            onChange: async (A)=>{
                                const o = {
                                    ...L,
                                    advanced: [
                                        {
                                            zoom: A
                                        }
                                    ]
                                };
                                await x.updateConstraints(o);
                            }
                        } : void 0,
                        torch: N.torch ? {
                            status: x.settings.torch ?? !1,
                            toggle: async (A)=>{
                                const o = {
                                    ...L,
                                    advanced: [
                                        {
                                            torch: A
                                        }
                                    ]
                                };
                                await x.updateConstraints(o);
                            }
                        } : void 0,
                        startScanning: async ()=>await H(),
                        stopScanning: async ()=>{
                            await x.stopCamera(), k(R.current), y(!1);
                        }
                    }),
                    l
                ]
            })
        ]
    });
}
function K() {
    const [A, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>(await navigator.mediaDevices.enumerateDevices()).filter((A)=>"videoinput" === A.kind), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            o(await g());
        })();
    }, [
        g
    ]), A;
}
;
 //# sourceMappingURL=index.esm.mjs.map
}),
"[project]/project1/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scanner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scanner"],
    "boundingBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["boundingBox"],
    "centerText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["centerText"],
    "outline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["outline"],
    "prepareZXingModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareZXingModule"],
    "setZXingModuleOverrides",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setZXingModuleOverrides"],
    "useDevices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDevices"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/project1/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$project1$2f$node_modules$2f$barcode$2d$detector$2f$dist$2f$es$2f$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/project1/node_modules/barcode-detector/dist/es/ponyfill.js [app-client] (ecmascript)");
}),
"[project]/project1/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/project1/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=2926c_097cac5f._.js.map