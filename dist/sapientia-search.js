import * as te from "react";
import U, { useRef as ut, useContext as Kt, createElement as sl, createContext as Qn, useState as Et, useLayoutEffect as ul, useEffect as Pt, useMemo as La, useReducer as cl, useCallback as ll, version as fl, Fragment as dl, forwardRef as Je } from "react";
var hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ai = { exports: {} }, yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function pl() {
  if (To)
    return yr;
  To = 1;
  var e = U, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, c, u) {
    var l, f = {}, h = null, d = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (d = c.ref);
    for (l in c)
      n.call(c, l) && !a.hasOwnProperty(l) && (f[l] = c[l]);
    if (s && s.defaultProps)
      for (l in c = s.defaultProps, c)
        f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: s, key: h, ref: d, props: f, _owner: i.current };
  }
  return yr.Fragment = r, yr.jsx = o, yr.jsxs = o, yr;
}
var br = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function vl() {
  return Ao || (Ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.iterator, m = "@@iterator";
    function g(O) {
      if (O === null || typeof O != "object")
        return null;
      var k = p && O[p] || O[m];
      return typeof k == "function" ? k : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(O) {
      {
        for (var k = arguments.length, M = new Array(k > 1 ? k - 1 : 0), ie = 1; ie < k; ie++)
          M[ie - 1] = arguments[ie];
        b("error", O, M);
      }
    }
    function b(O, k, M) {
      {
        var ie = R.ReactDebugCurrentFrame, ce = ie.getStackAddendum();
        ce !== "" && (k += "%s", M = M.concat([ce]));
        var me = M.map(function(ve) {
          return String(ve);
        });
        me.unshift("Warning: " + k), Function.prototype.apply.call(console[O], console, me);
      }
    }
    var S = !1, v = !1, E = !1, j = !1, D = !1, w;
    w = Symbol.for("react.module.reference");
    function _(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === a || D || O === i || O === u || O === l || j || O === d || S || v || E || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === f || O.$$typeof === o || O.$$typeof === s || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === w || O.getModuleId !== void 0));
    }
    function W(O, k, M) {
      var ie = O.displayName;
      if (ie)
        return ie;
      var ce = k.displayName || k.name || "";
      return ce !== "" ? M + "(" + ce + ")" : M;
    }
    function Z(O) {
      return O.displayName || "Context";
    }
    function F(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case s:
            var k = O;
            return Z(k) + ".Consumer";
          case o:
            var M = O;
            return Z(M._context) + ".Provider";
          case c:
            return W(O, O.render, "ForwardRef");
          case f:
            var ie = O.displayName || null;
            return ie !== null ? ie : F(O.type) || "Memo";
          case h: {
            var ce = O, me = ce._payload, ve = ce._init;
            try {
              return F(ve(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, re = 0, oe, J, z, ae, C, L, I;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function N() {
      {
        if (re === 0) {
          oe = console.log, J = console.info, z = console.warn, ae = console.error, C = console.group, L = console.groupCollapsed, I = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        re++;
      }
    }
    function B() {
      {
        if (re--, re === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, O, {
              value: oe
            }),
            info: Y({}, O, {
              value: J
            }),
            warn: Y({}, O, {
              value: z
            }),
            error: Y({}, O, {
              value: ae
            }),
            group: Y({}, O, {
              value: C
            }),
            groupCollapsed: Y({}, O, {
              value: L
            }),
            groupEnd: Y({}, O, {
              value: I
            })
          });
        }
        re < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = R.ReactCurrentDispatcher, Q;
    function T(O, k, M) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ie = ce.stack.trim().match(/\n( *(at )?)/);
            Q = ie && ie[1] || "";
          }
        return `
` + Q + O;
      }
    }
    var ee = !1, K;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      K = new H();
    }
    function x(O, k) {
      if (!O || ee)
        return "";
      {
        var M = K.get(O);
        if (M !== void 0)
          return M;
      }
      var ie;
      ee = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = P.current, P.current = null, N();
      try {
        if (k) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (St) {
              ie = St;
            }
            Reflect.construct(O, [], ve);
          } else {
            try {
              ve.call();
            } catch (St) {
              ie = St;
            }
            O.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            ie = St;
          }
          O();
        }
      } catch (St) {
        if (St && ie && typeof St.stack == "string") {
          for (var he = St.stack.split(`
`), He = ie.stack.split(`
`), Ie = he.length - 1, ke = He.length - 1; Ie >= 1 && ke >= 0 && he[Ie] !== He[ke]; )
            ke--;
          for (; Ie >= 1 && ke >= 0; Ie--, ke--)
            if (he[Ie] !== He[ke]) {
              if (Ie !== 1 || ke !== 1)
                do
                  if (Ie--, ke--, ke < 0 || he[Ie] !== He[ke]) {
                    var Ve = `
` + he[Ie].replace(" at new ", " at ");
                    return O.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", O.displayName)), typeof O == "function" && K.set(O, Ve), Ve;
                  }
                while (Ie >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        ee = !1, P.current = me, B(), Error.prepareStackTrace = ce;
      }
      var Ft = O ? O.displayName || O.name : "", jo = Ft ? T(Ft) : "";
      return typeof O == "function" && K.set(O, jo), jo;
    }
    function fe(O, k, M) {
      return x(O, !1);
    }
    function pe(O) {
      var k = O.prototype;
      return !!(k && k.isReactComponent);
    }
    function ue(O, k, M) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return x(O, pe(O));
      if (typeof O == "string")
        return T(O);
      switch (O) {
        case u:
          return T("Suspense");
        case l:
          return T("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return fe(O.render);
          case f:
            return ue(O.type, k, M);
          case h: {
            var ie = O, ce = ie._payload, me = ie._init;
            try {
              return ue(me(ce), k, M);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, de = {}, xe = R.ReactDebugCurrentFrame;
    function qe(O) {
      if (O) {
        var k = O._owner, M = ue(O.type, O._source, k ? k.type : null);
        xe.setExtraStackFrame(M);
      } else
        xe.setExtraStackFrame(null);
    }
    function Le(O, k, M, ie, ce) {
      {
        var me = Function.call.bind(je);
        for (var ve in O)
          if (me(O, ve)) {
            var he = void 0;
            try {
              if (typeof O[ve] != "function") {
                var He = Error((ie || "React class") + ": " + M + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              he = O[ve](k, ve, ie, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              he = Ie;
            }
            he && !(he instanceof Error) && (qe(ce), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", M, ve, typeof he), qe(null)), he instanceof Error && !(he.message in de) && (de[he.message] = !0, qe(ce), y("Failed %s type: %s", M, he.message), qe(null));
          }
      }
    }
    var ct = Array.isArray;
    function lt(O) {
      return ct(O);
    }
    function Ke(O) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, M = k && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return M;
      }
    }
    function le(O) {
      try {
        return _e(O), !1;
      } catch {
        return !0;
      }
    }
    function _e(O) {
      return "" + O;
    }
    function Tt(O) {
      if (le(O))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(O)), _e(O);
    }
    var ot = R.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, rt, At;
    At = {};
    function wt(O) {
      if (je.call(O, "ref")) {
        var k = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function dr(O) {
      if (je.call(O, "key")) {
        var k = Object.getOwnPropertyDescriptor(O, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function cn(O, k) {
      if (typeof O.ref == "string" && ot.current && k && ot.current.stateNode !== k) {
        var M = F(ot.current.type);
        At[M] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(ot.current.type), O.ref), At[M] = !0);
      }
    }
    function Jn(O, k) {
      {
        var M = function() {
          un || (un = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function ei(O, k) {
      {
        var M = function() {
          rt || (rt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var ln = function(O, k, M, ie, ce, me, ve) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: k,
        ref: M,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function hr(O, k, M, ie, ce) {
      {
        var me, ve = {}, he = null, He = null;
        M !== void 0 && (Tt(M), he = "" + M), dr(k) && (Tt(k.key), he = "" + k.key), wt(k) && (He = k.ref, cn(k, ce));
        for (me in k)
          je.call(k, me) && !Ue.hasOwnProperty(me) && (ve[me] = k[me]);
        if (O && O.defaultProps) {
          var Ie = O.defaultProps;
          for (me in Ie)
            ve[me] === void 0 && (ve[me] = Ie[me]);
        }
        if (he || He) {
          var ke = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          he && Jn(ve, ke), He && ei(ve, ke);
        }
        return ln(O, he, He, ce, ie, ot.current, ve);
      }
    }
    var Zt = R.ReactCurrentOwner, fn = R.ReactDebugCurrentFrame;
    function $t(O) {
      if (O) {
        var k = O._owner, M = ue(O.type, O._source, k ? k.type : null);
        fn.setExtraStackFrame(M);
      } else
        fn.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function vr(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Ut() {
      {
        if (Zt.current) {
          var O = F(Zt.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function dn(O) {
      {
        if (O !== void 0) {
          var k = O.fileName.replace(/^.*[\\\/]/, ""), M = O.lineNumber;
          return `

Check your code at ` + k + ":" + M + ".";
        }
        return "";
      }
    }
    var hn = {};
    function mr(O) {
      {
        var k = Ut();
        if (!k) {
          var M = typeof O == "string" ? O : O.displayName || O.name;
          M && (k = `

Check the top-level render call using <` + M + ">.");
        }
        return k;
      }
    }
    function pn(O, k) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var M = mr(k);
        if (hn[M])
          return;
        hn[M] = !0;
        var ie = "";
        O && O._owner && O._owner !== Zt.current && (ie = " It was passed a child from " + F(O._owner.type) + "."), $t(O), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, ie), $t(null);
      }
    }
    function gr(O, k) {
      {
        if (typeof O != "object")
          return;
        if (lt(O))
          for (var M = 0; M < O.length; M++) {
            var ie = O[M];
            vr(ie) && pn(ie, k);
          }
        else if (vr(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var ce = g(O);
          if (typeof ce == "function" && ce !== O.entries)
            for (var me = ce.call(O), ve; !(ve = me.next()).done; )
              vr(ve.value) && pn(ve.value, k);
        }
      }
    }
    function vn(O) {
      {
        var k = O.type;
        if (k == null || typeof k == "string")
          return;
        var M;
        if (typeof k == "function")
          M = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === f))
          M = k.propTypes;
        else
          return;
        if (M) {
          var ie = F(k);
          Le(M, O.props, "prop", ie, O);
        } else if (k.PropTypes !== void 0 && !pr) {
          pr = !0;
          var ce = F(k);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(O) {
      {
        for (var k = Object.keys(O.props), M = 0; M < k.length; M++) {
          var ie = k[M];
          if (ie !== "children" && ie !== "key") {
            $t(O), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), $t(null);
            break;
          }
        }
        O.ref !== null && ($t(O), y("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function mn(O, k, M, ie, ce, me) {
      {
        var ve = _(O);
        if (!ve) {
          var he = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = dn(ce);
          He ? he += He : he += Ut();
          var Ie;
          O === null ? Ie = "null" : lt(O) ? Ie = "array" : O !== void 0 && O.$$typeof === t ? (Ie = "<" + (F(O.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof O, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, he);
        }
        var ke = hr(O, k, M, ce, me);
        if (ke == null)
          return ke;
        if (ve) {
          var Ve = k.children;
          if (Ve !== void 0)
            if (ie)
              if (lt(Ve)) {
                for (var Ft = 0; Ft < Ve.length; Ft++)
                  gr(Ve[Ft], O);
                Object.freeze && Object.freeze(Ve);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gr(Ve, O);
        }
        return O === n ? Ct(ke) : vn(ke), ke;
      }
    }
    function gn(O, k, M) {
      return mn(O, k, M, !0);
    }
    function yn(O, k, M) {
      return mn(O, k, M, !1);
    }
    var bn = yn, ti = gn;
    br.Fragment = n, br.jsx = bn, br.jsxs = ti;
  }()), br;
}
process.env.NODE_ENV === "production" ? Ai.exports = pl() : Ai.exports = vl();
var A = Ai.exports;
(function() {
  (function(e) {
    (function(t) {
      var r = {
        searchParams: "URLSearchParams" in e,
        iterable: "Symbol" in e && "iterator" in Symbol,
        blob: "FileReader" in e && "Blob" in e && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in e,
        arrayBuffer: "ArrayBuffer" in e
      };
      function n(w) {
        return w && DataView.prototype.isPrototypeOf(w);
      }
      if (r.arrayBuffer)
        var i = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], a = ArrayBuffer.isView || function(w) {
          return w && i.indexOf(Object.prototype.toString.call(w)) > -1;
        };
      function o(w) {
        if (typeof w != "string" && (w = String(w)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(w))
          throw new TypeError("Invalid character in header field name");
        return w.toLowerCase();
      }
      function s(w) {
        return typeof w != "string" && (w = String(w)), w;
      }
      function c(w) {
        var _ = {
          next: function() {
            var W = w.shift();
            return { done: W === void 0, value: W };
          }
        };
        return r.iterable && (_[Symbol.iterator] = function() {
          return _;
        }), _;
      }
      function u(w) {
        this.map = {}, w instanceof u ? w.forEach(function(_, W) {
          this.append(W, _);
        }, this) : Array.isArray(w) ? w.forEach(function(_) {
          this.append(_[0], _[1]);
        }, this) : w && Object.getOwnPropertyNames(w).forEach(function(_) {
          this.append(_, w[_]);
        }, this);
      }
      u.prototype.append = function(w, _) {
        w = o(w), _ = s(_);
        var W = this.map[w];
        this.map[w] = W ? W + ", " + _ : _;
      }, u.prototype.delete = function(w) {
        delete this.map[o(w)];
      }, u.prototype.get = function(w) {
        return w = o(w), this.has(w) ? this.map[w] : null;
      }, u.prototype.has = function(w) {
        return this.map.hasOwnProperty(o(w));
      }, u.prototype.set = function(w, _) {
        this.map[o(w)] = s(_);
      }, u.prototype.forEach = function(w, _) {
        for (var W in this.map)
          this.map.hasOwnProperty(W) && w.call(_, this.map[W], W, this);
      }, u.prototype.keys = function() {
        var w = [];
        return this.forEach(function(_, W) {
          w.push(W);
        }), c(w);
      }, u.prototype.values = function() {
        var w = [];
        return this.forEach(function(_) {
          w.push(_);
        }), c(w);
      }, u.prototype.entries = function() {
        var w = [];
        return this.forEach(function(_, W) {
          w.push([W, _]);
        }), c(w);
      }, r.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
      function l(w) {
        if (w.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        w.bodyUsed = !0;
      }
      function f(w) {
        return new Promise(function(_, W) {
          w.onload = function() {
            _(w.result);
          }, w.onerror = function() {
            W(w.error);
          };
        });
      }
      function h(w) {
        var _ = new FileReader(), W = f(_);
        return _.readAsArrayBuffer(w), W;
      }
      function d(w) {
        var _ = new FileReader(), W = f(_);
        return _.readAsText(w), W;
      }
      function p(w) {
        for (var _ = new Uint8Array(w), W = new Array(_.length), Z = 0; Z < _.length; Z++)
          W[Z] = String.fromCharCode(_[Z]);
        return W.join("");
      }
      function m(w) {
        if (w.slice)
          return w.slice(0);
        var _ = new Uint8Array(w.byteLength);
        return _.set(new Uint8Array(w)), _.buffer;
      }
      function g() {
        return this.bodyUsed = !1, this._initBody = function(w) {
          this._bodyInit = w, w ? typeof w == "string" ? this._bodyText = w : r.blob && Blob.prototype.isPrototypeOf(w) ? this._bodyBlob = w : r.formData && FormData.prototype.isPrototypeOf(w) ? this._bodyFormData = w : r.searchParams && URLSearchParams.prototype.isPrototypeOf(w) ? this._bodyText = w.toString() : r.arrayBuffer && r.blob && n(w) ? (this._bodyArrayBuffer = m(w.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(w) || a(w)) ? this._bodyArrayBuffer = m(w) : this._bodyText = w = Object.prototype.toString.call(w) : this._bodyText = "", this.headers.get("content-type") || (typeof w == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(w) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, r.blob && (this.blob = function() {
          var w = l(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h);
        }), this.text = function() {
          var w = l(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return d(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(p(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, r.formData && (this.formData = function() {
          return this.text().then(S);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var R = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function y(w) {
        var _ = w.toUpperCase();
        return R.indexOf(_) > -1 ? _ : w;
      }
      function b(w, _) {
        _ = _ || {};
        var W = _.body;
        if (w instanceof b) {
          if (w.bodyUsed)
            throw new TypeError("Already read");
          this.url = w.url, this.credentials = w.credentials, _.headers || (this.headers = new u(w.headers)), this.method = w.method, this.mode = w.mode, this.signal = w.signal, !W && w._bodyInit != null && (W = w._bodyInit, w.bodyUsed = !0);
        } else
          this.url = String(w);
        if (this.credentials = _.credentials || this.credentials || "same-origin", (_.headers || !this.headers) && (this.headers = new u(_.headers)), this.method = y(_.method || this.method || "GET"), this.mode = _.mode || this.mode || null, this.signal = _.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && W)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(W);
      }
      b.prototype.clone = function() {
        return new b(this, { body: this._bodyInit });
      };
      function S(w) {
        var _ = new FormData();
        return w.trim().split("&").forEach(function(W) {
          if (W) {
            var Z = W.split("="), F = Z.shift().replace(/\+/g, " "), Y = Z.join("=").replace(/\+/g, " ");
            _.append(decodeURIComponent(F), decodeURIComponent(Y));
          }
        }), _;
      }
      function v(w) {
        var _ = new u(), W = w.replace(/\r?\n[\t ]+/g, " ");
        return W.split(/\r?\n/).forEach(function(Z) {
          var F = Z.split(":"), Y = F.shift().trim();
          if (Y) {
            var re = F.join(":").trim();
            _.append(Y, re);
          }
        }), _;
      }
      g.call(b.prototype);
      function E(w, _) {
        _ || (_ = {}), this.type = "default", this.status = _.status === void 0 ? 200 : _.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in _ ? _.statusText : "OK", this.headers = new u(_.headers), this.url = _.url || "", this._initBody(w);
      }
      g.call(E.prototype), E.prototype.clone = function() {
        return new E(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new u(this.headers),
          url: this.url
        });
      }, E.error = function() {
        var w = new E(null, { status: 0, statusText: "" });
        return w.type = "error", w;
      };
      var j = [301, 302, 303, 307, 308];
      E.redirect = function(w, _) {
        if (j.indexOf(_) === -1)
          throw new RangeError("Invalid status code");
        return new E(null, { status: _, headers: { location: w } });
      }, t.DOMException = e.DOMException;
      try {
        new t.DOMException();
      } catch {
        t.DOMException = function(_, W) {
          this.message = _, this.name = W;
          var Z = Error(_);
          this.stack = Z.stack;
        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
      }
      function D(w, _) {
        return new Promise(function(W, Z) {
          var F = new b(w, _);
          if (F.signal && F.signal.aborted)
            return Z(new t.DOMException("Aborted", "AbortError"));
          var Y = new XMLHttpRequest();
          function re() {
            Y.abort();
          }
          Y.onload = function() {
            var oe = {
              status: Y.status,
              statusText: Y.statusText,
              headers: v(Y.getAllResponseHeaders() || "")
            };
            oe.url = "responseURL" in Y ? Y.responseURL : oe.headers.get("X-Request-URL");
            var J = "response" in Y ? Y.response : Y.responseText;
            W(new E(J, oe));
          }, Y.onerror = function() {
            Z(new TypeError("Network request failed"));
          }, Y.ontimeout = function() {
            Z(new TypeError("Network request failed"));
          }, Y.onabort = function() {
            Z(new t.DOMException("Aborted", "AbortError"));
          }, Y.open(F.method, F.url, !0), F.credentials === "include" ? Y.withCredentials = !0 : F.credentials === "omit" && (Y.withCredentials = !1), "responseType" in Y && r.blob && (Y.responseType = "blob"), F.headers.forEach(function(oe, J) {
            Y.setRequestHeader(J, oe);
          }), F.signal && (F.signal.addEventListener("abort", re), Y.onreadystatechange = function() {
            Y.readyState === 4 && F.signal.removeEventListener("abort", re);
          }), Y.send(typeof F._bodyInit > "u" ? null : F._bodyInit);
        });
      }
      return D.polyfill = !0, e.fetch || (e.fetch = D, e.Headers = u, e.Request = b, e.Response = E), t.Headers = u, t.Request = b, t.Response = E, t.fetch = D, Object.defineProperty(t, "__esModule", { value: !0 }), t;
    })({});
  })(typeof self < "u" ? self : hl);
})();
const ml = {};
var $i = function(e, t) {
  return $i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, $i(e, t);
};
function tn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $i(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Re = function() {
  return Re = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Re.apply(this, arguments);
};
function q(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (f) {
        o(f);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (f) {
        o(f);
      }
    }
    function u(l) {
      l.done ? a(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function V(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var ju = (
  /** @class */
  function(e) {
    tn(t, e);
    function t(r, n, i, a) {
      var o = this, s, c, u;
      return o = e.call(this, r) || this, Object.setPrototypeOf(o, t.prototype), o.name = "MeiliSearchCommunicationError", n instanceof Response && (o.message = n.statusText, o.statusCode = n.status), n instanceof Error && (o.errno = n.errno, o.code = n.code), a ? (o.stack = a, o.stack = (s = o.stack) === null || s === void 0 ? void 0 : s.replace(/(TypeError|FetchError)/, o.name), o.stack = (c = o.stack) === null || c === void 0 ? void 0 : c.replace("Failed to fetch", "request to ".concat(i, " failed, reason: connect ECONNREFUSED")), o.stack = (u = o.stack) === null || u === void 0 ? void 0 : u.replace("Not Found", "Not Found: ".concat(i))) : Error.captureStackTrace && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), Ci = (
  /** @class */
  function(e) {
    tn(t, e);
    function t(r, n) {
      var i = e.call(this, r.message) || this;
      return Object.setPrototypeOf(i, Ci.prototype), i.name = "MeiliSearchApiError", i.code = r.code, i.type = r.type, i.link = r.link, i.message = r.message, i.httpStatus = n, Error.captureStackTrace && Error.captureStackTrace(i, Ci), i;
    }
    return t;
  }(Error)
);
function gl(e) {
  return q(this, void 0, void 0, function() {
    var t;
    return V(this, function(r) {
      switch (r.label) {
        case 0:
          if (e.ok)
            return [3, 5];
          t = void 0, r.label = 1;
        case 1:
          return r.trys.push([1, 3, , 4]), [4, e.json()];
        case 2:
          return t = r.sent(), [3, 4];
        case 3:
          throw r.sent(), new ju(e.statusText, e, e.url);
        case 4:
          throw new Ci(t, e.status);
        case 5:
          return [2, e];
      }
    });
  });
}
function yl(e, t, r) {
  throw e.name !== "MeiliSearchApiError" ? new ju(e.message, e, r, t) : e;
}
var mt = (
  /** @class */
  function(e) {
    tn(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return Object.setPrototypeOf(n, t.prototype), n.name = "MeiliSearchError", Error.captureStackTrace && Error.captureStackTrace(n, t), n;
    }
    return t;
  }(Error)
), bl = (
  /** @class */
  function(e) {
    tn(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return Object.setPrototypeOf(n, t.prototype), n.name = "MeiliSearchTimeOutError", Error.captureStackTrace && Error.captureStackTrace(n, t), n;
    }
    return t;
  }(Error)
);
function wn(e) {
  return Object.entries(e).reduce(function(t, r) {
    var n = r[0], i = r[1];
    return i !== void 0 && (t[n] = i), t;
  }, {});
}
function wl(e) {
  return q(this, void 0, void 0, function() {
    return V(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, new Promise(function(r) {
            return setTimeout(r, e);
          })];
        case 1:
          return [2, t.sent()];
      }
    });
  });
}
function Sl(e) {
  return e.startsWith("https://") || e.startsWith("http://") ? e : "http://".concat(e);
}
function Ol(e) {
  return e.endsWith("/") || (e += "/"), e;
}
function Rl(e) {
  var t = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return t.test(e);
}
var Pl = "0.32.5";
function ri(e) {
  var t = Object.keys(e), r = t.reduce(function(n, i) {
    var a, o, s, c = e[i];
    return c === void 0 ? n : Array.isArray(c) ? Re(Re({}, n), (a = {}, a[i] = c.join(","), a)) : c instanceof Date ? Re(Re({}, n), (o = {}, o[i] = c.toISOString(), o)) : Re(Re({}, n), (s = {}, s[i] = c, s));
  }, {});
  return r;
}
function El(e) {
  try {
    return e = Sl(e), e = Ol(e), e;
  } catch {
    throw new mt("The provided host is not valid.");
  }
}
function xl(e) {
  if (Array.isArray(e))
    return e.reduce(function(r, n) {
      return r[n[0]] = n[1], r;
    }, {});
  if ("has" in e) {
    var t = {};
    return e.forEach(function(r, n) {
      return t[n] = r;
    }), t;
  } else
    return Object.assign({}, e);
}
function _l(e) {
  var t, r, n = "X-Meilisearch-Client", i = "Meilisearch JavaScript (v".concat(Pl, ")"), a = "Content-Type", o = "Authorization", s = xl((r = (t = e.requestConfig) === null || t === void 0 ? void 0 : t.headers) !== null && r !== void 0 ? r : {});
  if (e.apiKey && !s[o] && (s[o] = "Bearer ".concat(e.apiKey)), s[a] || (s["Content-Type"] = "application/json"), e.clientAgents && Array.isArray(e.clientAgents)) {
    var c = e.clientAgents.concat(i);
    s[n] = c.join(" ; ");
  } else {
    if (e.clientAgents && !Array.isArray(e.clientAgents))
      throw new mt('Meilisearch: The header "'.concat(n, `" should be an array of string(s).
`));
    s[n] = i;
  }
  return s;
}
var Dn = (
  /** @class */
  function() {
    function e(t) {
      this.headers = _l(t), this.requestConfig = t.requestConfig, this.httpClient = t.httpClient;
      try {
        var r = El(t.host);
        this.url = new URL(r);
      } catch {
        throw new mt("The provided host is not valid.");
      }
    }
    return e.prototype.request = function(t) {
      var r, n = t.method, i = t.url, a = t.params, o = t.body, s = t.config, c = s === void 0 ? {} : s;
      return q(this, void 0, void 0, function() {
        var u, l, f, h, d, p, m, g, R;
        return V(this, function(y) {
          switch (y.label) {
            case 0:
              u = new URL(i, this.url), a && (l = new URLSearchParams(), Object.keys(a).filter(function(b) {
                return a[b] !== null;
              }).map(function(b) {
                return l.set(b, a[b]);
              }), u.search = l.toString()), !((r = c.headers) === null || r === void 0) && r["Content-Type"] || (o = JSON.stringify(o)), f = Re(Re({}, this.headers), c.headers), y.label = 1;
            case 1:
              return y.trys.push([1, 6, , 7]), h = this.httpClient ? this.httpClient : fetch, d = h(u.toString(), Re(Re(Re({}, c), this.requestConfig), { method: n, body: o, headers: f })), this.httpClient ? [4, d] : [3, 3];
            case 2:
              return [2, y.sent()];
            case 3:
              return [4, d.then(function(b) {
                return gl(b);
              })];
            case 4:
              return p = y.sent(), [4, p.json().catch(function() {
              })];
            case 5:
              return m = y.sent(), [2, m];
            case 6:
              return g = y.sent(), R = g.stack, yl(g, R, u.toString()), [3, 7];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.get = function(t, r, n) {
      return q(this, void 0, void 0, function() {
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.request({
                method: "GET",
                url: t,
                params: r,
                config: n
              })];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, e.prototype.post = function(t, r, n, i) {
      return q(this, void 0, void 0, function() {
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.request({
                method: "POST",
                url: t,
                body: r,
                params: n,
                config: i
              })];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.put = function(t, r, n, i) {
      return q(this, void 0, void 0, function() {
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.request({
                method: "PUT",
                url: t,
                body: r,
                params: n,
                config: i
              })];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.patch = function(t, r, n, i) {
      return q(this, void 0, void 0, function() {
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.request({
                method: "PATCH",
                url: t,
                body: r,
                params: n,
                config: i
              })];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.delete = function(t, r, n, i) {
      return q(this, void 0, void 0, function() {
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.request({
                method: "DELETE",
                url: t,
                body: r,
                params: n,
                config: i
              })];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e;
  }()
), Me = (
  /** @class */
  function() {
    function e(t) {
      this.taskUid = t.taskUid, this.indexUid = t.indexUid, this.status = t.status, this.type = t.type, this.enqueuedAt = new Date(t.enqueuedAt);
    }
    return e;
  }()
), $o = (
  /** @class */
  function() {
    function e(t) {
      this.indexUid = t.indexUid, this.status = t.status, this.type = t.type, this.uid = t.uid, this.details = t.details, this.canceledBy = t.canceledBy, this.error = t.error, this.duration = t.duration, this.startedAt = new Date(t.startedAt), this.enqueuedAt = new Date(t.enqueuedAt), this.finishedAt = new Date(t.finishedAt);
    }
    return e;
  }()
), Tu = (
  /** @class */
  function() {
    function e(t) {
      this.httpRequest = new Dn(t);
    }
    return e.prototype.getTask = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "tasks/".concat(t), [4, this.httpRequest.get(r)];
            case 1:
              return n = i.sent(), [2, new $o(n)];
          }
        });
      });
    }, e.prototype.getTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "tasks", [4, this.httpRequest.get(r, ri(t))];
            case 1:
              return n = i.sent(), [2, Re(Re({}, n), { results: n.results.map(function(a) {
                return new $o(a);
              }) })];
          }
        });
      });
    }, e.prototype.waitForTask = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        var c, u;
        return V(this, function(l) {
          switch (l.label) {
            case 0:
              c = Date.now(), l.label = 1;
            case 1:
              return Date.now() - c < a ? [4, this.getTask(t)] : [3, 4];
            case 2:
              return u = l.sent(), [
                "enqueued",
                "processing"
                /* TaskStatus.TASK_PROCESSING */
              ].includes(u.status) ? [4, wl(s)] : [2, u];
            case 3:
              return l.sent(), [3, 1];
            case 4:
              throw new bl("timeout of ".concat(a, "ms has exceeded on process ").concat(t, " when waiting a task to be resolved."));
          }
        });
      });
    }, e.prototype.waitForTasks = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        var c, u, l, f, h;
        return V(this, function(d) {
          switch (d.label) {
            case 0:
              c = [], u = 0, l = t, d.label = 1;
            case 1:
              return u < l.length ? (f = l[u], [4, this.waitForTask(f, {
                timeOutMs: a,
                intervalMs: s
              })]) : [3, 4];
            case 2:
              h = d.sent(), c.push(h), d.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              return [2, c];
          }
        });
      });
    }, e.prototype.cancelTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "tasks/cancel", [4, this.httpRequest.post(r, {}, ri(t))];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.deleteTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "tasks", [4, this.httpRequest.delete(r, {}, ri(t))];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e;
  }()
), Bt = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.uid = r, this.primaryKey = n, this.httpRequest = new Dn(t), this.tasks = new Tu(t);
    }
    return e.prototype.search = function(t, r, n) {
      return q(this, void 0, void 0, function() {
        var i;
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return i = "indexes/".concat(this.uid, "/search"), [4, this.httpRequest.post(i, wn(Re({ q: t }, r)), void 0, n)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.searchGet = function(t, r, n) {
      var i, a, o, s, c;
      return q(this, void 0, void 0, function() {
        var u, l, f;
        return V(this, function(h) {
          switch (h.label) {
            case 0:
              return u = "indexes/".concat(this.uid, "/search"), l = function(d) {
                if (typeof d == "string")
                  return d;
                if (Array.isArray(d))
                  throw new mt("The filter query parameter should be in string format when using searchGet");
              }, f = Re(Re({ q: t }, r), { filter: l(r == null ? void 0 : r.filter), sort: (i = r == null ? void 0 : r.sort) === null || i === void 0 ? void 0 : i.join(","), facets: (a = r == null ? void 0 : r.facets) === null || a === void 0 ? void 0 : a.join(","), attributesToRetrieve: (o = r == null ? void 0 : r.attributesToRetrieve) === null || o === void 0 ? void 0 : o.join(","), attributesToCrop: (s = r == null ? void 0 : r.attributesToCrop) === null || s === void 0 ? void 0 : s.join(","), attributesToHighlight: (c = r == null ? void 0 : r.attributesToHighlight) === null || c === void 0 ? void 0 : c.join(",") }), [4, this.httpRequest.get(u, wn(f), n)];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.getRawInfo = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid), [4, this.httpRequest.get(t)];
            case 1:
              return r = n.sent(), this.primaryKey = r.primaryKey, this.updatedAt = new Date(r.updatedAt), this.createdAt = new Date(r.createdAt), [2, r];
          }
        });
      });
    }, e.prototype.fetchInfo = function() {
      return q(this, void 0, void 0, function() {
        return V(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.getRawInfo()];
            case 1:
              return t.sent(), [2, this];
          }
        });
      });
    }, e.prototype.fetchPrimaryKey = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = this, [4, this.getRawInfo()];
            case 1:
              return t.primaryKey = r.sent().primaryKey, [2, this.primaryKey];
          }
        });
      });
    }, e.create = function(t, r, n) {
      return r === void 0 && (r = {}), q(this, void 0, void 0, function() {
        var i, a, o;
        return V(this, function(s) {
          switch (s.label) {
            case 0:
              return i = "indexes", a = new Dn(n), [4, a.post(i, Re(Re({}, r), { uid: t }))];
            case 1:
              return o = s.sent(), [2, new Me(o)];
          }
        });
      });
    }, e.prototype.update = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid), [4, this.httpRequest.patch(r, t)];
            case 1:
              return n = i.sent(), n.enqueuedAt = new Date(n.enqueuedAt), [2, n];
          }
        });
      });
    }, e.prototype.delete = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), [2, new Me(r)];
          }
        });
      });
    }, e.prototype.getTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.getTasks(Re(Re({}, t), { indexUids: [this.uid] }))];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.getTask = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.getTask(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.waitForTasks = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.tasks.waitForTasks(t, {
                timeOutMs: a,
                intervalMs: s
              })];
            case 1:
              return [2, c.sent()];
          }
        });
      });
    }, e.prototype.waitForTask = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.tasks.waitForTask(t, {
                timeOutMs: a,
                intervalMs: s
              })];
            case 1:
              return [2, c.sent()];
          }
        });
      });
    }, e.prototype.getStats = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/stats"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.getDocuments = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/documents"), n = function() {
                var a;
                if (Array.isArray(t == null ? void 0 : t.fields))
                  return (a = t == null ? void 0 : t.fields) === null || a === void 0 ? void 0 : a.join(",");
              }(), [4, this.httpRequest.get(r, wn(Re(Re({}, t), { fields: n })))];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, e.prototype.getDocument = function(t, r) {
      return q(this, void 0, void 0, function() {
        var n, i;
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return n = "indexes/".concat(this.uid, "/documents/").concat(t), i = function() {
                var o;
                if (Array.isArray(r == null ? void 0 : r.fields))
                  return (o = r == null ? void 0 : r.fields) === null || o === void 0 ? void 0 : o.join(",");
              }(), [4, this.httpRequest.get(n, wn(Re(Re({}, r), { fields: i })))];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.addDocuments = function(t, r) {
      return q(this, void 0, void 0, function() {
        var n, i;
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return n = "indexes/".concat(this.uid, "/documents"), [4, this.httpRequest.post(n, t, r)];
            case 1:
              return i = a.sent(), [2, new Me(i)];
          }
        });
      });
    }, e.prototype.addDocumentsFromString = function(t, r, n) {
      return q(this, void 0, void 0, function() {
        var i, a;
        return V(this, function(o) {
          switch (o.label) {
            case 0:
              return i = "indexes/".concat(this.uid, "/documents"), [4, this.httpRequest.post(i, t, n, {
                headers: {
                  "Content-Type": r
                }
              })];
            case 1:
              return a = o.sent(), [2, new Me(a)];
          }
        });
      });
    }, e.prototype.addDocumentsInBatches = function(t, r, n) {
      return r === void 0 && (r = 1e3), q(this, void 0, void 0, function() {
        var i, a, o, s;
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              i = [], a = 0, c.label = 1;
            case 1:
              return a < t.length ? (s = (o = i).push, [4, this.addDocuments(t.slice(a, a + r), n)]) : [3, 4];
            case 2:
              s.apply(o, [c.sent()]), c.label = 3;
            case 3:
              return a += r, [3, 1];
            case 4:
              return [2, i];
          }
        });
      });
    }, e.prototype.updateDocuments = function(t, r) {
      return q(this, void 0, void 0, function() {
        var n, i;
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return n = "indexes/".concat(this.uid, "/documents"), [4, this.httpRequest.put(n, t, r)];
            case 1:
              return i = a.sent(), [2, new Me(i)];
          }
        });
      });
    }, e.prototype.updateDocumentsInBatches = function(t, r, n) {
      return r === void 0 && (r = 1e3), q(this, void 0, void 0, function() {
        var i, a, o, s;
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              i = [], a = 0, c.label = 1;
            case 1:
              return a < t.length ? (s = (o = i).push, [4, this.updateDocuments(t.slice(a, a + r), n)]) : [3, 4];
            case 2:
              s.apply(o, [c.sent()]), c.label = 3;
            case 3:
              return a += r, [3, 1];
            case 4:
              return [2, i];
          }
        });
      });
    }, e.prototype.updateDocumentsFromString = function(t, r, n) {
      return q(this, void 0, void 0, function() {
        var i, a;
        return V(this, function(o) {
          switch (o.label) {
            case 0:
              return i = "indexes/".concat(this.uid, "/documents"), [4, this.httpRequest.put(i, t, n, {
                headers: {
                  "Content-Type": r
                }
              })];
            case 1:
              return a = o.sent(), [2, new Me(a)];
          }
        });
      });
    }, e.prototype.deleteDocument = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/documents/").concat(t), [4, this.httpRequest.delete(r)];
            case 1:
              return n = i.sent(), n.enqueuedAt = new Date(n.enqueuedAt), [2, n];
          }
        });
      });
    }, e.prototype.deleteDocuments = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/documents/delete-batch"), [4, this.httpRequest.post(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.deleteAllDocuments = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/documents"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getSettings = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateSettings = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings"), [4, this.httpRequest.patch(r, t)];
            case 1:
              return n = i.sent(), n.enqueued = new Date(n.enqueuedAt), [2, n];
          }
        });
      });
    }, e.prototype.resetSettings = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getPagination = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/pagination"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updatePagination = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/pagination"), [4, this.httpRequest.patch(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetPagination = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/pagination"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), [2, new Me(r)];
          }
        });
      });
    }, e.prototype.getSynonyms = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/synonyms"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateSynonyms = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/synonyms"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetSynonyms = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/synonyms"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getStopWords = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/stop-words"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateStopWords = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/stop-words"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetStopWords = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/stop-words"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getRankingRules = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/ranking-rules"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateRankingRules = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/ranking-rules"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetRankingRules = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/ranking-rules"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getDistinctAttribute = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/distinct-attribute"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateDistinctAttribute = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/distinct-attribute"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetDistinctAttribute = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/distinct-attribute"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getFilterableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/filterable-attributes"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateFilterableAttributes = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/filterable-attributes"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetFilterableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/filterable-attributes"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getSortableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/sortable-attributes"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateSortableAttributes = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/sortable-attributes"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetSortableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/sortable-attributes"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getSearchableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/searchable-attributes"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateSearchableAttributes = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/searchable-attributes"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetSearchableAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/searchable-attributes"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getDisplayedAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/displayed-attributes"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateDisplayedAttributes = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/displayed-attributes"), [4, this.httpRequest.put(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetDisplayedAttributes = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/displayed-attributes"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getTypoTolerance = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/typo-tolerance"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateTypoTolerance = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/typo-tolerance"), [4, this.httpRequest.patch(r, t)];
            case 1:
              return n = i.sent(), n.enqueuedAt = new Date(n.enqueuedAt), [2, n];
          }
        });
      });
    }, e.prototype.resetTypoTolerance = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/typo-tolerance"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), r.enqueuedAt = new Date(r.enqueuedAt), [2, r];
          }
        });
      });
    }, e.prototype.getFaceting = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/faceting"), [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.updateFaceting = function(t) {
      return q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "indexes/".concat(this.uid, "/settings/faceting"), [4, this.httpRequest.patch(r, t)];
            case 1:
              return n = i.sent(), [2, new Me(n)];
          }
        });
      });
    }, e.prototype.resetFaceting = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "indexes/".concat(this.uid, "/settings/faceting"), [4, this.httpRequest.delete(t)];
            case 1:
              return r = n.sent(), [2, new Me(r)];
          }
        });
      });
    }, e;
  }()
), jl = (
  /** @class */
  function() {
    function e(t) {
      this.config = t, this.httpRequest = new Dn(t), this.tasks = new Tu(t);
    }
    return e.prototype.index = function(t) {
      return new Bt(this.config, t);
    }, e.prototype.getIndex = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          return [2, new Bt(this.config, t).fetchInfo()];
        });
      });
    }, e.prototype.getRawIndex = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          return [2, new Bt(this.config, t).getRawInfo()];
        });
      });
    }, e.prototype.getIndexes = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n, i = this;
        return V(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.getRawIndexes(t)];
            case 1:
              return r = a.sent(), n = r.results.map(function(o) {
                return new Bt(i.config, o.uid, o.primaryKey);
              }), [2, Re(Re({}, r), { results: n })];
          }
        });
      });
    }, e.prototype.getRawIndexes = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return r = "indexes", [4, this.httpRequest.get(r, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.createIndex = function(t, r) {
      return r === void 0 && (r = {}), q(this, void 0, void 0, function() {
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, Bt.create(t, r, this.config)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.updateIndex = function(t, r) {
      return r === void 0 && (r = {}), q(this, void 0, void 0, function() {
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, new Bt(this.config, t).update(r)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.deleteIndex = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, new Bt(this.config, t).delete()];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.deleteIndexIfExists = function(t) {
      return q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.deleteIndex(t)];
            case 1:
              return n.sent(), [2, !0];
            case 2:
              if (r = n.sent(), r.code === "index_not_found")
                return [2, !1];
              throw r;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.swapIndexes = function(t) {
      return q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return r = "/swap-indexes", [4, this.httpRequest.post(r, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.multiSearch = function(t, r) {
      return q(this, void 0, void 0, function() {
        var n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return n = "multi-search", [4, this.httpRequest.post(n, t, void 0, r)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, e.prototype.getTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.getTasks(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.getTask = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.getTask(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.waitForTasks = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.tasks.waitForTasks(t, {
                timeOutMs: a,
                intervalMs: s
              })];
            case 1:
              return [2, c.sent()];
          }
        });
      });
    }, e.prototype.waitForTask = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.timeOutMs, a = i === void 0 ? 5e3 : i, o = n.intervalMs, s = o === void 0 ? 50 : o;
      return q(this, void 0, void 0, function() {
        return V(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.tasks.waitForTask(t, {
                timeOutMs: a,
                intervalMs: s
              })];
            case 1:
              return [2, c.sent()];
          }
        });
      });
    }, e.prototype.cancelTasks = function(t) {
      return q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.cancelTasks(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.deleteTasks = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.tasks.deleteTasks(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.getKeys = function(t) {
      return t === void 0 && (t = {}), q(this, void 0, void 0, function() {
        var r, n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return r = "keys", [4, this.httpRequest.get(r, t)];
            case 1:
              return n = i.sent(), n.results = n.results.map(function(a) {
                return Re(Re({}, a), { createdAt: new Date(a.createdAt), updateAt: new Date(a.updateAt) });
              }), [2, n];
          }
        });
      });
    }, e.prototype.getKey = function(t) {
      return q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return r = "keys/".concat(t), [4, this.httpRequest.get(r)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.createKey = function(t) {
      return q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return r = "keys", [4, this.httpRequest.post(r, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.updateKey = function(t, r) {
      return q(this, void 0, void 0, function() {
        var n;
        return V(this, function(i) {
          switch (i.label) {
            case 0:
              return n = "keys/".concat(t), [4, this.httpRequest.patch(n, r)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, e.prototype.deleteKey = function(t) {
      return q(this, void 0, void 0, function() {
        var r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return r = "keys/".concat(t), [4, this.httpRequest.delete(r)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, e.prototype.health = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "health", [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.isHealthy = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), t = "health", [4, this.httpRequest.get(t)];
            case 1:
              return r.sent(), [2, !0];
            case 2:
              return r.sent(), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getStats = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "stats", [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.getVersion = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return V(this, function(r) {
          switch (r.label) {
            case 0:
              return t = "version", [4, this.httpRequest.get(t)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.createDump = function() {
      return q(this, void 0, void 0, function() {
        var t, r;
        return V(this, function(n) {
          switch (n.label) {
            case 0:
              return t = "dumps", [4, this.httpRequest.post(t)];
            case 1:
              return r = n.sent(), [2, new Me(r)];
          }
        });
      });
    }, e.prototype.generateTenantToken = function(t, r, n) {
      var i = new Error();
      throw new Error(`Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment 
 `.concat(i.stack, "."));
    }, e;
  }()
);
function Au(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64");
}
function Tl(e, t, r) {
  return ml.createHmac("sha256", e).update("".concat(t, ".").concat(r)).digest("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Al() {
  var e = {
    alg: "HS256",
    typ: "JWT"
  };
  return Au(e).replace(/=/g, "");
}
function $l(e) {
  var t = e.searchRules, r = e.uid, n = e.apiKey, i = e.expiresAt;
  if (i)
    if (i instanceof Date) {
      if (i.getTime() < Date.now())
        throw new mt("Meilisearch: The expiresAt field must be a date in the future.");
    } else
      throw new mt("Meilisearch: The expiredAt field must be an instance of Date.");
  if (t && !(typeof t == "object" || Array.isArray(t)))
    throw new mt("Meilisearch: The search rules added in the token generation must be of type array or object.");
  if (!n || typeof n != "string")
    throw new mt("Meilisearch: The API key used for the token generation must exist and be of type string.");
  if (!r || typeof r != "string")
    throw new mt("Meilisearch: The uid of the api key used for the token generation must exist, be of type string and comply to the uuid4 format.");
  if (!Rl(r))
    throw new mt("Meilisearch: The uid of your key is not a valid uuid4. To find out the uid of your key use getKey().");
}
function Cl(e) {
  var t = e.searchRules, r = e.uid, n = e.expiresAt, i = {
    searchRules: t,
    apiKeyUid: r,
    exp: n == null ? void 0 : n.getTime()
  };
  return Au(i).replace(/=/g, "");
}
var Fl = (
  /** @class */
  function() {
    function e(t) {
      this.config = t;
    }
    return e.prototype.generateTenantToken = function(t, r, n) {
      var i = (n == null ? void 0 : n.apiKey) || this.config.apiKey || "", a = t || "", o = n == null ? void 0 : n.expiresAt;
      $l({ apiKey: i, uid: a, expiresAt: o, searchRules: r });
      var s = Al(), c = Cl({ searchRules: r, uid: a, expiresAt: o }), u = Tl(i, s, c);
      return "".concat(s, ".").concat(c, ".").concat(u);
    }, e;
  }()
), Il = (
  /** @class */
  function(e) {
    tn(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.tokens = new Fl(r), n;
    }
    return t.prototype.generateTenantToken = function(r, n, i) {
      return typeof window > "u" ? this.tokens.generateTenantToken(r, n, i) : e.prototype.generateTenantToken.call(this, r, n, i);
    }, t;
  }(jl)
), at = function() {
  return at = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, at.apply(this, arguments);
};
function Nl(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Mn(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (f) {
        o(f);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (f) {
        o(f);
      }
    }
    function u(l) {
      l.done ? a(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Ln(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ni(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function $u(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function kl(e) {
  var t = {
    placeholderSearch: !0,
    keepZeroFacets: !1,
    clientAgents: [],
    finitePagination: !1
  };
  return at(at({}, t), e);
}
function Dl(e) {
  if (typeof e == "function") {
    var t = e();
    if (typeof t != "string")
      throw new TypeError("Provided apiKey function (2nd parameter) did not return a string, expected string");
    return t;
  }
  return e;
}
function Ml(e, t, r) {
  var n = r.requestConfig, i = r.httpClient;
  if (typeof e != "string")
    throw new TypeError("Provided hostUrl value (1st parameter) is not a string, expected string");
  if (typeof t != "string" && typeof t != "function")
    throw new TypeError("Provided apiKey value (2nd parameter) is not a string or a function, expected string or function");
  if (n !== void 0 && !$u(n))
    throw new TypeError("Provided requestConfig should be an object");
  if (i && typeof i != "function")
    throw new TypeError("Provided custom httpClient should be a function");
}
function Ll(e, t) {
  return {
    multiSearch: function(r, n) {
      return Mn(this, void 0, void 0, function() {
        var i, a, o, s;
        return Ln(this, function(c) {
          switch (c.label) {
            case 0:
              return i = t.formatKey([r]), a = t.getEntry(i), a ? [2, a] : [4, e.multiSearch({
                queries: r
              })];
            case 1:
              return o = c.sent(), s = o.results.map(function(u, l) {
                return at(at({}, u), {
                  // TODO: should be removed at one point
                  pagination: n[l] || {}
                });
              }), t.setEntry(i, s), [2, s];
          }
        });
      });
    }
  };
}
function Hl(e) {
  var t = e.insideBoundingBox, r = e.aroundLatLng, n = e.aroundRadius, i = e.minimumAroundRadius, a, o, s;
  if (r) {
    var c = r.split(",").map(function(g) {
      return Number.parseFloat(g).toFixed(5);
    }), u = c[0], l = c[1];
    a = [u, l];
  }
  if ((n != null || i != null) && (n === "all" ? console.warn("instant-meilisearch is not compatible with the `all` value on the aroundRadius parameter") : n != null ? o = n : o = i), t && typeof t == "string") {
    var f = t.split(",").map(function(g) {
      return parseFloat(g);
    }), h = f[0], d = f[1], p = f[2], m = f[3];
    s = "_geoBoundingBox([".concat(h, ", ").concat(d, "], [").concat(p, ", ").concat(m, "])");
  } else if (a != null && o != null) {
    var u = a[0], l = a[1];
    s = "_geoRadius(".concat(u, ", ").concat(l, ", ").concat(o, ")");
  }
  return s;
}
function ii(e) {
  return e.replace(/(.*):(.*)/i, '"$1"="$2"');
}
function Co(e) {
  return typeof e == "string" ? ii(e) : Array.isArray(e) ? e.map(function(t) {
    return Array.isArray(t) ? t.map(function(r) {
      return ii(r);
    }).filter(function(r) {
      return r;
    }) : ii(t);
  }).filter(function(t) {
    return t;
  }) : [];
}
function Fo(e) {
  return e === "" ? [] : typeof e == "string" ? [e] : e;
}
function Wl(e, t, r) {
  var n = r.trim(), i = Fo(e), a = Fo(t), o = ni(ni(ni([], i, !0), a, !0), [
    n
  ], !1), s = o.filter(function(c) {
    return Array.isArray(c) ? c.length : c;
  });
  return s;
}
function Ul(e, t, r) {
  var n = Co(r || []), i = Co(t || []);
  return Wl(n, i, e || "");
}
function Bl(e, t, r) {
  return !(!r && !t && (!e || e.length === 0));
}
function ql(e, t) {
  var r = e.page, n = e.hitsPerPage;
  return t ? {
    limit: n + 1,
    offset: r * n
  } : {
    limit: 0,
    offset: 0
  };
}
function Vl(e, t) {
  var r = e.page, n = e.hitsPerPage;
  return t ? {
    hitsPerPage: n,
    page: r + 1
  } : {
    hitsPerPage: 0,
    page: r + 1
  };
}
function Cu(e) {
  var t = {}, r = e.facets, n = e.attributesToSnippet, i = e.snippetEllipsisText, a = e.attributesToRetrieve, o = e.attributesToHighlight, s = e.highlightPreTag, c = e.highlightPostTag, u = e.placeholderSearch, l = e.query, f = e.sort, h = e.pagination, d = e.matchingStrategy, p = e.filters, m = e.numericFilters, g = e.facetFilters, R = e.indexUid, y = Ul(p, m, g);
  return {
    getParams: function() {
      return t;
    },
    addQuery: function() {
      t.q = l;
    },
    addIndexUid: function() {
      t.indexUid = R;
    },
    addFacets: function() {
      Array.isArray(r) ? t.facets = r : typeof r == "string" && (t.facets = [r]);
    },
    addAttributesToCrop: function() {
      n && (t.attributesToCrop = n);
    },
    addCropMarker: function() {
      i != null && (t.cropMarker = i);
    },
    addAttributesToRetrieve: function() {
      a && (t.attributesToRetrieve = a);
    },
    addFilters: function() {
      y.length && (t.filter = y);
    },
    addAttributesToHighlight: function() {
      t.attributesToHighlight = o || ["*"];
    },
    addPreTag: function() {
      s ? t.highlightPreTag = s : t.highlightPreTag = "__ais-highlight__";
    },
    addPostTag: function() {
      c ? t.highlightPostTag = c : t.highlightPostTag = "__/ais-highlight__";
    },
    addPagination: function() {
      var b = Bl(y, l, u);
      if (h.finite) {
        var S = Vl(h, b), v = S.hitsPerPage, E = S.page;
        t.hitsPerPage = v, t.page = E;
      } else {
        var j = ql(h, b), D = j.limit, w = j.offset;
        t.limit = D, t.offset = w;
      }
    },
    addSort: function() {
      f != null && f.length && (t.sort = Array.isArray(f) ? f : [f]);
    },
    addGeoSearchFilter: function() {
      var b = e.insideBoundingBox, S = e.aroundLatLng, v = e.aroundRadius, E = e.minimumAroundRadius, j = Hl({
        insideBoundingBox: b,
        aroundLatLng: S,
        aroundRadius: v,
        minimumAroundRadius: E
      });
      j && (t.filter ? t.filter.unshift(j) : t.filter = [j]);
    },
    addMatchingStrategy: function() {
      d && (t.matchingStrategy = d);
    }
  };
}
function zl(e) {
  var t = Cu(e);
  return t.addQuery(), t.addIndexUid(), t.addFacets(), t.addAttributesToHighlight(), t.addPreTag(), t.addPostTag(), t.addAttributesToRetrieve(), t.addAttributesToCrop(), t.addCropMarker(), t.addPagination(), t.addFilters(), t.addSort(), t.addGeoSearchFilter(), t.addMatchingStrategy(), t.getParams();
}
function Ql(e) {
  var t = [];
  return function(r) {
    return t.includes(r[e]) ? !1 : (t.push(r[e]), !0);
  };
}
function Yl(e) {
  return e.reduce(function(t, r) {
    return t += JSON.stringify(r);
  }, "");
}
function Kl(e) {
  return typeof e == "string" ? e : JSON.stringify(e === void 0 ? null : e);
}
function Fi(e) {
  return Array.isArray(e) ? e.map(function(t) {
    return Fi(t);
  }) : $u(e) ? Object.keys(e).reduce(function(t, r) {
    return t[r] = Fi(e[r]), t;
  }, {}) : { value: Kl(e) };
}
function Gl(e) {
  if (!e)
    return {};
  var t = Fi(e), r = {
    // We could not determine what the differences are between those two fields.
    _highlightResult: t,
    _snippetResult: t
  };
  return r;
}
function Xl(e) {
  for (var t, r = 0; r < e.length; r++) {
    var n = "".concat(r + Math.random() * 1e6);
    e[r]._geo && (e[r]._geoloc = e[r]._geo, e[r].objectID = n), !((t = e[r]._formatted) === null || t === void 0) && t._geo && (e[r]._formatted._geoloc = e[r]._formatted._geo, e[r]._formatted.objectID = n);
  }
  return e;
}
function Zl(e, t) {
  var r = e.hits, n = e.pagination.hitsPerPage, i = t.finitePagination, a = t.primaryKey;
  !i && r.length > n && r.splice(r.length - 1, 1);
  var o = r.map(function(s) {
    if (Object.keys(s).length > 0) {
      var c = s._formatted;
      s._matchesPosition;
      var u = Nl(s, ["_formatted", "_matchesPosition"]), l = Object.assign(u, Gl(c));
      return a && (l.objectID = s[a]), l;
    }
    return s;
  });
  return o = Xl(o), o;
}
function Jl(e) {
  var t = e.hitsPerPage, r = t === void 0 ? 0 : t, n = e.totalPages, i = n === void 0 ? 0 : n, a = e.estimatedTotalHits, o = e.totalHits;
  return a ?? o ?? r * i;
}
function ef(e, t) {
  if (e.totalPages != null)
    return e.totalPages;
  if (t === 0)
    return 0;
  var r = e.limit, n = r === void 0 ? 20 : r, i = e.offset, a = i === void 0 ? 0 : i, o = e.hits, s = o.length >= n ? 1 : 0;
  return a / t + 1 + s;
}
function tf(e, t) {
  var r = t.hitsPerPage, n = t.page, i = ef(e, r);
  return {
    page: n,
    nbPages: i,
    hitsPerPage: r
  };
}
function rf(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
  } else
    return [];
  return e;
}
function nf(e, t, r) {
  for (var n = rf(e), i = {}, a = 0, o = n; a < o.length; a++) {
    var s = o[a];
    for (var c in t[s])
      i[s] || (i[s] = r[s] || {}), i[s][c] ? i[s][c] = r[s][c] : i[s][c] = 0;
  }
  return i;
}
function af(e, t, r, n) {
  return e ? (n = n || {}, nf(t, r, n)) : n;
}
function of(e) {
  var t = Object.keys(e).reduce(function(r, n) {
    return r[n] = at(at({}, e[n]), { avg: 0, sum: 0 }), r;
  }, {});
  return t;
}
function sf(e, t, r) {
  var n = e.map(function(i) {
    return uf(i, t[i.indexUid], r);
  });
  return { results: n };
}
function uf(e, t, r) {
  var n = e.processingTimeMs, i = e.query, a = e.indexUid, o = e.facetDistribution, s = o === void 0 ? {} : o, c = e.facetStats, u = c === void 0 ? {} : c, l = Object.keys(s), f = tf(e, e.pagination), h = f.hitsPerPage, d = f.page, p = f.nbPages, m = Zl(e, r), g = Jl(e), R = af(r.keepZeroFacets, l, t, s), y = {
    index: a,
    hitsPerPage: h,
    page: d,
    facets: R,
    nbPages: p,
    nbHits: g,
    processingTimeMS: n,
    query: i,
    hits: m,
    params: "",
    exhaustiveNbHits: !1,
    facets_stats: of(u)
  };
  return y;
}
function cf(e, t, r) {
  return {
    hitsPerPage: t === void 0 ? 20 : t,
    page: r || 0,
    finite: !!e
  };
}
function lf(e) {
  return e.split(",").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return !!t;
  });
}
function ff(e, t) {
  var r = e.indexName.split(":"), n = r[0], i = r.slice(1), a = e.params, o = cf(t.finitePagination, a == null ? void 0 : a.hitsPerPage, a == null ? void 0 : a.page), s = lf(i.join(":")), c = at(at(at({}, t), a), { sort: s, indexUid: n, pagination: o, placeholderSearch: t.placeholderSearch !== !1, keepZeroFacets: !!t.keepZeroFacets });
  return c;
}
function df(e) {
  e === void 0 && (e = {});
  var t = e;
  return {
    getEntry: function(r) {
      if (t[r])
        try {
          return JSON.parse(t[r]);
        } catch {
          return;
        }
    },
    formatKey: function(r) {
      return Yl(r);
    },
    setEntry: function(r, n) {
      t[r] = JSON.stringify(n);
    },
    clearCache: function() {
      t = {};
    }
  };
}
function hf(e) {
  var t = at(at({}, e), {
    // placeholdersearch true to ensure a request is made
    placeholderSearch: !0,
    // query set to empty to ensure retrieving the default facetdistribution
    query: ""
  }), r = Cu(t);
  return r.addFacets(), r.addIndexUid(), r.addPagination(), r.getParams();
}
function pf(e, t, r) {
  return Mn(this, void 0, void 0, function() {
    var n, i, a, o, s, c;
    return Ln(this, function(u) {
      switch (u.label) {
        case 0:
          return n = Ql("indexUid"), i = t.filter(n).filter(function(l) {
            var f = l.indexUid;
            return !Object.keys(r).includes(f);
          }), i.length === 0 ? [2, r] : [4, e.multiSearch(i, [])];
        case 1:
          for (a = u.sent(), o = 0, s = a; o < s.length; o++)
            c = s[o], r[c.indexUid] = c.facetDistribution || {};
          return [2, r];
      }
    });
  });
}
var vf = "0.13.1", mf = function(e) {
  e === void 0 && (e = []);
  var t = "Meilisearch instant-meilisearch (v".concat(vf, ")");
  return e.concat(t);
};
function Ha(e, t, r) {
  t === void 0 && (t = ""), r === void 0 && (r = {}), Ml(e, t, r), t = Dl(t);
  var n = mf(r.clientAgents), i = {
    host: e,
    apiKey: t,
    clientAgents: n
  };
  r.httpClient !== void 0 && (i.httpClient = r.httpClient), r.requestConfig !== void 0 && (i.requestConfig = r.requestConfig);
  var a = new Il(i), o = df(), s = Ll(a, o), c = {}, u = kl(r);
  return {
    clearCache: function() {
      return o.clearCache();
    },
    /**
     * @param  {readonlyAlgoliaMultipleQueriesQuery[]} instantSearchRequests
     * @returns {Array}
     */
    search: function(l) {
      return Mn(this, void 0, void 0, function() {
        var f, h, d, p, m, g, R, y, b, S, v, E;
        return Ln(this, function(j) {
          switch (j.label) {
            case 0:
              for (j.trys.push([0, 3, , 4]), f = [], h = [], d = [], p = 0, m = l; p < m.length; p++)
                g = m[p], R = ff(g, r), y = zl(R), f.push(y), b = hf(R), d.push(b), h.push(R.pagination);
              return [
                4,
                pf(s, d, c)
                // Search request to Meilisearch happens here
              ];
            case 1:
              return c = j.sent(), [4, s.multiSearch(
                f,
                h
                // Create issue on pagination
              )];
            case 2:
              return S = j.sent(), v = sf(S, c, u), [2, v];
            case 3:
              throw E = j.sent(), console.error(E), new Error(E);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    searchForFacetValues: function(l) {
      return Mn(this, void 0, void 0, function() {
        return Ln(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, new Promise(function(h, d) {
                d(new Error("SearchForFacetValues is not compatible with Meilisearch")), h([]);
              })];
            case 1:
              return [2, f.sent()];
          }
        });
      });
    }
  };
}
var Io;
(function(e) {
  e.ALL = "all", e.LAST = "last";
})(Io || (Io = {}));
var Ii = { exports: {} }, Pe = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function gf() {
  if (No)
    return Pe;
  No = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, o = 60110, s = 60112, c = 60113, u = 60120, l = 60115, f = 60116, h = 60121, d = 60122, p = 60117, m = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var R = Symbol.for;
    e = R("react.element"), t = R("react.portal"), r = R("react.fragment"), n = R("react.strict_mode"), i = R("react.profiler"), a = R("react.provider"), o = R("react.context"), s = R("react.forward_ref"), c = R("react.suspense"), u = R("react.suspense_list"), l = R("react.memo"), f = R("react.lazy"), h = R("react.block"), d = R("react.server.block"), p = R("react.fundamental"), m = R("react.debug_trace_mode"), g = R("react.legacy_hidden");
  }
  function y(F) {
    if (typeof F == "object" && F !== null) {
      var Y = F.$$typeof;
      switch (Y) {
        case e:
          switch (F = F.type, F) {
            case r:
            case i:
            case n:
            case c:
            case u:
              return F;
            default:
              switch (F = F && F.$$typeof, F) {
                case o:
                case s:
                case f:
                case l:
                case a:
                  return F;
                default:
                  return Y;
              }
          }
        case t:
          return Y;
      }
    }
  }
  var b = a, S = e, v = s, E = r, j = f, D = l, w = t, _ = i, W = n, Z = c;
  return Pe.ContextConsumer = o, Pe.ContextProvider = b, Pe.Element = S, Pe.ForwardRef = v, Pe.Fragment = E, Pe.Lazy = j, Pe.Memo = D, Pe.Portal = w, Pe.Profiler = _, Pe.StrictMode = W, Pe.Suspense = Z, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(F) {
    return y(F) === o;
  }, Pe.isContextProvider = function(F) {
    return y(F) === a;
  }, Pe.isElement = function(F) {
    return typeof F == "object" && F !== null && F.$$typeof === e;
  }, Pe.isForwardRef = function(F) {
    return y(F) === s;
  }, Pe.isFragment = function(F) {
    return y(F) === r;
  }, Pe.isLazy = function(F) {
    return y(F) === f;
  }, Pe.isMemo = function(F) {
    return y(F) === l;
  }, Pe.isPortal = function(F) {
    return y(F) === t;
  }, Pe.isProfiler = function(F) {
    return y(F) === i;
  }, Pe.isStrictMode = function(F) {
    return y(F) === n;
  }, Pe.isSuspense = function(F) {
    return y(F) === c;
  }, Pe.isValidElementType = function(F) {
    return typeof F == "string" || typeof F == "function" || F === r || F === i || F === m || F === n || F === c || F === u || F === g || typeof F == "object" && F !== null && (F.$$typeof === f || F.$$typeof === l || F.$$typeof === a || F.$$typeof === o || F.$$typeof === s || F.$$typeof === p || F.$$typeof === h || F[0] === d);
  }, Pe.typeOf = y, Pe;
}
var Ee = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function yf() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, o = 60110, s = 60112, c = 60113, u = 60120, l = 60115, f = 60116, h = 60121, d = 60122, p = 60117, m = 60129, g = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var R = Symbol.for;
      e = R("react.element"), t = R("react.portal"), r = R("react.fragment"), n = R("react.strict_mode"), i = R("react.profiler"), a = R("react.provider"), o = R("react.context"), s = R("react.forward_ref"), c = R("react.suspense"), u = R("react.suspense_list"), l = R("react.memo"), f = R("react.lazy"), h = R("react.block"), d = R("react.server.block"), p = R("react.fundamental"), R("react.scope"), R("react.opaque.id"), m = R("react.debug_trace_mode"), R("react.offscreen"), g = R("react.legacy_hidden");
    }
    var y = !1;
    function b(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === i || H === m || H === n || H === c || H === u || H === g || y || typeof H == "object" && H !== null && (H.$$typeof === f || H.$$typeof === l || H.$$typeof === a || H.$$typeof === o || H.$$typeof === s || H.$$typeof === p || H.$$typeof === h || H[0] === d));
    }
    function S(H) {
      if (typeof H == "object" && H !== null) {
        var x = H.$$typeof;
        switch (x) {
          case e:
            var fe = H.type;
            switch (fe) {
              case r:
              case i:
              case n:
              case c:
              case u:
                return fe;
              default:
                var pe = fe && fe.$$typeof;
                switch (pe) {
                  case o:
                  case s:
                  case f:
                  case l:
                  case a:
                    return pe;
                  default:
                    return x;
                }
            }
          case t:
            return x;
        }
      }
    }
    var v = o, E = a, j = e, D = s, w = r, _ = f, W = l, Z = t, F = i, Y = n, re = c, oe = !1, J = !1;
    function z(H) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(H) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(H) {
      return S(H) === o;
    }
    function L(H) {
      return S(H) === a;
    }
    function I(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function $(H) {
      return S(H) === s;
    }
    function N(H) {
      return S(H) === r;
    }
    function B(H) {
      return S(H) === f;
    }
    function P(H) {
      return S(H) === l;
    }
    function Q(H) {
      return S(H) === t;
    }
    function T(H) {
      return S(H) === i;
    }
    function ee(H) {
      return S(H) === n;
    }
    function K(H) {
      return S(H) === c;
    }
    Ee.ContextConsumer = v, Ee.ContextProvider = E, Ee.Element = j, Ee.ForwardRef = D, Ee.Fragment = w, Ee.Lazy = _, Ee.Memo = W, Ee.Portal = Z, Ee.Profiler = F, Ee.StrictMode = Y, Ee.Suspense = re, Ee.isAsyncMode = z, Ee.isConcurrentMode = ae, Ee.isContextConsumer = C, Ee.isContextProvider = L, Ee.isElement = I, Ee.isForwardRef = $, Ee.isFragment = N, Ee.isLazy = B, Ee.isMemo = P, Ee.isPortal = Q, Ee.isProfiler = T, Ee.isStrictMode = ee, Ee.isSuspense = K, Ee.isValidElementType = b, Ee.typeOf = S;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ii.exports = gf() : Ii.exports = yf();
var Wa = Ii.exports;
function bf(e) {
  function t(I, $, N, B, P) {
    for (var Q = 0, T = 0, ee = 0, K = 0, H, x, fe = 0, pe = 0, ue, je = ue = H = 0, de = 0, xe = 0, qe = 0, Le = 0, ct = N.length, lt = ct - 1, Ke, le = "", _e = "", Tt = "", ot = "", Ue; de < ct; ) {
      if (x = N.charCodeAt(de), de === lt && T + K + ee + Q !== 0 && (T !== 0 && (x = T === 47 ? 10 : 47), K = ee = Q = 0, ct++, lt++), T + K + ee + Q === 0) {
        if (de === lt && (0 < xe && (le = le.replace(h, "")), 0 < le.trim().length)) {
          switch (x) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              le += N.charAt(de);
          }
          x = 59;
        }
        switch (x) {
          case 123:
            for (le = le.trim(), H = le.charCodeAt(0), ue = 1, Le = ++de; de < ct; ) {
              switch (x = N.charCodeAt(de)) {
                case 123:
                  ue++;
                  break;
                case 125:
                  ue--;
                  break;
                case 47:
                  switch (x = N.charCodeAt(de + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (je = de + 1; je < lt; ++je)
                          switch (N.charCodeAt(je)) {
                            case 47:
                              if (x === 42 && N.charCodeAt(je - 1) === 42 && de + 2 !== je) {
                                de = je + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (x === 47) {
                                de = je + 1;
                                break e;
                              }
                          }
                        de = je;
                      }
                  }
                  break;
                case 91:
                  x++;
                case 40:
                  x++;
                case 34:
                case 39:
                  for (; de++ < lt && N.charCodeAt(de) !== x; )
                    ;
              }
              if (ue === 0)
                break;
              de++;
            }
            switch (ue = N.substring(Le, de), H === 0 && (H = (le = le.replace(f, "").trim()).charCodeAt(0)), H) {
              case 64:
                switch (0 < xe && (le = le.replace(h, "")), x = le.charCodeAt(1), x) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    xe = $;
                    break;
                  default:
                    xe = oe;
                }
                if (ue = t($, xe, ue, x, P + 1), Le = ue.length, 0 < z && (xe = r(oe, le, qe), Ue = s(3, ue, xe, $, F, Z, Le, x, P, B), le = xe.join(""), Ue !== void 0 && (Le = (ue = Ue.trim()).length) === 0 && (x = 0, ue = "")), 0 < Le)
                  switch (x) {
                    case 115:
                      le = le.replace(E, o);
                    case 100:
                    case 109:
                    case 45:
                      ue = le + "{" + ue + "}";
                      break;
                    case 107:
                      le = le.replace(y, "$1 $2"), ue = le + "{" + ue + "}", ue = re === 1 || re === 2 && a("@" + ue, 3) ? "@-webkit-" + ue + "@" + ue : "@" + ue;
                      break;
                    default:
                      ue = le + ue, B === 112 && (ue = (_e += ue, ""));
                  }
                else
                  ue = "";
                break;
              default:
                ue = t($, r($, le, qe), ue, B, P + 1);
            }
            Tt += ue, ue = qe = xe = je = H = 0, le = "", x = N.charCodeAt(++de);
            break;
          case 125:
          case 59:
            if (le = (0 < xe ? le.replace(h, "") : le).trim(), 1 < (Le = le.length))
              switch (je === 0 && (H = le.charCodeAt(0), H === 45 || 96 < H && 123 > H) && (Le = (le = le.replace(" ", ":")).length), 0 < z && (Ue = s(1, le, $, I, F, Z, _e.length, B, P, B)) !== void 0 && (Le = (le = Ue.trim()).length) === 0 && (le = "\0\0"), H = le.charCodeAt(0), x = le.charCodeAt(1), H) {
                case 0:
                  break;
                case 64:
                  if (x === 105 || x === 99) {
                    ot += le + N.charAt(de);
                    break;
                  }
                default:
                  le.charCodeAt(Le - 1) !== 58 && (_e += i(le, H, x, le.charCodeAt(2)));
              }
            qe = xe = je = H = 0, le = "", x = N.charCodeAt(++de);
        }
      }
      switch (x) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + H === 0 && B !== 107 && 0 < le.length && (xe = 1, le += "\0"), 0 < z * C && s(0, le, $, I, F, Z, _e.length, B, P, B), Z = 1, F++;
          break;
        case 59:
        case 125:
          if (T + K + ee + Q === 0) {
            Z++;
            break;
          }
        default:
          switch (Z++, Ke = N.charAt(de), x) {
            case 9:
            case 32:
              if (K + Q + T === 0)
                switch (fe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ke = "";
                    break;
                  default:
                    x !== 32 && (Ke = " ");
                }
              break;
            case 0:
              Ke = "\\0";
              break;
            case 12:
              Ke = "\\f";
              break;
            case 11:
              Ke = "\\v";
              break;
            case 38:
              K + T + Q === 0 && (xe = qe = 1, Ke = "\f" + Ke);
              break;
            case 108:
              if (K + T + Q + Y === 0 && 0 < je)
                switch (de - je) {
                  case 2:
                    fe === 112 && N.charCodeAt(de - 3) === 58 && (Y = fe);
                  case 8:
                    pe === 111 && (Y = pe);
                }
              break;
            case 58:
              K + T + Q === 0 && (je = de);
              break;
            case 44:
              T + ee + K + Q === 0 && (xe = 1, Ke += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (K = K === x ? 0 : K === 0 ? x : K);
              break;
            case 91:
              K + T + ee === 0 && Q++;
              break;
            case 93:
              K + T + ee === 0 && Q--;
              break;
            case 41:
              K + T + Q === 0 && ee--;
              break;
            case 40:
              if (K + T + Q === 0) {
                if (H === 0)
                  switch (2 * fe + 3 * pe) {
                    case 533:
                      break;
                    default:
                      H = 1;
                  }
                ee++;
              }
              break;
            case 64:
              T + ee + K + Q + je + ue === 0 && (ue = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + Q + ee))
                switch (T) {
                  case 0:
                    switch (2 * x + 3 * N.charCodeAt(de + 1)) {
                      case 235:
                        T = 47;
                        break;
                      case 220:
                        Le = de, T = 42;
                    }
                    break;
                  case 42:
                    x === 47 && fe === 42 && Le + 2 !== de && (N.charCodeAt(Le + 2) === 33 && (_e += N.substring(Le, de + 1)), Ke = "", T = 0);
                }
          }
          T === 0 && (le += Ke);
      }
      pe = fe, fe = x, de++;
    }
    if (Le = _e.length, 0 < Le) {
      if (xe = $, 0 < z && (Ue = s(2, _e, xe, I, F, Z, Le, B, P, B), Ue !== void 0 && (_e = Ue).length === 0))
        return ot + _e + Tt;
      if (_e = xe.join(",") + "{" + _e + "}", re * Y !== 0) {
        switch (re !== 2 || a(_e, 2) || (Y = 0), Y) {
          case 111:
            _e = _e.replace(S, ":-moz-$1") + _e;
            break;
          case 112:
            _e = _e.replace(b, "::-webkit-input-$1") + _e.replace(b, "::-moz-$1") + _e.replace(b, ":-ms-input-$1") + _e;
        }
        Y = 0;
      }
    }
    return ot + _e + Tt;
  }
  function r(I, $, N) {
    var B = $.trim().split(g);
    $ = B;
    var P = B.length, Q = I.length;
    switch (Q) {
      case 0:
      case 1:
        var T = 0;
        for (I = Q === 0 ? "" : I[0] + " "; T < P; ++T)
          $[T] = n(I, $[T], N).trim();
        break;
      default:
        var ee = T = 0;
        for ($ = []; T < P; ++T)
          for (var K = 0; K < Q; ++K)
            $[ee++] = n(I[K] + " ", B[T], N).trim();
    }
    return $;
  }
  function n(I, $, N) {
    var B = $.charCodeAt(0);
    switch (33 > B && (B = ($ = $.trim()).charCodeAt(0)), B) {
      case 38:
        return $.replace(R, "$1" + I.trim());
      case 58:
        return I.trim() + $.replace(R, "$1" + I.trim());
      default:
        if (0 < 1 * N && 0 < $.indexOf("\f"))
          return $.replace(R, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + $;
  }
  function i(I, $, N, B) {
    var P = I + ";", Q = 2 * $ + 3 * N + 4 * B;
    if (Q === 944) {
      I = P.indexOf(":", 9) + 1;
      var T = P.substring(I, P.length - 1).trim();
      return T = P.substring(0, I).trim() + T + ";", re === 1 || re === 2 && a(T, 1) ? "-webkit-" + T + T : T;
    }
    if (re === 0 || re === 2 && !a(P, 1))
      return P;
    switch (Q) {
      case 1015:
        return P.charCodeAt(10) === 97 ? "-webkit-" + P + P : P;
      case 951:
        return P.charCodeAt(3) === 116 ? "-webkit-" + P + P : P;
      case 963:
        return P.charCodeAt(5) === 110 ? "-webkit-" + P + P : P;
      case 1009:
        if (P.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + P + P;
      case 978:
        return "-webkit-" + P + "-moz-" + P + P;
      case 1019:
      case 983:
        return "-webkit-" + P + "-moz-" + P + "-ms-" + P + P;
      case 883:
        if (P.charCodeAt(8) === 45)
          return "-webkit-" + P + P;
        if (0 < P.indexOf("image-set(", 11))
          return P.replace(W, "$1-webkit-$2") + P;
        break;
      case 932:
        if (P.charCodeAt(4) === 45)
          switch (P.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + P.replace("-grow", "") + "-webkit-" + P + "-ms-" + P.replace("grow", "positive") + P;
            case 115:
              return "-webkit-" + P + "-ms-" + P.replace("shrink", "negative") + P;
            case 98:
              return "-webkit-" + P + "-ms-" + P.replace("basis", "preferred-size") + P;
          }
        return "-webkit-" + P + "-ms-" + P + P;
      case 964:
        return "-webkit-" + P + "-ms-flex-" + P + P;
      case 1023:
        if (P.charCodeAt(8) !== 99)
          break;
        return T = P.substring(P.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + P + "-ms-flex-pack" + T + P;
      case 1005:
        return p.test(P) ? P.replace(d, ":-webkit-") + P.replace(d, ":-moz-") + P : P;
      case 1e3:
        switch (T = P.substring(13).trim(), $ = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt($)) {
          case 226:
            T = P.replace(v, "tb");
            break;
          case 232:
            T = P.replace(v, "tb-rl");
            break;
          case 220:
            T = P.replace(v, "lr");
            break;
          default:
            return P;
        }
        return "-webkit-" + P + "-ms-" + T + P;
      case 1017:
        if (P.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch ($ = (P = I).length - 10, T = (P.charCodeAt($) === 33 ? P.substring(0, $) : P).substring(I.indexOf(":", 7) + 1).trim(), Q = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8))
              break;
          case 115:
            P = P.replace(T, "-webkit-" + T) + ";" + P;
            break;
          case 207:
          case 102:
            P = P.replace(T, "-webkit-" + (102 < Q ? "inline-" : "") + "box") + ";" + P.replace(T, "-webkit-" + T) + ";" + P.replace(T, "-ms-" + T + "box") + ";" + P;
        }
        return P + ";";
      case 938:
        if (P.charCodeAt(5) === 45)
          switch (P.charCodeAt(6)) {
            case 105:
              return T = P.replace("-items", ""), "-webkit-" + P + "-webkit-box-" + T + "-ms-flex-" + T + P;
            case 115:
              return "-webkit-" + P + "-ms-flex-item-" + P.replace(D, "") + P;
            default:
              return "-webkit-" + P + "-ms-flex-line-pack" + P.replace("align-content", "").replace(D, "") + P;
          }
        break;
      case 973:
      case 989:
        if (P.charCodeAt(3) !== 45 || P.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (_.test(I) === !0)
          return (T = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(I.replace("stretch", "fill-available"), $, N, B).replace(":fill-available", ":stretch") : P.replace(T, "-webkit-" + T) + P.replace(T, "-moz-" + T.replace("fill-", "")) + P;
        break;
      case 962:
        if (P = "-webkit-" + P + (P.charCodeAt(5) === 102 ? "-ms-" + P : "") + P, N + B === 211 && P.charCodeAt(13) === 105 && 0 < P.indexOf("transform", 10))
          return P.substring(0, P.indexOf(";", 27) + 1).replace(m, "$1-webkit-$2") + P;
    }
    return P;
  }
  function a(I, $) {
    var N = I.indexOf($ === 1 ? ":" : "{"), B = I.substring(0, $ !== 3 ? N : 10);
    return N = I.substring(N + 1, I.length - 1), ae($ !== 2 ? B : B.replace(w, "$1"), N, $);
  }
  function o(I, $) {
    var N = i($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return N !== $ + ";" ? N.replace(j, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function s(I, $, N, B, P, Q, T, ee, K, H) {
    for (var x = 0, fe = $, pe; x < z; ++x)
      switch (pe = J[x].call(l, I, fe, N, B, P, Q, T, ee, K, H)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = pe;
      }
    if (fe !== $)
      return fe;
  }
  function c(I) {
    switch (I) {
      case void 0:
      case null:
        z = J.length = 0;
        break;
      default:
        if (typeof I == "function")
          J[z++] = I;
        else if (typeof I == "object")
          for (var $ = 0, N = I.length; $ < N; ++$)
            c(I[$]);
        else
          C = !!I | 0;
    }
    return c;
  }
  function u(I) {
    return I = I.prefix, I !== void 0 && (ae = null, I ? typeof I != "function" ? re = 1 : (re = 2, ae = I) : re = 0), u;
  }
  function l(I, $) {
    var N = I;
    if (33 > N.charCodeAt(0) && (N = N.trim()), L = N, N = [L], 0 < z) {
      var B = s(-1, $, N, N, F, Z, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && ($ = B);
    }
    var P = t(oe, N, $, 0, 0);
    return 0 < z && (B = s(-2, P, N, N, F, Z, P.length, 0, 0, 0), B !== void 0 && (P = B)), L = "", Y = 0, Z = F = 1, P;
  }
  var f = /^\0+/g, h = /[\0\r\f]/g, d = /: */g, p = /zoo|gra/, m = /([,: ])(transform)/g, g = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, b = /::(place)/g, S = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, E = /\(\s*(.*)\s*\)/g, j = /([\s\S]*?);/g, D = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, _ = /stretch|:\s*\w+\-(?:conte|avail)/, W = /([^-])(image-set\()/, Z = 1, F = 1, Y = 0, re = 1, oe = [], J = [], z = 0, ae = null, C = 0, L = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
var wf = {
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
function Sf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Of = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Do = /* @__PURE__ */ Sf(
  function(e) {
    return Of.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ni = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Rf() {
  if (Mo)
    return ye;
  Mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function b(v) {
    if (typeof v == "object" && v !== null) {
      var E = v.$$typeof;
      switch (E) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case n:
            case a:
            case i:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case l:
                case p:
                case d:
                case o:
                  return v;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function S(v) {
    return b(v) === u;
  }
  return ye.AsyncMode = c, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = o, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = p, ye.Memo = d, ye.Portal = r, ye.Profiler = a, ye.StrictMode = i, ye.Suspense = f, ye.isAsyncMode = function(v) {
    return S(v) || b(v) === c;
  }, ye.isConcurrentMode = S, ye.isContextConsumer = function(v) {
    return b(v) === s;
  }, ye.isContextProvider = function(v) {
    return b(v) === o;
  }, ye.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ye.isForwardRef = function(v) {
    return b(v) === l;
  }, ye.isFragment = function(v) {
    return b(v) === n;
  }, ye.isLazy = function(v) {
    return b(v) === p;
  }, ye.isMemo = function(v) {
    return b(v) === d;
  }, ye.isPortal = function(v) {
    return b(v) === r;
  }, ye.isProfiler = function(v) {
    return b(v) === a;
  }, ye.isStrictMode = function(v) {
    return b(v) === i;
  }, ye.isSuspense = function(v) {
    return b(v) === f;
  }, ye.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === a || v === i || v === f || v === h || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === o || v.$$typeof === s || v.$$typeof === l || v.$$typeof === g || v.$$typeof === R || v.$$typeof === y || v.$$typeof === m);
  }, ye.typeOf = b, ye;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Pf() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function b(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === u || x === a || x === i || x === f || x === h || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === d || x.$$typeof === o || x.$$typeof === s || x.$$typeof === l || x.$$typeof === g || x.$$typeof === R || x.$$typeof === y || x.$$typeof === m);
    }
    function S(x) {
      if (typeof x == "object" && x !== null) {
        var fe = x.$$typeof;
        switch (fe) {
          case t:
            var pe = x.type;
            switch (pe) {
              case c:
              case u:
              case n:
              case a:
              case i:
              case f:
                return pe;
              default:
                var ue = pe && pe.$$typeof;
                switch (ue) {
                  case s:
                  case l:
                  case p:
                  case d:
                  case o:
                    return ue;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = c, E = u, j = s, D = o, w = t, _ = l, W = n, Z = p, F = d, Y = r, re = a, oe = i, J = f, z = !1;
    function ae(x) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(x) || S(x) === c;
    }
    function C(x) {
      return S(x) === u;
    }
    function L(x) {
      return S(x) === s;
    }
    function I(x) {
      return S(x) === o;
    }
    function $(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function N(x) {
      return S(x) === l;
    }
    function B(x) {
      return S(x) === n;
    }
    function P(x) {
      return S(x) === p;
    }
    function Q(x) {
      return S(x) === d;
    }
    function T(x) {
      return S(x) === r;
    }
    function ee(x) {
      return S(x) === a;
    }
    function K(x) {
      return S(x) === i;
    }
    function H(x) {
      return S(x) === f;
    }
    be.AsyncMode = v, be.ConcurrentMode = E, be.ContextConsumer = j, be.ContextProvider = D, be.Element = w, be.ForwardRef = _, be.Fragment = W, be.Lazy = Z, be.Memo = F, be.Portal = Y, be.Profiler = re, be.StrictMode = oe, be.Suspense = J, be.isAsyncMode = ae, be.isConcurrentMode = C, be.isContextConsumer = L, be.isContextProvider = I, be.isElement = $, be.isForwardRef = N, be.isFragment = B, be.isLazy = P, be.isMemo = Q, be.isPortal = T, be.isProfiler = ee, be.isStrictMode = K, be.isSuspense = H, be.isValidElementType = b, be.typeOf = S;
  }()), be;
}
process.env.NODE_ENV === "production" ? Ni.exports = Rf() : Ni.exports = Pf();
var Ef = Ni.exports, Ua = Ef, xf = {
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
}, _f = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, jf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ba = {};
Ba[Ua.ForwardRef] = jf;
Ba[Ua.Memo] = Fu;
function Ho(e) {
  return Ua.isMemo(e) ? Fu : Ba[e.$$typeof] || xf;
}
var Tf = Object.defineProperty, Af = Object.getOwnPropertyNames, Wo = Object.getOwnPropertySymbols, $f = Object.getOwnPropertyDescriptor, Cf = Object.getPrototypeOf, Uo = Object.prototype;
function Iu(e, t, r) {
  if (typeof t != "string") {
    if (Uo) {
      var n = Cf(t);
      n && n !== Uo && Iu(e, n, r);
    }
    var i = Af(t);
    Wo && (i = i.concat(Wo(t)));
    for (var a = Ho(e), o = Ho(t), s = 0; s < i.length; ++s) {
      var c = i[s];
      if (!_f[c] && !(r && r[c]) && !(o && o[c]) && !(a && a[c])) {
        var u = $f(t, c);
        try {
          Tf(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ff = Iu;
const If = /* @__PURE__ */ cr(Ff);
function Rt() {
  return (Rt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Bo = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, ki = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wa.typeOf(e);
}, Hn = Object.freeze([]), Lt = Object.freeze({});
function Tr(e) {
  return typeof e == "function";
}
function Di(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function qa(e) {
  return e && typeof e.styledComponentId == "string";
}
var nr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Va = typeof window < "u" && "HTMLElement" in window, Nf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), kf = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Df() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function lr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Df.apply(void 0, [kf[e]].concat(r)).trim());
}
var Mf = function() {
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
      for (var i = this.groupSizes, a = i.length, o = a; r >= o; )
        (o <<= 1) < 0 && lr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(i), this.length = o;
      for (var s = a; s < o; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), u = 0, l = n.length; u < l; u++)
      this.tag.insertRule(c, n[u]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), a = i + n;
      this.groupSizes[r] = 0;
      for (var o = i; o < a; o++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], a = this.indexOfGroup(r), o = a + i, s = a; s < o; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), Fn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), xr = 1, Sn = function(e) {
  if (Fn.has(e))
    return Fn.get(e);
  for (; Wn.has(xr); )
    xr++;
  var t = xr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && lr(16, "" + t), Fn.set(e, t), Wn.set(t, e), t;
}, Lf = function(e) {
  return Wn.get(e);
}, Hf = function(e, t) {
  t >= xr && (xr = t + 1), Fn.set(e, t), Wn.set(t, e);
}, Wf = "style[" + nr + '][data-styled-version="5.3.11"]', Uf = new RegExp("^" + nr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Bf = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, o = i.length; a < o; a++)
    (n = i[a]) && e.registerName(t, n);
}, qf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, a = r.length; i < a; i++) {
    var o = r[i].trim();
    if (o) {
      var s = o.match(Uf);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[2];
        c !== 0 && (Hf(u, c), Bf(e, u, s[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(o);
    }
  }
}, Vf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Nu = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(s) {
    for (var c = s.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(nr))
        return l;
    }
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(nr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = Vf();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, a), n;
}, zf = function() {
  function e(r) {
    var n = this.element = Nu(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var a = document.styleSheets, o = 0, s = a.length; o < s; o++) {
        var c = a[o];
        if (c.ownerNode === i)
          return c;
      }
      lr(17);
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
}(), Qf = function() {
  function e(r) {
    var n = this.element = Nu(r);
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
}(), Yf = function() {
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
}(), qo = Va, Kf = { isServer: !Va, useCSSOMInjection: !Nf }, ku = function() {
  function e(r, n, i) {
    r === void 0 && (r = Lt), n === void 0 && (n = {}), this.options = Rt({}, Kf, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Va && qo && (qo = !1, function(a) {
      for (var o = document.querySelectorAll(Wf), s = 0, c = o.length; s < c; s++) {
        var u = o[s];
        u && u.getAttribute(nr) !== "active" && (qf(a, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Sn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Rt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, a = n.useCSSOMInjection, o = n.target, r = i ? new Yf(o) : a ? new zf(o) : new Qf(o), new Mf(r)));
    var r, n, i, a, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Sn(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Sn(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Sn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, a = "", o = 0; o < i; o++) {
        var s = Lf(o);
        if (s !== void 0) {
          var c = r.names.get(s), u = n.getGroup(o);
          if (c && u && c.size) {
            var l = nr + ".g" + o + '[id="' + s + '"]', f = "";
            c !== void 0 && c.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), a += "" + u + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), Gf = /(a)(d)/gi, Vo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Vo(t % 52) + r;
  return (Vo(t % 52) + r).replace(Gf, "$1-$2");
}
var zt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Du = function(e) {
  return zt(5381, e);
};
function Xf(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Tr(r) && !qa(r))
      return !1;
  }
  return !0;
}
var Zf = Du("5.3.11"), Jf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Xf(t), this.componentId = r, this.baseHash = zt(Zf, r), this.baseStyle = n, ku.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        a.push(this.staticRulesId);
      else {
        var o = ir(this.rules, t, r, n).join(""), s = Mi(zt(this.baseHash, o) >>> 0);
        if (!r.hasNameForId(i, s)) {
          var c = n(o, "." + s, void 0, i);
          r.insertRules(i, s, c);
        }
        a.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, l = zt(this.baseHash, n.hash), f = "", h = 0; h < u; h++) {
        var d = this.rules[h];
        if (typeof d == "string")
          f += d, process.env.NODE_ENV !== "production" && (l = zt(l, d + h));
        else if (d) {
          var p = ir(d, t, r, n), m = Array.isArray(p) ? p.join("") : p;
          l = zt(l, m + h), f += m;
        }
      }
      if (f) {
        var g = Mi(l >>> 0);
        if (!r.hasNameForId(i, g)) {
          var R = n(f, "." + g, void 0, i);
          r.insertRules(i, g, R);
        }
        a.push(g);
      }
    }
    return a.join(" ");
  }, e;
}(), ed = /^\s*\/\/.*$/gm, td = [":", "[", ".", "#"];
function rd(e) {
  var t, r, n, i, a = e === void 0 ? Lt : e, o = a.options, s = o === void 0 ? Lt : o, c = a.plugins, u = c === void 0 ? Hn : c, l = new bf(s), f = [], h = function(m) {
    function g(R) {
      if (R)
        try {
          m(R + "}");
        } catch {
        }
    }
    return function(R, y, b, S, v, E, j, D, w, _) {
      switch (R) {
        case 1:
          if (w === 0 && y.charCodeAt(0) === 64)
            return m(y + ";"), "";
          break;
        case 2:
          if (D === 0)
            return y + "/*|*/";
          break;
        case 3:
          switch (D) {
            case 102:
            case 112:
              return m(b[0] + y), "";
            default:
              return y + (_ === 0 ? "/*|*/" : "");
          }
        case -2:
          y.split("/*|*/}").forEach(g);
      }
    };
  }(function(m) {
    f.push(m);
  }), d = function(m, g, R) {
    return g === 0 && td.indexOf(R[r.length]) !== -1 || R.match(i) ? m : "." + t;
  };
  function p(m, g, R, y) {
    y === void 0 && (y = "&");
    var b = m.replace(ed, ""), S = g && R ? R + " " + g + " { " + b + " }" : b;
    return t = y, r = g, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), l(R || !g ? "" : g, S);
  }
  return l.use([].concat(u, [function(m, g, R) {
    m === 2 && R.length && R[0].lastIndexOf(r) > 0 && (R[0] = R[0].replace(n, d));
  }, h, function(m) {
    if (m === -2) {
      var g = f;
      return f = [], g;
    }
  }])), p.hash = u.length ? u.reduce(function(m, g) {
    return g.name || lr(15), zt(m, g.name);
  }, 5381).toString() : "", p;
}
var Mu = U.createContext();
Mu.Consumer;
var Lu = U.createContext(), nd = (Lu.Consumer, new ku()), Li = rd();
function id() {
  return Kt(Mu) || nd;
}
function ad() {
  return Kt(Lu) || Li;
}
var od = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = Li);
      var o = n.name + a.hash;
      i.hasNameForId(n.id, o) || i.insertRules(n.id, o, a(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return lr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Li), this.name + t.hash;
  }, e;
}(), sd = /([A-Z])/, ud = /([A-Z])/g, cd = /^ms-/, ld = function(e) {
  return "-" + e.toLowerCase();
};
function zo(e) {
  return sd.test(e) ? e.replace(ud, ld).replace(cd, "-ms-") : e;
}
var Qo = function(e) {
  return e == null || e === !1 || e === "";
};
function ir(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, a = [], o = 0, s = e.length; o < s; o += 1)
      (i = ir(e[o], t, r, n)) !== "" && (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
    return a;
  }
  if (Qo(e))
    return "";
  if (qa(e))
    return "." + e.styledComponentId;
  if (Tr(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && Wa.isElement(c) && console.warn(Di(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ir(c, t, r, n);
  }
  var u;
  return e instanceof od ? r ? (e.inject(r, n), e.getName(n)) : e : ki(e) ? function l(f, h) {
    var d, p, m = [];
    for (var g in f)
      f.hasOwnProperty(g) && !Qo(f[g]) && (Array.isArray(f[g]) && f[g].isCss || Tr(f[g]) ? m.push(zo(g) + ":", f[g], ";") : ki(f[g]) ? m.push.apply(m, l(f[g], g)) : m.push(zo(g) + ": " + (d = g, (p = f[g]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || d in wf || d.startsWith("--") ? String(p).trim() : p + "px") + ";"));
    return h ? [h + " {"].concat(m, ["}"]) : m;
  }(e) : e.toString();
}
var Yo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function fd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Tr(e) || ki(e) ? Yo(ir(Bo(Hn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Yo(ir(Bo(e, r)));
}
var Ko = /invalid hook call/i, On = /* @__PURE__ */ new Set(), dd = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        if (Ko.test(a))
          i = !1, On.delete(r);
        else {
          for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
            s[c - 1] = arguments[c];
          n.apply(void 0, [a].concat(s));
        }
      }, ut(), i && !On.has(r) && (console.warn(r), On.add(r));
    } catch (a) {
      Ko.test(a.message) && On.delete(r);
    } finally {
      console.error = n;
    }
  }
}, hd = function(e, t, r) {
  return r === void 0 && (r = Lt), e.theme !== r.theme && e.theme || t || r.theme;
}, pd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vd = /(^-|-$)/g;
function ai(e) {
  return e.replace(pd, "-").replace(vd, "");
}
var md = function(e) {
  return Mi(Du(e) >>> 0);
};
function Rn(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Hi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, gd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function yd(e, t, r) {
  var n = e[r];
  Hi(t) && Hi(n) ? Hu(n, t) : e[r] = t;
}
function Hu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, a = r; i < a.length; i++) {
    var o = a[i];
    if (Hi(o))
      for (var s in o)
        gd(s) && yd(e, o[s], s);
  }
  return e;
}
var Wu = U.createContext();
Wu.Consumer;
var oi = {};
function Uu(e, t, r) {
  var n = qa(e), i = !Rn(e), a = t.attrs, o = a === void 0 ? Hn : a, s = t.componentId, c = s === void 0 ? function(y, b) {
    var S = typeof y != "string" ? "sc" : ai(y);
    oi[S] = (oi[S] || 0) + 1;
    var v = S + "-" + md("5.3.11" + S + oi[S]);
    return b ? b + "-" + v : v;
  }(t.displayName, t.parentComponentId) : s, u = t.displayName, l = u === void 0 ? function(y) {
    return Rn(y) ? "styled." + y : "Styled(" + Di(y) + ")";
  }(e) : u, f = t.displayName && t.componentId ? ai(t.displayName) + "-" + t.componentId : t.componentId || c, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, d = t.shouldForwardProp;
  n && e.shouldForwardProp && (d = t.shouldForwardProp ? function(y, b, S) {
    return e.shouldForwardProp(y, b, S) && t.shouldForwardProp(y, b, S);
  } : e.shouldForwardProp);
  var p, m = new Jf(r, f, n ? e.componentStyle : void 0), g = m.isStatic && o.length === 0, R = function(y, b) {
    return function(S, v, E, j) {
      var D = S.attrs, w = S.componentStyle, _ = S.defaultProps, W = S.foldedComponentIds, Z = S.shouldForwardProp, F = S.styledComponentId, Y = S.target, re = function(B, P, Q) {
        B === void 0 && (B = Lt);
        var T = Rt({}, P, { theme: B }), ee = {};
        return Q.forEach(function(K) {
          var H, x, fe, pe = K;
          for (H in Tr(pe) && (pe = pe(T)), pe)
            T[H] = ee[H] = H === "className" ? (x = ee[H], fe = pe[H], x && fe ? x + " " + fe : x || fe) : pe[H];
        }), [T, ee];
      }(hd(v, Kt(Wu), _) || Lt, v, D), oe = re[0], J = re[1], z = function(B, P, Q, T) {
        var ee = id(), K = ad(), H = P ? B.generateAndInjectStyles(Lt, ee, K) : B.generateAndInjectStyles(Q, ee, K);
        return process.env.NODE_ENV !== "production" && !P && T && T(H), H;
      }(w, j, oe, process.env.NODE_ENV !== "production" ? S.warnTooManyClasses : void 0), ae = E, C = J.$as || v.$as || J.as || v.as || Y, L = Rn(C), I = J !== v ? Rt({}, v, {}, J) : v, $ = {};
      for (var N in I)
        N[0] !== "$" && N !== "as" && (N === "forwardedAs" ? $.as = I[N] : (Z ? Z(N, Do, C) : !L || Do(N)) && ($[N] = I[N]));
      return v.style && J.style !== v.style && ($.style = Rt({}, v.style, {}, J.style)), $.className = Array.prototype.concat(W, F, z !== F ? z : null, v.className, J.className).filter(Boolean).join(" "), $.ref = ae, sl(C, $);
    }(p, y, b, g);
  };
  return R.displayName = l, (p = U.forwardRef(R)).attrs = h, p.componentStyle = m, p.displayName = l, p.shouldForwardProp = d, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Hn, p.styledComponentId = f, p.target = n ? e.target : e, p.withComponent = function(y) {
    var b = t.componentId, S = function(E, j) {
      if (E == null)
        return {};
      var D, w, _ = {}, W = Object.keys(E);
      for (w = 0; w < W.length; w++)
        D = W[w], j.indexOf(D) >= 0 || (_[D] = E[D]);
      return _;
    }(t, ["componentId"]), v = b && b + "-" + (Rn(y) ? y : ai(Di(y)));
    return Uu(y, Rt({}, S, { attrs: h, componentId: v }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = n ? Hu({}, e.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (dd(l, f), p.warnTooManyClasses = function(y, b) {
    var S = {}, v = !1;
    return function(E) {
      if (!v && (S[E] = !0, Object.keys(S).length >= 200)) {
        var j = b ? ' with the id of "' + b + '"' : "";
        console.warn("Over 200 classes were generated for component " + y + j + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, S = {};
      }
    };
  }(l, f)), Object.defineProperty(p, "toString", { value: function() {
    return "." + p.styledComponentId;
  } }), i && If(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var Wi = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Lt), !Wa.isValidElementType(n))
      return lr(1, String(n));
    var a = function() {
      return r(n, i, fd.apply(void 0, arguments));
    };
    return a.withConfig = function(o) {
      return t(r, n, Rt({}, i, {}, o));
    }, a.attrs = function(o) {
      return t(r, n, Rt({}, i, { attrs: Array.prototype.concat(i.attrs, o).filter(Boolean) }));
    }, a;
  }(Uu, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Wi[e] = Wi(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const za = Wi, Qa = za.div`
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
`;
const Ui = "6.38.1";
function bd(e) {
  return typeof e == "object" && e !== null ? Ya(Array.isArray(e) ? [] : {}, e) : e;
}
function Un(e) {
  return typeof e == "function" || Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
}
function Ya(e, t) {
  if (e === t)
    return e;
  for (var r in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, r) || r === "__proto__" || r === "constructor")) {
      var n = t[r], i = e[r];
      typeof i < "u" && typeof n > "u" || (Un(i) && Un(n) ? e[r] = Ya(i, n) : e[r] = bd(n));
    }
  return e;
}
function wd(e) {
  Un(e) || (e = {});
  for (var t = 1, r = arguments.length; t < r; t++) {
    var n = arguments[t];
    Un(n) && Ya(e, n);
  }
  return e;
}
var Yn = wd, Ka = function() {
  var t = Array.prototype.slice.call(arguments);
  return t.reduceRight(function(r, n) {
    return Object.keys(Object(n)).forEach(function(i) {
      n[i] !== void 0 && (r[i] !== void 0 && delete r[i], r[i] = n[i]);
    }), r;
  }, {});
};
function Sd(e, t) {
  return e.filter(function(r, n) {
    return t.indexOf(r) > -1 && e.indexOf(r) === n;
  });
}
var Od = Sd, Kn = function(t, r) {
  if (Array.isArray(t)) {
    for (var n = 0; n < t.length; n++)
      if (r(t[n]))
        return t[n];
  }
};
function Bu(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    return parseFloat(e);
  if (Array.isArray(e))
    return e.map(Bu);
  throw new Error("The value should be a number, a parsable string or an array of those.");
}
var Rd = Bu;
function Pd(e, t) {
  if (e === null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ga = Pd;
function Ed(e) {
  return e && Object.keys(e).length > 0;
}
var Xa = Ed, xd = function(t) {
  return t === null ? !1 : /^[a-zA-Z0-9_-]{1,64}$/.test(t);
}, _d = Ka, jd = Ga, Td = Xa, Vt = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function(t, r, n) {
    if (Vt.isRefined(t, r, n))
      return t;
    var i = "" + n, a = t[r] ? t[r].concat(i) : [i], o = {};
    return o[r] = a, _d({}, o, t);
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
      return Vt.clearRefinement(t, function(a, o) {
        return r === o;
      });
    var i = "" + n;
    return Vt.clearRefinement(t, function(a, o) {
      return r === o && i === a;
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
    return Vt.isRefined(t, r, n) ? Vt.removeRefinement(t, r, n) : Vt.addRefinement(t, r, n);
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
      return Td(t) ? {} : t;
    if (typeof r == "string")
      return jd(t, [r]);
    if (typeof r == "function") {
      var i = !1, a = Object.keys(t).reduce(function(o, s) {
        var c = t[s] || [], u = c.filter(function(l) {
          return !r(l, s, n);
        });
        return u.length !== c.length && (i = !0), o[s] = u, o;
      }, {});
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
   * @return {boolean}
   */
  isRefined: function(t, r, n) {
    var i = !!t[r] && t[r].length > 0;
    if (n === void 0 || !i)
      return i;
    var a = "" + n;
    return t[r].indexOf(a) !== -1;
  }
}, Ad = Vt, Bi = Yn, si = Ka, Go = Od, qu = Kn, ui = Rd, Xo = Ga, qi = Xa, $d = xd, De = Ad;
function Za(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(r, n) {
    return Za(t[n], r);
  }) : e === t;
}
function Cd(e, t) {
  return qu(e, function(r) {
    return Za(r, t);
  });
}
function tt(e) {
  var t = e ? tt._parseNumbers(e) : {};
  t.userToken !== void 0 && !$d(t.userToken) && console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
  var r = this;
  Object.keys(t).forEach(function(n) {
    var i = tt.PARAMETERS.indexOf(n) !== -1, a = t[n] !== void 0;
    !i && a && (r[n] = t[n]);
  });
}
tt.PARAMETERS = Object.keys(new tt());
tt._parseNumbers = function(e) {
  if (e instanceof tt)
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
      var o = parseFloat(a);
      t[i] = isNaN(o) ? a : o;
    }
  }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(i) {
    return Array.isArray(i) ? i.map(function(a) {
      return parseFloat(a);
    }) : i;
  })), e.numericRefinements) {
    var n = {};
    Object.keys(e.numericRefinements).forEach(function(i) {
      var a = e.numericRefinements[i] || {};
      n[i] = {}, Object.keys(a).forEach(function(o) {
        var s = a[o], c = s.map(function(u) {
          return Array.isArray(u) ? u.map(function(l) {
            return typeof l == "string" ? parseFloat(l) : l;
          }) : typeof u == "string" ? parseFloat(u) : u;
        });
        n[i][o] = c;
      });
    }), t.numericRefinements = n;
  }
  return Bi({}, e, t);
};
tt.make = function(t) {
  var r = new tt(t), n = t.hierarchicalFacets || [];
  return n.forEach(function(i) {
    if (i.rootPath) {
      var a = r.getHierarchicalRefinement(i.name);
      a.length > 0 && a[0].indexOf(i.rootPath) !== 0 && (r = r.clearRefinements(i.name)), a = r.getHierarchicalRefinement(i.name), a.length === 0 && (r = r.toggleHierarchicalFacetRefinement(i.name, i.rootPath));
    }
  }), r;
};
tt.validate = function(e, t) {
  var r = t || {};
  return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error(
    "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
  ) : e.tagRefinements.length > 0 && r.tagFilters ? new Error(
    "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
  ) : e.numericFilters && r.numericRefinements && qi(r.numericRefinements) ? new Error(
    "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : qi(e.numericRefinements) && r.numericFilters ? new Error(
    "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
  ) : null;
};
tt.prototype = {
  constructor: tt,
  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function(t) {
    var r = {
      numericRefinements: this._clearNumericRefinements(t),
      facetsRefinements: De.clearRefinement(
        this.facetsRefinements,
        t,
        "conjunctiveFacet"
      ),
      facetsExcludes: De.clearRefinement(
        this.facetsExcludes,
        t,
        "exclude"
      ),
      disjunctiveFacetsRefinements: De.clearRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        "disjunctiveFacet"
      ),
      hierarchicalFacetsRefinements: De.clearRefinement(
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function(e, t, r) {
    var n = ui(r);
    if (this.isNumericRefined(e, t, n))
      return this;
    var i = Bi({}, this.numericRefinements);
    return i[e] = Bi({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(n)) : i[e][t] = [n], this.setQueryParameters({
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
   * @return {SearchParameters}
   */
  removeNumericRefinement: function(e, t, r) {
    return r !== void 0 ? this.isNumericRefined(e, t, r) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e && n.op === t && Za(n.val, ui(r));
      })
    }) : this : t !== void 0 ? this.isNumericRefined(e, t) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e && n.op === t;
      })
    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(n, i) {
        return i === e;
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
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function(t) {
    if (t === void 0)
      return qi(this.numericRefinements) ? {} : this.numericRefinements;
    if (typeof t == "string")
      return Xo(this.numericRefinements, [t]);
    if (typeof t == "function") {
      var r = !1, n = this.numericRefinements, i = Object.keys(n).reduce(function(a, o) {
        var s = n[o], c = {};
        return s = s || {}, Object.keys(s).forEach(function(u) {
          var l = s[u] || [], f = [];
          l.forEach(function(h) {
            var d = t({ val: h, op: u }, o, "numeric");
            d || f.push(h);
          }), f.length !== l.length && (r = !0), c[u] = f;
        }), a[o] = c, a;
      }, {});
      return r ? i : this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
   */
  addFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return De.isRefined(this.facetsRefinements, t, r) ? this : this.setQueryParameters({
      facetsRefinements: De.addRefinement(this.facetsRefinements, t, r)
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return De.isRefined(this.facetsExcludes, t, r) ? this : this.setQueryParameters({
      facetsExcludes: De.addRefinement(this.facetsExcludes, t, r)
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return De.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this : this.setQueryParameters({
      disjunctiveFacetsRefinements: De.addRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      )
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
   */
  removeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return De.isRefined(this.facetsRefinements, t, r) ? this.setQueryParameters({
      facetsRefinements: De.removeRefinement(this.facetsRefinements, t, r)
    }) : this;
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return De.isRefined(this.facetsExcludes, t, r) ? this.setQueryParameters({
      facetsExcludes: De.removeRefinement(this.facetsExcludes, t, r)
    }) : this;
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return De.isRefined(this.disjunctiveFacetsRefinements, t, r) ? this.setQueryParameters({
      disjunctiveFacetsRefinements: De.removeRefinement(
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
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
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function(t, r) {
    if (this.isHierarchicalFacet(t))
      return this.toggleHierarchicalFacetRefinement(t, r);
    if (this.isConjunctiveFacet(t))
      return this.toggleConjunctiveFacetRefinement(t, r);
    if (this.isDisjunctiveFacet(t))
      return this.toggleDisjunctiveFacetRefinement(t, r);
    throw new Error("Cannot refine the undeclared facet " + t + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({
      facetsRefinements: De.toggleRefinement(this.facetsRefinements, t, r)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function(t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(t + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({
      facetsExcludes: De.toggleRefinement(this.facetsExcludes, t, r)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function(t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t + " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: De.toggleRefinement(
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
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function(t, r) {
    if (!this.isHierarchicalFacet(t))
      throw new Error(
        t + " is not defined in the hierarchicalFacets attribute of the helper configuration"
      );
    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(t)), i = {}, a = this.hierarchicalFacetsRefinements[t] !== void 0 && this.hierarchicalFacetsRefinements[t].length > 0 && // remove current refinement:
    // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
    (this.hierarchicalFacetsRefinements[t][0] === r || // remove a parent refinement of the current refinement:
    //  - refinement was 'beer > IPA > Flying dog'
    //  - call is toggleRefine('beer > IPA')
    //  - refinement should be `beer`
    this.hierarchicalFacetsRefinements[t][0].indexOf(r + n) === 0);
    return a ? r.indexOf(n) === -1 ? i[t] = [] : i[t] = [r.slice(0, r.lastIndexOf(n))] : i[t] = [r], this.setQueryParameters({
      hierarchicalFacetsRefinements: si({}, i, this.hierarchicalFacetsRefinements)
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
      throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
    var r = {};
    return r[e] = [t], this.setQueryParameters({
      hierarchicalFacetsRefinements: si({}, r, this.hierarchicalFacetsRefinements)
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
      hierarchicalFacetsRefinements: si({}, t, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function(t) {
    return this.isTagRefined(t) ? this.removeTagRefinement(t) : this.addTagRefinement(t);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function(e) {
    return this.disjunctiveFacets.indexOf(e) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function(e) {
    return this.getHierarchicalFacetByName(e) !== void 0;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
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
    return this.isConjunctiveFacet(t) ? De.isRefined(this.facetsRefinements, t, r) : !1;
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
    return this.isConjunctiveFacet(t) ? De.isRefined(this.facetsExcludes, t, r) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function(t, r) {
    return this.isDisjunctiveFacet(t) ? De.isRefined(this.disjunctiveFacetsRefinements, t, r) : !1;
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
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
    var a = ui(n), o = Cd(this.numericRefinements[t][r], a) !== void 0;
    return i && o;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function(t) {
    return this.tagRefinements.indexOf(t) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function() {
    var t = this, r = Go(
      Object.keys(this.numericRefinements).filter(function(n) {
        return Object.keys(t.numericRefinements[n]).length > 0;
      }),
      this.disjunctiveFacets
    );
    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(n) {
      return t.disjunctiveFacetsRefinements[n].length > 0;
    }).concat(r).concat(this.getRefinedHierarchicalFacets());
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function() {
    var t = this;
    return Go(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function(r) {
        return r.name;
      }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function(r) {
        return t.hierarchicalFacetsRefinements[r].length > 0;
      })
    );
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
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
    var r = tt.validate(this, t);
    if (r)
      throw r;
    var n = this, i = tt._parseNumbers(t), a = Object.keys(this).reduce(function(s, c) {
      return s[c] = n[c], s;
    }, {}), o = Object.keys(i).reduce(
      function(s, c) {
        var u = s[c] !== void 0, l = i[c] !== void 0;
        return u && !l ? Xo(s, [c]) : (l && (s[c] = i[c]), s);
      },
      a
    );
    return new this.constructor(o);
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
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function(e) {
    return e.sortBy || ["isRefined:desc", "name:asc"];
  },
  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function(e) {
    return e.separator || " > ";
  },
  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function(e) {
    return e.rootPath || null;
  },
  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function(e) {
    return typeof e.showParentLevel == "boolean" ? e.showParentLevel : !0;
  },
  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function(e) {
    return qu(
      this.hierarchicalFacets,
      function(t) {
        return t.name === e;
      }
    );
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
var Vu = tt;
function Fd(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = t !== void 0, a = t === null;
    if (!a && e > t || n && i || !r)
      return 1;
    if (!n && e < t || a && r || !i)
      return -1;
  }
  return 0;
}
function Id(e, t, r) {
  if (!Array.isArray(e))
    return [];
  Array.isArray(r) || (r = []);
  var n = e.map(function(i, a) {
    return {
      criteria: t.map(function(o) {
        return i[o];
      }),
      index: a,
      value: i
    };
  });
  return n.sort(function(a, o) {
    for (var s = -1; ++s < a.criteria.length; ) {
      var c = Fd(a.criteria[s], o.criteria[s]);
      if (c)
        return s >= r.length ? c : r[s] === "desc" ? -c : c;
    }
    return a.index - o.index;
  }), n.map(function(i) {
    return i.value;
  });
}
var zu = Id, Nd = function(t) {
  return Array.isArray(t) ? t.filter(Boolean) : [];
}, kd = function(t, r) {
  if (!Array.isArray(t))
    return -1;
  for (var n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
  return -1;
}, Dd = Kn, Qu = function(t, r) {
  var n = (r || []).map(function(i) {
    return i.split(":");
  });
  return t.reduce(
    function(a, o) {
      var s = o.split(":"), c = Dd(n, function(u) {
        return u[0] === s[0];
      });
      return s.length > 1 || !c ? (a[0].push(s[0]), a[1].push(s[1]), a) : (a[0].push(c[0]), a[1].push(c[1]), a);
    },
    [[], []]
  );
};
function Md(e) {
  return typeof e != "string" ? e : String(e).replace(/^-/, "\\-");
}
function Ld(e) {
  return typeof e != "string" ? e : e.replace(/^\\-/, "-");
}
var Ja = {
  escapeFacetValue: Md,
  unescapeFacetValue: Ld
}, Hd = zd, Wd = zu, Ud = Kn, Bd = Qu, Yu = Ja, qd = Yu.escapeFacetValue, Vd = Yu.unescapeFacetValue;
function zd(e) {
  return function(r, n) {
    var i = e.hierarchicalFacets[n], a = e.hierarchicalFacetsRefinements[i.name] && e.hierarchicalFacetsRefinements[i.name][0] || "", o = e._getHierarchicalFacetSeparator(
      i
    ), s = e._getHierarchicalRootPath(
      i
    ), c = e._getHierarchicalShowParentLevel(
      i
    ), u = Bd(
      e._getHierarchicalFacetSortBy(i)
    ), l = r.every(function(d) {
      return d.exhaustive;
    }), f = Qd(
      u,
      o,
      s,
      c,
      a
    ), h = r;
    return s && (h = r.slice(
      s.split(o).length
    )), h.reduce(f, {
      name: e.hierarchicalFacets[n].name,
      count: null,
      // root level, no count
      isRefined: !0,
      // root level, always refined
      path: null,
      // root level, no path
      escapedValue: null,
      exhaustive: l,
      data: null
    });
  };
}
function Qd(e, t, r, n, i) {
  return function(o, s, c) {
    var u = o;
    if (c > 0) {
      var l = 0;
      for (u = o; l < c; ) {
        var f = u && Array.isArray(u.data) ? u.data : [];
        u = Ud(f, function(d) {
          return d.isRefined;
        }), l++;
      }
    }
    if (u) {
      var h = Object.keys(s.data).map(function(d) {
        return [d, s.data[d]];
      }).filter(function(d) {
        var p = d[0];
        return Yd(
          p,
          u.path || r,
          i,
          t,
          r,
          n
        );
      });
      u.data = Wd(
        h.map(function(d) {
          var p = d[0], m = d[1];
          return Kd(
            m,
            p,
            t,
            Vd(i),
            s.exhaustive
          );
        }),
        e[0],
        e[1]
      );
    }
    return o;
  };
}
function Yd(e, t, r, n, i, a) {
  return i && (e.indexOf(i) !== 0 || i === e) ? !1 : !i && e.indexOf(n) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
  i && e.split(n).length - i.split(n).length === 1 || // if current refinement is a root level and current facetValue is a root level,
  // keep the facetValue
  e.indexOf(n) === -1 && r.indexOf(n) === -1 || // currentRefinement is a child of the facet value
  r.indexOf(e) === 0 || // facetValue is a child of the current parent, add it
  e.indexOf(t + n) === 0 && (a || e.indexOf(r) === 0);
}
function Kd(e, t, r, n, i) {
  var a = t.split(r);
  return {
    name: a[a.length - 1].trim(),
    path: t,
    escapedValue: qd(t),
    count: e,
    isRefined: n === t || n.indexOf(t + r) === 0,
    exhaustive: i,
    data: null
  };
}
var Gd = Yn, Bn = Ka, Ku = zu, ci = Nd, ht = Kn, wr = kd, Xd = Qu, Gu = Ja, Zo = Gu.escapeFacetValue, Xu = Gu.unescapeFacetValue, Zd = Hd;
function Jo(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
function li(e, t, r) {
  t && t[r] && (e.stats = t[r]);
}
function Jd(e, t) {
  return ht(e, function(n) {
    var i = n.attributes || [];
    return i.indexOf(t) > -1;
  });
}
function Ht(e, t, r) {
  var n = t[0];
  this._rawResults = t;
  var i = this;
  Object.keys(n).forEach(function(l) {
    i[l] = n[l];
  }), Object.keys(r || {}).forEach(function(l) {
    i[l] = r[l];
  }), this.processingTimeMS = t.reduce(function(l, f) {
    return f.processingTimeMS === void 0 ? l : l + f.processingTimeMS;
  }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map(function() {
    return [];
  }), this.facets = [];
  var a = e.getRefinedDisjunctiveFacets(), o = Jo(e.facets), s = Jo(e.disjunctiveFacets), c = 1, u = n.facets || {};
  Object.keys(u).forEach(function(l) {
    var f = u[l], h = Jd(
      e.hierarchicalFacets,
      l
    );
    if (h) {
      var d = h.attributes.indexOf(l), p = wr(e.hierarchicalFacets, function(y) {
        return y.name === h.name;
      });
      i.hierarchicalFacets[p][d] = {
        attribute: l,
        data: f,
        exhaustive: n.exhaustiveFacetsCount
      };
    } else {
      var m = e.disjunctiveFacets.indexOf(l) !== -1, g = e.facets.indexOf(l) !== -1, R;
      m && (R = s[l], i.disjunctiveFacets[R] = {
        name: l,
        data: f,
        exhaustive: n.exhaustiveFacetsCount
      }, li(i.disjunctiveFacets[R], n.facets_stats, l)), g && (R = o[l], i.facets[R] = {
        name: l,
        data: f,
        exhaustive: n.exhaustiveFacetsCount
      }, li(i.facets[R], n.facets_stats, l));
    }
  }), this.hierarchicalFacets = ci(this.hierarchicalFacets), a.forEach(function(l) {
    var f = t[c], h = f && f.facets ? f.facets : {}, d = e.getHierarchicalFacetByName(l);
    Object.keys(h).forEach(function(p) {
      var m = h[p], g;
      if (d) {
        g = wr(e.hierarchicalFacets, function(b) {
          return b.name === d.name;
        });
        var R = wr(i.hierarchicalFacets[g], function(b) {
          return b.attribute === p;
        });
        if (R === -1)
          return;
        i.hierarchicalFacets[g][R].data = Gd(
          {},
          i.hierarchicalFacets[g][R].data,
          m
        );
      } else {
        g = s[p];
        var y = n.facets && n.facets[p] || {};
        i.disjunctiveFacets[g] = {
          name: p,
          data: Bn({}, m, y),
          exhaustive: f.exhaustiveFacetsCount
        }, li(i.disjunctiveFacets[g], f.facets_stats, p), e.disjunctiveFacetsRefinements[p] && e.disjunctiveFacetsRefinements[p].forEach(function(b) {
          !i.disjunctiveFacets[g].data[b] && e.disjunctiveFacetsRefinements[p].indexOf(Xu(b)) > -1 && (i.disjunctiveFacets[g].data[b] = 0);
        });
      }
    }), c++;
  }), e.getRefinedHierarchicalFacets().forEach(function(l) {
    var f = e.getHierarchicalFacetByName(l), h = e._getHierarchicalFacetSeparator(f), d = e.getHierarchicalRefinement(l);
    d.length === 0 || d[0].split(h).length < 2 || t.slice(c).forEach(function(p) {
      var m = p && p.facets ? p.facets : {};
      Object.keys(m).forEach(function(g) {
        var R = m[g], y = wr(e.hierarchicalFacets, function(E) {
          return E.name === f.name;
        }), b = wr(i.hierarchicalFacets[y], function(E) {
          return E.attribute === g;
        });
        if (b !== -1) {
          var S = {};
          if (d.length > 0) {
            var v = d[0].split(h)[0];
            S[v] = i.hierarchicalFacets[y][b].data[v];
          }
          i.hierarchicalFacets[y][b].data = Bn(
            S,
            R,
            i.hierarchicalFacets[y][b].data
          );
        }
      }), c++;
    });
  }), Object.keys(e.facetsExcludes).forEach(function(l) {
    var f = e.facetsExcludes[l], h = o[l];
    i.facets[h] = {
      name: l,
      data: n.facets[l],
      exhaustive: n.exhaustiveFacetsCount
    }, f.forEach(function(d) {
      i.facets[h] = i.facets[h] || { name: l }, i.facets[h].data = i.facets[h].data || {}, i.facets[h].data[d] = 0;
    });
  }), this.hierarchicalFacets = this.hierarchicalFacets.map(Zd(e)), this.facets = ci(this.facets), this.disjunctiveFacets = ci(this.disjunctiveFacets), this._state = e;
}
Ht.prototype.getFacetByName = function(e) {
  function t(r) {
    return r.name === e;
  }
  return ht(this.facets, t) || ht(this.disjunctiveFacets, t) || ht(this.hierarchicalFacets, t);
};
function eh(e, t) {
  function r(c) {
    return c.name === t;
  }
  if (e._state.isConjunctiveFacet(t)) {
    var n = ht(e.facets, r);
    return n ? Object.keys(n.data).map(function(c) {
      var u = Zo(c);
      return {
        name: c,
        escapedValue: u,
        count: n.data[c],
        isRefined: e._state.isFacetRefined(t, u),
        isExcluded: e._state.isExcludeRefined(t, c)
      };
    }) : [];
  } else if (e._state.isDisjunctiveFacet(t)) {
    var i = ht(e.disjunctiveFacets, r);
    return i ? Object.keys(i.data).map(function(c) {
      var u = Zo(c);
      return {
        name: c,
        escapedValue: u,
        count: i.data[c],
        isRefined: e._state.isDisjunctiveFacetRefined(t, u)
      };
    }) : [];
  } else if (e._state.isHierarchicalFacet(t)) {
    var a = ht(e.hierarchicalFacets, r);
    if (!a)
      return a;
    var o = e._state.getHierarchicalFacetByName(t), s = Xu(
      e._state.getHierarchicalRefinement(t)[0] || ""
    ).split(e._state._getHierarchicalFacetSeparator(o));
    return s.unshift(t), Zu(a, s, 0), a;
  }
}
function Zu(e, t, r) {
  e.isRefined = e.name === t[r], e.data && e.data.forEach(function(n) {
    Zu(n, t, r + 1);
  });
}
function Ju(e, t, r, n) {
  if (n = n || 0, Array.isArray(t))
    return e(t, r[n]);
  if (!t.data || t.data.length === 0)
    return t;
  var i = t.data.map(function(s) {
    return Ju(e, s, r, n + 1);
  }), a = e(i, r[n]), o = Bn({ data: a }, t);
  return o;
}
Ht.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
function th(e, t) {
  return t.sort(e);
}
function rh(e, t) {
  var r = [], n = [], i = t.order || [], a = i.reduce(function(c, u, l) {
    return c[u] = l, c;
  }, {});
  e.forEach(function(c) {
    var u = c.path || c.name;
    a[u] !== void 0 ? r[a[u]] = c : n.push(c);
  }), r = r.filter(function(c) {
    return c;
  });
  var o = t.sortRemainingBy, s;
  return o === "hidden" ? r : (o === "alpha" ? s = [["path", "name"], ["asc", "asc"]] : s = [["count"], ["desc"]], r.concat(
    Ku(n, s[0], s[1])
  ));
}
function nh(e, t) {
  return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t];
}
Ht.prototype.getFacetValues = function(e, t) {
  var r = eh(this, e);
  if (r) {
    var n = Bn({}, t, {
      sortBy: Ht.DEFAULT_SORT,
      // if no sortBy is given, attempt to sort based on facetOrdering
      // if it is given, we still allow to sort via facet ordering first
      facetOrdering: !(t && t.sortBy)
    }), i = this, a;
    if (Array.isArray(r))
      a = [e];
    else {
      var o = i._state.getHierarchicalFacetByName(r.name);
      a = o.attributes;
    }
    return Ju(function(s, c) {
      if (n.facetOrdering) {
        var u = nh(i, c);
        if (u)
          return rh(s, u);
      }
      if (Array.isArray(n.sortBy)) {
        var l = Xd(n.sortBy, Ht.DEFAULT_SORT);
        return Ku(s, l[0], l[1]);
      } else if (typeof n.sortBy == "function")
        return th(n.sortBy, s);
      throw new Error(
        "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
      );
    }, r, a);
  }
};
Ht.prototype.getFacetStats = function(e) {
  if (this._state.isConjunctiveFacet(e))
    return es(this.facets, e);
  if (this._state.isDisjunctiveFacet(e))
    return es(this.disjunctiveFacets, e);
};
function es(e, t) {
  var r = ht(e, function(n) {
    return n.name === t;
  });
  return r && r.stats;
}
Ht.prototype.getRefinements = function() {
  var e = this._state, t = this, r = [];
  return Object.keys(e.facetsRefinements).forEach(function(n) {
    e.facetsRefinements[n].forEach(function(i) {
      r.push(fi(e, "facet", n, i, t.facets));
    });
  }), Object.keys(e.facetsExcludes).forEach(function(n) {
    e.facetsExcludes[n].forEach(function(i) {
      r.push(fi(e, "exclude", n, i, t.facets));
    });
  }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(n) {
    e.disjunctiveFacetsRefinements[n].forEach(function(i) {
      r.push(fi(e, "disjunctive", n, i, t.disjunctiveFacets));
    });
  }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function(n) {
    e.hierarchicalFacetsRefinements[n].forEach(function(i) {
      r.push(ih(e, n, i, t.hierarchicalFacets));
    });
  }), Object.keys(e.numericRefinements).forEach(function(n) {
    var i = e.numericRefinements[n];
    Object.keys(i).forEach(function(a) {
      i[a].forEach(function(o) {
        r.push({
          type: "numeric",
          attributeName: n,
          name: o,
          numericValue: o,
          operator: a
        });
      });
    });
  }), e.tagRefinements.forEach(function(n) {
    r.push({ type: "tag", attributeName: "_tags", name: n });
  }), r;
};
function fi(e, t, r, n, i) {
  var a = ht(i, function(c) {
    return c.name === r;
  }), o = a && a.data && a.data[n] ? a.data[n] : 0, s = a && a.exhaustive || !1;
  return {
    type: t,
    attributeName: r,
    name: n,
    count: o,
    exhaustive: s
  };
}
function ih(e, t, r, n) {
  var i = e.getHierarchicalFacetByName(t), a = e._getHierarchicalFacetSeparator(i), o = r.split(a), s = ht(n, function(h) {
    return h.name === t;
  }), c = o.reduce(function(h, d) {
    var p = h && ht(h.data, function(m) {
      return m.name === d;
    });
    return p !== void 0 ? p : h;
  }, s), u = c && c.count || 0, l = c && c.exhaustive || !1, f = c && c.path || "";
  return {
    type: "hierarchical",
    attributeName: t,
    name: f,
    count: u,
    exhaustive: l
  };
}
var ec = Ht;
function Xe() {
  this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
}
var eo = Xe;
Xe.prototype._events = void 0;
Xe.prototype._maxListeners = void 0;
Xe.defaultMaxListeners = 10;
Xe.prototype.setMaxListeners = function(e) {
  if (!ah(e) || e < 0 || isNaN(e))
    throw TypeError("n must be a positive number");
  return this._maxListeners = e, this;
};
Xe.prototype.emit = function(e) {
  var t, r, n, i, a, o;
  if (this._events || (this._events = {}), e === "error" && (!this._events.error || Ar(this._events.error) && !this._events.error.length)) {
    if (t = arguments[1], t instanceof Error)
      throw t;
    var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
    throw s.context = t, s;
  }
  if (r = this._events[e], tc(r))
    return !1;
  if (xt(r))
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
  else if (Ar(r))
    for (i = Array.prototype.slice.call(arguments, 1), o = r.slice(), n = o.length, a = 0; a < n; a++)
      o[a].apply(this, i);
  return !0;
};
Xe.prototype.addListener = function(e, t) {
  var r;
  if (!xt(t))
    throw TypeError("listener must be a function");
  return this._events || (this._events = {}), this._events.newListener && this.emit(
    "newListener",
    e,
    xt(t.listener) ? t.listener : t
  ), this._events[e] ? Ar(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, Ar(this._events[e]) && !this._events[e].warned && (tc(this._maxListeners) ? r = Xe.defaultMaxListeners : r = this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error(
    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
    this._events[e].length
  ), typeof console.trace == "function" && console.trace())), this;
};
Xe.prototype.on = Xe.prototype.addListener;
Xe.prototype.once = function(e, t) {
  if (!xt(t))
    throw TypeError("listener must be a function");
  var r = !1;
  function n() {
    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
  }
  return n.listener = t, this.on(e, n), this;
};
Xe.prototype.removeListener = function(e, t) {
  var r, n, i, a;
  if (!xt(t))
    throw TypeError("listener must be a function");
  if (!this._events || !this._events[e])
    return this;
  if (r = this._events[e], i = r.length, n = -1, r === t || xt(r.listener) && r.listener === t)
    delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
  else if (Ar(r)) {
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
Xe.prototype.removeAllListeners = function(e) {
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
  if (r = this._events[e], xt(r))
    this.removeListener(e, r);
  else if (r)
    for (; r.length; )
      this.removeListener(e, r[r.length - 1]);
  return delete this._events[e], this;
};
Xe.prototype.listeners = function(e) {
  var t;
  return !this._events || !this._events[e] ? t = [] : xt(this._events[e]) ? t = [this._events[e]] : t = this._events[e].slice(), t;
};
Xe.prototype.listenerCount = function(e) {
  if (this._events) {
    var t = this._events[e];
    if (xt(t))
      return 1;
    if (t)
      return t.length;
  }
  return 0;
};
Xe.listenerCount = function(e, t) {
  return e.listenerCount(t);
};
function xt(e) {
  return typeof e == "function";
}
function ah(e) {
  return typeof e == "number";
}
function Ar(e) {
  return typeof e == "object" && e !== null;
}
function tc(e) {
  return e === void 0;
}
const oh = /* @__PURE__ */ cr(eo);
function sh(e, t) {
  e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
}
var rc = sh, uh = eo, ch = rc;
function Gn(e, t) {
  this.main = e, this.fn = t, this.lastResults = null;
}
ch(Gn, uh);
Gn.prototype.detach = function() {
  this.removeAllListeners(), this.main.detachDerivedHelper(this);
};
Gn.prototype.getModifiedState = function(e) {
  return this.fn(e);
};
var lh = Gn, di = Yn;
function hi(e) {
  return Object.keys(e).sort(function(t, r) {
    return t.localeCompare(r);
  }).reduce(function(t, r) {
    return t[r] = e[r], t;
  }, {});
}
var nt = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function(t, r) {
    var n = [];
    return n.push({
      indexName: t,
      params: nt._getHitsSearchParams(r)
    }), r.getRefinedDisjunctiveFacets().forEach(function(i) {
      n.push({
        indexName: t,
        params: nt._getDisjunctiveFacetSearchParams(r, i)
      });
    }), r.getRefinedHierarchicalFacets().forEach(function(i) {
      var a = r.getHierarchicalFacetByName(i), o = r.getHierarchicalRefinement(i), s = r._getHierarchicalFacetSeparator(a);
      if (o.length > 0 && o[0].split(s).length > 1) {
        var c = o[0].split(s).slice(0, -1).reduce(
          function(l, f, h) {
            return l.concat({
              attribute: a.attributes[h],
              value: h === 0 ? f : [l[l.length - 1].value, f].join(s)
            });
          },
          []
        );
        c.forEach(function(u, l) {
          var f = nt._getDisjunctiveFacetSearchParams(
            r,
            u.attribute,
            l === 0
          );
          function h(m) {
            return a.attributes.some(function(g) {
              return g === m.split(":")[0];
            });
          }
          var d = (f.facetFilters || []).reduce(function(m, g) {
            if (Array.isArray(g)) {
              var R = g.filter(function(y) {
                return !h(y);
              });
              R.length > 0 && m.push(R);
            }
            return typeof g == "string" && !h(g) && m.push(g), m;
          }, []), p = c[l - 1];
          l > 0 ? f.facetFilters = d.concat(p.attribute + ":" + p.value) : f.facetFilters = d.length > 0 ? d : void 0, n.push({ indexName: t, params: f });
        });
      }
    }), n;
  },
  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function(e) {
    var t = e.facets.concat(e.disjunctiveFacets).concat(nt._getHitsHierarchicalFacetsAttributes(e)), r = nt._getFacetFilters(e), n = nt._getNumericFilters(e), i = nt._getTagFilters(e), a = {
      facets: t.indexOf("*") > -1 ? ["*"] : t,
      tagFilters: i
    };
    return r.length > 0 && (a.facetFilters = r), n.length > 0 && (a.numericFilters = n), hi(di({}, e.getQueryParams(), a));
  },
  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function(e, t, r) {
    var n = nt._getFacetFilters(e, t, r), i = nt._getNumericFilters(e, t), a = nt._getTagFilters(e), o = {
      hitsPerPage: 0,
      page: 0,
      analytics: !1,
      clickAnalytics: !1
    };
    a.length > 0 && (o.tagFilters = a);
    var s = e.getHierarchicalFacetByName(t);
    return s ? o.facets = nt._getDisjunctiveHierarchicalFacetAttribute(
      e,
      s,
      r
    ) : o.facets = t, i.length > 0 && (o.numericFilters = i), n.length > 0 && (o.facetFilters = n), hi(di({}, e.getQueryParams(), o));
  },
  /**
   * Return the numeric filters in an algolia request fashion
   * @private
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
        var o = i[a] || [];
        t !== n && o.forEach(function(s) {
          if (Array.isArray(s)) {
            var c = s.map(function(u) {
              return n + a + u;
            });
            r.push(c);
          } else
            r.push(n + a + s);
        });
      });
    }), r;
  },
  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function(e) {
    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
  },
  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function(e, t, r) {
    var n = [], i = e.facetsRefinements || {};
    Object.keys(i).forEach(function(c) {
      var u = i[c] || [];
      u.forEach(function(l) {
        n.push(c + ":" + l);
      });
    });
    var a = e.facetsExcludes || {};
    Object.keys(a).forEach(function(c) {
      var u = a[c] || [];
      u.forEach(function(l) {
        n.push(c + ":-" + l);
      });
    });
    var o = e.disjunctiveFacetsRefinements || {};
    Object.keys(o).forEach(function(c) {
      var u = o[c] || [];
      if (!(c === t || !u || u.length === 0)) {
        var l = [];
        u.forEach(function(f) {
          l.push(c + ":" + f);
        }), n.push(l);
      }
    });
    var s = e.hierarchicalFacetsRefinements || {};
    return Object.keys(s).forEach(function(c) {
      var u = s[c] || [], l = u[0];
      if (l !== void 0) {
        var f = e.getHierarchicalFacetByName(c), h = e._getHierarchicalFacetSeparator(f), d = e._getHierarchicalRootPath(f), p, m;
        if (t === c) {
          if (l.indexOf(h) === -1 || !d && r === !0 || d && d.split(h).length === l.split(h).length)
            return;
          d ? (m = d.split(h).length - 1, l = d) : (m = l.split(h).length - 2, l = l.slice(0, l.lastIndexOf(h))), p = f.attributes[m];
        } else
          m = l.split(h).length - 1, p = f.attributes[m];
        p && n.push([p + ":" + l]);
      }
    }), n;
  },
  _getHitsHierarchicalFacetsAttributes: function(e) {
    var t = [];
    return e.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function(n, i) {
        var a = e.getHierarchicalRefinement(i.name)[0];
        if (!a)
          return n.push(i.attributes[0]), n;
        var o = e._getHierarchicalFacetSeparator(i), s = a.split(o).length, c = i.attributes.slice(0, s + 1);
        return n.concat(c);
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
    var o = e.getHierarchicalRefinement(t.name)[0] || "", s = o.split(n).length - 1;
    return t.attributes.slice(0, s + 1);
  },
  getSearchForFacetQuery: function(e, t, r, n) {
    var i = n.isDisjunctiveFacet(e) ? n.clearRefinements(e) : n, a = {
      facetQuery: t,
      facetName: e
    };
    return typeof r == "number" && (a.maxFacetHits = r), hi(di(
      {},
      nt._getHitsSearchParams(i),
      a
    ));
  }
}, fh = nt, nc = "3.13.0", to = Vu, Vi = ec, dh = lh, ar = fh, hh = eo, ph = rc, vh = Xa, mh = Ga, gh = Yn, ic = nc, yh = Ja.escapeFacetValue;
function ne(e, t, r) {
  typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + ic + ")"), this.setClient(e);
  var n = r || {};
  n.index = t, this.state = to.make(n), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0;
}
ph(ne, hh);
ne.prototype.search = function() {
  return this._search({ onlyWithDerivedHelpers: !1 }), this;
};
ne.prototype.searchOnlyWithDerivedHelpers = function() {
  return this._search({ onlyWithDerivedHelpers: !0 }), this;
};
ne.prototype.getQuery = function() {
  var e = this.state;
  return ar._getHitsSearchParams(e);
};
ne.prototype.searchOnce = function(e, t) {
  var r = e ? this.state.setQueryParameters(e) : this.state, n = ar._getQueries(r.index, r), i = this;
  if (this._currentNbQueries++, this.emit("searchOnce", {
    state: r
  }), t) {
    this.client.search(n).then(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(null, new Vi(r, a.results), r);
    }).catch(function(a) {
      i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), t(a, null, r);
    });
    return;
  }
  return this.client.search(n).then(function(a) {
    return i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), {
      content: new Vi(r, a.results),
      state: r,
      _originalResponse: a
    };
  }, function(a) {
    throw i._currentNbQueries--, i._currentNbQueries === 0 && i.emit("searchQueueEmpty"), a;
  });
};
ne.prototype.findAnswers = function(e) {
  console.warn("[algoliasearch-helper] answers is no longer supported");
  var t = this.state, r = this.derivedHelpers[0];
  if (!r)
    return Promise.resolve([]);
  var n = r.getModifiedState(t), i = gh(
    {
      attributesForPrediction: e.attributesForPrediction,
      nbHits: e.nbHits
    },
    {
      params: mh(ar._getHitsSearchParams(n), [
        "attributesToSnippet",
        "hitsPerPage",
        "restrictSearchableAttributes",
        "snippetEllipsisText"
        // FIXME remove this line once the engine is fixed.
      ])
    }
  ), a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
  if (typeof this.client.initIndex != "function")
    throw new Error(a);
  var o = this.client.initIndex(n.index);
  if (typeof o.findAnswers != "function")
    throw new Error(a);
  return o.findAnswers(n.query, e.queryLanguages, i);
};
ne.prototype.searchForFacetValues = function(e, t, r, n) {
  var i = typeof this.client.searchForFacetValues == "function", a = typeof this.client.initIndex == "function";
  if (!i && !a && typeof this.client.search != "function")
    throw new Error(
      "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
    );
  var o = this.state.setQueryParameters(n || {}), s = o.isDisjunctiveFacet(e), c = ar.getSearchForFacetQuery(e, t, r, o);
  this._currentNbQueries++;
  var u = this, l;
  return i ? l = this.client.searchForFacetValues([
    { indexName: o.index, params: c }
  ]) : a ? l = this.client.initIndex(o.index).searchForFacetValues(c) : (delete c.facetName, l = this.client.search([
    {
      type: "facet",
      facet: e,
      indexName: o.index,
      params: c
    }
  ]).then(function(h) {
    return h.results[0];
  })), this.emit("searchForFacetValues", {
    state: o,
    facet: e,
    query: t
  }), l.then(function(h) {
    return u._currentNbQueries--, u._currentNbQueries === 0 && u.emit("searchQueueEmpty"), h = Array.isArray(h) ? h[0] : h, h.facetHits.forEach(function(d) {
      d.escapedValue = yh(d.value), d.isRefined = s ? o.isDisjunctiveFacetRefined(e, d.escapedValue) : o.isFacetRefined(e, d.escapedValue);
    }), h;
  }, function(f) {
    throw u._currentNbQueries--, u._currentNbQueries === 0 && u.emit("searchQueueEmpty"), f;
  });
};
ne.prototype.setQuery = function(e) {
  return this._change({
    state: this.state.resetPage().setQuery(e),
    isPageReset: !0
  }), this;
};
ne.prototype.clearRefinements = function(e) {
  return this._change({
    state: this.state.resetPage().clearRefinements(e),
    isPageReset: !0
  }), this;
};
ne.prototype.clearTags = function() {
  return this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: !0
  }), this;
};
ne.prototype.addDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
ne.prototype.addHierarchicalFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.addNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().addNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
ne.prototype.addFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().addFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};
ne.prototype.addFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().addExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};
ne.prototype.addTag = function(e) {
  return this._change({
    state: this.state.resetPage().addTagRefinement(e),
    isPageReset: !0
  }), this;
};
ne.prototype.removeNumericRefinement = function(e, t, r) {
  return this._change({
    state: this.state.resetPage().removeNumericRefinement(e, t, r),
    isPageReset: !0
  }), this;
};
ne.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
ne.prototype.removeHierarchicalFacetRefinement = function(e) {
  return this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
    isPageReset: !0
  }), this;
};
ne.prototype.removeFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};
ne.prototype.removeFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().removeExcludeRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};
ne.prototype.removeTag = function(e) {
  return this._change({
    state: this.state.resetPage().removeTagRefinement(e),
    isPageReset: !0
  }), this;
};
ne.prototype.toggleFacetExclusion = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};
ne.prototype.toggleRefinement = function(e, t) {
  return this.toggleFacetRefinement(e, t);
};
ne.prototype.toggleFacetRefinement = function(e, t) {
  return this._change({
    state: this.state.resetPage().toggleFacetRefinement(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};
ne.prototype.toggleTag = function(e) {
  return this._change({
    state: this.state.resetPage().toggleTagRefinement(e),
    isPageReset: !0
  }), this;
};
ne.prototype.nextPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e + 1);
};
ne.prototype.previousPage = function() {
  var e = this.state.page || 0;
  return this.setPage(e - 1);
};
function ac(e) {
  if (e < 0)
    throw new Error("Page requested below 0.");
  return this._change({
    state: this.state.setPage(e),
    isPageReset: !1
  }), this;
}
ne.prototype.setCurrentPage = ac;
ne.prototype.setPage = ac;
ne.prototype.setIndex = function(e) {
  return this._change({
    state: this.state.resetPage().setIndex(e),
    isPageReset: !0
  }), this;
};
ne.prototype.setQueryParameter = function(e, t) {
  return this._change({
    state: this.state.resetPage().setQueryParameter(e, t),
    isPageReset: !0
  }), this;
};
ne.prototype.setState = function(e) {
  return this._change({
    state: to.make(e),
    isPageReset: !1
  }), this;
};
ne.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
  return this.state = new to(e), this;
};
ne.prototype.hasRefinements = function(e) {
  return vh(this.state.getNumericRefinements(e)) ? !0 : this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : this.state.isHierarchicalFacet(e) ? this.state.isHierarchicalFacetRefined(e) : !1;
};
ne.prototype.isExcluded = function(e, t) {
  return this.state.isExcludeRefined(e, t);
};
ne.prototype.isDisjunctiveRefined = function(e, t) {
  return this.state.isDisjunctiveFacetRefined(e, t);
};
ne.prototype.hasTag = function(e) {
  return this.state.isTagRefined(e);
};
ne.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};
ne.prototype.getIndex = function() {
  return this.state.index;
};
function oc() {
  return this.state.page;
}
ne.prototype.getCurrentPage = oc;
ne.prototype.getPage = oc;
ne.prototype.getTags = function() {
  return this.state.tagRefinements;
};
ne.prototype.getRefinements = function(e) {
  var t = [];
  if (this.state.isConjunctiveFacet(e)) {
    var r = this.state.getConjunctiveRefinements(e);
    r.forEach(function(o) {
      t.push({
        value: o,
        type: "conjunctive"
      });
    });
    var n = this.state.getExcludeRefinements(e);
    n.forEach(function(o) {
      t.push({
        value: o,
        type: "exclude"
      });
    });
  } else if (this.state.isDisjunctiveFacet(e)) {
    var i = this.state.getDisjunctiveRefinements(e);
    i.forEach(function(o) {
      t.push({
        value: o,
        type: "disjunctive"
      });
    });
  }
  var a = this.state.getNumericRefinements(e);
  return Object.keys(a).forEach(function(o) {
    var s = a[o];
    t.push({
      value: s,
      operator: o,
      type: "numeric"
    });
  }), t;
};
ne.prototype.getNumericRefinement = function(e, t) {
  return this.state.getNumericRefinement(e, t);
};
ne.prototype.getHierarchicalFacetBreadcrumb = function(e) {
  return this.state.getHierarchicalFacetBreadcrumb(e);
};
ne.prototype._search = function(e) {
  var t = this.state, r = [], n = [];
  e.onlyWithDerivedHelpers || (n = ar._getQueries(t.index, t), r.push({
    state: t,
    queriesCount: n.length,
    helper: this
  }), this.emit("search", {
    state: t,
    results: this.lastResults
  }));
  var i = this.derivedHelpers.map(function(s) {
    var c = s.getModifiedState(t), u = c.index ? ar._getQueries(c.index, c) : [];
    return r.push({
      state: c,
      queriesCount: u.length,
      helper: s
    }), s.emit("search", {
      state: c,
      results: s.lastResults
    }), u;
  }), a = Array.prototype.concat.apply(n, i), o = this._queryId++;
  if (this._currentNbQueries++, !a.length)
    return Promise.resolve({ results: [] }).then(
      this._dispatchAlgoliaResponse.bind(this, r, o)
    );
  try {
    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, r, o)).catch(this._dispatchAlgoliaError.bind(this, o));
  } catch (s) {
    this.emit("error", {
      error: s
    });
  }
};
ne.prototype._dispatchAlgoliaResponse = function(e, t, r) {
  if (!(t < this._lastQueryIdReceived)) {
    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, this._currentNbQueries === 0 && this.emit("searchQueueEmpty");
    var n = r.results.slice();
    e.forEach(function(i) {
      var a = i.state, o = i.queriesCount, s = i.helper, c = n.splice(0, o);
      if (!a.index) {
        s.emit("result", {
          results: null,
          state: a
        });
        return;
      }
      var u = s.lastResults = new Vi(a, c);
      s.emit("result", {
        results: u,
        state: a
      });
    });
  }
};
ne.prototype._dispatchAlgoliaError = function(e, t) {
  e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
    error: t
  }), this._currentNbQueries === 0 && this.emit("searchQueueEmpty"));
};
ne.prototype.containsRefinement = function(e, t, r, n) {
  return e || t.length !== 0 || r.length !== 0 || n.length !== 0;
};
ne.prototype._hasDisjunctiveRefinements = function(e) {
  return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
};
ne.prototype._change = function(e) {
  var t = e.state, r = e.isPageReset;
  t !== this.state && (this.state = t, this.emit("change", {
    state: this.state,
    results: this.lastResults,
    isPageReset: r
  }));
};
ne.prototype.clearCache = function() {
  return this.client.clearCache && this.client.clearCache(), this;
};
ne.prototype.setClient = function(e) {
  return this.client === e ? this : (typeof e.addAlgoliaAgent == "function" && e.addAlgoliaAgent("JS Helper (" + ic + ")"), this.client = e, this);
};
ne.prototype.getClient = function() {
  return this.client;
};
ne.prototype.derive = function(e) {
  var t = new dh(this, e);
  return this.derivedHelpers.push(t), t;
};
ne.prototype.detachDerivedHelper = function(e) {
  var t = this.derivedHelpers.indexOf(e);
  if (t === -1)
    throw new Error("Derived helper already detached");
  this.derivedHelpers.splice(t, 1);
};
ne.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};
var bh = ne, sc = bh, wh = Vu, Sh = ec;
function rn(e, t, r) {
  return new sc(e, t, r);
}
rn.version = nc;
rn.AlgoliaSearchHelper = sc;
rn.SearchParameters = wh;
rn.SearchResults = Sh;
var Oh = rn;
const ft = /* @__PURE__ */ cr(Oh);
function ts(e) {
  return e.toString().charAt(0).toUpperCase() + e.toString().slice(1);
}
function Be() {
}
var rs = Be, ge = Be;
process.env.NODE_ENV === "development" && (rs = function(t) {
  console.warn("[InstantSearch.js]: ".concat(t.trim()));
}, ge = function(t, r) {
  if (!t) {
    var n = ge.cache[r];
    n || (ge.cache[r] = !0, process.env.NODE_ENV === "development" && rs(r));
  }
}, ge.cache = {});
var Rh = Object.keys;
function Ph(e) {
  return _h(e) || xh(e) || uc(e) || Eh();
}
function Eh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _h(e) {
  if (Array.isArray(e))
    return zi(e);
}
function Sr(e, t) {
  return Ah(e) || Th(e, t) || uc(e, t) || jh();
}
function jh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uc(e, t) {
  if (e) {
    if (typeof e == "string")
      return zi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zi(e, t);
  }
}
function zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Th(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function Ah(e) {
  if (Array.isArray(e))
    return e;
}
function $h(e) {
  switch (e) {
    case "range":
      return [];
    case "menu":
      return ["menu", "menuSelect"];
    default:
      return [e];
  }
}
var Ch = {
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
function cc(e) {
  var t = e.index, r = e.indexUiState, n = t.getWidgets().map(function(a) {
    return a.$$type;
  }).filter(Boolean), i = Rh(r).reduce(function(a, o) {
    var s = Ch[o];
    if (!s)
      return a;
    var c = s.widgets;
    return c && !c.some(function(u) {
      return n.includes(u);
    }) && a.push([o, {
      connectors: s.connectors,
      widgets: s.widgets.map(function(u) {
        return u.split("ais.")[1];
      })
    }]), a;
  }, []);
  process.env.NODE_ENV === "development" && ge(i.length === 0, 'The UI state for the index "'.concat(t.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(t.getIndexId(), `":

`).concat(i.map(function(a) {
    var o, s = Sr(a, 2), c = s[0], u = s[1].widgets;
    return "- `".concat(c, "` needs one of these widgets: ").concat((o = []).concat.apply(o, Ph(u.map(function(l) {
      return $h(l);
    }))).map(function(l) {
      return '"'.concat(l, '"');
    }).join(", "));
  }).join(`
`), `

If you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don't render anything:

\`\`\`
`).concat(i.filter(function(a) {
    var o = Sr(a, 2);
    o[0];
    var s = o[1].connectors;
    return s.length > 0;
  }).map(function(a) {
    var o = Sr(a, 2);
    o[0];
    var s = o[1], c = s.connectors, u = s.widgets, l = ts(u[0]), f = c[0];
    return "const virtual".concat(l, " = ").concat(f, "(() => null);");
  }).join(`
`), `

search.addWidgets([
  `).concat(i.filter(function(a) {
    var o = Sr(a, 2);
    o[0];
    var s = o[1].connectors;
    return s.length > 0;
  }).map(function(a) {
    var o = Sr(a, 2);
    o[0];
    var s = o[1].widgets, c = ts(s[0]);
    return "virtual".concat(c, "({ /* ... */ })");
  }).join(`,
  `), `
]);
\`\`\`

If you're using custom widgets that do set these query parameters, we recommend using connectors instead.

See https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets`));
}
function Fh(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function fr(e, t) {
  if (e === void 0 || typeof e != "function")
    throw new Error("The render function is not valid (received type ".concat(Fh(e), `).

`).concat(t));
}
var Ih = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, lc = /[&<>"']/g, Nh = RegExp(lc.source);
function kh(e) {
  return e && Nh.test(e) ? e.replace(lc, function(t) {
    return Ih[t];
  }) : e;
}
var Dh = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, fc = /&(amp|quot|lt|gt|#39);/g, Mh = RegExp(fc.source);
function ro(e) {
  return e && Mh.test(e) ? e.replace(fc, function(t) {
    return Dh[t];
  }) : e;
}
function Qi(e) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e);
}
function Lh(e) {
  return e === null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Hh(e) {
  return Qi(e) === "object" && e !== null;
}
function dc(e) {
  if (!Hh(e) || Lh(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function Wh(e) {
  if (e == null)
    throw new TypeError("Cannot destructure " + e);
}
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yi.apply(this, arguments);
}
function ns(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ns(Object(r), !0).forEach(function(n) {
      hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ns(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hc(e, t, r) {
  return t = Uh(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uh(e) {
  var t = Bh(e, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function Bh(e, t) {
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
var or = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
}, Ze = {
  highlightPreTag: "<mark>",
  highlightPostTag: "</mark>"
};
function pc(e) {
  return kh(e).replace(new RegExp(or.highlightPreTag, "g"), Ze.highlightPreTag).replace(new RegExp(or.highlightPostTag, "g"), Ze.highlightPostTag);
}
function qn(e) {
  return dc(e) && typeof e.value != "string" ? Object.keys(e).reduce(function(t, r) {
    return tr(tr({}, t), {}, hc({}, r, qn(e[r])));
  }, {}) : Array.isArray(e) ? e.map(qn) : tr(tr({}, e), {}, {
    value: pc(e.value)
  });
}
function qh(e) {
  return e.__escaped === void 0 && (e = e.map(function(t) {
    var r = Yi({}, (Wh(t), t));
    return r._highlightResult && (r._highlightResult = qn(r._highlightResult)), r._snippetResult && (r._snippetResult = qn(r._snippetResult)), r;
  }), e.__escaped = !0), e;
}
function Vh(e) {
  return e.map(function(t) {
    return tr(tr({}, t), {}, {
      highlighted: pc(t.highlighted)
    });
  });
}
function vc(e) {
  var t = Ze.highlightPreTag, r = Ze.highlightPostTag;
  return e.map(function(n) {
    return n.isHighlighted ? t + n.value + r : n.value;
  }).join("");
}
function zh(e, t, r) {
  return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, r) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, r) : e.state.isDisjunctiveFacetRefined(t, r);
}
function Ki(e) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
function Qh(e, t) {
  return Xh(e) || Gh(e, t) || Kh(e, t) || Yh();
}
function Yh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kh(e, t) {
  if (e) {
    if (typeof e == "string")
      return is(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return is(e, t);
  }
}
function is(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Gh(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function Xh(e) {
  if (Array.isArray(e))
    return e;
}
function Zh(e) {
  var t = e.instantSearchInstance, r = e.helper, n = e.attribute, i = e.widgetType, a = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var l = c[1], f = c[2], h = f === void 0 ? "Filter Applied" : f, d = c[0].split(":"), p = Qh(d, 2), m = p[0], g = p[1], R = typeof n == "string" ? n : n(l);
    if (c.length === 1 && Ki(c[0]) === "object")
      t.sendEventToInsights(c[0]);
    else if (m === "click" && (c.length === 2 || c.length === 3))
      zh(r, R, l) || t.sendEventToInsights({
        insightsMethod: "clickedFilters",
        widgetType: i,
        eventType: m,
        eventModifier: g,
        payload: {
          eventName: h,
          index: r.getIndex(),
          filters: ["".concat(R, ":").concat(l)]
        },
        attribute: R
      });
    else if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass two arguments like:
  sendEvent('click', facetValue);

If you want to send a custom payload, you can pass one object: sendEvent(customPayload);
`);
  };
  return a;
}
function mc(e) {
  return btoa(encodeURIComponent(JSON.stringify(e)));
}
function Jh(e, t) {
  return np(e) || rp(e, t) || tp(e, t) || ep();
}
function ep() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tp(e, t) {
  if (e) {
    if (typeof e == "string")
      return as(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return as(e, t);
  }
}
function as(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function rp(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function np(e) {
  if (Array.isArray(e))
    return e;
}
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
}
function ip(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0; n < Math.ceil(e.length / t); n++)
    r.push(e.slice(n * t, (n + 1) * t));
  return r;
}
function gc(e) {
  var t = e.index, r = e.widgetType, n = e.methodName, i = e.args, a = e.instantSearchInstance;
  if (i.length === 1 && Gi(i[0]) === "object")
    return [i[0]];
  var o = i[0].split(":"), s = Jh(o, 2), c = s[0], u = s[1], l = i[1], f = i[2];
  if (!l) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass hit or hits as the second argument like:
  `.concat(n, `(eventType, hit);
  `));
    return [];
  }
  if ((c === "click" || c === "conversion") && !f) {
    if (process.env.NODE_ENV === "development")
      throw new Error(`You need to pass eventName as the third argument for 'click' or 'conversion' events like:
  `.concat(n, `('click', hit, 'Product Purchased');

  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/
  `));
    return [];
  }
  var h = Array.isArray(l) ? l : [l];
  if (h.length === 0)
    return [];
  var d = h[0].__queryID, p = ip(h), m = p.map(function(R) {
    return R.map(function(y) {
      return y.objectID;
    });
  }), g = p.map(function(R) {
    return R.map(function(y) {
      return y.__position;
    });
  });
  if (c === "view")
    return a.status !== "idle" ? [] : p.map(function(R, y) {
      return {
        insightsMethod: "viewedObjectIDs",
        widgetType: r,
        eventType: c,
        payload: {
          eventName: f || "Hits Viewed",
          index: t,
          objectIDs: m[y]
        },
        hits: R,
        eventModifier: u
      };
    });
  if (c === "click")
    return p.map(function(R, y) {
      return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: r,
        eventType: c,
        payload: {
          eventName: f || "Hit Clicked",
          index: t,
          queryID: d,
          objectIDs: m[y],
          positions: g[y]
        },
        hits: R,
        eventModifier: u
      };
    });
  if (c === "conversion")
    return p.map(function(R, y) {
      return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: r,
        eventType: c,
        payload: {
          eventName: f || "Hit Converted",
          index: t,
          queryID: d,
          objectIDs: m[y]
        },
        hits: R,
        eventModifier: u
      };
    });
  if (process.env.NODE_ENV === "development")
    throw new Error('eventType("'.concat(c, `") is not supported.
    If you want to send a custom payload, you can pass one object: `).concat(n, `(customPayload);
    `));
  return [];
}
function ap(e) {
  var t = e.instantSearchInstance, r = e.index, n = e.widgetType, i = {}, a = void 0, o = function() {
    for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++)
      u[l] = arguments[l];
    var f = gc({
      widgetType: n,
      index: r,
      methodName: "sendEvent",
      args: u,
      instantSearchInstance: t
    });
    f.forEach(function(h) {
      h.eventType === "click" && h.eventModifier === "internal" && i[h.eventType] || (i[h.eventType] = !0, t.sendEventToInsights(h));
    }), clearTimeout(a), a = setTimeout(function() {
      i = {};
    }, 0);
  };
  return o;
}
function op(e) {
  var t = e.index, r = e.widgetType, n = e.instantSearchInstance, i = function() {
    for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
      s[c] = arguments[c];
    var u = gc({
      widgetType: r,
      index: t,
      methodName: "bindEvent",
      args: s,
      instantSearchInstance: n
    });
    return u.length ? "data-insights-event=".concat(mc(u)) : "";
  };
  return i;
}
function _t(e) {
  return e.$$type === "ais.index";
}
function Xi(e, t) {
  var r = e[t.getIndexId()] || {};
  process.env.NODE_ENV === "development" && cc({
    index: t,
    indexUiState: r
  }), t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
    uiState: r
  })), t.getWidgets().filter(_t).forEach(function(n) {
    return Xi(e, n);
  });
}
var sp = Promise.resolve();
function Or(e) {
  var t = null, r = !1, n = function() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    t === null && (t = sp.then(function() {
      if (t = null, r) {
        r = !1;
        return;
      }
      e.apply(void 0, o);
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
function yc(e) {
  var t = e.name, r = e.connector, n = r === void 0 ? !1 : r;
  return ["https://www.algolia.com/doc/api-reference/widgets/", t, "/js/", n ? "#connector" : ""].join("");
}
function jt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.map(function(i) {
    return yc(i);
  }).join(", ");
  return function(i) {
    return [i, "See documentation: ".concat(n)].filter(Boolean).join(`

`);
  };
}
function up(e) {
  return typeof e == "string" ? e.replace(/^\\-/, "-") : e;
}
function cp(e) {
  return typeof e == "number" && e < 0 || typeof e == "string" ? String(e).replace(/^-/, "\\-") : e;
}
function Cr(e, t) {
  for (var r, n = 0; n < e.length; n++)
    if (r = e[n], t(r, n, e))
      return r;
}
function lp(e, t) {
  if (!Array.isArray(e))
    return -1;
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
  return -1;
}
function fp(e) {
  if (e.transporter) {
    var t = e.transporter, r = t.headers, n = t.queryParameters, i = "x-algolia-application-id", a = "x-algolia-api-key", o = r[i] || n[i], s = r[a] || n[a];
    return [o, s];
  } else
    return [e.applicationID, e.apiKey];
}
function Xn(e) {
  var t = Ze.highlightPostTag, r = Ze.highlightPreTag, n = e.split(r), i = n.shift(), a = i ? [{
    value: i,
    isHighlighted: !1
  }] : [];
  return n.forEach(function(o) {
    var s = o.split(t);
    a.push({
      value: s[0],
      isHighlighted: !0
    }), s[1] !== "" && a.push({
      value: s[1],
      isHighlighted: !1
    });
  }), a;
}
var dp = new RegExp(/\w/i);
function hp(e, t) {
  var r, n, i = e[t], a = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0, o = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !dp.test(ro(i.value)) && o === a ? o : i.isHighlighted;
}
function nn(e, t) {
  var r = Array.isArray(t) ? t : t.split(".");
  return r.reduce(function(n, i) {
    return n && n[i];
  }, e);
}
function pi(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], a = {
    type: t,
    attribute: r,
    name: n,
    escapedValue: cp(n)
  }, o = Cr(i, function(d) {
    return d.name === r;
  }), s;
  if (t === "hierarchical") {
    for (var c = e.getHierarchicalFacetByName(r), u = n.split(c.separator), l = function(p) {
      return function(m) {
        return p[m];
      };
    }, f = function(p) {
      o = o && o.data && Cr(Object.keys(o.data).map(l(o.data)), function(m) {
        return m.name === u[p];
      });
    }, h = 0; o !== void 0 && h < u.length; ++h)
      f(h);
    s = o && o.count;
  } else
    s = o && o.data && o.data[a.name];
  return s !== void 0 && (a.count = s), o && o.exhaustive !== void 0 && (a.exhaustive = o.exhaustive), a;
}
function pp(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = [], i = t.facetsRefinements, a = i === void 0 ? {} : i, o = t.facetsExcludes, s = o === void 0 ? {} : o, c = t.disjunctiveFacetsRefinements, u = c === void 0 ? {} : c, l = t.hierarchicalFacetsRefinements, f = l === void 0 ? {} : l, h = t.numericRefinements, d = h === void 0 ? {} : h, p = t.tagRefinements, m = p === void 0 ? [] : p;
  return Object.keys(a).forEach(function(g) {
    var R = a[g];
    R.forEach(function(y) {
      n.push(pi(t, "facet", g, y, e.facets));
    });
  }), Object.keys(s).forEach(function(g) {
    var R = s[g];
    R.forEach(function(y) {
      n.push({
        type: "exclude",
        attribute: g,
        name: y,
        exclude: !0
      });
    });
  }), Object.keys(u).forEach(function(g) {
    var R = u[g];
    R.forEach(function(y) {
      n.push(pi(
        t,
        "disjunctive",
        g,
        // We unescape any disjunctive refined values with `unescapeFacetValue` because
        // they can be escaped on negative numeric values with `escapeFacetValue`.
        up(y),
        e.disjunctiveFacets
      ));
    });
  }), Object.keys(f).forEach(function(g) {
    var R = f[g];
    R.forEach(function(y) {
      n.push(pi(t, "hierarchical", g, y, e.hierarchicalFacets));
    });
  }), Object.keys(d).forEach(function(g) {
    var R = d[g];
    Object.keys(R).forEach(function(y) {
      var b = y, S = R[b], v = Array.isArray(S) ? S : [S];
      v.forEach(function(E) {
        n.push({
          type: "numeric",
          attribute: g,
          name: "".concat(E),
          numericValue: E,
          operator: b
        });
      });
    });
  }), m.forEach(function(g) {
    n.push({
      type: "tag",
      attribute: "_tags",
      name: g
    });
  }), r && t.query && t.query.trim() && n.push({
    attribute: "query",
    type: "query",
    name: t.query,
    query: t.query
  }), n;
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function os(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? os(Object(r), !0).forEach(function(n) {
      vp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : os(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vp(e, t, r) {
  return t = mp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mp(e) {
  var t = gp(e, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function gp(e, t) {
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
function yp(e, t, r) {
  return e.map(function(n, i) {
    return ss(ss({}, n), {}, {
      __position: r * t + i + 1
    });
  });
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function us(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? us(Object(r), !0).forEach(function(n) {
      bp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : us(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bp(e, t, r) {
  return t = wp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wp(e) {
  var t = Sp(e, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function Sp(e, t) {
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
function Op(e, t) {
  return t ? e.map(function(r) {
    return cs(cs({}, r), {}, {
      __queryID: t
    });
  }) : e;
}
function ls(e) {
  return e !== Object(e);
}
function no(e, t) {
  if (e === t)
    return !0;
  if (ls(e) || ls(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (!(i in t) || !no(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Te(e) {
  return typeof e == "number" && isFinite(e);
}
function bc(e, t) {
  t(e), e.getWidgets().forEach(function(r) {
    _t(r) && bc(r, t);
  });
}
function Rp(e) {
  return e.filter(function(t, r, n) {
    return n.indexOf(t) === r;
  });
}
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
var Pp = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function fs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fs(Object(r), !0).forEach(function(n) {
      Ep(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ep(e, t, r) {
  return t = xp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xp(e) {
  var t = _p(e, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function _p(e, t) {
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
function jp(e, t) {
  if (e == null)
    return {};
  var r = Tp(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tp(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ap = function(t, r) {
  r.facets, r.disjunctiveFacets, r.facetsRefinements, r.facetsExcludes, r.disjunctiveFacetsRefinements, r.numericRefinements, r.tagRefinements, r.hierarchicalFacets, r.hierarchicalFacetsRefinements, r.ruleContexts;
  var n = jp(r, Pp);
  return t.setQueryParameters(n);
}, $p = function(t, r) {
  return r.facets.reduce(function(n, i) {
    return n.addFacet(i);
  }, t);
}, Cp = function(t, r) {
  return r.disjunctiveFacets.reduce(function(n, i) {
    return n.addDisjunctiveFacet(i);
  }, t);
}, Fp = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacets: r.hierarchicalFacets.reduce(function(n, i) {
      var a = lp(n, function(s) {
        return s.name === i.name;
      });
      if (a === -1)
        return n.concat(i);
      var o = n.slice();
      return o.splice(a, 1, i), o;
    }, t.hierarchicalFacets)
  });
}, Ip = function(t, r) {
  return r.tagRefinements.reduce(function(n, i) {
    return n.addTagRefinement(i);
  }, t);
}, Np = function(t, r) {
  return t.setQueryParameters({
    facetsRefinements: bt(bt({}, t.facetsRefinements), r.facetsRefinements)
  });
}, kp = function(t, r) {
  return t.setQueryParameters({
    facetsExcludes: bt(bt({}, t.facetsExcludes), r.facetsExcludes)
  });
}, Dp = function(t, r) {
  return t.setQueryParameters({
    disjunctiveFacetsRefinements: bt(bt({}, t.disjunctiveFacetsRefinements), r.disjunctiveFacetsRefinements)
  });
}, Mp = function(t, r) {
  return t.setQueryParameters({
    numericRefinements: bt(bt({}, t.numericRefinements), r.numericRefinements)
  });
}, Lp = function(t, r) {
  return t.setQueryParameters({
    hierarchicalFacetsRefinements: bt(bt({}, t.hierarchicalFacetsRefinements), r.hierarchicalFacetsRefinements)
  });
}, Hp = function(t, r) {
  var n = Rp([].concat(t.ruleContexts).concat(r.ruleContexts).filter(Boolean));
  return n.length > 0 ? t.setQueryParameters({
    ruleContexts: n
  }) : t;
}, In = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.reduce(function(i, a) {
    var o = Lp(i, a), s = Fp(o, a), c = Ip(s, a), u = Mp(c, a), l = Dp(u, a), f = kp(l, a), h = Np(f, a), d = Cp(h, a), p = Hp(d, a), m = $p(p, a);
    return Ap(m, a);
  });
};
function Pr(e, t, r) {
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
function ds(e, t) {
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
function Wp(e) {
  for (var t = e.getParent(), r = [e.getHelper().state]; t !== null; )
    r = [t.getHelper().state].concat(r), t = t.getParent();
  return r;
}
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hs(Object(r), !0).forEach(function(n) {
      Up(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Up(e, t, r) {
  return t = Bp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bp(e) {
  var t = qp(e, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function qp(e, t) {
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
function wc(e) {
  return e.some(function(t) {
    return t.isHighlighted;
  }) ? e.map(function(t, r) {
    return Pn(Pn({}, t), {}, {
      isHighlighted: !hp(e, r)
    });
  }) : e.map(function(t) {
    return Pn(Pn({}, t), {}, {
      isHighlighted: !1
    });
  });
}
function kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    fallback: function() {
    }
  }, r = t.fallback;
  return typeof window > "u" ? r() : e({
    window
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
function ps(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ps(Object(r), !0).forEach(function(n) {
      Sc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ps(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sc(e, t, r) {
  return t = Vp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vp(e) {
  var t = zp(e, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function zp(e, t) {
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
var Qp = jt({
  name: "configure",
  connector: !0
});
function vs(e, t) {
  return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(r, n) {
    return ze(ze({}, r), {}, Sc({}, n, void 0));
  }, {}));
}
var Yp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Be, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return function(n) {
    if (!n || !dc(n.searchParameters))
      throw new Error(Qp("The `searchParameters` option expects an object."));
    var i = {};
    function a(o) {
      return function(s) {
        var c = vs(o.state, n), u = In(c, new ft.SearchParameters(s));
        n.searchParameters = s, o.setState(u).search();
      };
    }
    return {
      $$type: "ais.configure",
      init: function(s) {
        var c = s.instantSearchInstance;
        t(ze(ze({}, this.getWidgetRenderState(s)), {}, {
          instantSearchInstance: c
        }), !0);
      },
      render: function(s) {
        var c = s.instantSearchInstance;
        t(ze(ze({}, this.getWidgetRenderState(s)), {}, {
          instantSearchInstance: c
        }), !1);
      },
      dispose: function(s) {
        var c = s.state;
        return r(), vs(c, n);
      },
      getRenderState: function(s, c) {
        var u, l = this.getWidgetRenderState(c);
        return ze(ze({}, s), {}, {
          configure: ze(ze({}, l), {}, {
            widgetParams: ze(ze({}, l.widgetParams), {}, {
              searchParameters: In(new ft.SearchParameters((u = s.configure) === null || u === void 0 ? void 0 : u.widgetParams.searchParameters), new ft.SearchParameters(l.widgetParams.searchParameters)).getQueryParams()
            })
          })
        });
      },
      getWidgetRenderState: function(s) {
        var c = s.helper;
        return i.refine || (i.refine = a(c)), {
          refine: i.refine,
          widgetParams: n
        };
      },
      getWidgetSearchParameters: function(s, c) {
        var u = c.uiState;
        return In(s, new ft.SearchParameters(ze(ze({}, u.configure), n.searchParameters)));
      },
      getWidgetUiState: function(s) {
        return ze(ze({}, s), {}, {
          configure: ze(ze({}, s.configure), n.searchParameters)
        });
      }
    };
  };
};
const Kp = Yp;
function Zi(e) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e);
}
var ms = Object.prototype.hasOwnProperty;
function Mr(e, t, r) {
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
        for (; i-- && Mr(e[i], t[i], r); )
          ;
      return i === -1;
    }
    if (!n || Zi(e) === "object") {
      i = 0;
      for (n in e)
        if (ms.call(e, n) && ++i && !ms.call(t, n) || !(n in t) || !Mr(e[n], t[n], r))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
function gs(e) {
  var t, r, n;
  return new ft.SearchResults(e, [{
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
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function ys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ys(Object(r), !0).forEach(function(n) {
      Gp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ys(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gp(e, t, r) {
  return t = Xp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xp(e) {
  var t = Zp(e, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function Zp(e, t) {
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
function Jp(e) {
  var t = e.getHelper(), r = (
    // On SSR, we get the results injected on the Index.
    e.getResults() || // On the browser, we create fallback results based on the helper state.
    gs(t.state)
  ), n = e.getScopedResults().map(function(i) {
    var a = i.indexId === e.getIndexId() ? r : gs(i.helper.state);
    return bs(bs({}, i), {}, {
      // We keep `results` from being `null`.
      results: i.results || a
    });
  });
  return {
    results: r,
    scopedResults: n
  };
}
function Oc(e, t) {
  if (!e) {
    if (process.env.NODE_ENV !== "development")
      throw new Error("Invariant failed");
    if (process.env.NODE_ENV === "development")
      throw new Error("[InstantSearch] ".concat(typeof t == "function" ? t() : t));
  }
}
var io = /* @__PURE__ */ Qn(null);
process.env.NODE_ENV === "development" && (io.displayName = "Index");
function ev() {
  var e = Kt(io);
  return Oc(e !== null, "The <Index> component must be used within <InstantSearch>."), e;
}
var ao = /* @__PURE__ */ Qn(null);
process.env.NODE_ENV === "development" && (ao.displayName = "InstantSearch");
function Rc() {
  var e = Kt(ao);
  return Oc(e !== null, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-hooks`."), e;
}
var Pc = /* @__PURE__ */ Qn(null);
process.env.NODE_ENV === "development" && (Pc.displayName = "InstantSearchServer");
function Ec() {
  return Kt(Pc);
}
function tv(e, t) {
  return av(e) || iv(e, t) || nv(e, t) || rv();
}
function rv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nv(e, t) {
  if (e) {
    if (typeof e == "string")
      return ws(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ws(e, t);
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function iv(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function av(e) {
  if (Array.isArray(e))
    return e;
}
function Ss(e) {
  var t = Et(function() {
    return e;
  }), r = tv(t, 2), n = r[0], i = r[1];
  return Mr(n, e) || i(e), n;
}
var ov = typeof window < "u" ? ul : Pt;
function sv(e) {
  var t = e.widget, r = e.parentIndex, n = e.props, i = e.shouldSsr, a = ut(n);
  Pt(function() {
    a.current = n;
  }, [n]);
  var o = ut(t);
  Pt(function() {
    o.current = t;
  }, [t]);
  var s = ut(null), c = i && !r.getWidgets().includes(t), u = Rc();
  ov(function() {
    var l = o.current;
    if (!s.current)
      c || r.addWidgets([t]);
    else {
      clearTimeout(s.current);
      var f = Mr(n, a.current);
      f || (r.removeWidgets([l]), r.addWidgets([t]));
    }
    return function() {
      s.current = setTimeout(function() {
        u._schedule(function() {
          u._preventWidgetCleanup || r.removeWidgets([l]);
        });
      });
    };
  }, [r, t, c, u, n]), c && r.addWidgets([t]);
}
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
var uv = ["instantSearchInstance", "widgetParams"], cv = ["widgetParams"];
function lv(e, t) {
  return pv(e) || hv(e, t) || dv(e, t) || fv();
}
function fv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dv(e, t) {
  if (e) {
    if (typeof e == "string")
      return Os(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Os(e, t);
  }
}
function Os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function hv(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function pv(e) {
  if (Array.isArray(e))
    return e;
}
function Rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rs(Object(r), !0).forEach(function(n) {
      vv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vv(e, t, r) {
  return t = mv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mv(e) {
  var t = gv(e, "string");
  return Hr(t) === "symbol" ? t : String(t);
}
function gv(e, t) {
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
function Es(e, t) {
  if (e == null)
    return {};
  var r = yv(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Gt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ec(), i = Rc(), a = ev(), o = Ss(t), s = Ss(r), c = ut(!0), u = ut(null), l = La(function() {
    var m = e(function(g, R) {
      if (R) {
        c.current = !0;
        return;
      }
      if (c.current) {
        g.instantSearchInstance, g.widgetParams;
        var y = Es(g, uv);
        Mr(y, u.current, function(b, S) {
          return (b == null ? void 0 : b.constructor) === Function && (S == null ? void 0 : S.constructor) === Function;
        }) || (p(y), u.current = y);
      }
    }, function() {
      c.current = !1;
    });
    return Ps(Ps({}, m(o)), s);
  }, [e, o, s]), f = Et(function() {
    if (l.getWidgetRenderState) {
      var m, g = a.getHelper(), R = a.getWidgetUiState({})[a.getIndexId()];
      g.state = ((m = l.getWidgetSearchParameters) === null || m === void 0 ? void 0 : m.call(l, g.state, {
        uiState: R
      })) || g.state;
      var y = Jp(a), b = y.results, S = y.scopedResults, v = l.getWidgetRenderState({
        helper: g,
        parent: a,
        instantSearchInstance: i,
        results: b,
        scopedResults: S,
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
      v.widgetParams;
      var E = Es(v, cv);
      return E;
    }
    return {};
  }), h = lv(f, 2), d = h[0], p = h[1];
  return sv({
    widget: l,
    parentIndex: a,
    props: o,
    shouldSsr: !!n
  }), d;
}
function bv(e, t) {
  return Gt(Kp, {
    searchParameters: e
  }, t);
}
function wv(e) {
  return bv(e, {
    $$widgetType: "ais.configure"
  }), null;
}
var xs = {
  current: {}
};
function xc(e, t) {
  if (process.env.NODE_ENV === "development" && !e) {
    var r = t.trim(), n = xs.current[r];
    if (!n) {
      xs.current[r] = !0;
      var i = "[InstantSearch] ".concat(r);
      console.warn(i);
      try {
        throw new Error(i);
      } catch {
      }
    }
  }
}
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
var Sv = ["initialSearchParameters"];
function _s(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _s(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _s(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _r(e, t, r) {
  return t = Ov(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ov(e) {
  var t = Rv(e, "string");
  return Wr(t) === "symbol" ? t : String(t);
}
function Rv(e, t) {
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
function _c(e) {
  return _v(e) || xv(e) || Ev(e) || Pv();
}
function Pv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ev(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ji(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ji(e, t);
  }
}
function xv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _v(e) {
  if (Array.isArray(e))
    return Ji(e);
}
function Ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function jv(e, t) {
  if (e == null)
    return {};
  var r = Tv(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Rr = jt({
  name: "index-widget"
});
function jc(e, t) {
  var r = t.state, n = t.isPageReset, i = t._uiState;
  r !== e.state && (e.state = r, e.emit("change", {
    state: e.state,
    results: e.lastResults,
    isPageReset: n,
    _uiState: i
  }));
}
function En(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e.reduce(function(n, i) {
    return _t(i) || !i.getWidgetUiState && !i.getWidgetState ? n : i.getWidgetUiState ? i.getWidgetUiState(n, t) : i.getWidgetState(n, t);
  }, r);
}
function xn(e, t) {
  var r = t.initialSearchParameters, n = jv(t, Sv);
  return e.filter(function(i) {
    return !_t(i);
  }).reduce(function(i, a) {
    return a.getWidgetSearchParameters ? a.getWidgetSearchParameters(i, n) : i;
  }, r);
}
function Tc(e) {
  var t = e.filter(_t);
  t.length !== 0 && t.forEach(function(r) {
    var n = r.getHelper();
    jc(n, {
      state: n.state.resetPage(),
      isPageReset: !0
    }), Tc(r.getWidgets());
  });
}
function Ac(e) {
  var t = e.filter(_t);
  return t.reduce(function(r, n) {
    return r.concat.apply(r, [{
      indexId: n.getIndexId(),
      results: n.getResults(),
      helper: n.getHelper()
    }].concat(_c(Ac(n.getWidgets()))));
  }, []);
}
var Av = function(t) {
  if (t === void 0 || t.indexName === void 0)
    throw new Error(Rr("The `indexName` option is required."));
  var r = t.indexName, n = t.indexId, i = n === void 0 ? r : n, a = [], o = {}, s = null, c = null, u = null, l = null, f = null;
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
      return u;
    },
    getResults: function() {
      var d;
      return (d = l) !== null && d !== void 0 && d.lastResults ? (l.lastResults._state = u.state, l.lastResults) : null;
    },
    getPreviousState: function() {
      return f;
    },
    getScopedResults: function() {
      var d = this.getParent(), p = d ? d.getWidgets() : [this];
      return Ac(p);
    },
    getParent: function() {
      return c;
    },
    createURL: function(d) {
      return s._createURL(_r({}, i, En(a, {
        searchParameters: d,
        helper: u
      })));
    },
    getWidgets: function() {
      return a;
    },
    addWidgets: function(d) {
      var p = this;
      if (!Array.isArray(d))
        throw new Error(Rr("The `addWidgets` method expects an array of widgets."));
      if (d.some(function(m) {
        return typeof m.init != "function" && typeof m.render != "function";
      }))
        throw new Error(Rr("The widget definition expects a `render` and/or an `init` method."));
      return a = a.concat(d), s && d.length && (jc(u, {
        state: xn(a, {
          uiState: o,
          initialSearchParameters: u.state
        }),
        _uiState: o
      }), d.forEach(function(m) {
        if (m.getRenderState) {
          var g = m.getRenderState(s.renderState[p.getIndexId()] || {}, Pr(s, p, s._initialUiState));
          vi({
            renderState: g,
            instantSearchInstance: s,
            parent: p
          });
        }
      }), d.forEach(function(m) {
        m.init && m.init(Pr(s, p, s._initialUiState));
      }), s.scheduleSearch()), this;
    },
    removeWidgets: function(d) {
      var p = this;
      if (!Array.isArray(d))
        throw new Error(Rr("The `removeWidgets` method expects an array of widgets."));
      if (d.some(function(g) {
        return typeof g.dispose != "function";
      }))
        throw new Error(Rr("The widget definition expects a `dispose` method."));
      if (a = a.filter(function(g) {
        return d.indexOf(g) === -1;
      }), s && d.length) {
        var m = d.reduce(function(g, R) {
          var y = R.dispose({
            helper: u,
            state: g,
            parent: p
          });
          return y || g;
        }, u.state);
        o = En(a, {
          searchParameters: m,
          helper: u
        }), u.setState(xn(a, {
          uiState: o,
          initialSearchParameters: m
        })), a.length && s.scheduleSearch();
      }
      return this;
    },
    init: function(d) {
      var p = this, m, g = d.instantSearchInstance, R = d.parent, y = d.uiState;
      if (u === null) {
        s = g, c = R, o = y[i] || {};
        var b = g.mainHelper, S = xn(a, {
          uiState: o,
          initialSearchParameters: new ft.SearchParameters({
            index: r
          })
        });
        u = ft({}, S.index, S), u.search = function() {
          return g.onStateChange ? (g.onStateChange({
            uiState: g.mainIndex.getWidgetUiState({}),
            setUiState: function(D) {
              return g.setUiState(D, !1);
            }
          }), b) : b.search();
        }, u.searchWithoutTriggeringOnStateChange = function() {
          return b.search();
        }, u.searchForFacetValues = function(j, D, w, _) {
          var W = u.state.setQueryParameters(_);
          return b.searchForFacetValues(j, D, w, W);
        }, l = b.derive(function() {
          return In.apply(void 0, _c(Wp(p)));
        });
        var v = (m = g._initialResults) === null || m === void 0 ? void 0 : m[this.getIndexId()];
        if (v) {
          var E = new ft.SearchResults(new ft.SearchParameters(v.state), v.results);
          l.lastResults = E, u.lastResults = E;
        }
        u.on("change", function(j) {
          var D = j.isPageReset;
          D && Tc(a);
        }), l.on("search", function() {
          g.scheduleStalledRender(), process.env.NODE_ENV === "development" && cc({
            index: p,
            indexUiState: o
          });
        }), l.on("result", function(j) {
          var D = j.results;
          g.scheduleRender(), u.lastResults = D, f = D == null ? void 0 : D._state;
        }), a.forEach(function(j) {
          if (j.getRenderState) {
            var D = j.getRenderState(g.renderState[p.getIndexId()] || {}, Pr(g, p, y));
            vi({
              renderState: D,
              instantSearchInstance: g,
              parent: p
            });
          }
        }), a.forEach(function(j) {
          process.env.NODE_ENV === "development" && ge(
            // if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
            // aka we warn if there's _only_ getWidgetState
            !j.getWidgetState || !!j.getWidgetUiState,
            "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."
          ), j.init && j.init(Pr(g, p, y));
        }), u.on("change", function(j) {
          var D = j.state, w = j._uiState;
          o = En(a, {
            searchParameters: D,
            helper: u
          }, w || {}), g.onStateChange || g.onInternalStateChange();
        }), v && g.scheduleRender();
      }
    },
    render: function(d) {
      var p = this, m = d.instantSearchInstance;
      m.status === "error" && !m.mainHelper.hasPendingRequests() && f && u.setState(f);
      var g = this.getResults() ? a : a.filter(_t);
      g.forEach(function(R) {
        if (R.getRenderState) {
          var y = R.getRenderState(m.renderState[p.getIndexId()] || {}, ds(m, p));
          vi({
            renderState: y,
            instantSearchInstance: m,
            parent: p
          });
        }
      }), g.forEach(function(R) {
        R.render && R.render(ds(m, p));
      });
    },
    dispose: function() {
      var d = this, p, m;
      a.forEach(function(g) {
        g.dispose && g.dispose({
          helper: u,
          state: u.state,
          parent: d
        });
      }), s = null, c = null, (p = u) === null || p === void 0 || p.removeAllListeners(), u = null, (m = l) === null || m === void 0 || m.detach(), l = null;
    },
    getWidgetUiState: function(d) {
      return a.filter(_t).reduce(function(p, m) {
        return m.getWidgetUiState(p);
      }, gt(gt({}, d), {}, _r({}, i, gt(gt({}, d[i]), o))));
    },
    getWidgetState: function(d) {
      return process.env.NODE_ENV === "development" && ge(!1, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."), this.getWidgetUiState(d);
    },
    getWidgetSearchParameters: function(d, p) {
      var m = p.uiState;
      return xn(a, {
        uiState: m,
        initialSearchParameters: d
      });
    },
    refreshUiState: function() {
      o = En(a, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, o);
    },
    setIndexUiState: function(d) {
      var p = typeof d == "function" ? d(o) : d;
      s.setUiState(function(m) {
        return gt(gt({}, m), {}, _r({}, i, p));
      });
    }
  };
};
const $v = Av;
function vi(e) {
  var t = e.renderState, r = e.instantSearchInstance, n = e.parent, i = n ? n.getIndexId() : r.mainIndex.getIndexId();
  r.renderState = gt(gt({}, r.renderState), {}, _r({}, i, gt(gt({}, r.renderState[i]), t)));
}
function Cv(e, t) {
  return kv(e) || Nv(e, t) || Iv(e, t) || Fv();
}
function Fv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Iv(e, t) {
  if (e) {
    if (typeof e == "string")
      return js(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return js(e, t);
  }
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Nv(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function kv(e) {
  if (Array.isArray(e))
    return e;
}
function Dv() {
  var e = cl(function(n) {
    return n + 1;
  }, 0), t = Cv(e, 2), r = t[1];
  return r;
}
var $c = /* @__PURE__ */ Qn(null);
process.env.NODE_ENV === "development" && ($c.displayName = "InstantSearchSSR");
function Mv() {
  return Kt($c);
}
var Lv = "ais", Zn = function(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.descendantName, i = r.modifierName, a = n ? "-".concat(n) : "", o = i ? "--".concat(i) : "";
    return "".concat(Lv, "-").concat(t).concat(a).concat(o);
  };
}, Hv = Zn("Highlight");
function Wv(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && ge(!1, "`instantsearch.highlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Highlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var s = nn(i._highlightResult, t);
  process.env.NODE_ENV === "development" && ge(s, 'Could not enable highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var c = s || {}, u = c.value, l = u === void 0 ? "" : u, f = Hv({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : "");
  return l.replace(new RegExp(Ze.highlightPreTag, "g"), "<".concat(n, ' class="').concat(f, '">')).replace(new RegExp(Ze.highlightPostTag, "g"), "</".concat(n, ">"));
}
var Uv = Zn("ReverseHighlight");
function Bv(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && ge(!1, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var s = nn(i._highlightResult, t);
  process.env.NODE_ENV === "development" && ge(s, 'Could not enable reverse highlight for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is either searchable or specified in \`attributesToHighlight\`.

See: https://alg.li/highlighting
`));
  var c = s || {}, u = c.value, l = u === void 0 ? "" : u, f = Uv({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : ""), h = vc(wc(Xn(l)));
  return h.replace(new RegExp(Ze.highlightPreTag, "g"), "<".concat(n, ' class="').concat(f, '">')).replace(new RegExp(Ze.highlightPostTag, "g"), "</".concat(n, ">"));
}
var qv = Zn("Snippet");
function Vv(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && ge(!1, "`instantsearch.snippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Snippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var s = nn(i._snippetResult, t);
  process.env.NODE_ENV === "development" && ge(s, 'Could not enable snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var c = s || {}, u = c.value, l = u === void 0 ? "" : u, f = qv({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : "");
  return l.replace(new RegExp(Ze.highlightPreTag, "g"), "<".concat(n, ' class="').concat(f, '">')).replace(new RegExp(Ze.highlightPostTag, "g"), "</".concat(n, ">"));
}
var zv = Zn("ReverseSnippet");
function Qv(e) {
  var t = e.attribute, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.hit, a = e.cssClasses, o = a === void 0 ? {} : a;
  process.env.NODE_ENV === "development" && ge(!1, "`instantsearch.reverseSnippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseSnippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
  var s = nn(i._snippetResult, t);
  process.env.NODE_ENV === "development" && ge(s, 'Could not enable reverse snippet for "'.concat(t, `", will display an empty string.
Please check whether this attribute exists and is specified in \`attributesToSnippet\`.

See: https://alg.li/highlighting
`));
  var c = s || {}, u = c.value, l = u === void 0 ? "" : u, f = zv({
    descendantName: "highlighted"
  }) + (o.highlighted ? " ".concat(o.highlighted) : ""), h = vc(wc(Xn(l)));
  return h.replace(new RegExp(Ze.highlightPreTag, "g"), "<".concat(n, ' class="').concat(f, '">')).replace(new RegExp(Ze.highlightPostTag, "g"), "</".concat(n, ">"));
}
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function Yv(e) {
  var t = e.method, r = e.payload;
  if (ea(r) !== "object")
    throw new Error("The insights helper expects the payload to be an object.");
  var n;
  try {
    n = mc(r);
  } catch {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'.concat(t, '" data-insights-payload="').concat(n, '"');
}
function Kv(e, t) {
  return process.env.NODE_ENV === "development" && ge(!1, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), Yv({
    method: e,
    payload: t
  });
}
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
var Gv = "_ALGOLIA";
function Xv(e) {
  if (!((typeof document > "u" ? "undefined" : ta(document)) !== "object" || typeof document.cookie != "string"))
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) === " "; )
        i = i.substring(1);
      if (i.indexOf(t) === 0)
        return i.substring(t.length, i.length);
    }
}
function Zv() {
  return Xv(Gv);
}
function Ur(e) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
function Ts(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ts(Object(r), !0).forEach(function(n) {
      Jv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jv(e, t, r) {
  return t = em(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function em(e) {
  var t = tm(e, "string");
  return Ur(t) === "symbol" ? t : String(t);
}
function tm(e, t) {
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
function Nn(e, t) {
  return im(e) || nm(e, t) || Cc(e, t) || rm();
}
function rm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nm(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function im(e) {
  if (Array.isArray(e))
    return e;
}
function am(e) {
  return um(e) || sm(e) || Cc(e) || om();
}
function om() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cc(e, t) {
  if (e) {
    if (typeof e == "string")
      return ra(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ra(e, t);
  }
}
function sm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function um(e) {
  if (Array.isArray(e))
    return ra(e);
}
function ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Fc = "2.6.0", cm = "https://cdn.jsdelivr.net/npm/search-insights@".concat(Fc, "/dist/search-insights.min.js");
function lm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.insightsClient, r = e.insightsInitParams, n = e.onEvent, i = e.$$internal, a = i === void 0 ? !1 : i, o = t;
  !t && t !== null && kt(function(c) {
    var u = c.window, l = u.AlgoliaAnalyticsObject || "aa";
    typeof l == "string" && (o = u[l]), o || (u.AlgoliaAnalyticsObject = l, u[l] || (u[l] = function() {
      u[l].queue || (u[l].queue = []);
      for (var f = arguments.length, h = new Array(f), d = 0; d < f; d++)
        h[d] = arguments[d];
      u[l].queue.push(h);
    }, u[l].version = Fc, u[l].shouldAddScript = !0), o = u[l]);
  });
  var s = o || Be;
  return function(c) {
    var u = c.instantSearchInstance, l = u.middleware.filter(function(v) {
      return v.instance.$$type === "ais.insights" && v.instance.$$internal;
    }).map(function(v) {
      return v.creator;
    });
    u.unuse.apply(u, am(l));
    var f = fp(u.client), h = Nn(f, 2), d = h[0], p = h[1];
    process.env.NODE_ENV === "development" && ge(!!(d && p), "could not extract Algolia credentials from searchClient in insights middleware.");
    var m = void 0, g = void 0;
    if (Array.isArray(s.queue)) {
      var R = Cr(s.queue.slice().reverse(), function(v) {
        var E = Nn(v, 1), j = E[0];
        return j === "setUserToken";
      }) || [], y = Nn(R, 2);
      m = y[1];
    }
    s("getUserToken", null, function(v, E) {
      g = E;
    }), (r || !As(s)) && s("init", qt({
      appId: d,
      apiKey: p,
      partial: !0
    }, r));
    var b, S;
    return {
      $$type: "ais.insights",
      $$internal: a,
      onStateChange: function() {
      },
      subscribe: function() {
        if (s.shouldAddScript) {
          var E = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
          try {
            var j = document.createElement("script");
            j.async = !0, j.src = cm, j.onerror = function() {
              u.emit("error", new Error(E));
            }, document.body.appendChild(j), s.shouldAddScript = !1;
          } catch {
            s.shouldAddScript = !1, u.emit("error", new Error(E));
          }
        }
      },
      started: function() {
        s("addAlgoliaAgent", "insights-middleware"), S = u.helper, b = {
          userToken: S.state.userToken,
          clickAnalytics: S.state.clickAnalytics
        }, S.overrideStateWithoutTriggeringChangeEvent(qt(qt({}, S.state), {}, {
          clickAnalytics: !0
        })), a || u.scheduleSearch();
        var E = function(_) {
          if (_) {
            var W = S.state.userToken;
            S.overrideStateWithoutTriggeringChangeEvent(qt(qt({}, S.state), {}, {
              userToken: _
            })), W && W !== _ && u.scheduleSearch();
          }
        }, j = Zv();
        j && E(j), g ? (E(g), s("setUserToken", g)) : m && (E(m), s("setUserToken", m)), s("onUserTokenChange", E, {
          immediate: !0
        });
        var D = s;
        As(s) && (D = function(_, W) {
          var Z = {
            headers: {
              "X-Algolia-Application-Id": d,
              "X-Algolia-API-Key": p
            }
          };
          return s(_, W, Z);
        }), u.sendEventToInsights = function(w) {
          n ? n(w, D) : w.insightsMethod ? (w.payload.algoliaSource = ["instantsearch"], w.eventModifier === "internal" && w.payload.algoliaSource.push("instantsearch-internal"), D(w.insightsMethod, w.payload), process.env.NODE_ENV === "development" && ge(!!S.state.userToken, `
Cannot send event to Algolia Insights because \`userToken\` is not set.

See documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken
`)) : process.env.NODE_ENV === "development" && ge(!1, "Cannot send event to Algolia Insights because `insightsMethod` option is missing.");
        };
      },
      unsubscribe: function() {
        s("onUserTokenChange", void 0), u.sendEventToInsights = Be, S && b && (S.overrideStateWithoutTriggeringChangeEvent(qt(qt({}, S.state), b)), u.scheduleSearch());
      }
    };
  };
}
function As(e) {
  var t = (e.version || "").split(".").map(Number), r = Nn(t, 2), n = r[0], i = r[1], a = n >= 3, o = n === 2 && i >= 6, s = n === 1 && i >= 10;
  return a || o || s;
}
function Ic(e, t, r) {
  var n = Pr(t, t.mainIndex, t._initialUiState);
  e.forEach(function(i) {
    var a = {};
    if (i.getWidgetRenderState) {
      var o = i.getWidgetRenderState(n);
      o && o.widgetParams && (a = o.widgetParams);
    }
    var s = Object.keys(a).filter(function(c) {
      return a[c] !== void 0;
    });
    r.widgets.push({
      type: i.$$type,
      widgetType: i.$$widgetType,
      params: s
    }), i.$$type === "ais.index" && Ic(i.getWidgets(), t, r);
  });
}
function fm() {
  return kt(function(e) {
    var t, r, n = e.window;
    return ((t = n.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0 ? void 0 : r.indexOf("Algolia Crawler")) > -1;
  }, {
    fallback: function() {
      return !1;
    }
  });
}
function dm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.$$internal, r = t === void 0 ? !1 : t;
  return function(n) {
    var i = n.instantSearchInstance, a = {
      widgets: []
    }, o = document.createElement("meta"), s = document.querySelector("head");
    return o.name = "instantsearch:widgets", {
      $$type: "ais.metadata",
      $$internal: r,
      onStateChange: function() {
      },
      subscribe: function() {
        setTimeout(function() {
          var u = i.client;
          a.ua = u.transporter && u.transporter.userAgent ? u.transporter.userAgent.value : u._ua, Ic(i.mainIndex.getWidgets(), i, a), i.middleware.forEach(function(l) {
            return a.widgets.push({
              middleware: !0,
              type: l.instance.$$type,
              internal: l.instance.$$internal
            });
          }), o.content = JSON.stringify(a), s.appendChild(o);
        }, 0);
      },
      started: function() {
      },
      unsubscribe: function() {
        o.remove();
      }
    };
  };
}
var hm = String.prototype.replace, pm = /%20/g, mi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, oo = {
  default: mi.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return hm.call(e, pm, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: mi.RFC1738,
  RFC3986: mi.RFC3986
}, vm = oo, gi = Object.prototype.hasOwnProperty, Qt = Array.isArray, pt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), mm = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Qt(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Nc = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, gm = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Qt(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !gi.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Qt(t) && !Qt(r) && (i = Nc(t, n)), Qt(t) && Qt(r) ? (r.forEach(function(a, o) {
    if (gi.call(t, o)) {
      var s = t[o];
      s && typeof s == "object" && a && typeof a == "object" ? t[o] = e(s, a, n) : t.push(a);
    } else
      t[o] = a;
  }), t) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return gi.call(a, o) ? a[o] = e(a[o], s, n) : a[o] = s, a;
  }, i);
}, ym = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, bm = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, wm = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(l) {
      return "%26%23" + parseInt(l.slice(2), 16) + "%3B";
    });
  for (var s = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === vm.RFC1738 && (u === 40 || u === 41)) {
      s += o.charAt(c);
      continue;
    }
    if (u < 128) {
      s = s + pt[u];
      continue;
    }
    if (u < 2048) {
      s = s + (pt[192 | u >> 6] + pt[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (pt[224 | u >> 12] + pt[128 | u >> 6 & 63] + pt[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), s += pt[240 | u >> 18] + pt[128 | u >> 12 & 63] + pt[128 | u >> 6 & 63] + pt[128 | u & 63];
  }
  return s;
}, Sm = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), c = 0; c < s.length; ++c) {
      var u = s[c], l = o[u];
      typeof l == "object" && l !== null && n.indexOf(l) === -1 && (r.push({ obj: o, prop: u }), n.push(l));
    }
  return mm(r), t;
}, Om = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Rm = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Pm = function(t, r) {
  return [].concat(t, r);
}, Em = function(t, r) {
  if (Qt(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, kc = {
  arrayToObject: Nc,
  assign: ym,
  combine: Pm,
  compact: Sm,
  decode: bm,
  encode: wm,
  isBuffer: Rm,
  isRegExp: Om,
  maybeMap: Em,
  merge: gm
}, na = kc, jr = oo, xm = Object.prototype.hasOwnProperty, $s = {
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
}, Yt = Array.isArray, _m = String.prototype.split, jm = Array.prototype.push, Dc = function(e, t) {
  jm.apply(e, Yt(t) ? t : [t]);
}, Tm = Date.prototype.toISOString, Cs = jr.default, Ye = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: na.encode,
  encodeValuesOnly: !1,
  format: Cs,
  formatter: jr.formatters[Cs],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Tm.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Am = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, $m = function e(t, r, n, i, a, o, s, c, u, l, f, h, d, p) {
  var m = t;
  if (typeof s == "function" ? m = s(r, m) : m instanceof Date ? m = l(m) : n === "comma" && Yt(m) && (m = na.maybeMap(m, function(W) {
    return W instanceof Date ? l(W) : W;
  })), m === null) {
    if (i)
      return o && !d ? o(r, Ye.encoder, p, "key", f) : r;
    m = "";
  }
  if (Am(m) || na.isBuffer(m)) {
    if (o) {
      var g = d ? r : o(r, Ye.encoder, p, "key", f);
      if (n === "comma" && d) {
        for (var R = _m.call(String(m), ","), y = "", b = 0; b < R.length; ++b)
          y += (b === 0 ? "" : ",") + h(o(R[b], Ye.encoder, p, "value", f));
        return [h(g) + "=" + y];
      }
      return [h(g) + "=" + h(o(m, Ye.encoder, p, "value", f))];
    }
    return [h(r) + "=" + h(String(m))];
  }
  var S = [];
  if (typeof m > "u")
    return S;
  var v;
  if (n === "comma" && Yt(m))
    v = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (Yt(s))
    v = s;
  else {
    var E = Object.keys(m);
    v = c ? E.sort(c) : E;
  }
  for (var j = 0; j < v.length; ++j) {
    var D = v[j], w = typeof D == "object" && typeof D.value < "u" ? D.value : m[D];
    if (!(a && w === null)) {
      var _ = Yt(m) ? typeof n == "function" ? n(r, D) : r : r + (u ? "." + D : "[" + D + "]");
      Dc(S, e(
        w,
        _,
        n,
        i,
        a,
        o,
        s,
        c,
        u,
        l,
        f,
        h,
        d,
        p
      ));
    }
  }
  return S;
}, Cm = function(t) {
  if (!t)
    return Ye;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Ye.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = jr.default;
  if (typeof t.format < "u") {
    if (!xm.call(jr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = jr.formatters[n], a = Ye.filter;
  return (typeof t.filter == "function" || Yt(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ye.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? Ye.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ye.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? Ye.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Ye.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : Ye.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ye.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ye.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ye.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ye.strictNullHandling
  };
}, Fm = function(e, t) {
  var r = e, n = Cm(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Yt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  t && t.arrayFormat in $s ? s = t.arrayFormat : t && "indices" in t ? s = t.indices ? "indices" : "repeat" : s = "indices";
  var c = $s[s];
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = 0; u < i.length; ++u) {
    var l = i[u];
    n.skipNulls && r[l] === null || Dc(o, $m(
      r[l],
      l,
      c,
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
  var f = o.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), f.length > 0 ? h + f : "";
}, sr = kc, ia = Object.prototype.hasOwnProperty, Im = Array.isArray, Qe = {
  allowDots: !1,
  allowPrototypes: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: sr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Nm = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Mc = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, km = "utf8=%26%2310003%3B", Dm = "utf8=%E2%9C%93", Mm = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, c, u = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === Dm ? u = "utf-8" : o[c] === km && (u = "iso-8859-1"), s = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== s) {
      var l = o[c], f = l.indexOf("]="), h = f === -1 ? l.indexOf("=") : f + 1, d, p;
      h === -1 ? (d = r.decoder(l, Qe.decoder, u, "key"), p = r.strictNullHandling ? null : "") : (d = r.decoder(l.slice(0, h), Qe.decoder, u, "key"), p = sr.maybeMap(
        Mc(l.slice(h + 1), r),
        function(m) {
          return r.decoder(m, Qe.decoder, u, "value");
        }
      )), p && r.interpretNumericEntities && u === "iso-8859-1" && (p = Nm(p)), l.indexOf("[]=") > -1 && (p = Im(p) ? [p] : p), ia.call(n, d) ? n[d] = sr.combine(n[d], p) : n[d] = p;
    }
  return n;
}, Lm = function(e, t, r, n) {
  for (var i = n ? t : Mc(t, r), a = e.length - 1; a >= 0; --a) {
    var o, s = e[a];
    if (s === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: i } : !isNaN(u) && s !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (o = [], o[u] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, Hm = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(a), u = c ? a.slice(0, c.index) : a, l = [];
    if (u) {
      if (!n.plainObjects && ia.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      l.push(u);
    }
    for (var f = 0; n.depth > 0 && (c = s.exec(a)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && ia.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      l.push(c[1]);
    }
    return c && l.push("[" + a.slice(c.index) + "]"), Lm(l, r, n, i);
  }
}, Wm = function(t) {
  if (!t)
    return Qe;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? Qe.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? Qe.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Qe.allowPrototypes,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Qe.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Qe.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : Qe.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : Qe.decoder,
    delimiter: typeof t.delimiter == "string" || sr.isRegExp(t.delimiter) ? t.delimiter : Qe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Qe.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Qe.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Qe.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Qe.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Qe.strictNullHandling
  };
}, Um = function(e, t) {
  var r = Wm(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? Mm(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], c = Hm(s, n[s], r, typeof e == "string");
    i = sr.merge(i, c, r);
  }
  return sr.compact(i);
}, Bm = Fm, qm = Um, Vm = oo, zm = {
  formats: Vm,
  parse: qm,
  stringify: Bm
};
const Fs = /* @__PURE__ */ cr(zm);
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function Qm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Is(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lc(n.key), n);
  }
}
function Ym(e, t, r) {
  return t && Is(e.prototype, t), r && Is(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function et(e, t, r) {
  return t = Lc(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lc(e) {
  var t = Km(e, "string");
  return Br(t) === "symbol" ? t : String(t);
}
function Km(e, t) {
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
var Ns = function(t) {
  t && (window.document.title = t);
}, Gm = /* @__PURE__ */ function() {
  function e(t) {
    var r = this, n = t.windowTitle, i = t.writeDelay, a = i === void 0 ? 400 : i, o = t.createURL, s = t.parseURL, c = t.getLocation, u = t.start, l = t.dispose, f = t.push;
    Qm(this, e), et(this, "$$type", "ais.browser"), et(this, "windowTitle", void 0), et(this, "writeDelay", void 0), et(this, "_createURL", void 0), et(this, "parseURL", void 0), et(this, "getLocation", void 0), et(this, "writeTimer", void 0), et(this, "_onPopState", void 0), et(this, "inPopState", !1), et(this, "isDisposed", !1), et(this, "latestAcknowledgedHistory", 0), et(this, "_start", void 0), et(this, "_dispose", void 0), et(this, "_push", void 0), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = a, this._createURL = o, this.parseURL = s, this.getLocation = c, this._start = u, this._dispose = l, this._push = f, kt(function(h) {
      var d = h.window, p = r.windowTitle && r.windowTitle(r.read());
      Ns(p), r.latestAcknowledgedHistory = d.history.length;
    });
  }
  return Ym(e, [{
    key: "read",
    value: function() {
      return this.parseURL({
        qsModule: Fs,
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
      kt(function(i) {
        var a = i.window, o = n.createURL(r), s = n.windowTitle && n.windowTitle(r);
        n.writeTimer && clearTimeout(n.writeTimer), n.writeTimer = setTimeout(function() {
          Ns(s), n.shouldWrite(o) && (n._push ? n._push(o) : a.history.pushState(r, s || "", o), n.latestAcknowledgedHistory = a.history.length), n.inPopState = !1, n.writeTimer = void 0;
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
      }, kt(function(i) {
        var a = i.window;
        a.addEventListener("popstate", n._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch.js/issues/790
     */
  }, {
    key: "createURL",
    value: function(r) {
      var n = this._createURL({
        qsModule: Fs,
        routeState: r,
        location: this.getLocation()
      });
      if (process.env.NODE_ENV === "development")
        try {
          new URL(n);
        } catch {
          process.env.NODE_ENV === "development" && ge(!1, "The URL returned by the `createURL` function is invalid.\nPlease make sure it returns an absolute URL to avoid issues, e.g: `https://algolia.com/search?query=iphone`.");
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
      this._dispose && this._dispose(), this.isDisposed = !0, kt(function(n) {
        var i = n.window;
        r._onPopState && i.removeEventListener("popstate", r._onPopState);
      }), this.writeTimer && clearTimeout(this.writeTimer), this.write({});
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
      return kt(function(i) {
        var a = i.window, o = !(n.isDisposed && n.latestAcknowledgedHistory !== a.history.length);
        return (
          // When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !n.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
          o && // When the URL is the same as the current one, we do not want to write it.
          r !== a.location.href
        );
      });
    }
  }]), e;
}();
function Xm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.createURL, r = t === void 0 ? function(d) {
    var p = d.qsModule, m = d.routeState, g = d.location, R = g.protocol, y = g.hostname, b = g.port, S = b === void 0 ? "" : b, v = g.pathname, E = g.hash, j = p.stringify(m), D = S === "" ? "" : ":".concat(S);
    return j ? "".concat(R, "//").concat(y).concat(D).concat(v, "?").concat(j).concat(E) : "".concat(R, "//").concat(y).concat(D).concat(v).concat(E);
  } : t, n = e.parseURL, i = n === void 0 ? function(d) {
    var p = d.qsModule, m = d.location;
    return p.parse(m.search.slice(1), {
      arrayLimit: 99
    });
  } : n, a = e.writeDelay, o = a === void 0 ? 400 : a, s = e.windowTitle, c = e.getLocation, u = c === void 0 ? function() {
    return kt(function(d) {
      var p = d.window;
      return p.location;
    }, {
      fallback: function() {
        throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
      }
    });
  } : c, l = e.start, f = e.dispose, h = e.push;
  return new Gm({
    createURL: r,
    parseURL: i,
    writeDelay: o,
    windowTitle: s,
    getLocation: u,
    start: l,
    dispose: f,
    push: h
  });
}
function qr(e) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
var Zm = ["configure"];
function ks(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ks(Object(r), !0).forEach(function(n) {
      aa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aa(e, t, r) {
  return t = Jm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Jm(e) {
  var t = eg(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function eg(e, t) {
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
function tg(e, t) {
  if (e == null)
    return {};
  var r = rg(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ds(e) {
  e.configure;
  var t = tg(e, Zm);
  return t;
}
function ng() {
  return {
    $$type: "ais.simple",
    stateToRoute: function(t) {
      return Object.keys(t).reduce(function(r, n) {
        return _n(_n({}, r), {}, aa({}, n, Ds(t[n])));
      }, {});
    },
    routeToState: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(t).reduce(function(r, n) {
        return _n(_n({}, r), {}, aa({}, n, Ds(t[n])));
      }, {});
    }
  };
}
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function Ms(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ms(Object(r), !0).forEach(function(n) {
      Hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ms(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hc(e, t, r) {
  return t = ig(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ig(e) {
  var t = ag(e, "string");
  return Vr(t) === "symbol" ? t : String(t);
}
function ag(e, t) {
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
var og = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.router, n = r === void 0 ? Xm() : r, i = t.stateMapping, a = i === void 0 ? ng() : i, o = t.$$internal, s = o === void 0 ? !1 : o;
  return function(c) {
    var u = c.instantSearchInstance;
    function l(d) {
      var p = Object.keys(d).reduce(function(g, R) {
        return jn(jn({}, g), {}, Hc({}, R, d[R]));
      }, u.mainIndex.getWidgetUiState({})), m = a.stateToRoute(p);
      return n.createURL(m);
    }
    u._createURL = l;
    var f = void 0, h = u._initialUiState;
    return {
      $$type: "ais.router({router:".concat(n.$$type || "__unknown__", ", stateMapping:").concat(a.$$type || "__unknown__", "})"),
      $$internal: s,
      onStateChange: function(p) {
        var m = p.uiState, g = a.stateToRoute(m);
        (f === void 0 || !no(f, g)) && (n.write(g), f = g);
      },
      subscribe: function() {
        u._initialUiState = jn(jn({}, h), a.routeToState(n.read())), n.onUpdate(function(p) {
          u.setUiState(a.routeToState(p));
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
function sg(e, t) {
  return e.toLocaleString(t);
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function Ls(e, t) {
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
    t % 2 ? Ls(Object(r), !0).forEach(function(n) {
      ug(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ls(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ug(e, t, r) {
  return t = cg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cg(e) {
  var t = lg(e, "string");
  return zr(t) === "symbol" ? t : String(t);
}
function lg(e, t) {
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
function fg(e) {
  var t = e.numberLocale;
  return {
    formatNumber: function(n, i) {
      return sg(Number(i(n)), t);
    },
    highlight: function(n, i) {
      try {
        var a = JSON.parse(n);
        return i(Wv(Ot(Ot({}, a), {}, {
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
        return i(Bv(Ot(Ot({}, a), {}, {
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
        return i(Vv(Ot(Ot({}, a), {}, {
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
        return i(Qv(Ot(Ot({}, a), {}, {
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
        var a = JSON.parse(n), o = a.method, s = a.payload;
        return i(Kv(o, Ot({
          objectIDs: [this.objectID]
        }, s)));
      } catch {
        throw new Error(`
The insights helper expects a JSON object of the format:
{ "method": "method-name", "payload": { "eventName": "name of the event" } }`);
      }
    }
  };
}
const dg = "4.56.1";
function ur(e) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ur(e);
}
function Hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hs(Object(r), !0).forEach(function(n) {
      Ce(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ws(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wc(n.key), n);
  }
}
function vg(e, t, r) {
  return t && Ws(e.prototype, t), r && Ws(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && oa(e, t);
}
function oa(e, t) {
  return oa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, oa(e, t);
}
function gg(e) {
  var t = bg();
  return function() {
    var n = Vn(e), i;
    if (t) {
      var a = Vn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return yg(this, i);
  };
}
function yg(e, t) {
  if (t && (ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $e(e);
}
function $e(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bg() {
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
function Vn(e) {
  return Vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vn(e);
}
function Ce(e, t, r) {
  return t = Wc(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wc(e) {
  var t = wg(e, "string");
  return ur(t) === "symbol" ? t : String(t);
}
function wg(e, t) {
  if (ur(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ur(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vt = jt({
  name: "instantsearch"
});
function Sg() {
  return "#";
}
var Og = /* @__PURE__ */ function(e) {
  mg(r, e);
  var t = gg(r);
  function r(n) {
    var i;
    pg(this, r), i = t.call(this), Ce($e(i), "client", void 0), Ce($e(i), "indexName", void 0), Ce($e(i), "insightsClient", void 0), Ce($e(i), "onStateChange", null), Ce($e(i), "helper", void 0), Ce($e(i), "mainHelper", void 0), Ce($e(i), "mainIndex", void 0), Ce($e(i), "started", void 0), Ce($e(i), "templatesConfig", void 0), Ce($e(i), "renderState", {}), Ce($e(i), "_stalledSearchDelay", void 0), Ce($e(i), "_searchStalledTimer", void 0), Ce($e(i), "_initialUiState", void 0), Ce($e(i), "_initialResults", void 0), Ce($e(i), "_createURL", void 0), Ce($e(i), "_searchFunction", void 0), Ce($e(i), "_mainHelperSearch", void 0), Ce($e(i), "middleware", []), Ce($e(i), "sendEventToInsights", void 0), Ce($e(i), "status", "idle"), Ce($e(i), "error", void 0), Ce($e(i), "scheduleSearch", Or(function() {
      i.started && i.mainHelper.search();
    })), Ce($e(i), "scheduleRender", Or(function() {
      var w, _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (w = i.mainHelper) !== null && w !== void 0 && w.hasPendingRequests() || (clearTimeout(i._searchStalledTimer), i._searchStalledTimer = null, _ && (i.status = "idle", i.error = void 0)), i.mainIndex.render({
        instantSearchInstance: $e(i)
      }), i.emit("render");
    })), Ce($e(i), "onInternalStateChange", Or(function() {
      var w = i.mainIndex.getWidgetUiState({});
      i.middleware.forEach(function(_) {
        var W = _.instance;
        W.onStateChange({
          uiState: w
        });
      });
    })), i.setMaxListeners(100);
    var a = n.indexName, o = a === void 0 ? "" : a, s = n.numberLocale, c = n.initialUiState, u = c === void 0 ? {} : c, l = n.routing, f = l === void 0 ? null : l, h = n.insights, d = h === void 0 ? !1 : h, p = n.searchFunction, m = n.stalledSearchDelay, g = m === void 0 ? 200 : m, R = n.searchClient, y = R === void 0 ? null : R, b = n.insightsClient, S = b === void 0 ? null : b, v = n.onStateChange, E = v === void 0 ? null : v;
    if (y === null)
      throw new Error(vt("The `searchClient` option is required."));
    if (typeof y.search != "function")
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    if (typeof y.addAlgoliaAgent == "function" && y.addAlgoliaAgent("instantsearch.js (".concat(dg, ")")), process.env.NODE_ENV === "development" && ge(S === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/"), S && typeof S != "function")
      throw new Error(vt("The `insightsClient` option should be a function."));
    if (process.env.NODE_ENV === "development" && ge(!n.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(n.searchParameters, null, 2), `)
]);
\`\`\`

See `).concat(yc({
      name: "configure"
    }))), i.client = y, i.insightsClient = S, i.indexName = o, i.helper = null, i.mainHelper = null, i.mainIndex = $v({
      indexName: o
    }), i.onStateChange = E, i.started = !1, i.templatesConfig = {
      helpers: fg({
        numberLocale: s
      }),
      compileOptions: {}
    }, i._stalledSearchDelay = g, i._searchStalledTimer = null, i._createURL = Sg, i._initialUiState = u, i._initialResults = null, p && (process.env.NODE_ENV === "development" && ge(!1, "The `searchFunction` option is deprecated. Use `onStateChange` instead."), i._searchFunction = p), i.sendEventToInsights = Be, f) {
      var j = typeof f == "boolean" ? {} : f;
      j.$$internal = !0, i.use(og(j));
    }
    if (d) {
      var D = typeof d == "boolean" ? {} : d;
      D.$$internal = !0, i.use(lm(D));
    }
    return fm() && i.use(dm({
      $$internal: !0
    })), i;
  }
  return vg(r, [{
    key: "_isSearchStalled",
    get: (
      /**
       * The status of the search. Can be "idle", "loading", "stalled", or "error".
       */
      /**
       * The last returned error from the Search API.
       * The error gets cleared when the next valid search response is rendered.
       */
      /**
       * @deprecated use `status === 'stalled'` instead
       */
      function() {
        return process.env.NODE_ENV === "development" && ge(!1, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.'), this.status === "stalled";
      }
    )
  }, {
    key: "use",
    value: function() {
      for (var i = this, a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      var c = o.map(function(u) {
        var l = hg({
          $$type: "__unknown__",
          $$internal: !1,
          subscribe: Be,
          started: Be,
          unsubscribe: Be,
          onStateChange: Be
        }, u({
          instantSearchInstance: i
        }));
        return i.middleware.push({
          creator: u,
          instance: l
        }), l;
      });
      return this.started && c.forEach(function(u) {
        u.subscribe(), u.started();
      }), this;
    }
    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */
  }, {
    key: "unuse",
    value: function() {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return this.middleware.filter(function(s) {
        return a.includes(s.creator);
      }).forEach(function(s) {
        return s.instance.unsubscribe();
      }), this.middleware = this.middleware.filter(function(s) {
        return !a.includes(s.creator);
      }), this;
    }
    // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
  }, {
    key: "EXPERIMENTAL_use",
    value: function() {
      return process.env.NODE_ENV === "development" && ge(!1, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version."), this.use.apply(this, arguments);
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
      return process.env.NODE_ENV === "development" && ge(!1, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`"), this.addWidgets([i]);
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
        throw new Error(vt("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
      if (i.some(function(a) {
        return typeof a.init != "function" && typeof a.render != "function";
      }))
        throw new Error(vt("The widget definition expects a `render` and/or an `init` method."));
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
      return process.env.NODE_ENV === "development" && ge(!1, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`"), this.removeWidgets([i]);
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
        throw new Error(vt("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
      if (i.some(function(a) {
        return typeof a.dispose != "function";
      }))
        throw new Error(vt("The widget definition expects a `dispose` method."));
      return this.mainIndex.removeWidgets(i), this;
    }
    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search. This method should be called after all widgets have been added
     * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing
     * widgets after the start as an **EXPERIMENTAL** feature.
     */
  }, {
    key: "start",
    value: function() {
      var i = this;
      if (this.started)
        throw new Error(vt("The `start` method has already been called once."));
      var a = this.mainHelper || ft(this.client, this.indexName);
      if (a.search = function() {
        return i.status = "loading", i.scheduleRender(!1), process.env.NODE_ENV === "development" && ge(!!i.indexName || i.mainIndex.getWidgets().some(_t), "No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results."), a.searchOnlyWithDerivedHelpers();
      }, this._searchFunction) {
        var o = {
          search: function() {
            return new Promise(Be);
          }
        };
        this._mainHelperSearch = a.search.bind(a), a.search = function() {
          var c = i.mainIndex.getHelper(), u = ft(o, c.state.index, c.state);
          return u.once("search", function(l) {
            var f = l.state;
            c.overrideStateWithoutTriggeringChangeEvent(f), i._mainHelperSearch();
          }), u.on("change", function(l) {
            var f = l.state;
            c.setState(f);
          }), i._searchFunction(u), a;
        };
      }
      if (a.on("error", function(c) {
        var u = c.error;
        if (!(u instanceof Error)) {
          var l = u;
          u = Object.keys(l).reduce(function(f, h) {
            return f[h] = l[h], f;
          }, new Error(l.message));
        }
        u.error = u, i.error = u, i.status = "error", i.scheduleRender(!1), i.emit("error", u);
      }), this.mainHelper = a, this.middleware.forEach(function(c) {
        var u = c.instance;
        u.subscribe();
      }), this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      }), this._initialResults) {
        var s = this.scheduleSearch;
        this.scheduleSearch = Or(Be), Or(function() {
          i.scheduleSearch = s;
        })();
      } else
        this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
      this.helper = this.mainIndex.getHelper(), this.started = !0, this.middleware.forEach(function(c) {
        var u = c.instance;
        u.started();
      });
    }
    /**
     * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,
     * if you find an issue with it, please
     * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20dispose).
     * @return {undefined} This method does not return anything
     */
  }, {
    key: "dispose",
    value: function() {
      var i;
      this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), (i = this.mainHelper) === null || i === void 0 || i.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(a) {
        var o = a.instance;
        o.unsubscribe();
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
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!this.mainHelper)
        throw new Error(vt("The `start` method needs to be called before `setUiState`."));
      this.mainIndex.refreshUiState();
      var s = typeof i == "function" ? i(this.mainIndex.getWidgetUiState({})) : i;
      this.onStateChange && o ? this.onStateChange({
        uiState: s,
        setUiState: function(u) {
          Xi(typeof u == "function" ? u(s) : u, a.mainIndex), a.scheduleSearch(), a.onInternalStateChange();
        }
      }) : (Xi(s, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange());
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
        throw new Error(vt("The `start` method needs to be called before `createURL`."));
      return this._createURL(i);
    }
  }, {
    key: "refresh",
    value: function() {
      if (!this.mainHelper)
        throw new Error(vt("The `start` method needs to be called before `refresh`."));
      this.mainHelper.clearCache().search();
    }
  }]), r;
}(oh);
const Rg = Og;
var sa = { exports: {} }, yi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function Pg() {
  if (Us)
    return yi;
  Us = 1;
  var e = U;
  function t(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function s(f, h) {
    var d = h(), p = n({ inst: { value: d, getSnapshot: h } }), m = p[0].inst, g = p[1];
    return a(function() {
      m.value = d, m.getSnapshot = h, c(m) && g({ inst: m });
    }, [f, d, h]), i(function() {
      return c(m) && g({ inst: m }), f(function() {
        c(m) && g({ inst: m });
      });
    }, [f]), o(d), d;
  }
  function c(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var d = h();
      return !r(f, d);
    } catch {
      return !0;
    }
  }
  function u(f, h) {
    return h();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return yi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, yi;
}
var bi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function Eg() {
  return Bs || (Bs = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = U, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(b) {
      {
        for (var S = arguments.length, v = new Array(S > 1 ? S - 1 : 0), E = 1; E < S; E++)
          v[E - 1] = arguments[E];
        n("error", b, v);
      }
    }
    function n(b, S, v) {
      {
        var E = t.ReactDebugCurrentFrame, j = E.getStackAddendum();
        j !== "" && (S += "%s", v = v.concat([j]));
        var D = v.map(function(w) {
          return String(w);
        });
        D.unshift("Warning: " + S), Function.prototype.apply.call(console[b], console, D);
      }
    }
    function i(b, S) {
      return b === S && (b !== 0 || 1 / b === 1 / S) || b !== b && S !== S;
    }
    var a = typeof Object.is == "function" ? Object.is : i, o = e.useState, s = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, l = !1, f = !1;
    function h(b, S, v) {
      l || e.startTransition !== void 0 && (l = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = S();
      if (!f) {
        var j = S();
        a(E, j) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var D = o({
        inst: {
          value: E,
          getSnapshot: S
        }
      }), w = D[0].inst, _ = D[1];
      return c(function() {
        w.value = E, w.getSnapshot = S, d(w) && _({
          inst: w
        });
      }, [b, E, S]), s(function() {
        d(w) && _({
          inst: w
        });
        var W = function() {
          d(w) && _({
            inst: w
          });
        };
        return b(W);
      }, [b]), u(E), E;
    }
    function d(b) {
      var S = b.getSnapshot, v = b.value;
      try {
        var E = S();
        return !a(v, E);
      } catch {
        return !0;
      }
    }
    function p(b, S, v) {
      return S();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !m, R = g ? p : h, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : R;
    bi.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), bi;
}
process.env.NODE_ENV === "production" ? sa.exports = Pg() : sa.exports = Eg();
var xg = sa.exports, qs = ["react (".concat(fl, ")"), "react-instantsearch (".concat(Ui, ")"), "react-instantsearch-hooks (".concat(Ui, ")")], Vs = "react-instantsearch-server (".concat(Ui, ")");
function _g(e) {
  var t = Dv(), r = Ec(), n = Mv(), i = n == null ? void 0 : n.initialResults, a = ut(e), o = ut(null);
  if (n && (o = n.ssrSearchRef), o.current === null) {
    var s = new Rg(e);
    s._schedule = function(p) {
      s._schedule.queue.push(p), clearTimeout(s._schedule.timer), s._schedule.timer = setTimeout(function() {
        s._schedule.queue.forEach(function(m) {
          m();
        }), s._schedule.queue = [];
      }, 0);
    }, s._schedule.queue = [], (r || i) && (s._initialResults = i || {}), zs(e.searchClient, [].concat(qs, [r && Vs])), (r || i) && s.start(), r && r.notifyServer({
      search: s
    }), jg(e.routing), o.current = s;
  }
  {
    var c = o.current, u = a.current;
    if (u.indexName !== e.indexName && (c.helper.setIndex(e.indexName || "").search(), a.current = e), u.searchClient !== e.searchClient && (process.env.NODE_ENV === "development" && xc(!1, "The `searchClient` prop of `<InstantSearch>` changed between renders, which may cause more search requests than necessary. If this is an unwanted behavior, please provide a stable reference: https://www.algolia.com/doc/api-reference/widgets/instantsearch/react-hooks/#widget-param-searchclient"), zs(e.searchClient, [].concat(qs, [r && Vs])), c.mainHelper.setClient(e.searchClient).search(), a.current = e), u.onStateChange !== e.onStateChange && (c.onStateChange = e.onStateChange, a.current = e), u.searchFunction !== e.searchFunction && (c._searchFunction = e.searchFunction, a.current = e), u.stalledSearchDelay !== e.stalledSearchDelay) {
      var l;
      c._stalledSearchDelay = (l = e.stalledSearchDelay) !== null && l !== void 0 ? l : 200, a.current = e;
    }
  }
  var f = ut(null), h = xg.useSyncExternalStore(ll(function() {
    var d = o.current;
    return f.current === null ? d.started || (d.start(), t()) : (clearTimeout(f.current), d._preventWidgetCleanup = !1), function() {
      function p() {
        d.dispose();
      }
      clearTimeout(d._schedule.timer), f.current = setTimeout(p), d._preventWidgetCleanup = !0;
    };
  }, [t]), function() {
    return o.current;
  }, function() {
    return o.current;
  });
  return h;
}
function zs(e, t) {
  typeof e.addAlgoliaAgent == "function" && t.filter(Boolean).forEach(function(r) {
    e.addAlgoliaAgent(r);
  });
}
function jg(e) {
  if (process.env.NODE_ENV === "development") {
    var t;
    if (!e || typeof window > "u" || !("__NEXT_DATA__" in window))
      return;
    var r = (
      // @ts-expect-error: _isNextRouter is only set on the Next.js router
      e !== !0 && (e == null || (t = e.router) === null || t === void 0 ? void 0 : t._isNextRouter)
    );
    process.env.NODE_ENV === "development" && xc(r, `
You are using Next.js with InstantSearch without the "react-instantsearch-hooks-router-nextjs" package.
This package is recommended to make the routing work correctly with Next.js.
Please check its usage instructions: https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch-hooks-router-nextjs

You can ignore this warning if you are using a custom router that suits your needs, it won't be outputted in production builds.`);
  }
}
var Tg = ["children"];
function Ag(e, t) {
  if (e == null)
    return {};
  var r = $g(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $g(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Cg(e) {
  var t = e.children, r = Ag(e, Tg), n = _g(r);
  return n.started ? /* @__PURE__ */ U.createElement(ao.Provider, {
    value: n
  }, /* @__PURE__ */ U.createElement(io.Provider, {
    value: n.mainIndex
  }, t)) : null;
}
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Fg(e) {
  return Dg(e) || kg(e) || Ng(e) || Ig();
}
function Ig() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ng(e, t) {
  if (e) {
    if (typeof e == "string")
      return ua(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ua(e, t);
  }
}
function kg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dg(e) {
  if (Array.isArray(e))
    return ua(e);
}
function ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Qs(e, t) {
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
    t % 2 ? Qs(Object(r), !0).forEach(function(n) {
      Mg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mg(e, t, r) {
  return t = Lg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lg(e) {
  var t = Hg(e, "string");
  return Qr(t) === "symbol" ? t : String(t);
}
function Hg(e, t) {
  if (Qr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ys = jt({
  name: "current-refinements",
  connector: !0
}), Wg = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return fr(t, Ys()), function(n) {
    if ((n || {}).includedAttributes && (n || {}).excludedAttributes)
      throw new Error(Ys("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
    var i = n || {}, a = i.includedAttributes, o = i.excludedAttributes, s = o === void 0 ? ["query"] : o, c = i.transformItems, u = c === void 0 ? function(l) {
      return l;
    } : c;
    return {
      $$type: "ais.currentRefinements",
      init: function(f) {
        var h = f.instantSearchInstance;
        t(Jt(Jt({}, this.getWidgetRenderState(f)), {}, {
          instantSearchInstance: h
        }), !0);
      },
      render: function(f) {
        var h = f.instantSearchInstance;
        t(Jt(Jt({}, this.getWidgetRenderState(f)), {}, {
          instantSearchInstance: h
        }), !1);
      },
      dispose: function() {
        r();
      },
      getRenderState: function(f, h) {
        return Jt(Jt({}, f), {}, {
          currentRefinements: this.getWidgetRenderState(h)
        });
      },
      getWidgetRenderState: function(f) {
        var h = f.results, d = f.scopedResults, p = f.createURL, m = f.helper;
        function g() {
          return h ? d.reduce(function(y, b) {
            return y.concat(u(Ks({
              results: b.results,
              helper: b.helper,
              indexId: b.indexId,
              includedAttributes: a,
              excludedAttributes: s
            }), {
              results: h
            }));
          }, []) : u(Ks({
            results: {},
            helper: m,
            indexId: m.state.index,
            includedAttributes: a,
            excludedAttributes: s
          }), {
            results: h
          });
        }
        var R = g();
        return {
          items: R,
          canRefine: R.length > 0,
          refine: function(b) {
            return Bc(m, b);
          },
          createURL: function(b) {
            return p(Uc(m.state, b));
          },
          widgetParams: n
        };
      }
    };
  };
};
function Ks(e) {
  var t = e.results, r = e.helper, n = e.indexId, i = e.includedAttributes, a = e.excludedAttributes, o = (i || []).indexOf("query") !== -1 || (a || []).indexOf("query") === -1, s = i ? function(u) {
    return i.indexOf(u.attribute) !== -1;
  } : function(u) {
    return a.indexOf(u.attribute) === -1;
  }, c = pp(t, r.state, o).map(Bg).filter(s);
  return c.reduce(function(u, l) {
    return [].concat(Fg(u.filter(function(f) {
      return f.attribute !== l.attribute;
    })), [{
      indexName: r.state.index,
      indexId: n,
      attribute: l.attribute,
      label: l.attribute,
      refinements: c.filter(function(f) {
        return f.attribute === l.attribute;
      }).sort(function(f, h) {
        return f.type === "numeric" ? f.value - h.value : 0;
      }),
      refine: function(h) {
        return Bc(r, h);
      }
    }]);
  }, []);
}
function Uc(e, t) {
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
      return process.env.NODE_ENV === "development" && ge(!1, 'The refinement type "'.concat(t.type, '" does not exist and cannot be cleared from the current refinements.')), e;
  }
}
function Bc(e, t) {
  e.setState(Uc(e.state, t)).search();
}
function Ug(e) {
  switch (e) {
    case ">=":
      return "≥";
    case "<=":
      return "≤";
    default:
      return e;
  }
}
function Bg(e) {
  var t = qg(e), r = e.operator ? "".concat(Ug(e.operator), " ").concat(e.name) : e.name, n = {
    attribute: e.attribute,
    type: e.type,
    value: t,
    label: r
  };
  return e.operator !== void 0 && (n.operator = e.operator), e.count !== void 0 && (n.count = e.count), e.exhaustive !== void 0 && (n.exhaustive = e.exhaustive), n;
}
function qg(e) {
  return e.type === "numeric" ? Number(e.name) : "escapedValue" in e ? e.escapedValue : e.name;
}
const Vg = Wg;
function zg(e, t) {
  return Gt(Vg, e, t);
}
function Yr(e) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
var Qg = ["page"], Yg = ["clickAnalytics", "userToken"];
function Gs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gs(Object(r), !0).forEach(function(n) {
      qc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qc(e, t, r) {
  return t = Kg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kg(e) {
  var t = Gg(e, "string");
  return Yr(t) === "symbol" ? t : String(t);
}
function Gg(e, t) {
  if (Yr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xs(e) {
  return ey(e) || Jg(e) || Zg(e) || Xg();
}
function Xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zg(e, t) {
  if (e) {
    if (typeof e == "string")
      return ca(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ca(e, t);
  }
}
function Jg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ey(e) {
  if (Array.isArray(e))
    return ca(e);
}
function ca(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vc(e, t) {
  if (e == null)
    return {};
  var r = ty(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ty(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ry = jt({
  name: "infinite-hits",
  connector: !0
});
function Zs(e) {
  var t = e || {};
  t.page;
  var r = Vc(t, Qg);
  return r;
}
function Tn(e) {
  var t = e || {};
  t.clickAnalytics, t.userToken;
  var r = Vc(t, Yg);
  return r;
}
function ny() {
  var e = null, t = null;
  return {
    read: function(n) {
      var i = n.state;
      return no(t, Zs(i)) ? e : null;
    },
    write: function(n) {
      var i = n.state, a = n.hits;
      t = Zs(i), e = a;
    }
  };
}
function iy(e) {
  return Object.keys(e).map(Number).sort(function(t, r) {
    return t - r;
  }).reduce(function(t, r) {
    return t.concat(e[r]);
  }, []);
}
var ay = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return fr(t, ry()), function(n) {
    var i = n || {}, a = i.escapeHTML, o = a === void 0 ? !0 : a, s = i.transformItems, c = s === void 0 ? function(b) {
      return b;
    } : s, u = i.cache, l = u === void 0 ? ny() : u, f, h, d, p, m = function(S, v) {
      var E = S.page, j = E === void 0 ? 0 : E, D = Object.keys(v).map(Number);
      return D.length === 0 ? j : Math.min.apply(Math, [j].concat(Xs(D)));
    }, g = function(S, v) {
      var E = S.page, j = E === void 0 ? 0 : E, D = Object.keys(v).map(Number);
      return D.length === 0 ? j : Math.max.apply(Math, [j].concat(Xs(D)));
    }, R = function(S) {
      return function() {
        S.overrideStateWithoutTriggeringChangeEvent(st(st({}, S.state), {}, {
          page: m(S.state, l.read({
            state: Tn(S.state)
          }) || {}) - 1
        })).searchWithoutTriggeringOnStateChange();
      };
    }, y = function(S) {
      return function() {
        S.setPage(g(S.state, l.read({
          state: Tn(S.state)
        }) || {}) + 1).search();
      };
    };
    return {
      $$type: "ais.infiniteHits",
      init: function(S) {
        t(st(st({}, this.getWidgetRenderState(S)), {}, {
          instantSearchInstance: S.instantSearchInstance
        }), !0);
      },
      render: function(S) {
        var v = S.instantSearchInstance, E = this.getWidgetRenderState(S);
        t(st(st({}, E), {}, {
          instantSearchInstance: v
        }), !1), d("view:internal", E.currentPageHits);
      },
      getRenderState: function(S, v) {
        return st(st({}, S), {}, {
          infiniteHits: this.getWidgetRenderState(v)
        });
      },
      getWidgetRenderState: function(S) {
        var v = S.results, E = S.helper, j = S.parent, D = S.state, w = S.instantSearchInstance, _, W = [], Z = j.getPreviousState() || D, F = l.read({
          state: Tn(Z)
        }) || {};
        if (!v)
          f = R(E), h = y(E), d = ap({
            instantSearchInstance: w,
            index: E.getIndex(),
            widgetType: this.$$type
          }), p = op({
            index: E.getIndex(),
            widgetType: this.$$type,
            instantSearchInstance: w
          }), _ = Z.page === void 0 || m(Z, F) === 0;
        else {
          var Y, re, oe, J = Z.page, z = J === void 0 ? 0 : J;
          o && v.hits.length > 0 && (v.hits = qh(v.hits));
          var ae = yp(v.hits, v.page, v.hitsPerPage), C = Op(ae, v.queryID), L = c(C, {
            results: v
          }), I = !1;
          bc(w.mainIndex, function(P) {
            !I && P.getWidgets().some(function(Q) {
              var T = Q.$$type;
              return T === "ais.dynamicWidgets";
            }) && (I = !0);
          });
          var $ = !((Y = v.disjunctiveFacets) !== null && Y !== void 0 && Y.length) && !((re = v.facets) !== null && re !== void 0 && re.length) && !((oe = v.hierarchicalFacets) !== null && oe !== void 0 && oe.length);
          F[z] === void 0 && !v.__isArtificial && w.status === "idle" && !(I && $) && (F[z] = L, l.write({
            state: Tn(Z),
            hits: F
          })), W = L, _ = m(Z, F) === 0;
        }
        var N = iy(F), B = v ? v.nbPages <= g(Z, F) + 1 : !0;
        return {
          hits: N,
          currentPageHits: W,
          sendEvent: d,
          bindEvent: p,
          results: v,
          showPrevious: f,
          showMore: h,
          isFirstPage: _,
          isLastPage: B,
          widgetParams: n
        };
      },
      dispose: function(S) {
        var v = S.state;
        r();
        var E = v.setQueryParameter("page", void 0);
        return o ? E.setQueryParameters(Object.keys(or).reduce(function(j, D) {
          return st(st({}, j), {}, qc({}, D, void 0));
        }, {})) : E;
      },
      getWidgetUiState: function(S, v) {
        var E = v.searchParameters, j = E.page || 0;
        return j ? st(st({}, S), {}, {
          // The page in the UI state is incremented by one
          // to expose the user value (not `0`).
          page: j + 1
        }) : S;
      },
      getWidgetSearchParameters: function(S, v) {
        var E = v.uiState, j = S;
        o && (j = S.setQueryParameters(or));
        var D = E.page ? E.page - 1 : 0;
        return j.setQueryParameter("page", D);
      }
    };
  };
};
const oy = ay;
function sy(e, t) {
  return Gt(oy, e, t);
}
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function Js(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Js(Object(r), !0).forEach(function(n) {
      kn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Js(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kn(e, t, r) {
  return t = uy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uy(e) {
  var t = cy(e, "string");
  return Kr(t) === "symbol" ? t : String(t);
}
function cy(e, t) {
  if (Kr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Kr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function er(e, t) {
  return hy(e) || dy(e, t) || fy(e, t) || ly();
}
function ly() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fy(e, t) {
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
function dy(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function hy(e) {
  if (Array.isArray(e))
    return e;
}
var wi = jt({
  name: "range-input",
  connector: !0
}, {
  name: "range-slider",
  connector: !0
}), py = "ais.range";
function tu(e) {
  var t = e.min, r = e.max, n = e.precision, i = Math.pow(10, n);
  return {
    min: t && Math.floor(t * i) / i,
    max: r && Math.ceil(r * i) / i
  };
}
var vy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return fr(t, wi()), function(n) {
    var i = n || {}, a = i.attribute, o = a === void 0 ? "" : a, s = i.min, c = i.max, u = i.precision, l = u === void 0 ? 0 : u;
    if (!o)
      throw new Error(wi("The `attribute` option is required."));
    if (Te(s) && Te(c) && s > c)
      throw new Error(wi("The `max` option can't be lower than `min`."));
    var f = function(b) {
      return Number(Number(b).toFixed(l));
    }, h = {
      from: function(b) {
        return b.toLocaleString();
      },
      to: function(b) {
        return f(b).toLocaleString();
      }
    }, d = function(b, S, v, E) {
      var j = b.state, D = S.min, w = S.max, _ = j.getNumericRefinement(o, ">=") || [], W = er(_, 1), Z = W[0], F = j.getNumericRefinement(o, "<=") || [], Y = er(F, 1), re = Y[0], oe = v === void 0 || v === "", J = E === void 0 || E === "", z = tu({
        min: oe ? void 0 : parseFloat(v),
        max: J ? void 0 : parseFloat(E),
        precision: l
      }), ae = z.min, C = z.max, L;
      !Te(s) && D === ae ? L = void 0 : Te(s) && oe ? L = s : L = ae;
      var I;
      !Te(c) && w === C ? I = void 0 : Te(c) && J ? I = c : I = C;
      var $ = L === void 0, N = Te(D) && D <= L, B = $ || Te(L) && (!Te(D) || N), P = I === void 0, Q = Te(I) && w >= I, T = P || Te(I) && (!Te(w) || Q), ee = Z !== L, K = re !== I;
      return (ee || K) && B && T ? (j = j.removeNumericRefinement(o), Te(L) && (j = j.addNumericRefinement(o, ">=", L)), Te(I) && (j = j.addNumericRefinement(o, "<=", I)), j.resetPage()) : null;
    }, p = function(b) {
      return function() {
        if (arguments.length === 1) {
          b.sendEventToInsights(arguments.length <= 0 ? void 0 : arguments[0]);
          return;
        }
      };
    };
    function m(y) {
      var b;
      Te(s) ? b = s : Te(y.min) ? b = y.min : b = 0;
      var S;
      return Te(c) ? S = c : Te(y.max) ? S = y.max : S = 0, tu({
        min: b,
        max: S,
        precision: l
      });
    }
    function g(y) {
      var b = y.getNumericRefinement(o, ">=") || [], S = er(b, 1), v = S[0], E = y.getNumericRefinement(o, "<=") || [], j = er(E, 1), D = j[0], w = Te(v) ? v : -1 / 0, _ = Te(D) ? D : 1 / 0;
      return [w, _];
    }
    function R(y, b) {
      return function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [void 0, void 0], v = er(S, 2), E = v[0], j = v[1], D = d(y, b, E, j);
        D && y.setState(D).search();
      };
    }
    return {
      $$type: py,
      init: function(b) {
        t(Ge(Ge({}, this.getWidgetRenderState(b)), {}, {
          instantSearchInstance: b.instantSearchInstance
        }), !0);
      },
      render: function(b) {
        t(Ge(Ge({}, this.getWidgetRenderState(b)), {}, {
          instantSearchInstance: b.instantSearchInstance
        }), !1);
      },
      getRenderState: function(b, S) {
        return Ge(Ge({}, b), {}, {
          range: Ge(Ge({}, b.range), {}, kn({}, o, this.getWidgetRenderState(S)))
        });
      },
      getWidgetRenderState: function(b) {
        var S = b.results, v = b.helper, E = b.instantSearchInstance, j = S && S.disjunctiveFacets || [], D = Cr(j, function(F) {
          return F.name === o;
        }), w = D && D.stats || {
          min: void 0,
          max: void 0
        }, _ = m(w), W = g(v), Z;
        return S ? Z = R(v, _) : Z = R(v, {
          min: void 0,
          max: void 0
        }), {
          refine: Z,
          canRefine: _.min !== _.max,
          format: h,
          range: _,
          sendEvent: p(E),
          widgetParams: Ge(Ge({}, n), {}, {
            precision: l
          }),
          start: W
        };
      },
      dispose: function(b) {
        var S = b.state;
        return r(), S.removeDisjunctiveFacet(o).removeNumericRefinement(o);
      },
      getWidgetUiState: function(b, S) {
        var v = S.searchParameters, E = v.getNumericRefinements(o), j = E[">="], D = j === void 0 ? [] : j, w = E["<="], _ = w === void 0 ? [] : w;
        return D.length === 0 && _.length === 0 ? b : Ge(Ge({}, b), {}, {
          range: Ge(Ge({}, b.range), {}, kn({}, o, "".concat(D, ":").concat(_)))
        });
      },
      getWidgetSearchParameters: function(b, S) {
        var v = S.uiState, E = b.addDisjunctiveFacet(o).setQueryParameters({
          numericRefinements: Ge(Ge({}, b.numericRefinements), {}, kn({}, o, {}))
        });
        Te(s) && (E = E.addNumericRefinement(o, ">=", s)), Te(c) && (E = E.addNumericRefinement(o, "<=", c));
        var j = v.range && v.range[o];
        if (!j || j.indexOf(":") === -1)
          return E;
        var D = j.split(":").map(parseFloat), w = er(D, 2), _ = w[0], W = w[1];
        return Te(_) && (!Te(s) || s < _) && (E = E.removeNumericRefinement(o, ">="), E = E.addNumericRefinement(o, ">=", _)), Te(W) && (!Te(c) || W < c) && (E = E.removeNumericRefinement(o, "<="), E = E.addNumericRefinement(o, "<=", W)), E;
      }
    };
  };
};
const my = vy;
function gy(e, t) {
  return Gt(my, e, t);
}
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
var yy = ["name", "escapedValue"], by = ["escapedValue", "value"];
function ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ru(Object(r), !0).forEach(function(n) {
      Er(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Er(e, t, r) {
  return t = wy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wy(e) {
  var t = Sy(e, "string");
  return Gr(t) === "symbol" ? t : String(t);
}
function Sy(e, t) {
  if (Gr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nu(e, t) {
  if (e == null)
    return {};
  var r = Oy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Oy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var An = jt({
  name: "refinement-list",
  connector: !0
}), iu = ["isRefined", "count:desc", "name:asc"], Ry = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return fr(t, An()), function(n) {
    var i = n || {}, a = i.attribute, o = i.operator, s = o === void 0 ? "or" : o, c = i.limit, u = c === void 0 ? 10 : c, l = i.showMore, f = l === void 0 ? !1 : l, h = i.showMoreLimit, d = h === void 0 ? 20 : h, p = i.sortBy, m = p === void 0 ? iu : p, g = i.escapeFacetValues, R = g === void 0 ? !0 : g, y = i.transformItems, b = y === void 0 ? function(J) {
      return J;
    } : y;
    if (!a)
      throw new Error(An("The `attribute` option is required."));
    if (!/^(and|or)$/.test(s))
      throw new Error(An('The `operator` must one of: `"and"`, `"or"` (got "'.concat(s, '").')));
    if (f === !0 && d <= u)
      throw new Error(An("`showMoreLimit` should be greater than `limit`."));
    var S = function(z) {
      var ae = z.name, C = z.escapedValue, L = nu(z, yy);
      return Ae(Ae({}, L), {}, {
        value: C,
        label: ae,
        highlighted: ae
      });
    }, v, E = [], j = !0, D, w, _ = !1, W = function() {
    };
    function Z() {
      W();
    }
    function F(J, z) {
      return function() {
        _ = !_, z.render(J);
      };
    }
    function Y() {
      return _ ? d : u;
    }
    var re = function() {
      return function() {
      };
    }, oe = function(z, ae) {
      return function(C) {
        return function(L) {
          var I = C.instantSearchInstance, $ = C.results;
          if (L === "" && E)
            t(Ae(Ae({}, ae.getWidgetRenderState(Ae(Ae({}, C), {}, {
              results: v
            }))), {}, {
              instantSearchInstance: I
            }), !1);
          else {
            var N = {
              highlightPreTag: R ? or.highlightPreTag : Ze.highlightPreTag,
              highlightPostTag: R ? or.highlightPostTag : Ze.highlightPostTag
            };
            z.searchForFacetValues(
              a,
              L,
              // We cap the `maxFacetHits` value to 100 because the Algolia API
              // doesn't support a greater number.
              // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
              Math.min(Y(), 100),
              N
            ).then(function(B) {
              var P = R ? Vh(B.facetHits) : B.facetHits, Q = b(P.map(function(T) {
                var ee = T.escapedValue, K = T.value, H = nu(T, by);
                return Ae(Ae({}, H), {}, {
                  value: ee,
                  label: K
                });
              }), {
                results: $
              });
              t(Ae(Ae({}, ae.getWidgetRenderState(Ae(Ae({}, C), {}, {
                results: v
              }))), {}, {
                items: Q,
                canToggleShowMore: !1,
                canRefine: !0,
                isFromSearch: !0,
                instantSearchInstance: I
              }), !1);
            });
          }
        };
      };
    };
    return {
      $$type: "ais.refinementList",
      init: function(z) {
        t(Ae(Ae({}, this.getWidgetRenderState(z)), {}, {
          instantSearchInstance: z.instantSearchInstance
        }), !0);
      },
      render: function(z) {
        t(Ae(Ae({}, this.getWidgetRenderState(z)), {}, {
          instantSearchInstance: z.instantSearchInstance
        }), !1);
      },
      getRenderState: function(z, ae) {
        return Ae(Ae({}, z), {}, {
          refinementList: Ae(Ae({}, z.refinementList), {}, Er({}, a, this.getWidgetRenderState(ae)))
        });
      },
      getWidgetRenderState: function(z) {
        var ae = z.results, C = z.state, L = z.createURL, I = z.instantSearchInstance, $ = z.helper, N = [], B = [];
        if ((!w || !D || !re) && (w = Zh({
          instantSearchInstance: I,
          helper: $,
          attribute: a,
          widgetType: this.$$type
        }), D = function(pe) {
          w("click:internal", pe), $.toggleFacetRefinement(a, pe).search();
        }, re = oe($, this)), ae) {
          var P = ae.getFacetValues(a, {
            sortBy: m,
            facetOrdering: m === iu
          });
          B = P && Array.isArray(P) ? P : [], N = b(B.slice(0, Y()).map(S), {
            results: ae
          });
          var Q = C.maxValuesPerFacet, T = Y();
          j = Q > T ? B.length <= T : B.length < T, v = ae, E = N, z.results && (W = F(z, this));
        }
        var ee = re && re(z), K = _ && E.length > u, H = f && !j, x = K || H;
        return {
          createURL: function(pe) {
            return L(C.resetPage().toggleFacetRefinement(a, pe));
          },
          items: N,
          refine: D,
          searchForItems: ee,
          isFromSearch: !1,
          canRefine: N.length > 0,
          widgetParams: n,
          isShowingMore: _,
          canToggleShowMore: x,
          toggleShowMore: Z,
          sendEvent: w,
          hasExhaustiveItems: j
        };
      },
      dispose: function(z) {
        var ae = z.state;
        r();
        var C = ae.setQueryParameter("maxValuesPerFacet", void 0);
        return s === "and" ? C.removeFacet(a) : C.removeDisjunctiveFacet(a);
      },
      getWidgetUiState: function(z, ae) {
        var C = ae.searchParameters, L = s === "or" ? C.getDisjunctiveRefinements(a) : C.getConjunctiveRefinements(a);
        return L.length ? Ae(Ae({}, z), {}, {
          refinementList: Ae(Ae({}, z.refinementList), {}, Er({}, a, L))
        }) : z;
      },
      getWidgetSearchParameters: function(z, ae) {
        var C = ae.uiState, L = s === "or";
        if (z.isHierarchicalFacet(a))
          return process.env.NODE_ENV === "development" && ge(!1, 'RefinementList: Attribute "'.concat(a, `" is already used by another widget applying hierarchical faceting.
As this is not supported, please make sure to remove this other widget or this RefinementList widget will not work at all.`)), z;
        if (L && z.isConjunctiveFacet(a) || !L && z.isDisjunctiveFacet(a))
          return process.env.NODE_ENV === "development" && ge(!1, 'RefinementList: Attribute "'.concat(a, `" is used by another refinement list with a different operator.
As this is not supported, please make sure to only use this attribute with one of the two operators.`)), z;
        var I = C.refinementList && C.refinementList[a], $ = z.clearRefinements(a), N = L ? $.addDisjunctiveFacet(a) : $.addFacet(a), B = N.maxValuesPerFacet || 0, P = Math.max(B, f ? d : u), Q = N.setQueryParameter("maxValuesPerFacet", P);
        if (!I) {
          var T = L ? "disjunctiveFacetsRefinements" : "facetsRefinements";
          return Q.setQueryParameters(Er({}, T, Ae(Ae({}, Q[T]), {}, Er({}, a, []))));
        }
        return I.reduce(function(ee, K) {
          return L ? ee.addDisjunctiveFacetRefinement(a, K) : ee.addFacetRefinement(a, K);
        }, Q);
      }
    };
  };
};
const Py = Ry;
function Ey(e, t) {
  return Gt(Py, e, t);
}
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function au(e, t) {
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
    t % 2 ? au(Object(r), !0).forEach(function(n) {
      xy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : au(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xy(e, t, r) {
  return t = _y(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _y(e) {
  var t = jy(e, "string");
  return Xr(t) === "symbol" ? t : String(t);
}
function jy(e, t) {
  if (Xr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ty = jt({
  name: "search-box",
  connector: !0
}), Ay = function(t, r) {
  return r(t);
}, $y = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  return fr(t, Ty()), function(n) {
    var i = n || {}, a = i.queryHook, o = a === void 0 ? Ay : a, s, c;
    return {
      $$type: "ais.searchBox",
      init: function(l) {
        var f = l.instantSearchInstance;
        t(It(It({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: f
        }), !0);
      },
      render: function(l) {
        var f = l.instantSearchInstance;
        t(It(It({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: f
        }), !1);
      },
      dispose: function(l) {
        var f = l.state;
        return r(), f.setQueryParameter("query", void 0);
      },
      getRenderState: function(l, f) {
        return It(It({}, l), {}, {
          searchBox: this.getWidgetRenderState(f)
        });
      },
      getWidgetRenderState: function(l) {
        var f = l.helper, h = l.searchMetadata, d = l.state;
        return s || (s = function(m) {
          o(m, function(g) {
            return f.setQuery(g).search();
          });
        }, c = function() {
          f.setQuery("").search();
        }), {
          query: d.query || "",
          refine: s,
          clear: c,
          widgetParams: n,
          isSearchStalled: h.isSearchStalled
        };
      },
      getWidgetUiState: function(l, f) {
        var h = f.searchParameters, d = h.query || "";
        return d === "" || l && l.query === d ? l : It(It({}, l), {}, {
          query: d
        });
      },
      getWidgetSearchParameters: function(l, f) {
        var h = f.uiState;
        return l.setQueryParameter("query", h.query || "");
      }
    };
  };
};
const Cy = $y;
function Fy(e, t) {
  return Gt(Cy, e, t);
}
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
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
      Iy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iy(e, t, r) {
  return t = Ny(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ny(e) {
  var t = ky(e, "string");
  return Zr(t) === "symbol" ? t : String(t);
}
function ky(e, t) {
  if (Zr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var su = jt({
  name: "sort-by",
  connector: !0
}), Dy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be;
  fr(t, su());
  var n = {};
  return function(i) {
    var a = i || {}, o = a.items, s = a.transformItems, c = s === void 0 ? function(u) {
      return u;
    } : s;
    if (!Array.isArray(o))
      throw new Error(su("The `items` option expects an array of objects."));
    return {
      $$type: "ais.sortBy",
      init: function(l) {
        var f = l.instantSearchInstance, h = this.getWidgetRenderState(l), d = h.currentRefinement, p = Cr(o, function(m) {
          return m.value === d;
        });
        process.env.NODE_ENV === "development" && ge(p !== void 0, 'The index named "'.concat(d, '" is not listed in the `items` of `sortBy`.')), t(Nt(Nt({}, h), {}, {
          instantSearchInstance: f
        }), !0);
      },
      render: function(l) {
        var f = l.instantSearchInstance;
        t(Nt(Nt({}, this.getWidgetRenderState(l)), {}, {
          instantSearchInstance: f
        }), !1);
      },
      dispose: function(l) {
        var f = l.state;
        return r(), n.initialIndex ? f.setIndex(n.initialIndex) : f;
      },
      getRenderState: function(l, f) {
        return Nt(Nt({}, l), {}, {
          sortBy: this.getWidgetRenderState(f)
        });
      },
      getWidgetRenderState: function(l) {
        var f = l.results, h = l.helper, d = l.state, p = l.parent;
        !n.initialIndex && p && (n.initialIndex = p.getIndexName()), n.setIndex || (n.setIndex = function(g) {
          h.setIndex(g).search();
        });
        var m = f ? f.nbHits === 0 : !0;
        return {
          currentRefinement: d.index,
          options: c(o, {
            results: f
          }),
          refine: n.setIndex,
          hasNoResults: m,
          canRefine: !m && o.length > 0,
          widgetParams: i
        };
      },
      getWidgetUiState: function(l, f) {
        var h = f.searchParameters, d = h.index;
        return Nt(Nt({}, l), {}, {
          sortBy: d !== n.initialIndex ? d : void 0
        });
      },
      getWidgetSearchParameters: function(l, f) {
        var h = f.uiState;
        return l.setQueryParameter("index", h.sortBy || n.initialIndex || l.index);
      }
    };
  };
};
const My = Dy;
function Ly(e, t) {
  return Gt(My, e, t);
}
function Oe() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(Boolean).join(" ");
}
var Hy = ["isShowingMore", "translations"];
function Wy(e, t) {
  if (e == null)
    return {};
  var r = Uy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Uy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function By(e) {
  var t = e.isShowingMore, r = e.translations, n = Wy(e, Hy);
  return /* @__PURE__ */ U.createElement("button", n, r.showMoreButtonText({
    isShowingMore: t
  }));
}
var qy = ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"];
function la() {
  return la = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, la.apply(this, arguments);
}
function Vy(e, t) {
  if (e == null)
    return {};
  var r = zy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Qy(e) {
  var t = e.classNames, r = e.children, n = e.highlightedTagName, i = e.isHighlighted, a = e.nonHighlightedTagName, o = i ? n : a;
  return /* @__PURE__ */ U.createElement(o, {
    className: i ? t.highlighted : t.nonHighlighted
  }, r);
}
function Yy(e) {
  var t = e.parts, r = e.highlightedTagName, n = r === void 0 ? "mark" : r, i = e.nonHighlightedTagName, a = i === void 0 ? "span" : i, o = e.separator, s = o === void 0 ? ", " : o, c = e.className, u = e.classNames, l = Vy(e, qy);
  return /* @__PURE__ */ U.createElement("span", la({}, l, {
    className: Oe(u.root, c)
  }), t.map(function(f, h) {
    var d = h === t.length - 1;
    return /* @__PURE__ */ U.createElement(dl, {
      key: h
    }, f.map(function(p, m) {
      return /* @__PURE__ */ U.createElement(Qy, {
        key: m,
        classNames: u,
        highlightedTagName: n,
        nonHighlightedTagName: a,
        isHighlighted: p.isHighlighted
      }, p.value);
    }), !d && /* @__PURE__ */ U.createElement("span", {
      className: u.separator
    }, s));
  }));
}
var Ky = ["classNames"];
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fa.apply(this, arguments);
}
function Gy(e, t) {
  if (e == null)
    return {};
  var r = Xy(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Xy(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zc(e) {
  var t = e.classNames, r = t === void 0 ? {} : t, n = Gy(e, Ky);
  return /* @__PURE__ */ U.createElement(Yy, fa({
    classNames: {
      root: Oe("ais-Highlight", r.root),
      highlighted: Oe("ais-Highlight-highlighted", r.highlighted),
      nonHighlighted: Oe("ais-Highlight-nonHighlighted", r.nonHighlighted),
      separator: Oe("ais-Highlight-separator", r.separator)
    }
  }, n));
}
var Zy = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function da() {
  return da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, da.apply(this, arguments);
}
function Jy(e, t) {
  if (e == null)
    return {};
  var r = eb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function an(e) {
  var t = e.hit, r = e.attribute, n = e.highlightedTagName, i = e.nonHighlightedTagName, a = e.separator, o = Jy(e, Zy), s = nn(t._highlightResult, r) || [], c = Array.isArray(s) ? s : [s], u = c.map(function(l) {
    return Xn(ro(l.value || ""));
  });
  return /* @__PURE__ */ U.createElement(zc, da({}, o, {
    parts: u,
    highlightedTagName: n,
    nonHighlightedTagName: i,
    separator: a
  }));
}
var tb = ["canRefine", "items", "onRefine", "query", "searchBox", "noResults", "showMore", "canToggleShowMore", "onToggleShowMore", "isShowingMore", "className", "classNames", "translations"];
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ha.apply(this, arguments);
}
function rb(e, t) {
  if (e == null)
    return {};
  var r = nb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ib(e) {
  var t = e.canRefine, r = e.items, n = e.onRefine, i = e.query, a = e.searchBox, o = e.noResults, s = e.showMore, c = e.canToggleShowMore, u = e.onToggleShowMore, l = e.isShowingMore, f = e.className, h = e.classNames, d = h === void 0 ? {} : h, p = e.translations, m = rb(e, tb);
  return /* @__PURE__ */ U.createElement("div", ha({}, m, {
    className: Oe("ais-RefinementList", d.root, !t && Oe("ais-RefinementList--noRefinement", d.noRefinementRoot), f)
  }), a && /* @__PURE__ */ U.createElement("div", {
    className: Oe("ais-RefinementList-searchBox", d.searchBox)
  }, a), o ? /* @__PURE__ */ U.createElement("div", {
    className: Oe("ais-RefinementList-noResults", d.noResults)
  }, o) : /* @__PURE__ */ U.createElement("ul", {
    className: Oe("ais-RefinementList-list", d.list)
  }, r.map(function(g) {
    return /* @__PURE__ */ U.createElement("li", {
      key: g.value,
      className: Oe("ais-RefinementList-item", d.item, g.isRefined && Oe("ais-RefinementList-item--selected", d.selectedItem))
    }, /* @__PURE__ */ U.createElement("label", {
      className: Oe("ais-RefinementList-label", d.label)
    }, /* @__PURE__ */ U.createElement("input", {
      checked: g.isRefined,
      className: Oe("ais-RefinementList-checkbox", d.checkbox),
      type: "checkbox",
      value: g.value,
      onChange: function() {
        n(g);
      }
    }), /* @__PURE__ */ U.createElement("span", {
      className: Oe("ais-RefinementList-labelText", d.labelText)
    }, i.length > 0 ? /* @__PURE__ */ U.createElement(zc, {
      parts: [Xn(ro(g.highlighted || ""))]
    }) : g.label), /* @__PURE__ */ U.createElement("span", {
      className: Oe("ais-RefinementList-count", d.count)
    }, g.count)));
  })), s && /* @__PURE__ */ U.createElement(By, {
    className: Oe("ais-RefinementList-showMore", d.showMore, !c && Oe("ais-RefinementList-showMore--disabled", d.disabledShowMore)),
    disabled: !c,
    onClick: u,
    isShowingMore: l,
    translations: p
  }));
}
var ab = ["formRef", "inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value", "autoFocus", "resetIconComponent", "submitIconComponent", "loadingIconComponent", "classNames", "translations"];
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pa.apply(this, arguments);
}
function ob(e, t) {
  if (e == null)
    return {};
  var r = sb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ub = /* @__PURE__ */ U.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
function cb(e) {
  var t = e.classNames;
  return /* @__PURE__ */ U.createElement("svg", {
    className: Oe("ais-SearchBox-submitIcon", t.submitIcon),
    width: "10",
    height: "10",
    viewBox: "0 0 40 40",
    "aria-hidden": "true"
  }, ub);
}
var lb = /* @__PURE__ */ U.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
function fb(e) {
  var t = e.classNames;
  return /* @__PURE__ */ U.createElement("svg", {
    className: Oe("ais-SearchBox-resetIcon", t.resetIcon),
    viewBox: "0 0 20 20",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, lb);
}
var db = /* @__PURE__ */ U.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ U.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ U.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ U.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ U.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
}))));
function hb(e) {
  var t = e.classNames;
  return /* @__PURE__ */ U.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 38 38",
    stroke: "#444",
    className: Oe("ais-SearchBox-loadingIcon", t.loadingIcon),
    "aria-hidden": "true"
  }, db);
}
function Qc(e) {
  var t = e.formRef, r = e.inputRef, n = e.isSearchStalled, i = e.onChange, a = e.onReset, o = e.onSubmit, s = e.placeholder, c = e.value, u = e.autoFocus, l = e.resetIconComponent, f = l === void 0 ? fb : l, h = e.submitIconComponent, d = h === void 0 ? cb : h, p = e.loadingIconComponent, m = p === void 0 ? hb : p, g = e.classNames, R = g === void 0 ? {} : g, y = e.translations, b = ob(e, ab);
  function S(E) {
    E.preventDefault(), E.stopPropagation(), o && o(E), r.current && r.current.blur();
  }
  function v(E) {
    E.preventDefault(), E.stopPropagation(), a(E), r.current && r.current.focus();
  }
  return /* @__PURE__ */ U.createElement("div", pa({}, b, {
    className: Oe("ais-SearchBox", R.root, b.className)
  }), /* @__PURE__ */ U.createElement("form", {
    ref: t,
    action: "",
    className: Oe("ais-SearchBox-form", R.form),
    noValidate: !0,
    onSubmit: S,
    onReset: v
  }, /* @__PURE__ */ U.createElement("input", {
    ref: r,
    className: Oe("ais-SearchBox-input", R.input),
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder: s,
    spellCheck: !1,
    maxLength: 512,
    type: "search",
    value: c,
    onChange: i,
    autoFocus: u
  }), /* @__PURE__ */ U.createElement("button", {
    className: Oe("ais-SearchBox-submit", R.submit),
    type: "submit",
    title: y.submitButtonTitle
  }, /* @__PURE__ */ U.createElement(d, {
    classNames: R
  })), /* @__PURE__ */ U.createElement("button", {
    className: Oe("ais-SearchBox-reset", R.reset),
    type: "reset",
    title: y.resetButtonTitle,
    hidden: c.length === 0 || n
  }, /* @__PURE__ */ U.createElement(f, {
    classNames: R
  })), /* @__PURE__ */ U.createElement("span", {
    className: Oe("ais-SearchBox-loadingIndicator", R.loadingIndicator),
    hidden: !n
  }, /* @__PURE__ */ U.createElement(m, {
    classNames: R
  }))));
}
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
var pb = ["searchable", "searchablePlaceholder", "attribute", "operator", "limit", "showMore", "showMoreLimit", "sortBy", "escapeFacetValues", "transformItems", "translations"];
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, va.apply(this, arguments);
}
function uu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uu(Object(r), !0).forEach(function(n) {
      mb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mb(e, t, r) {
  return t = gb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gb(e) {
  var t = yb(e, "string");
  return Jr(t) === "symbol" ? t : String(t);
}
function yb(e, t) {
  if (Jr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bb(e, t) {
  return Rb(e) || Ob(e, t) || Sb(e, t) || wb();
}
function wb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sb(e, t) {
  if (e) {
    if (typeof e == "string")
      return cu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cu(e, t);
  }
}
function cu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ob(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function Rb(e) {
  if (Array.isArray(e))
    return e;
}
function Pb(e, t) {
  if (e == null)
    return {};
  var r = Eb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Eb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function We(e) {
  var t = e.searchable, r = e.searchablePlaceholder, n = e.attribute, i = e.operator, a = e.limit, o = e.showMore, s = e.showMoreLimit, c = e.sortBy, u = e.escapeFacetValues, l = e.transformItems, f = e.translations, h = Pb(e, pb), d = Ey({
    attribute: n,
    operator: i,
    limit: a,
    showMore: o,
    showMoreLimit: s,
    sortBy: c,
    escapeFacetValues: u,
    transformItems: l
  }, {
    $$widgetType: "ais.refinementList"
  }), p = d.canRefine, m = d.canToggleShowMore, g = d.isFromSearch, R = d.isShowingMore, y = d.items, b = d.refine, S = d.searchForItems, v = d.toggleShowMore, E = Et(""), j = bb(E, 2), D = j[0], w = j[1], _ = ut(null);
  function W(z) {
    w(z), S(z);
  }
  function Z(z) {
    b(z.value), W("");
  }
  function F(z) {
    W(z.currentTarget.value);
  }
  function Y() {
    W("");
  }
  function re() {
    y.length > 0 && (b(y[0].value), W(""));
  }
  var oe = vb({
    resetButtonTitle: "Clear the search query",
    submitButtonTitle: "Submit the search query",
    noResultsText: "No results.",
    showMoreButtonText: function(ae) {
      return ae.isShowingMore ? "Show less" : "Show more";
    }
  }, f), J = {
    items: y,
    canRefine: p,
    onRefine: Z,
    query: D,
    searchBox: t && /* @__PURE__ */ U.createElement(Qc, {
      inputRef: _,
      placeholder: r,
      isSearchStalled: !1,
      value: D,
      onChange: F,
      onReset: Y,
      onSubmit: re,
      translations: {
        submitButtonTitle: oe.submitButtonTitle,
        resetButtonTitle: oe.resetButtonTitle
      }
    }),
    noResults: t && g && y.length === 0 && oe.noResultsText,
    canToggleShowMore: m,
    onToggleShowMore: v,
    isShowingMore: R,
    translations: {
      showMoreButtonText: oe.showMoreButtonText
    }
  };
  return /* @__PURE__ */ U.createElement(ib, va({}, h, J, {
    showMore: o
  }));
}
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
var xb = ["queryHook", "searchAsYouType", "translations"];
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ma.apply(this, arguments);
}
function lu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lu(Object(r), !0).forEach(function(n) {
      jb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jb(e, t, r) {
  return t = Tb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tb(e) {
  var t = Ab(e, "string");
  return en(t) === "symbol" ? t : String(t);
}
function Ab(e, t) {
  if (en(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (en(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $b(e, t) {
  return Nb(e) || Ib(e, t) || Fb(e, t) || Cb();
}
function Cb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fb(e, t) {
  if (e) {
    if (typeof e == "string")
      return fu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fu(e, t);
  }
}
function fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ib(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function Nb(e) {
  if (Array.isArray(e))
    return e;
}
function kb(e, t) {
  if (e == null)
    return {};
  var r = Db(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Db(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Mb(e) {
  var t = e.queryHook, r = e.searchAsYouType, n = r === void 0 ? !0 : r, i = e.translations, a = kb(e, xb), o = Fy({
    queryHook: t
  }, {
    $$widgetType: "ais.searchBox"
  }), s = o.query, c = o.refine, u = o.isSearchStalled, l = Et(s), f = $b(l, 2), h = f[0], d = f[1], p = ut(null);
  function m(S) {
    d(S), n && c(S);
  }
  function g() {
    m(""), n || c("");
  }
  function R(S) {
    m(S.currentTarget.value);
  }
  function y(S) {
    n || c(h), a.onSubmit && a.onSubmit(S);
  }
  s !== h && document.activeElement !== p.current && d(s);
  var b = {
    inputRef: p,
    isSearchStalled: u,
    onChange: R,
    onReset: g,
    onSubmit: y,
    value: h,
    translations: _b({
      submitButtonTitle: "Submit the search query",
      resetButtonTitle: "Clear the search query"
    }, i)
  };
  return /* @__PURE__ */ U.createElement(Qc, ma({}, a, b));
}
var Lb = ["items", "value", "onChange", "classNames"];
function ga() {
  return ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ga.apply(this, arguments);
}
function Hb(e, t) {
  if (e == null)
    return {};
  var r = Wb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Wb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ub(e) {
  var t = e.items, r = e.value, n = e.onChange, i = n === void 0 ? function() {
  } : n, a = e.classNames, o = a === void 0 ? {} : a, s = Hb(e, Lb);
  return /* @__PURE__ */ U.createElement("div", ga({}, s, {
    className: Oe("ais-SortBy", o.root, s.className)
  }), /* @__PURE__ */ U.createElement("select", {
    className: Oe("ais-SortBy-select", o.select),
    onChange: function(u) {
      return i(u.target.value);
    },
    value: r
  }, t.map(function(c) {
    return /* @__PURE__ */ U.createElement("option", {
      className: Oe("ais-SortBy-option", o.option),
      key: c.value,
      value: c.value
    }, c.label);
  })));
}
var Bb = ["items", "transformItems"];
function ya() {
  return ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ya.apply(this, arguments);
}
function qb(e, t) {
  if (e == null)
    return {};
  var r = Vb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Vb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zb(e) {
  var t = e.items, r = e.transformItems, n = qb(e, Bb), i = Ly({
    items: t,
    transformItems: r
  }, {
    $$widgetType: "ais.sortBy"
  }), a = i.currentRefinement, o = i.options, s = i.refine, c = {
    items: o,
    value: a,
    onChange: s
  };
  return /* @__PURE__ */ U.createElement(Ub, ya({}, n, c));
}
const Qb = (e) => Array.isArray(e) ? /* @__PURE__ */ A.jsx("span", { children: e.join(", ") }) : /* @__PURE__ */ A.jsx("span", { children: e }), Yb = ({ hit: e, hitConfig: t, onHitClick: r }) => /* @__PURE__ */ A.jsx(
  "a",
  {
    className: "hitLink",
    onClick: r ? () => r(e) : () => null,
    children: /* @__PURE__ */ A.jsxs("li", { className: "hit", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "left", children: [
        t.headlineAttribute ? /* @__PURE__ */ A.jsx("h2", { className: "headline", children: t.renderHeadlineAttribute ? t.renderHeadlineAttribute(e) : e[t.headlineAttribute] }) : null,
        t.leftColumnItems.map((n) => {
          if (n.renderDisplay || e[n.attribute])
            return /* @__PURE__ */ A.jsxs(
              "p",
              {
                className: "hitData",
                children: [
                  /* @__PURE__ */ A.jsx("span", { title: n.caption, children: n.icon }),
                  /* @__PURE__ */ A.jsx("strong", { children: n.renderDisplay ? n.renderDisplay(e) : Qb(e[n.attribute]) })
                ]
              },
              n.attribute
            );
        })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "right", children: /* @__PURE__ */ A.jsxs("div", { className: "summary", children: [
        t.rightPanel.label ? /* @__PURE__ */ A.jsx("h3", { children: t.rightPanel.label }) : null,
        /* @__PURE__ */ A.jsx("p", { children: /* @__PURE__ */ A.jsx(
          an,
          {
            attribute: t.rightPanel.attribute,
            hit: e,
            highlightedTagName: "mark"
          }
        ) })
      ] }) })
    ] })
  }
), G = {
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
  origDate: {
    en: "Original Date",
    fr: "???"
  },
  origPlace: {
    en: "Original Place",
    fr: "???"
  },
  works: {
    en: "Works",
    fr: "???"
  },
  formerShelfmarks: {
    en: "Former Shelfmarks",
    fr: "???"
  },
  shelfmarks: {
    en: "Shelfmarks",
    fr: "???"
  },
  shelfmarkSections: {
    en: "Shelfmark Sections",
    fr: "???"
  },
  provenance: {
    en: "Provenance",
    fr: "???"
  },
  sections: {
    en: "Section",
    fr: "???"
  },
  title: {
    en: "Title",
    fr: "Titre"
  },
  genericTitle: {
    en: "Generic Title",
    fr: "???"
  },
  publicationDate: {
    en: "Publication Date",
    fr: "???"
  },
  publicationLocation: {
    en: "Publication Location",
    fr: "???"
  },
  parentEdition: {
    en: "Parent Edition",
    fr: "???"
  },
  status: {
    en: "Status",
    fr: "???"
  },
  line: {
    en: "Line",
    fr: "???"
  },
  author: {
    en: "Author",
    fr: "???"
  },
  format: {
    en: "Format",
    fr: "???"
  },
  publisher: {
    en: "Publisher",
    fr: "???"
  },
  type: {
    en: "Type",
    fr: "???"
  },
  draft: {
    en: "Draft",
    fr: "???"
  },
  published: {
    en: "Published",
    fr: "???"
  },
  archived: {
    en: "Archived",
    fr: "???"
  },
  print: {
    en: "Print",
    fr: "???"
  },
  manuscript: {
    en: "Manuscript",
    fr: "???"
  }
}, Si = (e, t) => e.map((r) => ({
  ...r,
  label: G[r.value.toLocaleLowerCase()] ? G[r.value.toLocaleLowerCase()][t] : r.label
})), Kb = (e) => {
  const {
    hits: t,
    isLastPage: r,
    showMore: n
  } = sy(e), { locale: i } = e, [a, o] = Et(!0);
  if (Pt(() => {
    a && t.length > 0 && o(!1);
  }, [t, a]), a)
    return /* @__PURE__ */ A.jsx("p", { className: "center", children: G.loading[i] });
  if (t.length === 0)
    return /* @__PURE__ */ A.jsx("p", { className: "center", children: G.noResults[i] });
  const s = () => r ? /* @__PURE__ */ A.jsx(
    "button",
    {
      disabled: !0,
      className: "ais-InfiniteHits-loadMore",
      children: G.showMore[i]
    }
  ) : /* @__PURE__ */ A.jsx(
    "button",
    {
      onClick: () => n(),
      className: "ais-InfiniteHits-loadMore",
      children: G.showMore[i]
    }
  );
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("ul", { className: "hitList", children: t.map((c) => /* @__PURE__ */ A.jsx(
      Yb,
      {
        locale: i,
        hit: c,
        hitConfig: e.hitConfig,
        onHitClick: e.onHitClick
      },
      c.id
    )) }),
    s()
  ] });
};
var ba = { exports: {} }, $n = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du;
function Gb() {
  if (du)
    return we;
  du = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function b(v) {
    if (typeof v == "object" && v !== null) {
      var E = v.$$typeof;
      switch (E) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case n:
            case a:
            case i:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case l:
                case p:
                case d:
                case o:
                  return v;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function S(v) {
    return b(v) === u;
  }
  return we.AsyncMode = c, we.ConcurrentMode = u, we.ContextConsumer = s, we.ContextProvider = o, we.Element = t, we.ForwardRef = l, we.Fragment = n, we.Lazy = p, we.Memo = d, we.Portal = r, we.Profiler = a, we.StrictMode = i, we.Suspense = f, we.isAsyncMode = function(v) {
    return S(v) || b(v) === c;
  }, we.isConcurrentMode = S, we.isContextConsumer = function(v) {
    return b(v) === s;
  }, we.isContextProvider = function(v) {
    return b(v) === o;
  }, we.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, we.isForwardRef = function(v) {
    return b(v) === l;
  }, we.isFragment = function(v) {
    return b(v) === n;
  }, we.isLazy = function(v) {
    return b(v) === p;
  }, we.isMemo = function(v) {
    return b(v) === d;
  }, we.isPortal = function(v) {
    return b(v) === r;
  }, we.isProfiler = function(v) {
    return b(v) === a;
  }, we.isStrictMode = function(v) {
    return b(v) === i;
  }, we.isSuspense = function(v) {
    return b(v) === f;
  }, we.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === a || v === i || v === f || v === h || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === o || v.$$typeof === s || v.$$typeof === l || v.$$typeof === g || v.$$typeof === R || v.$$typeof === y || v.$$typeof === m);
  }, we.typeOf = b, we;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hu;
function Xb() {
  return hu || (hu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function b(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === u || x === a || x === i || x === f || x === h || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === d || x.$$typeof === o || x.$$typeof === s || x.$$typeof === l || x.$$typeof === g || x.$$typeof === R || x.$$typeof === y || x.$$typeof === m);
    }
    function S(x) {
      if (typeof x == "object" && x !== null) {
        var fe = x.$$typeof;
        switch (fe) {
          case t:
            var pe = x.type;
            switch (pe) {
              case c:
              case u:
              case n:
              case a:
              case i:
              case f:
                return pe;
              default:
                var ue = pe && pe.$$typeof;
                switch (ue) {
                  case s:
                  case l:
                  case p:
                  case d:
                  case o:
                    return ue;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = c, E = u, j = s, D = o, w = t, _ = l, W = n, Z = p, F = d, Y = r, re = a, oe = i, J = f, z = !1;
    function ae(x) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(x) || S(x) === c;
    }
    function C(x) {
      return S(x) === u;
    }
    function L(x) {
      return S(x) === s;
    }
    function I(x) {
      return S(x) === o;
    }
    function $(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function N(x) {
      return S(x) === l;
    }
    function B(x) {
      return S(x) === n;
    }
    function P(x) {
      return S(x) === p;
    }
    function Q(x) {
      return S(x) === d;
    }
    function T(x) {
      return S(x) === r;
    }
    function ee(x) {
      return S(x) === a;
    }
    function K(x) {
      return S(x) === i;
    }
    function H(x) {
      return S(x) === f;
    }
    Se.AsyncMode = v, Se.ConcurrentMode = E, Se.ContextConsumer = j, Se.ContextProvider = D, Se.Element = w, Se.ForwardRef = _, Se.Fragment = W, Se.Lazy = Z, Se.Memo = F, Se.Portal = Y, Se.Profiler = re, Se.StrictMode = oe, Se.Suspense = J, Se.isAsyncMode = ae, Se.isConcurrentMode = C, Se.isContextConsumer = L, Se.isContextProvider = I, Se.isElement = $, Se.isForwardRef = N, Se.isFragment = B, Se.isLazy = P, Se.isMemo = Q, Se.isPortal = T, Se.isProfiler = ee, Se.isStrictMode = K, Se.isSuspense = H, Se.isValidElementType = b, Se.typeOf = S;
  }()), Se;
}
var pu;
function Yc() {
  return pu || (pu = 1, process.env.NODE_ENV === "production" ? $n.exports = Gb() : $n.exports = Xb()), $n.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Oi, vu;
function Zb() {
  if (vu)
    return Oi;
  vu = 1;
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
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Oi = i() ? Object.assign : function(a, o) {
    for (var s, c = n(a), u, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          r.call(s, u[h]) && (c[u[h]] = s[u[h]]);
      }
    }
    return c;
  }, Oi;
}
var Ri, mu;
function so() {
  if (mu)
    return Ri;
  mu = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ri = e, Ri;
}
var Pi, gu;
function Kc() {
  return gu || (gu = 1, Pi = Function.call.bind(Object.prototype.hasOwnProperty)), Pi;
}
var Ei, yu;
function Jb() {
  if (yu)
    return Ei;
  yu = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = so(), r = {}, n = Kc();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = a[l](o, l, c, s, null, t);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var d = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (d ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ei = i, Ei;
}
var xi, bu;
function e0() {
  if (bu)
    return xi;
  bu = 1;
  var e = Yc(), t = Zb(), r = so(), n = Kc(), i = Jb(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return xi = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(C) {
      var L = C && (u && C[u] || C[l]);
      if (typeof L == "function")
        return L;
    }
    var h = "<<anonymous>>", d = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: y(),
      arrayOf: b,
      element: S(),
      elementType: v(),
      instanceOf: E,
      node: _(),
      objectOf: D,
      oneOf: j,
      oneOfType: w,
      shape: Z,
      exact: F
    };
    function p(C, L) {
      return C === L ? C !== 0 || 1 / C === 1 / L : C !== C && L !== L;
    }
    function m(C, L) {
      this.message = C, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(C) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, I = 0;
      function $(B, P, Q, T, ee, K, H) {
        if (T = T || h, K = K || Q, H !== r) {
          if (c) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = T + ":" + Q;
            !L[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[fe] = !0, I++);
          }
        }
        return P[Q] == null ? B ? P[Q] === null ? new m("The " + ee + " `" + K + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new m("The " + ee + " `" + K + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : C(P, Q, T, ee, K);
      }
      var N = $.bind(null, !1);
      return N.isRequired = $.bind(null, !0), N;
    }
    function R(C) {
      function L(I, $, N, B, P, Q) {
        var T = I[$], ee = oe(T);
        if (ee !== C) {
          var K = J(T);
          return new m(
            "Invalid " + B + " `" + P + "` of type " + ("`" + K + "` supplied to `" + N + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return g(L);
    }
    function y() {
      return g(o);
    }
    function b(C) {
      function L(I, $, N, B, P) {
        if (typeof C != "function")
          return new m("Property `" + P + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var Q = I[$];
        if (!Array.isArray(Q)) {
          var T = oe(Q);
          return new m("Invalid " + B + " `" + P + "` of type " + ("`" + T + "` supplied to `" + N + "`, expected an array."));
        }
        for (var ee = 0; ee < Q.length; ee++) {
          var K = C(Q, ee, N, B, P + "[" + ee + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return g(L);
    }
    function S() {
      function C(L, I, $, N, B) {
        var P = L[I];
        if (!s(P)) {
          var Q = oe(P);
          return new m("Invalid " + N + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(C);
    }
    function v() {
      function C(L, I, $, N, B) {
        var P = L[I];
        if (!e.isValidElementType(P)) {
          var Q = oe(P);
          return new m("Invalid " + N + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(C);
    }
    function E(C) {
      function L(I, $, N, B, P) {
        if (!(I[$] instanceof C)) {
          var Q = C.name || h, T = ae(I[$]);
          return new m("Invalid " + B + " `" + P + "` of type " + ("`" + T + "` supplied to `" + N + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return g(L);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function L(I, $, N, B, P) {
        for (var Q = I[$], T = 0; T < C.length; T++)
          if (p(Q, C[T]))
            return null;
        var ee = JSON.stringify(C, function(H, x) {
          var fe = J(x);
          return fe === "symbol" ? String(x) : x;
        });
        return new m("Invalid " + B + " `" + P + "` of value `" + String(Q) + "` " + ("supplied to `" + N + "`, expected one of " + ee + "."));
      }
      return g(L);
    }
    function D(C) {
      function L(I, $, N, B, P) {
        if (typeof C != "function")
          return new m("Property `" + P + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var Q = I[$], T = oe(Q);
        if (T !== "object")
          return new m("Invalid " + B + " `" + P + "` of type " + ("`" + T + "` supplied to `" + N + "`, expected an object."));
        for (var ee in Q)
          if (n(Q, ee)) {
            var K = C(Q, ee, N, B, P + "." + ee, r);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return g(L);
    }
    function w(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var L = 0; L < C.length; L++) {
        var I = C[L];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(I) + " at index " + L + "."
          ), o;
      }
      function $(N, B, P, Q, T) {
        for (var ee = [], K = 0; K < C.length; K++) {
          var H = C[K], x = H(N, B, P, Q, T, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && ee.push(x.data.expectedType);
        }
        var fe = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new m("Invalid " + Q + " `" + T + "` supplied to " + ("`" + P + "`" + fe + "."));
      }
      return g($);
    }
    function _() {
      function C(L, I, $, N, B) {
        return Y(L[I]) ? null : new m("Invalid " + N + " `" + B + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return g(C);
    }
    function W(C, L, I, $, N) {
      return new m(
        (C || "React class") + ": " + L + " type `" + I + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function Z(C) {
      function L(I, $, N, B, P) {
        var Q = I[$], T = oe(Q);
        if (T !== "object")
          return new m("Invalid " + B + " `" + P + "` of type `" + T + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var ee in C) {
          var K = C[ee];
          if (typeof K != "function")
            return W(N, B, P, ee, J(K));
          var H = K(Q, ee, N, B, P + "." + ee, r);
          if (H)
            return H;
        }
        return null;
      }
      return g(L);
    }
    function F(C) {
      function L(I, $, N, B, P) {
        var Q = I[$], T = oe(Q);
        if (T !== "object")
          return new m("Invalid " + B + " `" + P + "` of type `" + T + "` " + ("supplied to `" + N + "`, expected `object`."));
        var ee = t({}, I[$], C);
        for (var K in ee) {
          var H = C[K];
          if (n(C, K) && typeof H != "function")
            return W(N, B, P, K, J(H));
          if (!H)
            return new m(
              "Invalid " + B + " `" + P + "` key `" + K + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(I[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var x = H(Q, K, N, B, P + "." + K, r);
          if (x)
            return x;
        }
        return null;
      }
      return g(L);
    }
    function Y(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(Y);
          if (C === null || s(C))
            return !0;
          var L = f(C);
          if (L) {
            var I = L.call(C), $;
            if (L !== C.entries) {
              for (; !($ = I.next()).done; )
                if (!Y($.value))
                  return !1;
            } else
              for (; !($ = I.next()).done; ) {
                var N = $.value;
                if (N && !Y(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(C, L) {
      return C === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function oe(C) {
      var L = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : re(L, C) ? "symbol" : L;
    }
    function J(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var L = oe(C);
      if (L === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function z(C) {
      var L = J(C);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function ae(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return d.checkPropTypes = i, d.resetWarningCache = i.resetWarningCache, d.PropTypes = d, d;
  }, xi;
}
var _i, wu;
function t0() {
  if (wu)
    return _i;
  wu = 1;
  var e = so();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, _i = function() {
    function n(o, s, c, u, l, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, _i;
}
if (process.env.NODE_ENV !== "production") {
  var r0 = Yc(), n0 = !0;
  ba.exports = e0()(r0.isElement, n0);
} else
  ba.exports = t0()();
var i0 = ba.exports;
const X = /* @__PURE__ */ cr(i0);
var a0 = ["color", "size", "title"];
function wa() {
  return wa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wa.apply(this, arguments);
}
function o0(e, t) {
  if (e == null)
    return {};
  var r = s0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function s0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var uo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = o0(e, a0);
  return /* @__PURE__ */ U.createElement("svg", wa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
  }));
});
uo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
uo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const u0 = uo;
var c0 = ["color", "size", "title"];
function Sa() {
  return Sa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sa.apply(this, arguments);
}
function l0(e, t) {
  if (e == null)
    return {};
  var r = f0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function f0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var co = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = l0(e, c0);
  return /* @__PURE__ */ U.createElement("svg", Sa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"
  }));
});
co.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
co.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Gc = co;
var d0 = ["color", "size", "title"];
function Oa() {
  return Oa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oa.apply(this, arguments);
}
function h0(e, t) {
  if (e == null)
    return {};
  var r = p0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var lo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = h0(e, d0);
  return /* @__PURE__ */ U.createElement("svg", Oa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
  }));
});
lo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
lo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const v0 = lo;
var m0 = ["color", "size", "title"];
function Ra() {
  return Ra = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
function g0(e, t) {
  if (e == null)
    return {};
  var r = y0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var fo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = g0(e, m0);
  return /* @__PURE__ */ U.createElement("svg", Ra({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }));
});
fo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
fo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const b0 = fo;
var w0 = ["color", "size", "title"];
function Pa() {
  return Pa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
function S0(e, t) {
  if (e == null)
    return {};
  var r = O0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ho = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = S0(e, w0);
  return /* @__PURE__ */ U.createElement("svg", Pa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }), /* @__PURE__ */ U.createElement("path", {
    d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"
  }));
});
ho.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
ho.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Xc = ho;
var R0 = ["color", "size", "title"];
function Ea() {
  return Ea = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ea.apply(this, arguments);
}
function P0(e, t) {
  if (e == null)
    return {};
  var r = E0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var po = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = P0(e, R0);
  return /* @__PURE__ */ U.createElement("svg", Ea({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
  }));
});
po.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
po.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Zc = po;
var x0 = ["color", "size", "title"];
function xa() {
  return xa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xa.apply(this, arguments);
}
function _0(e, t) {
  if (e == null)
    return {};
  var r = j0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function j0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var vo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = _0(e, x0);
  return /* @__PURE__ */ U.createElement("svg", xa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
  }), /* @__PURE__ */ U.createElement("path", {
    d: "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
  }));
});
vo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
vo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const T0 = vo;
var A0 = ["color", "size", "title"];
function _a() {
  return _a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _a.apply(this, arguments);
}
function $0(e, t) {
  if (e == null)
    return {};
  var r = C0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var mo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = $0(e, A0);
  return /* @__PURE__ */ U.createElement("svg", _a({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  }));
});
mo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
mo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const F0 = mo;
var I0 = ["color", "size", "title"];
function ja() {
  return ja = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ja.apply(this, arguments);
}
function N0(e, t) {
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
var go = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = N0(e, I0);
  return /* @__PURE__ */ U.createElement("svg", ja({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
  }));
});
go.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
go.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const D0 = go;
var M0 = ["color", "size", "title"];
function Ta() {
  return Ta = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ta.apply(this, arguments);
}
function L0(e, t) {
  if (e == null)
    return {};
  var r = H0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var yo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = L0(e, M0);
  return /* @__PURE__ */ U.createElement("svg", Ta({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
  }));
});
yo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
yo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const W0 = yo;
var U0 = ["color", "size", "title"];
function Aa() {
  return Aa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Aa.apply(this, arguments);
}
function B0(e, t) {
  if (e == null)
    return {};
  var r = q0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function q0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var bo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = B0(e, U0);
  return /* @__PURE__ */ U.createElement("svg", Aa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
  }), /* @__PURE__ */ U.createElement("path", {
    d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
});
bo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
bo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const V0 = bo;
var z0 = ["color", "size", "title"];
function $a() {
  return $a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function Q0(e, t) {
  if (e == null)
    return {};
  var r = Y0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Y0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var wo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Q0(e, z0);
  return /* @__PURE__ */ U.createElement("svg", $a({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
  }));
});
wo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
wo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const K0 = wo;
var G0 = ["color", "size", "title"];
function Ca() {
  return Ca = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ca.apply(this, arguments);
}
function X0(e, t) {
  if (e == null)
    return {};
  var r = Z0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var So = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = X0(e, G0);
  return /* @__PURE__ */ U.createElement("svg", Ca({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
  }));
});
So.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
So.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const Jc = So;
var J0 = ["color", "size", "title"];
function Fa() {
  return Fa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
function e1(e, t) {
  if (e == null)
    return {};
  var r = t1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Oo = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = e1(e, J0);
  return /* @__PURE__ */ U.createElement("svg", Fa({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"
  }));
});
Oo.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
Oo.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const r1 = Oo;
var n1 = ["color", "size", "title"];
function Ia() {
  return Ia = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}
function i1(e, t) {
  if (e == null)
    return {};
  var r = a1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function a1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ro = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = i1(e, n1);
  return /* @__PURE__ */ U.createElement("svg", Ia({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
  }));
});
Ro.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
Ro.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const o1 = Ro;
var s1 = ["color", "size", "title"];
function Na() {
  return Na = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function u1(e, t) {
  if (e == null)
    return {};
  var r = c1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Po = /* @__PURE__ */ Je(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = u1(e, s1);
  return /* @__PURE__ */ U.createElement("svg", Na({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r
  }, a), i ? /* @__PURE__ */ U.createElement("title", null, i) : null, /* @__PURE__ */ U.createElement("path", {
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }));
});
Po.propTypes = {
  color: X.string,
  size: X.oneOfType([X.string, X.number]),
  title: X.string
};
Po.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const l1 = Po, f1 = za.div`
  background: #eee;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
`, Ne = ({ header: e, children: t }) => /* @__PURE__ */ A.jsxs(f1, { children: [
  e ? /* @__PURE__ */ A.jsx("span", { className: "header", children: e }) : null,
  t
] }), d1 = za.div`
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

`;
var Fe = /* @__PURE__ */ ((e) => (e.Number = "number", e.String = "string", e))(Fe || {});
const h1 = [
  {
    name: "number_order",
    type: Fe.Number,
    label: G.number_of_order,
    limits: [1, 600]
  },
  {
    name: "year",
    type: Fe.Number,
    label: G.year,
    limits: [1380, 1460]
  },
  {
    name: "month",
    type: Fe.Number,
    label: G.month,
    limits: [1, 12]
  },
  {
    name: "day",
    type: Fe.Number,
    label: G.day,
    limits: [1, 31]
  },
  {
    name: "town.name",
    type: Fe.String,
    label: G.city
  },
  {
    name: "date_of_place.name",
    type: Fe.String,
    label: G.place_given
  },
  {
    name: "titulature.full_name",
    type: Fe.String,
    label: G.titulature
  },
  {
    name: "commandement.full_name",
    type: Fe.String,
    label: G.commandement
  },
  {
    name: "keywords",
    type: Fe.String,
    label: G.keywords
  },
  {
    name: "works.title",
    type: Fe.String,
    label: G.works
  },
  {
    name: "OrigDate",
    type: Fe.String,
    label: G.origDate
  },
  {
    name: "origPlace",
    type: Fe.String,
    label: G.origPlace
  },
  {
    name: "sections.shelfmark_sections_id.name",
    type: Fe.String,
    label: G.shelfmarkSections
  },
  {
    name: "provenance",
    type: Fe.String,
    label: G.provenance
  },
  {
    name: "archive",
    type: Fe.String,
    label: G.archive
  },
  {
    name: "shelfmark",
    type: Fe.String,
    label: G.shelfmarks
  },
  {
    name: "former_shelfmark",
    type: Fe.String,
    label: G.formerShelfmarks
  },
  {
    name: "status",
    type: Fe.String,
    label: G.status
  },
  {
    name: "author_id.full_name",
    type: Fe.String,
    label: G.author
  },
  {
    name: "format",
    type: Fe.String,
    label: G.format
  },
  {
    name: "type",
    type: Fe.String,
    label: G.type
  },
  {
    name: "publication_date",
    type: Fe.String,
    label: G.publicationDate
  },
  {
    name: "publication_location.name",
    type: Fe.String,
    label: G.publicationLocation
  },
  {
    name: "archives",
    type: Fe.String,
    label: G.archive
  }
], p1 = (e) => e.refinements[0].type === "numeric", v1 = (e) => {
  const {
    items: t,
    refine: r
  } = zg(e), { locale: n } = e, i = (s) => {
    var l, f, h;
    const c = (l = h1.find((d) => d.name === s.attribute)) == null ? void 0 : l.label[n];
    let u;
    if (p1(s)) {
      const d = (f = s.refinements[0]) == null ? void 0 : f.value, p = (h = s.refinements[1]) == null ? void 0 : h.value;
      d && p ? u = [`${d} - ${p}`] : d ? u = [`> ${d}`] : u = [`< ${p}`];
    } else
      u = s.refinements.map((d) => d.value);
    return {
      label: c || s.attribute,
      values: u
    };
  }, a = t.map((s) => ({
    display: i(s),
    original: s
  }));
  if (t.length === 0)
    return null;
  const o = (s) => {
    r(s.refinements[0]);
  };
  return /* @__PURE__ */ A.jsx("ul", { className: "currentRefinementList", children: a.map((s) => /* @__PURE__ */ A.jsxs(
    "li",
    {
      className: "currentRefinement",
      children: [
        /* @__PURE__ */ A.jsxs(
          "span",
          {
            className: "currentRefinementLabel",
            children: [
              s.display.label,
              ": "
            ]
          }
        ),
        s.display.values.map((c) => /* @__PURE__ */ A.jsxs(
          "button",
          {
            onClick: () => o(s.original),
            children: [
              /* @__PURE__ */ A.jsx(
                "span",
                {
                  className: "currentRefinementValue",
                  children: c
                }
              ),
              /* @__PURE__ */ A.jsx(l1, {})
            ]
          },
          c
        ))
      ]
    },
    s.display.label
  )) });
}, Eo = ({
  indexName: e,
  locale: t,
  children: r,
  searchClient: n,
  hitConfig: i,
  onHitClick: a
}) => {
  const [o, s] = Et(!1), [c, u] = Et(!0), l = ut(null), f = () => {
    l.current && c && s(!o);
  };
  return Pt(() => {
    const h = (p) => u(p.matches), d = window.matchMedia("(max-width: 800px)");
    return d.addEventListener("change", h), u(d.matches), () => d.removeEventListener("change", h);
  }, []), Pt(() => {
    l.current && s(!c);
  }, [c]), Pt(() => {
    l.current && (o ? l.current.style.transform = "translateX(0)" : l.current.style.transform = "translateX(-120vw)");
  }, [o]), /* @__PURE__ */ A.jsx(d1, { children: /* @__PURE__ */ A.jsx("div", { className: "search", children: /* @__PURE__ */ A.jsxs(
    Cg,
    {
      indexName: e,
      searchClient: n,
      children: [
        /* @__PURE__ */ A.jsx(
          wv,
          {
            attributesToSnippet: ["texte:75"],
            hitsPerPage: 20
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "leftPanel", children: [
          /* @__PURE__ */ A.jsxs(Ne, { header: G.search[t], children: [
            /* @__PURE__ */ A.jsx(
              "button",
              {
                className: "filterButton",
                onClick: () => f(),
                children: /* @__PURE__ */ A.jsx(D0, {})
              }
            ),
            /* @__PURE__ */ A.jsx(
              Mb,
              {
                translations: { submitButtonTitle: G.searchHere[t] }
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "filters", ref: l, children: i.sortFields ? /* @__PURE__ */ A.jsx(Ne, { header: G.sort[t], children: /* @__PURE__ */ A.jsx(
            zb,
            {
              items: i.sortFields
            }
          ) }) : null }),
          r
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mainPanel", children: [
          /* @__PURE__ */ A.jsx(
            v1,
            {
              locale: t
            }
          ),
          /* @__PURE__ */ A.jsx(
            Kb,
            {
              locale: t,
              hitConfig: i,
              onHitClick: a
            }
          )
        ] })
      ]
    }
  ) }) });
}, m1 = (e) => e.year && e.month && e.day ? /* @__PURE__ */ A.jsx("span", { children: new Date(e.year, e.month - 1, e.day).toISOString().slice(0, 10) }) : /* @__PURE__ */ A.jsx("span", { children: /* @__PURE__ */ A.jsx("em", { children: "?" }) }), ji = (e, t, r) => {
  const n = t.split(".");
  let i = e;
  for (; n.length > 0; )
    if (i[n[0]])
      i = i[n[0]], n.shift();
    else {
      i = null;
      break;
    }
  return i ? /* @__PURE__ */ A.jsx(
    an,
    {
      attribute: [t],
      hit: e
    }
  ) : /* @__PURE__ */ A.jsx("span", { children: /* @__PURE__ */ A.jsx("em", { children: G.emptyField[r] }) });
}, Dt = (e, t, r) => e[t] ? /* @__PURE__ */ A.jsx(
  an,
  {
    attribute: [t],
    hit: e
  }
) : /* @__PURE__ */ A.jsx("span", { children: /* @__PURE__ */ A.jsx("em", { children: G.emptyField[r] }) }), g1 = Ha(
  "https://search.archivengine.com",
  // This is a search-only key that is meant to be used in production
  "adb8cdf811841ce52bf0e09ce1a9bb29e4bb2f3d12578f114b755420307f4030",
  {
    primaryKey: "id"
  }
), y1 = ({ locale: e }) => {
  const t = La(() => ({
    leftColumnItems: [
      {
        attribute: "archive.name",
        icon: /* @__PURE__ */ A.jsx(Xc, {}),
        caption: G.archive[e],
        renderDisplay: (r) => Dt(r, "archive", e)
      },
      {
        attribute: "OrigDate",
        icon: /* @__PURE__ */ A.jsx(Zc, {}),
        caption: G.origDate[e]
      },
      {
        attribute: "origPlace",
        icon: /* @__PURE__ */ A.jsx(K0, {}),
        caption: G.origPlace[e]
      },
      {
        attribute: "works",
        icon: /* @__PURE__ */ A.jsx(b0, {}),
        caption: G.works[e],
        renderDisplay: (r) => r.works.map((n) => n.title).join(", ")
      }
    ],
    rightPanel: {
      attribute: "text",
      label: G.text[e]
    },
    headlineAttribute: "catalog_number",
    renderHeadlineAttribute: (r) => r.catalog_number ? /* @__PURE__ */ A.jsxs("span", { children: [
      "#",
      /* @__PURE__ */ A.jsx(
        an,
        {
          attribute: "catalog_number",
          hit: r,
          highlightedTagName: "mark"
        }
      )
    ] }) : /* @__PURE__ */ A.jsx(A.Fragment, {})
  }), [e]);
  return /* @__PURE__ */ A.jsx(Qa, { children: /* @__PURE__ */ A.jsxs(
    Eo,
    {
      searchClient: g1,
      locale: e,
      indexName: "bischoff",
      hitConfig: t,
      children: [
        /* @__PURE__ */ A.jsx(Ne, { header: G.works[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "works.title"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.origDate[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "OrigDate"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.origPlace[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "origPlace"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.sections[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "sections.shelfmark_sections_id.name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.provenance[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "provenance"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.archive[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "archive"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.shelfmarks[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "shelfmark"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.formerShelfmarks[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "former_shelfmark"
          }
        ) })
      ]
    }
  ) });
}, b1 = Ha(
  "https://search.archivengine.com",
  // This is a search-only key that is meant to be used in production
  "adb8cdf811841ce52bf0e09ce1a9bb29e4bb2f3d12578f114b755420307f4030",
  {
    primaryKey: "id"
  }
), w1 = ({ locale: e }) => {
  const t = La(() => ({
    leftColumnItems: [
      {
        attribute: "generic_title",
        icon: /* @__PURE__ */ A.jsx(o1, {}),
        caption: G.genericTitle[e]
      },
      {
        attribute: "publication_date",
        icon: /* @__PURE__ */ A.jsx(Zc, {}),
        caption: G.publicationDate[e]
      },
      {
        attribute: "publication_location.name",
        icon: /* @__PURE__ */ A.jsx(r1, {}),
        caption: G.publicationLocation[e],
        renderDisplay: (r) => ji(r, "publication_location.name", e)
      },
      {
        attribute: "parent_edition.title",
        icon: /* @__PURE__ */ A.jsx(u0, {}),
        caption: G.parentEdition[e],
        renderDisplay: (r) => ji(r, "parent_edition.title", e)
      },
      {
        attribute: "status",
        icon: /* @__PURE__ */ A.jsx(v0, {}),
        caption: G.status[e],
        renderDisplay: (r) => Dt(r, "status", e)
      },
      {
        attribute: "line",
        icon: /* @__PURE__ */ A.jsx(F0, {}),
        caption: G.line[e],
        renderDisplay: (r) => Dt(r, "line", e)
      },
      {
        attribute: "format",
        icon: /* @__PURE__ */ A.jsx(W0, {}),
        caption: G.format[e],
        renderDisplay: (r) => Dt(r, "format", e)
      },
      {
        attribute: "author_id.full_name",
        icon: /* @__PURE__ */ A.jsx(Jc, {}),
        caption: G.author[e],
        renderDisplay: (r) => ji(r, "author_id.full_name", e)
      },
      {
        attribute: "archives",
        icon: /* @__PURE__ */ A.jsx(Gc, {}),
        caption: G.archive[e],
        render: (r) => r.archives.join(", ")
      }
    ],
    rightPanel: {
      attribute: "title"
    }
  }), [e]);
  return /* @__PURE__ */ A.jsx(Qa, { children: /* @__PURE__ */ A.jsxs(
    Eo,
    {
      searchClient: b1,
      locale: e,
      indexName: "rumpf",
      hitConfig: t,
      children: [
        /* @__PURE__ */ A.jsx(Ne, { header: G.status[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "status",
            transformItems: (r) => Si(r, e)
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.author[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "author_id.full_name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.format[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "format",
            transformItems: (r) => Si(r, e)
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.type[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "type",
            transformItems: (r) => Si(r, e)
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.publicationDate[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "publication_date"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.publicationLocation[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "publication_location.name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.archive[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "archives"
          }
        ) })
      ]
    }
  ) });
};
function Wt(e) {
  "@babel/helpers - typeof";
  return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wt(e);
}
function S1(e, t) {
  if (Wt(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O1(e) {
  var t = S1(e, "string");
  return Wt(t) === "symbol" ? t : String(t);
}
function dt(e, t, r) {
  return t = O1(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function R1(e) {
  if (Array.isArray(e))
    return ka(e);
}
function P1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function el(e, t) {
  if (e) {
    if (typeof e == "string")
      return ka(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ka(e, t);
  }
}
function E1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mt(e) {
  return R1(e) || P1(e) || el(e) || E1();
}
function x1(e) {
  if (Array.isArray(e))
    return e;
}
function _1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function j1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function it(e, t) {
  return x1(e) || _1(e, t) || el(e, t) || j1();
}
var tl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = r.apply(null, a);
              s && n.push(s);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              n.push(a.toString());
              continue;
            }
            for (var c in a)
              t.call(a, c) && a[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(tl);
var T1 = tl.exports;
const on = /* @__PURE__ */ cr(T1);
var Da = {}, xo = [], A1 = function(t) {
  xo.push(t);
};
function $1(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = xo.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function C1(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = xo.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function F1() {
  Da = {};
}
function rl(e, t, r) {
  !t && !Da[r] && (e(!1, r), Da[r] = !0);
}
function sn(e, t) {
  rl($1, e, t);
}
function I1(e, t) {
  rl(C1, e, t);
}
sn.preMessage = A1;
sn.resetWarned = F1;
sn.noteOnce = I1;
function N1(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function i(a, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(a);
    if (sn(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === o)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var u = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(o) || a.length !== o.length)
        return !1;
      for (var l = 0; l < a.length; l++)
        if (!i(a[l], o[l], u))
          return !1;
      return !0;
    }
    if (a && o && Wt(a) === "object" && Wt(o) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(o).length ? !1 : f.every(function(h) {
        return i(a[h], o[h], u);
      });
    }
    return !1;
  }
  return i(e, t);
}
function Su(e) {
  var t = te.useRef();
  t.current = e;
  var r = te.useCallback(function() {
    for (var n, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function k1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Ou = process.env.NODE_ENV !== "test" && k1() ? te.useLayoutEffect : te.useEffect, D1 = function(t, r) {
  var n = te.useRef(!0);
  Ou(function() {
    return t(n.current);
  }, r), Ou(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ru = function(t, r) {
  D1(function(n) {
    if (!n)
      return t();
  }, r);
};
function Pu(e) {
  var t = te.useRef(!1), r = te.useState(e), n = it(r, 2), i = n[0], a = n[1];
  te.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(s, c) {
    c && t.current || a(s);
  }
  return [i, o];
}
function Ti(e) {
  return e !== void 0;
}
function M1(e, t) {
  var r = t || {}, n = r.defaultValue, i = r.value, a = r.onChange, o = r.postState, s = Pu(function() {
    return Ti(i) ? i : Ti(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = it(s, 2), u = c[0], l = c[1], f = i !== void 0 ? i : u, h = o ? o(f) : f, d = Su(a), p = Pu([f]), m = it(p, 2), g = m[0], R = m[1];
  Ru(function() {
    var b = g[0];
    u !== b && d(u, b);
  }, [g]), Ru(function() {
    Ti(i) || l(i);
  }, [i]);
  var y = Su(function(b, S) {
    l(b, S), R([f], S);
  });
  return [h, y];
}
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zn.apply(this, arguments);
}
function L1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function nl(e, t) {
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
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eu(Object(r), !0).forEach(function(n) {
      dt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var se = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= se.F1 && r <= se.F12)
      return !1;
    switch (r) {
      case se.ALT:
      case se.CAPS_LOCK:
      case se.CONTEXT_MENU:
      case se.CTRL:
      case se.DOWN:
      case se.END:
      case se.ESC:
      case se.HOME:
      case se.INSERT:
      case se.LEFT:
      case se.MAC_FF_META:
      case se.META:
      case se.NUMLOCK:
      case se.NUM_CENTER:
      case se.PAGE_DOWN:
      case se.PAGE_UP:
      case se.PAUSE:
      case se.PRINT_SCREEN:
      case se.RIGHT:
      case se.SHIFT:
      case se.UP:
      case se.WIN_KEY:
      case se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= se.ZERO && t <= se.NINE || t >= se.NUM_ZERO && t <= se.NUM_MULTIPLY || t >= se.A && t <= se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case se.SPACE:
      case se.QUESTION_MARK:
      case se.NUM_PLUS:
      case se.NUM_MINUS:
      case se.NUM_PERIOD:
      case se.NUM_DIVISION:
      case se.SEMICOLON:
      case se.DASH:
      case se.EQUALS:
      case se.COMMA:
      case se.PERIOD:
      case se.SLASH:
      case se.APOSTROPHE:
      case se.SINGLE_QUOTE:
      case se.OPEN_SQUARE_BRACKET:
      case se.BACKSLASH:
      case se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Xt = /* @__PURE__ */ te.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: !0
});
function Ma(e, t, r) {
  return (e - t) / (r - t);
}
function _o(e, t, r, n) {
  var i = Ma(t, r, n), a = {};
  switch (e) {
    case "rtl":
      a.right = "".concat(i * 100, "%"), a.transform = "translateX(50%)";
      break;
    case "btt":
      a.bottom = "".concat(i * 100, "%"), a.transform = "translateY(50%)";
      break;
    case "ttb":
      a.top = "".concat(i * 100, "%"), a.transform = "translateY(-50%)";
      break;
    default:
      a.left = "".concat(i * 100, "%"), a.transform = "translateX(-50%)";
      break;
  }
  return a;
}
function rr(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var H1 = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"], il = /* @__PURE__ */ te.forwardRef(function(e, t) {
  var r, n, i = e.prefixCls, a = e.value, o = e.valueIndex, s = e.onStartMove, c = e.style, u = e.render, l = e.dragging, f = e.onOffsetChange, h = nl(e, H1), d = te.useContext(Xt), p = d.min, m = d.max, g = d.direction, R = d.disabled, y = d.keyboard, b = d.range, S = d.tabIndex, v = d.ariaLabelForHandle, E = d.ariaLabelledByForHandle, j = d.ariaValueTextFormatterForHandle, D = "".concat(i, "-handle"), w = function(Y) {
    R || s(Y, o);
  }, _ = function(Y) {
    if (!R && y) {
      var re = null;
      switch (Y.which || Y.keyCode) {
        case se.LEFT:
          re = g === "ltr" || g === "btt" ? -1 : 1;
          break;
        case se.RIGHT:
          re = g === "ltr" || g === "btt" ? 1 : -1;
          break;
        case se.UP:
          re = g !== "ttb" ? 1 : -1;
          break;
        case se.DOWN:
          re = g !== "ttb" ? -1 : 1;
          break;
        case se.HOME:
          re = "min";
          break;
        case se.END:
          re = "max";
          break;
        case se.PAGE_UP:
          re = 2;
          break;
        case se.PAGE_DOWN:
          re = -2;
          break;
      }
      re !== null && (Y.preventDefault(), f(re, o));
    }
  }, W = _o(g, a, p, m), Z = /* @__PURE__ */ te.createElement("div", zn({
    ref: t,
    className: on(D, (r = {}, dt(r, "".concat(D, "-").concat(o + 1), b), dt(r, "".concat(D, "-dragging"), l), r)),
    style: yt(yt({}, W), c),
    onMouseDown: w,
    onTouchStart: w,
    onKeyDown: _,
    tabIndex: R ? null : rr(S, o),
    role: "slider",
    "aria-valuemin": p,
    "aria-valuemax": m,
    "aria-valuenow": a,
    "aria-disabled": R,
    "aria-label": rr(v, o),
    "aria-labelledby": rr(E, o),
    "aria-valuetext": (n = rr(j, o)) === null || n === void 0 ? void 0 : n(a),
    "aria-orientation": g === "ltr" || g === "rtl" ? "horizontal" : "vertical"
  }, h));
  return u && (Z = u(Z, {
    index: o,
    prefixCls: i,
    value: a,
    dragging: l
  })), Z;
});
process.env.NODE_ENV !== "production" && (il.displayName = "Handle");
var W1 = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"], al = /* @__PURE__ */ te.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, i = e.onStartMove, a = e.onOffsetChange, o = e.values, s = e.handleRender, c = e.draggingIndex, u = nl(e, W1), l = te.useRef({});
  return te.useImperativeHandle(t, function() {
    return {
      focus: function(h) {
        var d;
        (d = l.current[h]) === null || d === void 0 || d.focus();
      }
    };
  }), /* @__PURE__ */ te.createElement(te.Fragment, null, o.map(function(f, h) {
    return /* @__PURE__ */ te.createElement(il, zn({
      ref: function(p) {
        p ? l.current[h] = p : delete l.current[h];
      },
      dragging: c === h,
      prefixCls: r,
      style: rr(n, h),
      key: h,
      value: f,
      valueIndex: h,
      onStartMove: i,
      onOffsetChange: a,
      render: s
    }, u));
  }));
});
process.env.NODE_ENV !== "production" && (al.displayName = "Handles");
function xu(e) {
  var t = "touches" in e ? e.touches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function U1(e, t, r, n, i, a, o, s, c) {
  var u = te.useState(null), l = it(u, 2), f = l[0], h = l[1], d = te.useState(-1), p = it(d, 2), m = p[0], g = p[1], R = te.useState(r), y = it(R, 2), b = y[0], S = y[1], v = te.useState(r), E = it(v, 2), j = E[0], D = E[1], w = te.useRef(null), _ = te.useRef(null);
  te.useEffect(function() {
    m === -1 && S(r);
  }, [r, m]), te.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", w.current), document.removeEventListener("mouseup", _.current), document.removeEventListener("touchmove", w.current), document.removeEventListener("touchend", _.current);
    };
  }, []);
  var W = function(J, z) {
    b.some(function(ae, C) {
      return ae !== J[C];
    }) && (z !== void 0 && h(z), S(J), o(J));
  }, Z = function(J, z) {
    if (J === -1) {
      var ae = j[0], C = j[j.length - 1], L = n - ae, I = i - C, $ = z * (i - n);
      $ = Math.max($, L), $ = Math.min($, I);
      var N = a(ae + $);
      $ = N - ae;
      var B = j.map(function(ee) {
        return ee + $;
      });
      W(B);
    } else {
      var P = (i - n) * z, Q = Mt(b);
      Q[J] = j[J];
      var T = c(Q, P, J, "dist");
      W(T.values, T.value);
    }
  }, F = te.useRef(Z);
  F.current = Z;
  var Y = function(J, z) {
    J.stopPropagation();
    var ae = r[z];
    g(z), h(ae), D(r);
    var C = xu(J), L = C.pageX, I = C.pageY, $ = function(P) {
      P.preventDefault();
      var Q = xu(P), T = Q.pageX, ee = Q.pageY, K = T - L, H = ee - I, x = e.current.getBoundingClientRect(), fe = x.width, pe = x.height, ue;
      switch (t) {
        case "btt":
          ue = -H / pe;
          break;
        case "ttb":
          ue = H / pe;
          break;
        case "rtl":
          ue = -K / fe;
          break;
        default:
          ue = K / fe;
      }
      F.current(z, ue);
    }, N = function B(P) {
      P.preventDefault(), document.removeEventListener("mouseup", B), document.removeEventListener("mousemove", $), document.removeEventListener("touchend", B), document.removeEventListener("touchmove", $), w.current = null, _.current = null, g(-1), s();
    };
    document.addEventListener("mouseup", N), document.addEventListener("mousemove", $), document.addEventListener("touchend", N), document.addEventListener("touchmove", $), w.current = $, _.current = N;
  }, re = te.useMemo(function() {
    var oe = Mt(r).sort(function(z, ae) {
      return z - ae;
    }), J = Mt(b).sort(function(z, ae) {
      return z - ae;
    });
    return oe.every(function(z, ae) {
      return z === J[ae];
    }) ? b : r;
  }, [r, b]);
  return [m, f, re, Y];
}
function B1(e) {
  var t, r = e.prefixCls, n = e.style, i = e.start, a = e.end, o = e.index, s = e.onStartMove, c = te.useContext(Xt), u = c.direction, l = c.min, f = c.max, h = c.disabled, d = c.range, p = "".concat(r, "-track"), m = Ma(i, l, f), g = Ma(a, l, f), R = function(S) {
    !h && s && s(S, -1);
  }, y = {};
  switch (u) {
    case "rtl":
      y.right = "".concat(m * 100, "%"), y.width = "".concat(g * 100 - m * 100, "%");
      break;
    case "btt":
      y.bottom = "".concat(m * 100, "%"), y.height = "".concat(g * 100 - m * 100, "%");
      break;
    case "ttb":
      y.top = "".concat(m * 100, "%"), y.height = "".concat(g * 100 - m * 100, "%");
      break;
    default:
      y.left = "".concat(m * 100, "%"), y.width = "".concat(g * 100 - m * 100, "%");
  }
  return /* @__PURE__ */ te.createElement("div", {
    className: on(p, (t = {}, dt(t, "".concat(p, "-").concat(o + 1), d), dt(t, "".concat(r, "-track-draggable"), s), t)),
    style: yt(yt({}, y), n),
    onMouseDown: R,
    onTouchStart: R
  });
}
function q1(e) {
  var t = e.prefixCls, r = e.style, n = e.values, i = e.startPoint, a = e.onStartMove, o = te.useContext(Xt), s = o.included, c = o.range, u = o.min, l = te.useMemo(function() {
    if (!c) {
      if (n.length === 0)
        return [];
      var f = i ?? u, h = n[0];
      return [{
        start: Math.min(f, h),
        end: Math.max(f, h)
      }];
    }
    for (var d = [], p = 0; p < n.length - 1; p += 1)
      d.push({
        start: n[p],
        end: n[p + 1]
      });
    return d;
  }, [n, c, i, u]);
  return s ? l.map(function(f, h) {
    var d = f.start, p = f.end;
    return /* @__PURE__ */ te.createElement(B1, {
      index: h,
      prefixCls: t,
      style: rr(r, h),
      start: d,
      end: p,
      key: h,
      onStartMove: a
    });
  }) : null;
}
function V1(e) {
  var t = e.prefixCls, r = e.style, n = e.children, i = e.value, a = e.onClick, o = te.useContext(Xt), s = o.min, c = o.max, u = o.direction, l = o.includedStart, f = o.includedEnd, h = o.included, d = "".concat(t, "-text"), p = _o(u, i, s, c);
  return /* @__PURE__ */ te.createElement("span", {
    className: on(d, dt({}, "".concat(d, "-active"), h && l <= i && i <= f)),
    style: yt(yt({}, p), r),
    onMouseDown: function(g) {
      g.stopPropagation();
    },
    onClick: function() {
      a(i);
    }
  }, n);
}
function z1(e) {
  var t = e.prefixCls, r = e.marks, n = e.onClick, i = "".concat(t, "-mark");
  return r.length ? /* @__PURE__ */ te.createElement("div", {
    className: i
  }, r.map(function(a) {
    var o = a.value, s = a.style, c = a.label;
    return /* @__PURE__ */ te.createElement(V1, {
      key: o,
      prefixCls: i,
      style: s,
      value: o,
      onClick: n
    }, c);
  })) : null;
}
function Q1(e) {
  var t = e.prefixCls, r = e.value, n = e.style, i = e.activeStyle, a = te.useContext(Xt), o = a.min, s = a.max, c = a.direction, u = a.included, l = a.includedStart, f = a.includedEnd, h = "".concat(t, "-dot"), d = u && l <= r && r <= f, p = yt(yt({}, _o(c, r, o, s)), typeof n == "function" ? n(r) : n);
  return d && (p = yt(yt({}, p), typeof i == "function" ? i(r) : i)), /* @__PURE__ */ te.createElement("span", {
    className: on(h, dt({}, "".concat(h, "-active"), d)),
    style: p
  });
}
function Y1(e) {
  var t = e.prefixCls, r = e.marks, n = e.dots, i = e.style, a = e.activeStyle, o = te.useContext(Xt), s = o.min, c = o.max, u = o.step, l = te.useMemo(function() {
    var f = /* @__PURE__ */ new Set();
    if (r.forEach(function(d) {
      f.add(d.value);
    }), n && u !== null)
      for (var h = s; h <= c; )
        f.add(h), h += u;
    return Array.from(f);
  }, [s, c, u, n, r]);
  return /* @__PURE__ */ te.createElement("div", {
    className: "".concat(t, "-step")
  }, l.map(function(f) {
    return /* @__PURE__ */ te.createElement(Q1, {
      prefixCls: t,
      key: f,
      value: f,
      style: i,
      activeStyle: a
    });
  }));
}
function K1(e, t, r, n, i, a) {
  var o = te.useCallback(function(d) {
    var p = isFinite(d) ? d : e;
    return p = Math.min(t, d), p = Math.max(e, p), p;
  }, [e, t]), s = te.useCallback(function(d) {
    if (r !== null) {
      var p = e + Math.round((o(d) - e) / r) * r, m = function(b) {
        return (String(b).split(".")[1] || "").length;
      }, g = Math.max(m(r), m(t), m(e)), R = Number(p.toFixed(g));
      return e <= R && R <= t ? R : null;
    }
    return null;
  }, [r, e, t, o]), c = te.useCallback(function(d) {
    var p = o(d), m = n.map(function(y) {
      return y.value;
    });
    r !== null && m.push(s(d)), m.push(e, t);
    var g = m[0], R = t - e;
    return m.forEach(function(y) {
      var b = Math.abs(p - y);
      b <= R && (g = y, R = b);
    }), g;
  }, [e, t, n, r, o, s]), u = function d(p, m, g) {
    var R = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof m == "number") {
      var y, b = p[g], S = b + m, v = [];
      n.forEach(function(_) {
        v.push(_.value);
      }), v.push(e, t), v.push(s(b));
      var E = m > 0 ? 1 : -1;
      R === "unit" ? v.push(s(b + E * r)) : v.push(s(S)), v = v.filter(function(_) {
        return _ !== null;
      }).filter(function(_) {
        return m < 0 ? _ <= b : _ >= b;
      }), R === "unit" && (v = v.filter(function(_) {
        return _ !== b;
      }));
      var j = R === "unit" ? b : S;
      y = v[0];
      var D = Math.abs(y - j);
      if (v.forEach(function(_) {
        var W = Math.abs(_ - j);
        W < D && (y = _, D = W);
      }), y === void 0)
        return m < 0 ? e : t;
      if (R === "dist")
        return y;
      if (Math.abs(m) > 1) {
        var w = Mt(p);
        return w[g] = y, d(w, m - E, g, R);
      }
      return y;
    } else {
      if (m === "min")
        return e;
      if (m === "max")
        return t;
    }
  }, l = function(p, m, g) {
    var R = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", y = p[g], b = u(p, m, g, R);
    return {
      value: b,
      changed: b !== y
    };
  }, f = function(p) {
    return a === null && p === 0 || typeof a == "number" && p < a;
  }, h = function(p, m, g) {
    var R = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", y = p.map(c), b = y[g], S = u(y, m, g, R);
    if (y[g] = S, i === !1) {
      var v = a || 0;
      g > 0 && y[g - 1] !== b && (y[g] = Math.max(y[g], y[g - 1] + v)), g < y.length - 1 && y[g + 1] !== b && (y[g] = Math.min(y[g], y[g + 1] - v));
    } else if (typeof a == "number" || a === null) {
      for (var E = g + 1; E < y.length; E += 1)
        for (var j = !0; f(y[E] - y[E - 1]) && j; ) {
          var D = l(y, 1, E);
          y[E] = D.value, j = D.changed;
        }
      for (var w = g; w > 0; w -= 1)
        for (var _ = !0; f(y[w] - y[w - 1]) && _; ) {
          var W = l(y, -1, w - 1);
          y[w - 1] = W.value, _ = W.changed;
        }
      for (var Z = y.length - 1; Z > 0; Z -= 1)
        for (var F = !0; f(y[Z] - y[Z - 1]) && F; ) {
          var Y = l(y, -1, Z - 1);
          y[Z - 1] = Y.value, F = Y.changed;
        }
      for (var re = 0; re < y.length - 1; re += 1)
        for (var oe = !0; f(y[re + 1] - y[re]) && oe; ) {
          var J = l(y, 1, re + 1);
          y[re + 1] = J.value, oe = J.changed;
        }
    }
    return {
      value: y[g],
      values: y
    };
  };
  return [c, h];
}
var ol = /* @__PURE__ */ te.forwardRef(function(e, t) {
  var r, n = e.prefixCls, i = n === void 0 ? "rc-slider" : n, a = e.className, o = e.style, s = e.disabled, c = s === void 0 ? !1 : s, u = e.keyboard, l = u === void 0 ? !0 : u, f = e.autoFocus, h = e.onFocus, d = e.onBlur, p = e.min, m = p === void 0 ? 0 : p, g = e.max, R = g === void 0 ? 100 : g, y = e.step, b = y === void 0 ? 1 : y, S = e.value, v = e.defaultValue, E = e.range, j = e.count, D = e.onChange, w = e.onBeforeChange, _ = e.onAfterChange, W = e.allowCross, Z = W === void 0 ? !0 : W, F = e.pushable, Y = F === void 0 ? !1 : F, re = e.draggableTrack, oe = e.reverse, J = e.vertical, z = e.included, ae = z === void 0 ? !0 : z, C = e.startPoint, L = e.trackStyle, I = e.handleStyle, $ = e.railStyle, N = e.dotStyle, B = e.activeDotStyle, P = e.marks, Q = e.dots, T = e.handleRender, ee = e.tabIndex, K = ee === void 0 ? 0 : ee, H = e.ariaLabelForHandle, x = e.ariaLabelledByForHandle, fe = e.ariaValueTextFormatterForHandle, pe = te.useRef(), ue = te.useRef(), je = te.useMemo(function() {
    return J ? oe ? "ttb" : "btt" : oe ? "rtl" : "ltr";
  }, [oe, J]), de = te.useMemo(function() {
    return isFinite(m) ? m : 0;
  }, [m]), xe = te.useMemo(function() {
    return isFinite(R) ? R : 100;
  }, [R]), qe = te.useMemo(function() {
    return b !== null && b <= 0 ? 1 : b;
  }, [b]), Le = te.useMemo(function() {
    return typeof Y == "boolean" ? Y ? qe : !1 : Y >= 0 ? Y : !1;
  }, [Y, qe]), ct = te.useMemo(function() {
    var O = Object.keys(P || {});
    return O.map(function(k) {
      var M = P[k], ie = {
        value: Number(k)
      };
      return M && Wt(M) === "object" && !/* @__PURE__ */ te.isValidElement(M) && ("label" in M || "style" in M) ? (ie.style = M.style, ie.label = M.label) : ie.label = M, ie;
    }).filter(function(k) {
      var M = k.label;
      return M || typeof M == "number";
    }).sort(function(k, M) {
      return k.value - M.value;
    });
  }, [P]), lt = K1(de, xe, qe, ct, Z, Le), Ke = it(lt, 2), le = Ke[0], _e = Ke[1], Tt = M1(v, {
    value: S
  }), ot = it(Tt, 2), Ue = ot[0], un = ot[1], rt = te.useMemo(function() {
    var O = Ue == null ? [] : Array.isArray(Ue) ? Ue : [Ue], k = it(O, 1), M = k[0], ie = M === void 0 ? de : M, ce = Ue === null ? [] : [ie];
    if (E) {
      if (ce = Mt(O), j || Ue === void 0) {
        var me = j >= 0 ? j + 1 : 2;
        for (ce = ce.slice(0, me); ce.length < me; ) {
          var ve;
          ce.push((ve = ce[ce.length - 1]) !== null && ve !== void 0 ? ve : de);
        }
      }
      ce.sort(function(he, He) {
        return he - He;
      });
    }
    return ce.forEach(function(he, He) {
      ce[He] = le(he);
    }), ce;
  }, [Ue, E, de, j, le]), At = te.useRef(rt);
  At.current = rt;
  var wt = function(k) {
    return E ? k : k[0];
  }, dr = function(k) {
    var M = Mt(k).sort(function(ie, ce) {
      return ie - ce;
    });
    D && !N1(M, At.current, !0) && D(wt(M)), un(M);
  }, cn = function(k) {
    if (!c) {
      var M = 0, ie = xe - de;
      rt.forEach(function(me, ve) {
        var he = Math.abs(k - me);
        he <= ie && (ie = he, M = ve);
      });
      var ce = Mt(rt);
      ce[M] = k, E && !rt.length && j === void 0 && ce.push(k), w == null || w(wt(ce)), dr(ce), _ == null || _(wt(ce));
    }
  }, Jn = function(k) {
    k.preventDefault();
    var M = ue.current.getBoundingClientRect(), ie = M.width, ce = M.height, me = M.left, ve = M.top, he = M.bottom, He = M.right, Ie = k.clientX, ke = k.clientY, Ve;
    switch (je) {
      case "btt":
        Ve = (he - ke) / ce;
        break;
      case "ttb":
        Ve = (ke - ve) / ce;
        break;
      case "rtl":
        Ve = (He - Ie) / ie;
        break;
      default:
        Ve = (Ie - me) / ie;
    }
    var Ft = de + Ve * (xe - de);
    cn(le(Ft));
  }, ei = te.useState(null), ln = it(ei, 2), hr = ln[0], Zt = ln[1], fn = function(k, M) {
    if (!c) {
      var ie = _e(rt, k, M);
      w == null || w(wt(rt)), dr(ie.values), _ == null || _(wt(ie.values)), Zt(ie.value);
    }
  };
  te.useEffect(function() {
    if (hr !== null) {
      var O = rt.indexOf(hr);
      O >= 0 && pe.current.focus(O);
    }
    Zt(null);
  }, [hr]);
  var $t = te.useMemo(function() {
    return re && qe === null ? (process.env.NODE_ENV !== "production" && sn(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : re;
  }, [re, qe]), pr = function() {
    _ == null || _(wt(At.current));
  }, vr = U1(ue, je, rt, de, xe, le, dr, pr, _e), Ut = it(vr, 4), dn = Ut[0], hn = Ut[1], mr = Ut[2], pn = Ut[3], gr = function(k, M) {
    pn(k, M), w == null || w(wt(At.current));
  }, vn = dn !== -1;
  te.useEffect(function() {
    if (!vn) {
      var O = rt.lastIndexOf(hn);
      pe.current.focus(O);
    }
  }, [vn]);
  var Ct = te.useMemo(function() {
    return Mt(mr).sort(function(O, k) {
      return O - k;
    });
  }, [mr]), mn = te.useMemo(function() {
    return E ? [Ct[0], Ct[Ct.length - 1]] : [de, Ct[0]];
  }, [Ct, E, de]), gn = it(mn, 2), yn = gn[0], bn = gn[1];
  te.useImperativeHandle(t, function() {
    return {
      focus: function() {
        pe.current.focus(0);
      },
      blur: function() {
        var k = document, M = k.activeElement;
        ue.current.contains(M) && (M == null || M.blur());
      }
    };
  }), te.useEffect(function() {
    f && pe.current.focus(0);
  }, []);
  var ti = te.useMemo(function() {
    return {
      min: de,
      max: xe,
      direction: je,
      disabled: c,
      keyboard: l,
      step: qe,
      included: ae,
      includedStart: yn,
      includedEnd: bn,
      range: E,
      tabIndex: K,
      ariaLabelForHandle: H,
      ariaLabelledByForHandle: x,
      ariaValueTextFormatterForHandle: fe
    };
  }, [de, xe, je, c, l, qe, ae, yn, bn, E, K, H, x, fe]);
  return /* @__PURE__ */ te.createElement(Xt.Provider, {
    value: ti
  }, /* @__PURE__ */ te.createElement("div", {
    ref: ue,
    className: on(i, a, (r = {}, dt(r, "".concat(i, "-disabled"), c), dt(r, "".concat(i, "-vertical"), J), dt(r, "".concat(i, "-horizontal"), !J), dt(r, "".concat(i, "-with-marks"), ct.length), r)),
    style: o,
    onMouseDown: Jn
  }, /* @__PURE__ */ te.createElement("div", {
    className: "".concat(i, "-rail"),
    style: $
  }), /* @__PURE__ */ te.createElement(q1, {
    prefixCls: i,
    style: L,
    values: Ct,
    startPoint: C,
    onStartMove: $t ? gr : null
  }), /* @__PURE__ */ te.createElement(Y1, {
    prefixCls: i,
    marks: ct,
    dots: Q,
    style: N,
    activeStyle: B
  }), /* @__PURE__ */ te.createElement(al, {
    ref: pe,
    prefixCls: i,
    style: I,
    values: mr,
    draggingIndex: dn,
    onStartMove: gr,
    onOffsetChange: fn,
    onFocus: h,
    onBlur: d,
    handleRender: T
  }), /* @__PURE__ */ te.createElement(z1, {
    prefixCls: i,
    marks: ct,
    onClick: cn
  })));
});
process.env.NODE_ENV !== "production" && (ol.displayName = "Slider");
const G1 = {
  sliderValues: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px"
  }
}, _u = (e) => ({
  min: e.min || 0,
  max: e.max || 100
}), Cn = (e) => {
  const {
    start: t,
    range: r,
    refine: n
  } = gy(e), [i, a] = Et(_u(r)), [o, s] = Et({
    min: r.min,
    max: r.max
  });
  Pt(() => {
    i && n([i.min, i.max]);
  }, [i, n]), Pt(() => {
    if (t[0] !== o.min || t[1] !== o.max) {
      const u = _u({ min: t[0], max: t[1] });
      s({ ...u }), a({ ...u });
    }
  }, [r, t]);
  const c = (u, l) => {
    let f;
    return u === 1 / 0 || u === -1 / 0 ? f = l === "min" ? r.min : r.max : f = u, e.renderValue && f && (f = e.renderValue(f)), f;
  };
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { style: G1.sliderValues, children: [
      /* @__PURE__ */ A.jsx("span", { children: c(o.min, "min") }),
      /* @__PURE__ */ A.jsx("span", { children: c(o.max, "max") })
    ] }),
    /* @__PURE__ */ A.jsx(
      ol,
      {
        range: !0,
        defaultValue: [r.min || 0, r.max || 100],
        onChange: (u) => s({ min: u[0], max: u[1] }),
        onAfterChange: (u) => a({ min: u[0], max: u[1] }),
        min: r.min,
        max: r.max,
        value: [o.min || r.min || 0, o.max || r.max || 100]
      }
    )
  ] });
}, X1 = Ha(
  "https://search.archivengine.com",
  // This is a search-only key that is meant to be used in production
  "adb8cdf811841ce52bf0e09ce1a9bb29e4bb2f3d12578f114b755420307f4030",
  {
    primaryKey: "id"
  }
), Z1 = ({ locale: e }) => {
  const t = {
    leftColumnItems: [
      {
        attribute: "date",
        icon: /* @__PURE__ */ A.jsx(T0, {}),
        caption: G.date[e],
        renderDisplay: (r) => m1(r)
      },
      {
        attribute: "town",
        icon: /* @__PURE__ */ A.jsx(Xc, {}),
        caption: G.city[e],
        renderDisplay: (r) => Dt(r, "town.name", e)
      },
      {
        attribute: "place_given",
        icon: /* @__PURE__ */ A.jsx(V0, {}),
        caption: G.place_given[e],
        renderDisplay: (r) => Dt(r, "date_of_place.name", e)
      },
      {
        attribute: "titulature",
        icon: /* @__PURE__ */ A.jsx(Gc, {}),
        caption: G.titulature[e],
        renderDisplay: (r) => Dt(r, "titulature.full_name", e)
      },
      {
        attribute: "commandement",
        icon: /* @__PURE__ */ A.jsx(Jc, {}),
        caption: G.commandement[e],
        renderDisplay: (r) => Dt(r, "commandement.full_name", e)
      }
    ],
    rightPanel: {
      attribute: "texte",
      label: G.text[e]
    },
    headlineAttribute: "number_order",
    renderHeadlineAttribute: (r) => /* @__PURE__ */ A.jsxs("span", { children: [
      "#",
      /* @__PURE__ */ A.jsx(
        an,
        {
          attribute: "number_order",
          hit: r,
          highlightedTagName: "mark"
        }
      )
    ] }),
    sortFields: [
      { value: "textes", label: G.relevance[e] },
      { value: "textes:timestamp:asc", label: G.chronologicalAsc[e] },
      { value: "textes:timestamp:desc", label: G.chronologicalDesc[e] },
      { value: "textes:number_order:asc", label: G.numberOrderAsc[e] },
      { value: "textes:number_order:desc", label: G.numberOrderDesc[e] }
    ]
  };
  return /* @__PURE__ */ A.jsx(Qa, { children: /* @__PURE__ */ A.jsxs(
    Eo,
    {
      searchClient: X1,
      locale: "fr",
      indexName: "textes",
      hitConfig: t,
      children: [
        /* @__PURE__ */ A.jsx(Ne, { header: G.number_of_order[e], children: /* @__PURE__ */ A.jsx(
          Cn,
          {
            attribute: "number_order"
          }
        ) }),
        /* @__PURE__ */ A.jsxs(Ne, { header: G.date[e], children: [
          /* @__PURE__ */ A.jsxs("div", { className: "dateSlider", children: [
            /* @__PURE__ */ A.jsx("p", { className: "header", children: G.year[e] }),
            /* @__PURE__ */ A.jsx(
              Cn,
              {
                attribute: "year"
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "dateSlider", children: [
            /* @__PURE__ */ A.jsx("p", { className: "header", children: G.month[e] }),
            /* @__PURE__ */ A.jsx(
              Cn,
              {
                attribute: "month"
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "dateSlider", children: [
            /* @__PURE__ */ A.jsx("p", { className: "header", children: G.day[e] }),
            /* @__PURE__ */ A.jsx(
              Cn,
              {
                attribute: "day"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.city[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "town.name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.place_given[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "date_of_place.name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.titulature[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "titulature.full_name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.commandement[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "commandement.full_name"
          }
        ) }),
        /* @__PURE__ */ A.jsx(Ne, { header: G.keywords[e], children: /* @__PURE__ */ A.jsx(
          We,
          {
            attribute: "keywords",
            operator: "or"
          }
        ) })
      ]
    }
  ) });
}, ew = {
  Bischoff: y1,
  Rumpf: w1,
  SuppliquePolitique: Z1
};
export {
  ew as default
};