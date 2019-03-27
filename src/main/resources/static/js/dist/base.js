if (function () {
    function t(t, e, n) {
        for (var i = (n || 0) - 1, r = t ? t.length : 0; ++i < r;) if (t[i] === e) return i;
        return -1
    }

    function e(e, n) {
        var i = typeof n;
        if (e = e.cache, "boolean" == i || null == n) return e[n] ? 0 : -1;
        "number" != i && "string" != i && (i = "object");
        var r = "number" == i ? n : y + n;
        return e = (e = e[i]) && e[r], "object" == i ? e && t(e, n) > -1 ? 0 : -1 : e ? 0 : -1
    }

    function n(t) {
        var e = this.cache, n = typeof t;
        if ("boolean" == n || null == t) e[t] = !0; else {
            "number" != n && "string" != n && (n = "object");
            var i = "number" == n ? t : y + t, r = e[n] || (e[n] = {});
            "object" == n ? (r[i] || (r[i] = [])).push(t) : r[i] = !0
        }
    }

    function i(t) {
        return t.charCodeAt(0)
    }

    function r(t, e) {
        var n = t.criteria, i = e.criteria;
        if (n !== i) {
            if (n > i || "undefined" == typeof n) return 1;
            if (i > n || "undefined" == typeof i) return -1
        }
        return t.index - e.index
    }

    function o(t) {
        var e = -1, i = t.length, r = t[0], o = t[i / 2 | 0], s = t[i - 1];
        if (r && "object" == typeof r && o && "object" == typeof o && s && "object" == typeof s) return !1;
        var a = l();
        a["false"] = a["null"] = a["true"] = a.undefined = !1;
        var u = l();
        for (u.array = t, u.cache = a, u.push = n; ++e < i;) u.push(t[e]);
        return u
    }

    function s(t) {
        return "\\" + B[t]
    }

    function a() {
        return m.pop() || []
    }

    function l() {
        return g.pop() || {
            array: null,
            cache: null,
            configurable: !1,
            criteria: null,
            enumerable: !1,
            "false": !1,
            index: 0,
            leading: !1,
            maxWait: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            trailing: !1,
            "true": !1,
            undefined: !1,
            value: null,
            writable: !1
        }
    }

    function u() {
    }

    function c(t) {
        t.length = 0, m.length < w && m.push(t)
    }

    function f(t) {
        var e = t.cache;
        e && f(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, g.length < w && g.push(t)
    }

    function h(t, e, n) {
        e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
        for (var i = -1, r = n - e || 0, o = Array(0 > r ? 0 : r); ++i < r;) o[i] = t[e + i];
        return o
    }

    function p(n) {
        function m(t) {
            return t && "object" == typeof t && !Wn(t) && yn.call(t, "__wrapped__") ? t : new g(t)
        }

        function g(t, e) {
            this.__chain__ = !!e, this.__wrapped__ = t
        }

        function w(t, e, n, i, r) {
            var o = t;
            if (n) {
                if (o = n(o), "undefined" != typeof o) return o;
                o = t
            }
            var s = bt(o);
            if (s) {
                var l = Tn.call(o);
                if (!I[l]) return o;
                var u = Wn(o)
            }
            if (!s || !e) return s ? u ? h(o) : Gn({}, o) : o;
            var f = Rn[l];
            switch (l) {
                case j:
                case P:
                    return new f(+o);
                case O:
                case q:
                    return new f(o);
                case F:
                    return f(o.source, C.exec(o))
            }
            var p = !i;
            i || (i = a()), r || (r = a());
            for (var d = i.length; d--;) if (i[d] == t) return r[d];
            return o = u ? f(o.length) : {}, u && (yn.call(t, "index") && (o.index = t.index), yn.call(t, "input") && (o.input = t.input)), i.push(t), r.push(o), (u ? qt : Kn)(t, function (t, s) {
                o[s] = w(t, e, n, i, r)
            }), p && (c(i), c(r)), o
        }

        function B(t, e, n) {
            if ("function" != typeof t) return qe;
            if ("undefined" == typeof e) return t;
            var i = t.__bindData__ || Bn.funcNames && !t.name;
            if ("undefined" == typeof i) {
                var r = _ && gn.call(t);
                Bn.funcNames || !r || $.test(r) || (i = !0), (Bn.funcNames || !i) && (i = !Bn.funcDecomp || _.test(r), Mn(t, i))
            }
            if (i !== !0 && i && 1 & i[1]) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function (n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function (n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    }
            }
            return Ce(t, e)
        }

        function W(t, e, n, i) {
            for (var r = (i || 0) - 1, o = t ? t.length : 0, s = []; ++r < o;) {
                var a = t[r];
                if (a && "object" == typeof a && "number" == typeof a.length && (Wn(a) || nt(a))) {
                    e || (a = W(a, e, n));
                    var l = -1, u = a.length, c = s.length;
                    for (s.length += u; ++l < u;) s[c++] = a[l]
                } else n || s.push(a)
            }
            return s
        }

        function U(t, e, n, i, r, o) {
            if (n) {
                var s = n(t, e);
                if ("undefined" != typeof s) return !!s
            }
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            var l = typeof t, u = typeof e;
            if (!(t !== t || t && R[l] || e && R[u])) return !1;
            if (null == t || null == e) return t === e;
            var f = Tn.call(t), h = Tn.call(e);
            if (f == D && (f = H), h == D && (h = H), f != h) return !1;
            switch (f) {
                case j:
                case P:
                    return +t == +e;
                case O:
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case F:
                case q:
                    return t == an(e)
            }
            var p = f == N;
            if (!p) {
                if (yn.call(t, "__wrapped__ ") || yn.call(e, "__wrapped__")) return U(t.__wrapped__ || t, e.__wrapped__ || e, n, i, r, o);
                if (f != H) return !1;
                var d = t.constructor, m = e.constructor;
                if (d != m && !(yt(d) && d instanceof d && yt(m) && m instanceof m)) return !1
            }
            var g = !r;
            r || (r = a()), o || (o = a());
            for (var v = r.length; v--;) if (r[v] == t) return o[v] == e;
            var y = 0;
            if (s = !0, r.push(t), o.push(e), p) {
                if (v = t.length, y = e.length, s = y == t.length, !s && !i) return s;
                for (; y--;) {
                    var b = v, w = e[y];
                    if (i) for (; b-- && !(s = U(t[b], w, n, i, r, o));) ; else if (!(s = U(t[y], w, n, i, r, o))) break
                }
                return s
            }
            return Zn(e, function (e, a, l) {
                return yn.call(l, a) ? (y++, s = yn.call(t, a) && U(t[a], e, n, i, r, o)) : void 0
            }), s && !i && Zn(t, function (t, e, n) {
                return yn.call(n, e) ? s = --y > -1 : void 0
            }), g && (c(r), c(o)), s
        }

        function X(t, e, n, i, r) {
            (Wn(e) ? qt : Kn)(e, function (e, o) {
                var s, a, l = e, u = t[o];
                if (e && ((a = Wn(e)) || ti(e))) {
                    for (var c = i.length; c--;) if (s = i[c] == e) {
                        u = r[c];
                        break
                    }
                    if (!s) {
                        var f;
                        n && (l = n(u, e), (f = "undefined" != typeof l) && (u = l)), f || (u = a ? Wn(u) ? u : [] : ti(u) ? u : {}), i.push(e), r.push(u), f || X(u, e, n, i, r)
                    }
                } else n && (l = n(u, e), "undefined" == typeof l && (l = e)), "undefined" != typeof l && (u = l);
                t[o] = u
            })
        }

        function Y(n, i, r) {
            var s = -1, l = K(), u = n ? n.length : 0, h = [], p = !i && u >= b && l === t, d = r || p ? a() : h;
            if (p) {
                var m = o(d);
                m ? (l = e, d = m) : (p = !1, d = r ? d : (c(d), h))
            }
            for (; ++s < u;) {
                var g = n[s], v = r ? r(g, s, n) : g;
                (i ? !s || d[d.length - 1] !== v : l(d, v) < 0) && ((r || p) && d.push(v), h.push(g))
            }
            return p ? (c(d.array), f(d)) : r && c(d), h
        }

        function Q(t) {
            return function (e, n, i) {
                var r = {};
                n = m.createCallback(n, i, 3);
                var o = -1, s = e ? e.length : 0;
                if ("number" == typeof s) for (; ++o < s;) {
                    var a = e[o];
                    t(r, a, n(a, o, e), e)
                } else Kn(e, function (e, i, o) {
                    t(r, e, n(e, i, o), o)
                });
                return r
            }
        }

        function G(t, e, n, i, r, o) {
            var s = 1 & e, a = 2 & e, l = 4 & e, u = 8 & e, c = 16 & e, f = 32 & e, h = t;
            if (!a && !yt(t)) throw new ln;
            c && !n.length && (e &= -17, c = n = !1), f && !i.length && (e &= -33, f = i = !1);
            var p = t && t.__bindData__;
            if (p) return !s || 1 & p[1] || (p[4] = r), !s && 1 & p[1] && (e |= 8), !l || 4 & p[1] || (p[5] = o), c && wn.apply(p[2] || (p[2] = []), n), f && wn.apply(p[3] || (p[3] = []), i), p[1] |= e, G.apply(null, p);
            if (s && !(a || l || f) && (Bn.fastBind || _n && c)) {
                if (c) {
                    var d = [r];
                    wn.apply(d, n)
                }
                var m = c ? _n.apply(t, d) : _n.call(t, r)
            } else m = function () {
                var p = arguments, d = s ? r : this;
                if ((l || c || f) && (p = Fn.call(p), c && kn.apply(p, n), f && wn.apply(p, i), l && p.length < o)) return e |= 16, G(t, u ? e : -4 & e, p, null, r, o);
                if (a && (t = d[h]), this instanceof m) {
                    d = J(t.prototype);
                    var g = t.apply(d, p);
                    return bt(g) ? g : d
                }
                return t.apply(d, p)
            };
            return Mn(m, Fn.call(arguments)), m
        }

        function J(t) {
            return bt(t) ? Sn(t) : {}
        }

        function Z(t) {
            return Xn[t]
        }

        function K() {
            var e = (e = m.indexOf) === se ? t : e;
            return e
        }

        function tt(t) {
            var e, n;
            return t && Tn.call(t) == H && (e = t.constructor, !yt(e) || e instanceof e) ? (Zn(t, function (t, e) {
                n = e
            }), "undefined" == typeof n || yn.call(t, n)) : !1
        }

        function et(t) {
            return Vn[t]
        }

        function nt(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Tn.call(t) == D || !1
        }

        function it(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = e, e = !1), w(t, e, "function" == typeof n && B(n, i, 1))
        }

        function rt(t, e, n) {
            return w(t, !0, "function" == typeof e && B(e, n, 1))
        }

        function ot(t, e, n) {
            var i;
            return e = m.createCallback(e, n, 3), Kn(t, function (t, n, r) {
                return e(t, n, r) ? (i = n, !1) : void 0
            }), i
        }

        function st(t, e, n) {
            var i;
            return e = m.createCallback(e, n, 3), lt(t, function (t, n, r) {
                return e(t, n, r) ? (i = n, !1) : void 0
            }), i
        }

        function at(t, e, n) {
            var i = [];
            Zn(t, function (t, e) {
                i.push(e, t)
            });
            var r = i.length;
            for (e = B(e, n, 3); r-- && e(i[r--], i[r], t) !== !1;) ;
            return t
        }

        function lt(t, e, n) {
            var i = zn(t), r = i.length;
            for (e = B(e, n, 3); r--;) {
                var o = i[r];
                if (e(t[o], o, t) === !1) break
            }
            return t
        }

        function ut(t) {
            var e = [];
            return Zn(t, function (t, n) {
                yt(t) && e.push(n)
            }), e.sort()
        }

        function ct(t, e) {
            return t ? yn.call(t, e) : !1
        }

        function ft(t) {
            for (var e = -1, n = zn(t), i = n.length, r = {}; ++e < i;) {
                var o = n[e];
                r[t[o]] = o
            }
            return r
        }

        function ht(t) {
            return t === !0 || t === !1 || Tn.call(t) == j
        }

        function pt(t) {
            return t ? "object" == typeof t && Tn.call(t) == P : !1
        }

        function dt(t) {
            return t ? 1 === t.nodeType : !1
        }

        function mt(t) {
            var e = !0;
            if (!t) return e;
            var n = Tn.call(t), i = t.length;
            return n == N || n == q || n == D || n == H && "number" == typeof i && yt(t.splice) ? !i : (Kn(t, function () {
                return e = !1
            }), e)
        }

        function gt(t, e, n, i) {
            return U(t, e, "function" == typeof n && B(n, i, 2))
        }

        function vt(t) {
            return Dn(t) && !Nn(parseFloat(t))
        }

        function yt(t) {
            return "function" == typeof t
        }

        function bt(t) {
            return !(!t || !R[typeof t])
        }

        function wt(t) {
            return Ct(t) && t != +t
        }

        function xt(t) {
            return null === t
        }

        function Ct(t) {
            return "number" == typeof t || Tn.call(t) == O
        }

        function $t(t) {
            return t ? "object" == typeof t && Tn.call(t) == F : !1
        }

        function Tt(t) {
            return "string" == typeof t || Tn.call(t) == q
        }

        function kt(t) {
            return "undefined" == typeof t
        }

        function Et(t) {
            var e = arguments, n = 2;
            if (!bt(t)) return t;
            if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var i = B(e[--n - 1], e[n--], 2); else n > 2 && "function" == typeof e[n - 1] && (i = e[--n]);
            for (var r = Fn.call(arguments, 1, n), o = -1, s = a(), l = a(); ++o < n;) X(t, r[o], i, s, l);
            return c(s), c(l), t
        }

        function _t(t, e, n) {
            var i = K(), r = "function" == typeof e, o = {};
            if (r) e = m.createCallback(e, n, 3); else var s = W(arguments, !0, !1, 1);
            return Zn(t, function (t, n, a) {
                (r ? !e(t, n, a) : i(s, n) < 0) && (o[n] = t)
            }), o
        }

        function St(t) {
            for (var e = -1, n = zn(t), i = n.length, r = Ze(i); ++e < i;) {
                var o = n[e];
                r[e] = [o, t[o]]
            }
            return r
        }

        function At(t, e, n) {
            var i = {};
            if ("function" != typeof e) for (var r = -1, o = W(arguments, !0, !1, 1), s = bt(t) ? o.length : 0; ++r < s;) {
                var a = o[r];
                a in t && (i[a] = t[a])
            } else e = m.createCallback(e, n, 3), Zn(t, function (t, n, r) {
                e(t, n, r) && (i[n] = t)
            });
            return i
        }

        function Dt(t, e, n, i) {
            var r = Wn(t);
            if (e = B(e, i, 4), null == n) if (r) n = []; else {
                var o = t && t.constructor, s = o && o.prototype;
                n = J(s)
            }
            return (r ? qt : Kn)(t, function (t, i, r) {
                return e(n, t, i, r)
            }), n
        }

        function Nt(t) {
            for (var e = -1, n = zn(t), i = n.length, r = Ze(i); ++e < i;) r[e] = t[n[e]];
            return r
        }

        function jt(t) {
            for (var e = arguments, n = -1, i = W(e, !0, !1, 1), r = e[2] && e[2][e[1]] === t ? 1 : i.length, o = Ze(r); ++n < r;) o[n] = t[i[n]];
            return o
        }

        function Pt(t, e, n) {
            var i = -1, r = K(), o = t ? t.length : 0, s = !1;
            return n = (0 > n ? Pn(0, o + n) : n) || 0, Wn(t) ? s = r(t, e, n) > -1 : "number" == typeof o ? s = (Tt(t) ? t.indexOf(e, n) : r(t, e, n)) > -1 : Kn(t, function (t) {
                return ++i >= n ? !(s = t === e) : void 0
            }), s
        }

        function Lt(t, e, n) {
            var i = !0;
            e = m.createCallback(e, n, 3);
            var r = -1, o = t ? t.length : 0;
            if ("number" == typeof o) for (; ++r < o && (i = !!e(t[r], r, t));) ; else Kn(t, function (t, n, r) {
                return i = !!e(t, n, r)
            });
            return i
        }

        function Ot(t, e, n) {
            var i = [];
            e = m.createCallback(e, n, 3);
            var r = -1, o = t ? t.length : 0;
            if ("number" == typeof o) for (; ++r < o;) {
                var s = t[r];
                e(s, r, t) && i.push(s)
            } else Kn(t, function (t, n, r) {
                e(t, n, r) && i.push(t)
            });
            return i
        }

        function Ht(t, e, n) {
            e = m.createCallback(e, n, 3);
            var i = -1, r = t ? t.length : 0;
            if ("number" != typeof r) {
                var o;
                return Kn(t, function (t, n, i) {
                    return e(t, n, i) ? (o = t, !1) : void 0
                }), o
            }
            for (; ++i < r;) {
                var s = t[i];
                if (e(s, i, t)) return s
            }
        }

        function Ft(t, e, n) {
            var i;
            return e = m.createCallback(e, n, 3), It(t, function (t, n, r) {
                return e(t, n, r) ? (i = t, !1) : void 0
            }), i
        }

        function qt(t, e, n) {
            var i = -1, r = t ? t.length : 0;
            if (e = e && "undefined" == typeof n ? e : B(e, n, 3), "number" == typeof r) for (; ++i < r && e(t[i], i, t) !== !1;) ; else Kn(t, e);
            return t
        }

        function It(t, e, n) {
            var i = t ? t.length : 0;
            if (e = e && "undefined" == typeof n ? e : B(e, n, 3), "number" == typeof i) for (; i-- && e(t[i], i, t) !== !1;) ; else {
                var r = zn(t);
                i = r.length, Kn(t, function (t, n, o) {
                    return n = r ? r[--i] : --i, e(o[n], n, o)
                })
            }
            return t
        }

        function Rt(t, e) {
            var n = Fn.call(arguments, 2), i = -1, r = "function" == typeof e, o = t ? t.length : 0,
                s = Ze("number" == typeof o ? o : 0);
            return qt(t, function (t) {
                s[++i] = (r ? e : t[e]).apply(t, n)
            }), s
        }

        function Bt(t, e, n) {
            var i = -1, r = t ? t.length : 0;
            if (e = m.createCallback(e, n, 3), "number" == typeof r) for (var o = Ze(r); ++i < r;) o[i] = e(t[i], i, t); else o = [], Kn(t, function (t, n, r) {
                o[++i] = e(t, n, r)
            });
            return o
        }

        function Mt(t, e, n) {
            var r = -(1 / 0), o = r;
            if (!e && Wn(t)) for (var s = -1, a = t.length; ++s < a;) {
                var l = t[s];
                l > o && (o = l)
            } else e = !e && Tt(t) ? i : m.createCallback(e, n, 3), qt(t, function (t, n, i) {
                var s = e(t, n, i);
                s > r && (r = s, o = t)
            });
            return o
        }

        function Wt(t, e, n) {
            var r = 1 / 0, o = r;
            if (!e && Wn(t)) for (var s = -1, a = t.length; ++s < a;) {
                var l = t[s];
                o > l && (o = l)
            } else e = !e && Tt(t) ? i : m.createCallback(e, n, 3), qt(t, function (t, n, i) {
                var s = e(t, n, i);
                r > s && (r = s, o = t)
            });
            return o
        }

        function Ut(t, e) {
            var n = -1, i = t ? t.length : 0;
            if ("number" == typeof i) for (var r = Ze(i); ++n < i;) r[n] = t[n][e];
            return r || Bt(t, e)
        }

        function zt(t, e, n, i) {
            if (!t) return n;
            var r = arguments.length < 3;
            e = B(e, i, 4);
            var o = -1, s = t.length;
            if ("number" == typeof s) for (r && (n = t[++o]); ++o < s;) n = e(n, t[o], o, t); else Kn(t, function (t, i, o) {
                n = r ? (r = !1, t) : e(n, t, i, o)
            });
            return n
        }

        function Xt(t, e, n, i) {
            var r = arguments.length < 3;
            return e = B(e, i, 4), It(t, function (t, i, o) {
                n = r ? (r = !1, t) : e(n, t, i, o)
            }), n
        }

        function Vt(t, e, n) {
            return e = m.createCallback(e, n, 3), Ot(t, function (t, n, i) {
                return !e(t, n, i)
            })
        }

        function Yt(t, e, n) {
            var i = t ? t.length : 0;
            if ("number" != typeof i && (t = Nt(t)), null == e || n) return t ? t[Be(i - 1)] : d;
            var r = Qt(t);
            return r.length = Ln(Pn(0, e), r.length), r
        }

        function Qt(t) {
            var e = -1, n = t ? t.length : 0, i = Ze("number" == typeof n ? n : 0);
            return qt(t, function (t) {
                var n = Be(++e);
                i[e] = i[n], i[n] = t
            }), i
        }

        function Gt(t) {
            var e = t ? t.length : 0;
            return "number" == typeof e ? e : zn(t).length
        }

        function Jt(t, e, n) {
            var i;
            e = m.createCallback(e, n, 3);
            var r = -1, o = t ? t.length : 0;
            if ("number" == typeof o) for (; ++r < o && !(i = e(t[r], r, t));) ; else Kn(t, function (t, n, r) {
                return !(i = e(t, n, r))
            });
            return !!i
        }

        function Zt(t, e, n) {
            var i = -1, o = t ? t.length : 0, s = Ze("number" == typeof o ? o : 0);
            for (e = m.createCallback(e, n, 3), qt(t, function (t, n, r) {
                var o = s[++i] = l();
                o.criteria = e(t, n, r), o.index = i, o.value = t
            }), o = s.length, s.sort(r); o--;) {
                var a = s[o];
                s[o] = a.value, f(a)
            }
            return s
        }

        function Kt(t) {
            return t && "number" == typeof t.length ? h(t) : Nt(t)
        }

        function te(t) {
            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                var r = t[e];
                r && i.push(r)
            }
            return i
        }

        function ee(n) {
            var i = -1, r = K(), s = n ? n.length : 0, a = W(arguments, !0, !0, 1), l = [], u = s >= b && r === t;
            if (u) {
                var c = o(a);
                c ? (r = e, a = c) : u = !1
            }
            for (; ++i < s;) {
                var h = n[i];
                r(a, h) < 0 && l.push(h)
            }
            return u && f(a), l
        }

        function ne(t, e, n) {
            var i = -1, r = t ? t.length : 0;
            for (e = m.createCallback(e, n, 3); ++i < r;) if (e(t[i], i, t)) return i;
            return -1
        }

        function ie(t, e, n) {
            var i = t ? t.length : 0;
            for (e = m.createCallback(e, n, 3); i--;) if (e(t[i], i, t)) return i;
            return -1
        }

        function re(t, e, n) {
            var i = 0, r = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = -1;
                for (e = m.createCallback(e, n, 3); ++o < r && e(t[o], o, t);) i++
            } else if (i = e, null == i || n) return t ? t[0] : d;
            return h(t, 0, Ln(Pn(0, i), r))
        }

        function oe(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = i && i[e] === t ? null : e, e = !1), null != n && (t = Bt(t, n, i)), W(t, e)
        }

        function se(e, n, i) {
            if ("number" == typeof i) {
                var r = e ? e.length : 0;
                i = 0 > i ? Pn(0, r + i) : i || 0
            } else if (i) {
                var o = me(e, n);
                return e[o] === n ? o : -1
            }
            return t(e, n, i)
        }

        function ae(t, e, n) {
            var i = 0, r = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = r;
                for (e = m.createCallback(e, n, 3); o-- && e(t[o], o, t);) i++
            } else i = null == e || n ? 1 : e || i;
            return h(t, 0, Ln(Pn(0, r - i), r))
        }

        function le(n) {
            for (var i = arguments, r = i.length, s = -1, l = a(), u = -1, h = K(), p = n ? n.length : 0, d = [], m = a(); ++s < r;) {
                var g = i[s];
                l[s] = h === t && (g ? g.length : 0) >= b && o(s ? i[s] : m)
            }
            t:for (; ++u < p;) {
                var v = l[0];
                if (g = n[u], (v ? e(v, g) : h(m, g)) < 0) {
                    for (s = r, (v || m).push(g); --s;) if (v = l[s], (v ? e(v, g) : h(i[s], g)) < 0) continue t;
                    d.push(g)
                }
            }
            for (; r--;) v = l[r], v && f(v);
            return c(l), c(m), d
        }

        function ue(t, e, n) {
            var i = 0, r = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = r;
                for (e = m.createCallback(e, n, 3); o-- && e(t[o], o, t);) i++
            } else if (i = e, null == i || n) return t ? t[r - 1] : d;
            return h(t, Pn(0, r - i))
        }

        function ce(t, e, n) {
            var i = t ? t.length : 0;
            for ("number" == typeof n && (i = (0 > n ? Pn(0, i + n) : Ln(n, i - 1)) + 1); i--;) if (t[i] === e) return i;
            return -1
        }

        function fe(t) {
            for (var e = arguments, n = 0, i = e.length, r = t ? t.length : 0; ++n < i;) for (var o = -1, s = e[n]; ++o < r;) t[o] === s && ($n.call(t, o--, 1), r--);
            return t
        }

        function he(t, e, n) {
            t = +t || 0, n = "number" == typeof n ? n : +n || 1, null == e && (e = t, t = 0);
            for (var i = -1, r = Pn(0, pn((e - t) / (n || 1))), o = Ze(r); ++i < r;) o[i] = t, t += n;
            return o
        }

        function pe(t, e, n) {
            var i = -1, r = t ? t.length : 0, o = [];
            for (e = m.createCallback(e, n, 3); ++i < r;) {
                var s = t[i];
                e(s, i, t) && (o.push(s), $n.call(t, i--, 1), r--)
            }
            return o
        }

        function de(t, e, n) {
            if ("number" != typeof e && null != e) {
                var i = 0, r = -1, o = t ? t.length : 0;
                for (e = m.createCallback(e, n, 3); ++r < o && e(t[r], r, t);) i++
            } else i = null == e || n ? 1 : Pn(0, e);
            return h(t, i)
        }

        function me(t, e, n, i) {
            var r = 0, o = t ? t.length : r;
            for (n = n ? m.createCallback(n, i, 1) : qe, e = n(e); o > r;) {
                var s = r + o >>> 1;
                n(t[s]) < e ? r = s + 1 : o = s
            }
            return r
        }

        function ge(t) {
            return Y(W(arguments, !0, !0))
        }

        function ve(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = i && i[e] === t ? null : e, e = !1), null != n && (n = m.createCallback(n, i, 3)), Y(t, e, n)
        }

        function ye(t) {
            return ee(t, Fn.call(arguments, 1))
        }

        function be() {
            for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, n = t ? Mt(Ut(t, "length")) : 0, i = Ze(0 > n ? 0 : n); ++e < n;) i[e] = Ut(t, e);
            return i
        }

        function we(t, e) {
            for (var n = -1, i = t ? t.length : 0, r = {}; ++n < i;) {
                var o = t[n];
                e ? r[o] = e[n] : o && (r[o[0]] = o[1])
            }
            return r
        }

        function xe(t, e) {
            if (!yt(e)) throw new ln;
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }

        function Ce(t, e) {
            return arguments.length > 2 ? G(t, 17, Fn.call(arguments, 2), null, e) : G(t, 1, null, null, e)
        }

        function $e(t) {
            for (var e = arguments.length > 1 ? W(arguments, !0, !1, 1) : ut(t), n = -1, i = e.length; ++n < i;) {
                var r = e[n];
                t[r] = G(t[r], 1, null, null, t)
            }
            return t
        }

        function Te(t, e) {
            return arguments.length > 2 ? G(e, 19, Fn.call(arguments, 2), null, t) : G(e, 3, null, null, t)
        }

        function ke() {
            for (var t = arguments, e = t.length; e--;) if (!yt(t[e])) throw new ln;
            return function () {
                for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
                return e[0]
            }
        }

        function Ee(t, e, n) {
            var i = typeof t;
            if (null == t || "function" == i) return B(t, e, n);
            if ("object" != i) return function (e) {
                return e[t]
            };
            var r = zn(t), o = r[0], s = t[o];
            return 1 != r.length || s !== s || bt(s) ? function (e) {
                for (var n = r.length, i = !1; n-- && (i = U(e[r[n]], t[r[n]], null, !0));) ;
                return i
            } : function (t) {
                var e = t[o];
                return s === e && (0 !== s || 1 / s == 1 / e)
            }
        }

        function _e(t, e) {
            return e = "number" == typeof e ? e : +e || t.length, G(t, 4, null, null, null, e)
        }

        function Se(t, e, n) {
            var i, r, o, s, a, l, u, c = 0, f = !1, h = !0;
            if (!yt(t)) throw new ln;
            if (e = Pn(0, e) || 0, n === !0) {
                var p = !0;
                h = !1
            } else bt(n) && (p = n.leading, f = "maxWait" in n && (Pn(e, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
            var m = function () {
                var n = e - (bn() - s);
                if (0 >= n) {
                    r && dn(r);
                    var f = u;
                    r = l = u = d, f && (c = bn(), o = t.apply(a, i))
                } else l = Cn(m, n)
            }, g = function () {
                l && dn(l), r = l = u = d, (h || f !== e) && (c = bn(), o = t.apply(a, i))
            };
            return function () {
                if (i = arguments, s = bn(), a = this, u = h && (l || !p), f === !1) var n = p && !l; else {
                    r || p || (c = s);
                    var d = f - (s - c);
                    0 >= d ? (r && (r = dn(r)), c = s, o = t.apply(a, i)) : r || (r = Cn(g, d))
                }
                return l || e === f || (l = Cn(m, e)), n && (o = t.apply(a, i)), o
            }
        }

        function Ae(t) {
            if (!yt(t)) throw new ln;
            var e = Fn.call(arguments, 1);
            return Cn(function () {
                t.apply(d, e)
            }, 1)
        }

        function De(t, e) {
            if (!yt(t)) throw new ln;
            var n = Fn.call(arguments, 2);
            return Cn(function () {
                t.apply(d, n)
            }, e)
        }

        function Ne(t, e) {
            if (!yt(t)) throw new ln;
            var n = function () {
                var i = n.cache, r = e ? e.apply(this, arguments) : y + arguments[0];
                return yn.call(i, r) ? i[r] : i[r] = t.apply(this, arguments)
            };
            return n.cache = {}, n
        }

        function je(t) {
            var e, n;
            if (!yt(t)) throw new ln;
            return function () {
                return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
            }
        }

        function Pe(t) {
            return G(t, 16, Fn.call(arguments, 1))
        }

        function Le(t) {
            return G(t, 32, null, Fn.call(arguments, 1))
        }

        function Oe(t, e, n) {
            var i = !0, r = !0;
            if (!yt(t)) throw new ln;
            n === !1 ? i = !1 : bt(n) && (i = "leading" in n ? n.leading : i, r = "trailing" in n ? n.trailing : r), n = l(), n.leading = i, n.maxWait = e, n.trailing = r;
            var o = Se(t, e, n);
            return f(n), o
        }

        function He(t, e) {
            if (!yt(e)) throw new ln;
            return function () {
                var n = [t];
                return wn.apply(n, arguments), e.apply(this, n)
            }
        }

        function Fe(t) {
            return null == t ? "" : an(t).replace(Qn, Z)
        }

        function qe(t) {
            return t
        }

        function Ie(t, e) {
            var n = t, i = !e || yt(n);
            e || (n = g, e = t, t = m), qt(ut(e), function (r) {
                var o = t[r] = e[r];
                i && (n.prototype[r] = function () {
                    var e = this.__wrapped__, i = [e];
                    wn.apply(i, arguments);
                    var r = o.apply(t, i);
                    return e && "object" == typeof e && e === r ? this : new n(r)
                })
            })
        }

        function Re() {
            return n._ = fn, this
        }

        function Be(t, e, n) {
            var i = null == t, r = null == e;
            null == n && ("boolean" == typeof t && r ? (n = t, t = 1) : r || "boolean" != typeof e || (n = e, r = !0)), i && r && (e = 1), t = +t || 0, r ? (e = t, t = 0) : e = +e || 0;
            var o = Hn();
            return n || t % 1 || e % 1 ? t + Ln(o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e) : t + mn(o * (e - t + 1))
        }

        function Me(t, e) {
            if (t) {
                var n = t[e];
                return yt(n) ? t[e]() : n
            }
        }

        function We(t, e, n) {
            var i = m, r = i.templateSettings;
            t = an(t || ""), n = Jn({}, n, r);
            var o = 0, a = "__p += '", l = n.variable,
                u = sn((n.escape || E).source + "|" + (n.interpolate || E).source + "|" + (n.evaluate || E).source + "|$", "g");
            t.replace(u, function (e, n, i, r, l) {
                return a += t.slice(o, l).replace(S, s), n && (a += "' +\n_.escape(" + n + ") +\n'"), r && (a += "';\n" + r + ";\n__p += '"), i && (a += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), o = l + e.length, e
            }), a += "';\n", l || (l = "obj", a = "with (" + l + " || {}) {\n" + a + "\n}\n"), a = "function(" + l + ") {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" + a + "return __p\n}";
            try {
                var c = en("_", "return " + a)(i)
            } catch (f) {
                throw f.source = a, f
            }
            return e ? c(e) : (c.source = a, c)
        }

        function Ue(t, e, n) {
            t = (t = +t) > -1 ? t : 0;
            var i = -1, r = Ze(t);
            for (e = B(e, n, 1); ++i < t;) r[i] = e(i);
            return r
        }

        function ze(t) {
            return null == t ? "" : an(t).replace(Yn, et)
        }

        function Xe(t) {
            var e = ++v;
            return an(null == t ? "" : t) + e
        }

        function Ve(t) {
            return t = new g(t), t.__chain__ = !0, t
        }

        function Ye(t, e) {
            return e(t), t
        }

        function Qe() {
            return this.__chain__ = !0, this
        }

        function Ge() {
            return an(this.__wrapped__)
        }

        function Je() {
            return this.__wrapped__
        }

        n = n ? V.defaults(M.Object(), n, V.pick(M, A)) : M;
        var Ze = n.Array, Ke = n.Boolean, tn = n.Date, en = n.Function, nn = n.Math, rn = n.Number, on = n.Object,
            sn = n.RegExp, an = n.String, ln = n.TypeError, un = [], cn = on.prototype, fn = n._,
            hn = sn("^" + an(cn.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            pn = nn.ceil, dn = n.clearTimeout, mn = nn.floor, gn = en.prototype.toString,
            vn = hn.test(vn = on.getPrototypeOf) && vn, yn = cn.hasOwnProperty,
            bn = hn.test(bn = tn.now) && bn || function () {
                return +new tn
            }, wn = un.push, xn = n.setImmediate, Cn = n.setTimeout, $n = un.splice, Tn = cn.toString, kn = un.unshift,
            En = function () {
                try {
                    var t = {}, e = hn.test(e = on.defineProperty) && e, n = e(t, t, t) && e
                } catch (i) {
                }
                return n
            }(), _n = hn.test(_n = Tn.bind) && _n, Sn = hn.test(Sn = on.create) && Sn,
            An = hn.test(An = Ze.isArray) && An, Dn = n.isFinite, Nn = n.isNaN, jn = hn.test(jn = on.keys) && jn,
            Pn = nn.max, Ln = nn.min, On = n.parseInt, Hn = nn.random, Fn = un.slice, qn = hn.test(n.attachEvent),
            In = _n && !/\n|true/.test(_n + qn), Rn = {};
        Rn[N] = Ze, Rn[j] = Ke, Rn[P] = tn, Rn[L] = en, Rn[H] = on, Rn[O] = rn, Rn[F] = sn, Rn[q] = an, g.prototype = m.prototype;
        var Bn = m.support = {};
        Bn.fastBind = _n && !In, Bn.funcDecomp = !hn.test(n.WinRTError) && _.test(p), Bn.funcNames = "string" == typeof en.name, m.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: T,
            variable: "",
            imports: {_: m}
        };
        var Mn = En ? function (t, e) {
                var n = l();
                n.value = e, En(t, "__bindData__", n), f(n)
            } : u, Wn = An || function (t) {
                return t && "object" == typeof t && "number" == typeof t.length && Tn.call(t) == N || !1
            }, Un = function (t) {
                var e, n = t, i = [];
                if (!n) return i;
                if (!R[typeof t]) return i;
                for (e in n) yn.call(n, e) && i.push(e);
                return i
            }, zn = jn ? function (t) {
                return bt(t) ? jn(t) : []
            } : Un, Xn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, Vn = ft(Xn),
            Yn = sn("(" + zn(Vn).join("|") + ")", "g"), Qn = sn("[" + zn(Xn).join("") + "]", "g"),
            Gn = function (t, e, n) {
                var i, r = t, o = r;
                if (!r) return o;
                var s = arguments, a = 0, l = "number" == typeof n ? 2 : s.length;
                if (l > 3 && "function" == typeof s[l - 2]) var u = B(s[--l - 1], s[l--], 2); else l > 2 && "function" == typeof s[l - 1] && (u = s[--l]);
                for (; ++a < l;) if (r = s[a], r && R[typeof r]) for (var c = -1, f = R[typeof r] && zn(r), h = f ? f.length : 0; ++c < h;) i = f[c], o[i] = u ? u(o[i], r[i]) : r[i];
                return o
            }, Jn = function (t, e, n) {
                var i, r = t, o = r;
                if (!r) return o;
                for (var s = arguments, a = 0, l = "number" == typeof n ? 2 : s.length; ++a < l;) if (r = s[a], r && R[typeof r]) for (var u = -1, c = R[typeof r] && zn(r), f = c ? c.length : 0; ++u < f;) i = c[u], "undefined" == typeof o[i] && (o[i] = r[i]);
                return o
            }, Zn = function (t, e, n) {
                var i, r = t, o = r;
                if (!r) return o;
                if (!R[typeof r]) return o;
                e = e && "undefined" == typeof n ? e : B(e, n, 3);
                for (i in r) if (e(r[i], i, t) === !1) return o;
                return o
            }, Kn = function (t, e, n) {
                var i, r = t, o = r;
                if (!r) return o;
                if (!R[typeof r]) return o;
                e = e && "undefined" == typeof n ? e : B(e, n, 3);
                for (var s = -1, a = R[typeof r] && zn(r), l = a ? a.length : 0; ++s < l;) if (i = a[s], e(r[i], i, t) === !1) return o;
                return o
            }, ti = function (t) {
                if (!t || Tn.call(t) != H) return !1;
                var e = t.valueOf, n = "function" == typeof e && (n = vn(e)) && vn(n);
                return n ? t == n || vn(t) == n : tt(t)
            }, ei = Q(function (t, e, n) {
                yn.call(t, n) ? t[n]++ : t[n] = 1
            }), ni = Q(function (t, e, n) {
                (yn.call(t, n) ? t[n] : t[n] = []).push(e)
            }), ii = Q(function (t, e, n) {
                t[n] = e
            }), ri = Ot;
        In && z && "function" == typeof xn && (Ae = function (t) {
            if (!yt(t)) throw new ln;
            return xn.apply(n, arguments)
        });
        var oi = 8 == On(x + "08") ? On : function (t, e) {
            return On(Tt(t) ? t.replace(k, "") : t, e || 0)
        };
        return m.after = xe, m.assign = Gn, m.at = jt, m.bind = Ce, m.bindAll = $e, m.bindKey = Te, m.chain = Ve, m.compact = te, m.compose = ke, m.countBy = ei, m.createCallback = Ee, m.curry = _e, m.debounce = Se, m.defaults = Jn, m.defer = Ae, m.delay = De, m.difference = ee, m.filter = Ot, m.flatten = oe, m.forEach = qt, m.forEachRight = It, m.forIn = Zn, m.forInRight = at, m.forOwn = Kn, m.forOwnRight = lt, m.functions = ut, m.groupBy = ni, m.indexBy = ii, m.initial = ae, m.intersection = le, m.invert = ft, m.invoke = Rt, m.keys = zn, m.map = Bt, m.max = Mt, m.memoize = Ne, m.merge = Et, m.min = Wt, m.omit = _t, m.once = je, m.pairs = St, m.partial = Pe, m.partialRight = Le, m.pick = At, m.pluck = Ut, m.pull = fe, m.range = he, m.reject = Vt, m.remove = pe, m.rest = de, m.shuffle = Qt, m.sortBy = Zt, m.tap = Ye, m.throttle = Oe, m.times = Ue, m.toArray = Kt, m.transform = Dt, m.union = ge, m.uniq = ve, m.values = Nt, m.where = ri, m.without = ye, m.wrap = He, m.zip = be, m.zipObject = we, m.collect = Bt, m.drop = de, m.each = qt, m.eachRight = It, m.extend = Gn, m.methods = ut, m.object = we, m.select = Ot, m.tail = de, m.unique = ve, m.unzip = be, Ie(m), m.clone = it, m.cloneDeep = rt, m.contains = Pt, m.escape = Fe, m.every = Lt, m.find = Ht, m.findIndex = ne, m.findKey = ot, m.findLast = Ft, m.findLastIndex = ie, m.findLastKey = st, m.has = ct, m.identity = qe, m.indexOf = se, m.isArguments = nt, m.isArray = Wn, m.isBoolean = ht, m.isDate = pt, m.isElement = dt, m.isEmpty = mt, m.isEqual = gt, m.isFinite = vt, m.isFunction = yt, m.isNaN = wt,m.isNull = xt,m.isNumber = Ct,m.isObject = bt,m.isPlainObject = ti,m.isRegExp = $t,m.isString = Tt,m.isUndefined = kt,m.lastIndexOf = ce,m.mixin = Ie,m.noConflict = Re,m.parseInt = oi,m.random = Be,m.reduce = zt,m.reduceRight = Xt,m.result = Me,m.runInContext = p,m.size = Gt,m.some = Jt,m.sortedIndex = me,m.template = We,m.unescape = ze,m.uniqueId = Xe,m.all = Lt,m.any = Jt,m.detect = Ht,m.findWhere = Ht,m.foldl = zt,m.foldr = Xt,m.include = Pt,m.inject = zt,Kn(m, function (t, e) {
            m.prototype[e] || (m.prototype[e] = function () {
                var e = [this.__wrapped__], n = this.__chain__;
                wn.apply(e, arguments);
                var i = t.apply(m, e);
                return n ? new g(i, n) : i
            })
        }),m.first = re,m.last = ue,m.sample = Yt,m.take = re,m.head = re,Kn(m, function (t, e) {
            var n = "sample" !== e;
            m.prototype[e] || (m.prototype[e] = function (e, i) {
                var r = this.__chain__, o = t(this.__wrapped__, e, i);
                return r || null != e && (!i || n && "function" == typeof e) ? new g(o, r) : o
            })
        }),m.VERSION = "2.1.0",m.prototype.chain = Qe,m.prototype.toString = Ge,m.prototype.value = Je,m.prototype.valueOf = Je,qt(["join", "pop", "shift"], function (t) {
            var e = un[t];
            m.prototype[t] = function () {
                var t = this.__chain__, n = e.apply(this.__wrapped__, arguments);
                return t ? new g(n, t) : n
            }
        }),qt(["push", "reverse", "sort", "unshift"], function (t) {
            var e = un[t];
            m.prototype[t] = function () {
                return e.apply(this.__wrapped__, arguments), this
            }
        }),qt(["concat", "slice", "splice"], function (t) {
            var e = un[t];
            m.prototype[t] = function () {
                return new g(e.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }),m
    }

    var d, m = [], g = [], v = 0, y = +new Date + "", b = 75, w = 40,
        x = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　", C = /\w*$/, $ = /^function[ \n\r\t]+\w/,
        T = /<%=([\s\S]+?)%>/g, k = RegExp("^[" + x + "]*0+(?=.$)"), E = /($^)/, _ = /\bthis\b/,
        S = /['\n\r\t\u2028\u2029\\]/g,
        A = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
        D = "[object Arguments]", N = "[object Array]", j = "[object Boolean]", P = "[object Date]",
        L = "[object Function]", O = "[object Number]", H = "[object Object]", F = "[object RegExp]",
        q = "[object String]", I = {};
    I[L] = !1, I[D] = I[N] = I[j] = I[P] = I[O] = I[H] = I[F] = I[q] = !0;
    var R = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1},
        B = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029"},
        M = R[typeof window] && window || this, W = R[typeof exports] && exports && !exports.nodeType && exports,
        U = R[typeof module] && module && !module.nodeType && module, z = U && U.exports === W && W,
        X = R[typeof global] && global;
    !X || X.global !== X && X.window !== X || (M = X);
    var V = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (M._ = V, define("underscore", [], function () {
        return V
    })) : W && U ? z ? (U.exports = V)._ = V : W._ = V : M._ = V
}.call(this), define("../modules/MatgenUtilities", ["underscore"], function () {
    var t = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar Kr K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Ar Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La-Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac-Lr Rf Db Sg Bh Hs Mt Ds Rg Cn La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr".split(" "),
        e = "Ar Eu He Lr Ne Pm Rn Tb Yb Fr Cs K Rb Ba Ra Na Sr Li Ca Ac La Ce Pr Nd Sm Gd Dy Y Ho Er Tm Lu Pu Am Bk Cf Cm Es Fm Hf Md No Th Mg Zr Np Sc U Pa Ta Ti Mn Be Nb Al Tl V Zn Cr Cd In Ga Fe Co Cu Re Si Tc Ni Ag Sn Hg Po Ge Bi B Sb Te Mo As P At H Ir Os Pd Ru Pt Rh Pb W Au C Se S Xe I Br Kr N Cl O F".split(" "),
        n = {
            orderByElectronegativity: function (t, n) {
                return void 0 == n && (n = e), _.sortBy(t, function (t) {
                    return n.indexOf(t)
                })
            }, isNumber: function (t) {
                return null == t ? !1 : t.search(/\d+\.?\d*/) >= 0 ? !0 : !1
            }, isCloseParens: function (t) {
                return ")" == t ? !0 : !1
            }, isElement: function (e, n) {
                return void 0 == n && (n = t), -1 != $.inArray(e, n) ? !0 : !1
            }, parseElNumList: function (t) {
                for (var e = t.match(/[A-Z][a-z]?\d+[+-]?/g), n = {}, i = e.length, r = 0; i > r; r++) {
                    var o = e[r].match(/([A-Z][a-z]?)(\d+)([+-]?)/), s = o[1], a = parseInt("" + o[3] + o[2], 10);
                    $.isArray(n[s]) || (n[s] = []), n[s].push(a)
                }
                return n
            }, insertOnes: function (t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) !n.isElement(t[e]) && !n.isCloseParens(t[e]) || n.isNumber(t[e + 1]) ? i.push(t[e]) : (i.push(t[e]), i.push("1"));
                return i
            }, tokenize: function (t) {
                return t.match(/([A-Z][a-z]?|\d+\.?\d*|[()])/g)
            }, parseUnitcellFormula: function (t) {
                if (formula = $.trim(t.replace(/[*]/g, "")), formula = $.trim(t.replace(/-/g, "")), $.isNumeric(formula) || n.isValidWildcard(t)) return [];
                if (formula.match(/[^\d\w\s().]/)) throw"Illegal character in formula: '" + formula + "'";
                var e = formula.match(/(\(?[A-Z][a-z]?\d*\.?\d*\)?\d*\.?\d*)/g);
                if (null != e && (e = e.join("")), e != formula && !n.isValidWildcard(t)) throw"Invalid formula: '" + formula + "'";
                for (var i = n.tokenize(formula), r = n.insertOnes(i), o = {}, s = 0; s < r.length; s += 2) o[r[s]] = parseInt(r[s + 1]);
                return o
            }, isValidWildcard: function (t) {
                if (elements = t.split(/-/g), _.contains(elements, "*")) return elements.every(function (t) {
                    return n.isElement(t) || "*" == t
                });
                var e = t.match(/([^A-Z]|^)+[a-z]|[^\.\w(),]+/g);
                return _.isEqual(_.uniq(e), ["*"])
            }, parseFormula: function (e) {
                var i = e.replace(/\s/g, ""), r = i.match(/([^A-Z]|^)+[a-z]|[^\.\w(),]+/g);
                if (null != r && !n.isValidWildcard(i)) return null;
                var o = /([A-Z][a-z]*)([\d\.]*)/;
                r = i.match(/([A-Z][a-z]*)([\d\.]*)/g);
                var s, a = [], l = {};
                if (null != r) {
                    for (s = 0; s < r.length; s++) {
                        var u = o.exec(r[s]);
                        if (!_.contains(t, u[1])) return null;
                        _.contains(a, u[1]) ? "" == u[2] ? l[u[1]] += 1 : l[u[1]] += u[2] : (a.push(u[1]), "" == u[2] ? l[u[1]] = 1 : l[u[1]] = u[2])
                    }
                    var c = [];
                    for (var f in l) c.push(l[f]);
                    var h = n.getGCD(c), p = [];
                    for (s = 0; s < a.length; s++) p.push(a[s] + l[a[s]] / h);
                    return [a.sort().join("&"), p.sort().join(" ")]
                }
                return null
            }, gcd: function (t, e) {
                var n, i, r;
                for (i = t, r = e; 0 != r;) n = i % r, i = r, r = n;
                return i
            }, getGCD: function (t) {
                for (var e = t[0], i = 1; i < t.length; i++) e = n.gcd(e, t[i]);
                return e
            }, htmlFormula: function (t) {
                var e = t.replace("PCO7", "PO4CO3");
                return oxidNumRegex = /([A-Z][a-z]*)([\d\.]+(?=-|\+).)/g, oxidRegex = /([A-Z][a-z]*)(-|\+)/g, _.isNull(e.match(oxidRegex)) && _.isNull(e.match(oxidNumRegex)) ? (e = e.replace(/([A-Z][a-z]*)([\d\.]+)/g, "$1<sub>$2</sub>"), e = e.replace(/(\))([\d\.]+)/g, "$1<sub>$2</sub>")) : (e = e.replace(oxidNumRegex, "$1<sup>$2</sup>"), e = e.replace(oxidRegex, "$1<sup>$2</sup>")), '<span class="chemform">' + e + "</span>"
            }, validateInput: function (t, e) {
                var n;
                return "text" == e ? n = /^[A-Za-z0-9\s\&\|\-\(\)]*$/ : "numeric" == e ? n = /^[0-9\.\-\s\&\|<>]*$/ : "boolean" == e && (n = /^(t|f)$/), n.test(t)
            }, cleanDecimals: function (t, e, n) {
                var i = new Number(t).toFixed(e);
                if (n) return i;
                var r = parseFloat(i);
                return isNaN(r) ? "" : r
            }, stripSpace: function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            }
        };
    return n
}), !function () {
    var t, e, n, i, r, o, s, a, l, u, c, f, h, p, d, m, g, v = [].slice, y = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
        return -1
    };
    e = {
        "default": "<!DOCTYPE html>",
        5: "<!DOCTYPE html>",
        xml: '<?xml version="1.0" encoding="utf-8" ?>',
        transitional: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
        strict: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
        frameset: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',
        1.1: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">',
        basic: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">',
        mobile: '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">',
        ce: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "ce-html-1.0-transitional.dtd">'
    }, n = {
        regular: "a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup datalist dd del details dfn div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd label legend li map mark menu meter nav noscript object ol optgroup option output p pre progress q rp rt ruby s samp section select small span strong sub summary sup table tbody td textarea tfoot th thead time title tr u ul video",
        raw: "script style",
        "void": "area base br col command embed hr img input keygen link meta param source track wbr",
        obsolete: "applet acronym bgsound dir frameset noframes isindex listing nextid noembed plaintext rb strike xmp big blink center font marquee multicol nobr spacer tt",
        obsolete_void: "basefont frame"
    }, i = function () {
        var t, e, i, r, o, s, a, l, u;
        for (e = 1 <= arguments.length ? v.call(arguments, 0) : [], r = [], o = 0, a = e.length; a > o; o++) for (t = e[o], u = n[t].split(" "), s = 0, l = u.length; l > s; s++) i = u[s], y.call(r, i) < 0 && r.push(i);
        return r
    }, t = function () {
        function t() {
            this.htmlOut = null
        }

        return t.prototype.resetBuffer = function (t) {
            var e;
            return null == t && (t = null), e = this.htmlOut, this.htmlOut = t, e
        }, t.prototype.render = function () {
            var t, e, n, i;
            i = arguments[0], t = 2 <= arguments.length ? v.call(arguments, 1) : [], e = this.resetBuffer("");
            try {
                i.apply(null, t)
            } finally {
                n = this.resetBuffer(e)
            }
            return n
        }, t.prototype.cede = function () {
            var t;
            return t = 1 <= arguments.length ? v.call(arguments, 0) : [], this.render.apply(this, t)
        }, t.prototype.renderable = function (t) {
            var e;
            return e = this, function () {
                var n, i;
                if (n = 1 <= arguments.length ? v.call(arguments, 0) : [], null === e.htmlOut) {
                    e.htmlOut = "";
                    try {
                        t.apply(this, n)
                    } finally {
                        i = e.resetBuffer()
                    }
                    return i
                }
                return t.apply(this, n)
            }
        }, t.prototype.renderAttr = function (t, e) {
            var n, i;
            return null == e ? " " + t : e === !1 ? "" : "data" === t && "object" == typeof e ? function () {
                var t;
                t = [];
                for (n in e) i = e[n], t.push(this.renderAttr("data-" + n, i));
                return t
            }.call(this).join("") : (e === !0 && (e = t), " " + t + "=" + this.quote(this.escape(e.toString())))
        }, t.prototype.attrOrder = ["id", "class"], t.prototype.renderAttrs = function (t) {
            var e, n, i, r, o, s;
            for (n = "", s = this.attrOrder, r = 0, o = s.length; o > r; r++) e = s[r], e in t && (n += this.renderAttr(e, t[e]), delete t[e]);
            for (e in t) i = t[e], n += this.renderAttr(e, i);
            return n
        }, t.prototype.renderContents = function (t) {
            return null != t ? "function" == typeof t ? t.call(this) : this.text(t) : void 0
        }, t.prototype.isSelector = function (t) {
            var e;
            return t.length > 1 && ("#" === (e = t[0]) || "." === e)
        }, t.prototype.parseSelector = function (t) {
            var e, n, i, r, o, s, a, l;
            for (n = null, e = [], a = t.split("."), o = 0, s = a.length; s > o; o++) r = a[o], n ? e.push(r) : (l = r.split("#"), i = l[0], n = l[1], "" !== i && e.push(r));
            return {id: n, classes: e}
        }, t.prototype.normalizeArgs = function (t) {
            var e, n, i, r, o, s, a, l, u;
            for (n = {}, a = null, r = null, s = l = 0, u = t.length; u > l; s = ++l) if (e = t[s], null != e) switch (typeof e) {
                case"string":
                    0 === s && this.isSelector(e) ? a = this.parseSelector(e) : r = e;
                    break;
                case"function":
                case"number":
                case"boolean":
                    r = e;
                    break;
                case"object":
                    e.constructor === Object ? n = e : r = e;
                    break;
                default:
                    r = e
            }
            return null != a && (o = a.id, i = a.classes, null != o && (n.id = o), (null != i ? i.length : void 0) && (n["class"] = i.join(" "))), {
                attrs: n,
                contents: r
            }
        }, t.prototype.tag = function () {
            var t, e, n, i, r;
            return i = arguments[0], t = 2 <= arguments.length ? v.call(arguments, 1) : [], r = this.normalizeArgs(t), e = r.attrs, n = r.contents, this.raw("<" + i + this.renderAttrs(e) + ">"), this.renderContents(n), this.raw("</" + i + ">")
        }, t.prototype.rawTag = function () {
            var t, e, n, i, r;
            return i = arguments[0], t = 2 <= arguments.length ? v.call(arguments, 1) : [], r = this.normalizeArgs(t), e = r.attrs, n = r.contents, this.raw("<" + i + this.renderAttrs(e) + ">"), this.raw(n), this.raw("</" + i + ">")
        }, t.prototype.selfClosingTag = function () {
            var t, e, n, i, r;
            if (i = arguments[0], t = 2 <= arguments.length ? v.call(arguments, 1) : [], r = this.normalizeArgs(t), e = r.attrs, n = r.contents) throw new Error("Teacup: <" + i + "/> must not have content.  Attempted to nest " + n);
            return this.raw("<" + i + this.renderAttrs(e) + " />")
        }, t.prototype.coffeescript = function (t) {
            return this.raw('<script type="text/javascript">(function() {\n  var __slice = [].slice,\n      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },\n      __hasProp = {}.hasOwnProperty,\n      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n  (' + t.toString() + ")();\n})();</script>")
        }, t.prototype.comment = function (t) {
            return this.raw("<!--" + this.escape(t) + "-->")
        }, t.prototype.doctype = function (t) {
            return null == t && (t = 5), this.raw(e[t])
        }, t.prototype.ie = function (t, e) {
            return this.raw("<!--[if " + this.escape(t) + "]>"), this.renderContents(e), this.raw("<![endif]-->")
        }, t.prototype.text = function (t) {
            if (null == this.htmlOut) throw new Error("Teacup: can't call a tag function outside a rendering context");
            return this.htmlOut += null != t && this.escape(t.toString()) || ""
        }, t.prototype.raw = function (t) {
            return null != t ? this.htmlOut += t : void 0
        }, t.prototype.escape = function (t) {
            return t.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, t.prototype.quote = function (t) {
            return '"' + t + '"'
        }, t.prototype.tags = function () {
            var t, e, n, r, o, s, a = this;
            for (t = {}, e = [].concat("cede coffeescript comment doctype escape ie raw render renderable script tag text".split(" "), i("regular", "obsolete", "raw", "void", "obsolete_void")), r = function (e) {
                return t[e] = function () {
                    var t;
                    return t = 1 <= arguments.length ? v.call(arguments, 0) : [], a[e].apply(a, t)
                }
            }, o = 0, s = e.length; s > o; o++) n = e[o], r(n);
            return t
        }, t
    }(), d = i("regular", "obsolete"), o = function (e) {
        return t.prototype[e] = function () {
            var t;
            return t = 1 <= arguments.length ? v.call(arguments, 0) : [], this.tag.apply(this, [e].concat(v.call(t)))
        }
    };
    for (l = 0, f = d.length; f > l; l++) r = d[l], o(r);
    for (m = i("raw"), s = function (e) {
        return t.prototype[e] = function () {
            var t;
            return t = 1 <= arguments.length ? v.call(arguments, 0) : [], this.rawTag.apply(this, [e].concat(v.call(t)))
        }
    }, u = 0, h = m.length; h > u; u++) r = m[u], s(r);
    for (g = i("void", "obsolete_void"), a = function (e) {
        return t.prototype[e] = function () {
            var t;
            return t = 1 <= arguments.length ? v.call(arguments, 0) : [], this.selfClosingTag.apply(this, [e].concat(v.call(t)))
        }
    }, c = 0, p = g.length; p > c; c++) r = g[c], a(r);
    ("undefined" != typeof module && null !== module ? module.exports : void 0) ? (module.exports = (new t).tags(), module.exports.Teacup = t) : "function" == typeof define && define.amd ? define("teacup", [], function () {
        return (new t).tags()
    }) : (window.teacup = (new t).tags(), window.teacup.Teacup = t)
}.call(this), function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length, n = K.type(t);
        return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (K.isFunction(e)) return K.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return K.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (at.test(e)) return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function (t) {
            return X.call(e, t) >= 0 !== n
        })
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function o(t) {
        var e = dt[t] = {};
        return K.each(t.match(pt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = K.expando + Math.random()
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(wt, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? K.parseJSON(n) : n
            } catch (r) {
            }
            yt.set(t, e, n)
        } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (t) {
        }
    }

    function h(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Ht.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var n = 0, i = t.length; i > n; n++) vt.set(t[n], "globalEval", !e || vt.get(e[n], "globalEval"))
    }

    function g(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (o = vt.access(t), s = vt.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u) for (n = 0, i = u[r].length; i > n; n++) K.event.add(e, r, u[r][n])
            }
            yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Tt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function b(e, n) {
        var i, r = K(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : K.css(r[0], "display");
        return r.detach(), o
    }

    function w(t) {
        var e = J, n = Rt[t];
        return n || (n = b(t, e), "none" !== n && n || (It = (It || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = It[0].contentDocument, e.write(), e.close(), n = b(t, e), It.detach()), Rt[t] = n), n
    }

    function x(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Wt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), Mt.test(s) && Bt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function C(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function $(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Qt.length; r--;) if (e = Qt[r] + n, e in t) return e;
        return i
    }

    function T(t, e, n) {
        var i = zt.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function k(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += K.css(t, n + Ct[o], !0, r)), i ? ("content" === n && (s -= K.css(t, "padding" + Ct[o], !0, r)), "margin" !== n && (s -= K.css(t, "border" + Ct[o] + "Width", !0, r))) : (s += K.css(t, "padding" + Ct[o], !0, r), "padding" !== n && (s += K.css(t, "border" + Ct[o] + "Width", !0, r)));
        return s
    }

    function E(t, e, n) {
        var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = Wt(t),
            s = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = x(t, e, o), (0 > r || null == r) && (r = t.style[e]), Mt.test(r)) return r;
            i = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + k(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function _(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = vt.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (o[s] = vt.access(i, "olddisplay", w(i.nodeName)))) : (r = $t(i), "none" === n && r || vt.set(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function S(t, e, n, i, r) {
        return new S.prototype.init(t, e, n, i, r)
    }

    function A() {
        return setTimeout(function () {
            Gt = void 0
        }), Gt = K.now()
    }

    function D(t, e) {
        var n, i = 0, r = {height: t};
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ct[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function N(t, e, n) {
        for (var i, r = (ne[e] || []).concat(ne["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i
    }

    function j(t, e, n) {
        var i, r, o, s, a, l, u, c, f = this, h = {}, p = t.style, d = t.nodeType && $t(t), m = vt.get(t, "fxshow");
        n.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = K.css(t, "display"), c = "none" === u ? vt.get(t, "olddisplay") || w(t.nodeName) : u, "inline" === c && "none" === K.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e) if (r = e[i], Zt.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                d = !0
            }
            h[i] = m && m[i] || K.style(t, i)
        } else u = void 0;
        if (K.isEmptyObject(h)) "inline" === ("none" === u ? w(t.nodeName) : u) && (p.display = u); else {
            m ? "hidden" in m && (d = m.hidden) : m = vt.access(t, "fxshow", {}), o && (m.hidden = !d), d ? K(t).show() : f.done(function () {
                K(t).hide()
            }), f.done(function () {
                var e;
                vt.remove(t, "fxshow");
                for (e in h) K.style(t, e, h[e])
            });
            for (i in h) s = N(d ? m[i] : 0, i, f), i in m || (m[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(t, e) {
        var n, i, r, o, s;
        for (n in t) if (i = K.camelCase(n), r = e[i], o = t[n], K.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = K.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete t[i];
            for (n in o) n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }

    function L(t, e, n) {
        var i, r, o = 0, s = ee.length, a = K.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var e = Gt || A(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {specialEasing: {}}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Gt || A(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = K.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) u.tweens[n].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (P(c, u.opts.specialEasing); s > o; o++) if (i = ee[o].call(u, t, c, u.opts)) return i;
        return K.map(c, N, u), K.isFunction(u.opts.start) && u.opts.start.call(t, u), K.fx.timer(K.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function O(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(pt) || [];
            if (K.isFunction(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function H(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, K.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var o = {}, s = t === xe;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function F(t, e) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && K.extend(!0, t, i), t
    }

    function q(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break
        }
        if (l[0] in n) o = l[0]; else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function I(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s) for (r in u) if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e); else try {
                e = s(e)
            } catch (f) {
                return {state: "parsererror", error: s ? f : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function R(t, e, n, i) {
        var r;
        if (K.isArray(e)) K.each(e, function (e, r) {
            n || ke.test(t) ? i(t, r) : R(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        }); else if (n || "object" !== K.type(e)) i(t, e); else for (r in e) R(t + "[" + r + "]", e[r], n, i)
    }

    function B(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var M = [], W = M.slice, U = M.concat, z = M.push, X = M.indexOf, V = {}, Y = V.toString, Q = V.hasOwnProperty,
        G = {}, J = t.document, Z = "2.1.1", K = function (t, e) {
            return new K.fn.init(t, e)
        }, tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, et = /^-ms-/, nt = /-([\da-z])/gi, it = function (t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: Z, constructor: K, selector: "", length: 0, toArray: function () {
            return W.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
        }, pushStack: function (t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return K.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(K.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(W.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: z, sort: M.sort, splice: M.splice
    }, K.extend = K.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], i = t[e], s !== i && (u && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[e] = K.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, K.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === K.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            return !K.isArray(t) && t - parseFloat(t) >= 0
        }, isPlainObject: function (t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[Y.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        }, camelCase: function (t) {
            return t.replace(et, "ms-").replace(nt, it)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, i) {
            var r, o = 0, s = t.length, a = n(t);
            if (i) {
                if (a) for (; s > o && (r = e.apply(t[o], i), r !== !1); o++) ; else for (o in t) if (r = e.apply(t[o], i), r === !1) break
            } else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++) ; else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(tt, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [t] : t) : z.call(i, t)), i
        }, inArray: function (t, e, n) {
            return null == e ? -1 : X.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        }, map: function (t, e, i) {
            var r, o = 0, s = t.length, a = n(t), l = [];
            if (a) for (; s > o; o++) r = e(t[o], o, i), null != r && l.push(r); else for (o in t) r = e(t[o], o, i), null != r && l.push(r);
            return U.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (i = W.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(W.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
        }, now: Date.now, support: G
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, f, p, d, m;
            if ((e ? e.ownerDocument || e : R) !== j && N(e), e = e || j, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (L && !i) {
                if (r = yt.exec(t)) if (s = r[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && q(e, o) && o.id === s) return n.push(o), n
                } else {
                    if (r[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                    if ((s = r[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(s)), n
                }
                if (x.qsa && (!O || !O.test(t))) {
                    if (p = f = I, d = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = k(t), (f = e.getAttribute("id")) ? p = f.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                        d = bt.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(n, d.querySelectorAll(m)), n
                    } catch (g) {
                    } finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return _(t.replace(lt, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            var e = [];
            return t
        }

        function i(t) {
            return t[I] = !0, t
        }

        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function f() {
        }

        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = M++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, o)
            } : function (e, n, s) {
                var a, l, u = [B, o];
                if (s) {
                    for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else for (; e = e[i];) if (1 === e.nodeType || r) {
                    if (l = e[I] || (e[I] = {}), (a = l[i]) && a[0] === B && a[1] === o) return u[2] = a[2];
                    if (l[i] = u, u[2] = t(e, n, s)) return !0
                }
            }
        }

        function d(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++) (o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, s)), i(function (i, s, a, l) {
                var u, c, f, h = [], p = [], d = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, h, t, a, l), b = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, b, a, l), r) for (u = g(b, p), r(u, [], a, l), c = u.length; c--;) (f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;) (f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;) (f = b[c]) && (u = o ? et.call(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
                    }
                } else b = g(b === s ? b.splice(d, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = C.relative[t[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                return t === e
            }, s, !0), u = p(function (t) {
                return et.call(e, t) > -1
            }, s, !0), c = [function (t, n, i) {
                return !o && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }]; r > a; a++) if (n = C.relative[t[a].type]) c = [p(d(c), n)]; else {
                if (n = C.filter[t[a].type].apply(null, t[a].matches), n[I]) {
                    for (i = ++a; r > i && !C.relative[t[i].type]; i++) ;
                    return v(a > 1 && d(c), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                }
                c.push(n)
            }
            return d(c)
        }

        function b(t, n) {
            var r = n.length > 0, o = t.length > 0, s = function (i, s, a, l, u) {
                var c, f, h, p = 0, d = "0", m = i && [], v = [], y = S, b = i || o && C.find.TAG("*", u),
                    w = B += null == y ? 1 : Math.random() || .1, x = b.length;
                for (u && (S = s !== j && s); d !== x && null != (c = b[d]); d++) {
                    if (o && c) {
                        for (f = 0; h = t[f++];) if (h(c, s, a)) {
                            l.push(c);
                            break
                        }
                        u && (B = w)
                    }
                    r && ((c = !h && c) && p--, i && m.push(c))
                }
                if (p += d, r && d !== p) {
                    for (f = 0; h = n[f++];) h(m, v, s, a);
                    if (i) {
                        if (p > 0) for (; d--;) m[d] || v[d] || (v[d] = J.call(l));
                        v = g(v)
                    }
                    K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (B = w, S = y), m
            };
            return r ? i(s) : s
        }

        var w, x, C, $, T, k, E, _, S, A, D, N, j, P, L, O, H, F, q, I = "sizzle" + -new Date, R = t.document, B = 0,
            M = 0, W = n(), U = n(), z = n(), X = function (t, e) {
                return t === e && (D = !0), 0
            }, V = "undefined", Y = 1 << 31, Q = {}.hasOwnProperty, G = [], J = G.pop, Z = G.push, K = G.push, tt = G.slice,
            et = G.indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = rt.replace("w", "w#"),
            st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
            at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ut = new RegExp("^" + it + "*," + it + "*"), ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ft = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ht = new RegExp(at),
            pt = new RegExp("^" + ot + "$"), dt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), Ct = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            K.apply(G = tt.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch ($t) {
            K = {
                apply: G.length ? function (t, e) {
                    Z.apply(t, tt.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : R, i = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, P = n.documentElement, L = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                N()
            })), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = r(function (t) {
                return P.appendChild(t).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (C.find.ID = function (t, e) {
                if (typeof e.getElementById !== V && L) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (t) {
                var e = t.replace(xt, Ct);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function (t) {
                var e = t.replace(xt, Ct);
                return function (t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== V && L ? e.getElementsByClassName(t) : void 0
            }, H = [], O = [], (x.qsa = vt.test(n.querySelectorAll)) && (r(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
            }), r(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = vt.test(F = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), H.push("!=", at)
            }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), e = vt.test(P.compareDocumentPosition), q = e || vt.test(P.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, X = e ? function (t, e) {
                if (t === e) return D = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && q(R, t) ? -1 : e === n || e.ownerDocument === R && q(R, e) ? 1 : A ? et.call(A, t) - et.call(A, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return D = !0, 0;
                var i, r = 0, o = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : A ? et.call(A, t) - et.call(A, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[r] === u[r];) r++;
                return r ? s(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            }, n) : j
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== j && N(t), n = n.replace(ft, "='$1']"), x.matchesSelector && L && (!H || !H.test(n)) && (!O || !O.test(n))) try {
                var i = F.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {
            }
            return e(n, j, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && N(t), q(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== j && N(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i : x.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (D = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(X), D) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null, t
        }, $ = e.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += $(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[i++];) n += $(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(xt, Ct).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0;
                    }
                }, CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, f, h, p, d, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = e; f = f[m];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[I] || (g[I] = {}), u = c[t] || [], p = u[0] === B && u[1], h = u[0] === B && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (h = p = 0) || d.pop();) if (1 === f.nodeType && ++h && f === e) {
                                    c[t] = [B, p, h];
                                    break
                                }
                            } else if (y && (u = (e[I] || (e[I] = {}))[t]) && u[0] === B) h = u[1]; else for (; (f = ++p && f && f[m] || (h = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++h || (y && ((f[I] || (f[I] = {}))[t] = [B, h]), f !== e));) ;
                            return h -= r, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[I] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = et.call(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [], n = [], r = E(t.replace(lt, "$1"));
                    return r[I] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }), has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: i(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
                    }
                }), lang: i(function (t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Ct).toLowerCase(), function (e) {
                        var n;
                        do if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === P
                }, focus: function (t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !C.pseudos.empty(t)
                }, header: function (t) {
                    return gt.test(t.nodeName)
                }, input: function (t) {
                    return mt.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (t, e) {
                    return [e - 1]
                }), eq: u(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }), even: u(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }), odd: u(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }), lt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }), gt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[w] = a(w);
        for (w in{submit: !0, reset: !0}) C.pseudos[w] = l(w);
        return f.prototype = C.filters = C.pseudos, C.setFilters = new f, k = e.tokenize = function (t, n) {
            var i, r, o, s, a, l, u, c = U[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = C.preFilter; a;) {
                (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, E = e.compile = function (t, e) {
            var n, i = [], r = [], o = z[t + " "];
            if (!o) {
                for (e || (e = k(t)), n = e.length; n--;) o = y(e[n]), o[I] ? i.push(o) : r.push(o);
                o = z(t, b(r, i)), o.selector = t
            }
            return o
        }, _ = e.select = function (t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, f = !i && k(t = u.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && L && C.relative[o[1].type]) {
                    if (e = (C.find.ID(s.matches[0].replace(xt, Ct), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);) if ((l = C.find[a]) && (i = l(s.matches[0].replace(xt, Ct), bt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), t = i.length && h(o), !t) return K.apply(n, i), n;
                    break
                }
            }
            return (u || E(t, f))(i, e, !L, n, bt.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = I.split("").sort(X).join("") === I, x.detectDuplicates = !!D, N(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(nt, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
    var ot = K.expr.match.needsContext, st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^.[^:#\[\.,]*$/;
    K.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [i] : [] : K.find.matches(t, K.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function (t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function () {
                for (e = 0; n > e; e++) if (K.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) K.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        }, is: function (t) {
            return !!i(this, "string" == typeof t && ot.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = K.fn.init = function (t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), st.test(n[1]) && K.isPlainObject(e)) for (n in e) K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
    };
    ct.prototype = K.fn, lt = K(J);
    var ft = /^(?:parents|prev(?:Until|All))/, ht = {children: !0, contents: !0, next: !0, prev: !0};
    K.extend({
        dir: function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && K(t).is(n)) break;
                i.push(t)
            }
            return i
        }, sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), K.fn.extend({
        has: function (t) {
            var e = K(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++) if (K.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? X.call(K(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return K.dir(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return K.dir(t, "parentNode", n)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return K.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return K.dir(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return K.dir(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return K.dir(t, "previousSibling", n)
        }, siblings: function (t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return K.sibling(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function (t, e) {
        K.fn[t] = function (n, i) {
            var r = K.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = K.filter(i, r)), this.length > 1 && (ht[t] || K.unique(r), ft.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var pt = /\S+/g, dt = {};
    K.Callbacks = function (t) {
        t = "string" == typeof t ? dt[t] || o(t) : K.extend({}, t);
        var e, n, i, r, s, a, l = [], u = !t.once && [], c = function (o) {
            for (e = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && s > a; a++) if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                e = !1;
                break
            }
            i = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : f.disable())
        }, f = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function o(e) {
                        K.each(e, function (e, n) {
                            var i = K.type(n);
                            "function" === i ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), i ? s = l.length : e && (r = n, c(e))
                }
                return this
            }, remove: function () {
                return l && K.each(arguments, function (t, e) {
                    for (var n; (n = K.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (t) {
                return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], s = 0, this
            }, disable: function () {
                return l = u = e = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, e || f.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (t, e) {
                return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? u.push(e) : c(e)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, K.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return K.Deferred(function (n) {
                            K.each(e, function (e, o) {
                                var s = K.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? K.extend(t, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, K.each(e, function (t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, n, i, r = 0, o = W.call(arguments), s = o.length,
                a = 1 !== s || t && K.isFunction(t.promise) ? s : 0, l = 1 === a ? t : K.Deferred(),
                u = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? W.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var mt;
    K.fn.ready = function (t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? K.readyWait++ : K.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (mt.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
        }
    }), K.ready.promise = function (e) {
        return mt || (mt = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), mt.promise(e)
    }, K.ready.promise();
    var gt = K.access = function (t, e, n, i, r, o, s) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === K.type(n)) {
            r = !0;
            for (a in n) K.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, K.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
            return u.call(K(t), n)
        })), e)) for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    };
    K.acceptData = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function (t) {
            if (!a.accepts(t)) return 0;
            var e = {}, n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {value: n}, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (t, e, n) {
            var i, r = this.key(t), o = this.cache[r];
            if ("string" == typeof e) o[e] = n; else if (K.isEmptyObject(o)) K.extend(this.cache[r], e); else for (i in e) o[i] = e[i];
            return o
        }, get: function (t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        }, access: function (t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i, r, o = this.key(t), s = this.cache[o];
            if (void 0 === e) this.cache[o] = {}; else {
                K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(pt) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        }, hasData: function (t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        }, discard: function (t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new a, yt = new a, bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, wt = /([A-Z])/g;
    K.extend({
        hasData: function (t) {
            return yt.hasData(t) || vt.hasData(t)
        }, data: function (t, e, n) {
            return yt.access(t, e, n)
        }, removeData: function (t, e) {
            yt.remove(t, e)
        }, _data: function (t, e, n) {
            return vt.access(t, e, n)
        }, _removeData: function (t, e) {
            vt.remove(t, e)
        }
    }), K.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)), l(o, i, r[i])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                yt.set(this, t)
            }) : gt(this, function (e) {
                var n, i = K.camelCase(t);
                if (o && void 0 === e) {
                    if (n = yt.get(o, t), void 0 !== n) return n;
                    if (n = yt.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = yt.get(this, i);
                    yt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                yt.remove(this, t)
            })
        }
    }), K.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = vt.get(t, e), n && (!i || K.isArray(n) ? i = vt.access(t, e, K.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = K.queue(t, e), i = n.length, r = n.shift(), o = K._queueHooks(t, e), s = function () {
                K.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return vt.get(t, n) || vt.access(t, n, {
                empty: K.Callbacks("once memory").add(function () {
                    vt.remove(t, [e + "queue", n])
                })
            })
        }
    }), K.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                K.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, r = K.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = vt.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ct = ["Top", "Right", "Bottom", "Left"],
        $t = function (t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        }, Tt = /^(?:checkbox|radio)$/i;
    !function () {
        var t = J.createDocumentFragment(), e = t.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    G.focusinBubbles = "onfocusin" in t;
    var Et = /^key/, _t = /^(?:mouse|pointer|contextmenu)|click/, St = /^(?:focusinfocus|focusoutblur)$/,
        At = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, l, u, c, f, h, p, d, m, g = vt.get(t);
            if (g) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = K.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
                return typeof K !== kt && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(pt) || [""], u = e.length; u--;) a = At.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (f = K.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = K.event.special[p] || {}, c = K.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && K.expr.match.needsContext.test(r),
                namespace: d.join(".")
            }, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(p, s, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), K.event.global[p] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, u, c, f, h, p, d, m, g = vt.hasData(t) && vt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(pt) || [""], u = e.length; u--;) if (a = At.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                    for (f = K.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                    s && !h.length && (f.teardown && f.teardown.call(t, d, g.handle) !== !1 || K.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) K.event.remove(t, p + e[u], n, i, !0);
                K.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
            }
        },
        trigger: function (e, n, i, r) {
            var o, s, a, l, u, c, f, h = [i || J], p = Q.call(e, "type") ? e.type : e,
                d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : K.makeArray(n, [e]), f = K.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !K.isWindow(i)) {
                    for (l = f.delegateType || p, St.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || J) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : f.bindType || p, c = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && K.acceptData(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !K.acceptData(i) || u && K.isFunction(i[p]) && !K.isWindow(i) && (a = i[u], a && (i[u] = null), K.event.triggered = p, i[p](), K.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        },
        dispatch: function (t) {
            t = K.event.fix(t);
            var e, n, i, r, o, s = [], a = W.call(arguments), l = (vt.get(this, "events") || {})[t.type] || [],
                u = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = K.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) (!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== t.type) {
                for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), i[r] && i.push(o);
                i.length && s.push({elem: l, handlers: i})
            }
            return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[K.expando]) return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = _t.test(r) ? this.mouseHooks : Et.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new K.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return K.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var r = K.extend(new K.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
            i ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function (t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        K.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return (!r || r !== i && !K.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), G.focusinBubbles || K.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, r = vt.access(i, e);
                r || i.addEventListener(t, n, !0), vt.access(i, e, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = vt.access(i, e) - 1;
                r ? vt.access(i, e, r) : (i.removeEventListener(t, n, !0), vt.remove(i, e))
            }
        }
    }), K.fn.extend({
        on: function (t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = c; else if (!i) return this;
            return 1 === r && (o = i, i = function (t) {
                return K().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = K.guid++)), this.each(function () {
                K.event.add(this, t, i, n, e)
            })
        }, one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function () {
                K.event.remove(this, t, n, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                K.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Nt = /<([\w:]+)/,
        jt = /<|&#?\w+;/, Pt = /<(?:script|style|link)/i, Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ot = /^$|\/(?:java|ecma)script/i, Ht = /^true\/(.*)/, Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td, K.extend({
        clone: function (t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), l = K.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t))) for (s = v(a), o = v(t), i = 0, r = o.length; r > i; i++) y(o[i], s[i]);
            if (e) if (n) for (o = o || v(t), s = s || v(a), i = 0, r = o.length; r > i; i++) g(o[i], s[i]); else g(t, a);
            return s = v(a, "script"), s.length > 0 && m(s, !l && v(t, "script")), a
        }, buildFragment: function (t, e, n, i) {
            for (var r, o, s, a, l, u, c = e.createDocumentFragment(), f = [], h = 0, p = t.length; p > h; h++) if (r = t[h], r || 0 === r) if ("object" === K.type(r)) K.merge(f, r.nodeType ? [r] : r); else if (jt.test(r)) {
                for (o = o || c.appendChild(e.createElement("div")), s = (Nt.exec(r) || ["", ""])[1].toLowerCase(), a = qt[s] || qt._default, o.innerHTML = a[1] + r.replace(Dt, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(e.createTextNode(r));
            for (c.textContent = "", h = 0; r = f[h++];) if ((!i || -1 === K.inArray(r, i)) && (l = K.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), l && m(o), n)) for (u = 0; r = o[u++];) Ot.test(r.type || "") && n.push(r);
            return c
        }, cleanData: function (t) {
            for (var e, n, i, r, o = K.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (K.acceptData(n) && (r = n[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events) for (i in e.events) o[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), K.fn.extend({
        text: function (t) {
            return gt(this, function (t) {
                return void 0 === t ? K.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var n, i = t ? K.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return K.clone(this, t, e)
            })
        }, html: function (t) {
            return gt(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Pt.test(t) && !qt[(Nt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Dt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = U.apply([], t);
            var n, i, r, o, s, a, l = 0, u = this.length, c = this, f = u - 1, h = t[0], m = K.isFunction(h);
            if (m || u > 1 && "string" == typeof h && !G.checkClone && Lt.test(h)) return this.each(function (n) {
                var i = c.eq(n);
                m && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
            });
            if (u && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = K.map(v(n, "script"), p), o = r.length; u > l; l++) s = n, l !== f && (s = K.clone(s, !0, !0), o && K.merge(r, v(s, "script"))), e.call(this[l], s, l);
                if (o) for (a = r[r.length - 1].ownerDocument, K.map(r, d), l = 0; o > l; l++) s = r[l], Ot.test(s.type || "") && !vt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Ft, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        K.fn[t] = function (t) {
            for (var n, i = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), K(r[s])[e](n), z.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var It, Rt = {}, Bt = /^margin/, Mt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"), Wt = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    };
    !function () {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
        }

        var n, i, r = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && K.extend(G, {
            pixelPosition: function () {
                return e(), n
            }, boxSizingReliable: function () {
                return null == i && e(), i
            }, reliableMarginRight: function () {
                var e, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), e
            }
        }))
    }(), K.swap = function (t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var Ut = /^(none|table(?!-c[ea]).+)/, zt = new RegExp("^(" + xt + ")(.*)$", "i"),
        Xt = new RegExp("^([+-])=(" + xt + ")", "i"),
        Vt = {position: "absolute", visibility: "hidden", display: "block"},
        Yt = {letterSpacing: "0", fontWeight: "400"}, Qt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = K.camelCase(e), l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = $(l, a)), s = K.cssHooks[e] || K.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Xt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n)), void 0)
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = $(t.style, a)), s = K.cssHooks[e] || K.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = x(t, e, i)), "normal" === r && e in Yt && (r = Yt[e]), "" === n || n ? (o = parseFloat(r), n === !0 || K.isNumeric(o) ? o || 0 : r) : r
        }
    }), K.each(["height", "width"], function (t, e) {
        K.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? Ut.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Vt, function () {
                    return E(t, e, i)
                }) : E(t, e, i) : void 0
            }, set: function (t, n, i) {
                var r = i && Wt(t);
                return T(t, n, i ? k(t, e, i, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = C(G.reliableMarginRight, function (t, e) {
        return e ? K.swap(t, {display: "inline-block"}, x, [t, "marginRight"]) : void 0
    }), K.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        K.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ct[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Bt.test(t) || (K.cssHooks[t + e].set = T)
    }), K.fn.extend({
        css: function (t, e) {
            return gt(this, function (t, e, n) {
                var i, r, o = {}, s = 0;
                if (K.isArray(e)) {
                    for (i = Wt(t), r = e.length; r > s; s++) o[e[s]] = K.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return _(this, !0)
        }, hide: function () {
            return _(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                $t(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = S, S.prototype = {
        constructor: S, init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = S.propHooks[this.prop];
            return t && t.get ? t.get(this) : S.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = S.propHooks[this.prop];
            return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = S.prototype.init, K.fx.step = {};
    var Gt, Jt, Zt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/, ee = [j], ne = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), r = Kt.exec(e), o = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                    s = (K.cssNumber[t] || "px" !== o && +i) && Kt.exec(K.css(n.elem, t)), a = 1, l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, K.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    K.Animation = K.extend(L, {
        tweener: function (t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ne[n] = ne[n] || [], ne[n].unshift(e)
        }, prefilter: function (t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }), K.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? K.extend({}, t) : {
            complete: n || !n && e || K.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !K.isFunction(e) && e
        };
        return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
        }, i
    }, K.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter($t).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var r = K.isEmptyObject(t), o = K.speed(e, n, i), s = function () {
                var e = L(this, K.extend({}, t), o);
                (r || vt.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", o = K.timers, s = vt.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && te.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && K.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = vt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = K.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), K.each(["toggle", "show", "hide"], function (t, e) {
        var n = K.fn[e];
        K.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, r)
        }
    }), K.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        K.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), K.timers = [], K.fx.tick = function () {
        var t, e = 0, n = K.timers;
        for (Gt = K.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Gt = void 0
    }, K.fx.timer = function (t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function () {
        Jt || (Jt = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function () {
        clearInterval(Jt), Jt = null
    }, K.fx.speeds = {slow: 600, fast: 200, _default: 400}, K.fn.delay = function (t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var t = J.createElement("input"), e = J.createElement("select"), n = e.appendChild(J.createElement("option"));
        t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
    }();
    var ie, re, oe = K.expr.attrHandle;
    K.fn.extend({
        attr: function (t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === kt ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), i = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ie)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var n, i, r = 0, o = e && e.match(pt);
            if (o && 1 === t.nodeType) for (; n = o[r++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), re = {
        set: function (t, e, n) {
            return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = oe[e] || K.find.attr;
        oe[e] = function (t, e, i) {
            var r, o;
            return i || (o = oe[e], oe[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, oe[e] = o), r
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function (t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (K.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a = "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t)) return this.each(function (e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(pt) || []; u > l; l++) if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s = K.trim(i), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t)) return this.each(function (e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(pt) || []; u > l; l++) if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                for (o = 0; r = e[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                s = t ? K.trim(i) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function (n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n) for (var e, i = 0, r = K(this), o = t.match(pt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else (n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            {
                if (arguments.length) return i = K.isFunction(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], (n.selected || l === r) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                        if (e = K(n).val(), o) return e;
                        s.push(e)
                    }
                    return s
                }, set: function (t, e) {
                    for (var n, i, r = t.options, o = K.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = K.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = {
            set: function (t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, G.checkOn || (K.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        K.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ue = K.now(), ce = /\?/;
    K.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, K.parseXML = function (t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var fe, he, pe = /#.*$/, de = /([?&])_=[^&]*/, me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ve = /^(?:GET|HEAD)$/, ye = /^\/\//,
        be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, we = {}, xe = {}, Ce = "*/".concat("*");
    try {
        he = location.href
    } catch ($e) {
        he = J.createElement("a"), he.href = "", he = he.href
    }
    fe = be.exec(he.toLowerCase()) || [], K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: he,
            type: "GET",
            isLocal: ge.test(fe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ce,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? F(F(t, K.ajaxSettings), e) : F(K.ajaxSettings, t)
        },
        ajaxPrefilter: O(we),
        ajaxTransport: O(xe),
        ajax: function (t, e) {
            function n(t, e, n, s) {
                var l, c, v, y, w, C = e;
                2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = q(f, x, n)), y = I(f, y, x, l), l ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (K.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (K.etag[r] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", l ? d.resolveWith(h, [c, C, x]) : d.rejectWith(h, [x, C, v]), x.statusCode(g), g = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? c : v]), m.fireWith(h, [x, C]), u && (p.trigger("ajaxComplete", [x, f]), --K.active || K.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, l, u, c, f = K.ajaxSetup({}, e), h = f.context || f,
                p = f.context && (h.nodeType || h.jquery) ? K(h) : K.event, d = K.Deferred(),
                m = K.Callbacks("once memory"), g = f.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!s) for (s = {}; e = me.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    }, setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    }, overrideMimeType: function (t) {
                        return b || (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (2 > b) for (e in t) g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                        return this
                    }, abort: function (t) {
                        var e = t || w;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (d.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || he) + "").replace(pe, "").replace(ye, fe[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (l = be.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === fe[1] && l[2] === fe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (fe[3] || ("http:" === fe[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), H(we, f, e, x), 2 === b) return x;
            u = f.global, u && 0 === K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ve.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (ce.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = de.test(r) ? r.replace(de, "$1_=" + ue++) : r + (ce.test(r) ? "&" : "?") + "_=" + ue++)), f.ifModified && (K.lastModified[r] && x.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && x.setRequestHeader("If-None-Match", K.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ce + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, x, f) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (c in{success: 1, error: 1, complete: 1}) x[c](f[c]);
            if (i = H(xe, f, e, x)) {
                x.readyState = 1, u && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function (t, e) {
        K[e] = function (t, n, i, r) {
            return K.isFunction(n) && (r = r || i, i = n, n = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        K.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), K._evalUrl = function (t) {
        return K.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, K.fn.extend({
        wrapAll: function (t) {
            var e;
            return K.isFunction(t) ? this.each(function (e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        }, wrapInner: function (t) {
            return K.isFunction(t) ? this.each(function (e) {
                K(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = K(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = K.isFunction(t);
            return this.each(function (n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function (t) {
        return !K.expr.filters.hidden(t)
    };
    var Te = /%20/g, ke = /\[\]$/, Ee = /\r?\n/g, _e = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    K.param = function (t, e) {
        var n, i = [], r = function (t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function () {
            r(this.name, this.value)
        }); else for (n in t) R(n, t[n], e, r);
        return i.join("&").replace(Te, "+")
    }, K.fn.extend({
        serialize: function () {
            return K.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && Se.test(this.nodeName) && !_e.test(t) && (this.checked || !Tt.test(t))
            }).map(function (t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function (t) {
                    return {name: e.name, value: t.replace(Ee, "\r\n")}
                }) : {name: e.name, value: n.replace(Ee, "\r\n")}
            }).get()
        }
    }), K.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (t) {
        }
    };
    var Ae = 0, De = {}, Ne = {0: 200, 1223: 204}, je = K.ajaxSettings.xhr();
    t.ActiveXObject && K(t).on("unload", function () {
        for (var t in De) De[t]()
    }), G.cors = !!je && "withCredentials" in je, G.ajax = je = !!je, K.ajaxTransport(function (t) {
        var e;
        return G.cors || je && !t.crossDomain ? {
            send: function (n, i) {
                var r, o = t.xhr(), s = ++Ae;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                e = function (t) {
                    return function () {
                        e && (delete De[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(Ne[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = De[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            }, abort: function () {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Pe = [], Le = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Pe.pop() || K.expando + "_" + ue++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s,
            a = e.jsonp !== !1 && (Le.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || K.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Pe.push(r)), s && K.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), K.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var i = st.exec(t), r = !n && [];
        return i ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], i.childNodes))
    };
    var Oe = K.fn.load;
    K.fn.load = function (t, e, n) {
        if ("string" != typeof t && Oe) return Oe.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t)
        }).complete(n && function (t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, K.expr.filters.animated = function (t) {
        return K.grep(K.timers, function (e) {
            return t === e.elem
        }).length
    };
    var He = t.document.documentElement;
    K.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, u, c = K.css(t, "position"), f = K(t), h = {};
            "static" === c && (t.style.position = "relative"), a = f.offset(), o = K.css(t, "top"), l = K.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : f.css(h)
        }
    }, K.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                K.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
            if (o) return e = o.documentElement, K.contains(e, i) ? (typeof i.getBoundingClientRect !== kt && (r = i.getBoundingClientRect()), n = B(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r
        }, position: function () {
            if (this[0]) {
                var t, e, n = this[0], i = {top: 0, left: 0};
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (i = t.offset()), i.top += K.css(t[0], "borderTopWidth", !0), i.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - K.css(n, "marginTop", !0),
                    left: e.left - i.left - K.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || He; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || He
            })
        }
    }), K.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var i = "pageYOffset" === n;
        K.fn[e] = function (r) {
            return gt(this, function (e, r, o) {
                var s = B(e);
                return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function (t, e) {
        K.cssHooks[e] = C(G.pixelPosition, function (t, n) {
            return n ? (n = x(t, e), Mt.test(n) ? K(t).position()[e] + "px" : n) : void 0
        })
    }), K.each({Height: "height", Width: "width"}, function (t, e) {
        K.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            K.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return gt(this, function (e, n, i) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? K.css(e, n, s) : K.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), K.fn.size = function () {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return K
    });
    var Fe = t.jQuery, qe = t.$;
    return K.noConflict = function (e) {
        return t.$ === K && (t.$ = qe), e && t.jQuery === K && (t.jQuery = Fe), K
    }, typeof e === kt && (t.jQuery = t.$ = K), K
}), !jQuery) throw new Error("Bootstrap requires jQuery");
+function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e) if (void 0 !== t.style[n]) return {end: e[n]}
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one(t.support.transition.end, function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e()
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]', n = function (n) {
        t(n).on("click", e, this.close)
    };
    n.prototype.close = function (e) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }

        var i = t(this), r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(r);
        e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i)
    };
    e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (t) {
        var e = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", r = n.data();
        t += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[t] || this.options[t]), setTimeout(function () {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var e = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === e.prop("type") && t.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.button"), o = "object" == typeof n && n;
            r || i.data("bs.button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, e.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, e.prototype.to = function (e) {
        var n = this, i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid", function () {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function (e, n) {
        var i = this.$element.find(".item.active"), r = n || i[e](), o = this.interval,
            s = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        this.sliding = !0, o && this.pause();
        var u = t.Event("slide.bs.carousel", {relatedTarget: r[0], direction: s});
        if (!r.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var e = t(l.$indicators.children()[l.getActiveIndex()]);
                e && e.addClass("active")
            })), t.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one(t.support.transition.end, function () {
                    r.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return o && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.carousel"),
                o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                s = "string" == typeof n ? n : o.slide;
            r || i.data("bs.carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var n, i = t(this), r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = t.extend({}, r.data(), i.data()), s = i.attr("data-slide-to");
        s && (o.interval = !1), r.carousel(o), (s = i.attr("data-slide-to")) && r.data("bs.carousel").to(s), e.preventDefault()
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {toggle: !0}, e.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning) return;
                    n.collapse("hide"), i || n.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var o = function () {
                    this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                var s = t.camelCase(["scroll", r].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
            }
        }
    }, e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = t.fn.collapse;
    t.fn.collapse = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.collapse"),
                o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            r || i.data("bs.collapse", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (e) {
        var n, i = t(this),
            r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(r), s = o.data("bs.collapse"), a = s ? "toggle" : i.data(), l = i.attr("data-parent"), u = l && t(l);
        s && s.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
    })
}(window.jQuery), +function (t) {
    "use strict";

    function e() {
        t(i).remove(), t(r).each(function (e) {
            var i = n(t(this));
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown")), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    var i = ".dropdown-backdrop", r = "[data-toggle=dropdown]", o = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    o.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r), s = o.hasClass("open");
            if (e(), !s) {
                if ("ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e), o.trigger(i = t.Event("show.bs.dropdown")), i.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown"), r.focus()
            }
            return !1
        }
    }, o.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i), s = o.hasClass("open");
                if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(r).focus(), i.click();
                var a = t("[role=menu] li:not(.divider):visible a", o);
                if (a.length) {
                    var l = a.index(a.filter(":focus"));
                    38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).focus()
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this), i = n.data("dropdown");
            i || n.data("dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", o.prototype.keydown)
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    e.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, e.prototype.toggle = function (t) {
        return this[this.isShown ? "hide" : "show"](t)
    }, e.prototype.show = function (e) {
        var n = this, i = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {relatedTarget: e});
            i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                n.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
        }))
    }, e.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        }, this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var n = t.fn.modal;
    t.fn.modal = function (n, i) {
        return this.each(function () {
            var r = t(this), o = r.data("bs.modal"), s = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
            o || r.data("bs.modal", o = new e(this, s)), "string" == typeof n ? o[n](i) : s.show && o.show(i)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var n = t(this), i = n.attr("href"), r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, r.data(), n.data());
        e.preventDefault(), r.modal(o, this).one("hide", function () {
            n.is(":visible") && n.focus()
        })
    }), t(document).on("show.bs.modal", ".modal", function () {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        t(document.body).removeClass("modal-open")
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function (e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focus", l = "hover" == s ? "mouseleave" : "blur";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, e.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i, o = r.test(i);
            o && (i = i.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var s = this.getPosition(), a = n[0].offsetWidth, l = n[0].offsetHeight;
            if (o) {
                var u = this.$element.parent(), c = i,
                    f = document.documentElement.scrollTop || document.body.scrollTop,
                    h = "body" == this.options.container ? window.innerWidth : u.outerWidth(),
                    p = "body" == this.options.container ? window.innerHeight : u.outerHeight(),
                    d = "body" == this.options.container ? 0 : u.offset().left;
                i = "bottom" == i && s.top + s.height + l - f > p ? "top" : "top" == i && s.top - f - l < 0 ? "bottom" : "right" == i && s.right + a > h ? "left" : "left" == i && s.left - a < d ? "right" : i, n.removeClass(c).addClass(i)
            }
            var m = this.getCalculatedOffset(i, s, a, l);
            this.applyPlacement(m, i), this.$element.trigger("shown.bs." + this.type)
        }
    }, e.prototype.applyPlacement = function (t, e) {
        var n, i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, i.offset(t).addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        if ("top" == e && u != o && (n = !0, t.top = t.top + o - u), /bottom|top/.test(e)) {
            var c = 0;
            t.left < 0 && (c = -2 * t.left, t.left = 0, i.offset(t), l = i[0].offsetWidth, u = i[0].offsetHeight), this.replaceArrow(c - r + l, l, "left")
        } else this.replaceArrow(u - o, u, "top");
        n && i.offset(t)
    }, e.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function () {
        function e() {
            "in" != n.hoverState && i.detach()
        }

        var n = this, i = this.tip(), r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function () {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, e.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tooltip"), o = "object" == typeof n && n;
            r || i.data("bs.tooltip", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.popover"), o = "object" == typeof n && n;
            r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(window.jQuery), +function (t) {
    "use strict";

    function e(n, i) {
        var r, o = t.proxy(this.process, this);
        this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (r = t(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }

    e.DEFAULTS = {offset: 10}, e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var n = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this), r = i.data("target") || i.attr("href"), o = /^#\w/.test(r) && t(r);
            return o && o.length && [[o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(),
            r = this.offsets, o = this.targets, s = this.activeTarget;
        if (e >= i) return s != (t = o.last()[0]) && this.activate(t);
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parents(".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.attr("data-target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0], o = t.Event("show.bs.tab", {relatedTarget: r});
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.parent("li"), n), this.activate(s, s.parent(), function () {
                    e.trigger({type: "shown.bs.tab", relatedTarget: r})
                })
            }
        }
    }, e.prototype.activate = function (e, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }

        var o = n.find("> .active"), s = i && t.support.transition && o.hasClass("fade");
        s ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), +function (t) {
    "use strict";
    var e = function (n, i) {
        this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = null, this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {offset: 0}, e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = t(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(),
                o = this.options.offset, s = o.top, a = o.bottom;
            "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top()), "function" == typeof a && (a = o.bottom());
            var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= i ? "top" : !1;
            this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, this.unpin = "bottom" == l ? r.top - i : null, this.$element.removeClass(e.RESET).addClass("affix" + (l ? "-" + l : "")), "bottom" == l && this.$element.offset({top: document.body.offsetHeight - a - this.$element.height()}))
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function (n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.affix"), o = "object" == typeof n && n;
            r || i.data("bs.affix", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this), n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
        })
    })
}(window.jQuery), define("bootstrap", ["jquery"], function () {
}), !function (t) {
    t.expr[":"].icontains = function (e, n, i) {
        return t(e).text().toUpperCase().indexOf(i[3].toUpperCase()) >= 0
    };
    var e = function (n, i, r) {
        r && (r.stopPropagation(), r.preventDefault()), this.$element = t(n), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t.extend({}, t.fn.selectpicker.defaults, this.$element.data(), "object" == typeof i && i), null == this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.init()
    };
    e.prototype = {
        constructor: e, init: function () {
            this.$element.hide(), this.multiple = this.$element.prop("multiple");
            var e = this.$element.attr("id");
            if (this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), void 0 !== e) {
                var n = this;
                this.$button.attr("data-id", e), t('label[for="' + e + '"]').click(function (t) {
                    t.preventDefault(), n.$button.focus()
                })
            }
            this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this)
        }, createDropdown: function () {
            var e = this.multiple ? " show-tick" : "",
                n = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                i = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : "",
                r = "<div class='btn-group bootstrap-select" + e + "'><button type='button' class='btn dropdown-toggle selectpicker' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><div class='dropdown-menu open'>" + n + i + "<ul class='dropdown-menu inner selectpicker' role='menu'></ul></div></div>";
            return t(r)
        }, createView: function () {
            var t = this.createDropdown(), e = this.createLi();
            return t.find("ul").append(e), t
        }, reloadLi: function () {
            this.destroyLi();
            var t = this.createLi();
            this.$menu.find("ul").append(t)
        }, destroyLi: function () {
            this.$menu.find("li").remove()
        }, createLi: function () {
            var e = this, n = [], i = "";
            return this.$element.find("option").each(function () {
                var i = t(this), r = i.attr("class") || "", o = i.attr("style") || "",
                    s = i.data("content") ? i.data("content") : i.html(),
                    a = void 0 !== i.data("subtext") ? '<small class="muted text-muted">' + i.data("subtext") + "</small>" : "",
                    l = void 0 !== i.data("icon") ? '<i class="glyphicon ' + i.data("icon") + '"></i> ' : "";
                if ("" !== l && (i.is(":disabled") || i.parent().is(":disabled")) && (l = "<span>" + l + "</span>"), i.data("content") || (s = l + '<span class="text">' + s + a + "</span>"), e.options.hideDisabled && (i.is(":disabled") || i.parent().is(":disabled"))) n.push('<a style="min-height: 0; padding: 0"></a>'); else if (i.parent().is("optgroup") && i.data("divider") !== !0) if (0 == i.index()) {
                    var u = i.parent().attr("label"),
                        c = void 0 !== i.parent().data("subtext") ? '<small class="muted text-muted">' + i.parent().data("subtext") + "</small>" : "",
                        f = i.parent().data("icon") ? '<i class="' + i.parent().data("icon") + '"></i> ' : "";
                    u = f + '<span class="text">' + u + c + "</span>", 0 != i[0].index ? n.push('<div class="div-contain"><div class="divider"></div></div><dt>' + u + "</dt>" + e.createA(s, "opt " + r, o)) : n.push("<dt>" + u + "</dt>" + e.createA(s, "opt " + r, o))
                } else n.push(e.createA(s, "opt " + r, o)); else i.data("divider") === !0 ? n.push('<div class="div-contain"><div class="divider"></div></div>') : t(this).data("hidden") === !0 ? n.push("") : n.push(e.createA(s, r, o))
            }), t.each(n, function (t, e) {
                i += "<li rel=" + t + ">" + e + "</li>"
            }), this.multiple || 0 != this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), t(i)
        }, createA: function (t, e, n) {
            return '<a tabindex="0" class="' + e + '" style="' + n + '">' + t + '<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a>'
        }, render: function () {
            var e = this;
            this.$element.find("option").each(function (n) {
                e.setDisabled(n, t(this).is(":disabled") || t(this).parent().is(":disabled")), e.setSelected(n, t(this).is(":selected"))
            }), this.tabIndex();
            var n = this.$element.find("option:selected").map(function () {
                var n, i = t(this),
                    r = i.data("icon") && e.options.showIcon ? '<i class="glyphicon ' + i.data("icon") + '"></i> ' : "";
                return n = e.options.showSubtext && i.attr("data-subtext") && !e.multiple ? ' <small class="muted text-muted">' + i.data("subtext") + "</small>" : "", i.data("content") && e.options.showContent ? i.data("content") : void 0 != i.attr("title") ? i.attr("title") : r + i.html() + n
            }).toArray(), i = this.multiple ? n.join(", ") : n[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var r = this.options.selectedTextFormat.split(">"),
                    o = this.options.hideDisabled ? ":not([disabled])" : "";
                (r.length > 1 && n.length > r[1] || 1 == r.length && n.length >= 2) && (i = this.options.countSelectedText.replace("{0}", n.length).replace("{1}", this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])' + o).length))
            }
            i || (i = void 0 != this.options.title ? this.options.title : this.options.noneSelectedText), this.$newElement.find(".filter-option").html(i)
        }, setStyle: function (t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi, ""));
            var n = t ? t : this.options.style;
            "add" == e ? this.$button.addClass(n) : "remove" == e ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
        }, liHeight: function () {
            var t = this.$menu.parent().clone().appendTo("body"), e = t.addClass("open").find("> .dropdown-menu"),
                n = e.find("li > a").outerHeight(),
                i = this.options.header ? e.find(".popover-title").outerHeight() : 0,
                r = this.options.liveSearch ? e.find(".bootstrap-select-searchbox").outerHeight() : 0;
            t.remove(), this.$newElement.data("liHeight", n).data("headerHeight", i).data("searchHeight", r)
        }, setSize: function () {
            var e, n, i, r = this, o = this.$menu, s = o.find(".inner"), a = this.$newElement.outerHeight(),
                l = this.$newElement.data("liHeight"), u = this.$newElement.data("headerHeight"),
                c = this.$newElement.data("searchHeight"), f = o.find("li .divider").outerHeight(!0),
                h = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom")) + parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")),
                p = this.options.hideDisabled ? ":not(.disabled)" : "", d = t(window),
                m = h + parseInt(o.css("margin-top")) + parseInt(o.css("margin-bottom")) + 2, g = function () {
                    n = r.$newElement.offset().top - d.scrollTop(), i = d.height() - n - a
                };
            if (g(), this.options.header && o.css("padding-top", 0), "auto" == this.options.size) {
                var v = function () {
                    var t;
                    g(), e = i - m, r.options.dropupAuto && r.$newElement.toggleClass("dropup", n > i && e - m < o.height()), r.$newElement.hasClass("dropup") && (e = n - m), t = o.find("li").length + o.find("dt").length > 3 ? 3 * l + m - 2 : 0, o.css({
                        "max-height": e + "px",
                        overflow: "hidden",
                        "min-height": t + "px"
                    }), s.css({"max-height": e - u - c - h + "px", "overflow-y": "auto", "min-height": t - h + "px"})
                };
                v(), t(window).resize(v), t(window).scroll(v)
            } else if (this.options.size && "auto" != this.options.size && o.find("li" + p).length > this.options.size) {
                var y = o.find("li" + p + " > *").filter(":not(.div-contain)").slice(0, this.options.size).last().parent().index(),
                    b = o.find("li").slice(0, y + 1).find(".div-contain").length;
                e = l * this.options.size + b * f + h, r.options.dropupAuto && this.$newElement.toggleClass("dropup", n > i && e < o.height()), o.css({
                    "max-height": e + u + c + "px",
                    overflow: "hidden"
                }), s.css({"max-height": e - h + "px", "overflow-y": "auto"})
            }
        }, setWidth: function () {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$newElement.clone().appendTo("body"), e = t.find("> .dropdown-menu").css("width");
                t.remove(), this.$newElement.css("width", e)
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        }, selectPosition: function () {
            var e, n, i = this, r = "<div />", o = t(r), s = function (t) {
                o.addClass(t.attr("class")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, o.css({
                    top: e.top + n,
                    left: e.left,
                    width: t[0].offsetWidth,
                    position: "absolute"
                })
            };
            this.$newElement.on("click", function () {
                s(t(this)), o.appendTo(i.options.container), o.toggleClass("open", !t(this).hasClass("open")), o.append(i.$menu)
            }), t(window).resize(function () {
                s(i.$newElement)
            }), t(window).on("scroll", function () {
                s(i.$newElement)
            }), t("html").on("click", function (e) {
                t(e.target).closest(i.$newElement).length < 1 && o.removeClass("open")
            })
        }, mobile: function () {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        }, refresh: function () {
            this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        }, update: function () {
            this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        }, setSelected: function (t, e) {
            this.$menu.find("li").eq(t).toggleClass("selected", e)
        }, setDisabled: function (t, e) {
            e ? this.$menu.find("li").eq(t).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$menu.find("li").eq(t).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
        }, isDisabled: function () {
            return this.$element.is(":disabled")
        }, checkDisabled: function () {
            var t = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function () {
                return !t.isDisabled()
            })
        }, tabIndex: function () {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        }, clickListener: function () {
            var e = this;
            t("body").on("touchstart.dropdown", ".dropdown-menu", function (t) {
                t.stopPropagation()
            }), this.$newElement.on("click", function () {
                e.setSize(), e.options.liveSearch || e.multiple || setTimeout(function () {
                    e.$menu.find(".selected a").focus();
                }, 10)
            }), this.$menu.on("click", "li a", function (n) {
                var i = t(this).parent().index(), r = e.$element.val(), o = e.$element.prop("selectedIndex");
                if (e.multiple && n.stopPropagation(), n.preventDefault(), !e.isDisabled() && !t(this).parent().hasClass("disabled")) {
                    var s = e.$element.find("option"), a = s.eq(i);
                    if (e.multiple) {
                        var l = a.prop("selected");
                        a.prop("selected", !l)
                    } else s.prop("selected", !1), a.prop("selected", !0);
                    e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (r != e.$element.val() && e.multiple || o != e.$element.prop("selectedIndex") && !e.multiple) && e.$element.change()
                }
            }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)", function (t) {
                t.target == this && (t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus())
            }), this.$menu.on("click", ".popover-title .close", function () {
                e.$button.focus()
            }), this.$searchbox.on("click", function (t) {
                t.stopPropagation()
            }), this.$element.change(function () {
                e.render()
            })
        }, liveSearchListener: function () {
            var e = this, n = t('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api", function () {
                e.$menu.find(".active").removeClass("active"), e.$searchbox.val() && (e.$searchbox.val(""), e.$menu.find("li").show(), n.remove()), e.multiple || e.$menu.find(".selected").addClass("active"), setTimeout(function () {
                    e.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("input propertychange", function () {
                e.$searchbox.val() ? (e.$menu.find("li").show().not(":icontains(" + e.$searchbox.val() + ")").hide(), e.$menu.find("li").filter(":visible:not(.no-results)").length ? n.remove() : (n.remove(), n.html('No results match "' + e.$searchbox.val() + '"').show(), e.$menu.find("li").last().after(n))) : e.$menu.find("li").show(), e.$menu.find("li.active").removeClass("active"), e.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), t(this).focus()
            }), this.$menu.on("mouseenter", "a", function (n) {
                e.$menu.find(".active").removeClass("active"), t(n.currentTarget).parent().not(".disabled").addClass("active")
            }), this.$menu.on("mouseleave", "a", function () {
                e.$menu.find(".active").removeClass("active")
            })
        }, val: function (t) {
            return void 0 != t ? (this.$element.val(t), this.$element.change(), this.$element) : this.$element.val()
        }, selectAll: function () {
            this.$element.find("option").prop("selected", !0).attr("selected", "selected"), this.render()
        }, deselectAll: function () {
            this.$element.find("option").prop("selected", !1).removeAttr("selected"), this.render()
        }, keydown: function (e) {
            var n, i, r, o, s, a, l, u, c, f, h, p, d = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
            if (n = t(this), r = n.parent(), n.is("input") && (r = n.parent().parent()), f = r.data("this"), f.options.liveSearch && (r = n.parent().parent()), f.options.container && (r = f.$menu), i = t("[role=menu] li:not(.divider) a", r), p = f.$menu.parent().hasClass("open"), f.options.liveSearch && (/(^9$|27)/.test(e.keyCode) && p && 0 == f.$menu.find(".active").length && (e.preventDefault(), f.$menu.parent().removeClass("open"), f.$button.focus()), i = t("[role=menu] li:not(.divider):visible", r), n.val() || /(38|40)/.test(e.keyCode) || 0 == i.filter(".active").length && (i = f.$newElement.find("li").filter(":icontains(" + d[e.keyCode] + ")"))), i.length) {
                if (/(38|40)/.test(e.keyCode)) p || f.$menu.parent().addClass("open"), o = i.index(i.filter(":focus")), a = i.parent(":not(.disabled):visible").first().index(), l = i.parent(":not(.disabled):visible").last().index(), s = i.eq(o).parent().nextAll(":not(.disabled):visible").eq(0).index(), u = i.eq(o).parent().prevAll(":not(.disabled):visible").eq(0).index(), c = i.eq(s).parent().prevAll(":not(.disabled):visible").eq(0).index(), f.options.liveSearch && (i.each(function (e) {
                    t(this).is(":not(.disabled)") && t(this).data("index", e)
                }), o = i.index(i.filter(".active")), a = i.filter(":not(.disabled):visible").first().data("index"), l = i.filter(":not(.disabled):visible").last().data("index"), s = i.eq(o).nextAll(":not(.disabled):visible").eq(0).data("index"), u = i.eq(o).prevAll(":not(.disabled):visible").eq(0).data("index"), c = i.eq(s).prevAll(":not(.disabled):visible").eq(0).data("index")), h = n.data("prevIndex"), 38 == e.keyCode && (f.options.liveSearch && (o -= 1), o != c && o > u && (o = u), a > o && (o = a), o == h && (o = l)), 40 == e.keyCode && (f.options.liveSearch && (o += 1), -1 == o && (o = 0), o != c && s > o && (o = s), o > l && (o = l), o == h && (o = a)), n.data("prevIndex", o), f.options.liveSearch ? (e.preventDefault(), n.is(".dropdown-toggle") || (i.removeClass("active"), i.eq(o).addClass("active").find("a").focus(), n.focus())) : i.eq(o).focus(); else if (!n.is("input")) {
                    var m = [];
                    i.each(function () {
                        t(this).parent().is(":not(.disabled)") && t.trim(t(this).text().toLowerCase()).substring(0, 1) == d[e.keyCode] && m.push(t(this).parent().index())
                    });
                    var g = t(document).data("keycount");
                    g++, t(document).data("keycount", g);
                    var v = t.trim(t(":focus").text().toLowerCase()).substring(0, 1);
                    v != d[e.keyCode] ? (g = 1, t(document).data("keycount", g)) : g >= m.length && t(document).data("keycount", 0), i.eq(m[g - 1]).focus()
                }
                /(13|32|^9$)/.test(e.keyCode) && p && (/(32)/.test(e.keyCode) || e.preventDefault(), f.options.liveSearch ? /(32)/.test(e.keyCode) || (f.$menu.find(".active a").click(), n.focus()) : t(":focus").click(), t(document).data("keycount", 0)), (/(^9$|27)/.test(e.keyCode) && p && (f.multiple || f.options.liveSearch) || /(27)/.test(e.keyCode) && !p) && (f.$menu.parent().removeClass("open"), f.$button.focus())
            }
        }, hide: function () {
            this.$newElement.hide()
        }, show: function () {
            this.$newElement.show()
        }, destroy: function () {
            this.$newElement.remove(), this.$element.remove()
        }
    }, t.fn.selectpicker = function (n, i) {
        var r, o = arguments, s = this.each(function () {
            if (t(this).is("select")) {
                var s = t(this), a = s.data("selectpicker"), l = "object" == typeof n && n;
                if (a) {
                    if (l) for (var u in l) a.options[u] = l[u]
                } else s.data("selectpicker", a = new e(this, l, i));
                if ("string" == typeof n) {
                    var c = n;
                    a[c] instanceof Function ? ([].shift.apply(o), r = a[c].apply(a, o)) : r = a.options[c]
                }
            }
        });
        return void 0 != r ? r : s
    }, t.fn.selectpicker.defaults = {
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        noneSelectedText: "Nothing selected",
        countSelectedText: "{0} of {1} selected",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1
    }, t(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", e.prototype.keydown)
}(window.jQuery), define("selectpicker", ["jquery"], function () {
});
var __slice = [].slice, __indexOf = [].indexOf || function (t) {
    for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("base", ["underscore", "../modules/MatgenUtilities", "teacup", "bootstrap", "selectpicker"], function (t, e, n) {
    return window.tc = n, $.fn.listRadio = function () {
        return this.find("li").click(function (t) {
            return $(t.currentTarget).siblings().removeClass("active"), $(t.currentTarget).toggleClass("active")
        }), this
    }, $.fn.checkList = function () {
        return this.find("li").click(function (t) {
            var e;
            return e = t.target, $(e).toggleClass("active")
        }), this
    }, $.fn.scrollTo = function () {
        return $("html, body").animate({scrollTop: $(this).offset().top}, 700)
    }, $.fn.isEmpty = function () {
        return $(this).length < 1
    }, t.mixin({
        validFormula: function (n) {
            var i;
            return t.contains(n, "-") ? (i = t.compact(n.split("-")), i.every(function (t) {
                return e.isElement(t) || "*" === t
            })) : !t.isNull(t.parseFormula(n)) || t.isValidWildcard(n)
        }, prettyName: function (t) {
            return t = t.replace(/\./g, " "), t.charAt(0).toUpperCase() + t.substring(1).replace(/_(\w)/g, function (t, e) {
                return " " + e.toUpperCase()
            })
        }, splitElements: function (e, n) {
            var i, r;
            return null != n ? "" === e ? e = [""] : (e = t.pairs(t.unitcellFormula(e)), e = function () {
                var n, r, o;
                for (o = [], n = 0, r = e.length; r > n; n++) i = e[n], o.push(t.without(i, 1).join(""));
                return o
            }()) : t.isArray(e) ? e = t.map(e, function (e) {
                var n;
                return n = t.parseFormula(e), null != n ? n[0].split("&") : void 0
            }) : (e = e.replace(/(-|\*)/g, ""), r = t.parseFormula(e), null != r && (e = r[0].split("&"))), t.flatten(e)
        }, stripParens: function (t) {
            return t.replace(/\(|\)\d+/g, "")
        }, stripWhitespace: function (t) {
            return t.replace(/\s/g, "")
        }, closePopover: function (t) {
            var e;
            return e = t.currentTarget, $(e).parents(".popover").prev().popover("hide")
        }, backboneEl: function (t) {
            var e;
            return e = document.createElement("div"), $(t).append(e), e
        }, sum: function (e) {
            return t.reduce(e, function (t, e) {
                return t + e
            })
        }, encode: function (t) {
            return encodeURIComponent(JSON.stringify(t))
        }, gcd: function (t) {
            return t.reduce(function (t, e) {
                for (var n; 0 !== e;) n = e, e = t % e, t = n;
                return t
            })
        }, roundTo: function (t, e) {
            var n;
            return n = t % e, e / 2 >= n ? t - n : t + e - n
        }, isFloat: function (t) {
            return t === +t && t !== (0 | t)
        }, startsWith: function () {
            var t, e;
            return t = arguments[0], e = 2 <= arguments.length ? __slice.call(arguments, 1) : [], e.some(function (e) {
                return 0 === t.indexOf(e)
            })
        }, hasNum: function (t) {
            return null != t.match(/\d+/g)
        }, isFormula: function (e) {
            return t.contains(e, "-") ? !1 : t.validFormula(e) ? t.splitElements(e).length > 1 || t.hasNum(e) : !1
        }, groupSites: function (e) {
            return t.groupBy(e, "label")
        }, groupSitesByCoord: function (e) {
            var n;
            return n = [], t.each(t.groupBy(e, "label"), function (e) {
                return function (e) {
                    var i;
                    return i = t.groupBy(e, function (t) {
                        return null != t.properties ? t.properties.coordination_no : t.occupation
                    }), n.push(t.toArray(i))
                }
            }(this)), t.reduceRight(n, function (t, e) {
                return t.concat(e)
            })
        }, postToUrl: function (t, e) {
            var n, i, r, o;
            i = $(document.createElement("form"));
            for (r in e) o = e[r], n = $(document.createElement("input")), n.attr({
                type: "hidden",
                name: r,
                value: o
            }).appendTo(i);
            return i.attr({method: "post", action: t}).appendTo("body").submit().remove()
        }, isMaterialId: function (t) {
            return t = String(t), t.match(/\mp-\d+$/) || t.match(/\mvc-\d+$/)
        }, isMoleculeId: function (t) {
            return t = String(t), t.match(/\mol-\d+$/)
        }, isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
        }, browserSupported: function () {
            var t, e;
            return e = !0, /MSIE (\d+\.\d+);/.test(navigator.userAgent) && (t = new Number(RegExp.$1), e = t > 8), e
        }, simpleModal: function (t) {
            var e, i, r, o;
            return o = t.title, r = t.text, e = t.id, i = t.includeCloseBtn, n.render(function () {
                return n.div("#" + e + ".modal.hide.fade", {tabIndex: "-1", role: "dialog"}, function () {
                    return n.div(".modal-header", function () {
                        return i && n.button(".close", {type: "button", "data-dismiss": "modal"}, "×"), n.h3(o)
                    }), n.div(".modal-body", function () {
                        return n.raw(r)
                    })
                })
            })
        }, isAuthorized: function (t) {
            var e, n, i;
            return i = [!0, !0], e = i[0], n = i[1], null != t.privileges && (e = t.privileges.some(function (t) {
                return __indexOf.call(GROUPS, t) >= 0
            })), null != t.sandboxes && (n = t.sandboxes.some(function (t) {
                return t === SANDBOX
            })), e && n
        }, convertFraction: function (e, n) {
            var i, r, o;
            return i = t.unitcellFormula(n), r = t.keys(i), o = t.sum(r.map(function (t) {
                return i[t]
            })), o * e / (1 - e)
        }, slugify: function (t) {
            return t.toLowerCase().replace(/\s/g, "-").replace(/[^\w-]+/g, "")
        }, isOrdered: function (t) {
            return t.every(function (t) {
                return t.is_ordered
            })
        }, parseNumRange: function (t) {
            var e, n, i, r, o, s, a, l;
            if (null != t.match(/[^<>=& +-0123456789\.]/)) throw"Illegal Character in numeric value or range: '" + t + "'";
            if (a = /^\s*(=?[<>]=?)?\s*([\+\-]?\d+\.?\d*)\s*\&?\s*(=?[<>]=?)?\s*([\+\-]?\d+\.?\d*)?$/, r = t.match(a), null == r) throw"Bad Numeric Value or Range: '" + t + "'";
            if (i = {
                "<=": "$lte",
                "<": "$lt",
                ">=": "$gte",
                ">": "$gt"
            }, o = parseFloat(r[2], 10), e = r[1], null != e ? (l = {}, l[i[e]] = o) : l = o, null != r[4]) {
                if (null == r[3] || null == r[1]) throw"Sorry, the number of elements string is badly formed. Please check your syntax.";
                s = parseFloat(r[4], 10), n = r[3], l[i[n]] = s
            }
            return l
        }, isValidWildcard: function (t) {
            return e.isValidWildcard(t)
        }, htmlSpacegroup: function (e) {
            var n;
            return t.isString(e) ? (n = e.replace(/\_(\d)/g, "<sub>$1</sub>"), n = n.replace(/\-(\d)/g, '<span style="text-decoration:overline;">$1</span>')) : " "
        }, htmlFormula: function (t) {
            return e.htmlFormula(t)
        }, cleanDecimals: function (t, n, i) {
            return null == i && (i = !1), e.cleanDecimals(t, n, i)
        }, parseFormula: function (t) {
            return e.parseFormula(t)
        }, unitcellFormula: function (n) {
            var i, r;
            return r = t.compact(n.split(" ")), t.isEmpty(r) ? {} : r.length > 1 ? (i = t.map(r, e.parseUnitcellFormula), t.merge.apply(t, i)) : e.parseUnitcellFormula(n)
        }, orderByElectronegativity: function (t) {
            return e.orderByElectronegativity(t)
        }
    })
}), function (t) {
    var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    if ("function" == typeof define && define.amd) define("backbone", ["underscore", "jquery", "exports"], function (n, i, r) {
        e.Backbone = t(e, r, n, i)
    }); else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery")
        } catch (r) {
        }
        t(e, exports, i, n)
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(function (t, e, n, i) {
    var r = t.Backbone, o = [].slice;
    e.VERSION = "1.2.1", e.$ = i, e.noConflict = function () {
        return t.Backbone = r, this
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var s = function (t, e, i) {
        switch (t) {
            case 1:
                return function () {
                    return n[e](this[i])
                };
            case 2:
                return function (t) {
                    return n[e](this[i], t)
                };
            case 3:
                return function (t, r) {
                    return n[e](this[i], t, r)
                };
            case 4:
                return function (t, r, o) {
                    return n[e](this[i], t, r, o)
                };
            default:
                return function () {
                    var t = o.call(arguments);
                    return t.unshift(this[i]), n[e].apply(n, t)
                }
        }
    }, a = function (t, e, i) {
        n.each(e, function (e, r) {
            n[r] && (t.prototype[r] = s(e, r, i))
        })
    }, l = e.Events = {}, u = /\s+/, c = function (t, e, i, r, o) {
        var s, a = 0;
        if (i && "object" == typeof i) {
            void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
            for (s = n.keys(i); a < s.length; a++) e = t(e, s[a], i[s[a]], o)
        } else if (i && u.test(i)) for (s = i.split(u); a < s.length; a++) e = t(e, s[a], r, o); else e = t(e, i, r, o);
        return e
    };
    l.on = function (t, e, n) {
        return f(this, t, e, n)
    };
    var f = function (t, e, n, i, r) {
        if (t._events = c(h, t._events || {}, e, n, {context: i, ctx: t, listening: r}), r) {
            var o = t._listeners || (t._listeners = {});
            o[r.id] = r
        }
        return t
    };
    l.listenTo = function (t, e, i) {
        if (!t) return this;
        var r = t._listenId || (t._listenId = n.uniqueId("l")), o = this._listeningTo || (this._listeningTo = {}),
            s = o[r];
        if (!s) {
            var a = this._listenId || (this._listenId = n.uniqueId("l"));
            s = o[r] = {obj: t, objId: r, id: a, listeningTo: o, count: 0}
        }
        return f(t, e, i, this, s), this
    };
    var h = function (t, e, n, i) {
        if (n) {
            var r = t[e] || (t[e] = []), o = i.context, s = i.ctx, a = i.listening;
            a && a.count++, r.push({callback: n, context: o, ctx: o || s, listening: a})
        }
        return t
    };
    l.off = function (t, e, n) {
        return this._events ? (this._events = c(p, this._events, t, e, {
            context: n,
            listeners: this._listeners
        }), this) : this
    }, l.stopListening = function (t, e, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var o = t ? [t._listenId] : n.keys(r), s = 0; s < o.length; s++) {
            var a = r[o[s]];
            if (!a) break;
            a.obj.off(e, i, this)
        }
        return n.isEmpty(r) && (this._listeningTo = void 0), this
    };
    var p = function (t, e, i, r) {
        if (t) {
            var o, s = 0, a = r.context, l = r.listeners;
            if (e || i || a) {
                for (var u = e ? [e] : n.keys(t); s < u.length; s++) {
                    e = u[s];
                    var c = t[e];
                    if (!c) break;
                    for (var f = [], h = 0; h < c.length; h++) {
                        var p = c[h];
                        i && i !== p.callback && i !== p.callback._callback || a && a !== p.context ? f.push(p) : (o = p.listening, o && 0 === --o.count && (delete l[o.id], delete o.listeningTo[o.objId]))
                    }
                    f.length ? t[e] = f : delete t[e]
                }
                return n.size(t) ? t : void 0
            }
            for (var d = n.keys(l); s < d.length; s++) o = l[d[s]], delete l[o.id], delete o.listeningTo[o.objId]
        }
    };
    l.once = function (t, e, i) {
        var r = c(d, {}, t, e, n.bind(this.off, this));
        return this.on(r, void 0, i)
    }, l.listenToOnce = function (t, e, i) {
        var r = c(d, {}, e, i, n.bind(this.stopListening, this, t));
        return this.listenTo(t, r)
    };
    var d = function (t, e, i, r) {
        if (i) {
            var o = t[e] = n.once(function () {
                r(e, o), i.apply(this, arguments)
            });
            o._callback = i
        }
        return t
    };
    l.trigger = function (t) {
        if (!this._events) return this;
        for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; e > i; i++) n[i] = arguments[i + 1];
        return c(m, this._events, t, void 0, n), this
    };
    var m = function (t, e, n, i) {
        if (t) {
            var r = t[e], o = t.all;
            r && o && (o = o.slice()), r && g(r, i), o && g(o, [e].concat(i))
        }
        return t
    }, g = function (t, e) {
        var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
        switch (e.length) {
            case 0:
                for (; ++i < r;) (n = t[i]).callback.call(n.ctx);
                return;
            case 1:
                for (; ++i < r;) (n = t[i]).callback.call(n.ctx, o);
                return;
            case 2:
                for (; ++i < r;) (n = t[i]).callback.call(n.ctx, o, s);
                return;
            case 3:
                for (; ++i < r;) (n = t[i]).callback.call(n.ctx, o, s, a);
                return;
            default:
                for (; ++i < r;) (n = t[i]).callback.apply(n.ctx, e);
                return
        }
    };
    l.bind = l.on, l.unbind = l.off, n.extend(e, l);
    var v = e.Model = function (t, e) {
        var i = t || {};
        e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(v.prototype, l, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function () {
        },
        toJSON: function (t) {
            return n.clone(this.attributes)
        },
        sync: function () {
            return e.sync.apply(this, arguments)
        },
        get: function (t) {
            return this.attributes[t]
        },
        escape: function (t) {
            return n.escape(this.get(t))
        },
        has: function (t) {
            return null != this.get(t)
        },
        matches: function (t) {
            return !!n.iteratee(t, this)(this.attributes)
        },
        set: function (t, e, i) {
            if (null == t) return this;
            var r;
            if ("object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), !this._validate(r, i)) return !1;
            var o = i.unset, s = i.silent, a = [], l = this._changing;
            this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
            var u = this.attributes, c = this.changed, f = this._previousAttributes;
            this.idAttribute in r && (this.id = r[this.idAttribute]);
            for (var h in r) e = r[h], n.isEqual(u[h], e) || a.push(h), n.isEqual(f[h], e) ? delete c[h] : c[h] = e, o ? delete u[h] : u[h] = e;
            if (!s) {
                a.length && (this._pending = i);
                for (var p = 0; p < a.length; p++) this.trigger("change:" + a[p], this, u[a[p]], i)
            }
            if (l) return this;
            if (!s) for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (t, e) {
            return this.set(t, void 0, n.extend({}, e, {unset: !0}))
        },
        clear: function (t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, n.extend({}, t, {unset: !0}))
        },
        hasChanged: function (t) {
            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
        },
        changedAttributes: function (t) {
            if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
            var e = this._changing ? this._previousAttributes : this.attributes, i = {};
            for (var r in t) {
                var o = t[r];
                n.isEqual(e[r], o) || (i[r] = o)
            }
            return n.size(i) ? i : !1
        },
        previous: function (t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function () {
            return n.clone(this._previousAttributes)
        },
        fetch: function (t) {
            t = n.extend({parse: !0}, t);
            var e = this, i = t.success;
            return t.success = function (n) {
                var r = t.parse ? e.parse(n, t) : n;
                return e.set(r, t) ? (i && i.call(t.context, e, n, t), void e.trigger("sync", e, n, t)) : !1
            }, I(this, t), this.sync("read", this, t)
        },
        save: function (t, e, i) {
            var r;
            null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                validate: !0,
                parse: !0
            }, i);
            var o = i.wait;
            if (r && !o) {
                if (!this.set(r, i)) return !1
            } else if (!this._validate(r, i)) return !1;
            var s = this, a = i.success, l = this.attributes;
            i.success = function (t) {
                s.attributes = l;
                var e = i.parse ? s.parse(t, i) : t;
                return o && (e = n.extend({}, r, e)), e && !s.set(e, i) ? !1 : (a && a.call(i.context, s, t, i), void s.trigger("sync", s, t, i))
            }, I(this, i), r && o && (this.attributes = n.extend({}, l, r));
            var u = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== u || i.attrs || (i.attrs = r);
            var c = this.sync(u, this, i);
            return this.attributes = l, c
        },
        destroy: function (t) {
            t = t ? n.clone(t) : {};
            var e = this, i = t.success, r = t.wait, o = function () {
                e.stopListening(), e.trigger("destroy", e, e.collection, t)
            };
            t.success = function (n) {
                r && o(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t)
            };
            var s = !1;
            return this.isNew() ? n.defer(t.success) : (I(this, t), s = this.sync("delete", this, t)), r || o(), s
        },
        url: function () {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || q();
            if (this.isNew()) return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
        },
        parse: function (t, e) {
            return t
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return !this.has(this.idAttribute)
        },
        isValid: function (t) {
            return this._validate({}, n.defaults({validate: !0}, t))
        },
        _validate: function (t, e) {
            if (!e.validate || !this.validate) return !0;
            t = n.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return i ? (this.trigger("invalid", this, i, n.extend(e, {validationError: i})), !1) : !0
        }
    });
    var y = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1};
    a(v, y, "attributes");
    var b = e.Collection = function (t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({silent: !0}, e))
    }, w = {add: !0, remove: !0, merge: !0}, x = {add: !0, remove: !1};
    n.extend(b.prototype, l, {
        model: v, initialize: function () {
        }, toJSON: function (t) {
            return this.map(function (e) {
                return e.toJSON(t)
            })
        }, sync: function () {
            return e.sync.apply(this, arguments)
        }, add: function (t, e) {
            return this.set(t, n.extend({merge: !1}, e, x))
        }, remove: function (t, e) {
            e = n.extend({}, e);
            var i = !n.isArray(t);
            t = i ? [t] : n.clone(t);
            var r = this._removeModels(t, e);
            return !e.silent && r && this.trigger("update", this, e), i ? r[0] : r
        }, set: function (t, e) {
            e = n.defaults({}, e, w), e.parse && !this._isModel(t) && (t = this.parse(t, e));
            var i = !n.isArray(t);
            t = i ? t ? [t] : [] : t.slice();
            var r, o, s, a, l, u = e.at;
            null != u && (u = +u), 0 > u && (u += this.length + 1);
            for (var c = this.comparator && null == u && e.sort !== !1, f = n.isString(this.comparator) ? this.comparator : null, h = [], p = [], d = {}, m = e.add, g = e.merge, v = e.remove, y = !c && m && v ? [] : !1, b = !1, x = 0; x < t.length; x++) {
                if (s = t[x], a = this.get(s)) v && (d[a.cid] = !0), g && s !== a && (s = this._isModel(s) ? s.attributes : s, e.parse && (s = a.parse(s, e)), a.set(s, e), c && !l && a.hasChanged(f) && (l = !0)), t[x] = a; else if (m) {
                    if (o = t[x] = this._prepareModel(s, e), !o) continue;
                    h.push(o), this._addReference(o, e)
                }
                o = a || o, o && (r = this.modelId(o.attributes), !y || !o.isNew() && d[r] || (y.push(o), b = b || !this.models[x] || o.cid !== this.models[x].cid), d[r] = !0)
            }
            if (v) {
                for (var x = 0; x < this.length; x++) d[(o = this.models[x]).cid] || p.push(o);
                p.length && this._removeModels(p, e)
            }
            if (h.length || b) if (c && (l = !0), this.length += h.length, null != u) for (var x = 0; x < h.length; x++) this.models.splice(u + x, 0, h[x]); else {
                y && (this.models.length = 0);
                for (var C = y || h, x = 0; x < C.length; x++) this.models.push(C[x])
            }
            if (l && this.sort({silent: !0}), !e.silent) {
                for (var $ = null != u ? n.clone(e) : e, x = 0; x < h.length; x++) null != u && ($.index = u + x), (o = h[x]).trigger("add", o, this, $);
                (l || b) && this.trigger("sort", this, e), (h.length || p.length) && this.trigger("update", this, e)
            }
            return i ? t[0] : t
        }, reset: function (t, e) {
            e = e ? n.clone(e) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
            return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({silent: !0}, e)), e.silent || this.trigger("reset", this, e), t
        }, push: function (t, e) {
            return this.add(t, n.extend({at: this.length}, e))
        }, pop: function (t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t)
        }, unshift: function (t, e) {
            return this.add(t, n.extend({at: 0}, e))
        }, shift: function (t) {
            var e = this.at(0);
            return this.remove(e, t)
        }, slice: function () {
            return o.apply(this.models, arguments)
        }, get: function (t) {
            if (null != t) {
                var e = this.modelId(this._isModel(t) ? t.attributes : t);
                return this._byId[t] || this._byId[e] || this._byId[t.cid]
            }
        }, at: function (t) {
            return 0 > t && (t += this.length), this.models[t]
        }, where: function (t, e) {
            var i = n.matches(t);
            return this[e ? "find" : "filter"](function (t) {
                return i(t.attributes)
            })
        }, findWhere: function (t) {
            return this.where(t, !0)
        }, sort: function (t) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
        }, pluck: function (t) {
            return n.invoke(this.models, "get", t)
        }, fetch: function (t) {
            t = n.extend({parse: !0}, t);
            var e = t.success, i = this;
            return t.success = function (n) {
                var r = t.reset ? "reset" : "set";
                i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t)
            }, I(this, t), this.sync("read", this, t)
        }, create: function (t, e) {
            e = e ? n.clone(e) : {};
            var i = e.wait;
            if (t = this._prepareModel(t, e), !t) return !1;
            i || this.add(t, e);
            var r = this, o = e.success;
            return e.success = function (t, e, n) {
                i && r.add(t, n), o && o.call(n.context, t, e, n)
            }, t.save(null, e), t
        }, parse: function (t, e) {
            return t
        }, clone: function () {
            return new this.constructor(this.models, {model: this.model, comparator: this.comparator})
        }, modelId: function (t) {
            return t[this.model.prototype.idAttribute || "id"]
        }, _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        }, _prepareModel: function (t, e) {
            if (this._isModel(t)) return t.collection || (t.collection = this), t;
            e = e ? n.clone(e) : {}, e.collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
        }, _removeModels: function (t, e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var r = this.get(t[i]);
                if (r) {
                    var o = this.indexOf(r);
                    this.models.splice(o, 1), this.length--, e.silent || (e.index = o, r.trigger("remove", r, this, e)), n.push(r), this._removeReference(r, e)
                }
            }
            return n.length ? n : !1
        }, _isModel: function (t) {
            return t instanceof v
        }, _addReference: function (t, e) {
            this._byId[t.cid] = t;
            var n = this.modelId(t.attributes);
            null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this)
        }, _removeReference: function (t, e) {
            delete this._byId[t.cid];
            var n = this.modelId(t.attributes);
            null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
        }, _onModelEvent: function (t, e, n, i) {
            if ("add" !== t && "remove" !== t || n === this) {
                if ("destroy" === t && this.remove(e, i), "change" === t) {
                    var r = this.modelId(e.previousAttributes()), o = this.modelId(e.attributes);
                    r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = e))
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    var C = {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 4,
        foldl: 4,
        inject: 4,
        reduceRight: 4,
        foldr: 4,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 2,
        contains: 2,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3
    };
    a(b, C, "models");
    var $ = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each($, function (t) {
        n[t] && (b.prototype[t] = function (e, i) {
            var r = n.isFunction(e) ? e : function (t) {
                return t.get(e)
            };
            return n[t](this.models, r, i)
        })
    });
    var T = e.View = function (t) {
        this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, E)), this._ensureElement(), this.initialize.apply(this, arguments)
    }, k = /^(\S+)\s*(.*)$/, E = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(T.prototype, l, {
        tagName: "div", $: function (t) {
            return this.$el.find(t)
        }, initialize: function () {
        }, render: function () {
            return this
        }, remove: function () {
            return this._removeElement(), this.stopListening(), this
        }, _removeElement: function () {
            this.$el.remove()
        }, setElement: function (t) {
            return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
        }, _setElement: function (t) {
            this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
        }, delegateEvents: function (t) {
            if (t || (t = n.result(this, "events")), !t) return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[i]), i) {
                    var r = e.match(k);
                    this.delegate(r[1], r[2], n.bind(i, this))
                }
            }
            return this
        }, delegate: function (t, e, n) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
        }, undelegateEvents: function () {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this
        }, undelegate: function (t, e, n) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
        }, _createElement: function (t) {
            return document.createElement(t)
        }, _ensureElement: function () {
            if (this.el) this.setElement(n.result(this, "el")); else {
                var t = n.extend({}, n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t)
            }
        }, _setAttributes: function (t) {
            this.$el.attr(t)
        }
    }), e.sync = function (t, i, r) {
        var o = _[t];
        n.defaults(r || (r = {}), {emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON});
        var s = {type: o, dataType: "json"};
        if (r.url || (s.url = n.result(i, "url") || q()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {model: s.data} : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function (t) {
                return t.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1);
        var l = r.error;
        r.error = function (t, e, n) {
            r.textStatus = e, r.errorThrown = n, l && l.call(r.context, t, e, n)
        };
        var u = r.xhr = e.ajax(n.extend(s, r));
        return i.trigger("request", i, u, r), u
    };
    var _ = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
    e.ajax = function () {
        return e.$.ajax.apply(e.$, arguments)
    };
    var S = e.Router = function (t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, A = /\((.*?)\)/g, D = /(\(\?)?:\w+/g, N = /\*\w+/g, j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(S.prototype, l, {
        initialize: function () {
        }, route: function (t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return e.history.route(t, function (n) {
                var s = o._extractParameters(t, n);
                o.execute(r, s, i) !== !1 && (o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), e.history.trigger("route", o, i, s))
            }), this
        }, execute: function (t, e, n) {
            t && t.apply(this, e)
        }, navigate: function (t, n) {
            return e.history.navigate(t, n), this
        }, _bindRoutes: function () {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
            }
        }, _routeToRegExp: function (t) {
            return t = t.replace(j, "\\$&").replace(A, "(?:$1)?").replace(D, function (t, e) {
                return e ? t : "([^/?]+)"
            }).replace(N, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        }, _extractParameters: function (t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i, function (t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    });
    var P = e.History = function () {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, L = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, H = /#.*$/;
    P.started = !1, n.extend(P.prototype, l, {
        interval: 50, atRoot: function () {
            var t = this.location.pathname.replace(/[^\/]$/, "$&/");
            return t === this.root && !this.getSearch()
        }, matchRoot: function () {
            var t = this.decodeFragment(this.location.pathname), e = t.slice(0, this.root.length - 1) + "/";
            return e === this.root
        }, decodeFragment: function (t) {
            return decodeURI(t.replace(/%25/g, "%2525"))
        }, getSearch: function () {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : ""
        }, getHash: function (t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        }, getPath: function () {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === t.charAt(0) ? t.slice(1) : t
        }, getFragment: function (t) {
            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(L, "")
        }, start: function (t) {
            if (P.started) throw new Error("Backbone.history has already been started");
            if (P.started = !0, this.options = n.extend({root: "/"}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(O, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";
                    return this.location.replace(e + "#" + this.getPath()), !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {replace: !0})
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                var i = document.body, r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
            }
            var o = window.addEventListener || function (t, e) {
                return attachEvent("on" + t, e)
            };
            return this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl();
        }, stop: function () {
            var t = window.removeEventListener || function (t, e) {
                return detachEvent("on" + t, e)
            };
            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), P.started = !1
        }, route: function (t, e) {
            this.handlers.unshift({route: t, callback: e})
        }, checkUrl: function (t) {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
        }, loadUrl: function (t) {
            return this.matchRoot() ? (t = this.fragment = this.getFragment(t), n.any(this.handlers, function (e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0
            })) : !1
        }, navigate: function (t, e) {
            if (!P.started) return !1;
            e && e !== !0 || (e = {trigger: !!e}), t = this.getFragment(t || "");
            var n = this.root;
            ("" === t || "?" === t.charAt(0)) && (n = n.slice(0, -1) || "/");
            var i = n + t;
            if (t = this.decodeFragment(t.replace(H, "")), this.fragment !== t) {
                if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace)
                    }
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        }, _updateHash: function (t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e)
            } else t.hash = "#" + e
        }
    }), e.history = new P;
    var F = function (t, e) {
        var i, r = this;
        i = t && n.has(t, "constructor") ? t.constructor : function () {
            return r.apply(this, arguments)
        }, n.extend(i, r, e);
        var o = function () {
            this.constructor = i
        };
        return o.prototype = r.prototype, i.prototype = new o, t && n.extend(i.prototype, t), i.__super__ = r.prototype, i
    };
    v.extend = b.extend = S.extend = T.extend = P.extend = F;
    var q = function () {
        throw new Error('A "url" property or function must be specified')
    }, I = function (t, e) {
        var n = e.error;
        e.error = function (i) {
            n && n.call(e.context, t, i, e), t.trigger("error", t, i, e)
        }
    };
    return e
});