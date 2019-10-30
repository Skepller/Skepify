! function(t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).bufferBrowserify = t()
  }
}((function() {
  return function t(e, r, n) {
    function o(u, f) {
      if (!r[u]) {
        if (!e[u]) {
          var s = "function" == typeof require && require;
          if (!f && s) return s(u, !0);
          if (i) return i(u, !0);
          var a = new Error("Cannot find module '" + u + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var c = r[u] = {
          exports: {}
        };
        e[u][0].call(c.exports, (function(t) {
          return o(e[u][1][t] || t)
        }), c, c.exports, t, e, r, n)
      }
      return r[u].exports
    }
    for (var i = "function" == typeof require && require, u = 0; u < n.length; u++) o(n[u]);
    return o
  }({
    1: [function(t, e, r) {
      (function(r) {
        "use strict";
        var n = t("object-assign");
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        function o(t, e) {
          if (t === e) return 0;
          for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
            if (t[o] !== e[o]) {
              r = t[o], n = e[o];
              break
            } return r < n ? -1 : n < r ? 1 : 0
        }

        function i(t) {
          return r.Buffer && "function" == typeof r.Buffer.isBuffer ? r.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
        }
        var u = t("util/"),
          f = Object.prototype.hasOwnProperty,
          s = Array.prototype.slice,
          a = "foo" === function() {}.name;

        function c(t) {
          return Object.prototype.toString.call(t)
        }

        function l(t) {
          return !i(t) && ("function" == typeof r.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer))))
        }
        var h = e.exports = w,
          p = /\s*function\s+([^\(\s]*)\s*/;

        function g(t) {
          if (u.isFunction(t)) {
            if (a) return t.name;
            var e = t.toString().match(p);
            return e && e[1]
          }
        }

        function y(t, e) {
          return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
        }

        function d(t) {
          if (a || !u.isFunction(t)) return u.inspect(t);
          var e = g(t);
          return "[Function" + (e ? ": " + e : "") + "]"
        }

        function b(t, e, r, n, o) {
          throw new h.AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: n,
            stackStartFunction: o
          })
        }

        function w(t, e) {
          t || b(t, !0, e, "==", h.ok)
        }

        function v(t, e, r, n) {
          if (t === e) return !0;
          if (i(t) && i(e)) return 0 === o(t, e);
          if (u.isDate(t) && u.isDate(e)) return t.getTime() === e.getTime();
          if (u.isRegExp(t) && u.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
          if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
            if (l(t) && l(e) && c(t) === c(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === o(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
            if (i(t) !== i(e)) return !1;
            var f = (n = n || {
              actual: [],
              expected: []
            }).actual.indexOf(t);
            return -1 !== f && f === n.expected.indexOf(e) || (n.actual.push(t), n.expected.push(e), function(t, e, r, n) {
              if (null == t || null == e) return !1;
              if (u.isPrimitive(t) || u.isPrimitive(e)) return t === e;
              if (r && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
              var o = m(t),
                i = m(e);
              if (o && !i || !o && i) return !1;
              if (o) return t = s.call(t), e = s.call(e), v(t, e, r);
              var f, a, c = B(t),
                l = B(e);
              if (c.length !== l.length) return !1;
              for (c.sort(), l.sort(), a = c.length - 1; a >= 0; a--)
                if (c[a] !== l[a]) return !1;
              for (a = c.length - 1; a >= 0; a--)
                if (f = c[a], !v(t[f], e[f], r, n)) return !1;
              return !0
            }(t, e, r, n))
          }
          return r ? t === e : t == e
        }

        function m(t) {
          return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function E(t, e) {
          if (!t || !e) return !1;
          if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
          try {
            if (t instanceof e) return !0
          } catch (t) {}
          return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
        }

        function A(t, e, r, n) {
          var o;
          if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
          "string" == typeof r && (n = r, r = null), o = function(t) {
            var e;
            try {
              t()
            } catch (t) {
              e = t
            }
            return e
          }(e), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), t && !o && b(o, r, "Missing expected exception" + n);
          var i = "string" == typeof n,
            f = !t && o && !r;
          if ((!t && u.isError(o) && i && E(o, r) || f) && b(o, r, "Got unwanted exception" + n), t && o && r && !E(o, r) || !t && o) throw o
        }
        h.AssertionError = function(t) {
          this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function(t) {
            return y(d(t.actual), 128) + " " + t.operator + " " + y(d(t.expected), 128)
          }(this), this.generatedMessage = !0);
          var e = t.stackStartFunction || b;
          if (Error.captureStackTrace) Error.captureStackTrace(this, e);
          else {
            var r = new Error;
            if (r.stack) {
              var n = r.stack,
                o = g(e),
                i = n.indexOf("\n" + o);
              if (i >= 0) {
                var u = n.indexOf("\n", i + 1);
                n = n.substring(u + 1)
              }
              this.stack = n
            }
          }
        }, u.inherits(h.AssertionError, Error), h.fail = b, h.ok = w, h.equal = function(t, e, r) {
          t != e && b(t, e, r, "==", h.equal)
        }, h.notEqual = function(t, e, r) {
          t == e && b(t, e, r, "!=", h.notEqual)
        }, h.deepEqual = function(t, e, r) {
          v(t, e, !1) || b(t, e, r, "deepEqual", h.deepEqual)
        }, h.deepStrictEqual = function(t, e, r) {
          v(t, e, !0) || b(t, e, r, "deepStrictEqual", h.deepStrictEqual)
        }, h.notDeepEqual = function(t, e, r) {
          v(t, e, !1) && b(t, e, r, "notDeepEqual", h.notDeepEqual)
        }, h.notDeepStrictEqual = function t(e, r, n) {
          v(e, r, !0) && b(e, r, n, "notDeepStrictEqual", t)
        }, h.strictEqual = function(t, e, r) {
          t !== e && b(t, e, r, "===", h.strictEqual)
        }, h.notStrictEqual = function(t, e, r) {
          t === e && b(t, e, r, "!==", h.notStrictEqual)
        }, h.throws = function(t, e, r) {
          A(!0, t, e, r)
        }, h.doesNotThrow = function(t, e, r) {
          A(!1, t, e, r)
        }, h.ifError = function(t) {
          if (t) throw t
        }, h.strict = n((function t(e, r) {
          e || b(e, !0, r, "==", t)
        }), h, {
          equal: h.strictEqual,
          deepEqual: h.deepStrictEqual,
          notEqual: h.notStrictEqual,
          notDeepEqual: h.notDeepStrictEqual
        }), h.strict.strict = h.strict;
        var B = Object.keys || function(t) {
          var e = [];
          for (var r in t) f.call(t, r) && e.push(r);
          return e
        }
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
      "object-assign": 8,
      "util/": 4
    }],
    2: [function(t, e, r) {
      "function" == typeof Object.create ? e.exports = function(t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })
      } : e.exports = function(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
      }
    }, {}],
    3: [function(t, e, r) {
      e.exports = function(t) {
        return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
      }
    }, {}],
    4: [function(t, e, r) {
      (function(e, n) {
        var o = /%[sdj%]/g;
        r.format = function(t) {
          if (!b(t)) {
            for (var e = [], r = 0; r < arguments.length; r++) e.push(f(arguments[r]));
            return e.join(" ")
          }
          r = 1;
          for (var n = arguments, i = n.length, u = String(t).replace(o, (function(t) {
              if ("%%" === t) return "%";
              if (r >= i) return t;
              switch (t) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++])
                  } catch (t) {
                    return "[Circular]"
                  }
                  default:
                    return t
              }
            })), s = n[r]; r < i; s = n[++r]) y(s) || !m(s) ? u += " " + s : u += " " + f(s);
          return u
        }, r.deprecate = function(t, o) {
          if (w(n.process)) return function() {
            return r.deprecate(t, o).apply(this, arguments)
          };
          if (!0 === e.noDeprecation) return t;
          var i = !1;
          return function() {
            if (!i) {
              if (e.throwDeprecation) throw new Error(o);
              e.traceDeprecation ? console.trace(o) : console.error(o), i = !0
            }
            return t.apply(this, arguments)
          }
        };
        var i, u = {};

        function f(t, e) {
          var n = {
            seen: [],
            stylize: a
          };
          return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(e) ? n.showHidden = e : e && r._extend(n, e), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = s), c(n, t, n.depth)
        }

        function s(t, e) {
          var r = f.styles[e];
          return r ? "[" + f.colors[r][0] + "m" + t + "[" + f.colors[r][1] + "m" : t
        }

        function a(t, e) {
          return t
        }

        function c(t, e, n) {
          if (t.customInspect && e && B(e.inspect) && e.inspect !== r.inspect && (!e.constructor || e.constructor.prototype !== e)) {
            var o = e.inspect(n, t);
            return b(o) || (o = c(t, o, n)), o
          }
          var i = function(t, e) {
            if (w(e)) return t.stylize("undefined", "undefined");
            if (b(e)) {
              var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return t.stylize(r, "string")
            }
            if (d(e)) return t.stylize("" + e, "number");
            if (g(e)) return t.stylize("" + e, "boolean");
            if (y(e)) return t.stylize("null", "null")
          }(t, e);
          if (i) return i;
          var u = Object.keys(e),
            f = function(t) {
              var e = {};
              return t.forEach((function(t, r) {
                e[t] = !0
              })), e
            }(u);
          if (t.showHidden && (u = Object.getOwnPropertyNames(e)), A(e) && (u.indexOf("message") >= 0 || u.indexOf("description") >= 0)) return l(e);
          if (0 === u.length) {
            if (B(e)) {
              var s = e.name ? ": " + e.name : "";
              return t.stylize("[Function" + s + "]", "special")
            }
            if (v(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
            if (E(e)) return t.stylize(Date.prototype.toString.call(e), "date");
            if (A(e)) return l(e)
          }
          var a, m = "",
            S = !1,
            k = ["{", "}"];
          (p(e) && (S = !0, k = ["[", "]"]), B(e)) && (m = " [Function" + (e.name ? ": " + e.name : "") + "]");
          return v(e) && (m = " " + RegExp.prototype.toString.call(e)), E(e) && (m = " " + Date.prototype.toUTCString.call(e)), A(e) && (m = " " + l(e)), 0 !== u.length || S && 0 != e.length ? n < 0 ? v(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), a = S ? function(t, e, r, n, o) {
            for (var i = [], u = 0, f = e.length; u < f; ++u) x(e, String(u)) ? i.push(h(t, e, r, n, String(u), !0)) : i.push("");
            return o.forEach((function(o) {
              o.match(/^\d+$/) || i.push(h(t, e, r, n, o, !0))
            })), i
          }(t, e, n, f, u) : u.map((function(r) {
            return h(t, e, n, f, r, S)
          })), t.seen.pop(), function(t, e, r) {
            if (t.reduce((function(t, e) {
                return 0, e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
              }), 0) > 60) return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];
            return r[0] + e + " " + t.join(", ") + " " + r[1]
          }(a, m, k)) : k[0] + m + k[1]
        }

        function l(t) {
          return "[" + Error.prototype.toString.call(t) + "]"
        }

        function h(t, e, r, n, o, i) {
          var u, f, s;
          if ((s = Object.getOwnPropertyDescriptor(e, o) || {
              value: e[o]
            }).get ? f = s.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : s.set && (f = t.stylize("[Setter]", "special")), x(n, o) || (u = "[" + o + "]"), f || (t.seen.indexOf(s.value) < 0 ? (f = y(r) ? c(t, s.value, null) : c(t, s.value, r - 1)).indexOf("\n") > -1 && (f = i ? f.split("\n").map((function(t) {
              return "  " + t
            })).join("\n").substr(2) : "\n" + f.split("\n").map((function(t) {
              return "   " + t
            })).join("\n")) : f = t.stylize("[Circular]", "special")), w(u)) {
            if (i && o.match(/^\d+$/)) return f;
            (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u = u.substr(1, u.length - 2), u = t.stylize(u, "name")) : (u = u.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u = t.stylize(u, "string"))
          }
          return u + ": " + f
        }

        function p(t) {
          return Array.isArray(t)
        }

        function g(t) {
          return "boolean" == typeof t
        }

        function y(t) {
          return null === t
        }

        function d(t) {
          return "number" == typeof t
        }

        function b(t) {
          return "string" == typeof t
        }

        function w(t) {
          return void 0 === t
        }

        function v(t) {
          return m(t) && "[object RegExp]" === S(t)
        }

        function m(t) {
          return "object" == typeof t && null !== t
        }

        function E(t) {
          return m(t) && "[object Date]" === S(t)
        }

        function A(t) {
          return m(t) && ("[object Error]" === S(t) || t instanceof Error)
        }

        function B(t) {
          return "function" == typeof t
        }

        function S(t) {
          return Object.prototype.toString.call(t)
        }

        function k(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10)
        }
        r.debuglog = function(t) {
          if (w(i) && (i = e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !u[t])
            if (new RegExp("\\b" + t + "\\b", "i").test(i)) {
              var n = e.pid;
              u[t] = function() {
                var e = r.format.apply(r, arguments);
                console.error("%s %d: %s", t, n, e)
              }
            } else u[t] = function() {};
          return u[t]
        }, r.inspect = f, f.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }, f.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }, r.isArray = p, r.isBoolean = g, r.isNull = y, r.isNullOrUndefined = function(t) {
          return null == t
        }, r.isNumber = d, r.isString = b, r.isSymbol = function(t) {
          return "symbol" == typeof t
        }, r.isUndefined = w, r.isRegExp = v, r.isObject = m, r.isDate = E, r.isError = A, r.isFunction = B, r.isPrimitive = function(t) {
          return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }, r.isBuffer = t("./support/isBuffer");
        var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function I() {
          var t = new Date,
            e = [k(t.getHours()), k(t.getMinutes()), k(t.getSeconds())].join(":");
          return [t.getDate(), O[t.getMonth()], e].join(" ")
        }

        function x(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }
        r.log = function() {
          console.log("%s - %s", I(), r.format.apply(r, arguments))
        }, r.inherits = t("inherits"), r._extend = function(t, e) {
          if (!e || !m(e)) return t;
          for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
          return t
        }
      }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
      "./support/isBuffer": 3,
      _process: 9,
      inherits: 2
    }],
    5: [function(t, e, r) {
      "use strict";
      r.byteLength = function(t) {
        var e = a(t),
          r = e[0],
          n = e[1];
        return 3 * (r + n) / 4 - n
      }, r.toByteArray = function(t) {
        var e, r, n = a(t),
          u = n[0],
          f = n[1],
          s = new i(function(t, e, r) {
            return 3 * (e + r) / 4 - r
          }(0, u, f)),
          c = 0,
          l = f > 0 ? u - 4 : u;
        for (r = 0; r < l; r += 4) e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = 255 & e;
        2 === f && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, s[c++] = 255 & e);
        1 === f && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = 255 & e);
        return s
      }, r.fromByteArray = function(t) {
        for (var e, r = t.length, o = r % 3, i = [], u = 0, f = r - o; u < f; u += 16383) i.push(c(t, u, u + 16383 > f ? f : u + 16383));
        1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
        return i.join("")
      };
      for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, s = u.length; f < s; ++f) n[f] = u[f], o[u.charCodeAt(f)] = f;

      function a(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
      }

      function c(t, e, r) {
        for (var o, i, u = [], f = e; f < r; f += 3) o = (t[f] << 16 & 16711680) + (t[f + 1] << 8 & 65280) + (255 & t[f + 2]), u.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
        return u.join("")
      }
      o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, {}],
    6: [function(t, e, r) {
      (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        "use strict";
        var n = t("base64-js"),
          o = t("ieee754"),
          i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        r.Buffer = e, r.SlowBuffer = function(t) {
          +t != t && (t = 0);
          return e.alloc(+t)
        }, r.INSPECT_MAX_BYTES = 50;
        var u = 2147483647;

        function f(t) {
          if (t > u) throw new RangeError('The value "' + t + '" is invalid for option "size"');
          var r = new Uint8Array(t);
          return Object.setPrototypeOf(r, e.prototype), r
        }

        function e(t, e, r) {
          if ("number" == typeof t) {
            if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
            return c(t)
          }
          return s(t, e, r)
        }

        function s(t, r, n) {
          if ("string" == typeof t) return function(t, r) {
            "string" == typeof r && "" !== r || (r = "utf8");
            if (!e.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            var n = 0 | p(t, r),
              o = f(n),
              i = o.write(t, r);
            i !== n && (o = o.slice(0, i));
            return o
          }(t, r);
          if (ArrayBuffer.isView(t)) return l(t);
          if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
          if (D(t, ArrayBuffer) || t && D(t.buffer, ArrayBuffer)) return function(t, r, n) {
            if (r < 0 || t.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < r + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var o;
            o = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
            return Object.setPrototypeOf(o, e.prototype), o
          }(t, r, n);
          if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
          var o = t.valueOf && t.valueOf();
          if (null != o && o !== t) return e.from(o, r, n);
          var i = function(t) {
            if (e.isBuffer(t)) {
              var r = 0 | h(t.length),
                n = f(r);
              return 0 === n.length ? n : (t.copy(n, 0, 0, r), n)
            }
            if (void 0 !== t.length) return "number" != typeof t.length || z(t.length) ? f(0) : l(t);
            if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
          }(t);
          if (i) return i;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return e.from(t[Symbol.toPrimitive]("string"), r, n);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
        }

        function a(t) {
          if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
          if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
        }

        function c(t) {
          return a(t), f(t < 0 ? 0 : 0 | h(t))
        }

        function l(t) {
          for (var e = t.length < 0 ? 0 : 0 | h(t.length), r = f(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
          return r
        }

        function h(t) {
          if (t >= u) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
          return 0 | t
        }

        function p(t, r) {
          if (e.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || D(t, ArrayBuffer)) return t.byteLength;
          if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
          var n = t.length,
            o = arguments.length > 2 && !0 === arguments[2];
          if (!o && 0 === n) return 0;
          for (var i = !1;;) switch (r) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return _(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return P(t).length;
            default:
              if (i) return o ? -1 : _(t).length;
              r = ("" + r).toLowerCase(), i = !0
          }
        }

        function g(t, e, r) {
          var n = !1;
          if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
          if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8");;) switch (t) {
            case "hex":
              return T(this, e, r);
            case "utf8":
            case "utf-8":
              return k(this, e, r);
            case "ascii":
              return I(this, e, r);
            case "latin1":
            case "binary":
              return x(this, e, r);
            case "base64":
              return S(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return j(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              t = (t + "").toLowerCase(), n = !0
          }
        }

        function y(t, e, r) {
          var n = t[e];
          t[e] = t[r], t[r] = n
        }

        function d(t, r, n, o, i) {
          if (0 === t.length) return -1;
          if ("string" == typeof n ? (o = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), z(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
            if (i) return -1;
            n = t.length - 1
          } else if (n < 0) {
            if (!i) return -1;
            n = 0
          }
          if ("string" == typeof r && (r = e.from(r, o)), e.isBuffer(r)) return 0 === r.length ? -1 : b(t, r, n, o, i);
          if ("number" == typeof r) return r &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, n) : Uint8Array.prototype.lastIndexOf.call(t, r, n) : b(t, [r], n, o, i);
          throw new TypeError("val must be string, number or Buffer")
        }

        function b(t, e, r, n, o) {
          var i, u = 1,
            f = t.length,
            s = e.length;
          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (t.length < 2 || e.length < 2) return -1;
            u = 2, f /= 2, s /= 2, r /= 2
          }

          function a(t, e) {
            return 1 === u ? t[e] : t.readUInt16BE(e * u)
          }
          if (o) {
            var c = -1;
            for (i = r; i < f; i++)
              if (a(t, i) === a(e, -1 === c ? 0 : i - c)) {
                if (-1 === c && (c = i), i - c + 1 === s) return c * u
              } else -1 !== c && (i -= i - c), c = -1
          } else
            for (r + s > f && (r = f - s), i = r; i >= 0; i--) {
              for (var l = !0, h = 0; h < s; h++)
                if (a(t, i + h) !== a(e, h)) {
                  l = !1;
                  break
                } if (l) return i
            }
          return -1
        }

        function w(t, e, r, n) {
          r = Number(r) || 0;
          var o = t.length - r;
          n ? (n = Number(n)) > o && (n = o) : n = o;
          var i = e.length;
          n > i / 2 && (n = i / 2);
          for (var u = 0; u < n; ++u) {
            var f = parseInt(e.substr(2 * u, 2), 16);
            if (z(f)) return u;
            t[r + u] = f
          }
          return u
        }

        function v(t, e, r, n) {
          return q(_(e, t.length - r), t, r, n)
        }

        function m(t, e, r, n) {
          return q(function(t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e
          }(e), t, r, n)
        }

        function E(t, e, r, n) {
          return m(t, e, r, n)
        }

        function A(t, e, r, n) {
          return q(P(e), t, r, n)
        }

        function B(t, e, r, n) {
          return q(function(t, e) {
            for (var r, n, o, i = [], u = 0; u < t.length && !((e -= 2) < 0); ++u) r = t.charCodeAt(u), n = r >> 8, o = r % 256, i.push(o), i.push(n);
            return i
          }(e, t.length - r), t, r, n)
        }

        function S(t, e, r) {
          return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
        }

        function k(t, e, r) {
          r = Math.min(t.length, r);
          for (var n = [], o = e; o < r;) {
            var i, u, f, s, a = t[o],
              c = null,
              l = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
            if (o + l <= r) switch (l) {
              case 1:
                a < 128 && (c = a);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) && (s = (31 & a) << 6 | 63 & i) > 127 && (c = s);
                break;
              case 3:
                i = t[o + 1], u = t[o + 2], 128 == (192 & i) && 128 == (192 & u) && (s = (15 & a) << 12 | (63 & i) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (c = s);
                break;
              case 4:
                i = t[o + 1], u = t[o + 2], f = t[o + 3], 128 == (192 & i) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & a) << 18 | (63 & i) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (c = s)
            }
            null === c ? (c = 65533, l = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), o += l
          }
          return function(t) {
            var e = t.length;
            if (e <= O) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;
            for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += O));
            return r
          }(n)
        }
        r.kMaxLength = u, e.TYPED_ARRAY_SUPPORT = function() {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function() {
                  return 42
                }
              };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
          } catch (t) {
            return !1
          }
        }(), e.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(e.prototype, "parent", {
          enumerable: !0,
          get: function() {
            if (e.isBuffer(this)) return this.buffer
          }
        }), Object.defineProperty(e.prototype, "offset", {
          enumerable: !0,
          get: function() {
            if (e.isBuffer(this)) return this.byteOffset
          }
        }), "undefined" != typeof Symbol && null != Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), e.poolSize = 8192, e.from = function(t, e, r) {
          return s(t, e, r)
        }, Object.setPrototypeOf(e.prototype, Uint8Array.prototype), Object.setPrototypeOf(e, Uint8Array), e.alloc = function(t, e, r) {
          return function(t, e, r) {
            return a(t), t <= 0 ? f(t) : void 0 !== e ? "string" == typeof r ? f(t).fill(e, r) : f(t).fill(e) : f(t)
          }(t, e, r)
        }, e.allocUnsafe = function(t) {
          return c(t)
        }, e.allocUnsafeSlow = function(t) {
          return c(t)
        }, e.isBuffer = function(t) {
          return null != t && !0 === t._isBuffer && t !== e.prototype
        }, e.compare = function(t, r) {
          if (D(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)), D(r, Uint8Array) && (r = e.from(r, r.offset, r.byteLength)), !e.isBuffer(t) || !e.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t === r) return 0;
          for (var n = t.length, o = r.length, i = 0, u = Math.min(n, o); i < u; ++i)
            if (t[i] !== r[i]) {
              n = t[i], o = r[i];
              break
            } return n < o ? -1 : o < n ? 1 : 0
        }, e.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1
          }
        }, e.concat = function(t, r) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return e.alloc(0);
          var n;
          if (void 0 === r)
            for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
          var o = e.allocUnsafe(r),
            i = 0;
          for (n = 0; n < t.length; ++n) {
            var u = t[n];
            if (D(u, Uint8Array) && (u = e.from(u)), !e.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
            u.copy(o, i), i += u.length
          }
          return o
        }, e.byteLength = p, e.prototype._isBuffer = !0, e.prototype.swap16 = function() {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) y(this, e, e + 1);
          return this
        }, e.prototype.swap32 = function() {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
          return this
        }, e.prototype.swap64 = function() {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
          return this
        }, e.prototype.toString = function() {
          var t = this.length;
          return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : g.apply(this, arguments)
        }, e.prototype.toLocaleString = e.prototype.toString, e.prototype.equals = function(t) {
          if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === e.compare(this, t)
        }, e.prototype.inspect = function() {
          var t = "",
            e = r.INSPECT_MAX_BYTES;
          return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
        }, i && (e.prototype[i] = e.prototype.inspect), e.prototype.compare = function(t, r, n, o, i) {
          if (D(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)), !e.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
          if (void 0 === r && (r = 0), void 0 === n && (n = t ? t.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), r < 0 || n > t.length || o < 0 || i > this.length) throw new RangeError("out of range index");
          if (o >= i && r >= n) return 0;
          if (o >= i) return -1;
          if (r >= n) return 1;
          if (this === t) return 0;
          for (var u = (i >>>= 0) - (o >>>= 0), f = (n >>>= 0) - (r >>>= 0), s = Math.min(u, f), a = this.slice(o, i), c = t.slice(r, n), l = 0; l < s; ++l)
            if (a[l] !== c[l]) {
              u = a[l], f = c[l];
              break
            } return u < f ? -1 : f < u ? 1 : 0
        }, e.prototype.includes = function(t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }, e.prototype.indexOf = function(t, e, r) {
          return d(this, t, e, r, !0)
        }, e.prototype.lastIndexOf = function(t, e, r) {
          return d(this, t, e, r, !1)
        }, e.prototype.write = function(t, e, r, n) {
          if (void 0 === e) n = "utf8", r = this.length, e = 0;
          else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
          else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
          }
          var o = this.length - e;
          if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var i = !1;;) switch (n) {
            case "hex":
              return w(this, t, e, r);
            case "utf8":
            case "utf-8":
              return v(this, t, e, r);
            case "ascii":
              return m(this, t, e, r);
            case "latin1":
            case "binary":
              return E(this, t, e, r);
            case "base64":
              return A(this, t, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return B(this, t, e, r);
            default:
              if (i) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), i = !0
          }
        }, e.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        };
        var O = 4096;

        function I(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
          return n
        }

        function x(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
          return n
        }

        function T(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          for (var o = "", i = e; i < r; ++i) o += F[t[i]];
          return o
        }

        function j(t, e, r) {
          for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
          return o
        }

        function U(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function C(t, r, n, o, i, u) {
          if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (r > i || r < u) throw new RangeError('"value" argument is out of bounds');
          if (n + o > t.length) throw new RangeError("Index out of range")
        }

        function L(t, e, r, n, o, i) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range")
        }

        function M(t, e, r, n, i) {
          return e = +e, r >>>= 0, i || L(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
        }

        function N(t, e, r, n, i) {
          return e = +e, r >>>= 0, i || L(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
        }
        e.prototype.slice = function(t, r) {
          var n = this.length;
          (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t);
          var o = this.subarray(t, r);
          return Object.setPrototypeOf(o, e.prototype), o
        }, e.prototype.readUIntLE = function(t, e, r) {
          t >>>= 0, e >>>= 0, r || U(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
          return n
        }, e.prototype.readUIntBE = function(t, e, r) {
          t >>>= 0, e >>>= 0, r || U(t, e, this.length);
          for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
          return n
        }, e.prototype.readUInt8 = function(t, e) {
          return t >>>= 0, e || U(t, 1, this.length), this[t]
        }, e.prototype.readUInt16LE = function(t, e) {
          return t >>>= 0, e || U(t, 2, this.length), this[t] | this[t + 1] << 8
        }, e.prototype.readUInt16BE = function(t, e) {
          return t >>>= 0, e || U(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, e.prototype.readUInt32LE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, e.prototype.readUInt32BE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, e.prototype.readIntLE = function(t, e, r) {
          t >>>= 0, e >>>= 0, r || U(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n
        }, e.prototype.readIntBE = function(t, e, r) {
          t >>>= 0, e >>>= 0, r || U(t, e, this.length);
          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
        }, e.prototype.readInt8 = function(t, e) {
          return t >>>= 0, e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, e.prototype.readInt16LE = function(t, e) {
          t >>>= 0, e || U(t, 2, this.length);
          var r = this[t] | this[t + 1] << 8;
          return 32768 & r ? 4294901760 | r : r
        }, e.prototype.readInt16BE = function(t, e) {
          t >>>= 0, e || U(t, 2, this.length);
          var r = this[t + 1] | this[t] << 8;
          return 32768 & r ? 4294901760 | r : r
        }, e.prototype.readInt32LE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, e.prototype.readInt32BE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, e.prototype.readFloatLE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !0, 23, 4)
        }, e.prototype.readFloatBE = function(t, e) {
          return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !1, 23, 4)
        }, e.prototype.readDoubleLE = function(t, e) {
          return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !0, 52, 8)
        }, e.prototype.readDoubleBE = function(t, e) {
          return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !1, 52, 8)
        }, e.prototype.writeUIntLE = function(t, e, r, n) {
          (t = +t, e >>>= 0, r >>>= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
            i = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
          return e + r
        }, e.prototype.writeUIntBE = function(t, e, r, n) {
          (t = +t, e >>>= 0, r >>>= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
            i = 1;
          for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
          return e + r
        }, e.prototype.writeUInt8 = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
        }, e.prototype.writeUInt16LE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
        }, e.prototype.writeUInt16BE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
        }, e.prototype.writeUInt32LE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
        }, e.prototype.writeUInt32BE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
        }, e.prototype.writeIntLE = function(t, e, r, n) {
          if (t = +t, e >>>= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            C(this, t, e, r, o - 1, -o)
          }
          var i = 0,
            u = 1,
            f = 0;
          for (this[e] = 255 & t; ++i < r && (u *= 256);) t < 0 && 0 === f && 0 !== this[e + i - 1] && (f = 1), this[e + i] = (t / u >> 0) - f & 255;
          return e + r
        }, e.prototype.writeIntBE = function(t, e, r, n) {
          if (t = +t, e >>>= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            C(this, t, e, r, o - 1, -o)
          }
          var i = r - 1,
            u = 1,
            f = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (u *= 256);) t < 0 && 0 === f && 0 !== this[e + i + 1] && (f = 1), this[e + i] = (t / u >> 0) - f & 255;
          return e + r
        }, e.prototype.writeInt8 = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, e.prototype.writeInt16LE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
        }, e.prototype.writeInt16BE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
        }, e.prototype.writeInt32LE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
        }, e.prototype.writeInt32BE = function(t, e, r) {
          return t = +t, e >>>= 0, r || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
        }, e.prototype.writeFloatLE = function(t, e, r) {
          return M(this, t, e, !0, r)
        }, e.prototype.writeFloatBE = function(t, e, r) {
          return M(this, t, e, !1, r)
        }, e.prototype.writeDoubleLE = function(t, e, r) {
          return N(this, t, e, !0, r)
        }, e.prototype.writeDoubleBE = function(t, e, r) {
          return N(this, t, e, !1, r)
        }, e.prototype.copy = function(t, r, n, o) {
          if (!e.isBuffer(t)) throw new TypeError("argument should be a Buffer");
          if (n || (n = 0), o || 0 === o || (o = this.length), r >= t.length && (r = t.length), r || (r = 0), o > 0 && o < n && (o = n), o === n) return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (r < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
          if (o < 0) throw new RangeError("sourceEnd out of bounds");
          o > this.length && (o = this.length), t.length - r < o - n && (o = t.length - r + n);
          var i = o - n;
          if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(r, n, o);
          else if (this === t && n < r && r < o)
            for (var u = i - 1; u >= 0; --u) t[u + r] = this[u + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, o), r);
          return i
        }, e.prototype.fill = function(t, r, n, o) {
          if ("string" == typeof t) {
            if ("string" == typeof r ? (o = r, r = 0, n = this.length) : "string" == typeof n && (o = n, n = this.length), void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
            if ("string" == typeof o && !e.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
            if (1 === t.length) {
              var i = t.charCodeAt(0);
              ("utf8" === o && i < 128 || "latin1" === o) && (t = i)
            }
          } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
          if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
          if (n <= r) return this;
          var u;
          if (r >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
            for (u = r; u < n; ++u) this[u] = t;
          else {
            var f = e.isBuffer(t) ? t : e.from(t, o),
              s = f.length;
            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (u = 0; u < n - r; ++u) this[u + r] = f[u % s]
          }
          return this
        };
        var R = /[^+/0-9A-Za-z-_]/g;

        function _(t, e) {
          var r;
          e = e || 1 / 0;
          for (var n = t.length, o = null, i = [], u = 0; u < n; ++u) {
            if ((r = t.charCodeAt(u)) > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue
                }
                if (u + 1 === n) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue
                }
                o = r;
                continue
              }
              if (r < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                continue
              }
              r = 65536 + (o - 55296 << 10 | r - 56320)
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, r < 128) {
              if ((e -= 1) < 0) break;
              i.push(r)
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              i.push(r >> 6 | 192, 63 & r | 128)
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
            }
          }
          return i
        }

        function P(t) {
          return n.toByteArray(function(t) {
            if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
            for (; t.length % 4 != 0;) t += "=";
            return t
          }(t))
        }

        function q(t, e, r, n) {
          for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
          return o
        }

        function D(t, e) {
          return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
        }

        function z(t) {
          return t != t
        }
        var F = function() {
          for (var t = new Array(256), e = 0; e < 16; ++e)
            for (var r = 16 * e, n = 0; n < 16; ++n) t[r + n] = "0123456789abcdef" [e] + "0123456789abcdef" [n];
          return t
        }()
      }).call(this, t("buffer").Buffer)
    }, {
      "base64-js": 5,
      buffer: 6,
      ieee754: 7
    }],
    7: [function(t, e, r) {
      r.read = function(t, e, r, n, o) {
        var i, u, f = 8 * o - n - 1,
          s = (1 << f) - 1,
          a = s >> 1,
          c = -7,
          l = r ? o - 1 : 0,
          h = r ? -1 : 1,
          p = t[e + l];
        for (l += h, i = p & (1 << -c) - 1, p >>= -c, c += f; c > 0; i = 256 * i + t[e + l], l += h, c -= 8);
        for (u = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; u = 256 * u + t[e + l], l += h, c -= 8);
        if (0 === i) i = 1 - a;
        else {
          if (i === s) return u ? NaN : 1 / 0 * (p ? -1 : 1);
          u += Math.pow(2, n), i -= a
        }
        return (p ? -1 : 1) * u * Math.pow(2, i - n)
      }, r.write = function(t, e, r, n, o, i) {
        var u, f, s, a = 8 * i - o - 1,
          c = (1 << a) - 1,
          l = c >> 1,
          h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = n ? 0 : i - 1,
          g = n ? 1 : -1,
          y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, u = c) : (u = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (e += u + l >= 1 ? h / s : h * Math.pow(2, 1 - l)) * s >= 2 && (u++, s /= 2), u + l >= c ? (f = 0, u = c) : u + l >= 1 ? (f = (e * s - 1) * Math.pow(2, o), u += l) : (f = e * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); o >= 8; t[r + p] = 255 & f, p += g, f /= 256, o -= 8);
        for (u = u << o | f, a += o; a > 0; t[r + p] = 255 & u, p += g, u /= 256, a -= 8);
        t[r + p - g] |= 128 * y
      }
    }, {}],
    8: [function(t, e, r) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      "use strict";
      var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;

      function u(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
      }
      e.exports = function() {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
          for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
          if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
              return e[t]
            })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function(t) {
            n[t] = t
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
          return !1
        }
      }() ? Object.assign : function(t, e) {
        for (var r, f, s = u(t), a = 1; a < arguments.length; a++) {
          for (var c in r = Object(arguments[a])) o.call(r, c) && (s[c] = r[c]);
          if (n) {
            f = n(r);
            for (var l = 0; l < f.length; l++) i.call(r, f[l]) && (s[f[l]] = r[f[l]])
          }
        }
        return s
      }
    }, {}],
    9: [function(t, e, r) {
      var n, o, i = e.exports = {};

      function u() {
        throw new Error("setTimeout has not been defined")
      }

      function f() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === u || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
          return n(t, 0)
        } catch (e) {
          try {
            return n.call(null, t, 0)
          } catch (e) {
            return n.call(this, t, 0)
          }
        }
      }! function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : u
        } catch (t) {
          n = u
        }
        try {
          o = "function" == typeof clearTimeout ? clearTimeout : f
        } catch (t) {
          o = f
        }
      }();
      var a, c = [],
        l = !1,
        h = -1;

      function p() {
        l && a && (l = !1, a.length ? c = a.concat(c) : h = -1, c.length && g())
      }

      function g() {
        if (!l) {
          var t = s(p);
          l = !0;
          for (var e = c.length; e;) {
            for (a = c, c = []; ++h < e;) a && a[h].run();
            h = -1, e = c.length
          }
          a = null, l = !1,
            function(t) {
              if (o === clearTimeout) return clearTimeout(t);
              if ((o === f || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
              try {
                o(t)
              } catch (e) {
                try {
                  return o.call(null, t)
                } catch (e) {
                  return o.call(this, t)
                }
              }
            }(t)
        }
      }

      function y(t, e) {
        this.fun = t, this.array = e
      }

      function d() {}
      i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new y(t, e)), 1 !== c.length || l || s(g)
      }, y.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.prependListener = d, i.prependOnceListener = d, i.listeners = function(t) {
        return []
      }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    }, {}],
    10: [function(t, e, r) {
      r.readIEEE754 = function(t, e, r, n, o) {
        var i, u, f = 8 * o - n - 1,
          s = (1 << f) - 1,
          a = s >> 1,
          c = -7,
          l = r ? 0 : o - 1,
          h = r ? 1 : -1,
          p = t[e + l];
        for (l += h, i = p & (1 << -c) - 1, p >>= -c, c += f; c > 0; i = 256 * i + t[e + l], l += h, c -= 8);
        for (u = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; u = 256 * u + t[e + l], l += h, c -= 8);
        if (0 === i) i = 1 - a;
        else {
          if (i === s) return u ? NaN : 1 / 0 * (p ? -1 : 1);
          u += Math.pow(2, n), i -= a
        }
        return (p ? -1 : 1) * u * Math.pow(2, i - n)
      }, r.writeIEEE754 = function(t, e, r, n, o, i) {
        var u, f, s, a = 8 * i - o - 1,
          c = (1 << a) - 1,
          l = c >> 1,
          h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = n ? i - 1 : 0,
          g = n ? -1 : 1,
          y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, u = c) : (u = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (e += u + l >= 1 ? h / s : h * Math.pow(2, 1 - l)) * s >= 2 && (u++, s /= 2), u + l >= c ? (f = 0, u = c) : u + l >= 1 ? (f = (e * s - 1) * Math.pow(2, o), u += l) : (f = e * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); o >= 8; t[r + p] = 255 & f, p += g, f /= 256, o -= 8);
        for (u = u << o | f, a += o; a > 0; t[r + p] = 255 & u, p += g, u /= 256, a -= 8);
        t[r + p - g] |= 128 * y
      }
    }, {}],
    11: [function(t, e, r) {
      (function(e) {
        var n;

        function e(r, o, f) {
          if (n || (n = t("assert")), !(this instanceof e)) return new e(r, o, f);
          if (this.parent = this, this.offset = 0, "base64" == o && "string" == typeof r)
            for (r = (s = r).trim ? s.trim() : s.replace(/^\s+|\s+$/g, ""); r.length % 4 != 0;) r += "=";
          var s, a;
          if ("number" == typeof f) {
            this.length = i(o);
            for (var c = 0; c < this.length; c++) this[c] = r.get(c + f)
          } else {
            switch (a = typeof r) {
              case "number":
                this.length = i(r);
                break;
              case "string":
                this.length = e.byteLength(r, o);
                break;
              case "object":
                this.length = i(r.length);
                break;
              default:
                throw new TypeError("First argument needs to be a number, array or string.")
            }
            if (function(t) {
                return u(t) || e.isBuffer(t) || t && "object" == typeof t && "number" == typeof t.length
              }(r))
              for (c = 0; c < this.length; c++) this[c] = r instanceof e ? r.readUInt8(c) : (r[c] % 256 + 256) % 256;
            else if ("string" == a) this.length = this.write(r, 0, o);
            else if ("number" === a)
              for (c = 0; c < this.length; c++) this[c] = 0
          }
        }

        function o(t, e, r) {
          return "number" != typeof t ? r : (t = ~~t) >= e ? e : t >= 0 ? t : (t += e) >= 0 ? t : 0
        }

        function i(t) {
          return (t = ~~Math.ceil(+t)) < 0 ? 0 : t
        }

        function u(t) {
          return (Array.isArray || function(t) {
            return "[object Array]" == {}.toString.apply(t)
          })(t)
        }

        function f(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function s(t) {
          for (var e = [], r = 0; r < t.length; r++)
            if (t.charCodeAt(r) <= 127) e.push(t.charCodeAt(r));
            else
              for (var n = encodeURIComponent(t.charAt(r)).substr(1).split("%"), o = 0; o < n.length; o++) e.push(parseInt(n[o], 16));
          return e
        }

        function a(e) {
          return t("base64-js").toByteArray(e)
        }

        function c(t, e, r, n) {
          for (var o = 0; o < n && !(o + r >= e.length || o >= t.length);) e[o + r] = t[o], o++;
          return o
        }

        function l(t) {
          try {
            return decodeURIComponent(t)
          } catch (t) {
            return String.fromCharCode(65533)
          }
        }

        function h(t, e, r, o) {
          var i = 0;
          return o || (n.ok("boolean" == typeof r, "missing or invalid endian"), n.ok(null != e, "missing offset"), n.ok(e + 1 < t.length, "Trying to read beyond buffer length")), e >= t.length ? 0 : (r ? (i = t[e] << 8, e + 1 < t.length && (i |= t[e + 1])) : (i = t[e], e + 1 < t.length && (i |= t[e + 1] << 8)), i)
        }

        function p(t, e, r, o) {
          var i = 0;
          return o || (n.ok("boolean" == typeof r, "missing or invalid endian"), n.ok(null != e, "missing offset"), n.ok(e + 3 < t.length, "Trying to read beyond buffer length")), e >= t.length ? 0 : (r ? (e + 1 < t.length && (i = t[e + 1] << 16), e + 2 < t.length && (i |= t[e + 2] << 8), e + 3 < t.length && (i |= t[e + 3]), i += t[e] << 24 >>> 0) : (e + 2 < t.length && (i = t[e + 2] << 16), e + 1 < t.length && (i |= t[e + 1] << 8), i |= t[e], e + 3 < t.length && (i += t[e + 3] << 24 >>> 0)), i)
        }

        function g(t, e, r, o) {
          var i;
          return o || (n.ok("boolean" == typeof r, "missing or invalid endian"), n.ok(null != e, "missing offset"), n.ok(e + 1 < t.length, "Trying to read beyond buffer length")), 32768 & (i = h(t, e, r, o)) ? -1 * (65535 - i + 1) : i
        }

        function y(t, e, r, o) {
          var i;
          return o || (n.ok("boolean" == typeof r, "missing or invalid endian"), n.ok(null != e, "missing offset"), n.ok(e + 3 < t.length, "Trying to read beyond buffer length")), 2147483648 & (i = p(t, e, r, o)) ? -1 * (4294967295 - i + 1) : i
        }

        function d(e, r, o, i) {
          return i || (n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(r + 3 < e.length, "Trying to read beyond buffer length")), t("./buffer_ieee754").readIEEE754(e, r, o, 23, 4)
        }

        function b(e, r, o, i) {
          return i || (n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(r + 7 < e.length, "Trying to read beyond buffer length")), t("./buffer_ieee754").readIEEE754(e, r, o, 52, 8)
        }

        function w(t, e) {
          n.ok("number" == typeof t, "cannot write a non-number as a number"), n.ok(t >= 0, "specified a negative value for writing an unsigned value"), n.ok(t <= e, "value is larger than maximum value for type"), n.ok(Math.floor(t) === t, "value has a fractional component")
        }

        function v(t, e, r, o, i) {
          i || (n.ok(null != e, "missing value"), n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(null != r, "missing offset"), n.ok(r + 1 < t.length, "trying to write beyond buffer length"), w(e, 65535));
          for (var u = 0; u < Math.min(t.length - r, 2); u++) t[r + u] = (e & 255 << 8 * (o ? 1 - u : u)) >>> 8 * (o ? 1 - u : u)
        }

        function m(t, e, r, o, i) {
          i || (n.ok(null != e, "missing value"), n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(null != r, "missing offset"), n.ok(r + 3 < t.length, "trying to write beyond buffer length"), w(e, 4294967295));
          for (var u = 0; u < Math.min(t.length - r, 4); u++) t[r + u] = e >>> 8 * (o ? 3 - u : u) & 255
        }

        function E(t, e, r) {
          n.ok("number" == typeof t, "cannot write a non-number as a number"), n.ok(t <= e, "value larger than maximum allowed value"), n.ok(t >= r, "value smaller than minimum allowed value"), n.ok(Math.floor(t) === t, "value has a fractional component")
        }

        function A(t, e, r) {
          n.ok("number" == typeof t, "cannot write a non-number as a number"), n.ok(t <= e, "value larger than maximum allowed value"), n.ok(t >= r, "value smaller than minimum allowed value")
        }

        function B(t, e, r, o, i) {
          i || (n.ok(null != e, "missing value"), n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(null != r, "missing offset"), n.ok(r + 1 < t.length, "Trying to write beyond buffer length"), E(e, 32767, -32768)), v(t, e >= 0 ? e : 65535 + e + 1, r, o, i)
        }

        function S(t, e, r, o, i) {
          i || (n.ok(null != e, "missing value"), n.ok("boolean" == typeof o, "missing or invalid endian"), n.ok(null != r, "missing offset"), n.ok(r + 3 < t.length, "Trying to write beyond buffer length"), E(e, 2147483647, -2147483648)), m(t, e >= 0 ? e : 4294967295 + e + 1, r, o, i)
        }

        function k(e, r, o, i, u) {
          u || (n.ok(null != r, "missing value"), n.ok("boolean" == typeof i, "missing or invalid endian"), n.ok(null != o, "missing offset"), n.ok(o + 3 < e.length, "Trying to write beyond buffer length"), A(r, 34028234663852886e22, -34028234663852886e22)), t("./buffer_ieee754").writeIEEE754(e, r, o, i, 23, 4)
        }

        function O(e, r, o, i, u) {
          u || (n.ok(null != r, "missing value"), n.ok("boolean" == typeof i, "missing or invalid endian"), n.ok(null != o, "missing offset"), n.ok(o + 7 < e.length, "Trying to write beyond buffer length"), A(r, 17976931348623157e292, -17976931348623157e292)), t("./buffer_ieee754").writeIEEE754(e, r, o, i, 52, 8)
        }
        r.Buffer = e, r.SlowBuffer = e, e.poolSize = 8192, r.INSPECT_MAX_BYTES = 50, e.prototype.get = function(t) {
          if (t < 0 || t >= this.length) throw new Error("oob");
          return this[t]
        }, e.prototype.set = function(t, e) {
          if (t < 0 || t >= this.length) throw new Error("oob");
          return this[t] = e
        }, e.byteLength = function(t, e) {
          switch (e || "utf8") {
            case "hex":
              return t.length / 2;
            case "utf8":
            case "utf-8":
              return s(t).length;
            case "ascii":
            case "binary":
              return t.length;
            case "base64":
              return a(t).length;
            default:
              throw new Error("Unknown encoding")
          }
        }, e.prototype.utf8Write = function(t, r, n) {
          return e._charsWritten = c(s(t), this, r, n)
        }, e.prototype.asciiWrite = function(t, r, n) {
          return e._charsWritten = c(function(t) {
            for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r));
            return e
          }(t), this, r, n)
        }, e.prototype.binaryWrite = e.prototype.asciiWrite, e.prototype.base64Write = function(t, r, n) {
          return e._charsWritten = c(a(t), this, r, n)
        }, e.prototype.base64Slice = function(e, r) {
          var n = Array.prototype.slice.apply(this, arguments);
          return t("base64-js").fromByteArray(n)
        }, e.prototype.utf8Slice = function() {
          for (var t = Array.prototype.slice.apply(this, arguments), e = "", r = "", n = 0; n < t.length;) t[n] <= 127 ? (e += l(r) + String.fromCharCode(t[n]), r = "") : r += "%" + t[n].toString(16), n++;
          return e + l(r)
        }, e.prototype.asciiSlice = function() {
          for (var t = Array.prototype.slice.apply(this, arguments), e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
          return e
        }, e.prototype.binarySlice = e.prototype.asciiSlice, e.prototype.inspect = function() {
          for (var t = [], e = this.length, n = 0; n < e; n++)
            if (t[n] = f(this[n]), n == r.INSPECT_MAX_BYTES) {
              t[n + 1] = "...";
              break
            } return "<Buffer " + t.join(" ") + ">"
        }, e.prototype.hexSlice = function(t, e) {
          var r = this.length;
          (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
          for (var n = "", o = t; o < e; o++) n += f(this[o]);
          return n
        }, e.prototype.toString = function(t, e, r) {
          if (t = String(t || "utf8").toLowerCase(), e = +e || 0, void 0 === r && (r = this.length), +r == e) return "";
          switch (t) {
            case "hex":
              return this.hexSlice(e, r);
            case "utf8":
            case "utf-8":
              return this.utf8Slice(e, r);
            case "ascii":
              return this.asciiSlice(e, r);
            case "binary":
              return this.binarySlice(e, r);
            case "base64":
              return this.base64Slice(e, r);
            case "ucs2":
            case "ucs-2":
              return this.ucs2Slice(e, r);
            default:
              throw new Error("Unknown encoding")
          }
        }, e.prototype.hexWrite = function(t, r, n) {
          r = +r || 0;
          var o = this.length - r;
          n ? (n = +n) > o && (n = o) : n = o;
          var i = t.length;
          if (i % 2) throw new Error("Invalid hex string");
          n > i / 2 && (n = i / 2);
          for (var u = 0; u < n; u++) {
            var f = parseInt(t.substr(2 * u, 2), 16);
            if (isNaN(f)) throw new Error("Invalid hex string");
            this[r + u] = f
          }
          return e._charsWritten = 2 * u, u
        }, e.prototype.write = function(t, e, r, n) {
          if (isFinite(e)) isFinite(r) || (n = r, r = void 0);
          else {
            var o = n;
            n = e, e = r, r = o
          }
          e = +e || 0;
          var i = this.length - e;
          switch (r ? (r = +r) > i && (r = i) : r = i, n = String(n || "utf8").toLowerCase()) {
            case "hex":
              return this.hexWrite(t, e, r);
            case "utf8":
            case "utf-8":
              return this.utf8Write(t, e, r);
            case "ascii":
              return this.asciiWrite(t, e, r);
            case "binary":
              return this.binaryWrite(t, e, r);
            case "base64":
              return this.base64Write(t, e, r);
            case "ucs2":
            case "ucs-2":
              return this.ucs2Write(t, e, r);
            default:
              throw new Error("Unknown encoding")
          }
        }, e.prototype.slice = function(t, r) {
          var n = this.length;
          return t = o(t, n, 0), r = o(r, n, n), new e(this, r - t, +t)
        }, e.prototype.copy = function(t, e, r, o) {
          if (r || (r = 0), (void 0 === o || isNaN(o)) && (o = this.length), e || (e = 0), o < r) throw new Error("sourceEnd < sourceStart");
          if (o === r) return 0;
          if (0 == t.length || 0 == this.length) return 0;
          if (e < 0 || e >= t.length) throw new Error("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new Error("sourceStart out of bounds");
          if (o < 0 || o > this.length) throw new Error("sourceEnd out of bounds");
          o > this.length && (o = this.length), t.length - e < o - r && (o = t.length - e + r);
          for (var i = [], u = r; u < o; u++) n.ok(void 0 !== this[u], "copying undefined buffer bytes!"), i.push(this[u]);
          for (u = e; u < e + i.length; u++) t[u] = i[u - e]
        }, e.prototype.fill = function(t, e, r) {
          if (t || (t = 0), e || (e = 0), r || (r = this.length), "string" == typeof t && (t = t.charCodeAt(0)), "number" != typeof t || isNaN(t)) throw new Error("value is not a number");
          if (r < e) throw new Error("end < start");
          if (r === e) return 0;
          if (0 == this.length) return 0;
          if (e < 0 || e >= this.length) throw new Error("start out of bounds");
          if (r < 0 || r > this.length) throw new Error("end out of bounds");
          for (var n = e; n < r; n++) this[n] = t
        }, e.isBuffer = function(t) {
          return t instanceof e
        }, e.concat = function(t, r) {
          if (!u(t)) throw new Error("Usage: Buffer.concat(list, [totalLength])\n       list should be an Array.");
          if (0 === t.length) return new e(0);
          if (1 === t.length) return t[0];
          if ("number" != typeof r) {
            r = 0;
            for (var n = 0; n < t.length; n++) {
              r += (f = t[n]).length
            }
          }
          var o = new e(r),
            i = 0;
          for (n = 0; n < t.length; n++) {
            var f;
            (f = t[n]).copy(o, i), i += f.length
          }
          return o
        }, e.isEncoding = function(t) {
          switch ((t + "").toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1
          }
        }, e.prototype.readUInt8 = function(t, e) {
          if (e || (n.ok(null != t, "missing offset"), n.ok(t < this.length, "Trying to read beyond buffer length")), !(t >= this.length)) return this[t]
        }, e.prototype.readUInt16LE = function(t, e) {
          return h(this, t, !1, e)
        }, e.prototype.readUInt16BE = function(t, e) {
          return h(this, t, !0, e)
        }, e.prototype.readUInt32LE = function(t, e) {
          return p(this, t, !1, e)
        }, e.prototype.readUInt32BE = function(t, e) {
          return p(this, t, !0, e)
        }, e.prototype.readInt8 = function(t, e) {
          if (e || (n.ok(null != t, "missing offset"), n.ok(t < this.length, "Trying to read beyond buffer length")), !(t >= this.length)) return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, e.prototype.readInt16LE = function(t, e) {
          return g(this, t, !1, e)
        }, e.prototype.readInt16BE = function(t, e) {
          return g(this, t, !0, e)
        }, e.prototype.readInt32LE = function(t, e) {
          return y(this, t, !1, e)
        }, e.prototype.readInt32BE = function(t, e) {
          return y(this, t, !0, e)
        }, e.prototype.readFloatLE = function(t, e) {
          return d(this, t, !1, e)
        }, e.prototype.readFloatBE = function(t, e) {
          return d(this, t, !0, e)
        }, e.prototype.readDoubleLE = function(t, e) {
          return b(this, t, !1, e)
        }, e.prototype.readDoubleBE = function(t, e) {
          return b(this, t, !0, e)
        }, e.prototype.writeUInt8 = function(t, e, r) {
          r || (n.ok(null != t, "missing value"), n.ok(null != e, "missing offset"), n.ok(e < this.length, "trying to write beyond buffer length"), w(t, 255)), e < this.length && (this[e] = t)
        }, e.prototype.writeUInt16LE = function(t, e, r) {
          v(this, t, e, !1, r)
        }, e.prototype.writeUInt16BE = function(t, e, r) {
          v(this, t, e, !0, r)
        }, e.prototype.writeUInt32LE = function(t, e, r) {
          m(this, t, e, !1, r)
        }, e.prototype.writeUInt32BE = function(t, e, r) {
          m(this, t, e, !0, r)
        }, e.prototype.writeInt8 = function(t, e, r) {
          r || (n.ok(null != t, "missing value"), n.ok(null != e, "missing offset"), n.ok(e < this.length, "Trying to write beyond buffer length"), E(t, 127, -128)), t >= 0 ? this.writeUInt8(t, e, r) : this.writeUInt8(255 + t + 1, e, r)
        }, e.prototype.writeInt16LE = function(t, e, r) {
          B(this, t, e, !1, r)
        }, e.prototype.writeInt16BE = function(t, e, r) {
          B(this, t, e, !0, r)
        }, e.prototype.writeInt32LE = function(t, e, r) {
          S(this, t, e, !1, r)
        }, e.prototype.writeInt32BE = function(t, e, r) {
          S(this, t, e, !0, r)
        }, e.prototype.writeFloatLE = function(t, e, r) {
          k(this, t, e, !1, r)
        }, e.prototype.writeFloatBE = function(t, e, r) {
          k(this, t, e, !0, r)
        }, e.prototype.writeDoubleLE = function(t, e, r) {
          O(this, t, e, !1, r)
        }, e.prototype.writeDoubleBE = function(t, e, r) {
          O(this, t, e, !0, r)
        }
      }).call(this, t("buffer").Buffer)
    }, {
      "./buffer_ieee754": 10,
      assert: 1,
      "base64-js": 12,
      buffer: 6
    }],
    12: [function(t, e, r) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      ! function(t) {
        "use strict";
        var e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          r = "+".charCodeAt(0),
          o = "/".charCodeAt(0),
          i = "0".charCodeAt(0),
          u = "a".charCodeAt(0),
          f = "A".charCodeAt(0),
          s = "-".charCodeAt(0),
          a = "_".charCodeAt(0);

        function c(t) {
          var e = t.charCodeAt(0);
          return e === r || e === s ? 62 : e === o || e === a ? 63 : e < i ? -1 : e < i + 10 ? e - i + 26 + 26 : e < f + 26 ? e - f : e < u + 26 ? e - u + 26 : void 0
        }
        t.toByteArray = function(t) {
          var r, n, o, i, u, f;
          if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var s = t.length;
          u = "=" === t.charAt(s - 2) ? 2 : "=" === t.charAt(s - 1) ? 1 : 0, f = new e(3 * t.length / 4 - u), o = u > 0 ? t.length - 4 : t.length;
          var a = 0;

          function l(t) {
            f[a++] = t
          }
          for (r = 0, n = 0; r < o; r += 4, n += 3) l((16711680 & (i = c(t.charAt(r)) << 18 | c(t.charAt(r + 1)) << 12 | c(t.charAt(r + 2)) << 6 | c(t.charAt(r + 3)))) >> 16), l((65280 & i) >> 8), l(255 & i);
          return 2 === u ? l(255 & (i = c(t.charAt(r)) << 2 | c(t.charAt(r + 1)) >> 4)) : 1 === u && (l((i = c(t.charAt(r)) << 10 | c(t.charAt(r + 1)) << 4 | c(t.charAt(r + 2)) >> 2) >> 8 & 255), l(255 & i)), f
        }, t.fromByteArray = function(t) {
          var e, r, o, i, u = t.length % 3,
            f = "";

          function s(t) {
            return n.charAt(t)
          }
          for (e = 0, o = t.length - u; e < o; e += 3) r = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2], f += s((i = r) >> 18 & 63) + s(i >> 12 & 63) + s(i >> 6 & 63) + s(63 & i);
          switch (u) {
            case 1:
              f += s((r = t[t.length - 1]) >> 2), f += s(r << 4 & 63), f += "==";
              break;
            case 2:
              f += s((r = (t[t.length - 2] << 8) + t[t.length - 1]) >> 10), f += s(r >> 4 & 63), f += s(r << 2 & 63), f += "="
          }
          return f
        }
      }(void 0 === r ? this.base64js = {} : r)
    }, {}]
  }, {}, [11])(11)
}));
