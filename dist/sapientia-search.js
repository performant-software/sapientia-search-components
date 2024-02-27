import * as Mh from "react";
import z, { useRef as Ve, useContext as dt, createElement as Hh, createContext as Qt, useState as bt, useLayoutEffect as Lh, useEffect as gt, useMemo as ii, useReducer as qh, useCallback as Uh, version as Wh, Fragment as Bh, forwardRef as He } from "react";
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function zh(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ma = { exports: {} }, Jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function Vh() {
  if (Ns)
    return Jt;
  Ns = 1;
  var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, o) {
    var f, l = {}, v = null, d = null;
    o !== void 0 && (v = "" + o), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (d = u.ref);
    for (f in u)
      n.call(u, f) && !a.hasOwnProperty(f) && (l[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        l[f] === void 0 && (l[f] = u[f]);
    return { $$typeof: t, type: c, key: v, ref: d, props: l, _owner: i.current };
  }
  return Jt.Fragment = r, Jt.jsx = s, Jt.jsxs = s, Jt;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function Qh() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.iterator, h = "@@iterator";
    function m(S) {
      if (S === null || typeof S != "object")
        return null;
      var K = p && S[p] || S[h];
      return typeof K == "function" ? K : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(S) {
      {
        for (var K = arguments.length, ee = new Array(K > 1 ? K - 1 : 0), ae = 1; ae < K; ae++)
          ee[ae - 1] = arguments[ae];
        w("error", S, ee);
      }
    }
    function w(S, K, ee) {
      {
        var ae = g.ReactDebugCurrentFrame, he = ae.getStackAddendum();
        he !== "" && (K += "%s", ee = ee.concat([he]));
        var Se = ee.map(function(ue) {
          return String(ue);
        });
        Se.unshift("Warning: " + K), Function.prototype.apply.call(console[S], console, Se);
      }
    }
    var b = !1, y = !1, j = !1, $ = !1, R = !1, q;
    q = Symbol.for("react.module.reference");
    function V(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === a || R || S === i || S === o || S === f || $ || S === d || b || y || j || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === l || S.$$typeof === s || S.$$typeof === c || S.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === q || S.getModuleId !== void 0));
    }
    function L(S, K, ee) {
      var ae = S.displayName;
      if (ae)
        return ae;
      var he = K.displayName || K.name || "";
      return he !== "" ? ee + "(" + he + ")" : ee;
    }
    function k(S) {
      return S.displayName || "Context";
    }
    function A(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case o:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            var K = S;
            return k(K) + ".Consumer";
          case s:
            var ee = S;
            return k(ee._context) + ".Provider";
          case u:
            return L(S, S.render, "ForwardRef");
          case l:
            var ae = S.displayName || null;
            return ae !== null ? ae : A(S.type) || "Memo";
          case v: {
            var he = S, Se = he._payload, ue = he._init;
            try {
              return A(ue(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, U = 0, T, C, F, Q, E, M, D;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function H() {
      {
        if (U === 0) {
          T = console.log, C = console.info, F = console.warn, Q = console.error, E = console.group, M = console.groupCollapsed, D = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        U++;
      }
    }
    function W() {
      {
        if (U--, U === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, S, {
              value: T
            }),
            info: re({}, S, {
              value: C
            }),
            warn: re({}, S, {
              value: F
            }),
            error: re({}, S, {
              value: Q
            }),
            group: re({}, S, {
              value: E
            }),
            groupCollapsed: re({}, S, {
              value: M
            }),
            groupEnd: re({}, S, {
              value: D
            })
          });
        }
        U < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = g.ReactCurrentDispatcher, Y;
    function N(S, K, ee) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (he) {
            var ae = he.stack.trim().match(/\n( *(at )?)/);
            Y = ae && ae[1] || "";
          }
        return `
` + Y + S;
      }
    }
    var Z = !1, J;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      J = new B();
    }
    function x(S, K) {
      if (!S || Z)
        return "";
      {
        var ee = J.get(S);
        if (ee !== void 0)
          return ee;
      }
      var ae;
      Z = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = O.current, O.current = null, H();
      try {
        if (K) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (st) {
              ae = st;
            }
            Reflect.construct(S, [], ue);
          } else {
            try {
              ue.call();
            } catch (st) {
              ae = st;
            }
            S.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (st) {
            ae = st;
          }
          S();
        }
      } catch (st) {
        if (st && ae && typeof st.stack == "string") {
          for (var se = st.stack.split(`
`), Le = ae.stack.split(`
`), Te = se.length - 1, Ae = Le.length - 1; Te >= 1 && Ae >= 0 && se[Te] !== Le[Ae]; )
            Ae--;
          for (; Te >= 1 && Ae >= 0; Te--, Ae--)
            if (se[Te] !== Le[Ae]) {
              if (Te !== 1 || Ae !== 1)
                do
                  if (Te--, Ae--, Ae < 0 || se[Te] !== Le[Ae]) {
                    var Qe = `
` + se[Te].replace(" at new ", " at ");
                    return S.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", S.displayName)), typeof S == "function" && J.set(S, Qe), Qe;
                  }
                while (Te >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        Z = !1, O.current = Se, W(), Error.prepareStackTrace = he;
      }
      var $t = S ? S.displayName || S.name : "", Fs = $t ? N($t) : "";
      return typeof S == "function" && J.set(S, Fs), Fs;
    }
    function oe(S, K, ee) {
      return x(S, !1);
    }
    function de(S) {
      var K = S.prototype;
      return !!(K && K.isReactComponent);
    }
    function ne(S, K, ee) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return x(S, de(S));
      if (typeof S == "string")
        return N(S);
      switch (S) {
        case o:
          return N("Suspense");
        case f:
          return N("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case u:
            return oe(S.render);
          case l:
            return ne(S.type, K, ee);
          case v: {
            var ae = S, he = ae._payload, Se = ae._init;
            try {
              return ne(Se(he), K, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, fe = {}, Ce = g.ReactDebugCurrentFrame;
    function Xe(S) {
      if (S) {
        var K = S._owner, ee = ne(S.type, S._source, K ? K.type : null);
        Ce.setExtraStackFrame(ee);
      } else
        Ce.setExtraStackFrame(null);
    }
    function $e(S, K, ee, ae, he) {
      {
        var Se = Function.call.bind(Ee);
        for (var ue in S)
          if (Se(S, ue)) {
            var se = void 0;
            try {
              if (typeof S[ue] != "function") {
                var Le = Error((ae || "React class") + ": " + ee + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              se = S[ue](K, ue, ae, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              se = Te;
            }
            se && !(se instanceof Error) && (Xe(he), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", ee, ue, typeof se), Xe(null)), se instanceof Error && !(se.message in fe) && (fe[se.message] = !0, Xe(he), _("Failed %s type: %s", ee, se.message), Xe(null));
          }
      }
    }
    var Tt = Array.isArray;
    function at(S) {
      return Tt(S);
    }
    function Be(S) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ee = K && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return ee;
      }
    }
    function ie(S) {
      try {
        return Pe(S), !1;
      } catch {
        return !0;
      }
    }
    function Pe(S) {
      return "" + S;
    }
    function Ct(S) {
      if (ie(S))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(S)), Pe(S);
    }
    var ot = g.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Es, xs, di;
    di = {};
    function Oh(S) {
      if (Ee.call(S, "ref")) {
        var K = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Rh(S) {
      if (Ee.call(S, "key")) {
        var K = Object.getOwnPropertyDescriptor(S, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ph(S, K) {
      if (typeof S.ref == "string" && ot.current && K && ot.current.stateNode !== K) {
        var ee = A(ot.current.type);
        di[ee] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(ot.current.type), S.ref), di[ee] = !0);
      }
    }
    function Eh(S, K) {
      {
        var ee = function() {
          Es || (Es = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ee.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function xh(S, K) {
      {
        var ee = function() {
          xs || (xs = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ee.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var jh = function(S, K, ee, ae, he, Se, ue) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: K,
        ref: ee,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Th(S, K, ee, ae, he) {
      {
        var Se, ue = {}, se = null, Le = null;
        ee !== void 0 && (Ct(ee), se = "" + ee), Rh(K) && (Ct(K.key), se = "" + K.key), Oh(K) && (Le = K.ref, Ph(K, he));
        for (Se in K)
          Ee.call(K, Se) && !Ze.hasOwnProperty(Se) && (ue[Se] = K[Se]);
        if (S && S.defaultProps) {
          var Te = S.defaultProps;
          for (Se in Te)
            ue[Se] === void 0 && (ue[Se] = Te[Se]);
        }
        if (se || Le) {
          var Ae = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          se && Eh(ue, Ae), Le && xh(ue, Ae);
        }
        return jh(S, se, Le, he, ae, ot.current, ue);
      }
    }
    var hi = g.ReactCurrentOwner, js = g.ReactDebugCurrentFrame;
    function At(S) {
      if (S) {
        var K = S._owner, ee = ne(S.type, S._source, K ? K.type : null);
        js.setExtraStackFrame(ee);
      } else
        js.setExtraStackFrame(null);
    }
    var pi;
    pi = !1;
    function vi(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Ts() {
      {
        if (hi.current) {
          var S = A(hi.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Ch(S) {
      {
        if (S !== void 0) {
          var K = S.fileName.replace(/^.*[\\\/]/, ""), ee = S.lineNumber;
          return `

Check your code at ` + K + ":" + ee + ".";
        }
        return "";
      }
    }
    var Cs = {};
    function Ah(S) {
      {
        var K = Ts();
        if (!K) {
          var ee = typeof S == "string" ? S : S.displayName || S.name;
          ee && (K = `

Check the top-level render call using <` + ee + ">.");
        }
        return K;
      }
    }
    function As(S, K) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var ee = Ah(K);
        if (Cs[ee])
          return;
        Cs[ee] = !0;
        var ae = "";
        S && S._owner && S._owner !== hi.current && (ae = " It was passed a child from " + A(S._owner.type) + "."), At(S), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ae), At(null);
      }
    }
    function $s(S, K) {
      {
        if (typeof S != "object")
          return;
        if (at(S))
          for (var ee = 0; ee < S.length; ee++) {
            var ae = S[ee];
            vi(ae) && As(ae, K);
          }
        else if (vi(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var he = m(S);
          if (typeof he == "function" && he !== S.entries)
            for (var Se = he.call(S), ue; !(ue = Se.next()).done; )
              vi(ue.value) && As(ue.value, K);
        }
      }
    }
    function $h(S) {
      {
        var K = S.type;
        if (K == null || typeof K == "string")
          return;
        var ee;
        if (typeof K == "function")
          ee = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === l))
          ee = K.propTypes;
        else
          return;
        if (ee) {
          var ae = A(K);
          $e(ee, S.props, "prop", ae, S);
        } else if (K.PropTypes !== void 0 && !pi) {
          pi = !0;
          var he = A(K);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ih(S) {
      {
        for (var K = Object.keys(S.props), ee = 0; ee < K.length; ee++) {
          var ae = K[ee];
          if (ae !== "children" && ae !== "key") {
            At(S), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), At(null);
            break;
          }
        }
        S.ref !== null && (At(S), _("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function Is(S, K, ee, ae, he, Se) {
      {
        var ue = V(S);
        if (!ue) {
          var se = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = Ch(he);
          Le ? se += Le : se += Ts();
          var Te;
          S === null ? Te = "null" : at(S) ? Te = "array" : S !== void 0 && S.$$typeof === t ? (Te = "<" + (A(S.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, se);
        }
        var Ae = Th(S, K, ee, he, Se);
        if (Ae == null)
          return Ae;
        if (ue) {
          var Qe = K.children;
          if (Qe !== void 0)
            if (ae)
              if (at(Qe)) {
                for (var $t = 0; $t < Qe.length; $t++)
                  $s(Qe[$t], S);
                Object.freeze && Object.freeze(Qe);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $s(Qe, S);
        }
        return S === n ? Ih(Ae) : $h(Ae), Ae;
      }
    }
    function Fh(S, K, ee) {
      return Is(S, K, ee, !0);
    }
    function Nh(S, K, ee) {
      return Is(S, K, ee, !1);
    }
    var Dh = Nh, kh = Fh;
    Xt.Fragment = n, Xt.jsx = Dh, Xt.jsxs = kh;
  }()), Xt;
}
process.env.NODE_ENV === "production" ? Ma.exports = Vh() : Ma.exports = Qh();
var G = Ma.exports, Ha = { exports: {} }, be = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function Kh() {
  if (ks)
    return be;
  ks = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, c = 60112, u = 60113, o = 60120, f = 60115, l = 60116, v = 60121, d = 60122, p = 60117, h = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var g = Symbol.for;
    e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), n = g("react.strict_mode"), i = g("react.profiler"), a = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), u = g("react.suspense"), o = g("react.suspense_list"), f = g("react.memo"), l = g("react.lazy"), v = g("react.block"), d = g("react.server.block"), p = g("react.fundamental"), h = g("react.debug_trace_mode"), m = g("react.legacy_hidden");
  }
  function _(A) {
    if (typeof A == "object" && A !== null) {
      var re = A.$$typeof;
      switch (re) {
        case e:
          switch (A = A.type, A) {
            case r:
            case i:
            case n:
            case u:
            case o:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case s:
                case c:
                case l:
                case f:
                case a:
                  return A;
                default:
                  return re;
              }
          }
        case t:
          return re;
      }
    }
  }
  var w = a, b = e, y = c, j = r, $ = l, R = f, q = t, V = i, L = n, k = u;
  return be.ContextConsumer = s, be.ContextProvider = w, be.Element = b, be.ForwardRef = y, be.Fragment = j, be.Lazy = $, be.Memo = R, be.Portal = q, be.Profiler = V, be.StrictMode = L, be.Suspense = k, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(A) {
    return _(A) === s;
  }, be.isContextProvider = function(A) {
    return _(A) === a;
  }, be.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }, be.isForwardRef = function(A) {
    return _(A) === c;
  }, be.isFragment = function(A) {
    return _(A) === r;
  }, be.isLazy = function(A) {
    return _(A) === l;
  }, be.isMemo = function(A) {
    return _(A) === f;
  }, be.isPortal = function(A) {
    return _(A) === t;
  }, be.isProfiler = function(A) {
    return _(A) === i;
  }, be.isStrictMode = function(A) {
    return _(A) === n;
  }, be.isSuspense = function(A) {
    return _(A) === u;
  }, be.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === r || A === i || A === h || A === n || A === u || A === o || A === m || typeof A == "object" && A !== null && (A.$$typeof === l || A.$$typeof === f || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || A.$$typeof === p || A.$$typeof === v || A[0] === d);
  }, be.typeOf = _, be;
}
var we = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function Yh() {
  return Ms || (Ms = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, c = 60112, u = 60113, o = 60120, f = 60115, l = 60116, v = 60121, d = 60122, p = 60117, h = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var g = Symbol.for;
      e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), n = g("react.strict_mode"), i = g("react.profiler"), a = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), u = g("react.suspense"), o = g("react.suspense_list"), f = g("react.memo"), l = g("react.lazy"), v = g("react.block"), d = g("react.server.block"), p = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), h = g("react.debug_trace_mode"), g("react.offscreen"), m = g("react.legacy_hidden");
    }
    var _ = !1;
    function w(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === i || B === h || B === n || B === u || B === o || B === m || _ || typeof B == "object" && B !== null && (B.$$typeof === l || B.$$typeof === f || B.$$typeof === a || B.$$typeof === s || B.$$typeof === c || B.$$typeof === p || B.$$typeof === v || B[0] === d));
    }
    function b(B) {
      if (typeof B == "object" && B !== null) {
        var x = B.$$typeof;
        switch (x) {
          case e:
            var oe = B.type;
            switch (oe) {
              case r:
              case i:
              case n:
              case u:
              case o:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case s:
                  case c:
                  case l:
                  case f:
                  case a:
                    return de;
                  default:
                    return x;
                }
            }
          case t:
            return x;
        }
      }
    }
    var y = s, j = a, $ = e, R = c, q = r, V = l, L = f, k = t, A = i, re = n, U = u, T = !1, C = !1;
    function F(B) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(B) {
      return C || (C = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function E(B) {
      return b(B) === s;
    }
    function M(B) {
      return b(B) === a;
    }
    function D(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function I(B) {
      return b(B) === c;
    }
    function H(B) {
      return b(B) === r;
    }
    function W(B) {
      return b(B) === l;
    }
    function O(B) {
      return b(B) === f;
    }
    function Y(B) {
      return b(B) === t;
    }
    function N(B) {
      return b(B) === i;
    }
    function Z(B) {
      return b(B) === n;
    }
    function J(B) {
      return b(B) === u;
    }
    we.ContextConsumer = y, we.ContextProvider = j, we.Element = $, we.ForwardRef = R, we.Fragment = q, we.Lazy = V, we.Memo = L, we.Portal = k, we.Profiler = A, we.StrictMode = re, we.Suspense = U, we.isAsyncMode = F, we.isConcurrentMode = Q, we.isContextConsumer = E, we.isContextProvider = M, we.isElement = D, we.isForwardRef = I, we.isFragment = H, we.isLazy = W, we.isMemo = O, we.isPortal = Y, we.isProfiler = N, we.isStrictMode = Z, we.isSuspense = J, we.isValidElementType = w, we.typeOf = b;
  }()), we;
}
process.env.NODE_ENV === "production" ? Ha.exports = Kh() : Ha.exports = Yh();
var Ho = Ha.exports;
function Gh(e) {
  function t(D, I, H, W, O) {
    for (var Y = 0, N = 0, Z = 0, J = 0, B, x, oe = 0, de = 0, ne, Ee = ne = B = 0, fe = 0, Ce = 0, Xe = 0, $e = 0, Tt = H.length, at = Tt - 1, Be, ie = "", Pe = "", Ct = "", ot = "", Ze; fe < Tt; ) {
      if (x = H.charCodeAt(fe), fe === at && N + J + Z + Y !== 0 && (N !== 0 && (x = N === 47 ? 10 : 47), J = Z = Y = 0, Tt++, at++), N + J + Z + Y === 0) {
        if (fe === at && (0 < Ce && (ie = ie.replace(v, "")), 0 < ie.trim().length)) {
          switch (x) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += H.charAt(fe);
          }
          x = 59;
        }
        switch (x) {
          case 123:
            for (ie = ie.trim(), B = ie.charCodeAt(0), ne = 1, $e = ++fe; fe < Tt; ) {
              switch (x = H.charCodeAt(fe)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (x = H.charCodeAt(fe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ee = fe + 1; Ee < at; ++Ee)
                          switch (H.charCodeAt(Ee)) {
                            case 47:
                              if (x === 42 && H.charCodeAt(Ee - 1) === 42 && fe + 2 !== Ee) {
                                fe = Ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (x === 47) {
                                fe = Ee + 1;
                                break e;
                              }
                          }
                        fe = Ee;
                      }
                  }
                  break;
                case 91:
                  x++;
                case 40:
                  x++;
                case 34:
                case 39:
                  for (; fe++ < at && H.charCodeAt(fe) !== x; )
                    ;
              }
              if (ne === 0)
                break;
              fe++;
            }
            switch (ne = H.substring($e, fe), B === 0 && (B = (ie = ie.replace(l, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < Ce && (ie = ie.replace(v, "")), x = ie.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ce = I;
                    break;
                  default:
                    Ce = T;
                }
                if (ne = t(I, Ce, ne, x, O + 1), $e = ne.length, 0 < F && (Ce = r(T, ie, Xe), Ze = c(3, ne, Ce, I, A, k, $e, x, O, W), ie = Ce.join(""), Ze !== void 0 && ($e = (ne = Ze.trim()).length) === 0 && (x = 0, ne = "")), 0 < $e)
                  switch (x) {
                    case 115:
                      ie = ie.replace(j, s);
                    case 100:
                    case 109:
                    case 45:
                      ne = ie + "{" + ne + "}";
                      break;
                    case 107:
                      ie = ie.replace(_, "$1 $2"), ne = ie + "{" + ne + "}", ne = U === 1 || U === 2 && a("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                      break;
                    default:
                      ne = ie + ne, W === 112 && (ne = (Pe += ne, ""));
                  }
                else
                  ne = "";
                break;
              default:
                ne = t(I, r(I, ie, Xe), ne, W, O + 1);
            }
            Ct += ne, ne = Xe = Ce = Ee = B = 0, ie = "", x = H.charCodeAt(++fe);
            break;
          case 125:
          case 59:
            if (ie = (0 < Ce ? ie.replace(v, "") : ie).trim(), 1 < ($e = ie.length))
              switch (Ee === 0 && (B = ie.charCodeAt(0), B === 45 || 96 < B && 123 > B) && ($e = (ie = ie.replace(" ", ":")).length), 0 < F && (Ze = c(1, ie, I, D, A, k, Pe.length, W, O, W)) !== void 0 && ($e = (ie = Ze.trim()).length) === 0 && (ie = "\0\0"), B = ie.charCodeAt(0), x = ie.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    ot += ie + H.charAt(fe);
                    break;
                  }
                default:
                  ie.charCodeAt($e - 1) !== 58 && (Pe += i(ie, B, x, ie.charCodeAt(2)));
              }
            Xe = Ce = Ee = B = 0, ie = "", x = H.charCodeAt(++fe);
        }
      }
      switch (x) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + B === 0 && W !== 107 && 0 < ie.length && (Ce = 1, ie += "\0"), 0 < F * E && c(0, ie, I, D, A, k, Pe.length, W, O, W), k = 1, A++;
          break;
        case 59:
        case 125:
          if (N + J + Z + Y === 0) {
            k++;
            break;
          }
        default:
          switch (k++, Be = H.charAt(fe), x) {
            case 9:
            case 32:
              if (J + Y + N === 0)
                switch (oe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Be = "";
                    break;
                  default:
                    x !== 32 && (Be = " ");
                }
              break;
            case 0:
              Be = "\\0";
              break;
            case 12:
              Be = "\\f";
              break;
            case 11:
              Be = "\\v";
              break;
            case 38:
              J + N + Y === 0 && (Ce = Xe = 1, Be = "\f" + Be);
              break;
            case 108:
              if (J + N + Y + re === 0 && 0 < Ee)
                switch (fe - Ee) {
                  case 2:
                    oe === 112 && H.charCodeAt(fe - 3) === 58 && (re = oe);
                  case 8:
                    de === 111 && (re = de);
                }
              break;
            case 58:
              J + N + Y === 0 && (Ee = fe);
              break;
            case 44:
              N + Z + J + Y === 0 && (Ce = 1, Be += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (J = J === x ? 0 : J === 0 ? x : J);
              break;
            case 91:
              J + N + Z === 0 && Y++;
              break;
            case 93:
              J + N + Z === 0 && Y--;
              break;
            case 41:
              J + N + Y === 0 && Z--;
              break;
            case 40:
              if (J + N + Y === 0) {
                if (B === 0)
                  switch (2 * oe + 3 * de) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                Z++;
              }
              break;
            case 64:
              N + Z + J + Y + Ee + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + Y + Z))
                switch (N) {
                  case 0:
                    switch (2 * x + 3 * H.charCodeAt(fe + 1)) {
                      case 235:
                        N = 47;
                        break;
                      case 220:
                        $e = fe, N = 42;
                    }
                    break;
                  case 42:
                    x === 47 && oe === 42 && $e + 2 !== fe && (H.charCodeAt($e + 2) === 33 && (Pe += H.substring($e, fe + 1)), Be = "", N = 0);
                }
          }
          N === 0 && (ie += Be);
      }
      de = oe, oe = x, fe++;
    }
    if ($e = Pe.length, 0 < $e) {
      if (Ce = I, 0 < F && (Ze = c(2, Pe, Ce, D, A, k, $e, W, O, W), Ze !== void 0 && (Pe = Ze).length === 0))
        return ot + Pe + Ct;
      if (Pe = Ce.join(",") + "{" + Pe + "}", U * re !== 0) {
        switch (U !== 2 || a(Pe, 2) || (re = 0), re) {
          case 111:
            Pe = Pe.replace(b, ":-moz-$1") + Pe;
            break;
          case 112:
            Pe = Pe.replace(w, "::-webkit-input-$1") + Pe.replace(w, "::-moz-$1") + Pe.replace(w, ":-ms-input-$1") + Pe;
        }
        re = 0;
      }
    }
    return ot + Pe + Ct;
  }
  function r(D, I, H) {
    var W = I.trim().split(m);
    I = W;
    var O = W.length, Y = D.length;
    switch (Y) {
      case 0:
      case 1:
        var N = 0;
        for (D = Y === 0 ? "" : D[0] + " "; N < O; ++N)
          I[N] = n(D, I[N], H).trim();
        break;
      default:
        var Z = N = 0;
        for (I = []; N < O; ++N)
          for (var J = 0; J < Y; ++J)
            I[Z++] = n(D[J] + " ", W[N], H).trim();
    }
    return I;
  }
  function n(D, I, H) {
    var W = I.charCodeAt(0);
    switch (33 > W && (W = (I = I.trim()).charCodeAt(0)), W) {
      case 38:
        return I.replace(g, "$1" + D.trim());
      case 58:
        return D.trim() + I.replace(g, "$1" + D.trim());
      default:
        if (0 < 1 * H && 0 < I.indexOf("\f"))
          return I.replace(g, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + I;
  }
  function i(D, I, H, W) {
    var O = D + ";", Y = 2 * I + 3 * H + 4 * W;
    if (Y === 944) {
      D = O.indexOf(":", 9) + 1;
      var N = O.substring(D, O.length - 1).trim();
      return N = O.substring(0, D).trim() + N + ";", U === 1 || U === 2 && a(N, 1) ? "-webkit-" + N + N : N;
    }
    if (U === 0 || U === 2 && !a(O, 1))
      return O;
    switch (Y) {
      case 1015:
        return O.charCodeAt(10) === 97 ? "-webkit-" + O + O : O;
      case 951:
        return O.charCodeAt(3) === 116 ? "-webkit-" + O + O : O;
      case 963:
        return O.charCodeAt(5) === 110 ? "-webkit-" + O + O : O;
      case 1009:
        if (O.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + O + O;
      case 978:
        return "-webkit-" + O + "-moz-" + O + O;
      case 1019:
      case 983:
        return "-webkit-" + O + "-moz-" + O + "-ms-" + O + O;
      case 883:
        if (O.charCodeAt(8) === 45)
          return "-webkit-" + O + O;
        if (0 < O.indexOf("image-set(", 11))
          return O.replace(L, "$1-webkit-$2") + O;
        break;
      case 932:
        if (O.charCodeAt(4) === 45)
          switch (O.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + O.replace("-grow", "") + "-webkit-" + O + "-ms-" + O.replace("grow", "positive") + O;
            case 115:
              return "-webkit-" + O + "-ms-" + O.replace("shrink", "negative") + O;
            case 98:
              return "-webkit-" + O + "-ms-" + O.replace("basis", "preferred-size") + O;
          }
        return "-webkit-" + O + "-ms-" + O + O;
      case 964:
        return "-webkit-" + O + "-ms-flex-" + O + O;
      case 1023:
        if (O.charCodeAt(8) !== 99)
          break;
        return N = O.substring(O.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + O + "-ms-flex-pack" + N + O;
      case 1005:
        return p.test(O) ? O.replace(d, ":-webkit-") + O.replace(d, ":-moz-") + O : O;
      case 1e3:
        switch (N = O.substring(13).trim(), I = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(I)) {
          case 226:
            N = O.replace(y, "tb");
            break;
          case 232:
            N = O.replace(y, "tb-rl");
            break;
          case 220:
            N = O.replace(y, "lr");
            break;
          default:
            return O;
        }
        return "-webkit-" + O + "-ms-" + N + O;
      case 1017:
        if (O.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (I = (O = D).length - 10, N = (O.charCodeAt(I) === 33 ? O.substring(0, I) : O).substring(D.indexOf(":", 7) + 1).trim(), Y = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8))
              break;
          case 115:
            O = O.replace(N, "-webkit-" + N) + ";" + O;
            break;
          case 207:
          case 102:
            O = O.replace(N, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + O.replace(N, "-webkit-" + N) + ";" + O.replace(N, "-ms-" + N + "box") + ";" + O;
        }
        return O + ";";
      case 938:
        if (O.charCodeAt(5) === 45)
          switch (O.charCodeAt(6)) {
            case 105:
              return N = O.replace("-items", ""), "-webkit-" + O + "-webkit-box-" + N + "-ms-flex-" + N + O;
            case 115:
              return "-webkit-" + O + "-ms-flex-item-" + O.replace(R, "") + O;
            default:
              return "-webkit-" + O + "-ms-flex-line-pack" + O.replace("align-content", "").replace(R, "") + O;
          }
        break;
      case 973:
      case 989:
        if (O.charCodeAt(3) !== 45 || O.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (V.test(D) === !0)
          return (N = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(D.replace("stretch", "fill-available"), I, H, W).replace(":fill-available", ":stretch") : O.replace(N, "-webkit-" + N) + O.replace(N, "-moz-" + N.replace("fill-", "")) + O;
        break;
      case 962:
        if (O = "-webkit-" + O + (O.charCodeAt(5) === 102 ? "-ms-" + O : "") + O, H + W === 211 && O.charCodeAt(13) === 105 && 0 < O.indexOf("transform", 10))
          return O.substring(0, O.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + O;
    }
    return O;
  }
  function a(D, I) {
    var H = D.indexOf(I === 1 ? ":" : "{"), W = D.substring(0, I !== 3 ? H : 10);
    return H = D.substring(H + 1, D.length - 1), Q(I !== 2 ? W : W.replace(q, "$1"), H, I);
  }
  function s(D, I) {
    var H = i(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return H !== I + ";" ? H.replace($, " or ($1)").substring(4) : "(" + I + ")";
  }
  function c(D, I, H, W, O, Y, N, Z, J, B) {
    for (var x = 0, oe = I, de; x < F; ++x)
      switch (de = C[x].call(f, D, oe, H, W, O, Y, N, Z, J, B)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = de;
      }
    if (oe !== I)
      return oe;
  }
  function u(D) {
    switch (D) {
      case void 0:
      case null:
        F = C.length = 0;
        break;
      default:
        if (typeof D == "function")
          C[F++] = D;
        else if (typeof D == "object")
          for (var I = 0, H = D.length; I < H; ++I)
            u(D[I]);
        else
          E = !!D | 0;
    }
    return u;
  }
  function o(D) {
    return D = D.prefix, D !== void 0 && (Q = null, D ? typeof D != "function" ? U = 1 : (U = 2, Q = D) : U = 0), o;
  }
  function f(D, I) {
    var H = D;
    if (33 > H.charCodeAt(0) && (H = H.trim()), M = H, H = [M], 0 < F) {
      var W = c(-1, I, H, H, A, k, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (I = W);
    }
    var O = t(T, H, I, 0, 0);
    return 0 < F && (W = c(-2, O, H, H, A, k, O.length, 0, 0, 0), W !== void 0 && (O = W)), M = "", re = 0, k = A = 1, O;
  }
  var l = /^\0+/g, v = /[\0\r\f]/g, d = /: */g, p = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, g = /([\t\r\n ])*\f?&/g, _ = /@(k\w+)\s*(\S*)\s*/, w = /::(place)/g, b = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, j = /\(\s*(.*)\s*\)/g, $ = /([\s\S]*?);/g, R = /-self|flex-/g, q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, V = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, k = 1, A = 1, re = 0, U = 1, T = [], C = [], F = 0, Q = null, E = 0, M = "";
  return f.use = u, f.set = o, e !== void 0 && o(e), f;
}
var Jh = {
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
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Xh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Zh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Hs = /* @__PURE__ */ Xh(
  function(e) {
    return Zh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), La = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls;
function ep() {
  if (Ls)
    return pe;
  Ls = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var j = y.$$typeof;
      switch (j) {
        case t:
          switch (y = y.type, y) {
            case u:
            case o:
            case n:
            case a:
            case i:
            case l:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case f:
                case p:
                case d:
                case s:
                  return y;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function b(y) {
    return w(y) === o;
  }
  return pe.AsyncMode = u, pe.ConcurrentMode = o, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = f, pe.Fragment = n, pe.Lazy = p, pe.Memo = d, pe.Portal = r, pe.Profiler = a, pe.StrictMode = i, pe.Suspense = l, pe.isAsyncMode = function(y) {
    return b(y) || w(y) === u;
  }, pe.isConcurrentMode = b, pe.isContextConsumer = function(y) {
    return w(y) === c;
  }, pe.isContextProvider = function(y) {
    return w(y) === s;
  }, pe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, pe.isForwardRef = function(y) {
    return w(y) === f;
  }, pe.isFragment = function(y) {
    return w(y) === n;
  }, pe.isLazy = function(y) {
    return w(y) === p;
  }, pe.isMemo = function(y) {
    return w(y) === d;
  }, pe.isPortal = function(y) {
    return w(y) === r;
  }, pe.isProfiler = function(y) {
    return w(y) === a;
  }, pe.isStrictMode = function(y) {
    return w(y) === i;
  }, pe.isSuspense = function(y) {
    return w(y) === l;
  }, pe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === o || y === a || y === i || y === l || y === v || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === d || y.$$typeof === s || y.$$typeof === c || y.$$typeof === f || y.$$typeof === m || y.$$typeof === g || y.$$typeof === _ || y.$$typeof === h);
  }, pe.typeOf = w, pe;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function tp() {
  return qs || (qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function w(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === o || x === a || x === i || x === l || x === v || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === d || x.$$typeof === s || x.$$typeof === c || x.$$typeof === f || x.$$typeof === m || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === h);
    }
    function b(x) {
      if (typeof x == "object" && x !== null) {
        var oe = x.$$typeof;
        switch (oe) {
          case t:
            var de = x.type;
            switch (de) {
              case u:
              case o:
              case n:
              case a:
              case i:
              case l:
                return de;
              default:
                var ne = de && de.$$typeof;
                switch (ne) {
                  case c:
                  case f:
                  case p:
                  case d:
                  case s:
                    return ne;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var y = u, j = o, $ = c, R = s, q = t, V = f, L = n, k = p, A = d, re = r, U = a, T = i, C = l, F = !1;
    function Q(x) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || b(x) === u;
    }
    function E(x) {
      return b(x) === o;
    }
    function M(x) {
      return b(x) === c;
    }
    function D(x) {
      return b(x) === s;
    }
    function I(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function H(x) {
      return b(x) === f;
    }
    function W(x) {
      return b(x) === n;
    }
    function O(x) {
      return b(x) === p;
    }
    function Y(x) {
      return b(x) === d;
    }
    function N(x) {
      return b(x) === r;
    }
    function Z(x) {
      return b(x) === a;
    }
    function J(x) {
      return b(x) === i;
    }
    function B(x) {
      return b(x) === l;
    }
    ve.AsyncMode = y, ve.ConcurrentMode = j, ve.ContextConsumer = $, ve.ContextProvider = R, ve.Element = q, ve.ForwardRef = V, ve.Fragment = L, ve.Lazy = k, ve.Memo = A, ve.Portal = re, ve.Profiler = U, ve.StrictMode = T, ve.Suspense = C, ve.isAsyncMode = Q, ve.isConcurrentMode = E, ve.isContextConsumer = M, ve.isContextProvider = D, ve.isElement = I, ve.isForwardRef = H, ve.isFragment = W, ve.isLazy = O, ve.isMemo = Y, ve.isPortal = N, ve.isProfiler = Z, ve.isStrictMode = J, ve.isSuspense = B, ve.isValidElementType = w, ve.typeOf = b;
  }()), ve;
}
process.env.NODE_ENV === "production" ? La.exports = ep() : La.exports = tp();
var rp = La.exports, Lo = rp, np = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ip = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ap = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qo = {};
qo[Lo.ForwardRef] = ap;
qo[Lo.Memo] = Pf;
function Us(e) {
  return Lo.isMemo(e) ? Pf : qo[e.$$typeof] || np;
}
var op = Object.defineProperty, sp = Object.getOwnPropertyNames, Ws = Object.getOwnPropertySymbols, up = Object.getOwnPropertyDescriptor, cp = Object.getPrototypeOf, Bs = Object.prototype;
function Ef(e, t, r) {
  if (typeof t != "string") {
    if (Bs) {
      var n = cp(t);
      n && n !== Bs && Ef(e, n, r);
    }
    var i = sp(t);
    Ws && (i = i.concat(Ws(t)));
    for (var a = Us(e), s = Us(t), c = 0; c < i.length; ++c) {
      var u = i[c];
      if (!ip[u] && !(r && r[u]) && !(s && s[u]) && !(a && a[u])) {
        var o = up(t, u);
        try {
          op(e, u, o);
        } catch {
        }
      }
    }
  }
  return e;
}
var lp = Ef;
const fp = /* @__PURE__ */ Kt(lp);
function ct() {
  return (ct = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var zs = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, qa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ho.typeOf(e);
}, Gn = Object.freeze([]), wt = Object.freeze({});
function wr(e) {
  return typeof e == "function";
}
function Ua(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Uo(e) {
  return e && typeof e.styledComponentId == "string";
}
var kt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Wo = typeof window < "u" && "HTMLElement" in window, dp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), hp = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function pp() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Yt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(pp.apply(void 0, [hp[e]].concat(r)).trim());
}
var vp = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, a = i.length, s = a; r >= s; )
        (s <<= 1) < 0 && Yt(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(i), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), o = 0, f = n.length; o < f; o++)
      this.tag.insertRule(u, n[o]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), a = i + n;
      this.groupSizes[r] = 0;
      for (var s = i; s < a; s++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], a = this.indexOfGroup(r), s = a + i, c = a; c < s; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Kn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), yr = 1, en = function(e) {
  if (Kn.has(e))
    return Kn.get(e);
  for (; Jn.has(yr); )
    yr++;
  var t = yr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Yt(16, "" + t), Kn.set(e, t), Jn.set(t, e), t;
}, mp = function(e) {
  return Jn.get(e);
}, gp = function(e, t) {
  t >= yr && (yr = t + 1), Kn.set(e, t), Jn.set(t, e);
}, yp = "style[" + kt + '][data-styled-version="5.3.11"]', bp = new RegExp("^" + kt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), wp = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, s = i.length; a < s; a++)
    (n = i[a]) && e.registerName(t, n);
}, _p = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(bp);
      if (c) {
        var u = 0 | parseInt(c[1], 10), o = c[2];
        u !== 0 && (gp(o, u), wp(e, o, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(s);
    }
  }
}, Sp = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, xf = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(c) {
    for (var u = c.childNodes, o = u.length; o >= 0; o--) {
      var f = u[o];
      if (f && f.nodeType === 1 && f.hasAttribute(kt))
        return f;
    }
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(kt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = Sp();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, Op = function() {
  function e(r) {
    var n = this.element = xf(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var a = document.styleSheets, s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        if (u.ownerNode === i)
          return u;
      }
      Yt(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Rp = function() {
  function e(r) {
    var n = this.element = xf(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), a = this.nodes[r];
      return this.element.insertBefore(i, a || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Pp = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Vs = Wo, Ep = { isServer: !Wo, useCSSOMInjection: !dp }, jf = function() {
  function e(r, n, i) {
    r === void 0 && (r = wt), n === void 0 && (n = {}), this.options = ct({}, Ep, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Wo && Vs && (Vs = !1, function(a) {
      for (var s = document.querySelectorAll(yp), c = 0, u = s.length; c < u; c++) {
        var o = s[c];
        o && o.getAttribute(kt) !== "active" && (_p(a, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e.registerId = function(r) {
    return en(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(ct({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, a = n.useCSSOMInjection, s = n.target, r = i ? new Pp(s) : a ? new Op(s) : new Rp(s), new vp(r)));
    var r, n, i, a, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (en(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(en(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(en(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, a = "", s = 0; s < i; s++) {
        var c = mp(s);
        if (c !== void 0) {
          var u = r.names.get(c), o = n.getGroup(s);
          if (u && o && u.size) {
            var f = kt + ".g" + s + '[id="' + c + '"]', l = "";
            u !== void 0 && u.forEach(function(v) {
              v.length > 0 && (l += v + ",");
            }), a += "" + o + f + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), xp = /(a)(d)/gi, Qs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Qs(t % 52) + r;
  return (Qs(t % 52) + r).replace(xp, "$1-$2");
}
var Pt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Tf = function(e) {
  return Pt(5381, e);
};
function jp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wr(r) && !Uo(r))
      return !1;
  }
  return !0;
}
var Tp = Tf("5.3.11"), Cp = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && jp(t), this.componentId = r, this.baseHash = Pt(Tp, r), this.baseStyle = n, jf.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        a.push(this.staticRulesId);
      else {
        var s = Mt(this.rules, t, r, n).join(""), c = Wa(Pt(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(i, c)) {
          var u = n(s, "." + c, void 0, i);
          r.insertRules(i, c, u);
        }
        a.push(c), this.staticRulesId = c;
      }
    else {
      for (var o = this.rules.length, f = Pt(this.baseHash, n.hash), l = "", v = 0; v < o; v++) {
        var d = this.rules[v];
        if (typeof d == "string")
          l += d, process.env.NODE_ENV !== "production" && (f = Pt(f, d + v));
        else if (d) {
          var p = Mt(d, t, r, n), h = Array.isArray(p) ? p.join("") : p;
          f = Pt(f, h + v), l += h;
        }
      }
      if (l) {
        var m = Wa(f >>> 0);
        if (!r.hasNameForId(i, m)) {
          var g = n(l, "." + m, void 0, i);
          r.insertRules(i, m, g);
        }
        a.push(m);
      }
    }
    return a.join(" ");
  }, e;
}(), Ap = /^\s*\/\/.*$/gm, $p = [":", "[", ".", "#"];
function Ip(e) {
  var t, r, n, i, a = e === void 0 ? wt : e, s = a.options, c = s === void 0 ? wt : s, u = a.plugins, o = u === void 0 ? Gn : u, f = new Gh(c), l = [], v = /* @__PURE__ */ function(h) {
    function m(g) {
      if (g)
        try {
          h(g + "}");
        } catch {
        }
    }
    return function(g, _, w, b, y, j, $, R, q, V) {
      switch (g) {
        case 1:
          if (q === 0 && _.charCodeAt(0) === 64)
            return h(_ + ";"), "";
          break;
        case 2:
          if (R === 0)
            return _ + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return h(w[0] + _), "";
            default:
              return _ + (V === 0 ? "/*|*/" : "");
          }
        case -2:
          _.split("/*|*/}").forEach(m);
      }
    };
  }(function(h) {
    l.push(h);
  }), d = function(h, m, g) {
    return m === 0 && $p.indexOf(g[r.length]) !== -1 || g.match(i) ? h : "." + t;
  };
  function p(h, m, g, _) {
    _ === void 0 && (_ = "&");
    var w = h.replace(Ap, ""), b = m && g ? g + " " + m + " { " + w + " }" : w;
    return t = _, r = m, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), f(g || !m ? "" : m, b);
  }
  return f.use([].concat(o, [function(h, m, g) {
    h === 2 && g.length && g[0].lastIndexOf(r) > 0 && (g[0] = g[0].replace(n, d));
  }, v, function(h) {
    if (h === -2) {
      var m = l;
      return l = [], m;
    }
  }])), p.hash = o.length ? o.reduce(function(h, m) {
    return m.name || Yt(15), Pt(h, m.name);
  }, 5381).toString() : "", p;
}
var Cf = z.createContext();
Cf.Consumer;
var Af = z.createContext(), Fp = (Af.Consumer, new jf()), Ba = Ip();
function Np() {
  return dt(Cf) || Fp;
}
function Dp() {
  return dt(Af) || Ba;
}
var kp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = Ba);
      var s = n.name + a.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Yt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ba), this.name + t.hash;
  }, e;
}(), Mp = /([A-Z])/, Hp = /([A-Z])/g, Lp = /^ms-/, qp = function(e) {
  return "-" + e.toLowerCase();
};
function Ks(e) {
  return Mp.test(e) ? e.replace(Hp, qp).replace(Lp, "-ms-") : e;
}
var Ys = function(e) {
  return e == null || e === !1 || e === "";
};
function Mt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, a = [], s = 0, c = e.length; s < c; s += 1)
      (i = Mt(e[s], t, r, n)) !== "" && (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
    return a;
  }
  if (Ys(e))
    return "";
  if (Uo(e))
    return "." + e.styledComponentId;
  if (wr(e)) {
    if (typeof (o = e) != "function" || o.prototype && o.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && Ho.isElement(u) && console.warn(Ua(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Mt(u, t, r, n);
  }
  var o;
  return e instanceof kp ? r ? (e.inject(r, n), e.getName(n)) : e : qa(e) ? function f(l, v) {
    var d, p, h = [];
    for (var m in l)
      l.hasOwnProperty(m) && !Ys(l[m]) && (Array.isArray(l[m]) && l[m].isCss || wr(l[m]) ? h.push(Ks(m) + ":", l[m], ";") : qa(l[m]) ? h.push.apply(h, f(l[m], m)) : h.push(Ks(m) + ": " + (d = m, (p = l[m]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || d in Jh || d.startsWith("--") ? String(p).trim() : p + "px") + ";"));
    return v ? [v + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var Gs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Up(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return wr(e) || qa(e) ? Gs(Mt(zs(Gn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Gs(Mt(zs(e, r)));
}
var Js = /invalid hook call/i, tn = /* @__PURE__ */ new Set(), Wp = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        if (Js.test(a))
          i = !1, tn.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
            c[u - 1] = arguments[u];
          n.apply(void 0, [a].concat(c));
        }
      }, Ve(), i && !tn.has(r) && (console.warn(r), tn.add(r));
    } catch (a) {
      Js.test(a.message) && tn.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Bp = function(e, t, r) {
  return r === void 0 && (r = wt), e.theme !== r.theme && e.theme || t || r.theme;
}, zp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vp = /(^-|-$)/g;
function mi(e) {
  return e.replace(zp, "-").replace(Vp, "");
}
var Qp = function(e) {
  return Wa(Tf(e) >>> 0);
};
function rn(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Kp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Yp(e, t, r) {
  var n = e[r];
  za(t) && za(n) ? $f(n, t) : e[r] = t;
}
function $f(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, a = r; i < a.length; i++) {
    var s = a[i];
    if (za(s))
      for (var c in s)
        Kp(c) && Yp(e, s[c], c);
  }
  return e;
}
var If = z.createContext();
If.Consumer;
var gi = {};
function Ff(e, t, r) {
  var n = Uo(e), i = !rn(e), a = t.attrs, s = a === void 0 ? Gn : a, c = t.componentId, u = c === void 0 ? function(_, w) {
    var b = typeof _ != "string" ? "sc" : mi(_);
    gi[b] = (gi[b] || 0) + 1;
    var y = b + "-" + Qp("5.3.11" + b + gi[b]);
    return w ? w + "-" + y : y;
  }(t.displayName, t.parentComponentId) : c, o = t.displayName, f = o === void 0 ? function(_) {
    return rn(_) ? "styled." + _ : "Styled(" + Ua(_) + ")";
  }(e) : o, l = t.displayName && t.componentId ? mi(t.displayName) + "-" + t.componentId : t.componentId || u, v = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, d = t.shouldForwardProp;
  n && e.shouldForwardProp && (d = t.shouldForwardProp ? function(_, w, b) {
    return e.shouldForwardProp(_, w, b) && t.shouldForwardProp(_, w, b);
  } : e.shouldForwardProp);
  var p, h = new Cp(r, l, n ? e.componentStyle : void 0), m = h.isStatic && s.length === 0, g = function(_, w) {
    return function(b, y, j, $) {
      var R = b.attrs, q = b.componentStyle, V = b.defaultProps, L = b.foldedComponentIds, k = b.shouldForwardProp, A = b.styledComponentId, re = b.target, U = function(W, O, Y) {
        W === void 0 && (W = wt);
        var N = ct({}, O, { theme: W }), Z = {};
        return Y.forEach(function(J) {
          var B, x, oe, de = J;
          for (B in wr(de) && (de = de(N)), de)
            N[B] = Z[B] = B === "className" ? (x = Z[B], oe = de[B], x && oe ? x + " " + oe : x || oe) : de[B];
        }), [N, Z];
      }(Bp(y, dt(If), V) || wt, y, R), T = U[0], C = U[1], F = function(W, O, Y, N) {
        var Z = Np(), J = Dp(), B = O ? W.generateAndInjectStyles(wt, Z, J) : W.generateAndInjectStyles(Y, Z, J);
        return process.env.NODE_ENV !== "production" && !O && N && N(B), B;
      }(q, $, T, process.env.NODE_ENV !== "production" ? b.warnTooManyClasses : void 0), Q = j, E = C.$as || y.$as || C.as || y.as || re, M = rn(E), D = C !== y ? ct({}, y, {}, C) : y, I = {};
      for (var H in D)
        H[0] !== "$" && H !== "as" && (H === "forwardedAs" ? I.as = D[H] : (k ? k(H, Hs, E) : !M || Hs(H)) && (I[H] = D[H]));
      return y.style && C.style !== y.style && (I.style = ct({}, y.style, {}, C.style)), I.className = Array.prototype.concat(L, A, F !== A ? F : null, y.className, C.className).filter(Boolean).join(" "), I.ref = Q, Hh(E, I);
    }(p, _, w, m);
  };
  return g.displayName = f, (p = z.forwardRef(g)).attrs = v, p.componentStyle = h, p.displayName = f, p.shouldForwardProp = d, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gn, p.styledComponentId = l, p.target = n ? e.target : e, p.withComponent = function(_) {
    var w = t.componentId, b = function(j, $) {
      if (j == null)
        return {};
      var R, q, V = {}, L = Object.keys(j);
      for (q = 0; q < L.length; q++)
        R = L[q], $.indexOf(R) >= 0 || (V[R] = j[R]);
      return V;
    }(t, ["componentId"]), y = w && w + "-" + (rn(_) ? _ : mi(Ua(_)));
    return Ff(_, ct({}, b, { attrs: v, componentId: y }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = n ? $f({}, e.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (Wp(f, l), p.warnTooManyClasses = /* @__PURE__ */ function(_, w) {
    var b = {}, y = !1;
    return function(j) {
      if (!y && (b[j] = !0, Object.keys(b).length >= 200)) {
        var $ = w ? ' with the id of "' + w + '"' : "";
        console.warn("Over 200 classes were generated for component " + _ + $ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, b = {};
      }
    };
  }(f, l)), Object.defineProperty(p, "toString", { value: function() {
    return "." + p.styledComponentId;
  } }), i && fp(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var _r = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = wt), !Ho.isValidElementType(n))
      return Yt(1, String(n));
    var a = function() {
      return r(n, i, Up.apply(void 0, arguments));
    };
    return a.withConfig = function(s) {
      return t(r, n, ct({}, i, {}, s));
    }, a.attrs = function(s) {
      return t(r, n, ct({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, a;
  }(Ff, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _r[e] = _r(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Bo = _r.div`
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer&family=Overpass&display=swap');

  padding: 0;
  margin: 0;
  font-family: 'Overpass', sans-serif;
  background: #f9f9f9;
  text-rendering: optimizeLegibility;

  h1, h2, h3, h4 {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, li, ul {
    line-height: 1.5;
    font-size: 1.1rem;
  }

  * {
    box-sizing: border-box;
  }

  pre {
    overflow-x: scroll;
  }

  /* Using !important here to override the default Instantsearch styles */
  mark {
    background-color: yellow !important;
    color: black !important;
  }

  /* The search box uses these classes for styling. */
  /* Overriding default styles can get ugly so we sometimes have to use !important */

  .ais-RangeInput-form {
    display: inline !important;
  }

  .ais-SortBy {
    flex-grow: 1;
  }

  .ais-CurrentRefinements {
    margin-bottom: 20px;
  }

  .ais-CurrentRefinements-list {
    display: flex !important;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .ais-CurrentRefinements--noRefinement {
    height: 0;
    margin: 0;
    padding: 0;
  }

  .ais-CurrentRefinements-item {
    margin: auto;
    padding: 5px;
  }

  .ais-CurrentRefinements-label {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 800px) {
    .ais-SearchBox {
      flex-grow: 1;
    }
  }
`, Va = "7.5.4";
function ke() {
  this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
}
var zo = ke;
ke.prototype._events = void 0;
ke.prototype._maxListeners = void 0;
ke.defaultMaxListeners = 10;
ke.prototype.setMaxListeners = function(e) {
  if (!Gp(e) || e < 0 || isNaN(e))
    throw TypeError("n must be a positive number");
  return this._maxListeners = e, this;
};
ke.prototype.emit = function(e) {
  var t, r, n, i, a, s;
  if (this._events || (this._events = {}), e === "error" && (!this._events.error || Sr(this._events.error) && !this._events.error.length)) {
    if (t = arguments[1], t instanceof Error)
      throw t;
    var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
    throw c.context = t, c;
  }
  if (r = this._events[e], Nf(r))
    return !1;
  if (lt(r))
    switch (arguments.length) {
      case 1:
        r.call(this);
        break;
      case 2:
        r.call(this, arguments[1]);
        break;
      case 3:
        r.call(this, arguments[1], arguments[2]);
        break;
      default:
        i = Array.prototype.slice.call(arguments, 1), r.apply(this, i);
    }
  else if (Sr(r))
    for (i = Array.prototype.slice.call(arguments, 1), s = r.slice(), n = s.length, a = 0; a < n; a++)
      s[a].apply(this, i);
  return !0;
};
ke.prototype.addListener = function(e, t) {
  var r;
  if (!lt(t))
    throw TypeError("listener must be a function");
  return this._events || (this._events = {}), this._events.newListener && this.emit(
    "newListener",
    e,
    lt(t.listener) ? t.listener : t
  ), this._events[e] ? Sr(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, Sr(this._events[e]) && !this._events[e].warned && (Nf(this._maxListeners) ? r = ke.defaultMaxListeners : r = this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error(
    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
    this._events[e].length
  ), typeof console.trace == "function" && console.trace())), this;
};
ke.prototype.on = ke.prototype.addListener;
ke.prototype.once = function(e, t) {
  if (!lt(t))
    throw TypeError("listener must be a function");
  var r = !1;
  function n() {
    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
  }
  return n.listener = t, this.on(e, n), this;
};
ke.prototype.removeListener = function(e, t) {
  var r, n, i, a;
  if (!lt(t))
    throw TypeError("listener must be a function");
  if (!this._events || !this._events[e])
    return this;
  if (r = this._events[e], i = r.length, n = -1, r === t || lt(r.listener) && r.listener === t)
    delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
  else if (Sr(r)) {
    for (a = i; a-- > 0; )
      if (r[a] === t || r[a].listener && r[a].listener === t) {
        n = a;
        break;
      }
    if (n < 0)
      return this;
    r.length === 1 ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t);
  }
  return this;
};
ke.prototype.removeAllListeners = function(e) {
  var t, r;
  if (!this._events)
    return this;
  if (!this._events.removeListener)
    return arguments.length === 0 ? this._events = {} : this._events[e] && delete this._events[e], this;
  if (arguments.length === 0) {
    for (t in this._events)
      t !== "removeListener" && this.removeAllListeners(t);
    return this.removeAllListeners("removeListener"), this._events = {}, this;
  }
  if (r = this._events[e], lt(r))
    this.removeListener(e, r);
  else if (r)
    for (; r.length; )
      this.removeListener(e, r[r.length - 1]);
  return delete this._events[e], this;
};
ke.prototype.listeners = function(e) {
  var t;
  return !this._events || !this._events[e] ? t = [] : lt(this._events[e]) ? t = [this._events[e]] : t = this._events[e].slice(), t;
};
ke.prototype.listenerCount = function(e) {
  if (this._events) {
    var t = this._events[e];
    if (lt(t))
      return 1;
    if (t)
      return t.length;
  }
  return 0;
};
ke.listenerCount = function(e, t) {
  return e.listenerCount(t);
};
function lt(e) {
  return typeof e == "function";
}
function Gp(e) {
  return typeof e == "number";
}
function Sr(e) {
  return typeof e == "object" && e !== null;
}
function Nf(e) {
  return e === void 0;
}
const Jp = /* @__PURE__ */ Kt(zo);
function Xp(e, t) {
  e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
}
var Df = Xp, Zp = zo, ev = Df;
function ai(e, t) {
  this.main = e, this.fn = t, this.lastResults = null;
}
ev(ai, Zp);
ai.prototype.detach = function() {
  this.removeAllListeners(), this.main.detachDerivedHelper(this);
};
ai.prototype.getModifiedState = function(e) {
  return this.fn(e);
};
var tv = ai;
function rv(e) {
  return typeof e != "string" ? e : String(e).replace(/^-/, "\\-");
}
function nv(e) {
  return typeof e != "string" ? e : e.replace(/^\\-/, "-");
}
var Vo = {
  escapeFacetValue: rv,
  unescapeFacetValue: nv
};
function iv(e) {
  return typeof e == "object" && e !== null ? Qo(Array.isArray(e) ? [] : {}, e) : e;
}
function Xn(e) {
  return typeof e == "function" || Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
}
function Qo(e, t) {
  if (e === t)
    return e;
  for (var r in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, r) || r === "__proto__" || r === "constructor")) {
      var n = t[r], i = e[r];
      typeof i < "u" && typeof n > "u" || (Xn(i) && Xn(n) ? e[r] = Qo(i, n) : e[r] = iv(n));
    }
  return e;
}
function av(e) {
  Xn(e) || (e = {});
  for (var t = 1, r = arguments.length; t < r; t++) {
    var n = arguments[t];
    Xn(n) && Qo(e, n);
  }
  return e;
}
var oi = av;
function ov(e) {
  return e && Object.keys(e).length > 0;
}
var Ko = ov;
function sv(e, t) {
  if (e === null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Yo = sv, yi = oi;
function bi(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t;
  }, {});
}
var ze = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @param  {string} index The name of the index
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object[]} The queries
   */
  _getQueries: function(t, r) {
    var n = [];
    return n.push({
      indexName: t,
      params: ze._getHitsSearchParams(r)
    }), r.getRefinedDisjunctiveFacets().forEach(function(i) {
      n.push({
        indexName: t,
        params: ze._getDisjunctiveFacetSearchParams(
          r,
          i
        )
      });
    }), r.getRefinedHierarchicalFacets().forEach(function(i) {
      var a = r.getHierarchicalFacetByName(i), s = r.getHierarchicalRefinement(i), c = r._getHierarchicalFacetSeparator(a);
      if (s.length > 0 && s[0].split(c).length > 1) {
        var u = s[0].split(c).slice(0, -1).reduce(function(f, l, v) {
          return f.concat({
            attribute: a.attributes[v],
            value: v === 0 ? l : [f[f.length - 1].value, l].join(c)
          });
        }, []);
        u.forEach(function(o, f) {
          var l = ze._getDisjunctiveFacetSearchParams(
            r,
            o.attribute,
            f === 0
          );
          function v(h) {
            return a.attributes.some(function(m) {
              return m === h.split(":")[0];
            });
          }
          var d = (l.facetFilters || []).reduce(
            function(h, m) {
              if (Array.isArray(m)) {
                var g = m.filter(function(_) {
                  return !v(_);
                });
                g.length > 0 && h.push(g);
              }
              return typeof m == "string" && !v(m) && h.push(m), h;
            },
            []
          ), p = u[f - 1];
          f > 0 ? l.facetFilters = d.concat(
            p.attribute + ":" + p.value
          ) : l.facetFilters = d.length > 0 ? d : void 0, n.push({ indexName: t, params: l });
        });
      }
    }), n;
  },
  /**
   * Build search parameters used to fetch hits
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object.<string, any>} The search parameters for hits
   */
  _getHitsSearchParams: function(e) {
    var t = e.facets.concat(e.disjunctiveFacets).concat(ze._getHitsHierarchicalFacetsAttributes(e)).sort(), r = ze._getFacetFilters(e), n = ze._getNumericFilters(e), i = ze._getTagFilters(e), a = {
      facets: t.indexOf("*") > -1 ? ["*"] : t,
      tagFilters: i
    };
    return r.length > 0 && (a.facetFilters = r), n.length > 0 && (a.numericFilters = n), bi(yi({}, e.getQueryParams(), a));
  },
  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object} The search parameters for a disjunctive facet
   */
  _getDisjunctiveFacetSearchParams: function(e, t, r) {
    var n = ze._getFacetFilters(
      e,
      t,
      r
    ), i = ze._getNumericFilters(e, t), a = ze._getTagFilters(e), s = {
      hitsPerPage: 0,
      page: 0,
      analytics: !1,
      clickAnalytics: !1
    };
    a.length > 0 && (s.tagFilters = a);
    var c = e.getHierarchicalFacetByName(t);
    return c ? s.facets = ze._getDisjunctiveHierarchicalFacetAttribute(
      e,
      c,
      r
    ) : s.facets = t, i.length > 0 && (s.numericFilters = i), n.length > 0 && (s.facetFilters = n), bi(yi({}, e.getQueryParams(), s));
  },
  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function(e, t) {
    if (e.numericFilters)
      return e.numericFilters;
    var r = [];
    return Object.keys(e.numericRefinements).forEach(function(n) {
      var i = e.numericRefinements[n] || {};
      Object.keys(i).forEach(function(a) {
        var s = i[a] || [];
        t !== n && s.forEach(function(c) {
          if (Array.isArray(c)) {
            var u = c.map(function(o) {
              return n + a + o;
            });
            r.push(u);
          } else
            r.push(n + a + c);
        });
      });
    }), r;
  },
  /**
   * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @return {string} Tag filters in a single string
   */
  _getTagFilters: function(e) {
    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
  },
  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} [facet] if set, the current disjunctive facet
   * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
   * @return {array.<string>} The facet filters in the algolia format
   */
  _getFacetFilters: function(e, t, r) {
    var n = [], i = e.facetsRefinements || {};
    Object.keys(i).sort().forEach(function(u) {
      var o = i[u] || [];
      o.slice().sort().forEach(function(f) {
        n.push(u + ":" + f);
      });
    });
    var a = e.facetsExcludes || {};
    Object.keys(a).sort().forEach(function(u) {
      var o = a[u] || [];
      o.sort().forEach(function(f) {
        n.push(u + ":-" + f);
      });
    });
    var s = e.disjunctiveFacetsRefinements || {};
    Object.keys(s).sort().forEach(function(u) {
      var o = s[u] || [];
      if (!(u === t || !o || o.length === 0)) {
        var f = [];
        o.slice().sort().forEach(function(l) {
          f.push(u + ":" + l);
        }), n.push(f);
      }
    });
    var c = e.hierarchicalFacetsRefinements || {};
    return Object.keys(c).sort().forEach(function(u) {
      var o = c[u] || [], f = o[0];
      if (f !== void 0) {
        var l = e.getHierarchicalFacetByName(u), v = e._getHierarchicalFacetSeparator(l), d = e._getHierarchicalRootPath(l), p, h;
        if (t === u) {
          if (f.indexOf(v) === -1 || !d && r === !0 || d && d.split(v).length === f.split(v).length)
            return;
          d ? (h = d.split(v).length - 1, f = d) : (h = f.split(v).length - 2, f = f.slice(0, f.lastIndexOf(v))), p = l.attributes[h];
        } else
          h = f.split(v).length - 1, p = l.attributes[h];
        p && n.push([p + ":" + f]);
      }
    }), n;
  },
  _getHitsHierarchicalFacetsAttributes: function(e) {
    var t = [];
    return e.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function(n, i) {
        var a = e.getHierarchicalRefinement(
          i.name
        )[0];
        if (!a)
          return n.push(i.attributes[0]), n;
        var s = e._getHierarchicalFacetSeparator(i), c = a.split(s).length, u = i.attributes.slice(0, c + 1);
        return n.concat(u);
      },
      t
    );
  },
  _getDisjunctiveHierarchicalFacetAttribute: function(e, t, r) {
    var n = e._getHierarchicalFacetSeparator(t);
    if (r === !0) {
      var i = e._getHierarchicalRootPath(t), a = 0;
      return i && (a = i.split(n).length), [t.attributes[a]];
    }
    var s = e.getHierarchicalRefinement(t.name)[0] || "", c = s.split(n).length - 1;
    return t.attributes.slice(0, c + 1);
  },
  getSearchForFacetQuery: function(e, t, r, n) {
    var i = n.isDisjunctiveFacet(e) ? n.clearRefinements(e) : n, a = {
      facetQuery: t,
      facetName: e
    };
    return typeof r == "number" && (a.maxFacetHits = r), bi(
      yi(
        {},
        ze._getHitsSearchParams(i),
        a
      )
    );
  }
}, uv = ze, Go = function() {
  var t = Array.prototype.slice.call(arguments);
  return t.reduceRight(function(r, n) {
    return Object.keys(Object(n)).forEach(function(i) {
      n[i] !== void 0 && (r[i] !== void 0 && delete r[i], r[i] = n[i]);
    }), r;
  }, {});
}, si = function(t, r) {
  if (Array.isArray(t)) {
    for (var n = 0; n < t.length; n++)
      if (r(t[n]))
        return t[n];
  }
};
function cv(e, t) {
  return e.filter(function(r, n) {
    return t.indexOf(r) > -1 && e.indexOf(r) === n;
  });
}
var lv = cv;
function kf(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    return parseFloat(e);
  if (Array.isArray(e))
    return e.map(kf);
  throw new Error(
    "The value should be a number, a parsable string or an array of those."
  );
}
var fv = kf, dv = function(t) {
  return t === null ? !1 : /^[a-zA-Z0-9_-]{1,64}$/.test(t);
}, hv = Go, pv = Ko, vv = Yo, Rt = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function(t, r, n) {
    if (Rt.isRefined(t, r, n))
      return t;
    var i = "" + n, a = t[r] ? t[r].concat(i) : [i], s = {};
    return s[r] = a, hv({}, s, t);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function(t, r, n) {
    if (n === void 0)
      return Rt.clearRefinement(t, function(a, s) {
        return r === s;
      });
    var i = "" + n;
    return Rt.clearRefinement(t, function(a, s) {
      return r === s && i === a;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function(t, r, n) {
    if (n === void 0)
      throw new Error("toggleRefinement should be used with a value");
    return Rt.isRefined(t, r, n) ? Rt.removeRefinement(t, r, n) : Rt.addRefinement(t, r, n);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function(t, r, n) {
    if (r === void 0)
      return pv(t) ? {} : t;
    if (typeof r == "string")
      return vv(t, [r]);
    if (typeof r == "function") {
      var i = !1, a = Object.keys(t).reduce(
        function(s, c) {
          var u = t[c] || [], o = u.filter(function(f) {
            return !r(f, c, n);
          });
          return o.length !== u.length && (i = !0), s[c] = o, s;
        },
        {}
      );
      return i ? a : t;
    }
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean} true if the attribute is refined, false otherwise
   */
  isRefined: function(t, r, n) {
    var i = !!t[r] && t[r].length > 0;
    if (n === void 0 || !i)
      return i;
    var a = "" + n;
    return t[r].indexOf(a) !== -1;
  }
}, mv = Rt, wi = Go, Mf = si, Xs = lv, Qa = oi, Ka = Ko, Zs = Yo, _i = fv, gv = dv, je = mv;
function Jo(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(r, n) {
    return Jo(t[n], r);
  }) : e === t;
}
function yv(e, t) {
  return Mf(e, function(r) {
    return Jo(r, t);
  });
}
function Ue(e) {
  var t = e ? Ue._parseNumbers(e) : {};
  t.userToken !== void 0 && !gv(t.userToken) && console.warn(
    "[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"
  ), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
  var r = this;
  Object.keys(t).forEach(function(n) {
    var i = Ue.PARAMETERS.indexOf(n) !== -1, a = t[n] !== void 0;
    !i && a && (r[n] = t[n]);
  });
}
Ue.PARAMETERS = Object.keys(new Ue());
Ue._parseNumbers = function(e) {
  if (e instanceof Ue)
    return e;
  var t = {}, r = [
    "aroundPrecision",
    "aroundRadius",
    "getRankingInfo",
    "minWordSizefor2Typos",
    "minWordSizefor1Typo",
    "page",
    "maxValuesPerFacet",
    "distinct",
    "minimumAroundRadius",
    "hitsPerPage",
    "minProximity"
  ];
  if (r.forEach(function(i) {
    var a = e[i];
    if (typeof a == "string") {
      var s = parseFloat(a);
      t[i] = isNaN(s) ? a : s;
    }
  }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(i) {
    return Array.isArray(i) ? i.map(function(a) {
      return parseFloat(a);
    }) : i;
  })), e.numericRefinements) {
    var n = {};
    Object.keys(e.numericRefinements).forEach(function(i) {
      var a = e.numericRefinements[i] || {};
      n[i] = {}, Object.keys(a).forEach(function(s) {
        var c = a[s], u = c.map(function(o) {
          return Array.isArray(o) ? o.map(function(f) {
            return typeof f == "string" ? parseFloat(f) : f;
          }) : typeof o == "string" ? parseFloat(o) : o;
        });
        n[i][s] = u;
      });
    }), t.numericRefinements = n;
  }
  return Qa(e, t);
};
Ue.make = function(t) {
  var r = new Ue(t), n = t.hierarchicalFacets || [];
  return n.forEach(function(i) {
    if (i.rootPath) {
      var a = r.getHierarchicalRefinement(i.name);
      a.length > 0 && a[0].indexOf(i.rootPath) !== 0 && (r = r.clearRefinements(i.name)), a = r.getHierarchicalRefinement(i.name), a.length === 0 && (r = r.toggleHierarchicalFacetRefinement(
        i.name,
        i.rootPath
      ));
    }
  }), r;
};
Ue.validate = function(e, t) {
  var r = t || {};
  return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error(
    "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
  ) : e.tagRefinements.length > 0 && r.tagFilters ? new Error(
    "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
  ) : e.numericFilters && r.numericRefinements && Ka(r.numericRefinements) ? new Error(
    "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : Ka(e.numericRefinements) && r.numericFilters ? new Error(
    "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : null;
};
Ue.prototype = {
  constructor: Ue,
  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters} new instance with filters cleared
   */
  clearRefinements: function(t) {
    var r = {
      numericRefinements: this._clearNumericRefinements(t),
      facetsRefinements: je.clearRefinement(
        this.facetsRefinements,
        t,
        "conjunctiveFacet"
      ),
      facetsExcludes: je.clearRefinement(
        this.facetsExcludes,
        t,
        "exclude"
      ),
      disjunctiveFacetsRefinements: je.clearRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        "disjunctiveFacet"
      ),
      hierarchicalFacetsRefinements: je.clearRefinement(
        this.hierarchicalFacetsRefinements,
        t,
        "hierarchicalFacet"
      )
    };
    return r.numericRefinements === this.numericRefinements && r.facetsRefinements === this.facetsRefinements && r.facetsExcludes === this.facetsExcludes && r.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && r.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(r);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters} new instance with tags cleared
   */
  clearTags: function() {
    return this.tagFilters === void 0 && this.tagRefinements.length === 0 ? this : this.setQueryParameters({
      tagFilters: void 0,
      tagRefinements: []
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters} new instance
   */
  setIndex: function(t) {
    return t === this.index ? this : this.setQueryParameters({
      index: t
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters} new instance
   */
  setQuery: function(t) {
    return t === this.query ? this : this.setQueryParameters({
      query: t
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters} new instance
   */
  setPage: function(t) {
    return t === this.page ? this : this.setQueryParameters({
      page: t
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters} new instance
   */
  setFacets: function(t) {
    return this.setQueryParameters({
      facets: t
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters} new instance
   */
  setDisjunctiveFacets: function(t) {
    return this.setQueryParameters({
      disjunctiveFacets: t
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters} new instance
   */
  setHitsPerPage: function(t) {
    return this.hitsPerPage === t ? this : this.setQueryParameters({
      hitsPerPage: t
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters} new instance
   */
  setTypoTolerance: function(t) {
    return this.typoTolerance === t ? this : this.setQueryParameters({
      typoTolerance: t
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters} new instance
   * @example
   * // for price = 50 or 40
   * state.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * state.addNumericRefinement('size', '=', 38);
   * state.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function(e, t, r) {
    var n = _i(r);
    if (this.isNumericRefined(e, t, n))
      return this;
    var i = Qa({}, this.numericRefinements);
    return i[e] = Qa({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(n)) : i[e][t] = [n], this.setQueryParameters({
      numericRefinements: i
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function(e) {
    return this.isConjunctiveFacet(e) ? this.facetsRefinements[e] || [] : [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function(e) {
    return this.isDisjunctiveFacet(e) ? this.disjunctiveFacetsRefinements[e] || [] : [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function(e) {
    return this.hierarchicalFacetsRefinements[e] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function(e) {
    return this.isConjunctiveFacet(e) ? this.facetsExcludes[e] || [] : [];
  },
  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters} new instance
   */
  removeNumericRefinement: function(e, t, r) {
    var n = r;
    return n !== void 0 ? this.isNumericRefined(e, t, n) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(i, a) {
        return a === e && i.op === t && Jo(i.val, _i(n));
      })
    }) : this : t !== void 0 ? this.isNumericRefined(e, t) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(i, a) {
        return a === e && i.op === t;
      })
    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(i, a) {
        return a === e;
      })
    }) : this;
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */
  getNumericRefinements: function(e) {
    return this.numericRefinements[e] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function(e, t) {
    return this.numericRefinements[e] && this.numericRefinements[e][t];
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>} new numeric refinements
   */
  _clearNumericRefinements: function(t) {
    if (t === void 0)
      return Ka(this.numericRefinements) ? {} : this.numericRefinements;
    if (typeof t == "string")
      return Zs(this.numericRefinements, [t]);
    if (typeof t == "function") {
      var r = !1, n = this.numericRefinements, i = Object.keys(n).reduce(
        function(a, s) {
          var c = n[s], u = {};
          return c = c || {}, Object.keys(c).forEach(function(o) {
            var f = c[o] || [], l = [];
            f.forEach(function(v) {
              var d = t(
                { val: v, op: o },
                s,
                "numeric"
              );
              d || l.push(v);
            }), l.length !== f.length && (r = !0), u[o] = l;
          }), a[s] = u, a;
        },
        {}
      );
      return r ? i : this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters} new instance
   */
  addFacet: function(t) {
    return this.isConjunctiveFacet(t) ? this : this.setQueryParameters({
      facets: this.facets.concat([t])
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters} new instance
   */
  addDisjunctiveFacet: function(t) {
    return this.isDisjunctiveFacet(t) ? this : this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([t])
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters} new instance
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function(t) {
    if (this.isHierarchicalFacet(t.name))
      throw new Error(
        "Cannot declare two hierarchical facets with the same name: `" + t.name + "`"
      );
    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([t])
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return je.isRefined(this.facetsRefinements, t, r) ? this : this.setQueryParameters({
      facetsRefinements: je.addRefinement(
        this.facetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return je.isRefined(this.facetsExcludes, t, r) ? this : this.setQueryParameters({
      facetsExcludes: je.addRefinement(
        this.facetsExcludes,
        t,
        r
      )
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return je.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this : this.setQueryParameters({
      disjunctiveFacetsRefinements: je.addRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters} new instance
   */
  addTagRefinement: function(t) {
    if (this.isTagRefined(t))
      return this;
    var r = {
      tagRefinements: this.tagRefinements.concat(t)
    };
    return this.setQueryParameters(r);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters} new instance
   */
  removeFacet: function(t) {
    return this.isConjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
      facets: this.facets.filter(function(r) {
        return r !== t;
      })
    }) : this;
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters} new instance
   */
  removeDisjunctiveFacet: function(t) {
    return this.isDisjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function(r) {
        return r !== t;
      })
    }) : this;
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters} new instance
   */
  removeHierarchicalFacet: function(t) {
    return this.isHierarchicalFacet(t) ? this.clearRefinements(t).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function(r) {
        return r.name !== t;
      })
    }) : this;
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters} new instance
   */
  removeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return je.isRefined(this.facetsRefinements, t, r) ? this.setQueryParameters({
      facetsRefinements: je.removeRefinement(
        this.facetsRefinements,
        t,
        r
      )
    }) : this;
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */
  removeExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return je.isRefined(this.facetsExcludes, t, r) ? this.setQueryParameters({
      facetsExcludes: je.removeRefinement(
        this.facetsExcludes,
        t,
        r
      )
    }) : this;
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */
  removeDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return je.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this.setQueryParameters({
      disjunctiveFacetsRefinements: je.removeRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    }) : this;
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters} new instance
   */
  removeTagRefinement: function(t) {
    if (!this.isTagRefined(t))
      return this;
    var r = {
      tagRefinements: this.tagRefinements.filter(function(n) {
        return n !== t;
      })
    };
    return this.setQueryParameters(r);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function(t, r) {
    return this.toggleFacetRefinement(t, r);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function(t, r) {
    if (this.isHierarchicalFacet(t))
      return this.toggleHierarchicalFacetRefinement(t, r);
    if (this.isConjunctiveFacet(t))
      return this.toggleConjunctiveFacetRefinement(t, r);
    if (this.isDisjunctiveFacet(t))
      return this.toggleDisjunctiveFacetRefinement(t, r);
    throw new Error(
      "Cannot refine the undeclared facet " + t + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets"
    );
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleConjunctiveFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      facetsRefinements: je.toggleRefinement(
        this.facetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleExcludeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the facets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      facetsExcludes: je.toggleRefinement(
        this.facetsExcludes,
        t,
        r
      )
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: je.toggleRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleHierarchicalFacetRefinement: function(t, r) {
    if (!this.isHierarchicalFacet(t))
      throw new Error(
        t + " is not defined in the hierarchicalFacets attribute of the helper configuration"
      );
    var n = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(t)
    ), i = {}, a = this.hierarchicalFacetsRefinements[t] !== void 0 && this.hierarchicalFacetsRefinements[t].length > 0 && // remove current refinement:
    // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
    (this.hierarchicalFacetsRefinements[t][0] === r || // remove a parent refinement of the current refinement:
    //  - refinement was 'beer > IPA > Flying dog'
    //  - call is toggleRefine('beer > IPA')
    //  - refinement should be `beer`
    this.hierarchicalFacetsRefinements[t][0].indexOf(
      r + n
    ) === 0);
    return a ? r.indexOf(n) === -1 ? i[t] = [] : i[t] = [r.slice(0, r.lastIndexOf(n))] : i[t] = [r], this.setQueryParameters({
      hierarchicalFacetsRefinements: wi(
        {},
        i,
        this.hierarchicalFacetsRefinements
      )
    });
  },
  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function(e, t) {
    if (this.isHierarchicalFacetRefined(e))
      throw new Error(e + " is already refined.");
    if (!this.isHierarchicalFacet(e))
      throw new Error(
        e + " is not defined in the hierarchicalFacets attribute of the helper configuration."
      );
    var r = {};
    return r[e] = [t], this.setQueryParameters({
      hierarchicalFacetsRefinements: wi(
        {},
        r,
        this.hierarchicalFacetsRefinements
      )
    });
  },
  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function(e) {
    if (!this.isHierarchicalFacetRefined(e))
      return this;
    var t = {};
    return t[e] = [], this.setQueryParameters({
      hierarchicalFacetsRefinements: wi(
        {},
        t,
        this.hierarchicalFacetsRefinements
      )
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters} new instance
   */
  toggleTagRefinement: function(t) {
    return this.isTagRefined(t) ? this.removeTagRefinement(t) : this.addTagRefinement(t);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a disjunctive facet
   */
  isDisjunctiveFacet: function(e) {
    return this.disjunctiveFacets.indexOf(e) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean} true if facetName is a hierarchical facet
   */
  isHierarchicalFacet: function(e) {
    return this.getHierarchicalFacetByName(e) !== void 0;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a conjunctive facet
   */
  isConjunctiveFacet: function(e) {
    return this.facets.indexOf(e) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function(t, r) {
    return this.isConjunctiveFacet(t) ? je.isRefined(this.facetsRefinements, t, r) : !1;
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function(t, r) {
    return this.isConjunctiveFacet(t) ? je.isRefined(this.facetsExcludes, t, r) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */
  isDisjunctiveFacetRefined: function(t, r) {
    return this.isDisjunctiveFacet(t) ? je.isRefined(
      this.disjunctiveFacetsRefinements,
      t,
      r
    ) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */
  isHierarchicalFacetRefined: function(t, r) {
    if (!this.isHierarchicalFacet(t))
      return !1;
    var n = this.getHierarchicalRefinement(t);
    return r ? n.indexOf(r) !== -1 : n.length > 0;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function(t, r, n) {
    if (n === void 0 && r === void 0)
      return !!this.numericRefinements[t];
    var i = this.numericRefinements[t] && this.numericRefinements[t][r] !== void 0;
    if (n === void 0 || !i)
      return i;
    var a = _i(n), s = yv(this.numericRefinements[t][r], a) !== void 0;
    return i && s;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean} true if tag is refined
   */
  isTagRefined: function(t) {
    return this.tagRefinements.indexOf(t) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */
  getRefinedDisjunctiveFacets: function() {
    var t = this, r = Xs(
      Object.keys(this.numericRefinements).filter(function(n) {
        return Object.keys(t.numericRefinements[n]).length > 0;
      }),
      this.disjunctiveFacets
    );
    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(n) {
      return t.disjunctiveFacetsRefinements[n].length > 0;
    }).concat(r).concat(this.getRefinedHierarchicalFacets()).sort();
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */
  getRefinedHierarchicalFacets: function() {
    var t = this;
    return Xs(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function(r) {
        return r.name;
      }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function(r) {
        return t.hierarchicalFacetsRefinements[r].length > 0;
      })
    ).sort();
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]} returns the list of facets that are not refined
   */
  getUnrefinedDisjunctiveFacets: function() {
    var e = this.getRefinedDisjunctiveFacets();
    return this.disjunctiveFacets.filter(function(t) {
      return e.indexOf(t) === -1;
    });
  },
  managedParameters: [
    "index",
    "facets",
    "disjunctiveFacets",
    "facetsRefinements",
    "hierarchicalFacets",
    "facetsExcludes",
    "disjunctiveFacetsRefinements",
    "numericRefinements",
    "tagRefinements",
    "hierarchicalFacetsRefinements"
  ],
  getQueryParams: function() {
    var t = this.managedParameters, r = {}, n = this;
    return Object.keys(this).forEach(function(i) {
      var a = n[i];
      t.indexOf(i) === -1 && a !== void 0 && (r[i] = a);
    }), r;
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function(t, r) {
    if (this[t] === r)
      return this;
    var n = {};
    return n[t] = r, this.setQueryParameters(n);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function(t) {
    if (!t)
      return this;
    var r = Ue.validate(this, t);
    if (r)
      throw r;
    var n = this, i = Ue._parseNumbers(t), a = Object.keys(this).reduce(function(c, u) {
      return c[u] = n[u], c;
    }, {}), s = Object.keys(i).reduce(
      function(c, u) {
        var o = c[u] !== void 0, f = i[u] !== void 0;
        return o && !f ? Zs(c, [u]) : (f && (c[u] = i[u]), c);
      },
      a
    );
    return new this.constructor(s);
  },
  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function() {
    return this.page === void 0 ? this : this.setPage(0);
  },
  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function(e) {
    return e.sortBy || ["isRefined:desc", "name:asc"];
  },
  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function(e) {
    return e.separator || " > ";
  },
  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function(e) {
    return e.rootPath || null;
  },
  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function(e) {
    return typeof e.showParentLevel == "boolean" ? e.showParentLevel : !0;
  },
  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName the hierarchicalFacet name
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function(e) {
    return Mf(this.hierarchicalFacets, function(t) {
      return t.name === e;
    });
  },
  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function(e) {
    if (!this.isHierarchicalFacet(e))
      return [];
    var t = this.getHierarchicalRefinement(e)[0];
    if (!t)
      return [];
    var r = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(e)
    ), n = t.split(r);
    return n.map(function(i) {
      return i.trim();
    });
  },
  toString: function() {
    return JSON.stringify(this, null, 2);
  }
};
var Hf = Ue, bv = function(t) {
  return Array.isArray(t) ? t.filter(Boolean) : [];
}, wv = function(t, r) {
  if (!Array.isArray(t))
    return -1;
  for (var n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
  return -1;
}, _v = si, Lf = function(t, r) {
  var n = (r || []).map(function(i) {
    return i.split(":");
  });
  return t.reduce(
    function(a, s) {
      var c = s.split(":"), u = _v(
        n,
        function(o) {
          return o[0] === c[0];
        }
      );
      return c.length > 1 || !u ? (a[0].push(c[0]), a[1].push(c[1]), a) : (a[0].push(u[0]), a[1].push(u[1]), a);
    },
    [[], []]
  );
};
function Sv(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = t !== void 0, a = t === null;
    if (!a && e > t || n && i || !r)
      return 1;
    if (!n && e < t || a && r || !i)
      return -1;
  }
  return 0;
}
function Ov(e, t, r) {
  if (!Array.isArray(e))
    return [];
  Array.isArray(r) || (r = []);
  var n = e.map(function(i, a) {
    return {
      criteria: t.map(function(s) {
        return i[s];
      }),
      index: a,
      value: i
    };
  });
  return n.sort(function(a, s) {
    for (var c = -1; ++c < a.criteria.length; ) {
      var u = Sv(a.criteria[c], s.criteria[c]);
      if (u)
        return c >= r.length ? u : r[c] === "desc" ? -u : u;
    }
    return a.index - s.index;
  }), n.map(function(i) {
    return i.value;
  });
}
var qf = Ov, Rv = Cv, Uf = Vo, Pv = si, Ev = Lf, xv = qf, jv = Uf.escapeFacetValue, Tv = Uf.unescapeFacetValue;
function Cv(e) {
  return function(r, n) {
    var i = e.hierarchicalFacets[n], a = e.hierarchicalFacetsRefinements[i.name] && e.hierarchicalFacetsRefinements[i.name][0] || "", s = e._getHierarchicalFacetSeparator(i), c = e._getHierarchicalRootPath(i), u = e._getHierarchicalShowParentLevel(i), o = Ev(
      e._getHierarchicalFacetSortBy(i)
    ), f = r.every(function(d) {
      return d.exhaustive;
    }), l = Av(
      o,
      s,
      c,
      u,
      a
    ), v = r;
    return c && (v = r.slice(
      c.split(s).length
    )), v.reduce(l, {
      name: e.hierarchicalFacets[n].name,
      count: null,
      // root level, no count
      isRefined: !0,
      // root level, always refined
      path: null,
      // root level, no path
      escapedValue: null,
      exhaustive: f,
      data: null
    });
  };
}
function Av(e, t, r, n, i) {
  return function(s, c, u) {
    var o = s;
    if (u > 0) {
      var f = 0;
      for (o = s; f < u; ) {
        var l = o && Array.isArray(o.data) ? o.data : [];
        o = Pv(l, function(d) {
          return d.isRefined;
        }), f++;
      }
    }
    if (o) {
      var v = Object.keys(c.data).map(function(d) {
        return [d, c.data[d]];
      }).filter(function(d) {
        var p = d[0];
        return $v(
          p,
          o.path || r,
          i,
          t,
          r,
          n
        );
      });
      o.data = xv(
        v.map(function(d) {
          var p = d[0], h = d[1];
          return Iv(
            h,
            p,
            t,
            Tv(i),
            c.exhaustive
          );
        }),
        e[0],
        e[1]
      );
    }
    return s;
  };
}
function $v(e, t, r, n, i, a) {
  return i && (e.indexOf(i) !== 0 || i === e) ? !1 : !i && e.indexOf(n) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
  i && e.split(n).length - i.split(n).length === 1 || // if current refinement is a root level and current facetValue is a root level,
  // keep the facetValue
  e.indexOf(n) === -1 && r.indexOf(n) === -1 || // currentRefinement is a child of the facet value
  r.indexOf(e) === 0 || // facetValue is a child of the current parent, add it
  e.indexOf(t + n) === 0 && (a || e.indexOf(r) === 0);
}
function Iv(e, t, r, n, i) {
  var a = t.split(r);
  return {
    name: a[a.length - 1].trim(),
    path: t,
    escapedValue: jv(t),
    count: e,
    isRefined: n === t || n.indexOf(t + r) === 0,
    exhaustive: i,
    data: null
  };
}
var Si = bv, Zn = Go, Wf = Vo, Ge = si, Zt = wv, Fv = Lf, eu = oi, Bf = qf, tu = Wf.escapeFacetValue, zf = Wf.unescapeFacetValue, Nv = Rv;
function ru(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
function Oi(e, t, r) {
  t && t[r] && (e.stats = t[r]);
}
function Dv(e, t) {
  return Ge(
    e,
    function(n) {
      var i = n.attributes || [];
      return i.indexOf(t) > -1;
    }
  );
}
function _t(e, t, r) {
  var n = t[0];
  this._rawResults = t;
  var i = this;
  Object.keys(n).forEach(function(l) {
    i[l] = n[l];
  });
  var a = eu(
    {
      persistHierarchicalRootCount: !1
    },
    r
  );
  Object.keys(a).forEach(function(l) {
    i[l] = a[l];
  }), this.processingTimeMS = t.reduce(function(l, v) {
    return v.processingTimeMS === void 0 ? l : l + v.processingTimeMS;
  }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map(
    function() {
      return [];
    }
  ), this.facets = [];
  var s = e.getRefinedDisjunctiveFacets(), c = ru(e.facets), u = ru(e.disjunctiveFacets), o = 1, f = n.facets || {};
  Object.keys(f).forEach(function(l) {
    var v = f[l], d = Dv(
      e.hierarchicalFacets,
      l
    );
    if (d) {
      var p = d.attributes.indexOf(l), h = Zt(e.hierarchicalFacets, function(w) {
        return w.name === d.name;
      });
      i.hierarchicalFacets[h][p] = {
        attribute: l,
        data: v,
        exhaustive: n.exhaustiveFacetsCount
      };
    } else {
      var m = e.disjunctiveFacets.indexOf(l) !== -1, g = e.facets.indexOf(l) !== -1, _;
      m && (_ = u[l], i.disjunctiveFacets[_] = {
        name: l,
        data: v,
        exhaustive: n.exhaustiveFacetsCount
      }, Oi(
        i.disjunctiveFacets[_],
        n.facets_stats,
        l
      )), g && (_ = c[l], i.facets[_] = {
        name: l,
        data: v,
        exhaustive: n.exhaustiveFacetsCount
      }, Oi(
        i.facets[_],
        n.facets_stats,
        l
      ));
    }
  }), this.hierarchicalFacets = Si(this.hierarchicalFacets), s.forEach(function(l) {
    var v = t[o], d = v && v.facets ? v.facets : {}, p = e.getHierarchicalFacetByName(l);
    Object.keys(d).forEach(function(h) {
      var m = d[h], g;
      if (p) {
        g = Zt(e.hierarchicalFacets, function(b) {
          return b.name === p.name;
        });
        var _ = Zt(
          i.hierarchicalFacets[g],
          function(b) {
            return b.attribute === h;
          }
        );
        if (_ === -1)
          return;
        i.hierarchicalFacets[g][_].data = eu(
          {},
          i.hierarchicalFacets[g][_].data,
          m
        );
      } else {
        g = u[h];
        var w = n.facets && n.facets[h] || {};
        i.disjunctiveFacets[g] = {
          name: h,
          data: Zn({}, m, w),
          exhaustive: v.exhaustiveFacetsCount
        }, Oi(
          i.disjunctiveFacets[g],
          v.facets_stats,
          h
        ), e.disjunctiveFacetsRefinements[h] && e.disjunctiveFacetsRefinements[h].forEach(function(b) {
          !i.disjunctiveFacets[g].data[b] && e.disjunctiveFacetsRefinements[h].indexOf(
            zf(b)
          ) > -1 && (i.disjunctiveFacets[g].data[b] = 0);
        });
      }
    }), o++;
  }), e.getRefinedHierarchicalFacets().forEach(function(l) {
    var v = e.getHierarchicalFacetByName(l), d = e._getHierarchicalFacetSeparator(v), p = e.getHierarchicalRefinement(l);
    p.length === 0 || p[0].split(d).length < 2 || t.slice(o).forEach(function(h) {
      var m = h && h.facets ? h.facets : {};
      Object.keys(m).forEach(function(g) {
        var _ = m[g], w = Zt(e.hierarchicalFacets, function($) {
          return $.name === v.name;
        }), b = Zt(
          i.hierarchicalFacets[w],
          function($) {
            return $.attribute === g;
          }
        );
        if (b !== -1) {
          var y = {};
          if (p.length > 0 && !i.persistHierarchicalRootCount) {
            var j = p[0].split(d)[0];
            y[j] = i.hierarchicalFacets[w][b].data[j];
          }
          i.hierarchicalFacets[w][b].data = Zn(
            y,
            _,
            i.hierarchicalFacets[w][b].data
          );
        }
      }), o++;
    });
  }), Object.keys(e.facetsExcludes).forEach(function(l) {
    var v = e.facetsExcludes[l], d = c[l];
    i.facets[d] = {
      name: l,
      data: f[l],
      exhaustive: n.exhaustiveFacetsCount
    }, v.forEach(function(p) {
      i.facets[d] = i.facets[d] || { name: l }, i.facets[d].data = i.facets[d].data || {}, i.facets[d].data[p] = 0;
    });
  }), this.hierarchicalFacets = this.hierarchicalFacets.map(
    Nv(e)
  ), this.facets = Si(this.facets), this.disjunctiveFacets = Si(this.disjunctiveFacets), this._state = e;
}
_t.prototype.getFacetByName = function(e) {
  function t(r) {
    return r.name === e;
  }
  return Ge(this.facets, t) || Ge(this.disjunctiveFacets, t) || Ge(this.hierarchicalFacets, t);
};
function kv(e, t) {
  function r(f) {
    return f.name === t;
  }
  if (e._state.isConjunctiveFacet(t)) {
    var n = Ge(e.facets, r);
    return n ? Object.keys(n.data).map(function(f) {
      var l = tu(f);
      return {
        name: f,
        escapedValue: l,
        count: n.data[f],
        isRefined: e._state.isFacetRefined(t, l),
        isExcluded: e._state.isExcludeRefined(t, f)
      };
    }) : [];
  } else if (e._state.isDisjunctiveFacet(t)) {
    var i = Ge(e.disjunctiveFacets, r);
    return i ? Object.keys(i.data).map(function(f) {
      var l = tu(f);
      return {
        name: f,
        escapedValue: l,
        count: i.data[f],
        isRefined: e._state.isDisjunctiveFacetRefined(t, l)
      };
    }) : [];
  } else if (e._state.isHierarchicalFacet(t)) {
    var a = Ge(e.hierarchicalFacets, r);
    if (!a)
      return a;
    var s = e._state.getHierarchicalFacetByName(t), c = e._state._getHierarchicalFacetSeparator(s), u = zf(
      e._state.getHierarchicalRefinement(t)[0] || ""
    );
    u.indexOf(s.rootPath) === 0 && (u = u.replace(
      s.rootPath + c,
      ""
    ));
    var o = u.split(c);
    return o.unshift(t), Vf(a, o, 0), a;
  }
}
function Vf(e, t, r) {
  e.isRefined = e.name === t[r], e.data && e.data.forEach(function(n) {
    Vf(n, t, r + 1);
  });
}
function Qf(e, t, r, n) {
  if (n = n || 0, Array.isArray(t))
    return e(t, r[n]);
  if (!t.data || t.data.length === 0)
    return t;
  var i = t.data.map(function(c) {
    return Qf(e, c, r, n + 1);
  }), a = e(i, r[n]), s = Zn({ data: a }, t);
  return s;
}
_t.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
function Mv(e, t) {
  return t.sort(e);
}
function Hv(e, t) {
  var r = [], n = [], i = t.order || [], a = i.reduce(function(u, o, f) {
    return u[o] = f, u;
  }, {});
  e.forEach(function(u) {
    var o = u.path || u.name;
    a[o] !== void 0 ? r[a[o]] = u : n.push(u);
  }), r = r.filter(function(u) {
    return u;
  });
  var s = t.sortRemainingBy, c;
  return s === "hidden" ? r : (s === "alpha" ? c = [
    ["path", "name"],
    ["asc", "asc"]
  ] : c = [["count"], ["desc"]], r.concat(
    Bf(n, c[0], c[1])
  ));
}
function Lv(e, t) {
  return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t];
}
_t.prototype.getFacetValues = function(e, t) {
  var r = kv(this, e);
  if (r) {
    var n = Zn({}, t, {
      sortBy: _t.DEFAULT_SORT,
      // if no sortBy is given, attempt to sort based on facetOrdering
      // if it is given, we still allow to sort via facet ordering first
      facetOrdering: !(t && t.sortBy)
    }), i = this, a;
    if (Array.isArray(r))
      a = [e];
    else {
      var s = i._state.getHierarchicalFacetByName(r.name);
      a = s.attributes;
    }
    return Qf(
      function(c, u) {
        if (n.facetOrdering) {
          var o = Lv(i, u);
          if (o)
            return Hv(c, o);
        }
        if (Array.isArray(n.sortBy)) {
          var f = Fv(n.sortBy, _t.DEFAULT_SORT);
          return Bf(c, f[0], f[1]);
        } else if (typeof n.sortBy == "function")
          return Mv(n.sortBy, c);
        throw new Error(
          "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
        );
      },
      r,
      a
    );
  }
};
_t.prototype.getFacetStats = function(e) {
  if (this._state.isConjunctiveFacet(e))
    return nu(this.facets, e);
  if (this._state.isDisjunctiveFacet(e))
    return nu(this.disjunctiveFacets, e);
};
function nu(e, t) {
  var r = Ge(e, function(n) {
    return n.name === t;
  });
  return r && r.stats;
}
_t.prototype.getRefinements = function() {
  var e = this._state, t = this, r = [];
  return Object.keys(e.facetsRefinements).forEach(function(n) {
    e.facetsRefinements[n].forEach(function(i) {
      r.push(
        Ri(e, "facet", n, i, t.facets)
      );
    });
  }), Object.keys(e.facetsExcludes).forEach(function(n) {
    e.facetsExcludes[n].forEach(function(i) {
      r.push(
        Ri(e, "exclude", n, i, t.facets)
      );
    });
  }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(n) {
    e.disjunctiveFacetsRefinements[n].forEach(function(i) {
      r.push(
        Ri(
          e,
          "disjunctive",
          n,
          i,
          t.disjunctiveFacets
        )
      );
    });
  }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function(n) {
    e.hierarchicalFacetsRefinements[n].forEach(function(i) {
      r.push(
        qv(
          e,
          n,
          i,
          t.hierarchicalFacets
        )
      );
    });
  }), Object.keys(e.numericRefinements).forEach(function(n) {
    var i = e.numericRefinements[n];
    Object.keys(i).forEach(function(a) {
      i[a].forEach(function(s) {
        r.push({
          type: "numeric",
          attributeName: n,
          name: s,
          numericValue: s,
          operator: a
        });
      });
    });
  }), e.tagRefinements.forEach(function(n) {
    r.push({ type: "tag", attributeName: "_tags", name: n });
  }), r;
};
function Ri(e, t, r, n, i) {
  var a = Ge(i, function(u) {
    return u.name === r;
  }), s = a && a.data && a.data[n] ? a.data[n] : 0, c = a && a.exhaustive || !1;
  return {
    type: t,
    attributeName: r,
    name: n,
    count: s,
    exhaustive: c
  };
}
function qv(e, t, r, n) {
  var i = e.getHierarchicalFacetByName(t), a = e._getHierarchicalFacetSeparator(i), s = r.split(a), c = Ge(n, function(v) {
    return v.name === t;
  }), u = s.reduce(function(v, d) {
    var p = v && Ge(v.data, function(h) {
      return h.name === d;
    });
    return p !== void 0 ? p : v;
  }, c), o = u && u.count || 0, f = u && u.exhaustive || !1, l = u && u.path || "";
  return {
    type: "hierarchical",
    attributeName: t,
    name: l,
    count: o,
    exhaustive: f
  };
}
var Kf = _t, Yf = "3.16.2", Uv = zo, Wv = tv, Bv = Vo.escapeFacetValue, zv = Df, Vv = oi, Qv = Ko, Kv = Yo, Ht = uv, Xo = Hf, Ya = Kf, Gf = Yf;
function te(e, t, r, n) {
  typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + Gf + ")"), this.setClient(e);
  var i = r || {};
  i.index = t, this.state = Xo.make(i), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0, this._searchResultsOptions = n;
}
zv(te, Uv);
te.prototype.search = function() {
  return this._search({ onlyWithDerivedHelpers: !1 }), this;
};
te.prototype.searchOnlyWithDerivedHelpers = function() {
  return this._search({ onlyWithDerivedHelpers: !0 }), this;
};
te.prototype.getQuery = function() {
  var e = this.state;
  return Ht._getHitsSearchParams(e);
};
te.prototype.searchOnce = function(e, t) {
  var r = e ? this.state.setQueryParameters(e) : this.state, n = Ht._getQueries(r.index, r), i = this;
  if (this._currentNbQueries++, this.emit("searchOnce", {
    state: r
  }), t) {
    this.client.search(n).then(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(null, new Ya(r, a.results), r);
    }).catch(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(a, null, r);
    });
    return;
  }
  return this.client.search(n).then(
    function(a) {
      return i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), {
        content: new Ya(r, a.results),
        state: r,
        _originalResponse: a
      };
    },
    function(a) {
      throw i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), a;
    }
  );
};
te.prototype.findAnswers = function(e) {
  console.warn("[algoliasearch-helper] answers is no longer supported");
  var t = this.state, r = this.derivedHelpers[0];
  if (!r)
    return Promise.resolve([]);
  var n = r.getModifiedState(t), i = Vv(
    {
      attributesForPrediction: e.attributesForPrediction,
      nbHits: e.nbHits
    },
    {
      params: Kv(Ht._getHitsSearchParams(n), [
        "attributesToSnippet",
        "hitsPerPage",
        "restrictSearchableAttributes",
        "snippetEllipsisText"
      ])
    }
  ), a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
  if (typeof this.client.initIndex != "function")
    throw new Error(a);
  var s = this.client.initIndex(n.index);
  if (typeof s.findAnswers != "function")
    throw new Error(a);
  return s.findAnswers(n.query, e.queryLanguages, i);
};
te.prototype.searchForFacetValues = function(e, t, r, n) {
  var i = typeof this.client.searchForFacetValues == "function", a = typeof this.client.initIndex == "function";
  if (!i && !a && typeof this.client.search != "function")
    throw new Error(
      "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
    );
  var s = this.state.setQueryParameters(n || {}), c = s.isDisjunctiveFacet(e), u = Ht.getSearchForFacetQuery(
    e,
    t,
    r,
    s
  );
  this._currentNbQueries++;
  var o = this, f;
  return i ? f = this.client.searchForFacetValues([
    { indexName: s.index, params: u }
  ]) : a ? f = this.client.initIndex(s.index).searchForFacetValues(u) : (delete u.facetName, f = this.client.search([
    {
      type: "facet",
      facet: e,
      indexName: s.index,
      params: u
    }
  ]).then(function(v) {
    return v.results[0];
  })), this.emit("searchForFacetValues", {
    state: s,
    facet: e,
    query: t
  }), f.then(
    function(v) {
      return o._currentNbQueries--, o._currentNbQueries === 0 && o.emit("searchQueueEmpty"), v = Array.isArray(v) ? v[0] : v, v.facetHits.forEach(function(d) {
        d.escapedValue = Bv(d.value), d.isRefined = c ? s.isDisjunctiveFacetRefined(e, d.escapedValue) : s.isFacetRefined(e, d.escapedValue);
      }), v;
    },
    function(l) {
      throw o._currentNbQueries--, o._currentNbQueries === 0 && o.emit("searchQueueEmpty"), l;
    }
  );
};
te.prototype.setQuery = function(e) {
  return this._change({
    state: this.state.resetPage().setQuery(e),
    isPageReset: !0
  }), this;
};
te.prototype.clearRefinements = function(e) {
  return this._change({
    state: this.state.resetPage().clearRefinements(e),
    isPageReset: !0
  }), this;
};
te.prototype.clearTags = function() {
  return this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: !0
  }), this;
};
te.prototype.addDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
te.prototype.addHierarchicalFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.addNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().addNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
te.prototype.addFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};
te.prototype.addFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().addExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};
te.prototype.addTag = function(e) {
  return this._change({
    state: this.state.resetPage().addTagRefinement(e),
    isPageReset: !0
  }), this;
};
te.prototype.removeNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().removeNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
te.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
te.prototype.removeHierarchicalFacetRefinement = function(e) {
  return this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
    isPageReset: !0
  }), this;
};
te.prototype.removeFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};
te.prototype.removeFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};
te.prototype.removeTag = function(e) {
  return this._change({
    state: this.state.resetPage().removeTagRefinement(e),
    isPageReset: !0
  }), this;
};
te.prototype.toggleFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};
te.prototype.toggleRefinement = function(e, t) {
  return this.toggleFacetRefinement(e, t);
};
te.prototype.toggleFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};
te.prototype.toggleTag = function(e) {
  return this._change({
    state: this.state.resetPage().toggleTagRefinement(e),
    isPageReset: !0
  }), this;
};
te.prototype.nextPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e + 1);
};
te.prototype.previousPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e - 1);
};
function Jf(e) {
  if (e < 0)
    throw new Error("Page requested below 0.");
  return this._change({
    state: this.state.setPage(e),
    isPageReset: !1
  }), this;
}
te.prototype.setCurrentPage = Jf;
te.prototype.setPage = Jf;
te.prototype.setIndex = function(e) {
  return this._change({
    state: this.state.resetPage().setIndex(e),
    isPageReset: !0
  }), this;
};
te.prototype.setQueryParameter = function(e, t) {
  return this._change({
    state: this.state.resetPage().setQueryParameter(e, t),
    isPageReset: !0
  }), this;
};
te.prototype.setState = function(e) {
  return this._change({
    state: Xo.make(e),
    isPageReset: !1
  }), this;
};
te.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
  return this.state = new Xo(e), this;
};
te.prototype.hasRefinements = function(e) {
  return Qv(this.state.getNumericRefinements(e)) ? !0 : this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : this.state.isHierarchicalFacet(e) ? this.state.isHierarchicalFacetRefined(e) : !1;
};
te.prototype.isExcluded = function(e, t) {
  return this.state.isExcludeRefined(e, t);
};
te.prototype.isDisjunctiveRefined = function(e, t) {
  return this.state.isDisjunctiveFacetRefined(e, t);
};
te.prototype.hasTag = function(e) {
  return this.state.isTagRefined(e);
};
te.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};
te.prototype.getIndex = function() {
  return this.state.index;
};
function Xf() {
  return this.state.page;
}
te.prototype.getCurrentPage = Xf;
te.prototype.getPage = Xf;
te.prototype.getTags = function() {
  return this.state.tagRefinements;
};
te.prototype.getRefinements = function(e) {
  var t = [];
  if (this.state.isConjunctiveFacet(e)) {
    var r = this.state.getConjunctiveRefinements(e);
    r.forEach(function(s) {
      t.push({
        value: s,
        type: "conjunctive"
      });
    });
    var n = this.state.getExcludeRefinements(e);
    n.forEach(function(s) {
      t.push({
        value: s,
        type: "exclude"
      });
    });
  } else if (this.state.isDisjunctiveFacet(e)) {
    var i = this.state.getDisjunctiveRefinements(e);
    i.forEach(function(s) {
      t.push({
        value: s,
        type: "disjunctive"
      });
    });
  }
  var a = this.state.getNumericRefinements(e);
  return Object.keys(a).forEach(function(s) {
    var c = a[s];
    t.push({
      value: c,
      operator: s,
      type: "numeric"
    });
  }), t;
};
te.prototype.getNumericRefinement = function(e, t) {
  return this.state.getNumericRefinement(e, t);
};
te.prototype.getHierarchicalFacetBreadcrumb = function(e) {
  return this.state.getHierarchicalFacetBreadcrumb(e);
};
te.prototype._search = function(e) {
  var t = this.state, r = [], n = [];
  e.onlyWithDerivedHelpers || (n = Ht._getQueries(t.index, t), r.push({
    state: t,
    queriesCount: n.length,
    helper: this
  }), this.emit("search", {
    state: t,
    results: this.lastResults
  }));
  var i = this.derivedHelpers.map(function(c) {
    var u = c.getModifiedState(t), o = u.index ? Ht._getQueries(u.index, u) : [];
    return r.push({
      state: u,
      queriesCount: o.length,
      helper: c
    }), c.emit("search", {
      state: u,
      results: c.lastResults
    }), o;
  }), a = Array.prototype.concat.apply(n, i), s = this._queryId++;
  if (this._currentNbQueries++, !a.length)
    return Promise.resolve({ results: [] }).then(
      this._dispatchAlgoliaResponse.bind(this, r, s)
    );
  try {
    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, r, s)).catch(this._dispatchAlgoliaError.bind(this, s));
  } catch (c) {
    this.emit("error", {
      error: c
    });
  }
};
te.prototype._dispatchAlgoliaResponse = function(e, t, r) {
  var n = this;
  if (!(t < this._lastQueryIdReceived)) {
    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, this._currentNbQueries === 0 && this.emit("searchQueueEmpty");
    var i = r.results.slice();
    e.forEach(function(a) {
      var s = a.state, c = a.queriesCount, u = a.helper, o = i.splice(0, c);
      if (!s.index) {
        u.emit("result", {
          results: null,
          state: s
        });
        return;
      }
      u.lastResults = new Ya(
        s,
        o,
        n._searchResultsOptions
      ), u.emit("result", {
        results: u.lastResults,
        state: s
      });
    });
  }
};
te.prototype._dispatchAlgoliaError = function(e, t) {
  e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
    error: t
  }), this._currentNbQueries === 0 && this.emit("searchQueueEmpty"));
};
te.prototype.containsRefinement = function(e, t, r, n) {
  return e || t.length !== 0 || r.length !== 0 || n.length !== 0;
};
te.prototype._hasDisjunctiveRefinements = function(e) {
  return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
};
te.prototype._change = function(e) {
  var t = e.state, r = e.isPageReset;
  t !== this.state && (this.state = t, this.emit("change", {
    state: this.state,
    results: this.lastResults,
    isPageReset: r
  }));
};
te.prototype.clearCache = function() {
  return this.client.clearCache && this.client.clearCache(), this;
};
te.prototype.setClient = function(e) {
  return this.client === e ? this : (typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + Gf + ")"), this.client = e, this);
};
te.prototype.getClient = function() {
  return this.client;
};
te.prototype.derive = function(e) {
  var t = new Wv(this, e);
  return this.derivedHelpers.push(t), t;
};
te.prototype.detachDerivedHelper = function(e) {
  var t = this.derivedHelpers.indexOf(e);
  if (t === -1)
    throw new Error("Derived helper already detached");
  this.derivedHelpers.splice(t, 1);
};
te.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};
var Yv = te, Zf = Yv, Gv = Hf, Jv = Kf;
function Qr(e, t, r, n) {
  return new Zf(e, t, r, n);
}
Qr.version = Yf;
Qr.AlgoliaSearchHelper = Zf;
Qr.SearchParameters = Gv;
Qr.SearchResults = Jv;
var Xv = Qr;
const Ye = /* @__PURE__ */ Kt(Xv);
function iu(e) {
  return e.toString().charAt(0).toUpperCase() + e.toString().slice(1);
}
function Ie() {
}
var au = Ie, le = Ie;
process.env.NODE_ENV === "development" && (au = function(t) {
  console.warn("[InstantSearch.js]: ".concat(t.trim()));
}, le = function(t, r) {
  if (!t) {
    var n = le.cache[r];
    n || (le.cache[r] = !0, process.env.NODE_ENV === "development" && au(r));
  }
}, le.cache = {});
var Zv = Object.keys;
function em(e) {
  return nm(e) || rm(e) || ed(e) || tm();
}
function tm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function nm(e) {
  if (Array.isArray(e))
    return Ga(e);
}
function er(e, t) {
  return om(e) || am(e, t) || ed(e, t) || im();
}
function im() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ed(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ga(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ga(e, t);
  }
}
function Ga(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function am(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function om(e) {
  if (Array.isArray(e))
    return e;
}
function sm(e) {
  switch (e) {
    case "range":
      return [];
    case "menu":
      return ["menu", "menuSelect"];
    default:
      return [e];
  }
}
var um = {
  query: {
    connectors: ["connectSearchBox"],
    widgets: ["ais.searchBox", "ais.autocomplete", "ais.voiceSearch"]
  },
  refinementList: {
    connectors: ["connectRefinementList"],
    widgets: ["ais.refinementList"]
  },
  menu: {
    connectors: ["connectMenu"],
    widgets: ["ais.menu"]
  },
  hierarchicalMenu: {
    connectors: ["connectHierarchicalMenu"],
    widgets: ["ais.hierarchicalMenu"]
  },
  numericMenu: {
    connectors: ["connectNumericMenu"],
    widgets: ["ais.numericMenu"]
  },
  ratingMenu: {
    connectors: ["connectRatingMenu"],
    widgets: ["ais.ratingMenu"]
  },
  range: {
    connectors: ["connectRange"],
    widgets: ["ais.rangeInput", "ais.rangeSlider", "ais.range"]
  },
  toggle: {
    connectors: ["connectToggleRefinement"],
    widgets: ["ais.toggleRefinement"]
  },
  geoSearch: {
    connectors: ["connectGeoSearch"],
    widgets: ["ais.geoSearch"]
  },
  sortBy: {
    connectors: ["connectSortBy"],
    widgets: ["ais.sortBy"]
  },
  page: {
    connectors: ["connectPagination"],
    widgets: ["ais.pagination", "ais.infiniteHits"]
  },
  hitsPerPage: {
    connectors: ["connectHitsPerPage"],
    widgets: ["ais.hitsPerPage"]
  },
  configure: {
    connectors: ["connectConfigure"],
    widgets: ["ais.configure"]
  },
  places: {
    connectors: [],
    widgets: ["ais.places"]
  }
};
function td(e) {
  var t = e.index, r = e.indexUiState, n = t.getWidgets().map(function(a) {
    return a.$$type;
  }).filter(Boolean), i = Zv(r).reduce(function(a, s) {
    var c = um[s];
    if (!c)
      return a;
    var u = c.widgets;
    return u && !u.some(function(o) {
      return n.includes(o);
    }) && a.push([s, {
      connectors: c.connectors,
      widgets: c.widgets.map(function(o) {
        return o.split("ais.")[1];
      })
    }]), a;
  }, []);
  process.env.NODE_ENV === "development" && le(i.length === 0, 'The UI state for the index "'.concat(t.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(t.getIndexId(), `":

`).concat(i.map(function(a) {
    var s, c = er(a, 2), u = c[0], o = c[1].widgets;
    return "- `".concat(u, "` needs one of these widgets: ").concat((s = []).concat.apply(s, em(o.map(function(f) {
      return sm(f);
    }))).map(function(f) {
      return '"'.concat(f, '"');
    }).join(", "));
  }).join(`
`), `

If you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don't render anything:

\`\`\`
`).concat(i.filter(function(a) {
    var s = er(a, 2);
    s[0];
    var c = s[1].connectors;
    return c.length > 0;
  }).map(function(a) {
    var s = er(a, 2);
    s[0];
    var c = s[1], u = c.connectors, o = c.widgets, f = iu(o[0]), l = u[0];
    return "const virtual".concat(f, " = ").concat(l, "(() => null);");
  }).join(`
`), `

search.addWidgets([
  `).concat(i.filter(function(a) {
    var s = er(a, 2);
    s[0];
    var c = s[1].connectors;
    return c.length > 0;
  }).map(function(a) {
    var s = er(a, 2);
    s[0];
    var c = s[1].widgets, u = iu(c[0]);
    return "virtual".concat(u, "({ /* ... */ })");
  }).join(`,
  `), `
]);
\`\`\`

If you're using custom widgets that do set these query parameters, we recommend using connectors instead.

See https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets`));
}
function cm(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Gt(e, t) {
  if (e === void 0 || typeof e != "function")
    throw new Error("The render function is not valid (received type ".concat(cm(e), `).

`).concat(t));
}
var lm = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, rd = /[&<>"']/g, fm = RegExp(rd.source);
function dm(e) {
  return e && fm.test(e) ? e.replace(rd, function(t) {
    return lm[t];
  }) : e;
}
var hm = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, nd = /&(amp|quot|lt|gt|#39);/g, pm = RegExp(nd.source);
function Zo(e) {
  return e && pm.test(e) ? e.replace(nd, function(t) {
    return hm[t];
  }) : e;
}
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
function vm(e) {
  return e === null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function mm(e) {
  return Ja(e) === "object" && e !== null;
}
function id(e) {
  if (!mm(e) || vm(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function gm(e) {
  if (e == null)
    throw new TypeError("Cannot destructure " + e);
}
function Xa() {
  return Xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xa.apply(this, arguments);
}
function ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ou(Object(r), !0).forEach(function(n) {
      ad(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ad(e, t, r) {
  return t = ym(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ym(e) {
  var t = bm(e, "string");
  return Or(t) === "symbol" ? t : String(t);
}
function bm(e, t) {
  if (Or(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Or(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lt = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
}, Me = {
  highlightPreTag: "<mark>",
  highlightPostTag: "</mark>"
};
function od(e) {
  return dm(e).replace(new RegExp(Lt.highlightPreTag, "g"), Me.highlightPreTag).replace(new RegExp(Lt.highlightPostTag, "g"), Me.highlightPostTag);
}
function ei(e) {
  return id(e) && typeof e.value != "string" ? Object.keys(e).reduce(function(t, r) {
    return Nt(Nt({}, t), {}, ad({}, r, ei(e[r])));
  }, {}) : Array.isArray(e) ? e.map(ei) : Nt(Nt({}, e), {}, {
    value: od(e.value)
  });
}
function wm(e) {
  return e.__escaped === void 0 && (e = e.map(function(t) {
    var r = Xa({}, (gm(t), t));
    return r._highlightResult && (r._highlightResult = ei(r._highlightResult)), r._snippetResult && (r._snippetResult = ei(r._snippetResult)), r;
  }), e.__escaped = !0), e;
}
function _m(e) {
  return e.map(function(t) {
    return Nt(Nt({}, t), {}, {
      highlighted: od(t.highlighted)
    });
  });
}
function sd(e) {
  var t = Me.highlightPreTag, r = Me.highlightPostTag;
  return e.map(function(n) {
    return n.isHighlighted ? t + n.value + r : n.value;
  }).join("");
}
function Sm(e, t, r) {
  return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, r) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, r) : e.state.isDisjunctiveFacetRefined(t, r);
}
function su(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? su(Object(r), !0).forEach(function(n) {
      Rm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : su(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rm(e, t, r) {
  return t = Pm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pm(e) {
  var t = Em(e, "string");
  return qt(t) === "symbol" ? t : String(t);
}
function Em(e, t) {
  if (qt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qt(e) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qt(e);
}
function xm(e, t) {
  return Am(e) || Cm(e, t) || Tm(e, t) || jm();
}
function jm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tm(e, t) {
  if (e) {
    if (typeof e == "string")
      return uu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return uu(e, t);
  }
}
function uu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Cm(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function Am(e) {
  if (Array.isArray(e))
    return e;
}
function $m(e) {
  var t = e.instantSearchInstance, r = e.helper, n = e.attribute, i = e.widgetType, a = function() {
    for (var c = arguments.length, u = new Array(c), o = 0; o < c; o++)
      u[o] = arguments[o];
    var f = u[1], l = u[2], v = l === void 0 ? "Filter Applied" : l, d = u[3], p = d === void 0 ? {} : d, h = u[0].split(":"), m = xm(h, 2), g = m[0], _ = m[1], w = typeof n == "string" ? n : n(f);
    if (u.length === 1 && qt(u[0]) === "object")
      t.sendEventToInsights(u[0]);
    else if (g === "click" && u.length >= 2 && u.length <= 4)
      Sm(r, w, f) || t.sendEventToInsights({
        insightsMethod: "clickedFilters",
        widgetType: i,
        eventType: g,
        eventModifier: _,
        payload: Om({
          eventName: v,
          index: r.getIndex(),
          filters: ["".concat(w, ":").concat(f)]
        }, p),
        attribute: w
      });
    else if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass between two and four arguments like:
  sendEvent('click', facetValue, eventName?, additionalData?);

If you want to send a custom payload, you can pass one object: sendEvent(customPayload);
`);
  };
  return a;
}
function ud(e) {
  return btoa(encodeURIComponent(JSON.stringify(e)));
}
function cu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cu(Object(r), !0).forEach(function(n) {
      Im(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Im(e, t, r) {
  return t = Fm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fm(e) {
  var t = Nm(e, "string");
  return Ut(t) === "symbol" ? t : String(t);
}
function Nm(e, t) {
  if (Ut(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ut(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dm(e, t) {
  return Lm(e) || Hm(e, t) || Mm(e, t) || km();
}
function km() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mm(e, t) {
  if (e) {
    if (typeof e == "string")
      return lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lu(e, t);
  }
}
function lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Hm(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function Lm(e) {
  if (Array.isArray(e))
    return e;
}
function Ut(e) {
  "@babel/helpers - typeof";
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(e);
}
function qm(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0; n < Math.ceil(e.length / t); n++)
    r.push(e.slice(n * t, (n + 1) * t));
  return r;
}
function cd(e) {
  var t = e.index, r = e.widgetType, n = e.methodName, i = e.args, a = e.instantSearchInstance;
  if (i.length === 1 && Ut(i[0]) === "object")
    return [i[0]];
  var s = i[0].split(":"), c = Dm(s, 2), u = c[0], o = c[1], f = i[1], l = i[2], v = i[3] || {};
  if (!f) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass hit or hits as the second argument like:
  `.concat(n, `(eventType, hit);
  `));
    return [];
  }
  if ((u === "click" || u === "conversion") && !l) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass eventName as the third argument for 'click' or 'conversion' events like:
  `.concat(n, `('click', hit, 'Product Purchased');

  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/
  `));
    return [];
  }
  var d = Array.isArray(f) ? f : [f];
  if (d.length === 0)
    return [];
  var p = d[0].__queryID, h = qm(d), m = h.map(function(_) {
    return _.map(function(w) {
      return w.objectID;
    });
  }), g = h.map(function(_) {
    return _.map(function(w) {
      return w.__position;
    });
  });
  if (u === "view")
    return a.status !== "idle" ? [] : h.map(function(_, w) {
      return {
        insightsMethod: "viewedObjectIDs",
        widgetType: r,
        eventType: u,
        payload: Pi({
          eventName: l || "Hits Viewed",
          index: t,
          objectIDs: m[w]
        }, v),
        hits: _,
        eventModifier: o
      };
    });
  if (u === "click")
    return h.map(function(_, w) {
      return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: r,
        eventType: u,
        payload: Pi({
          eventName: l || "Hit Clicked",
          index: t,
          queryID: p,
          objectIDs: m[w],
          positions: g[w]
        }, v),
        hits: _,
        eventModifier: o
      };
    });
  if (u === "conversion")
    return h.map(function(_, w) {
      return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: r,
        eventType: u,
        payload: Pi({
          eventName: l || "Hit Converted",
          index: t,
          queryID: p,
          objectIDs: m[w]
        }, v),
        hits: _,
        eventModifier: o
      };
    });
  if (process.env.NODE_ENV === "development")
    throw new Error('eventType("'.concat(u, `") is not supported.
    If you want to send a custom payload, you can pass one object: `).concat(n, `(customPayload);
    `));
  return [];
}
function Um(e) {
  var t = e.instantSearchInstance, r = e.index, n = e.widgetType, i = {}, a = void 0, s = function() {
    for (var u = arguments.length, o = new Array(u), f = 0; f < u; f++)
      o[f] = arguments[f];
    var l = cd({
      widgetType: n,
      index: r,
      methodName: "sendEvent",
      args: o,
      instantSearchInstance: t
    });
    l.forEach(function(v) {
      v.eventType === "click" && v.eventModifier === "internal" && i[v.eventType] || (i[v.eventType] = !0, t.sendEventToInsights(v));
    }), clearTimeout(a), a = setTimeout(function() {
      i = {};
    }, 0);
  };
  return s;
}
function Wm(e) {
  var t = e.index, r = e.widgetType, n = e.instantSearchInstance, i = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var o = cd({
      widgetType: r,
      index: t,
      methodName: "bindEvent",
      args: c,
      instantSearchInstance: n
    });
    return o.length ? "data-insights-event=".concat(ud(o)) : "";
  };
  return i;
}
function ft(e) {
  return e.$$type === "ais.index";
}
function Za(e, t) {
  var r = e[t.getIndexId()] || {};
  process.env.NODE_ENV === "development" && td({
    index: t,
    indexUiState: r
  }), t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
    uiState: r
  })), t.getWidgets().filter(ft).forEach(function(n) {
    return Za(e, n);
  });
}
var Bm = Promise.resolve();
function tr(e) {
  var t = null, r = !1, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    t === null && (t = Bm.then(function() {
      if (t = null, r) {
        r = !1;
        return;
      }
      e.apply(void 0, s);
    }));
  };
  return n.wait = function() {
    if (t === null)
      throw new Error("The deferred function should be called before calling `wait()`");
    return t;
  }, n.cancel = function() {
    t !== null && (r = !0);
  }, n;
}
function ti(e) {
  var t = e.name, r = e.connector, n = r === void 0 ? !1 : r;
  return ["https://www.algolia.com/doc/api-reference/widgets/", t, "/js/", n ? "#connector" : ""].join("");
}
function ht() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.map(function(i) {
    return ti(i);
  }).join(", ");
  return function(i) {
    return [i, "See documentation: ".concat(n)].filter(Boolean).join(`

`);
  };
}
function zm(e) {
  return typeof e == "string" ? e.replace(/^\\-/, "-") : e;
}
function Vm(e) {
  return typeof e == "number" && e < 0 || typeof e == "string" ? String(e).replace(/^-/, "\\-") : e;
}
function ri(e, t) {
  for (var r, n = 0; n < e.length; n++)
    if (r = e[n], t(r, n, e))
      return r;
}
function Qm(e, t) {
  if (!Array.isArray(e))
    return -1;
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
  return -1;
}
function Km(e) {
  if (e.transporter) {
    var t = e.transporter, r = t.headers, n = t.queryParameters, i = "x-algolia-application-id", a = "x-algolia-api-key", s = r[i] || n[i], c = r[a] || n[a];
    return [s, c];
  } else
    return [e.applicationID, e.apiKey];
}
function ui(e) {
  var t = Me.highlightPostTag, r = Me.highlightPreTag, n = e.split(r), i = n.shift(), a = i ? [{
    value: i,
    isHighlighted: !1
  }] : [];
  return n.forEach(function(s) {
    var c = s.split(t);
    a.push({
      value: c[0],
      isHighlighted: !0
    }), c[1] !== "" && a.push({
      value: c[1],
      isHighlighted: !1
    });
  }), a;
}
var Ym = new RegExp(/\w/i);
function Gm(e, t) {
  var r, n, i = e[t], a = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0, s = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !Ym.test(Zo(i.value)) && s === a ? s : i.isHighlighted;
}
function Kr(e, t) {
  var r = Array.isArray(t) ? t : t.split(".");
  return r.reduce(function(n, i) {
    return n && n[i];
  }, e);
}
function Ei(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], a = {
    type: t,
    attribute: r,
    name: n,
    escapedValue: Vm(n)
  }, s = ri(i, function(d) {
    return d.name === r;
  }), c;
  if (t === "hierarchical") {
    for (var u = e.getHierarchicalFacetByName(r), o = n.split(u.separator), f = function(p) {
      return function(h) {
        return p[h];
      };
    }, l = function(p) {
      s = s && s.data && ri(Object.keys(s.data).map(f(s.data)), function(h) {
        return h.name === o[p];
      });
    }, v = 0; s !== void 0 && v < o.length; ++v)
      l(v);
    c = s && s.count;
  } else
    c = s && s.data && s.data[a.name];
  return c !== void 0 && (a.count = c), s && s.exhaustive !== void 0 && (a.exhaustive = s.exhaustive), a;
}
function Jm(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = [], i = t.facetsRefinements, a = i === void 0 ? {} : i, s = t.facetsExcludes, c = s === void 0 ? {} : s, u = t.disjunctiveFacetsRefinements, o = u === void 0 ? {} : u, f = t.hierarchicalFacetsRefinements, l = f === void 0 ? {} : f, v = t.numericRefinements, d = v === void 0 ? {} : v, p = t.tagRefinements, h = p === void 0 ? [] : p;
  return Object.keys(a).forEach(function(m) {
    var g = a[m];
    g.forEach(function(_) {
      n.push(Ei(t, "facet", m, _, e.facets));
    });
  }), Object.keys(c).forEach(function(m) {
    var g = c[m];
    g.forEach(function(_) {
      n.push({
        type: "exclude",
        attribute: m,
        name: _,
        exclude: !0
      });
    });
  }), Object.keys(o).forEach(function(m) {
    var g = o[m];
    g.forEach(function(_) {
      n.push(Ei(
        t,
        "disjunctive",
        m,
        // We unescape any disjunctive refined values with `unescapeFacetValue` because
        // they can be escaped on negative numeric values with `escapeFacetValue`.
        zm(_),
        e.disjunctiveFacets
      ));
    });
  }), Object.keys(l).forEach(function(m) {
    var g = l[m];
    g.forEach(function(_) {
      n.push(Ei(t, "hierarchical", m, _, e.hierarchicalFacets));
    });
  }), Object.keys(d).forEach(function(m) {
    var g = d[m];
    Object.keys(g).forEach(function(_) {
      var w = _, b = g[w], y = Array.isArray(b) ? b : [b];
      y.forEach(function(j) {
        n.push({
          type: "numeric",
          attribute: m,
          name: "".concat(j),
          numericValue: j,
          operator: w
        });
      });
    });
  }), h.forEach(function(m) {
    n.push({
      type: "tag",
      attribute: "_tags",
      name: m
    });
  }), r && t.query && t.query.trim() && n.push({
    attribute: "query",
    type: "query",
    name: t.query,
    query: t.query
  }), n;
}
function Xm(e, t) {
  var r, n = (r = e.getWidgetRenderState) === null || r === void 0 ? void 0 : r.call(e, t), i = null;
  if (n && n.widgetParams) {
    var a = n.widgetParams;
    a.attribute ? i = a.attribute : Array.isArray(a.attributes) && (i = a.attributes[0]);
  }
  if (typeof i != "string")
    throw new Error(`Could not find the attribute of the widget:

`.concat(JSON.stringify(e), `

Please check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly.`));
  return i;
}
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function fu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fu(Object(r), !0).forEach(function(n) {
      Zm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zm(e, t, r) {
  return t = eg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eg(e) {
  var t = tg(e, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function tg(e, t) {
  if (Rr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rg(e, t, r) {
  return e.map(function(n, i) {
    return du(du({}, n), {}, {
      __position: r * t + i + 1
    });
  });
}
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function hu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hu(Object(r), !0).forEach(function(n) {
      ng(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ng(e, t, r) {
  return t = ig(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ig(e) {
  var t = ag(e, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function ag(e, t) {
  if (Pr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function og(e, t) {
  return t ? e.map(function(r) {
    return pu(pu({}, r), {}, {
      __queryID: t
    });
  }) : e;
}
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function sg(e, t) {
  return fg(e) || lg(e, t) || cg(e, t) || ug();
}
function ug() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cg(e, t) {
  if (e) {
    if (typeof e == "string")
      return vu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vu(e, t);
  }
}
function vu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lg(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function fg(e) {
  if (Array.isArray(e))
    return e;
}
function mu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mu(Object(r), !0).forEach(function(n) {
      ld(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ld(e, t, r) {
  return t = dg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dg(e) {
  var t = hg(e, "string");
  return Er(t) === "symbol" ? t : String(t);
}
function hg(e, t) {
  if (Er(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Er(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pg(e, t) {
  if (t && !((!("transporter" in e) || e._cacheHydrated) && (!e._useCache || typeof e.addAlgoliaAgent != "function"))) {
    var r = Object.keys(t).map(function(s) {
      var c = t[s], u = c.state, o = c.requestParams, f = c.results;
      return f.map(function(l) {
        return rr({
          indexName: u.index || l.index
        }, o || l.params ? {
          params: gu(o || vg(l.params))
        } : {});
      });
    }), n = Object.keys(t).reduce(function(s, c) {
      return s.concat(t[c].results);
    }, []);
    if ("transporter" in e && !e._cacheHydrated) {
      e._cacheHydrated = !0;
      var i = e.search;
      e.search = function(s) {
        for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), o = 1; o < c; o++)
          u[o - 1] = arguments[o];
        var f = s.map(function(l) {
          return rr(rr({}, l), {}, {
            params: gu(l.params)
          });
        });
        return e.transporter.responsesCache.get({
          method: "search",
          args: [f].concat(u)
        }, function() {
          return i.apply(void 0, [s].concat(u));
        });
      }, e.transporter.responsesCache.set({
        method: "search",
        args: r
      }, {
        results: n
      });
    }
    if (!("transporter" in e)) {
      var a = "/1/indexes/*/queries_body_".concat(JSON.stringify({
        requests: r
      }));
      e.cache = rr(rr({}, e.cache), {}, ld({}, a, JSON.stringify({
        results: Object.keys(t).map(function(s) {
          return t[s].results;
        })
      })));
    }
  }
}
function vg(e) {
  return e.split("&").reduce(function(t, r) {
    var n = r.split("="), i = sg(n, 2), a = i[0], s = i[1];
    return t[a] = s ? decodeURIComponent(s) : "", t;
  }, {});
}
function gu(e) {
  var t = function(i) {
    return Object.prototype.toString.call(i) === "[object Object]" || Object.prototype.toString.call(i) === "[object Array]";
  }, r = function(i) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      s[c - 1] = arguments[c];
    var u = 0;
    return i.replace(/%s/g, function() {
      return encodeURIComponent(s[u++]);
    });
  };
  return Object.keys(e).map(function(n) {
    return r("%s=%s", n, t(e[n]) ? JSON.stringify(e[n]) : e[n]);
  }).join("&");
}
function yu(e) {
  return e !== Object(e);
}
function es(e, t) {
  if (e === t)
    return !0;
  if (yu(e) || yu(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (!(i in t) || !es(e[i], t[i]))
      return !1;
  }
  return !0;
}
function fd(e, t) {
  t(e), e.getWidgets().forEach(function(r) {
    ft(r) && fd(r, t);
  });
}
function mg(e) {
  return e.filter(function(t, r, n) {
    return n.indexOf(t) === r;
  });
}
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
var gg = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bu(Object(r), !0).forEach(function(n) {
      yg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yg(e, t, r) {
  return t = bg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bg(e) {
  var t = wg(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function wg(e, t) {
  if (xr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _g(e, t) {
  if (e == null)
    return {};
  var r = Sg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Sg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Og = function(t, r) {
  r.facets, r.disjunctiveFacets, r.facetsRefinements, r.facetsExcludes, r.disjunctiveFacetsRefinements, r.numericRefinements, r.tagRefinements, r.hierarchicalFacets, r.hierarchicalFacetsRefinements, r.ruleContexts;
  var n = _g(r, gg);
  return t.setQueryParameters(n);
}, Rg = function(t, r) {
  return r.facets.reduce(function(n, i) {
    return n.addFacet(i);
  }, t);
}, Pg = function(t, r) {
  return r.disjunctiveFacets.reduce(function(n, i) {
    return n.addDisjunctiveFacet(i);
  }, t);
}, Eg = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacets: r.hierarchicalFacets.reduce(function(n, i) {
      var a = Qm(n, function(c) {
        return c.name === i.name;
      });
      if (a === -1)
        return n.concat(i);
      var s = n.slice();
      return s.splice(a, 1, i), s;
    }, t.hierarchicalFacets)
  });
}, xg = function(t, r) {
  return r.tagRefinements.reduce(function(n, i) {
    return n.addTagRefinement(i);
  }, t);
}, jg = function(t, r) {
  return t.setQueryParameters({
    facetsRefinements: it(it({}, t.facetsRefinements), r.facetsRefinements)
  });
}, Tg = function(t, r) {
  return t.setQueryParameters({
    facetsExcludes: it(it({}, t.facetsExcludes), r.facetsExcludes)
  });
}, Cg = function(t, r) {
  return t.setQueryParameters({
    disjunctiveFacetsRefinements: it(it({}, t.disjunctiveFacetsRefinements), r.disjunctiveFacetsRefinements)
  });
}, Ag = function(t, r) {
  return t.setQueryParameters({
    numericRefinements: it(it({}, t.numericRefinements), r.numericRefinements)
  });
}, $g = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacetsRefinements: it(it({}, t.hierarchicalFacetsRefinements), r.hierarchicalFacetsRefinements)
  });
}, Ig = function(t, r) {
  var n = mg([].concat(t.ruleContexts).concat(r.ruleContexts).filter(Boolean));
  return n.length > 0 ? t.setQueryParameters({
    ruleContexts: n
  }) : t;
}, Yn = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.reduce(function(i, a) {
    var s = $g(i, a), c = Eg(s, a), u = xg(c, a), o = Ag(u, a), f = Cg(o, a), l = Tg(f, a), v = jg(l, a), d = Pg(v, a), p = Ig(d, a), h = Rg(p, a);
    return Og(h, a);
  });
};
function pr(e, t, r) {
  var n = t.getHelper();
  return {
    uiState: r,
    helper: n,
    parent: t,
    instantSearchInstance: e,
    state: n.state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    scopedResults: [],
    searchMetadata: {
      isSearchStalled: e.status === "stalled"
    },
    status: e.status,
    error: e.error
  };
}
function wu(e, t) {
  var r = t.getResults(), n = t.getHelper();
  return {
    helper: n,
    parent: t,
    instantSearchInstance: e,
    results: r,
    scopedResults: t.getScopedResults(),
    state: r ? r._state : n.state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    searchMetadata: {
      isSearchStalled: e.status === "stalled"
    },
    status: e.status,
    error: e.error
  };
}
function Fg(e) {
  for (var t = e.getParent(), r = [e.getHelper().state]; t !== null; )
    r = [t.getHelper().state].concat(r), t = t.getParent();
  return r;
}
function jr(e) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
function _u(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _u(Object(r), !0).forEach(function(n) {
      Ng(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _u(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ng(e, t, r) {
  return t = Dg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dg(e) {
  var t = kg(e, "string");
  return jr(t) === "symbol" ? t : String(t);
}
function kg(e, t) {
  if (jr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dd(e) {
  return e.some(function(t) {
    return t.isHighlighted;
  }) ? e.map(function(t, r) {
    return nn(nn({}, t), {}, {
      isHighlighted: !Gm(e, r)
    });
  }) : e.map(function(t) {
    return nn(nn({}, t), {}, {
      isHighlighted: !1
    });
  });
}
function mt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    fallback: function() {
    }
  }, r = t.fallback;
  return typeof window > "u" ? r() : e({
    window
  });
}
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Su(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Su(Object(r), !0).forEach(function(n) {
      hd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Su(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hd(e, t, r) {
  return t = Mg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mg(e) {
  var t = Hg(e, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function Hg(e, t) {
  if (Tr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lg = ht({
  name: "configure",
  connector: !0
});
function Ou(e, t) {
  return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(r, n) {
    return Fe(Fe({}, r), {}, hd({}, n, void 0));
  }, {}));
}
var qg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ie, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return function(n) {
    if (!n || !id(n.searchParameters))
      throw new Error(Lg("The `searchParameters` option expects an object."));
    var i = {};
    function a(s) {
      return function(c) {
        var u = Ou(s.state, n), o = Yn(u, new Ye.SearchParameters(c));
        n.searchParameters = c, s.setState(o).search();
      };
    }
    return {
      $$type: "ais.configure",
      init: function(c) {
        var u = c.instantSearchInstance;
        t(Fe(Fe({}, this.getWidgetRenderState(c)), {}, {
          instantSearchInstance: u
        }), !0);
      },
      render: function(c) {
        var u = c.instantSearchInstance;
        t(Fe(Fe({}, this.getWidgetRenderState(c)), {}, {
          instantSearchInstance: u
        }), !1);
      },
      dispose: function(c) {
        var u = c.state;
        return r(), Ou(u, n);
      },
      getRenderState: function(c, u) {
        var o, f = this.getWidgetRenderState(u);
        return Fe(Fe({}, c), {}, {
          configure: Fe(Fe({}, f), {}, {
            widgetParams: Fe(Fe({}, f.widgetParams), {}, {
              searchParameters: Yn(new Ye.SearchParameters((o = c.configure) === null || o === void 0 ? void 0 : o.widgetParams.searchParameters), new Ye.SearchParameters(f.widgetParams.searchParameters)).getQueryParams()
            })
          })
        });
      },
      getWidgetRenderState: function(c) {
        var u = c.helper;
        return i.refine || (i.refine = a(u)), {
          refine: i.refine,
          widgetParams: n
        };
      },
      getWidgetSearchParameters: function(c, u) {
        var o = u.uiState;
        return Yn(c, new Ye.SearchParameters(Fe(Fe({}, o.configure), n.searchParameters)));
      },
      getWidgetUiState: function(c) {
        return Fe(Fe({}, c), {}, {
          configure: Fe(Fe({}, c.configure), n.searchParameters)
        });
      }
    };
  };
};
const Ug = qg;
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
var Ru = Object.prototype.hasOwnProperty;
function Wt(e, t, r) {
  if (r != null && r(e, t))
    return !0;
  var n, i;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((i = e.length) === t.length)
        for (; i-- && Wt(e[i], t[i], r); )
          ;
      return i === -1;
    }
    if (!n || eo(e) === "object") {
      i = 0;
      for (n in e)
        if (Ru.call(e, n) && ++i && !Ru.call(t, n) || !(n in t) || !Wt(e[n], t[n], r))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
function Pu(e) {
  var t, r, n;
  return new Ye.SearchResults(e, [{
    query: (t = e.query) !== null && t !== void 0 ? t : "",
    page: (r = e.page) !== null && r !== void 0 ? r : 0,
    hitsPerPage: (n = e.hitsPerPage) !== null && n !== void 0 ? n : 20,
    hits: [],
    nbHits: 0,
    nbPages: 0,
    params: "",
    exhaustiveNbHits: !0,
    exhaustiveFacetsCount: !0,
    processingTimeMS: 0,
    index: e.index
  }], {
    /** used by connectors to prevent persisting these results */
    __isArtificial: !0
  });
}
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function Eu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eu(Object(r), !0).forEach(function(n) {
      Wg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wg(e, t, r) {
  return t = Bg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bg(e) {
  var t = zg(e, "string");
  return Cr(t) === "symbol" ? t : String(t);
}
function zg(e, t) {
  if (Cr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Cr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vg(e) {
  var t = e.getHelper(), r = (
    // On SSR, we get the results injected on the Index.
    e.getResults() || // On the browser, we create fallback results based on the helper state.
    Pu(t.state)
  ), n = e.getScopedResults().map(function(i) {
    var a = i.indexId === e.getIndexId() ? r : Pu(i.helper.state);
    return xu(xu({}, i), {}, {
      // We keep `results` from being `null`.
      results: i.results || a
    });
  });
  return {
    results: r,
    scopedResults: n
  };
}
function pd(e, t) {
  if (!e) {
    if (process.env.NODE_ENV !== "development")
      throw new Error("Invariant failed");
    if (process.env.NODE_ENV === "development")
      throw new Error("[InstantSearch] ".concat(typeof t == "function" ? t() : t));
  }
}
var ts = /* @__PURE__ */ Qt(null);
process.env.NODE_ENV === "development" && (ts.displayName = "Index");
function Qg() {
  var e = dt(ts);
  return pd(e !== null, "The <Index> component must be used within <InstantSearch>."), e;
}
var rs = /* @__PURE__ */ Qt(null);
process.env.NODE_ENV === "development" && (rs.displayName = "InstantSearch");
function vd() {
  var e = dt(rs);
  return pd(e !== null, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`."), e;
}
var md = /* @__PURE__ */ Qt(null);
process.env.NODE_ENV === "development" && (md.displayName = "InstantSearchServer");
function gd() {
  return dt(md);
}
function Kg(e, t) {
  return Xg(e) || Jg(e, t) || Gg(e, t) || Yg();
}
function Yg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gg(e, t) {
  if (e) {
    if (typeof e == "string")
      return ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ju(e, t);
  }
}
function ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Jg(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function Xg(e) {
  if (Array.isArray(e))
    return e;
}
function Tu(e) {
  var t = bt(function() {
    return e;
  }), r = Kg(t, 2), n = r[0], i = r[1];
  return Wt(n, e) || i(e), n;
}
var Zg = "use", Cu = Mh[Zg], ey = typeof window < "u" ? Lh : gt, ty = /* @__PURE__ */ Qt(null);
function yd() {
  return dt(ty);
}
function ry(e) {
  var t, r = e.widget, n = e.parentIndex, i = e.props, a = e.shouldSsr, s = yd(), c = Ve(i);
  gt(function() {
    c.current = i;
  }, [i]);
  var u = Ve(r);
  gt(function() {
    u.current = r;
  }, [r]);
  var o = Ve(null), f = a && !n.getWidgets().includes(r), l = vd();
  if (ey(function() {
    var d = u.current;
    if (!o.current)
      f || n.addWidgets([r]);
    else {
      clearTimeout(o.current);
      var p = Wt(i, c.current);
      p || (n.removeWidgets([d]), n.addWidgets([r]));
    }
    return function() {
      o.current = setTimeout(function() {
        l._schedule(function() {
          l._preventWidgetCleanup || n.removeWidgets([d]);
        });
      });
    };
  }, [n, r, f, l, i]), (f || (s == null || (t = s.current) === null || t === void 0 ? void 0 : t.status) === "pending") && n.addWidgets([r]), typeof window > "u" && s !== null && s !== void 0 && s.current && // We need the widgets contained in the index to be added before we trigger the search request.
  r.$$type !== "ais.index") {
    var v;
    Cu(s.current), r.$$type !== "ais.dynamicWidgets" && (v = l.helper) !== null && v !== void 0 && v.lastResults && Cu(s.current);
  }
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var ny = ["instantSearchInstance", "widgetParams"], iy = ["widgetParams"];
function ay(e, t) {
  return cy(e) || uy(e, t) || sy(e, t) || oy();
}
function oy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sy(e, t) {
  if (e) {
    if (typeof e == "string")
      return Au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Au(e, t);
  }
}
function Au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function uy(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function cy(e) {
  if (Array.isArray(e))
    return e;
}
function $u(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Iu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $u(Object(r), !0).forEach(function(n) {
      ly(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $u(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ly(e, t, r) {
  return t = fy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fy(e) {
  var t = dy(e, "string");
  return Ar(t) === "symbol" ? t : String(t);
}
function dy(e, t) {
  if (Ar(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ar(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fu(e, t) {
  if (e == null)
    return {};
  var r = hy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = gd(), i = vd(), a = Qg(), s = Tu(t), c = Tu(r), u = Ve(!0), o = Ve(null), f = Ve(i.status), l = ii(function() {
    var m = e(function(g, _) {
      if (_) {
        u.current = !0;
        return;
      }
      if (u.current) {
        var w = g.instantSearchInstance;
        g.widgetParams;
        var b = Fu(g, ny);
        (!Wt(b, o.current, function(y, j) {
          return (y == null ? void 0 : y.constructor) === Function && (j == null ? void 0 : j.constructor) === Function;
        }) || w.status !== f.current) && (h(b), o.current = b, f.current = w.status);
      }
    }, function() {
      u.current = !1;
    });
    return Iu(Iu({}, m(s)), c);
  }, [e, s, c]), v = bt(function() {
    if (l.getWidgetRenderState) {
      var m, g = a.getHelper(), _ = a.getWidgetUiState({})[a.getIndexId()];
      g.state = ((m = l.getWidgetSearchParameters) === null || m === void 0 ? void 0 : m.call(l, g.state, {
        uiState: _
      })) || g.state;
      var w = Vg(a), b = w.results, y = w.scopedResults, j = l.getWidgetRenderState({
        helper: g,
        parent: a,
        instantSearchInstance: i,
        results: b,
        scopedResults: y,
        state: g.state,
        renderState: i.renderState,
        templatesConfig: i.templatesConfig,
        createURL: a.createURL,
        searchMetadata: {
          isSearchStalled: i.status === "stalled"
        },
        status: i.status,
        error: i.error
      });
      j.widgetParams;
      var $ = Fu(j, iy);
      return $;
    }
    return {};
  }), d = ay(v, 2), p = d[0], h = d[1];
  return ry({
    widget: l,
    parentIndex: a,
    props: s,
    shouldSsr: !!n
  }), p;
}
function py(e, t) {
  return jt(Ug, {
    searchParameters: e
  }, t);
}
function vy(e) {
  return py(e, {
    $$widgetType: "ais.configure"
  }), null;
}
function Nu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nu(Object(r), !0).forEach(function(n) {
      my(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function my(e, t, r) {
  return t = gy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gy(e) {
  var t = yy(e, "string");
  return Bt(t) === "symbol" ? t : String(t);
}
function yy(e, t) {
  if (Bt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Bt(e) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bt(e);
}
var an = ht({
  name: "dynamic-widgets",
  connector: !0
}), Du = 20, by = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return Gt(t, an()), function(n) {
    var i = n.widgets, a = n.maxValuesPerFacet, s = a === void 0 ? 20 : a, c = n.facets, u = c === void 0 ? ["*"] : c, o = n.transformItems, f = o === void 0 ? function(d) {
      return d;
    } : o, l = n.fallbackWidget;
    if (!(i && Array.isArray(i) && i.every(function(d) {
      return Bt(d) === "object";
    })))
      throw new Error(an("The `widgets` option expects an array of widgets."));
    if (!Array.isArray(u))
      throw new Error(an("The `facets` option only accepts an array of facets, you passed ".concat(JSON.stringify(u))));
    var v = /* @__PURE__ */ new Map();
    return {
      $$type: "ais.dynamicWidgets",
      init: function(p) {
        i.forEach(function(h) {
          var m = Xm(h, p);
          v.set(m, {
            widget: h,
            isMounted: !1
          });
        }), t(It(It({}, this.getWidgetRenderState(p)), {}, {
          instantSearchInstance: p.instantSearchInstance
        }), !0);
      },
      render: function(p) {
        var h = p.parent, m = this.getWidgetRenderState(p), g = [], _ = [];
        l && m.attributesToRender.forEach(function(w) {
          if (!v.has(w)) {
            var b = l({
              attribute: w
            });
            v.set(w, {
              widget: b,
              isMounted: !1
            });
          }
        }), v.forEach(function(w, b) {
          var y = w.widget, j = w.isMounted, $ = m.attributesToRender.indexOf(b) > -1;
          !j && $ ? (_.push(y), v.set(b, {
            widget: y,
            isMounted: !0
          })) : j && !$ && (g.push(y), v.set(b, {
            widget: y,
            isMounted: !1
          }));
        }), h.addWidgets(_), setTimeout(function() {
          return h.removeWidgets(g);
        }, 0), t(It(It({}, m), {}, {
          instantSearchInstance: p.instantSearchInstance
        }), !1);
      },
      dispose: function(p) {
        var h = p.parent, m = [];
        v.forEach(function(g) {
          var _ = g.widget, w = g.isMounted;
          w && m.push(_);
        }), h.removeWidgets(m), r();
      },
      getWidgetSearchParameters: function(p) {
        return u.reduce(function(h, m) {
          return h.addFacet(m);
        }, p.setQueryParameters({
          maxValuesPerFacet: Math.max(s || 0, p.maxValuesPerFacet || 0)
        }));
      },
      getRenderState: function(p, h) {
        return It(It({}, p), {}, {
          dynamicWidgets: this.getWidgetRenderState(h)
        });
      },
      getWidgetRenderState: function(p) {
        var h, m, g, _, w = p.results, b = p.state;
        if (!w)
          return {
            attributesToRender: [],
            widgetParams: n
          };
        var y = f((h = (m = w.renderingContent) === null || m === void 0 || (g = m.facetOrdering) === null || g === void 0 || (_ = g.facets) === null || _ === void 0 ? void 0 : _.order) !== null && h !== void 0 ? h : [], {
          results: w
        });
        if (!Array.isArray(y))
          throw new Error(an("The `transformItems` option expects a function that returns an Array."));
        return process.env.NODE_ENV === "development" && le(s >= (b.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(s, ") is smaller than one of the limits set by a widget (").concat(b.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted.")), process.env.NODE_ENV === "development" && le(y.length <= Du || n.facets !== void 0, "More than ".concat(Du, ` facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set "facets" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning.`)), {
          attributesToRender: y,
          widgetParams: n
        };
      }
    };
  };
};
const wy = by;
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function ku(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ku(Object(r), !0).forEach(function(n) {
      _y(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ku(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _y(e, t, r) {
  return t = Sy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sy(e) {
  var t = Oy(e, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function Oy(e, t) {
  if ($r(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($r(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ry(e, t) {
  return jt(wy, Mu(Mu({}, e), {}, {
    // We don't rely on InstantSearch.js for rendering widgets because React
    // directly manipulates the children.
    widgets: []
  }), t);
}
var Hu = {
  current: {}
};
function ns(e, t) {
  if (process.env.NODE_ENV === "development" && !e) {
    var r = t.trim(), n = Hu.current[r];
    if (!n) {
      Hu.current[r] = !0;
      var i = "[InstantSearch] ".concat(r);
      console.warn(i);
      try {
        throw new Error(i);
      } catch {
      }
    }
  }
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
var Py = ["initialSearchParameters"];
function Lu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lu(Object(r), !0).forEach(function(n) {
      Dt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dt(e, t, r) {
  return t = Ey(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ey(e) {
  var t = xy(e, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function xy(e, t) {
  if (Ir(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ir(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bd(e) {
  return Ay(e) || Cy(e) || Ty(e) || jy();
}
function jy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ty(e, t) {
  if (e) {
    if (typeof e == "string")
      return to(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return to(e, t);
  }
}
function Cy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ay(e) {
  if (Array.isArray(e))
    return to(e);
}
function to(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $y(e, t) {
  if (e == null)
    return {};
  var r = Iy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Iy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var nr = ht({
  name: "index-widget"
});
function wd(e, t) {
  var r = t.state, n = t.isPageReset, i = t._uiState;
  r !== e.state && (e.state = r, e.emit("change", {
    state: e.state,
    results: e.lastResults,
    isPageReset: n,
    _uiState: i
  }));
}
function ir(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e.reduce(function(n, i) {
    return ft(i) || !i.getWidgetUiState && !i.getWidgetState ? n : i.getWidgetUiState ? i.getWidgetUiState(n, t) : i.getWidgetState(n, t);
  }, r);
}
function ar(e, t) {
  var r = t.initialSearchParameters, n = $y(t, Py);
  return e.filter(function(i) {
    return !ft(i);
  }).reduce(function(i, a) {
    return a.getWidgetSearchParameters ? a.getWidgetSearchParameters(i, n) : i;
  }, r);
}
function _d(e) {
  var t = e.filter(ft);
  t.length !== 0 && t.forEach(function(r) {
    var n = r.getHelper();
    wd(n, {
      state: n.state.resetPage(),
      isPageReset: !0
    }), _d(r.getWidgets());
  });
}
function Sd(e) {
  var t = e.filter(ft);
  return t.reduce(function(r, n) {
    return r.concat.apply(r, [{
      indexId: n.getIndexId(),
      results: n.getResults(),
      helper: n.getHelper()
    }].concat(bd(Sd(n.getWidgets()))));
  }, []);
}
var Fy = function(t) {
  if (t === void 0 || t.indexName === void 0)
    throw new Error(nr("The `indexName` option is required."));
  var r = t.indexName, n = t.indexId, i = n === void 0 ? r : n, a = [], s = {}, c = null, u = null, o = null, f = null, l = null;
  return {
    $$type: "ais.index",
    $$widgetType: "ais.index",
    getIndexName: function() {
      return r;
    },
    getIndexId: function() {
      return i;
    },
    getHelper: function() {
      return o;
    },
    getResults: function() {
      var d;
      return (d = f) !== null && d !== void 0 && d.lastResults ? (f.lastResults._state = o.state, f.lastResults) : null;
    },
    getPreviousState: function() {
      return l;
    },
    getScopedResults: function() {
      var d = this.getParent(), p = d ? d.getWidgets() : [this];
      return Sd(p);
    },
    getParent: function() {
      return u;
    },
    createURL: function(d) {
      return typeof d == "function" ? c._createURL(Dt({}, i, d(s))) : c._createURL(Dt({}, i, ir(a, {
        searchParameters: d,
        helper: o
      })));
    },
    getWidgets: function() {
      return a;
    },
    addWidgets: function(d) {
      var p = this;
      if (!Array.isArray(d))
        throw new Error(nr("The `addWidgets` method expects an array of widgets."));
      if (d.some(function(h) {
        return typeof h.init != "function" && typeof h.render != "function";
      }))
        throw new Error(nr("The widget definition expects a `render` and/or an `init` method."));
      return a = a.concat(d), c && d.length && (wd(o, {
        state: ar(a, {
          uiState: s,
          initialSearchParameters: o.state
        }),
        _uiState: s
      }), d.forEach(function(h) {
        if (h.getRenderState) {
          var m = h.getRenderState(c.renderState[p.getIndexId()] || {}, pr(c, p, c._initialUiState));
          xi({
            renderState: m,
            instantSearchInstance: c,
            parent: p
          });
        }
      }), d.forEach(function(h) {
        h.init && h.init(pr(c, p, c._initialUiState));
      }), c.scheduleSearch()), this;
    },
    removeWidgets: function(d) {
      var p = this;
      if (!Array.isArray(d))
        throw new Error(nr("The `removeWidgets` method expects an array of widgets."));
      if (d.some(function(g) {
        return typeof g.dispose != "function";
      }))
        throw new Error(nr("The widget definition expects a `dispose` method."));
      if (a = a.filter(function(g) {
        return d.indexOf(g) === -1;
      }), c && d.length) {
        var h = d.reduce(function(g, _) {
          var w = _.dispose({
            helper: o,
            state: g,
            parent: p
          });
          return w || g;
        }, o.state), m = c.future.preserveSharedStateOnUnmount ? ar(a, {
          uiState: s,
          initialSearchParameters: new Ye.SearchParameters({
            index: this.getIndexName()
          })
        }) : ar(a, {
          uiState: ir(a, {
            searchParameters: h,
            helper: o
          }),
          initialSearchParameters: h
        });
        s = ir(a, {
          searchParameters: m,
          helper: o
        }), o.setState(m), a.length && c.scheduleSearch();
      }
      return this;
    },
    init: function(d) {
      var p = this, h, m = d.instantSearchInstance, g = d.parent, _ = d.uiState;
      if (o === null) {
        c = m, u = g, s = _[i] || {};
        var w = m.mainHelper, b = ar(a, {
          uiState: s,
          initialSearchParameters: new Ye.SearchParameters({
            index: r
          })
        });
        o = Ye({}, b.index, b), o.search = function() {
          return m.onStateChange ? (m.onStateChange({
            uiState: m.mainIndex.getWidgetUiState({}),
            setUiState: function(R) {
              return m.setUiState(R, !1);
            }
          }), w) : w.search();
        }, o.searchWithoutTriggeringOnStateChange = function() {
          return w.search();
        }, o.searchForFacetValues = function($, R, q, V) {
          var L = o.state.setQueryParameters(V);
          return w.searchForFacetValues($, R, q, L);
        }, f = w.derive(function() {
          return Yn.apply(void 0, [w.state].concat(bd(Fg(p))));
        });
        var y = (h = m._initialResults) === null || h === void 0 ? void 0 : h[this.getIndexId()];
        if (y) {
          var j = new Ye.SearchResults(new Ye.SearchParameters(y.state), y.results);
          f.lastResults = j, o.lastResults = j;
        }
        o.on("change", function($) {
          var R = $.isPageReset;
          R && _d(a);
        }), f.on("search", function() {
          m.scheduleStalledRender(), process.env.NODE_ENV === "development" && td({
            index: p,
            indexUiState: s
          });
        }), f.on("result", function($) {
          var R = $.results;
          m.scheduleRender(), o.lastResults = R, l = R == null ? void 0 : R._state;
        }), a.forEach(function($) {
          if ($.getRenderState) {
            var R = $.getRenderState(m.renderState[p.getIndexId()] || {}, pr(m, p, _));
            xi({
              renderState: R,
              instantSearchInstance: m,
              parent: p
            });
          }
        }), a.forEach(function($) {
          process.env.NODE_ENV === "development" && le(
            // if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
            // aka we warn if there's _only_ getWidgetState
            !$.getWidgetState || !!$.getWidgetUiState,
            "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."
          ), $.init && $.init(pr(m, p, _));
        }), o.on("change", function($) {
          var R = $.state, q = $._uiState;
          s = ir(a, {
            searchParameters: R,
            helper: o
          }, q || {}), m.onStateChange || m.onInternalStateChange();
        }), y && m.scheduleRender();
      }
    },
    render: function(d) {
      var p = this, h = d.instantSearchInstance;
      h.status === "error" && !h.mainHelper.hasPendingRequests() && l && o.setState(l);
      var m = this.getResults() ? a : a.filter(ft);
      m.forEach(function(g) {
        if (g.getRenderState) {
          var _ = g.getRenderState(h.renderState[p.getIndexId()] || {}, wu(h, p));
          xi({
            renderState: _,
            instantSearchInstance: h,
            parent: p
          });
        }
      }), m.forEach(function(g) {
        g.render && g.render(wu(h, p));
      });
    },
    dispose: function() {
      var d = this, p, h;
      a.forEach(function(m) {
        m.dispose && m.dispose({
          helper: o,
          state: o.state,
          parent: d
        });
      }), c = null, u = null, (p = o) === null || p === void 0 || p.removeAllListeners(), o = null, (h = f) === null || h === void 0 || h.detach(), f = null;
    },
    getWidgetUiState: function(d) {
      return a.filter(ft).reduce(function(p, h) {
        return h.getWidgetUiState(p);
      }, nt(nt({}, d), {}, Dt({}, i, nt(nt({}, d[i]), s))));
    },
    getWidgetState: function(d) {
      return process.env.NODE_ENV === "development" && le(!1, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."), this.getWidgetUiState(d);
    },
    getWidgetSearchParameters: function(d, p) {
      var h = p.uiState;
      return ar(a, {
        uiState: h,
        initialSearchParameters: d
      });
    },
    refreshUiState: function() {
      s = ir(a, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, s);
    },
    setIndexUiState: function(d) {
      var p = typeof d == "function" ? d(s) : d;
      c.setUiState(function(h) {
        return nt(nt({}, h), {}, Dt({}, i, p));
      });
    }
  };
};
function xi(e) {
  var t = e.renderState, r = e.instantSearchInstance, n = e.parent, i = n ? n.getIndexId() : r.mainIndex.getIndexId();
  r.renderState = nt(nt({}, r.renderState), {}, Dt({}, i, nt(nt({}, r.renderState[i]), t)));
}
function Ny(e, t) {
  return Hy(e) || My(e, t) || ky(e, t) || Dy();
}
function Dy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ky(e, t) {
  if (e) {
    if (typeof e == "string")
      return qu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qu(e, t);
  }
}
function qu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function My(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function Hy(e) {
  if (Array.isArray(e))
    return e;
}
function Ly() {
  var e = qh(function(n) {
    return n + 1;
  }, 0), t = Ny(e, 2), r = t[1];
  return r;
}
var Od = /* @__PURE__ */ Qt(null);
process.env.NODE_ENV === "development" && (Od.displayName = "InstantSearchSSR");
function qy() {
  return dt(Od);
}
var Uy = "ais", ci = function(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.descendantName, i = r.modifierName, a = n ? "-".concat(n) : "", s = i ? "--".concat(i) : "";
    return "".concat(Uy, "-").concat(t).concat(a).concat(s);
  };
}, Wy = ci("Highlight");
function By(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && le(!1, "`instantsearch.highlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Highlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Kr(i._highlightResult, t);
  process.env.NODE_ENV === "development" && le(c, 'Could not enable highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = Wy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : "");
  return f.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var zy = ci("ReverseHighlight");
function Vy(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && le(!1, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Kr(i._highlightResult, t);
  process.env.NODE_ENV === "development" && le(c, 'Could not enable reverse highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = zy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : ""), v = sd(dd(ui(f)));
  return v.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var Qy = ci("Snippet");
function Ky(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && le(!1, "`instantsearch.snippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Snippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Kr(i._snippetResult, t);
  process.env.NODE_ENV === "development" && le(c, 'Could not enable snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = Qy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : "");
  return f.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var Yy = ci("ReverseSnippet");
function Gy(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && le(!1, "`instantsearch.reverseSnippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseSnippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Kr(i._snippetResult, t);
  process.env.NODE_ENV === "development" && le(c, 'Could not enable reverse snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = Yy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : ""), v = sd(dd(ui(f)));
  return v.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function Jy(e) {
  var t = e.method, r = e.payload;
  if (ro(r) !== "object")
    throw new Error("The insights helper expects the payload to be an object.");
  var n;
  try {
    n = ud(r);
  } catch {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'.concat(t, '" data-insights-payload="').concat(n, '"');
}
function Xy(e, t) {
  return process.env.NODE_ENV === "development" && le(!1, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), Jy({
    method: e,
    payload: t
  });
}
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
var Zy = "_ALGOLIA";
function eb(e) {
  if (!((typeof document > "u" ? "undefined" : no(document)) !== "object" || typeof document.cookie != "string"))
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) === " "; )
        i = i.substring(1);
      if (i.indexOf(t) === 0)
        return i.substring(t.length, i.length);
    }
}
function tb() {
  return eb(Zy);
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function Uu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uu(Object(r), !0).forEach(function(n) {
      rb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rb(e, t, r) {
  return t = nb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nb(e) {
  var t = ib(e, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function ib(e, t) {
  if (Fr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vr(e, t) {
  return sb(e) || ob(e, t) || Rd(e, t) || ab();
}
function ab() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ob(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function sb(e) {
  if (Array.isArray(e))
    return e;
}
function ub(e) {
  return fb(e) || lb(e) || Rd(e) || cb();
}
function cb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rd(e, t) {
  if (e) {
    if (typeof e == "string")
      return io(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return io(e, t);
  }
}
function lb(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function fb(e) {
  if (Array.isArray(e))
    return io(e);
}
function io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Pd = "2.13.0", db = "https://cdn.jsdelivr.net/npm/search-insights@".concat(Pd, "/dist/search-insights.min.js");
function Wu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.insightsClient, r = e.insightsInitParams, n = e.onEvent, i = e.$$internal, a = i === void 0 ? !1 : i, s = e.$$automatic, c = s === void 0 ? !1 : s, u = t;
  !t && t !== null && mt(function(f) {
    var l = f.window, v = l.AlgoliaAnalyticsObject || "aa";
    typeof v == "string" && (u = l[v]), u || (l.AlgoliaAnalyticsObject = v, l[v] || (l[v] = function() {
      l[v].queue || (l[v].queue = []);
      for (var d = arguments.length, p = new Array(d), h = 0; h < d; h++)
        p[h] = arguments[h];
      l[v].queue.push(p);
    }, l[v].version = Pd, l[v].shouldAddScript = !0), u = l[v]);
  });
  var o = u || Ie;
  return function(f) {
    var l = f.instantSearchInstance, v = l.middleware.filter(function(V) {
      return V.instance.$$type === "ais.insights" && V.instance.$$internal;
    }).map(function(V) {
      return V.creator;
    });
    l.unuse.apply(l, ub(v));
    var d = Km(l.client), p = vr(d, 2), h = p[0], m = p[1];
    process.env.NODE_ENV === "development" && le(!!(h && m), "could not extract Algolia credentials from searchClient in insights middleware.");
    var g = void 0, _ = void 0, w = void 0, b = void 0, y = o.queue;
    if (Array.isArray(y)) {
      var j = ["setUserToken", "setAuthenticatedUserToken"].map(function(V) {
        var L = ri(y.slice().reverse(), function(re) {
          var U = vr(re, 1), T = U[0];
          return T === V;
        }) || [], k = vr(L, 2), A = k[1];
        return A;
      }), $ = vr(j, 2);
      g = $[0], _ = $[1];
    }
    o("getUserToken", null, function(V, L) {
      w = ji(L);
    }), o("getAuthenticatedUserToken", null, function(V, L) {
      b = ji(L);
    }), (r || !Bu(o)) && o("init", Ot({
      appId: h,
      apiKey: m,
      partial: !0
    }, r));
    var R, q;
    return {
      $$type: "ais.insights",
      $$internal: a,
      $$automatic: c,
      onStateChange: function() {
      },
      subscribe: function() {
        if (o.shouldAddScript) {
          var L = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
          try {
            var k = document.createElement("script");
            k.async = !0, k.src = db, k.onerror = function() {
              l.emit("error", new Error(L));
            }, document.body.appendChild(k), o.shouldAddScript = !1;
          } catch {
            o.shouldAddScript = !1, l.emit("error", new Error(L));
          }
        }
      },
      started: function() {
        o("addAlgoliaAgent", "insights-middleware"), q = l.mainHelper, R = {
          userToken: q.state.userToken,
          clickAnalytics: q.state.clickAnalytics
        }, c || q.overrideStateWithoutTriggeringChangeEvent(Ot(Ot({}, q.state), {}, {
          clickAnalytics: !0
        })), a || l.scheduleSearch();
        var L = function(F) {
          var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, E = ji(F);
          if (!E)
            return;
          var M = q.state.userToken;
          function D() {
            q.overrideStateWithoutTriggeringChangeEvent(Ot(Ot({}, q.state), {}, {
              userToken: E
            })), M && M !== F && l.scheduleSearch();
          }
          Q ? D() : setTimeout(D, 0);
        }, k = tb();
        k && L(k, !0);
        function A(C, F, Q) {
          L(C, !0), F && o("setUserToken", F), Q && o("setAuthenticatedUserToken", Q);
        }
        var re = b || w, U = _ || g;
        re ? A(re, w, b) : U && A(U, g, _), o("onUserTokenChange", L, {
          immediate: !0
        }), o("onAuthenticatedUserTokenChange", function(C) {
          C || o("getUserToken", null, function(F, Q) {
            L(Q);
          }), L(C);
        }, {
          immediate: !0
        });
        var T = o;
        Bu(o) && (T = function(F, Q) {
          var E = {
            headers: {
              "X-Algolia-Application-Id": h,
              "X-Algolia-API-Key": m
            }
          };
          return o(F, Q, E);
        }), l.sendEventToInsights = function(C) {
          n ? n(C, T) : C.insightsMethod ? (C.payload.algoliaSource = ["instantsearch"], c && C.payload.algoliaSource.push("instantsearch-automatic"), C.eventModifier === "internal" && C.payload.algoliaSource.push("instantsearch-internal"), T(C.insightsMethod, C.payload), process.env.NODE_ENV === "development" && le(!!q.state.userToken, `
Cannot send event to Algolia Insights because \`userToken\` is not set.

See documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken
`)) : process.env.NODE_ENV === "development" && le(!1, "Cannot send event to Algolia Insights because `insightsMethod` option is missing.");
        };
      },
      unsubscribe: function() {
        o("onUserTokenChange", void 0), o("onAuthenticatedUserTokenChange", void 0), l.sendEventToInsights = Ie, q && R && (q.overrideStateWithoutTriggeringChangeEvent(Ot(Ot({}, q.state), R)), l.scheduleSearch());
      }
    };
  };
}
function Bu(e) {
  var t = (e.version || "").split(".").map(Number), r = vr(t, 2), n = r[0], i = r[1], a = n >= 3, s = n === 2 && i >= 6, c = n === 1 && i >= 10;
  return a || s || c;
}
function ji(e) {
  if (e)
    return typeof e == "number" ? e.toString() : e;
}
function Ed(e, t, r) {
  var n = pr(t, t.mainIndex, t._initialUiState);
  e.forEach(function(i) {
    var a = {};
    if (i.getWidgetRenderState) {
      var s = i.getWidgetRenderState(n);
      s && s.widgetParams && (a = s.widgetParams);
    }
    var c = Object.keys(a).filter(function(u) {
      return a[u] !== void 0;
    });
    r.widgets.push({
      type: i.$$type,
      widgetType: i.$$widgetType,
      params: c
    }), i.$$type === "ais.index" && Ed(i.getWidgets(), t, r);
  });
}
function hb() {
  return mt(function(e) {
    var t, r, n = e.window;
    return ((t = n.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0 ? void 0 : r.indexOf("Algolia Crawler")) > -1;
  }, {
    fallback: function() {
      return !1;
    }
  });
}
function pb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.$$internal, r = t === void 0 ? !1 : t;
  return function(n) {
    var i = n.instantSearchInstance, a = {
      widgets: []
    }, s = document.createElement("meta"), c = document.querySelector("head");
    return s.name = "instantsearch:widgets", {
      $$type: "ais.metadata",
      $$internal: r,
      onStateChange: function() {
      },
      subscribe: function() {
        setTimeout(function() {
          var o = i.client;
          a.ua = o.transporter && o.transporter.userAgent ? o.transporter.userAgent.value : o._ua, Ed(i.mainIndex.getWidgets(), i, a), i.middleware.forEach(function(f) {
            return a.widgets.push({
              middleware: !0,
              type: f.instance.$$type,
              internal: f.instance.$$internal
            });
          }), s.content = JSON.stringify(a), c.appendChild(s);
        }, 0);
      },
      started: function() {
      },
      unsubscribe: function() {
        s.remove();
      }
    };
  };
}
var vb = String.prototype.replace, mb = /%20/g, Ti = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, is = {
  default: Ti.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return vb.call(e, mb, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Ti.RFC1738,
  RFC3986: Ti.RFC3986
}, gb = is, Ci = Object.prototype.hasOwnProperty, Et = Array.isArray, et = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), yb = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Et(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, xd = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, bb = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Et(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Ci.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Et(t) && !Et(r) && (i = xd(t, n)), Et(t) && Et(r) ? (r.forEach(function(a, s) {
    if (Ci.call(t, s)) {
      var c = t[s];
      c && typeof c == "object" && a && typeof a == "object" ? t[s] = e(c, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var c = r[s];
    return Ci.call(a, s) ? a[s] = e(a[s], c, n) : a[s] = c, a;
  }, i);
}, wb = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, _b = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Sb = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var c = "", u = 0; u < s.length; ++u) {
    var o = s.charCodeAt(u);
    if (o === 45 || o === 46 || o === 95 || o === 126 || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || a === gb.RFC1738 && (o === 40 || o === 41)) {
      c += s.charAt(u);
      continue;
    }
    if (o < 128) {
      c = c + et[o];
      continue;
    }
    if (o < 2048) {
      c = c + (et[192 | o >> 6] + et[128 | o & 63]);
      continue;
    }
    if (o < 55296 || o >= 57344) {
      c = c + (et[224 | o >> 12] + et[128 | o >> 6 & 63] + et[128 | o & 63]);
      continue;
    }
    u += 1, o = 65536 + ((o & 1023) << 10 | s.charCodeAt(u) & 1023), c += et[240 | o >> 18] + et[128 | o >> 12 & 63] + et[128 | o >> 6 & 63] + et[128 | o & 63];
  }
  return c;
}, Ob = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], s = a.obj[a.prop], c = Object.keys(s), u = 0; u < c.length; ++u) {
      var o = c[u], f = s[o];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: s, prop: o }), n.push(f));
    }
  return yb(r), t;
}, Rb = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Pb = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Eb = function(t, r) {
  return [].concat(t, r);
}, xb = function(t, r) {
  if (Et(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, jd = {
  arrayToObject: xd,
  assign: wb,
  combine: Eb,
  compact: Ob,
  decode: _b,
  encode: Sb,
  isBuffer: Pb,
  isRegExp: Rb,
  maybeMap: xb,
  merge: bb
}, ao = jd, br = is, jb = Object.prototype.hasOwnProperty, zu = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, xt = Array.isArray, Tb = String.prototype.split, Cb = Array.prototype.push, Td = function(e, t) {
  Cb.apply(e, xt(t) ? t : [t]);
}, Ab = Date.prototype.toISOString, Vu = br.default, De = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ao.encode,
  encodeValuesOnly: !1,
  format: Vu,
  formatter: br.formatters[Vu],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Ab.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, $b = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ib = function e(t, r, n, i, a, s, c, u, o, f, l, v, d, p) {
  var h = t;
  if (typeof c == "function" ? h = c(r, h) : h instanceof Date ? h = f(h) : n === "comma" && xt(h) && (h = ao.maybeMap(h, function(L) {
    return L instanceof Date ? f(L) : L;
  })), h === null) {
    if (i)
      return s && !d ? s(r, De.encoder, p, "key", l) : r;
    h = "";
  }
  if ($b(h) || ao.isBuffer(h)) {
    if (s) {
      var m = d ? r : s(r, De.encoder, p, "key", l);
      if (n === "comma" && d) {
        for (var g = Tb.call(String(h), ","), _ = "", w = 0; w < g.length; ++w)
          _ += (w === 0 ? "" : ",") + v(s(g[w], De.encoder, p, "value", l));
        return [v(m) + "=" + _];
      }
      return [v(m) + "=" + v(s(h, De.encoder, p, "value", l))];
    }
    return [v(r) + "=" + v(String(h))];
  }
  var b = [];
  if (typeof h > "u")
    return b;
  var y;
  if (n === "comma" && xt(h))
    y = [{ value: h.length > 0 ? h.join(",") || null : void 0 }];
  else if (xt(c))
    y = c;
  else {
    var j = Object.keys(h);
    y = u ? j.sort(u) : j;
  }
  for (var $ = 0; $ < y.length; ++$) {
    var R = y[$], q = typeof R == "object" && typeof R.value < "u" ? R.value : h[R];
    if (!(a && q === null)) {
      var V = xt(h) ? typeof n == "function" ? n(r, R) : r : r + (o ? "." + R : "[" + R + "]");
      Td(b, e(
        q,
        V,
        n,
        i,
        a,
        s,
        c,
        u,
        o,
        f,
        l,
        v,
        d,
        p
      ));
    }
  }
  return b;
}, Fb = function(t) {
  if (!t)
    return De;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || De.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = br.default;
  if (typeof t.format < "u") {
    if (!jb.call(br.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = br.formatters[n], a = De.filter;
  return (typeof t.filter == "function" || xt(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : De.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? De.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : De.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? De.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : De.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : De.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : De.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : De.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : De.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : De.strictNullHandling
  };
}, Nb = function(e, t) {
  var r = e, n = Fb(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : xt(n.filter) && (a = n.filter, i = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var c;
  t && t.arrayFormat in zu ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
  var u = zu[c];
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var o = 0; o < i.length; ++o) {
    var f = i[o];
    n.skipNulls && r[f] === null || Td(s, Ib(
      r[f],
      f,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset
    ));
  }
  var l = s.join(n.delimiter), v = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), l.length > 0 ? v + l : "";
}, zt = jd, oo = Object.prototype.hasOwnProperty, Db = Array.isArray, Ne = {
  allowDots: !1,
  allowPrototypes: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: zt.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, kb = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Cd = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Mb = "utf8=%26%2310003%3B", Hb = "utf8=%E2%9C%93", Lb = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = i.split(r.delimiter, a), c = -1, u, o = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < s.length; ++u)
      s[u].indexOf("utf8=") === 0 && (s[u] === Hb ? o = "utf-8" : s[u] === Mb && (o = "iso-8859-1"), c = u, u = s.length);
  for (u = 0; u < s.length; ++u)
    if (u !== c) {
      var f = s[u], l = f.indexOf("]="), v = l === -1 ? f.indexOf("=") : l + 1, d, p;
      v === -1 ? (d = r.decoder(f, Ne.decoder, o, "key"), p = r.strictNullHandling ? null : "") : (d = r.decoder(f.slice(0, v), Ne.decoder, o, "key"), p = zt.maybeMap(
        Cd(f.slice(v + 1), r),
        function(h) {
          return r.decoder(h, Ne.decoder, o, "value");
        }
      )), p && r.interpretNumericEntities && o === "iso-8859-1" && (p = kb(p)), f.indexOf("[]=") > -1 && (p = Db(p) ? [p] : p), oo.call(n, d) ? n[d] = zt.combine(n[d], p) : n[d] = p;
    }
  return n;
}, qb = function(e, t, r, n) {
  for (var i = n ? t : Cd(t, r), a = e.length - 1; a >= 0; --a) {
    var s, c = e[a];
    if (c === "[]" && r.parseArrays)
      s = [].concat(i);
    else {
      s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, o = parseInt(u, 10);
      !r.parseArrays && u === "" ? s = { 0: i } : !isNaN(o) && c !== u && String(o) === u && o >= 0 && r.parseArrays && o <= r.arrayLimit ? (s = [], s[o] = i) : u !== "__proto__" && (s[u] = i);
    }
    i = s;
  }
  return i;
}, Ub = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, u = n.depth > 0 && s.exec(a), o = u ? a.slice(0, u.index) : a, f = [];
    if (o) {
      if (!n.plainObjects && oo.call(Object.prototype, o) && !n.allowPrototypes)
        return;
      f.push(o);
    }
    for (var l = 0; n.depth > 0 && (u = c.exec(a)) !== null && l < n.depth; ) {
      if (l += 1, !n.plainObjects && oo.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), qb(f, r, n, i);
  }
}, Wb = function(t) {
  if (!t)
    return Ne;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? Ne.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? Ne.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Ne.allowPrototypes,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Ne.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ne.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : Ne.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : Ne.decoder,
    delimiter: typeof t.delimiter == "string" || zt.isRegExp(t.delimiter) ? t.delimiter : Ne.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Ne.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Ne.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Ne.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Ne.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ne.strictNullHandling
  };
}, Bb = function(e, t) {
  var r = Wb(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? Lb(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var c = a[s], u = Ub(c, n[c], r, typeof e == "string");
    i = zt.merge(i, u, r);
  }
  return zt.compact(i);
}, zb = Nb, Vb = Bb, Qb = is, Kb = {
  formats: Qb,
  parse: Vb,
  stringify: zb
};
const Qu = /* @__PURE__ */ Kt(Kb);
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function Yb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ku(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ad(n.key), n);
  }
}
function Gb(e, t, r) {
  return t && Ku(e.prototype, t), r && Ku(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qe(e, t, r) {
  return t = Ad(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ad(e) {
  var t = Jb(e, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function Jb(e, t) {
  if (Nr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yu = function(t) {
  t && (window.document.title = t);
}, Xb = /* @__PURE__ */ function() {
  function e(t) {
    var r = this, n = t.windowTitle, i = t.writeDelay, a = i === void 0 ? 400 : i, s = t.createURL, c = t.parseURL, u = t.getLocation, o = t.start, f = t.dispose, l = t.push, v = t.cleanUrlOnDispose;
    Yb(this, e), qe(this, "$$type", "ais.browser"), qe(this, "windowTitle", void 0), qe(this, "writeDelay", void 0), qe(this, "_createURL", void 0), qe(this, "parseURL", void 0), qe(this, "getLocation", void 0), qe(this, "writeTimer", void 0), qe(this, "_onPopState", void 0), qe(this, "inPopState", !1), qe(this, "isDisposed", !1), qe(this, "latestAcknowledgedHistory", 0), qe(this, "_start", void 0), qe(this, "_dispose", void 0), qe(this, "_push", void 0), qe(this, "_cleanUrlOnDispose", void 0), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = a, this._createURL = s, this.parseURL = c, this.getLocation = u, this._start = o, this._dispose = f, this._push = l, this._cleanUrlOnDispose = typeof v > "u" ? !0 : v, process.env.NODE_ENV === "development" && typeof v > "u" && console.info(`Starting from the next major version, InstantSearch will not clean up the URL from active refinements when it is disposed.

We recommend setting \`cleanUrlOnDispose\` to false to adopt this change today.
To stay with the current behaviour and remove this warning, set the option to true.

See documentation: `.concat(ti({
      name: "history-router"
    }), "#widget-param-cleanurlondispose")), mt(function(d) {
      var p = d.window, h = r.windowTitle && r.windowTitle(r.read());
      Yu(h), r.latestAcknowledgedHistory = p.history.length;
    });
  }
  return Gb(e, [{
    key: "read",
    value: function() {
      return this.parseURL({
        qsModule: Qu,
        location: this.getLocation()
      });
    }
    /**
     * Pushes a search state into the URL.
     */
  }, {
    key: "write",
    value: function(r) {
      var n = this;
      mt(function(i) {
        var a = i.window, s = n.createURL(r), c = n.windowTitle && n.windowTitle(r);
        n.writeTimer && clearTimeout(n.writeTimer), n.writeTimer = setTimeout(function() {
          Yu(c), n.shouldWrite(s) && (n._push ? n._push(s) : a.history.pushState(r, c || "", s), n.latestAcknowledgedHistory = a.history.length), n.inPopState = !1, n.writeTimer = void 0;
        }, n.writeDelay);
      });
    }
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */
  }, {
    key: "onUpdate",
    value: function(r) {
      var n = this;
      this._start && this._start(function() {
        r(n.read());
      }), this._onPopState = function() {
        n.writeTimer && (clearTimeout(n.writeTimer), n.writeTimer = void 0), n.inPopState = !0, r(n.read());
      }, mt(function(i) {
        var a = i.window;
        a.addEventListener("popstate", n._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch/issues/790
     */
  }, {
    key: "createURL",
    value: function(r) {
      var n = this._createURL({
        qsModule: Qu,
        routeState: r,
        location: this.getLocation()
      });
      if (process.env.NODE_ENV === "development")
        try {
          new URL(n);
        } catch {
          process.env.NODE_ENV === "development" && le(!1, "The URL returned by the `createURL` function is invalid.\nPlease make sure it returns an absolute URL to avoid issues, e.g: `https://algolia.com/search?query=iphone`.");
        }
      return n;
    }
    /**
     * Removes the event listener and cleans up the URL.
     */
  }, {
    key: "dispose",
    value: function() {
      var r = this;
      this._dispose && this._dispose(), this.isDisposed = !0, mt(function(n) {
        var i = n.window;
        r._onPopState && i.removeEventListener("popstate", r._onPopState);
      }), this.writeTimer && clearTimeout(this.writeTimer), this._cleanUrlOnDispose && this.write({});
    }
  }, {
    key: "start",
    value: function() {
      this.isDisposed = !1;
    }
  }, {
    key: "shouldWrite",
    value: function(r) {
      var n = this;
      return mt(function(i) {
        var a = i.window, s = !(n.isDisposed && n.latestAcknowledgedHistory !== a.history.length);
        return (
          // When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !n.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
          s && // When the URL is the same as the current one, we do not want to write it.
          r !== a.location.href
        );
      });
    }
  }]), e;
}();
function Zb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.createURL, r = t === void 0 ? function(p) {
    var h = p.qsModule, m = p.routeState, g = p.location, _ = g.protocol, w = g.hostname, b = g.port, y = b === void 0 ? "" : b, j = g.pathname, $ = g.hash, R = h.stringify(m), q = y === "" ? "" : ":".concat(y);
    return R ? "".concat(_, "//").concat(w).concat(q).concat(j, "?").concat(R).concat($) : "".concat(_, "//").concat(w).concat(q).concat(j).concat($);
  } : t, n = e.parseURL, i = n === void 0 ? function(p) {
    var h = p.qsModule, m = p.location;
    return h.parse(m.search.slice(1), {
      arrayLimit: 99
    });
  } : n, a = e.writeDelay, s = a === void 0 ? 400 : a, c = e.windowTitle, u = e.getLocation, o = u === void 0 ? function() {
    return mt(function(p) {
      var h = p.window;
      return h.location;
    }, {
      fallback: function() {
        throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
      }
    });
  } : u, f = e.start, l = e.dispose, v = e.push, d = e.cleanUrlOnDispose;
  return new Xb({
    createURL: r,
    parseURL: i,
    writeDelay: s,
    windowTitle: c,
    getLocation: o,
    start: f,
    dispose: l,
    push: v,
    cleanUrlOnDispose: d
  });
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
var e0 = ["configure"];
function Gu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function on(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gu(Object(r), !0).forEach(function(n) {
      so(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function so(e, t, r) {
  return t = t0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t0(e) {
  var t = r0(e, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function r0(e, t) {
  if (Dr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n0(e, t) {
  if (e == null)
    return {};
  var r = i0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ju(e) {
  e.configure;
  var t = n0(e, e0);
  return t;
}
function a0() {
  return {
    $$type: "ais.simple",
    stateToRoute: function(t) {
      return Object.keys(t).reduce(function(r, n) {
        return on(on({}, r), {}, so({}, n, Ju(t[n])));
      }, {});
    },
    routeToState: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(t).reduce(function(r, n) {
        return on(on({}, r), {}, so({}, n, Ju(t[n])));
      }, {});
    }
  };
}
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function Xu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xu(Object(r), !0).forEach(function(n) {
      $d(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $d(e, t, r) {
  return t = o0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o0(e) {
  var t = s0(e, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function s0(e, t) {
  if (kr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var u0 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.router, n = r === void 0 ? Zb() : r, i = t.stateMapping, a = i === void 0 ? a0() : i, s = t.$$internal, c = s === void 0 ? !1 : s;
  return function(u) {
    var o = u.instantSearchInstance;
    function f(d) {
      var p = (
        // If only the mainIndex is initialized, we don't yet know what other
        // index widgets are used. Therefore we fall back to the initialUiState.
        // We can't indiscriminately use the initialUiState because then we
        // reintroduce state that was changed by the user.
        // When there are no widgets, we are sure the user can't yet have made
        // any changes.
        o.mainIndex.getWidgets().length === 0 ? o._initialUiState : o.mainIndex.getWidgetUiState({})
      ), h = Object.keys(d).reduce(function(g, _) {
        return sn(sn({}, g), {}, $d({}, _, d[_]));
      }, p), m = a.stateToRoute(h);
      return n.createURL(m);
    }
    o._createURL = f;
    var l = void 0, v = o._initialUiState;
    return {
      $$type: "ais.router({router:".concat(n.$$type || "__unknown__", ", stateMapping:").concat(a.$$type || "__unknown__", "})"),
      $$internal: c,
      onStateChange: function(p) {
        var h = p.uiState, m = a.stateToRoute(h);
        (l === void 0 || !es(l, m)) && (n.write(m), l = m);
      },
      subscribe: function() {
        o._initialUiState = sn(sn({}, v), a.routeToState(n.read())), n.onUpdate(function(p) {
          o.mainIndex.getWidgets().length > 0 && o.setUiState(a.routeToState(p));
        });
      },
      started: function() {
        var p;
        (p = n.start) === null || p === void 0 || p.call(n);
      },
      unsubscribe: function() {
        n.dispose();
      }
    };
  };
};
function c0(e, t) {
  return e.toLocaleString(t);
}
function Mr(e) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
function Zu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zu(Object(r), !0).forEach(function(n) {
      l0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l0(e, t, r) {
  return t = f0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f0(e) {
  var t = d0(e, "string");
  return Mr(t) === "symbol" ? t : String(t);
}
function d0(e, t) {
  if (Mr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h0(e) {
  var t = e.numberLocale;
  return {
    formatNumber: function(n, i) {
      return c0(Number(i(n)), t);
    },
    highlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(By(ut(ut({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
The highlight helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseHighlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(Vy(ut(ut({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
  The reverseHighlight helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    snippet: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(Ky(ut(ut({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
The snippet helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseSnippet: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(Gy(ut(ut({}, a), {}, {
          hit: this
        })));
      } catch {
        throw new Error(`
  The reverseSnippet helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    insights: function(n, i) {
      try {
        var a = JSON.parse(n), s = a.method, c = a.payload;
        return i(Xy(s, ut({
          objectIDs: [this.objectID]
        }, c)));
      } catch {
        throw new Error(`
The insights helper expects a JSON object of the format:
{ "method": "method-name", "payload": { "eventName": "name of the event" } }`);
      }
    }
  };
}
const p0 = "4.64.2";
function Vt(e) {
  "@babel/helpers - typeof";
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
function ec(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ai(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ec(Object(r), !0).forEach(function(n) {
      Oe(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ec(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Id(n.key), n);
  }
}
function m0(e, t, r) {
  return t && tc(e.prototype, t), r && tc(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, uo(e, t);
}
function y0(e) {
  var t = w0();
  return function() {
    var n = ni(e), i;
    if (t) {
      var a = ni(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return b0(this, i);
  };
}
function b0(e, t) {
  if (t && (Vt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _e(e);
}
function _e(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ni(e) {
  return ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ni(e);
}
function Oe(e, t, r) {
  return t = Id(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Id(e) {
  var t = _0(e, "string");
  return Vt(t) === "symbol" ? t : String(t);
}
function _0(e, t) {
  if (Vt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tt = ht({
  name: "instantsearch"
});
function S0() {
  return "#";
}
var Fd = {
  preserveSharedStateOnUnmount: !1,
  persistHierarchicalRootCount: !1
}, O0 = /* @__PURE__ */ function(e) {
  g0(r, e);
  var t = y0(r);
  function r(n) {
    var i, a;
    v0(this, r), a = t.call(this), Oe(_e(a), "client", void 0), Oe(_e(a), "indexName", void 0), Oe(_e(a), "insightsClient", void 0), Oe(_e(a), "onStateChange", null), Oe(_e(a), "future", void 0), Oe(_e(a), "helper", void 0), Oe(_e(a), "mainHelper", void 0), Oe(_e(a), "mainIndex", void 0), Oe(_e(a), "started", void 0), Oe(_e(a), "templatesConfig", void 0), Oe(_e(a), "renderState", {}), Oe(_e(a), "_stalledSearchDelay", void 0), Oe(_e(a), "_searchStalledTimer", void 0), Oe(_e(a), "_initialUiState", void 0), Oe(_e(a), "_initialResults", void 0), Oe(_e(a), "_createURL", void 0), Oe(_e(a), "_searchFunction", void 0), Oe(_e(a), "_mainHelperSearch", void 0), Oe(_e(a), "_insights", void 0), Oe(_e(a), "middleware", []), Oe(_e(a), "sendEventToInsights", void 0), Oe(_e(a), "status", "idle"), Oe(_e(a), "error", void 0), Oe(_e(a), "scheduleSearch", tr(function() {
      a.started && a.mainHelper.search();
    })), Oe(_e(a), "scheduleRender", tr(function() {
      var k, A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (k = a.mainHelper) !== null && k !== void 0 && k.hasPendingRequests() || (clearTimeout(a._searchStalledTimer), a._searchStalledTimer = null, A && (a.status = "idle", a.error = void 0)), a.mainIndex.render({
        instantSearchInstance: _e(a)
      }), a.emit("render");
    })), Oe(_e(a), "onInternalStateChange", tr(function() {
      var k = a.mainIndex.getWidgetUiState({});
      a.middleware.forEach(function(A) {
        var re = A.instance;
        re.onStateChange({
          uiState: k
        });
      });
    })), a.setMaxListeners(100);
    var s = n.indexName, c = s === void 0 ? "" : s, u = n.numberLocale, o = n.initialUiState, f = o === void 0 ? {} : o, l = n.routing, v = l === void 0 ? null : l, d = n.insights, p = d === void 0 ? void 0 : d, h = n.searchFunction, m = n.stalledSearchDelay, g = m === void 0 ? 200 : m, _ = n.searchClient, w = _ === void 0 ? null : _, b = n.insightsClient, y = b === void 0 ? null : b, j = n.onStateChange, $ = j === void 0 ? null : j, R = n.future, q = R === void 0 ? Ai(Ai({}, Fd), n.future || {}) : R;
    if (w === null)
      throw new Error(tt("The `searchClient` option is required."));
    if (typeof w.search != "function")
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    if (typeof w.addAlgoliaAgent == "function" && w.addAlgoliaAgent("instantsearch.js (".concat(p0, ")")), process.env.NODE_ENV === "development" && le(y === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), y && typeof y != "function")
      throw new Error(tt("The `insightsClient` option should be a function."));
    if (process.env.NODE_ENV === "development" && le(!n.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(n.searchParameters, null, 2), `)
]);
\`\`\`

See `).concat(ti({
      name: "configure"
    }))), process.env.NODE_ENV === "development" && ((i = n.future) === null || i === void 0 ? void 0 : i.preserveSharedStateOnUnmount) === void 0 && console.info(`Starting from the next major version, InstantSearch will change how widgets state is preserved when they are removed. InstantSearch will keep the state of unmounted widgets to be usable by other widgets with the same attribute.

We recommend setting \`future.preserveSharedStateOnUnmount\` to true to adopt this change today.
To stay with the current behaviour and remove this warning, set the option to false.

See documentation: `.concat(ti({
      name: "instantsearch"
    }), `#widget-param-future
          `)), a.client = w, a.future = q, a.insightsClient = y, a.indexName = c, a.helper = null, a.mainHelper = null, a.mainIndex = Fy({
      indexName: c
    }), a.onStateChange = $, a.started = !1, a.templatesConfig = {
      helpers: h0({
        numberLocale: u
      }),
      compileOptions: {}
    }, a._stalledSearchDelay = g, a._searchStalledTimer = null, a._createURL = S0, a._initialUiState = f, a._initialResults = null, a._insights = p, h && (process.env.NODE_ENV === "development" && le(!1, "The `searchFunction` option is deprecated. Use `onStateChange` instead."), a._searchFunction = h), a.sendEventToInsights = Ie, v) {
      var V = typeof v == "boolean" ? {} : v;
      V.$$internal = !0, a.use(u0(V));
    }
    if (p) {
      var L = typeof p == "boolean" ? {} : p;
      L.$$internal = !0, a.use(Wu(L));
    }
    return hb() && a.use(pb({
      $$internal: !0
    })), a;
  }
  return m0(r, [{
    key: "_isSearchStalled",
    get: (
      /**
       * @deprecated use `status === 'stalled'` instead
       */
      function() {
        return process.env.NODE_ENV === "development" && le(!1, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.'), this.status === "stalled";
      }
    )
  }, {
    key: "use",
    value: function() {
      for (var i = this, a = arguments.length, s = new Array(a), c = 0; c < a; c++)
        s[c] = arguments[c];
      var u = s.map(function(o) {
        var f = Ai({
          $$type: "__unknown__",
          $$internal: !1,
          subscribe: Ie,
          started: Ie,
          unsubscribe: Ie,
          onStateChange: Ie
        }, o({
          instantSearchInstance: i
        }));
        return i.middleware.push({
          creator: o,
          instance: f
        }), f;
      });
      return this.started && u.forEach(function(o) {
        o.subscribe(), o.started();
      }), this;
    }
    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */
  }, {
    key: "unuse",
    value: function() {
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
        a[s] = arguments[s];
      return this.middleware.filter(function(c) {
        return a.includes(c.creator);
      }).forEach(function(c) {
        return c.instance.unsubscribe();
      }), this.middleware = this.middleware.filter(function(c) {
        return !a.includes(c.creator);
      }), this;
    }
    // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
  }, {
    key: "EXPERIMENTAL_use",
    value: function() {
      return process.env.NODE_ENV === "development" && le(!1, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version."), this.use.apply(this, arguments);
    }
    /**
     * Adds a widget to the search instance.
     * A widget can be added either before or after InstantSearch has started.
     * @param widget The widget to add to InstantSearch.
     *
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
     */
  }, {
    key: "addWidget",
    value: function(i) {
      return process.env.NODE_ENV === "development" && le(!1, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`"), this.addWidgets([i]);
    }
    /**
     * Adds multiple widgets to the search instance.
     * Widgets can be added either before or after InstantSearch has started.
     * @param widgets The array of widgets to add to InstantSearch.
     */
  }, {
    key: "addWidgets",
    value: function(i) {
      if (!Array.isArray(i))
        throw new Error(tt("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
      if (i.some(function(a) {
        return typeof a.init != "function" && typeof a.render != "function";
      }))
        throw new Error(tt("The widget definition expects a `render` and/or an `init` method."));
      return this.mainIndex.addWidgets(i), this;
    }
    /**
     * Removes a widget from the search instance.
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
     * @param widget The widget instance to remove from InstantSearch.
     *
     * The widget must implement a `dispose()` method to clear its state.
     */
  }, {
    key: "removeWidget",
    value: function(i) {
      return process.env.NODE_ENV === "development" && le(!1, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`"), this.removeWidgets([i]);
    }
    /**
     * Removes multiple widgets from the search instance.
     * @param widgets Array of widgets instances to remove from InstantSearch.
     *
     * The widgets must implement a `dispose()` method to clear their states.
     */
  }, {
    key: "removeWidgets",
    value: function(i) {
      if (!Array.isArray(i))
        throw new Error(tt("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
      if (i.some(function(a) {
        return typeof a.dispose != "function";
      }))
        throw new Error(tt("The widget definition expects a `dispose` method."));
      return this.mainIndex.removeWidgets(i), this;
    }
    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search.
     */
  }, {
    key: "start",
    value: function() {
      var i = this;
      if (this.started)
        throw new Error(tt("The `start` method has already been called once."));
      var a = this.mainHelper || Ye(this.client, this.indexName, void 0, {
        persistHierarchicalRootCount: this.future.persistHierarchicalRootCount
      });
      if (a.search = function() {
        return i.status = "loading", i.scheduleRender(!1), process.env.NODE_ENV === "development" && le(!!i.indexName || i.mainIndex.getWidgets().some(ft), "No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results."), a.searchOnlyWithDerivedHelpers();
      }, this._searchFunction) {
        var s = {
          search: function() {
            return new Promise(Ie);
          }
        };
        this._mainHelperSearch = a.search.bind(a), a.search = function() {
          var u = i.mainIndex.getHelper(), o = Ye(s, u.state.index, u.state);
          return o.once("search", function(f) {
            var l = f.state;
            u.overrideStateWithoutTriggeringChangeEvent(l), i._mainHelperSearch();
          }), o.on("change", function(f) {
            var l = f.state;
            u.setState(l);
          }), i._searchFunction(o), a;
        };
      }
      if (a.on("error", function(u) {
        var o = u.error;
        if (!(o instanceof Error)) {
          var f = o;
          o = Object.keys(f).reduce(function(l, v) {
            return l[v] = f[v], l;
          }, new Error(f.message));
        }
        o.error = o, i.error = o, i.status = "error", i.scheduleRender(!1), i.emit("error", o);
      }), this.mainHelper = a, this.middleware.forEach(function(u) {
        var o = u.instance;
        o.subscribe();
      }), this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      }), this._initialResults) {
        pg(this.client, this._initialResults);
        var c = this.scheduleSearch;
        this.scheduleSearch = tr(Ie), tr(function() {
          i.scheduleSearch = c;
        })();
      } else
        this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
      this.helper = this.mainIndex.getHelper(), this.started = !0, this.middleware.forEach(function(u) {
        var o = u.instance;
        o.started();
      }), typeof this._insights > "u" && a.derivedHelpers[0].once("result", function() {
        var u = i.mainIndex.getScopedResults().some(function(o) {
          var f = o.results;
          return f == null ? void 0 : f._automaticInsights;
        });
        u && i.use(Wu({
          $$internal: !0,
          $$automatic: !0
        }));
      });
    }
    /**
     * Removes all widgets without triggering a search afterwards.
     * @return {undefined} This method does not return anything
     */
  }, {
    key: "dispose",
    value: function() {
      var i;
      this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), (i = this.mainHelper) === null || i === void 0 || i.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(a) {
        var s = a.instance;
        s.unsubscribe();
      });
    }
  }, {
    key: "scheduleStalledRender",
    value: function() {
      var i = this;
      this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
        i.status = "stalled", i.scheduleRender();
      }, this._stalledSearchDelay));
    }
    /**
     * Set the UI state and trigger a search.
     * @param uiState The next UI state or a function computing it from the current state
     * @param callOnStateChange private parameter used to know if the method is called from a state change
     */
  }, {
    key: "setUiState",
    value: function(i) {
      var a = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!this.mainHelper)
        throw new Error(tt("The `start` method needs to be called before `setUiState`."));
      this.mainIndex.refreshUiState();
      var c = typeof i == "function" ? i(this.mainIndex.getWidgetUiState({})) : i;
      this.onStateChange && s ? this.onStateChange({
        uiState: c,
        setUiState: function(o) {
          Za(typeof o == "function" ? o(c) : o, a.mainIndex), a.scheduleSearch(), a.onInternalStateChange();
        }
      }) : (Za(c, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange());
    }
  }, {
    key: "getUiState",
    value: function() {
      return this.started && this.mainIndex.refreshUiState(), this.mainIndex.getWidgetUiState({});
    }
  }, {
    key: "createURL",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.started)
        throw new Error(tt("The `start` method needs to be called before `createURL`."));
      return this._createURL(i);
    }
  }, {
    key: "refresh",
    value: function() {
      if (!this.mainHelper)
        throw new Error(tt("The `start` method needs to be called before `refresh`."));
      this.mainHelper.clearCache().search();
    }
  }]), r;
}(Jp), co = { exports: {} }, $i = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function R0() {
  if (rc)
    return $i;
  rc = 1;
  var e = z;
  function t(l, v) {
    return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function c(l, v) {
    var d = v(), p = n({ inst: { value: d, getSnapshot: v } }), h = p[0].inst, m = p[1];
    return a(function() {
      h.value = d, h.getSnapshot = v, u(h) && m({ inst: h });
    }, [l, d, v]), i(function() {
      return u(h) && m({ inst: h }), l(function() {
        u(h) && m({ inst: h });
      });
    }, [l]), s(d), d;
  }
  function u(l) {
    var v = l.getSnapshot;
    l = l.value;
    try {
      var d = v();
      return !r(l, d);
    } catch {
      return !0;
    }
  }
  function o(l, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : c;
  return $i.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, $i;
}
var Ii = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function P0() {
  return nc || (nc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(w) {
      {
        for (var b = arguments.length, y = new Array(b > 1 ? b - 1 : 0), j = 1; j < b; j++)
          y[j - 1] = arguments[j];
        n("error", w, y);
      }
    }
    function n(w, b, y) {
      {
        var j = t.ReactDebugCurrentFrame, $ = j.getStackAddendum();
        $ !== "" && (b += "%s", y = y.concat([$]));
        var R = y.map(function(q) {
          return String(q);
        });
        R.unshift("Warning: " + b), Function.prototype.apply.call(console[w], console, R);
      }
    }
    function i(w, b) {
      return w === b && (w !== 0 || 1 / w === 1 / b) || w !== w && b !== b;
    }
    var a = typeof Object.is == "function" ? Object.is : i, s = e.useState, c = e.useEffect, u = e.useLayoutEffect, o = e.useDebugValue, f = !1, l = !1;
    function v(w, b, y) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var j = b();
      if (!l) {
        var $ = b();
        a(j, $) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var R = s({
        inst: {
          value: j,
          getSnapshot: b
        }
      }), q = R[0].inst, V = R[1];
      return u(function() {
        q.value = j, q.getSnapshot = b, d(q) && V({
          inst: q
        });
      }, [w, j, b]), c(function() {
        d(q) && V({
          inst: q
        });
        var L = function() {
          d(q) && V({
            inst: q
          });
        };
        return w(L);
      }, [w]), o(j), j;
    }
    function d(w) {
      var b = w.getSnapshot, y = w.value;
      try {
        var j = b();
        return !a(y, j);
      } catch {
        return !0;
      }
    }
    function p(w, b, y) {
      return b();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !h, g = m ? p : v, _ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g;
    Ii.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ii;
}
process.env.NODE_ENV === "production" ? co.exports = R0() : co.exports = P0();
var E0 = co.exports;
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function ic(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ic(Object(r), !0).forEach(function(n) {
      x0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ic(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x0(e, t, r) {
  return t = j0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j0(e) {
  var t = T0(e, "string");
  return Hr(t) === "symbol" ? t : String(t);
}
function T0(e, t) {
  if (Hr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oc = ["react (".concat(Wh, ")"), "react-instantsearch (".concat(Va, ")"), "react-instantsearch-core (".concat(Va, ")")], sc = "react-instantsearch-server (".concat(Va, ")"), C0 = function(t) {
  return t ? "next.js (".concat(t, ")") : null;
};
function A0(e) {
  var t = Ly(), r = gd(), n = qy(), i = yd(), a = n == null ? void 0 : n.initialResults, s = Ve(e), c = r || a || i, u = Ve(null);
  if (n && (u = n.ssrSearchRef), u.current === null) {
    var o = new O0(e);
    o._schedule = function(m) {
      o._schedule.queue.push(m), clearTimeout(o._schedule.timer), o._schedule.timer = setTimeout(function() {
        o._schedule.queue.forEach(function(g) {
          g();
        }), o._schedule.queue = [];
      }, 0);
    }, o._schedule.queue = [], c && (o._initialResults = a || {}), uc(e.searchClient, [].concat(oc, [r && sc, C0(F0())])), c && o.start(), r && r.notifyServer({
      search: o
    }), $0(e.routing), I0(!!i), u.current = o;
  }
  {
    var f = u.current, l = s.current;
    if (l.indexName !== e.indexName && (f.helper.setIndex(e.indexName || "").search(), s.current = e), l.searchClient !== e.searchClient && (process.env.NODE_ENV === "development" && ns(!1, "The `searchClient` prop of `<InstantSearch>` changed between renders, which may cause more search requests than necessary. If this is an unwanted behavior, please provide a stable reference: https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/#widget-param-searchclient"), uc(e.searchClient, [].concat(oc, [r && sc])), f.mainHelper.setClient(e.searchClient).search(), s.current = e), l.onStateChange !== e.onStateChange && (f.onStateChange = e.onStateChange, s.current = e), l.searchFunction !== e.searchFunction && (f._searchFunction = e.searchFunction, s.current = e), l.stalledSearchDelay !== e.stalledSearchDelay) {
      var v;
      f._stalledSearchDelay = (v = e.stalledSearchDelay) !== null && v !== void 0 ? v : 200, s.current = e;
    }
    Wt(l.future, e.future) || (f.future = ac(ac({}, Fd), e.future), s.current = e);
  }
  var d = Ve(null), p = E0.useSyncExternalStore(Uh(function() {
    var h = u.current;
    return d.current === null ? h.started || (h.start(), t()) : (clearTimeout(d.current), h._preventWidgetCleanup = !1), function() {
      function m() {
        h.dispose();
      }
      clearTimeout(h._schedule.timer), d.current = setTimeout(m), h._preventWidgetCleanup = !0;
    };
  }, [t]), function() {
    return u.current;
  }, function() {
    return u.current;
  });
  return p;
}
function uc(e, t) {
  typeof e.addAlgoliaAgent == "function" && t.filter(Boolean).forEach(function(r) {
    e.addAlgoliaAgent(r);
  });
}
function $0(e) {
  if (process.env.NODE_ENV === "development") {
    var t;
    if (!e || typeof window > "u" || !("__NEXT_DATA__" in window))
      return;
    var r = (
      // @ts-expect-error: _isNextRouter is only set on the Next.js router
      e !== !0 && (e == null || (t = e.router) === null || t === void 0 ? void 0 : t._isNextRouter)
    );
    process.env.NODE_ENV === "development" && ns(r, `
You are using Next.js with InstantSearch without the "react-instantsearch-router-nextjs" package.
This package is recommended to make the routing work correctly with Next.js.
Please check its usage instructions: https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch-router-nextjs

You can ignore this warning if you are using a custom router that suits your needs, it won't be outputted in production builds.`);
  }
}
function I0(e) {
  var t;
  process.env.NODE_ENV !== "development" || typeof window > "u" || e || process.env.NODE_ENV === "development" && ns(!(!((t = window.next) === null || t === void 0) && t.appDir), `
We've detected you are using Next.js with the App Router.
We released an **experimental** package called "react-instantsearch-nextjs" that makes SSR work with the App Router.
Please check its usage instructions: https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/#with-nextjs

This warning will not be outputted in production builds.`);
}
function F0() {
  var e, t;
  return typeof window < "u" && ((e = window.next) === null || e === void 0 ? void 0 : e.version) || (typeof process < "u" ? (t = process.env) === null || t === void 0 ? void 0 : t.NEXT_RUNTIME : void 0);
}
var N0 = ["children"];
function D0(e, t) {
  if (e == null)
    return {};
  var r = k0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function k0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function as(e) {
  var t = e.children, r = D0(e, N0), n = A0(r);
  return n.started ? /* @__PURE__ */ z.createElement(rs.Provider, {
    value: n
  }, /* @__PURE__ */ z.createElement(ts.Provider, {
    value: n.mainIndex
  }, t)) : null;
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function M0(e) {
  return U0(e) || q0(e) || L0(e) || H0();
}
function H0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L0(e, t) {
  if (e) {
    if (typeof e == "string")
      return lo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lo(e, t);
  }
}
function q0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function U0(e) {
  if (Array.isArray(e))
    return lo(e);
}
function lo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function cc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cc(Object(r), !0).forEach(function(n) {
      W0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W0(e, t, r) {
  return t = B0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B0(e) {
  var t = z0(e, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function z0(e, t) {
  if (Lr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lc = ht({
  name: "current-refinements",
  connector: !0
}), V0 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return Gt(t, lc()), function(n) {
    if ((n || {}).includedAttributes && (n || {}).excludedAttributes)
      throw new Error(lc("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
    var i = n || {}, a = i.includedAttributes, s = i.excludedAttributes, c = s === void 0 ? ["query"] : s, u = i.transformItems, o = u === void 0 ? function(f) {
      return f;
    } : u;
    return {
      $$type: "ais.currentRefinements",
      init: function(l) {
        var v = l.instantSearchInstance;
        t(Ft(Ft({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: v
        }), !0);
      },
      render: function(l) {
        var v = l.instantSearchInstance;
        t(Ft(Ft({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: v
        }), !1);
      },
      dispose: function() {
        r();
      },
      getRenderState: function(l, v) {
        return Ft(Ft({}, l), {}, {
          currentRefinements: this.getWidgetRenderState(v)
        });
      },
      getWidgetRenderState: function(l) {
        var v = l.results, d = l.scopedResults, p = l.createURL, h = l.helper;
        function m() {
          return v ? d.reduce(function(_, w) {
            return _.concat(o(fc({
              results: w.results,
              helper: w.helper,
              indexId: w.indexId,
              includedAttributes: a,
              excludedAttributes: c
            }), {
              results: v
            }));
          }, []) : o(fc({
            results: {},
            helper: h,
            indexId: h.state.index,
            includedAttributes: a,
            excludedAttributes: c
          }), {
            results: v
          });
        }
        var g = m();
        return {
          items: g,
          canRefine: g.length > 0,
          refine: function(w) {
            return Dd(h, w);
          },
          createURL: function(w) {
            return p(Nd(h.state, w));
          },
          widgetParams: n
        };
      }
    };
  };
};
function fc(e) {
  var t = e.results, r = e.helper, n = e.indexId, i = e.includedAttributes, a = e.excludedAttributes, s = (i || []).indexOf("query") !== -1 || (a || []).indexOf("query") === -1, c = i ? function(o) {
    return i.indexOf(o.attribute) !== -1;
  } : function(o) {
    return a.indexOf(o.attribute) === -1;
  }, u = Jm(t, r.state, s).map(K0).filter(c);
  return u.reduce(function(o, f) {
    return [].concat(M0(o.filter(function(l) {
      return l.attribute !== f.attribute;
    })), [{
      indexName: r.state.index,
      indexId: n,
      attribute: f.attribute,
      label: f.attribute,
      refinements: u.filter(function(l) {
        return l.attribute === f.attribute;
      }).sort(function(l, v) {
        return l.type === "numeric" ? l.value - v.value : 0;
      }),
      refine: function(v) {
        return Dd(r, v);
      }
    }]);
  }, []);
}
function Nd(e, t) {
  switch (e = e.resetPage(), t.type) {
    case "facet":
      return e.removeFacetRefinement(t.attribute, String(t.value));
    case "disjunctive":
      return e.removeDisjunctiveFacetRefinement(t.attribute, String(t.value));
    case "hierarchical":
      return e.removeHierarchicalFacetRefinement(t.attribute);
    case "exclude":
      return e.removeExcludeRefinement(t.attribute, String(t.value));
    case "numeric":
      return e.removeNumericRefinement(t.attribute, t.operator, String(t.value));
    case "tag":
      return e.removeTagRefinement(String(t.value));
    case "query":
      return e.setQueryParameter("query", "");
    default:
      return process.env.NODE_ENV === "development" && le(!1, 'The refinement type "'.concat(t.type, '" does not exist and cannot be cleared from the current refinements.')), e;
  }
}
function Dd(e, t) {
  e.setState(Nd(e.state, t)).search();
}
function Q0(e) {
  switch (e) {
    case ">=":
      return "≥";
    case "<=":
      return "≤";
    default:
      return e;
  }
}
function K0(e) {
  var t = Y0(e), r = e.operator ? "".concat(Q0(e.operator), " ").concat(e.name) : e.name, n = {
    attribute: e.attribute,
    type: e.type,
    value: t,
    label: r
  };
  return e.operator !== void 0 && (n.operator = e.operator), e.count !== void 0 && (n.count = e.count), e.exhaustive !== void 0 && (n.exhaustive = e.exhaustive), n;
}
function Y0(e) {
  return e.type === "numeric" ? Number(e.name) : "escapedValue" in e ? e.escapedValue : e.name;
}
const G0 = V0;
function J0(e, t) {
  return jt(G0, e, t);
}
function qr(e) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
var X0 = ["page"], Z0 = ["clickAnalytics", "userToken"];
function dc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dc(Object(r), !0).forEach(function(n) {
      kd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kd(e, t, r) {
  return t = ew(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ew(e) {
  var t = tw(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function tw(e, t) {
  if (qr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hc(e) {
  return aw(e) || iw(e) || nw(e) || rw();
}
function rw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nw(e, t) {
  if (e) {
    if (typeof e == "string")
      return fo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fo(e, t);
  }
}
function iw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function aw(e) {
  if (Array.isArray(e))
    return fo(e);
}
function fo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Md(e, t) {
  if (e == null)
    return {};
  var r = ow(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ow(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var sw = ht({
  name: "infinite-hits",
  connector: !0
});
function pc(e) {
  var t = e || {};
  t.page;
  var r = Md(t, X0);
  return r;
}
function un(e) {
  var t = e || {};
  t.clickAnalytics, t.userToken;
  var r = Md(t, Z0);
  return r;
}
function uw() {
  var e = null, t = null;
  return {
    read: function(n) {
      var i = n.state;
      return es(t, pc(i)) ? e : null;
    },
    write: function(n) {
      var i = n.state, a = n.hits;
      t = pc(i), e = a;
    }
  };
}
function cw(e) {
  return Object.keys(e).map(Number).sort(function(t, r) {
    return t - r;
  }).reduce(function(t, r) {
    return t.concat(e[r]);
  }, []);
}
var lw = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return Gt(t, sw()), function(n) {
    var i = n || {}, a = i.escapeHTML, s = a === void 0 ? !0 : a, c = i.transformItems, u = c === void 0 ? function(w) {
      return w;
    } : c, o = i.cache, f = o === void 0 ? uw() : o, l, v, d, p, h = function(b, y) {
      var j = b.page, $ = j === void 0 ? 0 : j, R = Object.keys(y).map(Number);
      return R.length === 0 ? $ : Math.min.apply(Math, [$].concat(hc(R)));
    }, m = function(b, y) {
      var j = b.page, $ = j === void 0 ? 0 : j, R = Object.keys(y).map(Number);
      return R.length === 0 ? $ : Math.max.apply(Math, [$].concat(hc(R)));
    }, g = function(b) {
      return function() {
        b.overrideStateWithoutTriggeringChangeEvent(Ke(Ke({}, b.state), {}, {
          page: h(b.state, f.read({
            state: un(b.state)
          }) || {}) - 1
        })).searchWithoutTriggeringOnStateChange();
      };
    }, _ = function(b) {
      return function() {
        b.setPage(m(b.state, f.read({
          state: un(b.state)
        }) || {}) + 1).search();
      };
    };
    return {
      $$type: "ais.infiniteHits",
      init: function(b) {
        t(Ke(Ke({}, this.getWidgetRenderState(b)), {}, {
          instantSearchInstance: b.instantSearchInstance
        }), !0);
      },
      render: function(b) {
        var y = b.instantSearchInstance, j = this.getWidgetRenderState(b);
        t(Ke(Ke({}, j), {}, {
          instantSearchInstance: y
        }), !1), d("view:internal", j.currentPageHits);
      },
      getRenderState: function(b, y) {
        return Ke(Ke({}, b), {}, {
          infiniteHits: this.getWidgetRenderState(y)
        });
      },
      getWidgetRenderState: function(b) {
        var y = b.results, j = b.helper, $ = b.parent, R = b.state, q = b.instantSearchInstance, V, L = [], k = $.getPreviousState() || R, A = f.read({
          state: un(k)
        }) || {};
        if (!y)
          l = g(j), v = _(j), d = Um({
            instantSearchInstance: q,
            index: j.getIndex(),
            widgetType: this.$$type
          }), p = Wm({
            index: j.getIndex(),
            widgetType: this.$$type,
            instantSearchInstance: q
          }), V = k.page === void 0 || h(k, A) === 0;
        else {
          var re, U, T = k.page, C = T === void 0 ? 0 : T;
          s && y.hits.length > 0 && (y.hits = wm(y.hits));
          var F = rg(y.hits, y.page, y.hitsPerPage), Q = og(F, y.queryID), E = u(Q, {
            results: y
          }), M = !1;
          fd(q.mainIndex, function(W) {
            !M && W.getWidgets().some(function(O) {
              var Y = O.$$type;
              return Y === "ais.dynamicWidgets";
            }) && (M = !0);
          });
          var D = !((re = k.disjunctiveFacets) !== null && re !== void 0 && re.length) && !(k.facets || []).filter(function(W) {
            return W !== "*";
          }).length && !((U = k.hierarchicalFacets) !== null && U !== void 0 && U.length);
          A[C] === void 0 && !y.__isArtificial && q.status === "idle" && !(M && D) && (A[C] = E, f.write({
            state: un(k),
            hits: A
          })), L = E, V = h(k, A) === 0;
        }
        var I = cw(A), H = y ? y.nbPages <= m(k, A) + 1 : !0;
        return {
          hits: I,
          currentPageHits: L,
          sendEvent: d,
          bindEvent: p,
          results: y,
          showPrevious: l,
          showMore: v,
          isFirstPage: V,
          isLastPage: H,
          widgetParams: n
        };
      },
      dispose: function(b) {
        var y = b.state;
        r();
        var j = y.setQueryParameter("page", void 0);
        return s ? j.setQueryParameters(Object.keys(Lt).reduce(function($, R) {
          return Ke(Ke({}, $), {}, kd({}, R, void 0));
        }, {})) : j;
      },
      getWidgetUiState: function(b, y) {
        var j = y.searchParameters, $ = j.page || 0;
        return $ ? Ke(Ke({}, b), {}, {
          // The page in the UI state is incremented by one
          // to expose the user value (not `0`).
          page: $ + 1
        }) : b;
      },
      getWidgetSearchParameters: function(b, y) {
        var j = y.uiState, $ = b;
        s && ($ = b.setQueryParameters(Lt));
        var R = j.page ? j.page - 1 : 0;
        return $.setQueryParameter("page", R);
      }
    };
  };
};
const fw = lw;
function dw(e, t) {
  return jt(fw, e, t);
}
function Ur(e) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
var hw = ["name", "escapedValue"], pw = ["escapedValue", "value"];
function vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vc(Object(r), !0).forEach(function(n) {
      mr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mr(e, t, r) {
  return t = vw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vw(e) {
  var t = mw(e, "string");
  return Ur(t) === "symbol" ? t : String(t);
}
function mw(e, t) {
  if (Ur(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ur(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mc(e, t) {
  if (e == null)
    return {};
  var r = gw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var cn = ht({
  name: "refinement-list",
  connector: !0
}), gc = ["isRefined", "count:desc", "name:asc"], yw = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return Gt(t, cn()), function(n) {
    var i = n || {}, a = i.attribute, s = i.operator, c = s === void 0 ? "or" : s, u = i.limit, o = u === void 0 ? 10 : u, f = i.showMore, l = f === void 0 ? !1 : f, v = i.showMoreLimit, d = v === void 0 ? 20 : v, p = i.sortBy, h = p === void 0 ? gc : p, m = i.escapeFacetValues, g = m === void 0 ? !0 : m, _ = i.transformItems, w = _ === void 0 ? function(C) {
      return C;
    } : _;
    if (!a)
      throw new Error(cn("The `attribute` option is required."));
    if (!/^(and|or)$/.test(c))
      throw new Error(cn('The `operator` must one of: `"and"`, `"or"` (got "'.concat(c, '").')));
    if (l === !0 && d <= o)
      throw new Error(cn("`showMoreLimit` should be greater than `limit`."));
    var b = function(F) {
      var Q = F.name, E = F.escapedValue, M = mc(F, hw);
      return Re(Re({}, M), {}, {
        value: E,
        label: Q,
        highlighted: Q
      });
    }, y, j = [], $ = !0, R, q, V = !1, L = function() {
    };
    function k() {
      L();
    }
    function A(C, F) {
      return function() {
        V = !V, F.render(C);
      };
    }
    function re() {
      return V ? d : o;
    }
    var U = function() {
      return function() {
      };
    }, T = function(F, Q) {
      return function(E) {
        return function(M) {
          var D = E.instantSearchInstance, I = E.results;
          if (M === "" && j)
            t(Re(Re({}, Q.getWidgetRenderState(Re(Re({}, E), {}, {
              results: y
            }))), {}, {
              instantSearchInstance: D
            }), !1);
          else {
            var H = {
              highlightPreTag: g ? Lt.highlightPreTag : Me.highlightPreTag,
              highlightPostTag: g ? Lt.highlightPostTag : Me.highlightPostTag
            };
            F.searchForFacetValues(
              a,
              M,
              // We cap the `maxFacetHits` value to 100 because the Algolia API
              // doesn't support a greater number.
              // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
              Math.min(re(), 100),
              H
            ).then(function(W) {
              var O = g ? _m(W.facetHits) : W.facetHits, Y = w(O.map(function(N) {
                var Z = N.escapedValue, J = N.value, B = mc(N, pw);
                return Re(Re({}, B), {}, {
                  value: Z,
                  label: J
                });
              }), {
                results: I
              });
              t(Re(Re({}, Q.getWidgetRenderState(Re(Re({}, E), {}, {
                results: y
              }))), {}, {
                items: Y,
                canToggleShowMore: !1,
                canRefine: !0,
                isFromSearch: !0,
                instantSearchInstance: D
              }), !1);
            });
          }
        };
      };
    };
    return {
      $$type: "ais.refinementList",
      init: function(F) {
        t(Re(Re({}, this.getWidgetRenderState(F)), {}, {
          instantSearchInstance: F.instantSearchInstance
        }), !0);
      },
      render: function(F) {
        t(Re(Re({}, this.getWidgetRenderState(F)), {}, {
          instantSearchInstance: F.instantSearchInstance
        }), !1);
      },
      getRenderState: function(F, Q) {
        return Re(Re({}, F), {}, {
          refinementList: Re(Re({}, F.refinementList), {}, mr({}, a, this.getWidgetRenderState(Q)))
        });
      },
      getWidgetRenderState: function(F) {
        var Q = this, E = F.results, M = F.state, D = F.createURL, I = F.instantSearchInstance, H = F.helper, W = [], O = [];
        if ((!q || !R || !U) && (q = $m({
          instantSearchInstance: I,
          helper: H,
          attribute: a,
          widgetType: this.$$type
        }), R = function(ne) {
          q("click:internal", ne), H.toggleFacetRefinement(a, ne).search();
        }, U = T(H, this)), E) {
          var Y = E.getFacetValues(a, {
            sortBy: h,
            facetOrdering: h === gc
          });
          O = Y && Array.isArray(Y) ? Y : [], W = w(O.slice(0, re()).map(b), {
            results: E
          });
          var N = M.maxValuesPerFacet, Z = re();
          $ = N > Z ? O.length <= Z : O.length < Z, y = E, j = W, F.results && (L = A(F, this));
        }
        var J = U && U(F), B = V && j.length > o, x = l && !$, oe = B || x;
        return {
          createURL: function(ne) {
            return D(function(Ee) {
              return Q.getWidgetUiState(Ee, {
                searchParameters: M.resetPage().toggleFacetRefinement(a, ne),
                helper: H
              });
            });
          },
          items: W,
          refine: R,
          searchForItems: J,
          isFromSearch: !1,
          canRefine: W.length > 0,
          widgetParams: n,
          isShowingMore: V,
          canToggleShowMore: oe,
          toggleShowMore: k,
          sendEvent: q,
          hasExhaustiveItems: $
        };
      },
      dispose: function(F) {
        var Q = F.state;
        r();
        var E = Q.setQueryParameter("maxValuesPerFacet", void 0);
        return c === "and" ? E.removeFacet(a) : E.removeDisjunctiveFacet(a);
      },
      getWidgetUiState: function(F, Q) {
        var E = Q.searchParameters, M = c === "or" ? E.getDisjunctiveRefinements(a) : E.getConjunctiveRefinements(a);
        return bw(Re(Re({}, F), {}, {
          refinementList: Re(Re({}, F.refinementList), {}, mr({}, a, M))
        }), a);
      },
      getWidgetSearchParameters: function(F, Q) {
        var E = Q.uiState, M = c === "or";
        if (F.isHierarchicalFacet(a))
          return process.env.NODE_ENV === "development" && le(!1, 'RefinementList: Attribute "'.concat(a, `" is already used by another widget applying hierarchical faceting.
As this is not supported, please make sure to remove this other widget or this RefinementList widget will not work at all.`)), F;
        if (M && F.isConjunctiveFacet(a) || !M && F.isDisjunctiveFacet(a))
          return process.env.NODE_ENV === "development" && le(!1, 'RefinementList: Attribute "'.concat(a, `" is used by another refinement list with a different operator.
As this is not supported, please make sure to only use this attribute with one of the two operators.`)), F;
        var D = E.refinementList && E.refinementList[a], I = M ? F.addDisjunctiveFacet(a).removeDisjunctiveFacetRefinement(a) : F.addFacet(a).removeFacetRefinement(a), H = I.maxValuesPerFacet || 0, W = Math.max(H, l ? d : o), O = I.setQueryParameter("maxValuesPerFacet", W);
        if (!D) {
          var Y = M ? "disjunctiveFacetsRefinements" : "facetsRefinements";
          return O.setQueryParameters(mr({}, Y, Re(Re({}, O[Y]), {}, mr({}, a, []))));
        }
        return D.reduce(function(N, Z) {
          return M ? N.addDisjunctiveFacetRefinement(a, Z) : N.addFacetRefinement(a, Z);
        }, O);
      }
    };
  };
};
function bw(e, t) {
  return e.refinementList && ((!e.refinementList[t] || e.refinementList[t].length === 0) && delete e.refinementList[t], Object.keys(e.refinementList).length === 0 && delete e.refinementList), e;
}
const ww = yw;
function _w(e, t) {
  return jt(ww, e, t);
}
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function yc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yc(Object(r), !0).forEach(function(n) {
      Sw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sw(e, t, r) {
  return t = Ow(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ow(e) {
  var t = Rw(e, "string");
  return Wr(t) === "symbol" ? t : String(t);
}
function Rw(e, t) {
  if (Wr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pw = ht({
  name: "search-box",
  connector: !0
}), Ew = function(t, r) {
  return r(t);
}, xw = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  return Gt(t, Pw()), function(n) {
    var i = n || {}, a = i.queryHook, s = a === void 0 ? Ew : a, c, u;
    return {
      $$type: "ais.searchBox",
      init: function(f) {
        var l = f.instantSearchInstance;
        t(pt(pt({}, this.getWidgetRenderState(f)), {}, {
          instantSearchInstance: l
        }), !0);
      },
      render: function(f) {
        var l = f.instantSearchInstance;
        t(pt(pt({}, this.getWidgetRenderState(f)), {}, {
          instantSearchInstance: l
        }), !1);
      },
      dispose: function(f) {
        var l = f.state;
        return r(), l.setQueryParameter("query", void 0);
      },
      getRenderState: function(f, l) {
        return pt(pt({}, f), {}, {
          searchBox: this.getWidgetRenderState(l)
        });
      },
      getWidgetRenderState: function(f) {
        var l = f.helper, v = f.instantSearchInstance, d = f.state;
        return c || (c = function(h) {
          s(h, function(m) {
            return l.setQuery(m).search();
          });
        }, u = function() {
          l.setQuery("").search();
        }), {
          query: d.query || "",
          refine: c,
          clear: u,
          widgetParams: n,
          isSearchStalled: v.status === "stalled"
        };
      },
      getWidgetUiState: function(f, l) {
        var v = l.searchParameters, d = v.query || "";
        return d === "" || f && f.query === d ? f : pt(pt({}, f), {}, {
          query: d
        });
      },
      getWidgetSearchParameters: function(f, l) {
        var v = l.uiState;
        return f.setQueryParameter("query", v.query || "");
      }
    };
  };
};
const jw = xw;
function Tw(e, t) {
  return jt(jw, e, t);
}
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function bc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bc(Object(r), !0).forEach(function(n) {
      Cw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cw(e, t, r) {
  return t = Aw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Aw(e) {
  var t = $w(e, "string");
  return Br(t) === "symbol" ? t : String(t);
}
function $w(e, t) {
  if (Br(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Br(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wc = ht({
  name: "sort-by",
  connector: !0
}), Iw = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie;
  Gt(t, wc());
  var n = {};
  return function(i) {
    var a = i || {}, s = a.items, c = a.transformItems, u = c === void 0 ? function(o) {
      return o;
    } : c;
    if (!Array.isArray(s))
      throw new Error(wc("The `items` option expects an array of objects."));
    return {
      $$type: "ais.sortBy",
      init: function(f) {
        var l = f.instantSearchInstance, v = this.getWidgetRenderState(f), d = v.currentRefinement, p = ri(s, function(h) {
          return h.value === d;
        });
        process.env.NODE_ENV === "development" && le(p !== void 0, 'The index named "'.concat(d, '" is not listed in the `items` of `sortBy`.')), t(vt(vt({}, v), {}, {
          instantSearchInstance: l
        }), !0);
      },
      render: function(f) {
        var l = f.instantSearchInstance;
        t(vt(vt({}, this.getWidgetRenderState(f)), {}, {
          instantSearchInstance: l
        }), !1);
      },
      dispose: function(f) {
        var l = f.state;
        return r(), n.initialIndex ? l.setIndex(n.initialIndex) : l;
      },
      getRenderState: function(f, l) {
        return vt(vt({}, f), {}, {
          sortBy: this.getWidgetRenderState(l)
        });
      },
      getWidgetRenderState: function(f) {
        var l = f.results, v = f.helper, d = f.state, p = f.parent;
        !n.initialIndex && p && (n.initialIndex = p.getIndexName()), n.setIndex || (n.setIndex = function(m) {
          v.setIndex(m).search();
        });
        var h = l ? l.nbHits === 0 : !0;
        return {
          currentRefinement: d.index,
          options: u(s, {
            results: l
          }),
          refine: n.setIndex,
          hasNoResults: h,
          canRefine: !h && s.length > 0,
          widgetParams: i
        };
      },
      getWidgetUiState: function(f, l) {
        var v = l.searchParameters, d = v.index;
        return vt(vt({}, f), {}, {
          sortBy: d !== n.initialIndex ? d : void 0
        });
      },
      getWidgetSearchParameters: function(f, l) {
        var v = l.uiState;
        return f.setQueryParameter("index", v.sortBy || n.initialIndex || f.index);
      }
    };
  };
};
const Fw = Iw;
function Nw(e, t) {
  return jt(Fw, e, t);
}
function ye() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(Boolean).join(" ");
}
var Dw = ["isShowingMore", "translations"];
function kw(e, t) {
  if (e == null)
    return {};
  var r = Mw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Mw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Hw(e) {
  var t = e.isShowingMore, r = e.translations, n = kw(e, Dw);
  return /* @__PURE__ */ z.createElement("button", n, r.showMoreButtonText({
    isShowingMore: t
  }));
}
var Lw = ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"];
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ho.apply(this, arguments);
}
function qw(e, t) {
  if (e == null)
    return {};
  var r = Uw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Uw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ww(e) {
  var t = e.classNames, r = e.children, n = e.highlightedTagName, i = e.isHighlighted, a = e.nonHighlightedTagName, s = i ? n : a;
  return /* @__PURE__ */ z.createElement(s, {
    className: i ? t.highlighted : t.nonHighlighted
  }, r);
}
function Bw(e) {
  var t = e.parts, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.nonHighlightedTagName, a = i === void 0 ? "span" : i, s = e.separator, c = s === void 0 ? ", " : s, u = e.className, o = e.classNames, f = qw(e, Lw);
  return /* @__PURE__ */ z.createElement("span", ho({}, f, {
    className: ye(o.root, u)
  }), t.map(function(l, v) {
    var d = v === t.length - 1;
    return /* @__PURE__ */ z.createElement(Bh, {
      key: v
    }, l.map(function(p, h) {
      return /* @__PURE__ */ z.createElement(Ww, {
        key: h,
        classNames: o,
        highlightedTagName: n,
        nonHighlightedTagName: a,
        isHighlighted: p.isHighlighted
      }, p.value);
    }), !d && /* @__PURE__ */ z.createElement("span", {
      className: o.separator
    }, c));
  }));
}
var zw = ["classNames"];
function po() {
  return po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, po.apply(this, arguments);
}
function Vw(e, t) {
  if (e == null)
    return {};
  var r = Qw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Qw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Hd(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = Vw(e, zw);
  return /* @__PURE__ */ z.createElement(Bw, po({
    classNames: {
      root: ye("ais-Highlight", r.root),
      highlighted: ye("ais-Highlight-highlighted", r.highlighted),
      nonHighlighted: ye("ais-Highlight-nonHighlighted", r.nonHighlighted),
      separator: ye("ais-Highlight-separator", r.separator)
    }
  }, n));
}
var Kw = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function vo() {
  return vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vo.apply(this, arguments);
}
function Yw(e, t) {
  if (e == null)
    return {};
  var r = Gw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Gw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Yr(e) {
  var t = e.hit, r = e.attribute, n = e.highlightedTagName, i = e.nonHighlightedTagName, a = e.separator, s = Yw(e, Kw), c = Kr(t._highlightResult, r) || [], u = Array.isArray(c) ? c : [c], o = u.map(function(f) {
    return ui(Zo(f.value || ""));
  });
  return /* @__PURE__ */ z.createElement(Hd, vo({}, s, {
    parts: o,
    highlightedTagName: n,
    nonHighlightedTagName: i,
    separator: a
  }));
}
var Jw = ["canRefine", "items", "onRefine", "query", "searchBox", "noResults", "showMore", "canToggleShowMore", "onToggleShowMore", "isShowingMore", "className", "classNames", "translations"];
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mo.apply(this, arguments);
}
function Xw(e, t) {
  if (e == null)
    return {};
  var r = Zw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Zw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function e1(e) {
  var t = e.canRefine, r = e.items, n = e.onRefine, i = e.query, a = e.searchBox, s = e.noResults, c = e.showMore, u = e.canToggleShowMore, o = e.onToggleShowMore, f = e.isShowingMore, l = e.className, v = e.classNames, d = v === void 0 ? {} : v, p = e.translations, h = Xw(e, Jw);
  return /* @__PURE__ */ z.createElement("div", mo({}, h, {
    className: ye("ais-RefinementList", d.root, !t && ye("ais-RefinementList--noRefinement", d.noRefinementRoot), l)
  }), a && /* @__PURE__ */ z.createElement("div", {
    className: ye("ais-RefinementList-searchBox", d.searchBox)
  }, a), s ? /* @__PURE__ */ z.createElement("div", {
    className: ye("ais-RefinementList-noResults", d.noResults)
  }, s) : /* @__PURE__ */ z.createElement("ul", {
    className: ye("ais-RefinementList-list", d.list)
  }, r.map(function(m) {
    return /* @__PURE__ */ z.createElement("li", {
      key: m.value,
      className: ye("ais-RefinementList-item", d.item, m.isRefined && ye("ais-RefinementList-item--selected", d.selectedItem))
    }, /* @__PURE__ */ z.createElement("label", {
      className: ye("ais-RefinementList-label", d.label)
    }, /* @__PURE__ */ z.createElement("input", {
      checked: m.isRefined,
      className: ye("ais-RefinementList-checkbox", d.checkbox),
      type: "checkbox",
      value: m.value,
      onChange: function() {
        n(m);
      }
    }), /* @__PURE__ */ z.createElement("span", {
      className: ye("ais-RefinementList-labelText", d.labelText)
    }, i.length > 0 ? /* @__PURE__ */ z.createElement(Hd, {
      parts: [ui(Zo(m.highlighted || ""))]
    }) : m.label), /* @__PURE__ */ z.createElement("span", {
      className: ye("ais-RefinementList-count", d.count)
    }, m.count)));
  })), c && /* @__PURE__ */ z.createElement(Hw, {
    className: ye("ais-RefinementList-showMore", d.showMore, !u && ye("ais-RefinementList-showMore--disabled", d.disabledShowMore)),
    disabled: !u,
    onClick: o,
    isShowingMore: f,
    translations: p
  }));
}
var t1 = ["formRef", "inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value", "autoFocus", "resetIconComponent", "submitIconComponent", "loadingIconComponent", "classNames", "translations"];
function go() {
  return go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, go.apply(this, arguments);
}
function r1(e, t) {
  if (e == null)
    return {};
  var r = n1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function n1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var i1 = /* @__PURE__ */ z.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
function a1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ z.createElement("svg", {
    className: ye("ais-SearchBox-submitIcon", t.submitIcon),
    width: "10",
    height: "10",
    viewBox: "0 0 40 40",
    "aria-hidden": "true"
  }, i1);
}
var o1 = /* @__PURE__ */ z.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
function s1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ z.createElement("svg", {
    className: ye("ais-SearchBox-resetIcon", t.resetIcon),
    viewBox: "0 0 20 20",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, o1);
}
var u1 = /* @__PURE__ */ z.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ z.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ z.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ z.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ z.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
}))));
function c1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ z.createElement("svg", {
    "aria-label": "Results are loading",
    width: "16",
    height: "16",
    viewBox: "0 0 38 38",
    stroke: "#444",
    className: ye("ais-SearchBox-loadingIcon", t.loadingIcon),
    "aria-hidden": "true"
  }, u1);
}
function Ld(e) {
  var t = e.formRef, r = e.inputRef, n = e.isSearchStalled, i = e.onChange, a = e.onReset, s = e.onSubmit, c = e.placeholder, u = c === void 0 ? "" : c, o = e.value, f = e.autoFocus, l = e.resetIconComponent, v = l === void 0 ? s1 : l, d = e.submitIconComponent, p = d === void 0 ? a1 : d, h = e.loadingIconComponent, m = h === void 0 ? c1 : h, g = e.classNames, _ = g === void 0 ? {} : g, w = e.translations, b = r1(e, t1);
  function y($) {
    $.preventDefault(), $.stopPropagation(), s && s($), r.current && r.current.blur();
  }
  function j($) {
    $.preventDefault(), $.stopPropagation(), a($), r.current && r.current.focus();
  }
  return /* @__PURE__ */ z.createElement("div", go({}, b, {
    className: ye("ais-SearchBox", _.root, b.className)
  }), /* @__PURE__ */ z.createElement("form", {
    ref: t,
    action: "",
    className: ye("ais-SearchBox-form", _.form),
    noValidate: !0,
    onSubmit: y,
    onReset: j,
    role: "search"
  }, /* @__PURE__ */ z.createElement("input", {
    ref: r,
    className: ye("ais-SearchBox-input", _.input),
    "aria-label": "Search",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder: u,
    spellCheck: !1,
    maxLength: 512,
    type: "search",
    value: o,
    onChange: i,
    onCompositionEnd: i,
    autoFocus: f
  }), /* @__PURE__ */ z.createElement("button", {
    className: ye("ais-SearchBox-submit", _.submit),
    type: "submit",
    title: w.submitButtonTitle
  }, /* @__PURE__ */ z.createElement(p, {
    classNames: _
  })), /* @__PURE__ */ z.createElement("button", {
    className: ye("ais-SearchBox-reset", _.reset),
    type: "reset",
    title: w.resetButtonTitle,
    hidden: o.length === 0 || n
  }, /* @__PURE__ */ z.createElement(v, {
    classNames: _
  })), /* @__PURE__ */ z.createElement("span", {
    className: ye("ais-SearchBox-loadingIndicator", _.loadingIndicator),
    hidden: !n
  }, /* @__PURE__ */ z.createElement(m, {
    classNames: _
  }))));
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
var l1 = ["searchable", "searchablePlaceholder", "attribute", "operator", "limit", "showMore", "showMoreLimit", "sortBy", "escapeFacetValues", "transformItems", "translations"];
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yo.apply(this, arguments);
}
function _c(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function f1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _c(Object(r), !0).forEach(function(n) {
      d1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _c(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d1(e, t, r) {
  return t = h1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h1(e) {
  var t = p1(e, "string");
  return zr(t) === "symbol" ? t : String(t);
}
function p1(e, t) {
  if (zr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v1(e, t) {
  return b1(e) || y1(e, t) || g1(e, t) || m1();
}
function m1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g1(e, t) {
  if (e) {
    if (typeof e == "string")
      return Sc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sc(e, t);
  }
}
function Sc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function y1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function b1(e) {
  if (Array.isArray(e))
    return e;
}
function w1(e, t) {
  if (e == null)
    return {};
  var r = _1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function S1(e) {
  var t = e.searchable, r = e.searchablePlaceholder, n = e.attribute, i = e.operator, a = e.limit, s = e.showMore, c = e.showMoreLimit, u = e.sortBy, o = e.escapeFacetValues, f = e.transformItems, l = e.translations, v = w1(e, l1), d = _w({
    attribute: n,
    operator: i,
    limit: a,
    showMore: s,
    showMoreLimit: c,
    sortBy: u,
    escapeFacetValues: o,
    transformItems: f
  }, {
    $$widgetType: "ais.refinementList"
  }), p = d.canRefine, h = d.canToggleShowMore, m = d.isFromSearch, g = d.isShowingMore, _ = d.items, w = d.refine, b = d.searchForItems, y = d.toggleShowMore, j = bt(""), $ = v1(j, 2), R = $[0], q = $[1], V = Ve(null);
  function L(F) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    q(F), Q && b(F);
  }
  function k(F) {
    w(F.value), L("");
  }
  function A(F) {
    var Q = F.type === "compositionend" || !F.nativeEvent.isComposing;
    L(F.currentTarget.value, Q);
  }
  function re() {
    L("");
  }
  function U() {
    _.length > 0 && (w(_[0].value), L(""));
  }
  var T = f1({
    resetButtonTitle: "Clear the search query",
    submitButtonTitle: "Submit the search query",
    noResultsText: "No results.",
    showMoreButtonText: function(Q) {
      return Q.isShowingMore ? "Show less" : "Show more";
    }
  }, l), C = {
    items: _,
    canRefine: p,
    onRefine: k,
    query: R,
    searchBox: t && /* @__PURE__ */ z.createElement(Ld, {
      inputRef: V,
      placeholder: r,
      isSearchStalled: !1,
      value: R,
      onChange: A,
      onReset: re,
      onSubmit: U,
      translations: {
        submitButtonTitle: T.submitButtonTitle,
        resetButtonTitle: T.resetButtonTitle
      }
    }),
    noResults: t && m && _.length === 0 && T.noResultsText,
    canToggleShowMore: h,
    onToggleShowMore: y,
    isShowingMore: g,
    translations: {
      showMoreButtonText: T.showMoreButtonText
    }
  };
  return /* @__PURE__ */ z.createElement(e1, yo({}, v, C, {
    showMore: s
  }));
}
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
var O1 = ["queryHook", "searchAsYouType", "ignoreCompositionEvents", "translations"];
function bo() {
  return bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bo.apply(this, arguments);
}
function Oc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function R1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oc(Object(r), !0).forEach(function(n) {
      P1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P1(e, t, r) {
  return t = E1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E1(e) {
  var t = x1(e, "string");
  return Vr(t) === "symbol" ? t : String(t);
}
function x1(e, t) {
  if (Vr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j1(e, t) {
  return $1(e) || A1(e, t) || C1(e, t) || T1();
}
function T1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C1(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Rc(e, t);
  }
}
function Rc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function A1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0)
          ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (o)
          throw i;
      }
    }
    return c;
  }
}
function $1(e) {
  if (Array.isArray(e))
    return e;
}
function I1(e, t) {
  if (e == null)
    return {};
  var r = F1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function N1(e) {
  var t = e.queryHook, r = e.searchAsYouType, n = r === void 0 ? !0 : r, i = e.ignoreCompositionEvents, a = i === void 0 ? !1 : i, s = e.translations, c = I1(e, O1), u = Tw({
    queryHook: t
  }, {
    $$widgetType: "ais.searchBox"
  }), o = u.query, f = u.refine, l = u.isSearchStalled, v = bt(o), d = j1(v, 2), p = d[0], h = d[1], m = Ve(null);
  function g(j) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    h(j), n && !(a && $) && f(j);
  }
  function _() {
    g(""), n || f("");
  }
  function w(j) {
    g(j.currentTarget.value, j.nativeEvent.isComposing);
  }
  function b(j) {
    n || f(p), c.onSubmit && c.onSubmit(j);
  }
  o !== p && document.activeElement !== m.current && h(o);
  var y = {
    inputRef: m,
    isSearchStalled: l,
    onChange: w,
    onReset: _,
    onSubmit: b,
    value: p,
    translations: R1({
      submitButtonTitle: "Submit the search query",
      resetButtonTitle: "Clear the search query"
    }, s)
  };
  return /* @__PURE__ */ z.createElement(Ld, bo({}, c, y));
}
var D1 = ["items", "value", "onChange", "classNames"];
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wo.apply(this, arguments);
}
function k1(e, t) {
  if (e == null)
    return {};
  var r = M1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function H1(e) {
  var t = e.items, r = e.value, n = e.onChange, i = n === void 0 ? function() {
  } : n, a = e.classNames, s = a === void 0 ? {} : a, c = k1(e, D1);
  return /* @__PURE__ */ z.createElement("div", wo({}, c, {
    className: ye("ais-SortBy", s.root, c.className)
  }), /* @__PURE__ */ z.createElement("select", {
    className: ye("ais-SortBy-select", s.select),
    onChange: function(o) {
      return i(o.target.value);
    },
    value: r,
    "aria-label": "Sort results by"
  }, t.map(function(u) {
    return /* @__PURE__ */ z.createElement("option", {
      className: ye("ais-SortBy-option", s.option),
      key: u.value,
      value: u.value
    }, u.label);
  })));
}
var L1 = ["items", "transformItems"];
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _o.apply(this, arguments);
}
function q1(e, t) {
  if (e == null)
    return {};
  var r = U1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function U1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function W1(e) {
  var t = e.items, r = e.transformItems, n = q1(e, L1), i = Nw({
    items: t,
    transformItems: r
  }, {
    $$widgetType: "ais.sortBy"
  }), a = i.currentRefinement, s = i.options, c = i.refine, u = {
    items: s,
    value: a,
    onChange: c
  };
  return /* @__PURE__ */ z.createElement(H1, _o({}, n, u));
}
const B1 = (e) => Array.isArray(e) ? /* @__PURE__ */ G.jsx("span", { children: e.join(", ") }) : /* @__PURE__ */ G.jsx("span", { children: e }), z1 = ({ hit: e, onHitClick: t, children: r }) => /* @__PURE__ */ G.jsx(
  "a",
  {
    className: "hitLink",
    onClick: t ? () => t(e) : () => null,
    children: r
  }
), V1 = ({ hit: e, hitConfig: t, onHitClick: r, hitWrapperComponent: n, getHitWrapperProps: i }) => {
  const a = n || z1, s = ii(() => i ? i(e) : { hit: e, onHitClick: r }, [i, e, r]);
  return /* @__PURE__ */ G.jsx(a, { ...s, className: "hitLink", children: /* @__PURE__ */ G.jsxs("li", { className: "hit", children: [
    /* @__PURE__ */ G.jsxs("div", { className: "left", children: [
      t.headlineAttribute ? /* @__PURE__ */ G.jsx("h2", { className: "headline", children: t.renderHeadlineAttribute ? t.renderHeadlineAttribute(e) : e[t.headlineAttribute] }) : null,
      t.leftColumnItems.map((c) => {
        if (c.renderDisplay || e[c.attribute])
          return /* @__PURE__ */ G.jsxs(
            "p",
            {
              className: "hitData",
              children: [
                /* @__PURE__ */ G.jsx("span", { title: c.caption, children: c.icon }),
                /* @__PURE__ */ G.jsx("strong", { children: c.renderDisplay ? c.renderDisplay(e) : B1(e[c.attribute]) })
              ]
            },
            c.attribute
          );
      })
    ] }),
    /* @__PURE__ */ G.jsx("div", { className: "right", children: /* @__PURE__ */ G.jsxs("div", { className: "summary", children: [
      t.rightPanel.label ? /* @__PURE__ */ G.jsx("h3", { children: t.rightPanel.label }) : null,
      /* @__PURE__ */ G.jsx("p", { children: /* @__PURE__ */ G.jsx(
        Yr,
        {
          attribute: t.rightPanel.attribute,
          hit: e,
          highlightedTagName: "mark"
        }
      ) })
    ] }) })
  ] }) });
}, ce = {
  commandement: {
    en: "Commandment",
    fr: "Commandement"
  },
  titulature: {
    en: "Title",
    fr: "Titulature"
  },
  city: {
    en: "City",
    fr: "Ville"
  },
  place_given: {
    en: "Place Given",
    fr: "Date de Lieu"
  },
  search: {
    en: "Search",
    fr: "Rechercher"
  },
  number_of_order: {
    en: "Number of Order",
    fr: "Numero d'ordre"
  },
  reset: {
    en: "Clear filters",
    fr: "Effacer les filtres"
  },
  searchHere: {
    en: "Search here...",
    fr: "Recherchez ici..."
  },
  to: {
    en: "To",
    fr: "à"
  },
  summary: {
    en: "Summary",
    fr: "Sommaire"
  },
  text: {
    en: "Text",
    fr: "Texte"
  },
  year: {
    en: "Year",
    fr: "Année"
  },
  date: {
    en: "Date",
    fr: "Date"
  },
  month: {
    en: "Month",
    fr: "Mois"
  },
  day: {
    en: "Day",
    fr: "Jour"
  },
  references: {
    en: "References",
    fr: "Références"
  },
  comments: {
    en: "Comments",
    fr: "Commentaires"
  },
  emptyField: {
    en: "This field is empty.",
    fr: "Ce champ est vide."
  },
  error: {
    en: "Error",
    fr: "Erreur"
  },
  documentNotFound: {
    en: "Document not found",
    fr: "Document introuvable"
  },
  sort: {
    en: "Sort",
    fr: "Trier"
  },
  chronologicalAsc: {
    en: "Chronological asc.",
    fr: "Chronologique asc."
  },
  chronologicalDesc: {
    en: "Chronological desc.",
    fr: "Chronologique desc."
  },
  numberOrderAsc: {
    en: "Number order asc.",
    fr: "Numéro d'ordre asc."
  },
  numberOrderDesc: {
    en: "Number order desc.",
    fr: "Numéro d'ordre desc."
  },
  relevance: {
    en: "Relevance",
    fr: "Pertinence"
  },
  showMore: {
    en: "Show more",
    fr: "Montre plus"
  },
  loading: {
    en: "Loading...",
    fr: "Chargement..."
  },
  noResults: {
    en: "No results.",
    fr: "Aucun résultat."
  },
  keywords: {
    en: "Keywords",
    fr: "Mots-clé"
  },
  archive: {
    en: "Archive",
    fr: "Archive"
  },
  archiveLocation: {
    en: "Archive Location",
    fr: "Lieu d'archive"
  },
  origDate: {
    en: "Original Date",
    fr: "Date Originale"
  },
  origPlace: {
    en: "Original Place",
    fr: "Lieu Originale"
  },
  works: {
    en: "Works",
    fr: "Oeuvres"
  },
  formerShelfmarks: {
    en: "Former Shelfmarks",
    fr: "Ancienne notation d'étagère"
  },
  formerShelfmark: {
    en: "Former Shelfmark",
    fr: "Ancienne notation d'étagère"
  },
  shelfmarks: {
    en: "Shelfmarks",
    fr: "Notation d'étagère"
  },
  shelfmark: {
    en: "Shelfmark",
    fr: "Notation d'étagère"
  },
  shelfmarkSections: {
    en: "Shelfmark Sections",
    fr: "Sections de notation d'étagère"
  },
  shelfmarkSection: {
    en: "Shelfmark Section",
    fr: "Section de notation d'étagère"
  },
  provenance: {
    en: "Provenance",
    fr: "Provenance"
  },
  sections: {
    en: "Section",
    fr: "Section"
  },
  title: {
    en: "Title",
    fr: "Titre"
  },
  genericTitle: {
    en: "Generic Title",
    fr: "Titre Générique"
  },
  publicationDate: {
    en: "Publication Date",
    fr: "Date d'édition"
  },
  publicationLocation: {
    en: "Publication Location",
    fr: "Lieu d'édition"
  },
  parentEdition: {
    en: "Parent Edition",
    fr: "Édition parente"
  },
  status: {
    en: "Status",
    fr: "Statut"
  },
  line: {
    en: "Line",
    fr: "Ligne"
  },
  author: {
    en: "Author",
    fr: "Auteur"
  },
  format: {
    en: "Format",
    fr: "Format"
  },
  publisher: {
    en: "Publisher",
    fr: "Éditeur"
  },
  type: {
    en: "Type",
    fr: "Type"
  },
  draft: {
    en: "Draft",
    fr: "Brouillon"
  },
  published: {
    en: "Published",
    fr: "Publié"
  },
  archived: {
    en: "Archived",
    fr: "Archivé"
  },
  print: {
    en: "Print",
    fr: "Imprimé"
  },
  manuscript: {
    en: "Manuscript",
    fr: "Manuscrit"
  },
  catalogNumber: {
    en: "Catalog number",
    fr: "Numéro de catalogue"
  },
  numberOfFolios: {
    en: "Number of folios",
    fr: "Nombre de folios"
  },
  pageSize: {
    en: "Page size",
    fr: "Taille de la page"
  },
  textBlockSize: {
    en: "Text block size",
    fr: "Taille du bloc de texte"
  },
  numberOfLines: {
    en: "Number of lines",
    fr: "Nombre de lignes"
  },
  places: {
    en: "Places",
    fr: "Lieux"
  },
  dates: {
    en: "Dates",
    fr: "Dates"
  },
  measures: {
    en: "Measures",
    fr: "Mesures"
  }
}, Q1 = (e) => {
  const {
    hits: t,
    isLastPage: r,
    showMore: n
  } = dw(e), { locale: i } = e, [a, s] = bt(!0);
  if (gt(() => {
    a && t.length > 0 && s(!1);
  }, [t, a]), a)
    return /* @__PURE__ */ G.jsx("p", { className: "center", children: ce.loading[i] });
  if (t.length === 0)
    return /* @__PURE__ */ G.jsx("p", { className: "center", children: ce.noResults[i] });
  const c = () => r ? /* @__PURE__ */ G.jsx(
    "button",
    {
      disabled: !0,
      className: "ais-InfiniteHits-loadMore",
      children: ce.showMore[i]
    }
  ) : /* @__PURE__ */ G.jsx(
    "button",
    {
      onClick: () => n(),
      className: "ais-InfiniteHits-loadMore",
      children: ce.showMore[i]
    }
  );
  return /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
    /* @__PURE__ */ G.jsx("ul", { className: "hitList", children: t.map((u) => /* @__PURE__ */ G.jsx(
      V1,
      {
        locale: i,
        hit: u,
        hitConfig: e.hitConfig,
        onHitClick: e.onHitClick,
        hitWrapperComponent: e.hitWrapperComponent,
        getHitWrapperProps: e.getHitWrapperProps
      },
      u.id
    )) }),
    c()
  ] });
};
var So = { exports: {} }, ln = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc;
function K1() {
  if (Pc)
    return me;
  Pc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var j = y.$$typeof;
      switch (j) {
        case t:
          switch (y = y.type, y) {
            case u:
            case o:
            case n:
            case a:
            case i:
            case l:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case f:
                case p:
                case d:
                case s:
                  return y;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function b(y) {
    return w(y) === o;
  }
  return me.AsyncMode = u, me.ConcurrentMode = o, me.ContextConsumer = c, me.ContextProvider = s, me.Element = t, me.ForwardRef = f, me.Fragment = n, me.Lazy = p, me.Memo = d, me.Portal = r, me.Profiler = a, me.StrictMode = i, me.Suspense = l, me.isAsyncMode = function(y) {
    return b(y) || w(y) === u;
  }, me.isConcurrentMode = b, me.isContextConsumer = function(y) {
    return w(y) === c;
  }, me.isContextProvider = function(y) {
    return w(y) === s;
  }, me.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, me.isForwardRef = function(y) {
    return w(y) === f;
  }, me.isFragment = function(y) {
    return w(y) === n;
  }, me.isLazy = function(y) {
    return w(y) === p;
  }, me.isMemo = function(y) {
    return w(y) === d;
  }, me.isPortal = function(y) {
    return w(y) === r;
  }, me.isProfiler = function(y) {
    return w(y) === a;
  }, me.isStrictMode = function(y) {
    return w(y) === i;
  }, me.isSuspense = function(y) {
    return w(y) === l;
  }, me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === o || y === a || y === i || y === l || y === v || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === d || y.$$typeof === s || y.$$typeof === c || y.$$typeof === f || y.$$typeof === m || y.$$typeof === g || y.$$typeof === _ || y.$$typeof === h);
  }, me.typeOf = w, me;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function Y1() {
  return Ec || (Ec = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function w(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === o || x === a || x === i || x === l || x === v || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === d || x.$$typeof === s || x.$$typeof === c || x.$$typeof === f || x.$$typeof === m || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === h);
    }
    function b(x) {
      if (typeof x == "object" && x !== null) {
        var oe = x.$$typeof;
        switch (oe) {
          case t:
            var de = x.type;
            switch (de) {
              case u:
              case o:
              case n:
              case a:
              case i:
              case l:
                return de;
              default:
                var ne = de && de.$$typeof;
                switch (ne) {
                  case c:
                  case f:
                  case p:
                  case d:
                  case s:
                    return ne;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var y = u, j = o, $ = c, R = s, q = t, V = f, L = n, k = p, A = d, re = r, U = a, T = i, C = l, F = !1;
    function Q(x) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || b(x) === u;
    }
    function E(x) {
      return b(x) === o;
    }
    function M(x) {
      return b(x) === c;
    }
    function D(x) {
      return b(x) === s;
    }
    function I(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function H(x) {
      return b(x) === f;
    }
    function W(x) {
      return b(x) === n;
    }
    function O(x) {
      return b(x) === p;
    }
    function Y(x) {
      return b(x) === d;
    }
    function N(x) {
      return b(x) === r;
    }
    function Z(x) {
      return b(x) === a;
    }
    function J(x) {
      return b(x) === i;
    }
    function B(x) {
      return b(x) === l;
    }
    ge.AsyncMode = y, ge.ConcurrentMode = j, ge.ContextConsumer = $, ge.ContextProvider = R, ge.Element = q, ge.ForwardRef = V, ge.Fragment = L, ge.Lazy = k, ge.Memo = A, ge.Portal = re, ge.Profiler = U, ge.StrictMode = T, ge.Suspense = C, ge.isAsyncMode = Q, ge.isConcurrentMode = E, ge.isContextConsumer = M, ge.isContextProvider = D, ge.isElement = I, ge.isForwardRef = H, ge.isFragment = W, ge.isLazy = O, ge.isMemo = Y, ge.isPortal = N, ge.isProfiler = Z, ge.isStrictMode = J, ge.isSuspense = B, ge.isValidElementType = w, ge.typeOf = b;
  }()), ge;
}
var xc;
function qd() {
  return xc || (xc = 1, process.env.NODE_ENV === "production" ? ln.exports = K1() : ln.exports = Y1()), ln.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Fi, jc;
function G1() {
  if (jc)
    return Fi;
  jc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        o[f] = f;
      }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Fi = i() ? Object.assign : function(a, s) {
    for (var c, u = n(a), o, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var l in c)
        t.call(c, l) && (u[l] = c[l]);
      if (e) {
        o = e(c);
        for (var v = 0; v < o.length; v++)
          r.call(c, o[v]) && (u[o[v]] = c[o[v]]);
      }
    }
    return u;
  }, Fi;
}
var Ni, Tc;
function os() {
  if (Tc)
    return Ni;
  Tc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ni = e, Ni;
}
var Di, Cc;
function Ud() {
  return Cc || (Cc = 1, Di = Function.call.bind(Object.prototype.hasOwnProperty)), Di;
}
var ki, Ac;
function J1() {
  if (Ac)
    return ki;
  Ac = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = os(), r = {}, n = Ud();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, c, u, o) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var l;
          try {
            if (typeof a[f] != "function") {
              var v = Error(
                (u || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            l = a[f](s, f, u, c, null, t);
          } catch (p) {
            l = p;
          }
          if (l && !(l instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var d = o ? o() : "";
            e(
              "Failed " + c + " type: " + l.message + (d ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ki = i, ki;
}
var Mi, $c;
function X1() {
  if ($c)
    return Mi;
  $c = 1;
  var e = qd(), t = G1(), r = os(), n = Ud(), i = J1(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Mi = function(c, u) {
    var o = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function l(E) {
      var M = E && (o && E[o] || E[f]);
      if (typeof M == "function")
        return M;
    }
    var v = "<<anonymous>>", d = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: _(),
      arrayOf: w,
      element: b(),
      elementType: y(),
      instanceOf: j,
      node: V(),
      objectOf: R,
      oneOf: $,
      oneOfType: q,
      shape: k,
      exact: A
    };
    function p(E, M) {
      return E === M ? E !== 0 || 1 / E === 1 / M : E !== E && M !== M;
    }
    function h(E, M) {
      this.message = E, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function m(E) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, D = 0;
      function I(W, O, Y, N, Z, J, B) {
        if (N = N || v, J = J || Y, B !== r) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = N + ":" + Y;
            !M[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[oe] = !0, D++);
          }
        }
        return O[Y] == null ? W ? O[Y] === null ? new h("The " + Z + " `" + J + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new h("The " + Z + " `" + J + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : E(O, Y, N, Z, J);
      }
      var H = I.bind(null, !1);
      return H.isRequired = I.bind(null, !0), H;
    }
    function g(E) {
      function M(D, I, H, W, O, Y) {
        var N = D[I], Z = T(N);
        if (Z !== E) {
          var J = C(N);
          return new h(
            "Invalid " + W + " `" + O + "` of type " + ("`" + J + "` supplied to `" + H + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return m(M);
    }
    function _() {
      return m(s);
    }
    function w(E) {
      function M(D, I, H, W, O) {
        if (typeof E != "function")
          return new h("Property `" + O + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var Y = D[I];
        if (!Array.isArray(Y)) {
          var N = T(Y);
          return new h("Invalid " + W + " `" + O + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Z = 0; Z < Y.length; Z++) {
          var J = E(Y, Z, H, W, O + "[" + Z + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return m(M);
    }
    function b() {
      function E(M, D, I, H, W) {
        var O = M[D];
        if (!c(O)) {
          var Y = T(O);
          return new h("Invalid " + H + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(E);
    }
    function y() {
      function E(M, D, I, H, W) {
        var O = M[D];
        if (!e.isValidElementType(O)) {
          var Y = T(O);
          return new h("Invalid " + H + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(E);
    }
    function j(E) {
      function M(D, I, H, W, O) {
        if (!(D[I] instanceof E)) {
          var Y = E.name || v, N = Q(D[I]);
          return new h("Invalid " + W + " `" + O + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return m(M);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function M(D, I, H, W, O) {
        for (var Y = D[I], N = 0; N < E.length; N++)
          if (p(Y, E[N]))
            return null;
        var Z = JSON.stringify(E, function(B, x) {
          var oe = C(x);
          return oe === "symbol" ? String(x) : x;
        });
        return new h("Invalid " + W + " `" + O + "` of value `" + String(Y) + "` " + ("supplied to `" + H + "`, expected one of " + Z + "."));
      }
      return m(M);
    }
    function R(E) {
      function M(D, I, H, W, O) {
        if (typeof E != "function")
          return new h("Property `" + O + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var Y = D[I], N = T(Y);
        if (N !== "object")
          return new h("Invalid " + W + " `" + O + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an object."));
        for (var Z in Y)
          if (n(Y, Z)) {
            var J = E(Y, Z, H, W, O + "." + Z, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return m(M);
    }
    function q(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var M = 0; M < E.length; M++) {
        var D = E[M];
        if (typeof D != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(D) + " at index " + M + "."
          ), s;
      }
      function I(H, W, O, Y, N) {
        for (var Z = [], J = 0; J < E.length; J++) {
          var B = E[J], x = B(H, W, O, Y, N, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && Z.push(x.data.expectedType);
        }
        var oe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + Y + " `" + N + "` supplied to " + ("`" + O + "`" + oe + "."));
      }
      return m(I);
    }
    function V() {
      function E(M, D, I, H, W) {
        return re(M[D]) ? null : new h("Invalid " + H + " `" + W + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return m(E);
    }
    function L(E, M, D, I, H) {
      return new h(
        (E || "React class") + ": " + M + " type `" + D + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function k(E) {
      function M(D, I, H, W, O) {
        var Y = D[I], N = T(Y);
        if (N !== "object")
          return new h("Invalid " + W + " `" + O + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Z in E) {
          var J = E[Z];
          if (typeof J != "function")
            return L(H, W, O, Z, C(J));
          var B = J(Y, Z, H, W, O + "." + Z, r);
          if (B)
            return B;
        }
        return null;
      }
      return m(M);
    }
    function A(E) {
      function M(D, I, H, W, O) {
        var Y = D[I], N = T(Y);
        if (N !== "object")
          return new h("Invalid " + W + " `" + O + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Z = t({}, D[I], E);
        for (var J in Z) {
          var B = E[J];
          if (n(E, J) && typeof B != "function")
            return L(H, W, O, J, C(B));
          if (!B)
            return new h(
              "Invalid " + W + " `" + O + "` key `" + J + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(D[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var x = B(Y, J, H, W, O + "." + J, r);
          if (x)
            return x;
        }
        return null;
      }
      return m(M);
    }
    function re(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(re);
          if (E === null || c(E))
            return !0;
          var M = l(E);
          if (M) {
            var D = M.call(E), I;
            if (M !== E.entries) {
              for (; !(I = D.next()).done; )
                if (!re(I.value))
                  return !1;
            } else
              for (; !(I = D.next()).done; ) {
                var H = I.value;
                if (H && !re(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(E, M) {
      return E === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function T(E) {
      var M = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : U(M, E) ? "symbol" : M;
    }
    function C(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var M = T(E);
      if (M === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function F(E) {
      var M = C(E);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function Q(E) {
      return !E.constructor || !E.constructor.name ? v : E.constructor.name;
    }
    return d.checkPropTypes = i, d.resetWarningCache = i.resetWarningCache, d.PropTypes = d, d;
  }, Mi;
}
var Hi, Ic;
function Z1() {
  if (Ic)
    return Hi;
  Ic = 1;
  var e = os();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Hi = function() {
    function n(s, c, u, o, f, l) {
      if (l !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Hi;
}
if (process.env.NODE_ENV !== "production") {
  var e_ = qd(), t_ = !0;
  So.exports = X1()(e_.isElement, t_);
} else
  So.exports = Z1()();
var r_ = So.exports;
const X = /* @__PURE__ */ Kt(r_);
var n_ = ["color", "size", "title"];
function Oo() {
  return Oo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oo.apply(this, arguments);
}
function i_(e, t) {
  if (e == null)
    return {};
  var r = a_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function a_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ss = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = i_(e, n_);
  return /* @__PURE__ */ z.createElement("svg", Oo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
  }));
});
ss.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ss.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const o_ = ss;
var s_ = ["color", "size", "title"];
function Ro() {
  return Ro = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
function u_(e, t) {
  if (e == null)
    return {};
  var r = c_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var us = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = u_(e, s_);
  return /* @__PURE__ */ z.createElement("svg", Ro({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"
  }));
});
us.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
us.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Wd = us;
var l_ = ["color", "size", "title"];
function Po() {
  return Po = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Po.apply(this, arguments);
}
function f_(e, t) {
  if (e == null)
    return {};
  var r = d_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function d_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var cs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = f_(e, l_);
  return /* @__PURE__ */ z.createElement("svg", Po({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
  }));
});
cs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
cs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const h_ = cs;
var p_ = ["color", "size", "title"];
function Eo() {
  return Eo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
function v_(e, t) {
  if (e == null)
    return {};
  var r = m_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ls = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = v_(e, p_);
  return /* @__PURE__ */ z.createElement("svg", Eo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }));
});
ls.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ls.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const g_ = ls;
var y_ = ["color", "size", "title"];
function xo() {
  return xo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xo.apply(this, arguments);
}
function b_(e, t) {
  if (e == null)
    return {};
  var r = w_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function w_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var fs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = b_(e, y_);
  return /* @__PURE__ */ z.createElement("svg", xo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"
  }));
});
fs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
fs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Bd = fs;
var __ = ["color", "size", "title"];
function jo() {
  return jo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function S_(e, t) {
  if (e == null)
    return {};
  var r = O_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ds = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = S_(e, __);
  return /* @__PURE__ */ z.createElement("svg", jo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
  }));
});
ds.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ds.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const zd = ds;
var R_ = ["color", "size", "title"];
function To() {
  return To = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, To.apply(this, arguments);
}
function P_(e, t) {
  if (e == null)
    return {};
  var r = E_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var hs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = P_(e, R_);
  return /* @__PURE__ */ z.createElement("svg", To({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
  }));
});
hs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
hs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const x_ = hs;
var j_ = ["color", "size", "title"];
function Co() {
  return Co = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Co.apply(this, arguments);
}
function T_(e, t) {
  if (e == null)
    return {};
  var r = C_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ps = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = T_(e, j_);
  return /* @__PURE__ */ z.createElement("svg", Co({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  }));
});
ps.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ps.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const A_ = ps;
var $_ = ["color", "size", "title"];
function Ao() {
  return Ao = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
function I_(e, t) {
  if (e == null)
    return {};
  var r = F_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var vs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = I_(e, $_);
  return /* @__PURE__ */ z.createElement("svg", Ao({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
  }));
});
vs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
vs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const N_ = vs;
var D_ = ["color", "size", "title"];
function $o() {
  return $o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $o.apply(this, arguments);
}
function k_(e, t) {
  if (e == null)
    return {};
  var r = M_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ms = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = k_(e, D_);
  return /* @__PURE__ */ z.createElement("svg", $o({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
  }));
});
ms.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ms.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const H_ = ms;
var L_ = ["color", "size", "title"];
function Io() {
  return Io = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Io.apply(this, arguments);
}
function q_(e, t) {
  if (e == null)
    return {};
  var r = U_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function U_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var gs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = q_(e, L_);
  return /* @__PURE__ */ z.createElement("svg", Io({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
  }), /* @__PURE__ */ z.createElement("path", {
    d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
});
gs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
gs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const W_ = gs;
var B_ = ["color", "size", "title"];
function Fo() {
  return Fo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
function z_(e, t) {
  if (e == null)
    return {};
  var r = V_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function V_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ys = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = z_(e, B_);
  return /* @__PURE__ */ z.createElement("svg", Fo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
  }));
});
ys.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ys.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Q_ = ys;
var K_ = ["color", "size", "title"];
function No() {
  return No = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, No.apply(this, arguments);
}
function Y_(e, t) {
  if (e == null)
    return {};
  var r = G_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var bs = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Y_(e, K_);
  return /* @__PURE__ */ z.createElement("svg", No({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
  }));
});
bs.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
bs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Vd = bs;
var J_ = ["color", "size", "title"];
function Do() {
  return Do = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Do.apply(this, arguments);
}
function X_(e, t) {
  if (e == null)
    return {};
  var r = Z_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ws = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = X_(e, J_);
  return /* @__PURE__ */ z.createElement("svg", Do({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"
  }));
});
ws.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ws.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const eS = ws;
var tS = ["color", "size", "title"];
function ko() {
  return ko = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ko.apply(this, arguments);
}
function rS(e, t) {
  if (e == null)
    return {};
  var r = nS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var _s = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = rS(e, tS);
  return /* @__PURE__ */ z.createElement("svg", ko({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
  }));
});
_s.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
_s.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const iS = _s;
var aS = ["color", "size", "title"];
function Mo() {
  return Mo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mo.apply(this, arguments);
}
function oS(e, t) {
  if (e == null)
    return {};
  var r = sS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ss = /* @__PURE__ */ He(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = oS(e, aS);
  return /* @__PURE__ */ z.createElement("svg", Mo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ z.createElement("title", null, i) : null, /* @__PURE__ */ z.createElement("path", {
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }));
});
Ss.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
Ss.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const uS = Ss, cS = _r.div`
  background: #eee;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
`, Li = ({ header: e, children: t }) => /* @__PURE__ */ G.jsxs(cS, { children: [
  e ? /* @__PURE__ */ G.jsx("span", { className: "header", children: e }) : null,
  t
] }), lS = _r.div`
padding: 10px;

.search {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
}

.currentRefinementList {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 10px 0;
  padding: 0;
}

.ais-RefinementList-labelText {
  max-width: 260px;
}

.currentRefinement {
  background: #eee;
  border: none;
  border-radius: 5px;
  padding: 4px;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 1rem;
  line-height: 1;
}

.currentRefinementLabel {
  padding: 5px;
}

.currentRefinement button {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  background-color: #e0e0e0;
  padding: 5px;
}

.currentRefinement button:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.currentRefinement button svg {
  height: 16px;
  width: 16px;
}

.currentRefinementValue {
  color: #5a5e9a;
}

.hitList {
  margin: 0;
  padding: 0;
}

.hit {
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #eee;
  margin-bottom: 30px;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
  border-radius: 5px;
  transition: background-color 0.2s;
  gap: 4px;
}

.hit svg {
  height: 18px;
  width: 18px;
}

.hit svg:hover {
  cursor: help;
}

.hit p {
  font-size: 1rem;
  margin: 0;
}

.hit h2, .hit h3 {
  margin: 0;
  text-align: left;
  width: 100%;
}

.hit .right {
  overflow: hidden;
  position: relative;
  padding: 20px;
  border-left: 1px solid black;
}

.hitData {
  display: flex;
  gap: 8px;
}

.hitLink:hover .hit {
  background-color: rgba(0, 0, 0, 0.1);
}

.date {
  font-size: 0.8rem;
}

.box {
  background: #eee;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
}

.box h2 {
  text-align: center;
}

.boxClickable:hover {
  cursor: pointer;
}

.sliderValues {
  display: flex;
  justify-content: space-between;
}

.filterButton {
  display: none;
}

.dateSlider {
  margin: 20px 0;
}

.header {
  text-transform: uppercase;
  color: #5a5e9a;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
}

.boxHeader {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
}

.boxHeader svg {
  height: 16px;
  width: 16px;
}

.boxHeader:hover {
  cursor: pointer;
}

.hiddenPanelContent {
  visibility: hidden;
  height: 0;
}

.center {
  text-align: center;
}

@media (max-width: 800px) {
  .search {
      display: initial;
  }

  .filters {
      position: absolute;
      background: #aaa;
      padding: 20px;
      width: 100vw;
      transform: translateX(-120vw);
      transition: transform 0.3s;
      left: 0;
      z-index: 1000;
  }

  .filterButton {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border: none;
      background: #aaa;
      border-radius: 10px;
  }

  .filterButton:hover {
      cursor: pointer;
  }

  .filterButton svg {
      height: 30px;
      width: 30px;
  }

  .hit {
      margin-right: auto;
      margin-left: auto;
      overflow: hidden;
      display: flex;
      flex-flow: column;
  }

  .mainPanel {
      max-width: 100vw;
  }

  .mobileFilterToggle {
      display: initial;
  }

  .searchPanel div {
      display: flex;
      flex-flow: row;
      gap: 10px;
    }

  /* This is the search box */
  .searchPanel div div {
      width: 50%;
  }

  .hit p {
      font-size: 0.75rem;
  }

  .hit .right {
      mask-image: linear-gradient(180deg, #000 60%, transparent);
      border: none;
      padding: 0;
  }

  .headline {
      font-size: 1.2rem;
      display: flex;
      flex-flow: row-reverse;
  }
}

`, fS = (e) => e.refinements[0].type === "numeric", Qd = Qt({
  facets: [],
  setFacets: () => null
}), dS = (e) => {
  const {
    items: t,
    refine: r
  } = J0(e), { facets: n } = dt(Qd), i = (c) => {
    var f, l, v;
    const u = (f = n.find((d) => d.value === c.attribute)) == null ? void 0 : f.displayLabel;
    let o;
    if (fS(c)) {
      const d = (l = c.refinements[0]) == null ? void 0 : l.value, p = (v = c.refinements[1]) == null ? void 0 : v.value;
      d && p ? o = [`${d} - ${p}`] : d ? o = [`> ${d}`] : o = [`< ${p}`];
    } else
      o = c.refinements.map((d) => d.value);
    return {
      label: u || c.attribute,
      values: o
    };
  }, a = t.map((c) => ({
    display: i(c),
    original: c
  }));
  if (t.length === 0)
    return null;
  const s = (c) => {
    r(c.refinements[0]);
  };
  return /* @__PURE__ */ G.jsx("ul", { className: "currentRefinementList", children: a.map((c) => /* @__PURE__ */ G.jsxs(
    "li",
    {
      className: "currentRefinement",
      children: [
        /* @__PURE__ */ G.jsxs(
          "span",
          {
            className: "currentRefinementLabel",
            children: [
              c.display.label,
              ": "
            ]
          }
        ),
        c.display.values.map((u) => /* @__PURE__ */ G.jsxs(
          "button",
          {
            onClick: () => s(c.original),
            children: [
              /* @__PURE__ */ G.jsx(
                "span",
                {
                  className: "currentRefinementValue",
                  children: u
                }
              ),
              /* @__PURE__ */ G.jsx(uS, {})
            ]
          },
          u
        ))
      ]
    },
    c.display.label
  )) });
};
class gr extends Error {
}
gr.prototype.name = "InvalidTokenError";
function hS(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, r) => {
    let n = r.charCodeAt(0).toString(16).toUpperCase();
    return n.length < 2 && (n = "0" + n), "%" + n;
  }));
}
function pS(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return hS(t);
  } catch {
    return atob(t);
  }
}
function Fc(e, t) {
  if (typeof e != "string")
    throw new gr("Invalid token specified: must be a string");
  t || (t = {});
  const r = t.header === !0 ? 0 : 1, n = e.split(".")[r];
  if (typeof n != "string")
    throw new gr(`Invalid token specified: missing part #${r + 1}`);
  let i;
  try {
    i = pS(n);
  } catch (a) {
    throw new gr(`Invalid token specified: invalid base64 for part #${r + 1} (${a.message})`);
  }
  try {
    return JSON.parse(i);
  } catch (a) {
    throw new gr(`Invalid token specified: invalid json for part #${r + 1} (${a.message})`);
  }
}
const qi = (e) => e.trim().replace("_", " ").split(/[\s_]+/).map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), vS = (e) => {
  const t = e.endsWith("_facet") ? e.substring(0, e.lastIndexOf("_facet")) : e;
  if (t.startsWith("ey")) {
    const { label: r, facet: n, uuid: i } = Fc(t);
    return {
      value: e,
      displayLabel: r,
      show: n,
      uuid: i,
      isUserDefined: !0
    };
  } else if (t.includes(".ey")) {
    const { label: r, facet: n, uuid: i } = Fc(t.substring(e.indexOf(".ey") + 1)), a = qi(
      t.substring(0, t.indexOf("."))
    );
    return {
      value: e,
      displayLabel: `${a}: ${r}`,
      show: n,
      uuid: i,
      isUserDefined: !0
    };
  } else {
    const r = qi(
      t.substring(0, e.indexOf("."))
    ), n = qi(
      t.substring(e.indexOf(".") + 1)
    );
    return {
      value: e,
      displayLabel: r ? `${r}: ${n}` : n,
      show: !0,
      isUserDefined: !1
    };
  }
}, Os = ({
  locale: e,
  hitConfig: t,
  onHitClick: r,
  hitWrapperComponent: n,
  getHitWrapperProps: i
}) => {
  const [a, s] = bt(!1), [c, u] = bt(!0), [o, f] = bt([]), l = Ve(null), v = () => {
    l.current && c && s(!a);
  };
  gt(() => {
    const p = (m) => u(m.matches), h = window.matchMedia("(max-width: 800px)");
    return h.addEventListener("change", p), u(h.matches), () => h.removeEventListener("change", p);
  }, []), gt(() => {
    l.current && s(!c);
  }, [c]), gt(() => {
    l.current && (a ? l.current.style.transform = "translateX(0)" : l.current.style.transform = "translateX(-120vw)");
  }, [a]);
  const { attributesToRender: d } = Ry({
    facets: ["*"]
  });
  return gt(() => {
    f(d.map((p) => vS(p)));
  }, [d]), /* @__PURE__ */ G.jsx(Qd.Provider, { value: { facets: o, setFacets: f }, children: /* @__PURE__ */ G.jsx(lS, { children: /* @__PURE__ */ G.jsxs("div", { className: "search", children: [
    /* @__PURE__ */ G.jsx(
      vy,
      {
        attributesToSnippet: ["texte:75"],
        hitsPerPage: 20
      }
    ),
    /* @__PURE__ */ G.jsxs("div", { className: "leftPanel", children: [
      /* @__PURE__ */ G.jsxs(Li, { header: ce.search[e], children: [
        /* @__PURE__ */ G.jsx(
          "button",
          {
            className: "filterButton",
            onClick: () => v(),
            children: /* @__PURE__ */ G.jsx(N_, {})
          }
        ),
        /* @__PURE__ */ G.jsx(
          N1,
          {
            translations: { submitButtonTitle: ce.searchHere[e] }
          }
        )
      ] }),
      o.map((p) => /* @__PURE__ */ G.jsx(Li, { header: p.displayLabel, children: /* @__PURE__ */ G.jsx(
        S1,
        {
          attribute: p.value
        }
      ) }, p.value)),
      /* @__PURE__ */ G.jsx("div", { className: "filters", ref: l, children: t.sortFields ? /* @__PURE__ */ G.jsx(Li, { header: ce.sort[e], children: /* @__PURE__ */ G.jsx(
        W1,
        {
          items: t.sortFields
        }
      ) }) : null })
    ] }),
    /* @__PURE__ */ G.jsxs("div", { className: "mainPanel", children: [
      /* @__PURE__ */ G.jsx(
        dS,
        {
          locale: e
        }
      ),
      /* @__PURE__ */ G.jsx(
        Q1,
        {
          locale: e,
          hitConfig: t,
          onHitClick: r,
          hitWrapperComponent: n,
          getHitWrapperProps: i
        }
      )
    ] })
  ] }) }) });
}, mS = (e) => e.year && e.month && e.day ? /* @__PURE__ */ G.jsx("span", { children: new Date(e.year, e.month - 1, e.day).toISOString().slice(0, 10) }) : /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx("em", { children: "?" }) }), Ui = (e, t, r) => {
  const n = t.split(".");
  let i = e;
  for (; n.length > 0; )
    if (i[n[0]])
      i = i[n[0]], n.shift();
    else {
      i = null;
      break;
    }
  return i ? /* @__PURE__ */ G.jsx(
    Yr,
    {
      attribute: [t],
      hit: e
    }
  ) : /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx("em", { children: ce.emptyField[r] }) });
}, yt = (e, t, r) => e[t] ? /* @__PURE__ */ G.jsx(
  Yr,
  {
    attribute: [t],
    hit: e
  }
) : /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx("em", { children: ce.emptyField[r] }) });
var Kd = {}, Yd = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Yd);
var Gr = Yd.exports, Wi = { exports: {} }, Bi = { exports: {} }, Nc;
function li() {
  return Nc || (Nc = 1, function(e) {
    function t(r) {
      "@babel/helpers - typeof";
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Bi)), Bi.exports;
}
var Dc;
function gS() {
  return Dc || (Dc = 1, function(e) {
    var t = li().default;
    function r() {
      e.exports = r = function() {
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
      var n = {}, i = Object.prototype, a = i.hasOwnProperty, s = Object.defineProperty || function(U, T, C) {
        U[T] = C.value;
      }, c = typeof Symbol == "function" ? Symbol : {}, u = c.iterator || "@@iterator", o = c.asyncIterator || "@@asyncIterator", f = c.toStringTag || "@@toStringTag";
      function l(U, T, C) {
        return Object.defineProperty(U, T, {
          value: C,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), U[T];
      }
      try {
        l({}, "");
      } catch {
        l = function(C, F, Q) {
          return C[F] = Q;
        };
      }
      function v(U, T, C, F) {
        var Q = T && T.prototype instanceof h ? T : h, E = Object.create(Q.prototype), M = new k(F || []);
        return s(E, "_invoke", {
          value: R(U, C, M)
        }), E;
      }
      function d(U, T, C) {
        try {
          return {
            type: "normal",
            arg: U.call(T, C)
          };
        } catch (F) {
          return {
            type: "throw",
            arg: F
          };
        }
      }
      n.wrap = v;
      var p = {};
      function h() {
      }
      function m() {
      }
      function g() {
      }
      var _ = {};
      l(_, u, function() {
        return this;
      });
      var w = Object.getPrototypeOf, b = w && w(w(A([])));
      b && b !== i && a.call(b, u) && (_ = b);
      var y = g.prototype = h.prototype = Object.create(_);
      function j(U) {
        ["next", "throw", "return"].forEach(function(T) {
          l(U, T, function(C) {
            return this._invoke(T, C);
          });
        });
      }
      function $(U, T) {
        function C(Q, E, M, D) {
          var I = d(U[Q], U, E);
          if (I.type !== "throw") {
            var H = I.arg, W = H.value;
            return W && t(W) == "object" && a.call(W, "__await") ? T.resolve(W.__await).then(function(O) {
              C("next", O, M, D);
            }, function(O) {
              C("throw", O, M, D);
            }) : T.resolve(W).then(function(O) {
              H.value = O, M(H);
            }, function(O) {
              return C("throw", O, M, D);
            });
          }
          D(I.arg);
        }
        var F;
        s(this, "_invoke", {
          value: function(E, M) {
            function D() {
              return new T(function(I, H) {
                C(E, M, I, H);
              });
            }
            return F = F ? F.then(D, D) : D();
          }
        });
      }
      function R(U, T, C) {
        var F = "suspendedStart";
        return function(Q, E) {
          if (F === "executing")
            throw new Error("Generator is already running");
          if (F === "completed") {
            if (Q === "throw")
              throw E;
            return re();
          }
          for (C.method = Q, C.arg = E; ; ) {
            var M = C.delegate;
            if (M) {
              var D = q(M, C);
              if (D) {
                if (D === p)
                  continue;
                return D;
              }
            }
            if (C.method === "next")
              C.sent = C._sent = C.arg;
            else if (C.method === "throw") {
              if (F === "suspendedStart")
                throw F = "completed", C.arg;
              C.dispatchException(C.arg);
            } else
              C.method === "return" && C.abrupt("return", C.arg);
            F = "executing";
            var I = d(U, T, C);
            if (I.type === "normal") {
              if (F = C.done ? "completed" : "suspendedYield", I.arg === p)
                continue;
              return {
                value: I.arg,
                done: C.done
              };
            }
            I.type === "throw" && (F = "completed", C.method = "throw", C.arg = I.arg);
          }
        };
      }
      function q(U, T) {
        var C = T.method, F = U.iterator[C];
        if (F === void 0)
          return T.delegate = null, C === "throw" && U.iterator.return && (T.method = "return", T.arg = void 0, q(U, T), T.method === "throw") || C !== "return" && (T.method = "throw", T.arg = new TypeError("The iterator does not provide a '" + C + "' method")), p;
        var Q = d(F, U.iterator, T.arg);
        if (Q.type === "throw")
          return T.method = "throw", T.arg = Q.arg, T.delegate = null, p;
        var E = Q.arg;
        return E ? E.done ? (T[U.resultName] = E.value, T.next = U.nextLoc, T.method !== "return" && (T.method = "next", T.arg = void 0), T.delegate = null, p) : E : (T.method = "throw", T.arg = new TypeError("iterator result is not an object"), T.delegate = null, p);
      }
      function V(U) {
        var T = {
          tryLoc: U[0]
        };
        1 in U && (T.catchLoc = U[1]), 2 in U && (T.finallyLoc = U[2], T.afterLoc = U[3]), this.tryEntries.push(T);
      }
      function L(U) {
        var T = U.completion || {};
        T.type = "normal", delete T.arg, U.completion = T;
      }
      function k(U) {
        this.tryEntries = [{
          tryLoc: "root"
        }], U.forEach(V, this), this.reset(!0);
      }
      function A(U) {
        if (U) {
          var T = U[u];
          if (T)
            return T.call(U);
          if (typeof U.next == "function")
            return U;
          if (!isNaN(U.length)) {
            var C = -1, F = function Q() {
              for (; ++C < U.length; )
                if (a.call(U, C))
                  return Q.value = U[C], Q.done = !1, Q;
              return Q.value = void 0, Q.done = !0, Q;
            };
            return F.next = F;
          }
        }
        return {
          next: re
        };
      }
      function re() {
        return {
          value: void 0,
          done: !0
        };
      }
      return m.prototype = g, s(y, "constructor", {
        value: g,
        configurable: !0
      }), s(g, "constructor", {
        value: m,
        configurable: !0
      }), m.displayName = l(g, f, "GeneratorFunction"), n.isGeneratorFunction = function(U) {
        var T = typeof U == "function" && U.constructor;
        return !!T && (T === m || (T.displayName || T.name) === "GeneratorFunction");
      }, n.mark = function(U) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(U, g) : (U.__proto__ = g, l(U, f, "GeneratorFunction")), U.prototype = Object.create(y), U;
      }, n.awrap = function(U) {
        return {
          __await: U
        };
      }, j($.prototype), l($.prototype, o, function() {
        return this;
      }), n.AsyncIterator = $, n.async = function(U, T, C, F, Q) {
        Q === void 0 && (Q = Promise);
        var E = new $(v(U, T, C, F), Q);
        return n.isGeneratorFunction(T) ? E : E.next().then(function(M) {
          return M.done ? M.value : E.next();
        });
      }, j(y), l(y, f, "Generator"), l(y, u, function() {
        return this;
      }), l(y, "toString", function() {
        return "[object Generator]";
      }), n.keys = function(U) {
        var T = Object(U), C = [];
        for (var F in T)
          C.push(F);
        return C.reverse(), function Q() {
          for (; C.length; ) {
            var E = C.pop();
            if (E in T)
              return Q.value = E, Q.done = !1, Q;
          }
          return Q.done = !0, Q;
        };
      }, n.values = A, k.prototype = {
        constructor: k,
        reset: function(T) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !T)
            for (var C in this)
              C.charAt(0) === "t" && a.call(this, C) && !isNaN(+C.slice(1)) && (this[C] = void 0);
        },
        stop: function() {
          this.done = !0;
          var T = this.tryEntries[0].completion;
          if (T.type === "throw")
            throw T.arg;
          return this.rval;
        },
        dispatchException: function(T) {
          if (this.done)
            throw T;
          var C = this;
          function F(H, W) {
            return M.type = "throw", M.arg = T, C.next = H, W && (C.method = "next", C.arg = void 0), !!W;
          }
          for (var Q = this.tryEntries.length - 1; Q >= 0; --Q) {
            var E = this.tryEntries[Q], M = E.completion;
            if (E.tryLoc === "root")
              return F("end");
            if (E.tryLoc <= this.prev) {
              var D = a.call(E, "catchLoc"), I = a.call(E, "finallyLoc");
              if (D && I) {
                if (this.prev < E.catchLoc)
                  return F(E.catchLoc, !0);
                if (this.prev < E.finallyLoc)
                  return F(E.finallyLoc);
              } else if (D) {
                if (this.prev < E.catchLoc)
                  return F(E.catchLoc, !0);
              } else {
                if (!I)
                  throw new Error("try statement without catch or finally");
                if (this.prev < E.finallyLoc)
                  return F(E.finallyLoc);
              }
            }
          }
        },
        abrupt: function(T, C) {
          for (var F = this.tryEntries.length - 1; F >= 0; --F) {
            var Q = this.tryEntries[F];
            if (Q.tryLoc <= this.prev && a.call(Q, "finallyLoc") && this.prev < Q.finallyLoc) {
              var E = Q;
              break;
            }
          }
          E && (T === "break" || T === "continue") && E.tryLoc <= C && C <= E.finallyLoc && (E = null);
          var M = E ? E.completion : {};
          return M.type = T, M.arg = C, E ? (this.method = "next", this.next = E.finallyLoc, p) : this.complete(M);
        },
        complete: function(T, C) {
          if (T.type === "throw")
            throw T.arg;
          return T.type === "break" || T.type === "continue" ? this.next = T.arg : T.type === "return" ? (this.rval = this.arg = T.arg, this.method = "return", this.next = "end") : T.type === "normal" && C && (this.next = C), p;
        },
        finish: function(T) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var F = this.tryEntries[C];
            if (F.finallyLoc === T)
              return this.complete(F.completion, F.afterLoc), L(F), p;
          }
        },
        catch: function(T) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var F = this.tryEntries[C];
            if (F.tryLoc === T) {
              var Q = F.completion;
              if (Q.type === "throw") {
                var E = Q.arg;
                L(F);
              }
              return E;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(T, C, F) {
          return this.delegate = {
            iterator: A(T),
            resultName: C,
            nextLoc: F
          }, this.method === "next" && (this.arg = void 0), p;
        }
      }, n;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Wi)), Wi.exports;
}
var zi, kc;
function Gd() {
  if (kc)
    return zi;
  kc = 1;
  var e = gS()();
  zi = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
  }
  return zi;
}
var Vi = { exports: {} }, Mc;
function Jd() {
  return Mc || (Mc = 1, function(e) {
    function t(n, i, a, s, c, u, o) {
      try {
        var f = n[u](o), l = f.value;
      } catch (v) {
        a(v);
        return;
      }
      f.done ? i(l) : Promise.resolve(l).then(s, c);
    }
    function r(n) {
      return function() {
        var i = this, a = arguments;
        return new Promise(function(s, c) {
          var u = n.apply(i, a);
          function o(l) {
            t(u, s, c, o, f, "next", l);
          }
          function f(l) {
            t(u, s, c, o, f, "throw", l);
          }
          o(void 0);
        });
      };
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vi)), Vi.exports;
}
var Qi = { exports: {} }, Hc;
function Jr() {
  return Hc || (Hc = 1, function(e) {
    function t(r, n) {
      if (!(r instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Qi)), Qi.exports;
}
var Ki = { exports: {} }, Yi = { exports: {} }, Gi = { exports: {} }, Lc;
function yS() {
  return Lc || (Lc = 1, function(e) {
    var t = li().default;
    function r(n, i) {
      if (t(n) !== "object" || n === null)
        return n;
      var a = n[Symbol.toPrimitive];
      if (a !== void 0) {
        var s = a.call(n, i || "default");
        if (t(s) !== "object")
          return s;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(n);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Gi)), Gi.exports;
}
var qc;
function Xd() {
  return qc || (qc = 1, function(e) {
    var t = li().default, r = yS();
    function n(i) {
      var a = r(i, "string");
      return t(a) === "symbol" ? a : String(a);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Yi)), Yi.exports;
}
var Uc;
function Xr() {
  return Uc || (Uc = 1, function(e) {
    var t = Xd();
    function r(i, a) {
      for (var s = 0; s < a.length; s++) {
        var c = a[s];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, t(c.key), c);
      }
    }
    function n(i, a, s) {
      return a && r(i.prototype, a), s && r(i, s), Object.defineProperty(i, "prototype", {
        writable: !1
      }), i;
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ki)), Ki.exports;
}
var or = {}, Wc;
function bS() {
  if (Wc)
    return or;
  Wc = 1;
  var e = Gr;
  Object.defineProperty(or, "__esModule", {
    value: !0
  }), or.Configuration = void 0;
  var t = e(Jr()), r = e(Xr()), n = /* @__PURE__ */ function() {
    function i() {
      var a, s, c, u, o, f, l, v, d, p, h, m, g, _ = this, w, b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (0, t.default)(this, i), this.server = b.server || {
        nodes: [{
          host: "localhost",
          port: "8108",
          path: "",
          protocol: "http"
        }]
      }, this.server.cacheSearchResultsForSeconds = (a = this.server.cacheSearchResultsForSeconds) !== null && a !== void 0 ? a : 2 * 60, this.additionalSearchParameters = (s = b.additionalSearchParameters) !== null && s !== void 0 ? s : {}, this.additionalSearchParameters.query_by = (c = (u = this.additionalSearchParameters.queryBy) !== null && u !== void 0 ? u : this.additionalSearchParameters.query_by) !== null && c !== void 0 ? c : "", this.additionalSearchParameters.preset = (o = (f = this.additionalSearchParameters.preset) !== null && f !== void 0 ? f : this.additionalSearchParameters.preset) !== null && o !== void 0 ? o : "", this.additionalSearchParameters.sort_by = (l = (v = this.additionalSearchParameters.sortBy) !== null && v !== void 0 ? v : this.additionalSearchParameters.sort_by) !== null && l !== void 0 ? l : "", this.additionalSearchParameters.highlight_full_fields = (d = (p = this.additionalSearchParameters.highlightFullFields) !== null && p !== void 0 ? p : this.additionalSearchParameters.highlight_full_fields) !== null && d !== void 0 ? d : this.additionalSearchParameters.query_by, this.geoLocationField = (h = b.geoLocationField) !== null && h !== void 0 ? h : "_geoloc", this.facetableFieldsWithSpecialCharacters = (m = b.facetableFieldsWithSpecialCharacters) !== null && m !== void 0 ? m : [], this.collectionSpecificSearchParameters = (g = b.collectionSpecificSearchParameters) !== null && g !== void 0 ? g : {}, Object.keys(this.collectionSpecificSearchParameters).forEach(function(y) {
        var j, $, R, q, V, L, k = _.collectionSpecificSearchParameters[y];
        k.query_by = (j = k.queryBy) !== null && j !== void 0 ? j : k.query_by, k.preset = ($ = k.preset) !== null && $ !== void 0 ? $ : k.preset, k.sort_by = (R = k.sortBy) !== null && R !== void 0 ? R : k.sort_by, k.highlight_full_fields = (q = (V = (L = k.highlightFullFields) !== null && L !== void 0 ? L : k.highlight_full_fields) !== null && V !== void 0 ? V : _.additionalSearchParameters.highlight_full_fields) !== null && q !== void 0 ? q : k.query_by, Object.keys(k).forEach(function(A) {
          return k[A] === void 0 ? delete k[A] : {};
        });
      }), this.renderingContent = b.renderingContent, this.flattenGroupedHits = (w = b.flattenGroupedHits) !== null && w !== void 0 ? w : !0;
    }
    return (0, r.default)(i, [{
      key: "validate",
      value: function() {
        if ((this.additionalSearchParameters.queryBy || Object.values(this.collectionSpecificSearchParameters).some(function(s) {
          return s.queryBy;
        })) && console.warn("[typesense-instantsearch-adapter] Please use snake_cased versions of parameters in additionalSearchParameters instead of camelCased parameters. For example: Use query_by instead of queryBy. camelCased parameters will be deprecated in a future version. We're making this change so that parameter names are identical to the ones sent to Typesense (which are all snake_cased), and to also keep the types for these parameters in sync with the types defined in typesense-js."), this.additionalSearchParameters.query_by.length === 0 && this.additionalSearchParameters.preset.length === 0 && (Object.keys(this.collectionSpecificSearchParameters).length === 0 || Object.values(this.collectionSpecificSearchParameters).some(function(s) {
          return (s.query_by || "").length === 0 && (s.preset || "").length === 0;
        })))
          throw new Error("[typesense-instantsearch-adapter] Missing parameter: One of additionalSearchParameters.query_by or additionalSearchParameters.preset needs to be set, or all collectionSpecificSearchParameters need to have either .query_by or .preset set.");
      }
    }]), i;
  }();
  return or.Configuration = n, or;
}
var rt = {}, fn = {}, dn = {}, Ji = { exports: {} }, Bc;
function wS() {
  return Bc || (Bc = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r() : t.log = r();
    })(P, function() {
      var t = function() {
      }, r = "undefined", n = typeof window !== r && typeof window.navigator !== r && /Trident\/|MSIE /.test(window.navigator.userAgent), i = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], a = {}, s = null;
      function c(h, m) {
        var g = h[m];
        if (typeof g.bind == "function")
          return g.bind(h);
        try {
          return Function.prototype.bind.call(g, h);
        } catch {
          return function() {
            return Function.prototype.apply.apply(g, [h, arguments]);
          };
        }
      }
      function u() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function o(h) {
        return h === "debug" && (h = "log"), typeof console === r ? !1 : h === "trace" && n ? u : console[h] !== void 0 ? c(console, h) : console.log !== void 0 ? c(console, "log") : t;
      }
      function f() {
        for (var h = this.getLevel(), m = 0; m < i.length; m++) {
          var g = i[m];
          this[g] = m < h ? t : this.methodFactory(g, h, this.name);
        }
        if (this.log = this.debug, typeof console === r && h < this.levels.SILENT)
          return "No console available for logging";
      }
      function l(h) {
        return function() {
          typeof console !== r && (f.call(this), this[h].apply(this, arguments));
        };
      }
      function v(h, m, g) {
        return o(h) || l.apply(this, arguments);
      }
      function d(h, m) {
        var g = this, _, w, b, y = "loglevel";
        typeof h == "string" ? y += ":" + h : typeof h == "symbol" && (y = void 0);
        function j(L) {
          var k = (i[L] || "silent").toUpperCase();
          if (!(typeof window === r || !y)) {
            try {
              window.localStorage[y] = k;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(y) + "=" + k + ";";
            } catch {
            }
          }
        }
        function $() {
          var L;
          if (!(typeof window === r || !y)) {
            try {
              L = window.localStorage[y];
            } catch {
            }
            if (typeof L === r)
              try {
                var k = window.document.cookie, A = encodeURIComponent(y), re = k.indexOf(A + "=");
                re !== -1 && (L = /^([^;]+)/.exec(
                  k.slice(re + A.length + 1)
                )[1]);
              } catch {
              }
            return g.levels[L] === void 0 && (L = void 0), L;
          }
        }
        function R() {
          if (!(typeof window === r || !y)) {
            try {
              window.localStorage.removeItem(y);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(y) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function q(L) {
          var k = L;
          if (typeof k == "string" && g.levels[k.toUpperCase()] !== void 0 && (k = g.levels[k.toUpperCase()]), typeof k == "number" && k >= 0 && k <= g.levels.SILENT)
            return k;
          throw new TypeError("log.setLevel() called with invalid level: " + L);
        }
        g.name = h, g.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, g.methodFactory = m || v, g.getLevel = function() {
          return b ?? w ?? _;
        }, g.setLevel = function(L, k) {
          return b = q(L), k !== !1 && j(b), f.call(g);
        }, g.setDefaultLevel = function(L) {
          w = q(L), $() || g.setLevel(L, !1);
        }, g.resetLevel = function() {
          b = null, R(), f.call(g);
        }, g.enableAll = function(L) {
          g.setLevel(g.levels.TRACE, L);
        }, g.disableAll = function(L) {
          g.setLevel(g.levels.SILENT, L);
        }, g.rebuild = function() {
          if (s !== g && (_ = q(s.getLevel())), f.call(g), s === g)
            for (var L in a)
              a[L].rebuild();
        }, _ = q(
          s ? s.getLevel() : "WARN"
        );
        var V = $();
        V != null && (b = q(V)), f.call(g);
      }
      s = new d(), s.getLogger = function(m) {
        if (typeof m != "symbol" && typeof m != "string" || m === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var g = a[m];
        return g || (g = a[m] = new d(
          m,
          s.methodFactory
        )), g;
      };
      var p = typeof window !== r ? window.log : void 0;
      return s.noConflict = function() {
        return typeof window !== r && window.log === s && (window.log = p), s;
      }, s.getLoggers = function() {
        return a;
      }, s.default = s, s;
    });
  }(Ji)), Ji.exports;
}
var xe = {}, hn = {}, pn = {}, zc;
function Je() {
  if (zc)
    return pn;
  zc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
        a.__proto__ = s;
      } || function(a, s) {
        for (var c in s)
          Object.prototype.hasOwnProperty.call(s, c) && (a[c] = s[c]);
      }, r(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      r(n, i);
      function a() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (a.prototype = i.prototype, new a());
    };
  }();
  Object.defineProperty(pn, "__esModule", { value: !0 });
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var a = this.constructor, s = r.call(this, i) || this;
        return s.name = a.name, Object.setPrototypeOf(s, a.prototype), s;
      }
      return n;
    }(Error)
  );
  return pn.default = t, pn;
}
var Vc;
function _S() {
  if (Vc)
    return hn;
  Vc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(hn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return hn.default = n, hn;
}
var vn = {}, Qc;
function SS() {
  if (Qc)
    return vn;
  Qc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(vn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return vn.default = n, vn;
}
var mn = {}, Kc;
function OS() {
  if (Kc)
    return mn;
  Kc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(mn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return mn.default = n, mn;
}
var gn = {}, Yc;
function RS() {
  if (Yc)
    return gn;
  Yc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(gn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return gn.default = n, gn;
}
var yn = {}, Gc;
function PS() {
  if (Gc)
    return yn;
  Gc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(yn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return yn.default = n, yn;
}
var bn = {}, Jc;
function ES() {
  if (Jc)
    return bn;
  Jc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(bn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return bn.default = n, bn;
}
var wn = {}, Xc;
function xS() {
  if (Xc)
    return wn;
  Xc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(wn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return wn.default = n, wn;
}
var _n = {}, Zc;
function jS() {
  if (Zc)
    return _n;
  Zc = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(_n, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return a;
    }(r.default)
  );
  return _n.default = n, _n;
}
var Sn = {}, el;
function TS() {
  if (el)
    return Sn;
  el = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var i = function(a, s) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
        c.__proto__ = u;
      } || function(c, u) {
        for (var o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (c[o] = u[o]);
      }, i(a, s);
    };
    return function(a, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      i(a, s);
      function c() {
        this.constructor = a;
      }
      a.prototype = s === null ? Object.create(s) : (c.prototype = s.prototype, new c());
    };
  }(), t = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 });
  var r = t(Je()), n = (
    /** @class */
    function(i) {
      e(a, i);
      function a(s, c) {
        var u = i.call(this, s) || this;
        return u.importResults = c, u;
      }
      return a;
    }(r.default)
  );
  return Sn.default = n, Sn;
}
var tl;
function Zr() {
  if (tl)
    return xe;
  tl = 1;
  var e = P && P.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.ImportError = xe.TypesenseError = xe.ServerError = xe.RequestUnauthorized = xe.RequestMalformed = xe.ObjectUnprocessable = xe.ObjectNotFound = xe.ObjectAlreadyExists = xe.MissingConfigurationError = xe.HTTPError = void 0;
  var t = e(_S());
  xe.HTTPError = t.default;
  var r = e(SS());
  xe.MissingConfigurationError = r.default;
  var n = e(OS());
  xe.ObjectAlreadyExists = n.default;
  var i = e(RS());
  xe.ObjectNotFound = i.default;
  var a = e(PS());
  xe.ObjectUnprocessable = a.default;
  var s = e(ES());
  xe.RequestMalformed = s.default;
  var c = e(xS());
  xe.RequestUnauthorized = c.default;
  var u = e(jS());
  xe.ServerError = u.default;
  var o = e(TS());
  xe.ImportError = o.default;
  var f = e(Je());
  return xe.TypesenseError = f.default, xe;
}
var rl;
function Zd() {
  if (rl)
    return dn;
  rl = 1;
  var e = P && P.__assign || function() {
    return e = Object.assign || function(c) {
      for (var u, o = 1, f = arguments.length; o < f; o++) {
        u = arguments[o];
        for (var l in u)
          Object.prototype.hasOwnProperty.call(u, l) && (c[l] = u[l]);
      }
      return c;
    }, e.apply(this, arguments);
  }, t = P && P.__createBinding || (Object.create ? function(c, u, o, f) {
    f === void 0 && (f = o);
    var l = Object.getOwnPropertyDescriptor(u, o);
    (!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return u[o];
    } }), Object.defineProperty(c, f, l);
  } : function(c, u, o, f) {
    f === void 0 && (f = o), c[f] = u[o];
  }), r = P && P.__setModuleDefault || (Object.create ? function(c, u) {
    Object.defineProperty(c, "default", { enumerable: !0, value: u });
  } : function(c, u) {
    c.default = u;
  }), n = P && P.__importStar || function(c) {
    if (c && c.__esModule)
      return c;
    var u = {};
    if (c != null)
      for (var o in c)
        o !== "default" && Object.prototype.hasOwnProperty.call(c, o) && t(u, c, o);
    return r(u, c), u;
  };
  Object.defineProperty(dn, "__esModule", { value: !0 });
  var i = n(wS()), a = Zr(), s = (
    /** @class */
    function() {
      function c(u) {
        var o = this;
        this.nodes = u.nodes || [], this.nodes = this.nodes.map(function(f) {
          return o.setDefaultPathInNode(f);
        }).map(function(f) {
          return o.setDefaultPortInNode(f);
        }).map(function(f) {
          return e({}, f);
        }), u.randomizeNodes == null && (u.randomizeNodes = !0), u.randomizeNodes === !0 && this.shuffleArray(this.nodes), this.nearestNode = u.nearestNode, this.nearestNode = this.setDefaultPathInNode(this.nearestNode), this.nearestNode = this.setDefaultPortInNode(this.nearestNode), this.connectionTimeoutSeconds = u.connectionTimeoutSeconds || u.timeoutSeconds || 5, this.healthcheckIntervalSeconds = u.healthcheckIntervalSeconds || 60, this.numRetries = u.numRetries || this.nodes.length + (this.nearestNode == null ? 0 : 1) || 3, this.retryIntervalSeconds = u.retryIntervalSeconds || 0.1, this.apiKey = u.apiKey, this.sendApiKeyAsQueryParam = u.sendApiKeyAsQueryParam, this.cacheSearchResultsForSeconds = u.cacheSearchResultsForSeconds || 0, this.useServerSideSearchCache = u.useServerSideSearchCache || !1, this.logger = u.logger || i, this.logLevel = u.logLevel || "warn", this.logger.setLevel(this.logLevel), this.additionalHeaders = u.additionalHeaders, this.showDeprecationWarnings(u), this.validate();
      }
      return c.prototype.validate = function() {
        if (this.nodes == null || this.nodes.length === 0 || this.validateNodes())
          throw new a.MissingConfigurationError("Ensure that nodes[].protocol, nodes[].host and nodes[].port are set");
        if (this.nearestNode != null && this.isNodeMissingAnyParameters(this.nearestNode))
          throw new a.MissingConfigurationError("Ensure that nearestNodes.protocol, nearestNodes.host and nearestNodes.port are set");
        if (this.apiKey == null)
          throw new a.MissingConfigurationError("Ensure that apiKey is set");
        return !0;
      }, c.prototype.validateNodes = function() {
        var u = this;
        return this.nodes.some(function(o) {
          return u.isNodeMissingAnyParameters(o);
        });
      }, c.prototype.isNodeMissingAnyParameters = function(u) {
        return !["protocol", "host", "port", "path"].every(function(o) {
          return u.hasOwnProperty(o);
        }) && u.url == null;
      }, c.prototype.setDefaultPathInNode = function(u) {
        return u != null && !u.hasOwnProperty("path") && (u.path = ""), u;
      }, c.prototype.setDefaultPortInNode = function(u) {
        if (u != null && !u.hasOwnProperty("port") && u.hasOwnProperty("protocol"))
          switch (u.protocol) {
            case "https":
              u.port = 443;
              break;
            case "http":
              u.port = 80;
              break;
          }
        return u;
      }, c.prototype.showDeprecationWarnings = function(u) {
        u.timeoutSeconds && this.logger.warn("Deprecation warning: timeoutSeconds is now renamed to connectionTimeoutSeconds"), u.masterNode && this.logger.warn("Deprecation warning: masterNode is now consolidated to nodes, starting with Typesense Server v0.12"), u.readReplicaNodes && this.logger.warn("Deprecation warning: readReplicaNodes is now consolidated to nodes, starting with Typesense Server v0.12");
      }, c.prototype.shuffleArray = function(u) {
        for (var o, f = u.length - 1; f > 0; f--) {
          var l = Math.floor(Math.random() * (f + 1));
          o = [u[l], u[f]], u[f] = o[0], u[l] = o[1];
        }
      }, c;
    }()
  );
  return dn.default = s, dn;
}
var On = {}, Rn = { exports: {} }, Xi, nl;
function eh() {
  return nl || (nl = 1, Xi = function(t, r) {
    return function() {
      for (var i = new Array(arguments.length), a = 0; a < i.length; a++)
        i[a] = arguments[a];
      return t.apply(r, i);
    };
  }), Xi;
}
var Zi, il;
function We() {
  if (il)
    return Zi;
  il = 1;
  var e = eh(), t = Object.prototype.toString;
  function r(R) {
    return Array.isArray(R);
  }
  function n(R) {
    return typeof R > "u";
  }
  function i(R) {
    return R !== null && !n(R) && R.constructor !== null && !n(R.constructor) && typeof R.constructor.isBuffer == "function" && R.constructor.isBuffer(R);
  }
  function a(R) {
    return t.call(R) === "[object ArrayBuffer]";
  }
  function s(R) {
    return t.call(R) === "[object FormData]";
  }
  function c(R) {
    var q;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? q = ArrayBuffer.isView(R) : q = R && R.buffer && a(R.buffer), q;
  }
  function u(R) {
    return typeof R == "string";
  }
  function o(R) {
    return typeof R == "number";
  }
  function f(R) {
    return R !== null && typeof R == "object";
  }
  function l(R) {
    if (t.call(R) !== "[object Object]")
      return !1;
    var q = Object.getPrototypeOf(R);
    return q === null || q === Object.prototype;
  }
  function v(R) {
    return t.call(R) === "[object Date]";
  }
  function d(R) {
    return t.call(R) === "[object File]";
  }
  function p(R) {
    return t.call(R) === "[object Blob]";
  }
  function h(R) {
    return t.call(R) === "[object Function]";
  }
  function m(R) {
    return f(R) && h(R.pipe);
  }
  function g(R) {
    return t.call(R) === "[object URLSearchParams]";
  }
  function _(R) {
    return R.trim ? R.trim() : R.replace(/^\s+|\s+$/g, "");
  }
  function w() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
  }
  function b(R, q) {
    if (!(R === null || typeof R > "u"))
      if (typeof R != "object" && (R = [R]), r(R))
        for (var V = 0, L = R.length; V < L; V++)
          q.call(null, R[V], V, R);
      else
        for (var k in R)
          Object.prototype.hasOwnProperty.call(R, k) && q.call(null, R[k], k, R);
  }
  function y() {
    var R = {};
    function q(k, A) {
      l(R[A]) && l(k) ? R[A] = y(R[A], k) : l(k) ? R[A] = y({}, k) : r(k) ? R[A] = k.slice() : R[A] = k;
    }
    for (var V = 0, L = arguments.length; V < L; V++)
      b(arguments[V], q);
    return R;
  }
  function j(R, q, V) {
    return b(q, function(k, A) {
      V && typeof k == "function" ? R[A] = e(k, V) : R[A] = k;
    }), R;
  }
  function $(R) {
    return R.charCodeAt(0) === 65279 && (R = R.slice(1)), R;
  }
  return Zi = {
    isArray: r,
    isArrayBuffer: a,
    isBuffer: i,
    isFormData: s,
    isArrayBufferView: c,
    isString: u,
    isNumber: o,
    isObject: f,
    isPlainObject: l,
    isUndefined: n,
    isDate: v,
    isFile: d,
    isBlob: p,
    isFunction: h,
    isStream: m,
    isURLSearchParams: g,
    isStandardBrowserEnv: w,
    forEach: b,
    merge: y,
    extend: j,
    trim: _,
    stripBOM: $
  }, Zi;
}
var ea, al;
function th() {
  if (al)
    return ea;
  al = 1;
  var e = We();
  function t(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  return ea = function(n, i, a) {
    if (!i)
      return n;
    var s;
    if (a)
      s = a(i);
    else if (e.isURLSearchParams(i))
      s = i.toString();
    else {
      var c = [];
      e.forEach(i, function(f, l) {
        f === null || typeof f > "u" || (e.isArray(f) ? l = l + "[]" : f = [f], e.forEach(f, function(d) {
          e.isDate(d) ? d = d.toISOString() : e.isObject(d) && (d = JSON.stringify(d)), c.push(t(l) + "=" + t(d));
        }));
      }), s = c.join("&");
    }
    if (s) {
      var u = n.indexOf("#");
      u !== -1 && (n = n.slice(0, u)), n += (n.indexOf("?") === -1 ? "?" : "&") + s;
    }
    return n;
  }, ea;
}
var ta, ol;
function CS() {
  if (ol)
    return ta;
  ol = 1;
  var e = We();
  function t() {
    this.handlers = [];
  }
  return t.prototype.use = function(n, i, a) {
    return this.handlers.push({
      fulfilled: n,
      rejected: i,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1;
  }, t.prototype.eject = function(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }, t.prototype.forEach = function(n) {
    e.forEach(this.handlers, function(a) {
      a !== null && n(a);
    });
  }, ta = t, ta;
}
var ra, sl;
function AS() {
  if (sl)
    return ra;
  sl = 1;
  var e = We();
  return ra = function(r, n) {
    e.forEach(r, function(a, s) {
      s !== n && s.toUpperCase() === n.toUpperCase() && (r[n] = a, delete r[s]);
    });
  }, ra;
}
var na, ul;
function rh() {
  return ul || (ul = 1, na = function(t, r, n, i, a) {
    return t.config = r, n && (t.code = n), t.request = i, t.response = a, t.isAxiosError = !0, t.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }, t;
  }), na;
}
var ia, cl;
function nh() {
  return cl || (cl = 1, ia = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }), ia;
}
var aa, ll;
function ih() {
  if (ll)
    return aa;
  ll = 1;
  var e = rh();
  return aa = function(r, n, i, a, s) {
    var c = new Error(r);
    return e(c, n, i, a, s);
  }, aa;
}
var oa, fl;
function $S() {
  if (fl)
    return oa;
  fl = 1;
  var e = ih();
  return oa = function(r, n, i) {
    var a = i.config.validateStatus;
    !i.status || !a || a(i.status) ? r(i) : n(e(
      "Request failed with status code " + i.status,
      i.config,
      null,
      i.request,
      i
    ));
  }, oa;
}
var sa, dl;
function IS() {
  if (dl)
    return sa;
  dl = 1;
  var e = We();
  return sa = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    /* @__PURE__ */ function() {
      return {
        write: function(n, i, a, s, c, u) {
          var o = [];
          o.push(n + "=" + encodeURIComponent(i)), e.isNumber(a) && o.push("expires=" + new Date(a).toGMTString()), e.isString(s) && o.push("path=" + s), e.isString(c) && o.push("domain=" + c), u === !0 && o.push("secure"), document.cookie = o.join("; ");
        },
        read: function(n) {
          var i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove: function(n) {
          this.write(n, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), sa;
}
var ua, hl;
function FS() {
  return hl || (hl = 1, ua = function(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }), ua;
}
var ca, pl;
function NS() {
  return pl || (pl = 1, ca = function(t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }), ca;
}
var la, vl;
function DS() {
  if (vl)
    return la;
  vl = 1;
  var e = FS(), t = NS();
  return la = function(n, i) {
    return n && !e(i) ? t(n, i) : i;
  }, la;
}
var fa, ml;
function kS() {
  if (ml)
    return fa;
  ml = 1;
  var e = We(), t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return fa = function(n) {
    var i = {}, a, s, c;
    return n && e.forEach(n.split(`
`), function(o) {
      if (c = o.indexOf(":"), a = e.trim(o.substr(0, c)).toLowerCase(), s = e.trim(o.substr(c + 1)), a) {
        if (i[a] && t.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? i[a] = (i[a] ? i[a] : []).concat([s]) : i[a] = i[a] ? i[a] + ", " + s : s;
      }
    }), i;
  }, fa;
}
var da, gl;
function MS() {
  if (gl)
    return da;
  gl = 1;
  var e = We();
  return da = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), i;
      function a(s) {
        var c = s;
        return r && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
          href: n.href,
          protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
          host: n.host,
          search: n.search ? n.search.replace(/^\?/, "") : "",
          hash: n.hash ? n.hash.replace(/^#/, "") : "",
          hostname: n.hostname,
          port: n.port,
          pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        };
      }
      return i = a(window.location.href), function(c) {
        var u = e.isString(c) ? a(c) : c;
        return u.protocol === i.protocol && u.host === i.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return function() {
        return !0;
      };
    }()
  ), da;
}
var ha, yl;
function fi() {
  if (yl)
    return ha;
  yl = 1;
  function e(t) {
    this.message = t;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, ha = e, ha;
}
var pa, bl;
function wl() {
  if (bl)
    return pa;
  bl = 1;
  var e = We(), t = $S(), r = IS(), n = th(), i = DS(), a = kS(), s = MS(), c = ih(), u = nh(), o = fi();
  return pa = function(l) {
    return new Promise(function(d, p) {
      var h = l.data, m = l.headers, g = l.responseType, _;
      function w() {
        l.cancelToken && l.cancelToken.unsubscribe(_), l.signal && l.signal.removeEventListener("abort", _);
      }
      e.isFormData(h) && delete m["Content-Type"];
      var b = new XMLHttpRequest();
      if (l.auth) {
        var y = l.auth.username || "", j = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
        m.Authorization = "Basic " + btoa(y + ":" + j);
      }
      var $ = i(l.baseURL, l.url);
      b.open(l.method.toUpperCase(), n($, l.params, l.paramsSerializer), !0), b.timeout = l.timeout;
      function R() {
        if (b) {
          var V = "getAllResponseHeaders" in b ? a(b.getAllResponseHeaders()) : null, L = !g || g === "text" || g === "json" ? b.responseText : b.response, k = {
            data: L,
            status: b.status,
            statusText: b.statusText,
            headers: V,
            config: l,
            request: b
          };
          t(function(re) {
            d(re), w();
          }, function(re) {
            p(re), w();
          }, k), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = R : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(R);
      }, b.onabort = function() {
        b && (p(c("Request aborted", l, "ECONNABORTED", b)), b = null);
      }, b.onerror = function() {
        p(c("Network Error", l, null, b)), b = null;
      }, b.ontimeout = function() {
        var L = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded", k = l.transitional || u;
        l.timeoutErrorMessage && (L = l.timeoutErrorMessage), p(c(
          L,
          l,
          k.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          b
        )), b = null;
      }, e.isStandardBrowserEnv()) {
        var q = (l.withCredentials || s($)) && l.xsrfCookieName ? r.read(l.xsrfCookieName) : void 0;
        q && (m[l.xsrfHeaderName] = q);
      }
      "setRequestHeader" in b && e.forEach(m, function(L, k) {
        typeof h > "u" && k.toLowerCase() === "content-type" ? delete m[k] : b.setRequestHeader(k, L);
      }), e.isUndefined(l.withCredentials) || (b.withCredentials = !!l.withCredentials), g && g !== "json" && (b.responseType = l.responseType), typeof l.onDownloadProgress == "function" && b.addEventListener("progress", l.onDownloadProgress), typeof l.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", l.onUploadProgress), (l.cancelToken || l.signal) && (_ = function(V) {
        b && (p(!V || V && V.type ? new o("canceled") : V), b.abort(), b = null);
      }, l.cancelToken && l.cancelToken.subscribe(_), l.signal && (l.signal.aborted ? _() : l.signal.addEventListener("abort", _))), h || (h = null), b.send(h);
    });
  }, pa;
}
var va, _l;
function Rs() {
  if (_l)
    return va;
  _l = 1;
  var e = We(), t = AS(), r = rh(), n = nh(), i = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function a(o, f) {
    !e.isUndefined(o) && e.isUndefined(o["Content-Type"]) && (o["Content-Type"] = f);
  }
  function s() {
    var o;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (o = wl()), o;
  }
  function c(o, f, l) {
    if (e.isString(o))
      try {
        return (f || JSON.parse)(o), e.trim(o);
      } catch (v) {
        if (v.name !== "SyntaxError")
          throw v;
      }
    return (l || JSON.stringify)(o);
  }
  var u = {
    transitional: n,
    adapter: s(),
    transformRequest: [function(f, l) {
      return t(l, "Accept"), t(l, "Content-Type"), e.isFormData(f) || e.isArrayBuffer(f) || e.isBuffer(f) || e.isStream(f) || e.isFile(f) || e.isBlob(f) ? f : e.isArrayBufferView(f) ? f.buffer : e.isURLSearchParams(f) ? (a(l, "application/x-www-form-urlencoded;charset=utf-8"), f.toString()) : e.isObject(f) || l && l["Content-Type"] === "application/json" ? (a(l, "application/json"), c(f)) : f;
    }],
    transformResponse: [function(f) {
      var l = this.transitional || u.transitional, v = l && l.silentJSONParsing, d = l && l.forcedJSONParsing, p = !v && this.responseType === "json";
      if (p || d && e.isString(f) && f.length)
        try {
          return JSON.parse(f);
        } catch (h) {
          if (p)
            throw h.name === "SyntaxError" ? r(h, this, "E_JSON_PARSE") : h;
        }
      return f;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function(f) {
      return f >= 200 && f < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  return e.forEach(["delete", "get", "head"], function(f) {
    u.headers[f] = {};
  }), e.forEach(["post", "put", "patch"], function(f) {
    u.headers[f] = e.merge(i);
  }), va = u, va;
}
var ma, Sl;
function HS() {
  if (Sl)
    return ma;
  Sl = 1;
  var e = We(), t = Rs();
  return ma = function(n, i, a) {
    var s = this || t;
    return e.forEach(a, function(u) {
      n = u.call(s, n, i);
    }), n;
  }, ma;
}
var ga, Ol;
function ah() {
  return Ol || (Ol = 1, ga = function(t) {
    return !!(t && t.__CANCEL__);
  }), ga;
}
var ya, Rl;
function LS() {
  if (Rl)
    return ya;
  Rl = 1;
  var e = We(), t = HS(), r = ah(), n = Rs(), i = fi();
  function a(s) {
    if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
      throw new i("canceled");
  }
  return ya = function(c) {
    a(c), c.headers = c.headers || {}, c.data = t.call(
      c,
      c.data,
      c.headers,
      c.transformRequest
    ), c.headers = e.merge(
      c.headers.common || {},
      c.headers[c.method] || {},
      c.headers
    ), e.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(f) {
        delete c.headers[f];
      }
    );
    var u = c.adapter || n.adapter;
    return u(c).then(function(f) {
      return a(c), f.data = t.call(
        c,
        f.data,
        f.headers,
        c.transformResponse
      ), f;
    }, function(f) {
      return r(f) || (a(c), f && f.response && (f.response.data = t.call(
        c,
        f.response.data,
        f.response.headers,
        c.transformResponse
      ))), Promise.reject(f);
    });
  }, ya;
}
var ba, Pl;
function oh() {
  if (Pl)
    return ba;
  Pl = 1;
  var e = We();
  return ba = function(r, n) {
    n = n || {};
    var i = {};
    function a(l, v) {
      return e.isPlainObject(l) && e.isPlainObject(v) ? e.merge(l, v) : e.isPlainObject(v) ? e.merge({}, v) : e.isArray(v) ? v.slice() : v;
    }
    function s(l) {
      if (e.isUndefined(n[l])) {
        if (!e.isUndefined(r[l]))
          return a(void 0, r[l]);
      } else
        return a(r[l], n[l]);
    }
    function c(l) {
      if (!e.isUndefined(n[l]))
        return a(void 0, n[l]);
    }
    function u(l) {
      if (e.isUndefined(n[l])) {
        if (!e.isUndefined(r[l]))
          return a(void 0, r[l]);
      } else
        return a(void 0, n[l]);
    }
    function o(l) {
      if (l in n)
        return a(r[l], n[l]);
      if (l in r)
        return a(void 0, r[l]);
    }
    var f = {
      url: c,
      method: c,
      data: c,
      baseURL: u,
      transformRequest: u,
      transformResponse: u,
      paramsSerializer: u,
      timeout: u,
      timeoutMessage: u,
      withCredentials: u,
      adapter: u,
      responseType: u,
      xsrfCookieName: u,
      xsrfHeaderName: u,
      onUploadProgress: u,
      onDownloadProgress: u,
      decompress: u,
      maxContentLength: u,
      maxBodyLength: u,
      transport: u,
      httpAgent: u,
      httpsAgent: u,
      cancelToken: u,
      socketPath: u,
      responseEncoding: u,
      validateStatus: o
    };
    return e.forEach(Object.keys(r).concat(Object.keys(n)), function(v) {
      var d = f[v] || s, p = d(v);
      e.isUndefined(p) && d !== o || (i[v] = p);
    }), i;
  }, ba;
}
var wa, El;
function sh() {
  return El || (El = 1, wa = {
    version: "0.26.1"
  }), wa;
}
var _a, xl;
function qS() {
  if (xl)
    return _a;
  xl = 1;
  var e = sh().version, t = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(i, a) {
    t[i] = function(c) {
      return typeof c === i || "a" + (a < 1 ? "n " : " ") + i;
    };
  });
  var r = {};
  t.transitional = function(a, s, c) {
    function u(o, f) {
      return "[Axios v" + e + "] Transitional option '" + o + "'" + f + (c ? ". " + c : "");
    }
    return function(o, f, l) {
      if (a === !1)
        throw new Error(u(f, " has been removed" + (s ? " in " + s : "")));
      return s && !r[f] && (r[f] = !0, console.warn(
        u(
          f,
          " has been deprecated since v" + s + " and will be removed in the near future"
        )
      )), a ? a(o, f, l) : !0;
    };
  };
  function n(i, a, s) {
    if (typeof i != "object")
      throw new TypeError("options must be an object");
    for (var c = Object.keys(i), u = c.length; u-- > 0; ) {
      var o = c[u], f = a[o];
      if (f) {
        var l = i[o], v = l === void 0 || f(l, o, i);
        if (v !== !0)
          throw new TypeError("option " + o + " must be " + v);
        continue;
      }
      if (s !== !0)
        throw Error("Unknown option " + o);
    }
  }
  return _a = {
    assertOptions: n,
    validators: t
  }, _a;
}
var Sa, jl;
function US() {
  if (jl)
    return Sa;
  jl = 1;
  var e = We(), t = th(), r = CS(), n = LS(), i = oh(), a = qS(), s = a.validators;
  function c(u) {
    this.defaults = u, this.interceptors = {
      request: new r(),
      response: new r()
    };
  }
  return c.prototype.request = function(o, f) {
    typeof o == "string" ? (f = f || {}, f.url = o) : f = o || {}, f = i(this.defaults, f), f.method ? f.method = f.method.toLowerCase() : this.defaults.method ? f.method = this.defaults.method.toLowerCase() : f.method = "get";
    var l = f.transitional;
    l !== void 0 && a.assertOptions(l, {
      silentJSONParsing: s.transitional(s.boolean),
      forcedJSONParsing: s.transitional(s.boolean),
      clarifyTimeoutError: s.transitional(s.boolean)
    }, !1);
    var v = [], d = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(f) === !1 || (d = d && y.synchronous, v.unshift(y.fulfilled, y.rejected));
    });
    var p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    var h;
    if (!d) {
      var m = [n, void 0];
      for (Array.prototype.unshift.apply(m, v), m = m.concat(p), h = Promise.resolve(f); m.length; )
        h = h.then(m.shift(), m.shift());
      return h;
    }
    for (var g = f; v.length; ) {
      var _ = v.shift(), w = v.shift();
      try {
        g = _(g);
      } catch (b) {
        w(b);
        break;
      }
    }
    try {
      h = n(g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (; p.length; )
      h = h.then(p.shift(), p.shift());
    return h;
  }, c.prototype.getUri = function(o) {
    return o = i(this.defaults, o), t(o.url, o.params, o.paramsSerializer).replace(/^\?/, "");
  }, e.forEach(["delete", "get", "head", "options"], function(o) {
    c.prototype[o] = function(f, l) {
      return this.request(i(l || {}, {
        method: o,
        url: f,
        data: (l || {}).data
      }));
    };
  }), e.forEach(["post", "put", "patch"], function(o) {
    c.prototype[o] = function(f, l, v) {
      return this.request(i(v || {}, {
        method: o,
        url: f,
        data: l
      }));
    };
  }), Sa = c, Sa;
}
var Oa, Tl;
function WS() {
  if (Tl)
    return Oa;
  Tl = 1;
  var e = fi();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    var i = this;
    this.promise.then(function(a) {
      if (i._listeners) {
        var s, c = i._listeners.length;
        for (s = 0; s < c; s++)
          i._listeners[s](a);
        i._listeners = null;
      }
    }), this.promise.then = function(a) {
      var s, c = new Promise(function(u) {
        i.subscribe(u), s = u;
      }).then(a);
      return c.cancel = function() {
        i.unsubscribe(s);
      }, c;
    }, r(function(s) {
      i.reason || (i.reason = new e(s), n(i.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, t.prototype.unsubscribe = function(n) {
    if (this._listeners) {
      var i = this._listeners.indexOf(n);
      i !== -1 && this._listeners.splice(i, 1);
    }
  }, t.source = function() {
    var n, i = new t(function(s) {
      n = s;
    });
    return {
      token: i,
      cancel: n
    };
  }, Oa = t, Oa;
}
var Ra, Cl;
function BS() {
  return Cl || (Cl = 1, Ra = function(t) {
    return function(n) {
      return t.apply(null, n);
    };
  }), Ra;
}
var Pa, Al;
function zS() {
  if (Al)
    return Pa;
  Al = 1;
  var e = We();
  return Pa = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Pa;
}
var $l;
function VS() {
  if ($l)
    return Rn.exports;
  $l = 1;
  var e = We(), t = eh(), r = US(), n = oh(), i = Rs();
  function a(c) {
    var u = new r(c), o = t(r.prototype.request, u);
    return e.extend(o, r.prototype, u), e.extend(o, u), o.create = function(l) {
      return a(n(c, l));
    }, o;
  }
  var s = a(i);
  return s.Axios = r, s.Cancel = fi(), s.CancelToken = WS(), s.isCancel = ah(), s.VERSION = sh().version, s.all = function(u) {
    return Promise.all(u);
  }, s.spread = BS(), s.isAxiosError = zS(), Rn.exports = s, Rn.exports.default = s, Rn.exports;
}
var Ea, Il;
function QS() {
  return Il || (Il = 1, Ea = VS()), Ea;
}
var Fl;
function uh() {
  if (Fl)
    return On;
  Fl = 1;
  var e = P && P.__awaiter || function(f, l, v, d) {
    function p(h) {
      return h instanceof v ? h : new v(function(m) {
        m(h);
      });
    }
    return new (v || (v = Promise))(function(h, m) {
      function g(b) {
        try {
          w(d.next(b));
        } catch (y) {
          m(y);
        }
      }
      function _(b) {
        try {
          w(d.throw(b));
        } catch (y) {
          m(y);
        }
      }
      function w(b) {
        b.done ? h(b.value) : p(b.value).then(g, _);
      }
      w((d = d.apply(f, l || [])).next());
    });
  }, t = P && P.__generator || function(f, l) {
    var v = { label: 0, sent: function() {
      if (h[0] & 1)
        throw h[1];
      return h[1];
    }, trys: [], ops: [] }, d, p, h, m;
    return m = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(w) {
      return function(b) {
        return _([w, b]);
      };
    }
    function _(w) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; v; )
        try {
          if (d = 1, p && (h = w[0] & 2 ? p.return : w[0] ? p.throw || ((h = p.return) && h.call(p), 0) : p.next) && !(h = h.call(p, w[1])).done)
            return h;
          switch (p = 0, h && (w = [w[0] & 2, h.value]), w[0]) {
            case 0:
            case 1:
              h = w;
              break;
            case 4:
              return v.label++, { value: w[1], done: !1 };
            case 5:
              v.label++, p = w[1], w = [0];
              continue;
            case 7:
              w = v.ops.pop(), v.trys.pop();
              continue;
            default:
              if (h = v.trys, !(h = h.length > 0 && h[h.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                v = 0;
                continue;
              }
              if (w[0] === 3 && (!h || w[1] > h[0] && w[1] < h[3])) {
                v.label = w[1];
                break;
              }
              if (w[0] === 6 && v.label < h[1]) {
                v.label = h[1], h = w;
                break;
              }
              if (h && v.label < h[2]) {
                v.label = h[2], v.ops.push(w);
                break;
              }
              h[2] && v.ops.pop(), v.trys.pop();
              continue;
          }
          w = l.call(f, v);
        } catch (b) {
          w = [6, b], p = 0;
        } finally {
          d = h = 0;
        }
      if (w[0] & 5)
        throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(On, "__esModule", { value: !0 });
  var n = r(QS()), i = Zr(), a = r(Je()), s = "X-TYPESENSE-API-KEY", c = !0, u = !1, o = (
    /** @class */
    function() {
      function f(l) {
        this.configuration = l, this.apiKey = this.configuration.apiKey, this.nodes = this.configuration.nodes == null ? this.configuration.nodes : JSON.parse(JSON.stringify(this.configuration.nodes)), this.nearestNode = this.configuration.nearestNode == null ? this.configuration.nearestNode : JSON.parse(JSON.stringify(this.configuration.nearestNode)), this.connectionTimeoutSeconds = this.configuration.connectionTimeoutSeconds, this.healthcheckIntervalSeconds = this.configuration.healthcheckIntervalSeconds, this.numRetriesPerRequest = this.configuration.numRetries, this.retryIntervalSeconds = this.configuration.retryIntervalSeconds, this.sendApiKeyAsQueryParam = this.configuration.sendApiKeyAsQueryParam, this.additionalUserHeaders = this.configuration.additionalHeaders, this.logger = this.configuration.logger, this.initializeMetadataForNodes(), this.currentNodeIndex = -1;
      }
      return f.prototype.get = function(l, v, d) {
        v === void 0 && (v = {});
        var p = d === void 0 ? {} : d, h = p.abortSignal, m = h === void 0 ? null : h, g = p.responseType, _ = g === void 0 ? void 0 : g;
        return e(this, void 0, void 0, function() {
          return t(this, function(w) {
            return [2, this.performRequest("get", l, {
              queryParameters: v,
              abortSignal: m,
              responseType: _
            })];
          });
        });
      }, f.prototype.delete = function(l, v) {
        return v === void 0 && (v = {}), e(this, void 0, void 0, function() {
          return t(this, function(d) {
            return [2, this.performRequest("delete", l, { queryParameters: v })];
          });
        });
      }, f.prototype.post = function(l, v, d, p) {
        return v === void 0 && (v = {}), d === void 0 && (d = {}), p === void 0 && (p = {}), e(this, void 0, void 0, function() {
          return t(this, function(h) {
            return [2, this.performRequest("post", l, {
              queryParameters: d,
              bodyParameters: v,
              additionalHeaders: p
            })];
          });
        });
      }, f.prototype.put = function(l, v, d) {
        return v === void 0 && (v = {}), d === void 0 && (d = {}), e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.performRequest("put", l, {
              queryParameters: d,
              bodyParameters: v
            })];
          });
        });
      }, f.prototype.patch = function(l, v, d) {
        return v === void 0 && (v = {}), d === void 0 && (d = {}), e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.performRequest("patch", l, {
              queryParameters: d,
              bodyParameters: v
            })];
          });
        });
      }, f.prototype.performRequest = function(l, v, d) {
        var p, h, m, g = d.queryParameters, _ = g === void 0 ? null : g, w = d.bodyParameters, b = w === void 0 ? null : w, y = d.additionalHeaders, j = y === void 0 ? {} : y, $ = d.abortSignal, R = $ === void 0 ? null : $, q = d.responseType, V = q === void 0 ? void 0 : q, L = d.skipConnectionTimeout, k = L === void 0 ? !1 : L;
        return e(this, void 0, void 0, function() {
          var A, re, U, T, C, F;
          return t(this, function(Q) {
            switch (Q.label) {
              case 0:
                this.configuration.validate(), A = Date.now(), this.logger.debug("Request #".concat(A, ": Performing ").concat(l.toUpperCase(), " request: ").concat(v)), U = function(E) {
                  var M, D, I, H, W, O, Y;
                  return t(this, function(N) {
                    switch (N.label) {
                      case 0:
                        if (M = T.getNextNode(A), T.logger.debug("Request #".concat(A, ": Attempting ").concat(l.toUpperCase(), " request Try #").concat(E, " to Node ").concat(M.index)), R && R.aborted)
                          return [2, { value: Promise.reject(new Error("Request aborted by caller.")) }];
                        D = void 0, N.label = 1;
                      case 1:
                        return N.trys.push([1, 3, 5, 6]), I = {
                          method: l,
                          url: T.uriFor(v, M),
                          headers: Object.assign({}, T.defaultHeaders(), j, T.additionalUserHeaders),
                          maxContentLength: 1 / 0,
                          maxBodyLength: 1 / 0,
                          responseType: V,
                          validateStatus: function(Z) {
                            return Z > 0;
                          },
                          transformResponse: [
                            function(Z, J) {
                              var B = Z;
                              return J !== void 0 && typeof Z == "string" && J["content-type"] && J["content-type"].startsWith("application/json") && (B = JSON.parse(Z)), B;
                            }
                          ]
                        }, k !== !0 && (I.timeout = T.connectionTimeoutSeconds * 1e3), _ && Object.keys(_).length !== 0 && (I.params = _), T.sendApiKeyAsQueryParam && (I.params = I.params || {}, I.params["x-typesense-api-key"] = T.apiKey), b && (typeof b == "string" && b.length !== 0 || typeof b == "object" && Object.keys(b).length !== 0) && (I.data = b), R && (H = n.default.CancelToken, W = H.source(), D = function() {
                          return W.cancel();
                        }, R.addEventListener("abort", D), I.cancelToken = W.token), [4, (0, n.default)(I)];
                      case 2:
                        if (O = N.sent(), O.status >= 1 && O.status <= 499 && T.setNodeHealthcheck(M, c), T.logger.debug("Request #".concat(A, ": Request to Node ").concat(M.index, " was made. Response Code was ").concat(O.status, ".")), O.status >= 200 && O.status < 300)
                          return [2, { value: Promise.resolve(O.data) }];
                        if (O.status < 500)
                          return [2, { value: Promise.reject(T.customErrorForResponse(O, (p = O.data) === null || p === void 0 ? void 0 : p.message)) }];
                        throw T.customErrorForResponse(O, (h = O.data) === null || h === void 0 ? void 0 : h.message);
                      case 3:
                        return Y = N.sent(), T.setNodeHealthcheck(M, u), re = Y, T.logger.warn("Request #".concat(A, ": Request to Node ").concat(M.index, ' failed due to "').concat(Y.code, " ").concat(Y.message).concat(Y.response == null ? "" : " - " + JSON.stringify((m = Y.response) === null || m === void 0 ? void 0 : m.data), '"')), T.logger.warn("Request #".concat(A, ": Sleeping for ").concat(T.retryIntervalSeconds, "s and then retrying request...")), [4, T.timer(T.retryIntervalSeconds)];
                      case 4:
                        return N.sent(), [3, 6];
                      case 5:
                        return R && D && R.removeEventListener("abort", D), [
                          7
                          /*endfinally*/
                        ];
                      case 6:
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                }, T = this, C = 1, Q.label = 1;
              case 1:
                return C <= this.numRetriesPerRequest + 1 ? [5, U(C)] : [3, 4];
              case 2:
                if (F = Q.sent(), typeof F == "object")
                  return [2, F.value];
                Q.label = 3;
              case 3:
                return C++, [3, 1];
              case 4:
                return this.logger.debug("Request #".concat(A, ": No retries left. Raising last error")), [2, Promise.reject(re)];
            }
          });
        });
      }, f.prototype.getNextNode = function(l) {
        if (l === void 0 && (l = 0), this.nearestNode != null) {
          if (this.logger.debug("Request #".concat(l, ": Nodes Health: Node ").concat(this.nearestNode.index, " is ").concat(this.nearestNode.isHealthy === !0 ? "Healthy" : "Unhealthy")), this.nearestNode.isHealthy === !0 || this.nodeDueForHealthcheck(this.nearestNode, l))
            return this.logger.debug("Request #".concat(l, ": Updated current node to Node ").concat(this.nearestNode.index)), this.nearestNode;
          this.logger.debug("Request #".concat(l, ": Falling back to individual nodes"));
        }
        this.logger.debug("Request #".concat(l, ": Nodes Health: ").concat(this.nodes.map(function(p) {
          return "Node ".concat(p.index, " is ").concat(p.isHealthy === !0 ? "Healthy" : "Unhealthy");
        }).join(" || ")));
        for (var v = this.nodes[0], d = 0; d <= this.nodes.length; d++)
          if (this.currentNodeIndex = (this.currentNodeIndex + 1) % this.nodes.length, v = this.nodes[this.currentNodeIndex], v.isHealthy === !0 || this.nodeDueForHealthcheck(v, l))
            return this.logger.debug("Request #".concat(l, ": Updated current node to Node ").concat(v.index)), v;
        return this.logger.debug("Request #".concat(l, ": No healthy nodes were found. Returning the next node, Node ").concat(v.index)), v;
      }, f.prototype.nodeDueForHealthcheck = function(l, v) {
        v === void 0 && (v = 0);
        var d = Date.now() - l.lastAccessTimestamp > this.healthcheckIntervalSeconds * 1e3;
        return d && this.logger.debug("Request #".concat(v, ": Node ").concat(l.index, " has exceeded healtcheckIntervalSeconds of ").concat(this.healthcheckIntervalSeconds, ". Adding it back into rotation.")), d;
      }, f.prototype.initializeMetadataForNodes = function() {
        var l = this;
        this.nearestNode != null && (this.nearestNode.index = "nearestNode", this.setNodeHealthcheck(this.nearestNode, c)), this.nodes.forEach(function(v, d) {
          v.index = d, l.setNodeHealthcheck(v, c);
        });
      }, f.prototype.setNodeHealthcheck = function(l, v) {
        l.isHealthy = v, l.lastAccessTimestamp = Date.now();
      }, f.prototype.uriFor = function(l, v) {
        return v.url != null ? "".concat(v.url).concat(l) : "".concat(v.protocol, "://").concat(v.host, ":").concat(v.port).concat(v.path).concat(l);
      }, f.prototype.defaultHeaders = function() {
        var l = {};
        return this.sendApiKeyAsQueryParam || (l[s] = this.apiKey), l["Content-Type"] = "application/json", l;
      }, f.prototype.timer = function(l) {
        return e(this, void 0, void 0, function() {
          return t(this, function(v) {
            return [2, new Promise(function(d) {
              return setTimeout(d, l * 1e3);
            })];
          });
        });
      }, f.prototype.customErrorForResponse = function(l, v) {
        var d = "Request failed with HTTP code ".concat(l.status);
        typeof v == "string" && v.trim() !== "" && (d += " | Server said: ".concat(v));
        var p = new a.default(d);
        return l.status === 400 ? p = new i.RequestMalformed(d) : l.status === 401 ? p = new i.RequestUnauthorized(d) : l.status === 404 ? p = new i.ObjectNotFound(d) : l.status === 409 ? p = new i.ObjectAlreadyExists(d) : l.status === 422 ? p = new i.ObjectUnprocessable(d) : l.status >= 500 && l.status <= 599 ? p = new i.ServerError(d) : p = new i.HTTPError(d), p.httpStatus = l.status, p;
      }, f;
    }()
  );
  return On.default = o, On;
}
var Pn = {}, Nl;
function St() {
  if (Nl)
    return Pn;
  Nl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  var r = "/collections", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.create = function(a, s) {
        return s === void 0 && (s = {}), e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.post(r, a, s)];
          });
        });
      }, i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(r)];
          });
        });
      }, Object.defineProperty(i, "RESOURCEPATH", {
        get: function() {
          return r;
        },
        enumerable: !1,
        configurable: !0
      }), i;
    }()
  );
  return Pn.default = n, Pn;
}
var En = {}, xn = {}, sr = {}, jn = {}, Dl;
function ch() {
  if (Dl)
    return jn;
  Dl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__spreadArray || function(s, c, u) {
    if (u || arguments.length === 2)
      for (var o = 0, f = c.length, l; o < f; o++)
        (l || !(o in c)) && (l || (l = Array.prototype.slice.call(c, 0, o)), l[o] = c[o]);
    return s.concat(l || Array.prototype.slice.call(c));
  };
  Object.defineProperty(jn, "__esModule", { value: !0 });
  var n = 2 * 60, i = 100, a = (
    /** @class */
    function() {
      function s() {
        this.responseCache = /* @__PURE__ */ new Map(), this.responsePromiseCache = /* @__PURE__ */ new Map();
      }
      return s.prototype.clearCache = function() {
        this.responseCache = /* @__PURE__ */ new Map(), this.responsePromiseCache = /* @__PURE__ */ new Map();
      }, s.prototype.perform = function(c, u, o, f) {
        return e(this, void 0, void 0, function() {
          var l, v, d, p, h, m, g, _, b, w, b, y, j, $, q, R, q;
          return t(this, function(V) {
            switch (V.label) {
              case 0:
                if (l = f.cacheResponseForSeconds, v = l === void 0 ? n : l, d = f.maxSize, p = d === void 0 ? i : d, h = v <= 0 || p <= 0, h)
                  return [2, u.call.apply(u, r([c], o, !1))];
                if (m = JSON.stringify(o), g = this.responseCache.get(m), _ = Date.now(), g) {
                  if (b = _ - g.requestTimestamp < v * 1e3, b)
                    return this.responseCache.delete(m), this.responseCache.set(m, g), [2, Promise.resolve(g.response)];
                  this.responseCache.delete(m);
                }
                if (w = this.responsePromiseCache.get(m), w) {
                  if (b = _ - w.requestTimestamp < v * 1e3, b)
                    return this.responsePromiseCache.delete(m), this.responsePromiseCache.set(m, w), [2, w.responsePromise];
                  this.responsePromiseCache.delete(m);
                }
                return y = u.call.apply(u, r([c], o, !1)), this.responsePromiseCache.set(m, {
                  requestTimestamp: _,
                  responsePromise: y
                }), [4, y];
              case 1:
                return j = V.sent(), this.responseCache.set(m, {
                  requestTimestamp: _,
                  response: j
                }), $ = this.responseCache.size > p, $ && (q = this.responseCache.keys().next().value, this.responseCache.delete(q)), R = this.responsePromiseCache.size > p, R && (q = this.responsePromiseCache.keys().next().value, this.responsePromiseCache.delete(q)), [2, j];
            }
          });
        });
      }, s;
    }()
  );
  return jn.default = a, jn;
}
var kl;
function lh() {
  if (kl)
    return sr;
  kl = 1;
  var e = P && P.__awaiter || function(c, u, o, f) {
    function l(v) {
      return v instanceof o ? v : new o(function(d) {
        d(v);
      });
    }
    return new (o || (o = Promise))(function(v, d) {
      function p(g) {
        try {
          m(f.next(g));
        } catch (_) {
          d(_);
        }
      }
      function h(g) {
        try {
          m(f.throw(g));
        } catch (_) {
          d(_);
        }
      }
      function m(g) {
        g.done ? v(g.value) : l(g.value).then(p, h);
      }
      m((f = f.apply(c, u || [])).next());
    });
  }, t = P && P.__generator || function(c, u) {
    var o = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, f, l, v, d;
    return d = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function p(m) {
      return function(g) {
        return h([m, g]);
      };
    }
    function h(m) {
      if (f)
        throw new TypeError("Generator is already executing.");
      for (; o; )
        try {
          if (f = 1, l && (v = m[0] & 2 ? l.return : m[0] ? l.throw || ((v = l.return) && v.call(l), 0) : l.next) && !(v = v.call(l, m[1])).done)
            return v;
          switch (l = 0, v && (m = [m[0] & 2, v.value]), m[0]) {
            case 0:
            case 1:
              v = m;
              break;
            case 4:
              return o.label++, { value: m[1], done: !1 };
            case 5:
              o.label++, l = m[1], m = [0];
              continue;
            case 7:
              m = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (v = o.trys, !(v = v.length > 0 && v[v.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                o = 0;
                continue;
              }
              if (m[0] === 3 && (!v || m[1] > v[0] && m[1] < v[3])) {
                o.label = m[1];
                break;
              }
              if (m[0] === 6 && o.label < v[1]) {
                o.label = v[1], v = m;
                break;
              }
              if (v && o.label < v[2]) {
                o.label = v[2], o.ops.push(m);
                break;
              }
              v[2] && o.ops.pop(), o.trys.pop();
              continue;
          }
          m = u.call(c, o);
        } catch (g) {
          m = [6, g], l = 0;
        } finally {
          f = v = 0;
        }
      if (m[0] & 5)
        throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(sr, "__esModule", { value: !0 }), sr.SearchOnlyDocuments = void 0;
  var n = r(ch()), i = r(St()), a = "/documents", s = (
    /** @class */
    function() {
      function c(u, o, f) {
        this.collectionName = u, this.apiCall = o, this.configuration = f, this.requestWithCache = new n.default();
      }
      return c.prototype.clearCache = function() {
        this.requestWithCache.clearCache();
      }, c.prototype.search = function(u, o) {
        var f = o === void 0 ? {} : o, l = f.cacheSearchResultsForSeconds, v = l === void 0 ? this.configuration.cacheSearchResultsForSeconds : l, d = f.abortSignal, p = d === void 0 ? null : d;
        return e(this, void 0, void 0, function() {
          var h, m, g;
          return t(this, function(_) {
            h = {}, this.configuration.useServerSideSearchCache === !0 && (h.use_cache = !0);
            for (m in u)
              Array.isArray(u[m]) && (h[m] = u[m].join(","));
            return g = Object.assign({}, u, h), [2, this.requestWithCache.perform(this.apiCall, this.apiCall.get, [this.endpointPath("search"), g, { abortSignal: p }], {
              cacheResponseForSeconds: v
            })];
          });
        });
      }, c.prototype.endpointPath = function(u) {
        return "".concat(i.default.RESOURCEPATH, "/").concat(this.collectionName).concat(a).concat(u === void 0 ? "" : "/" + u);
      }, Object.defineProperty(c, "RESOURCEPATH", {
        get: function() {
          return a;
        },
        enumerable: !1,
        configurable: !0
      }), c;
    }()
  );
  return sr.SearchOnlyDocuments = s, sr;
}
var Ml;
function fh() {
  if (Ml)
    return xn;
  Ml = 1;
  var e = P && P.__extends || /* @__PURE__ */ function() {
    var s = function(c, u) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, f) {
        o.__proto__ = f;
      } || function(o, f) {
        for (var l in f)
          Object.prototype.hasOwnProperty.call(f, l) && (o[l] = f[l]);
      }, s(c, u);
    };
    return function(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      s(c, u);
      function o() {
        this.constructor = c;
      }
      c.prototype = u === null ? Object.create(u) : (o.prototype = u.prototype, new o());
    };
  }(), t = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, r = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xn, "__esModule", { value: !0 });
  var n = Zr(), i = lh(), a = (
    /** @class */
    function(s) {
      e(c, s);
      function c(u, o, f) {
        return s.call(this, u, o, f) || this;
      }
      return c.prototype.create = function(u, o) {
        return o === void 0 && (o = {}), t(this, void 0, void 0, function() {
          return r(this, function(f) {
            if (!u)
              throw new Error("No document provided");
            return [2, this.apiCall.post(this.endpointPath(), u, o)];
          });
        });
      }, c.prototype.upsert = function(u, o) {
        return o === void 0 && (o = {}), t(this, void 0, void 0, function() {
          return r(this, function(f) {
            if (!u)
              throw new Error("No document provided");
            return [2, this.apiCall.post(this.endpointPath(), u, Object.assign({}, o, { action: "upsert" }))];
          });
        });
      }, c.prototype.update = function(u, o) {
        return o === void 0 && (o = {}), t(this, void 0, void 0, function() {
          return r(this, function(f) {
            if (!u)
              throw new Error("No document provided");
            return o.filter_by != null ? [2, this.apiCall.patch(this.endpointPath(), u, Object.assign({}, o))] : [2, this.apiCall.post(this.endpointPath(), u, Object.assign({}, o, { action: "update" }))];
          });
        });
      }, c.prototype.delete = function(u) {
        return u === void 0 && (u = {}), t(this, void 0, void 0, function() {
          return r(this, function(o) {
            return typeof u == "string" ? [2, this.apiCall.delete(this.endpointPath(u), u)] : [2, this.apiCall.delete(this.endpointPath(), u)];
          });
        });
      }, c.prototype.createMany = function(u, o) {
        return o === void 0 && (o = {}), t(this, void 0, void 0, function() {
          return r(this, function(f) {
            return this.configuration.logger.warn("createMany is deprecated and will be removed in a future version. Use import instead, which now takes both an array of documents or a JSONL string of documents"), [2, this.import(u, o)];
          });
        });
      }, c.prototype.import = function(u, o) {
        return o === void 0 && (o = {}), t(this, void 0, void 0, function() {
          var f, l, v, d;
          return r(this, function(p) {
            switch (p.label) {
              case 0:
                if (Array.isArray(u))
                  try {
                    f = u.map(function(h) {
                      return JSON.stringify(h);
                    }).join(`
`);
                  } catch (h) {
                    throw RangeError instanceof h && (h != null && h.includes("Too many properties to enumerate")) ? new Error("".concat(h, `
          It looks like you have reached a Node.js limit that restricts the number of keys in an Object: https://stackoverflow.com/questions/9282869/are-there-limits-to-the-number-of-properties-in-a-javascript-object

          Please try reducing the number of keys in your document, or using CURL to import your data.
          `)) : new Error(h);
                  }
                else
                  f = u;
                return [4, this.apiCall.performRequest("post", this.endpointPath("import"), {
                  queryParameters: o,
                  bodyParameters: f,
                  additionalHeaders: { "Content-Type": "text/plain" },
                  skipConnectionTimeout: !0
                  // We never want to client-side-timeout on an import and retry, since imports are syncronous and we want to let them take as long as it takes to complete fully
                })];
              case 1:
                if (l = p.sent(), Array.isArray(u)) {
                  if (v = l.split(`
`).map(function(h) {
                    return JSON.parse(h);
                  }), d = v.filter(function(h) {
                    return h.success === !1;
                  }), d.length > 0)
                    throw new n.ImportError("".concat(v.length - d.length, " documents imported successfully, ").concat(d.length, " documents failed during import. Use `error.importResults` from the raised exception to get a detailed error reason for each document."), v);
                  return [2, v];
                } else
                  return [2, l];
            }
          });
        });
      }, c.prototype.export = function(u) {
        return u === void 0 && (u = {}), t(this, void 0, void 0, function() {
          return r(this, function(o) {
            return [2, this.apiCall.get(this.endpointPath("export"), u)];
          });
        });
      }, c.prototype.exportStream = function(u) {
        return u === void 0 && (u = {}), t(this, void 0, void 0, function() {
          return r(this, function(o) {
            return [2, this.apiCall.get(this.endpointPath("export"), u, {
              responseType: "stream"
            })];
          });
        });
      }, c;
    }(i.SearchOnlyDocuments)
  );
  return xn.default = a, xn;
}
var Tn = {}, Hl;
function dh() {
  if (Hl)
    return Tn;
  Hl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Tn, "__esModule", { value: !0 });
  var n = r(St()), i = "/overrides", a = (
    /** @class */
    function() {
      function s(c, u) {
        this.collectionName = c, this.apiCall = u;
      }
      return s.prototype.upsert = function(c, u) {
        return e(this, void 0, void 0, function() {
          return t(this, function(o) {
            return [2, this.apiCall.put(this.endpointPath(c), u)];
          });
        });
      }, s.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, s.prototype.endpointPath = function(c) {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.collectionName).concat(s.RESOURCEPATH).concat(c === void 0 ? "" : "/" + c);
      }, Object.defineProperty(s, "RESOURCEPATH", {
        get: function() {
          return i;
        },
        enumerable: !1,
        configurable: !0
      }), s;
    }()
  );
  return Tn.default = a, Tn;
}
var Cn = {}, Ll;
function KS() {
  if (Ll)
    return Cn;
  Ll = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Cn, "__esModule", { value: !0 });
  var n = r(St()), i = r(dh()), a = (
    /** @class */
    function() {
      function s(c, u, o) {
        this.collectionName = c, this.overrideId = u, this.apiCall = o;
      }
      return s.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, s.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, s.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.collectionName).concat(i.default.RESOURCEPATH, "/").concat(this.overrideId);
      }, s;
    }()
  );
  return Cn.default = a, Cn;
}
var An = {}, ql;
function hh() {
  if (ql)
    return An;
  ql = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(An, "__esModule", { value: !0 });
  var n = r(St()), i = "/synonyms", a = (
    /** @class */
    function() {
      function s(c, u) {
        this.collectionName = c, this.apiCall = u;
      }
      return s.prototype.upsert = function(c, u) {
        return e(this, void 0, void 0, function() {
          return t(this, function(o) {
            return [2, this.apiCall.put(this.endpointPath(c), u)];
          });
        });
      }, s.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, s.prototype.endpointPath = function(c) {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.collectionName).concat(s.RESOURCEPATH).concat(c === void 0 ? "" : "/" + c);
      }, Object.defineProperty(s, "RESOURCEPATH", {
        get: function() {
          return i;
        },
        enumerable: !1,
        configurable: !0
      }), s;
    }()
  );
  return An.default = a, An;
}
var $n = {}, Ul;
function YS() {
  if (Ul)
    return $n;
  Ul = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty($n, "__esModule", { value: !0 });
  var n = r(St()), i = r(hh()), a = (
    /** @class */
    function() {
      function s(c, u, o) {
        this.collectionName = c, this.synonymId = u, this.apiCall = o;
      }
      return s.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, s.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, s.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.collectionName).concat(i.default.RESOURCEPATH, "/").concat(this.synonymId);
      }, s;
    }()
  );
  return $n.default = a, $n;
}
var ur = {}, Wl;
function GS() {
  if (Wl)
    return ur;
  Wl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(ur, "__esModule", { value: !0 }), ur.Document = void 0;
  var n = r(St()), i = r(fh()), a = (
    /** @class */
    function() {
      function s(c, u, o) {
        this.collectionName = c, this.documentId = u, this.apiCall = o;
      }
      return s.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, s.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, s.prototype.update = function(c, u) {
        return u === void 0 && (u = {}), e(this, void 0, void 0, function() {
          return t(this, function(o) {
            return [2, this.apiCall.patch(this.endpointPath(), c, u)];
          });
        });
      }, s.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.collectionName).concat(i.default.RESOURCEPATH, "/").concat(this.documentId);
      }, s;
    }()
  );
  return ur.Document = a, ur;
}
var Bl;
function JS() {
  if (Bl)
    return En;
  Bl = 1;
  var e = P && P.__awaiter || function(v, d, p, h) {
    function m(g) {
      return g instanceof p ? g : new p(function(_) {
        _(g);
      });
    }
    return new (p || (p = Promise))(function(g, _) {
      function w(j) {
        try {
          y(h.next(j));
        } catch ($) {
          _($);
        }
      }
      function b(j) {
        try {
          y(h.throw(j));
        } catch ($) {
          _($);
        }
      }
      function y(j) {
        j.done ? g(j.value) : m(j.value).then(w, b);
      }
      y((h = h.apply(v, d || [])).next());
    });
  }, t = P && P.__generator || function(v, d) {
    var p = { label: 0, sent: function() {
      if (g[0] & 1)
        throw g[1];
      return g[1];
    }, trys: [], ops: [] }, h, m, g, _;
    return _ = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function w(y) {
      return function(j) {
        return b([y, j]);
      };
    }
    function b(y) {
      if (h)
        throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (h = 1, m && (g = y[0] & 2 ? m.return : y[0] ? m.throw || ((g = m.return) && g.call(m), 0) : m.next) && !(g = g.call(m, y[1])).done)
            return g;
          switch (m = 0, g && (y = [y[0] & 2, g.value]), y[0]) {
            case 0:
            case 1:
              g = y;
              break;
            case 4:
              return p.label++, { value: y[1], done: !1 };
            case 5:
              p.label++, m = y[1], y = [0];
              continue;
            case 7:
              y = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (g = p.trys, !(g = g.length > 0 && g[g.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                p = 0;
                continue;
              }
              if (y[0] === 3 && (!g || y[1] > g[0] && y[1] < g[3])) {
                p.label = y[1];
                break;
              }
              if (y[0] === 6 && p.label < g[1]) {
                p.label = g[1], g = y;
                break;
              }
              if (g && p.label < g[2]) {
                p.label = g[2], p.ops.push(y);
                break;
              }
              g[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          y = d.call(v, p);
        } catch (j) {
          y = [6, j], m = 0;
        } finally {
          h = g = 0;
        }
      if (y[0] & 5)
        throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(En, "__esModule", { value: !0 });
  var n = r(St()), i = r(fh()), a = Zr(), s = r(dh()), c = r(KS()), u = r(hh()), o = r(YS()), f = GS(), l = (
    /** @class */
    function() {
      function v(d, p, h) {
        this.name = d, this.apiCall = p, this.configuration = h, this.individualDocuments = {}, this.individualOverrides = {}, this.individualSynonyms = {}, this.name = d, this.apiCall = p, this.configuration = h, this._documents = new i.default(this.name, this.apiCall, this.configuration), this._overrides = new s.default(this.name, this.apiCall), this._synonyms = new u.default(this.name, this.apiCall);
      }
      return v.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(d) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, v.prototype.update = function(d) {
        return e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.apiCall.patch(this.endpointPath(), d)];
          });
        });
      }, v.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(d) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, v.prototype.exists = function() {
        return e(this, void 0, void 0, function() {
          var d;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return p.trys.push([0, 2, , 3]), [4, this.retrieve()];
              case 1:
                return p.sent(), [2, !0];
              case 2:
                if (d = p.sent(), d instanceof a.ObjectNotFound)
                  return [2, !1];
                throw d;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, v.prototype.documents = function(d) {
        return d ? (this.individualDocuments[d] === void 0 && (this.individualDocuments[d] = new f.Document(this.name, d, this.apiCall)), this.individualDocuments[d]) : this._documents;
      }, v.prototype.overrides = function(d) {
        return d === void 0 ? this._overrides : (this.individualOverrides[d] === void 0 && (this.individualOverrides[d] = new c.default(this.name, d, this.apiCall)), this.individualOverrides[d]);
      }, v.prototype.synonyms = function(d) {
        return d === void 0 ? this._synonyms : (this.individualSynonyms[d] === void 0 && (this.individualSynonyms[d] = new o.default(this.name, d, this.apiCall)), this.individualSynonyms[d]);
      }, v.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.name);
      }, v;
    }()
  );
  return En.default = l, En;
}
var In = {}, zl;
function ph() {
  if (zl)
    return In;
  zl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(In, "__esModule", { value: !0 });
  var r = "/aliases", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.upsert = function(a, s) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.put(this.endpointPath(a), s)];
          });
        });
      }, i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(r)];
          });
        });
      }, i.prototype.endpointPath = function(a) {
        return "".concat(i.RESOURCEPATH, "/").concat(a);
      }, Object.defineProperty(i, "RESOURCEPATH", {
        get: function() {
          return r;
        },
        enumerable: !1,
        configurable: !0
      }), i;
    }()
  );
  return In.default = n, In;
}
var Fn = {}, Vl;
function XS() {
  if (Vl)
    return Fn;
  Vl = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(h) {
        try {
          p(u.next(h));
        } catch (m) {
          l(m);
        }
      }
      function d(h) {
        try {
          p(u.throw(h));
        } catch (m) {
          l(m);
        }
      }
      function p(h) {
        h.done ? f(h.value) : o(h.value).then(v, d);
      }
      p((u = u.apply(a, s || [])).next());
    });
  }, t = P && P.__generator || function(a, s) {
    var c = { label: 0, sent: function() {
      if (f[0] & 1)
        throw f[1];
      return f[1];
    }, trys: [], ops: [] }, u, o, f, l;
    return l = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function v(p) {
      return function(h) {
        return d([p, h]);
      };
    }
    function d(p) {
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (u = 1, o && (f = p[0] & 2 ? o.return : p[0] ? o.throw || ((f = o.return) && f.call(o), 0) : o.next) && !(f = f.call(o, p[1])).done)
            return f;
          switch (o = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
            case 0:
            case 1:
              f = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (f = c.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < f[1]) {
                c.label = f[1], f = p;
                break;
              }
              if (f && c.label < f[2]) {
                c.label = f[2], c.ops.push(p);
                break;
              }
              f[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = s.call(a, c);
        } catch (h) {
          p = [6, h], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Fn, "__esModule", { value: !0 });
  var n = r(ph()), i = (
    /** @class */
    function() {
      function a(s, c) {
        this.name = s, this.apiCall = c;
      }
      return a.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, a.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, a.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.name);
      }, a;
    }()
  );
  return Fn.default = i, Fn;
}
var Nn = {};
const ZS = {}, eO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZS
}, Symbol.toStringTag, { value: "Module" })), tO = /* @__PURE__ */ zh(eO);
var Ql;
function vh() {
  if (Ql)
    return Nn;
  Ql = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(h) {
        try {
          p(u.next(h));
        } catch (m) {
          l(m);
        }
      }
      function d(h) {
        try {
          p(u.throw(h));
        } catch (m) {
          l(m);
        }
      }
      function p(h) {
        h.done ? f(h.value) : o(h.value).then(v, d);
      }
      p((u = u.apply(a, s || [])).next());
    });
  }, t = P && P.__generator || function(a, s) {
    var c = { label: 0, sent: function() {
      if (f[0] & 1)
        throw f[1];
      return f[1];
    }, trys: [], ops: [] }, u, o, f, l;
    return l = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function v(p) {
      return function(h) {
        return d([p, h]);
      };
    }
    function d(p) {
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (u = 1, o && (f = p[0] & 2 ? o.return : p[0] ? o.throw || ((f = o.return) && f.call(o), 0) : o.next) && !(f = f.call(o, p[1])).done)
            return f;
          switch (o = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
            case 0:
            case 1:
              f = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (f = c.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < f[1]) {
                c.label = f[1], f = p;
                break;
              }
              if (f && c.label < f[2]) {
                c.label = f[2], c.ops.push(p);
                break;
              }
              f[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = s.call(a, c);
        } catch (h) {
          p = [6, h], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  var r = tO, n = "/keys", i = (
    /** @class */
    function() {
      function a(s) {
        this.apiCall = s, this.apiCall = s;
      }
      return a.prototype.create = function(s) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.post(a.RESOURCEPATH, s)];
          });
        });
      }, a.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.get(n)];
          });
        });
      }, a.prototype.generateScopedSearchKey = function(s, c) {
        var u = JSON.stringify(c), o = Buffer.from((0, r.createHmac)("sha256", s).update(u).digest("base64")), f = s.substr(0, 4), l = "".concat(o).concat(f).concat(u);
        return Buffer.from(l).toString("base64");
      }, Object.defineProperty(a, "RESOURCEPATH", {
        get: function() {
          return n;
        },
        enumerable: !1,
        configurable: !0
      }), a;
    }()
  );
  return Nn.default = i, Nn;
}
var Dn = {}, Kl;
function rO() {
  if (Kl)
    return Dn;
  Kl = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(h) {
        try {
          p(u.next(h));
        } catch (m) {
          l(m);
        }
      }
      function d(h) {
        try {
          p(u.throw(h));
        } catch (m) {
          l(m);
        }
      }
      function p(h) {
        h.done ? f(h.value) : o(h.value).then(v, d);
      }
      p((u = u.apply(a, s || [])).next());
    });
  }, t = P && P.__generator || function(a, s) {
    var c = { label: 0, sent: function() {
      if (f[0] & 1)
        throw f[1];
      return f[1];
    }, trys: [], ops: [] }, u, o, f, l;
    return l = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function v(p) {
      return function(h) {
        return d([p, h]);
      };
    }
    function d(p) {
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (u = 1, o && (f = p[0] & 2 ? o.return : p[0] ? o.throw || ((f = o.return) && f.call(o), 0) : o.next) && !(f = f.call(o, p[1])).done)
            return f;
          switch (o = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
            case 0:
            case 1:
              f = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (f = c.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < f[1]) {
                c.label = f[1], f = p;
                break;
              }
              if (f && c.label < f[2]) {
                c.label = f[2], c.ops.push(p);
                break;
              }
              f[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = s.call(a, c);
        } catch (h) {
          p = [6, h], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  var n = r(vh()), i = (
    /** @class */
    function() {
      function a(s, c) {
        this.id = s, this.apiCall = c;
      }
      return a.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, a.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, a.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.id);
      }, a;
    }()
  );
  return Dn.default = i, Dn;
}
var kn = {}, Yl;
function nO() {
  if (Yl)
    return kn;
  Yl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(kn, "__esModule", { value: !0 });
  var r = "/debug", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(r)];
          });
        });
      }, i;
    }()
  );
  return kn.default = n, kn;
}
var Mn = {}, Gl;
function iO() {
  if (Gl)
    return Mn;
  Gl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  var r = "/metrics.json", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(r)];
          });
        });
      }, i;
    }()
  );
  return Mn.default = n, Mn;
}
var Hn = {}, Jl;
function aO() {
  if (Jl)
    return Hn;
  Jl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Hn, "__esModule", { value: !0 });
  var r = "/health", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(r)];
          });
        });
      }, i;
    }()
  );
  return Hn.default = n, Hn;
}
var Ln = {}, Xl;
function oO() {
  if (Xl)
    return Ln;
  Xl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ln, "__esModule", { value: !0 });
  var r = "/operations", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.perform = function(a, s) {
        return s === void 0 && (s = {}), e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.post("".concat(r, "/").concat(a), {}, s)];
          });
        });
      }, i;
    }()
  );
  return Ln.default = n, Ln;
}
var qn = {}, Zl;
function mh() {
  if (Zl)
    return qn;
  Zl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function d(m) {
        try {
          h(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          h(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function h(m) {
        m.done ? l(m.value) : f(m.value).then(d, p);
      }
      h((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function d(h) {
      return function(m) {
        return p([h, m]);
      };
    }
    function p(h) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = h[0] & 2 ? f.return : h[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, h[1])).done)
            return l;
          switch (f = 0, l && (h = [h[0] & 2, l.value]), h[0]) {
            case 0:
            case 1:
              l = h;
              break;
            case 4:
              return u.label++, { value: h[1], done: !1 };
            case 5:
              u.label++, f = h[1], h = [0];
              continue;
            case 7:
              h = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                u = 0;
                continue;
              }
              if (h[0] === 3 && (!l || h[1] > l[0] && h[1] < l[3])) {
                u.label = h[1];
                break;
              }
              if (h[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = h;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(h);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          h = c.call(s, u);
        } catch (m) {
          h = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(qn, "__esModule", { value: !0 });
  var n = r(ch()), i = "/multi_search", a = (
    /** @class */
    function() {
      function s(c, u, o) {
        o === void 0 && (o = !1), this.apiCall = c, this.configuration = u, this.useTextContentType = o, this.requestWithCache = new n.default();
      }
      return s.prototype.clearCache = function() {
        this.requestWithCache.clearCache();
      }, s.prototype.perform = function(c, u, o) {
        u === void 0 && (u = {});
        var f = o === void 0 ? {} : o, l = f.cacheSearchResultsForSeconds, v = l === void 0 ? this.configuration.cacheSearchResultsForSeconds : l;
        return e(this, void 0, void 0, function() {
          var d, p, h;
          return t(this, function(m) {
            return d = {}, this.useTextContentType && (d["content-type"] = "text/plain"), p = {}, this.configuration.useServerSideSearchCache === !0 && (p.use_cache = !0), h = Object.assign({}, u, p), [2, this.requestWithCache.perform(this.apiCall, this.apiCall.post, [i, c, h, d], { cacheResponseForSeconds: v })];
          });
        });
      }, s;
    }()
  );
  return qn.default = a, qn;
}
var Un = {}, ef;
function gh() {
  if (ef)
    return Un;
  ef = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Un, "__esModule", { value: !0 });
  var r = "/presets", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a;
      }
      return i.prototype.upsert = function(a, s) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.put(this.endpointPath(a), s)];
          });
        });
      }, i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, i.prototype.endpointPath = function(a) {
        return "".concat(i.RESOURCEPATH).concat(a === void 0 ? "" : "/" + a);
      }, Object.defineProperty(i, "RESOURCEPATH", {
        get: function() {
          return r;
        },
        enumerable: !1,
        configurable: !0
      }), i;
    }()
  );
  return Un.default = n, Un;
}
var Wn = {}, tf;
function sO() {
  if (tf)
    return Wn;
  tf = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(h) {
        try {
          p(u.next(h));
        } catch (m) {
          l(m);
        }
      }
      function d(h) {
        try {
          p(u.throw(h));
        } catch (m) {
          l(m);
        }
      }
      function p(h) {
        h.done ? f(h.value) : o(h.value).then(v, d);
      }
      p((u = u.apply(a, s || [])).next());
    });
  }, t = P && P.__generator || function(a, s) {
    var c = { label: 0, sent: function() {
      if (f[0] & 1)
        throw f[1];
      return f[1];
    }, trys: [], ops: [] }, u, o, f, l;
    return l = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function v(p) {
      return function(h) {
        return d([p, h]);
      };
    }
    function d(p) {
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (u = 1, o && (f = p[0] & 2 ? o.return : p[0] ? o.throw || ((f = o.return) && f.call(o), 0) : o.next) && !(f = f.call(o, p[1])).done)
            return f;
          switch (o = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
            case 0:
            case 1:
              f = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (f = c.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < f[1]) {
                c.label = f[1], f = p;
                break;
              }
              if (f && c.label < f[2]) {
                c.label = f[2], c.ops.push(p);
                break;
              }
              f[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = s.call(a, c);
        } catch (h) {
          p = [6, h], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Wn, "__esModule", { value: !0 });
  var n = r(gh()), i = (
    /** @class */
    function() {
      function a(s, c) {
        this.presetId = s, this.apiCall = c;
      }
      return a.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, a.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, a.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.presetId);
      }, a;
    }()
  );
  return Wn.default = i, Wn;
}
var Bn = {}, zn = {}, rf;
function yh() {
  if (rf)
    return zn;
  rf = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          d(c.next(p));
        } catch (h) {
          f(h);
        }
      }
      function v(p) {
        try {
          d(c.throw(p));
        } catch (h) {
          f(h);
        }
      }
      function d(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      d((c = c.apply(i, a || [])).next());
    });
  }, t = P && P.__generator || function(i, a) {
    var s = { label: 0, sent: function() {
      if (o[0] & 1)
        throw o[1];
      return o[1];
    }, trys: [], ops: [] }, c, u, o, f;
    return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function l(d) {
      return function(p) {
        return v([d, p]);
      };
    }
    function v(d) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = d[0] & 2 ? u.return : d[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, d[1])).done)
            return o;
          switch (u = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return s.label++, { value: d[1], done: !1 };
            case 5:
              s.label++, u = d[1], d = [0];
              continue;
            case 7:
              d = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                s = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                s.label = d[1];
                break;
              }
              if (d[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = d;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(d);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          d = a.call(i, s);
        } catch (p) {
          d = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(zn, "__esModule", { value: !0 });
  var r = "/analytics/rules", n = (
    /** @class */
    function() {
      function i(a) {
        this.apiCall = a, this.apiCall = a;
      }
      return i.prototype.upsert = function(a, s) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            return [2, this.apiCall.put(this.endpointPath(a), s)];
          });
        });
      }, i.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, i.prototype.endpointPath = function(a) {
        return "".concat(i.RESOURCEPATH).concat(a === void 0 ? "" : "/" + a);
      }, Object.defineProperty(i, "RESOURCEPATH", {
        get: function() {
          return r;
        },
        enumerable: !1,
        configurable: !0
      }), i;
    }()
  );
  return zn.default = n, zn;
}
var Vn = {}, nf;
function uO() {
  if (nf)
    return Vn;
  nf = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(h) {
        try {
          p(u.next(h));
        } catch (m) {
          l(m);
        }
      }
      function d(h) {
        try {
          p(u.throw(h));
        } catch (m) {
          l(m);
        }
      }
      function p(h) {
        h.done ? f(h.value) : o(h.value).then(v, d);
      }
      p((u = u.apply(a, s || [])).next());
    });
  }, t = P && P.__generator || function(a, s) {
    var c = { label: 0, sent: function() {
      if (f[0] & 1)
        throw f[1];
      return f[1];
    }, trys: [], ops: [] }, u, o, f, l;
    return l = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function v(p) {
      return function(h) {
        return d([p, h]);
      };
    }
    function d(p) {
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (u = 1, o && (f = p[0] & 2 ? o.return : p[0] ? o.throw || ((f = o.return) && f.call(o), 0) : o.next) && !(f = f.call(o, p[1])).done)
            return f;
          switch (o = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
            case 0:
            case 1:
              f = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (f = c.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < f[1]) {
                c.label = f[1], f = p;
                break;
              }
              if (f && c.label < f[2]) {
                c.label = f[2], c.ops.push(p);
                break;
              }
              f[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = s.call(a, c);
        } catch (h) {
          p = [6, h], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Vn, "__esModule", { value: !0 });
  var n = r(yh()), i = (
    /** @class */
    function() {
      function a(s, c) {
        this.name = s, this.apiCall = c;
      }
      return a.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, a.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(s) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, a.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.name);
      }, a;
    }()
  );
  return Vn.default = i, Vn;
}
var af;
function cO() {
  if (af)
    return Bn;
  af = 1;
  var e = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  var t = e(yh()), r = e(uO()), n = "/analytics", i = (
    /** @class */
    function() {
      function a(s) {
        this.apiCall = s, this.individualAnalyticsRules = {}, this.apiCall = s, this._analyticsRules = new t.default(this.apiCall);
      }
      return a.prototype.rules = function(s) {
        return s === void 0 ? this._analyticsRules : (this.individualAnalyticsRules[s] === void 0 && (this.individualAnalyticsRules[s] = new r.default(s, this.apiCall)), this.individualAnalyticsRules[s]);
      }, Object.defineProperty(a, "RESOURCEPATH", {
        get: function() {
          return n;
        },
        enumerable: !1,
        configurable: !0
      }), a;
    }()
  );
  return Bn.default = i, Bn;
}
var of;
function lO() {
  if (of)
    return fn;
  of = 1;
  var e = P && P.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(fn, "__esModule", { value: !0 });
  var t = e(Zd()), r = e(uh()), n = e(St()), i = e(JS()), a = e(ph()), s = e(XS()), c = e(vh()), u = e(rO()), o = e(nO()), f = e(iO()), l = e(aO()), v = e(oO()), d = e(mh()), p = e(gh()), h = e(sO()), m = e(cO()), g = (
    /** @class */
    function() {
      function _(w) {
        var b;
        w.sendApiKeyAsQueryParam = (b = w.sendApiKeyAsQueryParam) !== null && b !== void 0 ? b : !1, this.configuration = new t.default(w), this.apiCall = new r.default(this.configuration), this.debug = new o.default(this.apiCall), this.metrics = new f.default(this.apiCall), this.health = new l.default(this.apiCall), this.operations = new v.default(this.apiCall), this.multiSearch = new d.default(this.apiCall, this.configuration), this._collections = new n.default(this.apiCall), this.individualCollections = {}, this._aliases = new a.default(this.apiCall), this.individualAliases = {}, this._keys = new c.default(this.apiCall), this.individualKeys = {}, this._presets = new p.default(this.apiCall), this.individualPresets = {}, this.analytics = new m.default(this.apiCall);
      }
      return _.prototype.collections = function(w) {
        return w === void 0 ? this._collections : (this.individualCollections[w] === void 0 && (this.individualCollections[w] = new i.default(w, this.apiCall, this.configuration)), this.individualCollections[w]);
      }, _.prototype.aliases = function(w) {
        return w === void 0 ? this._aliases : (this.individualAliases[w] === void 0 && (this.individualAliases[w] = new s.default(w, this.apiCall)), this.individualAliases[w]);
      }, _.prototype.keys = function(w) {
        return w === void 0 ? this._keys : (this.individualKeys[w] === void 0 && (this.individualKeys[w] = new u.default(w, this.apiCall)), this.individualKeys[w]);
      }, _.prototype.presets = function(w) {
        return w === void 0 ? this._presets : (this.individualPresets[w] === void 0 && (this.individualPresets[w] = new h.default(w, this.apiCall)), this.individualPresets[w]);
      }, _;
    }()
  );
  return fn.default = g, fn;
}
var Qn = {}, cr = {}, sf;
function fO() {
  if (sf)
    return cr;
  sf = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.SearchOnlyCollection = void 0;
  var e = lh(), t = (
    /** @class */
    function() {
      function r(n, i, a) {
        this.name = n, this.apiCall = i, this.configuration = a, this._documents = new e.SearchOnlyDocuments(this.name, this.apiCall, this.configuration);
      }
      return r.prototype.documents = function() {
        return this._documents;
      }, r;
    }()
  );
  return cr.SearchOnlyCollection = t, cr;
}
var uf;
function dO() {
  if (uf)
    return Qn;
  uf = 1;
  var e = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Qn, "__esModule", { value: !0 });
  var t = e(Zd()), r = e(uh()), n = e(mh()), i = fO(), a = (
    /** @class */
    function() {
      function s(c) {
        var u;
        c.sendApiKeyAsQueryParam = (u = c.sendApiKeyAsQueryParam) !== null && u !== void 0 ? u : !0, c.sendApiKeyAsQueryParam === !0 && (c.apiKey || "").length > 2e3 && (console.warn("[typesense] API Key is longer than 2000 characters which is over the allowed limit, so disabling sending it as a query parameter."), c.sendApiKeyAsQueryParam = !1), this.configuration = new t.default(c), this.apiCall = new r.default(this.configuration), this.multiSearch = new n.default(this.apiCall, this.configuration, !0), this.individualCollections = {};
      }
      return s.prototype.clearCache = function() {
        this.multiSearch.clearCache(), Object.entries(this.individualCollections).forEach(function(c) {
          c[0];
          var u = c[1];
          u.documents().clearCache();
        });
      }, s.prototype.collections = function(c) {
        if (c)
          return this.individualCollections[c] === void 0 && (this.individualCollections[c] = new i.SearchOnlyCollection(c, this.apiCall, this.configuration)), this.individualCollections[c];
        throw new Error("Typesense.SearchClient only supports search operations, so the collectionName that needs to be searched must be specified. Use Typesense.Client if you need to access the collection object.");
      }, s;
    }()
  );
  return Qn.default = a, Qn;
}
var cf;
function hO() {
  if (cf)
    return rt;
  cf = 1;
  var e = P && P.__createBinding || (Object.create ? function(c, u, o, f) {
    f === void 0 && (f = o);
    var l = Object.getOwnPropertyDescriptor(u, o);
    (!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return u[o];
    } }), Object.defineProperty(c, f, l);
  } : function(c, u, o, f) {
    f === void 0 && (f = o), c[f] = u[o];
  }), t = P && P.__setModuleDefault || (Object.create ? function(c, u) {
    Object.defineProperty(c, "default", { enumerable: !0, value: u });
  } : function(c, u) {
    c.default = u;
  }), r = P && P.__importStar || function(c) {
    if (c && c.__esModule)
      return c;
    var u = {};
    if (c != null)
      for (var o in c)
        o !== "default" && Object.prototype.hasOwnProperty.call(c, o) && e(u, c, o);
    return t(u, c), u;
  }, n = P && P.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(rt, "__esModule", { value: !0 }), rt.Errors = rt.SearchClient = rt.Client = void 0;
  var i = n(lO());
  rt.Client = i.default;
  var a = n(dO());
  rt.SearchClient = a.default;
  var s = r(Zr());
  return rt.Errors = s, rt.default = { Client: i.default, SearchClient: a.default, Errors: s }, rt;
}
var lr = {}, xa = { exports: {} }, ja = { exports: {} }, lf;
function pO() {
  return lf || (lf = 1, function(e) {
    function t(r) {
      if (Array.isArray(r))
        return r;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ja)), ja.exports;
}
var Ta = { exports: {} }, ff;
function vO() {
  return ff || (ff = 1, function(e) {
    function t(r, n) {
      var i = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (i != null) {
        var a, s, c, u, o = [], f = !0, l = !1;
        try {
          if (c = (i = i.call(r)).next, n === 0) {
            if (Object(i) !== i)
              return;
            f = !1;
          } else
            for (; !(f = (a = c.call(i)).done) && (o.push(a.value), o.length !== n); f = !0)
              ;
        } catch (v) {
          l = !0, s = v;
        } finally {
          try {
            if (!f && i.return != null && (u = i.return(), Object(u) !== u))
              return;
          } finally {
            if (l)
              throw s;
          }
        }
        return o;
      }
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ta)), Ta.exports;
}
var Ca = { exports: {} }, Aa = { exports: {} }, df;
function bh() {
  return df || (df = 1, function(e) {
    function t(r, n) {
      (n == null || n > r.length) && (n = r.length);
      for (var i = 0, a = new Array(n); i < n; i++)
        a[i] = r[i];
      return a;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Aa)), Aa.exports;
}
var hf;
function wh() {
  return hf || (hf = 1, function(e) {
    var t = bh();
    function r(n, i) {
      if (n) {
        if (typeof n == "string")
          return t(n, i);
        var a = Object.prototype.toString.call(n).slice(8, -1);
        if (a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set")
          return Array.from(n);
        if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return t(n, i);
      }
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ca)), Ca.exports;
}
var $a = { exports: {} }, pf;
function mO() {
  return pf || (pf = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }($a)), $a.exports;
}
var vf;
function _h() {
  return vf || (vf = 1, function(e) {
    var t = pO(), r = vO(), n = wh(), i = mO();
    function a(s, c) {
      return t(s) || r(s, c) || n(s, c) || i();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(xa)), xa.exports;
}
var mf;
function gO() {
  if (mf)
    return lr;
  mf = 1;
  var e = Gr;
  Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.SearchRequestAdapter = void 0;
  var t = e(Gd()), r = e(Jd()), n = e(_h()), i = e(Jr()), a = e(Xr()), s = /* @__PURE__ */ function() {
    function c(u, o, f) {
      (0, i.default)(this, c), this.instantsearchRequests = u, this.typesenseClient = o, this.configuration = f, this.additionalSearchParameters = f.additionalSearchParameters, this.collectionSpecificSearchParameters = f.collectionSpecificSearchParameters;
    }
    return (0, a.default)(c, [{
      key: "_adaptFacetFilters",
      value: function(o) {
        var f = this, l = "";
        if (!o)
          return l;
        var v = o.map(function(d) {
          if (Array.isArray(d)) {
            var p = {};
            d.forEach(function(L) {
              var k = f._parseFacetFilter(L), A = k.fieldName, re = k.fieldValue;
              p[A] = p[A] || [], p[A].push(re);
            }), Object.keys(p).length > 1 && console.error("[Typesense-Instantsearch-Adapter] Typesense does not support cross-field ORs at the moment. The adapter could not OR values between these fields: ".concat(Object.keys(p).join(",")));
            var h = Object.keys(p)[0], m = p[h], g = m.reduce(function(L, k) {
              return k.startsWith("-") && !f._isNumber(k) ? L[0].push(k.substring(1)) : L[1].push(k), L;
            }, [[], []]), _ = (0, n.default)(g, 2), w = _[0], b = _[1], y = [];
            b.length > 0 && y.push("".concat(h, ":=[").concat(b.map(function(L) {
              return f._escapeFacetValue(L);
            }).join(","), "]")), w.length > 0 && y.push("".concat(h, ":!=[").concat(w.map(function(L) {
              return f._escapeFacetValue(L);
            }).join(","), "]"));
            var j = y.filter(function(L) {
              return L;
            }).join(" && ");
            return j;
          } else {
            var $ = f._parseFacetFilter(d), R = $.fieldName, q = $.fieldValue, V;
            return q.startsWith("-") && !f._isNumber(q) ? V = "".concat(R, ":!=[").concat(f._escapeFacetValue(q.substring(1)), "]") : V = "".concat(R, ":=[").concat(f._escapeFacetValue(q), "]"), V;
          }
        });
        return l = v.join(" && "), l;
      }
    }, {
      key: "_parseFacetFilter",
      value: function(o) {
        var f, l, v, d, p;
        if (((f = this.configuration.facetableFieldsWithSpecialCharacters) === null || f === void 0 ? void 0 : f.length) > 0) {
          var h = this.configuration.facetableFieldsWithSpecialCharacters.flat().map(function(m) {
            return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          });
          if (l = new RegExp("^(".concat(h.join("|"), "):(.*)$")), v = o.match(l), v != null)
            return d = "".concat(v[1]), p = "".concat(v[2]), {
              fieldName: d,
              fieldValue: p
            };
        }
        return l = this.constructor.DEFAULT_FACET_FILTER_STRING_MATCHING_REGEX, v = o.match(l), v == null ? console.error("[Typesense-Instantsearch-Adapter] Parsing failed for a facet filter `".concat(o, "` with the Regex `").concat(l, "`. If you have field names with special characters, be sure to add them to a parameter called `facetableFieldsWithSpecialCharacters` when instantiating the adapter.")) : (d = "".concat(v[1]).concat(v[2]), p = "".concat(v[3])), {
          fieldName: d,
          fieldValue: p
        };
      }
    }, {
      key: "_escapeFacetValue",
      value: function(o) {
        return typeof o == "boolean" || o === "true" || o === "false" || this._isNumber(o) ? o : "`".concat(o, "`");
      }
    }, {
      key: "_isNumber",
      value: function(o) {
        return Number.isInteger(o % 1) || // Mod 1 will automatically try converting string values to integer/float
        !!(o % 1);
      }
    }, {
      key: "_adaptNumericFilters",
      value: function(o) {
        var f = this, l = "";
        if (!o)
          return l;
        var v = {};
        o.forEach(function(p) {
          var h = f._parseNumericFilter(p), m = h.fieldName, g = h.operator, _ = h.fieldValue;
          v[m] = v[m] || {}, v[m][g] = _;
        });
        var d = [];
        return Object.keys(v).forEach(function(p) {
          v[p]["<="] != null && v[p][">="] != null ? d.push("".concat(p, ":=[").concat(v[p][">="], "..").concat(v[p]["<="], "]")) : v[p]["<="] != null ? d.push("".concat(p, ":<=").concat(v[p]["<="])) : v[p][">="] != null ? d.push("".concat(p, ":>=").concat(v[p][">="])) : v[p]["="] != null ? d.push("".concat(p, ":=").concat(v[p]["="])) : console.warn("[Typesense-Instantsearch-Adapter] Unsupported operator found ".concat(JSON.stringify(v[p])));
        }), l = d.join(" && "), l;
      }
    }, {
      key: "_parseNumericFilter",
      value: function(o) {
        var f, l, v, d, p, h;
        if (((f = this.configuration.facetableFieldsWithSpecialCharacters) === null || f === void 0 ? void 0 : f.length) > 0) {
          var m = this.configuration.facetableFieldsWithSpecialCharacters.map(function(y) {
            return y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          });
          if (l = new RegExp("^(".concat(m.join("|"), ")(<=|>=|>|<|=)(.*)$")), v = o.match(l), v != null) {
            var g = v, _ = (0, n.default)(g, 4);
            return d = _[1], p = _[2], h = _[3], {
              fieldName: d,
              operator: p,
              fieldValue: h
            };
          }
        }
        if (l = this.constructor.DEFAULT_NUMERIC_FILTER_STRING_MATCHING_REGEX, v = o.match(l), v == null)
          console.error("[Typesense-Instantsearch-Adapter] Parsing failed for a numeric filter `".concat(o, "` with the Regex `").concat(l, "`. If you have field names with special characters, be sure to add them to a parameter called `facetableFieldsWithSpecialCharacters` when instantiating the adapter."));
        else {
          var w = v, b = (0, n.default)(w, 4);
          d = b[1], p = b[2], h = b[3];
        }
        return {
          fieldName: d,
          operator: p,
          fieldValue: h
        };
      }
    }, {
      key: "_adaptGeoFilter",
      value: function(o) {
        var f = o.insideBoundingBox, l = o.aroundRadius, v = o.aroundLatLng, d = o.insidePolygon;
        if (f) {
          var p, h, m, g;
          if (Array.isArray(f)) {
            var _ = f.flat(), w = (0, n.default)(_, 4);
            p = w[0], h = w[1], m = w[2], g = w[3];
          } else {
            var b = f.split(","), y = (0, n.default)(b, 4);
            p = y[0], h = y[1], m = y[2], g = y[3];
          }
          return "".concat(this.configuration.geoLocationField, ":(").concat(p, ", ").concat(h, ", ").concat(p, ", ").concat(g, ", ").concat(m, ", ").concat(g, ", ").concat(m, ", ").concat(h, ")");
        }
        if (v || l) {
          if (!l || l === "all")
            throw new Error("[Typesense-Instantsearch-Adapter] In Typesense, geo-filtering around a lat/lng also requires a numerical radius. So the `aroundRadius` parameter is required when `aroundLatLng` is used. If you intend to just geo-sort around a lat/long, you want to use the sortBy InstantSearch widget (or a virtual sortBy custom widget).");
          var j = "".concat(parseFloat(l) / 1e3, " km");
          return "".concat(this.configuration.geoLocationField, ":(").concat(v, ", ").concat(j, ")");
        }
        if (d) {
          var $ = d;
          return Array.isArray(d) && ($ = d.flat().join(",")), "".concat(this.configuration.geoLocationField, ":(").concat($, ")");
        }
      }
    }, {
      key: "_adaptFilters",
      value: function(o) {
        var f = [];
        return o.filters && f.push(o.filters), f.push(this._adaptFacetFilters(o.facetFilters)), f.push(this._adaptNumericFilters(o.numericFilters)), f.push(this._adaptGeoFilter(o)), f.filter(function(l) {
          return l && l !== "";
        }).join(" && ");
      }
    }, {
      key: "_adaptIndexName",
      value: function(o) {
        return o.match(this.constructor.INDEX_NAME_MATCHING_REGEX)[1];
      }
    }, {
      key: "_adaptSortBy",
      value: function(o) {
        return o.match(this.constructor.INDEX_NAME_MATCHING_REGEX)[3];
      }
    }, {
      key: "_buildSearchParameters",
      value: function(o) {
        for (var f = o.params, l = o.indexName, v = this._adaptIndexName(l), d = {}, p = 0, h = Object.entries(this.additionalSearchParameters); p < h.length; p++) {
          var m = (0, n.default)(h[p], 2), g = m[0], _ = m[1];
          d[this._camelToSnakeCase(g)] = _;
        }
        if (this.collectionSpecificSearchParameters[v])
          for (var w = 0, b = Object.entries(this.collectionSpecificSearchParameters[v]); w < b.length; w++) {
            var y = (0, n.default)(b[w], 2), j = y[0], $ = y[1];
            d[this._camelToSnakeCase(j)] = $;
          }
        var R = Object.assign({}, d), q = this._adaptSortBy(l);
        return Object.assign(R, {
          collection: v,
          q: f.query === "" || f.query === void 0 ? "*" : f.query,
          facet_by: [f.facets].flat().join(","),
          filter_by: this._adaptFilters(f) || d.filter_by,
          sort_by: q || d.sort_by,
          max_facet_values: f.maxValuesPerFacet,
          page: (f.page || 0) + 1
        }), f.hitsPerPage && (R.per_page = f.hitsPerPage), f.facetQuery && (R.facet_query = "".concat(f.facetName, ":").concat(f.facetQuery), R.per_page = 0), f.typesenseVectorQuery && (R.vector_query = f.typesenseVectorQuery, R.q = "*"), Object.fromEntries(Object.entries(R).filter(function(V) {
          var L = (0, n.default)(V, 2);
          L[0];
          var k = L[1];
          return k != null && k !== "";
        }));
      }
    }, {
      key: "_camelToSnakeCase",
      value: function(o) {
        return o.split(/(?=[A-Z])/).join("_").toLowerCase();
      }
    }, {
      key: "request",
      value: function() {
        var u = (0, r.default)(/* @__PURE__ */ t.default.mark(function f() {
          var l = this, v;
          return t.default.wrap(function(p) {
            for (; ; )
              switch (p.prev = p.next) {
                case 0:
                  return v = this.instantsearchRequests.map(function(h) {
                    return l._buildSearchParameters(h);
                  }), p.abrupt("return", this.typesenseClient.multiSearch.perform({
                    searches: v
                  }));
                case 2:
                case "end":
                  return p.stop();
              }
          }, f, this);
        }));
        function o() {
          return u.apply(this, arguments);
        }
        return o;
      }()
    }], [{
      key: "INDEX_NAME_MATCHING_REGEX",
      get: function() {
        return new RegExp("^(.+?)(?=(/sort/(.*))|$)");
      }
    }, {
      key: "DEFAULT_FACET_FILTER_STRING_MATCHING_REGEX",
      get: function() {
        return new RegExp("(.*)((?!:).):(?!:)(.*)");
      }
    }, {
      key: "DEFAULT_NUMERIC_FILTER_STRING_MATCHING_REGEX",
      get: function() {
        return new RegExp("(.*?)(<=|>=|>|<|=)(.*)");
      }
    }]), c;
  }();
  return lr.SearchRequestAdapter = s, lr;
}
var fr = {}, Ia = { exports: {} }, Fa = { exports: {} }, gf;
function yO() {
  return gf || (gf = 1, function(e) {
    var t = bh();
    function r(n) {
      if (Array.isArray(n))
        return t(n);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Fa)), Fa.exports;
}
var Na = { exports: {} }, yf;
function bO() {
  return yf || (yf = 1, function(e) {
    function t(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Na)), Na.exports;
}
var Da = { exports: {} }, bf;
function wO() {
  return bf || (bf = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Da)), Da.exports;
}
var wf;
function _O() {
  return wf || (wf = 1, function(e) {
    var t = yO(), r = bO(), n = wh(), i = wO();
    function a(s) {
      return t(s) || r(s) || n(s) || i();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ia)), Ia.exports;
}
var ka = { exports: {} }, _f;
function SO() {
  return _f || (_f = 1, function(e) {
    var t = Xd();
    function r(n, i, a) {
      return i = t(i), i in n ? Object.defineProperty(n, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : n[i] = a, n;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ka)), ka.exports;
}
var dr = {}, Sf;
function Sh() {
  if (Sf)
    return dr;
  Sf = 1, Object.defineProperty(dr, "__esModule", {
    value: !0
  }), dr.utils = void 0;
  var e = {
    _adaptHighlightTag: function(r, n, i) {
      return r.replace(new RegExp("<mark>", "g"), n || "<mark>").replace(new RegExp("</mark>", "g"), i || "</mark>");
    },
    _adaptNumberOfPages: function() {
      var r = this.typesenseResponse.found / this.typesenseResponse.request_params.per_page;
      return Number.isFinite(r) ? Math.ceil(r) : 1;
    }
  };
  return dr.utils = e, dr;
}
var Of;
function OO() {
  if (Of)
    return fr;
  Of = 1;
  var e = Gr;
  Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.SearchResponseAdapter = void 0;
  var t = e(li()), r = e(_h()), n = e(_O()), i = e(SO()), a = e(Jr()), s = e(Xr()), c = Sh();
  function u(l, v) {
    var d = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(l);
      v && (p = p.filter(function(h) {
        return Object.getOwnPropertyDescriptor(l, h).enumerable;
      })), d.push.apply(d, p);
    }
    return d;
  }
  function o(l) {
    for (var v = 1; v < arguments.length; v++) {
      var d = arguments[v] != null ? arguments[v] : {};
      v % 2 ? u(Object(d), !0).forEach(function(p) {
        (0, i.default)(l, p, d[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(d)) : u(Object(d)).forEach(function(p) {
        Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(d, p));
      });
    }
    return l;
  }
  var f = /* @__PURE__ */ function() {
    function l(v, d, p) {
      var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      (0, a.default)(this, l), this.typesenseResponse = v, this.instantsearchRequest = d, this.configuration = p, this.allTypesenseResponses = h;
    }
    return (0, s.default)(l, [{
      key: "_adaptGroupedHits",
      value: function(d) {
        var p = this, h = [];
        return h = d.map(function(m) {
          var g = p._adaptHits(m.hits);
          return g.forEach(function(_) {
            _.group_key = _._group_key = m.group_key, m.found && (_._group_found = m.found);
          }), g;
        }), this.configuration.flattenGroupedHits ? h = h.flat() : h = h.map(function(m) {
          return o(o({}, m[0]), {}, {
            _grouped_hits: m
          });
        }), h;
      }
    }, {
      key: "_adaptHits",
      value: function(d) {
        var p = this, h = [];
        return h = d.map(function(m) {
          var g = o({}, m.document);
          g.objectID = m.document.id, g._snippetResult = p._adaptHighlightResult(m, "snippet"), g._highlightResult = p._adaptHighlightResult(m, "value"), g._rawTypesenseHit = m, ["text_match", "geo_distance_meters", "curated", "text_match_info", "hybrid_search_info", "vector_distance"].forEach(function(w) {
            Object.keys(m).includes(w) && !Object.keys(g).includes(w) && (g[w] = m[w]);
          });
          var _ = g[p.configuration.geoLocationField];
          return _ && (g._geoloc = {
            lat: _[0],
            lng: _[1]
          }), g;
        }), h;
      }
    }, {
      key: "_adaptHighlightResult",
      value: function(d, p) {
        var h = {};
        return d.highlight != null && this.isHighlightPost0240RCN32Format(d.highlight) ? this.adaptHighlightObject(d, h, p) : this.adaptHighlightsArray(d, h, p), h;
      }
    }, {
      key: "isHighlightPost0240RCN32Format",
      value: function(d) {
        return d.full == null && d.snippet == null;
      }
    }, {
      key: "adaptHighlightsArray",
      value: function(d, p, h) {
        var m = this;
        Object.assign.apply(Object, [p].concat((0, n.default)(Object.entries(d.document).map(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1];
          return (0, i.default)({}, w, {
            value: b,
            matchLevel: "none",
            matchedWords: []
          });
        })))), d.highlights.forEach(function(g) {
          p[g.field] = {
            value: g[h] || g["".concat(h, "s")],
            matchLevel: "full",
            matchedWords: g.matched_tokens
          }, g.indices && (p[g.field].matchedIndices = g.indices);
        }), Object.entries(p).forEach(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1], y = w, j = b.value, $ = b.matchLevel, R = b.matchedWords, q = b.matchedIndices;
          j == null ? p[y] = m._adaptHighlightNullValue() : Array.isArray(j) ? (p[y] = [], d.document[y].forEach(function(V, L) {
            q && q.includes(L) ? p[y].push({
              value: m._adaptHighlightTag("".concat(j[q.indexOf(L)]), m.instantsearchRequest.params.highlightPreTag, m.instantsearchRequest.params.highlightPostTag),
              matchLevel: $,
              matchedWords: R[L]
            }) : (0, t.default)(V) === "object" ? p[y].push(m._adaptHighlightInObjectValue(V, {}, h)) : p[y].push({
              value: "".concat(V),
              matchLevel: "none",
              matchedWords: []
            });
          })) : (0, t.default)(j) === "object" ? p[y] = m._adaptHighlightInObjectValue(j, {}, h) : p[y].value = m._adaptHighlightTag("".concat(j), m.instantsearchRequest.params.highlightPreTag, m.instantsearchRequest.params.highlightPostTag);
        });
      }
    }, {
      key: "adaptHighlightObject",
      value: function(d, p, h) {
        Object.assign(p, this._adaptHighlightInObjectValue(d.document, d.highlight, h));
      }
    }, {
      key: "_adaptHighlightInObjectValue",
      value: function(d, p, h) {
        var m = this;
        return Object.assign.apply(Object, [{}].concat((0, n.default)(Object.entries(d).map(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1], y;
          if (b == null)
            y = m._adaptHighlightNullValue();
          else if (Array.isArray(b)) {
            var j;
            y = m._adaptHighlightInArrayValue(b, (j = p == null ? void 0 : p[w]) !== null && j !== void 0 ? j : [], h);
          } else if ((0, t.default)(b) === "object") {
            var $;
            y = m._adaptHighlightInObjectValue(b, ($ = p == null ? void 0 : p[w]) !== null && $ !== void 0 ? $ : {}, h);
          } else
            y = m._adaptHighlightInPrimitiveValue(b, p == null ? void 0 : p[w], h);
          return (0, i.default)({}, w, y);
        }))));
      }
    }, {
      key: "_adaptHighlightInArrayValue",
      value: function(d, p, h) {
        var m = this;
        return d.map(function(g, _) {
          var w;
          if (g == null)
            w = m._adaptHighlightNullValue();
          else if (Array.isArray(g)) {
            var b;
            w = m._adaptHighlightInArrayValue(g, (b = p == null ? void 0 : p[_]) !== null && b !== void 0 ? b : [], h);
          } else if ((0, t.default)(g) === "object") {
            var y;
            w = m._adaptHighlightInObjectValue(g, (y = p == null ? void 0 : p[_]) !== null && y !== void 0 ? y : {}, h);
          } else
            w = m._adaptHighlightInPrimitiveValue(g, p == null ? void 0 : p[_], h);
          return w;
        });
      }
    }, {
      key: "_adaptHighlightInPrimitiveValue",
      value: function(d, p, h) {
        if (p != null) {
          var m, g;
          return {
            value: this._adaptHighlightTag("".concat((m = (g = p[h]) !== null && g !== void 0 ? g : p.highlight) !== null && m !== void 0 ? m : p.snippet), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag),
            matchLevel: (p.matched_tokens || []).length > 0 ? "full" : "none",
            matchedWords: p.matched_tokens || []
          };
        } else
          return {
            // Convert all values to strings
            value: this._adaptHighlightTag("".concat(d), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag),
            matchLevel: "none",
            matchedWords: []
          };
      }
    }, {
      key: "_adaptHighlightNullValue",
      value: function() {
        return {
          value: "",
          matchLevel: "none",
          matchedWords: []
        };
      }
    }, {
      key: "_adaptFacets",
      value: function(d) {
        var p = {};
        return d.forEach(function(h) {
          Object.assign(p, (0, i.default)({}, h.field_name, Object.assign.apply(Object, [{}].concat((0, n.default)(h.counts.map(function(m) {
            return (0, i.default)({}, m.value, m.count);
          }))))));
        }), p;
      }
    }, {
      key: "_adaptFacetStats",
      value: function(d) {
        var p = {};
        return d.forEach(function(h) {
          Object.keys(h.stats).length > 0 && Object.assign(p, (0, i.default)({}, h.field_name, h.stats));
        }), p;
      }
    }, {
      key: "_adaptRenderingContent",
      value: function(d) {
        var p, h = Object.assign({}, this.configuration.renderingContent);
        return ((p = h.facetOrdering) === null || p === void 0 || (p = p.facets) === null || p === void 0 ? void 0 : p.order) == null && (h.facetOrdering = h.facetOrdering || {}, h.facetOrdering.facets = h.facetOrdering.facets || {}, h.facetOrdering.facets.order = (0, n.default)(new Set(d.map(function(m) {
          return m.field_name;
        }).concat(this.allTypesenseResponses.map(function(m) {
          return m.facet_counts || [];
        }).flat().map(function(m) {
          return m.field_name;
        }).filter(function(m) {
          return m;
        }))))), h;
      }
    }, {
      key: "adapt",
      value: function() {
        var d = this._adaptRenderingContent(this.typesenseResponse.facet_counts || []), p = o({
          hits: this.typesenseResponse.grouped_hits ? this._adaptGroupedHits(this.typesenseResponse.grouped_hits) : this._adaptHits(this.typesenseResponse.hits),
          nbHits: this.typesenseResponse.found,
          page: this.typesenseResponse.page - 1,
          nbPages: this._adaptNumberOfPages(),
          hitsPerPage: this.typesenseResponse.request_params.per_page,
          facets: this._adaptFacets(this.typesenseResponse.facet_counts || []),
          facets_stats: this._adaptFacetStats(this.typesenseResponse.facet_counts || {}),
          query: this.typesenseResponse.request_params.q,
          processingTimeMS: this.typesenseResponse.search_time_ms
        }, Object.keys(d).length > 0 ? {
          renderingContent: d
        } : null);
        return p;
      }
    }]), l;
  }();
  return fr.SearchResponseAdapter = f, Object.assign(f.prototype, c.utils), fr;
}
var hr = {}, Rf;
function RO() {
  if (Rf)
    return hr;
  Rf = 1;
  var e = Gr;
  Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.FacetSearchResponseAdapter = void 0;
  var t = e(Jr()), r = e(Xr()), n = Sh(), i = /* @__PURE__ */ function() {
    function a(s, c) {
      (0, t.default)(this, a), this.typesenseResponse = s, this.instantsearchRequest = c;
    }
    return (0, r.default)(a, [{
      key: "_adaptFacetHits",
      value: function(c) {
        var u = this, o = {}, f = c.find(function(l) {
          return l.field_name === u.instantsearchRequest.params.facetName;
        });
        return o = f.counts.map(function(l) {
          return {
            value: l.value,
            highlighted: u._adaptHighlightTag(l.highlighted, u.instantsearchRequest.params.highlightPreTag, u.instantsearchRequest.params.highlightPostTag),
            count: l.count
          };
        }), o;
      }
    }, {
      key: "adapt",
      value: function() {
        var c = {
          facetHits: this._adaptFacetHits(this.typesenseResponse.facet_counts),
          exhaustiveFacetsCount: !0,
          processingTimeMS: this.typesenseResponse.search_time_ms
        };
        return c;
      }
    }]), a;
  }();
  return hr.FacetSearchResponseAdapter = i, Object.assign(i.prototype, n.utils), hr;
}
(function(e) {
  var t = Gr;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Gd()), n = t(Jd()), i = t(Jr()), a = t(Xr()), s = bS(), c = hO(), u = gO(), o = OO(), f = RO(), l = /* @__PURE__ */ function() {
    function v(d) {
      var p = this;
      (0, i.default)(this, v), this.updateConfiguration(d), this.searchClient = {
        clearCache: function() {
          return p.clearCache();
        },
        search: function(m) {
          return p.searchTypesenseAndAdapt(m);
        },
        searchForFacetValues: function(m) {
          return p.searchTypesenseForFacetValuesAndAdapt(m);
        }
      };
    }
    return (0, a.default)(v, [{
      key: "searchTypesenseAndAdapt",
      value: function() {
        var d = (0, n.default)(/* @__PURE__ */ r.default.mark(function h(m) {
          var g = this, _, w;
          return r.default.wrap(function(y) {
            for (; ; )
              switch (y.prev = y.next) {
                case 0:
                  return y.prev = 0, y.next = 3, this._adaptAndPerformTypesenseRequest(m);
                case 3:
                  return _ = y.sent, w = _.results.map(function(j, $) {
                    g._validateTypesenseResult(j);
                    var R = new o.SearchResponseAdapter(j, m[$], g.configuration, _.results);
                    return R.adapt();
                  }), y.abrupt("return", {
                    results: w
                  });
                case 8:
                  throw y.prev = 8, y.t0 = y.catch(0), console.error(y.t0), y.t0;
                case 12:
                case "end":
                  return y.stop();
              }
          }, h, this, [[0, 8]]);
        }));
        function p(h) {
          return d.apply(this, arguments);
        }
        return p;
      }()
    }, {
      key: "searchTypesenseForFacetValuesAndAdapt",
      value: function() {
        var d = (0, n.default)(/* @__PURE__ */ r.default.mark(function h(m) {
          var g = this, _, w;
          return r.default.wrap(function(y) {
            for (; ; )
              switch (y.prev = y.next) {
                case 0:
                  return y.prev = 0, y.next = 3, this._adaptAndPerformTypesenseRequest(m);
                case 3:
                  return _ = y.sent, w = _.results.map(function(j, $) {
                    g._validateTypesenseResult(j);
                    var R = new f.FacetSearchResponseAdapter(j, m[$], g.configuration);
                    return R.adapt();
                  }), y.abrupt("return", w);
                case 8:
                  throw y.prev = 8, y.t0 = y.catch(0), console.error(y.t0), y.t0;
                case 12:
                case "end":
                  return y.stop();
              }
          }, h, this, [[0, 8]]);
        }));
        function p(h) {
          return d.apply(this, arguments);
        }
        return p;
      }()
    }, {
      key: "_adaptAndPerformTypesenseRequest",
      value: function() {
        var d = (0, n.default)(/* @__PURE__ */ r.default.mark(function h(m) {
          var g, _;
          return r.default.wrap(function(b) {
            for (; ; )
              switch (b.prev = b.next) {
                case 0:
                  return g = new u.SearchRequestAdapter(m, this.typesenseClient, this.configuration), b.next = 3, g.request();
                case 3:
                  return _ = b.sent, b.abrupt("return", _);
                case 5:
                case "end":
                  return b.stop();
              }
          }, h, this);
        }));
        function p(h) {
          return d.apply(this, arguments);
        }
        return p;
      }()
    }, {
      key: "clearCache",
      value: function() {
        return this.typesenseClient = new c.SearchClient(this.configuration.server), this.searchClient;
      }
    }, {
      key: "updateConfiguration",
      value: function(p) {
        return this.configuration = new s.Configuration(p), this.configuration.validate(), this.typesenseClient = new c.SearchClient(this.configuration.server), !0;
      }
    }, {
      key: "_validateTypesenseResult",
      value: function(p) {
        if (p.error)
          throw new Error("".concat(p.code, " - ").concat(p.error));
        if (!p.hits && !p.grouped_hits)
          throw new Error("Did not find any hits. ".concat(p.code, " - ").concat(p.error));
      }
    }]), v;
  }();
  e.default = l;
})(Kd);
const PO = /* @__PURE__ */ Kt(Kd), EO = new PO({
  server: {
    apiKey: "UqQCcFk5tSdMDD0I3753gNCzwfjAzpd0",
    nodes: [
      {
        host: "i74olkjcuy69ze2vp-1.a1.typesense.net",
        port: "443",
        protocol: "https"
      }
    ]
  },
  additionalSearchParameters: {
    query_by: "name"
  }
}), Ps = EO.searchClient, xO = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => {
  const i = ii(() => ({
    leftColumnItems: [
      {
        attribute: "archive.name",
        icon: /* @__PURE__ */ G.jsx(Bd, {}),
        caption: ce.archive[e],
        renderDisplay: (a) => yt(a, "archive", e)
      },
      {
        attribute: "archive_place",
        icon: /* @__PURE__ */ G.jsx(Q_, {}),
        caption: ce.archiveLocation[e]
      },
      {
        attribute: "OrigDate",
        icon: /* @__PURE__ */ G.jsx(zd, {}),
        caption: ce.origDate[e]
      },
      {
        attribute: "works",
        icon: /* @__PURE__ */ G.jsx(g_, {}),
        caption: ce.works[e],
        renderDisplay: (a) => a != null && a.works ? a.works.map((s) => s.title).join(", ") : ""
      }
    ],
    rightPanel: {
      attribute: "text",
      label: ce.text[e]
    },
    headlineAttribute: "catalog_number",
    renderHeadlineAttribute: (a) => a.catalog_number ? /* @__PURE__ */ G.jsxs("span", { children: [
      "#",
      /* @__PURE__ */ G.jsx(
        Yr,
        {
          attribute: "catalog_number",
          hit: a,
          highlightedTagName: "mark"
        }
      )
    ] }) : /* @__PURE__ */ G.jsx(G.Fragment, {})
  }), [e]);
  return /* @__PURE__ */ G.jsx(Bo, { children: /* @__PURE__ */ G.jsx(
    as,
    {
      indexName: "bischoff",
      searchClient: Ps,
      children: /* @__PURE__ */ G.jsx(
        Os,
        {
          locale: e,
          hitConfig: i,
          onHitClick: t,
          hitWrapperComponent: r,
          getHitWrapperProps: n
        }
      )
    }
  ) });
}, jO = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => {
  const i = ii(() => ({
    leftColumnItems: [
      {
        attribute: "generic_title",
        icon: /* @__PURE__ */ G.jsx(iS, {}),
        caption: ce.genericTitle[e]
      },
      {
        attribute: "publication_date",
        icon: /* @__PURE__ */ G.jsx(zd, {}),
        caption: ce.publicationDate[e]
      },
      {
        attribute: "publication_location.name",
        icon: /* @__PURE__ */ G.jsx(eS, {}),
        caption: ce.publicationLocation[e],
        renderDisplay: (a) => Ui(a, "publication_location.name", e)
      },
      {
        attribute: "parent_edition.title",
        icon: /* @__PURE__ */ G.jsx(o_, {}),
        caption: ce.parentEdition[e],
        renderDisplay: (a) => Ui(a, "parent_edition.title", e)
      },
      {
        attribute: "status",
        icon: /* @__PURE__ */ G.jsx(h_, {}),
        caption: ce.status[e],
        renderDisplay: (a) => yt(a, "status", e)
      },
      {
        attribute: "line",
        icon: /* @__PURE__ */ G.jsx(A_, {}),
        caption: ce.line[e],
        renderDisplay: (a) => yt(a, "line", e)
      },
      {
        attribute: "format",
        icon: /* @__PURE__ */ G.jsx(H_, {}),
        caption: ce.format[e],
        renderDisplay: (a) => yt(a, "format", e)
      },
      {
        attribute: "author_id.full_name",
        icon: /* @__PURE__ */ G.jsx(Vd, {}),
        caption: ce.author[e],
        renderDisplay: (a) => Ui(a, "author_id.full_name", e)
      },
      {
        attribute: "archives",
        icon: /* @__PURE__ */ G.jsx(Wd, {}),
        caption: ce.archive[e],
        render: (a) => a.archives.join(", ")
      }
    ],
    rightPanel: {
      attribute: "title"
    }
  }), [e]);
  return /* @__PURE__ */ G.jsx(Bo, { children: /* @__PURE__ */ G.jsx(
    as,
    {
      indexName: "rumpf",
      searchClient: Ps,
      children: /* @__PURE__ */ G.jsx(
        Os,
        {
          locale: e,
          hitConfig: i,
          onHitClick: t,
          hitWrapperComponent: r,
          getHitWrapperProps: n
        }
      )
    }
  ) });
}, TO = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => {
  const i = {
    leftColumnItems: [
      {
        attribute: "date",
        icon: /* @__PURE__ */ G.jsx(x_, {}),
        caption: ce.date[e],
        renderDisplay: (a) => mS(a)
      },
      {
        attribute: "town",
        icon: /* @__PURE__ */ G.jsx(Bd, {}),
        caption: ce.city[e],
        renderDisplay: (a) => yt(a, "town.name", e)
      },
      {
        attribute: "place_given",
        icon: /* @__PURE__ */ G.jsx(W_, {}),
        caption: ce.place_given[e],
        renderDisplay: (a) => yt(a, "date_of_place.name", e)
      },
      {
        attribute: "titulature",
        icon: /* @__PURE__ */ G.jsx(Wd, {}),
        caption: ce.titulature[e],
        renderDisplay: (a) => yt(a, "titulature.full_name", e)
      },
      {
        attribute: "commandement",
        icon: /* @__PURE__ */ G.jsx(Vd, {}),
        caption: ce.commandement[e],
        renderDisplay: (a) => yt(a, "commandement.full_name", e)
      }
    ],
    rightPanel: {
      attribute: "texte",
      label: ce.text[e]
    },
    headlineAttribute: "number_order",
    renderHeadlineAttribute: (a) => /* @__PURE__ */ G.jsxs("span", { children: [
      "#",
      /* @__PURE__ */ G.jsx(
        Yr,
        {
          attribute: "number_order",
          hit: a,
          highlightedTagName: "mark"
        }
      )
    ] }),
    sortFields: [
      { value: "textes", label: ce.relevance[e] },
      { value: "textes:timestamp:asc", label: ce.chronologicalAsc[e] },
      { value: "textes:timestamp:desc", label: ce.chronologicalDesc[e] },
      { value: "textes:number_order:asc", label: ce.numberOrderAsc[e] },
      { value: "textes:number_order:desc", label: ce.numberOrderDesc[e] }
    ]
  };
  return /* @__PURE__ */ G.jsx(Bo, { children: /* @__PURE__ */ G.jsx(
    as,
    {
      indexName: "supplique",
      searchClient: Ps,
      children: /* @__PURE__ */ G.jsx(
        Os,
        {
          locale: e,
          hitConfig: i,
          onHitClick: t,
          hitWrapperComponent: r,
          getHitWrapperProps: n
        }
      )
    }
  ) });
}, AO = {
  Bischoff: xO,
  Rumpf: jO,
  SuppliquePolitique: TO
};
export {
  AO as default
};
