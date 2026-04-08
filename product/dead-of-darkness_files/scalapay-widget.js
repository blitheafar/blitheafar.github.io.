var Na = Object.defineProperty;
var Ma = (t, e, n) => e in t ? Na(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pe = (t, e, n) => Ma(t, typeof e != "symbol" ? e + "" : e, n);
const Oa = (t, e) => t === e, Z = Symbol("solid-proxy"), Va = typeof Proxy == "function", Zt = Symbol("solid-track"), re = {
  equals: Oa
};
let Rt = null, In = On;
const dt = 1, ie = 2, Hn = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, he = {};
var H = null;
let fe = null, Fa = null, L = null, Y = null, rt = null, ue = 0;
function Bt(t, e) {
  const n = L, a = H, r = t.length === 0, i = e === void 0 ? a : e, s = r ? Hn : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = r ? t : () => t(() => $(() => Dt(s)));
  H = s, L = null;
  try {
    return _t(o, !0);
  } finally {
    L = n, H = a;
  }
}
function U(t, e) {
  e = e ? Object.assign({}, re, e) : re;
  const n = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, a = (r) => (typeof r == "function" && (r = r(n.value)), Mn(n, r));
  return [Nn.bind(n), a];
}
function Tn(t, e, n) {
  const a = Gt(t, e, !0, dt);
  Ot(a);
}
function V(t, e, n) {
  const a = Gt(t, e, !1, dt);
  Ot(a);
}
function ht(t, e, n) {
  In = Ga;
  const a = Gt(t, e, !1, dt);
  (!n || !n.render) && (a.user = !0), rt ? rt.push(a) : Ot(a);
}
function S(t, e, n) {
  n = n ? Object.assign({}, re, n) : re;
  const a = Gt(t, e, !0, 0);
  return a.observers = null, a.observerSlots = null, a.comparator = n.equals || void 0, Ot(a), Nn.bind(a);
}
function Ra(t) {
  return t && typeof t == "object" && "then" in t;
}
function Ba(t, e, n) {
  let a, r, i;
  typeof e == "function" ? (a = t, r = e, i = {}) : (a = !0, r = t, i = e || {});
  let s = null, o = he, l = !1, c = "initialValue" in i, u = typeof a == "function" && S(a);
  const d = /* @__PURE__ */ new Set(), [m, p] = (i.storage || U)(i.initialValue), [h, C] = U(void 0), [E, x] = U(void 0, {
    equals: !1
  }), [g, b] = U(c ? "ready" : "unresolved");
  function T(W, F, R, St) {
    return s === W && (s = null, St !== void 0 && (c = !0), (W === o || F === o) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(St, {
        value: F
      })
    ), o = he, D(F, R)), F;
  }
  function D(W, F) {
    _t(() => {
      F === void 0 && p(() => W), b(F !== void 0 ? "errored" : c ? "ready" : "unresolved"), C(F);
      for (const R of d.keys()) R.decrement();
      d.clear();
    }, !1);
  }
  function ot() {
    const W = Ya, F = m(), R = h();
    if (R !== void 0 && !s) throw R;
    return L && L.user, F;
  }
  function vt(W = !0) {
    if (W !== !1 && l) return;
    l = !1;
    const F = u ? u() : a;
    if (F == null || F === !1) {
      T(s, $(m));
      return;
    }
    const R = o !== he ? o : $(
      () => r(F, {
        value: m(),
        refetching: W
      })
    );
    return Ra(R) ? (s = R, "value" in R ? (R.status === "success" ? T(s, R.value, void 0, F) : T(s, void 0, Ee(R.value), F), R) : (l = !0, queueMicrotask(() => l = !1), _t(() => {
      b(c ? "refreshing" : "pending"), x();
    }, !1), R.then(
      (St) => T(R, St, void 0, F),
      (St) => T(R, void 0, Ee(St), F)
    ))) : (T(s, R, void 0, F), R);
  }
  return Object.defineProperties(ot, {
    state: {
      get: () => g()
    },
    error: {
      get: () => h()
    },
    loading: {
      get() {
        const W = g();
        return W === "pending" || W === "refreshing";
      }
    },
    latest: {
      get() {
        if (!c) return ot();
        const W = h();
        if (W && !s) throw W;
        return m();
      }
    }
  }), u ? Tn(() => vt(!1)) : vt(!1), [
    ot,
    {
      refetch: vt,
      mutate: p
    }
  ];
}
function Ut(t) {
  return _t(t, !1);
}
function $(t) {
  if (L === null) return t();
  const e = L;
  L = null;
  try {
    return t();
  } finally {
    L = e;
  }
}
function de(t) {
  ht(() => $(t));
}
function Tt(t) {
  return H === null || (H.cleanups === null ? H.cleanups = [t] : H.cleanups.push(t)), t;
}
function Ua(t, e) {
  Rt || (Rt = Symbol("error")), H = Gt(void 0, void 0, !0), H.context = {
    ...H.context,
    [Rt]: [e]
  };
  try {
    return t();
  } catch (n) {
    qt(n);
  } finally {
    H = H.owner;
  }
}
function zt() {
  return L;
}
function Za() {
  return H;
}
function za(t, e) {
  const n = H, a = L;
  H = t, L = null;
  try {
    return _t(e, !0);
  } catch (r) {
    qt(r);
  } finally {
    H = n, L = a;
  }
}
const [Sl, El] = /* @__PURE__ */ U(!1);
function Da(t, e) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: qa(n),
    defaultValue: t
  };
}
function Ln(t) {
  const e = S(t), n = S(() => Ae(e()));
  return n.toArray = () => {
    const a = n();
    return Array.isArray(a) ? a : a != null ? [a] : [];
  }, n;
}
let Ya;
function Nn() {
  if (this.sources && this.state)
    if (this.state === dt) Ot(this);
    else {
      const t = Y;
      Y = null, _t(() => oe(this), !1), Y = t;
    }
  if (L) {
    const t = this.observers ? this.observers.length : 0;
    L.sources ? (L.sources.push(this), L.sourceSlots.push(t)) : (L.sources = [this], L.sourceSlots = [t]), this.observers ? (this.observers.push(L), this.observerSlots.push(L.sources.length - 1)) : (this.observers = [L], this.observerSlots = [L.sources.length - 1]);
  }
  return this.value;
}
function Mn(t, e, n) {
  let a = t.value;
  return (!t.comparator || !t.comparator(a, e)) && (t.value = e, t.observers && t.observers.length && _t(() => {
    for (let r = 0; r < t.observers.length; r += 1) {
      const i = t.observers[r], s = fe && fe.running;
      s && fe.disposed.has(i), (s ? !i.tState : !i.state) && (i.pure ? Y.push(i) : rt.push(i), i.observers && Vn(i)), s || (i.state = dt);
    }
    if (Y.length > 1e6)
      throw Y = [], new Error();
  }, !1)), e;
}
function Ot(t) {
  if (!t.fn) return;
  Dt(t);
  const e = ue;
  Wa(
    t,
    t.value,
    e
  );
}
function Wa(t, e, n) {
  let a;
  const r = H, i = L;
  L = H = t;
  try {
    a = t.fn(e);
  } catch (s) {
    return t.pure && (t.state = dt, t.owned && t.owned.forEach(Dt), t.owned = null), t.updatedAt = n + 1, qt(s);
  } finally {
    L = i, H = r;
  }
  (!t.updatedAt || t.updatedAt <= n) && (t.updatedAt != null && "observers" in t ? Mn(t, a) : t.value = a, t.updatedAt = n);
}
function Gt(t, e, n, a = dt, r) {
  const i = {
    fn: t,
    state: a,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: H,
    context: H ? H.context : null,
    pure: n
  };
  return H === null || H !== Hn && (H.owned ? H.owned.push(i) : H.owned = [i]), i;
}
function se(t) {
  if (t.state === 0) return;
  if (t.state === ie) return oe(t);
  if (t.suspense && $(t.suspense.inFallback)) return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < ue); )
    t.state && e.push(t);
  for (let n = e.length - 1; n >= 0; n--)
    if (t = e[n], t.state === dt)
      Ot(t);
    else if (t.state === ie) {
      const a = Y;
      Y = null, _t(() => oe(t, e[0]), !1), Y = a;
    }
}
function _t(t, e) {
  if (Y) return t();
  let n = !1;
  e || (Y = []), rt ? n = !0 : rt = [], ue++;
  try {
    const a = t();
    return ja(n), a;
  } catch (a) {
    n || (rt = null), Y = null, qt(a);
  }
}
function ja(t) {
  if (Y && (On(Y), Y = null), t) return;
  const e = rt;
  rt = null, e.length && _t(() => In(e), !1);
}
function On(t) {
  for (let e = 0; e < t.length; e++) se(t[e]);
}
function Ga(t) {
  let e, n = 0;
  for (e = 0; e < t.length; e++) {
    const a = t[e];
    a.user ? t[n++] = a : se(a);
  }
  for (e = 0; e < n; e++) se(t[e]);
}
function oe(t, e) {
  t.state = 0;
  for (let n = 0; n < t.sources.length; n += 1) {
    const a = t.sources[n];
    if (a.sources) {
      const r = a.state;
      r === dt ? a !== e && (!a.updatedAt || a.updatedAt < ue) && se(a) : r === ie && oe(a, e);
    }
  }
}
function Vn(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const n = t.observers[e];
    n.state || (n.state = ie, n.pure ? Y.push(n) : rt.push(n), n.observers && Vn(n));
  }
}
function Dt(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const n = t.sources.pop(), a = t.sourceSlots.pop(), r = n.observers;
      if (r && r.length) {
        const i = r.pop(), s = n.observerSlots.pop();
        a < r.length && (i.sourceSlots[s] = a, r[a] = i, n.observerSlots[a] = s);
      }
    }
  if (t.tOwned) {
    for (e = t.tOwned.length - 1; e >= 0; e--) Dt(t.tOwned[e]);
    delete t.tOwned;
  }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--) Dt(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--) t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Ee(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function Je(t, e, n) {
  try {
    for (const a of e) a(t);
  } catch (a) {
    qt(a, n && n.owner || null);
  }
}
function qt(t, e = H) {
  const n = Rt && e && e.context && e.context[Rt], a = Ee(t);
  if (!n) throw a;
  rt ? rt.push({
    fn() {
      Je(a, n, e);
    },
    state: dt
  }) : Je(a, n, e);
}
function Ae(t) {
  if (typeof t == "function" && !t.length) return Ae(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const a = Ae(t[n]);
      Array.isArray(a) ? e.push.apply(e, a) : e.push(a);
    }
    return e;
  }
  return t;
}
function qa(t, e) {
  return function(a) {
    let r;
    return V(
      () => r = $(() => (H.context = {
        ...H.context,
        [t]: a.value
      }, Ln(() => a.children))),
      void 0
    ), r;
  };
}
const Ka = Symbol("fallback");
function Qe(t) {
  for (let e = 0; e < t.length; e++) t[e]();
}
function $a(t, e, n = {}) {
  let a = [], r = [], i = [], s = 0, o = e.length > 1 ? [] : null;
  return Tt(() => Qe(i)), () => {
    let l = t() || [], c = l.length, u, d;
    return l[Zt], $(() => {
      let p, h, C, E, x, g, b, T, D;
      if (c === 0)
        s !== 0 && (Qe(i), i = [], a = [], r = [], s = 0, o && (o = [])), n.fallback && (a = [Ka], r[0] = Bt((ot) => (i[0] = ot, n.fallback())), s = 1);
      else if (s === 0) {
        for (r = new Array(c), d = 0; d < c; d++)
          a[d] = l[d], r[d] = Bt(m);
        s = c;
      } else {
        for (C = new Array(c), E = new Array(c), o && (x = new Array(c)), g = 0, b = Math.min(s, c); g < b && a[g] === l[g]; g++) ;
        for (b = s - 1, T = c - 1; b >= g && T >= g && a[b] === l[T]; b--, T--)
          C[T] = r[b], E[T] = i[b], o && (x[T] = o[b]);
        for (p = /* @__PURE__ */ new Map(), h = new Array(T + 1), d = T; d >= g; d--)
          D = l[d], u = p.get(D), h[d] = u === void 0 ? -1 : u, p.set(D, d);
        for (u = g; u <= b; u++)
          D = a[u], d = p.get(D), d !== void 0 && d !== -1 ? (C[d] = r[u], E[d] = i[u], o && (x[d] = o[u]), d = h[d], p.set(D, d)) : i[u]();
        for (d = g; d < c; d++)
          d in C ? (r[d] = C[d], i[d] = E[d], o && (o[d] = x[d], o[d](d))) : r[d] = Bt(m);
        r = r.slice(0, s = c), a = l.slice(0);
      }
      return r;
    });
    function m(p) {
      if (i[d] = p, o) {
        const [h, C] = U(d);
        return o[d] = C, e(l[d], h);
      }
      return e(l[d]);
    }
  };
}
function _(t, e) {
  return $(() => t(e || {}));
}
function Xt() {
  return !0;
}
const Xa = {
  get(t, e, n) {
    return e === Z ? n : t.get(e);
  },
  has(t, e) {
    return e === Z ? !0 : t.has(e);
  },
  set: Xt,
  deleteProperty: Xt,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: Xt,
      deleteProperty: Xt
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function ge(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function Ja() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const n = this[t]();
    if (n !== void 0) return n;
  }
}
function K(...t) {
  let e = !1;
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    e = e || !!o && Z in o, t[s] = typeof o == "function" ? (e = !0, S(o)) : o;
  }
  if (Va && e)
    return new Proxy(
      {
        get(s) {
          for (let o = t.length - 1; o >= 0; o--) {
            const l = ge(t[o])[s];
            if (l !== void 0) return l;
          }
        },
        has(s) {
          for (let o = t.length - 1; o >= 0; o--)
            if (s in ge(t[o])) return !0;
          return !1;
        },
        keys() {
          const s = [];
          for (let o = 0; o < t.length; o++)
            s.push(...Object.keys(ge(t[o])));
          return [...new Set(s)];
        }
      },
      Xa
    );
  const n = {}, a = /* @__PURE__ */ Object.create(null);
  for (let s = t.length - 1; s >= 0; s--) {
    const o = t[s];
    if (!o) continue;
    const l = Object.getOwnPropertyNames(o);
    for (let c = l.length - 1; c >= 0; c--) {
      const u = l[c];
      if (u === "__proto__" || u === "constructor") continue;
      const d = Object.getOwnPropertyDescriptor(o, u);
      if (!a[u])
        a[u] = d.get ? {
          enumerable: !0,
          configurable: !0,
          get: Ja.bind(n[u] = [d.get.bind(o)])
        } : d.value !== void 0 ? d : void 0;
      else {
        const m = n[u];
        m && (d.get ? m.push(d.get.bind(o)) : d.value !== void 0 && m.push(() => d.value));
      }
    }
  }
  const r = {}, i = Object.keys(a);
  for (let s = i.length - 1; s >= 0; s--) {
    const o = i[s], l = a[o];
    l && l.get ? Object.defineProperty(r, o, l) : r[o] = l ? l.value : void 0;
  }
  return r;
}
const Fn = (t) => `Stale read from <${t}>.`;
function Kt(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return S($a(() => t.each, t.children, e || void 0));
}
function M(t) {
  const e = t.keyed, n = S(() => t.when, void 0, void 0), a = e ? n : S(n, void 0, {
    equals: (r, i) => !r == !i
  });
  return S(
    () => {
      const r = a();
      if (r) {
        const i = t.children;
        return typeof i == "function" && i.length > 0 ? $(
          () => i(
            e ? r : () => {
              if (!$(a)) throw Fn("Show");
              return n();
            }
          )
        ) : i;
      }
      return t.fallback;
    },
    void 0,
    void 0
  );
}
function tn(t) {
  const e = Ln(() => t.children), n = S(() => {
    const a = e(), r = Array.isArray(a) ? a : [a];
    let i = () => {
    };
    for (let s = 0; s < r.length; s++) {
      const o = s, l = r[s], c = i, u = S(
        () => c() ? void 0 : l.when,
        void 0,
        void 0
      ), d = l.keyed ? u : S(u, void 0, {
        equals: (m, p) => !m == !p
      });
      i = () => c() || (d() ? [o, u, l] : void 0);
    }
    return i;
  });
  return S(
    () => {
      const a = n()();
      if (!a) return t.fallback;
      const [r, i, s] = a, o = s.children;
      return typeof o == "function" && o.length > 0 ? $(
        () => o(
          s.keyed ? i() : () => {
            var c;
            if (((c = $(n)()) == null ? void 0 : c[0]) !== r) throw Fn("Match");
            return i();
          }
        )
      ) : o;
    },
    void 0,
    void 0
  );
}
function ye(t) {
  return t;
}
let Jt;
function Qa(t) {
  let e;
  const [n, a] = U(e, void 0);
  return Jt || (Jt = /* @__PURE__ */ new Set()), Jt.add(a), Tt(() => Jt.delete(a)), S(
    () => {
      let r;
      if (r = n()) {
        const i = t.fallback;
        return typeof i == "function" && i.length ? $(() => i(r, () => a())) : i;
      }
      return Ua(() => t.children, a);
    },
    void 0,
    void 0
  );
}
function tr(t, e, n) {
  let a = n.length, r = e.length, i = a, s = 0, o = 0, l = e[r - 1].nextSibling, c = null;
  for (; s < r || o < i; ) {
    if (e[s] === n[o]) {
      s++, o++;
      continue;
    }
    for (; e[r - 1] === n[i - 1]; )
      r--, i--;
    if (r === s) {
      const u = i < a ? o ? n[o - 1].nextSibling : n[i - o] : l;
      for (; o < i; ) t.insertBefore(n[o++], u);
    } else if (i === o)
      for (; s < r; )
        (!c || !c.has(e[s])) && e[s].remove(), s++;
    else if (e[s] === n[i - 1] && n[o] === e[r - 1]) {
      const u = e[--r].nextSibling;
      t.insertBefore(n[o++], e[s++].nextSibling), t.insertBefore(n[--i], u), e[r] = n[i];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < i; ) c.set(n[d], d++);
      }
      const u = c.get(e[s]);
      if (u != null)
        if (o < u && u < i) {
          let d = s, m = 1, p;
          for (; ++d < r && d < i && !((p = c.get(e[d])) == null || p !== u + m); )
            m++;
          if (m > u - o) {
            const h = e[s];
            for (; o < u; ) t.insertBefore(n[o++], h);
          } else t.replaceChild(n[o++], e[s++]);
        } else s++;
      else e[s++].remove();
    }
  }
}
const en = "_$DX_DELEGATE";
function w(t, e, n, a) {
  let r;
  const i = () => {
    const o = a ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    return o.innerHTML = t, n ? o.content.firstChild.firstChild : a ? o.firstChild : o.content.firstChild;
  }, s = e ? () => $(() => document.importNode(r || (r = i()), !0)) : () => (r || (r = i())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function Ve(t, e = window.document) {
  const n = e[en] || (e[en] = /* @__PURE__ */ new Set());
  for (let a = 0, r = t.length; a < r; a++) {
    const i = t[a];
    n.has(i) || (n.add(i), e.addEventListener(i, nr));
  }
}
function A(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function B(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function nn(t, e, n, a) {
  Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
}
function er(t, e, n) {
  return $(() => t(e, n));
}
function f(t, e, n, a) {
  if (n !== void 0 && !a && (a = []), typeof e != "function") return le(t, e, a, n);
  V((r) => le(t, e(), r, n), a);
}
function nr(t) {
  let e = t.target;
  const n = `$$${t.type}`, a = t.target, r = t.currentTarget, i = (l) => Object.defineProperty(t, "target", {
    configurable: !0,
    value: l
  }), s = () => {
    const l = e[n];
    if (l && !e.disabled) {
      const c = e[`${n}Data`];
      if (c !== void 0 ? l.call(e, c, t) : l.call(e, t), t.cancelBubble) return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(t.target) && i(e.host), !0;
  }, o = () => {
    for (; s() && (e = e._$host || e.parentNode || e.host); ) ;
  };
  if (Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return e || document;
    }
  }), t.composedPath) {
    const l = t.composedPath();
    i(l[0]);
    for (let c = 0; c < l.length - 2 && (e = l[c], !!s()); c++) {
      if (e._$host) {
        e = e._$host, o();
        break;
      }
      if (e.parentNode === r)
        break;
    }
  } else o();
  i(a);
}
function le(t, e, n, a, r) {
  for (; typeof n == "function"; ) n = n();
  if (e === n) return n;
  const i = typeof e, s = a !== void 0;
  if (t = s && n[0] && n[0].parentNode || t, i === "string" || i === "number") {
    if (i === "number" && (e = e.toString(), e === n))
      return n;
    if (s) {
      let o = n[0];
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), n = Et(t, n, a, o);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || i === "boolean")
    n = Et(t, n, a);
  else {
    if (i === "function")
      return V(() => {
        let o = e();
        for (; typeof o == "function"; ) o = o();
        n = le(t, o, n, a);
      }), () => n;
    if (Array.isArray(e)) {
      const o = [], l = n && Array.isArray(n);
      if (ke(o, e, n, r))
        return V(() => n = le(t, o, n, a, !0)), () => n;
      if (o.length === 0) {
        if (n = Et(t, n, a), s) return n;
      } else l ? n.length === 0 ? an(t, o, a) : tr(t, n, o) : (n && Et(t), an(t, o));
      n = o;
    } else if (e.nodeType) {
      if (Array.isArray(n)) {
        if (s) return n = Et(t, n, a, e);
        Et(t, n, null, e);
      } else n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function ke(t, e, n, a) {
  let r = !1;
  for (let i = 0, s = e.length; i < s; i++) {
    let o = e[i], l = n && n[t.length], c;
    if (!(o == null || o === !0 || o === !1)) if ((c = typeof o) == "object" && o.nodeType)
      t.push(o);
    else if (Array.isArray(o))
      r = ke(t, o, l) || r;
    else if (c === "function")
      if (a) {
        for (; typeof o == "function"; ) o = o();
        r = ke(
          t,
          Array.isArray(o) ? o : [o],
          Array.isArray(l) ? l : [l]
        ) || r;
      } else
        t.push(o), r = !0;
    else {
      const u = String(o);
      l && l.nodeType === 3 && l.data === u ? t.push(l) : t.push(document.createTextNode(u));
    }
  }
  return r;
}
function an(t, e, n = null) {
  for (let a = 0, r = e.length; a < r; a++) t.insertBefore(e[a], n);
}
function Et(t, e, n, a) {
  if (n === void 0) return t.textContent = "";
  const r = a || document.createTextNode("");
  if (e.length) {
    let i = !1;
    for (let s = e.length - 1; s >= 0; s--) {
      const o = e[s];
      if (r !== o) {
        const l = o.parentNode === t;
        !i && !s ? l ? t.replaceChild(r, o) : t.insertBefore(r, n) : l && o.remove();
      } else i = !0;
    }
  } else t.insertBefore(r, n);
  return [r];
}
const ar = "http://www.w3.org/2000/svg";
function rr(t, e = !1) {
  return e ? document.createElementNS(ar, t) : document.createElement(t);
}
function ir(t) {
  const { useShadow: e } = t, n = document.createTextNode(""), a = () => t.mount || document.body, r = Za();
  let i;
  return ht(
    () => {
      i || (i = za(r, () => S(() => t.children)));
      const s = a();
      if (s instanceof HTMLHeadElement) {
        const [o, l] = U(!1), c = () => l(!0);
        Bt((u) => f(s, () => o() ? u() : i(), null)), Tt(c);
      } else {
        const o = rr(t.isSVG ? "g" : "div", t.isSVG), l = e && o.attachShadow ? o.attachShadow({
          mode: "open"
        }) : o;
        Object.defineProperty(o, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), f(l, i), s.appendChild(o), t.ref && t.ref(o), Tt(() => s.removeChild(o));
      }
    },
    void 0,
    {
      render: !0
    }
  ), n;
}
function sr(t) {
  return Object.keys(t).reduce((n, a) => {
    const r = t[a];
    return n[a] = Object.assign({}, r), Bn(r.value) && !dr(r.value) && !Array.isArray(r.value) && (n[a].value = Object.assign({}, r.value)), Array.isArray(r.value) && (n[a].value = r.value.slice(0)), n;
  }, {});
}
function or(t) {
  return t ? Object.keys(t).reduce((n, a) => {
    const r = t[a];
    return n[a] = Bn(r) && "value" in r ? r : {
      value: r
    }, n[a].attribute || (n[a].attribute = ur(a)), n[a].parse = "parse" in n[a] ? n[a].parse : typeof n[a].value != "string", n;
  }, {}) : {};
}
function lr(t) {
  return Object.keys(t).reduce((n, a) => (n[a] = t[a].value, n), {});
}
function cr(t, e) {
  const n = sr(e);
  return Object.keys(e).forEach((r) => {
    const i = n[r], s = t.getAttribute(i.attribute), o = t[r];
    s != null && (i.value = i.parse ? Rn(s) : s), o != null && (i.value = Array.isArray(o) ? o.slice(0) : o), i.reflect && rn(t, i.attribute, i.value, !!i.parse), Object.defineProperty(t, r, {
      get() {
        return i.value;
      },
      set(l) {
        const c = i.value;
        i.value = l, i.reflect && rn(this, i.attribute, i.value, !!i.parse);
        for (let u = 0, d = this.__propertyChangedCallbacks.length; u < d; u++)
          this.__propertyChangedCallbacks[u](r, l, c);
      },
      enumerable: !0,
      configurable: !0
    });
  }), n;
}
function Rn(t) {
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
}
function rn(t, e, n, a) {
  if (n == null || n === !1) return t.removeAttribute(e);
  let r = a ? JSON.stringify(n) : n;
  t.__updating[e] = !0, r === "true" && (r = ""), t.setAttribute(e, r), Promise.resolve().then(() => delete t.__updating[e]);
}
function ur(t) {
  return t.replace(/\.?([A-Z]+)/g, (e, n) => "-" + n.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function Bn(t) {
  return t != null && (typeof t == "object" || typeof t == "function");
}
function dr(t) {
  return Object.prototype.toString.call(t) === "[object Function]";
}
function mr(t) {
  return typeof t == "function" && t.toString().indexOf("class") === 0;
}
let we;
function _r(t, e) {
  const n = Object.keys(e);
  return class extends t {
    static get observedAttributes() {
      return n.map((r) => e[r].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = cr(this, e);
      const r = lr(this.props), i = this.Component, s = we;
      try {
        we = this, this.__initialized = !0, mr(i) ? new i(r, {
          element: this
        }) : i(r, {
          element: this
        });
      } finally {
        we = s;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let r = null;
      for (; r = this.__releaseCallbacks.pop(); ) r(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(r, i, s) {
      if (this.__initialized && !this.__updating[r] && (r = this.lookupProp(r), r in e)) {
        if (s == null && !this[r]) return;
        this[r] = e[r].parse ? Rn(s) : s;
      }
    }
    lookupProp(r) {
      if (e)
        return n.find((i) => r === i || r === e[i].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(r) {
      this.__releaseCallbacks.push(r);
    }
    addPropertyChangedCallback(r) {
      this.__propertyChangedCallbacks.push(r);
    }
  };
}
function pr(t, e = {}, n = {}) {
  const {
    BaseElement: a = HTMLElement,
    extension: r,
    customElements: i = window.customElements
  } = n;
  return (s) => {
    if (!t) throw new Error("tag is required to register a Component");
    let o = i.get(t);
    return o ? (o.prototype.Component = s, o) : (o = _r(a, or(e)), o.prototype.Component = s, o.prototype.registeredTag = t, i.define(t, o, r), o);
  };
}
function hr(t) {
  const e = Object.keys(t), n = {};
  for (let a = 0; a < e.length; a++) {
    const [r, i] = U(t[e[a]]);
    Object.defineProperty(n, e[a], {
      get: r,
      set(s) {
        i(() => s);
      }
    });
  }
  return n;
}
function fr(t) {
  if (t.assignedSlot && t.assignedSlot._$owner) return t.assignedSlot._$owner;
  let e = t.parentNode;
  for (; e && !e._$owner && !(e.assignedSlot && e.assignedSlot._$owner); )
    e = e.parentNode;
  return e && e.assignedSlot ? e.assignedSlot._$owner : t._$owner;
}
function gr(t) {
  return (e, n) => {
    const { element: a } = n;
    return Bt((r) => {
      const i = hr(e);
      a.addPropertyChangedCallback((o, l) => i[o] = l), a.addReleaseCallback(() => {
        a.renderRoot.textContent = "", r();
      });
      const s = t(i, n);
      return f(a.renderRoot, s);
    }, fr(a));
  };
}
function Fe(t, e, n) {
  return arguments.length === 2 && (n = e, e = {}), pr(t, e)(gr(n));
}
var Un = /* @__PURE__ */ ((t) => (t.V5 = "5", t))(Un || {}), Zn = /* @__PURE__ */ ((t) => (t.PRODUCTION = "production", t.STAGING = "staging", t.INTEGRATION = "integration", t.DEVELOPMENT = "development", t))(Zn || {});
function zn(t) {
  return !(t && !Object.values(Zn).includes(t));
}
function Dn(t) {
  return t && t !== "production" ? `.${t}` : "";
}
function yr(t) {
  return `https://${`cdn${Dn(t.environment)}.scalapay.com`}/widget/configurations/${t.merchantToken}/widget_configuration.json?v=${Un.V5}`;
}
var Re = /* @__PURE__ */ ((t) => (t.ONLINE = "online", t.OFFLINE = "offline", t))(Re || {}), y = /* @__PURE__ */ ((t) => (t.PAY_IN_THREE = "pay-in-3", t.PAY_IN_FOUR = "pay-in-4", t.PAY_IN_SIX = "pay-in-6", t.PAY_IN_NINE = "pay-in-9", t.PAY_IN_TWELVE = "pay-in-12", t.PAY_NOW_CHECKOUT = "pay-now-checkout", t.PAY_LATER = "later", t.PAY_IN_X = "pay-in-x", t))(y || {});
const wr = [
  "pay-in-6",
  "pay-in-9",
  "pay-in-12"
  /* PAY_IN_TWELVE */
];
var pt = /* @__PURE__ */ ((t) => (t.DEUTSCHE_BANK = "deutsche_bank", t.BBVA = "bbva", t))(pt || {});
const Be = {
  1: "deutsche_bank",
  2: "bbva",
  deutsche_bank: "deutsche_bank",
  bbva: "bbva"
  /* BBVA */
};
class xr extends Error {
  constructor(e) {
    super(e), this.name = "NoMerchantConfigurationFound";
  }
}
class br extends Error {
  constructor(e) {
    super(e), this.name = "ConfigurationEnvironmentNotSupported";
  }
}
const Cr = "[Scalapay]";
class vr {
  constructor() {
    pe(this, "debugLog", !1);
    pe(this, "prefix", Cr);
    sessionStorage.getItem("scalapay-log") && (this.debugLog = !0);
  }
  warn(...e) {
    console.warn(this.prefix, ...e);
  }
  error(...e) {
    console.error(this.prefix, ...e);
  }
  log(...e) {
    console.log(this.prefix, ...e);
  }
  info(...e) {
    console.info(this.prefix, ...e);
  }
  debug(...e) {
    this.debugLog && console.debug(this.prefix, ...e);
  }
  group(...e) {
    console.group(this.prefix, ...e);
  }
  groupEnd() {
    console.groupEnd();
  }
}
const z = new vr(), Yt = {
  widget: {
    variant: null
  },
  products: [
    {
      type: Re.ONLINE,
      product: y.PAY_IN_THREE,
      numberOfInstallments: 3,
      frequency: {
        number: 1,
        frequencyType: "monthly"
      },
      isStackable: !0,
      configuration: {
        splitFee: !1,
        minimumAmount: {
          amount: 5,
          currency: "EUR"
        },
        maximumAmount: {
          amount: 3500,
          currency: "EUR"
        }
      }
    }
  ]
};
function Sr(t) {
  return t && typeof t == "object" && "products" in t ? (z.debug("Received v4/configuration", t), t) : t && Array.isArray(t) ? (z.debug("Received v3/configuration, transforming it", t), {
    ...Yt,
    products: t
  }) : (z.warn("Unexpected response for merchant configuration", t), Yt);
}
async function Er(t) {
  try {
    if (z.debug("Fetching merchant configuration", t), !zn(t.environment))
      throw new br(
        `Environment ${t.environment} for merchant token ${t.merchantToken} not supported`
      );
    const e = t.merchantToken, n = yr(t), a = await fetch(n, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!a.ok)
      throw new xr(
        `Failed to fetch merchant configuration for merchant token ${e}`
      );
    const r = await a.json();
    return Sr(r);
  } catch (e) {
    return z.warn(e), Yt;
  }
}
const Ar = `.skeleton__container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    rgba(221, 221, 221, 0.6) 25%,
    rgba(255, 255, 255, 0.6) 50%,
    #ddda 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.3s infinite linear;
  cursor: progress;
}
`;
var kr = /* @__PURE__ */ w("<style>"), Pr = /* @__PURE__ */ w("<div class=skeleton__container>"), Ir = /* @__PURE__ */ w("<div role=alert aria-busy=true>");
const Hr = (t) => {
  const e = K({
    width: "300px",
    height: "20px",
    className: "",
    borderRadius: "0.25rem",
    numberOfLines: 1
  }, t), n = S(() => Array.from({
    length: e.numberOfLines
  }, (a, r) => r + 1));
  return [(() => {
    var a = kr();
    return f(a, Ar), a;
  })(), (() => {
    var a = Pr();
    return f(a, _(Kt, {
      get each() {
        return n();
      },
      children: () => (() => {
        var r = Ir();
        return V((i) => {
          var s = `skeleton ${e.className}`, o = e.width, l = e.height, c = e.borderRadius, u = e.height;
          return s !== i.e && B(r, i.e = s), o !== i.t && ((i.t = o) != null ? r.style.setProperty("width", o) : r.style.removeProperty("width")), l !== i.a && ((i.a = l) != null ? r.style.setProperty("height", l) : r.style.removeProperty("height")), c !== i.o && ((i.o = c) != null ? r.style.setProperty("border-radius", c) : r.style.removeProperty("border-radius")), u !== i.i && ((i.i = u) != null ? r.style.setProperty("min-height", u) : r.style.removeProperty("min-height")), i;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0
        }), r;
      })()
    })), a;
  })()];
}, Ue = (t) => {
  const e = () => t.merchantToken ? {
    merchantToken: t.merchantToken,
    environment: t.environment
  } : (z.warn("To show the widget properly, the merchant-token property is required."), null), [n] = Ba(e, Er);
  return _(M, {
    get when() {
      return !n.loading;
    },
    get fallback() {
      return _(Hr, {
        get numberOfLines() {
          return t.skeletonSize ?? 1;
        }
      });
    },
    get children() {
      return t.children(n() ?? Yt);
    }
  });
};
var J = /* @__PURE__ */ ((t) => (t.EN = "en", t.IT = "it", t.PT = "pt", t.DE = "de", t.FR = "fr", t.ES = "es", t))(J || {}), ee = /* @__PURE__ */ ((t) => (t.LB = "fr", t.CA = "es", t.EU = "es", t.GL = "es", t.OC = "es", t.RM = "it", t))(ee || {});
const ct = "en", xe = {
  en: {
    // Product widget
    "product_widget:pay_in_3": 'Pay in 3 installments <span class="{{textStyle}}">of {{installmentAmount}}</span> with',
    "product_widget:pay_in_4": 'Pay in 4{{feeStar}} installments <span class="{{textStyle}}">of {{installmentAmount}}</span> with',
    "product_widget:pay_in_3_pay_in_4": 'Pay in 3 or 4{{feeStar}} installments <span class="{{textStyle}}">of {{installmentAmount}}</span> with',
    "product_widget:pay_in_4_service_fee_single": "*A service fee of up to {{feeAmount}} may apply.",
    "product_widget:pay_in_4_service_fee_single_no_amount": "*A service fee may apply.",
    "product_widget:learn_more": "Learn more",
    "product_widget:no_interest": "Interest-free.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Pay in 3 installments with",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Pay in 3 installments with",
    "product_widget:pay_in_4_no_installments": "Pay in 4{{feeStar}} installments with",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Pay in 4{{feeStar}} installments with",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Pay in 3 or 4{{feeStar}} installments with",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Pay in 3 or 4{{feeStar}} installments with",
    "product_widget:pay_now_checkout_no_installments": "Pay with",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Pay in 3 or 4{{feeStar}} installments <strong class="{{textStyle}}">of {{installmentAmount}}</strong> with',
    "product_widget:pay_in_3_pay_now_checkout": 'Pay in 3 installments <strong class="{{textStyle}}">of {{installmentAmount}}</strong> with',
    "product_widget:pay_in_4_pay_now_checkout": 'Pay in 4{{feeStar}} installments <strong class="{{textStyle}}">of {{installmentAmount}}</strong> with',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Pay in 3 or 4 installments or later, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Pay in 3 installments or later, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Pay in 3 installments or later, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Pay now or later",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Pay in 3 installments, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Pay in 4 installments, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Pay in 3 or 4 installments, starting from <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout": "Pay with",
    "product_widget:pay_later": "Pay later",
    "product_widget:pay_in_x": '<span class="{{textStyle}}">Or</span> pay in up to <span class="{{textStyle}}">{{maxInstallments}} installments</span> with {{lenderName}}',
    "product_widget:pay_in_x_interest_free": '<span class="{{textStyle}}">Or</span> pay in up to <span class="{{textStyle}}">{{maxInstallments}} installments interest free</span> with {{lenderName}}',
    "product_widget:pay_in_x_only": 'Pay in <span class="{{textStyle}}">up to {{maxInstallments}} installments</span> with {{lenderName}}.',
    "product_widget:pay_in_x_only_interest_free": 'Pay in <span class="{{textStyle}}">up to {{maxInstallments}} installments interest free</span> with {{lenderName}}.',
    // Checkout widget
    "checkout_widget:pay_in_3": 'Pay in 3 installments of <span class="{{textStyle}}">{{installmentAmount}}</span> without interest.',
    "checkout_widget:pay_in_4": 'Pay in 4{{feeStar}} installments of <span class="{{textStyle}}">{{installmentAmount}}</span> without interest.',
    "checkout_widget:pay_now_checkout": "Fast checkout with your account.",
    "checkout_widget:pay_later": "Pay later without interest.",
    "checkout_widget:pay_in_x": 'Pay in up to <span class="{{textStyle}}">{{maxInstallments}} installments</span> with {{lenderName}}',
    "checkout_widget:pay_in_x_interest_free": 'Pay in up to <span class="{{textStyle}}">{{maxInstallments}} installments interest free</span> with {{lenderName}}',
    "checkout_widget:pay_in_x_only": 'Pay in <span class="{{textStyle}}">up to {{maxInstallments}} installments</span> with {{lenderName}}.',
    "checkout_widget:pay_in_x_only_interest_free": 'Pay in <span class="{{textStyle}}">up to {{maxInstallments}} installments interest free</span> with {{lenderName}}.',
    "checkout_widget:accepted_methods": "We accept all major payment methods, including prepaid cards.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Pay in 3 installments without interest.",
    "checkout_widget:pay_in_4_no_installments": "Pay in 4{{feeStar}} installments without interest.",
    // Checkout Title
    "checkout_title:pay_in_3": "Pay in 3 installments of {{installmentAmount}} with",
    "checkout_title:pay_in_4": "Pay in 4 installments of {{installmentAmount}} with",
    "checkout_title:pay_in_3_pay_in_4": "Pay in 3 or 4 installments of {{installmentAmount}} with",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Pay in 3 or 4 installments with Scalapay or up to {{maxInstallments}} with {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'from <span class="{{textStyle}}">{{installmentAmount}}/month</span> in {{installments}} installments',
    "product_widget_exp5_10:pay_now": "pay now with Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'pay in <span class="{{textStyle}}">{{installments}} installments</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": 'pay in up to <span class="{{textStyle}}">{{installments}} installments</span>',
    // Info card
    "product_widget:pay_in_3_label": "Pay in 3 installments",
    "product_widget:pay_in_4_label": "Pay in 4 installments",
    "product_widget:pay_in_x_label": "Pay in up to {{maxInstallments}} installments",
    "product_widget:pay_now_checkout_label": "Pay now",
    "product_widget:later_label": "Pay later",
    "how_to_card:information_1": '<strong class="text-black">Choose Scalapay</strong> at Checkout.',
    "how_to_card:information_2": '<strong class="text-black">Create an account in 2 mins</strong> and <strong class="text-black">enter a payment method. </strong>',
    "how_to_card:information_3": '<strong class="text-black">Pay only the first installment</strong> and receive your order immediately.',
    "how_to_card:information_3:travel": '<strong class="text-black">Pay only the first installment</strong> and confirm your reservation right away.',
    "how_to_card:information_4": '<strong class="text-black">Enjoy your purchase</strong> and take your time to settle the remaining installments.',
    "how_to_card:information_4:travel": '<strong class="text-black">Enjoy your experience</strong> and take your time to settle the remaining installments.',
    // Pay in X Info card
    "how_to_card:pay_in_x:description": 'Buy today and split the total in up to <strong class="text-black">{{maxInstallments}} installments</strong>.<br>A simple way to manage your purchases with <strong class="text-black">more freedom</strong>.<br>Financial solution offered by {{lenderName}}',
    "how_to_card:pay_in_x:title": "What will you need?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": '<strong class="text-black">ID document</strong> (Italian ID or EU driving license)',
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Italian Fiscal Code card</strong> ("Tessera sanitaria")',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">European IBAN</strong> registered to who is requests the loan',
    "how_to_card:pay_in_x:bbva:information_1": '<strong class="text-black">ID document</strong> (DNI or TIE original and valid)',
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">Spanish IBAN</strong>: a bank account registered to who is requesting the loan',
    // Modal
    "modal:terms_and_conditions": 'Installments will be automatically charged to the payment method used. In some cases, the first installment may be higher than the remaining ones.<br/>See full T&Cs at <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "How it works?",
    "modal:close_button": "Close",
    // Installment summary
    "installment_summary:total": '<span>Total:</span> <strong class="text-black">{{total}}</strong> <sup>{{asterisk}}</sup> <strong class="text-black">{{fee}}</strong> ',
    "installment_summary:pay_now": "Today",
    "installment_summary:days-prefix": "",
    "installment_summary:days": "days",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} months",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} weeks",
    "installment_summary:daily_plural": "{{numberOfInstallments}} days",
    "installment_summary:monthly_single": "month",
    "installment_summary:weekly_single": "week",
    "installment_summary:daily_single": "day",
    "installment_summary:service_fee": '* A service fee of up to <strong class="text-black">{{fee}}</strong> may apply only on the first installment',
    // Interests disclaimer
    "card_summary:interests_disclaimer": "Interests rates apply",
    "card_summary:interests_disclaimer_free": '<strong class="text-black">Interest free</strong>',
    // Learn more modal
    "learn_more_modal:title": "What you love in easy installments. Interest-free."
  },
  it: {
    // Product widget
    "product_widget:pay_in_3": 'Paga in 3 rate <span class="{{textStyle}}">da {{installmentAmount}}</span> con',
    "product_widget:pay_in_4": 'Paga in 4{{feeStar}} rate <span class="{{textStyle}}">da {{installmentAmount}}</span> con',
    "product_widget:pay_in_3_pay_in_4": 'Paga in 3 o 4{{feeStar}} rate <span class="{{textStyle}}">da {{installmentAmount}}</span> con',
    "product_widget:pay_in_4_service_fee_single": "*Si applica una commissione di servizio di {{feeAmount}}.",
    "product_widget:pay_in_4_service_fee_single_no_amount": "*Si applica una commissione di servizio.",
    "product_widget:learn_more": "Scopri di più",
    "product_widget:no_interest": "Senza interessi.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Paga in 3 rate con",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Paga in 3 rate con",
    "product_widget:pay_in_4_no_installments": "Paga in 4{{feeStar}} rate con",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Paga in 4{{feeStar}} rate con",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga in 3 o 4{{feeStar}} rate con",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Paga in 3 o 4{{feeStar}} rate con",
    "product_widget:pay_now_checkout_no_installments": "Paga con",
    "product_widget:pay_now_checkout": "Paga con",
    "product_widget:pay_later": "Paga più tardi",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga in 3 o 4{{feeStar}} rate <strong class="{{textStyle}}">da {{installmentAmount}}</strong> con',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga in 3 rate <strong class="{{textStyle}}">da {{installmentAmount}}</strong> con',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga in 4{{feeStar}} rate <strong class="{{textStyle}}">da {{installmentAmount}}</strong> con',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga in 3 o 4 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Paga in 3 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Paga in 4 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Paga ora o più tardi",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga in 3 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga in 4 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga in 3 o 4 rate, a partire da <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_x": '<span class="{{textStyle}}">Oppure</span> paga fino a <span class="{{textStyle}}">{{maxInstallments}} rate</span> con {{lenderName}}',
    "product_widget:pay_in_x_interest_free": '<span class="{{textStyle}}">Oppure</span> paga fino a <span class="{{textStyle}}">{{maxInstallments}} rate</span> a <span class="{{textStyle}}">tasso zero</span> con {{lenderName}}',
    "product_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">fino a {{maxInstallments}} rate</span> con {{lenderName}}.',
    "product_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">fino a {{maxInstallments}} installments</span> a <span class="{{textStyle}}">tasso zero</span> con {{lenderName}}.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga in 3 rate da <span class='{{textStyle}}'>{{installmentAmount}}</span> senza interessi.",
    "checkout_widget:pay_in_4": "Paga in 4{{feeStar}} rate da <span class='{{textStyle}}'>{{installmentAmount}}</span> senza interessi.",
    "checkout_widget:pay_now_checkout": "Pagamento rapido con il tuo account.",
    "checkout_widget:pay_later": "Paga dopo senza interessi.",
    "checkout_widget:pay_in_x": 'Paga fino a <span class="{{textStyle}}">{{maxInstallments}} rate</span> con {{lenderName}}',
    "checkout_widget:pay_in_x_interest_free": 'Paga fino a <span class="{{textStyle}}">{{maxInstallments}} rate</span> a <span class="{{textStyle}}">tasso zero</span> con {{lenderName}}',
    "checkout_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">fino a {{maxInstallments}} rate</span> con {{lenderName}}.',
    "checkout_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">fino a {{maxInstallments}} installments</span> a <span class="{{textStyle}}">tasso zero</span> con {{lenderName}}.',
    "checkout_widget:accepted_methods": "Accettiamo tutti i principali metodi di pagamento, incluse le carte prepagate.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga in 3 rate senza interessi.",
    "checkout_widget:pay_in_4_no_installments": "Paga in 4{{feeStar}} rate senza interessi.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga in 3 rate da {{installmentAmount}} con",
    "checkout_title:pay_in_4": "Paga in 4 rate da {{installmentAmount}} con",
    "checkout_title:pay_in_3_pay_in_4": "Paga in 3 o 4 rate da {{installmentAmount}} con",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Paga in 3 o 4 rate con Scalapay o fino a {{maxInstallments}} rate con {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'da <span class="{{textStyle}}">{{installmentAmount}}/mese</span> in {{installments}} rate',
    "product_widget_exp5_10:pay_now": "paga con Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'paga in <span class="{{textStyle}}">{{installments}} rate</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": 'paga fino a <span class="{{textStyle}}">{{installments}} rate</span>',
    // Info card
    "product_widget:pay_in_3_label": "Paga in 3 rate",
    "product_widget:pay_in_4_label": "Paga in 4 rate",
    "product_widget:pay_in_x_label": "Paga fino a {{maxInstallments}} rate",
    "product_widget:pay_now_checkout_label": "Paga ora",
    "product_widget:later_label": "Paga dopo",
    "how_to_card:information_1": "<strong class='text-black'>Scegli Scalapay</strong> al momento del checkout.",
    "how_to_card:information_2": "<strong class='text-black'>Crea un account in 2 minuti</strong> e <strong class='text-black'>aggiungi un metodo di pagamento.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga solo la prima rata</strong> e ricevi subito il tuo ordine.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga solo la prima rata</strong> e conferma subito la tua prenotazione.",
    "how_to_card:information_4": "<strong class='text-black'>Goditi il tuo acquisto</strong> e prenditi il tuo tempo per pagare le rate rimanenti.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Goditi la tua esperienza</strong> e prenditi il tuo tempo per pagare le rate rimanenti.",
    // Pay in X Info card
    "how_to_card:pay_in_x:description": 'Acquista oggi e suddividi il totale fino a <strong class="text-black">{{maxInstallments}} rate mensili.</strong><br>Un modo semplice per gestire i tuoi acquisti con <strong class="text-black">più libertà</strong>.<br>Soluzione finanziaria offerta da {{lenderName}}',
    "how_to_card:pay_in_x:title": "Cosa ti servirà?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": `<strong class="text-black">Documento di identità</strong> (carta d'identità elettronica o patente)`,
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Tessera sanitaria</strong>',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">IBAN italiano</strong> o <strong class="text-black">europeo</strong> intestato a chi richiede il finanziamento',
    "how_to_card:pay_in_x:bbva:information_1": '<strong class="text-black">Documento di identità</strong> (DNI o TIE originale e valida)',
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">IBAN spagnolo</strong>: un conto intestato a chi richiede il finanziamento',
    // Modal
    "modal:terms_and_conditions": 'Le rate verranno addebitate automaticamente sul metodo di pagamento utilizzato. In alcuni casi, la prima rata potrebbe essere superiore alle restanti.<br/>Leggi tutti i Termini e Condizioni su <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "Come funziona?",
    "modal:close_button": "Chiudi",
    // Installment summary
    "installment_summary:total": "<span>Totale:</span> <strong class='text-black'>{{total}}</strong> <sup>{{asterisk}}</sup> <strong class='text-black'>{{fee}}</strong>",
    "installment_summary:pay_now": "Oggi",
    "installment_summary:days-prefix": "",
    "installment_summary:days": "giorni",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} mesi",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} settimane",
    "installment_summary:daily_plural": "{{numberOfInstallments}} giorni",
    "installment_summary:monthly_single": "mese",
    "installment_summary:weekly_single": "settimana",
    "installment_summary:daily_single": "giorno",
    "installment_summary:service_fee": "* Si applica una commissione di <strong class='text-black'>{{fee}}</strong> solo sulla prima rata",
    // Interests disclaimer
    "card_summary:interests_disclaimer": 'Si applicano <strong class="text-black">TAN</strong> e <strong class="text-black">TAEG</strong>',
    "card_summary:interests_disclaimer_free": 'A <strong class="text-black">Tasso Zero</strong>',
    // Learn more modal
    "learn_more_modal:title": "Quello che ami in comode rate. Senza interessi."
  },
  pt: {
    // Product widget
    "product_widget:pay_in_3": 'Paga em 3 prestações <span class="{{textStyle}}">de {{installmentAmount}}</span> com',
    "product_widget:pay_in_4": 'Paga em 4 prestações <span class="{{textStyle}}">de {{installmentAmount}}</span> com',
    "product_widget:pay_in_3_pay_in_4": 'Paga em 3 ou 4 prestações <span class="{{textStyle}}">de {{installmentAmount}}</span> com',
    "product_widget:pay_in_4_service_fee_single": "",
    "product_widget:pay_in_4_service_fee_single_no_amount": "",
    "product_widget:learn_more": "Saber mais",
    "product_widget:no_interest": "Sem juros.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Paga em 3 prestações com",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Paga em 3 prestações com",
    "product_widget:pay_in_4_no_installments": "Paga em 4{{feeStar}} prestações com",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Paga em 4{{feeStar}} prestações com",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga em 3 ou 4{{feeStar}} prestações com",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Paga em 3 ou 4{{feeStar}} prestações com",
    "product_widget:pay_now_checkout_no_installments": "Paga com",
    "product_widget:pay_now_checkout": "Paga com",
    "product_widget:pay_later": "Paga depois",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga em 3 ou 4{{feeStar}} prestações <strong class="{{textStyle}}">de {{installmentAmount}}</strong> com',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga em 3 prestações <strong class="{{textStyle}}">de {{installmentAmount}}</strong> com',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga em 4{{feeStar}} prestações <strong class="{{textStyle}}">de {{installmentAmount}}</strong> com',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga em 3 ou 4 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Paga em 3 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Paga em 4 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Paga agora ou depois",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga em 3 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga em 4 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga em 3 ou 4 prestações, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_x": '<span class="{{textStyle}}">Ou</span> paga até <span class="{{textStyle}}">{{maxInstallments}} prestações</span> com {{lenderName}}',
    "product_widget:pay_in_x_interest_free": '<span class="{{textStyle}}">Ou</span> paga até <span class="{{textStyle}}">{{maxInstallments}} prestações sem juros</span> com {{lenderName}}',
    "product_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">até {{maxInstallments}} prestações</span> com {{lenderName}}.',
    "product_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">até {{maxInstallments}} prestações sem juros</span> com {{lenderName}}.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga em 3 prestações de <span class='{{textStyle}}'>{{installmentAmount}}</span> sem juros.",
    "checkout_widget:pay_in_4": "Paga em 4 prestações de <span class='{{textStyle}}'>{{installmentAmount}}</span> sem juros.",
    "checkout_widget:pay_now_checkout": "Checkout rápido com a tua conta.",
    "checkout_widget:pay_later": "Paga depois sem juros.",
    "checkout_widget:pay_in_x": 'Paga até <span class="{{textStyle}}">{{maxInstallments}} prestações</span> com {{lenderName}}',
    "checkout_widget:pay_in_x_interest_free": 'Paga até <span class="{{textStyle}}">{{maxInstallments}} prestações sem juros</span> com {{lenderName}}',
    "checkout_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">até {{maxInstallments}} prestações</span> com {{lenderName}}.',
    "checkout_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">até {{maxInstallments}} prestações sem juros</span> com {{lenderName}}.',
    "checkout_widget:accepted_methods": "Aceitamos todos os principais métodos de pagamento.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga em 3 prestações sem juros.",
    "checkout_widget:pay_in_4_no_installments": "Paga em 4 prestações sem juros.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga em 3 prestações de {{installmentAmount}} com",
    "checkout_title:pay_in_4": "Paga em 4 prestações de {{installmentAmount}} com",
    "checkout_title:pay_in_3_pay_in_4": "Paga em 3 ou 4 prestações de {{installmentAmount}} com",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Paga em 3 ou 4 prestações com Scalapay ou até {{maxInstallments}} prestações com {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'a partir de <span class="{{textStyle}}">{{installmentAmount}}/mês</span> em {{installments}} prestações',
    "product_widget_exp5_10:pay_now": "paga com Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'paga em <span class="{{textStyle}}">{{installments}} prestações</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": 'paga até <span class="{{textStyle}}">{{installments}} prestações</span>',
    // Info card
    "product_widget:pay_in_3_label": "Paga em 3 prestações",
    "product_widget:pay_in_4_label": "Paga em 4 prestações",
    "product_widget:pay_in_x_label": "Paga até {{maxInstallments}} prestações",
    "product_widget:pay_now_checkout_label": "Paga agora",
    "product_widget:later_label": "Paga depois",
    "how_to_card:information_1": "<strong class='text-black'>No momento do pagamento</strong>, seleciona a Scalapay.",
    "how_to_card:information_2": "<strong class='text-black'>Cria uma conta em 2 minutos</strong> e <strong class='text-black'>adiciona um cartão bancário.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga apenas a primeira prestação</strong> e recebe o teu pedido imediatamente.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga apenas a primeira prestação</strong> e recebe o teu pedido imediatamente.",
    "how_to_card:information_4": "<strong class='text-black'>Aproveita a tua compra</strong> e paga ao teu ritmo as restantes prestações.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Aproveita a tua experiência</strong> e paga ao teu ritmo as restantes prestações.",
    // Pay in X Info card
    "how_to_card:pay_in_x:description": 'Compre hoje e divida o total em até <strong class="text-black">{{maxInstallments}} prestações.</strong><br>Uma maneira simples de gerir as suas compras com <strong class="text-black">mais liberdade</strong>.<br>Solução financeira oferecida por {{lenderName}}',
    "how_to_card:pay_in_x:title": "O que vais precisar?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": '<strong class="text-black">Documento de identificação</strong> (Identiciação italiana ou Carta de Conduzir italiana)',
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Código Fiscal Italiano</strong> ("NIF" italiano)',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">IBAN europeu</strong> registado no nome do solicitante',
    "how_to_card:pay_in_x:bbva:information_1": '<strong class="text-black">Documento de identificação</strong> (DNI ou TIE original e válido)',
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">IBAN espanhol</strong>: uma conta bancária registada em nome da pessoa que solicita o empréstimo',
    // Modal
    "modal:terms_and_conditions": 'As prestações serão cobradas automaticamente de acordo com o cartão bancário utilizado. Em alguns casos, a primeira prestação pode ser superior às restantes.<br/>Consulta os T&Cs completos em <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "Como funciona?",
    "modal:close_button": "Fechar",
    // Installment summary
    "installment_summary:total": "<span>Total:</span> <strong class='text-black'>{{total}}</strong> <sup>{{asterisk}}</sup> <strong class='text-black'>{{fee}}</strong>",
    "installment_summary:pay_now": "Hoje",
    "installment_summary:days-prefix": "Em",
    "installment_summary:days": "dias",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} meses",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} semanas",
    "installment_summary:daily_plural": "{{numberOfInstallments}} dias",
    "installment_summary:monthly_single": "mês",
    "installment_summary:weekly_single": "semana",
    "installment_summary:daily_single": "dia",
    "installment_summary:service_fee": "",
    // Interests disclaimer
    "card_summary:interests_disclaimer": "Aplicam-se taxas de juros",
    "card_summary:interests_disclaimer_free": '<strong class="text-black">Sem Juros</strong>',
    // Learn more modal
    "learn_more_modal:title": "O que gostas em prestações fáceis. Sem juros."
  },
  de: {
    // Product widget
    "product_widget:pay_in_3": 'Zahle in 3 bequemen Raten <span class="{{textStyle}}">à {{installmentAmount}}</span> mit',
    "product_widget:pay_in_4": 'Zahle in 4 bequemen Raten <span class="{{textStyle}}">à {{installmentAmount}}</span> mit',
    "product_widget:pay_in_3_pay_in_4": 'Zahle in 3 oder 4 Raten <span class="{{textStyle}}">à {{installmentAmount}}</span> mit',
    "product_widget:pay_in_4_service_fee_single": "",
    "product_widget:pay_in_4_service_fee_single_no_amount": "",
    "product_widget:learn_more": "Mehr erfahren",
    "product_widget:no_interest": "Zinsfrei.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Zahle in 3 bequemen Raten mit",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Zahle in 3 bequemen Raten mit",
    "product_widget:pay_in_4_no_installments": "Zahle in 4{{feeStar}} bequemen Raten mit",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Zahle in 4{{feeStar}} bequemen Raten mit",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Zahle in 3 oder 4{{feeStar}} Raten mit",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Zahle in 3 oder 4{{feeStar}} Raten mit",
    "product_widget:pay_now_checkout_no_installments": "Zahle mit",
    "product_widget:pay_now_checkout": "Zahle mit",
    "product_widget:pay_later": "Später bezahlen",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Zahle in 3 oder 4{{feeStar}} Raten <strong class="{{textStyle}}">à {{installmentAmount}}</strong> mit',
    "product_widget:pay_in_3_pay_now_checkout": 'Zahle in 3 Raten <strong class="{{textStyle}}">à {{installmentAmount}}</strong> mit',
    "product_widget:pay_in_4_pay_now_checkout": 'Zahle in 4{{feeStar}} Raten <strong class="{{textStyle}}">à {{installmentAmount}}</strong> mit',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Zahlen Sie in 3 oder 4 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Zahlen Sie in 3 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Zahlen Sie in 4 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Jetzt oder später bezahlen",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Zahlen Sie in 3 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Zahlen Sie in 4 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Zahlen Sie in 3 oder 4 Raten, beginnend ab <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_x": '<span class="{{textStyle}}">Oder</span> zahle in bis zu <span class="{{textStyle}}">{{maxInstallments}} Raten</span> mit {{lenderName}}',
    "product_widget:pay_in_x_interest_free": '<span class="{{textStyle}}">Oder</span> zahle in bis zu <span class="{{textStyle}}">{{maxInstallments}} Raten zinsfrei</span> mit {{lenderName}}',
    "product_widget:pay_in_x_only": 'Zahle in <span class="{{textStyle}}">bis zu {{maxInstallments}} Raten</span> mit {{lenderName}}.',
    "product_widget:pay_in_x_only_interest_free": 'Zahle in <span class="{{textStyle}}">bis zu {{maxInstallments}} Raten zinsfrei</span> mit {{lenderName}}.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Zahle in 3 Raten von <span class='{{textStyle}}'>{{installmentAmount}}</span> zinsfrei.",
    "checkout_widget:pay_in_4": "Zahle in 4 Raten von <span class='{{textStyle}}'>{{installmentAmount}}</span> zinsfrei.",
    "checkout_widget:pay_now_checkout": "Schneller Checkout mit deinem Konto.",
    "checkout_widget:pay_later": "Später zahlen ohne Zinsen.",
    "checkout_widget:pay_in_x": 'Zahle in bis zu <span class="{{textStyle}}">{{maxInstallments}} Raten</span> mit {{lenderName}}',
    "checkout_widget:pay_in_x_interest_free": 'Zahle in bis zu <span class="{{textStyle}}">{{maxInstallments}} Raten zinsfrei</span> mit {{lenderName}}',
    "checkout_widget:pay_in_x_only": 'Zahle in <span class="{{textStyle}}">bis zu {{maxInstallments}} Raten</span> mit {{lenderName}}.',
    "checkout_widget:pay_in_x_only_interest_free": 'Zahle in <span class="{{textStyle}}">bis zu {{maxInstallments}} Raten zinsfrei</span> mit {{lenderName}}.',
    "checkout_widget:accepted_methods": "Wir akzeptieren alle gängigen Zahlungsmethoden, einschließlich Prepaid-Karten.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Zahle in 3 Raten zinsfrei.",
    "checkout_widget:pay_in_4_no_installments": "Zahle in 4 Raten zinsfrei.",
    // Checkout Title
    "checkout_title:pay_in_3": "Zahle in 3 bequemen Raten à {{installmentAmount}} mit",
    "checkout_title:pay_in_4": "Zahle in 4 bequemen Raten à {{installmentAmount}} mit",
    "checkout_title:pay_in_3_pay_in_4": "Zahle in 3 oder 4 bequemen Raten à {{installmentAmount}} mit",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Zahle in 3 oder 4 bequemen Raten mit Scalapay oder zahle in bis zu {{maxInstallments}} Raten mit {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'ab <span class="{{textStyle}}">{{installmentAmount}}/monat</span> in {{installments}} raten',
    "product_widget_exp5_10:pay_now": "zahle mit Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'zahle in <span class="{{textStyle}}">{{installments}} raten</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": 'zahle in bis zu <span class="{{textStyle}}">{{installments}} raten</span>',
    // Info card
    "product_widget:pay_in_3_label": "Zahle in 3 Raten",
    "product_widget:pay_in_4_label": "Zahle in 4 Raten",
    "product_widget:pay_in_x_label": "Zahle bis zu {{maxInstallments}} Raten",
    "product_widget:pay_now_checkout_label": "Jetzt zahlen",
    "product_widget:later_label": "Später zahlen",
    "how_to_card:information_1": "<strong class='text-black'>Scalapay</strong> beim Checkout auswählen.",
    "how_to_card:information_2": "<strong class='text-black'>Erstelle in 2 Minuten ein Konto</strong> und <strong class='text-black'>füge eine Zahlungsmethode hinzu.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Bezahle nur die erste Rate</strong> und erhalte deine Bestellung sofort.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Bezahle nur die erste Rate</strong> und bestätigen Sie Ihre Reservierung sofort.",
    "how_to_card:information_4": "<strong class='text-black'>Genieße deinen Einkauf</strong> und nimm dir Zeit, die restlichen Raten zu bezahlen.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Genießen Sie Ihr Erlebnis</strong> und nehmen Sie sich Zeit, die restlichen Raten zu zahlen.",
    // Pay in X Info card
    "how_to_card:pay_in_x:description": 'Kaufen Sie noch heute und teilen Sie den Gesamtbetrag in bis zu <strong class="text-black">{{maxInstallments}} Raten auf.</strong><br>Eine einfache Möglichkeit, Ihre Einkäufe mit mehr <strong class="text-black">Freiheit zu verwalten</strong>.<br>Finanzierungslösung angeboten von {{lenderName}}',
    "how_to_card:pay_in_x:title": "Was benötigen Sie?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": '<strong class="text-black">Ausweisdokument</strong> (Italienische Personalausweis oder EU-Führerschein)',
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Italienische Steuernummer</strong> ("Tessera sanitaria“)',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">Europäische IBAN</strong>, die auf den Namen des Kreditantragstellers registriert ist',
    "how_to_card:pay_in_x:bbva:information_1": '<strong class="text-black">Ausweisdokument</strong> (Original und gültiger Personalausweis oder Aufenthaltsgenehmigung)',
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">Spanische IBAN</strong>: ein Bankkonto, das auf den Namen des Kreditantragstellers lautet',
    // Modal
    "modal:terms_and_conditions": 'Die Raten werden automatisch über die gewählte Zahlungsmethode abgerechnet. In einigen Fällen kann die erste Rate höher ausfallen als die folgenden.<br/>Lies alle ABG auf <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "Wie funktioniert es?",
    "modal:close_button": "Schließen",
    // Installment summary
    "installment_summary:total": "<span>Gesamt:</span> <strong class='text-black'>{{total}}</strong> <sup>{{asterisk}}</sup> <strong class='text-black'>{{fee}}</strong>",
    "installment_summary:pay_now": "Heute",
    "installment_summary:days-prefix": "",
    "installment_summary:days": "Tage",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} Monate",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} Wochen",
    "installment_summary:daily_plural": "{{numberOfInstallments}} Tage",
    "installment_summary:monthly_single": "Monat",
    "installment_summary:weekly_single": "Woche",
    "installment_summary:daily_single": "Tag",
    "installment_summary:service_fee": "",
    // Interests disclaimer
    "card_summary:interests_disclaimer": 'Es gelten Sollzins <strong class="text-black">(TAN)</strong> und Effektivzins <strong class="text-black">(TAEG)</strong>',
    "card_summary:interests_disclaimer_free": '<strong class="text-black">Zinsfrei</strong>',
    // Learn more modal
    "learn_more_modal:title": "Was du liebst, in bequemen Raten. Zinsfrei."
  },
  fr: {
    // Product widget
    "product_widget:pay_in_3": 'Payez en 3 fois <span class="{{textStyle}}">{{installmentAmount}}</span> avec',
    "product_widget:pay_in_4": 'Payez en 4{{feeStar}} fois <span class="{{textStyle}}">{{installmentAmount}}</span> avec',
    "product_widget:pay_in_3_pay_in_4": 'Payez en 3 ou 4{{feeStar}} fois <span class="{{textStyle}}">{{installmentAmount}}</span> avec',
    "product_widget:pay_in_4_service_fee_single": "*Des frais de service de {{feeAmount}} s'appliquent.",
    "product_widget:pay_in_4_service_fee_single_no_amount": "*Des frais de service s'appliquent.",
    "product_widget:learn_more": "En savoir plus",
    "product_widget:no_interest": "Sans intérêts.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Payez en 3 fois avec",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Payez en 3 fois avec",
    "product_widget:pay_in_4_no_installments": "Payez en 4{{feeStar}} fois avec",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Payez en 4{{feeStar}} fois avec",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Payez en 3 ou 4{{feeStar}} fois avec",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Payez en 3 ou 4{{feeStar}} fois avec",
    "product_widget:pay_now_checkout_no_installments": "Payez avec",
    "product_widget:pay_now_checkout": "Payez avec",
    "product_widget:pay_later": "Payez plus tard",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Payez en 3 ou 4{{feeStar}} fois <strong class="{{textStyle}}">{{installmentAmount}}</strong> avec',
    "product_widget:pay_in_3_pay_now_checkout": 'Payez en 3 fois <strong class="{{textStyle}}">{{installmentAmount}}</strong> avec',
    "product_widget:pay_in_4_pay_now_checkout": 'Payez en 4{{feeStar}} fois <strong class="{{textStyle}}">{{installmentAmount}}</strong> avec',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Payez en 3 ou 4 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Payez en 3 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Payez en 4 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Payez maintenant ou plus tard",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Payez en 3 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Payez en 4 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Payez en 3 ou 4 fois, à partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_x": `<span class="{{textStyle}}">Ou</span> payez jusqu'à <span class="{{textStyle}}">{{maxInstallments}} fois</span> avec {{lenderName}}`,
    "product_widget:pay_in_x_interest_free": `<span class="{{textStyle}}">Ou</span> payez jusqu'à <span class="{{textStyle}}">{{maxInstallments}} fois sans frais</span> avec {{lenderName}}`,
    "product_widget:pay_in_x_only": `Payez <span class="{{textStyle}}">jusqu'à {{maxInstallments}} fois</span> avec {{lenderName}}.`,
    "product_widget:pay_in_x_only_interest_free": `Payez <span class="{{textStyle}}">jusqu'à {{maxInstallments}} fois sans frais</span> avec {{lenderName}}.`,
    // Checkout widget
    "checkout_widget:pay_in_3": "Payez en 3 fois <span class='{{textStyle}}'>{{installmentAmount}}</span> sans intérêts.",
    "checkout_widget:pay_in_4": "Payez en 4{{feeStar}} fois <span class='{{textStyle}}'>{{installmentAmount}}</span> sans intérêts.",
    "checkout_widget:pay_now_checkout": "Paiement rapide avec votre compte.",
    "checkout_widget:pay_later": "Payez plus tard sans intérêt.",
    "checkout_widget:pay_in_x": `Payez jusqu'à <span class="{{textStyle}}">{{maxInstallments}} fois</span> avec {{lenderName}}`,
    "checkout_widget:pay_in_x_interest_free": `Payez jusqu'à <span class="{{textStyle}}">{{maxInstallments}} fois sans frais</span> avec {{lenderName}}`,
    "checkout_widget:pay_in_x_only": `Payez <span class="{{textStyle}}">jusqu'à {{maxInstallments}} fois</span> avec {{lenderName}}.`,
    "checkout_widget:pay_in_x_only_interest_free": `Payez <span class="{{textStyle}}">jusqu'à {{maxInstallments}} fois sans frais</span> avec {{lenderName}}.`,
    "checkout_widget:accepted_methods": "Nous acceptons tous les principaux moyens de paiement, y compris les cartes prépayées.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Payez en 3 fois sans intérêts.",
    "checkout_widget:pay_in_4_no_installments": "Payez en 4{{feeStar}} fois sans intérêts.",
    // Checkout Title
    "checkout_title:pay_in_3": "Payez en 3 fois {{installmentAmount}} avec",
    "checkout_title:pay_in_4": "Payez en 4 fois {{installmentAmount}} avec",
    "checkout_title:pay_in_3_pay_in_4": "Payez en 3 ou 4 fois {{installmentAmount}} avec",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Payez en 3 ou 4 fois avec Scalapay ou jusqu'à {{maxInstallments}} fois avec {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'à partir de <span class="{{textStyle}}">{{installmentAmount}}/mois</span> in {{installments}} fois',
    "product_widget_exp5_10:pay_now": "payez avec Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'payez en <span class="{{textStyle}}">{{installments}} fois</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": `payez jusqu'à <span class="{{textStyle}}">{{installments}} fois</span>`,
    // Info card
    "product_widget:pay_in_3_label": "Payez en 3 fois",
    "product_widget:pay_in_4_label": "Payez en 4 fois",
    "product_widget:pay_in_x_label": "Payez jusqu'à {{maxInstallments}} fois",
    "product_widget:pay_now_checkout_label": "Payez maintenant",
    "product_widget:later_label": "Payez plus tard",
    "how_to_card:information_1": "<strong class='text-black'>Choisissez Scalapay</strong> au moment de régler.",
    "how_to_card:information_2": "<strong class='text-black'>Créez un compte en 2 minutes</strong> et <strong class='text-black'>ajoutez un moyen de paiement.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Payez seulement la première mensualité</strong> et recevez votre commande immédiatement.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Payez seulement le premier versement</strong> et confirmez votre réservation.",
    "how_to_card:information_4": "<strong class='text-black'>Profitez de votre achat</strong> et prenez votre temps pour régler les mensualités restantes.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Profitez de votre expérience</strong> et prenez le temps de régler les mensualités restantes.",
    // Pay in X Info card
    "how_to_card:pay_in_x:description": `Achetez dès aujourd'hui et répartissez le montant total en <strong class="text-black">{{maxInstallments}} fois</strong>.<br>Une façon simple de gérer vos achats avec <strong class="text-black">plus de liberté</strong>.<br>Solution financière proposée par {{lenderName}}`,
    "how_to_card:pay_in_x:title": "De quoi aurez-vous besoin?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": `<strong class="text-black">Document d'identité</strong> (carte d'identité italienne ou permis de conduire UE)`,
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Carte Fiscale italienne</strong> ("Tessera sanitaria")',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">IBAN européen</strong> enregistré au nom du demandeur du crédit',
    "how_to_card:pay_in_x:bbva:information_1": `<strong class="text-black">Document d'identité</strong> (DNI ou TIE original et en cours de validité)`,
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">IBAN espagnol</strong>: un compte bancaire enregistré au nom de la personne qui demande le prêt',
    // Modal
    "modal:terms_and_conditions": 'Les versements seront automatiquement débités de la méthode de paiement utilisée. Dans certains cas, le premier versement peut être plus élevé que les autres.<br/>Voir les CGV sur <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "Comment ça marche ?",
    "modal:close_button": "Fermer",
    // Installment summary
    "installment_summary:total": "<span>Total :</span> <strong class='text-black'>{{total}}</strong> <sup>{{asterisk}}</sup> <strong class='text-black'>{{fee}}</strong>",
    "installment_summary:pay_now": "Aujourd'hui",
    "installment_summary:days-prefix": "",
    "installment_summary:days": "jours",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} mois",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} semaines",
    "installment_summary:daily_plural": "{{numberOfInstallments}} jours",
    "installment_summary:monthly_single": "mois",
    "installment_summary:weekly_single": "semaine",
    "installment_summary:daily_single": "jour",
    "installment_summary:service_fee": "* Des frais de service de <strong class='text-black'>{{fee}}</strong> sont prélevés que sur le premier versement.",
    // Interests disclaimer
    "card_summary:interests_disclaimer": "Des taux d'intérêt s'appliquent",
    "card_summary:interests_disclaimer_free": '<strong class="text-black">Sans frais</strong>',
    // Learn more modal
    "learn_more_modal:title": "Ce que vous aimez en plusieurs fois. Sans intérêt."
  },
  es: {
    // Product widget
    "product_widget:pay_in_3": 'Paga en 3 plazos <span class="{{textStyle}}">de {{installmentAmount}}</span> con',
    "product_widget:pay_in_4": 'Paga en 4{{feeStar}} plazos <span class="{{textStyle}}">de {{installmentAmount}}</span> con',
    "product_widget:pay_in_3_pay_in_4": 'Paga en 3 o 4{{feeStar}} plazos <span class="{{textStyle}}">de {{installmentAmount}}</span> con',
    "product_widget:pay_in_4_service_fee_single": "*Se aplica una comisión de servicio de {{feeAmount}}.",
    "product_widget:pay_in_4_service_fee_single_no_amount": "*Se aplica una comisión de servicio.",
    "product_widget:learn_more": "Descubre más",
    "product_widget:no_interest": "Sin intereses.",
    // Product widget no installments
    "product_widget:pay_in_3_no_installments": "Paga en 3 plazos con",
    "product_widget:pay_in_3_pay_now_checkout_no_installments": "Paga en 3 plazos con",
    "product_widget:pay_in_4_no_installments": "Paga en 4{{feeStar}} plazos con",
    "product_widget:pay_in_4_pay_now_checkout_no_installments": "Paga en 4{{feeStar}} plazos con",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga en 3 o 4{{feeStar}} plazos con",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_no_installments": "Paga en 3 o 4{{feeStar}} plazos con",
    "product_widget:pay_now_checkout_no_installments": "Paga con",
    "product_widget:pay_now_checkout": "Paga con",
    "product_widget:pay_later": "Paga más tarde",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga en 3 o 4{{feeStar}} plazos <strong class="{{textStyle}}">de {{installmentAmount}}</strong> con',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga en 3 plazos <strong class="{{textStyle}}">de {{installmentAmount}}</strong> con',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga en 4{{feeStar}} plazos <strong class="{{textStyle}}">de {{installmentAmount}}</strong> con',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga en 3 o 4 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_later": 'Paga en 3 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_later": 'Paga en 4 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_now_checkout_pay_later": "Paga ahora o más tarde",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga en 3 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga en 4 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga en 3 o 4 plazos, a partir de <strong class="{{textStyle}}">{{installmentAmount}}</strong>.',
    "product_widget:pay_in_x": '<span class="{{textStyle}}">O</span> paga hasta en <span class="{{textStyle}}">{{maxInstallments}} cuotas</span> con {{lenderName}}',
    "product_widget:pay_in_x_interest_free": '<span class="{{textStyle}}">O</span> paga hasta en <span class="{{textStyle}}">{{maxInstallments}} cuotas sin intereses</span> con {{lenderName}}',
    "product_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">hasta en {{maxInstallments}} plazos</span> con {{lenderName}}.',
    "product_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">hasta en {{maxInstallments}} plazos sin intereses</span> con {{lenderName}}.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga en 3 plazos de <span class='{{textStyle}}'>{{installmentAmount}}</span> sin intereses.",
    "checkout_widget:pay_in_4": "Paga en 4{{feeStar}} plazos de <span class='{{textStyle}}'>{{installmentAmount}}</span> sin intereses.",
    "checkout_widget:pay_now_checkout": "Pago rápido con tu cuenta.",
    "checkout_widget:pay_later": "Paga después sin intereses.",
    "checkout_widget:pay_in_x": 'Paga hasta en <span class="{{textStyle}}">{{maxInstallments}} cuotas</span> con {{lenderName}}',
    "checkout_widget:pay_in_x_interest_free": 'Paga hasta en <span class="{{textStyle}}">{{maxInstallments}} cuotas sin intereses</span> con {{lenderName}}',
    "checkout_widget:pay_in_x_only": 'Paga <span class="{{textStyle}}">hasta en {{maxInstallments}} cuotas</span> con {{lenderName}}.',
    "checkout_widget:pay_in_x_only_interest_free": 'Paga <span class="{{textStyle}}">hasta en {{maxInstallments}} cuotas sin intereses</span> con {{lenderName}}.',
    "checkout_widget:accepted_methods": "Aceptamos todos los métodos de pago principales.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga en 3 plazos sin intereses.",
    "checkout_widget:pay_in_4_no_installments": "Paga en 4{{feeStar}} plazos sin intereses.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga en 3 plazos de {{installmentAmount}} con",
    "checkout_title:pay_in_4": "Paga en 4 plazos de {{installmentAmount}} con",
    "checkout_title:pay_in_3_pay_in_4": "Paga en 3 o 4 plazos de {{installmentAmount}} con",
    "checkout_title:pay_in_3_pay_in_4_pay_in_x": "Paga en 3 o 4 plazos con Scalapay o hasta en {{maxInstallments}} cuotas con {{lenderName}}",
    //ProductWidget Exp5.10 specific translations
    "product_widget_exp5_10:from_x_in_n_installments": 'a partir de <span class="{{textStyle}}">{{installmentAmount}}/mes</span> en {{installments}} plazos',
    "product_widget_exp5_10:pay_now": "paga con Scalapay",
    "product_widget_exp5_10:pay_in_n_installments": 'paga en <span class="{{textStyle}}">{{installments}} plazos</span>',
    "product_widget_exp5_10:pay_up_to_n_installments": 'paga hasta en <span class="{{textStyle}}">{{installments}} plazos</span>',
    // Info card
    "product_widget:pay_in_3_label": "Paga en 3 plazos",
    "product_widget:pay_in_4_label": "Paga en 4 plazos",
    "product_widget:pay_in_x_label": "Paga hasta en {{maxInstallments}} cuotas",
    "product_widget:pay_now_checkout_label": "Pagar ahora",
    "product_widget:later_label": "Paga después",
    "how_to_card:information_1": "<strong class='text-black'>Elige Scalapay</strong> al momento de pagar.",
    "how_to_card:information_2": "<strong class='text-black'>Crea una cuenta en 2 minutos</strong> y <strong class='text-black'>añade un método de pago.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga solo el primer plazo</strong> y recibe tu pedido de inmediato.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga solo el primer plazo</strong> y confirme tu reserva ahora.",
    "how_to_card:information_4": "<strong class='text-black'Disfruta de tu compra</strong> y tómate tu tiempo para pagar los plazos restantes.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Disfrute de su experiencia</strong> y tómate tu tiempo para pagar los plazos restantes.",
    // Pay in X Info card
    "how_to_card:pay_in_x:description": 'Compre hoy y divida el total en hasta <strong class="text-black">{{maxInstallments}} cuotas</strong>.<br>Una forma sencilla de gestionar tus compras con <strong class="text-black">más libertad</strong>.<br>Solución financiera ofrecida por {{lenderName}}',
    "how_to_card:pay_in_x:title": "¿Qué necesitarás?",
    "how_to_card:pay_in_x:deutsche_bank:information_1": '<strong class="text-black">Documento de identidad</strong> (DNI italiano, o carnet de conducir de la UE)',
    "how_to_card:pay_in_x:deutsche_bank:information_2": '<strong class="text-black">Tarjeta con el Código Fiscal italiano</strong> ("Tessera sanitaria")',
    "how_to_card:pay_in_x:deutsche_bank:information_3": '<strong class="text-black">IBAN europeo</strong> registrado a nombre de quien solicita el préstamo',
    "how_to_card:pay_in_x:bbva:information_1": '<strong class="text-black">Documento de identidad</strong> (DNI o TIE original y en vigor)',
    "how_to_card:pay_in_x:bbva:information_2": '<strong class="text-black">IBAN Español</strong>: Una cuenta bancaria de la que seas titular',
    // Modal
    "modal:terms_and_conditions": 'Los plazos se cargarán automáticamente al método de pago utilizado. En algunos casos, el primer plazo puede ser superior a los restantes.<br/>Consulta los T&C completos en <a href="https://www.scalapay.com/?utm_source={{utmSource}}&utm_medium=referral&utm_campaign=link-widget" target="_blank">www.scalapay.com</a>.',
    "modal:installments_card_title": "¿Cómo funciona?",
    "modal:close_button": "Cerrar",
    // Installment summary
    "installment_summary:total": "<span>Total:</span> <strong class='text-black'>{{total}}</strong> <sup>{{asterisk}}</sup> <strong class='text-black'>{{fee}}</strong>",
    "installment_summary:pay_now": "Hoy",
    "installment_summary:days-prefix": "",
    "installment_summary:days": "días",
    "installment_summary:monthly_plural": "{{numberOfInstallments}} meses",
    "installment_summary:weekly_plural": "{{numberOfInstallments}} semanas",
    "installment_summary:daily_plural": "{{numberOfInstallments}} días",
    "installment_summary:monthly_single": "mes",
    "installment_summary:weekly_single": "semana",
    "installment_summary:daily_single": "día",
    "installment_summary:service_fee": "* Sólo se cobra una tarifa de servicio de <strong class='text-black'>{{fee}}</strong> en el primer plazo",
    // Interests disclaimer
    "card_summary:interests_disclaimer": "Se aplican tasas de interés",
    "card_summary:interests_disclaimer_free": '<strong class="text-black">Sin intereses</strong>',
    // Learn more modal
    "learn_more_modal:title": "Lo que te gusta en cómodos plazos. Sin intereses."
  }
}, k = (t, e, n = {}) => (t in xe || (t = ct), e in xe[t] ? Object.keys(n).reduce((r, i) => {
  const s = new RegExp(`{{(${i})}}`, "gi");
  return r.replace(s, n[i] || `{{${i}}}`);
}, xe[t][e]).replace(/{{.*?}}/g, "") : e), sn = {
  euro: {
    symbol: "€",
    code: "EUR"
  }
}, Tr = {
  it: {
    position: "after",
    display: "symbol"
  },
  en: {
    position: "before",
    display: "symbol"
  }
};
function Yn(t) {
  return t && t === J.EN ? "before" : "after";
}
var it = /* @__PURE__ */ ((t) => (t.PRODUCT = "product", t.CHECKOUT = "checkout", t))(it || {}), Pe = /* @__PURE__ */ ((t) => (t.TRAVEL = "travel", t))(Pe || {}), et = /* @__PURE__ */ ((t) => (t.LEFT = "left", t.RIGHT = "right", t.CENTER = "center", t))(et || {}), yt = /* @__PURE__ */ ((t) => (t.NEVER = "never", t.SYSTEM = "system", t.ALWAYS = "always", t))(yt || {}), Wn = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.EXP_5_10 = "exp_5_10", t.EXP_5_15 = "exp_5_15", t.EXP_5_20 = "exp_5_20", t))(Wn || {});
const Lr = 60, Nr = 120, on = [
  y.PAY_IN_THREE,
  y.PAY_IN_FOUR,
  y.PAY_NOW_CHECKOUT,
  y.PAY_LATER,
  y.PAY_IN_X
], Mr = (t) => t.sort(
  (e, n) => on.indexOf(e.product) - on.indexOf(n.product)
), It = (t, e) => {
  if (!t)
    return null;
  let n = String(t);
  return n = ((r, i) => r.replace(new RegExp(`^[${i}]+|[${i}]+$`, "g"), ""))(n.replace(/[^0-9,.]/g, ""), ",. "), e === "." && (n = n.replace(/,/g, "")), e === "," && (n = n.replace(/[.]/g, "")), parseFloat(
    parseFloat(
      n.replace(/[.,](?=.*[.,])/g, "").replace(/,/, ".")
    ).toFixed(2)
  ) * 100;
}, Or = (t, e) => {
  const n = [], a = (r) => Math.round(r / e);
  for (; e > 1; ) {
    const r = a(t);
    n.push(r), t -= r, e--;
  }
  return n.push(t), n.sort((r, i) => r - i);
}, Ze = (t) => {
  const e = new Set(Object.values(J)), n = new Set(
    Object.keys(ee).map((r) => r.toLowerCase())
  );
  if (typeof t != "string") return ct;
  const a = t.toLowerCase().trim();
  if (e.has(a))
    return a;
  if (n.has(a))
    return ee[a.toUpperCase()];
  if (a.length > 2 && a.indexOf("-") === 2) {
    const r = a.slice(0, 2);
    if (e.has(r)) return r;
    if (n.has(r))
      return ee[r.toUpperCase()];
  }
  return ct;
}, Q = (t, e = ct, n, a) => {
  const r = Tr[e], i = n || (r == null ? void 0 : r.display) || "symbol", s = a || (r == null ? void 0 : r.position) || "after", o = i === "code" ? " " : "", l = new Intl.NumberFormat(e, {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "code"
  }).format(t / 100).replace("EUR", "").trim(), c = sn.euro[i] || sn.euro.code;
  return s === "before" ? `${c}${o}${l}` : `${l}${o}${c}`;
}, Vr = (t) => t <= 499 ? null : Math.round(t * 0.01), Fr = (t) => t <= 499 ? null : t <= 999 ? 9 : t <= 1999 ? 18 : t <= 3499 ? 35 : t <= 4999 ? 60 : t <= 6499 ? 90 : t <= 7999 ? 120 : t <= 9499 ? 140 : t <= 10999 ? 170 : t <= 12499 ? 200 : t <= 13999 ? 230 : t <= 15999 ? 260 : t <= 17999 ? 290 : t <= 19999 ? 330 : t <= 34999 ? 360 : t <= 49999 ? 650 : t <= 64999 ? 920 : t <= 79999 ? 1200 : t <= 99999 ? 1480 : t <= 149999 ? 1850 : t <= 199999 ? 2770 : t <= 499999 ? 3700 : null, Rr = (t) => t <= 499 ? null : t <= 999 ? 6 : t <= 1999 ? 12 : t <= 3499 ? 25 : t <= 4999 ? 40 : t <= 6499 ? 60 : t <= 7999 ? 80 : t <= 9499 ? 100 : t <= 10999 ? 110 : t <= 12499 ? 130 : t <= 13999 ? 150 : t <= 15999 ? 170 : t <= 17999 ? 200 : t <= 19999 ? 220 : t <= 34999 ? 250 : t <= 49999 ? 430 : t <= 64999 ? 620 : t <= 79999 ? 800 : t <= 99999 ? 990 : t <= 149999 ? 1230 : t <= 199999 ? 1850 : t <= 499999 ? 2400 : null, ze = (t, e, n, a = "v1") => {
  switch (a) {
    case "v1":
    default:
      if (n === J.ES)
        return Vr(t);
      if ([
        J.IT,
        J.FR,
        J.EN
      ].includes(n)) {
        if (e === 4)
          return Fr(t);
        if (e === 3)
          return Rr(t);
      }
      return 0;
  }
}, Br = (t) => {
  switch (t) {
    case "monthly":
      return 30;
    case "daily":
      return 1;
    case "weekly":
      return 7;
    default:
      return null;
  }
}, Ht = (t, e, n, a) => {
  const r = n && ze(t, e, a) || 0, i = t + r, s = Or(
    t,
    e
  );
  return n && r > 0 && (s[0] += r), { baseInstallmentAmount: Math.min(...s), installmentAmounts: s, total: i, splitFee: r };
}, Ur = (t, e, n, a, r) => {
  const { baseInstallmentAmount: i, installmentAmounts: s, total: o, splitFee: l } = t, c = Q(
    i,
    n,
    a,
    r
  ), u = s.map(
    (p) => Q(
      p,
      n,
      a,
      r
    )
  ), d = Q(
    o,
    n,
    a,
    r
  ), m = e && l ? Q(l, n, a, r) : void 0;
  return {
    baseInstallmentAmount: c,
    installmentAmounts: u,
    total: d,
    splitFee: m
  };
}, Zr = (t, e) => {
  const n = Br(t.frequencyType);
  return n !== null ? n * (t.number * e) : 0;
}, Pt = (t) => {
  const e = t === "text";
  return {
    [et.LEFT]: e ? "text-left" : "",
    [et.RIGHT]: e ? "text-right" : `${t}-end`,
    [et.CENTER]: e ? "text-center" : `${t}-center`
  };
}, De = (t) => t ? {
  [pt.DEUTSCHE_BANK]: "Deutsche Bank",
  [pt.BBVA]: "BBVA"
}[t] ?? null : null, jn = (t) => t.length === 1 && t.every((e) => e.product === y.PAY_IN_X), Gn = (t) => t.length === 1 && t.every((e) => e.product === y.PAY_NOW_CHECKOUT), zr = (t) => t.some((e) => e.product === y.PAY_IN_X), qn = (t) => {
  const e = t.filter((n) => n.product === y.PAY_IN_X)[0];
  return e && e.configuration ? Number(e.configuration.tan) === 0 : !1;
}, Dr = (t, e) => {
  const n = jn(t), a = qn(t);
  switch (e) {
    case it.PRODUCT:
      return n ? a ? "product_widget:pay_in_x_only_interest_free" : "product_widget:pay_in_x_only" : a ? "product_widget:pay_in_x_interest_free" : "product_widget:pay_in_x";
    case it.CHECKOUT:
      return n ? a ? "checkout_widget:pay_in_x_only_interest_free" : "checkout_widget:pay_in_x_only" : a ? "checkout_widget:pay_in_x_interest_free" : "checkout_widget:pay_in_x";
  }
}, Kn = (t, e, n, a) => {
  const r = t.filter((l) => l.product === y.PAY_IN_X)[0];
  if (!r || !(r != null && r.configuration.maxInstallments) || !(r != null && r.configuration.lenderId))
    return null;
  const i = Dr(t, n), s = r == null ? void 0 : r.configuration.lenderId, o = s ? Be[s] : void 0;
  return k(e, i, {
    maxInstallments: r == null ? void 0 : r.configuration.maxInstallments,
    lenderName: De(o),
    textStyle: `font-semibold ${a ? "text-white" : "text-black"}`
  });
}, Yr = (t, e, n) => n ? k(t, e, { maxInstallments: n }) : null;
var ne = /* @__PURE__ */ ((t) => (t.WOOCOMMERCE = "woocommerce", t.MAGENTO2 = "magento2", t.PRESTASHOP1_7 = "prestashop1.7", t.PRESTASHOP1_6 = "prestashop1.6", t.CUSTOM = "custom", t))(ne || {});
const Wr = [
  {
    platform: "woocommerce",
    getElement: () => document.querySelector(
      'li.payment_method_scalapay label[for="payment_method_scalapay"]'
    ) ?? document.querySelector("div.scalapay-checkout-label > span"),
    setTitle: (t, e) => {
      const n = document.querySelector(
        'li.payment_method_scalapay label[for="payment_method_scalapay"] img.scalapay-checkout-label__icon'
      );
      return t.textContent !== e ? (t.innerHTML = e + ((n == null ? void 0 : n.outerHTML) ?? ""), !0) : !1;
    }
  },
  {
    platform: "magento2",
    getElement: () => {
      const t = document.querySelector(
        'input[type="radio"]#scalapay'
      );
      return t ? document.querySelector(`label[for="${t.id}"] span`) : null;
    },
    setTitle: (t, e) => {
      var r;
      const n = ((r = document.querySelector(".scalapay-checkout-widget-logo")) == null ? void 0 : r.outerHTML) || "", a = `${e} ${n}`;
      return t.innerHTML !== a ? (t.innerHTML = a, !0) : !1;
    }
  },
  {
    platform: "prestashop1.7",
    getElement: () => {
      const t = document.querySelector(
        'div[id^="payment-option-"]:has(scalapay-widget[type="checkout"])'
      );
      return t ? document.querySelector(
        `label[for="${t.id.replace("-additional-information", "")}"] span`
      ) : null;
    },
    setTitle: (t, e) => t.textContent !== e ? (t.textContent = e, !0) : !1
  },
  {
    platform: "prestashop1.6",
    getElement: () => document.querySelector(
      'div.scalapay_payment_module:has(scalapay-widget[type="checkout"]) a.scalapay'
    ),
    setTitle: (t, e) => t.textContent !== e ? (t.textContent = e, t.title = e, !0) : !1
  }
], jr = 1e3, $n = (t) => {
  const e = {
    locale: Ze(t.locale)
  }, n = K({}, t, e), a = S(() => {
    var p;
    if (n.installmentAmount)
      return n.installmentAmount;
    if (!n.amount)
      return null;
    const u = It(n.amount);
    if (!u)
      return null;
    const d = n.merchantConfig.products.find((h) => h.product === y.PAY_IN_FOUR), m = (p = d == null ? void 0 : d.configuration) != null && p.splitFee ? (ze(u, 4, n.locale) ?? 0) > 0 : !1;
    return Q(Ht(u, d ? 4 : 3, m, n.locale).baseInstallmentAmount, n.locale);
  }), r = () => {
    const u = a();
    if (!u || !n.merchantConfig.products)
      return null;
    const d = t.merchantConfig.products.find((h) => h.product === y.PAY_IN_THREE), m = t.merchantConfig.products.find((h) => h.product === y.PAY_IN_FOUR), p = t.merchantConfig.products.find((h) => h.product === y.PAY_IN_X);
    if (d && m) {
      if (p) {
        const h = p == null ? void 0 : p.configuration.lenderId, C = h ? Be[h] : void 0;
        return k(n.locale, "checkout_title:pay_in_3_pay_in_4_pay_in_x", {
          maxInstallments: p == null ? void 0 : p.configuration.maxInstallments,
          lenderName: De(C)
        });
      }
      return k(n.locale, "checkout_title:pay_in_3_pay_in_4", {
        installmentAmount: u
      });
    }
    return m ? k(n.locale, "checkout_title:pay_in_4", {
      installmentAmount: u
    }) : k(n.locale, "checkout_title:pay_in_3", {
      installmentAmount: u
    });
  }, i = (u) => n.checkoutTitleSelector ? s(n.checkoutTitleSelector, u) : o(u), s = (u, d) => {
    const m = document.querySelector(u);
    return m ? m.textContent === d ? {
      platform: ne.CUSTOM,
      isCheckoutTitleUpdated: !1,
      isTargetElementFound: !0
    } : (m.textContent = d, {
      platform: ne.CUSTOM,
      isCheckoutTitleUpdated: !0,
      isTargetElementFound: !0
    }) : {
      platform: ne.CUSTOM,
      isCheckoutTitleUpdated: !1,
      isTargetElementFound: !1
    };
  }, o = (u) => {
    const d = Wr.find((m) => m.getElement() !== null);
    if (d) {
      const m = d.getElement();
      return {
        platform: d.platform,
        isTargetElementFound: !0,
        isCheckoutTitleUpdated: d.setTitle(m, u)
      };
    }
    return {
      platform: null,
      isTargetElementFound: !1,
      isCheckoutTitleUpdated: !1
    };
  };
  let l, c = 0;
  return de(() => {
    const u = r();
    if (!u)
      return;
    i(u).isTargetElementFound || (l = new MutationObserver(() => {
      const m = r();
      if (!m)
        return;
      if (c > jr) {
        console.warn("Stopping observer after too many attempts to avoid infinite loops"), l.disconnect();
        return;
      }
      i(m).isCheckoutTitleUpdated && c++;
    }), l.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    }));
  }), ht(() => {
    const u = r();
    u && i(u);
  }), [];
}, Xn = '*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.right-0{right:0}.top-0{top:0}.top-\\[5vh\\]{top:5vh}.isolate{isolation:isolate}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.my-auto{margin-bottom:auto;margin-top:auto}.mb-4{margin-bottom:calc(var(--srem)*1)}.ml-5{margin-left:calc(var(--srem)*1.25)}.ml-\\[8px\\]{margin-left:8px}.mr-\\[8px\\]{margin-right:8px}.mt-1{margin-top:calc(var(--srem)*.25)}.mt-3{margin-top:calc(var(--srem)*.75)}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.contents{display:contents}.h-10{height:calc(var(--srem)*2.5)}.h-\\[21px\\]{height:21px}.max-h-\\[95vh\\]{max-height:95vh}.max-h-\\[calc\\(70vh-2rem\\)\\]{max-height:calc(70vh - 2rem)}.w-auto{width:auto}.w-full{width:100%}.min-w-\\[100px\\]{min-width:100px}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.-translate-y-16{--tw-translate-y:calc(var(--srem)*4*-1)}.-translate-y-16,.rotate-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate:0deg}.rotate-180{--tw-rotate:180deg}.rotate-180,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--srem)*.25)}.gap-4{gap:calc(var(--srem)*1)}.gap-6{gap:calc(var(--srem)*1.5)}.gap-9{gap:calc(var(--srem)*2.25)}.self-center{align-self:center}.self-baseline{align-self:baseline}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:calc(var(--srem)*.25)}.rounded-3xl{border-radius:calc(var(--srem)*1.5)}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-b-xl{border-bottom-left-radius:calc(var(--srem)*.75);border-bottom-right-radius:calc(var(--srem)*.75)}.border{border-width:1px}.border-0{border-width:0}.border-none{border-style:none}.border-sp-exp5-gray{--tw-border-opacity:1;border-color:rgb(224 227 238/var(--tw-border-opacity,1))}.bg-black\\/50{background-color:#00000080}.bg-sp-exp5-black{--tw-bg-opacity:1;background-color:rgb(39 39 39/var(--tw-bg-opacity,1))}.bg-sp-primary-blue{--tw-bg-opacity:1;background-color:rgb(86 102 240/var(--tw-bg-opacity,1))}.bg-sp-primary-pink{--tw-bg-opacity:1;background-color:rgb(249 220 222/var(--tw-bg-opacity,1))}.bg-sp-white-1{--tw-bg-opacity:1;background-color:rgb(246 247 251/var(--tw-bg-opacity,1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-0{padding:0}.p-1{padding:calc(var(--srem)*.25)}.p-2{padding:calc(var(--srem)*.5)}.p-4{padding:calc(var(--srem)*1)}.p-\\[4px\\]{padding:4px}.px-1{padding-left:calc(var(--srem)*.25);padding-right:calc(var(--srem)*.25)}.px-20{padding-left:calc(var(--srem)*5);padding-right:calc(var(--srem)*5)}.px-4{padding-left:calc(var(--srem)*1);padding-right:calc(var(--srem)*1)}.py-2{padding-bottom:calc(var(--srem)*.5);padding-top:calc(var(--srem)*.5)}.py-2\\.5{padding-bottom:calc(var(--srem)*.625);padding-top:calc(var(--srem)*.625)}.py-4{padding-bottom:calc(var(--srem)*1);padding-top:calc(var(--srem)*1)}.py-\\[4px\\]{padding-bottom:4px;padding-top:4px}.pb-0{padding-bottom:0}.pb-16{padding-bottom:calc(var(--srem)*4)}.pb-3{padding-bottom:calc(var(--srem)*.75)}.pl-\\[4px\\]{padding-left:4px}.pr-1{padding-right:calc(var(--srem)*.25)}.pr-\\[8px\\]{padding-right:8px}.pt-6{padding-top:calc(var(--srem)*1.5)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-scalapay-poppins{font-family:Scalapay Poppins,Poppins,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text{font-size:calc(var(--srem)*1)}.text-2xs{font-size:calc(var(--srem)*.7);line-height:calc(var(--srem)*1)}.text-\\[11px\\]{font-size:11px}.text-\\[19px\\]{font-size:19px}.text-base{font-size:calc(var(--srem)*1);line-height:calc(var(--srem)*1.5)}.text-sm{font-size:calc(var(--srem)*.875);line-height:calc(var(--srem)*1.25)}.text-xs{font-size:calc(var(--srem)*.75);line-height:calc(var(--srem)*1)}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.leading-4{line-height:calc(var(--srem)*1)}.leading-6{line-height:calc(var(--srem)*1.5)}.leading-8{line-height:calc(var(--srem)*2)}.leading-\\[21px\\]{line-height:21px}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-sp-exp5-black{--tw-text-opacity:1;color:rgb(39 39 39/var(--tw-text-opacity,1))}.text-sp-exp5-dark-gray{--tw-text-opacity:1;color:rgb(46 51 55/var(--tw-text-opacity,1))}.text-sp-exp5-pink{--tw-text-opacity:1;color:rgb(243 185 188/var(--tw-text-opacity,1))}.text-sp-light-gray-1{--tw-text-opacity:1;color:rgb(117 121 135/var(--tw-text-opacity,1))}.text-sp-light-gray-2{--tw-text-opacity:1;color:rgb(166 169 178/var(--tw-text-opacity,1))}.text-sp-primary-gray{--tw-text-opacity:1;color:rgb(74 77 90/var(--tw-text-opacity,1))}.text-sp-white-2{--tw-text-opacity:1;color:rgb(209 211 216/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-none{transition-property:none}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}:host,:root{--srem:14px;--sp-primary-gray:#4a4d5a;--sp-primary-blue:#5666f0;--sp-light-gray-1:#757987;--bg-white:#fff;--bg-transparent:transparent;--bg-gradient-logo:linear-gradient(90deg,#fae0e6 27.08%,#bbe4ff);--sp-white-1:#f6f7fb}.hover\\:bg-sp-blue-1:hover{--tw-bg-opacity:1;background-color:rgb(70 74 229/var(--tw-bg-opacity,1))}.hover\\:bg-sp-pink-1:hover{--tw-bg-opacity:1;background-color:rgb(251 210 212/var(--tw-bg-opacity,1))}.hover\\:text-sp-primary-blue:hover{--tw-text-opacity:1;color:rgb(86 102 240/var(--tw-text-opacity,1))}@media (min-width:361px){.min-\\[361px\\]\\:w-auto{width:auto}}@media (min-width:450px){.min-\\[450px\\]\\:max-w-sp-modal{max-width:min(80vw,375px)}}';
var Ie = function(t, e) {
  return Ie = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
    n.__proto__ = a;
  } || function(n, a) {
    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  }, Ie(t, e);
};
function st(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ie(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var v = function() {
  return v = Object.assign || function(e) {
    for (var n, a = 1, r = arguments.length; a < r; a++) {
      n = arguments[a];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, v.apply(this, arguments);
};
function Gr(t, e) {
  var n = {};
  for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, a = Object.getOwnPropertySymbols(t); r < a.length; r++)
      e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[r]) && (n[a[r]] = t[a[r]]);
  return n;
}
function X(t, e, n) {
  if (n || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++)
    (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function G(t, e) {
  var n = e && e.cache ? e.cache : Qr, a = e && e.serializer ? e.serializer : Jr, r = e && e.strategy ? e.strategy : $r;
  return r(t, {
    cache: n,
    serializer: a
  });
}
function qr(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Kr(t, e, n, a) {
  var r = qr(a) ? a : n(a), i = e.get(r);
  return typeof i > "u" && (i = t.call(this, a), e.set(r, i)), i;
}
function Jn(t, e, n) {
  var a = Array.prototype.slice.call(arguments, 3), r = n(a), i = e.get(r);
  return typeof i > "u" && (i = t.apply(this, a), e.set(r, i)), i;
}
function Qn(t, e, n, a, r) {
  return n.bind(e, t, a, r);
}
function $r(t, e) {
  var n = t.length === 1 ? Kr : Jn;
  return Qn(t, this, n, e.cache.create(), e.serializer);
}
function Xr(t, e) {
  return Qn(t, this, Jn, e.cache.create(), e.serializer);
}
var Jr = function() {
  return JSON.stringify(arguments);
};
function Ye() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Ye.prototype.get = function(t) {
  return this.cache[t];
};
Ye.prototype.set = function(t, e) {
  this.cache[t] = e;
};
var Qr = {
  create: function() {
    return new Ye();
  }
}, q = {
  variadic: Xr
}, P;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(P || (P = {}));
var N;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(N || (N = {}));
var Lt;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Lt || (Lt = {}));
function ln(t) {
  return t.type === N.literal;
}
function ti(t) {
  return t.type === N.argument;
}
function ta(t) {
  return t.type === N.number;
}
function ea(t) {
  return t.type === N.date;
}
function na(t) {
  return t.type === N.time;
}
function aa(t) {
  return t.type === N.select;
}
function ra(t) {
  return t.type === N.plural;
}
function ei(t) {
  return t.type === N.pound;
}
function ia(t) {
  return t.type === N.tag;
}
function sa(t) {
  return !!(t && typeof t == "object" && t.type === Lt.number);
}
function He(t) {
  return !!(t && typeof t == "object" && t.type === Lt.dateTime);
}
var oa = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ni = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ai(t) {
  var e = {};
  return t.replace(ni, function(n) {
    var a = n.length;
    switch (n[0]) {
      // Era
      case "G":
        e.era = a === 4 ? "long" : a === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        e.year = a === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][a - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][a - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        e.weekday = a === 4 ? "long" : a === 5 ? "narrow" : "short";
        break;
      case "e":
        if (a < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][a - 4];
        break;
      case "c":
        if (a < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][a - 4];
        break;
      // Period
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        e.minute = ["numeric", "2-digit"][a - 1];
        break;
      // Second
      case "s":
        e.second = ["numeric", "2-digit"][a - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        e.timeZoneName = a < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var ri = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ii(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(ri).filter(function(m) {
    return m.length > 0;
  }), n = [], a = 0, r = e; a < r.length; a++) {
    var i = r[a], s = i.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], l = s.slice(1), c = 0, u = l; c < u.length; c++) {
      var d = u[c];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: l });
  }
  return n;
}
function si(t) {
  return t.replace(/^(.*?)-/, "");
}
var cn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, la = /^(@+)?(\+|#+)?[rs]?$/g, oi = /(\*)(0+)|(#+)(0+)|(0+)/g, ca = /^(0+)$/;
function un(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(la, function(n, a, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = a.length, e.maximumSignificantDigits = a.length) : r === "+" ? e.minimumSignificantDigits = a.length : a[0] === "#" ? e.maximumSignificantDigits = a.length : (e.minimumSignificantDigits = a.length, e.maximumSignificantDigits = a.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function ua(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function li(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !ca.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function dn(t) {
  var e = {}, n = ua(t);
  return n || e;
}
function ci(t) {
  for (var e = {}, n = 0, a = t; n < a.length; n++) {
    var r = a[n];
    switch (r.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = si(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = v(v(v({}, e), { notation: "scientific" }), r.options.reduce(function(l, c) {
          return v(v({}, l), dn(c));
        }, {}));
        continue;
      case "engineering":
        e = v(v(v({}, e), { notation: "engineering" }), r.options.reduce(function(l, c) {
          return v(v({}, l), dn(c));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(r.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(oi, function(l, c, u, d, m, p) {
          if (c)
            e.minimumIntegerDigits = u.length;
          else {
            if (d && m)
              throw new Error("We currently do not support maximum integer digits");
            if (p)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (ca.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (cn.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(cn, function(l, c, u, d, m, p) {
        return u === "*" ? e.minimumFractionDigits = c.length : d && d[0] === "#" ? e.maximumFractionDigits = d.length : m && p ? (e.minimumFractionDigits = m.length, e.maximumFractionDigits = m.length + p.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var i = r.options[0];
      i === "w" ? e = v(v({}, e), { trailingZeroDisplay: "stripIfInteger" }) : i && (e = v(v({}, e), un(i)));
      continue;
    }
    if (la.test(r.stem)) {
      e = v(v({}, e), un(r.stem));
      continue;
    }
    var s = ua(r.stem);
    s && (e = v(v({}, e), s));
    var o = li(r.stem);
    o && (e = v(v({}, e), o));
  }
  return e;
}
var Qt = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function ui(t, e) {
  for (var n = "", a = 0; a < t.length; a++) {
    var r = t.charAt(a);
    if (r === "j") {
      for (var i = 0; a + 1 < t.length && t.charAt(a + 1) === r; )
        i++, a++;
      var s = 1 + (i & 1), o = i < 2 ? 1 : 3 + (i >> 1), l = "a", c = di(e);
      for ((c == "H" || c == "k") && (o = 0); o-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else r === "J" ? n += "H" : n += r;
  }
  return n;
}
function di(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, a;
  n !== "root" && (a = t.maximize().region);
  var r = Qt[a || ""] || Qt[n || ""] || Qt["".concat(n, "-001")] || Qt["001"];
  return r[0];
}
var be, mi = new RegExp("^".concat(oa.source, "*")), _i = new RegExp("".concat(oa.source, "*$"));
function I(t, e) {
  return { start: t, end: e };
}
var pi = !!String.prototype.startsWith && "_a".startsWith("a", 1), hi = !!String.fromCodePoint, fi = !!Object.fromEntries, gi = !!String.prototype.codePointAt, yi = !!String.prototype.trimStart, wi = !!String.prototype.trimEnd, xi = !!Number.isSafeInteger, bi = xi ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Te = !0;
try {
  var Ci = ma("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Te = ((be = Ci.exec("a")) === null || be === void 0 ? void 0 : be[0]) === "a";
} catch {
  Te = !1;
}
var mn = pi ? (
  // Native
  function(e, n, a) {
    return e.startsWith(n, a);
  }
) : (
  // For IE11
  function(e, n, a) {
    return e.slice(a, a + n.length) === n;
  }
), Le = hi ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var a = "", r = e.length, i = 0, s; r > i; ) {
      if (s = e[i++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      a += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return a;
  }
), _n = (
  // native
  fi ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, a = 0, r = e; a < r.length; a++) {
        var i = r[a], s = i[0], o = i[1];
        n[s] = o;
      }
      return n;
    }
  )
), da = gi ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var a = e.length;
    if (!(n < 0 || n >= a)) {
      var r = e.charCodeAt(n), i;
      return r < 55296 || r > 56319 || n + 1 === a || (i = e.charCodeAt(n + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
    }
  }
), vi = yi ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(mi, "");
  }
), Si = wi ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(_i, "");
  }
);
function ma(t, e) {
  return new RegExp(t, e);
}
var Ne;
if (Te) {
  var pn = ma("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ne = function(e, n) {
    var a;
    pn.lastIndex = n;
    var r = pn.exec(e);
    return (a = r[1]) !== null && a !== void 0 ? a : "";
  };
} else
  Ne = function(e, n) {
    for (var a = []; ; ) {
      var r = da(e, n);
      if (r === void 0 || _a(r) || Pi(r))
        break;
      a.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Le.apply(void 0, a);
  };
var Ei = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, a) {
      for (var r = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var s = this.parseArgument(e, a);
          if (s.err)
            return s;
          r.push(s.val);
        } else {
          if (i === 125 && e > 0)
            break;
          if (i === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), r.push({
              type: N.pound,
              location: I(o, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (a)
              break;
            return this.error(P.UNMATCHED_CLOSING_TAG, I(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && Me(this.peek() || 0)) {
            var s = this.parseTag(e, n);
            if (s.err)
              return s;
            r.push(s.val);
          } else {
            var s = this.parseLiteral(e, n);
            if (s.err)
              return s;
            r.push(s.val);
          }
        }
      }
      return { val: r, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var a = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: N.literal,
            value: "<".concat(r, "/>"),
            location: I(a, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(e + 1, n, !0);
        if (i.err)
          return i;
        var s = i.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Me(this.char()))
            return this.error(P.INVALID_TAG, I(o, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return r !== c ? this.error(P.UNMATCHED_CLOSING_TAG, I(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: N.tag,
              value: r,
              children: s,
              location: I(a, this.clonePosition())
            },
            err: null
          } : this.error(P.INVALID_TAG, I(o, this.clonePosition())));
        } else
          return this.error(P.UNCLOSED_TAG, I(a, this.clonePosition()));
      } else
        return this.error(P.INVALID_TAG, I(a, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && ki(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var a = this.clonePosition(), r = ""; ; ) {
        var i = this.tryParseQuote(n);
        if (i) {
          r += i;
          continue;
        }
        var s = this.tryParseUnquoted(e, n);
        if (s) {
          r += s;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var l = I(a, this.clonePosition());
      return {
        val: { type: N.literal, value: r, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Ai(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var a = this.char();
        if (a === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(a);
        this.bump();
      }
      return Le.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var a = this.char();
      return a === 60 || a === 123 || a === 35 && (n === "plural" || n === "selectordinal") || a === 125 && e > 0 ? null : (this.bump(), Le(a));
    }, t.prototype.parseArgument = function(e, n) {
      var a = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(a, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(P.EMPTY_ARGUMENT, I(a, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(P.MALFORMED_ARGUMENT, I(a, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(a, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: N.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: I(a, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(a, this.clonePosition())) : this.parseArgumentOptions(e, n, r, a);
        default:
          return this.error(P.MALFORMED_ARGUMENT, I(a, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), a = Ne(this.message, n), r = n + a.length;
      this.bumpTo(r);
      var i = this.clonePosition(), s = I(e, i);
      return { value: a, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, a, r) {
      var i, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (o) {
        case "":
          return this.error(P.EXPECT_ARGUMENT_TYPE, I(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var m = Si(d.val);
            if (m.length === 0)
              return this.error(P.EXPECT_ARGUMENT_STYLE, I(this.clonePosition(), this.clonePosition()));
            var p = I(u, this.clonePosition());
            c = { style: m, styleLocation: p };
          }
          var h = this.tryParseArgumentClose(r);
          if (h.err)
            return h;
          var C = I(r, this.clonePosition());
          if (c && mn(c == null ? void 0 : c.style, "::", 0)) {
            var E = vi(c.style.slice(2));
            if (o === "number") {
              var d = this.parseNumberSkeletonFromString(E, c.styleLocation);
              return d.err ? d : {
                val: { type: N.number, value: a, location: C, style: d.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(P.EXPECT_DATE_TIME_SKELETON, C);
              var x = E;
              this.locale && (x = ui(E, this.locale));
              var m = {
                type: Lt.dateTime,
                pattern: x,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ai(x) : {}
              }, g = o === "date" ? N.date : N.time;
              return {
                val: { type: g, value: a, location: C, style: m },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? N.number : o === "date" ? N.date : N.time,
              value: a,
              location: C,
              style: (i = c == null ? void 0 : c.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, I(b, v({}, b)));
          this.bumpSpace();
          var T = this.parseIdentifierIfPossible(), D = 0;
          if (o !== "select" && T.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), T = this.parseIdentifierIfPossible(), D = d.val;
          }
          var ot = this.tryParsePluralOrSelectOptions(e, o, n, T);
          if (ot.err)
            return ot;
          var h = this.tryParseArgumentClose(r);
          if (h.err)
            return h;
          var vt = I(r, this.clonePosition());
          return o === "select" ? {
            val: {
              type: N.select,
              value: a,
              options: _n(ot.val),
              location: vt
            },
            err: null
          } : {
            val: {
              type: N.plural,
              value: a,
              options: _n(ot.val),
              offset: D,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: vt
            },
            err: null
          };
        }
        default:
          return this.error(P.INVALID_ARGUMENT_TYPE, I(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, I(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var a = this.char();
        switch (a) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, I(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var a = [];
      try {
        a = ii(e);
      } catch {
        return this.error(P.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Lt.number,
          tokens: a,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ci(a) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, a, r) {
      for (var i, s = !1, o = [], l = /* @__PURE__ */ new Set(), c = r.value, u = r.location; ; ) {
        if (c.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var m = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_SELECTOR, P.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (m.err)
              return m;
            u = I(d, this.clonePosition()), c = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        c === "other" && (s = !0), this.bumpSpace();
        var p = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, I(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, a);
        if (h.err)
          return h;
        var C = this.tryParseArgumentClose(p);
        if (C.err)
          return C;
        o.push([
          c,
          {
            value: h.val,
            location: I(p, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, u = i.location;
      }
      return o.length === 0 ? this.error(n === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, I(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(P.MISSING_OTHER_CLAUSE, I(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var a = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (a = -1);
      for (var i = !1, s = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          i = !0, s = s * 10 + (o - 48), this.bump();
        else
          break;
      }
      var l = I(r, this.clonePosition());
      return i ? (s *= a, bi(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = da(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (mn(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), a = this.message.indexOf(e, n);
      return a >= 0 ? (this.bumpTo(a), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && _a(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), a = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return a ?? null;
    }, t;
  }()
);
function Me(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Ai(t) {
  return Me(t) || t === 47;
}
function ki(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function _a(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Pi(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Oe(t) {
  t.forEach(function(e) {
    if (delete e.location, aa(e) || ra(e))
      for (var n in e.options)
        delete e.options[n].location, Oe(e.options[n].value);
    else ta(e) && sa(e.style) || (ea(e) || na(e)) && He(e.style) ? delete e.style.location : ia(e) && Oe(e.children);
  });
}
function Ii(t, e) {
  e === void 0 && (e = {}), e = v({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Ei(t, e).parse();
  if (n.err) {
    var a = SyntaxError(P[n.err.kind]);
    throw a.location = n.err.location, a.originalMessage = n.err.message, a;
  }
  return e != null && e.captureLocation || Oe(n.val), n.val;
}
var ut;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(ut || (ut = {}));
var ft = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r) {
      var i = t.call(this, n) || this;
      return i.code = a, i.originalMessage = r, i;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), hn = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r, i) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(a, '". Options are "').concat(Object.keys(r).join('", "'), '"'), ut.INVALID_VALUE, i) || this;
    }
    return e;
  }(ft)
), Hi = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(a), ut.INVALID_VALUE, r) || this;
    }
    return e;
  }(ft)
), Ti = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(a, '"'), ut.MISSING_VALUE, a) || this;
    }
    return e;
  }(ft)
), j;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(j || (j = {}));
function Li(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var a = e[e.length - 1];
    return !a || a.type !== j.literal || n.type !== j.literal ? e.push(n) : a.value += n.value, e;
  }, []);
}
function Ni(t) {
  return typeof t == "function";
}
function ae(t, e, n, a, r, i, s) {
  if (t.length === 1 && ln(t[0]))
    return [
      {
        type: j.literal,
        value: t[0].value
      }
    ];
  for (var o = [], l = 0, c = t; l < c.length; l++) {
    var u = c[l];
    if (ln(u)) {
      o.push({
        type: j.literal,
        value: u.value
      });
      continue;
    }
    if (ei(u)) {
      typeof i == "number" && o.push({
        type: j.literal,
        value: n.getNumberFormat(e).format(i)
      });
      continue;
    }
    var d = u.value;
    if (!(r && d in r))
      throw new Ti(d, s);
    var m = r[d];
    if (ti(u)) {
      (!m || typeof m == "string" || typeof m == "number") && (m = typeof m == "string" || typeof m == "number" ? String(m) : ""), o.push({
        type: typeof m == "string" ? j.literal : j.object,
        value: m
      });
      continue;
    }
    if (ea(u)) {
      var p = typeof u.style == "string" ? a.date[u.style] : He(u.style) ? u.style.parsedOptions : void 0;
      o.push({
        type: j.literal,
        value: n.getDateTimeFormat(e, p).format(m)
      });
      continue;
    }
    if (na(u)) {
      var p = typeof u.style == "string" ? a.time[u.style] : He(u.style) ? u.style.parsedOptions : a.time.medium;
      o.push({
        type: j.literal,
        value: n.getDateTimeFormat(e, p).format(m)
      });
      continue;
    }
    if (ta(u)) {
      var p = typeof u.style == "string" ? a.number[u.style] : sa(u.style) ? u.style.parsedOptions : void 0;
      p && p.scale && (m = m * (p.scale || 1)), o.push({
        type: j.literal,
        value: n.getNumberFormat(e, p).format(m)
      });
      continue;
    }
    if (ia(u)) {
      var h = u.children, C = u.value, E = r[C];
      if (!Ni(E))
        throw new Hi(C, "function", s);
      var x = ae(h, e, n, a, r, i), g = E(x.map(function(D) {
        return D.value;
      }));
      Array.isArray(g) || (g = [g]), o.push.apply(o, g.map(function(D) {
        return {
          type: typeof D == "string" ? j.literal : j.object,
          value: D
        };
      }));
    }
    if (aa(u)) {
      var b = u.options[m] || u.options.other;
      if (!b)
        throw new hn(u.value, m, Object.keys(u.options), s);
      o.push.apply(o, ae(b.value, e, n, a, r));
      continue;
    }
    if (ra(u)) {
      var b = u.options["=".concat(m)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new ft(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ut.MISSING_INTL_API, s);
        var T = n.getPluralRules(e, { type: u.pluralType }).select(m - (u.offset || 0));
        b = u.options[T] || u.options.other;
      }
      if (!b)
        throw new hn(u.value, m, Object.keys(u.options), s);
      o.push.apply(o, ae(b.value, e, n, a, r, m - (u.offset || 0)));
      continue;
    }
  }
  return Li(o);
}
function Mi(t, e) {
  return e ? v(v(v({}, t || {}), e || {}), Object.keys(t).reduce(function(n, a) {
    return n[a] = v(v({}, t[a]), e[a] || {}), n;
  }, {})) : t;
}
function Oi(t, e) {
  return e ? Object.keys(t).reduce(function(n, a) {
    return n[a] = Mi(t[a], e[a]), n;
  }, v({}, t)) : t;
}
function Ce(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function Vi(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: G(function() {
      for (var e, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      return new ((e = Intl.NumberFormat).bind.apply(e, X([void 0], n, !1)))();
    }, {
      cache: Ce(t.number),
      strategy: q.variadic
    }),
    getDateTimeFormat: G(function() {
      for (var e, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, X([void 0], n, !1)))();
    }, {
      cache: Ce(t.dateTime),
      strategy: q.variadic
    }),
    getPluralRules: G(function() {
      for (var e, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      return new ((e = Intl.PluralRules).bind.apply(e, X([void 0], n, !1)))();
    }, {
      cache: Ce(t.pluralRules),
      strategy: q.variadic
    })
  };
}
var pa = (
  /** @class */
  function() {
    function t(e, n, a, r) {
      n === void 0 && (n = t.defaultLocale);
      var i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = i.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var u = c.reduce(function(d, m) {
          return !d.length || m.type !== j.literal || typeof d[d.length - 1] != "string" ? d.push(m.value) : d[d.length - 1] += m.value, d;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(l) {
        return ae(i.ast, i.locales, i.formatters, i.formats, l, void 0, i.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = i.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
        };
      }, this.getAst = function() {
        return i.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = r || {};
        s.formatters;
        var o = Gr(s, ["formatters"]);
        this.ast = t.__parse(e, v(v({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Oi(t.formats, a), this.formatters = r && r.formatters || Vi(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Ii, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
), wt;
(function(t) {
  t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(wt || (wt = {}));
var $t = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r) {
      var i = this, s = r ? r instanceof Error ? r : new Error(String(r)) : void 0;
      return i = t.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(a, `
`).concat(s ? `
`.concat(s.message, `
`).concat(s.stack) : "")) || this, i.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, e), i;
    }
    return e;
  }(Error)
), Fi = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a) {
      return t.call(this, wt.UNSUPPORTED_FORMATTER, n, a) || this;
    }
    return e;
  }($t)
), Ri = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a) {
      return t.call(this, wt.INVALID_CONFIG, n, a) || this;
    }
    return e;
  }($t)
), fn = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a) {
      return t.call(this, wt.MISSING_DATA, n, a) || this;
    }
    return e;
  }($t)
), nt = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r) {
      var i = t.call(this, wt.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(a, `
`), r) || this;
      return i.locale = a, i;
    }
    return e;
  }($t)
), ve = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a, r, i) {
      var s = t.call(this, "".concat(n, `
MessageID: `).concat(r == null ? void 0 : r.id, `
Default Message: `).concat(r == null ? void 0 : r.defaultMessage, `
Description: `).concat(r == null ? void 0 : r.description, `
`), a, i) || this;
      return s.descriptor = r, s.locale = a, s;
    }
    return e;
  }(nt)
), Bi = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, a) {
      var r = t.call(this, wt.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(a, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(i) {
        var s;
        return (s = i.value) !== null && s !== void 0 ? s : JSON.stringify(i);
      }).join(), ")") : "id", " as fallback.")) || this;
      return r.descriptor = n, r;
    }
    return e;
  }($t)
);
function Ct(t, e, n) {
  return n === void 0 && (n = {}), e.reduce(function(a, r) {
    return r in t ? a[r] = t[r] : r in n && (a[r] = n[r]), a;
  }, {});
}
var Ui = function(t) {
  process.env.NODE_ENV !== "production" && console.error(t);
}, Zi = function(t) {
  process.env.NODE_ENV !== "production" && console.warn(t);
}, ha = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Ui,
  onWarn: Zi
};
function fa() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function gt(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function zi(t) {
  t === void 0 && (t = fa());
  var e = Intl.RelativeTimeFormat, n = Intl.ListFormat, a = Intl.DisplayNames, r = G(function() {
    for (var o, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((o = Intl.DateTimeFormat).bind.apply(o, X([void 0], l, !1)))();
  }, {
    cache: gt(t.dateTime),
    strategy: q.variadic
  }), i = G(function() {
    for (var o, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((o = Intl.NumberFormat).bind.apply(o, X([void 0], l, !1)))();
  }, {
    cache: gt(t.number),
    strategy: q.variadic
  }), s = G(function() {
    for (var o, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((o = Intl.PluralRules).bind.apply(o, X([void 0], l, !1)))();
  }, {
    cache: gt(t.pluralRules),
    strategy: q.variadic
  });
  return {
    getDateTimeFormat: r,
    getNumberFormat: i,
    getMessageFormat: G(function(o, l, c, u) {
      return new pa(o, l, c, v({ formatters: {
        getNumberFormat: i,
        getDateTimeFormat: r,
        getPluralRules: s
      } }, u || {}));
    }, {
      cache: gt(t.message),
      strategy: q.variadic
    }),
    getRelativeTimeFormat: G(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (e.bind.apply(e, X([void 0], o, !1)))();
    }, {
      cache: gt(t.relativeTime),
      strategy: q.variadic
    }),
    getPluralRules: s,
    getListFormat: G(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (n.bind.apply(n, X([void 0], o, !1)))();
    }, {
      cache: gt(t.list),
      strategy: q.variadic
    }),
    getDisplayNames: G(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (a.bind.apply(a, X([void 0], o, !1)))();
    }, {
      cache: gt(t.displayNames),
      strategy: q.variadic
    })
  };
}
function We(t, e, n, a) {
  var r = t && t[e], i;
  if (r && (i = r[n]), i)
    return i;
  a(new Fi("No ".concat(e, " format named: ").concat(n)));
}
function Di(t, e, n) {
  if (n === void 0 && (n = Error), !t)
    throw new n(e);
}
G(function() {
  for (var t, e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return new ((t = Intl.NumberFormat).bind.apply(t, X([void 0], e, !1)))();
}, {
  strategy: q.variadic
});
G(function() {
  for (var t, e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return new ((t = Intl.DateTimeFormat).bind.apply(t, X([void 0], e, !1)))();
}, {
  strategy: q.variadic
});
G(function() {
  for (var t, e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return new ((t = Intl.PluralRules).bind.apply(t, X([void 0], e, !1)))();
}, {
  strategy: q.variadic
});
G(function() {
  for (var t, e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return new ((t = Intl.Locale).bind.apply(t, X([void 0], e, !1)))();
}, {
  strategy: q.variadic
});
G(function() {
  for (var t, e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return new ((t = Intl.ListFormat).bind.apply(t, X([void 0], e, !1)))();
}, {
  strategy: q.variadic
});
function te(t, e) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = v({ timeZone: e }, t[a]), n;
  }, {});
}
function gn(t, e) {
  var n = Object.keys(v(v({}, t), e));
  return n.reduce(function(a, r) {
    return a[r] = v(v({}, t[r] || {}), e[r] || {}), a;
  }, {});
}
function yn(t, e) {
  if (!e)
    return t;
  var n = pa.formats;
  return v(v(v({}, n), t), { date: gn(te(n.date, e), te(t.date || {}, e)), time: gn(te(n.time, e), te(t.time || {}, e)) });
}
var wn = function(t, e, n, a, r) {
  var i = t.locale, s = t.formats, o = t.messages, l = t.defaultLocale, c = t.defaultFormats, u = t.fallbackOnEmptyString, d = t.onError, m = t.timeZone, p = t.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var h = n.id, C = n.defaultMessage;
  Di(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var E = String(h), x = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    o && Object.prototype.hasOwnProperty.call(o, E) && o[E]
  );
  if (Array.isArray(x) && x.length === 1 && x[0].type === N.literal)
    return x[0].value;
  if (!a && x && typeof x == "string" && !p)
    return x.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (a = v(v({}, p), a || {}), s = yn(s, m), c = yn(c, m), !x) {
    if (u === !1 && x === "")
      return x;
    if ((!C || i && i.toLowerCase() !== l.toLowerCase()) && d(new Bi(n, i)), C)
      try {
        var g = e.getMessageFormat(C, l, c, r);
        return g.format(a);
      } catch (b) {
        return d(new ve('Error formatting default message for: "'.concat(E, '", rendering default message verbatim'), i, n, b)), typeof C == "string" ? C : E;
      }
    return E;
  }
  try {
    var g = e.getMessageFormat(x, i, s, v({ formatters: e }, r || {}));
    return g.format(a);
  } catch (b) {
    d(new ve('Error formatting message: "'.concat(E, '", using ').concat(C ? "default message" : "id", " as fallback."), i, n, b));
  }
  if (C)
    try {
      var g = e.getMessageFormat(C, l, c, r);
      return g.format(a);
    } catch (b) {
      d(new ve('Error formatting the default message for: "'.concat(E, '", rendering message verbatim'), i, n, b));
    }
  return typeof x == "string" ? x : typeof C == "string" ? C : E;
}, ga = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  // 'dayPeriod',
  "numberingSystem",
  "fractionalSecondDigits"
];
function me(t, e, n, a) {
  var r = t.locale, i = t.formats, s = t.onError, o = t.timeZone;
  a === void 0 && (a = {});
  var l = a.format, c = v(v({}, o && { timeZone: o }), l && We(i, e, l, s)), u = Ct(a, ga, c);
  return e === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = v(v({}, u), { hour: "numeric", minute: "numeric" })), n(r, u);
}
function Yi(t, e) {
  for (var n = [], a = 2; a < arguments.length; a++)
    n[a - 2] = arguments[a];
  var r = n[0], i = n[1], s = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
  try {
    return me(t, "date", e, s).format(o);
  } catch (l) {
    t.onError(new nt("Error formatting date.", t.locale, l));
  }
  return String(o);
}
function Wi(t, e) {
  for (var n = [], a = 2; a < arguments.length; a++)
    n[a - 2] = arguments[a];
  var r = n[0], i = n[1], s = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
  try {
    return me(t, "time", e, s).format(o);
  } catch (l) {
    t.onError(new nt("Error formatting time.", t.locale, l));
  }
  return String(o);
}
function ji(t, e) {
  for (var n = [], a = 2; a < arguments.length; a++)
    n[a - 2] = arguments[a];
  var r = n[0], i = n[1], s = n[2], o = s === void 0 ? {} : s, l = t.timeZone, c = t.locale, u = t.onError, d = Ct(o, ga, l ? { timeZone: l } : {});
  try {
    return e(c, d).formatRange(r, i);
  } catch (m) {
    u(new nt("Error formatting date time range.", t.locale, m));
  }
  return String(r);
}
function Gi(t, e) {
  for (var n = [], a = 2; a < arguments.length; a++)
    n[a - 2] = arguments[a];
  var r = n[0], i = n[1], s = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
  try {
    return me(t, "date", e, s).formatToParts(o);
  } catch (l) {
    t.onError(new nt("Error formatting date.", t.locale, l));
  }
  return [];
}
function qi(t, e) {
  for (var n = [], a = 2; a < arguments.length; a++)
    n[a - 2] = arguments[a];
  var r = n[0], i = n[1], s = i === void 0 ? {} : i, o = typeof r == "string" ? new Date(r || 0) : r;
  try {
    return me(t, "time", e, s).formatToParts(o);
  } catch (l) {
    t.onError(new nt("Error formatting time.", t.locale, l));
  }
  return [];
}
var Ki = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function $i(t, e, n, a) {
  var r = t.locale, i = t.onError, s = Intl.DisplayNames;
  s || i(new ft(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ut.MISSING_INTL_API));
  var o = Ct(a, Ki);
  try {
    return e(r, o).of(n);
  } catch (l) {
    i(new nt("Error formatting display name.", r, l));
  }
}
var Xi = [
  "type",
  "style"
], xn = Date.now();
function Ji(t) {
  return "".concat(xn, "_").concat(t, "_").concat(xn);
}
function Qi(t, e, n, a) {
  a === void 0 && (a = {});
  var r = ya(t, e, n, a).reduce(function(i, s) {
    var o = s.value;
    return typeof o != "string" ? i.push(o) : typeof i[i.length - 1] == "string" ? i[i.length - 1] += o : i.push(o), i;
  }, []);
  return r.length === 1 ? r[0] : r.length === 0 ? "" : r;
}
function ya(t, e, n, a) {
  var r = t.locale, i = t.onError;
  a === void 0 && (a = {});
  var s = Intl.ListFormat;
  s || i(new ft(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ut.MISSING_INTL_API));
  var o = Ct(a, Xi);
  try {
    var l = {}, c = n.map(function(u, d) {
      if (typeof u == "object") {
        var m = Ji(d);
        return l[m] = u, m;
      }
      return String(u);
    });
    return e(r, o).formatToParts(c).map(function(u) {
      return u.type === "literal" ? u : v(v({}, u), { value: l[u.value] || u.value });
    });
  } catch (u) {
    i(new nt("Error formatting list.", r, u));
  }
  return n;
}
var ts = ["type"];
function es(t, e, n, a) {
  var r = t.locale, i = t.onError;
  a === void 0 && (a = {}), Intl.PluralRules || i(new ft(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ut.MISSING_INTL_API));
  var s = Ct(a, ts);
  try {
    return e(r, s).select(n);
  } catch (o) {
    i(new nt("Error formatting plural.", r, o));
  }
  return "other";
}
var ns = ["numeric", "style"];
function as(t, e, n) {
  var a = t.locale, r = t.formats, i = t.onError;
  n === void 0 && (n = {});
  var s = n.format, o = !!s && We(r, "relative", s, i) || {}, l = Ct(n, ns, o);
  return e(a, l);
}
function rs(t, e, n, a, r) {
  r === void 0 && (r = {}), a || (a = "second");
  var i = Intl.RelativeTimeFormat;
  i || t.onError(new ft(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ut.MISSING_INTL_API));
  try {
    return as(t, e, r).format(n, a);
  } catch (s) {
    t.onError(new nt("Error formatting relative time.", t.locale, s));
  }
  return String(n);
}
var is = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  // ES2020 NumberFormat
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  // ES2023 NumberFormat
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function wa(t, e, n) {
  var a = t.locale, r = t.formats, i = t.onError;
  n === void 0 && (n = {});
  var s = n.format, o = s && We(r, "number", s, i) || {}, l = Ct(n, is, o);
  return e(a, l);
}
function ss(t, e, n, a) {
  a === void 0 && (a = {});
  try {
    return wa(t, e, a).format(n);
  } catch (r) {
    t.onError(new nt("Error formatting number.", t.locale, r));
  }
  return String(n);
}
function os(t, e, n, a) {
  a === void 0 && (a = {});
  try {
    return wa(t, e, a).formatToParts(n);
  } catch (r) {
    t.onError(new nt("Error formatting number.", t.locale, r));
  }
  return [];
}
function ls(t) {
  var e = t ? t[Object.keys(t)[0]] : void 0;
  return typeof e == "string";
}
function cs(t) {
  t.onWarn && t.defaultRichTextElements && ls(t.messages || {}) && t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function bn(t, e) {
  var n = zi(e), a = v(v({}, ha), t), r = a.locale, i = a.defaultLocale, s = a.onError;
  return r ? !Intl.NumberFormat.supportedLocalesOf(r).length && s ? s(new fn('Missing locale data for locale: "'.concat(r, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(r).length && s && s(new fn('Missing locale data for locale: "'.concat(r, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new Ri('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"), cs(a), v(v({}, a), {
    formatters: n,
    formatNumber: ss.bind(null, a, n.getNumberFormat),
    formatNumberToParts: os.bind(null, a, n.getNumberFormat),
    formatRelativeTime: rs.bind(null, a, n.getRelativeTimeFormat),
    formatDate: Yi.bind(null, a, n.getDateTimeFormat),
    formatDateToParts: Gi.bind(null, a, n.getDateTimeFormat),
    formatTime: Wi.bind(null, a, n.getDateTimeFormat),
    formatDateTimeRange: ji.bind(null, a, n.getDateTimeFormat),
    formatTimeToParts: qi.bind(null, a, n.getDateTimeFormat),
    formatPlural: es.bind(null, a, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: wn.bind(null, a, n),
    // @ts-expect-error TODO: will get to this later
    $t: wn.bind(null, a, n),
    formatList: Qi.bind(null, a, n.getListFormat),
    formatListToParts: ya.bind(null, a, n.getListFormat),
    formatDisplayName: $i.bind(null, a, n.getDisplayNames)
  });
}
const Wt = Symbol("store-raw"), lt = Symbol("store-node"), tt = Symbol("store-has"), xa = Symbol("store-self");
function ba(t) {
  let e = t[Z];
  if (!e && (Object.defineProperty(t, Z, {
    value: e = new Proxy(t, ds)
  }), !Array.isArray(t))) {
    const n = Object.keys(t), a = Object.getOwnPropertyDescriptors(t);
    for (let r = 0, i = n.length; r < i; r++) {
      const s = n[r];
      a[s].get && Object.defineProperty(t, s, {
        enumerable: a[s].enumerable,
        get: a[s].get.bind(e)
      });
    }
  }
  return e;
}
function jt(t) {
  let e;
  return t != null && typeof t == "object" && (t[Z] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t));
}
function xt(t, e = /* @__PURE__ */ new Set()) {
  let n, a, r, i;
  if (n = t != null && t[Wt]) return n;
  if (!jt(t) || e.has(t)) return t;
  if (Array.isArray(t)) {
    Object.isFrozen(t) ? t = t.slice(0) : e.add(t);
    for (let s = 0, o = t.length; s < o; s++)
      r = t[s], (a = xt(r, e)) !== r && (t[s] = a);
  } else {
    Object.isFrozen(t) ? t = Object.assign({}, t) : e.add(t);
    const s = Object.keys(t), o = Object.getOwnPropertyDescriptors(t);
    for (let l = 0, c = s.length; l < c; l++)
      i = s[l], !o[i].get && (r = t[i], (a = xt(r, e)) !== r && (t[i] = a));
  }
  return t;
}
function Nt(t, e) {
  let n = t[e];
  return n || Object.defineProperty(t, e, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function bt(t, e, n) {
  if (t[e]) return t[e];
  const [a, r] = U(n, {
    equals: !1,
    internal: !0
  });
  return a.$ = r, t[e] = a;
}
function us(t, e) {
  const n = Reflect.getOwnPropertyDescriptor(t, e);
  return !n || n.get || !n.configurable || e === Z || e === lt || (delete n.value, delete n.writable, n.get = () => t[Z][e]), n;
}
function je(t) {
  zt() && bt(Nt(t, lt), xa)();
}
function Ca(t) {
  return je(t), Reflect.ownKeys(t);
}
const ds = {
  get(t, e, n) {
    if (e === Wt) return t;
    if (e === Z) return n;
    if (e === Zt)
      return je(t), n;
    const a = Nt(t, lt), r = a[e];
    let i = r ? r() : t[e];
    if (e === lt || e === tt || e === "__proto__") return i;
    if (!r) {
      const s = Object.getOwnPropertyDescriptor(t, e);
      zt() && (typeof i != "function" || t.hasOwnProperty(e)) && !(s && s.get) && (i = bt(a, e, i)());
    }
    return jt(i) ? ba(i) : i;
  },
  has(t, e) {
    return e === Wt || e === Z || e === Zt || e === lt || e === tt || e === "__proto__" ? !0 : (zt() && bt(Nt(t, tt), e)(), e in t);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Ca,
  getOwnPropertyDescriptor: us
};
function Mt(t, e, n, a = !1) {
  if (!a && t[e] === n) return;
  const r = t[e], i = t.length;
  n === void 0 ? (delete t[e], t[tt] && t[tt][e] && r !== void 0 && t[tt][e].$()) : (t[e] = n, t[tt] && t[tt][e] && r === void 0 && t[tt][e].$());
  let s = Nt(t, lt), o;
  if ((o = bt(s, e, r)) && o.$(() => n), Array.isArray(t) && t.length !== i) {
    for (let l = t.length; l < i; l++) (o = s[l]) && o.$();
    (o = bt(s, "length", i)) && o.$(t.length);
  }
  (o = s[xa]) && o.$();
}
function va(t, e) {
  const n = Object.keys(e);
  for (let a = 0; a < n.length; a += 1) {
    const r = n[a];
    Mt(t, r, e[r]);
  }
}
function ms(t, e) {
  if (typeof e == "function" && (e = e(t)), e = xt(e), Array.isArray(e)) {
    if (t === e) return;
    let n = 0, a = e.length;
    for (; n < a; n++) {
      const r = e[n];
      t[n] !== r && Mt(t, n, r);
    }
    Mt(t, "length", a);
  } else va(t, e);
}
function Ft(t, e, n = []) {
  let a, r = t;
  if (e.length > 1) {
    a = e.shift();
    const s = typeof a, o = Array.isArray(t);
    if (Array.isArray(a)) {
      for (let l = 0; l < a.length; l++)
        Ft(t, [a[l]].concat(e), n);
      return;
    } else if (o && s === "function") {
      for (let l = 0; l < t.length; l++)
        a(t[l], l) && Ft(t, [l].concat(e), n);
      return;
    } else if (o && s === "object") {
      const { from: l = 0, to: c = t.length - 1, by: u = 1 } = a;
      for (let d = l; d <= c; d += u)
        Ft(t, [d].concat(e), n);
      return;
    } else if (e.length > 1) {
      Ft(t[a], e, [a].concat(n));
      return;
    }
    r = t[a], n = [a].concat(n);
  }
  let i = e[0];
  typeof i == "function" && (i = i(r, n), i === r) || a === void 0 && i == null || (i = xt(i), a === void 0 || jt(r) && jt(i) && !Array.isArray(i) ? va(r, i) : Mt(t, a, i));
}
function _s(...[t, e]) {
  const n = xt(t || {}), a = Array.isArray(n), r = ba(n);
  function i(...s) {
    Ut(() => {
      a && s.length === 1 ? ms(n, s[0]) : Ft(n, s);
    });
  }
  return [r, i];
}
function ps(t, e) {
  const n = Reflect.getOwnPropertyDescriptor(t, e);
  return !n || n.get || n.set || !n.configurable || e === Z || e === lt || (delete n.value, delete n.writable, n.get = () => t[Z][e], n.set = (a) => t[Z][e] = a), n;
}
const hs = {
  get(t, e, n) {
    if (e === Wt) return t;
    if (e === Z) return n;
    if (e === Zt)
      return je(t), n;
    const a = Nt(t, lt), r = a[e];
    let i = r ? r() : t[e];
    if (e === lt || e === tt || e === "__proto__") return i;
    if (!r) {
      const s = Object.getOwnPropertyDescriptor(t, e), o = typeof i == "function";
      if (zt() && (!o || t.hasOwnProperty(e)) && !(s && s.get))
        i = bt(a, e, i)();
      else if (i != null && o && i === Array.prototype[e])
        return (...l) => Ut(() => Array.prototype[e].apply(n, l));
    }
    return jt(i) ? Sa(i) : i;
  },
  has(t, e) {
    return e === Wt || e === Z || e === Zt || e === lt || e === tt || e === "__proto__" ? !0 : (zt() && bt(Nt(t, tt), e)(), e in t);
  },
  set(t, e, n) {
    return Ut(() => Mt(t, e, xt(n))), !0;
  },
  deleteProperty(t, e) {
    return Ut(() => Mt(t, e, void 0, !0)), !0;
  },
  ownKeys: Ca,
  getOwnPropertyDescriptor: ps
};
function Sa(t) {
  let e = t[Z];
  if (!e) {
    Object.defineProperty(t, Z, {
      value: e = new Proxy(t, hs)
    });
    const n = Object.keys(t), a = Object.getOwnPropertyDescriptors(t), r = Object.getPrototypeOf(t), i = r !== null && t !== null && typeof t == "object" && !Array.isArray(t) && r !== Object.prototype;
    if (i) {
      const s = Object.getOwnPropertyDescriptors(r);
      n.push(...Object.keys(s)), Object.assign(a, s);
    }
    for (let s = 0, o = n.length; s < o; s++) {
      const l = n[s];
      if (!(i && l === "constructor")) {
        if (a[l].get) {
          const c = a[l].get.bind(e);
          Object.defineProperty(t, l, {
            get: c,
            configurable: !0
          });
        }
        if (a[l].set) {
          const c = a[l].set;
          Object.defineProperty(t, l, {
            set: (d) => Ut(() => c.call(e, d)),
            configurable: !0
          });
        }
      }
    }
  }
  return e;
}
function fs(t, e) {
  const n = xt(t || {});
  return Sa(n);
}
function Cn(t) {
  return K(ha, {
    locale: t.locale,
    timeZone: t.timeZone,
    fallbackOnEmptyString: t.fallbackOnEmptyString,
    formats: t.formats,
    messages: t.messages,
    defaultLocale: t.defaultLocale,
    defaultFormats: t.defaultFormats,
    defaultRichTextElements: t.defaultRichTextElements,
    onError: t.onError,
    onWarn: t.onWarn
  });
}
const At = (t) => {
  var e;
  return ((e = {}.toString.call(t).match(/\s([A-Za-z]+)/)) == null ? void 0 : e[1].toLowerCase()) ?? "";
}, gs = {
  // @ts-ignore
  nullish(t) {
    return t == null;
  },
  // @ts-ignore
  string(t) {
    return At(t) === "string";
  },
  // @ts-ignore
  number(t) {
    return At(t) === "number";
  },
  // @ts-ignore
  bool(t) {
    return At(t) === "boolean";
  },
  // @ts-ignore
  object(t) {
    return At(t) === "object";
  },
  // @ts-ignore
  array(t) {
    return Array.isArray(t);
  },
  // @ts-ignore
  date(t) {
    return At(t) === "date";
  },
  // @ts-ignore
  function(t) {
    return At(t) === "function";
  }
}, ys = Da(), ws = (t) => {
  if (gs.nullish(t.locale))
    throw new ReferenceError('[solid-intl]: <IntlProvider /> expects a "locale" which was not configured. See https://formatjs.io/docs/react-intl/api#intlshape for more details');
  const e = fs(fa()), [n, a] = _s(bn(Cn(t), e));
  return Tn(() => {
    a(bn(Cn(t), e));
  }), _(ys.Provider, {
    value: n,
    get children() {
      return t.children;
    }
  });
};
function Ge(t, e) {
  const n = new Date(t), a = n.getUTCDate();
  return n.setUTCMonth(n.getUTCMonth() + e), n.getUTCDate() !== a && n.setUTCDate(0), n;
}
function Ea(t, e) {
  const n = [];
  let a = e;
  for (; a > 1; ) {
    const r = Math.round(t / a);
    n.push(r), t -= r, a--;
  }
  return n.push(t), n.sort((r, i) => r - i);
}
function vn(t) {
  return Math.round(t * 100);
}
function mt(t) {
  return (t / 100).toFixed(2);
}
const ce = 1, xs = (t, e, n, a = "v1") => {
  switch (a) {
    case "v1":
    default:
      if (n === J.ES)
        return bs(t);
      if ([
        J.IT,
        J.FR,
        J.EN
      ].includes(n)) {
        if (e === 4)
          return Cs(t);
        if (e === 3)
          return vs(t);
      }
      return 0;
  }
}, bs = (t) => t <= 499 ? null : Math.round(t * 0.01), Cs = (t) => t <= 499 ? null : t <= 999 ? 9 : t <= 1999 ? 18 : t <= 3499 ? 35 : t <= 4999 ? 60 : t <= 6499 ? 90 : t <= 7999 ? 120 : t <= 9499 ? 140 : t <= 10999 ? 170 : t <= 12499 ? 200 : t <= 13999 ? 230 : t <= 15999 ? 260 : t <= 17999 ? 290 : t <= 19999 ? 330 : t <= 34999 ? 360 : t <= 49999 ? 650 : t <= 64999 ? 920 : t <= 79999 ? 1200 : t <= 99999 ? 1480 : t <= 149999 ? 1850 : t <= 199999 ? 2770 : t <= 499999 ? 3700 : null, vs = (t) => t <= 499 ? null : t <= 999 ? 6 : t <= 1999 ? 12 : t <= 3499 ? 25 : t <= 4999 ? 40 : t <= 6499 ? 60 : t <= 7999 ? 80 : t <= 9499 ? 100 : t <= 10999 ? 110 : t <= 12499 ? 130 : t <= 13999 ? 150 : t <= 15999 ? 170 : t <= 17999 ? 200 : t <= 19999 ? 220 : t <= 34999 ? 250 : t <= 49999 ? 430 : t <= 64999 ? 620 : t <= 79999 ? 800 : t <= 99999 ? 990 : t <= 149999 ? 1230 : t <= 199999 ? 1850 : t <= 499999 ? 2400 : null, qe = 360, kt = 30, Aa = 12;
function Ss(t) {
  const { narBPS: e, totalAmountInCents: n, numberOfInstallments: a, stampDutyInCents: r } = t, i = n + r;
  if (e === 0)
    return Math.floor(i / a);
  const s = e / 1e4 / Aa, o = i * s * (1 + s) ** (a - 1), l = (1 + s) ** a - 1;
  return Math.floor(o / l);
}
function Es(t, e) {
  const n = t.getUTCFullYear(), a = t.getUTCMonth() + 1, r = Math.min(t.getUTCDate(), kt), i = e.getUTCFullYear(), s = e.getUTCMonth() + 1;
  let o = Math.min(e.getUTCDate(), kt);
  return r === kt && o === kt && (o = kt), (i - n) * qe + (s - a) * kt + (o - r);
}
function As(t, e) {
  return e.reduce((n, a) => {
    const r = a.daysFromStart / qe;
    return n + a.amountInCents / (1 + t) ** r;
  }, 0);
}
function ks(t, e) {
  return e.reduce((n, a) => {
    const r = a.daysFromStart / qe;
    return r === 0 ? n : n - a.amountInCents * r / (1 + t) ** (r + 1);
  }, 0);
}
function Ps(t) {
  const { totalAmountInCents: e, installments: n, startDate: a } = t, i = [
    { amountInCents: e - n[0].baseInstallmentAmountInCents, daysFromStart: 0 }
  ];
  for (let c = 1; c < n.length; c += 1) {
    const u = Es(
      a,
      n[c].dueDate
    );
    i.push({
      amountInCents: -n[c].baseInstallmentAmountInCents,
      daysFromStart: u
    });
  }
  let s = 0.1;
  const o = 100, l = 1e-8;
  for (let c = 0; c < o; c += 1) {
    const u = As(s, i), d = ks(s, i);
    if (Math.abs(u) < l || Math.abs(d) < 1e-10) break;
    s -= u / d, s = Math.max(-0.99, Math.min(10, s));
  }
  return Math.round(s * 1e4);
}
function Is({
  numberOfInstallments: t,
  totalAmountInCents: e,
  stampDutyInCents: n = 1600,
  narBPS: a = 1400
}) {
  const r = /* @__PURE__ */ new Date(), i = Ss({
    narBPS: a,
    totalAmountInCents: e,
    numberOfInstallments: t,
    stampDutyInCents: n
  }), s = i - n, o = e - s, l = a / Aa / 1e4, c = [];
  c.push({
    baseInstallmentAmountInCents: i,
    principalAmountInCents: s,
    interestAmountInCents: 0,
    outstandingPrincipalInCents: o,
    stampDutyInCents: n,
    dueDate: r
  });
  let u = o;
  for (let h = 0; h < t - 1; h += 1) {
    const C = h + 1, E = h === t - 2, x = Math.round(
      u * l
    ), g = E ? u : i - x;
    u -= g;
    const b = g + x;
    c.push({
      baseInstallmentAmountInCents: b,
      principalAmountInCents: g,
      interestAmountInCents: x,
      outstandingPrincipalInCents: u,
      stampDutyInCents: 0,
      dueDate: Ge(r, C)
    });
  }
  const d = Ps({
    totalAmountInCents: e,
    installments: c,
    startDate: r
  }), m = a / 100, p = d / 100;
  return c.map((h, C) => ({
    sequence: C + 1,
    dueDate: h.dueDate,
    amount: {
      amount: mt(h.baseInstallmentAmountInCents),
      amountInCents: h.baseInstallmentAmountInCents,
      currency: "EUR"
    },
    installmentAmount: {
      amount: mt(h.baseInstallmentAmountInCents),
      amountInCents: h.baseInstallmentAmountInCents,
      currency: "EUR"
    },
    principalAmount: {
      amount: mt(h.principalAmountInCents),
      amountInCents: h.principalAmountInCents,
      currency: "EUR"
    },
    interestAmount: {
      amount: mt(h.interestAmountInCents),
      amountInCents: h.interestAmountInCents,
      currency: "EUR"
    },
    stampDutyAmount: {
      amount: mt(h.stampDutyInCents),
      amountInCents: h.stampDutyInCents,
      currency: "EUR"
    },
    remainingPrincipal: {
      amount: mt(h.outstandingPrincipalInCents),
      amountInCents: h.outstandingPrincipalInCents,
      currency: "EUR"
    },
    tanPercentage: m.toFixed(2),
    taegPercentage: p.toFixed(2)
  }));
}
function Hs({
  numberOfInstallments: t,
  totalAmountInCents: e,
  hasSplitFee: n = !1,
  locale: a = J.IT
}) {
  const r = /* @__PURE__ */ new Date();
  return Ea(
    e,
    t
  ).map((s, o) => {
    const l = Ge(r, o);
    let c = 0;
    return o === 0 && n && (c = xs(s, t, a) ?? 0), {
      sequence: o + 1,
      dueDate: l,
      amount: {
        amount: mt(
          s + c - ce
        ),
        amountInCents: s + c - ce,
        currency: "EUR"
      },
      orderPlacementFee: c > 0 ? {
        amount: mt(c),
        amountInCents: c,
        currency: "EUR"
      } : void 0
    };
  });
}
const Ts = 12;
function Ls(t, e, n) {
  if (n === 0)
    return Ea(t, e);
  const a = n / Ts / 100, r = Math.pow(1 + a, e), i = Math.round(
    t * (a * r) / (r - 1)
  );
  return Array(e).fill(i);
}
function Ns({
  numberOfInstallments: t,
  totalAmountInCents: e,
  tan: n
}) {
  const a = /* @__PURE__ */ new Date();
  return Ls(
    e,
    t,
    n
  ).map((i, s) => {
    const o = Ge(a, s);
    return {
      sequence: s + 1,
      dueDate: o,
      amount: {
        amount: mt(i - ce),
        amountInCents: i - ce,
        currency: "EUR"
      },
      orderPlacementFee: void 0
    };
  });
}
function Ms(t, e, n) {
  let a;
  const r = t.numberOfInstallments || 0;
  return wr.includes(t.product) ? a = Is({
    numberOfInstallments: r,
    totalAmountInCents: e
  }) : t.product === y.PAY_IN_X && t.configuration.maxInstallments ? a = Ns({
    numberOfInstallments: r,
    totalAmountInCents: e,
    tan: t.configuration.tan || 0
  }) : a = Hs({
    numberOfInstallments: r,
    totalAmountInCents: e,
    hasSplitFee: !!t.configuration.splitFee,
    locale: n
  }), {
    paymentSchedule: a,
    isDefault: !1,
    isOfferedForCustomer: !0
  };
}
function Os(t) {
  const e = Object.keys(t);
  if (e.length === 0)
    return t;
  let n = e[0], a = Number.POSITIVE_INFINITY, r = [];
  if (e.forEach((s) => {
    const o = parseFloat(
      t[s].paymentSchedule[0].amount.amount
    );
    r.push(o), o < a && (a = o, n = s);
  }), r.every(
    (s) => s === a
  )) {
    let s = 0;
    e.forEach((o) => {
      const l = t[o].paymentSchedule.length;
      l > s && (s = l, n = o);
    });
  }
  return {
    ...t,
    [n]: {
      ...t[n],
      isDefault: !0
    }
  };
}
function Vs(t, e, n) {
  const a = {};
  return t.forEach((r) => {
    const i = Ms(
      r,
      e,
      n
    );
    a[r.product] = i;
  }), Os(a);
}
function Fs(t) {
  const e = Object.keys(t).find(
    (n) => t[n].isDefault
  );
  return e ? t[e] : t[Object.keys(t)[0]];
}
function Rs(t) {
  const e = t.paymentSchedule.reduce(
    (n, a) => a.amount.amountInCents < n.amount.amountInCents ? a : n
  );
  return {
    amount: e.amount.amount,
    amountInCents: e.amount.amountInCents,
    currency: e.amount.currency
  };
}
const Bs = {
  [y.PAY_NOW_CHECKOUT]: 1,
  [y.PAY_LATER]: 1,
  [y.PAY_IN_THREE]: 3,
  [y.PAY_IN_FOUR]: 4,
  [y.PAY_IN_SIX]: 6,
  [y.PAY_IN_NINE]: 9,
  [y.PAY_IN_TWELVE]: 12
}, Us = [
  y.PAY_IN_THREE,
  y.PAY_IN_FOUR,
  y.PAY_IN_X,
  y.PAY_NOW_CHECKOUT
  /* Product.PAY_LATER*/
];
function Zs(t) {
  return t.product === y.PAY_IN_X ? t.configuration.maxInstallments || 0 : Bs[t.product] || 0;
}
function ka(t, e) {
  if (!t)
    return Yt.products;
  const n = (a) => {
    if (e === null)
      return !0;
    const r = a.configuration.minimumAmount ? vn(
      a.configuration.minimumAmount.amount
    ) : null, i = a.configuration.maximumAmount ? vn(
      a.configuration.maximumAmount.amount
    ) : null;
    return !(!r || e < r || !i || e > i);
  };
  return t.reduce((a, r) => r.type === Re.ONLINE && n(r) && // currently the widget only supports these products
  r.isStackable && Us.includes(r.product) ? [
    ...a,
    {
      ...r,
      numberOfInstallments: Zs(r)
    }
  ] : a, []);
}
var zs = /* @__PURE__ */ w("<svg><rect x=0.285706 width=28.2857 height=18 rx=2.57143 fill=#1434CB></svg>", !1, !0, !1), Ds = /* @__PURE__ */ w('<svg><path d="M14.3317 5.89926L13.0019 12.1167H11.3933L12.7233 5.89926H14.3317ZM21.0989 9.91391L21.9455 7.57915L22.4327 9.91391H21.0989ZM22.8941 12.1167H24.3815L23.0821 5.89926H21.7101C21.4009 5.89926 21.1403 6.07853 21.0249 6.35499L18.6114 12.1167H20.3007L20.636 11.1881H22.6993L22.8941 12.1167ZM18.6952 10.0869C18.7022 8.44602 16.4268 8.35512 16.4421 7.62194C16.447 7.39918 16.6595 7.16187 17.1241 7.10118C17.3544 7.07153 17.99 7.04748 18.7104 7.37946L18.9922 6.06049C18.6052 5.92051 18.1073 5.78571 17.4877 5.78571C15.8975 5.78571 14.779 6.63034 14.77 7.84079C14.7598 8.7359 15.569 9.23499 16.1775 9.53313C16.8048 9.83784 17.015 10.0332 17.0119 10.3055C17.0076 10.7226 16.5117 10.9073 16.05 10.9143C15.2408 10.9269 14.7718 10.6956 14.398 10.5214L14.106 11.8844C14.4825 12.0567 15.1761 12.2066 15.8943 12.2143C17.5848 12.2143 18.6901 11.3796 18.6952 10.0869ZM12.0333 5.89926L9.42715 12.1167H7.72712L6.44451 7.15474C6.36676 6.84961 6.29894 6.73745 6.06247 6.60852C5.67567 6.39848 5.03716 6.20201 4.47571 6.07979L4.51374 5.89926H7.25069C7.59931 5.89926 7.91297 6.13125 7.99282 6.53287L8.67034 10.1309L10.3435 5.89926H12.0333Z"fill=white></svg>', !1, !0, !1), Ys = /* @__PURE__ */ w("<svg><rect width=28.2857 height=18 rx=2.57143 fill=black></svg>", !1, !0, !1), Ws = /* @__PURE__ */ w('<svg><path d="M16.13 5.46265H12.1567V12.5384H16.13V5.46265Z"fill=#FF5F00></svg>', !1, !0, !1), js = /* @__PURE__ */ w('<svg><path d="M12.4086 9C12.4079 8.31855 12.5638 7.64589 12.8643 7.03294C13.1647 6.42 13.602 5.88282 14.1429 5.4621C13.4731 4.94031 12.6686 4.61581 11.8214 4.5257C10.9742 4.43559 10.1185 4.58351 9.35219 4.95254C8.58583 5.32157 7.93971 5.89683 7.48766 6.61256C7.03562 7.3283 6.7959 8.15563 6.7959 9C6.7959 9.84437 7.03562 10.6717 7.48766 11.3874C7.93971 12.1032 8.58583 12.6784 9.35219 13.0475C10.1185 13.4165 10.9742 13.5644 11.8214 13.4743C12.6686 13.3842 13.4731 13.0597 14.1429 12.5379C13.602 12.1172 13.1647 11.58 12.8643 10.9671C12.5638 10.3541 12.408 9.68145 12.4086 9Z"fill=#EB001B></svg>', !1, !0, !1), Gs = /* @__PURE__ */ w('<svg><path d="M21.4899 9C21.4899 9.84435 21.2502 10.6717 20.7982 11.3874C20.3462 12.1032 19.7001 12.6784 18.9337 13.0475C18.1674 13.4165 17.3117 13.5644 16.4646 13.4743C15.6174 13.3842 14.8129 13.0597 14.1431 12.5379C14.6835 12.1167 15.1204 11.5795 15.4209 10.9666C15.7213 10.3538 15.8774 9.68134 15.8774 9C15.8774 8.31866 15.7213 7.64621 15.4209 7.03336C15.1204 6.42051 14.6835 5.88325 14.1431 5.4621C14.8129 4.9403 15.6174 4.61581 16.4646 4.5257C17.3117 4.43559 18.1674 4.58351 18.9337 4.95254C19.7001 5.32158 20.3462 5.89684 20.7982 6.61258C21.2502 7.32831 21.4899 8.15564 21.4899 9Z"fill=#F79E1B></svg>', !1, !0, !1), qs = /* @__PURE__ */ w('<svg><path d="M21.0561 11.7897V11.6448H21.115V11.6153H20.9649V11.6448H21.0239V11.7897H21.0561ZM21.3475 11.7897V11.615H21.3015L21.2486 11.7351L21.1956 11.615H21.1496V11.7897H21.1821V11.6579L21.2317 11.7715H21.2654L21.315 11.6576V11.7897H21.3475Z"fill=#F79E1B></svg>', !1, !0, !1), Ks = /* @__PURE__ */ w('<svg><g clip-path=url(#clip0_1643_259)><rect x=0.351562 width=24.6757 height=16 rx=2.13952 fill=#006FCF></rect><path fill-rule=evenodd clip-rule=evenodd d="M25.2413 8.96802H23.9466C23.5558 8.96802 23.272 9.06034 23.071 9.20387V8.96802H21.1559C20.8497 8.96802 20.4902 9.04292 20.3202 9.20387V8.96802H16.9004V9.20387C16.6282 9.01017 16.169 8.96802 15.957 8.96802H13.7013V9.20387C13.486 8.99815 13.0071 8.96802 12.7153 8.96802H10.1907L9.61301 9.58482L9.07194 8.96802H5.30078V12.9981H9.00096L9.59624 12.3715L10.157 12.9981L12.4378 13.0001V12.052H12.662C12.9647 12.0567 13.3216 12.0446 13.6365 11.9103V12.998H15.5177V11.9476H15.6085C15.7243 11.9476 15.7357 11.9523 15.7357 12.0665V12.9979H21.4506C21.8134 12.9979 22.1927 12.9063 22.4027 12.74V12.9979H24.2155C24.5927 12.9979 24.9611 12.9457 25.2414 12.8121C25.2414 -9.23748 25.2413 18.2001 25.2413 8.96802Z"fill=white></path><path fill-rule=evenodd clip-rule=evenodd d="M1.54697 8.02725L1.81649 7.38589H2.41988L2.6887 8.02725H5.04057V7.53691L5.2505 8.02934H6.47142L6.68135 7.52959V8.02725H12.5262L12.5235 6.97445H12.6366C12.7158 6.97715 12.7389 6.98438 12.7389 7.11337V8.02725H15.7619V7.78217C16.0057 7.91107 16.3849 8.02725 16.884 8.02725H18.1558L18.4279 7.38589H19.0313L19.2975 8.02725H21.7482V7.41803L22.1194 8.02725H24.0833V4H22.1397V4.47562L21.8675 4H19.8732V4.47562L19.6232 4H16.9294C16.4784 4 16.0821 4.0621 15.7619 4.23516V4H13.9029V4.23516C13.6991 4.05679 13.4215 4 13.1127 4H6.32108L5.86538 5.04017L5.3974 4H3.25819V4.47562L3.02319 4H1.19879L0.351562 5.91477V8.02725H1.54697Z"fill=white></path><path fill-rule=evenodd clip-rule=evenodd d="M12.6941 11.4577C13.3056 11.4577 13.9124 11.2921 13.9124 10.4898C13.9124 9.6899 13.2886 9.53827 12.7334 9.53827H10.498L9.60809 10.485L8.74735 9.53827H5.93359V12.4265H8.70471L9.59996 11.4704L10.4614 12.4265H11.8212V11.4577H12.6941ZM11.8212 10.8712H12.7253C12.9941 10.8712 13.1613 10.7396 13.1613 10.4898C13.1613 10.2372 12.986 10.1357 12.7334 10.1357H11.8212V10.8712ZM8.35053 11.8246H6.63048V11.25H8.16638V10.6607H6.63048V10.1356H8.38443L9.14965 10.9773L8.35053 11.8246ZM11.1244 12.1638L10.0503 10.9874L11.1244 9.84826V12.1638Z"fill=#006FCF></path><path fill-rule=evenodd clip-rule=evenodd d="M16.9043 11.3268C16.8446 11.2426 16.7173 11.141 16.5616 11.0843C16.7457 11.0122 17.0574 10.7769 17.0574 10.3159C17.0574 9.98646 16.9186 9.80617 16.6978 9.67457C16.4682 9.55368 16.2102 9.53827 15.856 9.53827H14.2409V12.4265H14.9438V11.3716H15.6915C15.9467 11.3716 16.1025 11.3963 16.2047 11.4998C16.3218 11.6207 16.3198 11.8413 16.3182 12.0108C16.318 12.0296 16.3178 12.0478 16.3178 12.0651V12.4265H17.0202V11.8539C17.0174 11.5994 17.0031 11.4678 16.9043 11.3268ZM16.1391 10.7249C16.0455 10.7796 15.9298 10.7843 15.7936 10.7843H14.9438V10.1357H15.8052C15.9298 10.1357 16.0544 10.1383 16.1391 10.1878C16.2297 10.2346 16.2839 10.3241 16.2839 10.4476C16.2839 10.5712 16.2297 10.6708 16.1391 10.7249Z"fill=#006FCF></path><path d="M22.4518 10.9032C22.588 11.0423 22.661 11.2179 22.661 11.5151C22.661 12.1365 22.2676 12.4265 21.562 12.4265H20.1994V11.8072H21.5566C21.6893 11.8072 21.7834 11.7898 21.8423 11.7357C21.8904 11.691 21.925 11.6261 21.925 11.5473C21.925 11.4631 21.8876 11.3963 21.8396 11.3563C21.7861 11.3122 21.7123 11.2922 21.5905 11.2922C21.5476 11.2907 21.5041 11.2896 21.4601 11.2884C20.8324 11.2716 20.1169 11.2524 20.1169 10.3982C20.1169 9.97932 20.3837 9.53836 21.1171 9.53836H22.5196V10.1531H21.2363C21.1091 10.1531 21.0264 10.1578 20.956 10.2052C20.8794 10.252 20.8509 10.3214 20.8509 10.413C20.8509 10.522 20.916 10.5961 21.004 10.6282C21.0778 10.6535 21.1571 10.6609 21.2763 10.6609L21.6529 10.6709C22.0327 10.6801 22.2934 10.7449 22.4518 10.9032Z"fill=#006FCF></path><path d="M25.2424 10.1529H23.9674C23.8401 10.1529 23.7555 10.1576 23.6843 10.2051C23.6105 10.2518 23.5821 10.3212 23.5821 10.4129C23.5821 10.5218 23.6444 10.5959 23.7351 10.628C23.8089 10.6533 23.8881 10.6607 24.0047 10.6607L24.3838 10.6708C24.7664 10.6801 25.0218 10.745 25.1776 10.9032C25.2015 10.9218 25.2173 10.9423 25.2334 10.9632L25.2378 10.9688L25.2406 10.9724L25.2424 10.9747V12.0571C25.0725 12.3022 24.7414 12.4265 24.2931 12.4265H22.942V11.8072H24.2876C24.4211 11.8072 24.5145 11.7898 24.5707 11.7357C24.6195 11.691 24.6534 11.6261 24.6534 11.5473C24.6534 11.4632 24.6195 11.3964 24.568 11.3563C24.5172 11.3122 24.4433 11.2922 24.3215 11.2922C24.2785 11.2907 24.2349 11.2896 24.1908 11.2884C23.5609 11.2716 22.8451 11.2524 22.8451 10.3982C22.8451 9.97932 23.1147 9.53836 23.8489 9.53836H25.2424L25.2424 10.1529Z"fill=#006FCF></path><path d="M17.4454 9.53827H19.7803V10.1356H18.1421V10.6607H19.7403V11.2499H18.1421V11.8246L19.7803 11.8272V12.4265H17.4454V9.53827Z"fill=#006FCF></path><path fill-rule=evenodd clip-rule=evenodd d="M2.59579 6.20979L2.11696 5.05866L1.64086 6.20979H2.59579ZM13.1444 5.75144C13.0483 5.80901 12.9346 5.81093 12.7984 5.81093H11.9485V5.16956H12.8099C12.9318 5.16956 13.059 5.17496 13.1417 5.22164C13.2324 5.26371 13.2886 5.35324 13.2886 5.47692C13.2886 5.60312 13.2352 5.70467 13.1444 5.75144ZM19.2073 6.20979L18.7232 5.05866L18.2417 6.20979H19.2073ZM7.90567 7.45577H7.18848L7.18583 5.19427L6.1714 7.45577H5.55715L4.54007 5.19227V7.45577H3.11717L2.84836 6.81171H1.39173L1.12018 7.45577H0.360352L1.61314 4.56824H2.65255L3.84239 7.30214V4.56824H4.98421L5.89977 6.52708L6.74081 4.56824H7.90558V7.45577H7.90567ZM10.7641 7.45577H8.42707V4.56824H10.7641V5.16954H9.12669V5.69002H10.7248V6.28191H9.12669V6.85856H10.7641V7.45577ZM14.0593 5.3459C14.0593 5.80629 13.7478 6.04414 13.5663 6.11556C13.7194 6.17304 13.8501 6.27459 13.9124 6.35873C14.0111 6.50235 14.0282 6.63064 14.0282 6.88852V7.45577H13.3226L13.3199 7.09163C13.3199 6.91787 13.3368 6.668 13.2095 6.52908C13.1072 6.42753 12.9514 6.4055 12.6996 6.4055H11.9486V7.45577H11.249V4.56824H12.8581C13.2156 4.56824 13.4791 4.57756 13.7052 4.70654C13.9266 4.83553 14.0593 5.02383 14.0593 5.3459ZM15.1788 7.45577H14.465V4.56824H15.1788V7.45577ZM23.4602 7.45577H22.4688L21.1428 5.28851V7.45577H19.718L19.4458 6.81171H17.9925L17.7284 7.45577H16.9097C16.5697 7.45577 16.1391 7.38157 15.8953 7.13639C15.6495 6.89122 15.5215 6.55913 15.5215 6.03404C15.5215 5.60579 15.598 5.2143 15.8987 4.90494C16.1248 4.67449 16.479 4.56824 16.9611 4.56824H17.6384V5.18696H16.9753C16.72 5.18696 16.5759 5.22441 16.437 5.35801C16.3177 5.47959 16.2359 5.70944 16.2359 6.01209C16.2359 6.32145 16.2982 6.5445 16.4283 6.69021C16.536 6.80448 16.7317 6.83914 16.9158 6.83914H17.23L18.216 4.56832H19.2643L20.4487 7.29952V4.56832H21.5139L22.7437 6.57934V4.56832H23.4602V7.45577Z"fill=#006FCF></svg>', !1, !0, !1), $s = /* @__PURE__ */ w("<svg><defs><clipPath id=clip0_1643_259><rect x=0.351562 width=24.6757 height=16 rx=2.13952 fill=white></svg>", !1, !0, !1), Xs = /* @__PURE__ */ w("<svg><rect x=0.571411 width=28.2857 height=18 rx=2.57143 fill=#F6E21E></svg>", !1, !0, !1), Js = /* @__PURE__ */ w('<svg><path d="M11.242 6.62132C11.4284 6.3708 11.6745 6.16291 11.9801 5.99768C12.2857 5.82711 12.6198 5.74182 12.9824 5.74182C13.3139 5.74182 13.6066 5.81378 13.8604 5.9577C14.1194 6.09629 14.3188 6.29884 14.4587 6.56535C14.5986 6.82654 14.6685 7.1357 14.6685 7.49283C14.6685 7.64741 14.653 7.81264 14.6219 7.98854C14.5442 8.43096 14.3862 8.8254 14.1479 9.17187C13.9148 9.51834 13.6273 9.78752 13.2854 9.97941C12.9487 10.1713 12.5913 10.2673 12.2132 10.2673C11.8506 10.2673 11.545 10.1846 11.2963 10.0194C11.0529 9.84882 10.8768 9.63827 10.768 9.38775L10.2785 12.2741H9.57141L10.6747 5.81378H11.3818L11.242 6.62132ZM13.8993 7.98854C13.92 7.87661 13.9304 7.75401 13.9304 7.62075C13.9304 7.23164 13.819 6.92781 13.5962 6.70927C13.3735 6.4854 13.086 6.37346 12.7338 6.37346C12.4748 6.37346 12.2236 6.44009 11.9801 6.57335C11.7366 6.70128 11.5268 6.8905 11.3507 7.14103C11.1798 7.38622 11.0658 7.67139 11.0089 7.99654C10.9881 8.10848 10.9778 8.23107 10.9778 8.36433C10.9778 8.75344 11.0891 9.0626 11.3119 9.2918C11.5398 9.51568 11.8273 9.62761 12.1743 9.62761C12.4385 9.62761 12.6898 9.56365 12.928 9.43572C13.1715 9.30247 13.3787 9.11324 13.5496 8.86805C13.7257 8.61752 13.8423 8.32435 13.8993 7.98854Z"fill=#1434CB></svg>', !1, !0, !1), Qs = /* @__PURE__ */ w('<svg><path d="M16.6948 6.40544C16.8709 6.20289 17.091 6.03499 17.3552 5.90173C17.6246 5.76314 17.9172 5.69385 18.2332 5.69385C18.5544 5.69385 18.8367 5.76581 19.0801 5.90973C19.3288 6.04831 19.5204 6.25086 19.6551 6.51738C19.7898 6.7839 19.8571 7.09572 19.8571 7.45285C19.8571 7.61809 19.8416 7.78866 19.8105 7.96456C19.7328 8.41763 19.5774 8.82007 19.3443 9.17187C19.1112 9.51834 18.8289 9.78752 18.4974 9.97941C18.1659 10.1713 17.8188 10.2673 17.4562 10.2673C17.1402 10.2673 16.8709 10.2006 16.6481 10.0674C16.4306 9.93411 16.2648 9.7662 16.1509 9.56365L15.6847 12.3061H14.5891L15.708 5.76581H16.8035L16.6948 6.40544ZM18.6994 7.96456C18.7149 7.85795 18.7227 7.76201 18.7227 7.67672C18.7227 7.36223 18.6347 7.11704 18.4585 6.94114C18.2824 6.76524 18.0571 6.67729 17.7825 6.67729C17.5857 6.67729 17.3915 6.73059 17.1998 6.8372C17.0081 6.93847 16.8424 7.08772 16.7025 7.28494C16.5627 7.48217 16.4694 7.71403 16.4228 7.98055C16.4021 8.11914 16.3917 8.22041 16.3917 8.28438C16.3917 8.59887 16.4798 8.84406 16.6559 9.01996C16.8372 9.19586 17.0625 9.28381 17.3319 9.28381C17.5339 9.28381 17.7307 9.23051 17.9224 9.1239C18.1141 9.01729 18.2798 8.86538 18.4197 8.66816C18.5595 8.47094 18.6528 8.2364 18.6994 7.96456Z"fill=#1434CB></svg>', !1, !0, !1), to = /* @__PURE__ */ w("<svg><rect fill=#2d32aa height=18 rx=2.57143 width=28.2857 x=.857178></svg>", !1, !0, !1), eo = /* @__PURE__ */ w('<svg><path d="m14.3253 6.42859c.9807 0 1.7689.63825 2.1192 1.54687.1225.30927.1923.65719.1923 1.02442l-3.3798.65722c.2101.5413.6836.8506 1.2089.8506.6653-.0001 1.0684-.3675 1.3135-.67677l.7529.67677c-.3327.4639-.9808 1.0827-2.0839 1.0635-1.436 0-2.417-1.0634-2.417-2.57132 0-1.54651.9981-2.57118 2.2939-2.57129zm-4.88572.01953c1.57592.00008 2.20602.71559 2.20602 2.2041v2.78418h-1.1377v-2.78418c0-.69587-.2979-1.1405-1.05075-1.14062-.6033 0-1.0032.18747-1.01562.19336v3.75004h-1.15625v-4.60063s1.10354-.40625 2.1543-.40625zm7.63572.11719c.4553 0 .9288.23171 1.209.63769l.5605.81153 1.0499-1.42969h1.3837l-1.7334 2.3584 1.8038 2.49316h-.6661c-.4551-.0001-.9279-.2123-1.208-.6182l-.6474-.88961-1.1211 1.50781h-1.3662l1.7861-2.45508-1.7334-2.41601zm5.6397 4.87109h-1.1211v-4.85254h1.1211zm-8.3545-3.94433c-.5954.00003-1.0679.40602-1.1905 1.14062l2.2764-.44531c-.1577-.44441-.5782-.69531-1.0859-.69531z"fill=#fff></svg>', !1, !0, !1), no = /* @__PURE__ */ w("<svg><rect x=0.571411 width=25 height=18 fill=url(#pattern0_2794_2326)></svg>", !1, !0, !1), ao = /* @__PURE__ */ w('<svg><defs><pattern id=pattern0_2794_2326 patternContentUnits=objectBoundingBox width=1 height=1><use href=#image0_2794_2326 transform="matrix(0.00336449 0 0 0.0046729 -0.0046729 0)"></use></pattern><image id=image0_2794_2326 width=300 height=214 preserveAspectRatio=none href="data:image/png;base64,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"></svg>', !1, !0, !1), ro = /* @__PURE__ */ w("<svg xmlns=http://www.w3.org/2000/svg fill=none role=img>");
const Vt = ({
  width: t = 44,
  height: e = 44,
  name: n,
  className: a
}) => {
  const r = `0 0 ${t} ${e}`, i = {
    visa: [zs(), Ds()],
    mastercard: [Ys(), Ws(), js(), Gs(), qs()],
    amex: [Ks(), $s()],
    postepay: [Xs(), Js(), Qs()],
    nexi: [to(), eo()],
    cartebancaire: [no(), ao()]
  };
  return (() => {
    var s = ro();
    return A(s, "viewBox", r), A(s, "height", e), A(s, "width", t), A(s, "data-testid", `${n}-icon`), A(s, "class", a), A(s, "aria-label", n), f(s, () => i[n]), s;
  })();
};
var io = /* @__PURE__ */ w("<figure data-testid=payment-methods>");
const Pa = (t) => {
  const e = (n) => {
    switch (n) {
      case "it":
        return [_(Vt, {
          name: "postepay",
          height: 18,
          width: 29,
          "data-testid": "postepay-icon"
        }), _(Vt, {
          name: "nexi",
          height: 18,
          width: 29,
          "data-testid": "nexi-icon"
        })];
      case "fr":
        return _(Vt, {
          name: "cartebancaire",
          height: 18,
          width: 29,
          "data-testid": "cartebancaire-icon"
        });
      default:
        return null;
    }
  };
  return (() => {
    var n = io();
    return f(n, _(Vt, {
      name: "mastercard",
      height: 18,
      width: 29,
      "data-testid": "mastercard-icon"
    }), null), f(n, _(Vt, {
      name: "visa",
      height: 18,
      width: 29,
      "data-testid": "visa-icon"
    }), null), f(n, () => e(t.locale), null), V(() => B(n, `flex flex-row gap-1 ${Pt("justify")[t.alignment ?? et.LEFT]}`)), n;
  })();
};
var so = /* @__PURE__ */ w("<span>");
const O = (t) => (() => {
  var e = so();
  return V((n) => {
    var a = t.testId, r = t.className, i = t.children !== null && t.children !== void 0 ? t.children : void 0;
    return a !== n.e && A(e, "data-testid", n.e = a), r !== n.t && B(e, n.t = r), i !== n.a && (e.innerHTML = n.a = i), n;
  }, {
    e: void 0,
    t: void 0,
    a: void 0
  }), e;
})(), Ia = ({
  products: t,
  amount: e,
  locale: n
}) => S(() => {
  var r;
  if (!e)
    return null;
  const a = t.find(
    ({ product: i }) => i === y.PAY_IN_FOUR
  );
  if (a && ((r = a.configuration) != null && r.splitFee)) {
    const i = ze(e, 4, n) || 0;
    return i > 0 ? i : null;
  }
  return null;
}), Ke = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
var oo = /* @__PURE__ */ w("<p>"), lo = /* @__PURE__ */ w('<article><span class="flex flex-col gap-1">'), co = /* @__PURE__ */ w('<span class="mt-3 text-2xs">'), uo = /* @__PURE__ */ w("<span class=mt-1>");
const mo = (t) => {
  const [e, n] = U(null), a = t.darkMode === yt.SYSTEM && Ke() || t.darkMode === yt.ALWAYS, r = S(() => t.merchantConfig.products.some((c) => c.product !== y.PAY_IN_X));
  ht(() => {
    n(Ia({
      products: t.merchantConfig.products,
      amount: t.amount,
      locale: t.locale
    }));
  });
  const i = t.hideInstallments ? "product_widget:pay_in_4_service_fee_single_no_amount" : "product_widget:pay_in_4_service_fee_single", s = (c) => t.hideInstallments ? `checkout_widget:${c}_no_installments` : `checkout_widget:${c}`, o = () => Kn(t.merchantConfig.products, t.locale, it.CHECKOUT, a), l = S(() => Q(Ht(t.amount ?? 0, t.merchantConfig.products.find((c) => c.product === y.PAY_IN_FOUR) ? 4 : 3, !!e(), t.locale).baseInstallmentAmount, t.locale, t.currencyDisplay, t.currencyPosition));
  return _(M, {
    get when() {
      return t.amount;
    },
    get children() {
      return [(() => {
        var c = lo(), u = c.firstChild;
        return f(u, _(M, {
          get when() {
            return t.merchantConfig.products.find((d) => d.product === y.PAY_IN_THREE);
          },
          get children() {
            return _(O, {
              testId: "checkout-label-pay-in-3",
              get children() {
                return k(t.locale, s("pay_in_3"), {
                  installmentAmount: t.hideInstallments ? void 0 : Q(Ht(t.amount ?? 0, 3, !1, t.locale).baseInstallmentAmount, t.locale, t.currencyDisplay, t.currencyPosition),
                  textStyle: `font-semibold ${a ? "text-white" : "text-black"}`
                });
              }
            });
          }
        }), null), f(u, _(M, {
          get when() {
            return t.merchantConfig.products.find((d) => d.product === y.PAY_IN_FOUR);
          },
          get children() {
            return _(O, {
              testId: "checkout-label-pay-in-4",
              get children() {
                return k(t.locale, s("pay_in_4"), {
                  feeStar: e() ? "*" : "",
                  installmentAmount: t.hideInstallments ? void 0 : Q(Ht(t.amount ?? 0, 4, !!e(), t.locale).baseInstallmentAmount, t.locale, t.currencyDisplay, t.currencyPosition),
                  textStyle: `font-semibold ${a ? "text-white" : "text-black"}`
                });
              }
            });
          }
        }), null), f(u, _(M, {
          get when() {
            return t.merchantConfig.products.find((d) => d.product === y.PAY_NOW_CHECKOUT);
          },
          get children() {
            return _(O, {
              testId: "checkout-label-pay-now-checkout",
              get children() {
                return k(t.locale, "checkout_widget:pay_now_checkout");
              }
            });
          }
        }), null), f(u, _(M, {
          get when() {
            return e();
          },
          get children() {
            var d = oo();
            return B(d, `flex-1 font-medium ${a ? "text-sp-light-gray-2" : "text-sp-light-gray-1"} text-xs`), f(d, _(O, {
              testId: "checkout-widget-service-fee",
              get children() {
                return k(t.locale, i, {
                  feeAmount: Q(e(), t.locale, t.currencyDisplay, t.currencyPosition)
                });
              }
            })), d;
          }
        }), null), f(u, _(M, {
          get when() {
            return o();
          },
          get children() {
            return _(O, {
              testId: "checkout-label-pay-in-x",
              get children() {
                return o();
              }
            });
          }
        }), null), f(u, (() => {
          var d = S(() => !!r());
          return () => d() && [(() => {
            var m = co();
            return f(m, _(O, {
              testId: "checkout-accepted-methods",
              get children() {
                return k(t.locale, "checkout_widget:accepted_methods");
              }
            })), m;
          })(), (() => {
            var m = uo();
            return f(m, _(Pa, {
              get alignment() {
                return t.alignment;
              },
              get locale() {
                return t.locale;
              }
            })), m;
          })()];
        })(), null), V(() => B(c, `flex flex-col gap-1 p-2 font-medium font-scalapay-poppins text-${t.alignment} ${a ? "text-white" : "text-sp-primary-gray"}`)), c;
      })(), _(M, {
        get when() {
          return !t.disableCheckoutTitleUpdate;
        },
        get children() {
          return _($n, {
            get installmentAmount() {
              return l();
            },
            get merchantConfig() {
              return t.merchantConfig;
            },
            get locale() {
              return t.locale;
            },
            get checkoutTitleSelector() {
              return t.checkoutTitleSelector;
            }
          });
        }
      })];
    }
  });
};
var _o = /* @__PURE__ */ w('<svg fill=none data-testid=info-icon xmlns=http://www.w3.org/2000/svg><path d="M12 2.90039C13.1949 2.90039 14.3785 3.13558 15.4824 3.59277C16.5863 4.05002 17.5896 4.72061 18.4346 5.56543C19.2795 6.41031 19.9499 7.41371 20.4072 8.51758C20.8645 9.62152 21.0996 10.8051 21.0996 12C21.0996 13.195 20.8645 14.3784 20.4072 15.4824C19.9499 16.5865 19.2796 17.5896 18.4346 18.4346C17.5896 19.2796 16.5865 19.9499 15.4824 20.4072C14.3784 20.8645 13.195 21.0996 12 21.0996C10.8051 21.0996 9.62152 20.8645 8.51758 20.4072C7.41371 19.9499 6.41031 19.2795 5.56543 18.4346C4.72061 17.5896 4.05002 16.5863 3.59277 15.4824C3.13558 14.3785 2.90039 13.1949 2.90039 12C2.90044 10.8051 3.13551 9.62152 3.59277 8.51758C4.05009 7.4136 4.72047 6.41039 5.56543 5.56543C6.41039 4.72047 7.4136 4.05009 8.51758 3.59277C9.62152 3.13551 10.8051 2.90044 12 2.90039ZM12 5.09961C11.094 5.09966 10.1964 5.27829 9.35938 5.625C8.52231 5.97176 7.76177 6.48042 7.12109 7.12109C6.48042 7.76177 5.97176 8.52231 5.625 9.35938C5.27829 10.1964 5.09966 11.094 5.09961 12C5.09961 12.906 5.27837 13.8036 5.625 14.6406C5.97169 15.4776 6.48056 16.2383 7.12109 16.8789C7.76169 17.5195 8.52242 18.0282 9.35938 18.375C10.1964 18.7217 11.094 18.9003 12 18.9004C12.9061 18.9004 13.8035 18.7217 14.6406 18.375C15.4778 18.0282 16.2382 17.5196 16.8789 16.8789C17.5196 16.2382 18.0282 15.4778 18.375 14.6406C18.6784 13.9081 18.8527 13.1292 18.8916 12.3389L18.9004 12L18.8916 11.6611C18.8527 10.8709 18.6784 10.0919 18.375 9.35938C18.0282 8.52242 17.5195 7.76169 16.8789 7.12109C16.2383 6.48056 15.4776 5.97169 14.6406 5.625C13.8036 5.27837 12.906 5.09961 12 5.09961ZM12.001 10.6006C12.4979 10.6008 12.9014 11.0041 12.9014 11.501V15.001L12.8965 15.0928C12.8501 15.5462 12.4666 15.9012 12.001 15.9014C11.5352 15.9014 11.1519 15.5463 11.1055 15.0928L11.1006 15.001V11.501C11.1006 11.0039 11.5039 10.6006 12.001 10.6006ZM12.001 8.10059C12.4979 8.1008 12.9014 8.50405 12.9014 9.00098V9.01074L12.8965 9.10254C12.8502 9.55607 12.4667 9.91093 12.001 9.91113C11.5351 9.91113 11.1518 9.55616 11.1055 9.10254L11.1006 9.01074V9.00098C11.1006 8.50392 11.5039 8.10059 12.001 8.10059Z">');
const po = ({
  width: t = 21,
  height: e = 21,
  fill: n
}) => {
  const a = `0 0 ${Math.round(t * 1.14)} ${Math.round(e * 1.14)}`;
  return (() => {
    var r = _o(), i = r.firstChild;
    return A(r, "width", t), A(r, "height", e), A(r, "viewBox", a), A(i, "fill", n ?? "currentColor"), r;
  })();
};
var ho = /* @__PURE__ */ w('<svg viewBox="0 5 132 25"fill=none xmlns=http://www.w3.org/2000/svg role=img aria-label=scalapay data-testid=scalapay-logo><path fill-rule=evenodd clip-rule=evenodd d="M0.256527 10.5036C-0.0990205 10.0963 -0.0832167 9.48709 0.292984 9.0984L4.2983 4.96013C4.71179 4.53291 5.40037 4.53291 5.81386 4.96013L8.87503 8.12292C9.28852 8.55014 9.9771 8.55014 10.3906 8.12292L13.3641 5.0507C13.7776 4.62348 14.4662 4.62348 14.8797 5.0507L18.8708 9.1743C19.2468 9.56281 19.2628 10.1716 18.9077 10.579L10.4151 20.3224C9.99624 20.8029 9.24538 20.8032 8.8262 20.3229L0.256527 10.5036Z"fill=white>'), fo = /* @__PURE__ */ w('<svg viewBox="0 1 82 16"fill=none xmlns=http://www.w3.org/2000/svg role=img aria-label=scalapay data-testid=scalapay-logo><g><path d="M72 0H9C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18H72C76.9706 18 81 13.9706 81 9C81 4.02944 76.9706 0 72 0Z"fill=#030402></path><path d="M10.3022 13.3789C10.149 13.3789 10.0086 13.3278 9.90643 13.2257C9.86813 13.1874 9.82983 13.1491 9.79153 13.098C8.31068 11.4129 6.8426 9.71503 5.36174 8.02992C5.32345 7.99163 5.28515 7.95333 5.24685 7.90227C5.09366 7.68524 5.09366 7.41716 5.24685 7.2129C5.28515 7.17461 5.32345 7.13631 5.36174 7.08524C6.01281 6.40865 6.67664 5.73205 7.34047 5.04269C7.37877 5.00439 7.41706 4.96609 7.45536 4.9278C7.67238 4.73631 7.97877 4.73631 8.19579 4.9278C8.24685 4.97886 8.29791 5.02992 8.34898 5.08099C8.80855 5.55333 9.28089 6.03843 9.74047 6.51078C9.79153 6.56184 9.8426 6.6129 9.89366 6.66397C9.95749 6.7278 10.0469 6.77886 10.149 6.79163C10.3405 6.84269 10.4937 6.79163 10.6469 6.67673C10.6979 6.62567 10.749 6.57461 10.8 6.52354C11.2469 6.06397 11.7064 5.59163 12.1532 5.11929C12.2043 5.06822 12.2554 5.01716 12.3064 4.96609C12.5234 4.76184 12.8426 4.76184 13.0724 4.96609C13.1107 5.00439 13.149 5.04269 13.1873 5.08099C13.8383 5.75758 14.4894 6.43418 15.1405 7.09801C15.166 7.12354 15.1915 7.16184 15.2171 7.18737C15.4086 7.40439 15.4341 7.69801 15.2426 7.94056C15.2171 7.97886 15.1788 8.01716 15.1532 8.05546C13.6979 9.71503 12.2554 11.3746 10.8 13.0342C10.749 13.0852 10.7107 13.1491 10.6596 13.2001C10.5703 13.315 10.4298 13.3533 10.2894 13.3661L10.3022 13.3789Z"fill=#F7CBCF></path><path d="M52.4299 10.5702V5.78299C52.4299 5.70639 52.4299 5.61703 52.4299 5.54043C52.4299 5.5149 52.4682 5.4766 52.4938 5.4766C52.5321 5.4766 52.5704 5.4766 52.6087 5.4766H53.9363C53.9363 5.4766 53.9874 5.4766 54.0129 5.4766C54.0895 5.4766 54.115 5.50214 54.1278 5.57873C54.1278 5.65533 54.1278 5.71916 54.1278 5.79575C54.1278 5.84682 54.1278 5.88511 54.1278 5.93618C54.1278 5.94894 54.1661 5.97448 54.1916 5.96171C54.2555 5.92341 54.3065 5.88511 54.3704 5.83405C54.8172 5.54043 55.3023 5.37448 55.8384 5.33618C56.9874 5.27235 57.8938 5.73192 58.5831 6.63831C58.9023 7.05958 59.1065 7.54469 59.2087 8.05533C59.2725 8.34894 59.3108 8.65533 59.298 8.96171C59.2853 9.61277 59.1321 10.2128 58.8129 10.7745C58.315 11.6426 57.5746 12.1532 56.6044 12.3702C56.2597 12.4468 55.9023 12.4468 55.5576 12.4085C55.1746 12.3575 54.8172 12.217 54.4853 12.0128C54.4214 11.9745 54.3576 11.9234 54.281 11.8851C54.2555 11.8723 54.2172 11.8851 54.2172 11.9234C54.2172 12 54.2172 12.0894 54.2172 12.166V15.5362C54.2172 15.6638 54.2044 15.6894 54.064 15.6894H52.5704C52.481 15.6894 52.4555 15.6638 52.4427 15.5745C52.4427 15.5234 52.4427 15.4723 52.4427 15.4341V15.166C52.4427 13.6341 52.4427 12.1021 52.4427 10.5702H52.4299ZM54.1916 8.89788V9.80426C54.1916 9.88086 54.2172 9.94469 54.2555 9.99575C54.4214 10.2128 54.6257 10.3915 54.881 10.5192C55.3278 10.7489 55.8001 10.8128 56.2725 10.6723C56.7959 10.5192 57.1533 10.1745 57.3704 9.66384C57.4852 9.38299 57.5363 9.0766 57.5108 8.77022C57.498 8.38724 57.3831 8.04256 57.1789 7.73618C56.9363 7.37873 56.6044 7.13618 56.1704 7.04682C55.9406 6.99575 55.7108 6.99575 55.481 7.04682C54.9831 7.13618 54.5874 7.37873 54.2682 7.76171C54.2172 7.82554 54.1916 7.88937 54.1916 7.97873C54.1916 8.28511 54.1916 8.5915 54.1916 8.89788Z"fill=#F7CBCF></path><path d="M50.3872 8.89802V12.0257C50.3872 12.3193 50.4128 12.3065 50.1191 12.3065H48.8681C48.7021 12.3065 48.6894 12.2938 48.6894 12.1278C48.6894 12.0257 48.6894 11.9363 48.6894 11.847C48.6894 11.847 48.6638 11.8214 48.6511 11.8214C48.6383 11.8214 48.6255 11.8214 48.6128 11.8342C48.5745 11.8597 48.5489 11.8853 48.5106 11.898C48.0128 12.2682 47.4511 12.4342 46.8255 12.4342C45.8042 12.4342 44.7191 11.898 44.1064 10.8895C43.8128 10.4044 43.634 9.881 43.5702 9.30654C43.4936 8.65547 43.5702 8.02994 43.8255 7.41717C44.0553 6.84271 44.4128 6.34483 44.8979 5.96185C45.3191 5.62994 45.8042 5.41292 46.3404 5.34909C47.1191 5.24696 47.8596 5.38739 48.5106 5.85973C48.5617 5.89803 48.6 5.92356 48.6511 5.94909C48.6511 5.94909 48.6766 5.94909 48.6894 5.93632C48.6894 5.93632 48.7021 5.91079 48.7021 5.89802C48.7021 5.8342 48.7021 5.77037 48.7021 5.70654C48.7021 5.47675 48.7021 5.47675 48.9191 5.47675H50.1702C50.1702 5.47675 50.2851 5.47675 50.3362 5.48951C50.3489 5.48951 50.3745 5.51505 50.3872 5.54058C50.3872 5.56611 50.3872 5.59164 50.3872 5.60441V5.87249C50.3872 6.86824 50.3872 7.87675 50.3872 8.89802ZM48.6255 8.89802C48.6255 8.59164 48.6255 8.28526 48.6255 7.99164C48.6255 7.90228 48.6 7.83845 48.5489 7.77462C48.2808 7.45547 47.9617 7.23845 47.5659 7.11079C47.2723 7.02143 46.9659 6.9959 46.6596 7.05973C46.2255 7.14909 45.8808 7.39164 45.6383 7.76185C45.4723 8.00441 45.3702 8.27249 45.3319 8.56611C45.2681 9.00015 45.3064 9.40866 45.4979 9.80441C45.7021 10.2257 46.0213 10.5193 46.4681 10.6725C46.6723 10.7491 46.8894 10.7619 47.1064 10.7619C47.7064 10.7363 48.1787 10.481 48.5489 10.0214C48.6 9.9576 48.6128 9.89377 48.6128 9.82994C48.6128 9.52356 48.6128 9.21717 48.6128 8.91079L48.6255 8.89802Z"fill=#F7CBCF></path><path d="M67.2384 8.88526V11.9874C67.2384 12.064 67.2384 12.1278 67.2384 12.2044C67.2384 12.2682 67.2129 12.2938 67.1363 12.3065C67.1108 12.3065 67.0852 12.3065 67.0597 12.3065H65.7065C65.7065 12.3065 65.6554 12.3065 65.6299 12.3065C65.5661 12.3065 65.5405 12.2682 65.5405 12.2172C65.5405 12.115 65.5405 12.0129 65.5405 11.898C65.5405 11.8725 65.5405 11.847 65.5405 11.8342C65.5405 11.8342 65.515 11.8214 65.5022 11.8214C65.4639 11.847 65.4256 11.8725 65.3746 11.898C65.1959 12.0257 65.0171 12.1406 64.8129 12.2299C64.4937 12.3576 64.1746 12.4342 63.8299 12.447C62.8597 12.4725 62.0171 12.1406 61.3405 11.4385C60.9576 11.0427 60.7022 10.5704 60.549 10.0597C60.3959 9.54909 60.3448 9.03845 60.3959 8.51505C60.4597 7.92781 60.6256 7.36611 60.9448 6.86824C61.2256 6.42143 61.5959 6.05122 62.0427 5.78313C62.4895 5.51505 62.9746 5.37462 63.498 5.34909C64.0086 5.33633 64.481 5.42569 64.9405 5.64271C65.081 5.70654 65.2086 5.78313 65.3363 5.8725C65.3873 5.91079 65.4256 5.93633 65.4767 5.96186C65.4895 5.96186 65.5278 5.96186 65.5405 5.93633C65.5405 5.91079 65.5405 5.8725 65.5405 5.84696C65.5405 5.7576 65.5405 5.66824 65.5405 5.57888C65.5405 5.51505 65.5661 5.48952 65.6299 5.48952C65.6682 5.48952 65.6937 5.48952 65.732 5.48952H67.0597C67.0597 5.48952 67.149 5.48952 67.2001 5.50228C67.2001 5.50228 67.2256 5.51505 67.2384 5.54058C67.2384 5.56611 67.2384 5.59164 67.2384 5.60441C67.2384 5.68101 67.2384 5.74484 67.2384 5.82143C67.2384 6.84271 67.2384 7.87675 67.2384 8.89803V8.88526ZM65.4639 8.88526C65.4639 8.57888 65.4639 8.2725 65.4639 7.97888C65.4639 7.88952 65.4384 7.82569 65.3873 7.76186C65.0682 7.39164 64.6725 7.14909 64.1873 7.05973C63.8937 7.00867 63.6001 7.00867 63.3065 7.11079C62.8852 7.25122 62.5788 7.53207 62.3746 7.92781C62.0937 8.48952 62.0554 9.06398 62.2725 9.65122C62.4639 10.1491 62.8086 10.4938 63.3193 10.6725C63.5235 10.7363 63.7278 10.7619 63.932 10.7619C64.532 10.7363 65.0044 10.4938 65.3873 10.0342C65.4384 9.97037 65.4639 9.89377 65.4639 9.81718C65.4639 9.51079 65.4639 9.20441 65.4639 8.89803V8.88526Z"fill=#F7CBCF></path><path d="M38.2086 12.2682C38.2086 12.2682 38.183 12.2937 38.1575 12.2937C38.132 12.2937 38.0937 12.2937 38.0682 12.2937H36.6767C36.6767 12.2937 36.6128 12.2937 36.5873 12.281C36.5873 12.281 36.5618 12.2682 36.549 12.2554C36.549 12.2299 36.549 12.2044 36.5362 12.1916C36.5362 12.0895 36.5362 11.9874 36.5362 11.8725C36.5362 11.8469 36.5362 11.8214 36.4979 11.8214C36.4724 11.8214 36.4469 11.8214 36.4341 11.8342C36.4086 11.8469 36.383 11.8725 36.3575 11.898C35.8469 12.281 35.2852 12.4469 34.6469 12.4469C33.6384 12.4469 32.5533 11.9235 31.9277 10.9022C31.6086 10.3788 31.4299 9.82991 31.3916 9.22991C31.3405 8.62991 31.4171 8.04267 31.6341 7.48097C31.8511 6.93203 32.1703 6.45969 32.6171 6.07672C33.0639 5.69374 33.5745 5.45118 34.149 5.37459C34.9277 5.27246 35.6682 5.41288 36.3192 5.87246C36.3703 5.91076 36.4213 5.93629 36.4852 5.97459C36.4852 5.97459 36.5235 5.97459 36.5235 5.94906C36.5235 5.87246 36.5235 5.7831 36.5235 5.7065C36.5235 5.47671 36.5235 5.47671 36.7533 5.47671H38.0043C38.0043 5.47671 38.0809 5.47671 38.132 5.47671C38.1958 5.47671 38.2213 5.51501 38.2341 5.59161C38.2341 5.64267 38.2341 5.7065 38.2341 5.75757V12.0384C38.2341 12.1278 38.2341 12.2044 38.2086 12.281V12.2682ZM36.4596 8.88523C36.4596 8.59161 36.4596 8.31076 36.4596 8.01714C36.4596 7.88948 36.4213 7.80012 36.3448 7.71076C35.9107 7.23842 35.3873 6.99586 34.749 7.0214C34.3788 7.0214 34.0596 7.16182 33.7788 7.40437C33.5745 7.5831 33.4213 7.78735 33.3065 8.04267C33.0894 8.54054 33.0511 9.05118 33.2299 9.56182C33.4086 10.098 33.7533 10.4682 34.2894 10.6597C34.4937 10.7363 34.7107 10.7618 34.9277 10.7491C35.5022 10.7235 35.9745 10.4937 36.3448 10.0469C36.4086 9.97033 36.4469 9.88097 36.4469 9.76608C36.4469 9.47246 36.4469 9.16608 36.4469 8.87246L36.4596 8.88523Z"fill=#F7CBCF></path><path d="M70.3404 5.4894C70.3914 5.57876 70.4297 5.66812 70.468 5.74472C71.0297 6.93195 71.5914 8.11919 72.1531 9.30642C72.1914 9.37025 72.2042 9.45961 72.268 9.51067C72.3191 9.48514 72.3318 9.44685 72.3446 9.39578C72.4595 9.14046 72.5744 8.88514 72.6765 8.61706C73.0978 7.64685 73.5191 6.67663 73.9404 5.70642C73.9659 5.62982 74.0042 5.56599 74.0425 5.4894C74.0936 5.4894 74.1318 5.47663 74.1829 5.46387C74.3233 5.46387 74.451 5.46387 74.5914 5.46387H75.6765C75.6765 5.46387 75.7914 5.46387 75.8425 5.47663C75.8553 5.47663 75.868 5.4894 75.868 5.51493C75.868 5.56599 75.8425 5.60429 75.8297 5.64259C75.6382 6.06387 75.4595 6.48514 75.268 6.89365C74.0042 9.74046 72.7404 12.5745 71.4765 15.4213C71.4382 15.4979 71.4127 15.5873 71.3489 15.6639C71.3106 15.6639 71.2723 15.6639 71.234 15.6639H69.6765C69.6765 15.6639 69.6127 15.6639 69.5872 15.6639C69.5872 15.6639 69.5616 15.6383 69.5616 15.6256C69.5616 15.5873 69.5872 15.549 69.5999 15.5107C69.7021 15.2681 69.817 15.0256 69.9191 14.783C70.3531 13.8128 70.7872 12.8426 71.2212 11.8596C71.2467 11.7958 71.285 11.732 71.3106 11.6681C71.3361 11.6171 71.3361 11.5788 71.3106 11.5277C71.2723 11.4511 71.2467 11.3873 71.2084 11.3107C70.3148 9.44684 69.4212 7.58302 68.5276 5.71919C68.5021 5.65536 68.4638 5.59153 68.4382 5.5277C68.4382 5.51493 68.451 5.47663 68.4765 5.47663C68.5021 5.47663 68.5404 5.47663 68.5659 5.47663H70.1744C70.1744 5.47663 70.2638 5.47663 70.3276 5.47663L70.3404 5.4894Z"fill=#F7CBCF></path><path d="M29.2086 9.88099C29.2086 9.88099 29.2852 9.93205 29.3235 9.95758C29.7193 10.2767 30.1278 10.5703 30.5107 10.8895C30.5107 10.8895 30.5107 10.9023 30.5107 10.915C30.5107 10.9278 30.5107 10.9533 30.498 10.9661C30.1278 11.4767 29.6682 11.8852 29.0937 12.1406C28.7235 12.3065 28.3405 12.3959 27.932 12.4342C27.715 12.4469 27.498 12.4469 27.281 12.4342C25.8384 12.3576 24.5746 11.4001 24.1533 9.91929C24.0384 9.51077 23.9873 9.0895 24.0256 8.65546C24.1278 7.40439 24.7022 6.43418 25.7873 5.78312C26.298 5.4895 26.8469 5.33631 27.4341 5.32354C28.0852 5.29801 28.7107 5.4512 29.2852 5.77035C29.6554 5.9746 29.9873 6.25546 30.2554 6.58737C30.281 6.6129 30.2937 6.63843 30.3065 6.66397C30.3065 6.66397 30.3065 6.70226 30.3065 6.71503C30.281 6.74056 30.2554 6.77886 30.2299 6.80439C29.898 7.11077 29.5661 7.40439 29.2341 7.71077C29.2086 7.73631 29.1703 7.76184 29.1448 7.78737C29.1193 7.8129 29.081 7.80014 29.0554 7.78737C29.0171 7.74907 28.9788 7.69801 28.9405 7.65971C28.8129 7.51929 28.6597 7.39163 28.4937 7.2895C27.881 6.90652 27.0767 6.94482 26.5278 7.36609C26.1958 7.62141 25.9788 7.94056 25.8639 8.33631C25.749 8.74482 25.7618 9.16609 25.9022 9.56184C26.1576 10.3278 26.8214 10.698 27.4469 10.7363C28.098 10.7746 28.6086 10.5321 29.0427 10.0469C29.0937 9.99588 29.132 9.93205 29.1831 9.88099C29.1831 9.88099 29.1958 9.88099 29.2086 9.88099Z"fill=#F7CBCF></path><path d="M22.7362 6.03836C22.4553 6.47241 22.2128 6.90645 21.9192 7.31496C21.9192 7.31496 21.9064 7.31496 21.8809 7.31496C21.8298 7.27666 21.766 7.25113 21.7022 7.21283C21.4724 7.07241 21.2171 6.95751 20.949 6.90645C20.7064 6.85539 20.4511 6.86815 20.2085 6.93198C20.1192 6.95751 20.0298 6.99581 19.9532 7.05964C19.9022 7.09794 19.8511 7.149 19.8256 7.20007C19.7107 7.36602 19.7362 7.55751 19.8766 7.69794C19.9405 7.76177 20.0171 7.81283 20.0936 7.85113C20.2085 7.90219 20.3234 7.95326 20.4511 8.00432C20.6681 8.08092 20.8851 8.15751 21.1022 8.23411C21.3319 8.3107 21.5617 8.41283 21.7915 8.52773C21.9575 8.61709 22.1234 8.71921 22.2766 8.84687C22.6851 9.19156 22.9149 9.6256 22.9405 10.1618C22.9532 10.4171 22.9405 10.6724 22.8639 10.9277C22.749 11.2852 22.5319 11.5788 22.2383 11.8213C21.9447 12.0639 21.6 12.2299 21.2426 12.332C20.9107 12.4213 20.566 12.4596 20.2213 12.4469C19.4554 12.4213 18.7532 12.2043 18.1022 11.8213C17.9873 11.7575 17.8724 11.6682 17.7575 11.5916C17.6936 11.5533 17.6936 11.515 17.7319 11.4511C17.9745 11.0682 18.2171 10.6979 18.4724 10.3277C18.4724 10.315 18.4979 10.2894 18.5234 10.2767H18.5617C18.6 10.3022 18.6383 10.3277 18.6766 10.3533C19.1745 10.7235 19.7362 10.9022 20.3617 10.9022C20.4894 10.9022 20.6043 10.9022 20.7192 10.8511C20.783 10.8256 20.8468 10.8001 20.9107 10.7618C20.9617 10.7235 21.0128 10.6852 21.0511 10.6341C21.2171 10.4554 21.2171 10.2128 21.0511 10.0213C20.9873 9.94475 20.9107 9.89368 20.8341 9.84262C20.7319 9.77879 20.6171 9.72773 20.5149 9.68943C20.3107 9.61283 20.0936 9.53624 19.8894 9.44687C19.6851 9.37028 19.4809 9.29368 19.2894 9.20432C19.1362 9.14049 18.9958 9.0639 18.8681 8.97453C18.7405 8.88517 18.6 8.79581 18.4851 8.68092C18.2298 8.4256 18.0639 8.11922 18.0128 7.749C17.9234 7.08517 18.1149 6.5107 18.6 6.05113C18.8936 5.75751 19.2639 5.57879 19.6596 5.45113C19.8766 5.3873 20.1064 5.349 20.349 5.33624C21.0639 5.3107 21.7532 5.4639 22.3915 5.78305C22.4809 5.83411 22.5702 5.88517 22.6596 5.949C22.6851 5.96177 22.6979 5.9873 22.7362 6.0256V6.03836Z"fill=#F7CBCF></path><path d="M40.2639 7.30223V2.65542C40.2639 2.25968 40.2256 2.31074 40.6086 2.31074C40.9915 2.31074 41.3618 2.31074 41.7447 2.31074C41.8213 2.31074 41.8852 2.31074 41.9618 2.31074C42 2.31074 42.0256 2.34904 42.0383 2.38734C42.0383 2.45117 42.0383 2.515 42.0383 2.57883V12.0256C42.0383 12.0895 42.0383 12.1533 42.0383 12.2171C42.0383 12.2427 42.0001 12.281 41.9745 12.281C41.949 12.281 41.9107 12.281 41.8852 12.281H40.4426C40.4426 12.281 40.3788 12.281 40.3532 12.281C40.3277 12.281 40.2894 12.2427 40.2894 12.2171C40.2894 12.1916 40.2894 12.1661 40.2894 12.1405V11.9235C40.2894 10.3788 40.2894 8.83415 40.2894 7.28947L40.2639 7.30223Z"fill=#F7CBCF>'), go = /* @__PURE__ */ w('<svg viewBox="0 0 88 16"fill=none xmlns=http://www.w3.org/2000/svg data-testid=scalapay-logo-black role=img aria-label=scalapay><path fill-rule=evenodd clip-rule=evenodd d="M0.171018 6.72233C-0.0660137 6.4616 -0.0554778 6.07174 0.195322 5.82298L2.86553 3.17448C3.14119 2.90106 3.60024 2.90106 3.87591 3.17448L5.91669 5.19867C6.19235 5.47209 6.6514 5.47209 6.92706 5.19867L8.9094 3.23245C9.18506 2.95903 9.64411 2.95903 9.91978 3.23245L12.5805 5.87155C12.8312 6.1202 12.8419 6.50984 12.6051 6.77059L6.94341 13.0063C6.66416 13.3139 6.16359 13.314 5.88413 13.0066L0.171018 6.72233ZM15.5899 11.0316L16.6542 9.46526C17.2118 9.97053 18.0734 10.2737 18.9012 10.2737C19.4925 10.2737 19.9487 9.98737 19.9487 9.58316C19.9487 8.35368 15.9785 8.79158 15.9785 6.16421C15.9785 4.59789 17.499 3.62105 19.1208 3.62105C20.1852 3.62105 21.3509 4.02526 21.8916 4.44632L20.861 6.02947C20.4386 5.72632 19.8811 5.47368 19.2898 5.47368C18.6816 5.47368 18.1748 5.70947 18.1748 6.13053C18.1748 7.19158 22.145 6.77053 22.145 9.6C22.145 11.1663 20.6076 12.1263 18.8843 12.1263C17.7524 12.1263 16.5529 11.7389 15.5899 11.0316ZM29.9165 9.02737L31.6059 10.2905C30.6429 11.5705 29.4265 12.1263 27.8891 12.1263C25.3549 12.1263 23.4965 10.24 23.4965 7.8821C23.4965 5.50737 25.4056 3.62105 27.906 3.62105C29.3252 3.62105 30.5923 4.27789 31.3525 5.25474L29.7982 6.61895C29.359 6.04632 28.7001 5.64211 27.906 5.64211C26.6389 5.64211 25.6928 6.63579 25.6928 7.8821C25.6928 9.1621 26.622 10.1053 27.9567 10.1053C28.8521 10.1053 29.5617 9.56632 29.9165 9.02737ZM38.9551 9.09474V6.65263C38.4989 6.04632 37.7724 5.64211 36.9277 5.64211C35.6437 5.64211 34.8159 6.70316 34.8159 7.8821C34.8159 9.1621 35.7451 10.1053 36.9784 10.1053C37.8062 10.1053 38.5327 9.70105 38.9551 9.09474ZM41.1514 3.78947V11.9579H39.0395V11.3011C38.3638 11.8737 37.5866 12.1263 36.7588 12.1263C35.5424 12.1263 34.3935 11.5874 33.6671 10.7453C33.0251 10.0042 32.6196 8.99368 32.6196 7.8821C32.6196 5.47368 34.4104 3.62105 36.6405 3.62105C37.5697 3.62105 38.3975 3.92421 39.0395 4.44632V3.78947H41.1514ZM45.8818 0V11.9579H43.6855V0H45.8818ZM54.0757 9.09474V6.65263C53.6196 6.04632 52.8931 5.64211 52.0484 5.64211C50.7644 5.64211 49.9365 6.70316 49.9365 7.8821C49.9365 9.1621 50.8657 10.1053 52.099 10.1053C52.9269 10.1053 53.6533 9.70105 54.0757 9.09474ZM56.272 3.78947V11.9579H54.1602V11.3011C53.4844 11.8737 52.7072 12.1263 51.8794 12.1263C50.663 12.1263 49.5142 11.5874 48.7877 10.7453C48.1457 10.0042 47.7402 8.99368 47.7402 7.8821C47.7402 5.47368 49.5311 3.62105 51.7612 3.62105C52.6904 3.62105 53.5182 3.92421 54.1602 4.44632V3.78947H56.272ZM58.8062 16V3.78947H60.918V4.44632C61.56 3.92421 62.3878 3.62105 63.317 3.62105C65.5471 3.62105 67.3379 5.47368 67.3379 7.8821C67.3379 8.99368 66.9494 10.0042 66.3074 10.7453C65.5809 11.5874 64.4152 12.1263 63.1988 12.1263C62.3709 12.1263 61.6614 11.8905 61.0025 11.3853V16H58.8062ZM61.0025 6.65263V9.09474C61.4248 9.70105 62.1513 10.1053 62.9791 10.1053C64.2124 10.1053 65.1416 9.1621 65.1416 7.8821C65.1416 6.70316 64.3138 5.64211 63.0298 5.64211C62.1851 5.64211 61.4586 6.04632 61.0025 6.65263ZM75.025 9.09474V6.65263C74.5688 6.04632 73.8424 5.64211 72.9976 5.64211C71.7136 5.64211 70.8858 6.70316 70.8858 7.8821C70.8858 9.1621 71.815 10.1053 73.0483 10.1053C73.8761 10.1053 74.6026 9.70105 75.025 9.09474ZM77.2213 3.78947V11.9579H75.1094V11.3011C74.4337 11.8737 73.6565 12.1263 72.8287 12.1263C71.6123 12.1263 70.4634 11.5874 69.737 10.7453C69.095 10.0042 68.6895 8.99368 68.6895 7.8821C68.6895 5.47368 70.4803 3.62105 72.7104 3.62105C73.6396 3.62105 74.4675 3.92421 75.1094 4.44632V3.78947H77.2213ZM82.3572 16H80.0596L82.3234 11.1326L78.6573 3.78947H81.0732L83.4723 8.69053L85.6854 3.78947H88L82.3572 16Z"fill=#272727>'), yo = /* @__PURE__ */ w('<svg viewBox="16 1 56 15"fill=none xmlns=http://www.w3.org/2000/svg data-testid=scalapay-logo-black role=img aria-label=scalapay><path fill-rule=evenodd clip-rule=evenodd fill=currentColor d="M0.171018 6.72233C-0.0660137 6.4616 -0.0554778 6.07174 0.195322 5.82298L2.86553 3.17448C3.14119 2.90106 3.60024 2.90106 3.87591 3.17448L5.91669 5.19867C6.19235 5.47209 6.6514 5.47209 6.92706 5.19867L8.9094 3.23245C9.18506 2.95903 9.64411 2.95903 9.91978 3.23245L12.5805 5.87155C12.8312 6.1202 12.8419 6.50984 12.6051 6.77059L6.94341 13.0063C6.66416 13.3139 6.16359 13.314 5.88413 13.0066L0.171018 6.72233ZM15.5899 11.0316L16.6542 9.46526C17.2118 9.97053 18.0734 10.2737 18.9012 10.2737C19.4925 10.2737 19.9487 9.98737 19.9487 9.58316C19.9487 8.35368 15.9785 8.79158 15.9785 6.16421C15.9785 4.59789 17.499 3.62105 19.1208 3.62105C20.1852 3.62105 21.3509 4.02526 21.8916 4.44632L20.861 6.02947C20.4386 5.72632 19.8811 5.47368 19.2898 5.47368C18.6816 5.47368 18.1748 5.70947 18.1748 6.13053C18.1748 7.19158 22.145 6.77053 22.145 9.6C22.145 11.1663 20.6076 12.1263 18.8843 12.1263C17.7524 12.1263 16.5529 11.7389 15.5899 11.0316ZM29.9165 9.02737L31.6059 10.2905C30.6429 11.5705 29.4265 12.1263 27.8891 12.1263C25.3549 12.1263 23.4965 10.24 23.4965 7.8821C23.4965 5.50737 25.4056 3.62105 27.906 3.62105C29.3252 3.62105 30.5923 4.27789 31.3525 5.25474L29.7982 6.61895C29.359 6.04632 28.7001 5.64211 27.906 5.64211C26.6389 5.64211 25.6928 6.63579 25.6928 7.8821C25.6928 9.1621 26.622 10.1053 27.9567 10.1053C28.8521 10.1053 29.5617 9.56632 29.9165 9.02737ZM38.9551 9.09474V6.65263C38.4989 6.04632 37.7724 5.64211 36.9277 5.64211C35.6437 5.64211 34.8159 6.70316 34.8159 7.8821C34.8159 9.1621 35.7451 10.1053 36.9784 10.1053C37.8062 10.1053 38.5327 9.70105 38.9551 9.09474ZM41.1514 3.78947V11.9579H39.0395V11.3011C38.3638 11.8737 37.5866 12.1263 36.7588 12.1263C35.5424 12.1263 34.3935 11.5874 33.6671 10.7453C33.0251 10.0042 32.6196 8.99368 32.6196 7.8821C32.6196 5.47368 34.4104 3.62105 36.6405 3.62105C37.5697 3.62105 38.3975 3.92421 39.0395 4.44632V3.78947H41.1514ZM45.8818 0V11.9579H43.6855V0H45.8818ZM54.0757 9.09474V6.65263C53.6196 6.04632 52.8931 5.64211 52.0484 5.64211C50.7644 5.64211 49.9365 6.70316 49.9365 7.8821C49.9365 9.1621 50.8657 10.1053 52.099 10.1053C52.9269 10.1053 53.6533 9.70105 54.0757 9.09474ZM56.272 3.78947V11.9579H54.1602V11.3011C53.4844 11.8737 52.7072 12.1263 51.8794 12.1263C50.663 12.1263 49.5142 11.5874 48.7877 10.7453C48.1457 10.0042 47.7402 8.99368 47.7402 7.8821C47.7402 5.47368 49.5311 3.62105 51.7612 3.62105C52.6904 3.62105 53.5182 3.92421 54.1602 4.44632V3.78947H56.272ZM58.8062 16V3.78947H60.918V4.44632C61.56 3.92421 62.3878 3.62105 63.317 3.62105C65.5471 3.62105 67.3379 5.47368 67.3379 7.8821C67.3379 8.99368 66.9494 10.0042 66.3074 10.7453C65.5809 11.5874 64.4152 12.1263 63.1988 12.1263C62.3709 12.1263 61.6614 11.8905 61.0025 11.3853V16H58.8062ZM61.0025 6.65263V9.09474C61.4248 9.70105 62.1513 10.1053 62.9791 10.1053C64.2124 10.1053 65.1416 9.1621 65.1416 7.8821C65.1416 6.70316 64.3138 5.64211 63.0298 5.64211C62.1851 5.64211 61.4586 6.04632 61.0025 6.65263ZM75.025 9.09474V6.65263C74.5688 6.04632 73.8424 5.64211 72.9976 5.64211C71.7136 5.64211 70.8858 6.70316 70.8858 7.8821C70.8858 9.1621 71.815 10.1053 73.0483 10.1053C73.8761 10.1053 74.6026 9.70105 75.025 9.09474ZM77.2213 3.78947V11.9579H75.1094V11.3011C74.4337 11.8737 73.6565 12.1263 72.8287 12.1263C71.6123 12.1263 70.4634 11.5874 69.737 10.7453C69.095 10.0042 68.6895 8.99368 68.6895 7.8821C68.6895 5.47368 70.4803 3.62105 72.7104 3.62105C73.6396 3.62105 74.4675 3.92421 75.1094 4.44632V3.78947H77.2213ZM82.3572 16H80.0596L82.3234 11.1326L78.6573 3.78947H81.0732L83.4723 8.69053L85.6854 3.78947H88L82.3572 16Z">');
const $e = ({
  type: t = "black",
  width: e = 81,
  height: n = 16,
  scalePercent: a = 100,
  className: r
}) => {
  let i = 1;
  a && a >= Lr && a <= Nr && (i = a / 100);
  const s = () => e * i, o = () => n * i;
  return S(() => {
    switch (t) {
      case "white":
        return (() => {
          var c = ho();
          return V((u) => {
            var d = s(), m = o();
            return d !== u.e && A(c, "width", u.e = d), m !== u.t && A(c, "height", u.t = m), u;
          }, {
            e: void 0,
            t: void 0
          }), c;
        })();
      case "black":
        return (() => {
          var c = fo();
          return A(c, "class", r), V((u) => {
            var d = s(), m = o();
            return d !== u.e && A(c, "width", u.e = d), m !== u.t && A(c, "height", u.t = m), u;
          }, {
            e: void 0,
            t: void 0
          }), c;
        })();
      case "white-pill":
        return (() => {
          var c = go();
          return A(c, "width", e), A(c, "height", n), A(c, "class", r), c;
        })();
      case "custom":
        return (() => {
          var c = yo();
          return A(c, "width", e), A(c, "height", n), A(c, "class", r), c;
        })();
      default:
        return null;
    }
  });
};
var wo = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg fill=black data-testid=close-icon role=img aria-label=close><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">');
const xo = ({
  width: t = 44,
  height: e = 44,
  className: n
}) => {
  const a = `0 0 ${t} ${e}`;
  return (() => {
    var r = wo();
    return A(r, "viewBox", a), A(r, "height", e), A(r, "width", t), A(r, "class", n), r;
  })();
};
var bo = /* @__PURE__ */ w("<style>");
const Co = (t) => {
  const [e, n] = U(null);
  let a = null;
  return de(() => {
    var r;
    if (t.isOpen) {
      a = document.createElement(t.tagName);
      const i = a.attachShadow({
        mode: "open"
      });
      document.body.appendChild(a), n(i), (r = t.onMountCallback) == null || r.call(t);
    }
  }), Tt(() => {
    var r;
    (r = t.onUnmountCallback) == null || r.call(t), a == null || a.remove(), a = null;
  }), _(M, {
    get when() {
      return e();
    },
    get children() {
      return _(ir, {
        get mount() {
          return e() ?? void 0;
        },
        get children() {
          return [(() => {
            var r = bo();
            return f(r, Xn), r;
          })(), S(() => t.children)];
        }
      });
    }
  });
};
var vo = /* @__PURE__ */ w('<div class="fixed inset-0 bg-black/50 z-[2147483646]">'), So = /* @__PURE__ */ w('<dialog role=dialog aria-modal=true aria-labelledby=scalapay-modal-title tabindex=-1><section class="flex flex-col mx-auto self-center w-full min-[450px]:max-w-sp-modal"><div class="flex flex-col p-2 pb-16 gap-6 bg-sp-primary-pink rounded-3xl rounded-b-xl overflow-y-auto"><header class="text-gray-900 gap-4 flex flex-col items-center pt-6 pb-3 relative mb-4"><h3 id=scalapay-modal-title class="font-semibold text-[19px] leading-8 text-center m-0 px-1"></h3></header></div><div class="flex flex-col p-4 pb-0 gap-6 max-h-[calc(70vh-2rem)] overflow-y-auto -translate-y-16"><p class="flex flex-col gap-4 m-0"></p><footer class="flex flex-col gap-9 text-sm font-medium text-gray-500 text-left"><p class="ml-5 text-[11px]">'), Eo = /* @__PURE__ */ w('<button class="absolute top-0 right-0 bg-transparent border-none flex justify-center items-center p-1 rounded-full hover:bg-sp-pink-1"tabindex=0>'), Ao = /* @__PURE__ */ w('<button class="bg-sp-primary-blue text-white max-w-fit border-none flex justify-center items-center cursor-pointer transition-colors duration-200 px-20 py-2.5 min-w-[100px] rounded-full self-center leading-[21px] text-sm font-semibold hover:bg-sp-blue-1"tabindex=0>');
const ko = (t) => {
  let e, n = null, a = null;
  const r = (c) => {
    var d;
    c.composedPath().includes(e) || (d = t.onClose) == null || d.call(t, c);
  }, i = (c) => {
    var u;
    if (c.key === "Escape" && !t.isStandalone) {
      (u = t.onClose) == null || u.call(t, c);
      return;
    }
  }, s = () => {
    var u;
    let c = document.activeElement;
    return (u = c == null ? void 0 : c.shadowRoot) != null && u.activeElement && (c = c.shadowRoot.activeElement), c;
  }, o = (c) => {
    e = c, t.isOpen && (n = s(), a == null || a.disconnect(), a = new MutationObserver(() => {
      e && (e.focus(), a == null || a.disconnect(), a = null);
    }), a.observe(e, {
      childList: !0,
      subtree: !0
    }));
  }, l = () => {
    a == null || a.disconnect(), a = null, n && (n.focus(), n = null);
  };
  return de(() => {
    document.addEventListener("mousedown", r), document.addEventListener("keydown", i);
  }), Tt(() => {
    document.removeEventListener("mousedown", r), document.removeEventListener("keydown", i), l();
  }), _(Co, {
    get isOpen() {
      return t.isOpen;
    },
    tagName: "scalapay-modal",
    get children() {
      return [vo(), (() => {
        var c = So(), u = c.firstChild, d = u.firstChild, m = d.firstChild, p = m.firstChild, h = d.nextSibling, C = h.firstChild, E = C.nextSibling, x = E.firstChild;
        return er((g) => o(g), c), f(m, _($e, {
          className: "h-10 w-auto bg-white px-4 py-2 rounded-3xl",
          type: "white-pill",
          width: 123,
          height: 25
        }), p), f(m, (() => {
          var g = S(() => !t.isStandalone);
          return () => g() && (() => {
            var b = Eo();
            return nn(b, "click", t.onClose), f(b, _(xo, {
              height: 24,
              width: 24
            })), V(() => A(b, "aria-label", k(t.locale || ct, "modal:close_button"))), b;
          })();
        })(), p), f(p, () => t.title), f(C, () => t.children), f(x, () => t.footer), f(E, (() => {
          var g = S(() => !t.isStandalone);
          return () => g() && (() => {
            var b = Ao();
            return nn(b, "click", t.onClose), f(b, () => k(t.locale || ct, "modal:close_button")), b;
          })();
        })(), null), V((g) => {
          var b = `fixed z-[2147483647] overflow-visible p-0 font-scalapay-poppins text-sm font-normal text-gray-700 text-center bg-sp-white-1 border-none rounded-3xl mx-auto my-auto max-h-[95vh] w-full min-[450px]:max-w-sp-modal top-[5vh] ${t.isOpen ? "transition-none" : "transition-opacity"} antialiased`, T = t.isOpen;
          return b !== g.e && B(c, g.e = b), T !== g.t && (c.open = g.t = T), g;
        }, {
          e: void 0,
          t: void 0
        }), c;
      })()];
    }
  });
};
Ve(["click"]);
const Po = `.sp_installment__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 8px 0 8px;
  background-color: white;
  border-bottom: 0.5px solid #eff1f5;
}

.sp_installment__service-fee {
  align-items: flex-start;
  border-radius: 5px;
  background-color: var(--sp-white-1);
  padding: 8px;
  font-size: 10px;
  line-height: 18px;
  font-weight: 500;

  strong {
    font-weight: 600;
  }
}

.sp_installment__timeline-container {
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
}

.sp_installment__timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  padding-bottom: 12px;
}

.sp_installment__timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 12px;
  height: 80%;
  width: 2px;
  background: #eff1f5;
  transform: translateX(-50%);
}

.sp_installment__timeline-item {
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
  gap: 16px;
}

.sp_installment__timeline-item:last-child {
  margin-bottom: 0;
}

.sp_installment__timeline-point {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background-color: #ebebff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 0 4px white;
}

.sp_installment__highlight {
  background-color: var(--sp-primary-blue);
  color: white;
}

.sp_installment__timeline-parent {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 100%;
  text-align: left;
}

.sp_installment__timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.sp_installment__installment-amount {
  font-weight: 600;
  font-size: 15px;
}

.sp_installment__due_date {
  font-size: 11px;
  color: var(--sp-light-gray-1);
  font-weight: 600;
}

.sp_installment__today {
  color: var(--sp-primary-blue);
}
`;
var Io = /* @__PURE__ */ w("<style>"), Ho = /* @__PURE__ */ w("<section class=sp_installment__container><section class=sp_installment__timeline-container><div class=sp_installment__timeline>"), To = /* @__PURE__ */ w("<div class=sp_installment__timeline-item><div></div><div class=sp_installment__timeline-parent><div class=sp_installment__timeline-content><div></div><div>");
const Lo = (t, e, n) => {
  const {
    frequency: a
  } = t;
  return e.map((r, i) => {
    const s = a ? Zr(a, i) : 0, o = i === 0 ? k(n, "installment_summary:pay_now") : `${k(n, "installment_summary:days-prefix")} ${s} ${k(n, "installment_summary:days")}`;
    return {
      step: i + 1,
      dueDate: o,
      installmentAmount: r
    };
  });
}, No = (t) => {
  const e = K({
    splitFee: 0
  }, t), n = S(() => Lo(t.product, t.installmentAmounts, t.locale)), a = (i) => Q(i.installmentAmount, t.locale, t.currencyDisplay, t.currencyPosition), r = () => e.splitFee > 0 ? Q(e.splitFee, e.locale, e.currencyDisplay, e.currencyPosition) : "";
  return [(() => {
    var i = Io();
    return f(i, Po), i;
  })(), (() => {
    var i = Ho(), s = i.firstChild, o = s.firstChild;
    return f(i, (() => {
      var l = S(() => e.splitFee > 0);
      return () => l() && _(O, {
        testId: "split-fee",
        className: "sp_installment__service-fee",
        get children() {
          return k(e.locale, "installment_summary:service_fee", {
            fee: r()
          });
        }
      });
    })(), s), f(o, _(Kt, {
      get each() {
        return n();
      },
      children: (l, c) => (() => {
        var u = To(), d = u.firstChild, m = d.nextSibling, p = m.firstChild, h = p.firstChild, C = h.nextSibling;
        return f(d, () => l.step), f(h, (() => {
          var E = S(() => !!l.installmentAmount);
          return () => E() && a(l);
        })(), null), f(h, () => e.splitFee > 0 && l.step === 1 ? "*" : "", null), f(C, () => l.dueDate), V((E) => {
          var x = `sp_installment__timeline-point ${c() === 0 ? "sp_installment__highlight" : ""}`, g = `sp_installment__installment-amount ${c() === 0 ? "sp_installment__today" : ""}`, b = `sp_installment__due_date ${c() === 0 ? "sp_installment__today" : ""}`;
          return x !== E.e && B(d, E.e = x), g !== E.t && B(h, E.t = g), b !== E.a && B(C, E.a = b), E;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        }), u;
      })()
    })), i;
  })()];
}, Ha = `.sp_info_card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
}

.sp_info_card__heading {
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  margin: 0;
  color: #000;
}

.sp_info_card__content {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style-type: disc;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  color: var(--sp-primary-gray);
}

.sp_info_card__content--li {
  /*
   * We want the bullets outside of the list,
   * so the text is aligned. Now the actual bullet
   * is outside of the list’s container
   */
  list-style-position: outside;

  /*
   * Because the bullet is outside of the list’s
   * container, indent the list entirely
   */
  margin-left: 1em;
  line-height: 18px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  strong {
    font-weight: 600;
  }
}

.sp_pay_in_x_info_card {
  padding: 8px;
}

.sp_pay_in_x_info_card__description {
  border-top: 1px solid #eff1f5;
  border-bottom: 1px solid #eff1f5;
  padding: 16px 0;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
}

.sp_pay_in_x_info_card__counter-container {
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
}

.sp_pay_in_x_info_card__counter {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding-bottom: 12px;
}

.sp_pay_in_x_info_card__counter-item {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 8px;
}

.sp_pay_in_x_info_card__counter-item:last-child {
  margin-bottom: 0;
}

.sp_pay_in_x_info_card__counter-point {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background-color: #ebebff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 0 4px white;
  font-weight: 600;
  color: #5666f0;
}

.sp_pay_in_x_info_card__counter-parent {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 100%;
  text-align: left;
  justify-content: center;
}

.sp_pay_in_x_info_card__counter-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
`;
var Mo = /* @__PURE__ */ w("<style>"), Oo = /* @__PURE__ */ w("<section class=sp_info_card><h3 class=sp_info_card__heading></h3><ul class=sp_info_card__content>"), Vo = /* @__PURE__ */ w("<li class=sp_info_card__content--li>");
const Fo = (t) => [(() => {
  var e = Mo();
  return f(e, Ha), e;
})(), (() => {
  var e = Oo(), n = e.firstChild, a = n.nextSibling;
  return f(n, () => t.title), f(a, _(Kt, {
    get each() {
      return t.contents;
    },
    children: (r) => (() => {
      var i = Vo();
      return f(i, r), i;
    })()
  })), e;
})()], Ro = `summary {
  list-style: none;
  cursor: default;
  position: relative;

  &::after {
    transform: rotate(45deg) translatey(-0.1em);
  }
}

details[open] > summary::after {
  transform: rotate(-135deg) translatey(-0.3em);
}

summary::-webkit-details-marker {
  display: none;
}

.sp_summary_card__container {
  max-width: 600px;
  padding: 12px;
  border-radius: 20px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
}

.sp_summary_card__heading {
  cursor: pointer;
}

.sp_summary_card__payment-label {
  font-weight: 600;
  font-size: 13px;
  color: #000;
  text-align: left;
}

.sp_summary_card__heading {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.sp_summary_card__payment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 8px 0 8px;
  align-items: center;
  flex-grow: 1;
}

.sp_summary_card__payment-amount {
  font-size: 20px;
  font-weight: 600;
}

.sp_summary_card__payment-frequency {
  font-size: 12px;
}

.sp_summary_card__chip {
  background-color: #ebebff;
  color: var(--sp-primary-blue);
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 13px;
  position: relative;
  z-index: 2;
  align-content: center;
  font-weight: 600;
}

.sp_summary_card__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 500;
}

.sp_summary_card__total,
.sp_summary_card__interests_disclaimer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  span:first-of-type {
    color: var(--sp-primary-gray);
  }

  strong {
    font-weight: 600;
  }
}

.sp_summary_card__content {
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-bottom: 0;
  margin-top: 8px;
}

.sp_summary_card__icon--container {
  background: transparent;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  pointer-events: auto;
}

.sp_summary_card__icon--container:hover {
  background-color: #f0f0f0;
  pointer-events: initial;
}

.sp_summary_card__open {
  transform: rotate(180deg);
}

.sp_summary_card__closed {
  max-height: 0;
  padding: 0;
}
`;
var Bo = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg data-testid=down-arrow role=img aria-label=next><path d="M5.3278 11.8397C4.78317 11.5709 4.55606 10.9101 4.81999 10.3631C5.08411 9.81624 5.73911 9.59061 6.28386 9.85919L12.4997 12.9246L18.7175 9.85919C19.2622 9.59087 19.9184 9.81608 20.1823 10.3631C20.4462 10.9102 20.2173 11.571 19.6725 11.8397L13.071 15.0945C12.9208 15.1857 12.7507 15.2396 12.5749 15.2508C12.5687 15.2513 12.5625 15.2524 12.5563 15.2527L12.444 15.2527C12.4368 15.2523 12.4297 15.2513 12.4225 15.2508C12.2491 15.2391 12.0807 15.187 11.9323 15.0975L5.3278 11.8397Z"fill=currentColor>');
const Ta = ({
  width: t = 44,
  height: e = 44,
  className: n
}) => {
  const a = `0 0 ${t} ${e}`;
  return (() => {
    var r = Bo();
    return A(r, "viewBox", a), A(r, "height", e), A(r, "width", t), A(r, "class", n), r;
  })();
};
var Uo = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg fill=none><g clip-path=url(#clip0_2118_90)><mask id=mask0_2118_90 style=mask-type:luminance maskUnits=userSpaceOnUse x=0 y=0 width=104 height=16><path d="M0.617432 0.321826H103.742V15.9688H0.617432V0.321826Z"fill=white></path></mask><g mask=url(#mask0_2118_90)><path d="M78.3349 12.3199L80.7948 9.54904H82.4262L79.9672 12.2835L82.7263 15.8347H81.0222L78.3349 12.3199ZM78.2885 15.8347H76.8707V6.95622H78.2885V15.8347ZM71.4399 10.2674C71.8136 9.85913 72.412 9.41616 73.4087 9.41616C74.8364 9.41616 75.5567 10.3037 75.5567 11.6232V15.8347H74.1407V11.9962C74.1407 10.964 73.7206 10.6275 73.0003 10.6275C72.352 10.6275 71.9081 10.9512 71.6935 11.3005C71.5135 11.5878 71.4771 11.9244 71.4771 12.3671V15.8347H70.0603V9.55987H71.3808L71.4399 10.2674ZM67.3776 13.5321V13.0392H65.9598C65.1568 13.0392 64.7858 13.363 64.7858 13.9504C64.7858 14.4544 65.0367 14.8743 65.8515 14.8743C66.6573 14.8743 67.1611 14.5034 67.3156 14.0232C67.3648 13.8668 67.3776 13.7359 67.3776 13.5321ZM63.67 11.2878C63.8728 10.1837 64.6166 9.41616 66.2599 9.41616C67.9641 9.41616 68.7435 10.0873 68.7435 11.6232V15.8347H67.544L67.4977 14.9699C67.1484 15.4273 66.5008 15.9675 65.506 15.9675C64.2447 15.9675 63.4053 15.2455 63.4053 13.9869C63.4053 12.7863 64.2674 12.0681 65.9598 12.0681H67.3776V11.5151C67.3776 10.7366 66.9692 10.4602 66.2245 10.4602C65.3723 10.4602 65.1204 10.8804 65.0731 11.2878H63.67ZM57.3514 11.8271V14.5752H59.4021C60.5425 14.5752 61.069 14.1904 61.069 13.1957C61.069 12.1999 60.5425 11.8271 59.4021 11.8271H57.3514ZM59.1129 8.21585H57.3514V10.5674H59.1511C60.2897 10.5674 60.6616 10.2074 60.6616 9.39164C60.6616 8.62412 60.3024 8.21585 59.1129 8.21585ZM55.8391 15.8347V6.95633H59.2584C61.3356 6.95633 62.174 7.89208 62.174 9.22395C62.174 10.1956 61.6584 10.9031 60.9736 11.1313C61.7893 11.2632 62.5941 11.9352 62.5941 13.1957C62.5941 14.8262 61.7175 15.8347 59.533 15.8347H55.8391ZM50.1076 12.1153C50.0972 11.0959 49.6661 10.4957 48.7049 10.4957C47.8415 10.4957 47.2539 10.9749 47.1931 12.1153H50.1076ZM47.1572 13.1347C47.2412 14.287 47.7337 14.8862 48.6945 14.8862C49.7485 14.8862 49.9999 14.3588 50.0594 13.9996H51.4299C51.2484 15.019 50.4328 15.9675 48.6945 15.9675C46.6774 15.9675 45.7649 14.5507 45.7649 12.7265C45.7649 10.8076 46.726 9.41616 48.6945 9.41616C50.8175 9.41616 51.4763 10.8913 51.4763 12.4637V13.1347H47.1572ZM40.754 15.8347H39.3385V6.95633H40.7412V10.3037C41.115 9.89634 41.6917 9.41616 42.6865 9.41616C44.1143 9.41616 44.8345 10.2556 44.8345 11.6232V15.8347H43.4177V12.008C43.4177 10.9749 42.9989 10.6275 42.2769 10.6275C41.6302 10.6275 41.1742 10.9512 40.9714 11.3005C40.7899 11.5878 40.754 11.8989 40.754 12.3435V15.8347ZM37.0738 11.6825C37.0147 11.2632 36.835 10.5076 35.7665 10.5076C34.843 10.5076 34.3383 11.2277 34.3383 12.7155C34.3383 13.9632 34.7352 14.8743 35.7665 14.8743C36.8222 14.8743 37.0147 14.1796 37.0506 13.6867H38.4424C38.2987 15.1018 37.4098 15.9675 35.7787 15.9675C33.5103 15.9675 32.9106 14.4433 32.9106 12.7155C32.9106 10.9868 33.523 9.41616 35.7665 9.41616C37.5553 9.41616 38.3346 10.3757 38.4533 11.6825H37.0738ZM30.8021 11.4197C30.7661 11.0241 30.4678 10.4475 29.5071 10.4475C28.8118 10.4475 28.4995 10.7594 28.4995 11.204C28.4995 11.6479 28.751 11.8516 29.3507 11.9715L30.6476 12.2353C31.691 12.45 32.2067 13.0993 32.2067 14.035C32.2067 15.019 31.5454 15.9675 29.6866 15.9675C27.8761 15.9548 27.154 15.1145 27.0949 13.9632H28.4405C28.4636 14.3232 28.6432 14.9236 29.6634 14.9344C30.5275 14.9344 30.8758 14.587 30.8758 14.095C30.8758 13.6867 30.6225 13.483 30.0709 13.363L28.7382 13.0628C27.8761 12.8711 27.1918 12.4026 27.1918 11.3005C27.1918 10.0637 28.1512 9.41616 29.5557 9.41616C31.1991 9.41616 32.027 10.2183 32.099 11.4197H30.8021ZM26.4143 15.8111C26.2474 15.8474 25.9223 15.8829 25.5145 15.8829C24.0631 15.8829 23.451 15.571 23.451 13.7949V10.6512H22.2638V9.58351H23.451V7.76018H24.8428V9.58351H26.3656V10.6512H24.8428V13.6994C24.8428 14.5752 25.0347 14.7907 25.8504 14.7907C26.1269 14.7907 26.3533 14.7426 26.4143 14.7307V15.8111ZM20.0348 14.9953C19.6861 15.451 19.0881 15.9675 18.0555 15.9675C16.5792 15.9675 15.823 15.1626 15.823 13.6158V9.54904H17.2397V13.303C17.2397 14.1796 17.4681 14.8507 18.427 14.8507C19.1959 14.8507 19.6502 14.2996 19.7938 13.9268C19.8911 13.6513 19.9016 13.3757 19.9016 13.0392V9.54904H21.3189V15.8347H20.0831L20.0348 14.9953ZM13.3803 12.1153C13.3676 11.0959 12.9365 10.4957 11.9757 10.4957C11.1119 10.4957 10.5243 10.9749 10.4635 12.1153H13.3803ZM10.4276 13.1347C10.5121 14.287 11.0041 14.8862 11.963 14.8862C13.0193 14.8862 13.2707 14.3588 13.3317 13.9996H14.7003C14.519 15.019 13.7036 15.9675 11.963 15.9675C9.94781 15.9675 9.03746 14.5507 9.03746 12.7265C9.03746 10.8076 9.99641 9.41616 11.963 9.41616C14.0879 9.41616 14.7472 10.8913 14.7472 12.4637V13.1347H10.4276ZM3.41378 8.22811H2.12974V14.5625H3.40152C5.70592 14.5625 6.4603 13.6386 6.4603 11.3231C6.4603 9.0197 5.57271 8.22811 3.41378 8.22811ZM3.83442 6.95633C6.5321 6.95633 8.10543 8.19122 8.10543 11.3477C8.10543 14.0123 6.91815 15.8347 3.80892 15.8347H0.617371V6.95633H3.83442Z"fill=#1E2A78></path><path d="M91.576 12.1119L97.6272 4.04529H100.398L94.3463 12.1119H91.576ZM88.2288 0.321786H103.742V15.8353H88.2288V0.321786ZM90.4447 13.6195H101.525V2.53763H90.4447V13.6195Z"fill=#1E2A78></path></g></g><defs><clipPath id=clip0_2118_90><rect width=103.125 height=15.647 fill=white transform="translate(0.617432 0.321823)">');
const Zo = (t) => {
  const e = t.width || 44, n = t.height || 44, a = `0 0 ${e} ${n}`;
  return (() => {
    var r = Uo();
    return A(r, "viewBox", a), A(r, "height", n), A(r, "width", e), V((i) => {
      var s = t == null ? void 0 : t.className, o = `${pt.DEUTSCHE_BANK}-logo`;
      return s !== i.e && A(r, "class", i.e = s), o !== i.t && A(r, "data-testid", i.t = o), i;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
};
var zo = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg fill=none><path d="M28.5576 2.02649C28.6554 2.02649 28.7445 2.07929 28.7891 2.16809L33.3799 10.9044C33.4777 11.0912 33.7625 11.0912 33.8604 10.9044L38.4502 2.16809C38.4947 2.07931 38.5838 2.02656 38.6904 2.02649H40.915C41.066 2.02671 41.1636 2.18615 41.0928 2.31946L33.8604 15.8605C33.7536 16.047 33.4867 16.0468 33.3887 15.8605L26.1553 2.31946C26.0845 2.18608 26.1829 2.02649 26.334 2.02649H28.5576ZM7.14355 2.0177C9.53668 2.0177 11.2363 3.49434 11.2363 5.67395C11.2363 6.94609 10.6395 7.98653 9.67871 8.46692C9.67871 8.46692 11.876 9.09933 11.876 11.8038C11.8758 14.5793 10.1411 15.9933 6.84961 15.9933H0.266602C0.115387 15.9933 0 15.8779 0 15.7267V2.2843C2.00484e-05 2.1331 0.1154 2.01773 0.266602 2.0177H7.14355ZM21.2627 2.0177C23.6558 2.0177 25.3555 3.49434 25.3555 5.67395C25.3554 6.94609 24.7586 7.98653 23.7979 8.46692C23.7979 8.46692 25.9952 9.09933 25.9863 11.8038C25.9862 14.5793 24.2515 15.9933 20.96 15.9933H14.377C14.2257 15.9932 14.1104 15.8779 14.1104 15.7267V2.2843C14.1104 2.13311 14.2258 2.01774 14.377 2.0177H21.2627ZM45.6475 0.139771C45.7544 -0.0465736 46.0213 -0.0467624 46.1191 0.139771L53.3516 13.6808C53.4224 13.8141 53.3248 13.9735 53.1738 13.9738H50.9492C50.8515 13.9737 50.7623 13.9209 50.7178 13.8322L46.1279 5.09583C46.0301 4.909 45.7453 4.909 45.6475 5.09583L41.0566 13.8322C41.0121 13.912 40.9141 13.9649 40.8164 13.9738H38.5928C38.4417 13.9738 38.3433 13.8142 38.4141 13.6808L45.6475 0.139771ZM2.58008 9.7218C2.42891 9.7218 2.31261 9.84615 2.3125 9.9884V13.6984C2.3125 13.8496 2.42884 13.965 2.58008 13.965H6.7168C8.70939 13.9649 9.56337 13.4136 9.57227 11.839C9.57224 10.2822 8.69158 9.72185 6.7168 9.7218H2.58008ZM16.6904 9.7218C16.5393 9.7218 16.423 9.84615 16.4229 9.9884V13.6984C16.4229 13.8496 16.5481 13.965 16.6904 13.965H20.8271C22.8198 13.9649 23.6826 13.4136 23.6826 11.839C23.6826 10.2822 22.8019 9.72185 20.8271 9.7218H16.6904ZM2.58008 4.04602C2.42887 4.04602 2.31255 4.16143 2.3125 4.31262V7.44446C2.31262 7.59559 2.4378 7.71106 2.58008 7.71106H6.66309C8.16657 7.71106 8.93164 7.07017 8.93164 5.87805C8.93146 4.68621 8.1664 4.04602 6.66309 4.04602H2.58008ZM16.6992 4.04602C16.548 4.04602 16.4317 4.16143 16.4316 4.31262V7.44446C16.4318 7.59559 16.5481 7.71106 16.6992 7.71106H20.7822C22.2857 7.71106 23.0508 7.07017 23.0508 5.87805C23.0506 4.68621 22.2855 4.04602 20.7822 4.04602H16.6992Z"fill=#001496>');
const Do = (t) => {
  const e = t.width || 54, n = t.height || 16, a = `0 0 ${e} ${n}`;
  return (() => {
    var r = zo();
    return A(r, "viewBox", a), A(r, "height", n), A(r, "width", e), V((i) => {
      var s = t == null ? void 0 : t.className, o = `${pt.BBVA}-logo`;
      return s !== i.e && A(r, "class", i.e = s), o !== i.t && A(r, "data-testid", i.t = o), i;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
};
var Sn = /* @__PURE__ */ w("<div data-testid=lender-icon>");
const Yo = ({
  lenderId: t,
  width: e = 110,
  height: n = 24,
  className: a
}) => t ? {
  [pt.DEUTSCHE_BANK]: (() => {
    var i = Sn();
    return f(i, _(Zo, {
      width: e,
      height: n,
      className: a
    })), i;
  })(),
  [pt.BBVA]: (() => {
    var i = Sn();
    return f(i, _(Do, {
      width: 100,
      height: n,
      className: a
    })), i;
  })()
}[t] : null;
var Wo = /* @__PURE__ */ w("<style>"), jo = /* @__PURE__ */ w('<section class="sp_info_card sp_pay_in_x_info_card"><div class=sp_pay_in_x_info_card__description></div><h3 data-testid=pay-in-x-title class=sp_info_card__heading></h3><section class=sp_pay_in_x_info_card__counter-container><div class=sp_pay_in_x_info_card__counter>'), Go = /* @__PURE__ */ w("<div class=sp_pay_in_x_info_card__counter-item><div class=sp_pay_in_x_info_card__counter-point></div><div class=sp_pay_in_x_info_card__counter-parent><div class=sp_pay_in_x_info_card__counter-content>");
const qo = (t) => [(() => {
  var e = Wo();
  return f(e, Ha), e;
})(), (() => {
  var e = jo(), n = e.firstChild, a = n.nextSibling, r = a.nextSibling, i = r.firstChild;
  return f(n, () => t.description), f(a, () => t.title), f(i, _(Kt, {
    get each() {
      return t.contents;
    },
    children: (s, o) => (() => {
      var l = Go(), c = l.firstChild, u = c.nextSibling, d = u.firstChild;
      return f(c, () => o() + 1), f(d, s), l;
    })()
  })), e;
})()];
var Ko = /* @__PURE__ */ w("<style>"), $o = /* @__PURE__ */ w("<span data-testid=payment-chip class=sp_summary_card__chip>"), Xo = /* @__PURE__ */ w("<div tabindex=0>"), Jo = /* @__PURE__ */ w("<div class=sp_summary_card__footer><div data-testid=payment-total class=sp_summary_card__total>"), Qo = /* @__PURE__ */ w("<div class=sp_summary_card__footer><div data-testid=payment-interests_disclaimer class=sp_summary_card__interests_disclaimer>"), En = /* @__PURE__ */ w("<div class=sp_summary_card__content>"), tl = /* @__PURE__ */ w("<details class=sp_summary_card__container data-testid=product-summary-card><summary><div class=sp_summary_card__heading><div class=sp_summary_card__payment-container><div data-testid=payment-label class=sp_summary_card__payment-label>");
const el = (t) => t.replace(/-/g, "_"), nl = (t, e, n) => t !== y.PAY_NOW_CHECKOUT ? `${n} / ${e}` : n, al = (t, e) => {
  const n = e && e.number !== 1 ? "plural" : "single";
  return `${k(t, `installment_summary:${e == null ? void 0 : e.frequencyType}_${n}`, {
    numberOfInstallments: e ? e.number : ""
  })}`;
}, rl = (t) => {
  const [e, n] = U(!1), a = K(t, {
    product: {
      ...t.product,
      configuration: {
        ...t.product.configuration,
        splitFee: t.product.configuration.splitFee ?? !1
      }
    }
  }), r = S(() => Ht(a.amount ?? 0, a.product.numberOfInstallments ?? 1, a.product.configuration.splitFee, t.locale)), i = S(() => Ur(r(), a.product.configuration.splitFee, a.locale, a.currencyDisplay, a.currencyPosition)), s = () => a.product.product === y.PAY_IN_X, o = (a.product.numberOfInstallments ?? 1) > 1 || (a.product.configuration.maxInstallments ?? 1) > 1, l = al(a.locale, a.product.frequency), c = a.product.configuration.lenderId, u = c ? Be[c] : void 0, d = () => {
    n(!e());
  }, m = () => {
    const p = [_(O, {
      testId: "pay_in_x_information_1",
      get children() {
        return k(t.locale, `how_to_card:pay_in_x:${u}:information_1`);
      }
    }), _(O, {
      testId: "pay_in_x_information_2",
      get children() {
        return k(t.locale, `how_to_card:pay_in_x:${u}:information_2`);
      }
    })];
    return u === pt.BBVA ? p : [...p, _(O, {
      testId: "pay_in_x_information_3",
      get children() {
        return k(t.locale, `how_to_card:pay_in_x:${u}:information_3`);
      }
    })];
  };
  return [(() => {
    var p = Ko();
    return f(p, Ro), p;
  })(), (() => {
    var p = tl(), h = p.firstChild, C = h.firstChild, E = C.firstChild, x = E.firstChild;
    return p.addEventListener("toggle", d), f(x, (() => {
      var g = S(() => !s());
      return () => g() ? k(a.locale, `product_widget:${el(a.product.product)}_label`) : Yr(a.locale, "product_widget:pay_in_x_label", a.product.configuration.maxInstallments);
    })()), f(E, _(M, {
      get when() {
        return !s() && a.amount;
      },
      get children() {
        var g = $o();
        return f(g, () => nl(a.product.product, l, i().baseInstallmentAmount)), g;
      }
    }), null), f(E, _(M, {
      get when() {
        return s();
      },
      get children() {
        return _(Yo, {
          lenderId: u
        });
      }
    }), null), f(C, _(M, {
      when: o,
      get children() {
        var g = Xo();
        return f(g, _(Ta, {
          className: "sp_summary_card__icon",
          height: 25,
          width: 25
        })), V(() => B(g, `sp_summary_card__icon--container ${e() ? "sp_summary_card__open" : ""}`)), g;
      }
    }), null), f(h, _(M, {
      get when() {
        return o && !s() && a.amount;
      },
      get children() {
        var g = Jo(), b = g.firstChild;
        return f(b, _(O, {
          get children() {
            return k(a.locale, "installment_summary:total", {
              total: i().total,
              asterisk: r().splitFee ? "*" : ""
            });
          }
        })), g;
      }
    }), null), f(h, _(M, {
      get when() {
        return s() && u !== pt.BBVA;
      },
      get children() {
        var g = Qo(), b = g.firstChild;
        return f(b, _(O, {
          get children() {
            return k(a.locale, qn([a.product]) ? "card_summary:interests_disclaimer_free" : "card_summary:interests_disclaimer");
          }
        })), g;
      }
    }), null), f(p, _(M, {
      get when() {
        return S(() => !!e())() && !s();
      },
      get children() {
        var g = En();
        return f(g, _(No, {
          get installmentAmounts() {
            return r().installmentAmounts;
          },
          get product() {
            return a.product;
          },
          get locale() {
            return a.locale;
          },
          get splitFee() {
            return r().splitFee;
          },
          get currencyDisplay() {
            return a.currencyDisplay;
          },
          get currencyPosition() {
            return a.currencyPosition;
          }
        }), null), f(g, _(Fo, {
          get title() {
            return k(t.locale, "modal:installments_card_title");
          },
          get contents() {
            return [_(O, {
              testId: "information_1",
              get children() {
                return k(t.locale, "how_to_card:information_1");
              }
            }), [_(O, {
              testId: "information_2",
              get children() {
                return k(t.locale, "how_to_card:information_2");
              }
            }), _(Pa, {
              get locale() {
                return t.locale;
              }
            })], _(O, {
              testId: "information_3",
              get children() {
                return k(t.locale, a.channel === Pe.TRAVEL ? "how_to_card:information_3:travel" : "how_to_card:information_3");
              }
            }), _(O, {
              testId: "information_4",
              get children() {
                return k(t.locale, a.channel === Pe.TRAVEL ? "how_to_card:information_4:travel" : "how_to_card:information_4");
              }
            })];
          }
        }), null), g;
      }
    }), null), f(p, _(M, {
      get when() {
        return S(() => !!e())() && s();
      },
      get children() {
        var g = En();
        return f(g, _(qo, {
          get description() {
            return _(O, {
              testId: "pay-in-x-description",
              get children() {
                return k(t.locale, "how_to_card:pay_in_x:description", {
                  maxInstallments: a.product.configuration.maxInstallments,
                  lenderName: De(u)
                });
              }
            });
          },
          get title() {
            return k(t.locale, "how_to_card:pay_in_x:title");
          },
          get contents() {
            return m();
          }
        })), g;
      }
    }), null), V(() => p.open = e()), p;
  })()];
};
var il = /* @__PURE__ */ w("<br>");
const Xe = (t) => {
  const e = (r) => {
    var i;
    r.preventDefault(), (i = t.onClose) == null || i.call(t, r);
  }, n = () => k(t.locale || ct, "learn_more_modal:title"), a = () => {
    const r = n(), i = r.indexOf(". ");
    let s = r;
    return i !== -1 && i < r.length - 1 && (s = [S(() => r.slice(0, i + 1)), il(), S(() => r.slice(i + 1).trim())]), s;
  };
  return ht(() => {
    t.open && t.isStandalone && (document.title = "Scalapay - " + n());
  }), _(ko, {
    get isOpen() {
      return t.open;
    },
    onClose: e,
    get title() {
      return a();
    },
    get isStandalone() {
      return t.isStandalone;
    },
    get footer() {
      return _(O, {
        get children() {
          return k(t.locale || ct, "modal:terms_and_conditions", {
            utmSource: window.location.hostname
          });
        }
      });
    },
    get locale() {
      return t.locale;
    },
    get children() {
      return _(Kt, {
        get each() {
          return t.products;
        },
        children: (r) => _(rl, {
          product: r,
          get amount() {
            return t.amount;
          },
          get locale() {
            return t.locale;
          },
          get currencyDisplay() {
            return t.currencyDisplay;
          },
          get currencyPosition() {
            return t.currencyPosition;
          },
          get channel() {
            return t.channel;
          }
        })
      });
    }
  });
};
var sl = /* @__PURE__ */ w("<p>"), ol = /* @__PURE__ */ w("<div>"), ll = /* @__PURE__ */ w('<article><div><div><div><button class="cursor-pointer bg-transparent border-0 self-baseline text-black h-[21px]"tabindex=0>'), cl = /* @__PURE__ */ w('<span class="inline-flex items-center"><span>&period;'), ul = /* @__PURE__ */ w("<span class=pr-1>");
const at = (...t) => t.join(","), dl = (t) => {
  const e = Mr(t), a = e.map((i) => i.product).filter((i) => i !== y.PAY_IN_X).join(","), r = {
    // Single products
    [y.PAY_IN_THREE]: ["product_widget:pay_in_3", 3],
    [y.PAY_IN_FOUR]: ["product_widget:pay_in_4", 4],
    [y.PAY_NOW_CHECKOUT]: ["product_widget:pay_now_checkout", 1],
    [y.PAY_LATER]: ["product_widget:pay_later", 1],
    [y.PAY_IN_X]: ["product_widget:pay_in_x_only", 12],
    // Two product combinations
    [at(y.PAY_IN_THREE, y.PAY_IN_FOUR)]: ["product_widget:pay_in_3_pay_in_4", 4],
    [at(y.PAY_IN_THREE, y.PAY_NOW_CHECKOUT)]: ["product_widget:pay_in_3_pay_now_checkout", 3],
    [at(y.PAY_IN_THREE, y.PAY_LATER)]: ["product_widget:pay_in_3_pay_later", 3],
    [at(y.PAY_IN_FOUR, y.PAY_NOW_CHECKOUT)]: ["product_widget:pay_in_4_pay_now_checkout", 4],
    [at(y.PAY_IN_FOUR, y.PAY_LATER)]: ["product_widget:pay_in_4_pay_later", 4],
    [at(y.PAY_NOW_CHECKOUT, y.PAY_LATER)]: ["product_widget:pay_now_checkout_pay_later", 1],
    // Three product combinations
    [at(y.PAY_IN_THREE, y.PAY_IN_FOUR, y.PAY_NOW_CHECKOUT)]: ["product_widget:pay_in_3_pay_in_4_pay_now_checkout", 4],
    [at(y.PAY_IN_THREE, y.PAY_IN_FOUR, y.PAY_LATER)]: ["product_widget:pay_in_3_pay_in_4_pay_later", 4],
    [at(y.PAY_IN_THREE, y.PAY_NOW_CHECKOUT, y.PAY_LATER)]: ["product_widget:pay_in_3_pay_now_checkout_pay_later", 3],
    [at(y.PAY_IN_FOUR, y.PAY_NOW_CHECKOUT, y.PAY_LATER)]: ["product_widget:pay_in_4_pay_now_checkout_pay_later", 4],
    // Four product combination
    [at(y.PAY_IN_THREE, y.PAY_IN_FOUR, y.PAY_NOW_CHECKOUT, y.PAY_LATER)]: ["product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later", 4]
  };
  return e.length === 1 && e.every((i) => i.product === y.PAY_IN_X) ? r[y.PAY_IN_X] : r[a];
}, ml = (t) => {
  const [e, n] = U(!1), [a, r] = U(null), i = t.darkMode === yt.SYSTEM && Ke() || t.darkMode === yt.ALWAYS;
  ht(() => {
    r(Ia({
      products: t.merchantConfig.products,
      amount: t.amount ?? 0,
      locale: t.locale
    }));
  });
  const s = () => Kn(t.merchantConfig.products, t.locale, it.PRODUCT, i), o = S(() => jn(t.merchantConfig.products)), l = S(() => t.merchantConfig.products.some((m) => m.product !== y.PAY_IN_X)), c = S(() => Gn(t.merchantConfig.products)), u = S(() => {
    let m = dl(t.merchantConfig.products);
    if (!m) {
      z.warn(`Combination of products: (${t.merchantConfig.products.map((C) => C.product)}) not supported`);
      return;
    }
    const p = t.hideInstallments && l() ? `${m[0]}_no_installments` : m[0], h = Ht(t.amount ?? 0, m[1], !!a(), t.locale);
    return o() ? s() : k(t.locale, p, {
      feeStar: a() ? "*" : "",
      installmentAmount: t.hideInstallments ? void 0 : Q(h.baseInstallmentAmount, t.locale, t.currencyDisplay, t.currencyPosition),
      textStyle: `font-semibold ${i ? "text-white" : "text-black"}`
    });
  }), d = t.hideInstallments ? "product_widget:pay_in_4_service_fee_single_no_amount" : "product_widget:pay_in_4_service_fee_single";
  return _(M, {
    get when() {
      return S(() => !!t.amount)() && u();
    },
    get children() {
      var m = ll(), p = m.firstChild, h = p.firstChild, C = h.firstChild, E = C.firstChild;
      return B(m, `flex flex-col py-4 font-medium leading-6 ${i ? "text-white" : "text-sp-primary-gray"}`), f(h, _(O, {
        testId: "product-widget-label",
        get children() {
          return u();
        }
      }), C), f(h, (() => {
        var x = S(() => !!l());
        return () => x() && (() => {
          var g = cl(), b = g.firstChild;
          return f(g, _($e, {
            type: "black",
            get scalePercent() {
              return t.logoSize;
            }
          }), b), g;
        })();
      })(), C), f(C, (() => {
        var x = S(() => !!(l() && !c()));
        return () => x() && (() => {
          var g = ul();
          return f(g, () => k(t.locale, "product_widget:no_interest")), g;
        })();
      })(), E), E.$$click = () => n(!0), f(E, (() => {
        var x = S(() => !!(t != null && t.hideLearnMore));
        return () => x() ? _(po, {
          fill: i ? "white" : "black"
        }) : _(O, {
          testId: "product-widget-btn",
          className: `hover:text-sp-primary-blue underline text-sm font-semibold ${i ? "text-white" : "text-black"} font-medium`,
          get children() {
            return k(t.locale, "product_widget:learn_more");
          }
        });
      })()), f(m, _(M, {
        get when() {
          return S(() => !!l())() && a();
        },
        get children() {
          var x = sl();
          return f(x, _(O, {
            testId: "product-widget-service-fee",
            get children() {
              return k(t.locale, d, {
                feeAmount: Q(a(), t.locale, t.currencyDisplay, t.currencyPosition)
              });
            }
          })), V(() => B(x, `flex-1 font-normal ${i ? "text-sp-white-2" : "text-sp-primary-gray"} text-xs mt-1 ${Pt("text")[t.alignment ?? et.LEFT]}`)), x;
        }
      }), null), f(m, _(M, {
        get when() {
          return S(() => !!l())() && s();
        },
        get children() {
          var x = ol();
          return f(x, _(O, {
            testId: "product-pay-in-x-label",
            get children() {
              return s();
            }
          })), V(() => B(x, `flex flex-col gap-1 ${i ? "text-white" : ""} ${Pt("items")[t.alignment ?? et.LEFT]}`)), x;
        }
      }), null), f(m, _(M, {
        get when() {
          return e();
        },
        get children() {
          return _(Xe, {
            get amount() {
              return t.amount ?? 0;
            },
            get currencyDisplay() {
              return t.currencyDisplay;
            },
            get currencyPosition() {
              return t.currencyPosition;
            },
            get products() {
              return t.merchantConfig.products;
            },
            get locale() {
              return t.locale;
            },
            onClose: () => n(!1),
            get open() {
              return e();
            },
            get channel() {
              return t.channel;
            }
          });
        }
      }), null), V((x) => {
        var g = `flex flex-col gap-1 ${Pt("items")[t.alignment ?? et.LEFT]}`, b = `flex flex-wrap items-center gap-1 ${Pt("justify")[t.alignment ?? et.LEFT]}`, T = `${Pt("justify")[t.alignment ?? et.LEFT]} w-full justify-start min-[361px]:w-auto inline-flex`;
        return g !== x.e && B(p, x.e = g), b !== x.t && B(h, x.t = b), T !== x.a && B(C, x.a = T), x;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      }), m;
    }
  });
};
Ve(["click"]);
var _l = /* @__PURE__ */ w('<article><div class="flex flex-col gap-1"><div><div class="inline-flex items-center"><span class="inline-flex items-center mr-[8px]"></span></div><div class="inline-flex ml-[8px]"><button tabindex=0>');
const An = "symbol", pl = (t) => {
  const [e, n] = U(!1), a = t.darkMode === yt.SYSTEM && Ke() || t.darkMode === yt.ALWAYS, r = S(() => {
    const i = Vs(t.merchantConfig.products, t.amount || 0, t.locale), s = Fs(i), o = Rs(s);
    if (z.debug("Evaluating label with amount, calculated installment amount and payment schedules", {
      amountInCents: t.amount,
      defaultPaymentSchedules: s,
      paymentSchedules: i,
      lowestInstallment: o
    }), Gn(t.merchantConfig.products))
      return k(t.locale, "product_widget_exp5_10:pay_now");
    if (t.amount)
      return k(t.locale, "product_widget_exp5_10:from_x_in_n_installments", {
        installments: s.paymentSchedule.length,
        installmentAmount: Q(o.amountInCents, t.locale, An, t.currencyPosition),
        textStyle: `font-semibold ${a ? "text-white" : "text-sp-exp5-dark-gray"}`
      });
    z.debug("No amount provided, showing default label without amount and installments", t.merchantConfig.products);
    let l = "product_widget_exp5_10:pay_in_n_installments";
    return zr(t.merchantConfig.products) && (l = "product_widget_exp5_10:pay_up_to_n_installments"), k(t.locale, l, {
      installments: s.paymentSchedule.length,
      textStyle: `font-semibold ${a ? "text-white" : "text-sp-exp5-dark-gray"}`
    });
  });
  return _(M, {
    get when() {
      return r();
    },
    get children() {
      var i = _l(), s = i.firstChild, o = s.firstChild, l = o.firstChild, c = l.firstChild, u = l.nextSibling, d = u.firstChild;
      return B(i, `flex flex-col border rounded-[8px] py-[4px] pl-[4px] pr-[8px] font-medium leading-6 text-base border-sp-exp5-gray ${a ? "text-white" : "text-sp-exp5-dark-gray"}`), f(c, _($e, {
        type: "custom",
        width: 110,
        height: 24,
        className: "rounded-[4px] p-[4px] bg-sp-exp5-black text-sp-exp5-pink"
      })), f(l, _(O, {
        testId: "product-widget-label",
        get children() {
          return r();
        }
      }), null), d.$$click = () => n(!0), f(d, _(Ta, {
        width: 24,
        height: 24
      })), f(i, _(M, {
        get when() {
          return e();
        },
        get children() {
          return _(Xe, {
            get amount() {
              return t.amount;
            },
            currencyDisplay: An,
            get currencyPosition() {
              return t.currencyPosition;
            },
            get products() {
              return t.merchantConfig.products;
            },
            get locale() {
              return t.locale;
            },
            onClose: () => n(!1),
            get open() {
              return e();
            },
            get channel() {
              return t.channel;
            }
          });
        }
      }), null), V((m) => {
        var p = `flex flex-wrap items-center ${t.alignment === et.RIGHT ? "justify-end" : t.alignment === et.CENTER ? "justify-center" : "justify-between"}`, h = `cursor-pointer bg-transparent border-0 ${a ? "text-white" : "text-sp-exp5-black"} ${e() ? "rotate-180" : "rotate-0"}`;
        return p !== m.e && B(o, m.e = p), h !== m.t && B(d, m.t = h), m;
      }, {
        e: void 0,
        t: void 0
      }), i;
    }
  });
};
Ve(["click"]);
var hl = /* @__PURE__ */ w("<style>"), fl = /* @__PURE__ */ w('<div class="cursor-default leading-4 text-sm font-medium font-scalapay-poppins max-w-full antialiased">');
const gl = (t) => {
  const e = Yn(t.locale), n = K({
    type: it.PRODUCT,
    locale: J.IT,
    currencyPosition: e,
    currencyDisplay: "symbol",
    logoSize: 100,
    alignment: "left",
    hideInstallments: !1,
    darkMode: "never",
    hideLearnMore: !1
  }, t), a = S(() => ka(n.merchantConfig.products, n.amount)), r = S(() => ({
    ...n.merchantConfig,
    products: a()
  }));
  return ht(() => {
    var i;
    (i = a()) != null && i.length || z.warn("No available products could be shown.");
  }), [(() => {
    var i = hl();
    return f(i, Xn), i;
  })(), _(ws, {
    get locale() {
      return n.locale;
    },
    messages: {},
    defaultLocale: "it",
    get children() {
      var i = fl();
      return f(i, _(Qa, {
        fallback: (s) => (z.log("Widget error:", s), []),
        get children() {
          return _(M, {
            get when() {
              return a().length > 0;
            },
            get children() {
              return _(tn, {
                get children() {
                  return [_(ye, {
                    get when() {
                      return n.type === it.PRODUCT;
                    },
                    get children() {
                      return _(tn, {
                        get fallback() {
                          return _(ml, K(n, {
                            get merchantConfig() {
                              return r();
                            }
                          }));
                        },
                        get children() {
                          return _(ye, {
                            get when() {
                              return n.merchantConfig.widget.variant === Wn.EXP_5_10;
                            },
                            get children() {
                              return _(pl, K(n, {
                                get merchantConfig() {
                                  return r();
                                }
                              }));
                            }
                          });
                        }
                      });
                    }
                  }), _(ye, {
                    get when() {
                      return n.type === it.CHECKOUT;
                    },
                    get children() {
                      return _(mo, K(n, {
                        get merchantConfig() {
                          return r();
                        }
                      }));
                    }
                  })];
                }
              });
            }
          });
        }
      })), i;
    }
  })];
}, kn = (t, e) => (t ?? []).map((n) => {
  const a = document.querySelector(n);
  if (!a)
    return z.debug(`Element not found for amountSelector: ${n}`), null;
  const r = It(a.textContent, e);
  return Number.isNaN(Number(r)) ? (z.debug(`Invalid amount from amountSelector: ${n}`), null) : r;
}).find((n) => n) ?? null, Pn = (t, e, n) => {
  let a = kn(t, e);
  n(a);
  const r = new MutationObserver(() => {
    let i = kn(t, e);
    n(i);
  });
  t.map((i) => document.querySelector(i)).filter((i) => i).forEach((i) => {
    r.observe(i, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      characterData: !0
    });
  });
}, yl = (t) => {
  const e = {
    locale: Ze(t.locale)
  }, n = K({
    type: it.PRODUCT,
    locale: J.IT,
    amountSelectors: [],
    amount: ""
  }, t, e), [a, r] = U(null), [i, s] = U(null);
  de(() => {
    Pn(n.amountSelectors, n.amountSeparator, r), new MutationObserver(() => Pn(n.amountSelectors, n.amountSeparator, r)).observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    });
  }), ht(() => {
    let l = a();
    l || (l = It(n.amount, n.amountSeparator)), s(l);
  });
  const o = S(() => {
    var d, m, p, h;
    const l = i();
    if (!l)
      return !0;
    const c = It(((d = n.minAmount) == null ? void 0 : d.toString()) || ((m = n.min) == null ? void 0 : m.toString()), n.amountSeparator), u = It(((p = n.maxAmount) == null ? void 0 : p.toString()) || ((h = n.max) == null ? void 0 : h.toString()), n.amountSeparator);
    return c && l < c ? (z.warn(`Amount is less than minAmount: ${l} < ${c}`), !1) : u && l > u ? (z.warn(`Amount is greater than maxAmount: ${l} > ${u}`), !1) : !0;
  });
  return _(M, {
    get when() {
      return o();
    },
    get children() {
      return _(gl, K(n, {
        get type() {
          var l;
          return it[(l = n.type) == null ? void 0 : l.toUpperCase()] || it.PRODUCT;
        },
        get amount() {
          return i();
        }
      }));
    }
  });
}, wl = (t) => {
  const e = S(() => Yn(t.locale)), n = S(() => It(t.amount, ".") ?? 0), a = S(() => {
    const s = n();
    return typeof s == "number" && !Number.isNaN(s) && s > 0 ? !0 : (z.error("To show the widgetModal, the amount is required"), !1);
  }), r = S(() => {
    const s = n();
    return a() ? ka(t.merchantConfig.products, s) : [];
  }), i = "symbol";
  return _(M, {
    get when() {
      return a();
    },
    fallback: null,
    get children() {
      return _(Xe, {
        get amount() {
          return n();
        },
        currencyDisplay: i,
        get currencyPosition() {
          return e();
        },
        get products() {
          return r();
        },
        get locale() {
          return t.locale;
        },
        open: !0,
        get channel() {
          return t.channel;
        },
        isStandalone: !0
      });
    }
  });
};
function _e(t, e) {
  if (t == null) return;
  const n = t.replace(e, "");
  return n.length ? n : void 0;
}
function Se(t) {
  const e = new URLSearchParams(window.location.search);
  return _e(e.get(t), /[^a-zA-Z]/g);
}
function xl(t) {
  const e = new URLSearchParams(window.location.search);
  return _e(e.get(t), /[^0-9.]/g);
}
function bl(t) {
  const e = new URLSearchParams(window.location.search);
  return _e(e.get(t), /[^a-zA-Z0-9]/g);
}
function Cl(t) {
  const e = new URLSearchParams(window.location.search);
  return _e(e.get(t), /[^a-zA-Z]/g) === "true";
}
function La(t, e) {
  const n = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap", a = `https://cdn${Dn(e)}.scalapay.com/widget/v5/fonts/font.css`, r = document.createElement("link");
  r.rel = "stylesheet", r.id = "scalapay-poppins", r.href = zn(e) && t ? a : n, document.head.appendChild(r);
}
Fe("scalapay-widget", {
  type: "product",
  locale: ct,
  amount: "",
  amountSeparator: void 0,
  amountSelectors: [],
  logoSize: 100,
  merchantToken: void 0,
  currencyPosition: void 0,
  currencyDisplay: void 0,
  minAmount: void 0,
  maxAmount: void 0,
  environment: void 0,
  channel: void 0,
  checkoutTitleSelector: void 0,
  disableCheckoutTitleUpdate: !1,
  alignment: void 0,
  hideInstallments: void 0,
  darkMode: void 0,
  hideLearnMore: void 0,
  loadSelfHostedFont: void 0
}, (t) => (La(t.loadSelfHostedFont, t.environment), _(Ue, {
  get merchantToken() {
    return t.merchantToken ?? "";
  },
  get environment() {
    return t.environment;
  },
  children: (e) => _(yl, K(t, {
    merchantConfig: e
  }))
})));
Fe("scalapay-update-checkout-title", {
  locale: ct,
  merchantToken: void 0,
  environment: void 0,
  checkoutTitleSelector: void 0,
  installmentAmount: "",
  amount: void 0
}, (t) => _(Ue, {
  get merchantToken() {
    return t.merchantToken;
  },
  get environment() {
    return t.environment;
  },
  children: (e) => _($n, K(t, {
    merchantConfig: e
  }))
}));
Fe("scalapay-widget-modal", {
  locale: void 0,
  merchantToken: void 0,
  environment: void 0,
  amount: void 0,
  channel: void 0,
  loadSelfHostedFont: void 0
}, (t) => {
  const e = {
    merchantToken: bl("merchant-token"),
    environment: Se("environment"),
    amount: xl("amount"),
    channel: Se("channel"),
    locale: Ze(Se("locale")),
    loadSelfHostedFont: Cl("load-self-hosted-font")
  }, n = K(e, t);
  return z.debug("scalapay-widget-modal", {
    queryProps: e,
    props: t,
    merged: n
  }), La(n.loadSelfHostedFont, n.environment), _(Ue, {
    get merchantToken() {
      return n.merchantToken;
    },
    get environment() {
      return n.environment;
    },
    children: (a) => _(wl, K(n, {
      merchantConfig: a
    }))
  });
});
