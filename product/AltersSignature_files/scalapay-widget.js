const Qn = (e, t) => e === t, N = Symbol("solid-proxy"), $n = typeof Proxy == "function", Te = Symbol("solid-track"), Ge = {
  equals: Qn
};
let ke = null, tn = ln;
const ie = 1, qe = 2, nn = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, at = {};
var k = null;
let it = null, er = null, T = null, B = null, $ = null, et = 0;
function Pe(e, t) {
  const n = T, r = k, a = e.length === 0, i = t === void 0 ? r : t, o = a ? nn : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, s = a ? e : () => e(() => j(() => Ie(o)));
  k = o, T = null;
  try {
    return se(s, !0);
  } finally {
    T = n, k = r;
  }
}
function F(e, t) {
  t = t ? Object.assign({}, Ge, t) : Ge;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, r = (a) => (typeof a == "function" && (a = a(n.value)), sn(n, a));
  return [on.bind(n), r];
}
function rn(e, t, n) {
  const r = Fe(e, t, !0, ie);
  Ee(r);
}
function D(e, t, n) {
  const r = Fe(e, t, !1, ie);
  Ee(r);
}
function xe(e, t, n) {
  tn = ur;
  const r = Fe(e, t, !1, ie);
  (!n || !n.render) && (r.user = !0), $ ? $.push(r) : Ee(r);
}
function P(e, t, n) {
  n = n ? Object.assign({}, Ge, n) : Ge;
  const r = Fe(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, Ee(r), on.bind(r);
}
function tr(e) {
  return e && typeof e == "object" && "then" in e;
}
function nr(e, t, n) {
  let r, a, i;
  typeof t == "function" ? (r = e, a = t, i = {}) : (r = !0, a = e, i = t || {});
  let o = null, s = at, l = !1, u = "initialValue" in i, c = typeof r == "function" && P(r);
  const d = /* @__PURE__ */ new Set(), [h, y] = (i.storage || F)(i.initialValue), [w, p] = F(void 0), [C, v] = F(void 0, {
    equals: !1
  }), [A, x] = F(u ? "ready" : "unresolved");
  function O(W, M, V, ge) {
    return o === W && (o = null, ge !== void 0 && (u = !0), (W === s || M === s) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(ge, {
        value: M
      })
    ), s = at, R(M, V)), M;
  }
  function R(W, M) {
    se(() => {
      M === void 0 && y(() => W), x(M !== void 0 ? "errored" : u ? "ready" : "unresolved"), p(M);
      for (const V of d.keys()) V.decrement();
      d.clear();
    }, !1);
  }
  function te() {
    const W = sr, M = h(), V = w();
    if (V !== void 0 && !o) throw V;
    return T && T.user, M;
  }
  function pe(W = !0) {
    if (W !== !1 && l) return;
    l = !1;
    const M = c ? c() : r;
    if (M == null || M === !1) {
      O(o, j(h));
      return;
    }
    const V = s !== at ? s : j(
      () => a(M, {
        value: h(),
        refetching: W
      })
    );
    return tr(V) ? (o = V, "value" in V ? (V.status === "success" ? O(o, V.value, void 0, M) : O(o, void 0, ht(V.value), M), V) : (l = !0, queueMicrotask(() => l = !1), se(() => {
      x(u ? "refreshing" : "pending"), v();
    }, !1), V.then(
      (ge) => O(V, ge, void 0, M),
      (ge) => O(V, void 0, ht(ge), M)
    ))) : (O(o, V, void 0, M), V);
  }
  return Object.defineProperties(te, {
    state: {
      get: () => A()
    },
    error: {
      get: () => w()
    },
    loading: {
      get() {
        const W = A();
        return W === "pending" || W === "refreshing";
      }
    },
    latest: {
      get() {
        if (!u) return te();
        const W = w();
        if (W && !o) throw W;
        return h();
      }
    }
  }), c ? rn(() => pe(!1)) : pe(!1), [
    te,
    {
      refetch: pe,
      mutate: y
    }
  ];
}
function He(e) {
  return se(e, !1);
}
function j(e) {
  if (T === null) return e();
  const t = T;
  T = null;
  try {
    return e();
  } finally {
    T = t;
  }
}
function tt(e) {
  xe(() => j(e));
}
function be(e) {
  return k === null || (k.cleanups === null ? k.cleanups = [e] : k.cleanups.push(e)), e;
}
function rr(e, t) {
  ke || (ke = Symbol("error")), k = Fe(void 0, void 0, !0), k.context = {
    ...k.context,
    [ke]: [t]
  };
  try {
    return e();
  } catch (n) {
    Ne(n);
  } finally {
    k = k.owner;
  }
}
function Le() {
  return T;
}
function ar() {
  return k;
}
function ir(e, t) {
  const n = k, r = T;
  k = e, T = null;
  try {
    return se(t, !0);
  } catch (a) {
    Ne(a);
  } finally {
    k = n, T = r;
  }
}
const [Yo, zo] = /* @__PURE__ */ F(!1);
function or(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: dr(n),
    defaultValue: e
  };
}
function an(e) {
  const t = P(e), n = P(() => mt(t()));
  return n.toArray = () => {
    const r = n();
    return Array.isArray(r) ? r : r != null ? [r] : [];
  }, n;
}
let sr;
function on() {
  if (this.sources && this.state)
    if (this.state === ie) Ee(this);
    else {
      const e = B;
      B = null, se(() => Xe(this), !1), B = e;
    }
  if (T) {
    const e = this.observers ? this.observers.length : 0;
    T.sources ? (T.sources.push(this), T.sourceSlots.push(e)) : (T.sources = [this], T.sourceSlots = [e]), this.observers ? (this.observers.push(T), this.observerSlots.push(T.sources.length - 1)) : (this.observers = [T], this.observerSlots = [T.sources.length - 1]);
  }
  return this.value;
}
function sn(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && se(() => {
    for (let a = 0; a < e.observers.length; a += 1) {
      const i = e.observers[a], o = it && it.running;
      o && it.disposed.has(i), (o ? !i.tState : !i.state) && (i.pure ? B.push(i) : $.push(i), i.observers && cn(i)), o || (i.state = ie);
    }
    if (B.length > 1e6)
      throw B = [], new Error();
  }, !1)), t;
}
function Ee(e) {
  if (!e.fn) return;
  Ie(e);
  const t = et;
  lr(
    e,
    e.value,
    t
  );
}
function lr(e, t, n) {
  let r;
  const a = k, i = T;
  T = k = e;
  try {
    r = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = ie, e.owned && e.owned.forEach(Ie), e.owned = null), e.updatedAt = n + 1, Ne(o);
  } finally {
    T = i, k = a;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? sn(e, r) : e.value = r, e.updatedAt = n);
}
function Fe(e, t, n, r = ie, a) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: k,
    context: k ? k.context : null,
    pure: n
  };
  return k === null || k !== nn && (k.owned ? k.owned.push(i) : k.owned = [i]), i;
}
function Ke(e) {
  if (e.state === 0) return;
  if (e.state === qe) return Xe(e);
  if (e.suspense && j(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < et); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === ie)
      Ee(e);
    else if (e.state === qe) {
      const r = B;
      B = null, se(() => Xe(e, t[0]), !1), B = r;
    }
}
function se(e, t) {
  if (B) return e();
  let n = !1;
  t || (B = []), $ ? n = !0 : $ = [], et++;
  try {
    const r = e();
    return cr(n), r;
  } catch (r) {
    n || ($ = null), B = null, Ne(r);
  }
}
function cr(e) {
  if (B && (ln(B), B = null), e) return;
  const t = $;
  $ = null, t.length && se(() => tn(t), !1);
}
function ln(e) {
  for (let t = 0; t < e.length; t++) Ke(e[t]);
}
function ur(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : Ke(r);
  }
  for (t = 0; t < n; t++) Ke(e[t]);
}
function Xe(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const a = r.state;
      a === ie ? r !== t && (!r.updatedAt || r.updatedAt < et) && Ke(r) : a === qe && Xe(r, t);
    }
  }
}
function cn(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = qe, n.pure ? B.push(n) : $.push(n), n.observers && cn(n));
  }
}
function Ie(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), r = e.sourceSlots.pop(), a = n.observers;
      if (a && a.length) {
        const i = a.pop(), o = n.observerSlots.pop();
        r < a.length && (i.sourceSlots[o] = r, a[r] = i, n.observerSlots[r] = o);
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) Ie(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) Ie(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function ht(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Tt(e, t, n) {
  try {
    for (const r of t) r(e);
  } catch (r) {
    Ne(r, n && n.owner || null);
  }
}
function Ne(e, t = k) {
  const n = ke && t && t.context && t.context[ke], r = ht(e);
  if (!n) throw r;
  $ ? $.push({
    fn() {
      Tt(r, n, t);
    },
    state: ie
  }) : Tt(r, n, t);
}
function mt(e) {
  if (typeof e == "function" && !e.length) return mt(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = mt(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
    }
    return t;
  }
  return e;
}
function dr(e, t) {
  return function(r) {
    let a;
    return D(
      () => a = j(() => (k.context = {
        ...k.context,
        [e]: r.value
      }, an(() => r.children))),
      void 0
    ), a;
  };
}
const hr = Symbol("fallback");
function Lt(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function mr(e, t, n = {}) {
  let r = [], a = [], i = [], o = 0, s = t.length > 1 ? [] : null;
  return be(() => Lt(i)), () => {
    let l = e() || [], u = l.length, c, d;
    return l[Te], j(() => {
      let y, w, p, C, v, A, x, O, R;
      if (u === 0)
        o !== 0 && (Lt(i), i = [], r = [], a = [], o = 0, s && (s = [])), n.fallback && (r = [hr], a[0] = Pe((te) => (i[0] = te, n.fallback())), o = 1);
      else if (o === 0) {
        for (a = new Array(u), d = 0; d < u; d++)
          r[d] = l[d], a[d] = Pe(h);
        o = u;
      } else {
        for (p = new Array(u), C = new Array(u), s && (v = new Array(u)), A = 0, x = Math.min(o, u); A < x && r[A] === l[A]; A++) ;
        for (x = o - 1, O = u - 1; x >= A && O >= A && r[x] === l[O]; x--, O--)
          p[O] = a[x], C[O] = i[x], s && (v[O] = s[x]);
        for (y = /* @__PURE__ */ new Map(), w = new Array(O + 1), d = O; d >= A; d--)
          R = l[d], c = y.get(R), w[d] = c === void 0 ? -1 : c, y.set(R, d);
        for (c = A; c <= x; c++)
          R = r[c], d = y.get(R), d !== void 0 && d !== -1 ? (p[d] = a[c], C[d] = i[c], s && (v[d] = s[c]), d = w[d], y.set(R, d)) : i[c]();
        for (d = A; d < u; d++)
          d in p ? (a[d] = p[d], i[d] = C[d], s && (s[d] = v[d], s[d](d))) : a[d] = Pe(h);
        a = a.slice(0, o = u), r = l.slice(0);
      }
      return a;
    });
    function h(y) {
      if (i[d] = y, s) {
        const [w, p] = F(d);
        return s[d] = p, t(l[d], w);
      }
      return t(l[d]);
    }
  };
}
function m(e, t) {
  return j(() => e(t || {}));
}
function Be() {
  return !0;
}
const fr = {
  get(e, t, n) {
    return t === N ? n : e.get(t);
  },
  has(e, t) {
    return t === N ? !0 : e.has(t);
  },
  set: Be,
  deleteProperty: Be,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Be,
      deleteProperty: Be
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function ot(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function pr() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0) return n;
  }
}
function J(...e) {
  let t = !1;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    t = t || !!s && N in s, e[o] = typeof s == "function" ? (t = !0, P(s)) : s;
  }
  if ($n && t)
    return new Proxy(
      {
        get(o) {
          for (let s = e.length - 1; s >= 0; s--) {
            const l = ot(e[s])[o];
            if (l !== void 0) return l;
          }
        },
        has(o) {
          for (let s = e.length - 1; s >= 0; s--)
            if (o in ot(e[s])) return !0;
          return !1;
        },
        keys() {
          const o = [];
          for (let s = 0; s < e.length; s++)
            o.push(...Object.keys(ot(e[s])));
          return [...new Set(o)];
        }
      },
      fr
    );
  const n = {}, r = /* @__PURE__ */ Object.create(null);
  for (let o = e.length - 1; o >= 0; o--) {
    const s = e[o];
    if (!s) continue;
    const l = Object.getOwnPropertyNames(s);
    for (let u = l.length - 1; u >= 0; u--) {
      const c = l[u];
      if (c === "__proto__" || c === "constructor") continue;
      const d = Object.getOwnPropertyDescriptor(s, c);
      if (!r[c])
        r[c] = d.get ? {
          enumerable: !0,
          configurable: !0,
          get: pr.bind(n[c] = [d.get.bind(s)])
        } : d.value !== void 0 ? d : void 0;
      else {
        const h = n[c];
        h && (d.get ? h.push(d.get.bind(s)) : d.value !== void 0 && h.push(() => d.value));
      }
    }
  }
  const a = {}, i = Object.keys(r);
  for (let o = i.length - 1; o >= 0; o--) {
    const s = i[o], l = r[s];
    l && l.get ? Object.defineProperty(a, s, l) : a[s] = l ? l.value : void 0;
  }
  return a;
}
const un = (e) => `Stale read from <${e}>.`;
function nt(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return P(mr(() => e.each, e.children, t || void 0));
}
function q(e) {
  const t = e.keyed, n = P(() => e.when, void 0, void 0), r = t ? n : P(n, void 0, {
    equals: (a, i) => !a == !i
  });
  return P(
    () => {
      const a = r();
      if (a) {
        const i = e.children;
        return typeof i == "function" && i.length > 0 ? j(
          () => i(
            t ? a : () => {
              if (!j(r)) throw un("Show");
              return n();
            }
          )
        ) : i;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
function dn(e) {
  const t = an(() => e.children), n = P(() => {
    const r = t(), a = Array.isArray(r) ? r : [r];
    let i = () => {
    };
    for (let o = 0; o < a.length; o++) {
      const s = o, l = a[o], u = i, c = P(
        () => u() ? void 0 : l.when,
        void 0,
        void 0
      ), d = l.keyed ? c : P(c, void 0, {
        equals: (h, y) => !h == !y
      });
      i = () => u() || (d() ? [s, c, l] : void 0);
    }
    return i;
  });
  return P(
    () => {
      const r = n()();
      if (!r) return e.fallback;
      const [a, i, o] = r, s = o.children;
      return typeof s == "function" && s.length > 0 ? j(
        () => s(
          o.keyed ? i() : () => {
            var u;
            if (((u = j(n)()) == null ? void 0 : u[0]) !== a) throw un("Match");
            return i();
          }
        )
      ) : s;
    },
    void 0,
    void 0
  );
}
function ft(e) {
  return e;
}
let We;
function gr(e) {
  let t;
  const [n, r] = F(t, void 0);
  return We || (We = /* @__PURE__ */ new Set()), We.add(r), be(() => We.delete(r)), P(
    () => {
      let a;
      if (a = n()) {
        const i = e.fallback;
        return typeof i == "function" && i.length ? j(() => i(a, () => r())) : i;
      }
      return rr(() => e.children, r);
    },
    void 0,
    void 0
  );
}
function _r(e, t, n) {
  let r = n.length, a = t.length, i = r, o = 0, s = 0, l = t[a - 1].nextSibling, u = null;
  for (; o < a || s < i; ) {
    if (t[o] === n[s]) {
      o++, s++;
      continue;
    }
    for (; t[a - 1] === n[i - 1]; )
      a--, i--;
    if (a === o) {
      const c = i < r ? s ? n[s - 1].nextSibling : n[i - s] : l;
      for (; s < i; ) e.insertBefore(n[s++], c);
    } else if (i === s)
      for (; o < a; )
        (!u || !u.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[i - 1] && n[s] === t[a - 1]) {
      const c = t[--a].nextSibling;
      e.insertBefore(n[s++], t[o++].nextSibling), e.insertBefore(n[--i], c), t[a] = n[i];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let d = s;
        for (; d < i; ) u.set(n[d], d++);
      }
      const c = u.get(t[o]);
      if (c != null)
        if (s < c && c < i) {
          let d = o, h = 1, y;
          for (; ++d < a && d < i && !((y = u.get(t[d])) == null || y !== c + h); )
            h++;
          if (h > c - s) {
            const w = t[o];
            for (; s < c; ) e.insertBefore(n[s++], w);
          } else e.replaceChild(n[s++], t[o++]);
        } else o++;
      else t[o++].remove();
    }
  }
}
const It = "_$DX_DELEGATE";
function b(e, t, n, r) {
  let a;
  const i = () => {
    const s = r ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    return s.innerHTML = e, n ? s.content.firstChild.firstChild : r ? s.firstChild : s.content.firstChild;
  }, o = t ? () => j(() => document.importNode(a || (a = i()), !0)) : () => (a || (a = i())).cloneNode(!0);
  return o.cloneNode = o, o;
}
function hn(e, t = window.document) {
  const n = t[It] || (t[It] = /* @__PURE__ */ new Set());
  for (let r = 0, a = e.length; r < a; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, br));
  }
}
function L(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function K(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function Ot(e, t, n, r) {
  Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
}
function yr(e, t, n) {
  return j(() => e(t, n));
}
function _(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return Je(e, t, r, n);
  D((a) => Je(e, t(), a, n), r);
}
function br(e) {
  let t = e.target;
  const n = `$$${e.type}`, r = e.target, a = e.currentTarget, i = (l) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: l
  }), o = () => {
    const l = t[n];
    if (l && !t.disabled) {
      const u = t[`${n}Data`];
      if (u !== void 0 ? l.call(t, u, e) : l.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && i(t.host), !0;
  }, s = () => {
    for (; o() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), e.composedPath) {
    const l = e.composedPath();
    i(l[0]);
    for (let u = 0; u < l.length - 2 && (t = l[u], !!o()); u++) {
      if (t._$host) {
        t = t._$host, s();
        break;
      }
      if (t.parentNode === a)
        break;
    }
  } else s();
  i(r);
}
function Je(e, t, n, r, a) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const i = typeof t, o = r !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (i === "number" && (t = t.toString(), t === n))
      return n;
    if (o) {
      let s = n[0];
      s && s.nodeType === 3 ? s.data !== t && (s.data = t) : s = document.createTextNode(t), n = _e(e, n, r, s);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || i === "boolean")
    n = _e(e, n, r);
  else {
    if (i === "function")
      return D(() => {
        let s = t();
        for (; typeof s == "function"; ) s = s();
        n = Je(e, s, n, r);
      }), () => n;
    if (Array.isArray(t)) {
      const s = [], l = n && Array.isArray(n);
      if (pt(s, t, n, a))
        return D(() => n = Je(e, s, n, r, !0)), () => n;
      if (s.length === 0) {
        if (n = _e(e, n, r), o) return n;
      } else l ? n.length === 0 ? Mt(e, s, r) : _r(e, n, s) : (n && _e(e), Mt(e, s));
      n = s;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (o) return n = _e(e, n, r, t);
        _e(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function pt(e, t, n, r) {
  let a = !1;
  for (let i = 0, o = t.length; i < o; i++) {
    let s = t[i], l = n && n[e.length], u;
    if (!(s == null || s === !0 || s === !1)) if ((u = typeof s) == "object" && s.nodeType)
      e.push(s);
    else if (Array.isArray(s))
      a = pt(e, s, l) || a;
    else if (u === "function")
      if (r) {
        for (; typeof s == "function"; ) s = s();
        a = pt(
          e,
          Array.isArray(s) ? s : [s],
          Array.isArray(l) ? l : [l]
        ) || a;
      } else
        e.push(s), a = !0;
    else {
      const c = String(s);
      l && l.nodeType === 3 && l.data === c ? e.push(l) : e.push(document.createTextNode(c));
    }
  }
  return a;
}
function Mt(e, t, n = null) {
  for (let r = 0, a = t.length; r < a; r++) e.insertBefore(t[r], n);
}
function _e(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const a = r || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const s = t[o];
      if (a !== s) {
        const l = s.parentNode === e;
        !i && !o ? l ? e.replaceChild(a, s) : e.insertBefore(a, n) : l && s.remove();
      } else i = !0;
    }
  } else e.insertBefore(a, n);
  return [a];
}
const wr = "http://www.w3.org/2000/svg";
function vr(e, t = !1) {
  return t ? document.createElementNS(wr, e) : document.createElement(e);
}
function Cr(e) {
  const { useShadow: t } = e, n = document.createTextNode(""), r = () => e.mount || document.body, a = ar();
  let i;
  return xe(
    () => {
      i || (i = ir(a, () => P(() => e.children)));
      const o = r();
      if (o instanceof HTMLHeadElement) {
        const [s, l] = F(!1), u = () => l(!0);
        Pe((c) => _(o, () => s() ? c() : i(), null)), be(u);
      } else {
        const s = vr(e.isSVG ? "g" : "div", e.isSVG), l = t && s.attachShadow ? s.attachShadow({
          mode: "open"
        }) : s;
        Object.defineProperty(s, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), _(l, i), o.appendChild(s), e.ref && e.ref(s), be(() => o.removeChild(s));
      }
    },
    void 0,
    {
      render: !0
    }
  ), n;
}
function xr(e) {
  return Object.keys(e).reduce((n, r) => {
    const a = e[r];
    return n[r] = Object.assign({}, a), fn(a.value) && !Pr(a.value) && !Array.isArray(a.value) && (n[r].value = Object.assign({}, a.value)), Array.isArray(a.value) && (n[r].value = a.value.slice(0)), n;
  }, {});
}
function Er(e) {
  return e ? Object.keys(e).reduce((n, r) => {
    const a = e[r];
    return n[r] = fn(a) && "value" in a ? a : {
      value: a
    }, n[r].attribute || (n[r].attribute = kr(r)), n[r].parse = "parse" in n[r] ? n[r].parse : typeof n[r].value != "string", n;
  }, {}) : {};
}
function Sr(e) {
  return Object.keys(e).reduce((n, r) => (n[r] = e[r].value, n), {});
}
function Ar(e, t) {
  const n = xr(t);
  return Object.keys(t).forEach((a) => {
    const i = n[a], o = e.getAttribute(i.attribute), s = e[a];
    o != null && (i.value = i.parse ? mn(o) : o), s != null && (i.value = Array.isArray(s) ? s.slice(0) : s), i.reflect && Vt(e, i.attribute, i.value, !!i.parse), Object.defineProperty(e, a, {
      get() {
        return i.value;
      },
      set(l) {
        const u = i.value;
        i.value = l, i.reflect && Vt(this, i.attribute, i.value, !!i.parse);
        for (let c = 0, d = this.__propertyChangedCallbacks.length; c < d; c++)
          this.__propertyChangedCallbacks[c](a, l, u);
      },
      enumerable: !0,
      configurable: !0
    });
  }), n;
}
function mn(e) {
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
}
function Vt(e, t, n, r) {
  if (n == null || n === !1) return e.removeAttribute(t);
  let a = r ? JSON.stringify(n) : n;
  e.__updating[t] = !0, a === "true" && (a = ""), e.setAttribute(t, a), Promise.resolve().then(() => delete e.__updating[t]);
}
function kr(e) {
  return e.replace(/\.?([A-Z]+)/g, (t, n) => "-" + n.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function fn(e) {
  return e != null && (typeof e == "object" || typeof e == "function");
}
function Pr(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function Hr(e) {
  return typeof e == "function" && e.toString().indexOf("class") === 0;
}
let st;
function Tr(e, t) {
  const n = Object.keys(t);
  return class extends e {
    static get observedAttributes() {
      return n.map((a) => t[a].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = Ar(this, t);
      const a = Sr(this.props), i = this.Component, o = st;
      try {
        st = this, this.__initialized = !0, Hr(i) ? new i(a, {
          element: this
        }) : i(a, {
          element: this
        });
      } finally {
        st = o;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let a = null;
      for (; a = this.__releaseCallbacks.pop(); ) a(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(a, i, o) {
      if (this.__initialized && !this.__updating[a] && (a = this.lookupProp(a), a in t)) {
        if (o == null && !this[a]) return;
        this[a] = t[a].parse ? mn(o) : o;
      }
    }
    lookupProp(a) {
      if (t)
        return n.find((i) => a === i || a === t[i].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(a) {
      this.__releaseCallbacks.push(a);
    }
    addPropertyChangedCallback(a) {
      this.__propertyChangedCallbacks.push(a);
    }
  };
}
function Lr(e, t = {}, n = {}) {
  const {
    BaseElement: r = HTMLElement,
    extension: a,
    customElements: i = window.customElements
  } = n;
  return (o) => {
    if (!e) throw new Error("tag is required to register a Component");
    let s = i.get(e);
    return s ? (s.prototype.Component = o, s) : (s = Tr(r, Er(t)), s.prototype.Component = o, s.prototype.registeredTag = e, i.define(e, s, a), s);
  };
}
function Ir(e) {
  const t = Object.keys(e), n = {};
  for (let r = 0; r < t.length; r++) {
    const [a, i] = F(e[t[r]]);
    Object.defineProperty(n, t[r], {
      get: a,
      set(o) {
        i(() => o);
      }
    });
  }
  return n;
}
function Or(e) {
  if (e.assignedSlot && e.assignedSlot._$owner) return e.assignedSlot._$owner;
  let t = e.parentNode;
  for (; t && !t._$owner && !(t.assignedSlot && t.assignedSlot._$owner); )
    t = t.parentNode;
  return t && t.assignedSlot ? t.assignedSlot._$owner : e._$owner;
}
function Mr(e) {
  return (t, n) => {
    const { element: r } = n;
    return Pe((a) => {
      const i = Ir(t);
      r.addPropertyChangedCallback((s, l) => i[s] = l), r.addReleaseCallback(() => {
        r.renderRoot.textContent = "", a();
      });
      const o = e(i, n);
      return _(r.renderRoot, o);
    }, Or(r));
  };
}
function pn(e, t, n) {
  return arguments.length === 2 && (n = t, t = {}), Lr(e, t)(Mr(n));
}
const gn = '*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Poppins,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.right-0{right:0}.top-0{top:0}.top-\\[5vh\\]{top:5vh}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.float-right{float:right}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.my-auto{margin-bottom:auto;margin-top:auto}.mb-4{margin-bottom:calc(var(--srem)*1)}.ml-5{margin-left:calc(var(--srem)*1.25)}.mt-1{margin-top:calc(var(--srem)*.25)}.mt-3{margin-top:calc(var(--srem)*.75)}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.h-10{height:calc(var(--srem)*2.5)}.h-\\[21px\\]{height:21px}.max-h-\\[95vh\\]{max-height:95vh}.max-h-\\[calc\\(70vh-2rem\\)\\]{max-height:calc(70vh - 2rem)}.w-auto{width:auto}.w-full{width:100%}.min-w-\\[100px\\]{min-width:100px}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.-translate-y-16{--tw-translate-y:calc(var(--srem)*4*-1)}.-translate-y-16,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-1{gap:calc(var(--srem)*.25)}.gap-4{gap:calc(var(--srem)*1)}.gap-6{gap:calc(var(--srem)*1.5)}.gap-9{gap:calc(var(--srem)*2.25)}.self-center{align-self:center}.self-baseline{align-self:baseline}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded-3xl{border-radius:calc(var(--srem)*1.5)}.rounded-full{border-radius:9999px}.rounded-b-xl{border-bottom-left-radius:calc(var(--srem)*.75);border-bottom-right-radius:calc(var(--srem)*.75)}.border{border-width:1px}.border-0{border-width:0}.border-none{border-style:none}.bg-black\\/50{background-color:#00000080}.bg-sp-primary-blue{--tw-bg-opacity:1;background-color:rgb(86 102 240/var(--tw-bg-opacity,1))}.bg-sp-primary-pink{--tw-bg-opacity:1;background-color:rgb(249 220 222/var(--tw-bg-opacity,1))}.bg-sp-white-1{--tw-bg-opacity:1;background-color:rgb(246 247 251/var(--tw-bg-opacity,1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-0{padding:0}.p-1{padding:calc(var(--srem)*.25)}.p-2{padding:calc(var(--srem)*.5)}.p-4{padding:calc(var(--srem)*1)}.px-1{padding-left:calc(var(--srem)*.25);padding-right:calc(var(--srem)*.25)}.px-20{padding-left:calc(var(--srem)*5);padding-right:calc(var(--srem)*5)}.px-4{padding-left:calc(var(--srem)*1);padding-right:calc(var(--srem)*1)}.py-2{padding-bottom:calc(var(--srem)*.5);padding-top:calc(var(--srem)*.5)}.py-2\\.5{padding-bottom:calc(var(--srem)*.625);padding-top:calc(var(--srem)*.625)}.py-4{padding-bottom:calc(var(--srem)*1);padding-top:calc(var(--srem)*1)}.pb-0{padding-bottom:0}.pb-16{padding-bottom:calc(var(--srem)*4)}.pb-3{padding-bottom:calc(var(--srem)*.75)}.pt-6{padding-top:calc(var(--srem)*1.5)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-poppins{font-family:Poppins}.font-sans{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text{font-size:calc(var(--srem)*1)}.text-2xs{font-size:calc(var(--srem)*.7);line-height:calc(var(--srem)*1)}.text-\\[11px\\]{font-size:11px}.text-\\[19px\\]{font-size:19px}.text-sm{font-size:calc(var(--srem)*.875);line-height:calc(var(--srem)*1.25)}.text-xs{font-size:calc(var(--srem)*.75);line-height:calc(var(--srem)*1)}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.lowercase{text-transform:lowercase}.leading-4{line-height:calc(var(--srem)*1)}.leading-6{line-height:calc(var(--srem)*1.5)}.leading-8{line-height:calc(var(--srem)*2)}.leading-\\[21px\\]{line-height:21px}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-sp-light-gray-1{--tw-text-opacity:1;color:rgb(117 121 135/var(--tw-text-opacity,1))}.text-sp-light-gray-2{--tw-text-opacity:1;color:rgb(166 169 178/var(--tw-text-opacity,1))}.text-sp-primary-gray{--tw-text-opacity:1;color:rgb(74 77 90/var(--tw-text-opacity,1))}.text-sp-white-2{--tw-text-opacity:1;color:rgb(209 211 216/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-none{transition-property:none}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}:host,:root{--srem:14px;--sp-primary-gray:#4a4d5a;--sp-primary-blue:#5666f0;--sp-light-gray-1:#757987;--bg-white:#fff;--bg-transparent:transparent;--bg-gradient-logo:linear-gradient(90deg,#fae0e6 27.08%,#bbe4ff);--sp-white-1:#f6f7fb}.hover\\:bg-sp-blue-1:hover{--tw-bg-opacity:1;background-color:rgb(70 74 229/var(--tw-bg-opacity,1))}.hover\\:bg-sp-pink-1:hover{--tw-bg-opacity:1;background-color:rgb(251 210 212/var(--tw-bg-opacity,1))}.hover\\:text-sp-primary-blue:hover{--tw-text-opacity:1;color:rgb(86 102 240/var(--tw-text-opacity,1))}@media (min-width:361px){.min-\\[361px\\]\\:w-auto{width:auto}}@media (min-width:450px){.min-\\[450px\\]\\:max-w-sp-modal{max-width:min(80vw,375px)}}';
var gt = function(e, t) {
  return gt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, gt(e, t);
};
function ee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  gt(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var f = function() {
  return f = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, f.apply(this, arguments);
};
function Vr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function G(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Z(e, t) {
  var n = t && t.cache ? t.cache : Ur, r = t && t.serializer ? t.serializer : Wr, a = t && t.strategy ? t.strategy : Rr;
  return a(e, {
    cache: n,
    serializer: r
  });
}
function Fr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Nr(e, t, n, r) {
  var a = Fr(r) ? r : n(r), i = t.get(a);
  return typeof i > "u" && (i = e.call(this, r), t.set(a, i)), i;
}
function _n(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), a = n(r), i = t.get(a);
  return typeof i > "u" && (i = e.apply(this, r), t.set(a, i)), i;
}
function yn(e, t, n, r, a) {
  return n.bind(t, e, r, a);
}
function Rr(e, t) {
  var n = e.length === 1 ? Nr : _n;
  return yn(e, this, n, t.cache.create(), t.serializer);
}
function Br(e, t) {
  return yn(e, this, _n, t.cache.create(), t.serializer);
}
var Wr = function() {
  return JSON.stringify(arguments);
};
function St() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
St.prototype.get = function(e) {
  return this.cache[e];
};
St.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Ur = {
  create: function() {
    return new St();
  }
}, Y = {
  variadic: Br
}, E;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(E || (E = {}));
var I;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(I || (I = {}));
var we;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(we || (we = {}));
function Ft(e) {
  return e.type === I.literal;
}
function Zr(e) {
  return e.type === I.argument;
}
function bn(e) {
  return e.type === I.number;
}
function wn(e) {
  return e.type === I.date;
}
function vn(e) {
  return e.type === I.time;
}
function Cn(e) {
  return e.type === I.select;
}
function xn(e) {
  return e.type === I.plural;
}
function Yr(e) {
  return e.type === I.pound;
}
function En(e) {
  return e.type === I.tag;
}
function Sn(e) {
  return !!(e && typeof e == "object" && e.type === we.number);
}
function _t(e) {
  return !!(e && typeof e == "object" && e.type === we.dateTime);
}
var An = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Dr(e) {
  var t = {};
  return e.replace(zr, function(n) {
    var r = n.length;
    switch (n[0]) {
      // Era
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      // Period
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
  }), t;
}
var jr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Gr(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(jr).filter(function(h) {
    return h.length > 0;
  }), n = [], r = 0, a = t; r < a.length; r++) {
    var i = a[r], o = i.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = o[0], l = o.slice(1), u = 0, c = l; u < c.length; u++) {
      var d = c[u];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: s, options: l });
  }
  return n;
}
function qr(e) {
  return e.replace(/^(.*?)-/, "");
}
var Nt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, kn = /^(@+)?(\+|#+)?[rs]?$/g, Kr = /(\*)(0+)|(#+)(0+)|(0+)/g, Pn = /^(0+)$/;
function Rt(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(kn, function(n, r, a) {
    return typeof a != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : a === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof a == "string" ? a.length : 0)), "";
  }), t;
}
function Hn(e) {
  switch (e) {
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
function Xr(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Pn.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Bt(e) {
  var t = {}, n = Hn(e);
  return n || t;
}
function Jr(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var a = r[n];
    switch (a.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = qr(a.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = f(f(f({}, t), { notation: "scientific" }), a.options.reduce(function(l, u) {
          return f(f({}, l), Bt(u));
        }, {}));
        continue;
      case "engineering":
        t = f(f(f({}, t), { notation: "engineering" }), a.options.reduce(function(l, u) {
          return f(f({}, l), Bt(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(a.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (a.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        a.options[0].replace(Kr, function(l, u, c, d, h, y) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && h)
              throw new Error("We currently do not support maximum integer digits");
            if (y)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Pn.test(a.stem)) {
      t.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (Nt.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(Nt, function(l, u, c, d, h, y) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : h && y ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + y.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var i = a.options[0];
      i === "w" ? t = f(f({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = f(f({}, t), Rt(i)));
      continue;
    }
    if (kn.test(a.stem)) {
      t = f(f({}, t), Rt(a.stem));
      continue;
    }
    var o = Hn(a.stem);
    o && (t = f(f({}, t), o));
    var s = Xr(a.stem);
    s && (t = f(f({}, t), s));
  }
  return t;
}
var Ue = {
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
function Qr(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var a = e.charAt(r);
    if (a === "j") {
      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === a; )
        i++, r++;
      var o = 1 + (i & 1), s = i < 2 ? 1 : 3 + (i >> 1), l = "a", u = $r(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else a === "J" ? n += "H" : n += a;
  }
  return n;
}
function $r(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var a = Ue[r || ""] || Ue[n || ""] || Ue["".concat(n, "-001")] || Ue["001"];
  return a[0];
}
var lt, ea = new RegExp("^".concat(An.source, "*")), ta = new RegExp("".concat(An.source, "*$"));
function S(e, t) {
  return { start: e, end: t };
}
var na = !!String.prototype.startsWith && "_a".startsWith("a", 1), ra = !!String.fromCodePoint, aa = !!Object.fromEntries, ia = !!String.prototype.codePointAt, oa = !!String.prototype.trimStart, sa = !!String.prototype.trimEnd, la = !!Number.isSafeInteger, ca = la ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, yt = !0;
try {
  var ua = Ln("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  yt = ((lt = ua.exec("a")) === null || lt === void 0 ? void 0 : lt[0]) === "a";
} catch {
  yt = !1;
}
var Wt = na ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), bt = ra ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", a = t.length, i = 0, o; a > i; ) {
      if (o = t[i++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Ut = (
  // native
  aa ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, a = t; r < a.length; r++) {
        var i = a[r], o = i[0], s = i[1];
        n[o] = s;
      }
      return n;
    }
  )
), Tn = ia ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var a = t.charCodeAt(n), i;
      return a < 55296 || a > 56319 || n + 1 === r || (i = t.charCodeAt(n + 1)) < 56320 || i > 57343 ? a : (a - 55296 << 10) + (i - 56320) + 65536;
    }
  }
), da = oa ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ea, "");
  }
), ha = sa ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ta, "");
  }
);
function Ln(e, t) {
  return new RegExp(e, t);
}
var wt;
if (yt) {
  var Zt = Ln("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  wt = function(t, n) {
    var r;
    Zt.lastIndex = n;
    var a = Zt.exec(t);
    return (r = a[1]) !== null && r !== void 0 ? r : "";
  };
} else
  wt = function(t, n) {
    for (var r = []; ; ) {
      var a = Tn(t, n);
      if (a === void 0 || In(a) || ga(a))
        break;
      r.push(a), n += a >= 65536 ? 2 : 1;
    }
    return bt.apply(void 0, r);
  };
var ma = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var a = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          a.push(o.val);
        } else {
          if (i === 125 && t > 0)
            break;
          if (i === 35 && (n === "plural" || n === "selectordinal")) {
            var s = this.clonePosition();
            this.bump(), a.push({
              type: I.pound,
              location: S(s, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(E.UNMATCHED_CLOSING_TAG, S(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && vt(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            a.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            a.push(o.val);
          }
        }
      }
      return { val: a, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var a = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: I.literal,
            value: "<".concat(a, "/>"),
            location: S(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(t + 1, n, !0);
        if (i.err)
          return i;
        var o = i.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !vt(this.char()))
            return this.error(E.INVALID_TAG, S(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return a !== u ? this.error(E.UNMATCHED_CLOSING_TAG, S(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: I.tag,
              value: a,
              children: o,
              location: S(r, this.clonePosition())
            },
            err: null
          } : this.error(E.INVALID_TAG, S(s, this.clonePosition())));
        } else
          return this.error(E.UNCLOSED_TAG, S(r, this.clonePosition()));
      } else
        return this.error(E.INVALID_TAG, S(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && pa(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), a = ""; ; ) {
        var i = this.tryParseQuote(n);
        if (i) {
          a += i;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          a += o;
          continue;
        }
        var s = this.tryParseLeftAngleBracket();
        if (s) {
          a += s;
          continue;
        }
        break;
      }
      var l = S(r, this.clonePosition());
      return {
        val: { type: I.literal, value: a, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !fa(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
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
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return bt.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), bt(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, S(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(E.EMPTY_ARGUMENT, S(r, this.clonePosition()));
      var a = this.parseIdentifierIfPossible().value;
      if (!a)
        return this.error(E.MALFORMED_ARGUMENT, S(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, S(r, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: I.argument,
              // value does not include the opening and closing braces.
              value: a,
              location: S(r, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, S(r, this.clonePosition())) : this.parseArgumentOptions(t, n, a, r);
        default:
          return this.error(E.MALFORMED_ARGUMENT, S(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = wt(this.message, n), a = n + r.length;
      this.bumpTo(a);
      var i = this.clonePosition(), o = S(t, i);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, a) {
      var i, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(E.EXPECT_ARGUMENT_TYPE, S(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var h = ha(d.val);
            if (h.length === 0)
              return this.error(E.EXPECT_ARGUMENT_STYLE, S(this.clonePosition(), this.clonePosition()));
            var y = S(c, this.clonePosition());
            u = { style: h, styleLocation: y };
          }
          var w = this.tryParseArgumentClose(a);
          if (w.err)
            return w;
          var p = S(a, this.clonePosition());
          if (u && Wt(u == null ? void 0 : u.style, "::", 0)) {
            var C = da(u.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(C, u.styleLocation);
              return d.err ? d : {
                val: { type: I.number, value: r, location: p, style: d.val },
                err: null
              };
            } else {
              if (C.length === 0)
                return this.error(E.EXPECT_DATE_TIME_SKELETON, p);
              var v = C;
              this.locale && (v = Qr(C, this.locale));
              var h = {
                type: we.dateTime,
                pattern: v,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Dr(v) : {}
              }, A = s === "date" ? I.date : I.time;
              return {
                val: { type: A, value: r, location: p, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? I.number : s === "date" ? I.date : I.time,
              value: r,
              location: p,
              style: (i = u == null ? void 0 : u.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var x = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS, S(x, f({}, x)));
          this.bumpSpace();
          var O = this.parseIdentifierIfPossible(), R = 0;
          if (s !== "select" && O.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, S(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), O = this.parseIdentifierIfPossible(), R = d.val;
          }
          var te = this.tryParsePluralOrSelectOptions(t, s, n, O);
          if (te.err)
            return te;
          var w = this.tryParseArgumentClose(a);
          if (w.err)
            return w;
          var pe = S(a, this.clonePosition());
          return s === "select" ? {
            val: {
              type: I.select,
              value: r,
              options: Ut(te.val),
              location: pe
            },
            err: null
          } : {
            val: {
              type: I.plural,
              value: r,
              options: Ut(te.val),
              offset: R,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: pe
            },
            err: null
          };
        }
        default:
          return this.error(E.INVALID_ARGUMENT_TYPE, S(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, S(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, S(a, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
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
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = Gr(t);
      } catch {
        return this.error(E.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: we.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Jr(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, a) {
      for (var i, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = a.value, c = a.location; ; ) {
        if (u.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR, E.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            c = S(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? E.DUPLICATE_SELECT_ARGUMENT_SELECTOR : E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var y = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, S(this.clonePosition(), this.clonePosition()));
        var w = this.parseMessage(t + 1, n, r);
        if (w.err)
          return w;
        var p = this.tryParseArgumentClose(y);
        if (p.err)
          return p;
        s.push([
          u,
          {
            value: w.val,
            location: S(y, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), i = this.parseIdentifierIfPossible(), u = i.value, c = i.location;
      }
      return s.length === 0 ? this.error(n === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR : E.EXPECT_PLURAL_ARGUMENT_SELECTOR, S(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(E.MISSING_OTHER_CLAUSE, S(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, a = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var i = !1, o = 0; !this.isEOF(); ) {
        var s = this.char();
        if (s >= 48 && s <= 57)
          i = !0, o = o * 10 + (s - 48), this.bump();
        else
          break;
      }
      var l = S(a, this.clonePosition());
      return i ? (o *= r, ca(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Tn(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Wt(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && In(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function vt(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function fa(e) {
  return vt(e) || e === 47;
}
function pa(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function In(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ga(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ct(e) {
  e.forEach(function(t) {
    if (delete t.location, Cn(t) || xn(t))
      for (var n in t.options)
        delete t.options[n].location, Ct(t.options[n].value);
    else bn(t) && Sn(t.style) || (wn(t) || vn(t)) && _t(t.style) ? delete t.style.location : En(t) && Ct(t.children);
  });
}
function _a(e, t) {
  t === void 0 && (t = {}), t = f({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new ma(e, t).parse();
  if (n.err) {
    var r = SyntaxError(E[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Ct(n.val), n.val;
}
var ae;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ae || (ae = {}));
var ce = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a) {
      var i = e.call(this, n) || this;
      return i.code = r, i.originalMessage = a, i;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Yt = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a, i) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'), ae.INVALID_VALUE, i) || this;
    }
    return t;
  }(ce)
), ya = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ae.INVALID_VALUE, a) || this;
    }
    return t;
  }(ce)
), ba = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ae.MISSING_VALUE, r) || this;
    }
    return t;
  }(ce)
), U;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(U || (U = {}));
function wa(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== U.literal || n.type !== U.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function va(e) {
  return typeof e == "function";
}
function Ye(e, t, n, r, a, i, o) {
  if (e.length === 1 && Ft(e[0]))
    return [
      {
        type: U.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (Ft(c)) {
      s.push({
        type: U.literal,
        value: c.value
      });
      continue;
    }
    if (Yr(c)) {
      typeof i == "number" && s.push({
        type: U.literal,
        value: n.getNumberFormat(t).format(i)
      });
      continue;
    }
    var d = c.value;
    if (!(a && d in a))
      throw new ba(d, o);
    var h = a[d];
    if (Zr(c)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), s.push({
        type: typeof h == "string" ? U.literal : U.object,
        value: h
      });
      continue;
    }
    if (wn(c)) {
      var y = typeof c.style == "string" ? r.date[c.style] : _t(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: U.literal,
        value: n.getDateTimeFormat(t, y).format(h)
      });
      continue;
    }
    if (vn(c)) {
      var y = typeof c.style == "string" ? r.time[c.style] : _t(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: U.literal,
        value: n.getDateTimeFormat(t, y).format(h)
      });
      continue;
    }
    if (bn(c)) {
      var y = typeof c.style == "string" ? r.number[c.style] : Sn(c.style) ? c.style.parsedOptions : void 0;
      y && y.scale && (h = h * (y.scale || 1)), s.push({
        type: U.literal,
        value: n.getNumberFormat(t, y).format(h)
      });
      continue;
    }
    if (En(c)) {
      var w = c.children, p = c.value, C = a[p];
      if (!va(C))
        throw new ya(p, "function", o);
      var v = Ye(w, t, n, r, a, i), A = C(v.map(function(R) {
        return R.value;
      }));
      Array.isArray(A) || (A = [A]), s.push.apply(s, A.map(function(R) {
        return {
          type: typeof R == "string" ? U.literal : U.object,
          value: R
        };
      }));
    }
    if (Cn(c)) {
      var x = c.options[h] || c.options.other;
      if (!x)
        throw new Yt(c.value, h, Object.keys(c.options), o);
      s.push.apply(s, Ye(x.value, t, n, r, a));
      continue;
    }
    if (xn(c)) {
      var x = c.options["=".concat(h)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new ce(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ae.MISSING_INTL_API, o);
        var O = n.getPluralRules(t, { type: c.pluralType }).select(h - (c.offset || 0));
        x = c.options[O] || c.options.other;
      }
      if (!x)
        throw new Yt(c.value, h, Object.keys(c.options), o);
      s.push.apply(s, Ye(x.value, t, n, r, a, h - (c.offset || 0)));
      continue;
    }
  }
  return wa(s);
}
function Ca(e, t) {
  return t ? f(f(f({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = f(f({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function xa(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Ca(e[r], t[r]), n;
  }, f({}, e)) : e;
}
function ct(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Ea(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Z(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, G([void 0], n, !1)))();
    }, {
      cache: ct(e.number),
      strategy: Y.variadic
    }),
    getDateTimeFormat: Z(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, G([void 0], n, !1)))();
    }, {
      cache: ct(e.dateTime),
      strategy: Y.variadic
    }),
    getPluralRules: Z(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, G([void 0], n, !1)))();
    }, {
      cache: ct(e.pluralRules),
      strategy: Y.variadic
    })
  };
}
var On = (
  /** @class */
  function() {
    function e(t, n, r, a) {
      n === void 0 && (n = e.defaultLocale);
      var i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var u = i.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(d, h) {
          return !d.length || h.type !== U.literal || typeof d[d.length - 1] != "string" ? d.push(h.value) : d[d.length - 1] += h.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Ye(i.ast, i.locales, i.formatters, i.formats, l, void 0, i.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = i.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
        };
      }, this.getAst = function() {
        return i.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = a || {};
        o.formatters;
        var s = Vr(o, ["formatters"]);
        this.ast = e.__parse(t, f(f({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = xa(e.formats, r), this.formatters = a && a.formatters || Ea(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = _a, e.formats = {
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
    }, e;
  }()
), de;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(de || (de = {}));
var Re = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a) {
      var i = this, o = a ? a instanceof Error ? a : new Error(String(a)) : void 0;
      return i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, i.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, t), i;
    }
    return t;
  }(Error)
), Sa = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r) {
      return e.call(this, de.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Re)
), Aa = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r) {
      return e.call(this, de.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Re)
), zt = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r) {
      return e.call(this, de.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Re)
), Q = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a) {
      var i = e.call(this, de.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), a) || this;
      return i.locale = r, i;
    }
    return t;
  }(Re)
), ut = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r, a, i) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(a == null ? void 0 : a.id, `
Default Message: `).concat(a == null ? void 0 : a.defaultMessage, `
Description: `).concat(a == null ? void 0 : a.description, `
`), r, i) || this;
      return o.descriptor = a, o.locale = r, o;
    }
    return t;
  }(Q)
), ka = (
  /** @class */
  function(e) {
    ee(t, e);
    function t(n, r) {
      var a = e.call(this, de.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(i) {
        var o;
        return (o = i.value) !== null && o !== void 0 ? o : JSON.stringify(i);
      }).join(), ")") : "id", " as fallback.")) || this;
      return a.descriptor = n, a;
    }
    return t;
  }(Re)
);
function fe(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, a) {
    return a in e ? r[a] = e[a] : a in n && (r[a] = n[a]), r;
  }, {});
}
var Pa = function(e) {
  process.env.NODE_ENV !== "production" && console.error(e);
}, Ha = function(e) {
  process.env.NODE_ENV !== "production" && console.warn(e);
}, Mn = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Pa,
  onWarn: Ha
};
function Vn() {
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
function ue(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Ta(e) {
  e === void 0 && (e = Vn());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, a = Z(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, G([void 0], l, !1)))();
  }, {
    cache: ue(e.dateTime),
    strategy: Y.variadic
  }), i = Z(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, G([void 0], l, !1)))();
  }, {
    cache: ue(e.number),
    strategy: Y.variadic
  }), o = Z(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, G([void 0], l, !1)))();
  }, {
    cache: ue(e.pluralRules),
    strategy: Y.variadic
  });
  return {
    getDateTimeFormat: a,
    getNumberFormat: i,
    getMessageFormat: Z(function(s, l, u, c) {
      return new On(s, l, u, f({ formatters: {
        getNumberFormat: i,
        getDateTimeFormat: a,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: ue(e.message),
      strategy: Y.variadic
    }),
    getRelativeTimeFormat: Z(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, G([void 0], s, !1)))();
    }, {
      cache: ue(e.relativeTime),
      strategy: Y.variadic
    }),
    getPluralRules: o,
    getListFormat: Z(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, G([void 0], s, !1)))();
    }, {
      cache: ue(e.list),
      strategy: Y.variadic
    }),
    getDisplayNames: Z(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, G([void 0], s, !1)))();
    }, {
      cache: ue(e.displayNames),
      strategy: Y.variadic
    })
  };
}
function At(e, t, n, r) {
  var a = e && e[t], i;
  if (a && (i = a[n]), i)
    return i;
  r(new Sa("No ".concat(t, " format named: ").concat(n)));
}
function La(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
Z(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, G([void 0], t, !1)))();
}, {
  strategy: Y.variadic
});
Z(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, G([void 0], t, !1)))();
}, {
  strategy: Y.variadic
});
Z(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, G([void 0], t, !1)))();
}, {
  strategy: Y.variadic
});
Z(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, G([void 0], t, !1)))();
}, {
  strategy: Y.variadic
});
Z(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, G([void 0], t, !1)))();
}, {
  strategy: Y.variadic
});
function Ze(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = f({ timeZone: t }, e[r]), n;
  }, {});
}
function Dt(e, t) {
  var n = Object.keys(f(f({}, e), t));
  return n.reduce(function(r, a) {
    return r[a] = f(f({}, e[a] || {}), t[a] || {}), r;
  }, {});
}
function jt(e, t) {
  if (!t)
    return e;
  var n = On.formats;
  return f(f(f({}, n), e), { date: Dt(Ze(n.date, t), Ze(e.date || {}, t)), time: Dt(Ze(n.time, t), Ze(e.time || {}, t)) });
}
var Gt = function(e, t, n, r, a) {
  var i = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, h = e.timeZone, y = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var w = n.id, p = n.defaultMessage;
  La(!!w, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var C = String(w), v = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, C) && s[C]
  );
  if (Array.isArray(v) && v.length === 1 && v[0].type === I.literal)
    return v[0].value;
  if (!r && v && typeof v == "string" && !y)
    return v.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = f(f({}, y), r || {}), o = jt(o, h), u = jt(u, h), !v) {
    if (c === !1 && v === "")
      return v;
    if ((!p || i && i.toLowerCase() !== l.toLowerCase()) && d(new ka(n, i)), p)
      try {
        var A = t.getMessageFormat(p, l, u, a);
        return A.format(r);
      } catch (x) {
        return d(new ut('Error formatting default message for: "'.concat(C, '", rendering default message verbatim'), i, n, x)), typeof p == "string" ? p : C;
      }
    return C;
  }
  try {
    var A = t.getMessageFormat(v, i, o, f({ formatters: t }, a || {}));
    return A.format(r);
  } catch (x) {
    d(new ut('Error formatting message: "'.concat(C, '", using ').concat(p ? "default message" : "id", " as fallback."), i, n, x));
  }
  if (p)
    try {
      var A = t.getMessageFormat(p, l, u, a);
      return A.format(r);
    } catch (x) {
      d(new ut('Error formatting the default message for: "'.concat(C, '", rendering message verbatim'), i, n, x));
    }
  return typeof v == "string" ? v : typeof p == "string" ? p : C;
}, Fn = [
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
function rt(e, t, n, r) {
  var a = e.locale, i = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = f(f({}, s && { timeZone: s }), l && At(i, t, l, o)), c = fe(r, Fn, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = f(f({}, c), { hour: "numeric", minute: "numeric" })), n(a, c);
}
function Ia(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var a = n[0], i = n[1], o = i === void 0 ? {} : i, s = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return rt(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Q("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function Oa(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var a = n[0], i = n[1], o = i === void 0 ? {} : i, s = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return rt(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Q("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function Ma(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var a = n[0], i = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, d = fe(s, Fn, l ? { timeZone: l } : {});
  try {
    return t(u, d).formatRange(a, i);
  } catch (h) {
    c(new Q("Error formatting date time range.", e.locale, h));
  }
  return String(a);
}
function Va(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var a = n[0], i = n[1], o = i === void 0 ? {} : i, s = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return rt(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Q("Error formatting date.", e.locale, l));
  }
  return [];
}
function Fa(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var a = n[0], i = n[1], o = i === void 0 ? {} : i, s = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return rt(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Q("Error formatting time.", e.locale, l));
  }
  return [];
}
var Na = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Ra(e, t, n, r) {
  var a = e.locale, i = e.onError, o = Intl.DisplayNames;
  o || i(new ce(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ae.MISSING_INTL_API));
  var s = fe(r, Na);
  try {
    return t(a, s).of(n);
  } catch (l) {
    i(new Q("Error formatting display name.", a, l));
  }
}
var Ba = [
  "type",
  "style"
], qt = Date.now();
function Wa(e) {
  return "".concat(qt, "_").concat(e, "_").concat(qt);
}
function Ua(e, t, n, r) {
  r === void 0 && (r = {});
  var a = Nn(e, t, n, r).reduce(function(i, o) {
    var s = o.value;
    return typeof s != "string" ? i.push(s) : typeof i[i.length - 1] == "string" ? i[i.length - 1] += s : i.push(s), i;
  }, []);
  return a.length === 1 ? a[0] : a.length === 0 ? "" : a;
}
function Nn(e, t, n, r) {
  var a = e.locale, i = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || i(new ce(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ae.MISSING_INTL_API));
  var s = fe(r, Ba);
  try {
    var l = {}, u = n.map(function(c, d) {
      if (typeof c == "object") {
        var h = Wa(d);
        return l[h] = c, h;
      }
      return String(c);
    });
    return t(a, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : f(f({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    i(new Q("Error formatting list.", a, c));
  }
  return n;
}
var Za = ["type"];
function Ya(e, t, n, r) {
  var a = e.locale, i = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || i(new ce(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ae.MISSING_INTL_API));
  var o = fe(r, Za);
  try {
    return t(a, o).select(n);
  } catch (s) {
    i(new Q("Error formatting plural.", a, s));
  }
  return "other";
}
var za = ["numeric", "style"];
function Da(e, t, n) {
  var r = e.locale, a = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && At(a, "relative", o, i) || {}, l = fe(n, za, s);
  return t(r, l);
}
function ja(e, t, n, r, a) {
  a === void 0 && (a = {}), r || (r = "second");
  var i = Intl.RelativeTimeFormat;
  i || e.onError(new ce(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ae.MISSING_INTL_API));
  try {
    return Da(e, t, a).format(n, r);
  } catch (o) {
    e.onError(new Q("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Ga = [
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
function Rn(e, t, n) {
  var r = e.locale, a = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && At(a, "number", o, i) || {}, l = fe(n, Ga, s);
  return t(r, l);
}
function qa(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Rn(e, t, r).format(n);
  } catch (a) {
    e.onError(new Q("Error formatting number.", e.locale, a));
  }
  return String(n);
}
function Ka(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Rn(e, t, r).formatToParts(n);
  } catch (a) {
    e.onError(new Q("Error formatting number.", e.locale, a));
  }
  return [];
}
function Xa(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Ja(e) {
  e.onWarn && e.defaultRichTextElements && Xa(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Kt(e, t) {
  var n = Ta(t), r = f(f({}, Mn), e), a = r.locale, i = r.defaultLocale, o = r.onError;
  return a ? !Intl.NumberFormat.supportedLocalesOf(a).length && o ? o(new zt('Missing locale data for locale: "'.concat(a, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(a).length && o && o(new zt('Missing locale data for locale: "'.concat(a, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new Aa('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Ja(r), f(f({}, r), {
    formatters: n,
    formatNumber: qa.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Ka.bind(null, r, n.getNumberFormat),
    formatRelativeTime: ja.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Ia.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Va.bind(null, r, n.getDateTimeFormat),
    formatTime: Oa.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: Ma.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: Fa.bind(null, r, n.getDateTimeFormat),
    formatPlural: Ya.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Gt.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Gt.bind(null, r, n),
    formatList: Ua.bind(null, r, n.getListFormat),
    formatListToParts: Nn.bind(null, r, n.getListFormat),
    formatDisplayName: Ra.bind(null, r, n.getDisplayNames)
  });
}
const Oe = Symbol("store-raw"), ne = Symbol("store-node"), X = Symbol("store-has"), Bn = Symbol("store-self");
function Wn(e) {
  let t = e[N];
  if (!t && (Object.defineProperty(e, N, {
    value: t = new Proxy(e, $a)
  }), !Array.isArray(e))) {
    const n = Object.keys(e), r = Object.getOwnPropertyDescriptors(e);
    for (let a = 0, i = n.length; a < i; a++) {
      const o = n[a];
      r[o].get && Object.defineProperty(e, o, {
        enumerable: r[o].enumerable,
        get: r[o].get.bind(t)
      });
    }
  }
  return t;
}
function Me(e) {
  let t;
  return e != null && typeof e == "object" && (e[N] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function he(e, t = /* @__PURE__ */ new Set()) {
  let n, r, a, i;
  if (n = e != null && e[Oe]) return n;
  if (!Me(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let o = 0, s = e.length; o < s; o++)
      a = e[o], (r = he(a, t)) !== a && (e[o] = r);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const o = Object.keys(e), s = Object.getOwnPropertyDescriptors(e);
    for (let l = 0, u = o.length; l < u; l++)
      i = o[l], !s[i].get && (a = e[i], (r = he(a, t)) !== a && (e[i] = r));
  }
  return e;
}
function ve(e, t) {
  let n = e[t];
  return n || Object.defineProperty(e, t, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function me(e, t, n) {
  if (e[t]) return e[t];
  const [r, a] = F(n, {
    equals: !1,
    internal: !0
  });
  return r.$ = a, e[t] = r;
}
function Qa(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === N || t === ne || (delete n.value, delete n.writable, n.get = () => e[N][t]), n;
}
function kt(e) {
  Le() && me(ve(e, ne), Bn)();
}
function Un(e) {
  return kt(e), Reflect.ownKeys(e);
}
const $a = {
  get(e, t, n) {
    if (t === Oe) return e;
    if (t === N) return n;
    if (t === Te)
      return kt(e), n;
    const r = ve(e, ne), a = r[t];
    let i = a ? a() : e[t];
    if (t === ne || t === X || t === "__proto__") return i;
    if (!a) {
      const o = Object.getOwnPropertyDescriptor(e, t);
      Le() && (typeof i != "function" || e.hasOwnProperty(t)) && !(o && o.get) && (i = me(r, t, i)());
    }
    return Me(i) ? Wn(i) : i;
  },
  has(e, t) {
    return t === Oe || t === N || t === Te || t === ne || t === X || t === "__proto__" ? !0 : (Le() && me(ve(e, X), t)(), t in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Un,
  getOwnPropertyDescriptor: Qa
};
function Ce(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const a = e[t], i = e.length;
  n === void 0 ? (delete e[t], e[X] && e[X][t] && a !== void 0 && e[X][t].$()) : (e[t] = n, e[X] && e[X][t] && a === void 0 && e[X][t].$());
  let o = ve(e, ne), s;
  if ((s = me(o, t, a)) && s.$(() => n), Array.isArray(e) && e.length !== i) {
    for (let l = e.length; l < i; l++) (s = o[l]) && s.$();
    (s = me(o, "length", i)) && s.$(e.length);
  }
  (s = o[Bn]) && s.$();
}
function Zn(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const a = n[r];
    Ce(e, a, t[a]);
  }
}
function ei(e, t) {
  if (typeof t == "function" && (t = t(e)), t = he(t), Array.isArray(t)) {
    if (e === t) return;
    let n = 0, r = t.length;
    for (; n < r; n++) {
      const a = t[n];
      e[n] !== a && Ce(e, n, a);
    }
    Ce(e, "length", r);
  } else Zn(e, t);
}
function Ae(e, t, n = []) {
  let r, a = e;
  if (t.length > 1) {
    r = t.shift();
    const o = typeof r, s = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let l = 0; l < r.length; l++)
        Ae(e, [r[l]].concat(t), n);
      return;
    } else if (s && o === "function") {
      for (let l = 0; l < e.length; l++)
        r(e[l], l) && Ae(e, [l].concat(t), n);
      return;
    } else if (s && o === "object") {
      const { from: l = 0, to: u = e.length - 1, by: c = 1 } = r;
      for (let d = l; d <= u; d += c)
        Ae(e, [d].concat(t), n);
      return;
    } else if (t.length > 1) {
      Ae(e[r], t, [r].concat(n));
      return;
    }
    a = e[r], n = [r].concat(n);
  }
  let i = t[0];
  typeof i == "function" && (i = i(a, n), i === a) || r === void 0 && i == null || (i = he(i), r === void 0 || Me(a) && Me(i) && !Array.isArray(i) ? Zn(a, i) : Ce(e, r, i));
}
function ti(...[e, t]) {
  const n = he(e || {}), r = Array.isArray(n), a = Wn(n);
  function i(...o) {
    He(() => {
      r && o.length === 1 ? ei(n, o[0]) : Ae(n, o);
    });
  }
  return [a, i];
}
function ni(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || n.set || !n.configurable || t === N || t === ne || (delete n.value, delete n.writable, n.get = () => e[N][t], n.set = (r) => e[N][t] = r), n;
}
const ri = {
  get(e, t, n) {
    if (t === Oe) return e;
    if (t === N) return n;
    if (t === Te)
      return kt(e), n;
    const r = ve(e, ne), a = r[t];
    let i = a ? a() : e[t];
    if (t === ne || t === X || t === "__proto__") return i;
    if (!a) {
      const o = Object.getOwnPropertyDescriptor(e, t), s = typeof i == "function";
      if (Le() && (!s || e.hasOwnProperty(t)) && !(o && o.get))
        i = me(r, t, i)();
      else if (i != null && s && i === Array.prototype[t])
        return (...l) => He(() => Array.prototype[t].apply(n, l));
    }
    return Me(i) ? Yn(i) : i;
  },
  has(e, t) {
    return t === Oe || t === N || t === Te || t === ne || t === X || t === "__proto__" ? !0 : (Le() && me(ve(e, X), t)(), t in e);
  },
  set(e, t, n) {
    return He(() => Ce(e, t, he(n))), !0;
  },
  deleteProperty(e, t) {
    return He(() => Ce(e, t, void 0, !0)), !0;
  },
  ownKeys: Un,
  getOwnPropertyDescriptor: ni
};
function Yn(e) {
  let t = e[N];
  if (!t) {
    Object.defineProperty(e, N, {
      value: t = new Proxy(e, ri)
    });
    const n = Object.keys(e), r = Object.getOwnPropertyDescriptors(e), a = Object.getPrototypeOf(e), i = a !== null && e !== null && typeof e == "object" && !Array.isArray(e) && a !== Object.prototype;
    if (i) {
      const o = Object.getOwnPropertyDescriptors(a);
      n.push(...Object.keys(o)), Object.assign(r, o);
    }
    for (let o = 0, s = n.length; o < s; o++) {
      const l = n[o];
      if (!(i && l === "constructor")) {
        if (r[l].get) {
          const u = r[l].get.bind(t);
          Object.defineProperty(e, l, {
            get: u,
            configurable: !0
          });
        }
        if (r[l].set) {
          const u = r[l].set;
          Object.defineProperty(e, l, {
            set: (d) => He(() => u.call(t, d)),
            configurable: !0
          });
        }
      }
    }
  }
  return t;
}
function ai(e, t) {
  const n = he(e || {});
  return Yn(n);
}
function Xt(e) {
  return J(Mn, {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    defaultRichTextElements: e.defaultRichTextElements,
    onError: e.onError,
    onWarn: e.onWarn
  });
}
const ye = (e) => {
  var t;
  return ((t = {}.toString.call(e).match(/\s([A-Za-z]+)/)) == null ? void 0 : t[1].toLowerCase()) ?? "";
}, ii = {
  // @ts-ignore
  nullish(e) {
    return e == null;
  },
  // @ts-ignore
  string(e) {
    return ye(e) === "string";
  },
  // @ts-ignore
  number(e) {
    return ye(e) === "number";
  },
  // @ts-ignore
  bool(e) {
    return ye(e) === "boolean";
  },
  // @ts-ignore
  object(e) {
    return ye(e) === "object";
  },
  // @ts-ignore
  array(e) {
    return Array.isArray(e);
  },
  // @ts-ignore
  date(e) {
    return ye(e) === "date";
  },
  // @ts-ignore
  function(e) {
    return ye(e) === "function";
  }
}, oi = or(), si = (e) => {
  if (ii.nullish(e.locale))
    throw new ReferenceError('[solid-intl]: <IntlProvider /> expects a "locale" which was not configured. See https://formatjs.io/docs/react-intl/api#intlshape for more details');
  const t = ai(Vn()), [n, r] = ti(Kt(Xt(e), t));
  return rn(() => {
    r(Kt(Xt(e), t));
  }), m(oi.Provider, {
    value: n,
    get children() {
      return e.children;
    }
  });
};
var oe = /* @__PURE__ */ ((e) => (e.EN = "en", e.IT = "it", e.PT = "pt", e.DE = "de", e.FR = "fr", e.ES = "es", e))(oe || {}), ze = /* @__PURE__ */ ((e) => (e.LB = "fr", e.CA = "es", e.EU = "es", e.GL = "es", e.OC = "es", e.RM = "it", e))(ze || {});
const le = "en", dt = {
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
    "product_widget:pay_in_4_no_installments": "Pay in 4{{feeStar}} installments with",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Pay in 3 or 4{{feeStar}} installments with",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Pay in 3 or 4 installments or now, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_3_pay_now_checkout": 'Pay in 3 installments or now, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_4_pay_now_checkout": 'Pay in 4 installments or now, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Pay in 3 or 4 installments or later, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_3_pay_later": 'Pay in 3 installments or later, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_4_pay_later": 'Pay in 3 installments or later, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_now_checkout_pay_later": "Pay now or later",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Pay in 3 installments, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Pay in 4 installments, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Pay in 3 or 4 installments, starting from <strong class="text-black">{{installmentAmount}}</strong>.Interest-free.',
    "product_widget:pay_now_checkout": "Pay now with",
    "product_widget:pay_later": "Pay later",
    // Checkout widget
    "checkout_widget:pay_in_3": 'Pay in 3 installments of <span class="{{textStyle}}">{{installmentAmount}}</span> without interest.',
    "checkout_widget:pay_in_4": 'Pay in 4{{feeStar}} installments of <span class="{{textStyle}}">{{installmentAmount}}</span> without interest.',
    "checkout_widget:pay_now_checkout": "Fast checkout with your account.",
    "checkout_widget:pay_later": "Pay later without interest.",
    "checkout_widget:accepted_methods": "We accept all major payment methods, including prepaid cards.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Pay in 3 installments without interest.",
    "checkout_widget:pay_in_4_no_installments": "Pay in 4{{feeStar}} installments without interest.",
    // Checkout Title
    "checkout_title:pay_in_3": "Pay in 3 installments",
    "checkout_title:pay_in_4": "Pay in 4 installments",
    "checkout_title:pay_in_3_pay_in_4": "Pay in 3 or 4 installments",
    // Info card
    "product_widget:pay_in_3_label": "Pay in 3 installments",
    "product_widget:pay_in_4_label": "Pay in 4 installments",
    "product_widget:pay_now_checkout_label": "Pay now",
    "product_widget:later_label": "Pay later",
    "how_to_card:information_1": '<strong class="text-black">Choose Scalapay</strong> at Checkout.',
    "how_to_card:information_2": '<strong class="text-black">Create an account in 2 mins</strong> and <strong class="text-black">enter a payment method. </strong>',
    "how_to_card:information_3": '<strong class="text-black">Pay only the first installment</strong> and receive your order immediately.',
    "how_to_card:information_3:travel": '<strong class="text-black">Pay only the first installment</strong> and confirm your reservation right away.',
    "how_to_card:information_4": '<strong class="text-black">Enjoy your purchase</strong> and take your time to settle the remaining installments.',
    "how_to_card:information_4:travel": '<strong class="text-black">Enjoy your experience</strong> and take your time to settle the remaining installments.',
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
    "product_widget:pay_in_4_no_installments": "Paga in 4{{feeStar}} rate con",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga in 3 o 4{{feeStar}} rate con",
    "product_widget:pay_now_checkout": "Paga ora con",
    "product_widget:pay_later": "Paga più tardi",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga in 3 o 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga in 3 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga in 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga in 3 o 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_3_pay_later": 'Paga in 3 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_4_pay_later": 'Paga in 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_now_checkout_pay_later": "Paga ora o più tardi",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga in 3 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga in 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga in 3 o 4 rate, a partire da <strong class="text-black">{{installmentAmount}}</strong>. Senza interessi.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga in 3 rate di <span class='{{textStyle}}'>{{installmentAmount}}</span> senza interessi.",
    "checkout_widget:pay_in_4": "Paga in 4{{feeStar}} rate di <span class='{{textStyle}}'>{{installmentAmount}}</span> senza interessi.",
    "checkout_widget:pay_now_checkout": "Pagamento rapido con il tuo account.",
    "checkout_widget:pay_later": "Paga dopo senza interessi.",
    "checkout_widget:accepted_methods": "Accettiamo tutti i principali metodi di pagamento, incluse le carte prepagate.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga in 3 rate senza interessi.",
    "checkout_widget:pay_in_4_no_installments": "Paga in 4{{feeStar}} rate senza interessi.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga in 3 rate",
    "checkout_title:pay_in_4": "Paga in 4 rate",
    "checkout_title:pay_in_3_pay_in_4": "Paga in 3 o 4 rate",
    // Info card
    "product_widget:pay_in_3_label": "Paga in 3 rate",
    "product_widget:pay_in_4_label": "Paga in 4 rate",
    "product_widget:pay_now_checkout_label": "Paga ora",
    "product_widget:later_label": "Paga dopo",
    "how_to_card:information_1": "<strong class='text-black'>Scegli Scalapay</strong> al momento del checkout.",
    "how_to_card:information_2": "<strong class='text-black'>Crea un account in 2 minuti</strong> e <strong class='text-black'>aggiungi un metodo di pagamento.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga solo la prima rata</strong> e ricevi subito il tuo ordine.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga solo la prima rata</strong> e conferma subito la tua prenotazione.",
    "how_to_card:information_4": "<strong class='text-black'>Goditi il tuo acquisto</strong> e prenditi il tuo tempo per pagare le rate rimanenti.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Goditi la tua esperienza</strong> e prenditi il tuo tempo per pagare le rate rimanenti.",
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
    "product_widget:pay_in_4_no_installments": "Paga em 4 prestações com",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga em 3 ou 4 prestações com",
    "product_widget:pay_now_checkout": "Paga agora com",
    "product_widget:pay_later": "Paga depois",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga em 3 ou 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga em 3 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga em 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga em 3 ou 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_3_pay_later": 'Paga em 3 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_4_pay_later": 'Paga em 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_now_checkout_pay_later": "Paga agora ou depois",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga em 3 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga em 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga em 3 ou 4 prestações, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sem juros.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga em 3 prestações de <span class='{{textStyle}}'>{{installmentAmount}}</span> sem juros.",
    "checkout_widget:pay_in_4": "Paga em 4 prestações de <span class='{{textStyle}}'>{{installmentAmount}}</span> sem juros.",
    "checkout_widget:pay_now_checkout": "Checkout rápido com a tua conta.",
    "checkout_widget:pay_later": "Paga depois sem juros.",
    "checkout_widget:accepted_methods": "Aceitamos todos os principais métodos de pagamento.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga em 3 prestações sem juros.",
    "checkout_widget:pay_in_4_no_installments": "Paga em 4 prestações sem juros.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga em 3 prestações",
    "checkout_title:pay_in_4": "Paga em 4 prestações",
    "checkout_title:pay_in_3_pay_in_4": "Paga em 3 ou 4 prestações",
    // Info card
    "product_widget:pay_in_3_label": "Paga em 3 prestações",
    "product_widget:pay_in_4_label": "Paga em 4 prestações",
    "product_widget:pay_now_checkout_label": "Paga agora",
    "product_widget:later_label": "Paga depois",
    "how_to_card:information_1": "<strong class='text-black'>No momento do pagamento</strong>, seleciona a Scalapay.",
    "how_to_card:information_2": "<strong class='text-black'>Cria uma conta em 2 minutos</strong> e <strong class='text-black'>adiciona um cartão bancário.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga apenas a primeira prestação</strong> e recebe o teu pedido imediatamente.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga apenas a primeira prestação</strong> e recebe o teu pedido imediatamente.",
    "how_to_card:information_4": "<strong class='text-black'>Aproveita a tua compra</strong> e paga ao teu ritmo as restantes prestações.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Aproveita a tua experiência</strong> e paga ao teu ritmo as restantes prestações.",
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
    "product_widget:pay_in_4_no_installments": "Zahle in 4 bequemen Raten mit",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Zahle in 3 oder 4 Raten mit",
    "product_widget:pay_now_checkout": "Jetzt bezahlen mit",
    "product_widget:pay_later": "Später bezahlen",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Zahlen Sie in 3 oder 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_3_pay_now_checkout": 'Zahlen Sie in 3 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_4_pay_now_checkout": 'Zahlen Sie in 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Zahlen Sie in 3 oder 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_3_pay_later": 'Zahlen Sie in 3 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_4_pay_later": 'Zahlen Sie in 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_now_checkout_pay_later": "Jetzt oder später bezahlen",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Zahlen Sie in 3 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Zahlen Sie in 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Zahlen Sie in 3 oder 4 Raten, beginnend ab <strong class="text-black">{{installmentAmount}}</strong>. Zinsfrei.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Zahle in 3 Raten von <span class='{{textStyle}}'>{{installmentAmount}}</span> zinsfrei.",
    "checkout_widget:pay_in_4": "Zahle in 4 Raten von <span class='{{textStyle}}'>{{installmentAmount}}</span> zinsfrei.",
    "checkout_widget:pay_now_checkout": "Schneller Checkout mit deinem Konto.",
    "checkout_widget:pay_later": "Später zahlen ohne Zinsen.",
    "checkout_widget:accepted_methods": "Wir akzeptieren alle gängigen Zahlungsmethoden, einschließlich Prepaid-Karten.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Zahle in 3 Raten zinsfrei.",
    "checkout_widget:pay_in_4_no_installments": "Zahle in 4 Raten zinsfrei.",
    // Checkout Title
    "checkout_title:pay_in_3": "Zahle in 3 Raten",
    "checkout_title:pay_in_4": "Zahle in 4 Raten",
    "checkout_title:pay_in_3_pay_in_4": "Zahle in 3 oder 4 Raten",
    // Info card
    "product_widget:pay_in_3_label": "Zahle in 3 Raten",
    "product_widget:pay_in_4_label": "Zahle in 4 Raten",
    "product_widget:pay_now_checkout_label": "Jetzt zahlen",
    "product_widget:later_label": "Später zahlen",
    "how_to_card:information_1": "<strong class='text-black'>Scalapay</strong> beim Checkout auswählen.",
    "how_to_card:information_2": "<strong class='text-black'>Erstelle in 2 Minuten ein Konto</strong> und <strong class='text-black'>füge eine Zahlungsmethode hinzu.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Bezahle nur die erste Rate</strong> und erhalte deine Bestellung sofort.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Bezahle nur die erste Rate</strong> und bestätigen Sie Ihre Reservierung sofort.",
    "how_to_card:information_4": "<strong class='text-black'>Genieße deinen Einkauf</strong> und nimm dir Zeit, die restlichen Raten zu bezahlen.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Genießen Sie Ihr Erlebnis</strong> und nehmen Sie sich Zeit, die restlichen Raten zu zahlen.",
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
    "product_widget:pay_in_4_no_installments": "Payez en 4{{feeStar}} fois avec",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Payez en 3 ou 4{{feeStar}} fois avec",
    "product_widget:pay_now_checkout": "Payez maintenant avec",
    "product_widget:pay_later": "Payez plus tard",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Payez en 3 ou 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_3_pay_now_checkout": 'Payez en 3 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_4_pay_now_checkout": 'Payez en 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Payez en 3 ou 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_3_pay_later": 'Payez en 3 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_4_pay_later": 'Payez en 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_now_checkout_pay_later": "Payez maintenant ou plus tard",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Payez en 3 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Payez en 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Payez en 3 ou 4 fois, à partir de <strong class="text-black">{{installmentAmount}}</strong>. Sans intérêts.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Payez en 3 fois <span class='{{textStyle}}'>{{installmentAmount}}</span> sans intérêts.",
    "checkout_widget:pay_in_4": "Payez en 4{{feeStar}} fois <span class='{{textStyle}}'>{{installmentAmount}}</span> sans intérêts.",
    "checkout_widget:pay_now_checkout": "Paiement rapide avec votre compte.",
    "checkout_widget:pay_later": "Payez plus tard sans intérêt.",
    "checkout_widget:accepted_methods": "Nous acceptons tous les principaux moyens de paiement, y compris les cartes prépayées.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Payez en 3 fois sans intérêts.",
    "checkout_widget:pay_in_4_no_installments": "Payez en 4{{feeStar}} fois sans intérêts.",
    // Checkout Title
    "checkout_title:pay_in_3": "Payez en 3 fois",
    "checkout_title:pay_in_4": "Payez en 4 fois",
    "checkout_title:pay_in_3_pay_in_4": "Payez en 3 ou 4 fois",
    // Info card
    "product_widget:pay_in_3_label": "Payez en 3 fois",
    "product_widget:pay_in_4_label": "Payez en 4 fois",
    "product_widget:pay_now_checkout_label": "Payez maintenant",
    "product_widget:later_label": "Payez plus tard",
    "how_to_card:information_1": "<strong class='text-black'>Choisissez Scalapay</strong> au moment de régler.",
    "how_to_card:information_2": "<strong class='text-black'>Créez un compte en 2 minutes</strong> et <strong class='text-black'>ajoutez un moyen de paiement.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Payez seulement la première mensualité</strong> et recevez votre commande immédiatement.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Payez seulement le premier versement</strong> et confirmez votre réservation.",
    "how_to_card:information_4": "<strong class='text-black'>Profitez de votre achat</strong> et prenez votre temps pour régler les mensualités restantes.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Profitez de votre expérience</strong> et prenez le temps de régler les mensualités restantes.",
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
    "product_widget:pay_in_4_no_installments": "Paga en 4{{feeStar}} plazos con",
    "product_widget:pay_in_3_pay_in_4_no_installments": "Paga en 3 o 4{{feeStar}} plazos con",
    "product_widget:pay_now_checkout": "Paga ahora con",
    "product_widget:pay_later": "Paga más tarde",
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout": 'Paga en 3 o 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_3_pay_now_checkout": 'Paga en 3 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_4_pay_now_checkout": 'Paga en 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_3_pay_in_4_pay_later": 'Paga en 3 o 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_3_pay_later": 'Paga en 3 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_4_pay_later": 'Paga en 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_now_checkout_pay_later": "Paga ahora o más tarde",
    "product_widget:pay_in_3_pay_now_checkout_pay_later": 'Paga en 3 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_4_pay_now_checkout_pay_later": 'Paga en 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    "product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later": 'Paga en 3 o 4 plazos, a partir de <strong class="text-black">{{installmentAmount}}</strong>. Sin intereses.',
    // Checkout widget
    "checkout_widget:pay_in_3": "Paga en 3 plazos de <span class='{{textStyle}}'>{{installmentAmount}}</span> sin intereses.",
    "checkout_widget:pay_in_4": "Paga en 4{{feeStar}} plazos de <span class='{{textStyle}}'>{{installmentAmount}}</span> sin intereses.",
    "checkout_widget:pay_now_checkout": "Pago rápido con tu cuenta.",
    "checkout_widget:pay_later": "Paga después sin intereses.",
    "checkout_widget:accepted_methods": "Aceptamos todos los métodos de pago principales, incluidas las tarjetas prepago.",
    // Checkout widget no installments
    "checkout_widget:pay_in_3_no_installments": "Paga en 3 plazos sin intereses.",
    "checkout_widget:pay_in_4_no_installments": "Paga en 4{{feeStar}} plazos sin intereses.",
    // Checkout Title
    "checkout_title:pay_in_3": "Paga en 3 plazos",
    "checkout_title:pay_in_4": "Paga en 4 plazos",
    "checkout_title:pay_in_3_pay_in_4": "Paga en 3 o 4 plazos",
    // Info card
    "product_widget:pay_in_3_label": "Paga en 3 plazos",
    "product_widget:pay_in_4_label": "Paga en 4 plazos",
    "product_widget:pay_now_checkout_label": "Pagar ahora",
    "product_widget:later_label": "Paga después",
    "how_to_card:information_1": "<strong class='text-black'>Elige Scalapay</strong> al momento de pagar.",
    "how_to_card:information_2": "<strong class='text-black'>Crea una cuenta en 2 minutos</strong> y <strong class='text-black'>añade un método de pago.</strong>",
    "how_to_card:information_3": "<strong class='text-black'>Paga solo el primer plazo</strong> y recibe tu pedido de inmediato.",
    "how_to_card:information_3:travel": "<strong class='text-black'>Paga solo el primer plazo</strong> y confirme tu reserva ahora.",
    "how_to_card:information_4": "<strong class='text-black'Disfruta de tu compra</strong> y tómate tu tiempo para pagar los plazos restantes.",
    "how_to_card:information_4:travel": "<strong class='text-black'>Disfrute de su experiencia</strong> y tómate tu tiempo para pagar los plazos restantes.",
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
    // Learn more modal
    "learn_more_modal:title": "Lo que te gusta en cómodos plazos. Sin intereses."
  }
}, H = (e, t, n = {}) => (e in dt || (e = le), t in dt[e] ? Object.keys(n).reduce((a, i) => {
  const o = new RegExp(`{{(${i})}}`, "gi");
  return a.replace(o, n[i] || `{{${i}}}`);
}, dt[e][t]).replace(/{{.*?}}/g, "") : t);
var Pt = /* @__PURE__ */ ((e) => (e.ONLINE = "online", e.OFFLINE = "offline", e))(Pt || {}), g = /* @__PURE__ */ ((e) => (e.PAY_IN_THREE = "pay-in-3", e.PAY_IN_FOUR = "pay-in-4", e.PAY_NOW_CHECKOUT = "pay-now-checkout", e.PAY_LATER = "later", e.PAY_IN_X = "pay-in-x", e))(g || {});
const li = 60, ci = 120, Jt = {
  euro: {
    symbol: "€",
    code: "EUR"
  }
}, ui = {
  it: {
    position: "after",
    display: "symbol"
  },
  en: {
    position: "before",
    display: "symbol"
  }
}, Qt = [
  g.PAY_IN_THREE,
  g.PAY_IN_FOUR,
  g.PAY_NOW_CHECKOUT,
  g.PAY_LATER,
  g.PAY_IN_X
], di = (e) => e.sort(
  (t, n) => Qt.indexOf(t.product) - Qt.indexOf(n.product)
), De = (e, t) => e ? (e = ((r, a) => r.replace(new RegExp(`^[${a}]+|[${a}]+$`, "g"), ""))(e.replace(/[^0-9,.]/g, ""), ",. "), t === "." && (e = e.replace(/,/g, "")), t === "," && (e = e.replace(/[.]/g, "")), parseFloat(
  parseFloat(
    e.replace(/[.,](?=.*[.,])/g, "").replace(/,/, ".")
  ).toFixed(2)
) * 100) : null, zn = (e) => {
  const t = new Set(Object.values(oe)), n = new Set(Object.keys(ze).map((a) => a.toLowerCase()));
  if (typeof e != "string") return le;
  const r = e.toLowerCase().trim();
  if (t.has(r)) return r;
  if (n.has(r))
    return ze[r.toUpperCase()];
  if (r.length > 2 && r.indexOf("-") === 2) {
    const a = r.slice(0, 2);
    if (t.has(a)) return a;
    if (n.has(a)) return ze[a.toUpperCase()];
  }
  return le;
}, re = (e, t = le, n, r) => {
  const a = ui[t], i = n || (a == null ? void 0 : a.display) || "symbol", o = r || (a == null ? void 0 : a.position) || "after", s = i === "code" ? " " : "", l = new Intl.NumberFormat(t, {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "code"
  }).format(e / 100).replace("EUR", "").trim(), u = Jt.euro[i] || Jt.euro.code;
  return o === "before" ? `${u}${s}${l}` : `${l}${s}${u}`;
}, hi = (e) => e <= 499 ? null : Math.round(e * 0.01), mi = (e) => e <= 499 ? null : e <= 999 ? 9 : e <= 1999 ? 18 : e <= 3499 ? 35 : e <= 4999 ? 60 : e <= 6499 ? 90 : e <= 7999 ? 120 : e <= 9499 ? 140 : e <= 10999 ? 170 : e <= 12499 ? 200 : e <= 13999 ? 230 : e <= 15999 ? 260 : e <= 17999 ? 290 : e <= 19999 ? 330 : e <= 34999 ? 360 : e <= 49999 ? 650 : e <= 64999 ? 920 : e <= 79999 ? 1200 : e <= 99999 ? 1480 : e <= 149999 ? 1850 : e <= 199999 ? 2770 : e <= 499999 ? 3700 : null, fi = (e) => e <= 499 ? null : e <= 999 ? 6 : e <= 1999 ? 12 : e <= 3499 ? 25 : e <= 4999 ? 40 : e <= 6499 ? 60 : e <= 7999 ? 80 : e <= 9499 ? 100 : e <= 10999 ? 110 : e <= 12499 ? 130 : e <= 13999 ? 150 : e <= 15999 ? 170 : e <= 17999 ? 200 : e <= 19999 ? 220 : e <= 34999 ? 250 : e <= 49999 ? 430 : e <= 64999 ? 620 : e <= 79999 ? 800 : e <= 99999 ? 990 : e <= 149999 ? 1230 : e <= 199999 ? 1850 : e <= 499999 ? 2400 : null, Dn = (e, t, n, r = "v1") => {
  switch (r) {
    case "v1":
    default:
      if (n === oe.ES)
        return hi(e);
      if ([
        oe.IT,
        oe.FR,
        oe.EN
      ].includes(n)) {
        if (t === 4)
          return mi(e);
        if (t === 3)
          return fi(e);
      }
      return 0;
  }
}, pi = (e) => {
  switch (e) {
    case "monthly":
      return 30;
    case "daily":
      return 1;
    case "weekly":
      return 7;
    default:
      return null;
  }
}, gi = (e, t, n, r) => {
  const a = n && Dn(e, t, r) || 0, i = e / t, o = e + a;
  return { installmentAmount: i, total: o, splitFee: a };
}, _i = ({
  installmentAmount: e,
  total: t,
  splitFee: n = 0
}, r, a, i, o) => {
  const s = re(
    e,
    a,
    i,
    o
  ), l = re(
    t,
    a,
    i,
    o
  );
  let u;
  return r && (u = re(
    n,
    a,
    i,
    o
  )), {
    installmentAmount: s,
    total: l,
    splitFee: u
  };
}, yi = (e, t) => {
  const n = pi(e.frequencyType);
  return n !== null ? n * (e.number * t) : 0;
};
var bi = /* @__PURE__ */ b('<svg viewBox="0 5 132 25"fill=none xmlns=http://www.w3.org/2000/svg role=img aria-label=scalapay><path fill-rule=evenodd clip-rule=evenodd d="M0.256527 10.5036C-0.0990205 10.0963 -0.0832167 9.48709 0.292984 9.0984L4.2983 4.96013C4.71179 4.53291 5.40037 4.53291 5.81386 4.96013L8.87503 8.12292C9.28852 8.55014 9.9771 8.55014 10.3906 8.12292L13.3641 5.0507C13.7776 4.62348 14.4662 4.62348 14.8797 5.0507L18.8708 9.1743C19.2468 9.56281 19.2628 10.1716 18.9077 10.579L10.4151 20.3224C9.99624 20.8029 9.24538 20.8032 8.8262 20.3229L0.256527 10.5036Z"fill=white>'), wi = /* @__PURE__ */ b('<svg viewBox="0 1 82 16"fill=none xmlns=http://www.w3.org/2000/svg role=img aria-label=scalapay><g><path d="M72 0H9C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18H72C76.9706 18 81 13.9706 81 9C81 4.02944 76.9706 0 72 0Z"fill=#030402></path><path d="M10.3022 13.3789C10.149 13.3789 10.0086 13.3278 9.90643 13.2257C9.86813 13.1874 9.82983 13.1491 9.79153 13.098C8.31068 11.4129 6.8426 9.71503 5.36174 8.02992C5.32345 7.99163 5.28515 7.95333 5.24685 7.90227C5.09366 7.68524 5.09366 7.41716 5.24685 7.2129C5.28515 7.17461 5.32345 7.13631 5.36174 7.08524C6.01281 6.40865 6.67664 5.73205 7.34047 5.04269C7.37877 5.00439 7.41706 4.96609 7.45536 4.9278C7.67238 4.73631 7.97877 4.73631 8.19579 4.9278C8.24685 4.97886 8.29791 5.02992 8.34898 5.08099C8.80855 5.55333 9.28089 6.03843 9.74047 6.51078C9.79153 6.56184 9.8426 6.6129 9.89366 6.66397C9.95749 6.7278 10.0469 6.77886 10.149 6.79163C10.3405 6.84269 10.4937 6.79163 10.6469 6.67673C10.6979 6.62567 10.749 6.57461 10.8 6.52354C11.2469 6.06397 11.7064 5.59163 12.1532 5.11929C12.2043 5.06822 12.2554 5.01716 12.3064 4.96609C12.5234 4.76184 12.8426 4.76184 13.0724 4.96609C13.1107 5.00439 13.149 5.04269 13.1873 5.08099C13.8383 5.75758 14.4894 6.43418 15.1405 7.09801C15.166 7.12354 15.1915 7.16184 15.2171 7.18737C15.4086 7.40439 15.4341 7.69801 15.2426 7.94056C15.2171 7.97886 15.1788 8.01716 15.1532 8.05546C13.6979 9.71503 12.2554 11.3746 10.8 13.0342C10.749 13.0852 10.7107 13.1491 10.6596 13.2001C10.5703 13.315 10.4298 13.3533 10.2894 13.3661L10.3022 13.3789Z"fill=#F7CBCF></path><path d="M52.4299 10.5702V5.78299C52.4299 5.70639 52.4299 5.61703 52.4299 5.54043C52.4299 5.5149 52.4682 5.4766 52.4938 5.4766C52.5321 5.4766 52.5704 5.4766 52.6087 5.4766H53.9363C53.9363 5.4766 53.9874 5.4766 54.0129 5.4766C54.0895 5.4766 54.115 5.50214 54.1278 5.57873C54.1278 5.65533 54.1278 5.71916 54.1278 5.79575C54.1278 5.84682 54.1278 5.88511 54.1278 5.93618C54.1278 5.94894 54.1661 5.97448 54.1916 5.96171C54.2555 5.92341 54.3065 5.88511 54.3704 5.83405C54.8172 5.54043 55.3023 5.37448 55.8384 5.33618C56.9874 5.27235 57.8938 5.73192 58.5831 6.63831C58.9023 7.05958 59.1065 7.54469 59.2087 8.05533C59.2725 8.34894 59.3108 8.65533 59.298 8.96171C59.2853 9.61277 59.1321 10.2128 58.8129 10.7745C58.315 11.6426 57.5746 12.1532 56.6044 12.3702C56.2597 12.4468 55.9023 12.4468 55.5576 12.4085C55.1746 12.3575 54.8172 12.217 54.4853 12.0128C54.4214 11.9745 54.3576 11.9234 54.281 11.8851C54.2555 11.8723 54.2172 11.8851 54.2172 11.9234C54.2172 12 54.2172 12.0894 54.2172 12.166V15.5362C54.2172 15.6638 54.2044 15.6894 54.064 15.6894H52.5704C52.481 15.6894 52.4555 15.6638 52.4427 15.5745C52.4427 15.5234 52.4427 15.4723 52.4427 15.4341V15.166C52.4427 13.6341 52.4427 12.1021 52.4427 10.5702H52.4299ZM54.1916 8.89788V9.80426C54.1916 9.88086 54.2172 9.94469 54.2555 9.99575C54.4214 10.2128 54.6257 10.3915 54.881 10.5192C55.3278 10.7489 55.8001 10.8128 56.2725 10.6723C56.7959 10.5192 57.1533 10.1745 57.3704 9.66384C57.4852 9.38299 57.5363 9.0766 57.5108 8.77022C57.498 8.38724 57.3831 8.04256 57.1789 7.73618C56.9363 7.37873 56.6044 7.13618 56.1704 7.04682C55.9406 6.99575 55.7108 6.99575 55.481 7.04682C54.9831 7.13618 54.5874 7.37873 54.2682 7.76171C54.2172 7.82554 54.1916 7.88937 54.1916 7.97873C54.1916 8.28511 54.1916 8.5915 54.1916 8.89788Z"fill=#F7CBCF></path><path d="M50.3872 8.89802V12.0257C50.3872 12.3193 50.4128 12.3065 50.1191 12.3065H48.8681C48.7021 12.3065 48.6894 12.2938 48.6894 12.1278C48.6894 12.0257 48.6894 11.9363 48.6894 11.847C48.6894 11.847 48.6638 11.8214 48.6511 11.8214C48.6383 11.8214 48.6255 11.8214 48.6128 11.8342C48.5745 11.8597 48.5489 11.8853 48.5106 11.898C48.0128 12.2682 47.4511 12.4342 46.8255 12.4342C45.8042 12.4342 44.7191 11.898 44.1064 10.8895C43.8128 10.4044 43.634 9.881 43.5702 9.30654C43.4936 8.65547 43.5702 8.02994 43.8255 7.41717C44.0553 6.84271 44.4128 6.34483 44.8979 5.96185C45.3191 5.62994 45.8042 5.41292 46.3404 5.34909C47.1191 5.24696 47.8596 5.38739 48.5106 5.85973C48.5617 5.89803 48.6 5.92356 48.6511 5.94909C48.6511 5.94909 48.6766 5.94909 48.6894 5.93632C48.6894 5.93632 48.7021 5.91079 48.7021 5.89802C48.7021 5.8342 48.7021 5.77037 48.7021 5.70654C48.7021 5.47675 48.7021 5.47675 48.9191 5.47675H50.1702C50.1702 5.47675 50.2851 5.47675 50.3362 5.48951C50.3489 5.48951 50.3745 5.51505 50.3872 5.54058C50.3872 5.56611 50.3872 5.59164 50.3872 5.60441V5.87249C50.3872 6.86824 50.3872 7.87675 50.3872 8.89802ZM48.6255 8.89802C48.6255 8.59164 48.6255 8.28526 48.6255 7.99164C48.6255 7.90228 48.6 7.83845 48.5489 7.77462C48.2808 7.45547 47.9617 7.23845 47.5659 7.11079C47.2723 7.02143 46.9659 6.9959 46.6596 7.05973C46.2255 7.14909 45.8808 7.39164 45.6383 7.76185C45.4723 8.00441 45.3702 8.27249 45.3319 8.56611C45.2681 9.00015 45.3064 9.40866 45.4979 9.80441C45.7021 10.2257 46.0213 10.5193 46.4681 10.6725C46.6723 10.7491 46.8894 10.7619 47.1064 10.7619C47.7064 10.7363 48.1787 10.481 48.5489 10.0214C48.6 9.9576 48.6128 9.89377 48.6128 9.82994C48.6128 9.52356 48.6128 9.21717 48.6128 8.91079L48.6255 8.89802Z"fill=#F7CBCF></path><path d="M67.2384 8.88526V11.9874C67.2384 12.064 67.2384 12.1278 67.2384 12.2044C67.2384 12.2682 67.2129 12.2938 67.1363 12.3065C67.1108 12.3065 67.0852 12.3065 67.0597 12.3065H65.7065C65.7065 12.3065 65.6554 12.3065 65.6299 12.3065C65.5661 12.3065 65.5405 12.2682 65.5405 12.2172C65.5405 12.115 65.5405 12.0129 65.5405 11.898C65.5405 11.8725 65.5405 11.847 65.5405 11.8342C65.5405 11.8342 65.515 11.8214 65.5022 11.8214C65.4639 11.847 65.4256 11.8725 65.3746 11.898C65.1959 12.0257 65.0171 12.1406 64.8129 12.2299C64.4937 12.3576 64.1746 12.4342 63.8299 12.447C62.8597 12.4725 62.0171 12.1406 61.3405 11.4385C60.9576 11.0427 60.7022 10.5704 60.549 10.0597C60.3959 9.54909 60.3448 9.03845 60.3959 8.51505C60.4597 7.92781 60.6256 7.36611 60.9448 6.86824C61.2256 6.42143 61.5959 6.05122 62.0427 5.78313C62.4895 5.51505 62.9746 5.37462 63.498 5.34909C64.0086 5.33633 64.481 5.42569 64.9405 5.64271C65.081 5.70654 65.2086 5.78313 65.3363 5.8725C65.3873 5.91079 65.4256 5.93633 65.4767 5.96186C65.4895 5.96186 65.5278 5.96186 65.5405 5.93633C65.5405 5.91079 65.5405 5.8725 65.5405 5.84696C65.5405 5.7576 65.5405 5.66824 65.5405 5.57888C65.5405 5.51505 65.5661 5.48952 65.6299 5.48952C65.6682 5.48952 65.6937 5.48952 65.732 5.48952H67.0597C67.0597 5.48952 67.149 5.48952 67.2001 5.50228C67.2001 5.50228 67.2256 5.51505 67.2384 5.54058C67.2384 5.56611 67.2384 5.59164 67.2384 5.60441C67.2384 5.68101 67.2384 5.74484 67.2384 5.82143C67.2384 6.84271 67.2384 7.87675 67.2384 8.89803V8.88526ZM65.4639 8.88526C65.4639 8.57888 65.4639 8.2725 65.4639 7.97888C65.4639 7.88952 65.4384 7.82569 65.3873 7.76186C65.0682 7.39164 64.6725 7.14909 64.1873 7.05973C63.8937 7.00867 63.6001 7.00867 63.3065 7.11079C62.8852 7.25122 62.5788 7.53207 62.3746 7.92781C62.0937 8.48952 62.0554 9.06398 62.2725 9.65122C62.4639 10.1491 62.8086 10.4938 63.3193 10.6725C63.5235 10.7363 63.7278 10.7619 63.932 10.7619C64.532 10.7363 65.0044 10.4938 65.3873 10.0342C65.4384 9.97037 65.4639 9.89377 65.4639 9.81718C65.4639 9.51079 65.4639 9.20441 65.4639 8.89803V8.88526Z"fill=#F7CBCF></path><path d="M38.2086 12.2682C38.2086 12.2682 38.183 12.2937 38.1575 12.2937C38.132 12.2937 38.0937 12.2937 38.0682 12.2937H36.6767C36.6767 12.2937 36.6128 12.2937 36.5873 12.281C36.5873 12.281 36.5618 12.2682 36.549 12.2554C36.549 12.2299 36.549 12.2044 36.5362 12.1916C36.5362 12.0895 36.5362 11.9874 36.5362 11.8725C36.5362 11.8469 36.5362 11.8214 36.4979 11.8214C36.4724 11.8214 36.4469 11.8214 36.4341 11.8342C36.4086 11.8469 36.383 11.8725 36.3575 11.898C35.8469 12.281 35.2852 12.4469 34.6469 12.4469C33.6384 12.4469 32.5533 11.9235 31.9277 10.9022C31.6086 10.3788 31.4299 9.82991 31.3916 9.22991C31.3405 8.62991 31.4171 8.04267 31.6341 7.48097C31.8511 6.93203 32.1703 6.45969 32.6171 6.07672C33.0639 5.69374 33.5745 5.45118 34.149 5.37459C34.9277 5.27246 35.6682 5.41288 36.3192 5.87246C36.3703 5.91076 36.4213 5.93629 36.4852 5.97459C36.4852 5.97459 36.5235 5.97459 36.5235 5.94906C36.5235 5.87246 36.5235 5.7831 36.5235 5.7065C36.5235 5.47671 36.5235 5.47671 36.7533 5.47671H38.0043C38.0043 5.47671 38.0809 5.47671 38.132 5.47671C38.1958 5.47671 38.2213 5.51501 38.2341 5.59161C38.2341 5.64267 38.2341 5.7065 38.2341 5.75757V12.0384C38.2341 12.1278 38.2341 12.2044 38.2086 12.281V12.2682ZM36.4596 8.88523C36.4596 8.59161 36.4596 8.31076 36.4596 8.01714C36.4596 7.88948 36.4213 7.80012 36.3448 7.71076C35.9107 7.23842 35.3873 6.99586 34.749 7.0214C34.3788 7.0214 34.0596 7.16182 33.7788 7.40437C33.5745 7.5831 33.4213 7.78735 33.3065 8.04267C33.0894 8.54054 33.0511 9.05118 33.2299 9.56182C33.4086 10.098 33.7533 10.4682 34.2894 10.6597C34.4937 10.7363 34.7107 10.7618 34.9277 10.7491C35.5022 10.7235 35.9745 10.4937 36.3448 10.0469C36.4086 9.97033 36.4469 9.88097 36.4469 9.76608C36.4469 9.47246 36.4469 9.16608 36.4469 8.87246L36.4596 8.88523Z"fill=#F7CBCF></path><path d="M70.3404 5.4894C70.3914 5.57876 70.4297 5.66812 70.468 5.74472C71.0297 6.93195 71.5914 8.11919 72.1531 9.30642C72.1914 9.37025 72.2042 9.45961 72.268 9.51067C72.3191 9.48514 72.3318 9.44685 72.3446 9.39578C72.4595 9.14046 72.5744 8.88514 72.6765 8.61706C73.0978 7.64685 73.5191 6.67663 73.9404 5.70642C73.9659 5.62982 74.0042 5.56599 74.0425 5.4894C74.0936 5.4894 74.1318 5.47663 74.1829 5.46387C74.3233 5.46387 74.451 5.46387 74.5914 5.46387H75.6765C75.6765 5.46387 75.7914 5.46387 75.8425 5.47663C75.8553 5.47663 75.868 5.4894 75.868 5.51493C75.868 5.56599 75.8425 5.60429 75.8297 5.64259C75.6382 6.06387 75.4595 6.48514 75.268 6.89365C74.0042 9.74046 72.7404 12.5745 71.4765 15.4213C71.4382 15.4979 71.4127 15.5873 71.3489 15.6639C71.3106 15.6639 71.2723 15.6639 71.234 15.6639H69.6765C69.6765 15.6639 69.6127 15.6639 69.5872 15.6639C69.5872 15.6639 69.5616 15.6383 69.5616 15.6256C69.5616 15.5873 69.5872 15.549 69.5999 15.5107C69.7021 15.2681 69.817 15.0256 69.9191 14.783C70.3531 13.8128 70.7872 12.8426 71.2212 11.8596C71.2467 11.7958 71.285 11.732 71.3106 11.6681C71.3361 11.6171 71.3361 11.5788 71.3106 11.5277C71.2723 11.4511 71.2467 11.3873 71.2084 11.3107C70.3148 9.44684 69.4212 7.58302 68.5276 5.71919C68.5021 5.65536 68.4638 5.59153 68.4382 5.5277C68.4382 5.51493 68.451 5.47663 68.4765 5.47663C68.5021 5.47663 68.5404 5.47663 68.5659 5.47663H70.1744C70.1744 5.47663 70.2638 5.47663 70.3276 5.47663L70.3404 5.4894Z"fill=#F7CBCF></path><path d="M29.2086 9.88099C29.2086 9.88099 29.2852 9.93205 29.3235 9.95758C29.7193 10.2767 30.1278 10.5703 30.5107 10.8895C30.5107 10.8895 30.5107 10.9023 30.5107 10.915C30.5107 10.9278 30.5107 10.9533 30.498 10.9661C30.1278 11.4767 29.6682 11.8852 29.0937 12.1406C28.7235 12.3065 28.3405 12.3959 27.932 12.4342C27.715 12.4469 27.498 12.4469 27.281 12.4342C25.8384 12.3576 24.5746 11.4001 24.1533 9.91929C24.0384 9.51077 23.9873 9.0895 24.0256 8.65546C24.1278 7.40439 24.7022 6.43418 25.7873 5.78312C26.298 5.4895 26.8469 5.33631 27.4341 5.32354C28.0852 5.29801 28.7107 5.4512 29.2852 5.77035C29.6554 5.9746 29.9873 6.25546 30.2554 6.58737C30.281 6.6129 30.2937 6.63843 30.3065 6.66397C30.3065 6.66397 30.3065 6.70226 30.3065 6.71503C30.281 6.74056 30.2554 6.77886 30.2299 6.80439C29.898 7.11077 29.5661 7.40439 29.2341 7.71077C29.2086 7.73631 29.1703 7.76184 29.1448 7.78737C29.1193 7.8129 29.081 7.80014 29.0554 7.78737C29.0171 7.74907 28.9788 7.69801 28.9405 7.65971C28.8129 7.51929 28.6597 7.39163 28.4937 7.2895C27.881 6.90652 27.0767 6.94482 26.5278 7.36609C26.1958 7.62141 25.9788 7.94056 25.8639 8.33631C25.749 8.74482 25.7618 9.16609 25.9022 9.56184C26.1576 10.3278 26.8214 10.698 27.4469 10.7363C28.098 10.7746 28.6086 10.5321 29.0427 10.0469C29.0937 9.99588 29.132 9.93205 29.1831 9.88099C29.1831 9.88099 29.1958 9.88099 29.2086 9.88099Z"fill=#F7CBCF></path><path d="M22.7362 6.03836C22.4553 6.47241 22.2128 6.90645 21.9192 7.31496C21.9192 7.31496 21.9064 7.31496 21.8809 7.31496C21.8298 7.27666 21.766 7.25113 21.7022 7.21283C21.4724 7.07241 21.2171 6.95751 20.949 6.90645C20.7064 6.85539 20.4511 6.86815 20.2085 6.93198C20.1192 6.95751 20.0298 6.99581 19.9532 7.05964C19.9022 7.09794 19.8511 7.149 19.8256 7.20007C19.7107 7.36602 19.7362 7.55751 19.8766 7.69794C19.9405 7.76177 20.0171 7.81283 20.0936 7.85113C20.2085 7.90219 20.3234 7.95326 20.4511 8.00432C20.6681 8.08092 20.8851 8.15751 21.1022 8.23411C21.3319 8.3107 21.5617 8.41283 21.7915 8.52773C21.9575 8.61709 22.1234 8.71921 22.2766 8.84687C22.6851 9.19156 22.9149 9.6256 22.9405 10.1618C22.9532 10.4171 22.9405 10.6724 22.8639 10.9277C22.749 11.2852 22.5319 11.5788 22.2383 11.8213C21.9447 12.0639 21.6 12.2299 21.2426 12.332C20.9107 12.4213 20.566 12.4596 20.2213 12.4469C19.4554 12.4213 18.7532 12.2043 18.1022 11.8213C17.9873 11.7575 17.8724 11.6682 17.7575 11.5916C17.6936 11.5533 17.6936 11.515 17.7319 11.4511C17.9745 11.0682 18.2171 10.6979 18.4724 10.3277C18.4724 10.315 18.4979 10.2894 18.5234 10.2767H18.5617C18.6 10.3022 18.6383 10.3277 18.6766 10.3533C19.1745 10.7235 19.7362 10.9022 20.3617 10.9022C20.4894 10.9022 20.6043 10.9022 20.7192 10.8511C20.783 10.8256 20.8468 10.8001 20.9107 10.7618C20.9617 10.7235 21.0128 10.6852 21.0511 10.6341C21.2171 10.4554 21.2171 10.2128 21.0511 10.0213C20.9873 9.94475 20.9107 9.89368 20.8341 9.84262C20.7319 9.77879 20.6171 9.72773 20.5149 9.68943C20.3107 9.61283 20.0936 9.53624 19.8894 9.44687C19.6851 9.37028 19.4809 9.29368 19.2894 9.20432C19.1362 9.14049 18.9958 9.0639 18.8681 8.97453C18.7405 8.88517 18.6 8.79581 18.4851 8.68092C18.2298 8.4256 18.0639 8.11922 18.0128 7.749C17.9234 7.08517 18.1149 6.5107 18.6 6.05113C18.8936 5.75751 19.2639 5.57879 19.6596 5.45113C19.8766 5.3873 20.1064 5.349 20.349 5.33624C21.0639 5.3107 21.7532 5.4639 22.3915 5.78305C22.4809 5.83411 22.5702 5.88517 22.6596 5.949C22.6851 5.96177 22.6979 5.9873 22.7362 6.0256V6.03836Z"fill=#F7CBCF></path><path d="M40.2639 7.30223V2.65542C40.2639 2.25968 40.2256 2.31074 40.6086 2.31074C40.9915 2.31074 41.3618 2.31074 41.7447 2.31074C41.8213 2.31074 41.8852 2.31074 41.9618 2.31074C42 2.31074 42.0256 2.34904 42.0383 2.38734C42.0383 2.45117 42.0383 2.515 42.0383 2.57883V12.0256C42.0383 12.0895 42.0383 12.1533 42.0383 12.2171C42.0383 12.2427 42.0001 12.281 41.9745 12.281C41.949 12.281 41.9107 12.281 41.8852 12.281H40.4426C40.4426 12.281 40.3788 12.281 40.3532 12.281C40.3277 12.281 40.2894 12.2427 40.2894 12.2171C40.2894 12.1916 40.2894 12.1661 40.2894 12.1405V11.9235C40.2894 10.3788 40.2894 8.83415 40.2894 7.28947L40.2639 7.30223Z"fill=#F7CBCF>'), vi = /* @__PURE__ */ b('<svg viewBox="0 0 88 16"fill=none xmlns=http://www.w3.org/2000/svg data-testid=scalapay-logo-black role=img aria-label=scalapay><path fill-rule=evenodd clip-rule=evenodd d="M0.171018 6.72233C-0.0660137 6.4616 -0.0554778 6.07174 0.195322 5.82298L2.86553 3.17448C3.14119 2.90106 3.60024 2.90106 3.87591 3.17448L5.91669 5.19867C6.19235 5.47209 6.6514 5.47209 6.92706 5.19867L8.9094 3.23245C9.18506 2.95903 9.64411 2.95903 9.91978 3.23245L12.5805 5.87155C12.8312 6.1202 12.8419 6.50984 12.6051 6.77059L6.94341 13.0063C6.66416 13.3139 6.16359 13.314 5.88413 13.0066L0.171018 6.72233ZM15.5899 11.0316L16.6542 9.46526C17.2118 9.97053 18.0734 10.2737 18.9012 10.2737C19.4925 10.2737 19.9487 9.98737 19.9487 9.58316C19.9487 8.35368 15.9785 8.79158 15.9785 6.16421C15.9785 4.59789 17.499 3.62105 19.1208 3.62105C20.1852 3.62105 21.3509 4.02526 21.8916 4.44632L20.861 6.02947C20.4386 5.72632 19.8811 5.47368 19.2898 5.47368C18.6816 5.47368 18.1748 5.70947 18.1748 6.13053C18.1748 7.19158 22.145 6.77053 22.145 9.6C22.145 11.1663 20.6076 12.1263 18.8843 12.1263C17.7524 12.1263 16.5529 11.7389 15.5899 11.0316ZM29.9165 9.02737L31.6059 10.2905C30.6429 11.5705 29.4265 12.1263 27.8891 12.1263C25.3549 12.1263 23.4965 10.24 23.4965 7.8821C23.4965 5.50737 25.4056 3.62105 27.906 3.62105C29.3252 3.62105 30.5923 4.27789 31.3525 5.25474L29.7982 6.61895C29.359 6.04632 28.7001 5.64211 27.906 5.64211C26.6389 5.64211 25.6928 6.63579 25.6928 7.8821C25.6928 9.1621 26.622 10.1053 27.9567 10.1053C28.8521 10.1053 29.5617 9.56632 29.9165 9.02737ZM38.9551 9.09474V6.65263C38.4989 6.04632 37.7724 5.64211 36.9277 5.64211C35.6437 5.64211 34.8159 6.70316 34.8159 7.8821C34.8159 9.1621 35.7451 10.1053 36.9784 10.1053C37.8062 10.1053 38.5327 9.70105 38.9551 9.09474ZM41.1514 3.78947V11.9579H39.0395V11.3011C38.3638 11.8737 37.5866 12.1263 36.7588 12.1263C35.5424 12.1263 34.3935 11.5874 33.6671 10.7453C33.0251 10.0042 32.6196 8.99368 32.6196 7.8821C32.6196 5.47368 34.4104 3.62105 36.6405 3.62105C37.5697 3.62105 38.3975 3.92421 39.0395 4.44632V3.78947H41.1514ZM45.8818 0V11.9579H43.6855V0H45.8818ZM54.0757 9.09474V6.65263C53.6196 6.04632 52.8931 5.64211 52.0484 5.64211C50.7644 5.64211 49.9365 6.70316 49.9365 7.8821C49.9365 9.1621 50.8657 10.1053 52.099 10.1053C52.9269 10.1053 53.6533 9.70105 54.0757 9.09474ZM56.272 3.78947V11.9579H54.1602V11.3011C53.4844 11.8737 52.7072 12.1263 51.8794 12.1263C50.663 12.1263 49.5142 11.5874 48.7877 10.7453C48.1457 10.0042 47.7402 8.99368 47.7402 7.8821C47.7402 5.47368 49.5311 3.62105 51.7612 3.62105C52.6904 3.62105 53.5182 3.92421 54.1602 4.44632V3.78947H56.272ZM58.8062 16V3.78947H60.918V4.44632C61.56 3.92421 62.3878 3.62105 63.317 3.62105C65.5471 3.62105 67.3379 5.47368 67.3379 7.8821C67.3379 8.99368 66.9494 10.0042 66.3074 10.7453C65.5809 11.5874 64.4152 12.1263 63.1988 12.1263C62.3709 12.1263 61.6614 11.8905 61.0025 11.3853V16H58.8062ZM61.0025 6.65263V9.09474C61.4248 9.70105 62.1513 10.1053 62.9791 10.1053C64.2124 10.1053 65.1416 9.1621 65.1416 7.8821C65.1416 6.70316 64.3138 5.64211 63.0298 5.64211C62.1851 5.64211 61.4586 6.04632 61.0025 6.65263ZM75.025 9.09474V6.65263C74.5688 6.04632 73.8424 5.64211 72.9976 5.64211C71.7136 5.64211 70.8858 6.70316 70.8858 7.8821C70.8858 9.1621 71.815 10.1053 73.0483 10.1053C73.8761 10.1053 74.6026 9.70105 75.025 9.09474ZM77.2213 3.78947V11.9579H75.1094V11.3011C74.4337 11.8737 73.6565 12.1263 72.8287 12.1263C71.6123 12.1263 70.4634 11.5874 69.737 10.7453C69.095 10.0042 68.6895 8.99368 68.6895 7.8821C68.6895 5.47368 70.4803 3.62105 72.7104 3.62105C73.6396 3.62105 74.4675 3.92421 75.1094 4.44632V3.78947H77.2213ZM82.3572 16H80.0596L82.3234 11.1326L78.6573 3.78947H81.0732L83.4723 8.69053L85.6854 3.78947H88L82.3572 16Z"fill=#272727>');
const jn = ({
  type: e = "black",
  width: t = 81,
  height: n = 16,
  scalePercent: r = 100,
  className: a
}) => {
  let i = 1;
  r && r >= li && r <= ci && (i = r / 100);
  const o = () => t * i, s = () => n * i;
  return P(() => {
    switch (e) {
      case "white":
        return (() => {
          var u = bi();
          return D((c) => {
            var d = o(), h = s();
            return d !== c.e && L(u, "width", c.e = d), h !== c.t && L(u, "height", c.t = h), c;
          }, {
            e: void 0,
            t: void 0
          }), u;
        })();
      case "black":
        return (() => {
          var u = wi();
          return D((c) => {
            var d = o(), h = s();
            return d !== c.e && L(u, "width", c.e = d), h !== c.t && L(u, "height", c.t = h), c;
          }, {
            e: void 0,
            t: void 0
          }), u;
        })();
      case "white-pill":
        return (() => {
          var u = vi();
          return L(u, "width", t), L(u, "height", n), L(u, "class", a), u;
        })();
      default:
        return null;
    }
  });
};
var Ci = /* @__PURE__ */ b('<svg xmlns=http://www.w3.org/2000/svg fill=black data-testid=close-icon role=img aria-label=close><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">');
const xi = ({
  width: e = 44,
  height: t = 44,
  className: n
}) => {
  const r = `0 0 ${e} ${t}`;
  return (() => {
    var a = Ci();
    return L(a, "viewBox", r), L(a, "height", t), L(a, "width", e), L(a, "class", n), a;
  })();
};
var Ei = /* @__PURE__ */ b("<style>");
const Si = (e) => {
  const [t, n] = F(null);
  let r = null;
  return tt(() => {
    var a;
    if (e.isOpen) {
      r = document.createElement(e.tagName);
      const i = r.attachShadow({
        mode: "open"
      });
      document.body.appendChild(r), n(i), (a = e.onMountCallback) == null || a.call(e);
    }
  }), be(() => {
    var a;
    (a = e.onUnmountCallback) == null || a.call(e), r == null || r.remove(), r = null;
  }), m(q, {
    get when() {
      return t();
    },
    get children() {
      return m(Cr, {
        get mount() {
          return t() ?? void 0;
        },
        get children() {
          return [(() => {
            var a = Ei();
            return _(a, gn), a;
          })(), P(() => e.children)];
        }
      });
    }
  });
};
var Ai = /* @__PURE__ */ b('<div class="fixed inset-0 bg-black/50 z-[2147483646]">'), ki = /* @__PURE__ */ b('<dialog><section class="flex flex-col mx-auto self-center w-full min-[450px]:max-w-sp-modal"><div class="flex flex-col p-2 pb-16 gap-6 bg-sp-primary-pink rounded-3xl rounded-b-xl overflow-y-auto"><header class="text-gray-900 gap-4 flex flex-col items-center pt-6 pb-3 relative mb-4"><button class="absolute top-0 right-0 bg-transparent border-none flex justify-center items-center p-1 rounded-full hover:bg-sp-pink-1"tabindex=0></button><h3 class="font-semibold text-[19px] leading-8 text-center m-0 px-1"></h3></header></div><div class="flex flex-col p-4 pb-0 gap-6 max-h-[calc(70vh-2rem)] overflow-y-auto -translate-y-16"><p class="flex flex-col gap-4 m-0"></p><footer class="flex flex-col gap-9 text-sm font-medium text-gray-500 text-left"><p class="ml-5 text-[11px]"></p><button class="bg-sp-primary-blue text-white max-w-fit border-none flex justify-center items-center cursor-pointer transition-colors duration-200 px-20 py-2.5 min-w-[100px] rounded-full self-center leading-[21px] text-sm font-semibold hover:bg-sp-blue-1"tabindex=0>');
const Pi = (e) => {
  let t;
  const n = (r) => {
    r.composedPath().includes(t) || e.onClose(r);
  };
  return tt(() => {
    document.addEventListener("mousedown", n);
  }), be(() => document.removeEventListener("mousedown", n)), m(Si, {
    get isOpen() {
      return e.isOpen;
    },
    tagName: "scalapay-modal",
    get children() {
      return [Ai(), (() => {
        var r = ki(), a = r.firstChild, i = a.firstChild, o = i.firstChild, s = o.firstChild, l = s.nextSibling, u = i.nextSibling, c = u.firstChild, d = c.nextSibling, h = d.firstChild, y = h.nextSibling;
        return yr((w) => t = w, r), _(o, m(jn, {
          className: "h-10 w-auto bg-white px-4 py-2 rounded-3xl",
          type: "white-pill",
          width: 123,
          height: 25
        }), s), Ot(s, "click", e.onClose), _(s, m(xi, {
          height: 24,
          width: 24
        })), _(l, () => e.title), _(c, () => e.children), _(h, () => e.footer), Ot(y, "click", e.onClose), _(y, () => H(e.locale || le, "modal:close_button")), D((w) => {
          var p = `fixed z-[2147483647] overflow-visible p-0 font-sans text-sm font-normal text-gray-700 text-center bg-sp-white-1 border-none rounded-3xl mx-auto my-auto max-h-[95vh] w-full min-[450px]:max-w-sp-modal top-[5vh] ${e.isOpen ? "transition-none" : "transition-opacity"} antialiased`, C = e.isOpen;
          return p !== w.e && K(r, w.e = p), C !== w.t && (r.open = w.t = C), w;
        }, {
          e: void 0,
          t: void 0
        }), r;
      })()];
    }
  });
};
hn(["click"]);
var Hi = /* @__PURE__ */ b("<span>");
const z = (e) => (() => {
  var t = Hi();
  return D((n) => {
    var r = e.testId, a = e.className, i = e.children;
    return r !== n.e && L(t, "data-testid", n.e = r), a !== n.t && K(t, n.t = a), i !== n.a && (t.innerHTML = n.a = i), n;
  }, {
    e: void 0,
    t: void 0,
    a: void 0
  }), t;
})(), Ti = `.sp_installment__container {
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
var Li = /* @__PURE__ */ b("<style>"), Ii = /* @__PURE__ */ b("<section class=sp_installment__container><section class=sp_installment__timeline-container><div class=sp_installment__timeline>"), Oi = /* @__PURE__ */ b("<div class=sp_installment__timeline-item><div></div><div class=sp_installment__timeline-parent><div class=sp_installment__timeline-content><div></div><div>");
const Mi = (e, t, n) => {
  const {
    frequency: r
  } = e;
  return Array.from({
    length: e.numberOfInstallments ?? 0
  }, (a, i) => i).map((a) => {
    const i = r ? yi(r, a) : 0, o = a === 0 ? H(n, "installment_summary:pay_now") : `${H(n, "installment_summary:days-prefix")} ${i} ${H(n, "installment_summary:days")}`;
    return {
      step: a + 1,
      dueDate: o,
      installmentAmount: t
    };
  });
}, Vi = (e) => {
  const t = J({
    splitFee: 0
  }, e), n = P(() => Mi(e.product, e.installmentAmount, e.locale)), r = (i) => re(i === 0 ? e.installmentAmount + t.splitFee : e.installmentAmount, e.locale, e.currencyDisplay, e.currencyPosition), a = () => t.splitFee > 0 ? re(t.splitFee, t.locale, t.currencyDisplay, t.currencyPosition) : "";
  return [(() => {
    var i = Li();
    return _(i, Ti), i;
  })(), (() => {
    var i = Ii(), o = i.firstChild, s = o.firstChild;
    return _(i, (() => {
      var l = P(() => t.splitFee > 0);
      return () => l() && m(z, {
        testId: "split-fee",
        className: "sp_installment__service-fee",
        get children() {
          return H(t.locale, "installment_summary:service_fee", {
            fee: a()
          });
        }
      });
    })(), o), _(s, m(nt, {
      get each() {
        return n();
      },
      children: (l, u) => (() => {
        var c = Oi(), d = c.firstChild, h = d.nextSibling, y = h.firstChild, w = y.firstChild, p = w.nextSibling;
        return _(d, () => l.step), _(w, () => r(u()), null), _(w, () => t.splitFee > 0 && l.step === 1 ? "*" : "", null), _(p, () => l.dueDate), D((C) => {
          var v = `sp_installment__timeline-point ${u() === 0 ? "sp_installment__highlight" : ""}`, A = `sp_installment__installment-amount ${u() === 0 ? "sp_installment__today" : ""}`, x = `sp_installment__due_date ${u() === 0 ? "sp_installment__today" : ""}`;
          return v !== C.e && K(d, C.e = v), A !== C.t && K(w, C.t = A), x !== C.a && K(p, C.a = x), C;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        }), c;
      })()
    })), i;
  })()];
}, Fi = `.sp_info_card {
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
`;
var Ni = /* @__PURE__ */ b("<style>"), Ri = /* @__PURE__ */ b("<section class=sp_info_card><h3 class=sp_info_card__heading></h3><ul class=sp_info_card__content>"), Bi = /* @__PURE__ */ b("<li class=sp_info_card__content--li>");
const Wi = (e) => [(() => {
  var t = Ni();
  return _(t, Fi), t;
})(), (() => {
  var t = Ri(), n = t.firstChild, r = n.nextSibling;
  return _(n, () => e.title), _(r, m(nt, {
    get each() {
      return e.contents;
    },
    children: (a) => (() => {
      var i = Bi();
      return _(i, a), i;
    })()
  })), t;
})()], Ui = `summary {
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

.sp_summary_card__total {
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
var Zi = /* @__PURE__ */ b("<svg><rect x=0.285706 width=28.2857 height=18 rx=2.57143 fill=#1434CB></svg>", !1, !0, !1), Yi = /* @__PURE__ */ b('<svg><path d="M14.3317 5.89926L13.0019 12.1167H11.3933L12.7233 5.89926H14.3317ZM21.0989 9.91391L21.9455 7.57915L22.4327 9.91391H21.0989ZM22.8941 12.1167H24.3815L23.0821 5.89926H21.7101C21.4009 5.89926 21.1403 6.07853 21.0249 6.35499L18.6114 12.1167H20.3007L20.636 11.1881H22.6993L22.8941 12.1167ZM18.6952 10.0869C18.7022 8.44602 16.4268 8.35512 16.4421 7.62194C16.447 7.39918 16.6595 7.16187 17.1241 7.10118C17.3544 7.07153 17.99 7.04748 18.7104 7.37946L18.9922 6.06049C18.6052 5.92051 18.1073 5.78571 17.4877 5.78571C15.8975 5.78571 14.779 6.63034 14.77 7.84079C14.7598 8.7359 15.569 9.23499 16.1775 9.53313C16.8048 9.83784 17.015 10.0332 17.0119 10.3055C17.0076 10.7226 16.5117 10.9073 16.05 10.9143C15.2408 10.9269 14.7718 10.6956 14.398 10.5214L14.106 11.8844C14.4825 12.0567 15.1761 12.2066 15.8943 12.2143C17.5848 12.2143 18.6901 11.3796 18.6952 10.0869ZM12.0333 5.89926L9.42715 12.1167H7.72712L6.44451 7.15474C6.36676 6.84961 6.29894 6.73745 6.06247 6.60852C5.67567 6.39848 5.03716 6.20201 4.47571 6.07979L4.51374 5.89926H7.25069C7.59931 5.89926 7.91297 6.13125 7.99282 6.53287L8.67034 10.1309L10.3435 5.89926H12.0333Z"fill=white></svg>', !1, !0, !1), zi = /* @__PURE__ */ b("<svg><rect width=28.2857 height=18 rx=2.57143 fill=black></svg>", !1, !0, !1), Di = /* @__PURE__ */ b('<svg><path d="M16.13 5.46265H12.1567V12.5384H16.13V5.46265Z"fill=#FF5F00></svg>', !1, !0, !1), ji = /* @__PURE__ */ b('<svg><path d="M12.4086 9C12.4079 8.31855 12.5638 7.64589 12.8643 7.03294C13.1647 6.42 13.602 5.88282 14.1429 5.4621C13.4731 4.94031 12.6686 4.61581 11.8214 4.5257C10.9742 4.43559 10.1185 4.58351 9.35219 4.95254C8.58583 5.32157 7.93971 5.89683 7.48766 6.61256C7.03562 7.3283 6.7959 8.15563 6.7959 9C6.7959 9.84437 7.03562 10.6717 7.48766 11.3874C7.93971 12.1032 8.58583 12.6784 9.35219 13.0475C10.1185 13.4165 10.9742 13.5644 11.8214 13.4743C12.6686 13.3842 13.4731 13.0597 14.1429 12.5379C13.602 12.1172 13.1647 11.58 12.8643 10.9671C12.5638 10.3541 12.408 9.68145 12.4086 9Z"fill=#EB001B></svg>', !1, !0, !1), Gi = /* @__PURE__ */ b('<svg><path d="M21.4899 9C21.4899 9.84435 21.2502 10.6717 20.7982 11.3874C20.3462 12.1032 19.7001 12.6784 18.9337 13.0475C18.1674 13.4165 17.3117 13.5644 16.4646 13.4743C15.6174 13.3842 14.8129 13.0597 14.1431 12.5379C14.6835 12.1167 15.1204 11.5795 15.4209 10.9666C15.7213 10.3538 15.8774 9.68134 15.8774 9C15.8774 8.31866 15.7213 7.64621 15.4209 7.03336C15.1204 6.42051 14.6835 5.88325 14.1431 5.4621C14.8129 4.9403 15.6174 4.61581 16.4646 4.5257C17.3117 4.43559 18.1674 4.58351 18.9337 4.95254C19.7001 5.32158 20.3462 5.89684 20.7982 6.61258C21.2502 7.32831 21.4899 8.15564 21.4899 9Z"fill=#F79E1B></svg>', !1, !0, !1), qi = /* @__PURE__ */ b('<svg><path d="M21.0561 11.7897V11.6448H21.115V11.6153H20.9649V11.6448H21.0239V11.7897H21.0561ZM21.3475 11.7897V11.615H21.3015L21.2486 11.7351L21.1956 11.615H21.1496V11.7897H21.1821V11.6579L21.2317 11.7715H21.2654L21.315 11.6576V11.7897H21.3475Z"fill=#F79E1B></svg>', !1, !0, !1), Ki = /* @__PURE__ */ b('<svg><g clip-path=url(#clip0_1643_259)><rect x=0.351562 width=24.6757 height=16 rx=2.13952 fill=#006FCF></rect><path fill-rule=evenodd clip-rule=evenodd d="M25.2413 8.96802H23.9466C23.5558 8.96802 23.272 9.06034 23.071 9.20387V8.96802H21.1559C20.8497 8.96802 20.4902 9.04292 20.3202 9.20387V8.96802H16.9004V9.20387C16.6282 9.01017 16.169 8.96802 15.957 8.96802H13.7013V9.20387C13.486 8.99815 13.0071 8.96802 12.7153 8.96802H10.1907L9.61301 9.58482L9.07194 8.96802H5.30078V12.9981H9.00096L9.59624 12.3715L10.157 12.9981L12.4378 13.0001V12.052H12.662C12.9647 12.0567 13.3216 12.0446 13.6365 11.9103V12.998H15.5177V11.9476H15.6085C15.7243 11.9476 15.7357 11.9523 15.7357 12.0665V12.9979H21.4506C21.8134 12.9979 22.1927 12.9063 22.4027 12.74V12.9979H24.2155C24.5927 12.9979 24.9611 12.9457 25.2414 12.8121C25.2414 -9.23748 25.2413 18.2001 25.2413 8.96802Z"fill=white></path><path fill-rule=evenodd clip-rule=evenodd d="M1.54697 8.02725L1.81649 7.38589H2.41988L2.6887 8.02725H5.04057V7.53691L5.2505 8.02934H6.47142L6.68135 7.52959V8.02725H12.5262L12.5235 6.97445H12.6366C12.7158 6.97715 12.7389 6.98438 12.7389 7.11337V8.02725H15.7619V7.78217C16.0057 7.91107 16.3849 8.02725 16.884 8.02725H18.1558L18.4279 7.38589H19.0313L19.2975 8.02725H21.7482V7.41803L22.1194 8.02725H24.0833V4H22.1397V4.47562L21.8675 4H19.8732V4.47562L19.6232 4H16.9294C16.4784 4 16.0821 4.0621 15.7619 4.23516V4H13.9029V4.23516C13.6991 4.05679 13.4215 4 13.1127 4H6.32108L5.86538 5.04017L5.3974 4H3.25819V4.47562L3.02319 4H1.19879L0.351562 5.91477V8.02725H1.54697Z"fill=white></path><path fill-rule=evenodd clip-rule=evenodd d="M12.6941 11.4577C13.3056 11.4577 13.9124 11.2921 13.9124 10.4898C13.9124 9.6899 13.2886 9.53827 12.7334 9.53827H10.498L9.60809 10.485L8.74735 9.53827H5.93359V12.4265H8.70471L9.59996 11.4704L10.4614 12.4265H11.8212V11.4577H12.6941ZM11.8212 10.8712H12.7253C12.9941 10.8712 13.1613 10.7396 13.1613 10.4898C13.1613 10.2372 12.986 10.1357 12.7334 10.1357H11.8212V10.8712ZM8.35053 11.8246H6.63048V11.25H8.16638V10.6607H6.63048V10.1356H8.38443L9.14965 10.9773L8.35053 11.8246ZM11.1244 12.1638L10.0503 10.9874L11.1244 9.84826V12.1638Z"fill=#006FCF></path><path fill-rule=evenodd clip-rule=evenodd d="M16.9043 11.3268C16.8446 11.2426 16.7173 11.141 16.5616 11.0843C16.7457 11.0122 17.0574 10.7769 17.0574 10.3159C17.0574 9.98646 16.9186 9.80617 16.6978 9.67457C16.4682 9.55368 16.2102 9.53827 15.856 9.53827H14.2409V12.4265H14.9438V11.3716H15.6915C15.9467 11.3716 16.1025 11.3963 16.2047 11.4998C16.3218 11.6207 16.3198 11.8413 16.3182 12.0108C16.318 12.0296 16.3178 12.0478 16.3178 12.0651V12.4265H17.0202V11.8539C17.0174 11.5994 17.0031 11.4678 16.9043 11.3268ZM16.1391 10.7249C16.0455 10.7796 15.9298 10.7843 15.7936 10.7843H14.9438V10.1357H15.8052C15.9298 10.1357 16.0544 10.1383 16.1391 10.1878C16.2297 10.2346 16.2839 10.3241 16.2839 10.4476C16.2839 10.5712 16.2297 10.6708 16.1391 10.7249Z"fill=#006FCF></path><path d="M22.4518 10.9032C22.588 11.0423 22.661 11.2179 22.661 11.5151C22.661 12.1365 22.2676 12.4265 21.562 12.4265H20.1994V11.8072H21.5566C21.6893 11.8072 21.7834 11.7898 21.8423 11.7357C21.8904 11.691 21.925 11.6261 21.925 11.5473C21.925 11.4631 21.8876 11.3963 21.8396 11.3563C21.7861 11.3122 21.7123 11.2922 21.5905 11.2922C21.5476 11.2907 21.5041 11.2896 21.4601 11.2884C20.8324 11.2716 20.1169 11.2524 20.1169 10.3982C20.1169 9.97932 20.3837 9.53836 21.1171 9.53836H22.5196V10.1531H21.2363C21.1091 10.1531 21.0264 10.1578 20.956 10.2052C20.8794 10.252 20.8509 10.3214 20.8509 10.413C20.8509 10.522 20.916 10.5961 21.004 10.6282C21.0778 10.6535 21.1571 10.6609 21.2763 10.6609L21.6529 10.6709C22.0327 10.6801 22.2934 10.7449 22.4518 10.9032Z"fill=#006FCF></path><path d="M25.2424 10.1529H23.9674C23.8401 10.1529 23.7555 10.1576 23.6843 10.2051C23.6105 10.2518 23.5821 10.3212 23.5821 10.4129C23.5821 10.5218 23.6444 10.5959 23.7351 10.628C23.8089 10.6533 23.8881 10.6607 24.0047 10.6607L24.3838 10.6708C24.7664 10.6801 25.0218 10.745 25.1776 10.9032C25.2015 10.9218 25.2173 10.9423 25.2334 10.9632L25.2378 10.9688L25.2406 10.9724L25.2424 10.9747V12.0571C25.0725 12.3022 24.7414 12.4265 24.2931 12.4265H22.942V11.8072H24.2876C24.4211 11.8072 24.5145 11.7898 24.5707 11.7357C24.6195 11.691 24.6534 11.6261 24.6534 11.5473C24.6534 11.4632 24.6195 11.3964 24.568 11.3563C24.5172 11.3122 24.4433 11.2922 24.3215 11.2922C24.2785 11.2907 24.2349 11.2896 24.1908 11.2884C23.5609 11.2716 22.8451 11.2524 22.8451 10.3982C22.8451 9.97932 23.1147 9.53836 23.8489 9.53836H25.2424L25.2424 10.1529Z"fill=#006FCF></path><path d="M17.4454 9.53827H19.7803V10.1356H18.1421V10.6607H19.7403V11.2499H18.1421V11.8246L19.7803 11.8272V12.4265H17.4454V9.53827Z"fill=#006FCF></path><path fill-rule=evenodd clip-rule=evenodd d="M2.59579 6.20979L2.11696 5.05866L1.64086 6.20979H2.59579ZM13.1444 5.75144C13.0483 5.80901 12.9346 5.81093 12.7984 5.81093H11.9485V5.16956H12.8099C12.9318 5.16956 13.059 5.17496 13.1417 5.22164C13.2324 5.26371 13.2886 5.35324 13.2886 5.47692C13.2886 5.60312 13.2352 5.70467 13.1444 5.75144ZM19.2073 6.20979L18.7232 5.05866L18.2417 6.20979H19.2073ZM7.90567 7.45577H7.18848L7.18583 5.19427L6.1714 7.45577H5.55715L4.54007 5.19227V7.45577H3.11717L2.84836 6.81171H1.39173L1.12018 7.45577H0.360352L1.61314 4.56824H2.65255L3.84239 7.30214V4.56824H4.98421L5.89977 6.52708L6.74081 4.56824H7.90558V7.45577H7.90567ZM10.7641 7.45577H8.42707V4.56824H10.7641V5.16954H9.12669V5.69002H10.7248V6.28191H9.12669V6.85856H10.7641V7.45577ZM14.0593 5.3459C14.0593 5.80629 13.7478 6.04414 13.5663 6.11556C13.7194 6.17304 13.8501 6.27459 13.9124 6.35873C14.0111 6.50235 14.0282 6.63064 14.0282 6.88852V7.45577H13.3226L13.3199 7.09163C13.3199 6.91787 13.3368 6.668 13.2095 6.52908C13.1072 6.42753 12.9514 6.4055 12.6996 6.4055H11.9486V7.45577H11.249V4.56824H12.8581C13.2156 4.56824 13.4791 4.57756 13.7052 4.70654C13.9266 4.83553 14.0593 5.02383 14.0593 5.3459ZM15.1788 7.45577H14.465V4.56824H15.1788V7.45577ZM23.4602 7.45577H22.4688L21.1428 5.28851V7.45577H19.718L19.4458 6.81171H17.9925L17.7284 7.45577H16.9097C16.5697 7.45577 16.1391 7.38157 15.8953 7.13639C15.6495 6.89122 15.5215 6.55913 15.5215 6.03404C15.5215 5.60579 15.598 5.2143 15.8987 4.90494C16.1248 4.67449 16.479 4.56824 16.9611 4.56824H17.6384V5.18696H16.9753C16.72 5.18696 16.5759 5.22441 16.437 5.35801C16.3177 5.47959 16.2359 5.70944 16.2359 6.01209C16.2359 6.32145 16.2982 6.5445 16.4283 6.69021C16.536 6.80448 16.7317 6.83914 16.9158 6.83914H17.23L18.216 4.56832H19.2643L20.4487 7.29952V4.56832H21.5139L22.7437 6.57934V4.56832H23.4602V7.45577Z"fill=#006FCF></svg>', !1, !0, !1), Xi = /* @__PURE__ */ b("<svg><defs><clipPath id=clip0_1643_259><rect x=0.351562 width=24.6757 height=16 rx=2.13952 fill=white></svg>", !1, !0, !1), Ji = /* @__PURE__ */ b("<svg><rect x=0.571411 width=28.2857 height=18 rx=2.57143 fill=#F6E21E></svg>", !1, !0, !1), Qi = /* @__PURE__ */ b('<svg><path d="M11.242 6.62132C11.4284 6.3708 11.6745 6.16291 11.9801 5.99768C12.2857 5.82711 12.6198 5.74182 12.9824 5.74182C13.3139 5.74182 13.6066 5.81378 13.8604 5.9577C14.1194 6.09629 14.3188 6.29884 14.4587 6.56535C14.5986 6.82654 14.6685 7.1357 14.6685 7.49283C14.6685 7.64741 14.653 7.81264 14.6219 7.98854C14.5442 8.43096 14.3862 8.8254 14.1479 9.17187C13.9148 9.51834 13.6273 9.78752 13.2854 9.97941C12.9487 10.1713 12.5913 10.2673 12.2132 10.2673C11.8506 10.2673 11.545 10.1846 11.2963 10.0194C11.0529 9.84882 10.8768 9.63827 10.768 9.38775L10.2785 12.2741H9.57141L10.6747 5.81378H11.3818L11.242 6.62132ZM13.8993 7.98854C13.92 7.87661 13.9304 7.75401 13.9304 7.62075C13.9304 7.23164 13.819 6.92781 13.5962 6.70927C13.3735 6.4854 13.086 6.37346 12.7338 6.37346C12.4748 6.37346 12.2236 6.44009 11.9801 6.57335C11.7366 6.70128 11.5268 6.8905 11.3507 7.14103C11.1798 7.38622 11.0658 7.67139 11.0089 7.99654C10.9881 8.10848 10.9778 8.23107 10.9778 8.36433C10.9778 8.75344 11.0891 9.0626 11.3119 9.2918C11.5398 9.51568 11.8273 9.62761 12.1743 9.62761C12.4385 9.62761 12.6898 9.56365 12.928 9.43572C13.1715 9.30247 13.3787 9.11324 13.5496 8.86805C13.7257 8.61752 13.8423 8.32435 13.8993 7.98854Z"fill=#1434CB></svg>', !1, !0, !1), $i = /* @__PURE__ */ b('<svg><path d="M16.6948 6.40544C16.8709 6.20289 17.091 6.03499 17.3552 5.90173C17.6246 5.76314 17.9172 5.69385 18.2332 5.69385C18.5544 5.69385 18.8367 5.76581 19.0801 5.90973C19.3288 6.04831 19.5204 6.25086 19.6551 6.51738C19.7898 6.7839 19.8571 7.09572 19.8571 7.45285C19.8571 7.61809 19.8416 7.78866 19.8105 7.96456C19.7328 8.41763 19.5774 8.82007 19.3443 9.17187C19.1112 9.51834 18.8289 9.78752 18.4974 9.97941C18.1659 10.1713 17.8188 10.2673 17.4562 10.2673C17.1402 10.2673 16.8709 10.2006 16.6481 10.0674C16.4306 9.93411 16.2648 9.7662 16.1509 9.56365L15.6847 12.3061H14.5891L15.708 5.76581H16.8035L16.6948 6.40544ZM18.6994 7.96456C18.7149 7.85795 18.7227 7.76201 18.7227 7.67672C18.7227 7.36223 18.6347 7.11704 18.4585 6.94114C18.2824 6.76524 18.0571 6.67729 17.7825 6.67729C17.5857 6.67729 17.3915 6.73059 17.1998 6.8372C17.0081 6.93847 16.8424 7.08772 16.7025 7.28494C16.5627 7.48217 16.4694 7.71403 16.4228 7.98055C16.4021 8.11914 16.3917 8.22041 16.3917 8.28438C16.3917 8.59887 16.4798 8.84406 16.6559 9.01996C16.8372 9.19586 17.0625 9.28381 17.3319 9.28381C17.5339 9.28381 17.7307 9.23051 17.9224 9.1239C18.1141 9.01729 18.2798 8.86538 18.4197 8.66816C18.5595 8.47094 18.6528 8.2364 18.6994 7.96456Z"fill=#1434CB></svg>', !1, !0, !1), eo = /* @__PURE__ */ b("<svg><rect fill=#2d32aa height=18 rx=2.57143 width=28.2857 x=.857178></svg>", !1, !0, !1), to = /* @__PURE__ */ b('<svg><path d="m14.3253 6.42859c.9807 0 1.7689.63825 2.1192 1.54687.1225.30927.1923.65719.1923 1.02442l-3.3798.65722c.2101.5413.6836.8506 1.2089.8506.6653-.0001 1.0684-.3675 1.3135-.67677l.7529.67677c-.3327.4639-.9808 1.0827-2.0839 1.0635-1.436 0-2.417-1.0634-2.417-2.57132 0-1.54651.9981-2.57118 2.2939-2.57129zm-4.88572.01953c1.57592.00008 2.20602.71559 2.20602 2.2041v2.78418h-1.1377v-2.78418c0-.69587-.2979-1.1405-1.05075-1.14062-.6033 0-1.0032.18747-1.01562.19336v3.75004h-1.15625v-4.60063s1.10354-.40625 2.1543-.40625zm7.63572.11719c.4553 0 .9288.23171 1.209.63769l.5605.81153 1.0499-1.42969h1.3837l-1.7334 2.3584 1.8038 2.49316h-.6661c-.4551-.0001-.9279-.2123-1.208-.6182l-.6474-.88961-1.1211 1.50781h-1.3662l1.7861-2.45508-1.7334-2.41601zm5.6397 4.87109h-1.1211v-4.85254h1.1211zm-8.3545-3.94433c-.5954.00003-1.0679.40602-1.1905 1.14062l2.2764-.44531c-.1577-.44441-.5782-.69531-1.0859-.69531z"fill=#fff></svg>', !1, !0, !1), no = /* @__PURE__ */ b("<svg><rect x=0.571411 width=25 height=18 fill=url(#pattern0_2794_2326)></svg>", !1, !0, !1), ro = /* @__PURE__ */ b('<svg><defs><pattern id=pattern0_2794_2326 patternContentUnits=objectBoundingBox width=1 height=1><use href=#image0_2794_2326 transform="matrix(0.00336449 0 0 0.0046729 -0.0046729 0)"></use></pattern><image id=image0_2794_2326 width=300 height=214 preserveAspectRatio=none href="data:image/png;base64,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"></svg>', !1, !0, !1), ao = /* @__PURE__ */ b("<svg xmlns=http://www.w3.org/2000/svg fill=none role=img>");
const Se = ({
  width: e = 44,
  height: t = 44,
  name: n,
  className: r
}) => {
  const a = `0 0 ${e} ${t}`, i = {
    visa: [Zi(), Yi()],
    mastercard: [zi(), Di(), ji(), Gi(), qi()],
    amex: [Ki(), Xi()],
    postepay: [Ji(), Qi(), $i()],
    nexi: [eo(), to()],
    cartebancaire: [no(), ro()]
  };
  return (() => {
    var o = ao();
    return L(o, "viewBox", a), L(o, "height", t), L(o, "width", e), L(o, "data-testid", `${n}-icon`), L(o, "class", r), L(o, "aria-label", n), _(o, () => i[n]), o;
  })();
};
var io = /* @__PURE__ */ b("<figure data-testid=payment-methods>");
const Gn = (e) => {
  const t = e.alignment === $e.RIGHT ? "float-right" : "", n = (r) => {
    switch (r) {
      case "it":
        return [m(Se, {
          name: "postepay",
          height: 18,
          width: 29,
          "data-testid": "postepay-icon"
        }), m(Se, {
          name: "nexi",
          height: 18,
          width: 29,
          "data-testid": "nexi-icon"
        })];
      case "fr":
        return m(Se, {
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
    var r = io();
    return K(r, `flex flex-row gap-1 ${t}`), _(r, m(Se, {
      name: "mastercard",
      height: 18,
      width: 29,
      "data-testid": "mastercard-icon"
    }), null), _(r, m(Se, {
      name: "visa",
      height: 18,
      width: 29,
      "data-testid": "visa-icon"
    }), null), _(r, () => n(e.locale), null), r;
  })();
};
var oo = /* @__PURE__ */ b('<svg xmlns=http://www.w3.org/2000/svg fill=#1D1B20 data-testid=down-arrow role=img aria-label=next><g clip-path=url(#clip0_2753_5465)><path d="M5.3278 11.8397C4.78317 11.5709 4.55606 10.9101 4.81999 10.3631C5.08411 9.81624 5.73911 9.59061 6.28386 9.85919L12.4997 12.9246L18.7175 9.85919C19.2622 9.59087 19.9184 9.81608 20.1823 10.3631C20.4462 10.9102 20.2173 11.571 19.6725 11.8397L13.071 15.0945C12.9208 15.1857 12.7507 15.2396 12.5749 15.2508C12.5687 15.2513 12.5625 15.2524 12.5563 15.2527L12.444 15.2527C12.4368 15.2523 12.4297 15.2513 12.4225 15.2508C12.2491 15.2391 12.0807 15.187 11.9323 15.0975L5.3278 11.8397Z"fill=black></path></g><defs><clipPath id=clip0_2753_5465><rect width=24 height=24 fill=white transform="translate(0.5 0.5)">');
const so = ({
  width: e = 44,
  height: t = 44,
  className: n
}) => {
  const r = `0 0 ${e} ${t}`;
  return (() => {
    var a = oo();
    return L(a, "viewBox", r), L(a, "height", t), L(a, "width", e), L(a, "class", n), a;
  })();
};
var lo = /* @__PURE__ */ b("<style>"), co = /* @__PURE__ */ b("<div tabindex=0>"), uo = /* @__PURE__ */ b("<div class=sp_summary_card__footer><div data-testid=payment-total class=sp_summary_card__total>"), ho = /* @__PURE__ */ b("<div class=sp_summary_card__content>"), mo = /* @__PURE__ */ b("<details class=sp_summary_card__container data-testid=product-summary-card><summary><div class=sp_summary_card__heading><div class=sp_summary_card__payment-container><div data-testid=payment-label class=sp_summary_card__payment-label></div><span data-testid=payment-chip class=sp_summary_card__chip>");
const fo = (e) => e.replace(/-/g, "_"), po = (e, t, n) => e !== g.PAY_NOW_CHECKOUT ? `${n} / ${t}` : n, go = (e, t) => {
  const n = t && t.number !== 1 ? "plural" : "single";
  return `${H(e, `installment_summary:${t == null ? void 0 : t.frequencyType}_${n}`, {
    numberOfInstallments: t ? t.number : ""
  })}`;
}, _o = (e) => {
  const [t, n] = F(!1), r = J(e, {
    product: {
      ...e.product,
      configuration: {
        ...e.product.configuration,
        splitFee: e.product.configuration.splitFee ?? !1
      }
    }
  }), a = P(() => gi(r.amount, r.product.numberOfInstallments ?? 1, r.product.configuration.splitFee, e.locale)), i = P(() => _i(a(), r.product.configuration.splitFee, r.locale, r.currencyDisplay, r.currencyPosition)), o = (r.product.numberOfInstallments ?? 1) > 1, s = go(r.locale, r.product.frequency), l = () => {
    n(!t());
  };
  return [(() => {
    var u = lo();
    return _(u, Ui), u;
  })(), (() => {
    var u = mo(), c = u.firstChild, d = c.firstChild, h = d.firstChild, y = h.firstChild, w = y.nextSibling;
    return u.addEventListener("toggle", l), _(y, () => H(r.locale, `product_widget:${fo(r.product.product)}_label`)), _(w, () => po(r.product.product, s, i().installmentAmount)), _(d, m(dn, {
      get children() {
        return m(ft, {
          when: o,
          get children() {
            var p = co();
            return _(p, m(so, {
              className: "sp_summary_card__icon",
              height: 25,
              width: 25
            })), D(() => K(p, `sp_summary_card__icon--container ${t() ? "sp_summary_card__open" : ""}`)), p;
          }
        });
      }
    }), null), _(c, m(q, {
      when: o,
      get children() {
        var p = uo(), C = p.firstChild;
        return _(C, m(z, {
          get children() {
            return H(r.locale, "installment_summary:total", {
              total: i().total,
              asterisk: a().splitFee ? "*" : ""
            });
          }
        })), p;
      }
    }), null), _(u, m(q, {
      get when() {
        return t();
      },
      get children() {
        var p = ho();
        return _(p, m(Vi, {
          get installmentAmount() {
            return a().installmentAmount;
          },
          get product() {
            return r.product;
          },
          get locale() {
            return r.locale;
          },
          get splitFee() {
            return a().splitFee;
          },
          get currencyDisplay() {
            return r.currencyDisplay;
          },
          get currencyPosition() {
            return r.currencyPosition;
          }
        }), null), _(p, m(Wi, {
          get title() {
            return H(e.locale, "modal:installments_card_title");
          },
          get contents() {
            return [m(z, {
              testId: "information_1",
              get children() {
                return H(e.locale, "how_to_card:information_1");
              }
            }), [m(z, {
              testId: "information_2",
              get children() {
                return H(e.locale, "how_to_card:information_2");
              }
            }), m(Gn, {
              get locale() {
                return e.locale;
              }
            })], m(z, {
              testId: "information_3",
              get children() {
                return H(e.locale, r.channel === Et.TRAVEL ? "how_to_card:information_3:travel" : "how_to_card:information_3");
              }
            }), m(z, {
              testId: "information_4",
              get children() {
                return H(e.locale, r.channel === Et.TRAVEL ? "how_to_card:information_4:travel" : "how_to_card:information_4");
              }
            })];
          }
        }), null), p;
      }
    }), null), D(() => u.open = t()), u;
  })()];
};
var yo = /* @__PURE__ */ b("<br>");
const bo = (e) => {
  const t = (r) => {
    var a;
    r.preventDefault(), (a = e.onClose) == null || a.call(e, r);
  }, n = () => {
    const r = H(e.locale || le, "learn_more_modal:title"), a = r.indexOf(". ");
    let i = r;
    return a !== -1 && a < r.length - 1 && (i = [P(() => r.slice(0, a + 1)), yo(), P(() => r.slice(a + 1).trim())]), i;
  };
  return m(Pi, {
    get isOpen() {
      return e.open;
    },
    onClose: t,
    get title() {
      return n();
    },
    get footer() {
      return m(z, {
        get children() {
          return H(e.locale || le, "modal:terms_and_conditions", {
            utmSource: window.location.hostname
          });
        }
      });
    },
    get locale() {
      return e.locale;
    },
    get children() {
      return m(nt, {
        get each() {
          return e.products;
        },
        children: (r) => m(_o, {
          product: r,
          get amount() {
            return e.amount;
          },
          get locale() {
            return e.locale;
          },
          get currencyDisplay() {
            return e.currencyDisplay;
          },
          get currencyPosition() {
            return e.currencyPosition;
          },
          get channel() {
            return e.channel;
          }
        })
      });
    }
  });
}, qn = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches, Kn = ({
  products: e,
  amount: t,
  locale: n
}) => P(() => {
  var a;
  const r = e.find(
    ({ product: i }) => i === g.PAY_IN_FOUR
  );
  if (r && ((a = r.configuration) != null && a.splitFee)) {
    const i = Dn(t, 4, n) || 0;
    return i > 0 ? i : null;
  }
  return null;
});
var wo = /* @__PURE__ */ b('<svg fill=none data-testid=info-icon xmlns=http://www.w3.org/2000/svg><path d="M12 2.90039C13.1949 2.90039 14.3785 3.13558 15.4824 3.59277C16.5863 4.05002 17.5896 4.72061 18.4346 5.56543C19.2795 6.41031 19.9499 7.41371 20.4072 8.51758C20.8645 9.62152 21.0996 10.8051 21.0996 12C21.0996 13.195 20.8645 14.3784 20.4072 15.4824C19.9499 16.5865 19.2796 17.5896 18.4346 18.4346C17.5896 19.2796 16.5865 19.9499 15.4824 20.4072C14.3784 20.8645 13.195 21.0996 12 21.0996C10.8051 21.0996 9.62152 20.8645 8.51758 20.4072C7.41371 19.9499 6.41031 19.2795 5.56543 18.4346C4.72061 17.5896 4.05002 16.5863 3.59277 15.4824C3.13558 14.3785 2.90039 13.1949 2.90039 12C2.90044 10.8051 3.13551 9.62152 3.59277 8.51758C4.05009 7.4136 4.72047 6.41039 5.56543 5.56543C6.41039 4.72047 7.4136 4.05009 8.51758 3.59277C9.62152 3.13551 10.8051 2.90044 12 2.90039ZM12 5.09961C11.094 5.09966 10.1964 5.27829 9.35938 5.625C8.52231 5.97176 7.76177 6.48042 7.12109 7.12109C6.48042 7.76177 5.97176 8.52231 5.625 9.35938C5.27829 10.1964 5.09966 11.094 5.09961 12C5.09961 12.906 5.27837 13.8036 5.625 14.6406C5.97169 15.4776 6.48056 16.2383 7.12109 16.8789C7.76169 17.5195 8.52242 18.0282 9.35938 18.375C10.1964 18.7217 11.094 18.9003 12 18.9004C12.9061 18.9004 13.8035 18.7217 14.6406 18.375C15.4778 18.0282 16.2382 17.5196 16.8789 16.8789C17.5196 16.2382 18.0282 15.4778 18.375 14.6406C18.6784 13.9081 18.8527 13.1292 18.8916 12.3389L18.9004 12L18.8916 11.6611C18.8527 10.8709 18.6784 10.0919 18.375 9.35938C18.0282 8.52242 17.5195 7.76169 16.8789 7.12109C16.2383 6.48056 15.4776 5.97169 14.6406 5.625C13.8036 5.27837 12.906 5.09961 12 5.09961ZM12.001 10.6006C12.4979 10.6008 12.9014 11.0041 12.9014 11.501V15.001L12.8965 15.0928C12.8501 15.5462 12.4666 15.9012 12.001 15.9014C11.5352 15.9014 11.1519 15.5463 11.1055 15.0928L11.1006 15.001V11.501C11.1006 11.0039 11.5039 10.6006 12.001 10.6006ZM12.001 8.10059C12.4979 8.1008 12.9014 8.50405 12.9014 9.00098V9.01074L12.8965 9.10254C12.8502 9.55607 12.4667 9.91093 12.001 9.91113C11.5351 9.91113 11.1518 9.55616 11.1055 9.10254L11.1006 9.01074V9.00098C11.1006 8.50392 11.5039 8.10059 12.001 8.10059Z">');
const vo = ({
  width: e = 21,
  height: t = 21,
  fill: n
}) => {
  const r = `0 0 ${Math.round(e * 1.14)} ${Math.round(t * 1.14)}`;
  return (() => {
    var a = wo(), i = a.firstChild;
    return L(a, "width", e), L(a, "height", t), L(a, "viewBox", r), L(i, "fill", n), a;
  })();
};
var Co = /* @__PURE__ */ b("<p>"), xo = /* @__PURE__ */ b('<article><div><div><span class="inline-flex items-center"><span>&period;</span></span><div class="w-full justify-start min-[361px]:w-auto inline-flex"><span></span>&nbsp;<button class="cursor-pointer bg-transparent border-0 self-baseline text-black h-[21px]"tabindex=2>');
const Eo = (e) => {
  switch (di(e).map((n) => n.product).join(",")) {
    case g.PAY_IN_THREE:
      return ["product_widget:pay_in_3", 3];
    case [g.PAY_IN_THREE, g.PAY_IN_FOUR].join(","):
      return ["product_widget:pay_in_3_pay_in_4", 4];
    case [g.PAY_IN_THREE, g.PAY_NOW_CHECKOUT].join(","):
      return ["product_widget:pay_in_3_pay_now_checkout", 3];
    case [g.PAY_IN_THREE, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_3_pay_later", 3];
    case [g.PAY_IN_THREE, g.PAY_IN_FOUR, g.PAY_NOW_CHECKOUT].join(","):
      return ["product_widget:pay_in_3_pay_in_4_pay_now_checkout", 4];
    case [g.PAY_IN_THREE, g.PAY_IN_FOUR, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_3_pay_in_4_pay_later", 4];
    case [g.PAY_IN_THREE, g.PAY_IN_FOUR, g.PAY_NOW_CHECKOUT, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_3_pay_in_4_pay_now_checkout_pay_later", 4];
    case [g.PAY_IN_THREE, g.PAY_NOW_CHECKOUT, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_3_pay_now_checkout_pay_later", 3];
    case g.PAY_IN_FOUR:
      return ["product_widget:pay_in_4", 4];
    case [g.PAY_IN_FOUR, g.PAY_NOW_CHECKOUT].join(","):
      return ["product_widget:pay_in_4_pay_now_checkout", 4];
    case [g.PAY_IN_FOUR, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_4_pay_later", 4];
    case [g.PAY_IN_FOUR, g.PAY_NOW_CHECKOUT, g.PAY_LATER].join(","):
      return ["product_widget:pay_in_4_pay_now_checkout_pay_later", 4];
    case g.PAY_NOW_CHECKOUT:
      return ["product_widget:pay_now_checkout", 1];
    case [g.PAY_NOW_CHECKOUT, g.PAY_LATER].join(","):
      return ["product_widget:pay_now_checkout_pay_later", 1];
    case g.PAY_LATER:
      return ["product_widget:pay_later", 1];
  }
}, So = (e) => {
  const [t, n] = F(!1), [r, a] = F(null), i = e.darkMode === Ve.SYSTEM && qn() || e.darkMode === Ve.ALWAYS;
  xe(() => {
    a(Kn({
      products: e.products,
      amount: e.amount,
      locale: e.locale
    }));
  });
  const o = P(() => {
    let l = Eo(e.products);
    if (!l) {
      console.warn(`Scalapay - Combination of products: (${e.products.map((c) => c.product)}) not supported`);
      return;
    }
    const u = e.hideInstallments ? `${l[0]}_no_installments` : l[0];
    return H(e.locale, u, {
      feeStar: r() ? "*" : "",
      installmentAmount: e.hideInstallments ? void 0 : re(e.amount / l[1], e.locale, e.currencyDisplay, e.currencyPosition),
      textStyle: `font-semibold ${i ? "text-white" : "text-black"}`
    });
  }), s = e.hideInstallments ? "product_widget:pay_in_4_service_fee_single_no_amount" : "product_widget:pay_in_4_service_fee_single";
  return m(q, {
    get when() {
      return o();
    },
    get children() {
      var l = xo(), u = l.firstChild, c = u.firstChild, d = c.firstChild, h = d.firstChild, y = d.nextSibling, w = y.firstChild, p = w.nextSibling, C = p.nextSibling;
      return K(l, `flex flex-col py-4 font-medium ${i ? "text-white" : ""}`), _(c, m(z, {
        testId: "product-widget-label",
        get children() {
          return o();
        }
      }), d), _(d, m(jn, {
        type: "black",
        get scalePercent() {
          return e.logoSize;
        }
      }), h), _(w, () => H(e.locale, "product_widget:no_interest")), C.$$click = () => n(!0), _(C, (() => {
        var v = P(() => !!(e != null && e.hideLearnMore));
        return () => v() ? m(vo, {
          fill: i ? "white" : "black"
        }) : m(z, {
          testId: "product-widget-btn",
          className: `hover:text-sp-primary-blue underline text-sm font-semibold ${i ? "text-white" : "text-black"} font-medium`,
          get children() {
            return H(e.locale, "product_widget:learn_more");
          }
        });
      })()), _(l, m(q, {
        get when() {
          return r();
        },
        get children() {
          var v = Co();
          return _(v, m(z, {
            testId: "product-widget-service-fee",
            get children() {
              return H(e.locale, s, {
                feeAmount: re(r(), e.locale, e.currencyDisplay, e.currencyPosition)
              });
            }
          })), D(() => K(v, `flex-1 font-normal ${i ? "text-sp-white-2" : "text-sp-primary-gray"} text-xs mt-1 text-${e.alignment}`)), v;
        }
      }), null), _(l, m(q, {
        get when() {
          return t();
        },
        get children() {
          return m(bo, {
            get amount() {
              return e.amount;
            },
            get currencyDisplay() {
              return e.currencyDisplay;
            },
            get currencyPosition() {
              return e.currencyPosition;
            },
            get products() {
              return e.products;
            },
            loans: [],
            get locale() {
              return e.locale;
            },
            onClose: () => n(!1),
            get open() {
              return t();
            },
            get channel() {
              return e.channel;
            }
          });
        }
      }), null), D((v) => {
        var A = `flex flex-col gap-1 ${e.alignment === $e.RIGHT ? "items-end" : ""}`, x = `flex flex-wrap items-center gap-1 leading-6 ${e.alignment === $e.RIGHT ? "justify-end" : ""}`;
        return A !== v.e && K(u, v.e = A), x !== v.t && K(c, v.t = x), v;
      }, {
        e: void 0,
        t: void 0
      }), l;
    }
  });
};
hn(["click"]);
const Xn = (e) => {
  const t = {
    locale: zn(e.locale)
  }, n = J({}, e, t), r = () => {
    let c = e.products.find((h) => h.product === g.PAY_IN_THREE), d = e.products.find((h) => h.product === g.PAY_IN_FOUR);
    return c && d ? H(n.locale, "checkout_title:pay_in_3_pay_in_4") : d ? H(n.locale, "checkout_title:pay_in_4") : H(n.locale, "checkout_title:pay_in_3");
  }, a = (c) => {
    let d = n.checkoutTitleSelector ? document.querySelector(n.checkoutTitleSelector) : null;
    if (d && d.textContent != c) {
      d.textContent = c;
      return;
    }
    i(c), o(c), u(c);
  }, i = (c) => {
    let d = document.querySelector('li.payment_method_scalapay label[for="payment_method_scalapay"]') ?? document.querySelector("div.scalapay-checkout-label > span");
    const h = document.querySelector('li.payment_method_scalapay label[for="payment_method_scalapay"] img.scalapay-checkout-label__icon');
    d && d.textContent !== c && (d.innerHTML = c + ((h == null ? void 0 : h.outerHTML) ?? ""));
  }, o = (c) => {
    var p;
    const d = document.querySelector('input[type="radio"]#scalapay');
    if (!d) return;
    const h = document.querySelector(`label[for="${d.id}"] span`), y = ((p = document.querySelector(".scalapay-checkout-widget-logo")) == null ? void 0 : p.outerHTML) || "", w = `${c} ${y}`;
    h && h.innerHTML != w && (h.innerHTML = w);
  }, s = (c) => {
    let d = document.querySelector('div[id^="payment-option-"]:has(scalapay-widget[type="checkout"])');
    if (d) {
      const h = document.querySelector(`label[for="${d.id.replace("-additional-information", "")}"] span`);
      h && h.textContent != c && (h.textContent = c);
    }
  }, l = (c) => {
    let d = document.querySelector('div.scalapay_payment_module:has(scalapay-widget[type="checkout"]) a.scalapay');
    if (d && d.textContent != c) {
      d.textContent = c, d.title = c;
      return;
    }
  }, u = (c) => {
    s(c), l(c);
  };
  return tt(() => {
    let c = r();
    a(c), new MutationObserver(() => {
      a(c);
    }).observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    });
  }), [];
};
var Ao = /* @__PURE__ */ b("<p>"), ko = /* @__PURE__ */ b('<article><span class="flex flex-col gap-1"><span class="mt-3 text-2xs"></span><span class=mt-1>');
const Po = (e) => {
  const [t, n] = F(null), r = e.darkMode === Ve.SYSTEM && qn() || e.darkMode === Ve.ALWAYS;
  xe(() => {
    n(Kn({
      products: e.products,
      amount: e.amount,
      locale: e.locale
    }));
  });
  const a = e.hideInstallments ? "product_widget:pay_in_4_service_fee_single_no_amount" : "product_widget:pay_in_4_service_fee_single", i = (o) => e.hideInstallments ? `checkout_widget:${o}_no_installments` : `checkout_widget:${o}`;
  return [(() => {
    var o = ko(), s = o.firstChild, l = s.firstChild, u = l.nextSibling;
    return _(s, m(q, {
      get when() {
        return e.products.find((c) => c.product === g.PAY_IN_THREE);
      },
      get children() {
        return m(z, {
          testId: "checkout-label-pay-in-3",
          get children() {
            return H(e.locale, i("pay_in_3"), {
              installmentAmount: e.hideInstallments ? void 0 : re(e.amount / 3, e.locale, e.currencyDisplay, e.currencyPosition),
              textStyle: `font-semibold ${r ? "text-white" : "text-black"}`
            });
          }
        });
      }
    }), l), _(s, m(q, {
      get when() {
        return e.products.find((c) => c.product === g.PAY_IN_FOUR);
      },
      get children() {
        return m(z, {
          testId: "checkout-label-pay-in-4",
          get children() {
            return H(e.locale, i("pay_in_4"), {
              feeStar: t() ? "*" : "",
              installmentAmount: e.hideInstallments ? void 0 : re(e.amount / 4, e.locale, e.currencyDisplay, e.currencyPosition),
              textStyle: `font-semibold ${r ? "text-white" : "text-black"}`
            });
          }
        });
      }
    }), l), _(s, m(q, {
      get when() {
        return e.products.find((c) => c.product === g.PAY_NOW_CHECKOUT);
      },
      get children() {
        return m(z, {
          testId: "checkout-label-pay-now-checkout",
          get children() {
            return H(e.locale, "checkout_widget:pay_now_checkout");
          }
        });
      }
    }), l), _(s, m(q, {
      get when() {
        return t();
      },
      get children() {
        var c = Ao();
        return K(c, `flex-1 font-medium ${r ? "text-sp-light-gray-2" : "text-sp-light-gray-1"} text-xs mt-1`), _(c, m(z, {
          testId: "checkout-widget-service-fee",
          get children() {
            return H(e.locale, a, {
              feeAmount: re(t(), e.locale, e.currencyDisplay, e.currencyPosition)
            });
          }
        })), c;
      }
    }), l), _(l, m(z, {
      testId: "checkout-accepted-methods",
      get children() {
        return H(e.locale, "checkout_widget:accepted_methods");
      }
    })), _(u, m(Gn, {
      get alignment() {
        return e.alignment;
      },
      get locale() {
        return e.locale;
      }
    })), D(() => K(o, `flex flex-col gap-1 p-2 font-medium font-poppins text-${e.alignment} ${r ? "text-white" : ""}`)), o;
  })(), m(q, {
    get when() {
      return !e.disableCheckoutTitleUpdate;
    },
    get children() {
      return m(Xn, {
        get products() {
          return e.products;
        },
        get locale() {
          return e.locale;
        },
        get checkoutTitleSelector() {
          return e.checkoutTitleSelector;
        }
      });
    }
  })];
};
var xt = /* @__PURE__ */ ((e) => (e.PRODUCTION = "production", e.STAGING = "staging", e.INTEGRATION = "integration", e.DEVELOPMENT = "development", e))(xt || {});
class Ho extends Error {
  constructor(t) {
    super(t), this.name = "NoMerchantConfigurationFound";
  }
}
class To extends Error {
  constructor(t) {
    super(t), this.name = "ConfigurationEnvironmentNotSupported";
  }
}
const Qe = [
  {
    type: Pt.ONLINE,
    product: g.PAY_IN_THREE,
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
];
async function Lo(e) {
  try {
    if (e.environment && !Object.values(xt).includes(e.environment))
      throw new To(
        `Environment ${e.environment} for merchant token ${e.merchantToken} not supported`
      );
    const t = e.merchantToken, a = `https://${`cdn${e.environment && e.environment !== xt.PRODUCTION ? `.${e.environment}` : ""}.scalapay.com`}/widget/configurations/${t}/widget_configuration.json`, i = await fetch(a, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!i.ok)
      throw new Ho(
        `Failed to fetch merchant configuration for merchant token ${t}`
      );
    return i.json();
  } catch (t) {
    return console.warn(t), Qe;
  }
}
var Io = /* @__PURE__ */ b("<style>"), Oo = /* @__PURE__ */ b('<div class="cursor-default leading-4 text-sm font-medium font-poppins max-w-full text-sp-primary-gray antialiased">'), je = /* @__PURE__ */ ((e) => (e.PRODUCT = "product", e.CHECKOUT = "checkout", e))(je || {}), Et = /* @__PURE__ */ ((e) => (e.TRAVEL = "travel", e))(Et || {}), $e = /* @__PURE__ */ ((e) => (e.LEFT = "left", e.RIGHT = "right", e))($e || {}), Ve = /* @__PURE__ */ ((e) => (e.NEVER = "never", e.SYSTEM = "system", e.ALWAYS = "always", e))(Ve || {});
const Mo = [
  g.PAY_IN_THREE,
  g.PAY_IN_FOUR
  /*Product.PAY_NOW, Product.PAY_LATER, Product.PAY_IN_X*/
], Vo = {
  [g.PAY_LATER]: 1,
  [g.PAY_IN_THREE]: 3,
  [g.PAY_IN_FOUR]: 4,
  [g.PAY_NOW_CHECKOUT]: 1,
  [g.PAY_IN_X]: 1
}, Fo = (e) => {
  const t = (e == null ? void 0 : e.locale) === oe.EN ? "before" : "after", n = J({
    type: "product",
    locale: oe.IT,
    currencyPosition: t,
    currencyDisplay: "symbol",
    logoSize: 100,
    alignment: "left",
    hideInstallments: !1,
    darkMode: "never",
    hideLearnMore: !1
  }, e);
  if (!n.amount)
    return console.error("To show the widget, the amount property is required"), [];
  const r = P(() => {
    var a;
    return ((a = n.products) == null ? void 0 : a.reduce((i, o) => {
      var s, l, u, c;
      return o.type === Pt.ONLINE && o.configuration.maximumAmount && ((l = (s = o.configuration) == null ? void 0 : s.maximumAmount) == null ? void 0 : l.amount) * 100 >= n.amount && o.configuration.minimumAmount && ((c = (u = o.configuration) == null ? void 0 : u.minimumAmount) == null ? void 0 : c.amount) * 100 <= n.amount && // currently the widget only supports these products
      o.isStackable && Mo.includes(o.product) ? [{
        ...o,
        numberOfInstallments: Vo[o.product]
      }, ...i] : i;
    }, [])) ?? Qe;
  });
  return xe(() => {
    var a;
    (a = r()) != null && a.length || console.warn("No available products could be shown.");
  }), [(() => {
    var a = Io();
    return _(a, gn), a;
  })(), m(si, {
    get locale() {
      return n.locale;
    },
    messages: {},
    defaultLocale: "it",
    get children() {
      var a = Oo();
      return _(a, m(gr, {
        fallback: (i) => (console.log(i), []),
        get children() {
          return m(q, {
            get when() {
              return r().length > 0;
            },
            get children() {
              return m(dn, {
                get children() {
                  return [m(ft, {
                    get when() {
                      return n.type == "product";
                    },
                    get children() {
                      return m(So, J({
                        loans: []
                      }, n, {
                        get products() {
                          return r();
                        }
                      }));
                    }
                  }), m(ft, {
                    get when() {
                      return n.type == "checkout";
                    },
                    get children() {
                      return m(Po, J(n, {
                        get products() {
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
      })), a;
    }
  })];
}, $t = (e, t) => (e ?? []).map((n) => {
  var r;
  return De((r = document.querySelector(n)) == null ? void 0 : r.textContent, t);
}).filter((n) => n && !isNaN(n))[0], en = (e, t, n) => {
  let r = $t(e, t);
  n(r);
  const a = new MutationObserver(() => {
    let i = $t(e, t);
    n(i);
  });
  e.map((i) => document.querySelector(i)).filter((i) => i).forEach((i) => {
    a.observe(i, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      characterData: !0
    });
  });
}, No = (e) => {
  const t = {
    locale: zn(e.locale)
  }, n = J({
    type: je.PRODUCT,
    locale: oe.IT,
    amountSelectors: [],
    amount: ""
  }, e, t), [r, a] = F(null), [i, o] = F(null);
  tt(() => {
    en(n.amountSelectors, n.amountSeparator, a), new MutationObserver(() => en(n.amountSelectors, n.amountSeparator, a)).observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    });
  }), xe(() => {
    let l = r();
    l || (l = De(n.amount, n.amountSeparator)), o(l);
  });
  const s = P(() => {
    var c, d, h, y;
    if (!i()) return !1;
    const l = De(((c = n.minAmount) == null ? void 0 : c.toString()) || ((d = n.min) == null ? void 0 : d.toString()), n.amountSeparator), u = De(((h = n.maxAmount) == null ? void 0 : h.toString()) || ((y = n.max) == null ? void 0 : y.toString()), n.amountSeparator);
    return l && i() < l ? (console.warn(`Amount is less than minAmount: ${i()} < ${l}`), !1) : u && i() > u ? (console.warn(`Amount is greater than maxAmount: ${i()} > ${u}`), !1) : !0;
  });
  return m(q, {
    get when() {
      return s();
    },
    get children() {
      return m(Fo, J(n, {
        get type() {
          var l;
          return je[(l = n.type) == null ? void 0 : l.toUpperCase()] || je.PRODUCT;
        },
        get amount() {
          return i();
        }
      }));
    }
  });
}, Ro = `.skeleton__container {
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
var Bo = /* @__PURE__ */ b("<style>"), Wo = /* @__PURE__ */ b("<div class=skeleton__container>"), Uo = /* @__PURE__ */ b("<div role=alert aria-busy=true>");
const Zo = (e) => {
  const t = J({
    width: "300px",
    height: "20px",
    className: "",
    borderRadius: "0.25rem",
    numberOfLines: 1
  }, e), n = P(() => Array.from({
    length: t.numberOfLines
  }, (r, a) => a + 1));
  return [(() => {
    var r = Bo();
    return _(r, Ro), r;
  })(), (() => {
    var r = Wo();
    return _(r, m(nt, {
      get each() {
        return n();
      },
      children: () => (() => {
        var a = Uo();
        return D((i) => {
          var o = `skeleton ${t.className}`, s = t.width, l = t.height, u = t.borderRadius, c = t.height;
          return o !== i.e && K(a, i.e = o), s !== i.t && ((i.t = s) != null ? a.style.setProperty("width", s) : a.style.removeProperty("width")), l !== i.a && ((i.a = l) != null ? a.style.setProperty("height", l) : a.style.removeProperty("height")), u !== i.o && ((i.o = u) != null ? a.style.setProperty("border-radius", u) : a.style.removeProperty("border-radius")), c !== i.i && ((i.i = c) != null ? a.style.setProperty("min-height", c) : a.style.removeProperty("min-height")), i;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0
        }), a;
      })()
    })), r;
  })()];
}, Jn = (e) => {
  if (!e.merchantToken)
    return console.warn("To show the widget properly, the merchant-token property is required."), P(() => e.children(Qe));
  const t = () => ({
    merchantToken: e.merchantToken,
    environment: e.environment
  }), [n] = nr(t, Lo);
  return m(q, {
    get when() {
      return !n.loading;
    },
    get fallback() {
      return m(Zo, {
        get numberOfLines() {
          return e.skeletonSize ?? 1;
        }
      });
    },
    get children() {
      return e.children(n() ?? Qe);
    }
  });
}, Ht = document.createElement("link");
Ht.rel = "stylesheet";
Ht.href = "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
document.head.appendChild(Ht);
pn("scalapay-widget", {
  type: "product",
  locale: le,
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
  hideLearnMore: void 0
}, (e) => m(Jn, {
  get merchantToken() {
    return e.merchantToken ?? "";
  },
  get environment() {
    return e.environment;
  },
  children: (t) => m(No, J(e, {
    products: t
  }))
}));
pn("scalapay-update-checkout-title", {
  locale: le,
  merchantToken: void 0,
  environment: void 0,
  checkoutTitleSelector: void 0
}, (e) => m(Jn, {
  get merchantToken() {
    return e.merchantToken;
  },
  get environment() {
    return e.environment;
  },
  children: (t) => m(Xn, J(e, {
    products: t
  }))
}));
