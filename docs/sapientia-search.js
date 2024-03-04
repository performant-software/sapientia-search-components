import * as yh from "react";
import Y, { useRef as Ge, useContext as ot, createElement as bh, createContext as Ut, useState as Mr, useLayoutEffect as wh, useEffect as qn, useMemo as vt, useReducer as _h, useCallback as Sh, version as Oh, Fragment as Rh, forwardRef as Ve } from "react";
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ph(e) {
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
var Ea = { exports: {} }, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Eh() {
  if (ws)
    return zt;
  ws = 1;
  var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, o) {
    var f, l = {}, v = null, h = null;
    o !== void 0 && (v = "" + o), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (f in u)
      n.call(u, f) && !a.hasOwnProperty(f) && (l[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        l[f] === void 0 && (l[f] = u[f]);
    return { $$typeof: t, type: c, key: v, ref: h, props: l, _owner: i.current };
  }
  return zt.Fragment = r, zt.jsx = s, zt.jsxs = s, zt;
}
var Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function xh() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p = Symbol.iterator, d = "@@iterator";
    function m(S) {
      if (S === null || typeof S != "object")
        return null;
      var Q = p && S[p] || S[d];
      return typeof Q == "function" ? Q : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(S) {
      {
        for (var Q = arguments.length, X = new Array(Q > 1 ? Q - 1 : 0), ae = 1; ae < Q; ae++)
          X[ae - 1] = arguments[ae];
        w("error", S, X);
      }
    }
    function w(S, Q, X) {
      {
        var ae = g.ReactDebugCurrentFrame, fe = ae.getStackAddendum();
        fe !== "" && (Q += "%s", X = X.concat([fe]));
        var _e = X.map(function(ue) {
          return String(ue);
        });
        _e.unshift("Warning: " + Q), Function.prototype.apply.call(console[S], console, _e);
      }
    }
    var b = !1, y = !1, j = !1, F = !1, R = !1, q;
    q = Symbol.for("react.module.reference");
    function V(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === a || R || S === i || S === o || S === f || F || S === h || b || y || j || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === l || S.$$typeof === s || S.$$typeof === c || S.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === q || S.getModuleId !== void 0));
    }
    function L(S, Q, X) {
      var ae = S.displayName;
      if (ae)
        return ae;
      var fe = Q.displayName || Q.name || "";
      return fe !== "" ? X + "(" + fe + ")" : X;
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
            var Q = S;
            return k(Q) + ".Consumer";
          case s:
            var X = S;
            return k(X._context) + ".Provider";
          case u:
            return L(S, S.render, "ForwardRef");
          case l:
            var ae = S.displayName || null;
            return ae !== null ? ae : A(S.type) || "Memo";
          case v: {
            var fe = S, _e = fe._payload, ue = fe._init;
            try {
              return A(ue(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, U = 0, T, C, N, z, E, M, D;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function H() {
      {
        if (U === 0) {
          T = console.log, C = console.info, N = console.warn, z = console.error, E = console.group, M = console.groupCollapsed, D = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
            log: ee({}, S, {
              value: T
            }),
            info: ee({}, S, {
              value: C
            }),
            warn: ee({}, S, {
              value: N
            }),
            error: ee({}, S, {
              value: z
            }),
            group: ee({}, S, {
              value: E
            }),
            groupCollapsed: ee({}, S, {
              value: M
            }),
            groupEnd: ee({}, S, {
              value: D
            })
          });
        }
        U < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = g.ReactCurrentDispatcher, G;
    function I(S, Q, X) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (fe) {
            var ae = fe.stack.trim().match(/\n( *(at )?)/);
            G = ae && ae[1] || "";
          }
        return `
` + G + S;
      }
    }
    var J = !1, K;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      K = new B();
    }
    function x(S, Q) {
      if (!S || J)
        return "";
      {
        var X = K.get(S);
        if (X !== void 0)
          return X;
      }
      var ae;
      J = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = O.current, O.current = null, H();
      try {
        if (Q) {
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
            } catch (ct) {
              ae = ct;
            }
            Reflect.construct(S, [], ue);
          } else {
            try {
              ue.call();
            } catch (ct) {
              ae = ct;
            }
            S.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ct) {
            ae = ct;
          }
          S();
        }
      } catch (ct) {
        if (ct && ae && typeof ct.stack == "string") {
          for (var se = ct.stack.split(`
`), He = ae.stack.split(`
`), Te = se.length - 1, Ae = He.length - 1; Te >= 1 && Ae >= 0 && se[Te] !== He[Ae]; )
            Ae--;
          for (; Te >= 1 && Ae >= 0; Te--, Ae--)
            if (se[Te] !== He[Ae]) {
              if (Te !== 1 || Ae !== 1)
                do
                  if (Te--, Ae--, Ae < 0 || se[Te] !== He[Ae]) {
                    var ze = `
` + se[Te].replace(" at new ", " at ");
                    return S.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", S.displayName)), typeof S == "function" && K.set(S, ze), ze;
                  }
                while (Te >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        J = !1, O.current = _e, W(), Error.prepareStackTrace = fe;
      }
      var Tt = S ? S.displayName || S.name : "", bs = Tt ? I(Tt) : "";
      return typeof S == "function" && K.set(S, bs), bs;
    }
    function oe(S, Q, X) {
      return x(S, !1);
    }
    function le(S) {
      var Q = S.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function ne(S, Q, X) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return x(S, le(S));
      if (typeof S == "string")
        return I(S);
      switch (S) {
        case o:
          return I("Suspense");
        case f:
          return I("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case u:
            return oe(S.render);
          case l:
            return ne(S.type, Q, X);
          case v: {
            var ae = S, fe = ae._payload, _e = ae._init;
            try {
              return ne(_e(fe), Q, X);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, ce = {}, Ce = g.ReactDebugCurrentFrame;
    function Xe(S) {
      if (S) {
        var Q = S._owner, X = ne(S.type, S._source, Q ? Q.type : null);
        Ce.setExtraStackFrame(X);
      } else
        Ce.setExtraStackFrame(null);
    }
    function $e(S, Q, X, ae, fe) {
      {
        var _e = Function.call.bind(Ee);
        for (var ue in S)
          if (_e(S, ue)) {
            var se = void 0;
            try {
              if (typeof S[ue] != "function") {
                var He = Error((ae || "React class") + ": " + X + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              se = S[ue](Q, ue, ae, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              se = Te;
            }
            se && !(se instanceof Error) && (Xe(fe), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", X, ue, typeof se), Xe(null)), se instanceof Error && !(se.message in ce) && (ce[se.message] = !0, Xe(fe), _("Failed %s type: %s", X, se.message), Xe(null));
          }
      }
    }
    var Et = Array.isArray;
    function st(S) {
      return Et(S);
    }
    function We(S) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, X = Q && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return X;
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
    function xt(S) {
      if (ie(S))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(S)), Pe(S);
    }
    var ut = g.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fs, ds, ni;
    ni = {};
    function nh(S) {
      if (Ee.call(S, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function ih(S) {
      if (Ee.call(S, "key")) {
        var Q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function ah(S, Q) {
      if (typeof S.ref == "string" && ut.current && Q && ut.current.stateNode !== Q) {
        var X = A(ut.current.type);
        ni[X] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(ut.current.type), S.ref), ni[X] = !0);
      }
    }
    function oh(S, Q) {
      {
        var X = function() {
          fs || (fs = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function sh(S, Q) {
      {
        var X = function() {
          ds || (ds = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var uh = function(S, Q, X, ae, fe, _e, ue) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: Q,
        ref: X,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: _e
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
        value: fe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function ch(S, Q, X, ae, fe) {
      {
        var _e, ue = {}, se = null, He = null;
        X !== void 0 && (xt(X), se = "" + X), ih(Q) && (xt(Q.key), se = "" + Q.key), nh(Q) && (He = Q.ref, ah(Q, fe));
        for (_e in Q)
          Ee.call(Q, _e) && !Ze.hasOwnProperty(_e) && (ue[_e] = Q[_e]);
        if (S && S.defaultProps) {
          var Te = S.defaultProps;
          for (_e in Te)
            ue[_e] === void 0 && (ue[_e] = Te[_e]);
        }
        if (se || He) {
          var Ae = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          se && oh(ue, Ae), He && sh(ue, Ae);
        }
        return uh(S, se, He, fe, ae, ut.current, ue);
      }
    }
    var ii = g.ReactCurrentOwner, hs = g.ReactDebugCurrentFrame;
    function jt(S) {
      if (S) {
        var Q = S._owner, X = ne(S.type, S._source, Q ? Q.type : null);
        hs.setExtraStackFrame(X);
      } else
        hs.setExtraStackFrame(null);
    }
    var ai;
    ai = !1;
    function oi(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function ps() {
      {
        if (ii.current) {
          var S = A(ii.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function lh(S) {
      {
        if (S !== void 0) {
          var Q = S.fileName.replace(/^.*[\\\/]/, ""), X = S.lineNumber;
          return `

Check your code at ` + Q + ":" + X + ".";
        }
        return "";
      }
    }
    var vs = {};
    function fh(S) {
      {
        var Q = ps();
        if (!Q) {
          var X = typeof S == "string" ? S : S.displayName || S.name;
          X && (Q = `

Check the top-level render call using <` + X + ">.");
        }
        return Q;
      }
    }
    function ms(S, Q) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var X = fh(Q);
        if (vs[X])
          return;
        vs[X] = !0;
        var ae = "";
        S && S._owner && S._owner !== ii.current && (ae = " It was passed a child from " + A(S._owner.type) + "."), jt(S), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, ae), jt(null);
      }
    }
    function gs(S, Q) {
      {
        if (typeof S != "object")
          return;
        if (st(S))
          for (var X = 0; X < S.length; X++) {
            var ae = S[X];
            oi(ae) && ms(ae, Q);
          }
        else if (oi(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var fe = m(S);
          if (typeof fe == "function" && fe !== S.entries)
            for (var _e = fe.call(S), ue; !(ue = _e.next()).done; )
              oi(ue.value) && ms(ue.value, Q);
        }
      }
    }
    function dh(S) {
      {
        var Q = S.type;
        if (Q == null || typeof Q == "string")
          return;
        var X;
        if (typeof Q == "function")
          X = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === l))
          X = Q.propTypes;
        else
          return;
        if (X) {
          var ae = A(Q);
          $e(X, S.props, "prop", ae, S);
        } else if (Q.PropTypes !== void 0 && !ai) {
          ai = !0;
          var fe = A(Q);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hh(S) {
      {
        for (var Q = Object.keys(S.props), X = 0; X < Q.length; X++) {
          var ae = Q[X];
          if (ae !== "children" && ae !== "key") {
            jt(S), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), jt(null);
            break;
          }
        }
        S.ref !== null && (jt(S), _("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function ys(S, Q, X, ae, fe, _e) {
      {
        var ue = V(S);
        if (!ue) {
          var se = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = lh(fe);
          He ? se += He : se += ps();
          var Te;
          S === null ? Te = "null" : st(S) ? Te = "array" : S !== void 0 && S.$$typeof === t ? (Te = "<" + (A(S.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, se);
        }
        var Ae = ch(S, Q, X, fe, _e);
        if (Ae == null)
          return Ae;
        if (ue) {
          var ze = Q.children;
          if (ze !== void 0)
            if (ae)
              if (st(ze)) {
                for (var Tt = 0; Tt < ze.length; Tt++)
                  gs(ze[Tt], S);
                Object.freeze && Object.freeze(ze);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gs(ze, S);
        }
        return S === n ? hh(Ae) : dh(Ae), Ae;
      }
    }
    function ph(S, Q, X) {
      return ys(S, Q, X, !0);
    }
    function vh(S, Q, X) {
      return ys(S, Q, X, !1);
    }
    var mh = vh, gh = ph;
    Qt.Fragment = n, Qt.jsx = mh, Qt.jsxs = gh;
  }()), Qt;
}
process.env.NODE_ENV === "production" ? Ea.exports = Eh() : Ea.exports = xh();
var te = Ea.exports, xa = { exports: {} }, ye = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function jh() {
  if (Ss)
    return ye;
  Ss = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, c = 60112, u = 60113, o = 60120, f = 60115, l = 60116, v = 60121, h = 60122, p = 60117, d = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var g = Symbol.for;
    e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), n = g("react.strict_mode"), i = g("react.profiler"), a = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), u = g("react.suspense"), o = g("react.suspense_list"), f = g("react.memo"), l = g("react.lazy"), v = g("react.block"), h = g("react.server.block"), p = g("react.fundamental"), d = g("react.debug_trace_mode"), m = g("react.legacy_hidden");
  }
  function _(A) {
    if (typeof A == "object" && A !== null) {
      var ee = A.$$typeof;
      switch (ee) {
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
                  return ee;
              }
          }
        case t:
          return ee;
      }
    }
  }
  var w = a, b = e, y = c, j = r, F = l, R = f, q = t, V = i, L = n, k = u;
  return ye.ContextConsumer = s, ye.ContextProvider = w, ye.Element = b, ye.ForwardRef = y, ye.Fragment = j, ye.Lazy = F, ye.Memo = R, ye.Portal = q, ye.Profiler = V, ye.StrictMode = L, ye.Suspense = k, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(A) {
    return _(A) === s;
  }, ye.isContextProvider = function(A) {
    return _(A) === a;
  }, ye.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }, ye.isForwardRef = function(A) {
    return _(A) === c;
  }, ye.isFragment = function(A) {
    return _(A) === r;
  }, ye.isLazy = function(A) {
    return _(A) === l;
  }, ye.isMemo = function(A) {
    return _(A) === f;
  }, ye.isPortal = function(A) {
    return _(A) === t;
  }, ye.isProfiler = function(A) {
    return _(A) === i;
  }, ye.isStrictMode = function(A) {
    return _(A) === n;
  }, ye.isSuspense = function(A) {
    return _(A) === u;
  }, ye.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === r || A === i || A === d || A === n || A === u || A === o || A === m || typeof A == "object" && A !== null && (A.$$typeof === l || A.$$typeof === f || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || A.$$typeof === p || A.$$typeof === v || A[0] === h);
  }, ye.typeOf = _, ye;
}
var be = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function Th() {
  return Os || (Os = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, c = 60112, u = 60113, o = 60120, f = 60115, l = 60116, v = 60121, h = 60122, p = 60117, d = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var g = Symbol.for;
      e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), n = g("react.strict_mode"), i = g("react.profiler"), a = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), u = g("react.suspense"), o = g("react.suspense_list"), f = g("react.memo"), l = g("react.lazy"), v = g("react.block"), h = g("react.server.block"), p = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), d = g("react.debug_trace_mode"), g("react.offscreen"), m = g("react.legacy_hidden");
    }
    var _ = !1;
    function w(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === i || B === d || B === n || B === u || B === o || B === m || _ || typeof B == "object" && B !== null && (B.$$typeof === l || B.$$typeof === f || B.$$typeof === a || B.$$typeof === s || B.$$typeof === c || B.$$typeof === p || B.$$typeof === v || B[0] === h));
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
                var le = oe && oe.$$typeof;
                switch (le) {
                  case s:
                  case c:
                  case l:
                  case f:
                  case a:
                    return le;
                  default:
                    return x;
                }
            }
          case t:
            return x;
        }
      }
    }
    var y = s, j = a, F = e, R = c, q = r, V = l, L = f, k = t, A = i, ee = n, U = u, T = !1, C = !1;
    function N(B) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(B) {
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
    function $(B) {
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
    function G(B) {
      return b(B) === t;
    }
    function I(B) {
      return b(B) === i;
    }
    function J(B) {
      return b(B) === n;
    }
    function K(B) {
      return b(B) === u;
    }
    be.ContextConsumer = y, be.ContextProvider = j, be.Element = F, be.ForwardRef = R, be.Fragment = q, be.Lazy = V, be.Memo = L, be.Portal = k, be.Profiler = A, be.StrictMode = ee, be.Suspense = U, be.isAsyncMode = N, be.isConcurrentMode = z, be.isContextConsumer = E, be.isContextProvider = M, be.isElement = D, be.isForwardRef = $, be.isFragment = H, be.isLazy = W, be.isMemo = O, be.isPortal = G, be.isProfiler = I, be.isStrictMode = J, be.isSuspense = K, be.isValidElementType = w, be.typeOf = b;
  }()), be;
}
process.env.NODE_ENV === "production" ? xa.exports = jh() : xa.exports = Th();
var Eo = xa.exports;
function Ch(e) {
  function t(D, $, H, W, O) {
    for (var G = 0, I = 0, J = 0, K = 0, B, x, oe = 0, le = 0, ne, Ee = ne = B = 0, ce = 0, Ce = 0, Xe = 0, $e = 0, Et = H.length, st = Et - 1, We, ie = "", Pe = "", xt = "", ut = "", Ze; ce < Et; ) {
      if (x = H.charCodeAt(ce), ce === st && I + K + J + G !== 0 && (I !== 0 && (x = I === 47 ? 10 : 47), K = J = G = 0, Et++, st++), I + K + J + G === 0) {
        if (ce === st && (0 < Ce && (ie = ie.replace(v, "")), 0 < ie.trim().length)) {
          switch (x) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += H.charAt(ce);
          }
          x = 59;
        }
        switch (x) {
          case 123:
            for (ie = ie.trim(), B = ie.charCodeAt(0), ne = 1, $e = ++ce; ce < Et; ) {
              switch (x = H.charCodeAt(ce)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (x = H.charCodeAt(ce + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ee = ce + 1; Ee < st; ++Ee)
                          switch (H.charCodeAt(Ee)) {
                            case 47:
                              if (x === 42 && H.charCodeAt(Ee - 1) === 42 && ce + 2 !== Ee) {
                                ce = Ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (x === 47) {
                                ce = Ee + 1;
                                break e;
                              }
                          }
                        ce = Ee;
                      }
                  }
                  break;
                case 91:
                  x++;
                case 40:
                  x++;
                case 34:
                case 39:
                  for (; ce++ < st && H.charCodeAt(ce) !== x; )
                    ;
              }
              if (ne === 0)
                break;
              ce++;
            }
            switch (ne = H.substring($e, ce), B === 0 && (B = (ie = ie.replace(l, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < Ce && (ie = ie.replace(v, "")), x = ie.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ce = $;
                    break;
                  default:
                    Ce = T;
                }
                if (ne = t($, Ce, ne, x, O + 1), $e = ne.length, 0 < N && (Ce = r(T, ie, Xe), Ze = c(3, ne, Ce, $, A, k, $e, x, O, W), ie = Ce.join(""), Ze !== void 0 && ($e = (ne = Ze.trim()).length) === 0 && (x = 0, ne = "")), 0 < $e)
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
                ne = t($, r($, ie, Xe), ne, W, O + 1);
            }
            xt += ne, ne = Xe = Ce = Ee = B = 0, ie = "", x = H.charCodeAt(++ce);
            break;
          case 125:
          case 59:
            if (ie = (0 < Ce ? ie.replace(v, "") : ie).trim(), 1 < ($e = ie.length))
              switch (Ee === 0 && (B = ie.charCodeAt(0), B === 45 || 96 < B && 123 > B) && ($e = (ie = ie.replace(" ", ":")).length), 0 < N && (Ze = c(1, ie, $, D, A, k, Pe.length, W, O, W)) !== void 0 && ($e = (ie = Ze.trim()).length) === 0 && (ie = "\0\0"), B = ie.charCodeAt(0), x = ie.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    ut += ie + H.charAt(ce);
                    break;
                  }
                default:
                  ie.charCodeAt($e - 1) !== 58 && (Pe += i(ie, B, x, ie.charCodeAt(2)));
              }
            Xe = Ce = Ee = B = 0, ie = "", x = H.charCodeAt(++ce);
        }
      }
      switch (x) {
        case 13:
        case 10:
          I === 47 ? I = 0 : 1 + B === 0 && W !== 107 && 0 < ie.length && (Ce = 1, ie += "\0"), 0 < N * E && c(0, ie, $, D, A, k, Pe.length, W, O, W), k = 1, A++;
          break;
        case 59:
        case 125:
          if (I + K + J + G === 0) {
            k++;
            break;
          }
        default:
          switch (k++, We = H.charAt(ce), x) {
            case 9:
            case 32:
              if (K + G + I === 0)
                switch (oe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    We = "";
                    break;
                  default:
                    x !== 32 && (We = " ");
                }
              break;
            case 0:
              We = "\\0";
              break;
            case 12:
              We = "\\f";
              break;
            case 11:
              We = "\\v";
              break;
            case 38:
              K + I + G === 0 && (Ce = Xe = 1, We = "\f" + We);
              break;
            case 108:
              if (K + I + G + ee === 0 && 0 < Ee)
                switch (ce - Ee) {
                  case 2:
                    oe === 112 && H.charCodeAt(ce - 3) === 58 && (ee = oe);
                  case 8:
                    le === 111 && (ee = le);
                }
              break;
            case 58:
              K + I + G === 0 && (Ee = ce);
              break;
            case 44:
              I + J + K + G === 0 && (Ce = 1, We += "\r");
              break;
            case 34:
            case 39:
              I === 0 && (K = K === x ? 0 : K === 0 ? x : K);
              break;
            case 91:
              K + I + J === 0 && G++;
              break;
            case 93:
              K + I + J === 0 && G--;
              break;
            case 41:
              K + I + G === 0 && J--;
              break;
            case 40:
              if (K + I + G === 0) {
                if (B === 0)
                  switch (2 * oe + 3 * le) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                J++;
              }
              break;
            case 64:
              I + J + K + G + Ee + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + G + J))
                switch (I) {
                  case 0:
                    switch (2 * x + 3 * H.charCodeAt(ce + 1)) {
                      case 235:
                        I = 47;
                        break;
                      case 220:
                        $e = ce, I = 42;
                    }
                    break;
                  case 42:
                    x === 47 && oe === 42 && $e + 2 !== ce && (H.charCodeAt($e + 2) === 33 && (Pe += H.substring($e, ce + 1)), We = "", I = 0);
                }
          }
          I === 0 && (ie += We);
      }
      le = oe, oe = x, ce++;
    }
    if ($e = Pe.length, 0 < $e) {
      if (Ce = $, 0 < N && (Ze = c(2, Pe, Ce, D, A, k, $e, W, O, W), Ze !== void 0 && (Pe = Ze).length === 0))
        return ut + Pe + xt;
      if (Pe = Ce.join(",") + "{" + Pe + "}", U * ee !== 0) {
        switch (U !== 2 || a(Pe, 2) || (ee = 0), ee) {
          case 111:
            Pe = Pe.replace(b, ":-moz-$1") + Pe;
            break;
          case 112:
            Pe = Pe.replace(w, "::-webkit-input-$1") + Pe.replace(w, "::-moz-$1") + Pe.replace(w, ":-ms-input-$1") + Pe;
        }
        ee = 0;
      }
    }
    return ut + Pe + xt;
  }
  function r(D, $, H) {
    var W = $.trim().split(m);
    $ = W;
    var O = W.length, G = D.length;
    switch (G) {
      case 0:
      case 1:
        var I = 0;
        for (D = G === 0 ? "" : D[0] + " "; I < O; ++I)
          $[I] = n(D, $[I], H).trim();
        break;
      default:
        var J = I = 0;
        for ($ = []; I < O; ++I)
          for (var K = 0; K < G; ++K)
            $[J++] = n(D[K] + " ", W[I], H).trim();
    }
    return $;
  }
  function n(D, $, H) {
    var W = $.charCodeAt(0);
    switch (33 > W && (W = ($ = $.trim()).charCodeAt(0)), W) {
      case 38:
        return $.replace(g, "$1" + D.trim());
      case 58:
        return D.trim() + $.replace(g, "$1" + D.trim());
      default:
        if (0 < 1 * H && 0 < $.indexOf("\f"))
          return $.replace(g, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + $;
  }
  function i(D, $, H, W) {
    var O = D + ";", G = 2 * $ + 3 * H + 4 * W;
    if (G === 944) {
      D = O.indexOf(":", 9) + 1;
      var I = O.substring(D, O.length - 1).trim();
      return I = O.substring(0, D).trim() + I + ";", U === 1 || U === 2 && a(I, 1) ? "-webkit-" + I + I : I;
    }
    if (U === 0 || U === 2 && !a(O, 1))
      return O;
    switch (G) {
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
        return I = O.substring(O.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + I + "-webkit-" + O + "-ms-flex-pack" + I + O;
      case 1005:
        return p.test(O) ? O.replace(h, ":-webkit-") + O.replace(h, ":-moz-") + O : O;
      case 1e3:
        switch (I = O.substring(13).trim(), $ = I.indexOf("-") + 1, I.charCodeAt(0) + I.charCodeAt($)) {
          case 226:
            I = O.replace(y, "tb");
            break;
          case 232:
            I = O.replace(y, "tb-rl");
            break;
          case 220:
            I = O.replace(y, "lr");
            break;
          default:
            return O;
        }
        return "-webkit-" + O + "-ms-" + I + O;
      case 1017:
        if (O.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch ($ = (O = D).length - 10, I = (O.charCodeAt($) === 33 ? O.substring(0, $) : O).substring(D.indexOf(":", 7) + 1).trim(), G = I.charCodeAt(0) + (I.charCodeAt(7) | 0)) {
          case 203:
            if (111 > I.charCodeAt(8))
              break;
          case 115:
            O = O.replace(I, "-webkit-" + I) + ";" + O;
            break;
          case 207:
          case 102:
            O = O.replace(I, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + O.replace(I, "-webkit-" + I) + ";" + O.replace(I, "-ms-" + I + "box") + ";" + O;
        }
        return O + ";";
      case 938:
        if (O.charCodeAt(5) === 45)
          switch (O.charCodeAt(6)) {
            case 105:
              return I = O.replace("-items", ""), "-webkit-" + O + "-webkit-box-" + I + "-ms-flex-" + I + O;
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
          return (I = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(D.replace("stretch", "fill-available"), $, H, W).replace(":fill-available", ":stretch") : O.replace(I, "-webkit-" + I) + O.replace(I, "-moz-" + I.replace("fill-", "")) + O;
        break;
      case 962:
        if (O = "-webkit-" + O + (O.charCodeAt(5) === 102 ? "-ms-" + O : "") + O, H + W === 211 && O.charCodeAt(13) === 105 && 0 < O.indexOf("transform", 10))
          return O.substring(0, O.indexOf(";", 27) + 1).replace(d, "$1-webkit-$2") + O;
    }
    return O;
  }
  function a(D, $) {
    var H = D.indexOf($ === 1 ? ":" : "{"), W = D.substring(0, $ !== 3 ? H : 10);
    return H = D.substring(H + 1, D.length - 1), z($ !== 2 ? W : W.replace(q, "$1"), H, $);
  }
  function s(D, $) {
    var H = i($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return H !== $ + ";" ? H.replace(F, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function c(D, $, H, W, O, G, I, J, K, B) {
    for (var x = 0, oe = $, le; x < N; ++x)
      switch (le = C[x].call(f, D, oe, H, W, O, G, I, J, K, B)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = le;
      }
    if (oe !== $)
      return oe;
  }
  function u(D) {
    switch (D) {
      case void 0:
      case null:
        N = C.length = 0;
        break;
      default:
        if (typeof D == "function")
          C[N++] = D;
        else if (typeof D == "object")
          for (var $ = 0, H = D.length; $ < H; ++$)
            u(D[$]);
        else
          E = !!D | 0;
    }
    return u;
  }
  function o(D) {
    return D = D.prefix, D !== void 0 && (z = null, D ? typeof D != "function" ? U = 1 : (U = 2, z = D) : U = 0), o;
  }
  function f(D, $) {
    var H = D;
    if (33 > H.charCodeAt(0) && (H = H.trim()), M = H, H = [M], 0 < N) {
      var W = c(-1, $, H, H, A, k, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && ($ = W);
    }
    var O = t(T, H, $, 0, 0);
    return 0 < N && (W = c(-2, O, H, H, A, k, O.length, 0, 0, 0), W !== void 0 && (O = W)), M = "", ee = 0, k = A = 1, O;
  }
  var l = /^\0+/g, v = /[\0\r\f]/g, h = /: */g, p = /zoo|gra/, d = /([,: ])(transform)/g, m = /,\r+?/g, g = /([\t\r\n ])*\f?&/g, _ = /@(k\w+)\s*(\S*)\s*/, w = /::(place)/g, b = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, j = /\(\s*(.*)\s*\)/g, F = /([\s\S]*?);/g, R = /-self|flex-/g, q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, V = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, k = 1, A = 1, ee = 0, U = 1, T = [], C = [], N = 0, z = null, E = 0, M = "";
  return f.use = u, f.set = o, e !== void 0 && o(e), f;
}
var Ah = {
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
function $h(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Fh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rs = /* @__PURE__ */ $h(
  function(e) {
    return Fh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ja = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function Nh() {
  if (Ps)
    return pe;
  Ps = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
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
                case h:
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
  return pe.AsyncMode = u, pe.ConcurrentMode = o, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = f, pe.Fragment = n, pe.Lazy = p, pe.Memo = h, pe.Portal = r, pe.Profiler = a, pe.StrictMode = i, pe.Suspense = l, pe.isAsyncMode = function(y) {
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
    return w(y) === h;
  }, pe.isPortal = function(y) {
    return w(y) === r;
  }, pe.isProfiler = function(y) {
    return w(y) === a;
  }, pe.isStrictMode = function(y) {
    return w(y) === i;
  }, pe.isSuspense = function(y) {
    return w(y) === l;
  }, pe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === o || y === a || y === i || y === l || y === v || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === h || y.$$typeof === s || y.$$typeof === c || y.$$typeof === f || y.$$typeof === m || y.$$typeof === g || y.$$typeof === _ || y.$$typeof === d);
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
var Es;
function Ih() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function w(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === o || x === a || x === i || x === l || x === v || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === h || x.$$typeof === s || x.$$typeof === c || x.$$typeof === f || x.$$typeof === m || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === d);
    }
    function b(x) {
      if (typeof x == "object" && x !== null) {
        var oe = x.$$typeof;
        switch (oe) {
          case t:
            var le = x.type;
            switch (le) {
              case u:
              case o:
              case n:
              case a:
              case i:
              case l:
                return le;
              default:
                var ne = le && le.$$typeof;
                switch (ne) {
                  case c:
                  case f:
                  case p:
                  case h:
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
    var y = u, j = o, F = c, R = s, q = t, V = f, L = n, k = p, A = h, ee = r, U = a, T = i, C = l, N = !1;
    function z(x) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || b(x) === u;
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
    function $(x) {
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
    function G(x) {
      return b(x) === h;
    }
    function I(x) {
      return b(x) === r;
    }
    function J(x) {
      return b(x) === a;
    }
    function K(x) {
      return b(x) === i;
    }
    function B(x) {
      return b(x) === l;
    }
    ve.AsyncMode = y, ve.ConcurrentMode = j, ve.ContextConsumer = F, ve.ContextProvider = R, ve.Element = q, ve.ForwardRef = V, ve.Fragment = L, ve.Lazy = k, ve.Memo = A, ve.Portal = ee, ve.Profiler = U, ve.StrictMode = T, ve.Suspense = C, ve.isAsyncMode = z, ve.isConcurrentMode = E, ve.isContextConsumer = M, ve.isContextProvider = D, ve.isElement = $, ve.isForwardRef = H, ve.isFragment = W, ve.isLazy = O, ve.isMemo = G, ve.isPortal = I, ve.isProfiler = J, ve.isStrictMode = K, ve.isSuspense = B, ve.isValidElementType = w, ve.typeOf = b;
  }()), ve;
}
process.env.NODE_ENV === "production" ? ja.exports = Nh() : ja.exports = Ih();
var Dh = ja.exports, xo = Dh, kh = {
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
}, Mh = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Hh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jo = {};
jo[xo.ForwardRef] = Hh;
jo[xo.Memo] = cf;
function xs(e) {
  return xo.isMemo(e) ? cf : jo[e.$$typeof] || kh;
}
var Lh = Object.defineProperty, qh = Object.getOwnPropertyNames, js = Object.getOwnPropertySymbols, Uh = Object.getOwnPropertyDescriptor, Wh = Object.getPrototypeOf, Ts = Object.prototype;
function lf(e, t, r) {
  if (typeof t != "string") {
    if (Ts) {
      var n = Wh(t);
      n && n !== Ts && lf(e, n, r);
    }
    var i = qh(t);
    js && (i = i.concat(js(t)));
    for (var a = xs(e), s = xs(t), c = 0; c < i.length; ++c) {
      var u = i[c];
      if (!Mh[u] && !(r && r[u]) && !(s && s[u]) && !(a && a[u])) {
        var o = Uh(t, u);
        try {
          Lh(e, u, o);
        } catch {
        }
      }
    }
  }
  return e;
}
var Bh = lf;
const Vh = /* @__PURE__ */ Wt(Bh);
function ft() {
  return (ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Cs = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Ta = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Eo.typeOf(e);
}, Un = Object.freeze([]), gt = Object.freeze({});
function pr(e) {
  return typeof e == "function";
}
function Ca(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function To(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ft = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Co = typeof window < "u" && "HTMLElement" in window, zh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Qh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Yh() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Bt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Yh.apply(void 0, [Qh[e]].concat(r)).trim());
}
var Gh = function() {
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
        (s <<= 1) < 0 && Bt(16, "" + r);
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
}(), Hn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), dr = 1, zr = function(e) {
  if (Hn.has(e))
    return Hn.get(e);
  for (; Wn.has(dr); )
    dr++;
  var t = dr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Bt(16, "" + t), Hn.set(e, t), Wn.set(t, e), t;
}, Kh = function(e) {
  return Wn.get(e);
}, Jh = function(e, t) {
  t >= dr && (dr = t + 1), Hn.set(e, t), Wn.set(t, e);
}, Xh = "style[" + Ft + '][data-styled-version="5.3.11"]', Zh = new RegExp("^" + Ft + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ep = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, s = i.length; a < s; a++)
    (n = i[a]) && e.registerName(t, n);
}, tp = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(Zh);
      if (c) {
        var u = 0 | parseInt(c[1], 10), o = c[2];
        u !== 0 && (Jh(o, u), ep(e, o, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(s);
    }
  }
}, rp = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ff = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(c) {
    for (var u = c.childNodes, o = u.length; o >= 0; o--) {
      var f = u[o];
      if (f && f.nodeType === 1 && f.hasAttribute(Ft))
        return f;
    }
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ft, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = rp();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, np = function() {
  function e(r) {
    var n = this.element = ff(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var a = document.styleSheets, s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        if (u.ownerNode === i)
          return u;
      }
      Bt(17);
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
}(), ip = function() {
  function e(r) {
    var n = this.element = ff(r);
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
}(), ap = function() {
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
}(), As = Co, op = { isServer: !Co, useCSSOMInjection: !zh }, df = function() {
  function e(r, n, i) {
    r === void 0 && (r = gt), n === void 0 && (n = {}), this.options = ft({}, op, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Co && As && (As = !1, function(a) {
      for (var s = document.querySelectorAll(Xh), c = 0, u = s.length; c < u; c++) {
        var o = s[c];
        o && o.getAttribute(Ft) !== "active" && (tp(a, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e.registerId = function(r) {
    return zr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(ft({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, a = n.useCSSOMInjection, s = n.target, r = i ? new ap(s) : a ? new np(s) : new ip(s), new Gh(r)));
    var r, n, i, a, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (zr(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(zr(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(zr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, a = "", s = 0; s < i; s++) {
        var c = Kh(s);
        if (c !== void 0) {
          var u = r.names.get(c), o = n.getGroup(s);
          if (u && o && u.size) {
            var f = Ft + ".g" + s + '[id="' + c + '"]', l = "";
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
}(), sp = /(a)(d)/gi, $s = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Aa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = $s(t % 52) + r;
  return ($s(t % 52) + r).replace(sp, "$1-$2");
}
var St = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, hf = function(e) {
  return St(5381, e);
};
function up(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pr(r) && !To(r))
      return !1;
  }
  return !0;
}
var cp = hf("5.3.11"), lp = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && up(t), this.componentId = r, this.baseHash = St(cp, r), this.baseStyle = n, df.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        a.push(this.staticRulesId);
      else {
        var s = Nt(this.rules, t, r, n).join(""), c = Aa(St(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(i, c)) {
          var u = n(s, "." + c, void 0, i);
          r.insertRules(i, c, u);
        }
        a.push(c), this.staticRulesId = c;
      }
    else {
      for (var o = this.rules.length, f = St(this.baseHash, n.hash), l = "", v = 0; v < o; v++) {
        var h = this.rules[v];
        if (typeof h == "string")
          l += h, process.env.NODE_ENV !== "production" && (f = St(f, h + v));
        else if (h) {
          var p = Nt(h, t, r, n), d = Array.isArray(p) ? p.join("") : p;
          f = St(f, d + v), l += d;
        }
      }
      if (l) {
        var m = Aa(f >>> 0);
        if (!r.hasNameForId(i, m)) {
          var g = n(l, "." + m, void 0, i);
          r.insertRules(i, m, g);
        }
        a.push(m);
      }
    }
    return a.join(" ");
  }, e;
}(), fp = /^\s*\/\/.*$/gm, dp = [":", "[", ".", "#"];
function hp(e) {
  var t, r, n, i, a = e === void 0 ? gt : e, s = a.options, c = s === void 0 ? gt : s, u = a.plugins, o = u === void 0 ? Un : u, f = new Ch(c), l = [], v = function(d) {
    function m(g) {
      if (g)
        try {
          d(g + "}");
        } catch {
        }
    }
    return function(g, _, w, b, y, j, F, R, q, V) {
      switch (g) {
        case 1:
          if (q === 0 && _.charCodeAt(0) === 64)
            return d(_ + ";"), "";
          break;
        case 2:
          if (R === 0)
            return _ + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return d(w[0] + _), "";
            default:
              return _ + (V === 0 ? "/*|*/" : "");
          }
        case -2:
          _.split("/*|*/}").forEach(m);
      }
    };
  }(function(d) {
    l.push(d);
  }), h = function(d, m, g) {
    return m === 0 && dp.indexOf(g[r.length]) !== -1 || g.match(i) ? d : "." + t;
  };
  function p(d, m, g, _) {
    _ === void 0 && (_ = "&");
    var w = d.replace(fp, ""), b = m && g ? g + " " + m + " { " + w + " }" : w;
    return t = _, r = m, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), f(g || !m ? "" : m, b);
  }
  return f.use([].concat(o, [function(d, m, g) {
    d === 2 && g.length && g[0].lastIndexOf(r) > 0 && (g[0] = g[0].replace(n, h));
  }, v, function(d) {
    if (d === -2) {
      var m = l;
      return l = [], m;
    }
  }])), p.hash = o.length ? o.reduce(function(d, m) {
    return m.name || Bt(15), St(d, m.name);
  }, 5381).toString() : "", p;
}
var pf = Y.createContext();
pf.Consumer;
var vf = Y.createContext(), pp = (vf.Consumer, new df()), $a = hp();
function vp() {
  return ot(pf) || pp;
}
function mp() {
  return ot(vf) || $a;
}
var gp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = $a);
      var s = n.name + a.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Bt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = $a), this.name + t.hash;
  }, e;
}(), yp = /([A-Z])/, bp = /([A-Z])/g, wp = /^ms-/, _p = function(e) {
  return "-" + e.toLowerCase();
};
function Fs(e) {
  return yp.test(e) ? e.replace(bp, _p).replace(wp, "-ms-") : e;
}
var Ns = function(e) {
  return e == null || e === !1 || e === "";
};
function Nt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, a = [], s = 0, c = e.length; s < c; s += 1)
      (i = Nt(e[s], t, r, n)) !== "" && (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
    return a;
  }
  if (Ns(e))
    return "";
  if (To(e))
    return "." + e.styledComponentId;
  if (pr(e)) {
    if (typeof (o = e) != "function" || o.prototype && o.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && Eo.isElement(u) && console.warn(Ca(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Nt(u, t, r, n);
  }
  var o;
  return e instanceof gp ? r ? (e.inject(r, n), e.getName(n)) : e : Ta(e) ? function f(l, v) {
    var h, p, d = [];
    for (var m in l)
      l.hasOwnProperty(m) && !Ns(l[m]) && (Array.isArray(l[m]) && l[m].isCss || pr(l[m]) ? d.push(Fs(m) + ":", l[m], ";") : Ta(l[m]) ? d.push.apply(d, f(l[m], m)) : d.push(Fs(m) + ": " + (h = m, (p = l[m]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || h in Ah || h.startsWith("--") ? String(p).trim() : p + "px") + ";"));
    return v ? [v + " {"].concat(d, ["}"]) : d;
  }(e) : e.toString();
}
var Is = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Sp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return pr(e) || Ta(e) ? Is(Nt(Cs(Un, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Is(Nt(Cs(e, r)));
}
var Ds = /invalid hook call/i, Qr = /* @__PURE__ */ new Set(), Op = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        if (Ds.test(a))
          i = !1, Qr.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
            c[u - 1] = arguments[u];
          n.apply(void 0, [a].concat(c));
        }
      }, Ge(), i && !Qr.has(r) && (console.warn(r), Qr.add(r));
    } catch (a) {
      Ds.test(a.message) && Qr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Rp = function(e, t, r) {
  return r === void 0 && (r = gt), e.theme !== r.theme && e.theme || t || r.theme;
}, Pp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ep = /(^-|-$)/g;
function si(e) {
  return e.replace(Pp, "-").replace(Ep, "");
}
var xp = function(e) {
  return Aa(hf(e) >>> 0);
};
function Yr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Fa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, jp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Tp(e, t, r) {
  var n = e[r];
  Fa(t) && Fa(n) ? mf(n, t) : e[r] = t;
}
function mf(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, a = r; i < a.length; i++) {
    var s = a[i];
    if (Fa(s))
      for (var c in s)
        jp(c) && Tp(e, s[c], c);
  }
  return e;
}
var gf = Y.createContext();
gf.Consumer;
var ui = {};
function yf(e, t, r) {
  var n = To(e), i = !Yr(e), a = t.attrs, s = a === void 0 ? Un : a, c = t.componentId, u = c === void 0 ? function(_, w) {
    var b = typeof _ != "string" ? "sc" : si(_);
    ui[b] = (ui[b] || 0) + 1;
    var y = b + "-" + xp("5.3.11" + b + ui[b]);
    return w ? w + "-" + y : y;
  }(t.displayName, t.parentComponentId) : c, o = t.displayName, f = o === void 0 ? function(_) {
    return Yr(_) ? "styled." + _ : "Styled(" + Ca(_) + ")";
  }(e) : o, l = t.displayName && t.componentId ? si(t.displayName) + "-" + t.componentId : t.componentId || u, v = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(_, w, b) {
    return e.shouldForwardProp(_, w, b) && t.shouldForwardProp(_, w, b);
  } : e.shouldForwardProp);
  var p, d = new lp(r, l, n ? e.componentStyle : void 0), m = d.isStatic && s.length === 0, g = function(_, w) {
    return function(b, y, j, F) {
      var R = b.attrs, q = b.componentStyle, V = b.defaultProps, L = b.foldedComponentIds, k = b.shouldForwardProp, A = b.styledComponentId, ee = b.target, U = function(W, O, G) {
        W === void 0 && (W = gt);
        var I = ft({}, O, { theme: W }), J = {};
        return G.forEach(function(K) {
          var B, x, oe, le = K;
          for (B in pr(le) && (le = le(I)), le)
            I[B] = J[B] = B === "className" ? (x = J[B], oe = le[B], x && oe ? x + " " + oe : x || oe) : le[B];
        }), [I, J];
      }(Rp(y, ot(gf), V) || gt, y, R), T = U[0], C = U[1], N = function(W, O, G, I) {
        var J = vp(), K = mp(), B = O ? W.generateAndInjectStyles(gt, J, K) : W.generateAndInjectStyles(G, J, K);
        return process.env.NODE_ENV !== "production" && !O && I && I(B), B;
      }(q, F, T, process.env.NODE_ENV !== "production" ? b.warnTooManyClasses : void 0), z = j, E = C.$as || y.$as || C.as || y.as || ee, M = Yr(E), D = C !== y ? ft({}, y, {}, C) : y, $ = {};
      for (var H in D)
        H[0] !== "$" && H !== "as" && (H === "forwardedAs" ? $.as = D[H] : (k ? k(H, Rs, E) : !M || Rs(H)) && ($[H] = D[H]));
      return y.style && C.style !== y.style && ($.style = ft({}, y.style, {}, C.style)), $.className = Array.prototype.concat(L, A, N !== A ? N : null, y.className, C.className).filter(Boolean).join(" "), $.ref = z, bh(E, $);
    }(p, _, w, m);
  };
  return g.displayName = f, (p = Y.forwardRef(g)).attrs = v, p.componentStyle = d, p.displayName = f, p.shouldForwardProp = h, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Un, p.styledComponentId = l, p.target = n ? e.target : e, p.withComponent = function(_) {
    var w = t.componentId, b = function(j, F) {
      if (j == null)
        return {};
      var R, q, V = {}, L = Object.keys(j);
      for (q = 0; q < L.length; q++)
        R = L[q], F.indexOf(R) >= 0 || (V[R] = j[R]);
      return V;
    }(t, ["componentId"]), y = w && w + "-" + (Yr(_) ? _ : si(Ca(_)));
    return yf(_, ft({}, b, { attrs: v, componentId: y }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = n ? mf({}, e.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (Op(f, l), p.warnTooManyClasses = function(_, w) {
    var b = {}, y = !1;
    return function(j) {
      if (!y && (b[j] = !0, Object.keys(b).length >= 200)) {
        var F = w ? ' with the id of "' + w + '"' : "";
        console.warn("Over 200 classes were generated for component " + _ + F + `.
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
  } }), i && Vh(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var Na = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = gt), !Eo.isValidElementType(n))
      return Bt(1, String(n));
    var a = function() {
      return r(n, i, Sp.apply(void 0, arguments));
    };
    return a.withConfig = function(s) {
      return t(r, n, ft({}, i, {}, s));
    }, a.attrs = function(s) {
      return t(r, n, ft({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, a;
  }(yf, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Na[e] = Na(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ao = Na, $o = Ao.div`
  @import url("https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer&family=Overpass&display=swap");

  padding: 0;
  margin: 0;
  font-family: "Overpass", sans-serif;
  background: #f9f9f9;
  text-rendering: optimizeLegibility;

  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  li,
  ul {
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
`;
const Ia = "7.5.4";
function ke() {
  this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
}
var Fo = ke;
ke.prototype._events = void 0;
ke.prototype._maxListeners = void 0;
ke.defaultMaxListeners = 10;
ke.prototype.setMaxListeners = function(e) {
  if (!Cp(e) || e < 0 || isNaN(e))
    throw TypeError("n must be a positive number");
  return this._maxListeners = e, this;
};
ke.prototype.emit = function(e) {
  var t, r, n, i, a, s;
  if (this._events || (this._events = {}), e === "error" && (!this._events.error || vr(this._events.error) && !this._events.error.length)) {
    if (t = arguments[1], t instanceof Error)
      throw t;
    var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
    throw c.context = t, c;
  }
  if (r = this._events[e], bf(r))
    return !1;
  if (dt(r))
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
  else if (vr(r))
    for (i = Array.prototype.slice.call(arguments, 1), s = r.slice(), n = s.length, a = 0; a < n; a++)
      s[a].apply(this, i);
  return !0;
};
ke.prototype.addListener = function(e, t) {
  var r;
  if (!dt(t))
    throw TypeError("listener must be a function");
  return this._events || (this._events = {}), this._events.newListener && this.emit(
    "newListener",
    e,
    dt(t.listener) ? t.listener : t
  ), this._events[e] ? vr(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, vr(this._events[e]) && !this._events[e].warned && (bf(this._maxListeners) ? r = ke.defaultMaxListeners : r = this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error(
    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
    this._events[e].length
  ), typeof console.trace == "function" && console.trace())), this;
};
ke.prototype.on = ke.prototype.addListener;
ke.prototype.once = function(e, t) {
  if (!dt(t))
    throw TypeError("listener must be a function");
  var r = !1;
  function n() {
    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
  }
  return n.listener = t, this.on(e, n), this;
};
ke.prototype.removeListener = function(e, t) {
  var r, n, i, a;
  if (!dt(t))
    throw TypeError("listener must be a function");
  if (!this._events || !this._events[e])
    return this;
  if (r = this._events[e], i = r.length, n = -1, r === t || dt(r.listener) && r.listener === t)
    delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
  else if (vr(r)) {
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
  if (r = this._events[e], dt(r))
    this.removeListener(e, r);
  else if (r)
    for (; r.length; )
      this.removeListener(e, r[r.length - 1]);
  return delete this._events[e], this;
};
ke.prototype.listeners = function(e) {
  var t;
  return !this._events || !this._events[e] ? t = [] : dt(this._events[e]) ? t = [this._events[e]] : t = this._events[e].slice(), t;
};
ke.prototype.listenerCount = function(e) {
  if (this._events) {
    var t = this._events[e];
    if (dt(t))
      return 1;
    if (t)
      return t.length;
  }
  return 0;
};
ke.listenerCount = function(e, t) {
  return e.listenerCount(t);
};
function dt(e) {
  return typeof e == "function";
}
function Cp(e) {
  return typeof e == "number";
}
function vr(e) {
  return typeof e == "object" && e !== null;
}
function bf(e) {
  return e === void 0;
}
const Ap = /* @__PURE__ */ Wt(Fo);
function $p(e, t) {
  e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
}
var wf = $p, Fp = Fo, Np = wf;
function Gn(e, t) {
  this.main = e, this.fn = t, this.lastResults = null;
}
Np(Gn, Fp);
Gn.prototype.detach = function() {
  this.removeAllListeners(), this.main.detachDerivedHelper(this);
};
Gn.prototype.getModifiedState = function(e) {
  return this.fn(e);
};
var Ip = Gn;
function Dp(e) {
  return typeof e != "string" ? e : String(e).replace(/^-/, "\\-");
}
function kp(e) {
  return typeof e != "string" ? e : e.replace(/^\\-/, "-");
}
var No = {
  escapeFacetValue: Dp,
  unescapeFacetValue: kp
};
function Mp(e) {
  return typeof e == "object" && e !== null ? Io(Array.isArray(e) ? [] : {}, e) : e;
}
function Bn(e) {
  return typeof e == "function" || Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
}
function Io(e, t) {
  if (e === t)
    return e;
  for (var r in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, r) || r === "__proto__" || r === "constructor")) {
      var n = t[r], i = e[r];
      typeof i < "u" && typeof n > "u" || (Bn(i) && Bn(n) ? e[r] = Io(i, n) : e[r] = Mp(n));
    }
  return e;
}
function Hp(e) {
  Bn(e) || (e = {});
  for (var t = 1, r = arguments.length; t < r; t++) {
    var n = arguments[t];
    Bn(n) && Io(e, n);
  }
  return e;
}
var Kn = Hp;
function Lp(e) {
  return e && Object.keys(e).length > 0;
}
var Do = Lp;
function qp(e, t) {
  if (e === null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ko = qp, ci = Kn;
function li(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t;
  }, {});
}
var Be = {
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
      params: Be._getHitsSearchParams(r)
    }), r.getRefinedDisjunctiveFacets().forEach(function(i) {
      n.push({
        indexName: t,
        params: Be._getDisjunctiveFacetSearchParams(
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
          var l = Be._getDisjunctiveFacetSearchParams(
            r,
            o.attribute,
            f === 0
          );
          function v(d) {
            return a.attributes.some(function(m) {
              return m === d.split(":")[0];
            });
          }
          var h = (l.facetFilters || []).reduce(
            function(d, m) {
              if (Array.isArray(m)) {
                var g = m.filter(function(_) {
                  return !v(_);
                });
                g.length > 0 && d.push(g);
              }
              return typeof m == "string" && !v(m) && d.push(m), d;
            },
            []
          ), p = u[f - 1];
          f > 0 ? l.facetFilters = h.concat(
            p.attribute + ":" + p.value
          ) : l.facetFilters = h.length > 0 ? h : void 0, n.push({ indexName: t, params: l });
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
    var t = e.facets.concat(e.disjunctiveFacets).concat(Be._getHitsHierarchicalFacetsAttributes(e)).sort(), r = Be._getFacetFilters(e), n = Be._getNumericFilters(e), i = Be._getTagFilters(e), a = {
      facets: t.indexOf("*") > -1 ? ["*"] : t,
      tagFilters: i
    };
    return r.length > 0 && (a.facetFilters = r), n.length > 0 && (a.numericFilters = n), li(ci({}, e.getQueryParams(), a));
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
    var n = Be._getFacetFilters(
      e,
      t,
      r
    ), i = Be._getNumericFilters(e, t), a = Be._getTagFilters(e), s = {
      hitsPerPage: 0,
      page: 0,
      analytics: !1,
      clickAnalytics: !1
    };
    a.length > 0 && (s.tagFilters = a);
    var c = e.getHierarchicalFacetByName(t);
    return c ? s.facets = Be._getDisjunctiveHierarchicalFacetAttribute(
      e,
      c,
      r
    ) : s.facets = t, i.length > 0 && (s.numericFilters = i), n.length > 0 && (s.facetFilters = n), li(ci({}, e.getQueryParams(), s));
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
        var l = e.getHierarchicalFacetByName(u), v = e._getHierarchicalFacetSeparator(l), h = e._getHierarchicalRootPath(l), p, d;
        if (t === u) {
          if (f.indexOf(v) === -1 || !h && r === !0 || h && h.split(v).length === f.split(v).length)
            return;
          h ? (d = h.split(v).length - 1, f = h) : (d = f.split(v).length - 2, f = f.slice(0, f.lastIndexOf(v))), p = l.attributes[d];
        } else
          d = f.split(v).length - 1, p = l.attributes[d];
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
    return typeof r == "number" && (a.maxFacetHits = r), li(
      ci(
        {},
        Be._getHitsSearchParams(i),
        a
      )
    );
  }
}, Up = Be, Mo = function() {
  var t = Array.prototype.slice.call(arguments);
  return t.reduceRight(function(r, n) {
    return Object.keys(Object(n)).forEach(function(i) {
      n[i] !== void 0 && (r[i] !== void 0 && delete r[i], r[i] = n[i]);
    }), r;
  }, {});
}, Jn = function(t, r) {
  if (Array.isArray(t)) {
    for (var n = 0; n < t.length; n++)
      if (r(t[n]))
        return t[n];
  }
};
function Wp(e, t) {
  return e.filter(function(r, n) {
    return t.indexOf(r) > -1 && e.indexOf(r) === n;
  });
}
var Bp = Wp;
function _f(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    return parseFloat(e);
  if (Array.isArray(e))
    return e.map(_f);
  throw new Error(
    "The value should be a number, a parsable string or an array of those."
  );
}
var Vp = _f, zp = function(t) {
  return t === null ? !1 : /^[a-zA-Z0-9_-]{1,64}$/.test(t);
}, Qp = Mo, Yp = Do, Gp = ko, _t = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function(t, r, n) {
    if (_t.isRefined(t, r, n))
      return t;
    var i = "" + n, a = t[r] ? t[r].concat(i) : [i], s = {};
    return s[r] = a, Qp({}, s, t);
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
      return _t.clearRefinement(t, function(a, s) {
        return r === s;
      });
    var i = "" + n;
    return _t.clearRefinement(t, function(a, s) {
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
    return _t.isRefined(t, r, n) ? _t.removeRefinement(t, r, n) : _t.addRefinement(t, r, n);
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
      return Yp(t) ? {} : t;
    if (typeof r == "string")
      return Gp(t, [r]);
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
}, Kp = _t, fi = Mo, Sf = Jn, ks = Bp, Da = Kn, ka = Do, Ms = ko, di = Vp, Jp = zp, je = Kp;
function Ho(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(r, n) {
    return Ho(t[n], r);
  }) : e === t;
}
function Xp(e, t) {
  return Sf(e, function(r) {
    return Ho(r, t);
  });
}
function qe(e) {
  var t = e ? qe._parseNumbers(e) : {};
  t.userToken !== void 0 && !Jp(t.userToken) && console.warn(
    "[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"
  ), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
  var r = this;
  Object.keys(t).forEach(function(n) {
    var i = qe.PARAMETERS.indexOf(n) !== -1, a = t[n] !== void 0;
    !i && a && (r[n] = t[n]);
  });
}
qe.PARAMETERS = Object.keys(new qe());
qe._parseNumbers = function(e) {
  if (e instanceof qe)
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
  return Da(e, t);
};
qe.make = function(t) {
  var r = new qe(t), n = t.hierarchicalFacets || [];
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
qe.validate = function(e, t) {
  var r = t || {};
  return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error(
    "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
  ) : e.tagRefinements.length > 0 && r.tagFilters ? new Error(
    "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
  ) : e.numericFilters && r.numericRefinements && ka(r.numericRefinements) ? new Error(
    "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : ka(e.numericRefinements) && r.numericFilters ? new Error(
    "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : null;
};
qe.prototype = {
  constructor: qe,
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
    var n = di(r);
    if (this.isNumericRefined(e, t, n))
      return this;
    var i = Da({}, this.numericRefinements);
    return i[e] = Da({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(n)) : i[e][t] = [n], this.setQueryParameters({
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
        return a === e && i.op === t && Ho(i.val, di(n));
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
      return ka(this.numericRefinements) ? {} : this.numericRefinements;
    if (typeof t == "string")
      return Ms(this.numericRefinements, [t]);
    if (typeof t == "function") {
      var r = !1, n = this.numericRefinements, i = Object.keys(n).reduce(
        function(a, s) {
          var c = n[s], u = {};
          return c = c || {}, Object.keys(c).forEach(function(o) {
            var f = c[o] || [], l = [];
            f.forEach(function(v) {
              var h = t(
                { val: v, op: o },
                s,
                "numeric"
              );
              h || l.push(v);
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
      hierarchicalFacetsRefinements: fi(
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
      hierarchicalFacetsRefinements: fi(
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
      hierarchicalFacetsRefinements: fi(
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
    var a = di(n), s = Xp(this.numericRefinements[t][r], a) !== void 0;
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
    var t = this, r = ks(
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
    return ks(
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
    var r = qe.validate(this, t);
    if (r)
      throw r;
    var n = this, i = qe._parseNumbers(t), a = Object.keys(this).reduce(function(c, u) {
      return c[u] = n[u], c;
    }, {}), s = Object.keys(i).reduce(
      function(c, u) {
        var o = c[u] !== void 0, f = i[u] !== void 0;
        return o && !f ? Ms(c, [u]) : (f && (c[u] = i[u]), c);
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
    return Sf(this.hierarchicalFacets, function(t) {
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
var Of = qe, Zp = function(t) {
  return Array.isArray(t) ? t.filter(Boolean) : [];
}, ev = function(t, r) {
  if (!Array.isArray(t))
    return -1;
  for (var n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
  return -1;
}, tv = Jn, Rf = function(t, r) {
  var n = (r || []).map(function(i) {
    return i.split(":");
  });
  return t.reduce(
    function(a, s) {
      var c = s.split(":"), u = tv(
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
function rv(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = t !== void 0, a = t === null;
    if (!a && e > t || n && i || !r)
      return 1;
    if (!n && e < t || a && r || !i)
      return -1;
  }
  return 0;
}
function nv(e, t, r) {
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
      var u = rv(a.criteria[c], s.criteria[c]);
      if (u)
        return c >= r.length ? u : r[c] === "desc" ? -u : u;
    }
    return a.index - s.index;
  }), n.map(function(i) {
    return i.value;
  });
}
var Pf = nv, iv = lv, Ef = No, av = Jn, ov = Rf, sv = Pf, uv = Ef.escapeFacetValue, cv = Ef.unescapeFacetValue;
function lv(e) {
  return function(r, n) {
    var i = e.hierarchicalFacets[n], a = e.hierarchicalFacetsRefinements[i.name] && e.hierarchicalFacetsRefinements[i.name][0] || "", s = e._getHierarchicalFacetSeparator(i), c = e._getHierarchicalRootPath(i), u = e._getHierarchicalShowParentLevel(i), o = ov(
      e._getHierarchicalFacetSortBy(i)
    ), f = r.every(function(h) {
      return h.exhaustive;
    }), l = fv(
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
function fv(e, t, r, n, i) {
  return function(s, c, u) {
    var o = s;
    if (u > 0) {
      var f = 0;
      for (o = s; f < u; ) {
        var l = o && Array.isArray(o.data) ? o.data : [];
        o = av(l, function(h) {
          return h.isRefined;
        }), f++;
      }
    }
    if (o) {
      var v = Object.keys(c.data).map(function(h) {
        return [h, c.data[h]];
      }).filter(function(h) {
        var p = h[0];
        return dv(
          p,
          o.path || r,
          i,
          t,
          r,
          n
        );
      });
      o.data = sv(
        v.map(function(h) {
          var p = h[0], d = h[1];
          return hv(
            d,
            p,
            t,
            cv(i),
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
function dv(e, t, r, n, i, a) {
  return i && (e.indexOf(i) !== 0 || i === e) ? !1 : !i && e.indexOf(n) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
  i && e.split(n).length - i.split(n).length === 1 || // if current refinement is a root level and current facetValue is a root level,
  // keep the facetValue
  e.indexOf(n) === -1 && r.indexOf(n) === -1 || // currentRefinement is a child of the facet value
  r.indexOf(e) === 0 || // facetValue is a child of the current parent, add it
  e.indexOf(t + n) === 0 && (a || e.indexOf(r) === 0);
}
function hv(e, t, r, n, i) {
  var a = t.split(r);
  return {
    name: a[a.length - 1].trim(),
    path: t,
    escapedValue: uv(t),
    count: e,
    isRefined: n === t || n.indexOf(t + r) === 0,
    exhaustive: i,
    data: null
  };
}
var hi = Zp, Vn = Mo, xf = No, Ke = Jn, Yt = ev, pv = Rf, Hs = Kn, jf = Pf, Ls = xf.escapeFacetValue, Tf = xf.unescapeFacetValue, vv = iv;
function qs(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
function pi(e, t, r) {
  t && t[r] && (e.stats = t[r]);
}
function mv(e, t) {
  return Ke(
    e,
    function(n) {
      var i = n.attributes || [];
      return i.indexOf(t) > -1;
    }
  );
}
function yt(e, t, r) {
  var n = t[0];
  this._rawResults = t;
  var i = this;
  Object.keys(n).forEach(function(l) {
    i[l] = n[l];
  });
  var a = Hs(
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
  var s = e.getRefinedDisjunctiveFacets(), c = qs(e.facets), u = qs(e.disjunctiveFacets), o = 1, f = n.facets || {};
  Object.keys(f).forEach(function(l) {
    var v = f[l], h = mv(
      e.hierarchicalFacets,
      l
    );
    if (h) {
      var p = h.attributes.indexOf(l), d = Yt(e.hierarchicalFacets, function(w) {
        return w.name === h.name;
      });
      i.hierarchicalFacets[d][p] = {
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
      }, pi(
        i.disjunctiveFacets[_],
        n.facets_stats,
        l
      )), g && (_ = c[l], i.facets[_] = {
        name: l,
        data: v,
        exhaustive: n.exhaustiveFacetsCount
      }, pi(
        i.facets[_],
        n.facets_stats,
        l
      ));
    }
  }), this.hierarchicalFacets = hi(this.hierarchicalFacets), s.forEach(function(l) {
    var v = t[o], h = v && v.facets ? v.facets : {}, p = e.getHierarchicalFacetByName(l);
    Object.keys(h).forEach(function(d) {
      var m = h[d], g;
      if (p) {
        g = Yt(e.hierarchicalFacets, function(b) {
          return b.name === p.name;
        });
        var _ = Yt(
          i.hierarchicalFacets[g],
          function(b) {
            return b.attribute === d;
          }
        );
        if (_ === -1)
          return;
        i.hierarchicalFacets[g][_].data = Hs(
          {},
          i.hierarchicalFacets[g][_].data,
          m
        );
      } else {
        g = u[d];
        var w = n.facets && n.facets[d] || {};
        i.disjunctiveFacets[g] = {
          name: d,
          data: Vn({}, m, w),
          exhaustive: v.exhaustiveFacetsCount
        }, pi(
          i.disjunctiveFacets[g],
          v.facets_stats,
          d
        ), e.disjunctiveFacetsRefinements[d] && e.disjunctiveFacetsRefinements[d].forEach(function(b) {
          !i.disjunctiveFacets[g].data[b] && e.disjunctiveFacetsRefinements[d].indexOf(
            Tf(b)
          ) > -1 && (i.disjunctiveFacets[g].data[b] = 0);
        });
      }
    }), o++;
  }), e.getRefinedHierarchicalFacets().forEach(function(l) {
    var v = e.getHierarchicalFacetByName(l), h = e._getHierarchicalFacetSeparator(v), p = e.getHierarchicalRefinement(l);
    p.length === 0 || p[0].split(h).length < 2 || t.slice(o).forEach(function(d) {
      var m = d && d.facets ? d.facets : {};
      Object.keys(m).forEach(function(g) {
        var _ = m[g], w = Yt(e.hierarchicalFacets, function(F) {
          return F.name === v.name;
        }), b = Yt(
          i.hierarchicalFacets[w],
          function(F) {
            return F.attribute === g;
          }
        );
        if (b !== -1) {
          var y = {};
          if (p.length > 0 && !i.persistHierarchicalRootCount) {
            var j = p[0].split(h)[0];
            y[j] = i.hierarchicalFacets[w][b].data[j];
          }
          i.hierarchicalFacets[w][b].data = Vn(
            y,
            _,
            i.hierarchicalFacets[w][b].data
          );
        }
      }), o++;
    });
  }), Object.keys(e.facetsExcludes).forEach(function(l) {
    var v = e.facetsExcludes[l], h = c[l];
    i.facets[h] = {
      name: l,
      data: f[l],
      exhaustive: n.exhaustiveFacetsCount
    }, v.forEach(function(p) {
      i.facets[h] = i.facets[h] || { name: l }, i.facets[h].data = i.facets[h].data || {}, i.facets[h].data[p] = 0;
    });
  }), this.hierarchicalFacets = this.hierarchicalFacets.map(
    vv(e)
  ), this.facets = hi(this.facets), this.disjunctiveFacets = hi(this.disjunctiveFacets), this._state = e;
}
yt.prototype.getFacetByName = function(e) {
  function t(r) {
    return r.name === e;
  }
  return Ke(this.facets, t) || Ke(this.disjunctiveFacets, t) || Ke(this.hierarchicalFacets, t);
};
function gv(e, t) {
  function r(f) {
    return f.name === t;
  }
  if (e._state.isConjunctiveFacet(t)) {
    var n = Ke(e.facets, r);
    return n ? Object.keys(n.data).map(function(f) {
      var l = Ls(f);
      return {
        name: f,
        escapedValue: l,
        count: n.data[f],
        isRefined: e._state.isFacetRefined(t, l),
        isExcluded: e._state.isExcludeRefined(t, f)
      };
    }) : [];
  } else if (e._state.isDisjunctiveFacet(t)) {
    var i = Ke(e.disjunctiveFacets, r);
    return i ? Object.keys(i.data).map(function(f) {
      var l = Ls(f);
      return {
        name: f,
        escapedValue: l,
        count: i.data[f],
        isRefined: e._state.isDisjunctiveFacetRefined(t, l)
      };
    }) : [];
  } else if (e._state.isHierarchicalFacet(t)) {
    var a = Ke(e.hierarchicalFacets, r);
    if (!a)
      return a;
    var s = e._state.getHierarchicalFacetByName(t), c = e._state._getHierarchicalFacetSeparator(s), u = Tf(
      e._state.getHierarchicalRefinement(t)[0] || ""
    );
    u.indexOf(s.rootPath) === 0 && (u = u.replace(
      s.rootPath + c,
      ""
    ));
    var o = u.split(c);
    return o.unshift(t), Cf(a, o, 0), a;
  }
}
function Cf(e, t, r) {
  e.isRefined = e.name === t[r], e.data && e.data.forEach(function(n) {
    Cf(n, t, r + 1);
  });
}
function Af(e, t, r, n) {
  if (n = n || 0, Array.isArray(t))
    return e(t, r[n]);
  if (!t.data || t.data.length === 0)
    return t;
  var i = t.data.map(function(c) {
    return Af(e, c, r, n + 1);
  }), a = e(i, r[n]), s = Vn({ data: a }, t);
  return s;
}
yt.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
function yv(e, t) {
  return t.sort(e);
}
function bv(e, t) {
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
    jf(n, c[0], c[1])
  ));
}
function wv(e, t) {
  return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t];
}
yt.prototype.getFacetValues = function(e, t) {
  var r = gv(this, e);
  if (r) {
    var n = Vn({}, t, {
      sortBy: yt.DEFAULT_SORT,
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
    return Af(
      function(c, u) {
        if (n.facetOrdering) {
          var o = wv(i, u);
          if (o)
            return bv(c, o);
        }
        if (Array.isArray(n.sortBy)) {
          var f = pv(n.sortBy, yt.DEFAULT_SORT);
          return jf(c, f[0], f[1]);
        } else if (typeof n.sortBy == "function")
          return yv(n.sortBy, c);
        throw new Error(
          "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
        );
      },
      r,
      a
    );
  }
};
yt.prototype.getFacetStats = function(e) {
  if (this._state.isConjunctiveFacet(e))
    return Us(this.facets, e);
  if (this._state.isDisjunctiveFacet(e))
    return Us(this.disjunctiveFacets, e);
};
function Us(e, t) {
  var r = Ke(e, function(n) {
    return n.name === t;
  });
  return r && r.stats;
}
yt.prototype.getRefinements = function() {
  var e = this._state, t = this, r = [];
  return Object.keys(e.facetsRefinements).forEach(function(n) {
    e.facetsRefinements[n].forEach(function(i) {
      r.push(
        vi(e, "facet", n, i, t.facets)
      );
    });
  }), Object.keys(e.facetsExcludes).forEach(function(n) {
    e.facetsExcludes[n].forEach(function(i) {
      r.push(
        vi(e, "exclude", n, i, t.facets)
      );
    });
  }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(n) {
    e.disjunctiveFacetsRefinements[n].forEach(function(i) {
      r.push(
        vi(
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
        _v(
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
function vi(e, t, r, n, i) {
  var a = Ke(i, function(u) {
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
function _v(e, t, r, n) {
  var i = e.getHierarchicalFacetByName(t), a = e._getHierarchicalFacetSeparator(i), s = r.split(a), c = Ke(n, function(v) {
    return v.name === t;
  }), u = s.reduce(function(v, h) {
    var p = v && Ke(v.data, function(d) {
      return d.name === h;
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
var $f = yt, Ff = "3.16.2", Sv = Fo, Ov = Ip, Rv = No.escapeFacetValue, Pv = wf, Ev = Kn, xv = Do, jv = ko, It = Up, Lo = Of, Ma = $f, Nf = Ff;
function Z(e, t, r, n) {
  typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + Nf + ")"), this.setClient(e);
  var i = r || {};
  i.index = t, this.state = Lo.make(i), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0, this._searchResultsOptions = n;
}
Pv(Z, Sv);
Z.prototype.search = function() {
  return this._search({ onlyWithDerivedHelpers: !1 }), this;
};
Z.prototype.searchOnlyWithDerivedHelpers = function() {
  return this._search({ onlyWithDerivedHelpers: !0 }), this;
};
Z.prototype.getQuery = function() {
  var e = this.state;
  return It._getHitsSearchParams(e);
};
Z.prototype.searchOnce = function(e, t) {
  var r = e ? this.state.setQueryParameters(e) : this.state, n = It._getQueries(r.index, r), i = this;
  if (this._currentNbQueries++, this.emit("searchOnce", {
    state: r
  }), t) {
    this.client.search(n).then(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(null, new Ma(r, a.results), r);
    }).catch(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(a, null, r);
    });
    return;
  }
  return this.client.search(n).then(
    function(a) {
      return i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), {
        content: new Ma(r, a.results),
        state: r,
        _originalResponse: a
      };
    },
    function(a) {
      throw i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), a;
    }
  );
};
Z.prototype.findAnswers = function(e) {
  console.warn("[algoliasearch-helper] answers is no longer supported");
  var t = this.state, r = this.derivedHelpers[0];
  if (!r)
    return Promise.resolve([]);
  var n = r.getModifiedState(t), i = Ev(
    {
      attributesForPrediction: e.attributesForPrediction,
      nbHits: e.nbHits
    },
    {
      params: jv(It._getHitsSearchParams(n), [
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
Z.prototype.searchForFacetValues = function(e, t, r, n) {
  var i = typeof this.client.searchForFacetValues == "function", a = typeof this.client.initIndex == "function";
  if (!i && !a && typeof this.client.search != "function")
    throw new Error(
      "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
    );
  var s = this.state.setQueryParameters(n || {}), c = s.isDisjunctiveFacet(e), u = It.getSearchForFacetQuery(
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
      return o._currentNbQueries--, o._currentNbQueries === 0 && o.emit("searchQueueEmpty"), v = Array.isArray(v) ? v[0] : v, v.facetHits.forEach(function(h) {
        h.escapedValue = Rv(h.value), h.isRefined = c ? s.isDisjunctiveFacetRefined(e, h.escapedValue) : s.isFacetRefined(e, h.escapedValue);
      }), v;
    },
    function(l) {
      throw o._currentNbQueries--, o._currentNbQueries === 0 && o.emit("searchQueueEmpty"), l;
    }
  );
};
Z.prototype.setQuery = function(e) {
  return this._change({
    state: this.state.resetPage().setQuery(e),
    isPageReset: !0
  }), this;
};
Z.prototype.clearRefinements = function(e) {
  return this._change({
    state: this.state.resetPage().clearRefinements(e),
    isPageReset: !0
  }), this;
};
Z.prototype.clearTags = function() {
  return this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: !0
  }), this;
};
Z.prototype.addDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
Z.prototype.addHierarchicalFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.addNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().addNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
Z.prototype.addFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};
Z.prototype.addFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().addExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};
Z.prototype.addTag = function(e) {
  return this._change({
    state: this.state.resetPage().addTagRefinement(e),
    isPageReset: !0
  }), this;
};
Z.prototype.removeNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().removeNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
Z.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
Z.prototype.removeHierarchicalFacetRefinement = function(e) {
  return this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
    isPageReset: !0
  }), this;
};
Z.prototype.removeFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};
Z.prototype.removeFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};
Z.prototype.removeTag = function(e) {
  return this._change({
    state: this.state.resetPage().removeTagRefinement(e),
    isPageReset: !0
  }), this;
};
Z.prototype.toggleFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};
Z.prototype.toggleRefinement = function(e, t) {
  return this.toggleFacetRefinement(e, t);
};
Z.prototype.toggleFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};
Z.prototype.toggleTag = function(e) {
  return this._change({
    state: this.state.resetPage().toggleTagRefinement(e),
    isPageReset: !0
  }), this;
};
Z.prototype.nextPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e + 1);
};
Z.prototype.previousPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e - 1);
};
function If(e) {
  if (e < 0)
    throw new Error("Page requested below 0.");
  return this._change({
    state: this.state.setPage(e),
    isPageReset: !1
  }), this;
}
Z.prototype.setCurrentPage = If;
Z.prototype.setPage = If;
Z.prototype.setIndex = function(e) {
  return this._change({
    state: this.state.resetPage().setIndex(e),
    isPageReset: !0
  }), this;
};
Z.prototype.setQueryParameter = function(e, t) {
  return this._change({
    state: this.state.resetPage().setQueryParameter(e, t),
    isPageReset: !0
  }), this;
};
Z.prototype.setState = function(e) {
  return this._change({
    state: Lo.make(e),
    isPageReset: !1
  }), this;
};
Z.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
  return this.state = new Lo(e), this;
};
Z.prototype.hasRefinements = function(e) {
  return xv(this.state.getNumericRefinements(e)) ? !0 : this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : this.state.isHierarchicalFacet(e) ? this.state.isHierarchicalFacetRefined(e) : !1;
};
Z.prototype.isExcluded = function(e, t) {
  return this.state.isExcludeRefined(e, t);
};
Z.prototype.isDisjunctiveRefined = function(e, t) {
  return this.state.isDisjunctiveFacetRefined(e, t);
};
Z.prototype.hasTag = function(e) {
  return this.state.isTagRefined(e);
};
Z.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};
Z.prototype.getIndex = function() {
  return this.state.index;
};
function Df() {
  return this.state.page;
}
Z.prototype.getCurrentPage = Df;
Z.prototype.getPage = Df;
Z.prototype.getTags = function() {
  return this.state.tagRefinements;
};
Z.prototype.getRefinements = function(e) {
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
Z.prototype.getNumericRefinement = function(e, t) {
  return this.state.getNumericRefinement(e, t);
};
Z.prototype.getHierarchicalFacetBreadcrumb = function(e) {
  return this.state.getHierarchicalFacetBreadcrumb(e);
};
Z.prototype._search = function(e) {
  var t = this.state, r = [], n = [];
  e.onlyWithDerivedHelpers || (n = It._getQueries(t.index, t), r.push({
    state: t,
    queriesCount: n.length,
    helper: this
  }), this.emit("search", {
    state: t,
    results: this.lastResults
  }));
  var i = this.derivedHelpers.map(function(c) {
    var u = c.getModifiedState(t), o = u.index ? It._getQueries(u.index, u) : [];
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
Z.prototype._dispatchAlgoliaResponse = function(e, t, r) {
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
      u.lastResults = new Ma(
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
Z.prototype._dispatchAlgoliaError = function(e, t) {
  e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
    error: t
  }), this._currentNbQueries === 0 && this.emit("searchQueueEmpty"));
};
Z.prototype.containsRefinement = function(e, t, r, n) {
  return e || t.length !== 0 || r.length !== 0 || n.length !== 0;
};
Z.prototype._hasDisjunctiveRefinements = function(e) {
  return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
};
Z.prototype._change = function(e) {
  var t = e.state, r = e.isPageReset;
  t !== this.state && (this.state = t, this.emit("change", {
    state: this.state,
    results: this.lastResults,
    isPageReset: r
  }));
};
Z.prototype.clearCache = function() {
  return this.client.clearCache && this.client.clearCache(), this;
};
Z.prototype.setClient = function(e) {
  return this.client === e ? this : (typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + Nf + ")"), this.client = e, this);
};
Z.prototype.getClient = function() {
  return this.client;
};
Z.prototype.derive = function(e) {
  var t = new Ov(this, e);
  return this.derivedHelpers.push(t), t;
};
Z.prototype.detachDerivedHelper = function(e) {
  var t = this.derivedHelpers.indexOf(e);
  if (t === -1)
    throw new Error("Derived helper already detached");
  this.derivedHelpers.splice(t, 1);
};
Z.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};
var Tv = Z, kf = Tv, Cv = Of, Av = $f;
function Hr(e, t, r, n) {
  return new kf(e, t, r, n);
}
Hr.version = Ff;
Hr.AlgoliaSearchHelper = kf;
Hr.SearchParameters = Cv;
Hr.SearchResults = Av;
var $v = Hr;
const Ye = /* @__PURE__ */ Wt($v);
function Ws(e) {
  return e.toString().charAt(0).toUpperCase() + e.toString().slice(1);
}
function De() {
}
var Bs = De, he = De;
process.env.NODE_ENV === "development" && (Bs = function(t) {
  console.warn("[InstantSearch.js]: ".concat(t.trim()));
}, he = function(t, r) {
  if (!t) {
    var n = he.cache[r];
    n || (he.cache[r] = !0, process.env.NODE_ENV === "development" && Bs(r));
  }
}, he.cache = {});
var Fv = Object.keys;
function Nv(e) {
  return kv(e) || Dv(e) || Mf(e) || Iv();
}
function Iv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function kv(e) {
  if (Array.isArray(e))
    return Ha(e);
}
function Gt(e, t) {
  return Lv(e) || Hv(e, t) || Mf(e, t) || Mv();
}
function Mv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ha(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ha(e, t);
  }
}
function Ha(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Hv(e, t) {
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
function Lv(e) {
  if (Array.isArray(e))
    return e;
}
function qv(e) {
  switch (e) {
    case "range":
      return [];
    case "menu":
      return ["menu", "menuSelect"];
    default:
      return [e];
  }
}
var Uv = {
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
function Hf(e) {
  var t = e.index, r = e.indexUiState, n = t.getWidgets().map(function(a) {
    return a.$$type;
  }).filter(Boolean), i = Fv(r).reduce(function(a, s) {
    var c = Uv[s];
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
  process.env.NODE_ENV === "development" && he(i.length === 0, 'The UI state for the index "'.concat(t.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(t.getIndexId(), `":

`).concat(i.map(function(a) {
    var s, c = Gt(a, 2), u = c[0], o = c[1].widgets;
    return "- `".concat(u, "` needs one of these widgets: ").concat((s = []).concat.apply(s, Nv(o.map(function(f) {
      return qv(f);
    }))).map(function(f) {
      return '"'.concat(f, '"');
    }).join(", "));
  }).join(`
`), `

If you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don't render anything:

\`\`\`
`).concat(i.filter(function(a) {
    var s = Gt(a, 2);
    s[0];
    var c = s[1].connectors;
    return c.length > 0;
  }).map(function(a) {
    var s = Gt(a, 2);
    s[0];
    var c = s[1], u = c.connectors, o = c.widgets, f = Ws(o[0]), l = u[0];
    return "const virtual".concat(f, " = ").concat(l, "(() => null);");
  }).join(`
`), `

search.addWidgets([
  `).concat(i.filter(function(a) {
    var s = Gt(a, 2);
    s[0];
    var c = s[1].connectors;
    return c.length > 0;
  }).map(function(a) {
    var s = Gt(a, 2);
    s[0];
    var c = s[1].widgets, u = Ws(c[0]);
    return "virtual".concat(u, "({ /* ... */ })");
  }).join(`,
  `), `
]);
\`\`\`

If you're using custom widgets that do set these query parameters, we recommend using connectors instead.

See https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets`));
}
function Wv(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Xn(e, t) {
  if (e === void 0 || typeof e != "function")
    throw new Error("The render function is not valid (received type ".concat(Wv(e), `).

`).concat(t));
}
var Bv = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Lf = /[&<>"']/g, Vv = RegExp(Lf.source);
function zv(e) {
  return e && Vv.test(e) ? e.replace(Lf, function(t) {
    return Bv[t];
  }) : e;
}
var Qv = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, qf = /&(amp|quot|lt|gt|#39);/g, Yv = RegExp(qf.source);
function Zn(e) {
  return e && Yv.test(e) ? e.replace(qf, function(t) {
    return Qv[t];
  }) : e;
}
function La(e) {
  "@babel/helpers - typeof";
  return La = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, La(e);
}
function Gv(e) {
  return e === null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Kv(e) {
  return La(e) === "object" && e !== null;
}
function Uf(e) {
  if (!Kv(e) || Gv(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function Jv(e) {
  if (e == null)
    throw new TypeError("Cannot destructure " + e);
}
function qa() {
  return qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qa.apply(this, arguments);
}
function Vs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(r), !0).forEach(function(n) {
      Wf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wf(e, t, r) {
  return t = Xv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xv(e) {
  var t = Zv(e, "string");
  return mr(t) === "symbol" ? t : String(t);
}
function Zv(e, t) {
  if (mr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dt = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
}, Me = {
  highlightPreTag: "<mark>",
  highlightPostTag: "</mark>"
};
function Bf(e) {
  return zv(e).replace(new RegExp(Dt.highlightPreTag, "g"), Me.highlightPreTag).replace(new RegExp(Dt.highlightPostTag, "g"), Me.highlightPostTag);
}
function zn(e) {
  return Uf(e) && typeof e.value != "string" ? Object.keys(e).reduce(function(t, r) {
    return At(At({}, t), {}, Wf({}, r, zn(e[r])));
  }, {}) : Array.isArray(e) ? e.map(zn) : At(At({}, e), {}, {
    value: Bf(e.value)
  });
}
function em(e) {
  return e.__escaped === void 0 && (e = e.map(function(t) {
    var r = qa({}, (Jv(t), t));
    return r._highlightResult && (r._highlightResult = zn(r._highlightResult)), r._snippetResult && (r._snippetResult = zn(r._snippetResult)), r;
  }), e.__escaped = !0), e;
}
function tm(e) {
  return e.map(function(t) {
    return At(At({}, t), {}, {
      highlighted: Bf(t.highlighted)
    });
  });
}
function Vf(e) {
  var t = Me.highlightPreTag, r = Me.highlightPostTag;
  return e.map(function(n) {
    return n.isHighlighted ? t + n.value + r : n.value;
  }).join("");
}
function rm(e, t, r) {
  return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, r) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, r) : e.state.isDisjunctiveFacetRefined(t, r);
}
function zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zs(Object(r), !0).forEach(function(n) {
      im(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function im(e, t, r) {
  return t = am(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function am(e) {
  var t = om(e, "string");
  return kt(t) === "symbol" ? t : String(t);
}
function om(e, t) {
  if (kt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function sm(e, t) {
  return fm(e) || lm(e, t) || cm(e, t) || um();
}
function um() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cm(e, t) {
  if (e) {
    if (typeof e == "string")
      return Qs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qs(e, t);
  }
}
function Qs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lm(e, t) {
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
function fm(e) {
  if (Array.isArray(e))
    return e;
}
function dm(e) {
  var t = e.instantSearchInstance, r = e.helper, n = e.attribute, i = e.widgetType, a = function() {
    for (var c = arguments.length, u = new Array(c), o = 0; o < c; o++)
      u[o] = arguments[o];
    var f = u[1], l = u[2], v = l === void 0 ? "Filter Applied" : l, h = u[3], p = h === void 0 ? {} : h, d = u[0].split(":"), m = sm(d, 2), g = m[0], _ = m[1], w = typeof n == "string" ? n : n(f);
    if (u.length === 1 && kt(u[0]) === "object")
      t.sendEventToInsights(u[0]);
    else if (g === "click" && u.length >= 2 && u.length <= 4)
      rm(r, w, f) || t.sendEventToInsights({
        insightsMethod: "clickedFilters",
        widgetType: i,
        eventType: g,
        eventModifier: _,
        payload: nm({
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
function zf(e) {
  return btoa(encodeURIComponent(JSON.stringify(e)));
}
function Ys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(r), !0).forEach(function(n) {
      hm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ys(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hm(e, t, r) {
  return t = pm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pm(e) {
  var t = vm(e, "string");
  return Mt(t) === "symbol" ? t : String(t);
}
function vm(e, t) {
  if (Mt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mm(e, t) {
  return wm(e) || bm(e, t) || ym(e, t) || gm();
}
function gm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ym(e, t) {
  if (e) {
    if (typeof e == "string")
      return Gs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Gs(e, t);
  }
}
function Gs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function bm(e, t) {
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
function wm(e) {
  if (Array.isArray(e))
    return e;
}
function Mt(e) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(e);
}
function _m(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0; n < Math.ceil(e.length / t); n++)
    r.push(e.slice(n * t, (n + 1) * t));
  return r;
}
function Qf(e) {
  var t = e.index, r = e.widgetType, n = e.methodName, i = e.args, a = e.instantSearchInstance;
  if (i.length === 1 && Mt(i[0]) === "object")
    return [i[0]];
  var s = i[0].split(":"), c = mm(s, 2), u = c[0], o = c[1], f = i[1], l = i[2], v = i[3] || {};
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
  var h = Array.isArray(f) ? f : [f];
  if (h.length === 0)
    return [];
  var p = h[0].__queryID, d = _m(h), m = d.map(function(_) {
    return _.map(function(w) {
      return w.objectID;
    });
  }), g = d.map(function(_) {
    return _.map(function(w) {
      return w.__position;
    });
  });
  if (u === "view")
    return a.status !== "idle" ? [] : d.map(function(_, w) {
      return {
        insightsMethod: "viewedObjectIDs",
        widgetType: r,
        eventType: u,
        payload: mi({
          eventName: l || "Hits Viewed",
          index: t,
          objectIDs: m[w]
        }, v),
        hits: _,
        eventModifier: o
      };
    });
  if (u === "click")
    return d.map(function(_, w) {
      return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: r,
        eventType: u,
        payload: mi({
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
    return d.map(function(_, w) {
      return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: r,
        eventType: u,
        payload: mi({
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
function Sm(e) {
  var t = e.instantSearchInstance, r = e.index, n = e.widgetType, i = {}, a = void 0, s = function() {
    for (var u = arguments.length, o = new Array(u), f = 0; f < u; f++)
      o[f] = arguments[f];
    var l = Qf({
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
function Om(e) {
  var t = e.index, r = e.widgetType, n = e.instantSearchInstance, i = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var o = Qf({
      widgetType: r,
      index: t,
      methodName: "bindEvent",
      args: c,
      instantSearchInstance: n
    });
    return o.length ? "data-insights-event=".concat(zf(o)) : "";
  };
  return i;
}
function ht(e) {
  return e.$$type === "ais.index";
}
function Ua(e, t) {
  var r = e[t.getIndexId()] || {};
  process.env.NODE_ENV === "development" && Hf({
    index: t,
    indexUiState: r
  }), t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
    uiState: r
  })), t.getWidgets().filter(ht).forEach(function(n) {
    return Ua(e, n);
  });
}
var Rm = Promise.resolve();
function Kt(e) {
  var t = null, r = !1, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    t === null && (t = Rm.then(function() {
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
function Qn(e) {
  var t = e.name, r = e.connector, n = r === void 0 ? !1 : r;
  return ["https://www.algolia.com/doc/api-reference/widgets/", t, "/js/", n ? "#connector" : ""].join("");
}
function Pt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.map(function(i) {
    return Qn(i);
  }).join(", ");
  return function(i) {
    return [i, "See documentation: ".concat(n)].filter(Boolean).join(`

`);
  };
}
function Pm(e) {
  return typeof e == "string" ? e.replace(/^\\-/, "-") : e;
}
function Em(e) {
  return typeof e == "number" && e < 0 || typeof e == "string" ? String(e).replace(/^-/, "\\-") : e;
}
function Wa(e, t) {
  for (var r, n = 0; n < e.length; n++)
    if (r = e[n], t(r, n, e))
      return r;
}
function xm(e, t) {
  if (!Array.isArray(e))
    return -1;
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
  return -1;
}
function jm(e) {
  if (e.transporter) {
    var t = e.transporter, r = t.headers, n = t.queryParameters, i = "x-algolia-application-id", a = "x-algolia-api-key", s = r[i] || n[i], c = r[a] || n[a];
    return [s, c];
  } else
    return [e.applicationID, e.apiKey];
}
function Lr(e) {
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
var Tm = new RegExp(/\w/i);
function Cm(e, t) {
  var r, n, i = e[t], a = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0, s = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !Tm.test(Zn(i.value)) && s === a ? s : i.isHighlighted;
}
function Vt(e, t) {
  var r = Array.isArray(t) ? t : t.split(".");
  return r.reduce(function(n, i) {
    return n && n[i];
  }, e);
}
function gi(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], a = {
    type: t,
    attribute: r,
    name: n,
    escapedValue: Em(n)
  }, s = Wa(i, function(h) {
    return h.name === r;
  }), c;
  if (t === "hierarchical") {
    for (var u = e.getHierarchicalFacetByName(r), o = n.split(u.separator), f = function(p) {
      return function(d) {
        return p[d];
      };
    }, l = function(p) {
      s = s && s.data && Wa(Object.keys(s.data).map(f(s.data)), function(d) {
        return d.name === o[p];
      });
    }, v = 0; s !== void 0 && v < o.length; ++v)
      l(v);
    c = s && s.count;
  } else
    c = s && s.data && s.data[a.name];
  return c !== void 0 && (a.count = c), s && s.exhaustive !== void 0 && (a.exhaustive = s.exhaustive), a;
}
function Am(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = [], i = t.facetsRefinements, a = i === void 0 ? {} : i, s = t.facetsExcludes, c = s === void 0 ? {} : s, u = t.disjunctiveFacetsRefinements, o = u === void 0 ? {} : u, f = t.hierarchicalFacetsRefinements, l = f === void 0 ? {} : f, v = t.numericRefinements, h = v === void 0 ? {} : v, p = t.tagRefinements, d = p === void 0 ? [] : p;
  return Object.keys(a).forEach(function(m) {
    var g = a[m];
    g.forEach(function(_) {
      n.push(gi(t, "facet", m, _, e.facets));
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
      n.push(gi(
        t,
        "disjunctive",
        m,
        // We unescape any disjunctive refined values with `unescapeFacetValue` because
        // they can be escaped on negative numeric values with `escapeFacetValue`.
        Pm(_),
        e.disjunctiveFacets
      ));
    });
  }), Object.keys(l).forEach(function(m) {
    var g = l[m];
    g.forEach(function(_) {
      n.push(gi(t, "hierarchical", m, _, e.hierarchicalFacets));
    });
  }), Object.keys(h).forEach(function(m) {
    var g = h[m];
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
  }), d.forEach(function(m) {
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
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function Ks(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ks(Object(r), !0).forEach(function(n) {
      $m(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ks(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $m(e, t, r) {
  return t = Fm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fm(e) {
  var t = Nm(e, "string");
  return gr(t) === "symbol" ? t : String(t);
}
function Nm(e, t) {
  if (gr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Im(e, t, r) {
  return e.map(function(n, i) {
    return Js(Js({}, n), {}, {
      __position: r * t + i + 1
    });
  });
}
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
function Xs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xs(Object(r), !0).forEach(function(n) {
      Dm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dm(e, t, r) {
  return t = km(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function km(e) {
  var t = Mm(e, "string");
  return yr(t) === "symbol" ? t : String(t);
}
function Mm(e, t) {
  if (yr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (yr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hm(e, t) {
  return t ? e.map(function(r) {
    return Zs(Zs({}, r), {}, {
      __queryID: t
    });
  }) : e;
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function Lm(e, t) {
  return Bm(e) || Wm(e, t) || Um(e, t) || qm();
}
function qm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Um(e, t) {
  if (e) {
    if (typeof e == "string")
      return eu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return eu(e, t);
  }
}
function eu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Wm(e, t) {
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
function Bm(e) {
  if (Array.isArray(e))
    return e;
}
function tu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tu(Object(r), !0).forEach(function(n) {
      Yf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yf(e, t, r) {
  return t = Vm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vm(e) {
  var t = zm(e, "string");
  return br(t) === "symbol" ? t : String(t);
}
function zm(e, t) {
  if (br(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (br(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qm(e, t) {
  if (t && !((!("transporter" in e) || e._cacheHydrated) && (!e._useCache || typeof e.addAlgoliaAgent != "function"))) {
    var r = Object.keys(t).map(function(s) {
      var c = t[s], u = c.state, o = c.requestParams, f = c.results;
      return f.map(function(l) {
        return Jt({
          indexName: u.index || l.index
        }, o || l.params ? {
          params: ru(o || Ym(l.params))
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
          return Jt(Jt({}, l), {}, {
            params: ru(l.params)
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
      e.cache = Jt(Jt({}, e.cache), {}, Yf({}, a, JSON.stringify({
        results: Object.keys(t).map(function(s) {
          return t[s].results;
        })
      })));
    }
  }
}
function Ym(e) {
  return e.split("&").reduce(function(t, r) {
    var n = r.split("="), i = Lm(n, 2), a = i[0], s = i[1];
    return t[a] = s ? decodeURIComponent(s) : "", t;
  }, {});
}
function ru(e) {
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
function nu(e) {
  return e !== Object(e);
}
function qo(e, t) {
  if (e === t)
    return !0;
  if (nu(e) || nu(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (!(i in t) || !qo(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Gf(e, t) {
  t(e), e.getWidgets().forEach(function(r) {
    ht(r) && Gf(r, t);
  });
}
function Gm(e) {
  return e.filter(function(t, r, n) {
    return n.indexOf(t) === r;
  });
}
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
var Km = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function iu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iu(Object(r), !0).forEach(function(n) {
      Jm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jm(e, t, r) {
  return t = Xm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xm(e) {
  var t = Zm(e, "string");
  return wr(t) === "symbol" ? t : String(t);
}
function Zm(e, t) {
  if (wr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eg(e, t) {
  if (e == null)
    return {};
  var r = tg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var rg = function(t, r) {
  r.facets, r.disjunctiveFacets, r.facetsRefinements, r.facetsExcludes, r.disjunctiveFacetsRefinements, r.numericRefinements, r.tagRefinements, r.hierarchicalFacets, r.hierarchicalFacetsRefinements, r.ruleContexts;
  var n = eg(r, Km);
  return t.setQueryParameters(n);
}, ng = function(t, r) {
  return r.facets.reduce(function(n, i) {
    return n.addFacet(i);
  }, t);
}, ig = function(t, r) {
  return r.disjunctiveFacets.reduce(function(n, i) {
    return n.addDisjunctiveFacet(i);
  }, t);
}, ag = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacets: r.hierarchicalFacets.reduce(function(n, i) {
      var a = xm(n, function(c) {
        return c.name === i.name;
      });
      if (a === -1)
        return n.concat(i);
      var s = n.slice();
      return s.splice(a, 1, i), s;
    }, t.hierarchicalFacets)
  });
}, og = function(t, r) {
  return r.tagRefinements.reduce(function(n, i) {
    return n.addTagRefinement(i);
  }, t);
}, sg = function(t, r) {
  return t.setQueryParameters({
    facetsRefinements: at(at({}, t.facetsRefinements), r.facetsRefinements)
  });
}, ug = function(t, r) {
  return t.setQueryParameters({
    facetsExcludes: at(at({}, t.facetsExcludes), r.facetsExcludes)
  });
}, cg = function(t, r) {
  return t.setQueryParameters({
    disjunctiveFacetsRefinements: at(at({}, t.disjunctiveFacetsRefinements), r.disjunctiveFacetsRefinements)
  });
}, lg = function(t, r) {
  return t.setQueryParameters({
    numericRefinements: at(at({}, t.numericRefinements), r.numericRefinements)
  });
}, fg = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacetsRefinements: at(at({}, t.hierarchicalFacetsRefinements), r.hierarchicalFacetsRefinements)
  });
}, dg = function(t, r) {
  var n = Gm([].concat(t.ruleContexts).concat(r.ruleContexts).filter(Boolean));
  return n.length > 0 ? t.setQueryParameters({
    ruleContexts: n
  }) : t;
}, Ln = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.reduce(function(i, a) {
    var s = fg(i, a), c = ag(s, a), u = og(c, a), o = lg(u, a), f = cg(o, a), l = ug(f, a), v = sg(l, a), h = ig(v, a), p = dg(h, a), d = ng(p, a);
    return rg(d, a);
  });
};
function cr(e, t, r) {
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
function au(e, t) {
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
function hg(e) {
  for (var t = e.getParent(), r = [e.getHelper().state]; t !== null; )
    r = [t.getHelper().state].concat(r), t = t.getParent();
  return r;
}
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
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
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ou(Object(r), !0).forEach(function(n) {
      pg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pg(e, t, r) {
  return t = vg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vg(e) {
  var t = mg(e, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function mg(e, t) {
  if (_r(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_r(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kf(e) {
  return e.some(function(t) {
    return t.isHighlighted;
  }) ? e.map(function(t, r) {
    return Gr(Gr({}, t), {}, {
      isHighlighted: !Cm(e, r)
    });
  }) : e.map(function(t) {
    return Gr(Gr({}, t), {}, {
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
function Sr(e) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e);
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
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? su(Object(r), !0).forEach(function(n) {
      Jf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : su(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jf(e, t, r) {
  return t = gg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gg(e) {
  var t = yg(e, "string");
  return Sr(t) === "symbol" ? t : String(t);
}
function yg(e, t) {
  if (Sr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bg = Pt({
  name: "configure",
  connector: !0
});
function uu(e, t) {
  return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(r, n) {
    return Fe(Fe({}, r), {}, Jf({}, n, void 0));
  }, {}));
}
var wg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : De, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De;
  return function(n) {
    if (!n || !Uf(n.searchParameters))
      throw new Error(bg("The `searchParameters` option expects an object."));
    var i = {};
    function a(s) {
      return function(c) {
        var u = uu(s.state, n), o = Ln(u, new Ye.SearchParameters(c));
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
        return r(), uu(u, n);
      },
      getRenderState: function(c, u) {
        var o, f = this.getWidgetRenderState(u);
        return Fe(Fe({}, c), {}, {
          configure: Fe(Fe({}, f), {}, {
            widgetParams: Fe(Fe({}, f.widgetParams), {}, {
              searchParameters: Ln(new Ye.SearchParameters((o = c.configure) === null || o === void 0 ? void 0 : o.widgetParams.searchParameters), new Ye.SearchParameters(f.widgetParams.searchParameters)).getQueryParams()
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
        return Ln(c, new Ye.SearchParameters(Fe(Fe({}, o.configure), n.searchParameters)));
      },
      getWidgetUiState: function(c) {
        return Fe(Fe({}, c), {}, {
          configure: Fe(Fe({}, c.configure), n.searchParameters)
        });
      }
    };
  };
};
const _g = wg;
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ba(e);
}
var cu = Object.prototype.hasOwnProperty;
function Ht(e, t, r) {
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
        for (; i-- && Ht(e[i], t[i], r); )
          ;
      return i === -1;
    }
    if (!n || Ba(e) === "object") {
      i = 0;
      for (n in e)
        if (cu.call(e, n) && ++i && !cu.call(t, n) || !(n in t) || !Ht(e[n], t[n], r))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
function lu(e) {
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
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
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
      Sg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sg(e, t, r) {
  return t = Og(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Og(e) {
  var t = Rg(e, "string");
  return Or(t) === "symbol" ? t : String(t);
}
function Rg(e, t) {
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
function Pg(e) {
  var t = e.getHelper(), r = (
    // On SSR, we get the results injected on the Index.
    e.getResults() || // On the browser, we create fallback results based on the helper state.
    lu(t.state)
  ), n = e.getScopedResults().map(function(i) {
    var a = i.indexId === e.getIndexId() ? r : lu(i.helper.state);
    return du(du({}, i), {}, {
      // We keep `results` from being `null`.
      results: i.results || a
    });
  });
  return {
    results: r,
    scopedResults: n
  };
}
function Xf(e, t) {
  if (!e) {
    if (process.env.NODE_ENV !== "development")
      throw new Error("Invariant failed");
    if (process.env.NODE_ENV === "development")
      throw new Error("[InstantSearch] ".concat(typeof t == "function" ? t() : t));
  }
}
var Uo = /* @__PURE__ */ Ut(null);
process.env.NODE_ENV === "development" && (Uo.displayName = "Index");
function Eg() {
  var e = ot(Uo);
  return Xf(e !== null, "The <Index> component must be used within <InstantSearch>."), e;
}
var Wo = /* @__PURE__ */ Ut(null);
process.env.NODE_ENV === "development" && (Wo.displayName = "InstantSearch");
function Zf() {
  var e = ot(Wo);
  return Xf(e !== null, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`."), e;
}
var ed = /* @__PURE__ */ Ut(null);
process.env.NODE_ENV === "development" && (ed.displayName = "InstantSearchServer");
function td() {
  return ot(ed);
}
function xg(e, t) {
  return Ag(e) || Cg(e, t) || Tg(e, t) || jg();
}
function jg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tg(e, t) {
  if (e) {
    if (typeof e == "string")
      return hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hu(e, t);
  }
}
function hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Cg(e, t) {
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
function Ag(e) {
  if (Array.isArray(e))
    return e;
}
function pu(e) {
  var t = Mr(function() {
    return e;
  }), r = xg(t, 2), n = r[0], i = r[1];
  return Ht(n, e) || i(e), n;
}
var $g = "use", vu = yh[$g], Fg = typeof window < "u" ? wh : qn, Ng = /* @__PURE__ */ Ut(null);
function rd() {
  return ot(Ng);
}
function Ig(e) {
  var t, r = e.widget, n = e.parentIndex, i = e.props, a = e.shouldSsr, s = rd(), c = Ge(i);
  qn(function() {
    c.current = i;
  }, [i]);
  var u = Ge(r);
  qn(function() {
    u.current = r;
  }, [r]);
  var o = Ge(null), f = a && !n.getWidgets().includes(r), l = Zf();
  if (Fg(function() {
    var h = u.current;
    if (!o.current)
      f || n.addWidgets([r]);
    else {
      clearTimeout(o.current);
      var p = Ht(i, c.current);
      p || (n.removeWidgets([h]), n.addWidgets([r]));
    }
    return function() {
      o.current = setTimeout(function() {
        l._schedule(function() {
          l._preventWidgetCleanup || n.removeWidgets([h]);
        });
      });
    };
  }, [n, r, f, l, i]), (f || (s == null || (t = s.current) === null || t === void 0 ? void 0 : t.status) === "pending") && n.addWidgets([r]), typeof window > "u" && s !== null && s !== void 0 && s.current && // We need the widgets contained in the index to be added before we trigger the search request.
  r.$$type !== "ais.index") {
    var v;
    vu(s.current), r.$$type !== "ais.dynamicWidgets" && (v = l.helper) !== null && v !== void 0 && v.lastResults && vu(s.current);
  }
}
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
var Dg = ["instantSearchInstance", "widgetParams"], kg = ["widgetParams"];
function Mg(e, t) {
  return Ug(e) || qg(e, t) || Lg(e, t) || Hg();
}
function Hg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lg(e, t) {
  if (e) {
    if (typeof e == "string")
      return mu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mu(e, t);
  }
}
function mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function qg(e, t) {
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
function Ug(e) {
  if (Array.isArray(e))
    return e;
}
function gu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gu(Object(r), !0).forEach(function(n) {
      Wg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wg(e, t, r) {
  return t = Bg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bg(e) {
  var t = Vg(e, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function Vg(e, t) {
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
function bu(e, t) {
  if (e == null)
    return {};
  var r = zg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = td(), i = Zf(), a = Eg(), s = pu(t), c = pu(r), u = Ge(!0), o = Ge(null), f = Ge(i.status), l = vt(function() {
    var m = e(function(g, _) {
      if (_) {
        u.current = !0;
        return;
      }
      if (u.current) {
        var w = g.instantSearchInstance;
        g.widgetParams;
        var b = bu(g, Dg);
        (!Ht(b, o.current, function(y, j) {
          return (y == null ? void 0 : y.constructor) === Function && (j == null ? void 0 : j.constructor) === Function;
        }) || w.status !== f.current) && (d(b), o.current = b, f.current = w.status);
      }
    }, function() {
      u.current = !1;
    });
    return yu(yu({}, m(s)), c);
  }, [e, s, c]), v = Mr(function() {
    if (l.getWidgetRenderState) {
      var m, g = a.getHelper(), _ = a.getWidgetUiState({})[a.getIndexId()];
      g.state = ((m = l.getWidgetSearchParameters) === null || m === void 0 ? void 0 : m.call(l, g.state, {
        uiState: _
      })) || g.state;
      var w = Pg(a), b = w.results, y = w.scopedResults, j = l.getWidgetRenderState({
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
      var F = bu(j, kg);
      return F;
    }
    return {};
  }), h = Mg(v, 2), p = h[0], d = h[1];
  return Ig({
    widget: l,
    parentIndex: a,
    props: s,
    shouldSsr: !!n
  }), p;
}
function Qg(e, t) {
  return qr(_g, {
    searchParameters: e
  }, t);
}
function Yg(e) {
  return Qg(e, {
    $$widgetType: "ais.configure"
  }), null;
}
var wu = {
  current: {}
};
function Bo(e, t) {
  if (process.env.NODE_ENV === "development" && !e) {
    var r = t.trim(), n = wu.current[r];
    if (!n) {
      wu.current[r] = !0;
      var i = "[InstantSearch] ".concat(r);
      console.warn(i);
      try {
        throw new Error(i);
      } catch {
      }
    }
  }
}
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
var Gg = ["initialSearchParameters"];
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
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _u(Object(r), !0).forEach(function(n) {
      $t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _u(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $t(e, t, r) {
  return t = Kg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kg(e) {
  var t = Jg(e, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function Jg(e, t) {
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
function nd(e) {
  return ty(e) || ey(e) || Zg(e) || Xg();
}
function Xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zg(e, t) {
  if (e) {
    if (typeof e == "string")
      return Va(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Va(e, t);
  }
}
function ey(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ty(e) {
  if (Array.isArray(e))
    return Va(e);
}
function Va(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ry(e, t) {
  if (e == null)
    return {};
  var r = ny(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ny(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Xt = Pt({
  name: "index-widget"
});
function id(e, t) {
  var r = t.state, n = t.isPageReset, i = t._uiState;
  r !== e.state && (e.state = r, e.emit("change", {
    state: e.state,
    results: e.lastResults,
    isPageReset: n,
    _uiState: i
  }));
}
function Zt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e.reduce(function(n, i) {
    return ht(i) || !i.getWidgetUiState && !i.getWidgetState ? n : i.getWidgetUiState ? i.getWidgetUiState(n, t) : i.getWidgetState(n, t);
  }, r);
}
function er(e, t) {
  var r = t.initialSearchParameters, n = ry(t, Gg);
  return e.filter(function(i) {
    return !ht(i);
  }).reduce(function(i, a) {
    return a.getWidgetSearchParameters ? a.getWidgetSearchParameters(i, n) : i;
  }, r);
}
function ad(e) {
  var t = e.filter(ht);
  t.length !== 0 && t.forEach(function(r) {
    var n = r.getHelper();
    id(n, {
      state: n.state.resetPage(),
      isPageReset: !0
    }), ad(r.getWidgets());
  });
}
function od(e) {
  var t = e.filter(ht);
  return t.reduce(function(r, n) {
    return r.concat.apply(r, [{
      indexId: n.getIndexId(),
      results: n.getResults(),
      helper: n.getHelper()
    }].concat(nd(od(n.getWidgets()))));
  }, []);
}
var iy = function(t) {
  if (t === void 0 || t.indexName === void 0)
    throw new Error(Xt("The `indexName` option is required."));
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
      var h;
      return (h = f) !== null && h !== void 0 && h.lastResults ? (f.lastResults._state = o.state, f.lastResults) : null;
    },
    getPreviousState: function() {
      return l;
    },
    getScopedResults: function() {
      var h = this.getParent(), p = h ? h.getWidgets() : [this];
      return od(p);
    },
    getParent: function() {
      return u;
    },
    createURL: function(h) {
      return typeof h == "function" ? c._createURL($t({}, i, h(s))) : c._createURL($t({}, i, Zt(a, {
        searchParameters: h,
        helper: o
      })));
    },
    getWidgets: function() {
      return a;
    },
    addWidgets: function(h) {
      var p = this;
      if (!Array.isArray(h))
        throw new Error(Xt("The `addWidgets` method expects an array of widgets."));
      if (h.some(function(d) {
        return typeof d.init != "function" && typeof d.render != "function";
      }))
        throw new Error(Xt("The widget definition expects a `render` and/or an `init` method."));
      return a = a.concat(h), c && h.length && (id(o, {
        state: er(a, {
          uiState: s,
          initialSearchParameters: o.state
        }),
        _uiState: s
      }), h.forEach(function(d) {
        if (d.getRenderState) {
          var m = d.getRenderState(c.renderState[p.getIndexId()] || {}, cr(c, p, c._initialUiState));
          yi({
            renderState: m,
            instantSearchInstance: c,
            parent: p
          });
        }
      }), h.forEach(function(d) {
        d.init && d.init(cr(c, p, c._initialUiState));
      }), c.scheduleSearch()), this;
    },
    removeWidgets: function(h) {
      var p = this;
      if (!Array.isArray(h))
        throw new Error(Xt("The `removeWidgets` method expects an array of widgets."));
      if (h.some(function(g) {
        return typeof g.dispose != "function";
      }))
        throw new Error(Xt("The widget definition expects a `dispose` method."));
      if (a = a.filter(function(g) {
        return h.indexOf(g) === -1;
      }), c && h.length) {
        var d = h.reduce(function(g, _) {
          var w = _.dispose({
            helper: o,
            state: g,
            parent: p
          });
          return w || g;
        }, o.state), m = c.future.preserveSharedStateOnUnmount ? er(a, {
          uiState: s,
          initialSearchParameters: new Ye.SearchParameters({
            index: this.getIndexName()
          })
        }) : er(a, {
          uiState: Zt(a, {
            searchParameters: d,
            helper: o
          }),
          initialSearchParameters: d
        });
        s = Zt(a, {
          searchParameters: m,
          helper: o
        }), o.setState(m), a.length && c.scheduleSearch();
      }
      return this;
    },
    init: function(h) {
      var p = this, d, m = h.instantSearchInstance, g = h.parent, _ = h.uiState;
      if (o === null) {
        c = m, u = g, s = _[i] || {};
        var w = m.mainHelper, b = er(a, {
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
        }, o.searchForFacetValues = function(F, R, q, V) {
          var L = o.state.setQueryParameters(V);
          return w.searchForFacetValues(F, R, q, L);
        }, f = w.derive(function() {
          return Ln.apply(void 0, [w.state].concat(nd(hg(p))));
        });
        var y = (d = m._initialResults) === null || d === void 0 ? void 0 : d[this.getIndexId()];
        if (y) {
          var j = new Ye.SearchResults(new Ye.SearchParameters(y.state), y.results);
          f.lastResults = j, o.lastResults = j;
        }
        o.on("change", function(F) {
          var R = F.isPageReset;
          R && ad(a);
        }), f.on("search", function() {
          m.scheduleStalledRender(), process.env.NODE_ENV === "development" && Hf({
            index: p,
            indexUiState: s
          });
        }), f.on("result", function(F) {
          var R = F.results;
          m.scheduleRender(), o.lastResults = R, l = R == null ? void 0 : R._state;
        }), a.forEach(function(F) {
          if (F.getRenderState) {
            var R = F.getRenderState(m.renderState[p.getIndexId()] || {}, cr(m, p, _));
            yi({
              renderState: R,
              instantSearchInstance: m,
              parent: p
            });
          }
        }), a.forEach(function(F) {
          process.env.NODE_ENV === "development" && he(
            // if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
            // aka we warn if there's _only_ getWidgetState
            !F.getWidgetState || !!F.getWidgetUiState,
            "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."
          ), F.init && F.init(cr(m, p, _));
        }), o.on("change", function(F) {
          var R = F.state, q = F._uiState;
          s = Zt(a, {
            searchParameters: R,
            helper: o
          }, q || {}), m.onStateChange || m.onInternalStateChange();
        }), y && m.scheduleRender();
      }
    },
    render: function(h) {
      var p = this, d = h.instantSearchInstance;
      d.status === "error" && !d.mainHelper.hasPendingRequests() && l && o.setState(l);
      var m = this.getResults() ? a : a.filter(ht);
      m.forEach(function(g) {
        if (g.getRenderState) {
          var _ = g.getRenderState(d.renderState[p.getIndexId()] || {}, au(d, p));
          yi({
            renderState: _,
            instantSearchInstance: d,
            parent: p
          });
        }
      }), m.forEach(function(g) {
        g.render && g.render(au(d, p));
      });
    },
    dispose: function() {
      var h = this, p, d;
      a.forEach(function(m) {
        m.dispose && m.dispose({
          helper: o,
          state: o.state,
          parent: h
        });
      }), c = null, u = null, (p = o) === null || p === void 0 || p.removeAllListeners(), o = null, (d = f) === null || d === void 0 || d.detach(), f = null;
    },
    getWidgetUiState: function(h) {
      return a.filter(ht).reduce(function(p, d) {
        return d.getWidgetUiState(p);
      }, it(it({}, h), {}, $t({}, i, it(it({}, h[i]), s))));
    },
    getWidgetState: function(h) {
      return process.env.NODE_ENV === "development" && he(!1, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."), this.getWidgetUiState(h);
    },
    getWidgetSearchParameters: function(h, p) {
      var d = p.uiState;
      return er(a, {
        uiState: d,
        initialSearchParameters: h
      });
    },
    refreshUiState: function() {
      s = Zt(a, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, s);
    },
    setIndexUiState: function(h) {
      var p = typeof h == "function" ? h(s) : h;
      c.setUiState(function(d) {
        return it(it({}, d), {}, $t({}, i, p));
      });
    }
  };
};
const ay = iy;
function yi(e) {
  var t = e.renderState, r = e.instantSearchInstance, n = e.parent, i = n ? n.getIndexId() : r.mainIndex.getIndexId();
  r.renderState = it(it({}, r.renderState), {}, $t({}, i, it(it({}, r.renderState[i]), t)));
}
function oy(e, t) {
  return ly(e) || cy(e, t) || uy(e, t) || sy();
}
function sy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uy(e, t) {
  if (e) {
    if (typeof e == "string")
      return Su(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Su(e, t);
  }
}
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function cy(e, t) {
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
function ly(e) {
  if (Array.isArray(e))
    return e;
}
function fy() {
  var e = _h(function(n) {
    return n + 1;
  }, 0), t = oy(e, 2), r = t[1];
  return r;
}
var sd = /* @__PURE__ */ Ut(null);
process.env.NODE_ENV === "development" && (sd.displayName = "InstantSearchSSR");
function dy() {
  return ot(sd);
}
var hy = "ais", ei = function(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.descendantName, i = r.modifierName, a = n ? "-".concat(n) : "", s = i ? "--".concat(i) : "";
    return "".concat(hy, "-").concat(t).concat(a).concat(s);
  };
}, py = ei("Highlight");
function vy(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && he(!1, "`instantsearch.highlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Highlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Vt(i._highlightResult, t);
  process.env.NODE_ENV === "development" && he(c, 'Could not enable highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = py({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : "");
  return f.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var my = ei("ReverseHighlight");
function gy(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && he(!1, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Vt(i._highlightResult, t);
  process.env.NODE_ENV === "development" && he(c, 'Could not enable reverse highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = my({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : ""), v = Vf(Kf(Lr(f)));
  return v.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var yy = ei("Snippet");
function by(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && he(!1, "`instantsearch.snippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Snippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Vt(i._snippetResult, t);
  process.env.NODE_ENV === "development" && he(c, 'Could not enable snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = yy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : "");
  return f.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
var wy = ei("ReverseSnippet");
function _y(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, s = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && he(!1, "`instantsearch.reverseSnippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseSnippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var c = Vt(i._snippetResult, t);
  process.env.NODE_ENV === "development" && he(c, 'Could not enable reverse snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var u = c || {}, o = u.value, f = o === void 0 ? "" : o, l = wy({
    descendantName: "highlighted"
  }) + (s.highlighted ? " ".concat(s.highlighted) : ""), v = Vf(Kf(Lr(f)));
  return v.replace(new RegExp(Me.highlightPreTag, "g"), "<".concat(n, ' class="').concat(l, '">')).replace(new RegExp(Me.highlightPostTag, "g"), "</".concat(n, ">"));
}
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
function Sy(e) {
  var t = e.method, r = e.payload;
  if (za(r) !== "object")
    throw new Error("The insights helper expects the payload to be an object.");
  var n;
  try {
    n = zf(r);
  } catch {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'.concat(t, '" data-insights-payload="').concat(n, '"');
}
function Oy(e, t) {
  return process.env.NODE_ENV === "development" && he(!1, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), Sy({
    method: e,
    payload: t
  });
}
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
var Ry = "_ALGOLIA";
function Py(e) {
  if (!((typeof document > "u" ? "undefined" : Qa(document)) !== "object" || typeof document.cookie != "string"))
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) === " "; )
        i = i.substring(1);
      if (i.indexOf(t) === 0)
        return i.substring(t.length, i.length);
    }
}
function Ey() {
  return Py(Ry);
}
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function Ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ou(Object(r), !0).forEach(function(n) {
      xy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xy(e, t, r) {
  return t = jy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jy(e) {
  var t = Ty(e, "string");
  return Er(t) === "symbol" ? t : String(t);
}
function Ty(e, t) {
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
function lr(e, t) {
  return $y(e) || Ay(e, t) || ud(e, t) || Cy();
}
function Cy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ay(e, t) {
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
function $y(e) {
  if (Array.isArray(e))
    return e;
}
function Fy(e) {
  return Dy(e) || Iy(e) || ud(e) || Ny();
}
function Ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ud(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ya(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ya(e, t);
  }
}
function Iy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dy(e) {
  if (Array.isArray(e))
    return Ya(e);
}
function Ya(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var cd = "2.13.0", ky = "https://cdn.jsdelivr.net/npm/search-insights@".concat(cd, "/dist/search-insights.min.js");
function Ru() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.insightsClient, r = e.insightsInitParams, n = e.onEvent, i = e.$$internal, a = i === void 0 ? !1 : i, s = e.$$automatic, c = s === void 0 ? !1 : s, u = t;
  !t && t !== null && mt(function(f) {
    var l = f.window, v = l.AlgoliaAnalyticsObject || "aa";
    typeof v == "string" && (u = l[v]), u || (l.AlgoliaAnalyticsObject = v, l[v] || (l[v] = function() {
      l[v].queue || (l[v].queue = []);
      for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
        p[d] = arguments[d];
      l[v].queue.push(p);
    }, l[v].version = cd, l[v].shouldAddScript = !0), u = l[v]);
  });
  var o = u || De;
  return function(f) {
    var l = f.instantSearchInstance, v = l.middleware.filter(function(V) {
      return V.instance.$$type === "ais.insights" && V.instance.$$internal;
    }).map(function(V) {
      return V.creator;
    });
    l.unuse.apply(l, Fy(v));
    var h = jm(l.client), p = lr(h, 2), d = p[0], m = p[1];
    process.env.NODE_ENV === "development" && he(!!(d && m), "could not extract Algolia credentials from searchClient in insights middleware.");
    var g = void 0, _ = void 0, w = void 0, b = void 0, y = o.queue;
    if (Array.isArray(y)) {
      var j = ["setUserToken", "setAuthenticatedUserToken"].map(function(V) {
        var L = Wa(y.slice().reverse(), function(ee) {
          var U = lr(ee, 1), T = U[0];
          return T === V;
        }) || [], k = lr(L, 2), A = k[1];
        return A;
      }), F = lr(j, 2);
      g = F[0], _ = F[1];
    }
    o("getUserToken", null, function(V, L) {
      w = bi(L);
    }), o("getAuthenticatedUserToken", null, function(V, L) {
      b = bi(L);
    }), (r || !Pu(o)) && o("init", wt({
      appId: d,
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
            k.async = !0, k.src = ky, k.onerror = function() {
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
        }, c || q.overrideStateWithoutTriggeringChangeEvent(wt(wt({}, q.state), {}, {
          clickAnalytics: !0
        })), a || l.scheduleSearch();
        var L = function(N) {
          var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, E = bi(N);
          if (!E)
            return;
          var M = q.state.userToken;
          function D() {
            q.overrideStateWithoutTriggeringChangeEvent(wt(wt({}, q.state), {}, {
              userToken: E
            })), M && M !== N && l.scheduleSearch();
          }
          z ? D() : setTimeout(D, 0);
        }, k = Ey();
        k && L(k, !0);
        function A(C, N, z) {
          L(C, !0), N && o("setUserToken", N), z && o("setAuthenticatedUserToken", z);
        }
        var ee = b || w, U = _ || g;
        ee ? A(ee, w, b) : U && A(U, g, _), o("onUserTokenChange", L, {
          immediate: !0
        }), o("onAuthenticatedUserTokenChange", function(C) {
          C || o("getUserToken", null, function(N, z) {
            L(z);
          }), L(C);
        }, {
          immediate: !0
        });
        var T = o;
        Pu(o) && (T = function(N, z) {
          var E = {
            headers: {
              "X-Algolia-Application-Id": d,
              "X-Algolia-API-Key": m
            }
          };
          return o(N, z, E);
        }), l.sendEventToInsights = function(C) {
          n ? n(C, T) : C.insightsMethod ? (C.payload.algoliaSource = ["instantsearch"], c && C.payload.algoliaSource.push("instantsearch-automatic"), C.eventModifier === "internal" && C.payload.algoliaSource.push("instantsearch-internal"), T(C.insightsMethod, C.payload), process.env.NODE_ENV === "development" && he(!!q.state.userToken, `
Cannot send event to Algolia Insights because \`userToken\` is not set.

See documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken
`)) : process.env.NODE_ENV === "development" && he(!1, "Cannot send event to Algolia Insights because `insightsMethod` option is missing.");
        };
      },
      unsubscribe: function() {
        o("onUserTokenChange", void 0), o("onAuthenticatedUserTokenChange", void 0), l.sendEventToInsights = De, q && R && (q.overrideStateWithoutTriggeringChangeEvent(wt(wt({}, q.state), R)), l.scheduleSearch());
      }
    };
  };
}
function Pu(e) {
  var t = (e.version || "").split(".").map(Number), r = lr(t, 2), n = r[0], i = r[1], a = n >= 3, s = n === 2 && i >= 6, c = n === 1 && i >= 10;
  return a || s || c;
}
function bi(e) {
  if (e)
    return typeof e == "number" ? e.toString() : e;
}
function ld(e, t, r) {
  var n = cr(t, t.mainIndex, t._initialUiState);
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
    }), i.$$type === "ais.index" && ld(i.getWidgets(), t, r);
  });
}
function My() {
  return mt(function(e) {
    var t, r, n = e.window;
    return ((t = n.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0 ? void 0 : r.indexOf("Algolia Crawler")) > -1;
  }, {
    fallback: function() {
      return !1;
    }
  });
}
function Hy() {
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
          a.ua = o.transporter && o.transporter.userAgent ? o.transporter.userAgent.value : o._ua, ld(i.mainIndex.getWidgets(), i, a), i.middleware.forEach(function(f) {
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
var Ly = String.prototype.replace, qy = /%20/g, wi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Vo = {
  default: wi.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return Ly.call(e, qy, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: wi.RFC1738,
  RFC3986: wi.RFC3986
}, Uy = Vo, _i = Object.prototype.hasOwnProperty, Ot = Array.isArray, et = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), Wy = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Ot(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, fd = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, By = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Ot(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !_i.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Ot(t) && !Ot(r) && (i = fd(t, n)), Ot(t) && Ot(r) ? (r.forEach(function(a, s) {
    if (_i.call(t, s)) {
      var c = t[s];
      c && typeof c == "object" && a && typeof a == "object" ? t[s] = e(c, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var c = r[s];
    return _i.call(a, s) ? a[s] = e(a[s], c, n) : a[s] = c, a;
  }, i);
}, Vy = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, zy = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Qy = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var c = "", u = 0; u < s.length; ++u) {
    var o = s.charCodeAt(u);
    if (o === 45 || o === 46 || o === 95 || o === 126 || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || a === Uy.RFC1738 && (o === 40 || o === 41)) {
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
}, Yy = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], s = a.obj[a.prop], c = Object.keys(s), u = 0; u < c.length; ++u) {
      var o = c[u], f = s[o];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: s, prop: o }), n.push(f));
    }
  return Wy(r), t;
}, Gy = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Ky = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Jy = function(t, r) {
  return [].concat(t, r);
}, Xy = function(t, r) {
  if (Ot(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, dd = {
  arrayToObject: fd,
  assign: Vy,
  combine: Jy,
  compact: Yy,
  decode: zy,
  encode: Qy,
  isBuffer: Ky,
  isRegExp: Gy,
  maybeMap: Xy,
  merge: By
}, Ga = dd, hr = Vo, Zy = Object.prototype.hasOwnProperty, Eu = {
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
}, Rt = Array.isArray, eb = String.prototype.split, tb = Array.prototype.push, hd = function(e, t) {
  tb.apply(e, Rt(t) ? t : [t]);
}, rb = Date.prototype.toISOString, xu = hr.default, Ie = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Ga.encode,
  encodeValuesOnly: !1,
  format: xu,
  formatter: hr.formatters[xu],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return rb.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, nb = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, ib = function e(t, r, n, i, a, s, c, u, o, f, l, v, h, p) {
  var d = t;
  if (typeof c == "function" ? d = c(r, d) : d instanceof Date ? d = f(d) : n === "comma" && Rt(d) && (d = Ga.maybeMap(d, function(L) {
    return L instanceof Date ? f(L) : L;
  })), d === null) {
    if (i)
      return s && !h ? s(r, Ie.encoder, p, "key", l) : r;
    d = "";
  }
  if (nb(d) || Ga.isBuffer(d)) {
    if (s) {
      var m = h ? r : s(r, Ie.encoder, p, "key", l);
      if (n === "comma" && h) {
        for (var g = eb.call(String(d), ","), _ = "", w = 0; w < g.length; ++w)
          _ += (w === 0 ? "" : ",") + v(s(g[w], Ie.encoder, p, "value", l));
        return [v(m) + "=" + _];
      }
      return [v(m) + "=" + v(s(d, Ie.encoder, p, "value", l))];
    }
    return [v(r) + "=" + v(String(d))];
  }
  var b = [];
  if (typeof d > "u")
    return b;
  var y;
  if (n === "comma" && Rt(d))
    y = [{ value: d.length > 0 ? d.join(",") || null : void 0 }];
  else if (Rt(c))
    y = c;
  else {
    var j = Object.keys(d);
    y = u ? j.sort(u) : j;
  }
  for (var F = 0; F < y.length; ++F) {
    var R = y[F], q = typeof R == "object" && typeof R.value < "u" ? R.value : d[R];
    if (!(a && q === null)) {
      var V = Rt(d) ? typeof n == "function" ? n(r, R) : r : r + (o ? "." + R : "[" + R + "]");
      hd(b, e(
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
        h,
        p
      ));
    }
  }
  return b;
}, ab = function(t) {
  if (!t)
    return Ie;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Ie.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = hr.default;
  if (typeof t.format < "u") {
    if (!Zy.call(hr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = hr.formatters[n], a = Ie.filter;
  return (typeof t.filter == "function" || Rt(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ie.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? Ie.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ie.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? Ie.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Ie.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : Ie.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ie.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ie.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ie.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ie.strictNullHandling
  };
}, ob = function(e, t) {
  var r = e, n = ab(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Rt(n.filter) && (a = n.filter, i = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var c;
  t && t.arrayFormat in Eu ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
  var u = Eu[c];
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var o = 0; o < i.length; ++o) {
    var f = i[o];
    n.skipNulls && r[f] === null || hd(s, ib(
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
}, Lt = dd, Ka = Object.prototype.hasOwnProperty, sb = Array.isArray, Ne = {
  allowDots: !1,
  allowPrototypes: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Lt.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, ub = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, pd = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, cb = "utf8=%26%2310003%3B", lb = "utf8=%E2%9C%93", fb = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = i.split(r.delimiter, a), c = -1, u, o = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < s.length; ++u)
      s[u].indexOf("utf8=") === 0 && (s[u] === lb ? o = "utf-8" : s[u] === cb && (o = "iso-8859-1"), c = u, u = s.length);
  for (u = 0; u < s.length; ++u)
    if (u !== c) {
      var f = s[u], l = f.indexOf("]="), v = l === -1 ? f.indexOf("=") : l + 1, h, p;
      v === -1 ? (h = r.decoder(f, Ne.decoder, o, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(f.slice(0, v), Ne.decoder, o, "key"), p = Lt.maybeMap(
        pd(f.slice(v + 1), r),
        function(d) {
          return r.decoder(d, Ne.decoder, o, "value");
        }
      )), p && r.interpretNumericEntities && o === "iso-8859-1" && (p = ub(p)), f.indexOf("[]=") > -1 && (p = sb(p) ? [p] : p), Ka.call(n, h) ? n[h] = Lt.combine(n[h], p) : n[h] = p;
    }
  return n;
}, db = function(e, t, r, n) {
  for (var i = n ? t : pd(t, r), a = e.length - 1; a >= 0; --a) {
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
}, hb = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, u = n.depth > 0 && s.exec(a), o = u ? a.slice(0, u.index) : a, f = [];
    if (o) {
      if (!n.plainObjects && Ka.call(Object.prototype, o) && !n.allowPrototypes)
        return;
      f.push(o);
    }
    for (var l = 0; n.depth > 0 && (u = c.exec(a)) !== null && l < n.depth; ) {
      if (l += 1, !n.plainObjects && Ka.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), db(f, r, n, i);
  }
}, pb = function(t) {
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
    delimiter: typeof t.delimiter == "string" || Lt.isRegExp(t.delimiter) ? t.delimiter : Ne.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Ne.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Ne.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Ne.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Ne.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ne.strictNullHandling
  };
}, vb = function(e, t) {
  var r = pb(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? fb(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var c = a[s], u = hb(c, n[c], r, typeof e == "string");
    i = Lt.merge(i, u, r);
  }
  return Lt.compact(i);
}, mb = ob, gb = vb, yb = Vo, bb = {
  formats: yb,
  parse: gb,
  stringify: mb
};
const ju = /* @__PURE__ */ Wt(bb);
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function wb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vd(n.key), n);
  }
}
function _b(e, t, r) {
  return t && Tu(e.prototype, t), r && Tu(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Le(e, t, r) {
  return t = vd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vd(e) {
  var t = Sb(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function Sb(e, t) {
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
var Cu = function(t) {
  t && (window.document.title = t);
}, Ob = /* @__PURE__ */ function() {
  function e(t) {
    var r = this, n = t.windowTitle, i = t.writeDelay, a = i === void 0 ? 400 : i, s = t.createURL, c = t.parseURL, u = t.getLocation, o = t.start, f = t.dispose, l = t.push, v = t.cleanUrlOnDispose;
    wb(this, e), Le(this, "$$type", "ais.browser"), Le(this, "windowTitle", void 0), Le(this, "writeDelay", void 0), Le(this, "_createURL", void 0), Le(this, "parseURL", void 0), Le(this, "getLocation", void 0), Le(this, "writeTimer", void 0), Le(this, "_onPopState", void 0), Le(this, "inPopState", !1), Le(this, "isDisposed", !1), Le(this, "latestAcknowledgedHistory", 0), Le(this, "_start", void 0), Le(this, "_dispose", void 0), Le(this, "_push", void 0), Le(this, "_cleanUrlOnDispose", void 0), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = a, this._createURL = s, this.parseURL = c, this.getLocation = u, this._start = o, this._dispose = f, this._push = l, this._cleanUrlOnDispose = typeof v > "u" ? !0 : v, process.env.NODE_ENV === "development" && typeof v > "u" && console.info(`Starting from the next major version, InstantSearch will not clean up the URL from active refinements when it is disposed.

We recommend setting \`cleanUrlOnDispose\` to false to adopt this change today.
To stay with the current behaviour and remove this warning, set the option to true.

See documentation: `.concat(Qn({
      name: "history-router"
    }), "#widget-param-cleanurlondispose")), mt(function(h) {
      var p = h.window, d = r.windowTitle && r.windowTitle(r.read());
      Cu(d), r.latestAcknowledgedHistory = p.history.length;
    });
  }
  return _b(e, [{
    key: "read",
    value: function() {
      return this.parseURL({
        qsModule: ju,
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
          Cu(c), n.shouldWrite(s) && (n._push ? n._push(s) : a.history.pushState(r, c || "", s), n.latestAcknowledgedHistory = a.history.length), n.inPopState = !1, n.writeTimer = void 0;
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
        qsModule: ju,
        routeState: r,
        location: this.getLocation()
      });
      if (process.env.NODE_ENV === "development")
        try {
          new URL(n);
        } catch {
          process.env.NODE_ENV === "development" && he(!1, "The URL returned by the `createURL` function is invalid.\nPlease make sure it returns an absolute URL to avoid issues, e.g: `https://algolia.com/search?query=iphone`.");
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
function Rb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.createURL, r = t === void 0 ? function(p) {
    var d = p.qsModule, m = p.routeState, g = p.location, _ = g.protocol, w = g.hostname, b = g.port, y = b === void 0 ? "" : b, j = g.pathname, F = g.hash, R = d.stringify(m), q = y === "" ? "" : ":".concat(y);
    return R ? "".concat(_, "//").concat(w).concat(q).concat(j, "?").concat(R).concat(F) : "".concat(_, "//").concat(w).concat(q).concat(j).concat(F);
  } : t, n = e.parseURL, i = n === void 0 ? function(p) {
    var d = p.qsModule, m = p.location;
    return d.parse(m.search.slice(1), {
      arrayLimit: 99
    });
  } : n, a = e.writeDelay, s = a === void 0 ? 400 : a, c = e.windowTitle, u = e.getLocation, o = u === void 0 ? function() {
    return mt(function(p) {
      var d = p.window;
      return d.location;
    }, {
      fallback: function() {
        throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
      }
    });
  } : u, f = e.start, l = e.dispose, v = e.push, h = e.cleanUrlOnDispose;
  return new Ob({
    createURL: r,
    parseURL: i,
    writeDelay: s,
    windowTitle: c,
    getLocation: o,
    start: f,
    dispose: l,
    push: v,
    cleanUrlOnDispose: h
  });
}
function jr(e) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
var Pb = ["configure"];
function Au(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Au(Object(r), !0).forEach(function(n) {
      Ja(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Au(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ja(e, t, r) {
  return t = Eb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Eb(e) {
  var t = xb(e, "string");
  return jr(t) === "symbol" ? t : String(t);
}
function xb(e, t) {
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
function jb(e, t) {
  if (e == null)
    return {};
  var r = Tb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $u(e) {
  e.configure;
  var t = jb(e, Pb);
  return t;
}
function Cb() {
  return {
    $$type: "ais.simple",
    stateToRoute: function(t) {
      return Object.keys(t).reduce(function(r, n) {
        return Kr(Kr({}, r), {}, Ja({}, n, $u(t[n])));
      }, {});
    },
    routeToState: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(t).reduce(function(r, n) {
        return Kr(Kr({}, r), {}, Ja({}, n, $u(t[n])));
      }, {});
    }
  };
}
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Fu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fu(Object(r), !0).forEach(function(n) {
      md(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function md(e, t, r) {
  return t = Ab(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ab(e) {
  var t = $b(e, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function $b(e, t) {
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
var Fb = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.router, n = r === void 0 ? Rb() : r, i = t.stateMapping, a = i === void 0 ? Cb() : i, s = t.$$internal, c = s === void 0 ? !1 : s;
  return function(u) {
    var o = u.instantSearchInstance;
    function f(h) {
      var p = (
        // If only the mainIndex is initialized, we don't yet know what other
        // index widgets are used. Therefore we fall back to the initialUiState.
        // We can't indiscriminately use the initialUiState because then we
        // reintroduce state that was changed by the user.
        // When there are no widgets, we are sure the user can't yet have made
        // any changes.
        o.mainIndex.getWidgets().length === 0 ? o._initialUiState : o.mainIndex.getWidgetUiState({})
      ), d = Object.keys(h).reduce(function(g, _) {
        return Jr(Jr({}, g), {}, md({}, _, h[_]));
      }, p), m = a.stateToRoute(d);
      return n.createURL(m);
    }
    o._createURL = f;
    var l = void 0, v = o._initialUiState;
    return {
      $$type: "ais.router({router:".concat(n.$$type || "__unknown__", ", stateMapping:").concat(a.$$type || "__unknown__", "})"),
      $$internal: c,
      onStateChange: function(p) {
        var d = p.uiState, m = a.stateToRoute(d);
        (l === void 0 || !qo(l, m)) && (n.write(m), l = m);
      },
      subscribe: function() {
        o._initialUiState = Jr(Jr({}, v), a.routeToState(n.read())), n.onUpdate(function(p) {
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
function Nb(e, t) {
  return e.toLocaleString(t);
}
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
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
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nu(Object(r), !0).forEach(function(n) {
      Ib(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ib(e, t, r) {
  return t = Db(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Db(e) {
  var t = kb(e, "string");
  return Cr(t) === "symbol" ? t : String(t);
}
function kb(e, t) {
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
function Mb(e) {
  var t = e.numberLocale;
  return {
    formatNumber: function(n, i) {
      return Nb(Number(i(n)), t);
    },
    highlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(vy(lt(lt({}, a), {}, {
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
        return i(gy(lt(lt({}, a), {}, {
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
        return i(by(lt(lt({}, a), {}, {
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
        return i(_y(lt(lt({}, a), {}, {
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
        return i(Oy(s, lt({
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
const Hb = "4.64.2";
function qt(e) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qt(e);
}
function Iu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iu(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Du(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gd(n.key), n);
  }
}
function qb(e, t, r) {
  return t && Du(e.prototype, t), r && Du(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ub(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xa(e, t);
}
function Xa(e, t) {
  return Xa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xa(e, t);
}
function Wb(e) {
  var t = Vb();
  return function() {
    var n = Yn(e), i;
    if (t) {
      var a = Yn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Bb(this, i);
  };
}
function Bb(e, t) {
  if (t && (qt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return we(e);
}
function we(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vb() {
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
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yn(e);
}
function Se(e, t, r) {
  return t = gd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gd(e) {
  var t = zb(e, "string");
  return qt(t) === "symbol" ? t : String(t);
}
function zb(e, t) {
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
var tt = Pt({
  name: "instantsearch"
});
function Qb() {
  return "#";
}
var yd = {
  preserveSharedStateOnUnmount: !1,
  persistHierarchicalRootCount: !1
}, Yb = /* @__PURE__ */ function(e) {
  Ub(r, e);
  var t = Wb(r);
  function r(n) {
    var i, a;
    Lb(this, r), a = t.call(this), Se(we(a), "client", void 0), Se(we(a), "indexName", void 0), Se(we(a), "insightsClient", void 0), Se(we(a), "onStateChange", null), Se(we(a), "future", void 0), Se(we(a), "helper", void 0), Se(we(a), "mainHelper", void 0), Se(we(a), "mainIndex", void 0), Se(we(a), "started", void 0), Se(we(a), "templatesConfig", void 0), Se(we(a), "renderState", {}), Se(we(a), "_stalledSearchDelay", void 0), Se(we(a), "_searchStalledTimer", void 0), Se(we(a), "_initialUiState", void 0), Se(we(a), "_initialResults", void 0), Se(we(a), "_createURL", void 0), Se(we(a), "_searchFunction", void 0), Se(we(a), "_mainHelperSearch", void 0), Se(we(a), "_insights", void 0), Se(we(a), "middleware", []), Se(we(a), "sendEventToInsights", void 0), Se(we(a), "status", "idle"), Se(we(a), "error", void 0), Se(we(a), "scheduleSearch", Kt(function() {
      a.started && a.mainHelper.search();
    })), Se(we(a), "scheduleRender", Kt(function() {
      var k, A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (k = a.mainHelper) !== null && k !== void 0 && k.hasPendingRequests() || (clearTimeout(a._searchStalledTimer), a._searchStalledTimer = null, A && (a.status = "idle", a.error = void 0)), a.mainIndex.render({
        instantSearchInstance: we(a)
      }), a.emit("render");
    })), Se(we(a), "onInternalStateChange", Kt(function() {
      var k = a.mainIndex.getWidgetUiState({});
      a.middleware.forEach(function(A) {
        var ee = A.instance;
        ee.onStateChange({
          uiState: k
        });
      });
    })), a.setMaxListeners(100);
    var s = n.indexName, c = s === void 0 ? "" : s, u = n.numberLocale, o = n.initialUiState, f = o === void 0 ? {} : o, l = n.routing, v = l === void 0 ? null : l, h = n.insights, p = h === void 0 ? void 0 : h, d = n.searchFunction, m = n.stalledSearchDelay, g = m === void 0 ? 200 : m, _ = n.searchClient, w = _ === void 0 ? null : _, b = n.insightsClient, y = b === void 0 ? null : b, j = n.onStateChange, F = j === void 0 ? null : j, R = n.future, q = R === void 0 ? Si(Si({}, yd), n.future || {}) : R;
    if (w === null)
      throw new Error(tt("The `searchClient` option is required."));
    if (typeof w.search != "function")
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    if (typeof w.addAlgoliaAgent == "function" && w.addAlgoliaAgent("instantsearch.js (".concat(Hb, ")")), process.env.NODE_ENV === "development" && he(y === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), y && typeof y != "function")
      throw new Error(tt("The `insightsClient` option should be a function."));
    if (process.env.NODE_ENV === "development" && he(!n.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(n.searchParameters, null, 2), `)
]);
\`\`\`

See `).concat(Qn({
      name: "configure"
    }))), process.env.NODE_ENV === "development" && ((i = n.future) === null || i === void 0 ? void 0 : i.preserveSharedStateOnUnmount) === void 0 && console.info(`Starting from the next major version, InstantSearch will change how widgets state is preserved when they are removed. InstantSearch will keep the state of unmounted widgets to be usable by other widgets with the same attribute.

We recommend setting \`future.preserveSharedStateOnUnmount\` to true to adopt this change today.
To stay with the current behaviour and remove this warning, set the option to false.

See documentation: `.concat(Qn({
      name: "instantsearch"
    }), `#widget-param-future
          `)), a.client = w, a.future = q, a.insightsClient = y, a.indexName = c, a.helper = null, a.mainHelper = null, a.mainIndex = ay({
      indexName: c
    }), a.onStateChange = F, a.started = !1, a.templatesConfig = {
      helpers: Mb({
        numberLocale: u
      }),
      compileOptions: {}
    }, a._stalledSearchDelay = g, a._searchStalledTimer = null, a._createURL = Qb, a._initialUiState = f, a._initialResults = null, a._insights = p, d && (process.env.NODE_ENV === "development" && he(!1, "The `searchFunction` option is deprecated. Use `onStateChange` instead."), a._searchFunction = d), a.sendEventToInsights = De, v) {
      var V = typeof v == "boolean" ? {} : v;
      V.$$internal = !0, a.use(Fb(V));
    }
    if (p) {
      var L = typeof p == "boolean" ? {} : p;
      L.$$internal = !0, a.use(Ru(L));
    }
    return My() && a.use(Hy({
      $$internal: !0
    })), a;
  }
  return qb(r, [{
    key: "_isSearchStalled",
    get: (
      /**
       * @deprecated use `status === 'stalled'` instead
       */
      function() {
        return process.env.NODE_ENV === "development" && he(!1, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.'), this.status === "stalled";
      }
    )
  }, {
    key: "use",
    value: function() {
      for (var i = this, a = arguments.length, s = new Array(a), c = 0; c < a; c++)
        s[c] = arguments[c];
      var u = s.map(function(o) {
        var f = Si({
          $$type: "__unknown__",
          $$internal: !1,
          subscribe: De,
          started: De,
          unsubscribe: De,
          onStateChange: De
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
      return process.env.NODE_ENV === "development" && he(!1, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version."), this.use.apply(this, arguments);
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
      return process.env.NODE_ENV === "development" && he(!1, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`"), this.addWidgets([i]);
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
      return process.env.NODE_ENV === "development" && he(!1, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`"), this.removeWidgets([i]);
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
        return i.status = "loading", i.scheduleRender(!1), process.env.NODE_ENV === "development" && he(!!i.indexName || i.mainIndex.getWidgets().some(ht), "No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results."), a.searchOnlyWithDerivedHelpers();
      }, this._searchFunction) {
        var s = {
          search: function() {
            return new Promise(De);
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
        Qm(this.client, this._initialResults);
        var c = this.scheduleSearch;
        this.scheduleSearch = Kt(De), Kt(function() {
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
        u && i.use(Ru({
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
          Ua(typeof o == "function" ? o(c) : o, a.mainIndex), a.scheduleSearch(), a.onInternalStateChange();
        }
      }) : (Ua(c, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange());
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
}(Ap);
const Gb = Yb;
var Za = { exports: {} }, Oi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ku;
function Kb() {
  if (ku)
    return Oi;
  ku = 1;
  var e = Y;
  function t(l, v) {
    return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function c(l, v) {
    var h = v(), p = n({ inst: { value: h, getSnapshot: v } }), d = p[0].inst, m = p[1];
    return a(function() {
      d.value = h, d.getSnapshot = v, u(d) && m({ inst: d });
    }, [l, h, v]), i(function() {
      return u(d) && m({ inst: d }), l(function() {
        u(d) && m({ inst: d });
      });
    }, [l]), s(h), h;
  }
  function u(l) {
    var v = l.getSnapshot;
    l = l.value;
    try {
      var h = v();
      return !r(l, h);
    } catch {
      return !0;
    }
  }
  function o(l, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : c;
  return Oi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Oi;
}
var Ri = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mu;
function Jb() {
  return Mu || (Mu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Y, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(w) {
      {
        for (var b = arguments.length, y = new Array(b > 1 ? b - 1 : 0), j = 1; j < b; j++)
          y[j - 1] = arguments[j];
        n("error", w, y);
      }
    }
    function n(w, b, y) {
      {
        var j = t.ReactDebugCurrentFrame, F = j.getStackAddendum();
        F !== "" && (b += "%s", y = y.concat([F]));
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
        var F = b();
        a(j, F) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var R = s({
        inst: {
          value: j,
          getSnapshot: b
        }
      }), q = R[0].inst, V = R[1];
      return u(function() {
        q.value = j, q.getSnapshot = b, h(q) && V({
          inst: q
        });
      }, [w, j, b]), c(function() {
        h(q) && V({
          inst: q
        });
        var L = function() {
          h(q) && V({
            inst: q
          });
        };
        return w(L);
      }, [w]), o(j), j;
    }
    function h(w) {
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
    var d = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !d, g = m ? p : v, _ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g;
    Ri.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ri;
}
process.env.NODE_ENV === "production" ? Za.exports = Kb() : Za.exports = Jb();
var Xb = Za.exports;
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function Hu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hu(Object(r), !0).forEach(function(n) {
      Zb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zb(e, t, r) {
  return t = e0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e0(e) {
  var t = t0(e, "string");
  return Ar(t) === "symbol" ? t : String(t);
}
function t0(e, t) {
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
var qu = ["react (".concat(Oh, ")"), "react-instantsearch (".concat(Ia, ")"), "react-instantsearch-core (".concat(Ia, ")")], Uu = "react-instantsearch-server (".concat(Ia, ")"), r0 = function(t) {
  return t ? "next.js (".concat(t, ")") : null;
};
function n0(e) {
  var t = fy(), r = td(), n = dy(), i = rd(), a = n == null ? void 0 : n.initialResults, s = Ge(e), c = r || a || i, u = Ge(null);
  if (n && (u = n.ssrSearchRef), u.current === null) {
    var o = new Gb(e);
    o._schedule = function(m) {
      o._schedule.queue.push(m), clearTimeout(o._schedule.timer), o._schedule.timer = setTimeout(function() {
        o._schedule.queue.forEach(function(g) {
          g();
        }), o._schedule.queue = [];
      }, 0);
    }, o._schedule.queue = [], c && (o._initialResults = a || {}), Wu(e.searchClient, [].concat(qu, [r && Uu, r0(o0())])), c && o.start(), r && r.notifyServer({
      search: o
    }), i0(e.routing), a0(!!i), u.current = o;
  }
  {
    var f = u.current, l = s.current;
    if (l.indexName !== e.indexName && (f.helper.setIndex(e.indexName || "").search(), s.current = e), l.searchClient !== e.searchClient && (process.env.NODE_ENV === "development" && Bo(!1, "The `searchClient` prop of `<InstantSearch>` changed between renders, which may cause more search requests than necessary. If this is an unwanted behavior, please provide a stable reference: https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/#widget-param-searchclient"), Wu(e.searchClient, [].concat(qu, [r && Uu])), f.mainHelper.setClient(e.searchClient).search(), s.current = e), l.onStateChange !== e.onStateChange && (f.onStateChange = e.onStateChange, s.current = e), l.searchFunction !== e.searchFunction && (f._searchFunction = e.searchFunction, s.current = e), l.stalledSearchDelay !== e.stalledSearchDelay) {
      var v;
      f._stalledSearchDelay = (v = e.stalledSearchDelay) !== null && v !== void 0 ? v : 200, s.current = e;
    }
    Ht(l.future, e.future) || (f.future = Lu(Lu({}, yd), e.future), s.current = e);
  }
  var h = Ge(null), p = Xb.useSyncExternalStore(Sh(function() {
    var d = u.current;
    return h.current === null ? d.started || (d.start(), t()) : (clearTimeout(h.current), d._preventWidgetCleanup = !1), function() {
      function m() {
        d.dispose();
      }
      clearTimeout(d._schedule.timer), h.current = setTimeout(m), d._preventWidgetCleanup = !0;
    };
  }, [t]), function() {
    return u.current;
  }, function() {
    return u.current;
  });
  return p;
}
function Wu(e, t) {
  typeof e.addAlgoliaAgent == "function" && t.filter(Boolean).forEach(function(r) {
    e.addAlgoliaAgent(r);
  });
}
function i0(e) {
  if (process.env.NODE_ENV === "development") {
    var t;
    if (!e || typeof window > "u" || !("__NEXT_DATA__" in window))
      return;
    var r = (
      // @ts-expect-error: _isNextRouter is only set on the Next.js router
      e !== !0 && (e == null || (t = e.router) === null || t === void 0 ? void 0 : t._isNextRouter)
    );
    process.env.NODE_ENV === "development" && Bo(r, `
You are using Next.js with InstantSearch without the "react-instantsearch-router-nextjs" package.
This package is recommended to make the routing work correctly with Next.js.
Please check its usage instructions: https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch-router-nextjs

You can ignore this warning if you are using a custom router that suits your needs, it won't be outputted in production builds.`);
  }
}
function a0(e) {
  var t;
  process.env.NODE_ENV !== "development" || typeof window > "u" || e || process.env.NODE_ENV === "development" && Bo(!(!((t = window.next) === null || t === void 0) && t.appDir), `
We've detected you are using Next.js with the App Router.
We released an **experimental** package called "react-instantsearch-nextjs" that makes SSR work with the App Router.
Please check its usage instructions: https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/#with-nextjs

This warning will not be outputted in production builds.`);
}
function o0() {
  var e, t;
  return typeof window < "u" && ((e = window.next) === null || e === void 0 ? void 0 : e.version) || (typeof process < "u" ? (t = process.env) === null || t === void 0 ? void 0 : t.NEXT_RUNTIME : void 0);
}
var s0 = ["children"];
function u0(e, t) {
  if (e == null)
    return {};
  var r = c0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zo(e) {
  var t = e.children, r = u0(e, s0), n = n0(r);
  return n.started ? /* @__PURE__ */ Y.createElement(Wo.Provider, {
    value: n
  }, /* @__PURE__ */ Y.createElement(Uo.Provider, {
    value: n.mainIndex
  }, t)) : null;
}
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function l0(e) {
  return p0(e) || h0(e) || d0(e) || f0();
}
function f0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d0(e, t) {
  if (e) {
    if (typeof e == "string")
      return eo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return eo(e, t);
  }
}
function h0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function p0(e) {
  if (Array.isArray(e))
    return eo(e);
}
function eo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bu(Object(r), !0).forEach(function(n) {
      v0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v0(e, t, r) {
  return t = m0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m0(e) {
  var t = g0(e, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function g0(e, t) {
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
var Vu = Pt({
  name: "current-refinements",
  connector: !0
}), y0 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De;
  return Xn(t, Vu()), function(n) {
    if ((n || {}).includedAttributes && (n || {}).excludedAttributes)
      throw new Error(Vu("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
    var i = n || {}, a = i.includedAttributes, s = i.excludedAttributes, c = s === void 0 ? ["query"] : s, u = i.transformItems, o = u === void 0 ? function(f) {
      return f;
    } : u;
    return {
      $$type: "ais.currentRefinements",
      init: function(l) {
        var v = l.instantSearchInstance;
        t(Ct(Ct({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: v
        }), !0);
      },
      render: function(l) {
        var v = l.instantSearchInstance;
        t(Ct(Ct({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: v
        }), !1);
      },
      dispose: function() {
        r();
      },
      getRenderState: function(l, v) {
        return Ct(Ct({}, l), {}, {
          currentRefinements: this.getWidgetRenderState(v)
        });
      },
      getWidgetRenderState: function(l) {
        var v = l.results, h = l.scopedResults, p = l.createURL, d = l.helper;
        function m() {
          return v ? h.reduce(function(_, w) {
            return _.concat(o(zu({
              results: w.results,
              helper: w.helper,
              indexId: w.indexId,
              includedAttributes: a,
              excludedAttributes: c
            }), {
              results: v
            }));
          }, []) : o(zu({
            results: {},
            helper: d,
            indexId: d.state.index,
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
            return wd(d, w);
          },
          createURL: function(w) {
            return p(bd(d.state, w));
          },
          widgetParams: n
        };
      }
    };
  };
};
function zu(e) {
  var t = e.results, r = e.helper, n = e.indexId, i = e.includedAttributes, a = e.excludedAttributes, s = (i || []).indexOf("query") !== -1 || (a || []).indexOf("query") === -1, c = i ? function(o) {
    return i.indexOf(o.attribute) !== -1;
  } : function(o) {
    return a.indexOf(o.attribute) === -1;
  }, u = Am(t, r.state, s).map(w0).filter(c);
  return u.reduce(function(o, f) {
    return [].concat(l0(o.filter(function(l) {
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
        return wd(r, v);
      }
    }]);
  }, []);
}
function bd(e, t) {
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
      return process.env.NODE_ENV === "development" && he(!1, 'The refinement type "'.concat(t.type, '" does not exist and cannot be cleared from the current refinements.')), e;
  }
}
function wd(e, t) {
  e.setState(bd(e.state, t)).search();
}
function b0(e) {
  switch (e) {
    case ">=":
      return "≥";
    case "<=":
      return "≤";
    default:
      return e;
  }
}
function w0(e) {
  var t = _0(e), r = e.operator ? "".concat(b0(e.operator), " ").concat(e.name) : e.name, n = {
    attribute: e.attribute,
    type: e.type,
    value: t,
    label: r
  };
  return e.operator !== void 0 && (n.operator = e.operator), e.count !== void 0 && (n.count = e.count), e.exhaustive !== void 0 && (n.exhaustive = e.exhaustive), n;
}
function _0(e) {
  return e.type === "numeric" ? Number(e.name) : "escapedValue" in e ? e.escapedValue : e.name;
}
const S0 = y0;
function O0(e, t) {
  return qr(S0, e, t);
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
var R0 = ["page"], P0 = ["clickAnalytics", "userToken"];
function Qu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qu(Object(r), !0).forEach(function(n) {
      _d(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _d(e, t, r) {
  return t = E0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E0(e) {
  var t = x0(e, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function x0(e, t) {
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
function Yu(e) {
  return A0(e) || C0(e) || T0(e) || j0();
}
function j0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function T0(e, t) {
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
function C0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function A0(e) {
  if (Array.isArray(e))
    return to(e);
}
function to(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Sd(e, t) {
  if (e == null)
    return {};
  var r = $0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var F0 = Pt({
  name: "infinite-hits",
  connector: !0
});
function Gu(e) {
  var t = e || {};
  t.page;
  var r = Sd(t, R0);
  return r;
}
function Xr(e) {
  var t = e || {};
  t.clickAnalytics, t.userToken;
  var r = Sd(t, P0);
  return r;
}
function N0() {
  var e = null, t = null;
  return {
    read: function(n) {
      var i = n.state;
      return qo(t, Gu(i)) ? e : null;
    },
    write: function(n) {
      var i = n.state, a = n.hits;
      t = Gu(i), e = a;
    }
  };
}
function I0(e) {
  return Object.keys(e).map(Number).sort(function(t, r) {
    return t - r;
  }).reduce(function(t, r) {
    return t.concat(e[r]);
  }, []);
}
var D0 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De;
  return Xn(t, F0()), function(n) {
    var i = n || {}, a = i.escapeHTML, s = a === void 0 ? !0 : a, c = i.transformItems, u = c === void 0 ? function(w) {
      return w;
    } : c, o = i.cache, f = o === void 0 ? N0() : o, l, v, h, p, d = function(b, y) {
      var j = b.page, F = j === void 0 ? 0 : j, R = Object.keys(y).map(Number);
      return R.length === 0 ? F : Math.min.apply(Math, [F].concat(Yu(R)));
    }, m = function(b, y) {
      var j = b.page, F = j === void 0 ? 0 : j, R = Object.keys(y).map(Number);
      return R.length === 0 ? F : Math.max.apply(Math, [F].concat(Yu(R)));
    }, g = function(b) {
      return function() {
        b.overrideStateWithoutTriggeringChangeEvent(Qe(Qe({}, b.state), {}, {
          page: d(b.state, f.read({
            state: Xr(b.state)
          }) || {}) - 1
        })).searchWithoutTriggeringOnStateChange();
      };
    }, _ = function(b) {
      return function() {
        b.setPage(m(b.state, f.read({
          state: Xr(b.state)
        }) || {}) + 1).search();
      };
    };
    return {
      $$type: "ais.infiniteHits",
      init: function(b) {
        t(Qe(Qe({}, this.getWidgetRenderState(b)), {}, {
          instantSearchInstance: b.instantSearchInstance
        }), !0);
      },
      render: function(b) {
        var y = b.instantSearchInstance, j = this.getWidgetRenderState(b);
        t(Qe(Qe({}, j), {}, {
          instantSearchInstance: y
        }), !1), h("view:internal", j.currentPageHits);
      },
      getRenderState: function(b, y) {
        return Qe(Qe({}, b), {}, {
          infiniteHits: this.getWidgetRenderState(y)
        });
      },
      getWidgetRenderState: function(b) {
        var y = b.results, j = b.helper, F = b.parent, R = b.state, q = b.instantSearchInstance, V, L = [], k = F.getPreviousState() || R, A = f.read({
          state: Xr(k)
        }) || {};
        if (!y)
          l = g(j), v = _(j), h = Sm({
            instantSearchInstance: q,
            index: j.getIndex(),
            widgetType: this.$$type
          }), p = Om({
            index: j.getIndex(),
            widgetType: this.$$type,
            instantSearchInstance: q
          }), V = k.page === void 0 || d(k, A) === 0;
        else {
          var ee, U, T = k.page, C = T === void 0 ? 0 : T;
          s && y.hits.length > 0 && (y.hits = em(y.hits));
          var N = Im(y.hits, y.page, y.hitsPerPage), z = Hm(N, y.queryID), E = u(z, {
            results: y
          }), M = !1;
          Gf(q.mainIndex, function(W) {
            !M && W.getWidgets().some(function(O) {
              var G = O.$$type;
              return G === "ais.dynamicWidgets";
            }) && (M = !0);
          });
          var D = !((ee = k.disjunctiveFacets) !== null && ee !== void 0 && ee.length) && !(k.facets || []).filter(function(W) {
            return W !== "*";
          }).length && !((U = k.hierarchicalFacets) !== null && U !== void 0 && U.length);
          A[C] === void 0 && !y.__isArtificial && q.status === "idle" && !(M && D) && (A[C] = E, f.write({
            state: Xr(k),
            hits: A
          })), L = E, V = d(k, A) === 0;
        }
        var $ = I0(A), H = y ? y.nbPages <= m(k, A) + 1 : !0;
        return {
          hits: $,
          currentPageHits: L,
          sendEvent: h,
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
        return s ? j.setQueryParameters(Object.keys(Dt).reduce(function(F, R) {
          return Qe(Qe({}, F), {}, _d({}, R, void 0));
        }, {})) : j;
      },
      getWidgetUiState: function(b, y) {
        var j = y.searchParameters, F = j.page || 0;
        return F ? Qe(Qe({}, b), {}, {
          // The page in the UI state is incremented by one
          // to expose the user value (not `0`).
          page: F + 1
        }) : b;
      },
      getWidgetSearchParameters: function(b, y) {
        var j = y.uiState, F = b;
        s && (F = b.setQueryParameters(Dt));
        var R = j.page ? j.page - 1 : 0;
        return F.setQueryParameter("page", R);
      }
    };
  };
};
const k0 = D0;
function M0(e, t) {
  return qr(k0, e, t);
}
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
var H0 = ["name", "escapedValue"], L0 = ["escapedValue", "value"];
function Ku(e, t) {
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
    t % 2 ? Ku(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ku(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fr(e, t, r) {
  return t = q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q0(e) {
  var t = U0(e, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function U0(e, t) {
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
function Ju(e, t) {
  if (e == null)
    return {};
  var r = W0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function W0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Zr = Pt({
  name: "refinement-list",
  connector: !0
}), Xu = ["isRefined", "count:desc", "name:asc"], B0 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De;
  return Xn(t, Zr()), function(n) {
    var i = n || {}, a = i.attribute, s = i.operator, c = s === void 0 ? "or" : s, u = i.limit, o = u === void 0 ? 10 : u, f = i.showMore, l = f === void 0 ? !1 : f, v = i.showMoreLimit, h = v === void 0 ? 20 : v, p = i.sortBy, d = p === void 0 ? Xu : p, m = i.escapeFacetValues, g = m === void 0 ? !0 : m, _ = i.transformItems, w = _ === void 0 ? function(C) {
      return C;
    } : _;
    if (!a)
      throw new Error(Zr("The `attribute` option is required."));
    if (!/^(and|or)$/.test(c))
      throw new Error(Zr('The `operator` must one of: `"and"`, `"or"` (got "'.concat(c, '").')));
    if (l === !0 && h <= o)
      throw new Error(Zr("`showMoreLimit` should be greater than `limit`."));
    var b = function(N) {
      var z = N.name, E = N.escapedValue, M = Ju(N, H0);
      return Re(Re({}, M), {}, {
        value: E,
        label: z,
        highlighted: z
      });
    }, y, j = [], F = !0, R, q, V = !1, L = function() {
    };
    function k() {
      L();
    }
    function A(C, N) {
      return function() {
        V = !V, N.render(C);
      };
    }
    function ee() {
      return V ? h : o;
    }
    var U = function() {
      return function() {
      };
    }, T = function(N, z) {
      return function(E) {
        return function(M) {
          var D = E.instantSearchInstance, $ = E.results;
          if (M === "" && j)
            t(Re(Re({}, z.getWidgetRenderState(Re(Re({}, E), {}, {
              results: y
            }))), {}, {
              instantSearchInstance: D
            }), !1);
          else {
            var H = {
              highlightPreTag: g ? Dt.highlightPreTag : Me.highlightPreTag,
              highlightPostTag: g ? Dt.highlightPostTag : Me.highlightPostTag
            };
            N.searchForFacetValues(
              a,
              M,
              // We cap the `maxFacetHits` value to 100 because the Algolia API
              // doesn't support a greater number.
              // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
              Math.min(ee(), 100),
              H
            ).then(function(W) {
              var O = g ? tm(W.facetHits) : W.facetHits, G = w(O.map(function(I) {
                var J = I.escapedValue, K = I.value, B = Ju(I, L0);
                return Re(Re({}, B), {}, {
                  value: J,
                  label: K
                });
              }), {
                results: $
              });
              t(Re(Re({}, z.getWidgetRenderState(Re(Re({}, E), {}, {
                results: y
              }))), {}, {
                items: G,
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
      init: function(N) {
        t(Re(Re({}, this.getWidgetRenderState(N)), {}, {
          instantSearchInstance: N.instantSearchInstance
        }), !0);
      },
      render: function(N) {
        t(Re(Re({}, this.getWidgetRenderState(N)), {}, {
          instantSearchInstance: N.instantSearchInstance
        }), !1);
      },
      getRenderState: function(N, z) {
        return Re(Re({}, N), {}, {
          refinementList: Re(Re({}, N.refinementList), {}, fr({}, a, this.getWidgetRenderState(z)))
        });
      },
      getWidgetRenderState: function(N) {
        var z = this, E = N.results, M = N.state, D = N.createURL, $ = N.instantSearchInstance, H = N.helper, W = [], O = [];
        if ((!q || !R || !U) && (q = dm({
          instantSearchInstance: $,
          helper: H,
          attribute: a,
          widgetType: this.$$type
        }), R = function(ne) {
          q("click:internal", ne), H.toggleFacetRefinement(a, ne).search();
        }, U = T(H, this)), E) {
          var G = E.getFacetValues(a, {
            sortBy: d,
            facetOrdering: d === Xu
          });
          O = G && Array.isArray(G) ? G : [], W = w(O.slice(0, ee()).map(b), {
            results: E
          });
          var I = M.maxValuesPerFacet, J = ee();
          F = I > J ? O.length <= J : O.length < J, y = E, j = W, N.results && (L = A(N, this));
        }
        var K = U && U(N), B = V && j.length > o, x = l && !F, oe = B || x;
        return {
          createURL: function(ne) {
            return D(function(Ee) {
              return z.getWidgetUiState(Ee, {
                searchParameters: M.resetPage().toggleFacetRefinement(a, ne),
                helper: H
              });
            });
          },
          items: W,
          refine: R,
          searchForItems: K,
          isFromSearch: !1,
          canRefine: W.length > 0,
          widgetParams: n,
          isShowingMore: V,
          canToggleShowMore: oe,
          toggleShowMore: k,
          sendEvent: q,
          hasExhaustiveItems: F
        };
      },
      dispose: function(N) {
        var z = N.state;
        r();
        var E = z.setQueryParameter("maxValuesPerFacet", void 0);
        return c === "and" ? E.removeFacet(a) : E.removeDisjunctiveFacet(a);
      },
      getWidgetUiState: function(N, z) {
        var E = z.searchParameters, M = c === "or" ? E.getDisjunctiveRefinements(a) : E.getConjunctiveRefinements(a);
        return V0(Re(Re({}, N), {}, {
          refinementList: Re(Re({}, N.refinementList), {}, fr({}, a, M))
        }), a);
      },
      getWidgetSearchParameters: function(N, z) {
        var E = z.uiState, M = c === "or";
        if (N.isHierarchicalFacet(a))
          return process.env.NODE_ENV === "development" && he(!1, 'RefinementList: Attribute "'.concat(a, `" is already used by another widget applying hierarchical faceting.
As this is not supported, please make sure to remove this other widget or this RefinementList widget will not work at all.`)), N;
        if (M && N.isConjunctiveFacet(a) || !M && N.isDisjunctiveFacet(a))
          return process.env.NODE_ENV === "development" && he(!1, 'RefinementList: Attribute "'.concat(a, `" is used by another refinement list with a different operator.
As this is not supported, please make sure to only use this attribute with one of the two operators.`)), N;
        var D = E.refinementList && E.refinementList[a], $ = M ? N.addDisjunctiveFacet(a).removeDisjunctiveFacetRefinement(a) : N.addFacet(a).removeFacetRefinement(a), H = $.maxValuesPerFacet || 0, W = Math.max(H, l ? h : o), O = $.setQueryParameter("maxValuesPerFacet", W);
        if (!D) {
          var G = M ? "disjunctiveFacetsRefinements" : "facetsRefinements";
          return O.setQueryParameters(fr({}, G, Re(Re({}, O[G]), {}, fr({}, a, []))));
        }
        return D.reduce(function(I, J) {
          return M ? I.addDisjunctiveFacetRefinement(a, J) : I.addFacetRefinement(a, J);
        }, O);
      }
    };
  };
};
function V0(e, t) {
  return e.refinementList && ((!e.refinementList[t] || e.refinementList[t].length === 0) && delete e.refinementList[t], Object.keys(e.refinementList).length === 0 && delete e.refinementList), e;
}
const z0 = B0;
function Q0(e, t) {
  return qr(z0, e, t);
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
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
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zu(Object(r), !0).forEach(function(n) {
      Y0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y0(e, t, r) {
  return t = G0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G0(e) {
  var t = K0(e, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function K0(e, t) {
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
var J0 = Pt({
  name: "search-box",
  connector: !0
}), X0 = function(t, r) {
  return r(t);
}, Z0 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De;
  return Xn(t, J0()), function(n) {
    var i = n || {}, a = i.queryHook, s = a === void 0 ? X0 : a, c, u;
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
        var l = f.helper, v = f.instantSearchInstance, h = f.state;
        return c || (c = function(d) {
          s(d, function(m) {
            return l.setQuery(m).search();
          });
        }, u = function() {
          l.setQuery("").search();
        }), {
          query: h.query || "",
          refine: c,
          clear: u,
          widgetParams: n,
          isSearchStalled: v.status === "stalled"
        };
      },
      getWidgetUiState: function(f, l) {
        var v = l.searchParameters, h = v.query || "";
        return h === "" || f && f.query === h ? f : pt(pt({}, f), {}, {
          query: h
        });
      },
      getWidgetSearchParameters: function(f, l) {
        var v = l.uiState;
        return f.setQueryParameter("query", v.query || "");
      }
    };
  };
};
const e1 = Z0;
function t1(e, t) {
  return qr(e1, e, t);
}
function de() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(Boolean).join(" ");
}
var r1 = ["isShowingMore", "translations"];
function n1(e, t) {
  if (e == null)
    return {};
  var r = i1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function a1(e) {
  var t = e.isShowingMore, r = e.translations, n = n1(e, r1);
  return /* @__PURE__ */ Y.createElement("button", n, r.showMoreButtonText({
    isShowingMore: t
  }));
}
var o1 = ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"];
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function s1(e, t) {
  if (e == null)
    return {};
  var r = u1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function u1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function c1(e) {
  var t = e.classNames, r = e.children, n = e.highlightedTagName, i = e.isHighlighted, a = e.nonHighlightedTagName, s = i ? n : a;
  return /* @__PURE__ */ Y.createElement(s, {
    className: i ? t.highlighted : t.nonHighlighted
  }, r);
}
function Od(e) {
  var t = e.parts, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.nonHighlightedTagName, a = i === void 0 ? "span" : i, s = e.separator, c = s === void 0 ? ", " : s, u = e.className, o = e.classNames, f = s1(e, o1);
  return /* @__PURE__ */ Y.createElement("span", ro({}, f, {
    className: de(o.root, u)
  }), t.map(function(l, v) {
    var h = v === t.length - 1;
    return /* @__PURE__ */ Y.createElement(Rh, {
      key: v
    }, l.map(function(p, d) {
      return /* @__PURE__ */ Y.createElement(c1, {
        key: d,
        classNames: o,
        highlightedTagName: n,
        nonHighlightedTagName: a,
        isHighlighted: p.isHighlighted
      }, p.value);
    }), !h && /* @__PURE__ */ Y.createElement("span", {
      className: o.separator
    }, c));
  }));
}
var l1 = ["classNames"];
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, no.apply(this, arguments);
}
function f1(e, t) {
  if (e == null)
    return {};
  var r = d1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function d1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Rd(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = f1(e, l1);
  return /* @__PURE__ */ Y.createElement(Od, no({
    classNames: {
      root: de("ais-Highlight", r.root),
      highlighted: de("ais-Highlight-highlighted", r.highlighted),
      nonHighlighted: de("ais-Highlight-nonHighlighted", r.nonHighlighted),
      separator: de("ais-Highlight-separator", r.separator)
    }
  }, n));
}
var h1 = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, io.apply(this, arguments);
}
function p1(e, t) {
  if (e == null)
    return {};
  var r = v1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ec(e) {
  var t = e.hit, r = e.attribute, n = e.highlightedTagName, i = e.nonHighlightedTagName, a = e.separator, s = p1(e, h1), c = Vt(t._highlightResult, r) || [], u = Array.isArray(c) ? c : [c], o = u.map(function(f) {
    return Lr(Zn(f.value || ""));
  });
  return /* @__PURE__ */ Y.createElement(Rd, io({}, s, {
    parts: o,
    highlightedTagName: n,
    nonHighlightedTagName: i,
    separator: a
  }));
}
var m1 = ["canRefine", "items", "onRefine", "query", "searchBox", "noResults", "showMore", "canToggleShowMore", "onToggleShowMore", "isShowingMore", "className", "classNames", "translations"];
function ao() {
  return ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ao.apply(this, arguments);
}
function g1(e, t) {
  if (e == null)
    return {};
  var r = y1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function b1(e) {
  var t = e.canRefine, r = e.items, n = e.onRefine, i = e.query, a = e.searchBox, s = e.noResults, c = e.showMore, u = e.canToggleShowMore, o = e.onToggleShowMore, f = e.isShowingMore, l = e.className, v = e.classNames, h = v === void 0 ? {} : v, p = e.translations, d = g1(e, m1);
  return /* @__PURE__ */ Y.createElement("div", ao({}, d, {
    className: de("ais-RefinementList", h.root, !t && de("ais-RefinementList--noRefinement", h.noRefinementRoot), l)
  }), a && /* @__PURE__ */ Y.createElement("div", {
    className: de("ais-RefinementList-searchBox", h.searchBox)
  }, a), s ? /* @__PURE__ */ Y.createElement("div", {
    className: de("ais-RefinementList-noResults", h.noResults)
  }, s) : /* @__PURE__ */ Y.createElement("ul", {
    className: de("ais-RefinementList-list", h.list)
  }, r.map(function(m) {
    return /* @__PURE__ */ Y.createElement("li", {
      key: m.value,
      className: de("ais-RefinementList-item", h.item, m.isRefined && de("ais-RefinementList-item--selected", h.selectedItem))
    }, /* @__PURE__ */ Y.createElement("label", {
      className: de("ais-RefinementList-label", h.label)
    }, /* @__PURE__ */ Y.createElement("input", {
      checked: m.isRefined,
      className: de("ais-RefinementList-checkbox", h.checkbox),
      type: "checkbox",
      value: m.value,
      onChange: function() {
        n(m);
      }
    }), /* @__PURE__ */ Y.createElement("span", {
      className: de("ais-RefinementList-labelText", h.labelText)
    }, i.length > 0 ? /* @__PURE__ */ Y.createElement(Rd, {
      parts: [Lr(Zn(m.highlighted || ""))]
    }) : m.label), /* @__PURE__ */ Y.createElement("span", {
      className: de("ais-RefinementList-count", h.count)
    }, m.count)));
  })), c && /* @__PURE__ */ Y.createElement(a1, {
    className: de("ais-RefinementList-showMore", h.showMore, !u && de("ais-RefinementList-showMore--disabled", h.disabledShowMore)),
    disabled: !u,
    onClick: o,
    isShowingMore: f,
    translations: p
  }));
}
var w1 = ["formRef", "inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value", "autoFocus", "resetIconComponent", "submitIconComponent", "loadingIconComponent", "classNames", "translations"];
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oo.apply(this, arguments);
}
function _1(e, t) {
  if (e == null)
    return {};
  var r = S1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function S1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var O1 = /* @__PURE__ */ Y.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
function R1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ Y.createElement("svg", {
    className: de("ais-SearchBox-submitIcon", t.submitIcon),
    width: "10",
    height: "10",
    viewBox: "0 0 40 40",
    "aria-hidden": "true"
  }, O1);
}
var P1 = /* @__PURE__ */ Y.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
function E1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ Y.createElement("svg", {
    className: de("ais-SearchBox-resetIcon", t.resetIcon),
    viewBox: "0 0 20 20",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, P1);
}
var x1 = /* @__PURE__ */ Y.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ Y.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ Y.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ Y.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ Y.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
}))));
function j1(e) {
  var t = e.classNames;
  return /* @__PURE__ */ Y.createElement("svg", {
    "aria-label": "Results are loading",
    width: "16",
    height: "16",
    viewBox: "0 0 38 38",
    stroke: "#444",
    className: de("ais-SearchBox-loadingIcon", t.loadingIcon),
    "aria-hidden": "true"
  }, x1);
}
function Pd(e) {
  var t = e.formRef, r = e.inputRef, n = e.isSearchStalled, i = e.onChange, a = e.onReset, s = e.onSubmit, c = e.placeholder, u = c === void 0 ? "" : c, o = e.value, f = e.autoFocus, l = e.resetIconComponent, v = l === void 0 ? E1 : l, h = e.submitIconComponent, p = h === void 0 ? R1 : h, d = e.loadingIconComponent, m = d === void 0 ? j1 : d, g = e.classNames, _ = g === void 0 ? {} : g, w = e.translations, b = _1(e, w1);
  function y(F) {
    F.preventDefault(), F.stopPropagation(), s && s(F), r.current && r.current.blur();
  }
  function j(F) {
    F.preventDefault(), F.stopPropagation(), a(F), r.current && r.current.focus();
  }
  return /* @__PURE__ */ Y.createElement("div", oo({}, b, {
    className: de("ais-SearchBox", _.root, b.className)
  }), /* @__PURE__ */ Y.createElement("form", {
    ref: t,
    action: "",
    className: de("ais-SearchBox-form", _.form),
    noValidate: !0,
    onSubmit: y,
    onReset: j,
    role: "search"
  }, /* @__PURE__ */ Y.createElement("input", {
    ref: r,
    className: de("ais-SearchBox-input", _.input),
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
  }), /* @__PURE__ */ Y.createElement("button", {
    className: de("ais-SearchBox-submit", _.submit),
    type: "submit",
    title: w.submitButtonTitle
  }, /* @__PURE__ */ Y.createElement(p, {
    classNames: _
  })), /* @__PURE__ */ Y.createElement("button", {
    className: de("ais-SearchBox-reset", _.reset),
    type: "reset",
    title: w.resetButtonTitle,
    hidden: o.length === 0 || n
  }, /* @__PURE__ */ Y.createElement(v, {
    classNames: _
  })), /* @__PURE__ */ Y.createElement("span", {
    className: de("ais-SearchBox-loadingIndicator", _.loadingIndicator),
    hidden: !n
  }, /* @__PURE__ */ Y.createElement(m, {
    classNames: _
  }))));
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
var T1 = ["searchable", "searchablePlaceholder", "attribute", "operator", "limit", "showMore", "showMoreLimit", "sortBy", "escapeFacetValues", "transformItems", "translations"];
function so() {
  return so = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, so.apply(this, arguments);
}
function tc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tc(Object(r), !0).forEach(function(n) {
      A1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A1(e, t, r) {
  return t = $1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $1(e) {
  var t = F1(e, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function F1(e, t) {
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
function N1(e, t) {
  return M1(e) || k1(e, t) || D1(e, t) || I1();
}
function I1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D1(e, t) {
  if (e) {
    if (typeof e == "string")
      return rc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rc(e, t);
  }
}
function rc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function k1(e, t) {
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
function M1(e) {
  if (Array.isArray(e))
    return e;
}
function H1(e, t) {
  if (e == null)
    return {};
  var r = L1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function q1(e) {
  var t = e.searchable, r = e.searchablePlaceholder, n = e.attribute, i = e.operator, a = e.limit, s = e.showMore, c = e.showMoreLimit, u = e.sortBy, o = e.escapeFacetValues, f = e.transformItems, l = e.translations, v = H1(e, T1), h = Q0({
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
  }), p = h.canRefine, d = h.canToggleShowMore, m = h.isFromSearch, g = h.isShowingMore, _ = h.items, w = h.refine, b = h.searchForItems, y = h.toggleShowMore, j = Mr(""), F = N1(j, 2), R = F[0], q = F[1], V = Ge(null);
  function L(N) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    q(N), z && b(N);
  }
  function k(N) {
    w(N.value), L("");
  }
  function A(N) {
    var z = N.type === "compositionend" || !N.nativeEvent.isComposing;
    L(N.currentTarget.value, z);
  }
  function ee() {
    L("");
  }
  function U() {
    _.length > 0 && (w(_[0].value), L(""));
  }
  var T = C1({
    resetButtonTitle: "Clear the search query",
    submitButtonTitle: "Submit the search query",
    noResultsText: "No results.",
    showMoreButtonText: function(z) {
      return z.isShowingMore ? "Show less" : "Show more";
    }
  }, l), C = {
    items: _,
    canRefine: p,
    onRefine: k,
    query: R,
    searchBox: t && /* @__PURE__ */ Y.createElement(Pd, {
      inputRef: V,
      placeholder: r,
      isSearchStalled: !1,
      value: R,
      onChange: A,
      onReset: ee,
      onSubmit: U,
      translations: {
        submitButtonTitle: T.submitButtonTitle,
        resetButtonTitle: T.resetButtonTitle
      }
    }),
    noResults: t && m && _.length === 0 && T.noResultsText,
    canToggleShowMore: d,
    onToggleShowMore: y,
    isShowingMore: g,
    translations: {
      showMoreButtonText: T.showMoreButtonText
    }
  };
  return /* @__PURE__ */ Y.createElement(b1, so({}, v, C, {
    showMore: s
  }));
}
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
var U1 = ["queryHook", "searchAsYouType", "ignoreCompositionEvents", "translations"];
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uo.apply(this, arguments);
}
function nc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nc(Object(r), !0).forEach(function(n) {
      B1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B1(e, t, r) {
  return t = V1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V1(e) {
  var t = z1(e, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function z1(e, t) {
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
function Q1(e, t) {
  return J1(e) || K1(e, t) || G1(e, t) || Y1();
}
function Y1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G1(e, t) {
  if (e) {
    if (typeof e == "string")
      return ic(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ic(e, t);
  }
}
function ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function K1(e, t) {
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
function J1(e) {
  if (Array.isArray(e))
    return e;
}
function X1(e, t) {
  if (e == null)
    return {};
  var r = Z1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ew(e) {
  var t = e.queryHook, r = e.searchAsYouType, n = r === void 0 ? !0 : r, i = e.ignoreCompositionEvents, a = i === void 0 ? !1 : i, s = e.translations, c = X1(e, U1), u = t1({
    queryHook: t
  }, {
    $$widgetType: "ais.searchBox"
  }), o = u.query, f = u.refine, l = u.isSearchStalled, v = Mr(o), h = Q1(v, 2), p = h[0], d = h[1], m = Ge(null);
  function g(j) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    d(j), n && !(a && F) && f(j);
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
  o !== p && document.activeElement !== m.current && d(o);
  var y = {
    inputRef: m,
    isSearchStalled: l,
    onChange: w,
    onReset: _,
    onSubmit: b,
    value: p,
    translations: W1({
      submitButtonTitle: "Submit the search query",
      resetButtonTitle: "Clear the search query"
    }, s)
  };
  return /* @__PURE__ */ Y.createElement(Pd, uo({}, c, y));
}
var tw = ["classNames"];
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, co.apply(this, arguments);
}
function rw(e, t) {
  if (e == null)
    return {};
  var r = nw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function iw(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = rw(e, tw);
  return /* @__PURE__ */ Y.createElement(Od, co({
    classNames: {
      root: de("ais-Snippet", r.root),
      highlighted: de("ais-Snippet-highlighted", r.highlighted),
      nonHighlighted: de("ais-Snippet-nonHighlighted", r.nonHighlighted),
      separator: de("ais-Snippet-separator", r.separator)
    }
  }, n));
}
var aw = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lo.apply(this, arguments);
}
function ow(e, t) {
  if (e == null)
    return {};
  var r = sw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function uw(e) {
  var t = e.hit, r = e.attribute, n = e.highlightedTagName, i = e.nonHighlightedTagName, a = e.separator, s = ow(e, aw), c = Vt(t._snippetResult, r) || [], u = Array.isArray(c) ? c : [c], o = u.map(function(f) {
    return Lr(Zn(f.value || ""));
  });
  return /* @__PURE__ */ Y.createElement(iw, lo({}, s, {
    parts: o,
    highlightedTagName: n,
    nonHighlightedTagName: i,
    separator: a
  }));
}
const Qo = Ut({
  fields: {}
}), cw = ({ hit: e, onHitClick: t, children: r }) => /* @__PURE__ */ te.jsx(
  "a",
  {
    className: "hitLink",
    onClick: t ? () => t(e) : () => null,
    children: r
  }
), lw = ({ hit: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n, locale: i }) => {
  var h, p;
  const { fields: a } = ot(Qo), s = r || cw, c = vt(() => n ? n(e) : { hit: e, onHitClick: t }, [n, e, t]), u = vt(() => Object.entries(a).find((d) => d[1].type === "showcase"), [a]), o = vt(() => {
    var d;
    return u && ((d = u[1]) != null && d.snippet) ? uw : ec;
  }, [u]), f = vt(() => Object.entries(a).find((d) => d[1].type === "identifier"), [a]), l = vt(() => Object.entries(a).filter((d) => !d[1].type && e[d[0]]).map((d) => {
    var g;
    const m = d[1].icon;
    return /* @__PURE__ */ te.jsxs(
      "p",
      {
        className: "hitData",
        children: [
          m ? /* @__PURE__ */ te.jsx("span", { title: (g = d[1]) != null && g.caption ? d[1].caption[i] : void 0, children: /* @__PURE__ */ te.jsx(m, {}) }) : /* @__PURE__ */ te.jsx(te.Fragment, {}),
          /* @__PURE__ */ te.jsx("strong", { children: e[d[0]] })
        ]
      },
      d[0]
    );
  }), [a, e, i]), v = vt(() => Object.values(a).filter((d) => d.render).map((d, m) => {
    const g = d.render(e);
    if (g)
      return /* @__PURE__ */ te.jsxs(
        "p",
        {
          className: "hitData",
          children: [
            d.icon ? /* @__PURE__ */ te.jsx("span", { title: d != null && d.caption ? d.caption[i] : void 0, children: /* @__PURE__ */ te.jsx(d.icon, {}) }) : /* @__PURE__ */ te.jsx(te.Fragment, {}),
            /* @__PURE__ */ te.jsx("strong", { children: g })
          ]
        },
        m
      );
  }), [a, e, i]);
  return /* @__PURE__ */ te.jsx(s, { ...c, className: "hitLink", children: /* @__PURE__ */ te.jsxs("li", { className: "hit", children: [
    /* @__PURE__ */ te.jsxs("div", { className: "left", children: [
      f && e[f[0]] ? /* @__PURE__ */ te.jsx("h2", { className: "headline", children: /* @__PURE__ */ te.jsxs("span", { children: [
        "#",
        /* @__PURE__ */ te.jsx(
          ec,
          {
            attribute: [f[0]],
            hit: e,
            highlightedTagName: "mark"
          }
        )
      ] }) }) : null,
      l,
      v
    ] }),
    /* @__PURE__ */ te.jsx("div", { className: "right", children: /* @__PURE__ */ te.jsxs("div", { className: "summary", children: [
      u && ((h = u[1]) != null && h.caption) ? /* @__PURE__ */ te.jsx("h3", { children: (p = u[1]) == null ? void 0 : p.caption[i] }) : null,
      u && e[u[0]] ? /* @__PURE__ */ te.jsx("p", { children: /* @__PURE__ */ te.jsx(
        o,
        {
          attribute: [u[0]],
          hit: e,
          highlightedTagName: "mark"
        }
      ) }) : /* @__PURE__ */ te.jsx(te.Fragment, {})
    ] }) })
  ] }) });
}, Oe = {
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
}, fw = (e) => {
  const {
    hits: t,
    isLastPage: r,
    showMore: n
  } = M0(e), { locale: i } = e, [a, s] = Mr(!0);
  if (qn(() => {
    a && t.length > 0 && s(!1);
  }, [t, a]), a)
    return /* @__PURE__ */ te.jsx("p", { className: "center", children: Oe.loading[i] });
  if (t.length === 0)
    return /* @__PURE__ */ te.jsx("p", { className: "center", children: Oe.noResults[i] });
  const c = () => r ? /* @__PURE__ */ te.jsx(
    "button",
    {
      disabled: !0,
      className: "ais-InfiniteHits-loadMore",
      children: Oe.showMore[i]
    }
  ) : /* @__PURE__ */ te.jsx(
    "button",
    {
      onClick: () => n(),
      className: "ais-InfiniteHits-loadMore",
      children: Oe.showMore[i]
    }
  );
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx("ul", { className: "hitList", children: t.map((u) => /* @__PURE__ */ te.jsx(
      lw,
      {
        locale: i,
        hit: u,
        onHitClick: e.onHitClick,
        hitWrapperComponent: e.hitWrapperComponent,
        getHitWrapperProps: e.getHitWrapperProps
      },
      u.id
    )) }),
    c()
  ] });
}, dw = Ao.div`
  background: #eee;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
`, ac = ({ header: e, children: t }) => /* @__PURE__ */ te.jsxs(dw, { children: [
  e ? /* @__PURE__ */ te.jsx("span", { className: "header", children: e }) : null,
  t
] }), hw = Ao.div`
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
    box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05),
      0 1px 3px 0 rgba(35, 38, 59, 0.15);
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
    box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05),
      0 1px 3px 0 rgba(35, 38, 59, 0.15);
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

  .hit h2,
  .hit h3 {
    margin: 0;
    text-align: left;
    width: 100%;
  }

  .hit .right {
    overflow: hidden;
    position: relative;
    padding: 20px;
    border-left: 1px solid black;
    max-height: 300px;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
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
    box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05),
      0 1px 3px 0 rgba(35, 38, 59, 0.15);
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
      border: none;
      padding: 0;
    }

    .headline {
      font-size: 1.2rem;
      display: flex;
      flex-flow: row-reverse;
    }
  }
`;
var fo = { exports: {} }, en = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oc;
function pw() {
  if (oc)
    return me;
  oc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
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
                case h:
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
  return me.AsyncMode = u, me.ConcurrentMode = o, me.ContextConsumer = c, me.ContextProvider = s, me.Element = t, me.ForwardRef = f, me.Fragment = n, me.Lazy = p, me.Memo = h, me.Portal = r, me.Profiler = a, me.StrictMode = i, me.Suspense = l, me.isAsyncMode = function(y) {
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
    return w(y) === h;
  }, me.isPortal = function(y) {
    return w(y) === r;
  }, me.isProfiler = function(y) {
    return w(y) === a;
  }, me.isStrictMode = function(y) {
    return w(y) === i;
  }, me.isSuspense = function(y) {
    return w(y) === l;
  }, me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === o || y === a || y === i || y === l || y === v || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === h || y.$$typeof === s || y.$$typeof === c || y.$$typeof === f || y.$$typeof === m || y.$$typeof === g || y.$$typeof === _ || y.$$typeof === d);
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
var sc;
function vw() {
  return sc || (sc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, o = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function w(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === o || x === a || x === i || x === l || x === v || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === h || x.$$typeof === s || x.$$typeof === c || x.$$typeof === f || x.$$typeof === m || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === d);
    }
    function b(x) {
      if (typeof x == "object" && x !== null) {
        var oe = x.$$typeof;
        switch (oe) {
          case t:
            var le = x.type;
            switch (le) {
              case u:
              case o:
              case n:
              case a:
              case i:
              case l:
                return le;
              default:
                var ne = le && le.$$typeof;
                switch (ne) {
                  case c:
                  case f:
                  case p:
                  case h:
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
    var y = u, j = o, F = c, R = s, q = t, V = f, L = n, k = p, A = h, ee = r, U = a, T = i, C = l, N = !1;
    function z(x) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || b(x) === u;
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
    function $(x) {
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
    function G(x) {
      return b(x) === h;
    }
    function I(x) {
      return b(x) === r;
    }
    function J(x) {
      return b(x) === a;
    }
    function K(x) {
      return b(x) === i;
    }
    function B(x) {
      return b(x) === l;
    }
    ge.AsyncMode = y, ge.ConcurrentMode = j, ge.ContextConsumer = F, ge.ContextProvider = R, ge.Element = q, ge.ForwardRef = V, ge.Fragment = L, ge.Lazy = k, ge.Memo = A, ge.Portal = ee, ge.Profiler = U, ge.StrictMode = T, ge.Suspense = C, ge.isAsyncMode = z, ge.isConcurrentMode = E, ge.isContextConsumer = M, ge.isContextProvider = D, ge.isElement = $, ge.isForwardRef = H, ge.isFragment = W, ge.isLazy = O, ge.isMemo = G, ge.isPortal = I, ge.isProfiler = J, ge.isStrictMode = K, ge.isSuspense = B, ge.isValidElementType = w, ge.typeOf = b;
  }()), ge;
}
var uc;
function Ed() {
  return uc || (uc = 1, process.env.NODE_ENV === "production" ? en.exports = pw() : en.exports = vw()), en.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pi, cc;
function mw() {
  if (cc)
    return Pi;
  cc = 1;
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
  return Pi = i() ? Object.assign : function(a, s) {
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
  }, Pi;
}
var Ei, lc;
function Yo() {
  if (lc)
    return Ei;
  lc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ei = e, Ei;
}
var xi, fc;
function xd() {
  return fc || (fc = 1, xi = Function.call.bind(Object.prototype.hasOwnProperty)), xi;
}
var ji, dc;
function gw() {
  if (dc)
    return ji;
  dc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Yo(), r = {}, n = xd();
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
            var h = o ? o() : "";
            e(
              "Failed " + c + " type: " + l.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ji = i, ji;
}
var Ti, hc;
function yw() {
  if (hc)
    return Ti;
  hc = 1;
  var e = Ed(), t = mw(), r = Yo(), n = xd(), i = gw(), a = function() {
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
  return Ti = function(c, u) {
    var o = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function l(E) {
      var M = E && (o && E[o] || E[f]);
      if (typeof M == "function")
        return M;
    }
    var v = "<<anonymous>>", h = {
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
      oneOf: F,
      oneOfType: q,
      shape: k,
      exact: A
    };
    function p(E, M) {
      return E === M ? E !== 0 || 1 / E === 1 / M : E !== E && M !== M;
    }
    function d(E, M) {
      this.message = E, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function m(E) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, D = 0;
      function $(W, O, G, I, J, K, B) {
        if (I = I || v, K = K || G, B !== r) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = I + ":" + G;
            !M[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[oe] = !0, D++);
          }
        }
        return O[G] == null ? W ? O[G] === null ? new d("The " + J + " `" + K + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new d("The " + J + " `" + K + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : E(O, G, I, J, K);
      }
      var H = $.bind(null, !1);
      return H.isRequired = $.bind(null, !0), H;
    }
    function g(E) {
      function M(D, $, H, W, O, G) {
        var I = D[$], J = T(I);
        if (J !== E) {
          var K = C(I);
          return new d(
            "Invalid " + W + " `" + O + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected ") + ("`" + E + "`."),
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
      function M(D, $, H, W, O) {
        if (typeof E != "function")
          return new d("Property `" + O + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var G = D[$];
        if (!Array.isArray(G)) {
          var I = T(G);
          return new d("Invalid " + W + " `" + O + "` of type " + ("`" + I + "` supplied to `" + H + "`, expected an array."));
        }
        for (var J = 0; J < G.length; J++) {
          var K = E(G, J, H, W, O + "[" + J + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return m(M);
    }
    function b() {
      function E(M, D, $, H, W) {
        var O = M[D];
        if (!c(O)) {
          var G = T(O);
          return new d("Invalid " + H + " `" + W + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(E);
    }
    function y() {
      function E(M, D, $, H, W) {
        var O = M[D];
        if (!e.isValidElementType(O)) {
          var G = T(O);
          return new d("Invalid " + H + " `" + W + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(E);
    }
    function j(E) {
      function M(D, $, H, W, O) {
        if (!(D[$] instanceof E)) {
          var G = E.name || v, I = z(D[$]);
          return new d("Invalid " + W + " `" + O + "` of type " + ("`" + I + "` supplied to `" + H + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return m(M);
    }
    function F(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function M(D, $, H, W, O) {
        for (var G = D[$], I = 0; I < E.length; I++)
          if (p(G, E[I]))
            return null;
        var J = JSON.stringify(E, function(B, x) {
          var oe = C(x);
          return oe === "symbol" ? String(x) : x;
        });
        return new d("Invalid " + W + " `" + O + "` of value `" + String(G) + "` " + ("supplied to `" + H + "`, expected one of " + J + "."));
      }
      return m(M);
    }
    function R(E) {
      function M(D, $, H, W, O) {
        if (typeof E != "function")
          return new d("Property `" + O + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var G = D[$], I = T(G);
        if (I !== "object")
          return new d("Invalid " + W + " `" + O + "` of type " + ("`" + I + "` supplied to `" + H + "`, expected an object."));
        for (var J in G)
          if (n(G, J)) {
            var K = E(G, J, H, W, O + "." + J, r);
            if (K instanceof Error)
              return K;
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(D) + " at index " + M + "."
          ), s;
      }
      function $(H, W, O, G, I) {
        for (var J = [], K = 0; K < E.length; K++) {
          var B = E[K], x = B(H, W, O, G, I, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && J.push(x.data.expectedType);
        }
        var oe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new d("Invalid " + G + " `" + I + "` supplied to " + ("`" + O + "`" + oe + "."));
      }
      return m($);
    }
    function V() {
      function E(M, D, $, H, W) {
        return ee(M[D]) ? null : new d("Invalid " + H + " `" + W + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return m(E);
    }
    function L(E, M, D, $, H) {
      return new d(
        (E || "React class") + ": " + M + " type `" + D + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function k(E) {
      function M(D, $, H, W, O) {
        var G = D[$], I = T(G);
        if (I !== "object")
          return new d("Invalid " + W + " `" + O + "` of type `" + I + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var J in E) {
          var K = E[J];
          if (typeof K != "function")
            return L(H, W, O, J, C(K));
          var B = K(G, J, H, W, O + "." + J, r);
          if (B)
            return B;
        }
        return null;
      }
      return m(M);
    }
    function A(E) {
      function M(D, $, H, W, O) {
        var G = D[$], I = T(G);
        if (I !== "object")
          return new d("Invalid " + W + " `" + O + "` of type `" + I + "` " + ("supplied to `" + H + "`, expected `object`."));
        var J = t({}, D[$], E);
        for (var K in J) {
          var B = E[K];
          if (n(E, K) && typeof B != "function")
            return L(H, W, O, K, C(B));
          if (!B)
            return new d(
              "Invalid " + W + " `" + O + "` key `" + K + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(D[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var x = B(G, K, H, W, O + "." + K, r);
          if (x)
            return x;
        }
        return null;
      }
      return m(M);
    }
    function ee(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(ee);
          if (E === null || c(E))
            return !0;
          var M = l(E);
          if (M) {
            var D = M.call(E), $;
            if (M !== E.entries) {
              for (; !($ = D.next()).done; )
                if (!ee($.value))
                  return !1;
            } else
              for (; !($ = D.next()).done; ) {
                var H = $.value;
                if (H && !ee(H[1]))
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
    function N(E) {
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
    function z(E) {
      return !E.constructor || !E.constructor.name ? v : E.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Ti;
}
var Ci, pc;
function bw() {
  if (pc)
    return Ci;
  pc = 1;
  var e = Yo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ci = function() {
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
  }, Ci;
}
if (process.env.NODE_ENV !== "production") {
  var ww = Ed(), _w = !0;
  fo.exports = yw()(ww.isElement, _w);
} else
  fo.exports = bw()();
var Sw = fo.exports;
const re = /* @__PURE__ */ Wt(Sw);
var Ow = ["color", "size", "title"];
function ho() {
  return ho = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ho.apply(this, arguments);
}
function Rw(e, t) {
  if (e == null)
    return {};
  var r = Pw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Pw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Go = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Rw(e, Ow);
  return /* @__PURE__ */ Y.createElement("svg", ho({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
  }));
});
Go.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
Go.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Ew = Go;
var xw = ["color", "size", "title"];
function po() {
  return po = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, po.apply(this, arguments);
}
function jw(e, t) {
  if (e == null)
    return {};
  var r = Tw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ko = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = jw(e, xw);
  return /* @__PURE__ */ Y.createElement("svg", po({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"
  }));
});
Ko.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
Ko.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const vc = Ko;
var Cw = ["color", "size", "title"];
function vo() {
  return vo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vo.apply(this, arguments);
}
function Aw(e, t) {
  if (e == null)
    return {};
  var r = $w(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $w(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Jo = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Aw(e, Cw);
  return /* @__PURE__ */ Y.createElement("svg", vo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }));
});
Jo.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
Jo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Fw = Jo;
var Nw = ["color", "size", "title"];
function mo() {
  return mo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mo.apply(this, arguments);
}
function Iw(e, t) {
  if (e == null)
    return {};
  var r = Dw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Dw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Xo = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Iw(e, Nw);
  return /* @__PURE__ */ Y.createElement("svg", mo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"
  }));
});
Xo.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
Xo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const mc = Xo;
var kw = ["color", "size", "title"];
function go() {
  return go = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, go.apply(this, arguments);
}
function Mw(e, t) {
  if (e == null)
    return {};
  var r = Hw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Hw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Zo = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Mw(e, kw);
  return /* @__PURE__ */ Y.createElement("svg", go({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
  }));
});
Zo.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
Zo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const gc = Zo;
var Lw = ["color", "size", "title"];
function yo() {
  return yo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yo.apply(this, arguments);
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
var es = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = qw(e, Lw);
  return /* @__PURE__ */ Y.createElement("svg", yo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
  }));
});
es.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
es.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Ww = es;
var Bw = ["color", "size", "title"];
function bo() {
  return bo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bo.apply(this, arguments);
}
function Vw(e, t) {
  if (e == null)
    return {};
  var r = zw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ts = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Vw(e, Bw);
  return /* @__PURE__ */ Y.createElement("svg", bo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  }));
});
ts.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
ts.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Qw = ts;
var Yw = ["color", "size", "title"];
function wo() {
  return wo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wo.apply(this, arguments);
}
function Gw(e, t) {
  if (e == null)
    return {};
  var r = Kw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Kw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var rs = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Gw(e, Yw);
  return /* @__PURE__ */ Y.createElement("svg", wo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
  }));
});
rs.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
rs.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Jw = rs;
var Xw = ["color", "size", "title"];
function _o() {
  return _o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _o.apply(this, arguments);
}
function Zw(e, t) {
  if (e == null)
    return {};
  var r = e_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function e_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ns = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Zw(e, Xw);
  return /* @__PURE__ */ Y.createElement("svg", _o({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
});
ns.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
ns.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const t_ = ns;
var r_ = ["color", "size", "title"];
function So() {
  return So = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, So.apply(this, arguments);
}
function n_(e, t) {
  if (e == null)
    return {};
  var r = i_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var is = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = n_(e, r_);
  return /* @__PURE__ */ Y.createElement("svg", So({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
  }));
});
is.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
is.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const yc = is;
var a_ = ["color", "size", "title"];
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
function o_(e, t) {
  if (e == null)
    return {};
  var r = s_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function s_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var as = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = o_(e, a_);
  return /* @__PURE__ */ Y.createElement("svg", Oo({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"
  }));
});
as.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
as.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const u_ = as;
var c_ = ["color", "size", "title"];
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
function l_(e, t) {
  if (e == null)
    return {};
  var r = f_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function f_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var os = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = l_(e, c_);
  return /* @__PURE__ */ Y.createElement("svg", Ro({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
  }));
});
os.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
os.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const d_ = os;
var h_ = ["color", "size", "title"];
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
function p_(e, t) {
  if (e == null)
    return {};
  var r = v_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ss = /* @__PURE__ */ Ve(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = p_(e, h_);
  return /* @__PURE__ */ Y.createElement("svg", Po({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ Y.createElement("title", null, i) : null, /* @__PURE__ */ Y.createElement("path", {
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }));
});
ss.propTypes = {
  color: re.string,
  size: re.oneOfType([re.string, re.number]),
  title: re.string
};
ss.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const m_ = ss, g_ = (e) => e.refinements[0].type === "numeric", y_ = (e) => {
  const {
    items: t,
    refine: r
  } = O0(e), { fields: n } = ot(Qo), i = (c) => {
    var f, l, v;
    const u = (f = n[c.attribute.replace("_facet", "")]) == null ? void 0 : f.caption;
    let o;
    if (g_(c)) {
      const h = (l = c.refinements[0]) == null ? void 0 : l.value, p = (v = c.refinements[1]) == null ? void 0 : v.value;
      h && p ? o = [`${h} - ${p}`] : h ? o = [`> ${h}`] : o = [`< ${p}`];
    } else
      o = c.refinements.map((h) => h.value);
    return {
      label: u ? u[e.locale] : c.attribute,
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
  return console.log(a), /* @__PURE__ */ te.jsx("ul", { className: "currentRefinementList", children: a.map((c) => /* @__PURE__ */ te.jsxs(
    "li",
    {
      className: "currentRefinement",
      children: [
        /* @__PURE__ */ te.jsxs(
          "span",
          {
            className: "currentRefinementLabel",
            children: [
              c.display.label,
              ": "
            ]
          }
        ),
        c.display.values.map((u) => /* @__PURE__ */ te.jsxs(
          "button",
          {
            onClick: () => s(c.original),
            children: [
              /* @__PURE__ */ te.jsx(
                "span",
                {
                  className: "currentRefinementValue",
                  children: u
                }
              ),
              /* @__PURE__ */ te.jsx(m_, {})
            ]
          },
          u
        ))
      ]
    },
    c.display.label
  )) });
}, b_ = (e) => {
  const t = e["d730b602-4b17-4296-a606-50be06e58243"], r = e["3d3bf3b2-4595-4b5a-822c-7dd53e404453"], n = e["9e44bb3f-91ea-4602-8a35-cb2df6202f95"];
  return n && r && t ? new Date(n, r - 1, t).toISOString().slice(0, 10) : "?";
}, rt = (e, t) => (e[t] ? e[t][0] : null) ? e[t][0].name : null, w_ = {
  bischoff: {
    "e839b342-d5d9-4142-8310-697525d18229": {
      type: "identifier"
    },
    "7836b04d-b7a8-443a-a920-1cc76f30e6ea": {
      caption: Oe.origDate,
      icon: gc
      // TODO: Not facetable yet!
      // facet: true
    },
    "e40c024a-9859-405f-86b9-308e893faa37": {
      type: "showcase",
      caption: Oe.text
    },
    "d0e3ae81-8486-46c4-a203-dc29d34fe2fc.names": {
      icon: mc,
      caption: Oe.archive,
      facet: !0,
      render: (e) => rt(
        e,
        "d0e3ae81-8486-46c4-a203-dc29d34fe2fc"
      )
    },
    "9142ca55-c834-4654-882e-cd1941db1e47.names": {
      icon: Fw,
      facet: !0,
      caption: Oe.works,
      render: (e) => rt(
        e,
        "9142ca55-c834-4654-882e-cd1941db1e47"
      )
    }
  },
  rumpf: {
    "fda80804-8753-4b15-8e11-3d291585cc79": {
      icon: gc,
      caption: Oe.publicationDate,
      facet: !0
    },
    "8412f5df-4d50-42ab-bf04-4ddddc32217f": {
      icon: Qw,
      facet: !0,
      caption: Oe.line
    },
    "21adc2bf-6970-4927-91de-cc476ab2e352": {
      icon: d_,
      facet: !0,
      caption: Oe.type
    },
    "4de71c17-308a-41ed-bc0e-19f4f7aee55c": {
      icon: Jw,
      caption: Oe.format,
      facet: !0
    },
    "78c68ffc-1075-48aa-b70f-3888bd755c1d.names": {
      icon: u_,
      caption: Oe.publicationLocation,
      facet: !0,
      render: (e) => rt(
        e,
        "78c68ffc-1075-48aa-b70f-3888bd755c1d"
      )
    },
    "854c0daa-d3ef-4731-85ed-bc0830b5d836.names": {
      icon: Ew,
      caption: Oe.parentEdition,
      facet: !0,
      render: (e) => rt(
        e,
        "854c0daa-d3ef-4731-85ed-bc0830b5d836"
      )
    },
    "541fb30f-754a-44e3-a301-517e5bd38ebc.names": {
      icon: yc,
      facet: !0,
      caption: Oe.author,
      render: (e) => rt(
        e,
        "541fb30f-754a-44e3-a301-517e5bd38ebc"
      )
    },
    "d40ad528-351c-4962-8362-2c2f676a5714.names": {
      icon: vc,
      caption: Oe.archive,
      facet: !0,
      render: (e) => rt(
        e,
        "d40ad528-351c-4962-8362-2c2f676a5714"
      )
    },
    name: {
      caption: Oe.title,
      type: "showcase"
    }
  },
  supplique: {
    "0ce611e4-4622-4160-8857-28ee7c915a8e": {
      type: "showcase",
      caption: Oe.text,
      snippet: 75
    },
    "e247c848-08af-4bbd-bdd1-eed94b776c12": {
      type: "identifier",
      caption: Oe.number_of_order
    },
    date: {
      icon: Ww,
      caption: Oe.date,
      render: (e) => b_(e)
    },
    "6b978ed4-9e9c-4ddb-9fed-4de5315e3f32.names": {
      icon: mc,
      caption: Oe.city,
      facet: !0,
      render: (e) => rt(
        e,
        "6b978ed4-9e9c-4ddb-9fed-4de5315e3f32"
      )
    },
    "3ad6c998-5fc2-484f-b0cd-c596e426d185.names": {
      icon: t_,
      caption: Oe.place_given,
      facet: !0,
      render: (e) => rt(
        e,
        "3ad6c998-5fc2-484f-b0cd-c596e426d185"
      )
    },
    "c8c38697-d94f-4a8e-a1af-b6101ab7140f.names": {
      icon: vc,
      caption: Oe.titulature,
      facet: !0,
      render: (e) => rt(
        e,
        "c8c38697-d94f-4a8e-a1af-b6101ab7140f"
      )
    },
    "c5b1c44b-eeb9-42a8-b115-200e4c14c077.names": {
      icon: yc,
      caption: Oe.commandement,
      facet: !0,
      render: (e) => rt(
        e,
        "c5b1c44b-eeb9-42a8-b115-200e4c14c077"
      )
    },
    "0ee19a44-ce9e-4c79-b296-4df93d00f646.name": {
      caption: Oe.keywords,
      facet: !0
    }
  }
}, us = (e) => {
  const t = w_[e.project], r = vt(() => Object.entries(t).filter((n) => n[1].facet && n[1].caption).map(
    (n) => /* @__PURE__ */ te.jsx(ac, { header: n[1].caption[e.locale], children: /* @__PURE__ */ te.jsx(
      q1,
      {
        attribute: `${n[0]}_facet`
      }
    ) }, n[0])
  ), [t, e.locale]);
  return /* @__PURE__ */ te.jsx(Qo.Provider, { value: { fields: t }, children: /* @__PURE__ */ te.jsx(hw, { children: /* @__PURE__ */ te.jsxs("div", { className: "search", children: [
    /* @__PURE__ */ te.jsx(
      Yg,
      {
        hitsPerPage: 20
      }
    ),
    /* @__PURE__ */ te.jsxs("div", { className: "leftPanel", children: [
      /* @__PURE__ */ te.jsx(ac, { header: Oe.search[e.locale], children: /* @__PURE__ */ te.jsx(
        ew,
        {
          translations: { submitButtonTitle: Oe.searchHere[e.locale] }
        }
      ) }),
      e.children,
      r
    ] }),
    /* @__PURE__ */ te.jsxs("div", { className: "mainPanel", children: [
      /* @__PURE__ */ te.jsx(
        y_,
        {
          locale: e.locale
        }
      ),
      /* @__PURE__ */ te.jsx(
        fw,
        {
          locale: e.locale,
          onHitClick: e.onHitClick,
          hitWrapperComponent: e.hitWrapperComponent,
          getHitWrapperProps: e.getHitWrapperProps
        }
      )
    ] })
  ] }) }) });
};
var jd = {}, Td = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Td);
var Ur = Td.exports, Ai = { exports: {} }, $i = { exports: {} }, bc;
function ti() {
  return bc || (bc = 1, function(e) {
    function t(r) {
      "@babel/helpers - typeof";
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }($i)), $i.exports;
}
var wc;
function __() {
  return wc || (wc = 1, function(e) {
    var t = ti().default;
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
        l = function(C, N, z) {
          return C[N] = z;
        };
      }
      function v(U, T, C, N) {
        var z = T && T.prototype instanceof d ? T : d, E = Object.create(z.prototype), M = new k(N || []);
        return s(E, "_invoke", {
          value: R(U, C, M)
        }), E;
      }
      function h(U, T, C) {
        try {
          return {
            type: "normal",
            arg: U.call(T, C)
          };
        } catch (N) {
          return {
            type: "throw",
            arg: N
          };
        }
      }
      n.wrap = v;
      var p = {};
      function d() {
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
      var y = g.prototype = d.prototype = Object.create(_);
      function j(U) {
        ["next", "throw", "return"].forEach(function(T) {
          l(U, T, function(C) {
            return this._invoke(T, C);
          });
        });
      }
      function F(U, T) {
        function C(z, E, M, D) {
          var $ = h(U[z], U, E);
          if ($.type !== "throw") {
            var H = $.arg, W = H.value;
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
          D($.arg);
        }
        var N;
        s(this, "_invoke", {
          value: function(E, M) {
            function D() {
              return new T(function($, H) {
                C(E, M, $, H);
              });
            }
            return N = N ? N.then(D, D) : D();
          }
        });
      }
      function R(U, T, C) {
        var N = "suspendedStart";
        return function(z, E) {
          if (N === "executing")
            throw new Error("Generator is already running");
          if (N === "completed") {
            if (z === "throw")
              throw E;
            return ee();
          }
          for (C.method = z, C.arg = E; ; ) {
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
              if (N === "suspendedStart")
                throw N = "completed", C.arg;
              C.dispatchException(C.arg);
            } else
              C.method === "return" && C.abrupt("return", C.arg);
            N = "executing";
            var $ = h(U, T, C);
            if ($.type === "normal") {
              if (N = C.done ? "completed" : "suspendedYield", $.arg === p)
                continue;
              return {
                value: $.arg,
                done: C.done
              };
            }
            $.type === "throw" && (N = "completed", C.method = "throw", C.arg = $.arg);
          }
        };
      }
      function q(U, T) {
        var C = T.method, N = U.iterator[C];
        if (N === void 0)
          return T.delegate = null, C === "throw" && U.iterator.return && (T.method = "return", T.arg = void 0, q(U, T), T.method === "throw") || C !== "return" && (T.method = "throw", T.arg = new TypeError("The iterator does not provide a '" + C + "' method")), p;
        var z = h(N, U.iterator, T.arg);
        if (z.type === "throw")
          return T.method = "throw", T.arg = z.arg, T.delegate = null, p;
        var E = z.arg;
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
            var C = -1, N = function z() {
              for (; ++C < U.length; )
                if (a.call(U, C))
                  return z.value = U[C], z.done = !1, z;
              return z.value = void 0, z.done = !0, z;
            };
            return N.next = N;
          }
        }
        return {
          next: ee
        };
      }
      function ee() {
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
      }, j(F.prototype), l(F.prototype, o, function() {
        return this;
      }), n.AsyncIterator = F, n.async = function(U, T, C, N, z) {
        z === void 0 && (z = Promise);
        var E = new F(v(U, T, C, N), z);
        return n.isGeneratorFunction(T) ? E : E.next().then(function(M) {
          return M.done ? M.value : E.next();
        });
      }, j(y), l(y, f, "Generator"), l(y, u, function() {
        return this;
      }), l(y, "toString", function() {
        return "[object Generator]";
      }), n.keys = function(U) {
        var T = Object(U), C = [];
        for (var N in T)
          C.push(N);
        return C.reverse(), function z() {
          for (; C.length; ) {
            var E = C.pop();
            if (E in T)
              return z.value = E, z.done = !1, z;
          }
          return z.done = !0, z;
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
          function N(H, W) {
            return M.type = "throw", M.arg = T, C.next = H, W && (C.method = "next", C.arg = void 0), !!W;
          }
          for (var z = this.tryEntries.length - 1; z >= 0; --z) {
            var E = this.tryEntries[z], M = E.completion;
            if (E.tryLoc === "root")
              return N("end");
            if (E.tryLoc <= this.prev) {
              var D = a.call(E, "catchLoc"), $ = a.call(E, "finallyLoc");
              if (D && $) {
                if (this.prev < E.catchLoc)
                  return N(E.catchLoc, !0);
                if (this.prev < E.finallyLoc)
                  return N(E.finallyLoc);
              } else if (D) {
                if (this.prev < E.catchLoc)
                  return N(E.catchLoc, !0);
              } else {
                if (!$)
                  throw new Error("try statement without catch or finally");
                if (this.prev < E.finallyLoc)
                  return N(E.finallyLoc);
              }
            }
          }
        },
        abrupt: function(T, C) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var z = this.tryEntries[N];
            if (z.tryLoc <= this.prev && a.call(z, "finallyLoc") && this.prev < z.finallyLoc) {
              var E = z;
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
            var N = this.tryEntries[C];
            if (N.finallyLoc === T)
              return this.complete(N.completion, N.afterLoc), L(N), p;
          }
        },
        catch: function(T) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var N = this.tryEntries[C];
            if (N.tryLoc === T) {
              var z = N.completion;
              if (z.type === "throw") {
                var E = z.arg;
                L(N);
              }
              return E;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(T, C, N) {
          return this.delegate = {
            iterator: A(T),
            resultName: C,
            nextLoc: N
          }, this.method === "next" && (this.arg = void 0), p;
        }
      }, n;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ai)), Ai.exports;
}
var Fi, _c;
function Cd() {
  if (_c)
    return Fi;
  _c = 1;
  var e = __()();
  Fi = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
  }
  return Fi;
}
var Ni = { exports: {} }, Sc;
function Ad() {
  return Sc || (Sc = 1, function(e) {
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
  }(Ni)), Ni.exports;
}
var Ii = { exports: {} }, Oc;
function Wr() {
  return Oc || (Oc = 1, function(e) {
    function t(r, n) {
      if (!(r instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ii)), Ii.exports;
}
var Di = { exports: {} }, ki = { exports: {} }, Mi = { exports: {} }, Rc;
function S_() {
  return Rc || (Rc = 1, function(e) {
    var t = ti().default;
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
  }(Mi)), Mi.exports;
}
var Pc;
function $d() {
  return Pc || (Pc = 1, function(e) {
    var t = ti().default, r = S_();
    function n(i) {
      var a = r(i, "string");
      return t(a) === "symbol" ? a : String(a);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ki)), ki.exports;
}
var Ec;
function Br() {
  return Ec || (Ec = 1, function(e) {
    var t = $d();
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
  }(Di)), Di.exports;
}
var tr = {}, xc;
function O_() {
  if (xc)
    return tr;
  xc = 1;
  var e = Ur;
  Object.defineProperty(tr, "__esModule", {
    value: !0
  }), tr.Configuration = void 0;
  var t = e(Wr()), r = e(Br()), n = /* @__PURE__ */ function() {
    function i() {
      var a, s, c, u, o, f, l, v, h, p, d, m, g, _ = this, w, b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (0, t.default)(this, i), this.server = b.server || {
        nodes: [{
          host: "localhost",
          port: "8108",
          path: "",
          protocol: "http"
        }]
      }, this.server.cacheSearchResultsForSeconds = (a = this.server.cacheSearchResultsForSeconds) !== null && a !== void 0 ? a : 2 * 60, this.additionalSearchParameters = (s = b.additionalSearchParameters) !== null && s !== void 0 ? s : {}, this.additionalSearchParameters.query_by = (c = (u = this.additionalSearchParameters.queryBy) !== null && u !== void 0 ? u : this.additionalSearchParameters.query_by) !== null && c !== void 0 ? c : "", this.additionalSearchParameters.preset = (o = (f = this.additionalSearchParameters.preset) !== null && f !== void 0 ? f : this.additionalSearchParameters.preset) !== null && o !== void 0 ? o : "", this.additionalSearchParameters.sort_by = (l = (v = this.additionalSearchParameters.sortBy) !== null && v !== void 0 ? v : this.additionalSearchParameters.sort_by) !== null && l !== void 0 ? l : "", this.additionalSearchParameters.highlight_full_fields = (h = (p = this.additionalSearchParameters.highlightFullFields) !== null && p !== void 0 ? p : this.additionalSearchParameters.highlight_full_fields) !== null && h !== void 0 ? h : this.additionalSearchParameters.query_by, this.geoLocationField = (d = b.geoLocationField) !== null && d !== void 0 ? d : "_geoloc", this.facetableFieldsWithSpecialCharacters = (m = b.facetableFieldsWithSpecialCharacters) !== null && m !== void 0 ? m : [], this.collectionSpecificSearchParameters = (g = b.collectionSpecificSearchParameters) !== null && g !== void 0 ? g : {}, Object.keys(this.collectionSpecificSearchParameters).forEach(function(y) {
        var j, F, R, q, V, L, k = _.collectionSpecificSearchParameters[y];
        k.query_by = (j = k.queryBy) !== null && j !== void 0 ? j : k.query_by, k.preset = (F = k.preset) !== null && F !== void 0 ? F : k.preset, k.sort_by = (R = k.sortBy) !== null && R !== void 0 ? R : k.sort_by, k.highlight_full_fields = (q = (V = (L = k.highlightFullFields) !== null && L !== void 0 ? L : k.highlight_full_fields) !== null && V !== void 0 ? V : _.additionalSearchParameters.highlight_full_fields) !== null && q !== void 0 ? q : k.query_by, Object.keys(k).forEach(function(A) {
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
  return tr.Configuration = n, tr;
}
var nt = {}, tn = {}, rn = {}, Hi = { exports: {} }, jc;
function R_() {
  return jc || (jc = 1, function(e) {
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
      function c(d, m) {
        var g = d[m];
        if (typeof g.bind == "function")
          return g.bind(d);
        try {
          return Function.prototype.bind.call(g, d);
        } catch {
          return function() {
            return Function.prototype.apply.apply(g, [d, arguments]);
          };
        }
      }
      function u() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function o(d) {
        return d === "debug" && (d = "log"), typeof console === r ? !1 : d === "trace" && n ? u : console[d] !== void 0 ? c(console, d) : console.log !== void 0 ? c(console, "log") : t;
      }
      function f() {
        for (var d = this.getLevel(), m = 0; m < i.length; m++) {
          var g = i[m];
          this[g] = m < d ? t : this.methodFactory(g, d, this.name);
        }
        if (this.log = this.debug, typeof console === r && d < this.levels.SILENT)
          return "No console available for logging";
      }
      function l(d) {
        return function() {
          typeof console !== r && (f.call(this), this[d].apply(this, arguments));
        };
      }
      function v(d, m, g) {
        return o(d) || l.apply(this, arguments);
      }
      function h(d, m) {
        var g = this, _, w, b, y = "loglevel";
        typeof d == "string" ? y += ":" + d : typeof d == "symbol" && (y = void 0);
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
        function F() {
          var L;
          if (!(typeof window === r || !y)) {
            try {
              L = window.localStorage[y];
            } catch {
            }
            if (typeof L === r)
              try {
                var k = window.document.cookie, A = encodeURIComponent(y), ee = k.indexOf(A + "=");
                ee !== -1 && (L = /^([^;]+)/.exec(
                  k.slice(ee + A.length + 1)
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
        g.name = d, g.levels = {
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
          w = q(L), F() || g.setLevel(L, !1);
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
        var V = F();
        V != null && (b = q(V)), f.call(g);
      }
      s = new h(), s.getLogger = function(m) {
        if (typeof m != "symbol" && typeof m != "string" || m === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var g = a[m];
        return g || (g = a[m] = new h(
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
  }(Hi)), Hi.exports;
}
var xe = {}, nn = {}, an = {}, Tc;
function Je() {
  if (Tc)
    return an;
  Tc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(an, "__esModule", { value: !0 });
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
  return an.default = t, an;
}
var Cc;
function P_() {
  if (Cc)
    return nn;
  Cc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(nn, "__esModule", { value: !0 });
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
  return nn.default = n, nn;
}
var on = {}, Ac;
function E_() {
  if (Ac)
    return on;
  Ac = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(on, "__esModule", { value: !0 });
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
  return on.default = n, on;
}
var sn = {}, $c;
function x_() {
  if ($c)
    return sn;
  $c = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(sn, "__esModule", { value: !0 });
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
  return sn.default = n, sn;
}
var un = {}, Fc;
function j_() {
  if (Fc)
    return un;
  Fc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(un, "__esModule", { value: !0 });
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
  return un.default = n, un;
}
var cn = {}, Nc;
function T_() {
  if (Nc)
    return cn;
  Nc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(cn, "__esModule", { value: !0 });
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
  return cn.default = n, cn;
}
var ln = {}, Ic;
function C_() {
  if (Ic)
    return ln;
  Ic = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(ln, "__esModule", { value: !0 });
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
  return ln.default = n, ln;
}
var fn = {}, Dc;
function A_() {
  if (Dc)
    return fn;
  Dc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(fn, "__esModule", { value: !0 });
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
  return fn.default = n, fn;
}
var dn = {}, kc;
function $_() {
  if (kc)
    return dn;
  kc = 1;
  var e = P && P.__extends || function() {
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
  Object.defineProperty(dn, "__esModule", { value: !0 });
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
  return dn.default = n, dn;
}
var hn = {}, Mc;
function F_() {
  if (Mc)
    return hn;
  Mc = 1;
  var e = P && P.__extends || function() {
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
      function a(s, c) {
        var u = i.call(this, s) || this;
        return u.importResults = c, u;
      }
      return a;
    }(r.default)
  );
  return hn.default = n, hn;
}
var Hc;
function Vr() {
  if (Hc)
    return xe;
  Hc = 1;
  var e = P && P.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.ImportError = xe.TypesenseError = xe.ServerError = xe.RequestUnauthorized = xe.RequestMalformed = xe.ObjectUnprocessable = xe.ObjectNotFound = xe.ObjectAlreadyExists = xe.MissingConfigurationError = xe.HTTPError = void 0;
  var t = e(P_());
  xe.HTTPError = t.default;
  var r = e(E_());
  xe.MissingConfigurationError = r.default;
  var n = e(x_());
  xe.ObjectAlreadyExists = n.default;
  var i = e(j_());
  xe.ObjectNotFound = i.default;
  var a = e(T_());
  xe.ObjectUnprocessable = a.default;
  var s = e(C_());
  xe.RequestMalformed = s.default;
  var c = e(A_());
  xe.RequestUnauthorized = c.default;
  var u = e($_());
  xe.ServerError = u.default;
  var o = e(F_());
  xe.ImportError = o.default;
  var f = e(Je());
  return xe.TypesenseError = f.default, xe;
}
var Lc;
function Fd() {
  if (Lc)
    return rn;
  Lc = 1;
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
  Object.defineProperty(rn, "__esModule", { value: !0 });
  var i = n(R_()), a = Vr(), s = (
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
  return rn.default = s, rn;
}
var pn = {}, vn = { exports: {} }, Li, qc;
function Nd() {
  return qc || (qc = 1, Li = function(t, r) {
    return function() {
      for (var i = new Array(arguments.length), a = 0; a < i.length; a++)
        i[a] = arguments[a];
      return t.apply(r, i);
    };
  }), Li;
}
var qi, Uc;
function Ue() {
  if (Uc)
    return qi;
  Uc = 1;
  var e = Nd(), t = Object.prototype.toString;
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
  function h(R) {
    return t.call(R) === "[object File]";
  }
  function p(R) {
    return t.call(R) === "[object Blob]";
  }
  function d(R) {
    return t.call(R) === "[object Function]";
  }
  function m(R) {
    return f(R) && d(R.pipe);
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
  function F(R) {
    return R.charCodeAt(0) === 65279 && (R = R.slice(1)), R;
  }
  return qi = {
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
    isFile: h,
    isBlob: p,
    isFunction: d,
    isStream: m,
    isURLSearchParams: g,
    isStandardBrowserEnv: w,
    forEach: b,
    merge: y,
    extend: j,
    trim: _,
    stripBOM: F
  }, qi;
}
var Ui, Wc;
function Id() {
  if (Wc)
    return Ui;
  Wc = 1;
  var e = Ue();
  function t(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  return Ui = function(n, i, a) {
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
        f === null || typeof f > "u" || (e.isArray(f) ? l = l + "[]" : f = [f], e.forEach(f, function(h) {
          e.isDate(h) ? h = h.toISOString() : e.isObject(h) && (h = JSON.stringify(h)), c.push(t(l) + "=" + t(h));
        }));
      }), s = c.join("&");
    }
    if (s) {
      var u = n.indexOf("#");
      u !== -1 && (n = n.slice(0, u)), n += (n.indexOf("?") === -1 ? "?" : "&") + s;
    }
    return n;
  }, Ui;
}
var Wi, Bc;
function N_() {
  if (Bc)
    return Wi;
  Bc = 1;
  var e = Ue();
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
  }, Wi = t, Wi;
}
var Bi, Vc;
function I_() {
  if (Vc)
    return Bi;
  Vc = 1;
  var e = Ue();
  return Bi = function(r, n) {
    e.forEach(r, function(a, s) {
      s !== n && s.toUpperCase() === n.toUpperCase() && (r[n] = a, delete r[s]);
    });
  }, Bi;
}
var Vi, zc;
function Dd() {
  return zc || (zc = 1, Vi = function(t, r, n, i, a) {
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
  }), Vi;
}
var zi, Qc;
function kd() {
  return Qc || (Qc = 1, zi = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }), zi;
}
var Qi, Yc;
function Md() {
  if (Yc)
    return Qi;
  Yc = 1;
  var e = Dd();
  return Qi = function(r, n, i, a, s) {
    var c = new Error(r);
    return e(c, n, i, a, s);
  }, Qi;
}
var Yi, Gc;
function D_() {
  if (Gc)
    return Yi;
  Gc = 1;
  var e = Md();
  return Yi = function(r, n, i) {
    var a = i.config.validateStatus;
    !i.status || !a || a(i.status) ? r(i) : n(e(
      "Request failed with status code " + i.status,
      i.config,
      null,
      i.request,
      i
    ));
  }, Yi;
}
var Gi, Kc;
function k_() {
  if (Kc)
    return Gi;
  Kc = 1;
  var e = Ue();
  return Gi = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
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
    function() {
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
  ), Gi;
}
var Ki, Jc;
function M_() {
  return Jc || (Jc = 1, Ki = function(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }), Ki;
}
var Ji, Xc;
function H_() {
  return Xc || (Xc = 1, Ji = function(t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }), Ji;
}
var Xi, Zc;
function L_() {
  if (Zc)
    return Xi;
  Zc = 1;
  var e = M_(), t = H_();
  return Xi = function(n, i) {
    return n && !e(i) ? t(n, i) : i;
  }, Xi;
}
var Zi, el;
function q_() {
  if (el)
    return Zi;
  el = 1;
  var e = Ue(), t = [
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
  return Zi = function(n) {
    var i = {}, a, s, c;
    return n && e.forEach(n.split(`
`), function(o) {
      if (c = o.indexOf(":"), a = e.trim(o.substr(0, c)).toLowerCase(), s = e.trim(o.substr(c + 1)), a) {
        if (i[a] && t.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? i[a] = (i[a] ? i[a] : []).concat([s]) : i[a] = i[a] ? i[a] + ", " + s : s;
      }
    }), i;
  }, Zi;
}
var ea, tl;
function U_() {
  if (tl)
    return ea;
  tl = 1;
  var e = Ue();
  return ea = e.isStandardBrowserEnv() ? (
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
    function() {
      return function() {
        return !0;
      };
    }()
  ), ea;
}
var ta, rl;
function ri() {
  if (rl)
    return ta;
  rl = 1;
  function e(t) {
    this.message = t;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, ta = e, ta;
}
var ra, nl;
function il() {
  if (nl)
    return ra;
  nl = 1;
  var e = Ue(), t = D_(), r = k_(), n = Id(), i = L_(), a = q_(), s = U_(), c = Md(), u = kd(), o = ri();
  return ra = function(l) {
    return new Promise(function(h, p) {
      var d = l.data, m = l.headers, g = l.responseType, _;
      function w() {
        l.cancelToken && l.cancelToken.unsubscribe(_), l.signal && l.signal.removeEventListener("abort", _);
      }
      e.isFormData(d) && delete m["Content-Type"];
      var b = new XMLHttpRequest();
      if (l.auth) {
        var y = l.auth.username || "", j = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
        m.Authorization = "Basic " + btoa(y + ":" + j);
      }
      var F = i(l.baseURL, l.url);
      b.open(l.method.toUpperCase(), n(F, l.params, l.paramsSerializer), !0), b.timeout = l.timeout;
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
          t(function(ee) {
            h(ee), w();
          }, function(ee) {
            p(ee), w();
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
        var q = (l.withCredentials || s(F)) && l.xsrfCookieName ? r.read(l.xsrfCookieName) : void 0;
        q && (m[l.xsrfHeaderName] = q);
      }
      "setRequestHeader" in b && e.forEach(m, function(L, k) {
        typeof d > "u" && k.toLowerCase() === "content-type" ? delete m[k] : b.setRequestHeader(k, L);
      }), e.isUndefined(l.withCredentials) || (b.withCredentials = !!l.withCredentials), g && g !== "json" && (b.responseType = l.responseType), typeof l.onDownloadProgress == "function" && b.addEventListener("progress", l.onDownloadProgress), typeof l.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", l.onUploadProgress), (l.cancelToken || l.signal) && (_ = function(V) {
        b && (p(!V || V && V.type ? new o("canceled") : V), b.abort(), b = null);
      }, l.cancelToken && l.cancelToken.subscribe(_), l.signal && (l.signal.aborted ? _() : l.signal.addEventListener("abort", _))), d || (d = null), b.send(d);
    });
  }, ra;
}
var na, al;
function cs() {
  if (al)
    return na;
  al = 1;
  var e = Ue(), t = I_(), r = Dd(), n = kd(), i = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function a(o, f) {
    !e.isUndefined(o) && e.isUndefined(o["Content-Type"]) && (o["Content-Type"] = f);
  }
  function s() {
    var o;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (o = il()), o;
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
      var l = this.transitional || u.transitional, v = l && l.silentJSONParsing, h = l && l.forcedJSONParsing, p = !v && this.responseType === "json";
      if (p || h && e.isString(f) && f.length)
        try {
          return JSON.parse(f);
        } catch (d) {
          if (p)
            throw d.name === "SyntaxError" ? r(d, this, "E_JSON_PARSE") : d;
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
  }), na = u, na;
}
var ia, ol;
function W_() {
  if (ol)
    return ia;
  ol = 1;
  var e = Ue(), t = cs();
  return ia = function(n, i, a) {
    var s = this || t;
    return e.forEach(a, function(u) {
      n = u.call(s, n, i);
    }), n;
  }, ia;
}
var aa, sl;
function Hd() {
  return sl || (sl = 1, aa = function(t) {
    return !!(t && t.__CANCEL__);
  }), aa;
}
var oa, ul;
function B_() {
  if (ul)
    return oa;
  ul = 1;
  var e = Ue(), t = W_(), r = Hd(), n = cs(), i = ri();
  function a(s) {
    if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
      throw new i("canceled");
  }
  return oa = function(c) {
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
  }, oa;
}
var sa, cl;
function Ld() {
  if (cl)
    return sa;
  cl = 1;
  var e = Ue();
  return sa = function(r, n) {
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
      var h = f[v] || s, p = h(v);
      e.isUndefined(p) && h !== o || (i[v] = p);
    }), i;
  }, sa;
}
var ua, ll;
function qd() {
  return ll || (ll = 1, ua = {
    version: "0.26.1"
  }), ua;
}
var ca, fl;
function V_() {
  if (fl)
    return ca;
  fl = 1;
  var e = qd().version, t = {};
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
  return ca = {
    assertOptions: n,
    validators: t
  }, ca;
}
var la, dl;
function z_() {
  if (dl)
    return la;
  dl = 1;
  var e = Ue(), t = Id(), r = N_(), n = B_(), i = Ld(), a = V_(), s = a.validators;
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
    var v = [], h = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(f) === !1 || (h = h && y.synchronous, v.unshift(y.fulfilled, y.rejected));
    });
    var p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    var d;
    if (!h) {
      var m = [n, void 0];
      for (Array.prototype.unshift.apply(m, v), m = m.concat(p), d = Promise.resolve(f); m.length; )
        d = d.then(m.shift(), m.shift());
      return d;
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
      d = n(g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (; p.length; )
      d = d.then(p.shift(), p.shift());
    return d;
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
  }), la = c, la;
}
var fa, hl;
function Q_() {
  if (hl)
    return fa;
  hl = 1;
  var e = ri();
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
  }, fa = t, fa;
}
var da, pl;
function Y_() {
  return pl || (pl = 1, da = function(t) {
    return function(n) {
      return t.apply(null, n);
    };
  }), da;
}
var ha, vl;
function G_() {
  if (vl)
    return ha;
  vl = 1;
  var e = Ue();
  return ha = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, ha;
}
var ml;
function K_() {
  if (ml)
    return vn.exports;
  ml = 1;
  var e = Ue(), t = Nd(), r = z_(), n = Ld(), i = cs();
  function a(c) {
    var u = new r(c), o = t(r.prototype.request, u);
    return e.extend(o, r.prototype, u), e.extend(o, u), o.create = function(l) {
      return a(n(c, l));
    }, o;
  }
  var s = a(i);
  return s.Axios = r, s.Cancel = ri(), s.CancelToken = Q_(), s.isCancel = Hd(), s.VERSION = qd().version, s.all = function(u) {
    return Promise.all(u);
  }, s.spread = Y_(), s.isAxiosError = G_(), vn.exports = s, vn.exports.default = s, vn.exports;
}
var pa, gl;
function J_() {
  return gl || (gl = 1, pa = K_()), pa;
}
var yl;
function Ud() {
  if (yl)
    return pn;
  yl = 1;
  var e = P && P.__awaiter || function(f, l, v, h) {
    function p(d) {
      return d instanceof v ? d : new v(function(m) {
        m(d);
      });
    }
    return new (v || (v = Promise))(function(d, m) {
      function g(b) {
        try {
          w(h.next(b));
        } catch (y) {
          m(y);
        }
      }
      function _(b) {
        try {
          w(h.throw(b));
        } catch (y) {
          m(y);
        }
      }
      function w(b) {
        b.done ? d(b.value) : p(b.value).then(g, _);
      }
      w((h = h.apply(f, l || [])).next());
    });
  }, t = P && P.__generator || function(f, l) {
    var v = { label: 0, sent: function() {
      if (d[0] & 1)
        throw d[1];
      return d[1];
    }, trys: [], ops: [] }, h, p, d, m;
    return m = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(w) {
      return function(b) {
        return _([w, b]);
      };
    }
    function _(w) {
      if (h)
        throw new TypeError("Generator is already executing.");
      for (; v; )
        try {
          if (h = 1, p && (d = w[0] & 2 ? p.return : w[0] ? p.throw || ((d = p.return) && d.call(p), 0) : p.next) && !(d = d.call(p, w[1])).done)
            return d;
          switch (p = 0, d && (w = [w[0] & 2, d.value]), w[0]) {
            case 0:
            case 1:
              d = w;
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
              if (d = v.trys, !(d = d.length > 0 && d[d.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                v = 0;
                continue;
              }
              if (w[0] === 3 && (!d || w[1] > d[0] && w[1] < d[3])) {
                v.label = w[1];
                break;
              }
              if (w[0] === 6 && v.label < d[1]) {
                v.label = d[1], d = w;
                break;
              }
              if (d && v.label < d[2]) {
                v.label = d[2], v.ops.push(w);
                break;
              }
              d[2] && v.ops.pop(), v.trys.pop();
              continue;
          }
          w = l.call(f, v);
        } catch (b) {
          w = [6, b], p = 0;
        } finally {
          h = d = 0;
        }
      if (w[0] & 5)
        throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(pn, "__esModule", { value: !0 });
  var n = r(J_()), i = Vr(), a = r(Je()), s = "X-TYPESENSE-API-KEY", c = !0, u = !1, o = (
    /** @class */
    function() {
      function f(l) {
        this.configuration = l, this.apiKey = this.configuration.apiKey, this.nodes = this.configuration.nodes == null ? this.configuration.nodes : JSON.parse(JSON.stringify(this.configuration.nodes)), this.nearestNode = this.configuration.nearestNode == null ? this.configuration.nearestNode : JSON.parse(JSON.stringify(this.configuration.nearestNode)), this.connectionTimeoutSeconds = this.configuration.connectionTimeoutSeconds, this.healthcheckIntervalSeconds = this.configuration.healthcheckIntervalSeconds, this.numRetriesPerRequest = this.configuration.numRetries, this.retryIntervalSeconds = this.configuration.retryIntervalSeconds, this.sendApiKeyAsQueryParam = this.configuration.sendApiKeyAsQueryParam, this.additionalUserHeaders = this.configuration.additionalHeaders, this.logger = this.configuration.logger, this.initializeMetadataForNodes(), this.currentNodeIndex = -1;
      }
      return f.prototype.get = function(l, v, h) {
        v === void 0 && (v = {});
        var p = h === void 0 ? {} : h, d = p.abortSignal, m = d === void 0 ? null : d, g = p.responseType, _ = g === void 0 ? void 0 : g;
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
          return t(this, function(h) {
            return [2, this.performRequest("delete", l, { queryParameters: v })];
          });
        });
      }, f.prototype.post = function(l, v, h, p) {
        return v === void 0 && (v = {}), h === void 0 && (h = {}), p === void 0 && (p = {}), e(this, void 0, void 0, function() {
          return t(this, function(d) {
            return [2, this.performRequest("post", l, {
              queryParameters: h,
              bodyParameters: v,
              additionalHeaders: p
            })];
          });
        });
      }, f.prototype.put = function(l, v, h) {
        return v === void 0 && (v = {}), h === void 0 && (h = {}), e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.performRequest("put", l, {
              queryParameters: h,
              bodyParameters: v
            })];
          });
        });
      }, f.prototype.patch = function(l, v, h) {
        return v === void 0 && (v = {}), h === void 0 && (h = {}), e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.performRequest("patch", l, {
              queryParameters: h,
              bodyParameters: v
            })];
          });
        });
      }, f.prototype.performRequest = function(l, v, h) {
        var p, d, m, g = h.queryParameters, _ = g === void 0 ? null : g, w = h.bodyParameters, b = w === void 0 ? null : w, y = h.additionalHeaders, j = y === void 0 ? {} : y, F = h.abortSignal, R = F === void 0 ? null : F, q = h.responseType, V = q === void 0 ? void 0 : q, L = h.skipConnectionTimeout, k = L === void 0 ? !1 : L;
        return e(this, void 0, void 0, function() {
          var A, ee, U, T, C, N;
          return t(this, function(z) {
            switch (z.label) {
              case 0:
                this.configuration.validate(), A = Date.now(), this.logger.debug("Request #".concat(A, ": Performing ").concat(l.toUpperCase(), " request: ").concat(v)), U = function(E) {
                  var M, D, $, H, W, O, G;
                  return t(this, function(I) {
                    switch (I.label) {
                      case 0:
                        if (M = T.getNextNode(A), T.logger.debug("Request #".concat(A, ": Attempting ").concat(l.toUpperCase(), " request Try #").concat(E, " to Node ").concat(M.index)), R && R.aborted)
                          return [2, { value: Promise.reject(new Error("Request aborted by caller.")) }];
                        D = void 0, I.label = 1;
                      case 1:
                        return I.trys.push([1, 3, 5, 6]), $ = {
                          method: l,
                          url: T.uriFor(v, M),
                          headers: Object.assign({}, T.defaultHeaders(), j, T.additionalUserHeaders),
                          maxContentLength: 1 / 0,
                          maxBodyLength: 1 / 0,
                          responseType: V,
                          validateStatus: function(J) {
                            return J > 0;
                          },
                          transformResponse: [
                            function(J, K) {
                              var B = J;
                              return K !== void 0 && typeof J == "string" && K["content-type"] && K["content-type"].startsWith("application/json") && (B = JSON.parse(J)), B;
                            }
                          ]
                        }, k !== !0 && ($.timeout = T.connectionTimeoutSeconds * 1e3), _ && Object.keys(_).length !== 0 && ($.params = _), T.sendApiKeyAsQueryParam && ($.params = $.params || {}, $.params["x-typesense-api-key"] = T.apiKey), b && (typeof b == "string" && b.length !== 0 || typeof b == "object" && Object.keys(b).length !== 0) && ($.data = b), R && (H = n.default.CancelToken, W = H.source(), D = function() {
                          return W.cancel();
                        }, R.addEventListener("abort", D), $.cancelToken = W.token), [4, (0, n.default)($)];
                      case 2:
                        if (O = I.sent(), O.status >= 1 && O.status <= 499 && T.setNodeHealthcheck(M, c), T.logger.debug("Request #".concat(A, ": Request to Node ").concat(M.index, " was made. Response Code was ").concat(O.status, ".")), O.status >= 200 && O.status < 300)
                          return [2, { value: Promise.resolve(O.data) }];
                        if (O.status < 500)
                          return [2, { value: Promise.reject(T.customErrorForResponse(O, (p = O.data) === null || p === void 0 ? void 0 : p.message)) }];
                        throw T.customErrorForResponse(O, (d = O.data) === null || d === void 0 ? void 0 : d.message);
                      case 3:
                        return G = I.sent(), T.setNodeHealthcheck(M, u), ee = G, T.logger.warn("Request #".concat(A, ": Request to Node ").concat(M.index, ' failed due to "').concat(G.code, " ").concat(G.message).concat(G.response == null ? "" : " - " + JSON.stringify((m = G.response) === null || m === void 0 ? void 0 : m.data), '"')), T.logger.warn("Request #".concat(A, ": Sleeping for ").concat(T.retryIntervalSeconds, "s and then retrying request...")), [4, T.timer(T.retryIntervalSeconds)];
                      case 4:
                        return I.sent(), [3, 6];
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
                }, T = this, C = 1, z.label = 1;
              case 1:
                return C <= this.numRetriesPerRequest + 1 ? [5, U(C)] : [3, 4];
              case 2:
                if (N = z.sent(), typeof N == "object")
                  return [2, N.value];
                z.label = 3;
              case 3:
                return C++, [3, 1];
              case 4:
                return this.logger.debug("Request #".concat(A, ": No retries left. Raising last error")), [2, Promise.reject(ee)];
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
        for (var v = this.nodes[0], h = 0; h <= this.nodes.length; h++)
          if (this.currentNodeIndex = (this.currentNodeIndex + 1) % this.nodes.length, v = this.nodes[this.currentNodeIndex], v.isHealthy === !0 || this.nodeDueForHealthcheck(v, l))
            return this.logger.debug("Request #".concat(l, ": Updated current node to Node ").concat(v.index)), v;
        return this.logger.debug("Request #".concat(l, ": No healthy nodes were found. Returning the next node, Node ").concat(v.index)), v;
      }, f.prototype.nodeDueForHealthcheck = function(l, v) {
        v === void 0 && (v = 0);
        var h = Date.now() - l.lastAccessTimestamp > this.healthcheckIntervalSeconds * 1e3;
        return h && this.logger.debug("Request #".concat(v, ": Node ").concat(l.index, " has exceeded healtcheckIntervalSeconds of ").concat(this.healthcheckIntervalSeconds, ". Adding it back into rotation.")), h;
      }, f.prototype.initializeMetadataForNodes = function() {
        var l = this;
        this.nearestNode != null && (this.nearestNode.index = "nearestNode", this.setNodeHealthcheck(this.nearestNode, c)), this.nodes.forEach(function(v, h) {
          v.index = h, l.setNodeHealthcheck(v, c);
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
            return [2, new Promise(function(h) {
              return setTimeout(h, l * 1e3);
            })];
          });
        });
      }, f.prototype.customErrorForResponse = function(l, v) {
        var h = "Request failed with HTTP code ".concat(l.status);
        typeof v == "string" && v.trim() !== "" && (h += " | Server said: ".concat(v));
        var p = new a.default(h);
        return l.status === 400 ? p = new i.RequestMalformed(h) : l.status === 401 ? p = new i.RequestUnauthorized(h) : l.status === 404 ? p = new i.ObjectNotFound(h) : l.status === 409 ? p = new i.ObjectAlreadyExists(h) : l.status === 422 ? p = new i.ObjectUnprocessable(h) : l.status >= 500 && l.status <= 599 ? p = new i.ServerError(h) : p = new i.HTTPError(h), p.httpStatus = l.status, p;
      }, f;
    }()
  );
  return pn.default = o, pn;
}
var mn = {}, bl;
function bt() {
  if (bl)
    return mn;
  bl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(mn, "__esModule", { value: !0 });
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
  return mn.default = n, mn;
}
var gn = {}, yn = {}, rr = {}, bn = {}, wl;
function Wd() {
  if (wl)
    return bn;
  wl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__spreadArray || function(s, c, u) {
    if (u || arguments.length === 2)
      for (var o = 0, f = c.length, l; o < f; o++)
        (l || !(o in c)) && (l || (l = Array.prototype.slice.call(c, 0, o)), l[o] = c[o]);
    return s.concat(l || Array.prototype.slice.call(c));
  };
  Object.defineProperty(bn, "__esModule", { value: !0 });
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
          var l, v, h, p, d, m, g, _, b, w, b, y, j, F, q, R, q;
          return t(this, function(V) {
            switch (V.label) {
              case 0:
                if (l = f.cacheResponseForSeconds, v = l === void 0 ? n : l, h = f.maxSize, p = h === void 0 ? i : h, d = v <= 0 || p <= 0, d)
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
                }), F = this.responseCache.size > p, F && (q = this.responseCache.keys().next().value, this.responseCache.delete(q)), R = this.responsePromiseCache.size > p, R && (q = this.responsePromiseCache.keys().next().value, this.responsePromiseCache.delete(q)), [2, j];
            }
          });
        });
      }, s;
    }()
  );
  return bn.default = a, bn;
}
var _l;
function Bd() {
  if (_l)
    return rr;
  _l = 1;
  var e = P && P.__awaiter || function(c, u, o, f) {
    function l(v) {
      return v instanceof o ? v : new o(function(h) {
        h(v);
      });
    }
    return new (o || (o = Promise))(function(v, h) {
      function p(g) {
        try {
          m(f.next(g));
        } catch (_) {
          h(_);
        }
      }
      function d(g) {
        try {
          m(f.throw(g));
        } catch (_) {
          h(_);
        }
      }
      function m(g) {
        g.done ? v(g.value) : l(g.value).then(p, d);
      }
      m((f = f.apply(c, u || [])).next());
    });
  }, t = P && P.__generator || function(c, u) {
    var o = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, f, l, v, h;
    return h = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function p(m) {
      return function(g) {
        return d([m, g]);
      };
    }
    function d(m) {
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
  Object.defineProperty(rr, "__esModule", { value: !0 }), rr.SearchOnlyDocuments = void 0;
  var n = r(Wd()), i = r(bt()), a = "/documents", s = (
    /** @class */
    function() {
      function c(u, o, f) {
        this.collectionName = u, this.apiCall = o, this.configuration = f, this.requestWithCache = new n.default();
      }
      return c.prototype.clearCache = function() {
        this.requestWithCache.clearCache();
      }, c.prototype.search = function(u, o) {
        var f = o === void 0 ? {} : o, l = f.cacheSearchResultsForSeconds, v = l === void 0 ? this.configuration.cacheSearchResultsForSeconds : l, h = f.abortSignal, p = h === void 0 ? null : h;
        return e(this, void 0, void 0, function() {
          var d, m, g;
          return t(this, function(_) {
            d = {}, this.configuration.useServerSideSearchCache === !0 && (d.use_cache = !0);
            for (m in u)
              Array.isArray(u[m]) && (d[m] = u[m].join(","));
            return g = Object.assign({}, u, d), [2, this.requestWithCache.perform(this.apiCall, this.apiCall.get, [this.endpointPath("search"), g, { abortSignal: p }], {
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
  return rr.SearchOnlyDocuments = s, rr;
}
var Sl;
function Vd() {
  if (Sl)
    return yn;
  Sl = 1;
  var e = P && P.__extends || function() {
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
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, r = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(yn, "__esModule", { value: !0 });
  var n = Vr(), i = Bd(), a = (
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
          var f, l, v, h;
          return r(this, function(p) {
            switch (p.label) {
              case 0:
                if (Array.isArray(u))
                  try {
                    f = u.map(function(d) {
                      return JSON.stringify(d);
                    }).join(`
`);
                  } catch (d) {
                    throw RangeError instanceof d && (d != null && d.includes("Too many properties to enumerate")) ? new Error("".concat(d, `
          It looks like you have reached a Node.js limit that restricts the number of keys in an Object: https://stackoverflow.com/questions/9282869/are-there-limits-to-the-number-of-properties-in-a-javascript-object

          Please try reducing the number of keys in your document, or using CURL to import your data.
          `)) : new Error(d);
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
`).map(function(d) {
                    return JSON.parse(d);
                  }), h = v.filter(function(d) {
                    return d.success === !1;
                  }), h.length > 0)
                    throw new n.ImportError("".concat(v.length - h.length, " documents imported successfully, ").concat(h.length, " documents failed during import. Use `error.importResults` from the raised exception to get a detailed error reason for each document."), v);
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
  return yn.default = a, yn;
}
var wn = {}, Ol;
function zd() {
  if (Ol)
    return wn;
  Ol = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(wn, "__esModule", { value: !0 });
  var n = r(bt()), i = "/overrides", a = (
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
  return wn.default = a, wn;
}
var _n = {}, Rl;
function X_() {
  if (Rl)
    return _n;
  Rl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(_n, "__esModule", { value: !0 });
  var n = r(bt()), i = r(zd()), a = (
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
  return _n.default = a, _n;
}
var Sn = {}, Pl;
function Qd() {
  if (Pl)
    return Sn;
  Pl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 });
  var n = r(bt()), i = "/synonyms", a = (
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
  return Sn.default = a, Sn;
}
var On = {}, El;
function Z_() {
  if (El)
    return On;
  El = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(On, "__esModule", { value: !0 });
  var n = r(bt()), i = r(Qd()), a = (
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
  return On.default = a, On;
}
var nr = {}, xl;
function eS() {
  if (xl)
    return nr;
  xl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.Document = void 0;
  var n = r(bt()), i = r(Vd()), a = (
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
  return nr.Document = a, nr;
}
var jl;
function tS() {
  if (jl)
    return gn;
  jl = 1;
  var e = P && P.__awaiter || function(v, h, p, d) {
    function m(g) {
      return g instanceof p ? g : new p(function(_) {
        _(g);
      });
    }
    return new (p || (p = Promise))(function(g, _) {
      function w(j) {
        try {
          y(d.next(j));
        } catch (F) {
          _(F);
        }
      }
      function b(j) {
        try {
          y(d.throw(j));
        } catch (F) {
          _(F);
        }
      }
      function y(j) {
        j.done ? g(j.value) : m(j.value).then(w, b);
      }
      y((d = d.apply(v, h || [])).next());
    });
  }, t = P && P.__generator || function(v, h) {
    var p = { label: 0, sent: function() {
      if (g[0] & 1)
        throw g[1];
      return g[1];
    }, trys: [], ops: [] }, d, m, g, _;
    return _ = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function w(y) {
      return function(j) {
        return b([y, j]);
      };
    }
    function b(y) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (d = 1, m && (g = y[0] & 2 ? m.return : y[0] ? m.throw || ((g = m.return) && g.call(m), 0) : m.next) && !(g = g.call(m, y[1])).done)
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
          y = h.call(v, p);
        } catch (j) {
          y = [6, j], m = 0;
        } finally {
          d = g = 0;
        }
      if (y[0] & 5)
        throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(gn, "__esModule", { value: !0 });
  var n = r(bt()), i = r(Vd()), a = Vr(), s = r(zd()), c = r(X_()), u = r(Qd()), o = r(Z_()), f = eS(), l = (
    /** @class */
    function() {
      function v(h, p, d) {
        this.name = h, this.apiCall = p, this.configuration = d, this.individualDocuments = {}, this.individualOverrides = {}, this.individualSynonyms = {}, this.name = h, this.apiCall = p, this.configuration = d, this._documents = new i.default(this.name, this.apiCall, this.configuration), this._overrides = new s.default(this.name, this.apiCall), this._synonyms = new u.default(this.name, this.apiCall);
      }
      return v.prototype.retrieve = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(h) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, v.prototype.update = function(h) {
        return e(this, void 0, void 0, function() {
          return t(this, function(p) {
            return [2, this.apiCall.patch(this.endpointPath(), h)];
          });
        });
      }, v.prototype.delete = function() {
        return e(this, void 0, void 0, function() {
          return t(this, function(h) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, v.prototype.exists = function() {
        return e(this, void 0, void 0, function() {
          var h;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return p.trys.push([0, 2, , 3]), [4, this.retrieve()];
              case 1:
                return p.sent(), [2, !0];
              case 2:
                if (h = p.sent(), h instanceof a.ObjectNotFound)
                  return [2, !1];
                throw h;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, v.prototype.documents = function(h) {
        return h ? (this.individualDocuments[h] === void 0 && (this.individualDocuments[h] = new f.Document(this.name, h, this.apiCall)), this.individualDocuments[h]) : this._documents;
      }, v.prototype.overrides = function(h) {
        return h === void 0 ? this._overrides : (this.individualOverrides[h] === void 0 && (this.individualOverrides[h] = new c.default(this.name, h, this.apiCall)), this.individualOverrides[h]);
      }, v.prototype.synonyms = function(h) {
        return h === void 0 ? this._synonyms : (this.individualSynonyms[h] === void 0 && (this.individualSynonyms[h] = new o.default(this.name, h, this.apiCall)), this.individualSynonyms[h]);
      }, v.prototype.endpointPath = function() {
        return "".concat(n.default.RESOURCEPATH, "/").concat(this.name);
      }, v;
    }()
  );
  return gn.default = l, gn;
}
var Rn = {}, Tl;
function Yd() {
  if (Tl)
    return Rn;
  Tl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Rn, "__esModule", { value: !0 });
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
  return Rn.default = n, Rn;
}
var Pn = {}, Cl;
function rS() {
  if (Cl)
    return Pn;
  Cl = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(d) {
        try {
          p(u.next(d));
        } catch (m) {
          l(m);
        }
      }
      function h(d) {
        try {
          p(u.throw(d));
        } catch (m) {
          l(m);
        }
      }
      function p(d) {
        d.done ? f(d.value) : o(d.value).then(v, h);
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
      return function(d) {
        return h([p, d]);
      };
    }
    function h(p) {
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
        } catch (d) {
          p = [6, d], o = 0;
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
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  var n = r(Yd()), i = (
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
  return Pn.default = i, Pn;
}
var En = {};
const nS = {}, iS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nS
}, Symbol.toStringTag, { value: "Module" })), aS = /* @__PURE__ */ Ph(iS);
var Al;
function Gd() {
  if (Al)
    return En;
  Al = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(d) {
        try {
          p(u.next(d));
        } catch (m) {
          l(m);
        }
      }
      function h(d) {
        try {
          p(u.throw(d));
        } catch (m) {
          l(m);
        }
      }
      function p(d) {
        d.done ? f(d.value) : o(d.value).then(v, h);
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
      return function(d) {
        return h([p, d]);
      };
    }
    function h(p) {
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
        } catch (d) {
          p = [6, d], o = 0;
        } finally {
          u = f = 0;
        }
      if (p[0] & 5)
        throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(En, "__esModule", { value: !0 });
  var r = aS, n = "/keys", i = (
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
  return En.default = i, En;
}
var xn = {}, $l;
function oS() {
  if ($l)
    return xn;
  $l = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(d) {
        try {
          p(u.next(d));
        } catch (m) {
          l(m);
        }
      }
      function h(d) {
        try {
          p(u.throw(d));
        } catch (m) {
          l(m);
        }
      }
      function p(d) {
        d.done ? f(d.value) : o(d.value).then(v, h);
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
      return function(d) {
        return h([p, d]);
      };
    }
    function h(p) {
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
        } catch (d) {
          p = [6, d], o = 0;
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
  Object.defineProperty(xn, "__esModule", { value: !0 });
  var n = r(Gd()), i = (
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
  return xn.default = i, xn;
}
var jn = {}, Fl;
function sS() {
  if (Fl)
    return jn;
  Fl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(jn, "__esModule", { value: !0 });
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
  return jn.default = n, jn;
}
var Tn = {}, Nl;
function uS() {
  if (Nl)
    return Tn;
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
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Tn, "__esModule", { value: !0 });
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
  return Tn.default = n, Tn;
}
var Cn = {}, Il;
function cS() {
  if (Il)
    return Cn;
  Il = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Cn, "__esModule", { value: !0 });
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
  return Cn.default = n, Cn;
}
var An = {}, Dl;
function lS() {
  if (Dl)
    return An;
  Dl = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(An, "__esModule", { value: !0 });
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
  return An.default = n, An;
}
var $n = {}, kl;
function Kd() {
  if (kl)
    return $n;
  kl = 1;
  var e = P && P.__awaiter || function(s, c, u, o) {
    function f(l) {
      return l instanceof u ? l : new u(function(v) {
        v(l);
      });
    }
    return new (u || (u = Promise))(function(l, v) {
      function h(m) {
        try {
          d(o.next(m));
        } catch (g) {
          v(g);
        }
      }
      function p(m) {
        try {
          d(o.throw(m));
        } catch (g) {
          v(g);
        }
      }
      function d(m) {
        m.done ? l(m.value) : f(m.value).then(h, p);
      }
      d((o = o.apply(s, c || [])).next());
    });
  }, t = P && P.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (l[0] & 1)
        throw l[1];
      return l[1];
    }, trys: [], ops: [] }, o, f, l, v;
    return v = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(m) {
        return p([d, m]);
      };
    }
    function p(d) {
      if (o)
        throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (o = 1, f && (l = d[0] & 2 ? f.return : d[0] ? f.throw || ((l = f.return) && l.call(f), 0) : f.next) && !(l = l.call(f, d[1])).done)
            return l;
          switch (f = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
            case 0:
            case 1:
              l = d;
              break;
            case 4:
              return u.label++, { value: d[1], done: !1 };
            case 5:
              u.label++, f = d[1], d = [0];
              continue;
            case 7:
              d = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                u = 0;
                continue;
              }
              if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                u.label = d[1];
                break;
              }
              if (d[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = d;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(d);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          d = c.call(s, u);
        } catch (m) {
          d = [6, m], f = 0;
        } finally {
          o = l = 0;
        }
      if (d[0] & 5)
        throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty($n, "__esModule", { value: !0 });
  var n = r(Wd()), i = "/multi_search", a = (
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
          var h, p, d;
          return t(this, function(m) {
            return h = {}, this.useTextContentType && (h["content-type"] = "text/plain"), p = {}, this.configuration.useServerSideSearchCache === !0 && (p.use_cache = !0), d = Object.assign({}, u, p), [2, this.requestWithCache.perform(this.apiCall, this.apiCall.post, [i, c, d, h], { cacheResponseForSeconds: v })];
          });
        });
      }, s;
    }()
  );
  return $n.default = a, $n;
}
var Fn = {}, Ml;
function Jd() {
  if (Ml)
    return Fn;
  Ml = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Fn, "__esModule", { value: !0 });
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
  return Fn.default = n, Fn;
}
var Nn = {}, Hl;
function fS() {
  if (Hl)
    return Nn;
  Hl = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(d) {
        try {
          p(u.next(d));
        } catch (m) {
          l(m);
        }
      }
      function h(d) {
        try {
          p(u.throw(d));
        } catch (m) {
          l(m);
        }
      }
      function p(d) {
        d.done ? f(d.value) : o(d.value).then(v, h);
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
      return function(d) {
        return h([p, d]);
      };
    }
    function h(p) {
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
        } catch (d) {
          p = [6, d], o = 0;
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
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  var n = r(Jd()), i = (
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
  return Nn.default = i, Nn;
}
var In = {}, Dn = {}, Ll;
function Xd() {
  if (Ll)
    return Dn;
  Ll = 1;
  var e = P && P.__awaiter || function(i, a, s, c) {
    function u(o) {
      return o instanceof s ? o : new s(function(f) {
        f(o);
      });
    }
    return new (s || (s = Promise))(function(o, f) {
      function l(p) {
        try {
          h(c.next(p));
        } catch (d) {
          f(d);
        }
      }
      function v(p) {
        try {
          h(c.throw(p));
        } catch (d) {
          f(d);
        }
      }
      function h(p) {
        p.done ? o(p.value) : u(p.value).then(l, v);
      }
      h((c = c.apply(i, a || [])).next());
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
    function l(h) {
      return function(p) {
        return v([h, p]);
      };
    }
    function v(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (c = 1, u && (o = h[0] & 2 ? u.return : h[0] ? u.throw || ((o = u.return) && o.call(u), 0) : u.next) && !(o = o.call(u, h[1])).done)
            return o;
          switch (u = 0, o && (h = [h[0] & 2, o.value]), h[0]) {
            case 0:
            case 1:
              o = h;
              break;
            case 4:
              return s.label++, { value: h[1], done: !1 };
            case 5:
              s.label++, u = h[1], h = [0];
              continue;
            case 7:
              h = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                s = 0;
                continue;
              }
              if (h[0] === 3 && (!o || h[1] > o[0] && h[1] < o[3])) {
                s.label = h[1];
                break;
              }
              if (h[0] === 6 && s.label < o[1]) {
                s.label = o[1], o = h;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(h);
                break;
              }
              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          h = a.call(i, s);
        } catch (p) {
          h = [6, p], u = 0;
        } finally {
          c = o = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Dn, "__esModule", { value: !0 });
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
  return Dn.default = n, Dn;
}
var kn = {}, ql;
function dS() {
  if (ql)
    return kn;
  ql = 1;
  var e = P && P.__awaiter || function(a, s, c, u) {
    function o(f) {
      return f instanceof c ? f : new c(function(l) {
        l(f);
      });
    }
    return new (c || (c = Promise))(function(f, l) {
      function v(d) {
        try {
          p(u.next(d));
        } catch (m) {
          l(m);
        }
      }
      function h(d) {
        try {
          p(u.throw(d));
        } catch (m) {
          l(m);
        }
      }
      function p(d) {
        d.done ? f(d.value) : o(d.value).then(v, h);
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
      return function(d) {
        return h([p, d]);
      };
    }
    function h(p) {
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
        } catch (d) {
          p = [6, d], o = 0;
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
  Object.defineProperty(kn, "__esModule", { value: !0 });
  var n = r(Xd()), i = (
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
  return kn.default = i, kn;
}
var Ul;
function hS() {
  if (Ul)
    return In;
  Ul = 1;
  var e = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(In, "__esModule", { value: !0 });
  var t = e(Xd()), r = e(dS()), n = "/analytics", i = (
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
  return In.default = i, In;
}
var Wl;
function pS() {
  if (Wl)
    return tn;
  Wl = 1;
  var e = P && P.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(tn, "__esModule", { value: !0 });
  var t = e(Fd()), r = e(Ud()), n = e(bt()), i = e(tS()), a = e(Yd()), s = e(rS()), c = e(Gd()), u = e(oS()), o = e(sS()), f = e(uS()), l = e(cS()), v = e(lS()), h = e(Kd()), p = e(Jd()), d = e(fS()), m = e(hS()), g = (
    /** @class */
    function() {
      function _(w) {
        var b;
        w.sendApiKeyAsQueryParam = (b = w.sendApiKeyAsQueryParam) !== null && b !== void 0 ? b : !1, this.configuration = new t.default(w), this.apiCall = new r.default(this.configuration), this.debug = new o.default(this.apiCall), this.metrics = new f.default(this.apiCall), this.health = new l.default(this.apiCall), this.operations = new v.default(this.apiCall), this.multiSearch = new h.default(this.apiCall, this.configuration), this._collections = new n.default(this.apiCall), this.individualCollections = {}, this._aliases = new a.default(this.apiCall), this.individualAliases = {}, this._keys = new c.default(this.apiCall), this.individualKeys = {}, this._presets = new p.default(this.apiCall), this.individualPresets = {}, this.analytics = new m.default(this.apiCall);
      }
      return _.prototype.collections = function(w) {
        return w === void 0 ? this._collections : (this.individualCollections[w] === void 0 && (this.individualCollections[w] = new i.default(w, this.apiCall, this.configuration)), this.individualCollections[w]);
      }, _.prototype.aliases = function(w) {
        return w === void 0 ? this._aliases : (this.individualAliases[w] === void 0 && (this.individualAliases[w] = new s.default(w, this.apiCall)), this.individualAliases[w]);
      }, _.prototype.keys = function(w) {
        return w === void 0 ? this._keys : (this.individualKeys[w] === void 0 && (this.individualKeys[w] = new u.default(w, this.apiCall)), this.individualKeys[w]);
      }, _.prototype.presets = function(w) {
        return w === void 0 ? this._presets : (this.individualPresets[w] === void 0 && (this.individualPresets[w] = new d.default(w, this.apiCall)), this.individualPresets[w]);
      }, _;
    }()
  );
  return tn.default = g, tn;
}
var Mn = {}, ir = {}, Bl;
function vS() {
  if (Bl)
    return ir;
  Bl = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.SearchOnlyCollection = void 0;
  var e = Bd(), t = (
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
  return ir.SearchOnlyCollection = t, ir;
}
var Vl;
function mS() {
  if (Vl)
    return Mn;
  Vl = 1;
  var e = P && P.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  var t = e(Fd()), r = e(Ud()), n = e(Kd()), i = vS(), a = (
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
  return Mn.default = a, Mn;
}
var zl;
function gS() {
  if (zl)
    return nt;
  zl = 1;
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
  Object.defineProperty(nt, "__esModule", { value: !0 }), nt.Errors = nt.SearchClient = nt.Client = void 0;
  var i = n(pS());
  nt.Client = i.default;
  var a = n(mS());
  nt.SearchClient = a.default;
  var s = r(Vr());
  return nt.Errors = s, nt.default = { Client: i.default, SearchClient: a.default, Errors: s }, nt;
}
var ar = {}, va = { exports: {} }, ma = { exports: {} }, Ql;
function yS() {
  return Ql || (Ql = 1, function(e) {
    function t(r) {
      if (Array.isArray(r))
        return r;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ma)), ma.exports;
}
var ga = { exports: {} }, Yl;
function bS() {
  return Yl || (Yl = 1, function(e) {
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
  }(ga)), ga.exports;
}
var ya = { exports: {} }, ba = { exports: {} }, Gl;
function Zd() {
  return Gl || (Gl = 1, function(e) {
    function t(r, n) {
      (n == null || n > r.length) && (n = r.length);
      for (var i = 0, a = new Array(n); i < n; i++)
        a[i] = r[i];
      return a;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ba)), ba.exports;
}
var Kl;
function eh() {
  return Kl || (Kl = 1, function(e) {
    var t = Zd();
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
  }(ya)), ya.exports;
}
var wa = { exports: {} }, Jl;
function wS() {
  return Jl || (Jl = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(wa)), wa.exports;
}
var Xl;
function th() {
  return Xl || (Xl = 1, function(e) {
    var t = yS(), r = bS(), n = eh(), i = wS();
    function a(s, c) {
      return t(s) || r(s, c) || n(s, c) || i();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(va)), va.exports;
}
var Zl;
function _S() {
  if (Zl)
    return ar;
  Zl = 1;
  var e = Ur;
  Object.defineProperty(ar, "__esModule", {
    value: !0
  }), ar.SearchRequestAdapter = void 0;
  var t = e(Cd()), r = e(Ad()), n = e(th()), i = e(Wr()), a = e(Br()), s = /* @__PURE__ */ function() {
    function c(u, o, f) {
      (0, i.default)(this, c), this.instantsearchRequests = u, this.typesenseClient = o, this.configuration = f, this.additionalSearchParameters = f.additionalSearchParameters, this.collectionSpecificSearchParameters = f.collectionSpecificSearchParameters;
    }
    return (0, a.default)(c, [{
      key: "_adaptFacetFilters",
      value: function(o) {
        var f = this, l = "";
        if (!o)
          return l;
        var v = o.map(function(h) {
          if (Array.isArray(h)) {
            var p = {};
            h.forEach(function(L) {
              var k = f._parseFacetFilter(L), A = k.fieldName, ee = k.fieldValue;
              p[A] = p[A] || [], p[A].push(ee);
            }), Object.keys(p).length > 1 && console.error("[Typesense-Instantsearch-Adapter] Typesense does not support cross-field ORs at the moment. The adapter could not OR values between these fields: ".concat(Object.keys(p).join(",")));
            var d = Object.keys(p)[0], m = p[d], g = m.reduce(function(L, k) {
              return k.startsWith("-") && !f._isNumber(k) ? L[0].push(k.substring(1)) : L[1].push(k), L;
            }, [[], []]), _ = (0, n.default)(g, 2), w = _[0], b = _[1], y = [];
            b.length > 0 && y.push("".concat(d, ":=[").concat(b.map(function(L) {
              return f._escapeFacetValue(L);
            }).join(","), "]")), w.length > 0 && y.push("".concat(d, ":!=[").concat(w.map(function(L) {
              return f._escapeFacetValue(L);
            }).join(","), "]"));
            var j = y.filter(function(L) {
              return L;
            }).join(" && ");
            return j;
          } else {
            var F = f._parseFacetFilter(h), R = F.fieldName, q = F.fieldValue, V;
            return q.startsWith("-") && !f._isNumber(q) ? V = "".concat(R, ":!=[").concat(f._escapeFacetValue(q.substring(1)), "]") : V = "".concat(R, ":=[").concat(f._escapeFacetValue(q), "]"), V;
          }
        });
        return l = v.join(" && "), l;
      }
    }, {
      key: "_parseFacetFilter",
      value: function(o) {
        var f, l, v, h, p;
        if (((f = this.configuration.facetableFieldsWithSpecialCharacters) === null || f === void 0 ? void 0 : f.length) > 0) {
          var d = this.configuration.facetableFieldsWithSpecialCharacters.flat().map(function(m) {
            return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          });
          if (l = new RegExp("^(".concat(d.join("|"), "):(.*)$")), v = o.match(l), v != null)
            return h = "".concat(v[1]), p = "".concat(v[2]), {
              fieldName: h,
              fieldValue: p
            };
        }
        return l = this.constructor.DEFAULT_FACET_FILTER_STRING_MATCHING_REGEX, v = o.match(l), v == null ? console.error("[Typesense-Instantsearch-Adapter] Parsing failed for a facet filter `".concat(o, "` with the Regex `").concat(l, "`. If you have field names with special characters, be sure to add them to a parameter called `facetableFieldsWithSpecialCharacters` when instantiating the adapter.")) : (h = "".concat(v[1]).concat(v[2]), p = "".concat(v[3])), {
          fieldName: h,
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
          var d = f._parseNumericFilter(p), m = d.fieldName, g = d.operator, _ = d.fieldValue;
          v[m] = v[m] || {}, v[m][g] = _;
        });
        var h = [];
        return Object.keys(v).forEach(function(p) {
          v[p]["<="] != null && v[p][">="] != null ? h.push("".concat(p, ":=[").concat(v[p][">="], "..").concat(v[p]["<="], "]")) : v[p]["<="] != null ? h.push("".concat(p, ":<=").concat(v[p]["<="])) : v[p][">="] != null ? h.push("".concat(p, ":>=").concat(v[p][">="])) : v[p]["="] != null ? h.push("".concat(p, ":=").concat(v[p]["="])) : console.warn("[Typesense-Instantsearch-Adapter] Unsupported operator found ".concat(JSON.stringify(v[p])));
        }), l = h.join(" && "), l;
      }
    }, {
      key: "_parseNumericFilter",
      value: function(o) {
        var f, l, v, h, p, d;
        if (((f = this.configuration.facetableFieldsWithSpecialCharacters) === null || f === void 0 ? void 0 : f.length) > 0) {
          var m = this.configuration.facetableFieldsWithSpecialCharacters.map(function(y) {
            return y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          });
          if (l = new RegExp("^(".concat(m.join("|"), ")(<=|>=|>|<|=)(.*)$")), v = o.match(l), v != null) {
            var g = v, _ = (0, n.default)(g, 4);
            return h = _[1], p = _[2], d = _[3], {
              fieldName: h,
              operator: p,
              fieldValue: d
            };
          }
        }
        if (l = this.constructor.DEFAULT_NUMERIC_FILTER_STRING_MATCHING_REGEX, v = o.match(l), v == null)
          console.error("[Typesense-Instantsearch-Adapter] Parsing failed for a numeric filter `".concat(o, "` with the Regex `").concat(l, "`. If you have field names with special characters, be sure to add them to a parameter called `facetableFieldsWithSpecialCharacters` when instantiating the adapter."));
        else {
          var w = v, b = (0, n.default)(w, 4);
          h = b[1], p = b[2], d = b[3];
        }
        return {
          fieldName: h,
          operator: p,
          fieldValue: d
        };
      }
    }, {
      key: "_adaptGeoFilter",
      value: function(o) {
        var f = o.insideBoundingBox, l = o.aroundRadius, v = o.aroundLatLng, h = o.insidePolygon;
        if (f) {
          var p, d, m, g;
          if (Array.isArray(f)) {
            var _ = f.flat(), w = (0, n.default)(_, 4);
            p = w[0], d = w[1], m = w[2], g = w[3];
          } else {
            var b = f.split(","), y = (0, n.default)(b, 4);
            p = y[0], d = y[1], m = y[2], g = y[3];
          }
          return "".concat(this.configuration.geoLocationField, ":(").concat(p, ", ").concat(d, ", ").concat(p, ", ").concat(g, ", ").concat(m, ", ").concat(g, ", ").concat(m, ", ").concat(d, ")");
        }
        if (v || l) {
          if (!l || l === "all")
            throw new Error("[Typesense-Instantsearch-Adapter] In Typesense, geo-filtering around a lat/lng also requires a numerical radius. So the `aroundRadius` parameter is required when `aroundLatLng` is used. If you intend to just geo-sort around a lat/long, you want to use the sortBy InstantSearch widget (or a virtual sortBy custom widget).");
          var j = "".concat(parseFloat(l) / 1e3, " km");
          return "".concat(this.configuration.geoLocationField, ":(").concat(v, ", ").concat(j, ")");
        }
        if (h) {
          var F = h;
          return Array.isArray(h) && (F = h.flat().join(",")), "".concat(this.configuration.geoLocationField, ":(").concat(F, ")");
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
        for (var f = o.params, l = o.indexName, v = this._adaptIndexName(l), h = {}, p = 0, d = Object.entries(this.additionalSearchParameters); p < d.length; p++) {
          var m = (0, n.default)(d[p], 2), g = m[0], _ = m[1];
          h[this._camelToSnakeCase(g)] = _;
        }
        if (this.collectionSpecificSearchParameters[v])
          for (var w = 0, b = Object.entries(this.collectionSpecificSearchParameters[v]); w < b.length; w++) {
            var y = (0, n.default)(b[w], 2), j = y[0], F = y[1];
            h[this._camelToSnakeCase(j)] = F;
          }
        var R = Object.assign({}, h), q = this._adaptSortBy(l);
        return Object.assign(R, {
          collection: v,
          q: f.query === "" || f.query === void 0 ? "*" : f.query,
          facet_by: [f.facets].flat().join(","),
          filter_by: this._adaptFilters(f) || h.filter_by,
          sort_by: q || h.sort_by,
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
                  return v = this.instantsearchRequests.map(function(d) {
                    return l._buildSearchParameters(d);
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
  return ar.SearchRequestAdapter = s, ar;
}
var or = {}, _a = { exports: {} }, Sa = { exports: {} }, ef;
function SS() {
  return ef || (ef = 1, function(e) {
    var t = Zd();
    function r(n) {
      if (Array.isArray(n))
        return t(n);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Sa)), Sa.exports;
}
var Oa = { exports: {} }, tf;
function OS() {
  return tf || (tf = 1, function(e) {
    function t(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Oa)), Oa.exports;
}
var Ra = { exports: {} }, rf;
function RS() {
  return rf || (rf = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ra)), Ra.exports;
}
var nf;
function PS() {
  return nf || (nf = 1, function(e) {
    var t = SS(), r = OS(), n = eh(), i = RS();
    function a(s) {
      return t(s) || r(s) || n(s) || i();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(_a)), _a.exports;
}
var Pa = { exports: {} }, af;
function ES() {
  return af || (af = 1, function(e) {
    var t = $d();
    function r(n, i, a) {
      return i = t(i), i in n ? Object.defineProperty(n, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : n[i] = a, n;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Pa)), Pa.exports;
}
var sr = {}, of;
function rh() {
  if (of)
    return sr;
  of = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.utils = void 0;
  var e = {
    _adaptHighlightTag: function(r, n, i) {
      return r.replace(new RegExp("<mark>", "g"), n || "<mark>").replace(new RegExp("</mark>", "g"), i || "</mark>");
    },
    _adaptNumberOfPages: function() {
      var r = this.typesenseResponse.found / this.typesenseResponse.request_params.per_page;
      return Number.isFinite(r) ? Math.ceil(r) : 1;
    }
  };
  return sr.utils = e, sr;
}
var sf;
function xS() {
  if (sf)
    return or;
  sf = 1;
  var e = Ur;
  Object.defineProperty(or, "__esModule", {
    value: !0
  }), or.SearchResponseAdapter = void 0;
  var t = e(ti()), r = e(th()), n = e(PS()), i = e(ES()), a = e(Wr()), s = e(Br()), c = rh();
  function u(l, v) {
    var h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(l);
      v && (p = p.filter(function(d) {
        return Object.getOwnPropertyDescriptor(l, d).enumerable;
      })), h.push.apply(h, p);
    }
    return h;
  }
  function o(l) {
    for (var v = 1; v < arguments.length; v++) {
      var h = arguments[v] != null ? arguments[v] : {};
      v % 2 ? u(Object(h), !0).forEach(function(p) {
        (0, i.default)(l, p, h[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : u(Object(h)).forEach(function(p) {
        Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(h, p));
      });
    }
    return l;
  }
  var f = /* @__PURE__ */ function() {
    function l(v, h, p) {
      var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      (0, a.default)(this, l), this.typesenseResponse = v, this.instantsearchRequest = h, this.configuration = p, this.allTypesenseResponses = d;
    }
    return (0, s.default)(l, [{
      key: "_adaptGroupedHits",
      value: function(h) {
        var p = this, d = [];
        return d = h.map(function(m) {
          var g = p._adaptHits(m.hits);
          return g.forEach(function(_) {
            _.group_key = _._group_key = m.group_key, m.found && (_._group_found = m.found);
          }), g;
        }), this.configuration.flattenGroupedHits ? d = d.flat() : d = d.map(function(m) {
          return o(o({}, m[0]), {}, {
            _grouped_hits: m
          });
        }), d;
      }
    }, {
      key: "_adaptHits",
      value: function(h) {
        var p = this, d = [];
        return d = h.map(function(m) {
          var g = o({}, m.document);
          g.objectID = m.document.id, g._snippetResult = p._adaptHighlightResult(m, "snippet"), g._highlightResult = p._adaptHighlightResult(m, "value"), g._rawTypesenseHit = m, ["text_match", "geo_distance_meters", "curated", "text_match_info", "hybrid_search_info", "vector_distance"].forEach(function(w) {
            Object.keys(m).includes(w) && !Object.keys(g).includes(w) && (g[w] = m[w]);
          });
          var _ = g[p.configuration.geoLocationField];
          return _ && (g._geoloc = {
            lat: _[0],
            lng: _[1]
          }), g;
        }), d;
      }
    }, {
      key: "_adaptHighlightResult",
      value: function(h, p) {
        var d = {};
        return h.highlight != null && this.isHighlightPost0240RCN32Format(h.highlight) ? this.adaptHighlightObject(h, d, p) : this.adaptHighlightsArray(h, d, p), d;
      }
    }, {
      key: "isHighlightPost0240RCN32Format",
      value: function(h) {
        return h.full == null && h.snippet == null;
      }
    }, {
      key: "adaptHighlightsArray",
      value: function(h, p, d) {
        var m = this;
        Object.assign.apply(Object, [p].concat((0, n.default)(Object.entries(h.document).map(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1];
          return (0, i.default)({}, w, {
            value: b,
            matchLevel: "none",
            matchedWords: []
          });
        })))), h.highlights.forEach(function(g) {
          p[g.field] = {
            value: g[d] || g["".concat(d, "s")],
            matchLevel: "full",
            matchedWords: g.matched_tokens
          }, g.indices && (p[g.field].matchedIndices = g.indices);
        }), Object.entries(p).forEach(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1], y = w, j = b.value, F = b.matchLevel, R = b.matchedWords, q = b.matchedIndices;
          j == null ? p[y] = m._adaptHighlightNullValue() : Array.isArray(j) ? (p[y] = [], h.document[y].forEach(function(V, L) {
            q && q.includes(L) ? p[y].push({
              value: m._adaptHighlightTag("".concat(j[q.indexOf(L)]), m.instantsearchRequest.params.highlightPreTag, m.instantsearchRequest.params.highlightPostTag),
              matchLevel: F,
              matchedWords: R[L]
            }) : (0, t.default)(V) === "object" ? p[y].push(m._adaptHighlightInObjectValue(V, {}, d)) : p[y].push({
              value: "".concat(V),
              matchLevel: "none",
              matchedWords: []
            });
          })) : (0, t.default)(j) === "object" ? p[y] = m._adaptHighlightInObjectValue(j, {}, d) : p[y].value = m._adaptHighlightTag("".concat(j), m.instantsearchRequest.params.highlightPreTag, m.instantsearchRequest.params.highlightPostTag);
        });
      }
    }, {
      key: "adaptHighlightObject",
      value: function(h, p, d) {
        Object.assign(p, this._adaptHighlightInObjectValue(h.document, h.highlight, d));
      }
    }, {
      key: "_adaptHighlightInObjectValue",
      value: function(h, p, d) {
        var m = this;
        return Object.assign.apply(Object, [{}].concat((0, n.default)(Object.entries(h).map(function(g) {
          var _ = (0, r.default)(g, 2), w = _[0], b = _[1], y;
          if (b == null)
            y = m._adaptHighlightNullValue();
          else if (Array.isArray(b)) {
            var j;
            y = m._adaptHighlightInArrayValue(b, (j = p == null ? void 0 : p[w]) !== null && j !== void 0 ? j : [], d);
          } else if ((0, t.default)(b) === "object") {
            var F;
            y = m._adaptHighlightInObjectValue(b, (F = p == null ? void 0 : p[w]) !== null && F !== void 0 ? F : {}, d);
          } else
            y = m._adaptHighlightInPrimitiveValue(b, p == null ? void 0 : p[w], d);
          return (0, i.default)({}, w, y);
        }))));
      }
    }, {
      key: "_adaptHighlightInArrayValue",
      value: function(h, p, d) {
        var m = this;
        return h.map(function(g, _) {
          var w;
          if (g == null)
            w = m._adaptHighlightNullValue();
          else if (Array.isArray(g)) {
            var b;
            w = m._adaptHighlightInArrayValue(g, (b = p == null ? void 0 : p[_]) !== null && b !== void 0 ? b : [], d);
          } else if ((0, t.default)(g) === "object") {
            var y;
            w = m._adaptHighlightInObjectValue(g, (y = p == null ? void 0 : p[_]) !== null && y !== void 0 ? y : {}, d);
          } else
            w = m._adaptHighlightInPrimitiveValue(g, p == null ? void 0 : p[_], d);
          return w;
        });
      }
    }, {
      key: "_adaptHighlightInPrimitiveValue",
      value: function(h, p, d) {
        if (p != null) {
          var m, g;
          return {
            value: this._adaptHighlightTag("".concat((m = (g = p[d]) !== null && g !== void 0 ? g : p.highlight) !== null && m !== void 0 ? m : p.snippet), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag),
            matchLevel: (p.matched_tokens || []).length > 0 ? "full" : "none",
            matchedWords: p.matched_tokens || []
          };
        } else
          return {
            // Convert all values to strings
            value: this._adaptHighlightTag("".concat(h), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag),
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
      value: function(h) {
        var p = {};
        return h.forEach(function(d) {
          Object.assign(p, (0, i.default)({}, d.field_name, Object.assign.apply(Object, [{}].concat((0, n.default)(d.counts.map(function(m) {
            return (0, i.default)({}, m.value, m.count);
          }))))));
        }), p;
      }
    }, {
      key: "_adaptFacetStats",
      value: function(h) {
        var p = {};
        return h.forEach(function(d) {
          Object.keys(d.stats).length > 0 && Object.assign(p, (0, i.default)({}, d.field_name, d.stats));
        }), p;
      }
    }, {
      key: "_adaptRenderingContent",
      value: function(h) {
        var p, d = Object.assign({}, this.configuration.renderingContent);
        return ((p = d.facetOrdering) === null || p === void 0 || (p = p.facets) === null || p === void 0 ? void 0 : p.order) == null && (d.facetOrdering = d.facetOrdering || {}, d.facetOrdering.facets = d.facetOrdering.facets || {}, d.facetOrdering.facets.order = (0, n.default)(new Set(h.map(function(m) {
          return m.field_name;
        }).concat(this.allTypesenseResponses.map(function(m) {
          return m.facet_counts || [];
        }).flat().map(function(m) {
          return m.field_name;
        }).filter(function(m) {
          return m;
        }))))), d;
      }
    }, {
      key: "adapt",
      value: function() {
        var h = this._adaptRenderingContent(this.typesenseResponse.facet_counts || []), p = o({
          hits: this.typesenseResponse.grouped_hits ? this._adaptGroupedHits(this.typesenseResponse.grouped_hits) : this._adaptHits(this.typesenseResponse.hits),
          nbHits: this.typesenseResponse.found,
          page: this.typesenseResponse.page - 1,
          nbPages: this._adaptNumberOfPages(),
          hitsPerPage: this.typesenseResponse.request_params.per_page,
          facets: this._adaptFacets(this.typesenseResponse.facet_counts || []),
          facets_stats: this._adaptFacetStats(this.typesenseResponse.facet_counts || {}),
          query: this.typesenseResponse.request_params.q,
          processingTimeMS: this.typesenseResponse.search_time_ms
        }, Object.keys(h).length > 0 ? {
          renderingContent: h
        } : null);
        return p;
      }
    }]), l;
  }();
  return or.SearchResponseAdapter = f, Object.assign(f.prototype, c.utils), or;
}
var ur = {}, uf;
function jS() {
  if (uf)
    return ur;
  uf = 1;
  var e = Ur;
  Object.defineProperty(ur, "__esModule", {
    value: !0
  }), ur.FacetSearchResponseAdapter = void 0;
  var t = e(Wr()), r = e(Br()), n = rh(), i = /* @__PURE__ */ function() {
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
  return ur.FacetSearchResponseAdapter = i, Object.assign(i.prototype, n.utils), ur;
}
(function(e) {
  var t = Ur;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Cd()), n = t(Ad()), i = t(Wr()), a = t(Br()), s = O_(), c = gS(), u = _S(), o = xS(), f = jS(), l = /* @__PURE__ */ function() {
    function v(h) {
      var p = this;
      (0, i.default)(this, v), this.updateConfiguration(h), this.searchClient = {
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
        var h = (0, n.default)(/* @__PURE__ */ r.default.mark(function d(m) {
          var g = this, _, w;
          return r.default.wrap(function(y) {
            for (; ; )
              switch (y.prev = y.next) {
                case 0:
                  return y.prev = 0, y.next = 3, this._adaptAndPerformTypesenseRequest(m);
                case 3:
                  return _ = y.sent, w = _.results.map(function(j, F) {
                    g._validateTypesenseResult(j);
                    var R = new o.SearchResponseAdapter(j, m[F], g.configuration, _.results);
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
          }, d, this, [[0, 8]]);
        }));
        function p(d) {
          return h.apply(this, arguments);
        }
        return p;
      }()
    }, {
      key: "searchTypesenseForFacetValuesAndAdapt",
      value: function() {
        var h = (0, n.default)(/* @__PURE__ */ r.default.mark(function d(m) {
          var g = this, _, w;
          return r.default.wrap(function(y) {
            for (; ; )
              switch (y.prev = y.next) {
                case 0:
                  return y.prev = 0, y.next = 3, this._adaptAndPerformTypesenseRequest(m);
                case 3:
                  return _ = y.sent, w = _.results.map(function(j, F) {
                    g._validateTypesenseResult(j);
                    var R = new f.FacetSearchResponseAdapter(j, m[F], g.configuration);
                    return R.adapt();
                  }), y.abrupt("return", w);
                case 8:
                  throw y.prev = 8, y.t0 = y.catch(0), console.error(y.t0), y.t0;
                case 12:
                case "end":
                  return y.stop();
              }
          }, d, this, [[0, 8]]);
        }));
        function p(d) {
          return h.apply(this, arguments);
        }
        return p;
      }()
    }, {
      key: "_adaptAndPerformTypesenseRequest",
      value: function() {
        var h = (0, n.default)(/* @__PURE__ */ r.default.mark(function d(m) {
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
          }, d, this);
        }));
        function p(d) {
          return h.apply(this, arguments);
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
})(jd);
const TS = /* @__PURE__ */ Wt(jd), CS = new TS({
  server: {
    apiKey: "iXBpAN5Id2sDFWKh11XxGkd5mRgqu0w5",
    nodes: [
      {
        host: "i74olkjcuy69ze2vp-1.a1.typesense.net",
        port: "443",
        protocol: "https"
      }
    ]
  },
  additionalSearchParameters: {
    // We might not want to search by all fields, but the
    // alternative was to figure out a way to set this
    // after the UUIDs are mapped to JWTs, which
    // sounds pretty complex!
    query_by: "*",
    // Snippet functionality
    highlight_affix_num_tokens: 40
  }
}), ls = CS.searchClient, AS = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => /* @__PURE__ */ te.jsx($o, { children: /* @__PURE__ */ te.jsx(
  zo,
  {
    indexName: "bischoff",
    searchClient: ls,
    children: /* @__PURE__ */ te.jsx(
      us,
      {
        locale: e,
        onHitClick: t,
        project: "bischoff",
        hitWrapperComponent: r,
        getHitWrapperProps: n
      }
    )
  }
) }), $S = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => /* @__PURE__ */ te.jsx($o, { children: /* @__PURE__ */ te.jsx(
  zo,
  {
    indexName: "rumpf",
    searchClient: ls,
    children: /* @__PURE__ */ te.jsx(
      us,
      {
        locale: e,
        onHitClick: t,
        project: "rumpf",
        hitWrapperComponent: r,
        getHitWrapperProps: n
      }
    )
  }
) }), FS = ({ locale: e, onHitClick: t, hitWrapperComponent: r, getHitWrapperProps: n }) => /* @__PURE__ */ te.jsx($o, { children: /* @__PURE__ */ te.jsx(
  zo,
  {
    indexName: "supplique",
    searchClient: ls,
    children: /* @__PURE__ */ te.jsx(
      us,
      {
        locale: e,
        onHitClick: t,
        project: "supplique",
        hitWrapperComponent: r,
        getHitWrapperProps: n,
        children: /* @__PURE__ */ te.jsx(te.Fragment, {})
      }
    )
  }
) }), IS = {
  Bischoff: AS,
  Rumpf: $S,
  SuppliquePolitique: FS
};
export {
  IS as default
};
