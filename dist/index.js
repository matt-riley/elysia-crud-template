// @bun
// node_modules/elysia/dist/bun/index.js
var aY = Object.create;
var { defineProperty: S8, getPrototypeOf: eY, getOwnPropertyNames: $X } = Object;
var WX = Object.prototype.hasOwnProperty;
var Q1 = ($, W, Y) => {
  Y = $ != null ? aY(eY($)) : {};
  const X = W || !$ || !$.__esModule ? S8(Y, "default", { value: $, enumerable: true }) : Y;
  for (let Z of $X($))
    if (!WX.call(X, Z))
      S8(X, Z, { get: () => $[Z], enumerable: true });
  return X;
};
var H0 = ($, W) => () => (W || $((W = { exports: {} }).exports, W), W.exports);
var b8 = H0((j7, r$) => {
  var s1 = function() {
  }, XX = function($, W, Y) {
    this.fn = $, this.context = W, this.once = Y || false;
  }, I8 = function($, W, Y, X, Z) {
    if (typeof Y !== "function")
      throw new TypeError("The listener must be a function");
    var Q = new XX(Y, X || $, Z), J = x0 ? x0 + W : W;
    if (!$._events[J])
      $._events[J] = Q, $._eventsCount++;
    else if (!$._events[J].fn)
      $._events[J].push(Q);
    else
      $._events[J] = [$._events[J], Q];
    return $;
  }, K$ = function($, W) {
    if (--$._eventsCount === 0)
      $._events = new s1;
    else
      delete $._events[W];
  }, _0 = function() {
    this._events = new s1, this._eventsCount = 0;
  }, YX = Object.prototype.hasOwnProperty, x0 = "~";
  if (Object.create) {
    if (s1.prototype = Object.create(null), !new s1().__proto__)
      x0 = false;
  }
  _0.prototype.eventNames = function $() {
    var W = [], Y, X;
    if (this._eventsCount === 0)
      return W;
    for (X in Y = this._events)
      if (YX.call(Y, X))
        W.push(x0 ? X.slice(1) : X);
    if (Object.getOwnPropertySymbols)
      return W.concat(Object.getOwnPropertySymbols(Y));
    return W;
  };
  _0.prototype.listeners = function $(W) {
    var Y = x0 ? x0 + W : W, X = this._events[Y];
    if (!X)
      return [];
    if (X.fn)
      return [X.fn];
    for (var Z = 0, Q = X.length, J = new Array(Q);Z < Q; Z++)
      J[Z] = X[Z].fn;
    return J;
  };
  _0.prototype.listenerCount = function $(W) {
    var Y = x0 ? x0 + W : W, X = this._events[Y];
    if (!X)
      return 0;
    if (X.fn)
      return 1;
    return X.length;
  };
  _0.prototype.emit = function $(W, Y, X, Z, Q, J) {
    var z = x0 ? x0 + W : W;
    if (!this._events[z])
      return false;
    var F = this._events[z], w = arguments.length, B, S;
    if (F.fn) {
      if (F.once)
        this.removeListener(W, F.fn, undefined, true);
      switch (w) {
        case 1:
          return F.fn.call(F.context), true;
        case 2:
          return F.fn.call(F.context, Y), true;
        case 3:
          return F.fn.call(F.context, Y, X), true;
        case 4:
          return F.fn.call(F.context, Y, X, Z), true;
        case 5:
          return F.fn.call(F.context, Y, X, Z, Q), true;
        case 6:
          return F.fn.call(F.context, Y, X, Z, Q, J), true;
      }
      for (S = 1, B = new Array(w - 1);S < w; S++)
        B[S - 1] = arguments[S];
      F.fn.apply(F.context, B);
    } else {
      var G = F.length, j;
      for (S = 0;S < G; S++) {
        if (F[S].once)
          this.removeListener(W, F[S].fn, undefined, true);
        switch (w) {
          case 1:
            F[S].fn.call(F[S].context);
            break;
          case 2:
            F[S].fn.call(F[S].context, Y);
            break;
          case 3:
            F[S].fn.call(F[S].context, Y, X);
            break;
          case 4:
            F[S].fn.call(F[S].context, Y, X, Z);
            break;
          default:
            if (!B)
              for (j = 1, B = new Array(w - 1);j < w; j++)
                B[j - 1] = arguments[j];
            F[S].fn.apply(F[S].context, B);
        }
      }
    }
    return true;
  };
  _0.prototype.on = function $(W, Y, X) {
    return I8(this, W, Y, X, false);
  };
  _0.prototype.once = function $(W, Y, X) {
    return I8(this, W, Y, X, true);
  };
  _0.prototype.removeListener = function $(W, Y, X, Z) {
    var Q = x0 ? x0 + W : W;
    if (!this._events[Q])
      return this;
    if (!Y)
      return K$(this, Q), this;
    var J = this._events[Q];
    if (J.fn) {
      if (J.fn === Y && (!Z || J.once) && (!X || J.context === X))
        K$(this, Q);
    } else {
      for (var z = 0, F = [], w = J.length;z < w; z++)
        if (J[z].fn !== Y || Z && !J[z].once || X && J[z].context !== X)
          F.push(J[z]);
      if (F.length)
        this._events[Q] = F.length === 1 ? F[0] : F;
      else
        K$(this, Q);
    }
    return this;
  };
  _0.prototype.removeAllListeners = function $(W) {
    var Y;
    if (W) {
      if (Y = x0 ? x0 + W : W, this._events[Y])
        K$(this, Y);
    } else
      this._events = new s1, this._eventsCount = 0;
    return this;
  };
  _0.prototype.off = _0.prototype.removeListener;
  _0.prototype.addListener = _0.prototype.on;
  _0.prefixed = x0;
  _0.EventEmitter = _0;
  if (typeof r$ !== "undefined")
    r$.exports = _0;
});
var k0 = H0((d8) => {
  var ZX = function($) {
    return j$($) && (Symbol.asyncIterator in $);
  }, QX = function($) {
    return j$($) && (Symbol.iterator in $);
  }, JX = function($) {
    return ArrayBuffer.isView($);
  }, zX = function($) {
    return $ instanceof Promise;
  }, HX = function($) {
    return $ instanceof Uint8Array;
  }, qX = function($) {
    return $ instanceof Date && Number.isFinite($.getTime());
  }, NX = function($, W) {
    return W in $;
  }, MX = function($) {
    return j$($) && f8($.constructor) && $.constructor.name === "Object";
  }, j$ = function($) {
    return $ !== null && typeof $ === "object";
  }, AX = function($) {
    return Array.isArray($) && !ArrayBuffer.isView($);
  }, E8 = function($) {
    return $ === undefined;
  }, V8 = function($) {
    return $ === null;
  }, x8 = function($) {
    return typeof $ === "boolean";
  }, a$ = function($) {
    return typeof $ === "number";
  }, FX = function($) {
    return a$($) && Number.isInteger($);
  }, k8 = function($) {
    return typeof $ === "bigint";
  }, g8 = function($) {
    return typeof $ === "string";
  }, f8 = function($) {
    return typeof $ === "function";
  }, T8 = function($) {
    return typeof $ === "symbol";
  }, UX = function($) {
    return k8($) || x8($) || V8($) || a$($) || g8($) || T8($) || E8($);
  };
  Object.defineProperty(d8, "__esModule", { value: true });
  d8.IsValueType = d8.IsSymbol = d8.IsFunction = d8.IsString = d8.IsBigInt = d8.IsInteger = d8.IsNumber = d8.IsBoolean = d8.IsNull = d8.IsUndefined = d8.IsArray = d8.IsObject = d8.IsPlainObject = d8.HasPropertyKey = d8.IsDate = d8.IsUint8Array = d8.IsPromise = d8.IsTypedArray = d8.IsIterator = d8.IsAsyncIterator = undefined;
  d8.IsAsyncIterator = ZX;
  d8.IsIterator = QX;
  d8.IsTypedArray = JX;
  d8.IsPromise = zX;
  d8.IsUint8Array = HX;
  d8.IsDate = qX;
  d8.HasPropertyKey = NX;
  d8.IsPlainObject = MX;
  d8.IsObject = j$;
  d8.IsArray = AX;
  d8.IsUndefined = E8;
  d8.IsNull = V8;
  d8.IsBoolean = x8;
  d8.IsNumber = a$;
  d8.IsInteger = FX;
  d8.IsBigInt = k8;
  d8.IsString = g8;
  d8.IsFunction = f8;
  d8.IsSymbol = T8;
  d8.IsValueType = UX;
});
var f0 = H0((m8) => {
  Object.defineProperty(m8, "__esModule", { value: true });
  m8.Type = m8.JsonType = m8.JavaScriptTypeBuilder = m8.JsonTypeBuilder = m8.TypeBuilder = m8.TypeBuilderError = m8.TransformEncodeBuilder = m8.TransformDecodeBuilder = m8.TemplateLiteralDslParser = m8.TemplateLiteralGenerator = m8.TemplateLiteralGeneratorError = m8.TemplateLiteralFinite = m8.TemplateLiteralFiniteError = m8.TemplateLiteralParser = m8.TemplateLiteralParserError = m8.TemplateLiteralResolver = m8.TemplateLiteralPattern = m8.TemplateLiteralPatternError = m8.UnionResolver = m8.KeyArrayResolver = m8.KeyArrayResolverError = m8.KeyResolver = m8.ObjectMap = m8.Intrinsic = m8.IndexedAccessor = m8.TypeClone = m8.TypeExtends = m8.TypeExtendsResult = m8.TypeExtendsError = m8.ExtendsUndefined = m8.TypeGuard = m8.TypeGuardUnknownTypeError = m8.ValueGuard = m8.FormatRegistry = m8.TypeBoxError = m8.TypeRegistry = m8.PatternStringExact = m8.PatternNumberExact = m8.PatternBooleanExact = m8.PatternString = m8.PatternNumber = m8.PatternBoolean = m8.Kind = m8.Hint = m8.Optional = m8.Readonly = m8.Transform = undefined;
  m8.Transform = Symbol.for("TypeBox.Transform");
  m8.Readonly = Symbol.for("TypeBox.Readonly");
  m8.Optional = Symbol.for("TypeBox.Optional");
  m8.Hint = Symbol.for("TypeBox.Hint");
  m8.Kind = Symbol.for("TypeBox.Kind");
  m8.PatternBoolean = "(true|false)";
  m8.PatternNumber = "(0|[1-9][0-9]*)";
  m8.PatternString = "(.*)";
  m8.PatternBooleanExact = `^${m8.PatternBoolean}$`;
  m8.PatternNumberExact = `^${m8.PatternNumber}$`;
  m8.PatternStringExact = `^${m8.PatternString}$`;
  var e$;
  (function($) {
    const W = new Map;
    function Y() {
      return new Map(W);
    }
    $.Entries = Y;
    function X() {
      return W.clear();
    }
    $.Clear = X;
    function Z(F) {
      return W.delete(F);
    }
    $.Delete = Z;
    function Q(F) {
      return W.has(F);
    }
    $.Has = Q;
    function J(F, w) {
      W.set(F, w);
    }
    $.Set = J;
    function z(F) {
      return W.get(F);
    }
    $.Get = z;
  })(e$ || (m8.TypeRegistry = e$ = {}));

  class $1 extends Error {
    constructor($) {
      super($);
    }
  }
  m8.TypeBoxError = $1;
  var v8;
  (function($) {
    const W = new Map;
    function Y() {
      return new Map(W);
    }
    $.Entries = Y;
    function X() {
      return W.clear();
    }
    $.Clear = X;
    function Z(F) {
      return W.delete(F);
    }
    $.Delete = Z;
    function Q(F) {
      return W.has(F);
    }
    $.Has = Q;
    function J(F, w) {
      W.set(F, w);
    }
    $.Set = J;
    function z(F) {
      return W.get(F);
    }
    $.Get = z;
  })(v8 || (m8.FormatRegistry = v8 = {}));
  var x;
  (function($) {
    function W(w) {
      return Array.isArray(w);
    }
    $.IsArray = W;
    function Y(w) {
      return typeof w === "bigint";
    }
    $.IsBigInt = Y;
    function X(w) {
      return typeof w === "boolean";
    }
    $.IsBoolean = X;
    function Z(w) {
      return w === null;
    }
    $.IsNull = Z;
    function Q(w) {
      return typeof w === "number";
    }
    $.IsNumber = Q;
    function J(w) {
      return typeof w === "object" && w !== null;
    }
    $.IsObject = J;
    function z(w) {
      return typeof w === "string";
    }
    $.IsString = z;
    function F(w) {
      return w === undefined;
    }
    $.IsUndefined = F;
  })(x || (m8.ValueGuard = x = {}));

  class i8 extends $1 {
  }
  m8.TypeGuardUnknownTypeError = i8;
  var U;
  (function($) {
    function W(N) {
      try {
        return new RegExp(N), true;
      } catch {
        return false;
      }
    }
    function Y(N) {
      if (!x.IsString(N))
        return false;
      for (let l = 0;l < N.length; l++) {
        const I0 = N.charCodeAt(l);
        if (I0 >= 7 && I0 <= 13 || I0 === 27 || I0 === 127)
          return false;
      }
      return true;
    }
    function X(N) {
      return J(N) || Q0(N);
    }
    function Z(N) {
      return x.IsUndefined(N) || x.IsBigInt(N);
    }
    function Q(N) {
      return x.IsUndefined(N) || x.IsNumber(N);
    }
    function J(N) {
      return x.IsUndefined(N) || x.IsBoolean(N);
    }
    function z(N) {
      return x.IsUndefined(N) || x.IsString(N);
    }
    function F(N) {
      return x.IsUndefined(N) || x.IsString(N) && Y(N) && W(N);
    }
    function w(N) {
      return x.IsUndefined(N) || x.IsString(N) && Y(N);
    }
    function B(N) {
      return x.IsUndefined(N) || Q0(N);
    }
    function S(N) {
      return _(N, "Any") && z(N.$id);
    }
    $.TAny = S;
    function G(N) {
      return _(N, "Array") && N.type === "array" && z(N.$id) && Q0(N.items) && Q(N.minItems) && Q(N.maxItems) && J(N.uniqueItems) && B(N.contains) && Q(N.minContains) && Q(N.maxContains);
    }
    $.TArray = G;
    function j(N) {
      return _(N, "AsyncIterator") && N.type === "AsyncIterator" && z(N.$id) && Q0(N.items);
    }
    $.TAsyncIterator = j;
    function M(N) {
      return _(N, "BigInt") && N.type === "bigint" && z(N.$id) && Z(N.exclusiveMaximum) && Z(N.exclusiveMinimum) && Z(N.maximum) && Z(N.minimum) && Z(N.multipleOf);
    }
    $.TBigInt = M;
    function O(N) {
      return _(N, "Boolean") && N.type === "boolean" && z(N.$id);
    }
    $.TBoolean = O;
    function K(N) {
      return _(N, "Constructor") && N.type === "Constructor" && z(N.$id) && x.IsArray(N.parameters) && N.parameters.every((l) => Q0(l)) && Q0(N.returns);
    }
    $.TConstructor = K;
    function A(N) {
      return _(N, "Date") && N.type === "Date" && z(N.$id) && Q(N.exclusiveMaximumTimestamp) && Q(N.exclusiveMinimumTimestamp) && Q(N.maximumTimestamp) && Q(N.minimumTimestamp) && Q(N.multipleOfTimestamp);
    }
    $.TDate = A;
    function D(N) {
      return _(N, "Function") && N.type === "Function" && z(N.$id) && x.IsArray(N.parameters) && N.parameters.every((l) => Q0(l)) && Q0(N.returns);
    }
    $.TFunction = D;
    function I(N) {
      return _(N, "Integer") && N.type === "integer" && z(N.$id) && Q(N.exclusiveMaximum) && Q(N.exclusiveMinimum) && Q(N.maximum) && Q(N.minimum) && Q(N.multipleOf);
    }
    $.TInteger = I;
    function b(N) {
      return _(N, "Intersect") && (x.IsString(N.type) && N.type !== "object" ? false : true) && x.IsArray(N.allOf) && N.allOf.every((l) => Q0(l) && !K0(l)) && z(N.type) && (J(N.unevaluatedProperties) || B(N.unevaluatedProperties)) && z(N.$id);
    }
    $.TIntersect = b;
    function V(N) {
      return _(N, "Iterator") && N.type === "Iterator" && z(N.$id) && Q0(N.items);
    }
    $.TIterator = V;
    function _(N, l) {
      return a(N) && N[m8.Kind] === l;
    }
    $.TKindOf = _;
    function a(N) {
      return x.IsObject(N) && (m8.Kind in N) && x.IsString(N[m8.Kind]);
    }
    $.TKind = a;
    function e(N) {
      return F0(N) && x.IsString(N.const);
    }
    $.TLiteralString = e;
    function o(N) {
      return F0(N) && x.IsNumber(N.const);
    }
    $.TLiteralNumber = o;
    function P0(N) {
      return F0(N) && x.IsBoolean(N.const);
    }
    $.TLiteralBoolean = P0;
    function F0(N) {
      return _(N, "Literal") && z(N.$id) && (x.IsBoolean(N.const) || x.IsNumber(N.const) || x.IsString(N.const));
    }
    $.TLiteral = F0;
    function C0(N) {
      return _(N, "Never") && x.IsObject(N.not) && Object.getOwnPropertyNames(N.not).length === 0;
    }
    $.TNever = C0;
    function Y0(N) {
      return _(N, "Not") && Q0(N.not);
    }
    $.TNot = Y0;
    function X0(N) {
      return _(N, "Null") && N.type === "null" && z(N.$id);
    }
    $.TNull = X0;
    function u0(N) {
      return _(N, "Number") && N.type === "number" && z(N.$id) && Q(N.exclusiveMaximum) && Q(N.exclusiveMinimum) && Q(N.maximum) && Q(N.minimum) && Q(N.multipleOf);
    }
    $.TNumber = u0;
    function a0(N) {
      return _(N, "Object") && N.type === "object" && z(N.$id) && x.IsObject(N.properties) && X(N.additionalProperties) && Q(N.minProperties) && Q(N.maxProperties) && Object.entries(N.properties).every(([l, I0]) => Y(l) && Q0(I0));
    }
    $.TObject = a0;
    function v0(N) {
      return _(N, "Promise") && N.type === "Promise" && z(N.$id) && Q0(N.item);
    }
    $.TPromise = v0;
    function R(N) {
      return _(N, "Record") && N.type === "object" && z(N.$id) && X(N.additionalProperties) && x.IsObject(N.patternProperties) && ((l) => {
        const I0 = Object.getOwnPropertyNames(l.patternProperties);
        return I0.length === 1 && W(I0[0]) && x.IsObject(l.patternProperties) && Q0(l.patternProperties[I0[0]]);
      })(N);
    }
    $.TRecord = R;
    function f(N) {
      return x.IsObject(N) && (m8.Hint in N) && N[m8.Hint] === "Recursive";
    }
    $.TRecursive = f;
    function i(N) {
      return _(N, "Ref") && z(N.$id) && x.IsString(N.$ref);
    }
    $.TRef = i;
    function u(N) {
      return _(N, "String") && N.type === "string" && z(N.$id) && Q(N.minLength) && Q(N.maxLength) && F(N.pattern) && w(N.format);
    }
    $.TString = u;
    function q0(N) {
      return _(N, "Symbol") && N.type === "symbol" && z(N.$id);
    }
    $.TSymbol = q0;
    function D0(N) {
      return _(N, "TemplateLiteral") && N.type === "string" && x.IsString(N.pattern) && N.pattern[0] === "^" && N.pattern[N.pattern.length - 1] === "$";
    }
    $.TTemplateLiteral = D0;
    function w0(N) {
      return _(N, "This") && z(N.$id) && x.IsString(N.$ref);
    }
    $.TThis = w0;
    function K0(N) {
      return x.IsObject(N) && (m8.Transform in N);
    }
    $.TTransform = K0;
    function N0(N) {
      return _(N, "Tuple") && N.type === "array" && z(N.$id) && x.IsNumber(N.minItems) && x.IsNumber(N.maxItems) && N.minItems === N.maxItems && (x.IsUndefined(N.items) && x.IsUndefined(N.additionalItems) && N.minItems === 0 || x.IsArray(N.items) && N.items.every((l) => Q0(l)));
    }
    $.TTuple = N0;
    function B1(N) {
      return _(N, "Undefined") && N.type === "undefined" && z(N.$id);
    }
    $.TUndefined = B1;
    function P(N) {
      return E(N) && N.anyOf.every((l) => e(l) || o(l));
    }
    $.TUnionLiteral = P;
    function E(N) {
      return _(N, "Union") && z(N.$id) && x.IsObject(N) && x.IsArray(N.anyOf) && N.anyOf.every((l) => Q0(l));
    }
    $.TUnion = E;
    function L(N) {
      return _(N, "Uint8Array") && N.type === "Uint8Array" && z(N.$id) && Q(N.minByteLength) && Q(N.maxByteLength);
    }
    $.TUint8Array = L;
    function p(N) {
      return _(N, "Unknown") && z(N.$id);
    }
    $.TUnknown = p;
    function T(N) {
      return _(N, "Unsafe");
    }
    $.TUnsafe = T;
    function d(N) {
      return _(N, "Void") && N.type === "void" && z(N.$id);
    }
    $.TVoid = d;
    function Z0(N) {
      return x.IsObject(N) && N[m8.Readonly] === "Readonly";
    }
    $.TReadonly = Z0;
    function O0(N) {
      return x.IsObject(N) && N[m8.Optional] === "Optional";
    }
    $.TOptional = O0;
    function Q0(N) {
      return x.IsObject(N) && (S(N) || G(N) || O(N) || M(N) || j(N) || K(N) || A(N) || D(N) || I(N) || b(N) || V(N) || F0(N) || C0(N) || Y0(N) || X0(N) || u0(N) || a0(N) || v0(N) || R(N) || i(N) || u(N) || q0(N) || D0(N) || w0(N) || N0(N) || B1(N) || E(N) || L(N) || p(N) || T(N) || d(N) || a(N) && e$.Has(N[m8.Kind]));
    }
    $.TSchema = Q0;
  })(U || (m8.TypeGuard = U = {}));
  var p8;
  (function($) {
    function W(Y) {
      return Y[m8.Kind] === "Intersect" ? Y.allOf.every((X) => W(X)) : Y[m8.Kind] === "Union" ? Y.anyOf.some((X) => W(X)) : Y[m8.Kind] === "Undefined" ? true : Y[m8.Kind] === "Not" ? !W(Y.not) : false;
    }
    $.Check = W;
  })(p8 || (m8.ExtendsUndefined = p8 = {}));

  class X6 extends $1 {
  }
  m8.TypeExtendsError = X6;
  var C;
  (function($) {
    $[$.Union = 0] = "Union", $[$.True = 1] = "True", $[$.False = 2] = "False";
  })(C || (m8.TypeExtendsResult = C = {}));
  var P1;
  (function($) {
    function W(H) {
      return H === C.False ? H : C.True;
    }
    function Y(H) {
      throw new X6(H);
    }
    function X(H) {
      return U.TNever(H) || U.TIntersect(H) || U.TUnion(H) || U.TUnknown(H) || U.TAny(H);
    }
    function Z(H, q) {
      return U.TNever(q) ? _(H, q) : U.TIntersect(q) ? D(H, q) : U.TUnion(q) ? t$(H, q) : U.TUnknown(q) ? O8(H, q) : U.TAny(q) ? Q(H, q) : Y("StructuralRight");
    }
    function Q(H, q) {
      return C.True;
    }
    function J(H, q) {
      return U.TIntersect(q) ? D(H, q) : U.TUnion(q) && q.anyOf.some(($0) => U.TAny($0) || U.TUnknown($0)) ? C.True : U.TUnion(q) ? C.Union : U.TUnknown(q) ? C.True : U.TAny(q) ? C.True : C.Union;
    }
    function z(H, q) {
      return U.TUnknown(H) ? C.False : U.TAny(H) ? C.Union : U.TNever(H) ? C.True : C.False;
    }
    function F(H, q) {
      return U.TObject(q) && D0(q) ? C.True : X(q) ? Z(H, q) : !U.TArray(q) ? C.False : W(z0(H.items, q.items));
    }
    function w(H, q) {
      return X(q) ? Z(H, q) : !U.TAsyncIterator(q) ? C.False : W(z0(H.items, q.items));
    }
    function B(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TBigInt(q) ? C.True : C.False;
    }
    function S(H, q) {
      return U.TLiteral(H) && x.IsBoolean(H.const) ? C.True : U.TBoolean(H) ? C.True : C.False;
    }
    function G(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TBoolean(q) ? C.True : C.False;
    }
    function j(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : !U.TConstructor(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every(($0, h0) => W(z0(q.parameters[h0], $0)) === C.True) ? C.False : W(z0(H.returns, q.returns));
    }
    function M(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TDate(q) ? C.True : C.False;
    }
    function O(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : !U.TFunction(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every(($0, h0) => W(z0(q.parameters[h0], $0)) === C.True) ? C.False : W(z0(H.returns, q.returns));
    }
    function K(H, q) {
      return U.TLiteral(H) && x.IsNumber(H.const) ? C.True : U.TNumber(H) || U.TInteger(H) ? C.True : C.False;
    }
    function A(H, q) {
      return U.TInteger(q) || U.TNumber(q) ? C.True : X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : C.False;
    }
    function D(H, q) {
      return q.allOf.every(($0) => z0(H, $0) === C.True) ? C.True : C.False;
    }
    function I(H, q) {
      return H.allOf.some(($0) => z0($0, q) === C.True) ? C.True : C.False;
    }
    function b(H, q) {
      return X(q) ? Z(H, q) : !U.TIterator(q) ? C.False : W(z0(H.items, q.items));
    }
    function V(H, q) {
      return U.TLiteral(q) && q.const === H.const ? C.True : X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TString(q) ? d(H, q) : U.TNumber(q) ? F0(H, q) : U.TInteger(q) ? K(H, q) : U.TBoolean(q) ? S(H, q) : C.False;
    }
    function _(H, q) {
      return C.False;
    }
    function a(H, q) {
      return C.True;
    }
    function e(H) {
      let [q, $0] = [H, 0];
      while (true) {
        if (!U.TNot(q))
          break;
        q = q.not, $0 += 1;
      }
      return $0 % 2 === 0 ? q : m8.Type.Unknown();
    }
    function o(H, q) {
      return U.TNot(H) ? z0(e(H), q) : U.TNot(q) ? z0(H, e(q)) : Y("Invalid fallthrough for Not");
    }
    function P0(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TNull(q) ? C.True : C.False;
    }
    function F0(H, q) {
      return U.TLiteralNumber(H) ? C.True : U.TNumber(H) || U.TInteger(H) ? C.True : C.False;
    }
    function C0(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TInteger(q) || U.TNumber(q) ? C.True : C.False;
    }
    function Y0(H, q) {
      return Object.getOwnPropertyNames(H.properties).length === q;
    }
    function X0(H) {
      return D0(H);
    }
    function u0(H) {
      return Y0(H, 0) || Y0(H, 1) && ("description" in H.properties) && U.TUnion(H.properties.description) && H.properties.description.anyOf.length === 2 && (U.TString(H.properties.description.anyOf[0]) && U.TUndefined(H.properties.description.anyOf[1]) || U.TString(H.properties.description.anyOf[1]) && U.TUndefined(H.properties.description.anyOf[0]));
    }
    function a0(H) {
      return Y0(H, 0);
    }
    function v0(H) {
      return Y0(H, 0);
    }
    function R(H) {
      return Y0(H, 0);
    }
    function f(H) {
      return Y0(H, 0);
    }
    function i(H) {
      return D0(H);
    }
    function u(H) {
      const q = m8.Type.Number();
      return Y0(H, 0) || Y0(H, 1) && ("length" in H.properties) && W(z0(H.properties.length, q)) === C.True;
    }
    function q0(H) {
      return Y0(H, 0);
    }
    function D0(H) {
      const q = m8.Type.Number();
      return Y0(H, 0) || Y0(H, 1) && ("length" in H.properties) && W(z0(H.properties.length, q)) === C.True;
    }
    function w0(H) {
      const q = m8.Type.Function([m8.Type.Any()], m8.Type.Any());
      return Y0(H, 0) || Y0(H, 1) && ("then" in H.properties) && W(z0(H.properties.then, q)) === C.True;
    }
    function K0(H, q) {
      return z0(H, q) === C.False ? C.False : U.TOptional(H) && !U.TOptional(q) ? C.False : C.True;
    }
    function N0(H, q) {
      return U.TUnknown(H) ? C.False : U.TAny(H) ? C.Union : U.TNever(H) || U.TLiteralString(H) && X0(q) || U.TLiteralNumber(H) && a0(q) || U.TLiteralBoolean(H) && v0(q) || U.TSymbol(H) && u0(q) || U.TBigInt(H) && R(q) || U.TString(H) && X0(q) || U.TSymbol(H) && u0(q) || U.TNumber(H) && a0(q) || U.TInteger(H) && a0(q) || U.TBoolean(H) && v0(q) || U.TUint8Array(H) && i(q) || U.TDate(H) && f(q) || U.TConstructor(H) && q0(q) || U.TFunction(H) && u(q) ? C.True : U.TRecord(H) && U.TString(E(H)) ? (() => {
        return q[m8.Hint] === "Record" ? C.True : C.False;
      })() : U.TRecord(H) && U.TNumber(E(H)) ? (() => {
        return Y0(q, 0) ? C.True : C.False;
      })() : C.False;
    }
    function B1(H, q) {
      return X(q) ? Z(H, q) : U.TRecord(q) ? p(H, q) : !U.TObject(q) ? C.False : (() => {
        for (let $0 of Object.getOwnPropertyNames(q.properties)) {
          if (!($0 in H.properties))
            return C.False;
          if (K0(H.properties[$0], q.properties[$0]) === C.False)
            return C.False;
        }
        return C.True;
      })();
    }
    function P(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) && w0(q) ? C.True : !U.TPromise(q) ? C.False : W(z0(H.item, q.item));
    }
    function E(H) {
      return m8.PatternNumberExact in H.patternProperties ? m8.Type.Number() : (m8.PatternStringExact in H.patternProperties) ? m8.Type.String() : Y("Unknown record key pattern");
    }
    function L(H) {
      return m8.PatternNumberExact in H.patternProperties ? H.patternProperties[m8.PatternNumberExact] : (m8.PatternStringExact in H.patternProperties) ? H.patternProperties[m8.PatternStringExact] : Y("Unable to get record value schema");
    }
    function p(H, q) {
      const [$0, h0] = [E(q), L(q)];
      return U.TLiteralString(H) && U.TNumber($0) && W(z0(H, h0)) === C.True ? C.True : U.TUint8Array(H) && U.TNumber($0) ? z0(H, h0) : U.TString(H) && U.TNumber($0) ? z0(H, h0) : U.TArray(H) && U.TNumber($0) ? z0(H, h0) : U.TObject(H) ? (() => {
        for (let rY of Object.getOwnPropertyNames(H.properties))
          if (K0(h0, H.properties[rY]) === C.False)
            return C.False;
        return C.True;
      })() : C.False;
    }
    function T(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : !U.TRecord(q) ? C.False : z0(L(H), L(q));
    }
    function d(H, q) {
      return U.TLiteral(H) && x.IsString(H.const) ? C.True : U.TString(H) ? C.True : C.False;
    }
    function Z0(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TString(q) ? C.True : C.False;
    }
    function O0(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TSymbol(q) ? C.True : C.False;
    }
    function Q0(H, q) {
      return U.TTemplateLiteral(H) ? z0(J1.Resolve(H), q) : U.TTemplateLiteral(q) ? z0(H, J1.Resolve(q)) : Y("Invalid fallthrough for TemplateLiteral");
    }
    function N(H, q) {
      return U.TArray(q) && H.items !== undefined && H.items.every(($0) => z0($0, q.items) === C.True);
    }
    function l(H, q) {
      return U.TNever(H) ? C.True : U.TUnknown(H) ? C.False : U.TAny(H) ? C.Union : C.False;
    }
    function I0(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) && D0(q) ? C.True : U.TArray(q) && N(H, q) ? C.True : !U.TTuple(q) ? C.False : x.IsUndefined(H.items) && !x.IsUndefined(q.items) || !x.IsUndefined(H.items) && x.IsUndefined(q.items) ? C.False : x.IsUndefined(H.items) && !x.IsUndefined(q.items) ? C.True : H.items.every(($0, h0) => z0($0, q.items[h0]) === C.True) ? C.True : C.False;
    }
    function c$(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TUint8Array(q) ? C.True : C.False;
    }
    function l$(H, q) {
      return X(q) ? Z(H, q) : U.TObject(q) ? N0(H, q) : U.TRecord(q) ? p(H, q) : U.TVoid(q) ? lY(H, q) : U.TUndefined(q) ? C.True : C.False;
    }
    function t$(H, q) {
      return q.anyOf.some(($0) => z0(H, $0) === C.True) ? C.True : C.False;
    }
    function oY(H, q) {
      return H.anyOf.every(($0) => z0($0, q) === C.True) ? C.True : C.False;
    }
    function O8(H, q) {
      return C.True;
    }
    function cY(H, q) {
      return U.TNever(q) ? _(H, q) : U.TIntersect(q) ? D(H, q) : U.TUnion(q) ? t$(H, q) : U.TAny(q) ? Q(H, q) : U.TString(q) ? d(H, q) : U.TNumber(q) ? F0(H, q) : U.TInteger(q) ? K(H, q) : U.TBoolean(q) ? S(H, q) : U.TArray(q) ? z(H, q) : U.TTuple(q) ? l(H, q) : U.TObject(q) ? N0(H, q) : U.TUnknown(q) ? C.True : C.False;
    }
    function lY(H, q) {
      return U.TUndefined(H) ? C.True : U.TUndefined(H) ? C.True : C.False;
    }
    function tY(H, q) {
      return U.TIntersect(q) ? D(H, q) : U.TUnion(q) ? t$(H, q) : U.TUnknown(q) ? O8(H, q) : U.TAny(q) ? Q(H, q) : U.TObject(q) ? N0(H, q) : U.TVoid(q) ? C.True : C.False;
    }
    function z0(H, q) {
      return U.TTemplateLiteral(H) || U.TTemplateLiteral(q) ? Q0(H, q) : U.TNot(H) || U.TNot(q) ? o(H, q) : U.TAny(H) ? J(H, q) : U.TArray(H) ? F(H, q) : U.TBigInt(H) ? B(H, q) : U.TBoolean(H) ? G(H, q) : U.TAsyncIterator(H) ? w(H, q) : U.TConstructor(H) ? j(H, q) : U.TDate(H) ? M(H, q) : U.TFunction(H) ? O(H, q) : U.TInteger(H) ? A(H, q) : U.TIntersect(H) ? I(H, q) : U.TIterator(H) ? b(H, q) : U.TLiteral(H) ? V(H, q) : U.TNever(H) ? a(H, q) : U.TNull(H) ? P0(H, q) : U.TNumber(H) ? C0(H, q) : U.TObject(H) ? B1(H, q) : U.TRecord(H) ? T(H, q) : U.TString(H) ? Z0(H, q) : U.TSymbol(H) ? O0(H, q) : U.TTuple(H) ? I0(H, q) : U.TPromise(H) ? P(H, q) : U.TUint8Array(H) ? c$(H, q) : U.TUndefined(H) ? l$(H, q) : U.TUnion(H) ? oY(H, q) : U.TUnknown(H) ? cY(H, q) : U.TVoid(H) ? tY(H, q) : Y(`Unknown left type operand '${H[m8.Kind]}'`);
    }
    function sY(H, q) {
      return z0(H, q);
    }
    $.Extends = sY;
  })(P1 || (m8.TypeExtends = P1 = {}));
  var m;
  (function($) {
    function W(J) {
      const z = Object.getOwnPropertyNames(J).reduce((w, B) => ({ ...w, [B]: X(J[B]) }), {}), F = Object.getOwnPropertySymbols(J).reduce((w, B) => ({ ...w, [B]: X(J[B]) }), {});
      return { ...z, ...F };
    }
    function Y(J) {
      return J.map((z) => X(z));
    }
    function X(J) {
      return x.IsArray(J) ? Y(J) : x.IsObject(J) ? W(J) : J;
    }
    function Z(J) {
      return J.map((z) => Q(z));
    }
    $.Rest = Z;
    function Q(J, z = {}) {
      return { ...X(J), ...z };
    }
    $.Type = Q;
  })(m || (m8.TypeClone = m = {}));
  var $6;
  (function($) {
    function W(j) {
      return j.map((M) => {
        const { [m8.Optional]: O, ...K } = m.Type(M);
        return K;
      });
    }
    function Y(j) {
      return j.every((M) => U.TOptional(M));
    }
    function X(j) {
      return j.some((M) => U.TOptional(M));
    }
    function Z(j) {
      return Y(j.allOf) ? m8.Type.Optional(m8.Type.Intersect(W(j.allOf))) : j;
    }
    function Q(j) {
      return X(j.anyOf) ? m8.Type.Optional(m8.Type.Union(W(j.anyOf))) : j;
    }
    function J(j) {
      return j[m8.Kind] === "Intersect" ? Z(j) : j[m8.Kind] === "Union" ? Q(j) : j;
    }
    function z(j, M) {
      const O = j.allOf.reduce((K, A) => {
        const D = S(A, M);
        return D[m8.Kind] === "Never" ? K : [...K, D];
      }, []);
      return J(m8.Type.Intersect(O));
    }
    function F(j, M) {
      const O = j.anyOf.map((K) => S(K, M));
      return J(m8.Type.Union(O));
    }
    function w(j, M) {
      const O = j.properties[M];
      return x.IsUndefined(O) ? m8.Type.Never() : m8.Type.Union([O]);
    }
    function B(j, M) {
      const O = j.items;
      if (x.IsUndefined(O))
        return m8.Type.Never();
      const K = O[M];
      if (x.IsUndefined(K))
        return m8.Type.Never();
      return K;
    }
    function S(j, M) {
      return j[m8.Kind] === "Intersect" ? z(j, M) : j[m8.Kind] === "Union" ? F(j, M) : j[m8.Kind] === "Object" ? w(j, M) : j[m8.Kind] === "Tuple" ? B(j, M) : m8.Type.Never();
    }
    function G(j, M, O = {}) {
      const K = M.map((A) => S(j, A.toString()));
      return J(m8.Type.Union(K, O));
    }
    $.Resolve = G;
  })($6 || (m8.IndexedAccessor = $6 = {}));
  var E1;
  (function($) {
    function W(B) {
      const [S, G] = [B.slice(0, 1), B.slice(1)];
      return `${S.toLowerCase()}${G}`;
    }
    function Y(B) {
      const [S, G] = [B.slice(0, 1), B.slice(1)];
      return `${S.toUpperCase()}${G}`;
    }
    function X(B) {
      return B.toUpperCase();
    }
    function Z(B) {
      return B.toLowerCase();
    }
    function Q(B, S) {
      const G = g1.ParseExact(B.pattern);
      if (!f1.Check(G))
        return { ...B, pattern: J(B.pattern, S) };
      const O = [...T1.Generate(G)].map((D) => m8.Type.Literal(D)), K = z(O, S), A = m8.Type.Union(K);
      return m8.Type.TemplateLiteral([A]);
    }
    function J(B, S) {
      return typeof B === "string" ? S === "Uncapitalize" ? W(B) : S === "Capitalize" ? Y(B) : S === "Uppercase" ? X(B) : S === "Lowercase" ? Z(B) : B : B.toString();
    }
    function z(B, S) {
      if (B.length === 0)
        return [];
      const [G, ...j] = B;
      return [w(G, S), ...z(j, S)];
    }
    function F(B, S) {
      return U.TTemplateLiteral(B) ? Q(B, S) : U.TUnion(B) ? m8.Type.Union(z(B.anyOf, S)) : U.TLiteral(B) ? m8.Type.Literal(J(B.const, S)) : B;
    }
    function w(B, S) {
      return F(B, S);
    }
    $.Map = w;
  })(E1 || (m8.Intrinsic = E1 = {}));
  var V1;
  (function($) {
    function W(J, z) {
      return m8.Type.Intersect(J.allOf.map((F) => Z(F, z)), { ...J });
    }
    function Y(J, z) {
      return m8.Type.Union(J.anyOf.map((F) => Z(F, z)), { ...J });
    }
    function X(J, z) {
      return z(J);
    }
    function Z(J, z) {
      return J[m8.Kind] === "Intersect" ? W(J, z) : J[m8.Kind] === "Union" ? Y(J, z) : J[m8.Kind] === "Object" ? X(J, z) : J;
    }
    function Q(J, z, F) {
      return { ...Z(m.Type(J), z), ...F };
    }
    $.Map = Q;
  })(V1 || (m8.ObjectMap = V1 = {}));
  var P$;
  (function($) {
    function W(w) {
      return w[0] === "^" && w[w.length - 1] === "$" ? w.slice(1, w.length - 1) : w;
    }
    function Y(w, B) {
      return w.allOf.reduce((S, G) => [...S, ...J(G, B)], []);
    }
    function X(w, B) {
      const S = w.anyOf.map((G) => J(G, B));
      return [...S.reduce((G, j) => j.map((M) => S.every((O) => O.includes(M)) ? G.add(M) : G)[0], new Set)];
    }
    function Z(w, B) {
      return Object.getOwnPropertyNames(w.properties);
    }
    function Q(w, B) {
      return B.includePatterns ? Object.getOwnPropertyNames(w.patternProperties) : [];
    }
    function J(w, B) {
      return U.TIntersect(w) ? Y(w, B) : U.TUnion(w) ? X(w, B) : U.TObject(w) ? Z(w, B) : U.TRecord(w) ? Q(w, B) : [];
    }
    function z(w, B) {
      return [...new Set(J(w, B))];
    }
    $.ResolveKeys = z;
    function F(w) {
      return `^(${z(w, { includePatterns: true }).map((G) => `(${W(G)})`).join("|")})$`;
    }
    $.ResolvePattern = F;
  })(P$ || (m8.KeyResolver = P$ = {}));

  class Z6 extends $1 {
  }
  m8.KeyArrayResolverError = Z6;
  var r1;
  (function($) {
    function W(Y) {
      return Array.isArray(Y) ? Y : U.TUnionLiteral(Y) ? Y.anyOf.map((X) => X.const.toString()) : U.TLiteral(Y) ? [Y.const] : U.TTemplateLiteral(Y) ? (() => {
        const X = g1.ParseExact(Y.pattern);
        if (!f1.Check(X))
          throw new Z6("Cannot resolve keys from infinite template expression");
        return [...T1.Generate(X)];
      })() : [];
    }
    $.Resolve = W;
  })(r1 || (m8.KeyArrayResolver = r1 = {}));
  var W6;
  (function($) {
    function* W(X) {
      for (let Z of X.anyOf)
        if (Z[m8.Kind] === "Union")
          yield* W(Z);
        else
          yield Z;
    }
    function Y(X) {
      return m8.Type.Union([...W(X)], { ...X });
    }
    $.Resolve = Y;
  })(W6 || (m8.UnionResolver = W6 = {}));

  class Q6 extends $1 {
  }
  m8.TemplateLiteralPatternError = Q6;
  var O$;
  (function($) {
    function W(Q) {
      throw new Q6(Q);
    }
    function Y(Q) {
      return Q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function X(Q, J) {
      return U.TTemplateLiteral(Q) ? Q.pattern.slice(1, Q.pattern.length - 1) : U.TUnion(Q) ? `(${Q.anyOf.map((z) => X(z, J)).join("|")})` : U.TNumber(Q) ? `${J}${m8.PatternNumber}` : U.TInteger(Q) ? `${J}${m8.PatternNumber}` : U.TBigInt(Q) ? `${J}${m8.PatternNumber}` : U.TString(Q) ? `${J}${m8.PatternString}` : U.TLiteral(Q) ? `${J}${Y(Q.const.toString())}` : U.TBoolean(Q) ? `${J}${m8.PatternBoolean}` : W(`Unexpected Kind '${Q[m8.Kind]}'`);
    }
    function Z(Q) {
      return `^${Q.map((J) => X(J, "")).join("")}\$`;
    }
    $.Create = Z;
  })(O$ || (m8.TemplateLiteralPattern = O$ = {}));
  var J1;
  (function($) {
    function W(Y) {
      const X = g1.ParseExact(Y.pattern);
      if (!f1.Check(X))
        return m8.Type.String();
      const Z = [...T1.Generate(X)].map((Q) => m8.Type.Literal(Q));
      return m8.Type.Union(Z);
    }
    $.Resolve = W;
  })(J1 || (m8.TemplateLiteralResolver = J1 = {}));

  class S$ extends $1 {
  }
  m8.TemplateLiteralParserError = S$;
  var g1;
  (function($) {
    function W(j, M, O) {
      return j[M] === O && j.charCodeAt(M - 1) !== 92;
    }
    function Y(j, M) {
      return W(j, M, "(");
    }
    function X(j, M) {
      return W(j, M, ")");
    }
    function Z(j, M) {
      return W(j, M, "|");
    }
    function Q(j) {
      if (!(Y(j, 0) && X(j, j.length - 1)))
        return false;
      let M = 0;
      for (let O = 0;O < j.length; O++) {
        if (Y(j, O))
          M += 1;
        if (X(j, O))
          M -= 1;
        if (M === 0 && O !== j.length - 1)
          return false;
      }
      return true;
    }
    function J(j) {
      return j.slice(1, j.length - 1);
    }
    function z(j) {
      let M = 0;
      for (let O = 0;O < j.length; O++) {
        if (Y(j, O))
          M += 1;
        if (X(j, O))
          M -= 1;
        if (Z(j, O) && M === 0)
          return true;
      }
      return false;
    }
    function F(j) {
      for (let M = 0;M < j.length; M++)
        if (Y(j, M))
          return true;
      return false;
    }
    function w(j) {
      let [M, O] = [0, 0];
      const K = [];
      for (let D = 0;D < j.length; D++) {
        if (Y(j, D))
          M += 1;
        if (X(j, D))
          M -= 1;
        if (Z(j, D) && M === 0) {
          const I = j.slice(O, D);
          if (I.length > 0)
            K.push(S(I));
          O = D + 1;
        }
      }
      const A = j.slice(O);
      if (A.length > 0)
        K.push(S(A));
      if (K.length === 0)
        return { type: "const", const: "" };
      if (K.length === 1)
        return K[0];
      return { type: "or", expr: K };
    }
    function B(j) {
      function M(A, D) {
        if (!Y(A, D))
          throw new S$("TemplateLiteralParser: Index must point to open parens");
        let I = 0;
        for (let b = D;b < A.length; b++) {
          if (Y(A, b))
            I += 1;
          if (X(A, b))
            I -= 1;
          if (I === 0)
            return [D, b];
        }
        throw new S$("TemplateLiteralParser: Unclosed group parens in expression");
      }
      function O(A, D) {
        for (let I = D;I < A.length; I++)
          if (Y(A, I))
            return [D, I];
        return [D, A.length];
      }
      const K = [];
      for (let A = 0;A < j.length; A++)
        if (Y(j, A)) {
          const [D, I] = M(j, A), b = j.slice(D, I + 1);
          K.push(S(b)), A = I;
        } else {
          const [D, I] = O(j, A), b = j.slice(D, I);
          if (b.length > 0)
            K.push(S(b));
          A = I - 1;
        }
      return K.length === 0 ? { type: "const", const: "" } : K.length === 1 ? K[0] : { type: "and", expr: K };
    }
    function S(j) {
      return Q(j) ? S(J(j)) : z(j) ? w(j) : F(j) ? B(j) : { type: "const", const: j };
    }
    $.Parse = S;
    function G(j) {
      return S(j.slice(1, j.length - 1));
    }
    $.ParseExact = G;
  })(g1 || (m8.TemplateLiteralParser = g1 = {}));

  class J6 extends $1 {
  }
  m8.TemplateLiteralFiniteError = J6;
  var f1;
  (function($) {
    function W(J) {
      throw new J6(J);
    }
    function Y(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "0" && J.expr[1].type === "const" && J.expr[1].const === "[1-9][0-9]*";
    }
    function X(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "true" && J.expr[1].type === "const" && J.expr[1].const === "false";
    }
    function Z(J) {
      return J.type === "const" && J.const === ".*";
    }
    function Q(J) {
      return X(J) ? true : Y(J) || Z(J) ? false : J.type === "and" ? J.expr.every((z) => Q(z)) : J.type === "or" ? J.expr.every((z) => Q(z)) : J.type === "const" ? true : W("Unknown expression type");
    }
    $.Check = Q;
  })(f1 || (m8.TemplateLiteralFinite = f1 = {}));

  class z6 extends $1 {
  }
  m8.TemplateLiteralGeneratorError = z6;
  var T1;
  (function($) {
    function* W(J) {
      if (J.length === 1)
        return yield* J[0];
      for (let z of J[0])
        for (let F of W(J.slice(1)))
          yield `${z}${F}`;
    }
    function* Y(J) {
      return yield* W(J.expr.map((z) => [...Q(z)]));
    }
    function* X(J) {
      for (let z of J.expr)
        yield* Q(z);
    }
    function* Z(J) {
      return yield J.const;
    }
    function* Q(J) {
      return J.type === "and" ? yield* Y(J) : J.type === "or" ? yield* X(J) : J.type === "const" ? yield* Z(J) : (() => {
        throw new z6("Unknown expression");
      })();
    }
    $.Generate = Q;
  })(T1 || (m8.TemplateLiteralGenerator = T1 = {}));
  var Y6;
  (function($) {
    function* W(Q) {
      const J = Q.trim().replace(/"|'/g, "");
      return J === "boolean" ? yield m8.Type.Boolean() : J === "number" ? yield m8.Type.Number() : J === "bigint" ? yield m8.Type.BigInt() : J === "string" ? yield m8.Type.String() : yield (() => {
        const z = J.split("|").map((F) => m8.Type.Literal(F.trim()));
        return z.length === 0 ? m8.Type.Never() : z.length === 1 ? z[0] : m8.Type.Union(z);
      })();
    }
    function* Y(Q) {
      if (Q[1] !== "{") {
        const J = m8.Type.Literal("$"), z = X(Q.slice(1));
        return yield* [J, ...z];
      }
      for (let J = 2;J < Q.length; J++)
        if (Q[J] === "}") {
          const z = W(Q.slice(2, J)), F = X(Q.slice(J + 1));
          return yield* [...z, ...F];
        }
      yield m8.Type.Literal(Q);
    }
    function* X(Q) {
      for (let J = 0;J < Q.length; J++)
        if (Q[J] === "$") {
          const z = m8.Type.Literal(Q.slice(0, J)), F = Y(Q.slice(J));
          return yield* [z, ...F];
        }
      yield m8.Type.Literal(Q);
    }
    function Z(Q) {
      return [...X(Q)];
    }
    $.Parse = Z;
  })(Y6 || (m8.TemplateLiteralDslParser = Y6 = {}));

  class H6 {
    constructor($) {
      this.schema = $;
    }
    Decode($) {
      return new q6(this.schema, $);
    }
  }
  m8.TransformDecodeBuilder = H6;

  class q6 {
    constructor($, W) {
      this.schema = $, this.decode = W;
    }
    Encode($) {
      const W = m.Type(this.schema);
      return U.TTransform(W) ? (() => {
        const Z = { Encode: (Q) => W[m8.Transform].Encode($(Q)), Decode: (Q) => this.decode(W[m8.Transform].Decode(Q)) };
        return { ...W, [m8.Transform]: Z };
      })() : (() => {
        const Y = { Decode: this.decode, Encode: $ };
        return { ...W, [m8.Transform]: Y };
      })();
    }
  }
  m8.TransformEncodeBuilder = q6;
  var gX = 0;

  class N6 extends $1 {
  }
  m8.TypeBuilderError = N6;

  class M6 {
    Create($) {
      return $;
    }
    Throw($) {
      throw new N6($);
    }
    Discard($, W) {
      return W.reduce((Y, X) => {
        const { [X]: Z, ...Q } = Y;
        return Q;
      }, $);
    }
    Strict($) {
      return JSON.parse(JSON.stringify($));
    }
  }
  m8.TypeBuilder = M6;

  class L$ extends M6 {
    ReadonlyOptional($) {
      return this.Readonly(this.Optional($));
    }
    Readonly($) {
      return { ...m.Type($), [m8.Readonly]: "Readonly" };
    }
    Optional($) {
      return { ...m.Type($), [m8.Optional]: "Optional" };
    }
    Any($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Any" });
    }
    Array($, W = {}) {
      return this.Create({ ...W, [m8.Kind]: "Array", type: "array", items: m.Type($) });
    }
    Boolean($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Boolean", type: "boolean" });
    }
    Capitalize($, W = {}) {
      return { ...E1.Map(m.Type($), "Capitalize"), ...W };
    }
    Composite($, W) {
      const Y = m8.Type.Intersect($, {}), Z = P$.ResolveKeys(Y, { includePatterns: false }).reduce((Q, J) => ({ ...Q, [J]: m8.Type.Index(Y, [J]) }), {});
      return m8.Type.Object(Z, W);
    }
    Enum($, W = {}) {
      const Y = Object.getOwnPropertyNames($).filter((Q) => isNaN(Q)).map((Q) => $[Q]), Z = [...new Set(Y)].map((Q) => m8.Type.Literal(Q));
      return this.Union(Z, { ...W, [m8.Hint]: "Enum" });
    }
    Extends($, W, Y, X, Z = {}) {
      switch (P1.Extends($, W)) {
        case C.Union:
          return this.Union([m.Type(Y, Z), m.Type(X, Z)]);
        case C.True:
          return m.Type(Y, Z);
        case C.False:
          return m.Type(X, Z);
      }
    }
    Exclude($, W, Y = {}) {
      return U.TTemplateLiteral($) ? this.Exclude(J1.Resolve($), W, Y) : U.TTemplateLiteral(W) ? this.Exclude($, J1.Resolve(W), Y) : U.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => P1.Extends(Z, W) === C.False);
        return X.length === 1 ? m.Type(X[0], Y) : this.Union(X, Y);
      })() : P1.Extends($, W) !== C.False ? this.Never(Y) : m.Type($, Y);
    }
    Extract($, W, Y = {}) {
      return U.TTemplateLiteral($) ? this.Extract(J1.Resolve($), W, Y) : U.TTemplateLiteral(W) ? this.Extract($, J1.Resolve(W), Y) : U.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => P1.Extends(Z, W) !== C.False);
        return X.length === 1 ? m.Type(X[0], Y) : this.Union(X, Y);
      })() : P1.Extends($, W) !== C.False ? m.Type($, Y) : this.Never(Y);
    }
    Index($, W, Y = {}) {
      return U.TArray($) && U.TNumber(W) ? (() => {
        return m.Type($.items, Y);
      })() : U.TTuple($) && U.TNumber(W) ? (() => {
        const Z = (x.IsUndefined($.items) ? [] : $.items).map((Q) => m.Type(Q));
        return this.Union(Z, Y);
      })() : (() => {
        const X = r1.Resolve(W), Z = m.Type($);
        return $6.Resolve(Z, X, Y);
      })();
    }
    Integer($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Integer", type: "integer" });
    }
    Intersect($, W = {}) {
      if ($.length === 0)
        return m8.Type.Never();
      if ($.length === 1)
        return m.Type($[0], W);
      if ($.some((Q) => U.TTransform(Q)))
        this.Throw("Cannot intersect transform types");
      const Y = $.every((Q) => U.TObject(Q)), X = m.Rest($), Z = U.TSchema(W.unevaluatedProperties) ? { unevaluatedProperties: m.Type(W.unevaluatedProperties) } : {};
      return W.unevaluatedProperties === false || U.TSchema(W.unevaluatedProperties) || Y ? this.Create({ ...W, ...Z, [m8.Kind]: "Intersect", type: "object", allOf: X }) : this.Create({ ...W, ...Z, [m8.Kind]: "Intersect", allOf: X });
    }
    KeyOf($, W = {}) {
      return U.TRecord($) ? (() => {
        const Y = Object.getOwnPropertyNames($.patternProperties)[0];
        return Y === m8.PatternNumberExact ? this.Number(W) : Y === m8.PatternStringExact ? this.String(W) : this.Throw("Unable to resolve key type from Record key pattern");
      })() : U.TTuple($) ? (() => {
        const X = (x.IsUndefined($.items) ? [] : $.items).map((Z, Q) => m8.Type.Literal(Q.toString()));
        return this.Union(X, W);
      })() : U.TArray($) ? (() => {
        return this.Number(W);
      })() : (() => {
        const Y = P$.ResolveKeys($, { includePatterns: false });
        if (Y.length === 0)
          return this.Never(W);
        const X = Y.map((Z) => this.Literal(Z));
        return this.Union(X, W);
      })();
    }
    Literal($, W = {}) {
      return this.Create({ ...W, [m8.Kind]: "Literal", const: $, type: typeof $ });
    }
    Lowercase($, W = {}) {
      return { ...E1.Map(m.Type($), "Lowercase"), ...W };
    }
    Never($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Never", not: {} });
    }
    Not($, W) {
      return this.Create({ ...W, [m8.Kind]: "Not", not: m.Type($) });
    }
    Null($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Null", type: "null" });
    }
    Number($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Number", type: "number" });
    }
    Object($, W = {}) {
      const Y = Object.getOwnPropertyNames($), X = Y.filter((z) => U.TOptional($[z])), Z = Y.filter((z) => !X.includes(z)), Q = U.TSchema(W.additionalProperties) ? { additionalProperties: m.Type(W.additionalProperties) } : {}, J = Y.reduce((z, F) => ({ ...z, [F]: m.Type($[F]) }), {});
      return Z.length > 0 ? this.Create({ ...W, ...Q, [m8.Kind]: "Object", type: "object", properties: J, required: Z }) : this.Create({ ...W, ...Q, [m8.Kind]: "Object", type: "object", properties: J });
    }
    Omit($, W, Y = {}) {
      const X = r1.Resolve(W);
      return V1.Map(this.Discard(m.Type($), ["$id", m8.Transform]), (Z) => {
        if (x.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => !X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, Y);
    }
    Partial($, W = {}) {
      return V1.Map(this.Discard(m.Type($), ["$id", m8.Transform]), (Y) => {
        const X = Object.getOwnPropertyNames(Y.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Optional(Y.properties[Q]) };
        }, {});
        return this.Object(X, this.Discard(Y, ["required"]));
      }, W);
    }
    Pick($, W, Y = {}) {
      const X = r1.Resolve(W);
      return V1.Map(this.Discard(m.Type($), ["$id", m8.Transform]), (Z) => {
        if (x.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (!X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, Y);
    }
    Record($, W, Y = {}) {
      return U.TTemplateLiteral($) ? (() => {
        const X = g1.ParseExact($.pattern);
        return f1.Check(X) ? this.Object([...T1.Generate(X)].reduce((Z, Q) => ({ ...Z, [Q]: m.Type(W) }), {}), Y) : this.Create({ ...Y, [m8.Kind]: "Record", type: "object", patternProperties: { [$.pattern]: m.Type(W) } });
      })() : U.TUnion($) ? (() => {
        const X = W6.Resolve($);
        if (U.TUnionLiteral(X)) {
          const Z = X.anyOf.reduce((Q, J) => ({ ...Q, [J.const]: m.Type(W) }), {});
          return this.Object(Z, { ...Y, [m8.Hint]: "Record" });
        } else
          this.Throw("Record key of type union contains non-literal types");
      })() : U.TLiteral($) ? (() => {
        return x.IsString($.const) || x.IsNumber($.const) ? this.Object({ [$.const]: m.Type(W) }, Y) : this.Throw("Record key of type literal is not of type string or number");
      })() : U.TInteger($) || U.TNumber($) ? (() => {
        return this.Create({ ...Y, [m8.Kind]: "Record", type: "object", patternProperties: { [m8.PatternNumberExact]: m.Type(W) } });
      })() : U.TString($) ? (() => {
        const X = x.IsUndefined($.pattern) ? m8.PatternStringExact : $.pattern;
        return this.Create({ ...Y, [m8.Kind]: "Record", type: "object", patternProperties: { [X]: m.Type(W) } });
      })() : this.Never();
    }
    Recursive($, W = {}) {
      if (x.IsUndefined(W.$id))
        W.$id = `T${gX++}`;
      const Y = $({ [m8.Kind]: "This", $ref: `${W.$id}` });
      return Y.$id = W.$id, this.Create({ ...W, [m8.Hint]: "Recursive", ...Y });
    }
    Ref($, W = {}) {
      if (x.IsString($))
        return this.Create({ ...W, [m8.Kind]: "Ref", $ref: $ });
      if (x.IsUndefined($.$id))
        this.Throw("Reference target type must specify an $id");
      return this.Create({ ...W, [m8.Kind]: "Ref", $ref: $.$id });
    }
    Required($, W = {}) {
      return V1.Map(this.Discard(m.Type($), ["$id", m8.Transform]), (Y) => {
        const X = Object.getOwnPropertyNames(Y.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Discard(Y.properties[Q], [m8.Optional]) };
        }, {});
        return this.Object(X, Y);
      }, W);
    }
    Rest($) {
      return U.TTuple($) && !x.IsUndefined($.items) ? m.Rest($.items) : U.TIntersect($) ? m.Rest($.allOf) : U.TUnion($) ? m.Rest($.anyOf) : [];
    }
    String($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "String", type: "string" });
    }
    TemplateLiteral($, W = {}) {
      const Y = x.IsString($) ? O$.Create(Y6.Parse($)) : O$.Create($);
      return this.Create({ ...W, [m8.Kind]: "TemplateLiteral", type: "string", pattern: Y });
    }
    Transform($) {
      return new H6($);
    }
    Tuple($, W = {}) {
      const [Y, X, Z] = [false, $.length, $.length], Q = m.Rest($), J = $.length > 0 ? { ...W, [m8.Kind]: "Tuple", type: "array", items: Q, additionalItems: Y, minItems: X, maxItems: Z } : { ...W, [m8.Kind]: "Tuple", type: "array", minItems: X, maxItems: Z };
      return this.Create(J);
    }
    Uncapitalize($, W = {}) {
      return { ...E1.Map(m.Type($), "Uncapitalize"), ...W };
    }
    Union($, W = {}) {
      return U.TTemplateLiteral($) ? J1.Resolve($) : (() => {
        const Y = $;
        if (Y.length === 0)
          return this.Never(W);
        if (Y.length === 1)
          return this.Create(m.Type(Y[0], W));
        const X = m.Rest(Y);
        return this.Create({ ...W, [m8.Kind]: "Union", anyOf: X });
      })();
    }
    Unknown($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Unknown" });
    }
    Unsafe($ = {}) {
      return this.Create({ ...$, [m8.Kind]: $[m8.Kind] || "Unsafe" });
    }
    Uppercase($, W = {}) {
      return { ...E1.Map(m.Type($), "Uppercase"), ...W };
    }
  }
  m8.JsonTypeBuilder = L$;

  class A6 extends L$ {
    AsyncIterator($, W = {}) {
      return this.Create({ ...W, [m8.Kind]: "AsyncIterator", type: "AsyncIterator", items: m.Type($) });
    }
    Awaited($, W = {}) {
      const Y = (X) => X.length > 0 ? (() => {
        const [Z, ...Q] = X;
        return [this.Awaited(Z), ...Y(Q)];
      })() : X;
      return U.TIntersect($) ? m8.Type.Intersect(Y($.allOf)) : U.TUnion($) ? m8.Type.Union(Y($.anyOf)) : U.TPromise($) ? this.Awaited($.item) : m.Type($, W);
    }
    BigInt($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "BigInt", type: "bigint" });
    }
    ConstructorParameters($, W = {}) {
      return this.Tuple([...$.parameters], { ...W });
    }
    Constructor($, W, Y) {
      const [X, Z] = [m.Rest($), m.Type(W)];
      return this.Create({ ...Y, [m8.Kind]: "Constructor", type: "Constructor", parameters: X, returns: Z });
    }
    Date($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Date", type: "Date" });
    }
    Function($, W, Y) {
      const [X, Z] = [m.Rest($), m.Type(W)];
      return this.Create({ ...Y, [m8.Kind]: "Function", type: "Function", parameters: X, returns: Z });
    }
    InstanceType($, W = {}) {
      return m.Type($.returns, W);
    }
    Iterator($, W = {}) {
      return this.Create({ ...W, [m8.Kind]: "Iterator", type: "Iterator", items: m.Type($) });
    }
    Parameters($, W = {}) {
      return this.Tuple($.parameters, { ...W });
    }
    Promise($, W = {}) {
      return this.Create({ ...W, [m8.Kind]: "Promise", type: "Promise", item: m.Type($) });
    }
    RegExp($, W = {}) {
      const Y = x.IsString($) ? $ : $.source;
      return this.Create({ ...W, [m8.Kind]: "String", type: "string", pattern: Y });
    }
    RegEx($, W = {}) {
      return this.RegExp($, W);
    }
    ReturnType($, W = {}) {
      return m.Type($.returns, W);
    }
    Symbol($) {
      return this.Create({ ...$, [m8.Kind]: "Symbol", type: "symbol" });
    }
    Undefined($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Undefined", type: "undefined" });
    }
    Uint8Array($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Uint8Array", type: "Uint8Array" });
    }
    Void($ = {}) {
      return this.Create({ ...$, [m8.Kind]: "Void", type: "void" });
    }
  }
  m8.JavaScriptTypeBuilder = A6;
  m8.JsonType = new L$;
  m8.Type = new A6;
});
var j6 = H0((o8) => {
  var D6 = function($, W) {
    switch (W) {
      case y.ValueErrorType.ArrayContains:
        return "Expected array to contain at least one matching value";
      case y.ValueErrorType.ArrayMaxContains:
        return `Expected array to contain no more than ${$.maxContains} matching values`;
      case y.ValueErrorType.ArrayMinContains:
        return `Expected array to contain at least ${$.minContains} matching values`;
      case y.ValueErrorType.ArrayMaxItems:
        return `Expected array length to be less or equal to ${$.maxItems}`;
      case y.ValueErrorType.ArrayMinItems:
        return `Expected array length to be greater or equal to ${$.minItems}`;
      case y.ValueErrorType.ArrayUniqueItems:
        return "Expected array elements to be unique";
      case y.ValueErrorType.Array:
        return "Expected array";
      case y.ValueErrorType.AsyncIterator:
        return "Expected AsyncIterator";
      case y.ValueErrorType.BigIntExclusiveMaximum:
        return `Expected bigint to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.BigIntExclusiveMinimum:
        return `Expected bigint to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.BigIntMaximum:
        return `Expected bigint to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.BigIntMinimum:
        return `Expected bigint to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.BigIntMultipleOf:
        return `Expected bigint to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.BigInt:
        return "Expected bigint";
      case y.ValueErrorType.Boolean:
        return "Expected boolean";
      case y.ValueErrorType.DateExclusiveMinimumTimestamp:
        return `Expected Date timestamp to be greater than ${$.exclusiveMinimumTimestamp}`;
      case y.ValueErrorType.DateExclusiveMaximumTimestamp:
        return `Expected Date timestamp to be less than ${$.exclusiveMaximumTimestamp}`;
      case y.ValueErrorType.DateMinimumTimestamp:
        return `Expected Date timestamp to be greater or equal to ${$.minimumTimestamp}`;
      case y.ValueErrorType.DateMaximumTimestamp:
        return `Expected Date timestamp to be less or equal to ${$.maximumTimestamp}`;
      case y.ValueErrorType.DateMultipleOfTimestamp:
        return `Expected Date timestamp to be a multiple of ${$.multipleOfTimestamp}`;
      case y.ValueErrorType.Date:
        return "Expected Date";
      case y.ValueErrorType.Function:
        return "Expected function";
      case y.ValueErrorType.IntegerExclusiveMaximum:
        return `Expected integer to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.IntegerExclusiveMinimum:
        return `Expected integer to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.IntegerMaximum:
        return `Expected integer to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.IntegerMinimum:
        return `Expected integer to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.IntegerMultipleOf:
        return `Expected integer to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Integer:
        return "Expected integer";
      case y.ValueErrorType.IntersectUnevaluatedProperties:
        return "Unexpected property";
      case y.ValueErrorType.Intersect:
        return "Expected all values to match";
      case y.ValueErrorType.Iterator:
        return "Expected Iterator";
      case y.ValueErrorType.Literal:
        return `Expected ${typeof $.const === "string" ? `'${$.const}'` : $.const}`;
      case y.ValueErrorType.Never:
        return "Never";
      case y.ValueErrorType.Not:
        return "Value should not match";
      case y.ValueErrorType.Null:
        return "Expected null";
      case y.ValueErrorType.NumberExclusiveMaximum:
        return `Expected number to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.NumberExclusiveMinimum:
        return `Expected number to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.NumberMaximum:
        return `Expected number to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.NumberMinimum:
        return `Expected number to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.NumberMultipleOf:
        return `Expected number to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Number:
        return "Expected number";
      case y.ValueErrorType.Object:
        return "Expected object";
      case y.ValueErrorType.ObjectAdditionalProperties:
        return "Unexpected property";
      case y.ValueErrorType.ObjectMaxProperties:
        return `Expected object to have no more than ${$.maxProperties} properties`;
      case y.ValueErrorType.ObjectMinProperties:
        return `Expected object to have at least ${$.minProperties} properties`;
      case y.ValueErrorType.ObjectRequiredProperty:
        return "Required property";
      case y.ValueErrorType.Promise:
        return "Expected Promise";
      case y.ValueErrorType.StringFormatUnknown:
        return `Unknown format '${$.format}'`;
      case y.ValueErrorType.StringFormat:
        return `Expected string to match '${$.format}' format`;
      case y.ValueErrorType.StringMaxLength:
        return `Expected string length less or equal to ${$.maxLength}`;
      case y.ValueErrorType.StringMinLength:
        return `Expected string length greater or equal to ${$.minLength}`;
      case y.ValueErrorType.StringPattern:
        return `Expected string to match '${$.pattern}'`;
      case y.ValueErrorType.String:
        return "Expected string";
      case y.ValueErrorType.Symbol:
        return "Expected symbol";
      case y.ValueErrorType.TupleLength:
        return `Expected tuple to have ${$.maxItems || 0} elements`;
      case y.ValueErrorType.Tuple:
        return "Expected tuple";
      case y.ValueErrorType.Uint8ArrayMaxByteLength:
        return `Expected byte length less or equal to ${$.maxByteLength}`;
      case y.ValueErrorType.Uint8ArrayMinByteLength:
        return `Expected byte length greater or equal to ${$.minByteLength}`;
      case y.ValueErrorType.Uint8Array:
        return "Expected Uint8Array";
      case y.ValueErrorType.Undefined:
        return "Expected undefined";
      case y.ValueErrorType.Union:
        return "Expected union value";
      case y.ValueErrorType.Void:
        return "Expected void";
      case y.ValueErrorType.Kind:
        return `Expected kind '${$[z1.Kind]}'`;
      default:
        return "Unknown error type";
    }
  };
  Object.defineProperty(o8, "__esModule", { value: true });
  o8.DefaultErrorFunction = o8.TypeSystemPolicy = o8.TypeSystemErrorFunction = o8.TypeSystem = o8.TypeSystemDuplicateFormat = o8.TypeSystemDuplicateTypeKind = undefined;
  var C$ = k0(), y = $$(), z1 = f0();

  class w6 extends z1.TypeBoxError {
    constructor($) {
      super(`Duplicate type kind '${$}' detected`);
    }
  }
  o8.TypeSystemDuplicateTypeKind = w6;

  class K6 extends z1.TypeBoxError {
    constructor($) {
      super(`Duplicate string format '${$}' detected`);
    }
  }
  o8.TypeSystemDuplicateFormat = K6;
  var u8;
  (function($) {
    function W(X, Z) {
      if (z1.TypeRegistry.Has(X))
        throw new w6(X);
      return z1.TypeRegistry.Set(X, Z), (Q = {}) => z1.Type.Unsafe({ ...Q, [z1.Kind]: X });
    }
    $.Type = W;
    function Y(X, Z) {
      if (z1.FormatRegistry.Has(X))
        throw new K6(X);
      return z1.FormatRegistry.Set(X, Z), X;
    }
    $.Format = Y;
  })(u8 || (o8.TypeSystem = u8 = {}));
  var h8;
  (function($) {
    let W = D6;
    function Y() {
      W = D6;
    }
    $.Reset = Y;
    function X(Q) {
      W = Q;
    }
    $.Set = X;
    function Z() {
      return W;
    }
    $.Get = Z;
  })(h8 || (o8.TypeSystemErrorFunction = h8 = {}));
  var n8;
  (function($) {
    $.ExactOptionalPropertyTypes = false, $.AllowArrayObject = false, $.AllowNaN = false, $.AllowNullVoid = false;
    function W(J, z) {
      return $.ExactOptionalPropertyTypes ? z in J : J[z] !== undefined;
    }
    $.IsExactOptionalProperty = W;
    function Y(J) {
      const z = (0, C$.IsObject)(J);
      return $.AllowArrayObject ? z : z && !(0, C$.IsArray)(J);
    }
    $.IsObjectLike = Y;
    function X(J) {
      return Y(J) && !(J instanceof Date) && !(J instanceof Uint8Array);
    }
    $.IsRecordLike = X;
    function Z(J) {
      const z = (0, C$.IsNumber)(J);
      return $.AllowNaN ? z : z && Number.isFinite(J);
    }
    $.IsNumberLike = Z;
    function Q(J) {
      const z = (0, C$.IsUndefined)(J);
      return $.AllowNullVoid ? z || J === null : z;
    }
    $.IsVoidLike = Q;
  })(n8 || (o8.TypeSystemPolicy = n8 = {}));
  o8.DefaultErrorFunction = D6;
});
var D1 = H0((l8) => {
  var LZ = function($, W) {
    const Y = W.findIndex((X) => X.$id === $.$ref);
    if (Y === -1)
      throw new P6($);
    return W[Y];
  };
  Object.defineProperty(l8, "__esModule", { value: true });
  l8.Deref = l8.TypeDereferenceError = undefined;
  var SZ = f0();

  class P6 extends SZ.TypeBoxError {
    constructor($) {
      super(`Unable to dereference schema with $id '${$.$id}'`);
      this.schema = $;
    }
  }
  l8.TypeDereferenceError = P6;
  l8.Deref = LZ;
});
var W$ = H0((e8) => {
  function* RZ($) {
    const W = $ === 0 ? 1 : Math.ceil(Math.floor(Math.log2($) + 1) / 8);
    for (let Y = 0;Y < W; Y++)
      yield $ >> 8 * (W - 1 - Y) & 255;
  }
  var _Z = function($) {
    E0(T0.Array);
    for (let W of $)
      y1(W);
  }, EZ = function($) {
    E0(T0.Boolean), E0($ ? 1 : 0);
  }, VZ = function($) {
    E0(T0.BigInt), r8.setBigInt64(0, $);
    for (let W of a8)
      E0(W);
  }, xZ = function($) {
    E0(T0.Date), y1($.getTime());
  }, kZ = function($) {
    E0(T0.Null);
  }, gZ = function($) {
    E0(T0.Number), r8.setFloat64(0, $);
    for (let W of a8)
      E0(W);
  }, fZ = function($) {
    E0(T0.Object);
    for (let W of globalThis.Object.keys($).sort())
      y1(W), y1($[W]);
  }, TZ = function($) {
    E0(T0.String);
    for (let W = 0;W < $.length; W++)
      for (let Y of RZ($.charCodeAt(W)))
        E0(Y);
  }, dZ = function($) {
    E0(T0.Symbol), y1($.description);
  }, yZ = function($) {
    E0(T0.Uint8Array);
    for (let W = 0;W < $.length; W++)
      E0($[W]);
  }, vZ = function($) {
    return E0(T0.Undefined);
  }, y1 = function($) {
    if ((0, n0.IsArray)($))
      return _Z($);
    if ((0, n0.IsBoolean)($))
      return EZ($);
    if ((0, n0.IsBigInt)($))
      return VZ($);
    if ((0, n0.IsDate)($))
      return xZ($);
    if ((0, n0.IsNull)($))
      return kZ($);
    if ((0, n0.IsNumber)($))
      return gZ($);
    if ((0, n0.IsPlainObject)($))
      return fZ($);
    if ((0, n0.IsString)($))
      return TZ($);
    if ((0, n0.IsSymbol)($))
      return dZ($);
    if ((0, n0.IsUint8Array)($))
      return yZ($);
    if ((0, n0.IsUndefined)($))
      return vZ($);
    throw new O6($);
  }, E0 = function($) {
    d1 = d1 ^ GZ[$], d1 = d1 * IZ % bZ;
  }, pZ = function($) {
    return d1 = BigInt("14695981039346656037"), y1($), d1;
  };
  Object.defineProperty(e8, "__esModule", { value: true });
  e8.Hash = e8.ByteMarker = e8.ValueHashError = undefined;
  var n0 = k0();

  class O6 extends Error {
    constructor($) {
      super("Unable to hash value");
      this.value = $;
    }
  }
  e8.ValueHashError = O6;
  var T0;
  (function($) {
    $[$.Undefined = 0] = "Undefined", $[$.Null = 1] = "Null", $[$.Boolean = 2] = "Boolean", $[$.Number = 3] = "Number", $[$.String = 4] = "String", $[$.Object = 5] = "Object", $[$.Array = 6] = "Array", $[$.Date = 7] = "Date", $[$.Uint8Array = 8] = "Uint8Array", $[$.Symbol = 9] = "Symbol", $[$.BigInt = 10] = "BigInt";
  })(T0 || (e8.ByteMarker = T0 = {}));
  var d1 = BigInt("14695981039346656037"), [IZ, bZ] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")], GZ = Array.from({ length: 256 }).map(($, W) => BigInt(W)), s8 = new Float64Array(1), r8 = new DataView(s8.buffer), a8 = new Uint8Array(s8.buffer);
  e8.Hash = pZ;
});
var $$ = H0((YW) => {
  var t = function($) {
    return $ !== undefined;
  }, g = function($, W, Y, X) {
    return { type: $, schema: W, path: Y, value: X, message: v1.TypeSystemErrorFunction.Get()(W, $) };
  };
  function* hZ($, W, Y, X) {
  }
  function* nZ($, W, Y, X) {
    if (!(0, U0.IsArray)(X))
      return yield g(k.Array, $, Y, X);
    if (t($.minItems) && !(X.length >= $.minItems))
      yield g(k.ArrayMinItems, $, Y, X);
    if (t($.maxItems) && !(X.length <= $.maxItems))
      yield g(k.ArrayMaxItems, $, Y, X);
    for (let J = 0;J < X.length; J++)
      yield* b0($.items, W, `${Y}/${J}`, X[J]);
    if ($.uniqueItems === true && !function() {
      const J = new Set;
      for (let z of X) {
        const F = (0, uZ.Hash)(z);
        if (J.has(F))
          return false;
        else
          J.add(F);
      }
      return true;
    }())
      yield g(k.ArrayUniqueItems, $, Y, X);
    if (!(t($.contains) || t($.minContains) || t($.maxContains)))
      return;
    const Z = t($.contains) ? $.contains : p0.Type.Never(), Q = X.reduce((J, z, F) => b0(Z, W, `${Y}${F}`, z).next().done === true ? J + 1 : J, 0);
    if (Q === 0)
      yield g(k.ArrayContains, $, Y, X);
    if ((0, U0.IsNumber)($.minContains) && Q < $.minContains)
      yield g(k.ArrayMinContains, $, Y, X);
    if ((0, U0.IsNumber)($.maxContains) && Q > $.maxContains)
      yield g(k.ArrayMaxContains, $, Y, X);
  }
  function* oZ($, W, Y, X) {
    if (!(0, U0.IsAsyncIterator)(X))
      yield g(k.AsyncIterator, $, Y, X);
  }
  function* cZ($, W, Y, X) {
    if (!(0, U0.IsBigInt)(X))
      return yield g(k.BigInt, $, Y, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.BigIntExclusiveMaximum, $, Y, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.BigIntExclusiveMinimum, $, Y, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(k.BigIntMaximum, $, Y, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(k.BigIntMinimum, $, Y, X);
    if (t($.multipleOf) && X % $.multipleOf !== BigInt(0))
      yield g(k.BigIntMultipleOf, $, Y, X);
  }
  function* lZ($, W, Y, X) {
    if (!(0, U0.IsBoolean)(X))
      yield g(k.Boolean, $, Y, X);
  }
  function* tZ($, W, Y, X) {
    yield* b0($.returns, W, Y, X.prototype);
  }
  function* sZ($, W, Y, X) {
    if (!(0, U0.IsDate)(X))
      return yield g(k.Date, $, Y, X);
    if (t($.exclusiveMaximumTimestamp) && !(X.getTime() < $.exclusiveMaximumTimestamp))
      yield g(k.DateExclusiveMaximumTimestamp, $, Y, X);
    if (t($.exclusiveMinimumTimestamp) && !(X.getTime() > $.exclusiveMinimumTimestamp))
      yield g(k.DateExclusiveMinimumTimestamp, $, Y, X);
    if (t($.maximumTimestamp) && !(X.getTime() <= $.maximumTimestamp))
      yield g(k.DateMaximumTimestamp, $, Y, X);
    if (t($.minimumTimestamp) && !(X.getTime() >= $.minimumTimestamp))
      yield g(k.DateMinimumTimestamp, $, Y, X);
    if (t($.multipleOfTimestamp) && X.getTime() % $.multipleOfTimestamp !== 0)
      yield g(k.DateMultipleOfTimestamp, $, Y, X);
  }
  function* rZ($, W, Y, X) {
    if (!(0, U0.IsFunction)(X))
      yield g(k.Function, $, Y, X);
  }
  function* aZ($, W, Y, X) {
    if (!(0, U0.IsInteger)(X))
      return yield g(k.Integer, $, Y, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.IntegerExclusiveMaximum, $, Y, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.IntegerExclusiveMinimum, $, Y, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(k.IntegerMaximum, $, Y, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(k.IntegerMinimum, $, Y, X);
    if (t($.multipleOf) && X % $.multipleOf !== 0)
      yield g(k.IntegerMultipleOf, $, Y, X);
  }
  function* eZ($, W, Y, X) {
    for (let Z of $.allOf) {
      const Q = b0(Z, W, Y, X).next();
      if (!Q.done)
        yield g(k.Intersect, $, Y, X), yield Q.value;
    }
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q))
          yield g(k.IntersectUnevaluatedProperties, $, `${Y}/${Q}`, X);
    }
    if (typeof $.unevaluatedProperties === "object") {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q)) {
          const J = b0($.unevaluatedProperties, W, `${Y}/${Q}`, X[Q]).next();
          if (!J.done)
            yield J.value;
        }
    }
  }
  function* $Q($, W, Y, X) {
    if (!(0, U0.IsIterator)(X))
      yield g(k.Iterator, $, Y, X);
  }
  function* WQ($, W, Y, X) {
    if (X !== $.const)
      yield g(k.Literal, $, Y, X);
  }
  function* YQ($, W, Y, X) {
    yield g(k.Never, $, Y, X);
  }
  function* XQ($, W, Y, X) {
    if (b0($.not, W, Y, X).next().done === true)
      yield g(k.Not, $, Y, X);
  }
  function* ZQ($, W, Y, X) {
    if (!(0, U0.IsNull)(X))
      yield g(k.Null, $, Y, X);
  }
  function* QQ($, W, Y, X) {
    if (!v1.TypeSystemPolicy.IsNumberLike(X))
      return yield g(k.Number, $, Y, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.NumberExclusiveMaximum, $, Y, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.NumberExclusiveMinimum, $, Y, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(k.NumberMaximum, $, Y, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(k.NumberMinimum, $, Y, X);
    if (t($.multipleOf) && X % $.multipleOf !== 0)
      yield g(k.NumberMultipleOf, $, Y, X);
  }
  function* JQ($, W, Y, X) {
    if (!v1.TypeSystemPolicy.IsObjectLike(X))
      return yield g(k.Object, $, Y, X);
    if (t($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(k.ObjectMinProperties, $, Y, X);
    if (t($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(k.ObjectMaxProperties, $, Y, X);
    const Z = Array.isArray($.required) ? $.required : [], Q = Object.getOwnPropertyNames($.properties), J = Object.getOwnPropertyNames(X);
    for (let z of Z) {
      if (J.includes(z))
        continue;
      yield g(k.ObjectRequiredProperty, $.properties[z], `${Y}/${z}`, undefined);
    }
    if ($.additionalProperties === false) {
      for (let z of J)
        if (!Q.includes(z))
          yield g(k.ObjectAdditionalProperties, $, `${Y}/${z}`, X[z]);
    }
    if (typeof $.additionalProperties === "object")
      for (let z of J) {
        if (Q.includes(z))
          continue;
        yield* b0($.additionalProperties, W, `${Y}/${z}`, X[z]);
      }
    for (let z of Q) {
      const F = $.properties[z];
      if ($.required && $.required.includes(z)) {
        if (yield* b0(F, W, `${Y}/${z}`, X[z]), p0.ExtendsUndefined.Check($) && !(z in X))
          yield g(k.ObjectRequiredProperty, F, `${Y}/${z}`, undefined);
      } else if (v1.TypeSystemPolicy.IsExactOptionalProperty(X, z))
        yield* b0(F, W, `${Y}/${z}`, X[z]);
    }
  }
  function* zQ($, W, Y, X) {
    if (!(0, U0.IsPromise)(X))
      yield g(k.Promise, $, Y, X);
  }
  function* HQ($, W, Y, X) {
    if (!v1.TypeSystemPolicy.IsRecordLike(X))
      return yield g(k.Object, $, Y, X);
    if (t($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(k.ObjectMinProperties, $, Y, X);
    if (t($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(k.ObjectMaxProperties, $, Y, X);
    const [Z, Q] = Object.entries($.patternProperties)[0], J = new RegExp(Z);
    for (let [z, F] of Object.entries(X))
      if (J.test(z))
        yield* b0(Q, W, `${Y}/${z}`, F);
    if (typeof $.additionalProperties === "object") {
      for (let [z, F] of Object.entries(X))
        if (!J.test(z))
          yield* b0($.additionalProperties, W, `${Y}/${z}`, F);
    }
    if ($.additionalProperties === false)
      for (let [z, F] of Object.entries(X)) {
        if (J.test(z))
          continue;
        return yield g(k.ObjectAdditionalProperties, $, `${Y}/${z}`, F);
      }
  }
  function* qQ($, W, Y, X) {
    yield* b0((0, WW.Deref)($, W), W, Y, X);
  }
  function* NQ($, W, Y, X) {
    if (!(0, U0.IsString)(X))
      return yield g(k.String, $, Y, X);
    if (t($.minLength) && !(X.length >= $.minLength))
      yield g(k.StringMinLength, $, Y, X);
    if (t($.maxLength) && !(X.length <= $.maxLength))
      yield g(k.StringMaxLength, $, Y, X);
    if ((0, U0.IsString)($.pattern)) {
      if (!new RegExp($.pattern).test(X))
        yield g(k.StringPattern, $, Y, X);
    }
    if ((0, U0.IsString)($.format)) {
      if (!p0.FormatRegistry.Has($.format))
        yield g(k.StringFormatUnknown, $, Y, X);
      else if (!p0.FormatRegistry.Get($.format)(X))
        yield g(k.StringFormat, $, Y, X);
    }
  }
  function* MQ($, W, Y, X) {
    if (!(0, U0.IsSymbol)(X))
      yield g(k.Symbol, $, Y, X);
  }
  function* AQ($, W, Y, X) {
    if (!(0, U0.IsString)(X))
      return yield g(k.String, $, Y, X);
    if (!new RegExp($.pattern).test(X))
      yield g(k.StringPattern, $, Y, X);
  }
  function* FQ($, W, Y, X) {
    yield* b0((0, WW.Deref)($, W), W, Y, X);
  }
  function* UQ($, W, Y, X) {
    if (!(0, U0.IsArray)(X))
      return yield g(k.Tuple, $, Y, X);
    if ($.items === undefined && X.length !== 0)
      return yield g(k.TupleLength, $, Y, X);
    if (X.length !== $.maxItems)
      return yield g(k.TupleLength, $, Y, X);
    if (!$.items)
      return;
    for (let Z = 0;Z < $.items.length; Z++)
      yield* b0($.items[Z], W, `${Y}/${Z}`, X[Z]);
  }
  function* BQ($, W, Y, X) {
    if (!(0, U0.IsUndefined)(X))
      yield g(k.Undefined, $, Y, X);
  }
  function* DQ($, W, Y, X) {
    let Z = 0;
    for (let Q of $.anyOf) {
      const J = [...b0(Q, W, Y, X)];
      if (J.length === 0)
        return;
      Z += J.length;
    }
    if (Z > 0)
      yield g(k.Union, $, Y, X);
  }
  function* wQ($, W, Y, X) {
    if (!(0, U0.IsUint8Array)(X))
      return yield g(k.Uint8Array, $, Y, X);
    if (t($.maxByteLength) && !(X.length <= $.maxByteLength))
      yield g(k.Uint8ArrayMaxByteLength, $, Y, X);
    if (t($.minByteLength) && !(X.length >= $.minByteLength))
      yield g(k.Uint8ArrayMinByteLength, $, Y, X);
  }
  function* KQ($, W, Y, X) {
  }
  function* jQ($, W, Y, X) {
    if (!v1.TypeSystemPolicy.IsVoidLike(X))
      yield g(k.Void, $, Y, X);
  }
  function* PQ($, W, Y, X) {
    if (!p0.TypeRegistry.Get($[p0.Kind])($, X))
      yield g(k.Kind, $, Y, X);
  }
  function* b0($, W, Y, X) {
    const Z = t($.$id) ? [...W, $] : W, Q = $;
    switch (Q[p0.Kind]) {
      case "Any":
        return yield* hZ(Q, Z, Y, X);
      case "Array":
        return yield* nZ(Q, Z, Y, X);
      case "AsyncIterator":
        return yield* oZ(Q, Z, Y, X);
      case "BigInt":
        return yield* cZ(Q, Z, Y, X);
      case "Boolean":
        return yield* lZ(Q, Z, Y, X);
      case "Constructor":
        return yield* tZ(Q, Z, Y, X);
      case "Date":
        return yield* sZ(Q, Z, Y, X);
      case "Function":
        return yield* rZ(Q, Z, Y, X);
      case "Integer":
        return yield* aZ(Q, Z, Y, X);
      case "Intersect":
        return yield* eZ(Q, Z, Y, X);
      case "Iterator":
        return yield* $Q(Q, Z, Y, X);
      case "Literal":
        return yield* WQ(Q, Z, Y, X);
      case "Never":
        return yield* YQ(Q, Z, Y, X);
      case "Not":
        return yield* XQ(Q, Z, Y, X);
      case "Null":
        return yield* ZQ(Q, Z, Y, X);
      case "Number":
        return yield* QQ(Q, Z, Y, X);
      case "Object":
        return yield* JQ(Q, Z, Y, X);
      case "Promise":
        return yield* zQ(Q, Z, Y, X);
      case "Record":
        return yield* HQ(Q, Z, Y, X);
      case "Ref":
        return yield* qQ(Q, Z, Y, X);
      case "String":
        return yield* NQ(Q, Z, Y, X);
      case "Symbol":
        return yield* MQ(Q, Z, Y, X);
      case "TemplateLiteral":
        return yield* AQ(Q, Z, Y, X);
      case "This":
        return yield* FQ(Q, Z, Y, X);
      case "Tuple":
        return yield* UQ(Q, Z, Y, X);
      case "Undefined":
        return yield* BQ(Q, Z, Y, X);
      case "Union":
        return yield* DQ(Q, Z, Y, X);
      case "Uint8Array":
        return yield* wQ(Q, Z, Y, X);
      case "Unknown":
        return yield* KQ(Q, Z, Y, X);
      case "Void":
        return yield* jQ(Q, Z, Y, X);
      default:
        if (!p0.TypeRegistry.Has(Q[p0.Kind]))
          throw new S6($);
        return yield* PQ(Q, Z, Y, X);
    }
  }
  var OQ = function(...$) {
    const W = $.length === 3 ? b0($[0], $[1], "", $[2]) : b0($[0], [], "", $[1]);
    return new L6(W);
  };
  Object.defineProperty(YW, "__esModule", { value: true });
  YW.Errors = YW.ValueErrorIterator = YW.ValueErrorsUnknownTypeError = YW.ValueErrorType = undefined;
  var U0 = k0(), v1 = j6(), WW = D1(), uZ = W$(), p0 = f0(), k;
  (function($) {
    $[$.ArrayContains = 0] = "ArrayContains", $[$.ArrayMaxContains = 1] = "ArrayMaxContains", $[$.ArrayMaxItems = 2] = "ArrayMaxItems", $[$.ArrayMinContains = 3] = "ArrayMinContains", $[$.ArrayMinItems = 4] = "ArrayMinItems", $[$.ArrayUniqueItems = 5] = "ArrayUniqueItems", $[$.Array = 6] = "Array", $[$.AsyncIterator = 7] = "AsyncIterator", $[$.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", $[$.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", $[$.BigIntMaximum = 10] = "BigIntMaximum", $[$.BigIntMinimum = 11] = "BigIntMinimum", $[$.BigIntMultipleOf = 12] = "BigIntMultipleOf", $[$.BigInt = 13] = "BigInt", $[$.Boolean = 14] = "Boolean", $[$.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", $[$.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", $[$.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", $[$.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", $[$.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", $[$.Date = 20] = "Date", $[$.Function = 21] = "Function", $[$.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", $[$.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", $[$.IntegerMaximum = 24] = "IntegerMaximum", $[$.IntegerMinimum = 25] = "IntegerMinimum", $[$.IntegerMultipleOf = 26] = "IntegerMultipleOf", $[$.Integer = 27] = "Integer", $[$.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", $[$.Intersect = 29] = "Intersect", $[$.Iterator = 30] = "Iterator", $[$.Kind = 31] = "Kind", $[$.Literal = 32] = "Literal", $[$.Never = 33] = "Never", $[$.Not = 34] = "Not", $[$.Null = 35] = "Null", $[$.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", $[$.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", $[$.NumberMaximum = 38] = "NumberMaximum", $[$.NumberMinimum = 39] = "NumberMinimum", $[$.NumberMultipleOf = 40] = "NumberMultipleOf", $[$.Number = 41] = "Number", $[$.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", $[$.ObjectMaxProperties = 43] = "ObjectMaxProperties", $[$.ObjectMinProperties = 44] = "ObjectMinProperties", $[$.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", $[$.Object = 46] = "Object", $[$.Promise = 47] = "Promise", $[$.StringFormatUnknown = 48] = "StringFormatUnknown", $[$.StringFormat = 49] = "StringFormat", $[$.StringMaxLength = 50] = "StringMaxLength", $[$.StringMinLength = 51] = "StringMinLength", $[$.StringPattern = 52] = "StringPattern", $[$.String = 53] = "String", $[$.Symbol = 54] = "Symbol", $[$.TupleLength = 55] = "TupleLength", $[$.Tuple = 56] = "Tuple", $[$.Uint8ArrayMaxByteLength = 57] = "Uint8ArrayMaxByteLength", $[$.Uint8ArrayMinByteLength = 58] = "Uint8ArrayMinByteLength", $[$.Uint8Array = 59] = "Uint8Array", $[$.Undefined = 60] = "Undefined", $[$.Union = 61] = "Union", $[$.Void = 62] = "Void";
  })(k || (YW.ValueErrorType = k = {}));

  class S6 extends p0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  YW.ValueErrorsUnknownTypeError = S6;

  class L6 {
    constructor($) {
      this.iterator = $;
    }
    [Symbol.iterator]() {
      return this.iterator;
    }
    First() {
      const $ = this.iterator.next();
      return $.done ? undefined : $.value;
    }
  }
  YW.ValueErrorIterator = L6;
  YW.Errors = OQ;
});
var I$ = H0((S1) => {
  var IQ = S1 && S1.__createBinding || (Object.create ? function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    var Z = Object.getOwnPropertyDescriptor(W, Y);
    if (!Z || ("get" in Z ? !W.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return W[Y];
      } };
    Object.defineProperty($, X, Z);
  } : function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    $[X] = W[Y];
  }), bQ = S1 && S1.__exportStar || function($, W) {
    for (var Y in $)
      if (Y !== "default" && !Object.prototype.hasOwnProperty.call(W, Y))
        IQ(W, $, Y);
  };
  Object.defineProperty(S1, "__esModule", { value: true });
  bQ($$(), S1);
});
var b$ = H0((QW) => {
  Object.defineProperty(QW, "__esModule", { value: true });
  QW.ValuePointer = QW.ValuePointerRootDeleteError = QW.ValuePointerRootSetError = undefined;

  class C6 extends Error {
    constructor($, W, Y) {
      super("Cannot set root value");
      this.value = $, this.path = W, this.update = Y;
    }
  }
  QW.ValuePointerRootSetError = C6;

  class I6 extends Error {
    constructor($, W) {
      super("Cannot delete root value");
      this.value = $, this.path = W;
    }
  }
  QW.ValuePointerRootDeleteError = I6;
  var ZW;
  (function($) {
    function W(z) {
      return z.indexOf("~") === -1 ? z : z.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function* Y(z) {
      if (z === "")
        return;
      let [F, w] = [0, 0];
      for (let B = 0;B < z.length; B++)
        if (z.charAt(B) === "/")
          if (B === 0)
            F = B + 1;
          else
            w = B, yield W(z.slice(F, w)), F = B + 1;
        else
          w = B;
      yield W(z.slice(F));
    }
    $.Format = Y;
    function X(z, F, w) {
      if (F === "")
        throw new C6(z, F, w);
      let [B, S, G] = [null, z, ""];
      for (let j of Y(F)) {
        if (S[j] === undefined)
          S[j] = {};
        B = S, S = S[j], G = j;
      }
      B[G] = w;
    }
    $.Set = X;
    function Z(z, F) {
      if (F === "")
        throw new I6(z, F);
      let [w, B, S] = [null, z, ""];
      for (let G of Y(F)) {
        if (B[G] === undefined || B[G] === null)
          return;
        w = B, B = B[G], S = G;
      }
      if (Array.isArray(w)) {
        const G = parseInt(S);
        w.splice(G, 1);
      } else
        delete w[S];
    }
    $.Delete = Z;
    function Q(z, F) {
      if (F === "")
        return true;
      let [w, B, S] = [null, z, ""];
      for (let G of Y(F)) {
        if (B[G] === undefined)
          return false;
        w = B, B = B[G], S = G;
      }
      return Object.getOwnPropertyNames(w).includes(S);
    }
    $.Has = Q;
    function J(z, F) {
      if (F === "")
        return z;
      let w = z;
      for (let B of Y(F)) {
        if (w[B] === undefined)
          return;
        w = w[B];
      }
      return w;
    }
    $.Get = J;
  })(ZW || (QW.ValuePointer = ZW = {}));
});
var p1 = H0((zW) => {
  var _Q = function($) {
    return [...Object.getOwnPropertyNames($), ...Object.getOwnPropertySymbols($)].reduce((Y, X) => ({ ...Y, [X]: b6($[X]) }), {});
  }, EQ = function($) {
    return $.map((W) => b6(W));
  }, VQ = function($) {
    return $.slice();
  }, xQ = function($) {
    return new Date($.toISOString());
  }, kQ = function($) {
    return $;
  }, b6 = function($) {
    if ((0, Y$.IsArray)($))
      return EQ($);
    if ((0, Y$.IsDate)($))
      return xQ($);
    if ((0, Y$.IsPlainObject)($))
      return _Q($);
    if ((0, Y$.IsTypedArray)($))
      return VQ($);
    if ((0, Y$.IsValueType)($))
      return kQ($);
    throw new Error("ValueClone: Unable to clone value");
  };
  Object.defineProperty(zW, "__esModule", { value: true });
  zW.Clone = undefined;
  var Y$ = k0();
  zW.Clone = b6;
});
var E6 = H0((MW) => {
  var X$ = function($, W) {
    return { type: "update", path: $, value: W };
  }, qW = function($, W) {
    return { type: "insert", path: $, value: W };
  }, NW = function($) {
    return { type: "delete", path: $ };
  };
  function* gQ($, W, Y) {
    if (!(0, V0.IsPlainObject)(Y))
      return yield X$($, Y);
    const X = [...Object.keys(W), ...Object.getOwnPropertySymbols(W)], Z = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)];
    for (let Q of X) {
      if ((0, V0.IsSymbol)(Q))
        throw new i1(Q);
      if ((0, V0.IsUndefined)(Y[Q]) && Z.includes(Q))
        yield X$(`${$}/${String(Q)}`, undefined);
    }
    for (let Q of Z) {
      if ((0, V0.IsUndefined)(W[Q]) || (0, V0.IsUndefined)(Y[Q]))
        continue;
      if ((0, V0.IsSymbol)(Q))
        throw new i1(Q);
      yield* G$(`${$}/${String(Q)}`, W[Q], Y[Q]);
    }
    for (let Q of Z) {
      if ((0, V0.IsSymbol)(Q))
        throw new i1(Q);
      if ((0, V0.IsUndefined)(W[Q]))
        yield qW(`${$}/${String(Q)}`, Y[Q]);
    }
    for (let Q of X.reverse()) {
      if ((0, V0.IsSymbol)(Q))
        throw new i1(Q);
      if ((0, V0.IsUndefined)(Y[Q]) && !Z.includes(Q))
        yield NW(`${$}/${String(Q)}`);
    }
  }
  function* fQ($, W, Y) {
    if (!(0, V0.IsArray)(Y))
      return yield X$($, Y);
    for (let X = 0;X < Math.min(W.length, Y.length); X++)
      yield* G$(`${$}/${X}`, W[X], Y[X]);
    for (let X = 0;X < Y.length; X++) {
      if (X < W.length)
        continue;
      yield qW(`${$}/${X}`, Y[X]);
    }
    for (let X = W.length - 1;X >= 0; X--) {
      if (X < Y.length)
        continue;
      yield NW(`${$}/${X}`);
    }
  }
  function* TQ($, W, Y) {
    if (!(0, V0.IsTypedArray)(Y) || W.length !== Y.length || Object.getPrototypeOf(W).constructor.name !== Object.getPrototypeOf(Y).constructor.name)
      return yield X$($, Y);
    for (let X = 0;X < Math.min(W.length, Y.length); X++)
      yield* G$(`${$}/${X}`, W[X], Y[X]);
  }
  function* dQ($, W, Y) {
    if (W === Y)
      return;
    yield X$($, Y);
  }
  function* G$($, W, Y) {
    if ((0, V0.IsPlainObject)(W))
      return yield* gQ($, W, Y);
    if ((0, V0.IsArray)(W))
      return yield* fQ($, W, Y);
    if ((0, V0.IsTypedArray)(W))
      return yield* TQ($, W, Y);
    if ((0, V0.IsValueType)(W))
      return yield* dQ($, W, Y);
    throw new _6(W);
  }
  var yQ = function($, W) {
    return [...G$("", $, W)];
  }, vQ = function($) {
    return $.length > 0 && $[0].path === "" && $[0].type === "update";
  }, pQ = function($) {
    return $.length === 0;
  }, iQ = function($, W) {
    if (vQ(W))
      return (0, R6.Clone)(W[0].value);
    if (pQ(W))
      return (0, R6.Clone)($);
    const Y = (0, R6.Clone)($);
    for (let X of W)
      switch (X.type) {
        case "insert": {
          G6.ValuePointer.Set(Y, X.path, X.value);
          break;
        }
        case "update": {
          G6.ValuePointer.Set(Y, X.path, X.value);
          break;
        }
        case "delete": {
          G6.ValuePointer.Delete(Y, X.path);
          break;
        }
      }
    return Y;
  };
  Object.defineProperty(MW, "__esModule", { value: true });
  MW.Patch = MW.Diff = MW.ValueDeltaUnableToDiffUnknownValue = MW.ValueDeltaObjectWithSymbolKeyError = MW.Edit = MW.Delete = MW.Update = MW.Insert = undefined;
  var V0 = k0(), i0 = f0(), G6 = b$(), R6 = p1();
  MW.Insert = i0.Type.Object({ type: i0.Type.Literal("insert"), path: i0.Type.String(), value: i0.Type.Unknown() });
  MW.Update = i0.Type.Object({ type: i0.Type.Literal("update"), path: i0.Type.String(), value: i0.Type.Unknown() });
  MW.Delete = i0.Type.Object({ type: i0.Type.Literal("delete"), path: i0.Type.String() });
  MW.Edit = i0.Type.Union([MW.Insert, MW.Update, MW.Delete]);

  class i1 extends Error {
    constructor($) {
      super("Cannot diff objects with symbol keys");
      this.key = $;
    }
  }
  MW.ValueDeltaObjectWithSymbolKeyError = i1;

  class _6 extends Error {
    constructor($) {
      super("Unable to create diff edits for unknown value");
      this.value = $;
    }
  }
  MW.ValueDeltaUnableToDiffUnknownValue = _6;
  MW.Diff = yQ;
  MW.Patch = iQ;
});
var jW = H0((wW) => {
  var oQ = function($, W, Y, X) {
    if (!(0, d0.IsPlainObject)(Y))
      R$.ValuePointer.Set($, W, (0, V6.Clone)(X));
    else {
      const Z = Object.keys(Y), Q = Object.keys(X);
      for (let J of Z)
        if (!Q.includes(J))
          delete Y[J];
      for (let J of Q)
        if (!Z.includes(J))
          Y[J] = null;
      for (let J of Q)
        g6($, `${W}/${J}`, Y[J], X[J]);
    }
  }, cQ = function($, W, Y, X) {
    if (!(0, d0.IsArray)(Y))
      R$.ValuePointer.Set($, W, (0, V6.Clone)(X));
    else {
      for (let Z = 0;Z < X.length; Z++)
        g6($, `${W}/${Z}`, Y[Z], X[Z]);
      Y.splice(X.length);
    }
  }, lQ = function($, W, Y, X) {
    if ((0, d0.IsTypedArray)(Y) && Y.length === X.length)
      for (let Z = 0;Z < Y.length; Z++)
        Y[Z] = X[Z];
    else
      R$.ValuePointer.Set($, W, (0, V6.Clone)(X));
  }, tQ = function($, W, Y, X) {
    if (Y === X)
      return;
    R$.ValuePointer.Set($, W, X);
  }, g6 = function($, W, Y, X) {
    if ((0, d0.IsArray)(X))
      return cQ($, W, Y, X);
    if ((0, d0.IsTypedArray)(X))
      return lQ($, W, Y, X);
    if ((0, d0.IsPlainObject)(X))
      return oQ($, W, Y, X);
    if ((0, d0.IsValueType)(X))
      return tQ($, W, Y, X);
  }, DW = function($) {
    return (0, d0.IsTypedArray)($) || (0, d0.IsValueType)($);
  }, sQ = function($, W) {
    return (0, d0.IsPlainObject)($) && (0, d0.IsArray)(W) || (0, d0.IsArray)($) && (0, d0.IsPlainObject)(W);
  }, rQ = function($, W) {
    if (DW($) || DW(W))
      throw new k6;
    if (sQ($, W))
      throw new x6;
    g6($, "", $, W);
  };
  Object.defineProperty(wW, "__esModule", { value: true });
  wW.Mutate = wW.ValueMutateInvalidRootMutationError = wW.ValueMutateTypeMismatchError = undefined;
  var d0 = k0(), R$ = b$(), V6 = p1();

  class x6 extends Error {
    constructor() {
      super("Cannot assign due type mismatch of assignable values");
    }
  }
  wW.ValueMutateTypeMismatchError = x6;

  class k6 extends Error {
    constructor() {
      super("Only object and array types can be mutated at the root level");
    }
  }
  wW.ValueMutateInvalidRootMutationError = k6;
  wW.Mutate = rQ;
});
var SW = H0((PW) => {
  var $4 = function($, W) {
    if (!(0, H1.IsPlainObject)(W))
      return false;
    const Y = [...Object.keys($), ...Object.getOwnPropertySymbols($)], X = [...Object.keys(W), ...Object.getOwnPropertySymbols(W)];
    if (Y.length !== X.length)
      return false;
    return Y.every((Z) => _$($[Z], W[Z]));
  }, W4 = function($, W) {
    return (0, H1.IsDate)(W) && $.getTime() === W.getTime();
  }, Y4 = function($, W) {
    if (!(0, H1.IsArray)(W) || $.length !== W.length)
      return false;
    return $.every((Y, X) => _$(Y, W[X]));
  }, X4 = function($, W) {
    if (!(0, H1.IsTypedArray)(W) || $.length !== W.length || Object.getPrototypeOf($).constructor.name !== Object.getPrototypeOf(W).constructor.name)
      return false;
    return $.every((Y, X) => _$(Y, W[X]));
  }, Z4 = function($, W) {
    return $ === W;
  }, _$ = function($, W) {
    if ((0, H1.IsPlainObject)($))
      return $4($, W);
    if ((0, H1.IsDate)($))
      return W4($, W);
    if ((0, H1.IsTypedArray)($))
      return X4($, W);
    if ((0, H1.IsArray)($))
      return Y4($, W);
    if ((0, H1.IsValueType)($))
      return Z4($, W);
    throw new Error("ValueEquals: Unable to compare value");
  };
  Object.defineProperty(PW, "__esModule", { value: true });
  PW.Equal = undefined;
  var H1 = k0();
  PW.Equal = _$;
});
var E$ = H0((q1) => {
  var Q4 = q1 && q1.__createBinding || (Object.create ? function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    var Z = Object.getOwnPropertyDescriptor(W, Y);
    if (!Z || ("get" in Z ? !W.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return W[Y];
      } };
    Object.defineProperty($, X, Z);
  } : function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    $[X] = W[Y];
  }), J4 = q1 && q1.__exportStar || function($, W) {
    for (var Y in $)
      if (Y !== "default" && !Object.prototype.hasOwnProperty.call(W, Y))
        Q4(W, $, Y);
  };
  Object.defineProperty(q1, "__esModule", { value: true });
  q1.ValueErrorType = undefined;
  var z4 = $$();
  Object.defineProperty(q1, "ValueErrorType", { enumerable: true, get: function() {
    return z4.ValueErrorType;
  } });
  J4(j6(), q1);
});
var Q$ = H0((CW) => {
  var q4 = function($) {
    return $[G0.Kind] === "Any" || $[G0.Kind] === "Unknown";
  }, s = function($) {
    return $ !== undefined;
  }, N4 = function($, W, Y) {
    return true;
  }, M4 = function($, W, Y) {
    if (!(0, B0.IsArray)(Y))
      return false;
    if (s($.minItems) && !(Y.length >= $.minItems))
      return false;
    if (s($.maxItems) && !(Y.length <= $.maxItems))
      return false;
    if (!Y.every((Q) => R0($.items, W, Q)))
      return false;
    if ($.uniqueItems === true && !function() {
      const Q = new Set;
      for (let J of Y) {
        const z = (0, H4.Hash)(J);
        if (Q.has(z))
          return false;
        else
          Q.add(z);
      }
      return true;
    }())
      return false;
    if (!(s($.contains) || (0, B0.IsNumber)($.minContains) || (0, B0.IsNumber)($.maxContains)))
      return true;
    const X = s($.contains) ? $.contains : G0.Type.Never(), Z = Y.reduce((Q, J) => R0(X, W, J) ? Q + 1 : Q, 0);
    if (Z === 0)
      return false;
    if ((0, B0.IsNumber)($.minContains) && Z < $.minContains)
      return false;
    if ((0, B0.IsNumber)($.maxContains) && Z > $.maxContains)
      return false;
    return true;
  }, A4 = function($, W, Y) {
    return (0, B0.IsAsyncIterator)(Y);
  }, F4 = function($, W, Y) {
    if (!(0, B0.IsBigInt)(Y))
      return false;
    if (s($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
      return false;
    if (s($.maximum) && !(Y <= $.maximum))
      return false;
    if (s($.minimum) && !(Y >= $.minimum))
      return false;
    if (s($.multipleOf) && Y % $.multipleOf !== BigInt(0))
      return false;
    return true;
  }, U4 = function($, W, Y) {
    return (0, B0.IsBoolean)(Y);
  }, B4 = function($, W, Y) {
    return R0($.returns, W, Y.prototype);
  }, D4 = function($, W, Y) {
    if (!(0, B0.IsDate)(Y))
      return false;
    if (s($.exclusiveMaximumTimestamp) && !(Y.getTime() < $.exclusiveMaximumTimestamp))
      return false;
    if (s($.exclusiveMinimumTimestamp) && !(Y.getTime() > $.exclusiveMinimumTimestamp))
      return false;
    if (s($.maximumTimestamp) && !(Y.getTime() <= $.maximumTimestamp))
      return false;
    if (s($.minimumTimestamp) && !(Y.getTime() >= $.minimumTimestamp))
      return false;
    if (s($.multipleOfTimestamp) && Y.getTime() % $.multipleOfTimestamp !== 0)
      return false;
    return true;
  }, w4 = function($, W, Y) {
    return (0, B0.IsFunction)(Y);
  }, K4 = function($, W, Y) {
    if (!(0, B0.IsInteger)(Y))
      return false;
    if (s($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
      return false;
    if (s($.maximum) && !(Y <= $.maximum))
      return false;
    if (s($.minimum) && !(Y >= $.minimum))
      return false;
    if (s($.multipleOf) && Y % $.multipleOf !== 0)
      return false;
    return true;
  }, j4 = function($, W, Y) {
    const X = $.allOf.every((Z) => R0(Z, W, Y));
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(G0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(Y).every((J) => Z.test(J));
      return X && Q;
    } else if (G0.TypeGuard.TSchema($.unevaluatedProperties)) {
      const Z = new RegExp(G0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(Y).every((J) => Z.test(J) || R0($.unevaluatedProperties, W, Y[J]));
      return X && Q;
    } else
      return X;
  }, P4 = function($, W, Y) {
    return (0, B0.IsIterator)(Y);
  }, O4 = function($, W, Y) {
    return Y === $.const;
  }, S4 = function($, W, Y) {
    return false;
  }, L4 = function($, W, Y) {
    return !R0($.not, W, Y);
  }, C4 = function($, W, Y) {
    return (0, B0.IsNull)(Y);
  }, I4 = function($, W, Y) {
    if (!Z$.TypeSystemPolicy.IsNumberLike(Y))
      return false;
    if (s($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
      return false;
    if (s($.minimum) && !(Y >= $.minimum))
      return false;
    if (s($.maximum) && !(Y <= $.maximum))
      return false;
    if (s($.multipleOf) && Y % $.multipleOf !== 0)
      return false;
    return true;
  }, b4 = function($, W, Y) {
    if (!Z$.TypeSystemPolicy.IsObjectLike(Y))
      return false;
    if (s($.minProperties) && !(Object.getOwnPropertyNames(Y).length >= $.minProperties))
      return false;
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(Y).length <= $.maxProperties))
      return false;
    const X = Object.getOwnPropertyNames($.properties);
    for (let Z of X) {
      const Q = $.properties[Z];
      if ($.required && $.required.includes(Z)) {
        if (!R0(Q, W, Y[Z]))
          return false;
        if ((G0.ExtendsUndefined.Check(Q) || q4(Q)) && !(Z in Y))
          return false;
      } else if (Z$.TypeSystemPolicy.IsExactOptionalProperty(Y, Z) && !R0(Q, W, Y[Z]))
        return false;
    }
    if ($.additionalProperties === false) {
      const Z = Object.getOwnPropertyNames(Y);
      if ($.required && $.required.length === X.length && Z.length === X.length)
        return true;
      else
        return Z.every((Q) => X.includes(Q));
    } else if (typeof $.additionalProperties === "object")
      return Object.getOwnPropertyNames(Y).every((Q) => X.includes(Q) || R0($.additionalProperties, W, Y[Q]));
    else
      return true;
  }, G4 = function($, W, Y) {
    return (0, B0.IsPromise)(Y);
  }, R4 = function($, W, Y) {
    if (!Z$.TypeSystemPolicy.IsRecordLike(Y))
      return false;
    if (s($.minProperties) && !(Object.getOwnPropertyNames(Y).length >= $.minProperties))
      return false;
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(Y).length <= $.maxProperties))
      return false;
    const [X, Z] = Object.entries($.patternProperties)[0], Q = new RegExp(X), J = Object.entries(Y).every(([w, B]) => {
      return Q.test(w) ? R0(Z, W, B) : true;
    }), z = typeof $.additionalProperties === "object" ? Object.entries(Y).every(([w, B]) => {
      return !Q.test(w) ? R0($.additionalProperties, W, B) : true;
    }) : true, F = $.additionalProperties === false ? Object.getOwnPropertyNames(Y).every((w) => {
      return Q.test(w);
    }) : true;
    return J && z && F;
  }, _4 = function($, W, Y) {
    return R0((0, LW.Deref)($, W), W, Y);
  }, E4 = function($, W, Y) {
    if (!(0, B0.IsString)(Y))
      return false;
    if (s($.minLength)) {
      if (!(Y.length >= $.minLength))
        return false;
    }
    if (s($.maxLength)) {
      if (!(Y.length <= $.maxLength))
        return false;
    }
    if (s($.pattern)) {
      if (!new RegExp($.pattern).test(Y))
        return false;
    }
    if (s($.format)) {
      if (!G0.FormatRegistry.Has($.format))
        return false;
      return G0.FormatRegistry.Get($.format)(Y);
    }
    return true;
  }, V4 = function($, W, Y) {
    return (0, B0.IsSymbol)(Y);
  }, x4 = function($, W, Y) {
    return (0, B0.IsString)(Y) && new RegExp($.pattern).test(Y);
  }, k4 = function($, W, Y) {
    return R0((0, LW.Deref)($, W), W, Y);
  }, g4 = function($, W, Y) {
    if (!(0, B0.IsArray)(Y))
      return false;
    if ($.items === undefined && Y.length !== 0)
      return false;
    if (Y.length !== $.maxItems)
      return false;
    if (!$.items)
      return true;
    for (let X = 0;X < $.items.length; X++)
      if (!R0($.items[X], W, Y[X]))
        return false;
    return true;
  }, f4 = function($, W, Y) {
    return (0, B0.IsUndefined)(Y);
  }, T4 = function($, W, Y) {
    return $.anyOf.some((X) => R0(X, W, Y));
  }, d4 = function($, W, Y) {
    if (!(0, B0.IsUint8Array)(Y))
      return false;
    if (s($.maxByteLength) && !(Y.length <= $.maxByteLength))
      return false;
    if (s($.minByteLength) && !(Y.length >= $.minByteLength))
      return false;
    return true;
  }, y4 = function($, W, Y) {
    return true;
  }, v4 = function($, W, Y) {
    return Z$.TypeSystemPolicy.IsVoidLike(Y);
  }, p4 = function($, W, Y) {
    if (!G0.TypeRegistry.Has($[G0.Kind]))
      return false;
    return G0.TypeRegistry.Get($[G0.Kind])($, Y);
  }, R0 = function($, W, Y) {
    const X = s($.$id) ? [...W, $] : W, Z = $;
    switch (Z[G0.Kind]) {
      case "Any":
        return N4(Z, X, Y);
      case "Array":
        return M4(Z, X, Y);
      case "AsyncIterator":
        return A4(Z, X, Y);
      case "BigInt":
        return F4(Z, X, Y);
      case "Boolean":
        return U4(Z, X, Y);
      case "Constructor":
        return B4(Z, X, Y);
      case "Date":
        return D4(Z, X, Y);
      case "Function":
        return w4(Z, X, Y);
      case "Integer":
        return K4(Z, X, Y);
      case "Intersect":
        return j4(Z, X, Y);
      case "Iterator":
        return P4(Z, X, Y);
      case "Literal":
        return O4(Z, X, Y);
      case "Never":
        return S4(Z, X, Y);
      case "Not":
        return L4(Z, X, Y);
      case "Null":
        return C4(Z, X, Y);
      case "Number":
        return I4(Z, X, Y);
      case "Object":
        return b4(Z, X, Y);
      case "Promise":
        return G4(Z, X, Y);
      case "Record":
        return R4(Z, X, Y);
      case "Ref":
        return _4(Z, X, Y);
      case "String":
        return E4(Z, X, Y);
      case "Symbol":
        return V4(Z, X, Y);
      case "TemplateLiteral":
        return x4(Z, X, Y);
      case "This":
        return k4(Z, X, Y);
      case "Tuple":
        return g4(Z, X, Y);
      case "Undefined":
        return f4(Z, X, Y);
      case "Union":
        return T4(Z, X, Y);
      case "Uint8Array":
        return d4(Z, X, Y);
      case "Unknown":
        return y4(Z, X, Y);
      case "Void":
        return v4(Z, X, Y);
      default:
        if (!G0.TypeRegistry.Has(Z[G0.Kind]))
          throw new f6(Z);
        return p4(Z, X, Y);
    }
  }, i4 = function(...$) {
    return $.length === 3 ? R0($[0], $[1], $[2]) : R0($[0], [], $[1]);
  };
  Object.defineProperty(CW, "__esModule", { value: true });
  CW.Check = CW.ValueCheckUnknownTypeError = undefined;
  var B0 = k0(), Z$ = E$(), LW = D1(), H4 = W$(), G0 = f0();

  class f6 extends G0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  CW.ValueCheckUnknownTypeError = f6;
  CW.Check = i4;
});
var m6 = H0((_W) => {
  var h4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, n4 = function($, W) {
    if ($.uniqueItems === true && !(0, r.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the uniqueItems constraint requires a default value");
    else if (("contains" in $) && !(0, r.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the contains constraint requires a default value");
    else if ("default" in $)
      return $.default;
    else if ($.minItems !== undefined)
      return Array.from({ length: $.minItems }).map((Y) => {
        return y0($.items, W);
      });
    else
      return [];
  }, o4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return async function* () {
      }();
  }, c4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return BigInt(0);
  }, l4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return false;
  }, t4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const Y = y0($.returns, W);
      if (typeof Y === "object" && !Array.isArray(Y))
        return class {
          constructor() {
            for (let [X, Z] of Object.entries(Y)) {
              const Q = this;
              Q[X] = Z;
            }
          }
        };
      else
        return class {
        };
    }
  }, s4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimumTimestamp !== undefined)
      return new Date($.minimumTimestamp);
    else
      return new Date(0);
  }, r4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return () => y0($.returns, W);
  }, a4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, e4 = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const Y = $.allOf.reduce((X, Z) => {
        const Q = y0(Z, W);
        return typeof Q === "object" ? { ...X, ...Q } : Q;
      }, {});
      if (!(0, u4.Check)($, W, Y))
        throw new v6($);
      return Y;
    }
  }, $J = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return function* () {
      }();
  }, WJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return $.const;
  }, YJ = function($, W) {
    throw new d6($);
  }, XJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new y6($);
  }, ZJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return null;
  }, QJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, JJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const Y = new Set($.required);
      return $.default || Object.entries($.properties).reduce((X, [Z, Q]) => {
        return Y.has(Z) ? { ...X, [Z]: y0(Q, W) } : { ...X };
      }, {});
    }
  }, zJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return Promise.resolve(y0($.item, W));
  }, HJ = function($, W) {
    const [Y, X] = Object.entries($.patternProperties)[0];
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if (!(Y === g0.PatternStringExact || Y === g0.PatternNumberExact))
      return Y.slice(1, Y.length - 1).split("|").reduce((Q, J) => {
        return { ...Q, [J]: y0(X, W) };
      }, {});
    else
      return {};
  }, qJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GW.Deref)($, W), W);
  }, NJ = function($, W) {
    if ($.pattern !== undefined)
      if (!(0, r.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with patterns must specify a default value");
      else
        return $.default;
    else if ($.format !== undefined)
      if (!(0, r.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with formats must specify a default value");
      else
        return $.default;
    else if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minLength !== undefined)
      return Array.from({ length: $.minLength }).map(() => ".").join("");
    else
      return "";
  }, MJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ("value" in $)
      return Symbol.for($.value);
    else
      return Symbol();
  }, AJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    const Y = g0.TemplateLiteralParser.ParseExact($.pattern);
    if (!g0.TemplateLiteralFinite.Check(Y))
      throw new p6($);
    return g0.TemplateLiteralGenerator.Generate(Y).next().value;
  }, FJ = function($, W) {
    if (RW++ > bW)
      throw new i6($, bW);
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GW.Deref)($, W), W);
  }, UJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    if ($.items === undefined)
      return [];
    else
      return Array.from({ length: $.minItems }).map((Y, X) => y0($.items[X], W));
  }, BJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, DJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.anyOf.length === 0)
      throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
    else
      return y0($.anyOf[0], W);
  }, wJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minByteLength !== undefined)
      return new Uint8Array($.minByteLength);
    else
      return new Uint8Array(0);
  }, KJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, jJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, PJ = function($, W) {
    if ((0, r.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new Error("User defined types must specify a default value");
  }, y0 = function($, W) {
    const Y = (0, r.IsString)($.$id) ? [...W, $] : W, X = $;
    switch (X[g0.Kind]) {
      case "Any":
        return h4(X, Y);
      case "Array":
        return n4(X, Y);
      case "AsyncIterator":
        return o4(X, Y);
      case "BigInt":
        return c4(X, Y);
      case "Boolean":
        return l4(X, Y);
      case "Constructor":
        return t4(X, Y);
      case "Date":
        return s4(X, Y);
      case "Function":
        return r4(X, Y);
      case "Integer":
        return a4(X, Y);
      case "Intersect":
        return e4(X, Y);
      case "Iterator":
        return $J(X, Y);
      case "Literal":
        return WJ(X, Y);
      case "Never":
        return YJ(X, Y);
      case "Not":
        return XJ(X, Y);
      case "Null":
        return ZJ(X, Y);
      case "Number":
        return QJ(X, Y);
      case "Object":
        return JJ(X, Y);
      case "Promise":
        return zJ(X, Y);
      case "Record":
        return HJ(X, Y);
      case "Ref":
        return qJ(X, Y);
      case "String":
        return NJ(X, Y);
      case "Symbol":
        return MJ(X, Y);
      case "TemplateLiteral":
        return AJ(X, Y);
      case "This":
        return FJ(X, Y);
      case "Tuple":
        return UJ(X, Y);
      case "Undefined":
        return BJ(X, Y);
      case "Union":
        return DJ(X, Y);
      case "Uint8Array":
        return wJ(X, Y);
      case "Unknown":
        return KJ(X, Y);
      case "Void":
        return jJ(X, Y);
      default:
        if (!g0.TypeRegistry.Has(X[g0.Kind]))
          throw new T6(X);
        return PJ(X, Y);
    }
  }, OJ = function(...$) {
    return RW = 0, $.length === 2 ? y0($[0], $[1]) : y0($[0], []);
  };
  Object.defineProperty(_W, "__esModule", { value: true });
  _W.Create = _W.ValueCreateRecursiveInstantiationError = _W.ValueCreateTempateLiteralTypeError = _W.ValueCreateIntersectTypeError = _W.ValueCreateNotTypeError = _W.ValueCreateNeverTypeError = _W.ValueCreateUnknownTypeError = undefined;
  var r = k0(), u4 = Q$(), GW = D1(), g0 = f0();

  class T6 extends g0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  _W.ValueCreateUnknownTypeError = T6;

  class d6 extends g0.TypeBoxError {
    constructor($) {
      super("Never types cannot be created");
      this.schema = $;
    }
  }
  _W.ValueCreateNeverTypeError = d6;

  class y6 extends g0.TypeBoxError {
    constructor($) {
      super("Not types must have a default value");
      this.schema = $;
    }
  }
  _W.ValueCreateNotTypeError = y6;

  class v6 extends g0.TypeBoxError {
    constructor($) {
      super("Intersect produced invalid value. Consider using a default value.");
      this.schema = $;
    }
  }
  _W.ValueCreateIntersectTypeError = v6;

  class p6 extends g0.TypeBoxError {
    constructor($) {
      super("Can only create template literal values from patterns that produce finite sequences. Consider using a default value.");
      this.schema = $;
    }
  }
  _W.ValueCreateTempateLiteralTypeError = p6;

  class i6 extends g0.TypeBoxError {
    constructor($, W) {
      super("Value cannot be created as recursive type may produce value of infinite size. Consider using a default.");
      this.schema = $, this.recursiveMaxDepth = W;
    }
  }
  _W.ValueCreateRecursiveInstantiationError = i6;
  var bW = 512, RW = 0;
  _W.Create = OJ;
});
var dW = H0((fW) => {
  var kW = function($, W, Y) {
    return (0, m0.Check)($, W, Y) ? (0, m1.Clone)(Y) : (0, M1.Create)($, W);
  }, h6 = function($, W, Y) {
    return (0, m0.Check)($, W, Y) ? Y : (0, M1.Create)($, W);
  }, RJ = function($, W, Y) {
    if ((0, m0.Check)($, W, Y))
      return (0, m1.Clone)(Y);
    const X = (0, w1.IsArray)(Y) ? (0, m1.Clone)(Y) : (0, M1.Create)($, W), Z = (0, w1.IsNumber)($.minItems) && X.length < $.minItems ? [...X, ...Array.from({ length: $.minItems - X.length }, () => null)] : X, J = ((0, w1.IsNumber)($.maxItems) && Z.length > $.maxItems ? Z.slice(0, $.maxItems) : Z).map((F) => W1($.items, W, F));
    if ($.uniqueItems !== true)
      return J;
    const z = [...new Set(J)];
    if (!(0, m0.Check)($, W, z))
      throw new n6($, z);
    return z;
  }, _J = function($, W, Y) {
    if ((0, m0.Check)($, W, Y))
      return (0, M1.Create)($, W);
    const X = new Set($.returns.required || []), Z = function() {
    };
    for (let [Q, J] of Object.entries($.returns.properties)) {
      if (!X.has(Q) && Y.prototype[Q] === undefined)
        continue;
      Z.prototype[Q] = W1(J, W, Y.prototype[Q]);
    }
    return Z;
  }, EJ = function($, W, Y) {
    const X = (0, M1.Create)($, W), Z = (0, w1.IsPlainObject)(X) && (0, w1.IsPlainObject)(Y) ? { ...X, ...Y } : Y;
    return (0, m0.Check)($, W, Z) ? Z : (0, M1.Create)($, W);
  }, VJ = function($, W, Y) {
    throw new o6($);
  }, xJ = function($, W, Y) {
    if ((0, m0.Check)($, W, Y))
      return Y;
    if (Y === null || typeof Y !== "object")
      return (0, M1.Create)($, W);
    const X = new Set($.required || []), Z = {};
    for (let [Q, J] of Object.entries($.properties)) {
      if (!X.has(Q) && Y[Q] === undefined)
        continue;
      Z[Q] = W1(J, W, Y[Q]);
    }
    if (typeof $.additionalProperties === "object") {
      const Q = Object.getOwnPropertyNames($.properties);
      for (let J of Object.getOwnPropertyNames(Y)) {
        if (Q.includes(J))
          continue;
        Z[J] = W1($.additionalProperties, W, Y[J]);
      }
    }
    return Z;
  }, kJ = function($, W, Y) {
    if ((0, m0.Check)($, W, Y))
      return (0, m1.Clone)(Y);
    if (Y === null || typeof Y !== "object" || Array.isArray(Y) || Y instanceof Date)
      return (0, M1.Create)($, W);
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(Y))
      Q[J] = W1(Z, W, z);
    return Q;
  }, gJ = function($, W, Y) {
    return W1((0, VW.Deref)($, W), W, Y);
  }, fJ = function($, W, Y) {
    return W1((0, VW.Deref)($, W), W, Y);
  }, TJ = function($, W, Y) {
    if ((0, m0.Check)($, W, Y))
      return (0, m1.Clone)(Y);
    if (!(0, w1.IsArray)(Y))
      return (0, M1.Create)($, W);
    if ($.items === undefined)
      return [];
    return $.items.map((X, Z) => W1(X, W, Y[Z]));
  }, dJ = function($, W, Y) {
    return (0, m0.Check)($, W, Y) ? (0, m1.Clone)(Y) : u6.Create($, W, Y);
  }, W1 = function($, W, Y) {
    const X = (0, w1.IsString)($.$id) ? [...W, $] : W, Z = $;
    switch ($[N1.Kind]) {
      case "Array":
        return RJ(Z, X, Y);
      case "Constructor":
        return _J(Z, X, Y);
      case "Intersect":
        return EJ(Z, X, Y);
      case "Never":
        return VJ(Z, X, Y);
      case "Object":
        return xJ(Z, X, Y);
      case "Record":
        return kJ(Z, X, Y);
      case "Ref":
        return gJ(Z, X, Y);
      case "This":
        return fJ(Z, X, Y);
      case "Tuple":
        return TJ(Z, X, Y);
      case "Union":
        return dJ(Z, X, Y);
      case "Date":
      case "Symbol":
      case "Uint8Array":
        return kW($, W, Y);
      case "Any":
      case "AsyncIterator":
      case "BigInt":
      case "Boolean":
      case "Function":
      case "Integer":
      case "Iterator":
      case "Literal":
      case "Not":
      case "Null":
      case "Number":
      case "Promise":
      case "String":
      case "TemplateLiteral":
      case "Undefined":
      case "Unknown":
      case "Void":
        return h6(Z, X, Y);
      default:
        if (!N1.TypeRegistry.Has(Z[N1.Kind]))
          throw new c6(Z);
        return h6(Z, X, Y);
    }
  }, gW = function(...$) {
    return $.length === 3 ? W1($[0], $[1], $[2]) : W1($[0], [], $[1]);
  };
  Object.defineProperty(fW, "__esModule", { value: true });
  fW.Cast = fW.Default = fW.DefaultClone = fW.ValueCastUnknownTypeError = fW.ValueCastRecursiveTypeError = fW.ValueCastNeverTypeError = fW.ValueCastArrayUniqueItemsTypeError = undefined;
  var w1 = k0(), M1 = m6(), m0 = Q$(), m1 = p1(), VW = D1(), N1 = f0();

  class n6 extends N1.TypeBoxError {
    constructor($, W) {
      super("Array cast produced invalid data due to uniqueItems constraint");
      this.schema = $, this.value = W;
    }
  }
  fW.ValueCastArrayUniqueItemsTypeError = n6;

  class o6 extends N1.TypeBoxError {
    constructor($) {
      super("Never types cannot be cast");
      this.schema = $;
    }
  }
  fW.ValueCastNeverTypeError = o6;

  class xW extends N1.TypeBoxError {
    constructor($) {
      super("Cannot cast recursive schemas");
      this.schema = $;
    }
  }
  fW.ValueCastRecursiveTypeError = xW;

  class c6 extends N1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  fW.ValueCastUnknownTypeError = c6;
  var u6;
  (function($) {
    function W(Z, Q, J) {
      if (Z[N1.Kind] === "Object" && typeof J === "object" && !(0, w1.IsNull)(J)) {
        const z = Z, F = Object.getOwnPropertyNames(J), w = Object.entries(z.properties), [B, S] = [1 / w.length, w.length];
        return w.reduce((G, [j, M]) => {
          const O = M[N1.Kind] === "Literal" && M.const === J[j] ? S : 0, K = (0, m0.Check)(M, Q, J[j]) ? B : 0, A = F.includes(j) ? B : 0;
          return G + (O + K + A);
        }, 0);
      } else
        return (0, m0.Check)(Z, Q, J) ? 1 : 0;
    }
    function Y(Z, Q, J) {
      let [z, F] = [Z.anyOf[0], 0];
      for (let w of Z.anyOf) {
        const B = W(w, Q, J);
        if (B > F)
          z = w, F = B;
      }
      return z;
    }
    function X(Z, Q, J) {
      if ("default" in Z)
        return Z.default;
      else {
        const z = Y(Z, Q, J);
        return gW(z, Q, J);
      }
    }
    $.Create = X;
  })(u6 || (u6 = {}));
  fW.DefaultClone = kW;
  fW.Default = h6;
  fW.Cast = gW;
});
var hW = H0((mW) => {
  var V$ = function($) {
    return (0, J0.IsString)($) && !isNaN($) && !isNaN(parseFloat($));
  }, oJ = function($) {
    return (0, J0.IsBigInt)($) || (0, J0.IsBoolean)($) || (0, J0.IsNumber)($);
  }, J$ = function($) {
    return $ === true || (0, J0.IsNumber)($) && $ === 1 || (0, J0.IsBigInt)($) && $ === BigInt("1") || (0, J0.IsString)($) && ($.toLowerCase() === "true" || $ === "1");
  }, z$ = function($) {
    return $ === false || (0, J0.IsNumber)($) && ($ === 0 || Object.is($, -0)) || (0, J0.IsBigInt)($) && $ === BigInt("0") || (0, J0.IsString)($) && ($.toLowerCase() === "false" || $ === "0" || $ === "-0");
  }, cJ = function($) {
    return (0, J0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, lJ = function($) {
    return (0, J0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, tJ = function($) {
    return (0, J0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, sJ = function($) {
    return (0, J0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, rJ = function($) {
    return (0, J0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test($);
  }, aJ = function($, W) {
    const Y = pW($);
    return Y === W ? Y : $;
  }, eJ = function($, W) {
    const Y = iW($);
    return Y === W ? Y : $;
  }, $9 = function($, W) {
    const Y = vW($);
    return Y === W ? Y : $;
  }, W9 = function($, W) {
    if (typeof $.const === "string")
      return aJ(W, $.const);
    else if (typeof $.const === "number")
      return eJ(W, $.const);
    else if (typeof $.const === "boolean")
      return $9(W, $.const);
    else
      return (0, hJ.Clone)(W);
  }, vW = function($) {
    return J$($) ? true : z$($) ? false : $;
  }, Y9 = function($) {
    return V$($) ? BigInt(parseInt($)) : (0, J0.IsNumber)($) ? BigInt($ | 0) : z$($) ? BigInt(0) : J$($) ? BigInt(1) : $;
  }, pW = function($) {
    return oJ($) ? $.toString() : (0, J0.IsSymbol)($) && $.description !== undefined ? $.description.toString() : $;
  }, iW = function($) {
    return V$($) ? parseFloat($) : J$($) ? 1 : z$($) ? 0 : $;
  }, X9 = function($) {
    return V$($) ? parseInt($) : (0, J0.IsNumber)($) ? $ | 0 : J$($) ? 1 : z$($) ? 0 : $;
  }, Z9 = function($) {
    return (0, J0.IsString)($) && $.toLowerCase() === "null" ? null : $;
  }, Q9 = function($) {
    return (0, J0.IsString)($) && $ === "undefined" ? undefined : $;
  }, J9 = function($) {
    return (0, J0.IsDate)($) ? $ : (0, J0.IsNumber)($) ? new Date($) : J$($) ? new Date(1) : z$($) ? new Date(0) : V$($) ? new Date(parseInt($)) : lJ($) ? new Date(`1970-01-01T${$}.000Z`) : cJ($) ? new Date(`1970-01-01T${$}`) : sJ($) ? new Date(`${$}.000Z`) : tJ($) ? new Date($) : rJ($) ? new Date(`${$}T00:00:00.000Z`) : $;
  }, l6 = function($) {
    return $;
  }, z9 = function($, W, Y) {
    if ((0, J0.IsArray)(Y))
      return Y.map((X) => o0($.items, W, X));
    return Y;
  }, H9 = function($, W, Y) {
    return Y9(Y);
  }, q9 = function($, W, Y) {
    return vW(Y);
  }, N9 = function($, W, Y) {
    return J9(Y);
  }, M9 = function($, W, Y) {
    return X9(Y);
  }, A9 = function($, W, Y) {
    return $.allOf.every((X) => u1.TypeGuard.TObject(X)) ? o0(u1.Type.Composite($.allOf), W, Y) : o0($.allOf[0], W, Y);
  }, F9 = function($, W, Y) {
    return W9($, Y);
  }, U9 = function($, W, Y) {
    return Z9(Y);
  }, B9 = function($, W, Y) {
    return iW(Y);
  }, D9 = function($, W, Y) {
    if ((0, J0.IsObject)(Y))
      return Object.getOwnPropertyNames($.properties).reduce((X, Z) => {
        return Y[Z] !== undefined ? { ...X, [Z]: o0($.properties[Z], W, Y[Z]) } : { ...X };
      }, Y);
    return Y;
  }, w9 = function($, W, Y) {
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(Y))
      Q[J] = o0(Z, W, z);
    return Q;
  }, K9 = function($, W, Y) {
    return o0((0, yW.Deref)($, W), W, Y);
  }, j9 = function($, W, Y) {
    return pW(Y);
  }, P9 = function($, W, Y) {
    return (0, J0.IsString)(Y) || (0, J0.IsNumber)(Y) ? Symbol(Y) : Y;
  }, O9 = function($, W, Y) {
    return o0((0, yW.Deref)($, W), W, Y);
  }, S9 = function($, W, Y) {
    if ((0, J0.IsArray)(Y) && !(0, J0.IsUndefined)($.items))
      return Y.map((X, Z) => {
        return Z < $.items.length ? o0($.items[Z], W, X) : X;
      });
    return Y;
  }, L9 = function($, W, Y) {
    return Q9(Y);
  }, C9 = function($, W, Y) {
    for (let X of $.anyOf) {
      const Z = o0(X, W, Y);
      if ((0, nJ.Check)(X, W, Z))
        return Z;
    }
    return Y;
  }, o0 = function($, W, Y) {
    const X = (0, J0.IsString)($.$id) ? [...W, $] : W, Z = $;
    switch ($[u1.Kind]) {
      case "Array":
        return z9(Z, X, Y);
      case "BigInt":
        return H9(Z, X, Y);
      case "Boolean":
        return q9(Z, X, Y);
      case "Date":
        return N9(Z, X, Y);
      case "Integer":
        return M9(Z, X, Y);
      case "Intersect":
        return A9(Z, X, Y);
      case "Literal":
        return F9(Z, X, Y);
      case "Null":
        return U9(Z, X, Y);
      case "Number":
        return B9(Z, X, Y);
      case "Object":
        return D9(Z, X, Y);
      case "Record":
        return w9(Z, X, Y);
      case "Ref":
        return K9(Z, X, Y);
      case "String":
        return j9(Z, X, Y);
      case "Symbol":
        return P9(Z, X, Y);
      case "This":
        return O9(Z, X, Y);
      case "Tuple":
        return S9(Z, X, Y);
      case "Undefined":
        return L9(Z, X, Y);
      case "Union":
        return C9(Z, X, Y);
      case "Any":
      case "AsyncIterator":
      case "Constructor":
      case "Function":
      case "Iterator":
      case "Never":
      case "Promise":
      case "TemplateLiteral":
      case "Uint8Array":
      case "Unknown":
      case "Void":
        return l6(Y);
      default:
        if (!u1.TypeRegistry.Has(Z[u1.Kind]))
          throw new t6(Z);
        return l6(Y);
    }
  }, I9 = function(...$) {
    return $.length === 3 ? o0($[0], $[1], $[2]) : o0($[0], [], $[1]);
  };
  Object.defineProperty(mW, "__esModule", { value: true });
  mW.Convert = mW.Default = mW.ValueConvertUnknownTypeError = undefined;
  var J0 = k0(), hJ = p1(), nJ = Q$(), yW = D1(), u1 = f0();

  class t6 extends u1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  mW.ValueConvertUnknownTypeError = t6;
  mW.Default = l6;
  mW.Convert = I9;
});
var a6 = H0((sW) => {
  Object.defineProperty(sW, "__esModule", { value: true });
  sW.EncodeTransform = sW.DecodeTransform = sW.HasTransform = sW.TransformEncodeError = sW.TransformDecodeError = sW.TransformEncodeCheckError = sW.TransformDecodeCheckError = sW.TransformUnknownTypeError = undefined;
  var c0 = k0(), h1 = D1(), n = f0();

  class H$ extends n.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  sW.TransformUnknownTypeError = H$;

  class lW extends n.TypeBoxError {
    constructor($, W, Y) {
      super("Unable to decode due to invalid value");
      this.schema = $, this.value = W, this.error = Y;
    }
  }
  sW.TransformDecodeCheckError = lW;

  class tW extends n.TypeBoxError {
    constructor($, W, Y) {
      super("Unable to encode due to invalid value");
      this.schema = $, this.value = W, this.error = Y;
    }
  }
  sW.TransformEncodeCheckError = tW;

  class s6 extends n.TypeBoxError {
    constructor($, W, Y) {
      super(`${Y instanceof Error ? Y.message : "Unknown error"}`);
      this.schema = $, this.value = W;
    }
  }
  sW.TransformDecodeError = s6;

  class r6 extends n.TypeBoxError {
    constructor($, W, Y) {
      super(`${Y instanceof Error ? Y.message : "Unknown error"}`);
      this.schema = $, this.value = W;
    }
  }
  sW.TransformEncodeError = r6;
  var nW;
  (function($) {
    function W(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.items, I);
    }
    function Y(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.items, I);
    }
    function X(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.returns, I) || D.parameters.some((b) => O(b, I));
    }
    function Z(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.returns, I) || D.parameters.some((b) => O(b, I));
    }
    function Q(D, I) {
      return n.TypeGuard.TTransform(D) || n.TypeGuard.TTransform(D.unevaluatedProperties) || D.allOf.some((b) => O(b, I));
    }
    function J(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.items, I);
    }
    function z(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.not, I);
    }
    function F(D, I) {
      return n.TypeGuard.TTransform(D) || Object.values(D.properties).some((b) => O(b, I)) || n.TypeGuard.TSchema(D.additionalProperties) && O(D.additionalProperties, I);
    }
    function w(D, I) {
      return n.TypeGuard.TTransform(D) || O(D.item, I);
    }
    function B(D, I) {
      const b = Object.getOwnPropertyNames(D.patternProperties)[0], V = D.patternProperties[b];
      return n.TypeGuard.TTransform(D) || O(V, I) || n.TypeGuard.TSchema(D.additionalProperties) && n.TypeGuard.TTransform(D.additionalProperties);
    }
    function S(D, I) {
      if (n.TypeGuard.TTransform(D))
        return true;
      return O((0, h1.Deref)(D, I), I);
    }
    function G(D, I) {
      if (n.TypeGuard.TTransform(D))
        return true;
      return O((0, h1.Deref)(D, I), I);
    }
    function j(D, I) {
      return n.TypeGuard.TTransform(D) || n.TypeGuard.TSchema(D.items) && D.items.some((b) => O(b, I));
    }
    function M(D, I) {
      return n.TypeGuard.TTransform(D) || D.anyOf.some((b) => O(b, I));
    }
    function O(D, I) {
      const b = (0, c0.IsString)(D.$id) ? [...I, D] : I, V = D;
      if (D.$id && K.has(D.$id))
        return false;
      if (D.$id)
        K.add(D.$id);
      switch (D[n.Kind]) {
        case "Array":
          return W(V, b);
        case "AsyncIterator":
          return Y(V, b);
        case "Constructor":
          return X(V, b);
        case "Function":
          return Z(V, b);
        case "Intersect":
          return Q(V, b);
        case "Iterator":
          return J(V, b);
        case "Not":
          return z(V, b);
        case "Object":
          return F(V, b);
        case "Promise":
          return w(V, b);
        case "Record":
          return B(V, b);
        case "Ref":
          return S(V, b);
        case "This":
          return G(V, b);
        case "Tuple":
          return j(V, b);
        case "Union":
          return M(V, b);
        case "Any":
        case "BigInt":
        case "Boolean":
        case "Date":
        case "Integer":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return n.TypeGuard.TTransform(D);
        default:
          if (!n.TypeRegistry.Has(V[n.Kind]))
            throw new H$(V);
          return n.TypeGuard.TTransform(D);
      }
    }
    const K = new Set;
    function A(D, I) {
      return K.clear(), O(D, I);
    }
    $.Has = A;
  })(nW || (sW.HasTransform = nW = {}));
  var oW;
  (function($) {
    function W(M, O) {
      try {
        return n.TypeGuard.TTransform(M) ? M[n.Transform].Decode(O) : O;
      } catch (K) {
        throw new s6(M, O, K);
      }
    }
    function Y(M, O, K) {
      const A = K.map((D) => S(M.items, O, D));
      return W(M, A);
    }
    function X(M, O, K) {
      if (!(0, c0.IsPlainObject)(K) || (0, c0.IsValueType)(K))
        return W(M, K);
      const A = n.KeyResolver.ResolveKeys(M, { includePatterns: false }), D = Object.entries(K).reduce((b, [V, _]) => {
        return !A.includes(V) ? { ...b, [V]: _ } : { ...b, [V]: W(n.IndexedAccessor.Resolve(M, [V]), _) };
      }, {});
      if (!n.TypeGuard.TTransform(M.unevaluatedProperties))
        return W(M, D);
      const I = Object.entries(D).reduce((b, [V, _]) => {
        return A.includes(V) ? { ...b, [V]: _ } : { ...b, [V]: W(M.unevaluatedProperties, _) };
      }, {});
      return W(M, I);
    }
    function Z(M, O, K) {
      const A = S(M.not, O, K);
      return W(M, A);
    }
    function Q(M, O, K) {
      if (!(0, c0.IsPlainObject)(K))
        return W(M, K);
      const A = Object.entries(K).reduce((b, [V, _]) => {
        return !(V in M.properties) ? { ...b, [V]: _ } : { ...b, [V]: S(M.properties[V], O, _) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return W(M, A);
      const D = M.additionalProperties, I = Object.entries(A).reduce((b, [V, _]) => {
        return V in M.properties ? { ...b, [V]: _ } : { ...b, [V]: S(D, O, _) };
      }, {});
      return W(M, I);
    }
    function J(M, O, K) {
      if (!(0, c0.IsPlainObject)(K))
        return W(M, K);
      const A = Object.getOwnPropertyNames(M.patternProperties)[0], D = M.patternProperties[A], I = new RegExp(A), b = Object.entries(K).reduce((a, [e, o]) => {
        return !I.test(e) ? { ...a, [e]: o } : { ...a, [e]: S(D, O, o) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return W(M, b);
      const V = M.additionalProperties, _ = Object.entries(b).reduce((a, [e, o]) => {
        return I.test(e) ? { ...a, [e]: o } : { ...a, [e]: S(V, O, o) };
      }, {});
      return W(M, _);
    }
    function z(M, O, K) {
      const A = (0, h1.Deref)(M, O), D = S(A, O, K);
      return W(M, D);
    }
    function F(M, O, K) {
      const A = (0, h1.Deref)(M, O), D = S(A, O, K);
      return W(M, D);
    }
    function w(M, O, K) {
      const A = (0, c0.IsArray)(M.items) ? M.items.map((D, I) => S(D, O, K[I])) : [];
      return W(M, A);
    }
    function B(M, O, K) {
      const A = W(M, K);
      for (let D of M.anyOf) {
        if (!G(D, O, A))
          continue;
        return S(D, O, A);
      }
      return A;
    }
    function S(M, O, K) {
      const A = typeof M.$id === "string" ? [...O, M] : O, D = M;
      switch (M[n.Kind]) {
        case "Array":
          return Y(D, A, K);
        case "Intersect":
          return X(D, A, K);
        case "Not":
          return Z(D, A, K);
        case "Object":
          return Q(D, A, K);
        case "Record":
          return J(D, A, K);
        case "Ref":
          return z(D, A, K);
        case "Symbol":
          return W(D, K);
        case "This":
          return F(D, A, K);
        case "Tuple":
          return w(D, A, K);
        case "Union":
          return B(D, A, K);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return W(D, K);
        default:
          if (!n.TypeRegistry.Has(D[n.Kind]))
            throw new H$(D);
          return W(D, K);
      }
    }
    let G = () => false;
    function j(M, O, K, A) {
      return G = A, S(M, O, K);
    }
    $.Decode = j;
  })(oW || (sW.DecodeTransform = oW = {}));
  var cW;
  (function($) {
    function W(M, O) {
      try {
        return n.TypeGuard.TTransform(M) ? M[n.Transform].Encode(O) : O;
      } catch (K) {
        throw new r6(M, O, K);
      }
    }
    function Y(M, O, K) {
      return W(M, K).map((D) => S(M.items, O, D));
    }
    function X(M, O, K) {
      const A = W(M, K);
      if (!(0, c0.IsPlainObject)(K) || (0, c0.IsValueType)(K))
        return A;
      const D = n.KeyResolver.ResolveKeys(M, { includePatterns: false }), I = Object.entries(A).reduce((b, [V, _]) => {
        return !D.includes(V) ? { ...b, [V]: _ } : { ...b, [V]: W(n.IndexedAccessor.Resolve(M, [V]), _) };
      }, {});
      if (!n.TypeGuard.TTransform(M.unevaluatedProperties))
        return W(M, I);
      return Object.entries(I).reduce((b, [V, _]) => {
        return D.includes(V) ? { ...b, [V]: _ } : { ...b, [V]: W(M.unevaluatedProperties, _) };
      }, {});
    }
    function Z(M, O, K) {
      const A = W(M, K);
      return W(M.not, A);
    }
    function Q(M, O, K) {
      const A = W(M, K);
      if (!(0, c0.IsPlainObject)(K))
        return A;
      const D = Object.entries(A).reduce((b, [V, _]) => {
        return !(V in M.properties) ? { ...b, [V]: _ } : { ...b, [V]: S(M.properties[V], O, _) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return D;
      const I = M.additionalProperties;
      return Object.entries(D).reduce((b, [V, _]) => {
        return V in M.properties ? { ...b, [V]: _ } : { ...b, [V]: S(I, O, _) };
      }, {});
    }
    function J(M, O, K) {
      const A = W(M, K);
      if (!(0, c0.IsPlainObject)(K))
        return A;
      const D = Object.getOwnPropertyNames(M.patternProperties)[0], I = M.patternProperties[D], b = new RegExp(D), V = Object.entries(A).reduce((a, [e, o]) => {
        return !b.test(e) ? { ...a, [e]: o } : { ...a, [e]: S(I, O, o) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return W(M, V);
      const _ = M.additionalProperties;
      return Object.entries(V).reduce((a, [e, o]) => {
        return b.test(e) ? { ...a, [e]: o } : { ...a, [e]: S(_, O, o) };
      }, {});
    }
    function z(M, O, K) {
      const A = (0, h1.Deref)(M, O), D = S(A, O, K);
      return W(M, D);
    }
    function F(M, O, K) {
      const A = (0, h1.Deref)(M, O), D = S(A, O, K);
      return W(M, D);
    }
    function w(M, O, K) {
      const A = W(M, K);
      return (0, c0.IsArray)(M.items) ? M.items.map((D, I) => S(D, O, A[I])) : [];
    }
    function B(M, O, K) {
      for (let A of M.anyOf) {
        if (!G(A, O, K))
          continue;
        const D = S(A, O, K);
        return W(M, D);
      }
      return W(M, K);
    }
    function S(M, O, K) {
      const A = typeof M.$id === "string" ? [...O, M] : O, D = M;
      switch (M[n.Kind]) {
        case "Array":
          return Y(D, A, K);
        case "Intersect":
          return X(D, A, K);
        case "Not":
          return Z(D, A, K);
        case "Object":
          return Q(D, A, K);
        case "Record":
          return J(D, A, K);
        case "Ref":
          return z(D, A, K);
        case "This":
          return F(D, A, K);
        case "Tuple":
          return w(D, A, K);
        case "Union":
          return B(D, A, K);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return W(D, K);
        default:
          if (!n.TypeRegistry.Has(D[n.Kind]))
            throw new H$(D);
          return W(D, K);
      }
    }
    let G = () => false;
    function j(M, O, K, A) {
      return G = A, S(M, O, K);
    }
    $.Encode = j;
  })(cW || (sW.EncodeTransform = cW = {}));
});
var JY = H0((ZY) => {
  Object.defineProperty(ZY, "__esModule", { value: true });
  ZY.Value = undefined;
  var aW = I$(), f9 = jW(), T9 = W$(), d9 = SW(), eW = dW(), y9 = p1(), $Y = hW(), WY = m6(), x$ = Q$(), YY = E6(), k$ = a6(), XY;
  (function($) {
    function W(...M) {
      return eW.Cast.apply(eW, M);
    }
    $.Cast = W;
    function Y(...M) {
      return WY.Create.apply(WY, M);
    }
    $.Create = Y;
    function X(...M) {
      return x$.Check.apply(x$, M);
    }
    $.Check = X;
    function Z(...M) {
      return $Y.Convert.apply($Y, M);
    }
    $.Convert = Z;
    function Q(M) {
      return y9.Clone(M);
    }
    $.Clone = Q;
    function J(...M) {
      const [O, K, A] = M.length === 3 ? [M[0], M[1], M[2]] : [M[0], [], M[1]];
      if (!X(O, K, A))
        throw new k$.TransformDecodeCheckError(O, A, F(O, K, A).First());
      return k$.DecodeTransform.Decode(O, K, A, x$.Check);
    }
    $.Decode = J;
    function z(...M) {
      const [O, K, A] = M.length === 3 ? [M[0], M[1], M[2]] : [M[0], [], M[1]], D = k$.EncodeTransform.Encode(O, K, A, x$.Check);
      if (!X(O, K, D))
        throw new k$.TransformEncodeCheckError(O, A, F(O, K, A).First());
      return D;
    }
    $.Encode = z;
    function F(...M) {
      return aW.Errors.apply(aW, M);
    }
    $.Errors = F;
    function w(M, O) {
      return d9.Equal(M, O);
    }
    $.Equal = w;
    function B(M, O) {
      return YY.Diff(M, O);
    }
    $.Diff = B;
    function S(M) {
      return T9.Hash(M);
    }
    $.Hash = S;
    function G(M, O) {
      return YY.Patch(M, O);
    }
    $.Patch = G;
    function j(M, O) {
      f9.Mutate(M, O);
    }
    $.Mutate = j;
  })(XY || (ZY.Value = XY = {}));
});
var e6 = H0((Y1) => {
  Object.defineProperty(Y1, "__esModule", { value: true });
  Y1.Value = Y1.ValuePointer = Y1.Delete = Y1.Update = Y1.Insert = Y1.Edit = Y1.ValueErrorIterator = Y1.ValueErrorType = undefined;
  var zY = I$();
  Object.defineProperty(Y1, "ValueErrorType", { enumerable: true, get: function() {
    return zY.ValueErrorType;
  } });
  Object.defineProperty(Y1, "ValueErrorIterator", { enumerable: true, get: function() {
    return zY.ValueErrorIterator;
  } });
  var g$ = E6();
  Object.defineProperty(Y1, "Edit", { enumerable: true, get: function() {
    return g$.Edit;
  } });
  Object.defineProperty(Y1, "Insert", { enumerable: true, get: function() {
    return g$.Insert;
  } });
  Object.defineProperty(Y1, "Update", { enumerable: true, get: function() {
    return g$.Update;
  } });
  Object.defineProperty(Y1, "Delete", { enumerable: true, get: function() {
    return g$.Delete;
  } });
  var v9 = b$();
  Object.defineProperty(Y1, "ValuePointer", { enumerable: true, get: function() {
    return v9.ValuePointer;
  } });
  var p9 = JY();
  Object.defineProperty(Y1, "Value", { enumerable: true, get: function() {
    return p9.Value;
  } });
});
var FY = H0((MY) => {
  Object.defineProperty(MY, "__esModule", { value: true });
  MY.TypeCompiler = MY.Policy = MY.TypeCompilerTypeGuardError = MY.TypeCompilerUnknownTypeError = MY.TypeCheck = undefined;
  var M$ = a6(), c = k0(), t9 = $$(), A$ = E$(), s9 = D1(), r9 = W$(), A0 = f0();

  class Z8 {
    constructor($, W, Y, X) {
      this.schema = $, this.references = W, this.checkFunc = Y, this.code = X, this.hasTransform = M$.HasTransform.Has($, W);
    }
    Code() {
      return this.code;
    }
    Errors($) {
      return (0, t9.Errors)(this.schema, this.references, $);
    }
    Check($) {
      return this.checkFunc($);
    }
    Decode($) {
      if (!this.checkFunc($))
        throw new M$.TransformDecodeCheckError(this.schema, $, this.Errors($).First());
      return this.hasTransform ? M$.DecodeTransform.Decode(this.schema, this.references, $, (W, Y, X) => this.Check(X)) : $;
    }
    Encode($) {
      const W = this.hasTransform ? M$.EncodeTransform.Encode(this.schema, this.references, $, (Y, X, Z) => this.Check(Z)) : $;
      if (!this.checkFunc(W))
        throw new M$.TransformEncodeCheckError(this.schema, $, this.Errors($).First());
      return W;
    }
  }
  MY.TypeCheck = Z8;
  var A1;
  (function($) {
    function W(Q) {
      return Q === 36;
    }
    $.DollarSign = W;
    function Y(Q) {
      return Q === 95;
    }
    $.IsUnderscore = Y;
    function X(Q) {
      return Q >= 65 && Q <= 90 || Q >= 97 && Q <= 122;
    }
    $.IsAlpha = X;
    function Z(Q) {
      return Q >= 48 && Q <= 57;
    }
    $.IsNumeric = Z;
  })(A1 || (A1 = {}));
  var v$;
  (function($) {
    function W(Q) {
      if (Q.length === 0)
        return false;
      return A1.IsNumeric(Q.charCodeAt(0));
    }
    function Y(Q) {
      if (W(Q))
        return false;
      for (let J = 0;J < Q.length; J++) {
        const z = Q.charCodeAt(J);
        if (!(A1.IsAlpha(z) || A1.IsNumeric(z) || A1.DollarSign(z) || A1.IsUnderscore(z)))
          return false;
      }
      return true;
    }
    function X(Q) {
      return Q.replace(/'/g, "\\'");
    }
    function Z(Q, J) {
      return Y(J) ? `${Q}.${J}` : `${Q}['${X(J)}']`;
    }
    $.Encode = Z;
  })(v$ || (v$ = {}));
  var Y8;
  (function($) {
    function W(Y) {
      const X = [];
      for (let Z = 0;Z < Y.length; Z++) {
        const Q = Y.charCodeAt(Z);
        if (A1.IsNumeric(Q) || A1.IsAlpha(Q))
          X.push(Y.charAt(Z));
        else
          X.push(`_${Q}_`);
      }
      return X.join("").replace(/__/g, "_");
    }
    $.Encode = W;
  })(Y8 || (Y8 = {}));
  var X8;
  (function($) {
    function W(Y) {
      return Y.replace(/'/g, "\\'");
    }
    $.Escape = W;
  })(X8 || (X8 = {}));

  class Q8 extends A0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  MY.TypeCompilerUnknownTypeError = Q8;

  class p$ extends A0.TypeBoxError {
    constructor($) {
      super("Preflight validation check failed to guard for the given schema");
      this.schema = $;
    }
  }
  MY.TypeCompilerTypeGuardError = p$;
  var C1;
  (function($) {
    function W(J, z, F) {
      return A$.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${z}' in ${J} ? ${F} : true)` : `(${v$.Encode(J, z)} !== undefined ? ${F} : true)`;
    }
    $.IsExactOptionalProperty = W;
    function Y(J) {
      return !A$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}))` : `(typeof ${J} === 'object' && ${J} !== null)`;
    }
    $.IsObjectLike = Y;
    function X(J) {
      return !A$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}) && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))` : `(typeof ${J} === 'object' && ${J} !== null && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))`;
    }
    $.IsRecordLike = X;
    function Z(J) {
      return !A$.TypeSystemPolicy.AllowNaN ? `(typeof ${J} === 'number' && Number.isFinite(${J}))` : `typeof ${J} === 'number'`;
    }
    $.IsNumberLike = Z;
    function Q(J) {
      return A$.TypeSystemPolicy.AllowNullVoid ? `(${J} === undefined || ${J} === null)` : `${J} === undefined`;
    }
    $.IsVoidLike = Q;
  })(C1 || (MY.Policy = C1 = {}));
  var NY;
  (function($) {
    function W(P) {
      return P[A0.Kind] === "Any" || P[A0.Kind] === "Unknown";
    }
    function* Y(P, E, L) {
      yield "true";
    }
    function* X(P, E, L) {
      yield `Array.isArray(${L})`;
      const [p, T] = [D0("value", "any"), D0("acc", "number")];
      if ((0, c.IsNumber)(P.maxItems))
        yield `${L}.length <= ${P.maxItems}`;
      if ((0, c.IsNumber)(P.minItems))
        yield `${L}.length >= ${P.minItems}`;
      const d = f(P.items, E, "value");
      if (yield `${L}.every((${p}) => ${d})`, A0.TypeGuard.TSchema(P.contains) || (0, c.IsNumber)(P.minContains) || (0, c.IsNumber)(P.maxContains)) {
        const Z0 = A0.TypeGuard.TSchema(P.contains) ? P.contains : A0.Type.Never(), O0 = f(Z0, E, "value"), Q0 = (0, c.IsNumber)(P.minContains) ? [`(count >= ${P.minContains})`] : [], N = (0, c.IsNumber)(P.maxContains) ? [`(count <= ${P.maxContains})`] : [], l = `const count = value.reduce((${T}, ${p}) => ${O0} ? acc + 1 : acc, 0)`, I0 = ["(count > 0)", ...Q0, ...N].join(" && ");
        yield `((${p}) => { ${l}; return ${I0}})(${L})`;
      }
      if (P.uniqueItems === true)
        yield `((${p}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${L})`;
    }
    function* Z(P, E, L) {
      yield `(typeof value === 'object' && Symbol.asyncIterator in ${L})`;
    }
    function* Q(P, E, L) {
      if (yield `(typeof ${L} === 'bigint')`, (0, c.IsBigInt)(P.exclusiveMaximum))
        yield `${L} < BigInt(${P.exclusiveMaximum})`;
      if ((0, c.IsBigInt)(P.exclusiveMinimum))
        yield `${L} > BigInt(${P.exclusiveMinimum})`;
      if ((0, c.IsBigInt)(P.maximum))
        yield `${L} <= BigInt(${P.maximum})`;
      if ((0, c.IsBigInt)(P.minimum))
        yield `${L} >= BigInt(${P.minimum})`;
      if ((0, c.IsBigInt)(P.multipleOf))
        yield `(${L} % BigInt(${P.multipleOf})) === 0`;
    }
    function* J(P, E, L) {
      yield `(typeof ${L} === 'boolean')`;
    }
    function* z(P, E, L) {
      yield* v0(P.returns, E, `${L}.prototype`);
    }
    function* F(P, E, L) {
      if (yield `(${L} instanceof Date) && Number.isFinite(${L}.getTime())`, (0, c.IsNumber)(P.exclusiveMaximumTimestamp))
        yield `${L}.getTime() < ${P.exclusiveMaximumTimestamp}`;
      if ((0, c.IsNumber)(P.exclusiveMinimumTimestamp))
        yield `${L}.getTime() > ${P.exclusiveMinimumTimestamp}`;
      if ((0, c.IsNumber)(P.maximumTimestamp))
        yield `${L}.getTime() <= ${P.maximumTimestamp}`;
      if ((0, c.IsNumber)(P.minimumTimestamp))
        yield `${L}.getTime() >= ${P.minimumTimestamp}`;
      if ((0, c.IsNumber)(P.multipleOfTimestamp))
        yield `(${L}.getTime() % ${P.multipleOfTimestamp}) === 0`;
    }
    function* w(P, E, L) {
      yield `(typeof ${L} === 'function')`;
    }
    function* B(P, E, L) {
      if (yield `(typeof ${L} === 'number' && Number.isInteger(${L}))`, (0, c.IsNumber)(P.exclusiveMaximum))
        yield `${L} < ${P.exclusiveMaximum}`;
      if ((0, c.IsNumber)(P.exclusiveMinimum))
        yield `${L} > ${P.exclusiveMinimum}`;
      if ((0, c.IsNumber)(P.maximum))
        yield `${L} <= ${P.maximum}`;
      if ((0, c.IsNumber)(P.minimum))
        yield `${L} >= ${P.minimum}`;
      if ((0, c.IsNumber)(P.multipleOf))
        yield `(${L} % ${P.multipleOf}) === 0`;
    }
    function* S(P, E, L) {
      const p = P.allOf.map((T) => f(T, E, L)).join(" && ");
      if (P.unevaluatedProperties === false) {
        const T = u(`${new RegExp(A0.KeyResolver.ResolvePattern(P))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key))`;
        yield `(${p} && ${d})`;
      } else if (A0.TypeGuard.TSchema(P.unevaluatedProperties)) {
        const T = u(`${new RegExp(A0.KeyResolver.ResolvePattern(P))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key) || ${f(P.unevaluatedProperties, E, `${L}[key]`)})`;
        yield `(${p} && ${d})`;
      } else
        yield `(${p})`;
    }
    function* G(P, E, L) {
      yield `(typeof value === 'object' && Symbol.iterator in ${L})`;
    }
    function* j(P, E, L) {
      if (typeof P.const === "number" || typeof P.const === "boolean")
        yield `(${L} === ${P.const})`;
      else
        yield `(${L} === '${X8.Escape(P.const)}')`;
    }
    function* M(P, E, L) {
      yield "false";
    }
    function* O(P, E, L) {
      yield `(!${f(P.not, E, L)})`;
    }
    function* K(P, E, L) {
      yield `(${L} === null)`;
    }
    function* A(P, E, L) {
      if (yield C1.IsNumberLike(L), (0, c.IsNumber)(P.exclusiveMaximum))
        yield `${L} < ${P.exclusiveMaximum}`;
      if ((0, c.IsNumber)(P.exclusiveMinimum))
        yield `${L} > ${P.exclusiveMinimum}`;
      if ((0, c.IsNumber)(P.maximum))
        yield `${L} <= ${P.maximum}`;
      if ((0, c.IsNumber)(P.minimum))
        yield `${L} >= ${P.minimum}`;
      if ((0, c.IsNumber)(P.multipleOf))
        yield `(${L} % ${P.multipleOf}) === 0`;
    }
    function* D(P, E, L) {
      if (yield C1.IsObjectLike(L), (0, c.IsNumber)(P.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${P.minProperties}`;
      if ((0, c.IsNumber)(P.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${P.maxProperties}`;
      const p = Object.getOwnPropertyNames(P.properties);
      for (let T of p) {
        const d = v$.Encode(L, T), Z0 = P.properties[T];
        if (P.required && P.required.includes(T)) {
          if (yield* v0(Z0, E, d), A0.ExtendsUndefined.Check(Z0) || W(Z0))
            yield `('${T}' in ${L})`;
        } else {
          const O0 = f(Z0, E, d);
          yield C1.IsExactOptionalProperty(L, T, O0);
        }
      }
      if (P.additionalProperties === false)
        if (P.required && P.required.length === p.length)
          yield `Object.getOwnPropertyNames(${L}).length === ${p.length}`;
        else {
          const T = `[${p.map((d) => `'${d}'`).join(", ")}]`;
          yield `Object.getOwnPropertyNames(${L}).every(key => ${T}.includes(key))`;
        }
      if (typeof P.additionalProperties === "object") {
        const T = f(P.additionalProperties, E, `${L}[key]`), d = `[${p.map((Z0) => `'${Z0}'`).join(", ")}]`;
        yield `(Object.getOwnPropertyNames(${L}).every(key => ${d}.includes(key) || ${T}))`;
      }
    }
    function* I(P, E, L) {
      yield `(typeof value === 'object' && typeof ${L}.then === 'function')`;
    }
    function* b(P, E, L) {
      if (yield C1.IsRecordLike(L), (0, c.IsNumber)(P.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${P.minProperties}`;
      if ((0, c.IsNumber)(P.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${P.maxProperties}`;
      const [p, T] = Object.entries(P.patternProperties)[0], d = u(`${new RegExp(p)}`), Z0 = f(T, E, "value"), O0 = A0.TypeGuard.TSchema(P.additionalProperties) ? f(P.additionalProperties, E, L) : P.additionalProperties === false ? "false" : "true", Q0 = `(${d}.test(key) ? ${Z0} : ${O0})`;
      yield `(Object.entries(${L}).every(([key, value]) => ${Q0}))`;
    }
    function* V(P, E, L) {
      const p = (0, s9.Deref)(P, E);
      if (R.functions.has(P.$ref))
        return yield `${i(P.$ref)}(${L})`;
      yield* v0(p, E, L);
    }
    function* _(P, E, L) {
      if (yield `(typeof ${L} === 'string')`, (0, c.IsNumber)(P.maxLength))
        yield `${L}.length <= ${P.maxLength}`;
      if ((0, c.IsNumber)(P.minLength))
        yield `${L}.length >= ${P.minLength}`;
      if (P.pattern !== undefined)
        yield `${u(`${new RegExp(P.pattern)};`)}.test(${L})`;
      if (P.format !== undefined)
        yield `format('${P.format}', ${L})`;
    }
    function* a(P, E, L) {
      yield `(typeof ${L} === 'symbol')`;
    }
    function* e(P, E, L) {
      yield `(typeof ${L} === 'string')`, yield `${u(`${new RegExp(P.pattern)};`)}.test(${L})`;
    }
    function* o(P, E, L) {
      yield `${i(P.$ref)}(${L})`;
    }
    function* P0(P, E, L) {
      if (yield `Array.isArray(${L})`, P.items === undefined)
        return yield `${L}.length === 0`;
      yield `(${L}.length === ${P.maxItems})`;
      for (let p = 0;p < P.items.length; p++)
        yield `${f(P.items[p], E, `${L}[${p}]`)}`;
    }
    function* F0(P, E, L) {
      yield `${L} === undefined`;
    }
    function* C0(P, E, L) {
      yield `(${P.anyOf.map((T) => f(T, E, L)).join(" || ")})`;
    }
    function* Y0(P, E, L) {
      if (yield `${L} instanceof Uint8Array`, (0, c.IsNumber)(P.maxByteLength))
        yield `(${L}.length <= ${P.maxByteLength})`;
      if ((0, c.IsNumber)(P.minByteLength))
        yield `(${L}.length >= ${P.minByteLength})`;
    }
    function* X0(P, E, L) {
      yield "true";
    }
    function* u0(P, E, L) {
      yield C1.IsVoidLike(L);
    }
    function* a0(P, E, L) {
      const p = R.instances.size;
      R.instances.set(p, P), yield `kind('${P[A0.Kind]}', ${p}, ${L})`;
    }
    function* v0(P, E, L, p = true) {
      const T = (0, c.IsString)(P.$id) ? [...E, P] : E, d = P;
      if (p && (0, c.IsString)(P.$id)) {
        const Z0 = i(P.$id);
        if (R.functions.has(Z0))
          return yield `${Z0}(${L})`;
        else {
          const O0 = q0(Z0, P, E, "value", false);
          return R.functions.set(Z0, O0), yield `${Z0}(${L})`;
        }
      }
      switch (d[A0.Kind]) {
        case "Any":
          return yield* Y(d, T, L);
        case "Array":
          return yield* X(d, T, L);
        case "AsyncIterator":
          return yield* Z(d, T, L);
        case "BigInt":
          return yield* Q(d, T, L);
        case "Boolean":
          return yield* J(d, T, L);
        case "Constructor":
          return yield* z(d, T, L);
        case "Date":
          return yield* F(d, T, L);
        case "Function":
          return yield* w(d, T, L);
        case "Integer":
          return yield* B(d, T, L);
        case "Intersect":
          return yield* S(d, T, L);
        case "Iterator":
          return yield* G(d, T, L);
        case "Literal":
          return yield* j(d, T, L);
        case "Never":
          return yield* M(d, T, L);
        case "Not":
          return yield* O(d, T, L);
        case "Null":
          return yield* K(d, T, L);
        case "Number":
          return yield* A(d, T, L);
        case "Object":
          return yield* D(d, T, L);
        case "Promise":
          return yield* I(d, T, L);
        case "Record":
          return yield* b(d, T, L);
        case "Ref":
          return yield* V(d, T, L);
        case "String":
          return yield* _(d, T, L);
        case "Symbol":
          return yield* a(d, T, L);
        case "TemplateLiteral":
          return yield* e(d, T, L);
        case "This":
          return yield* o(d, T, L);
        case "Tuple":
          return yield* P0(d, T, L);
        case "Undefined":
          return yield* F0(d, T, L);
        case "Union":
          return yield* C0(d, T, L);
        case "Uint8Array":
          return yield* Y0(d, T, L);
        case "Unknown":
          return yield* X0(d, T, L);
        case "Void":
          return yield* u0(d, T, L);
        default:
          if (!A0.TypeRegistry.Has(d[A0.Kind]))
            throw new Q8(P);
          return yield* a0(d, T, L);
      }
    }
    const R = { language: "javascript", functions: new Map, variables: new Map, instances: new Map };
    function f(P, E, L, p = true) {
      return `(${[...v0(P, E, L, p)].join(" && ")})`;
    }
    function i(P) {
      return `check_${Y8.Encode(P)}`;
    }
    function u(P) {
      const E = `local_${R.variables.size}`;
      return R.variables.set(E, `const ${E} = ${P}`), E;
    }
    function q0(P, E, L, p, T = true) {
      const [d, Z0] = ["\n", (l) => "".padStart(l, " ")], O0 = D0("value", "any"), Q0 = w0("boolean"), N = [...v0(E, L, p, T)].map((l) => `${Z0(4)}${l}`).join(` &&${d}`);
      return `function ${P}(${O0})${Q0} {${d}${Z0(2)}return (${d}${N}${d}${Z0(2)})\n}`;
    }
    function D0(P, E) {
      const L = R.language === "typescript" ? `: ${E}` : "";
      return `${P}${L}`;
    }
    function w0(P) {
      return R.language === "typescript" ? `: ${P}` : "";
    }
    function K0(P, E, L) {
      const p = q0("check", P, E, "value"), T = D0("value", "any"), d = w0("boolean"), Z0 = [...R.functions.values()], O0 = [...R.variables.values()], Q0 = (0, c.IsString)(P.$id) ? `return function check(${T})${d} {\n  return ${i(P.$id)}(value)\n}` : `return ${p}`;
      return [...O0, ...Z0, Q0].join("\n");
    }
    function N0(...P) {
      const E = { language: "javascript" }, [L, p, T] = P.length === 2 && (0, c.IsArray)(P[1]) ? [P[0], P[1], E] : P.length === 2 && !(0, c.IsArray)(P[1]) ? [P[0], [], P[1]] : P.length === 3 ? [P[0], P[1], P[2]] : P.length === 1 ? [P[0], [], E] : [null, [], E];
      if (R.language = T.language, R.variables.clear(), R.functions.clear(), R.instances.clear(), !A0.TypeGuard.TSchema(L))
        throw new p$(L);
      for (let d of p)
        if (!A0.TypeGuard.TSchema(d))
          throw new p$(d);
      return K0(L, p, T);
    }
    $.Code = N0;
    function B1(P, E = []) {
      const L = N0(P, E, { language: "javascript" }), p = globalThis.Function("kind", "format", "hash", L), T = new Map(R.instances);
      function d(N, l, I0) {
        if (!A0.TypeRegistry.Has(N) || !T.has(l))
          return false;
        const c$ = A0.TypeRegistry.Get(N), l$ = T.get(l);
        return c$(l$, I0);
      }
      function Z0(N, l) {
        if (!A0.FormatRegistry.Has(N))
          return false;
        return A0.FormatRegistry.Get(N)(l);
      }
      function O0(N) {
        return (0, r9.Hash)(N);
      }
      const Q0 = p(d, Z0, O0);
      return new Z8(P, E, Q0, L);
    }
    $.Compile = B1;
  })(NY || (MY.TypeCompiler = NY = {}));
});
var BY = H0((l0) => {
  var Y7 = l0 && l0.__createBinding || (Object.create ? function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    var Z = Object.getOwnPropertyDescriptor(W, Y);
    if (!Z || ("get" in Z ? !W.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return W[Y];
      } };
    Object.defineProperty($, X, Z);
  } : function($, W, Y, X) {
    if (X === undefined)
      X = Y;
    $[X] = W[Y];
  }), X7 = l0 && l0.__exportStar || function($, W) {
    for (var Y in $)
      if (Y !== "default" && !Object.prototype.hasOwnProperty.call(W, Y))
        Y7(W, $, Y);
  };
  Object.defineProperty(l0, "__esModule", { value: true });
  l0.ValueErrorIterator = l0.ValueErrorType = undefined;
  var UY = I$();
  Object.defineProperty(l0, "ValueErrorType", { enumerable: true, get: function() {
    return UY.ValueErrorType;
  } });
  Object.defineProperty(l0, "ValueErrorIterator", { enumerable: true, get: function() {
    return UY.ValueErrorIterator;
  } });
  X7(FY(), l0);
});
var IY = H0((Bz, CY) => {
  var J7 = function($) {
    var W = $.indexOf("%");
    if (W === -1)
      return $;
    var Y = $.length, X = "", Z = 0, Q = 0, J = W, z = SY;
    while (W > -1 && W < Y) {
      var F = LY($[W + 1], 4), w = LY($[W + 2], 0), B = F | w, S = F8[B];
      if (z = F8[256 + z + S], Q = Q << 6 | B & F8[364 + S], z === SY)
        X += $.slice(Z, J), X += Q <= 65535 ? String.fromCharCode(Q) : String.fromCharCode(55232 + (Q >> 10), 56320 + (Q & 1023)), Q = 0, Z = W + 3, W = J = $.indexOf("%", Z);
      else if (z === Q7)
        return null;
      else {
        if (W += 3, W < Y && $.charCodeAt(W) === 37)
          continue;
        return null;
      }
    }
    return X + $.slice(Z);
  }, LY = function($, W) {
    var Y = z7[$];
    return Y === undefined ? 255 : Y << W;
  }, SY = 12, Q7 = 0, F8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], z7 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  CY.exports = J7;
});
var EY = H0((Dz, _Y) => {
  var H7 = function($) {
    const W = new RY;
    if (typeof $ !== "string")
      return W;
    let Y = $.length, X = "", Z = "", Q = -1, J = -1, z = false, F = false, w = false, B = false, S = false, G = 0;
    for (let j = 0;j < Y + 1; j++)
      if (G = j !== Y ? $.charCodeAt(j) : 38, G === 38) {
        if (S = J > Q, !S)
          J = j;
        if (X = $.slice(Q + 1, J), S || X.length > 0) {
          if (w)
            X = X.replace(GY, " ");
          if (z)
            X = bY(X) || X;
          if (S) {
            if (Z = $.slice(J + 1, j), B)
              Z = Z.replace(GY, " ");
            if (F)
              Z = bY(Z) || Z;
          }
          const M = W[X];
          if (M === undefined)
            W[X] = Z;
          else if (M.pop)
            M.push(Z);
          else
            W[X] = [M, Z];
        }
        Z = "", Q = j, J = j, z = false, F = false, w = false, B = false;
      } else if (G === 61)
        if (J <= Q)
          J = j;
        else
          F = true;
      else if (G === 43)
        if (J > Q)
          B = true;
        else
          w = true;
      else if (G === 37)
        if (J > Q)
          F = true;
        else
          z = true;
    return W;
  }, bY = IY(), GY = /\+/g, RY = function() {
  };
  RY.prototype = Object.create(null);
  _Y.exports = H7;
});
var xY = H0((wz, VY) => {
  var N7 = function($) {
    const W = $.length;
    if (W === 0)
      return "";
    let Y = "", X = 0, Z = 0;
    $:
      for (;Z < W; Z++) {
        let Q = $.charCodeAt(Z);
        while (Q < 128) {
          if (q7[Q] !== 1) {
            if (X < Z)
              Y += $.slice(X, Z);
            X = Z + 1, Y += Z1[Q];
          }
          if (++Z === W)
            break $;
          Q = $.charCodeAt(Z);
        }
        if (X < Z)
          Y += $.slice(X, Z);
        if (Q < 2048) {
          X = Z + 1, Y += Z1[192 | Q >> 6] + Z1[128 | Q & 63];
          continue;
        }
        if (Q < 55296 || Q >= 57344) {
          X = Z + 1, Y += Z1[224 | Q >> 12] + Z1[128 | Q >> 6 & 63] + Z1[128 | Q & 63];
          continue;
        }
        if (++Z, Z >= W)
          throw new Error("URI malformed");
        const J = $.charCodeAt(Z) & 1023;
        X = Z + 1, Q = 65536 + ((Q & 1023) << 10 | J), Y += Z1[240 | Q >> 18] + Z1[128 | Q >> 12 & 63] + Z1[128 | Q >> 6 & 63] + Z1[128 | Q & 63];
      }
    if (X === 0)
      return $;
    if (X < W)
      return Y + $.slice(X);
    return Y;
  }, Z1 = Array.from({ length: 256 }, ($, W) => "%" + ((W < 16 ? "0" : "") + W.toString(16)).toUpperCase()), q7 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  VY.exports = { encodeString: N7 };
});
var fY = H0((Kz, gY) => {
  var kY = function($) {
    const W = typeof $;
    if (W === "string")
      return U8($);
    else if (W === "bigint")
      return $.toString();
    else if (W === "boolean")
      return $ ? "true" : "false";
    else if (W === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : U8("" + $);
    return "";
  }, M7 = function($) {
    let W = "";
    if ($ === null || typeof $ !== "object")
      return W;
    const Y = "&", X = Object.keys($), Z = X.length;
    let Q = 0;
    for (let J = 0;J < Z; J++) {
      const z = X[J], F = $[z], w = U8(z) + "=";
      if (J)
        W += Y;
      if (Array.isArray(F)) {
        Q = F.length;
        for (let B = 0;B < Q; B++) {
          if (B)
            W += Y;
          W += w, W += kY(F[B]);
        }
      } else
        W += w, W += kY(F);
    }
    return W;
  }, { encodeString: U8 } = xY();
  gY.exports = M7;
});
var B8 = H0((jz, B$) => {
  var TY = EY(), dY = fY(), yY = { parse: TY, stringify: dY };
  B$.exports = yY;
  B$.exports.default = yY;
  B$.exports.parse = TY;
  B$.exports.stringify = dY;
});
var _1 = ($, W) => ({ part: $, store: null, inert: W !== undefined ? new Map(W.map((Y) => [Y.part.charCodeAt(0), Y])) : null, params: null, wildcardStore: null });
var L8 = ($, W) => ({ ...$, part: W });
var C8 = ($) => ({ paramName: $, store: null, inert: null });

class j1 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, W, Y) {
    let X;
    if (typeof W != "string")
      throw TypeError("Route path must be a string");
    W === "" ? W = "/" : W[0] !== "/" && (W = `/${W}`), this.history.push([$, W, Y]);
    let Z = W[W.length - 1] === "*";
    Z && (W = W.slice(0, -1));
    let Q = W.split(j1.regex.static), J = W.match(j1.regex.params) || [];
    Q[Q.length - 1] === "" && Q.pop(), X = this.root[$] ? this.root[$] : this.root[$] = _1("/");
    let z = 0;
    for (let F = 0;F < Q.length; ++F) {
      let w = Q[F];
      if (F > 0) {
        let B = J[z++].slice(1);
        if (X.params === null)
          X.params = C8(B);
        else if (X.params.paramName !== B)
          throw Error(`Cannot create route "${W}" with parameter "${B}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
        let S = X.params;
        if (S.inert === null) {
          X = S.inert = _1(w);
          continue;
        }
        X = S.inert;
      }
      for (let B = 0;; ) {
        if (B === w.length) {
          if (B < X.part.length) {
            let S = L8(X, X.part.slice(B));
            Object.assign(X, _1(w, [S]));
          }
          break;
        }
        if (B === X.part.length) {
          if (X.inert === null)
            X.inert = new Map;
          else if (X.inert.has(w.charCodeAt(B))) {
            X = X.inert.get(w.charCodeAt(B)), w = w.slice(B), B = 0;
            continue;
          }
          let S = _1(w.slice(B));
          X.inert.set(w.charCodeAt(B), S), X = S;
          break;
        }
        if (w[B] !== X.part[B]) {
          let S = L8(X, X.part.slice(B)), G = _1(w.slice(B));
          Object.assign(X, _1(X.part.slice(0, B), [S, G])), X = G;
          break;
        }
        ++B;
      }
    }
    if (z < J.length) {
      let F = J[z], w = F.slice(1);
      if (X.params === null)
        X.params = C8(w);
      else if (X.params.paramName !== w)
        throw Error(`Cannot create route "${W}" with parameter "${w}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
      return X.params.store === null && (X.params.store = Y), X.params.store;
    }
    return Z ? (X.wildcardStore === null && (X.wildcardStore = Y), X.wildcardStore) : (X.store === null && (X.store = Y), X.store);
  }
  find($, W) {
    let Y = this.root[$];
    return Y ? s$(W, W.length, Y, 0) : null;
  }
}
var s$ = ($, W, Y, X) => {
  let Z = Y?.part, Q = X + Z.length;
  if (Z.length > 1) {
    if (Q > W)
      return null;
    if (Z.length < 15) {
      for (let J = 1, z = X + 1;J < Z.length; ++J, ++z)
        if (Z.charCodeAt(J) !== $.charCodeAt(z))
          return null;
    } else if ($.substring(X, Q) !== Z)
      return null;
  }
  if (Q === W)
    return Y.store !== null ? { store: Y.store, params: {} } : Y.wildcardStore !== null ? { store: Y.wildcardStore, params: { "*": "" } } : null;
  if (Y.inert !== null) {
    let J = Y.inert.get($.charCodeAt(Q));
    if (J !== undefined) {
      let z = s$($, W, J, Q);
      if (z !== null)
        return z;
    }
  }
  if (Y.params !== null) {
    let J = Y.params, z = $.indexOf("/", Q);
    if (z !== Q) {
      if (z === -1 || z >= W) {
        if (J.store !== null) {
          let F = {};
          return F[J.paramName] = $.substring(Q, W), { store: J.store, params: F };
        }
      } else if (J.inert !== null) {
        let F = s$($, W, J.inert, z);
        if (F !== null)
          return F.params[J.paramName] = $.substring(Q, z), F;
      }
    }
  }
  return Y.wildcardStore !== null ? { store: Y.wildcardStore, params: { "*": $.substring(Q, W) } } : null;
};
var G8 = Q1(b8(), 1);
var R8 = G8.default;
var _8 = ($, W) => {
  return async function Y(X) {
    const Z = X.id;
    if (X.event === "request" && X.type === "begin") {
      const Q = $(), J = () => {
        let K, A, D = -1;
        const I = [], b = [];
        let V = false;
        const _ = new Promise((o) => {
          K = (P0) => {
            if (V)
              return;
            else
              V = true;
            o(P0);
          };
        });
        let a = false;
        const e = new Promise((o) => {
          A = (P0) => {
            if (a)
              return;
            else
              a = true;
            if (D === -1)
              D = 0;
            for (;D < b.length; D++) {
              let F0;
              const C0 = { name: "anonymous", time: performance.now(), skip: true, end: new Promise((Y0) => {
                Y0(F0);
              }), children: [] };
              F0 = performance.now(), I[D](C0);
            }
            o(P0);
          };
        });
        return { signal: _, consumeChild(o) {
          switch (o.type) {
            case "begin":
              const P0 = I[++D];
              if (P0)
                P0({ name: o.name, time: o.time, skip: false, end: new Promise((F0) => {
                  b.push(F0);
                }) });
              else
                this.resolve(), console.log("SKIP");
              break;
            case "end":
              b[D]?.(o.time);
              break;
          }
        }, consume(o) {
          switch (o.type) {
            case "begin":
              const P0 = [], F0 = o.unit ?? 0;
              for (let C0 = 0;C0 < F0; C0++) {
                let Y0;
                P0.push(new Promise((X0) => {
                  Y0 = X0;
                })), I.push(Y0);
              }
              K({ name: o.name, time: o.time, skip: false, end: e, children: P0 });
              break;
            case "end":
              A(o.time);
              break;
          }
        }, resolve() {
          if (V && a)
            return;
          let o;
          const P0 = { name: "anonymous", time: performance.now(), skip: true, end: new Promise((F0) => {
            F0(o);
          }), children: [] };
          o = performance.now(), K(P0), A(o);
        } };
      }, z = J(), F = J(), w = J(), B = J(), S = J(), G = J(), j = J(), M = J();
      z.consume(X);
      const O = (K) => {
        if (K.id === Z)
          switch (K.event) {
            case "request":
              z.consume(K);
              break;
            case "request.unit":
              z.consumeChild(K);
              break;
            case "parse":
              F.consume(K);
              break;
            case "parse.unit":
              F.consumeChild(K);
              break;
            case "transform":
              w.consume(K);
              break;
            case "transform.unit":
              w.consumeChild(K);
              break;
            case "beforeHandle":
              B.consume(K);
              break;
            case "beforeHandle.unit":
              B.consumeChild(K);
              break;
            case "handle":
              S.consume(K);
              break;
            case "afterHandle":
              G.consume(K);
              break;
            case "afterHandle.unit":
              G.consumeChild(K);
              break;
            case "error":
              j.consume(K);
              break;
            case "error.unit":
              j.consumeChild(K);
              break;
            case "response":
              if (K.type === "begin")
                z.resolve(), F.resolve(), w.resolve(), B.resolve(), S.resolve(), G.resolve(), j.resolve();
              else
                Q.off("event", O);
              M.consume(K);
              break;
            case "response.unit":
              M.consumeChild(K);
              break;
          }
      };
      Q.on("event", O), await W({ id: X.id, context: X.ctx, set: X.ctx?.set, store: X.ctx?.store, time: X.time, request: z.signal, parse: F.signal, transform: w.signal, beforeHandle: B.signal, handle: S.signal, afterHandle: G.signal, error: j.signal, response: M.signal }), Q.emit(`res${Z}`, undefined);
    }
  };
};
var $8 = Q1(e6(), 1);
var HY = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var n1 = Symbol("ErrorCode");
var q$ = (HY?.NODE_ENV ?? HY?.ENV) === "production";

class f$ extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class L1 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}
class N$ extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, W) {
    super(W ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class S0 extends Error {
  $;
  W;
  Y;
  code = "VALIDATION";
  status = 400;
  constructor($, W, Y) {
    const X = q$ ? undefined : W.Errors(Y).First(), Z = X?.schema.error ? typeof X.schema.error === "function" ? X.schema.error($, W, Y) : X.schema.error : undefined, Q = q$ ? Z ?? `Invalid ${$ ?? X?.schema.error ?? X?.message}` : Z ?? `Invalid ${$}, '${X?.path?.slice(1) || "type"}': ${X?.message}` + "\n\nExpected: " + JSON.stringify($8.Value.Create(W.schema), null, 2) + "\n\nFound: " + JSON.stringify(Y, null, 2);
    super(Q);
    this.type = $;
    this.validator = W;
    this.value = Y;
    Object.setPrototypeOf(this, S0.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  get model() {
    return $8.Value.Create(this.validator.schema);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var W8 = { open($) {
  $.data.open?.($);
}, message($, W) {
  $.data.message?.($, W);
}, drain($) {
  $.data.drain?.($);
}, close($, W, Y) {
  $.data.close?.($, W, Y);
} };

class o1 {
  $;
  W;
  id;
  validator;
  constructor($, W) {
    this.raw = $;
    this.data = W;
    this.validator = $.data.validator, this.id = Date.now();
  }
  get publish() {
    return ($, W = undefined, Y) => {
      if (this.validator?.Check(W) === false)
        throw new S0("message", this.validator, W);
      if (typeof W === "object")
        W = JSON.stringify(W);
      return this.raw.publish($, W, Y), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new S0("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var u9 = function($, W) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var Y = {}, X = W || {}, Z = X.decode || n9, Q = 0;
  while (Q < $.length) {
    var J = $.indexOf("=", Q);
    if (J === -1)
      break;
    var z = $.indexOf(";", Q);
    if (z === -1)
      z = $.length;
    else if (z < J) {
      Q = $.lastIndexOf(";", J - 1) + 1;
      continue;
    }
    var F = $.slice(Q, J).trim();
    if (Y[F] === undefined) {
      var w = $.slice(J + 1, z).trim();
      if (w.charCodeAt(0) === 34)
        w = w.slice(1, -1);
      Y[F] = l9(w, Z);
    }
    Q = z + 1;
  }
  return Y;
};
var h9 = function($, W, Y) {
  var X = Y || {}, Z = X.encode || o9;
  if (typeof Z !== "function")
    throw new TypeError("option encode is invalid");
  if (!T$.test($))
    throw new TypeError("argument name is invalid");
  var Q = Z(W);
  if (Q && !T$.test(Q))
    throw new TypeError("argument val is invalid");
  var J = $ + "=" + Q;
  if (X.maxAge != null) {
    var z = X.maxAge - 0;
    if (isNaN(z) || !isFinite(z))
      throw new TypeError("option maxAge is invalid");
    J += "; Max-Age=" + Math.floor(z);
  }
  if (X.domain) {
    if (!T$.test(X.domain))
      throw new TypeError("option domain is invalid");
    J += "; Domain=" + X.domain;
  }
  if (X.path) {
    if (!T$.test(X.path))
      throw new TypeError("option path is invalid");
    J += "; Path=" + X.path;
  }
  if (X.expires) {
    var F = X.expires;
    if (!c9(F) || isNaN(F.valueOf()))
      throw new TypeError("option expires is invalid");
    J += "; Expires=" + F.toUTCString();
  }
  if (X.httpOnly)
    J += "; HttpOnly";
  if (X.secure)
    J += "; Secure";
  if (X.priority) {
    var w = typeof X.priority === "string" ? X.priority.toLowerCase() : X.priority;
    switch (w) {
      case "low":
        J += "; Priority=Low";
        break;
      case "medium":
        J += "; Priority=Medium";
        break;
      case "high":
        J += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (X.sameSite) {
    var B = typeof X.sameSite === "string" ? X.sameSite.toLowerCase() : X.sameSite;
    switch (B) {
      case true:
        J += "; SameSite=Strict";
        break;
      case "lax":
        J += "; SameSite=Lax";
        break;
      case "strict":
        J += "; SameSite=Strict";
        break;
      case "none":
        J += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return J;
};
var n9 = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var o9 = function($) {
  return encodeURIComponent($);
};
var c9 = function($) {
  return m9.call($) === "[object Date]" || $ instanceof Date;
};
var l9 = function($, W) {
  try {
    return W($);
  } catch (Y) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var d$ = u9;
var y$ = h9;
var m9 = Object.prototype.toString;
var T$ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var i$ = Q1(f0(), 1);
var F$ = Q1(e6(), 1);
var z8 = Q1(BY(), 1);
var J8 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var Z7 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") || t0(Object.getPrototypeOf($));
var F1 = ($, W, { skipKeys: Y } = {}) => {
  if (J8($) && J8(W))
    for (let [X, Z] of Object.entries(W)) {
      if (Y?.includes(X))
        continue;
      if (!J8(Z)) {
        $[X] = Z;
        continue;
      }
      if (!(X in $)) {
        $[X] = Z;
        continue;
      }
      if (Z7(Z)) {
        $[X] = Z;
        continue;
      }
      $[X] = F1($[X], Z);
    }
  return $;
};
var DY = ($, W) => F1($, W, { skipKeys: ["properties"] });
var L0 = ($, W) => {
  const Y = [...Array.isArray($) ? $ : [$]], X = [];
  for (let Z of Y)
    if (Z.$elysiaChecksum)
      X.push(Z.$elysiaChecksum);
  for (let Z of Array.isArray(W) ? W : [W])
    if (!X.includes(Z?.$elysiaChecksum))
      Y.push(Z);
  return Y;
};
var I1 = ($, W) => {
  return { body: W?.body ?? $?.body, headers: W?.headers ?? $?.headers, params: W?.params ?? $?.params, query: W?.query ?? $?.query, response: W?.response ?? $?.response, type: $?.type || W?.type, detail: F1(W?.detail ?? {}, $?.detail ?? {}), parse: L0($?.parse ?? [], W?.parse ?? []), transform: L0($?.transform ?? [], W?.transform ?? []), beforeHandle: L0($?.beforeHandle ?? [], W?.beforeHandle ?? []), afterHandle: L0($?.afterHandle ?? [], W?.afterHandle ?? []), onResponse: L0($?.onResponse ?? [], W?.onResponse ?? []), trace: L0($?.trace ?? [], W?.trace ?? []), error: L0($?.error ?? [], W?.error ?? []) };
};
var X1 = ($, { models: W = {}, additionalProperties: Y = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  const Z = typeof $ === "string" ? W[$] : $;
  if (Z.type === "object" && ("additionalProperties" in Z) === false)
    Z.additionalProperties = Y;
  if (X)
    return { schema: Z, references: "", checkFunc: () => {
    }, code: "", Check: (Q) => F$.Value.Check(Z, Q), Errors: (Q) => F$.Value.Errors(Z, Q), Code: () => "" };
  return z8.TypeCompiler.Compile(Z);
};
var H8 = ($, { models: W = {}, additionalProperties: Y = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  const Z = typeof $ === "string" ? W[$] : $, Q = (z) => {
    if (X)
      return { schema: z, references: "", checkFunc: () => {
      }, code: "", Check: (F) => F$.Value.Check(z, F), Errors: (F) => F$.Value.Errors(z, F), Code: () => "" };
    return z8.TypeCompiler.Compile(z);
  };
  if (i$.Kind in Z) {
    if (("additionalProperties" in Z) === false)
      Z.additionalProperties = Y;
    return { 200: Q(Z) };
  }
  const J = {};
  return Object.keys(Z).forEach((z) => {
    const F = Z[+z];
    if (typeof F === "string") {
      if (F in W) {
        const w = W[F];
        w.type === "object" && ("additionalProperties" in w), J[+z] = (i$.Kind in w) ? Q(w) : w;
      }
      return;
    }
    if (F.type === "object" && ("additionalProperties" in F) === false)
      F.additionalProperties = Y;
    J[+z] = (i$.Kind in F) ? Q(F) : F;
  }), J;
};
var q8 = ($) => {
  let W = 9;
  for (let Y = 0;Y < $.length; )
    W = Math.imul(W ^ $.charCodeAt(Y++), 387420489);
  return W = W ^ W >>> 9;
};
var m$ = ($, W, Y) => {
  const X = (Z) => {
    if (Y)
      Z.$elysiaChecksum = Y;
    return Z;
  };
  return { start: L0($.start, ("start" in W ? W.start ?? [] : []).map(X)), request: L0($.request, ("request" in W ? W.request ?? [] : []).map(X)), parse: L0($.parse, "parse" in W ? W?.parse ?? [] : []).map(X), transform: L0($.transform, (W?.transform ?? []).map(X)), beforeHandle: L0($.beforeHandle, (W?.beforeHandle ?? []).map(X)), afterHandle: L0($.afterHandle, (W?.afterHandle ?? []).map(X)), onResponse: L0($.onResponse, (W?.onResponse ?? []).map(X)), trace: L0($.trace, ("trace" in W ? W.trace ?? [] : []).map(X)), error: L0($.error, (W?.error ?? []).map(X)), stop: L0($.stop, ("stop" in W ? W.stop ?? [] : []).map(X)) };
};
var wY = ($, W = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (W)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((Y) => {
    if (W)
      Y.$elysiaHookType = "global";
    else
      Y.$elysiaHookType = undefined;
    return Y;
  });
};
var c1 = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((W) => W.$elysiaHookType === "global");
};
var N8 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: c1($?.parse), transform: c1($?.transform), beforeHandle: c1($?.beforeHandle), afterHandle: c1($?.afterHandle), onResponse: c1($?.onResponse), error: c1($?.error) };
};
var M8 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var l1 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  const Y = new TextEncoder, X = await crypto.subtle.importKey("raw", Y.encode(W), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), Z = await crypto.subtle.sign("HMAC", X, Y.encode($)), Q = Array.from(new Uint8Array(Z)), J = btoa(String.fromCharCode(...Q));
  return `${$}.${J.replace(/=+$/, "")}`;
};
var A8 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  const Y = $.slice(0, $.lastIndexOf("."));
  return await l1(Y, W) === $ ? Y : false;
};

class s0 {
  $;
  W;
  name;
  setter;
  constructor($, W = {}) {
    this._value = $;
    this.property = W;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const W = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in W)
      this._value = W.value, delete W.value;
    return this.property = W, this.sync();
  }
  set($) {
    const W = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in W)
      this._value = W.value, delete W.value;
    return this.property = W, this.sync();
  }
  remove($) {
    if (this.value === undefined)
      return;
    this.set({ domain: $?.domain, expires: new Date(0), maxAge: 0, path: $?.path, sameSite: $?.sameSite, secure: $?.secure, value: "" });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    if (this.property.domain === $)
      return;
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    if (this.property.expires?.getTime() === $?.getTime())
      return;
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    if (this.property.domain === $)
      return;
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    if (this.property.maxAge === $)
      return;
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    if (this.property.path === $)
      return;
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    if (this.property.priority === $)
      return;
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    if (this.property.sameSite === $)
      return;
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    if (this.property.secure === $)
      return;
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var KY = ($, W, Y) => new Proxy($, { get(X, Z) {
  if (Z in X)
    return X[Z];
  const Q = new s0(undefined, Y ? { ...Y } : undefined);
  return Q.setter = W, Q.name = Z, Q;
}, set(X, Z, Q) {
  if (!(Q instanceof s0))
    return false;
  if (!W.cookie)
    W.cookie = {};
  return Q.setter = W, Q.name = Z, Q.sync(), X[Z] = Q, true;
} });
var u$ = async ($, W, { secret: Y, sign: X, ...Z } = {}) => {
  if (!W)
    return KY({}, $, Z);
  const Q = {}, J = typeof Y === "string";
  if (X && X !== true && !Array.isArray(X))
    X = [X];
  const z = Object.keys(d$(W));
  for (let F = 0;F < z.length; F++) {
    const w = z[F];
    let B = d$(W)[w];
    if (X === true || X?.includes(w)) {
      if (!Y)
        throw new Error("No secret is provided to cookie plugin");
      if (J) {
        if (B = await A8(B, Y), B === false)
          throw new N$(w);
      } else {
        let j = true;
        for (let M = 0;M < Y.length; M++) {
          const O = await A8(B, Y[M]);
          if (O !== false) {
            B = O, j = false;
            break;
          }
        }
        if (j)
          throw new N$(w);
      }
    }
    if (B === undefined)
      continue;
    const S = B.charCodeAt(0);
    if (S === 123 || S === 91)
      try {
        const j = new s0(JSON.parse(B));
        j.setter = $, j.name = w, Q[w] = j;
        continue;
      } catch {
      }
    if (!Number.isNaN(+B))
      B = +B;
    else if (B === "true")
      B = true;
    else if (B === "false")
      B = false;
    const G = new s0(B, Z);
    G.setter = $, G.name = w, Q[w] = G;
  }
  return KY(Q, $);
};
var jY = "toJSON" in new Headers;
var t0 = ($) => {
  for (let W in $)
    return true;
  return false;
};
var PY = ($, W) => {
  if (!$ || !Array.isArray(W))
    return $;
  $.delete("Set-Cookie");
  for (let Y = 0;Y < W.length; Y++) {
    const X = W[Y].indexOf("=");
    $.append("Set-Cookie", `${W[Y].slice(0, X)}=${W[Y].slice(X + 1)}`);
  }
  return $;
};
var OY = ($) => {
  if (!$ || typeof $ !== "object" || !t0($))
    return;
  const W = [];
  for (let [Y, X] of Object.entries($)) {
    if (!Y || !X)
      continue;
    if (Array.isArray(X.value))
      for (let Z = 0;Z < X.value.length; Z++) {
        let Q = X.value[Z];
        if (Q === undefined || Q === null)
          continue;
        if (typeof Q === "object")
          Q = JSON.stringify(Q);
        W.push(y$(Y, Q, X));
      }
    else {
      let Z = X.value;
      if (Z === undefined || Z === null)
        continue;
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      W.push(y$(Y, X.value, X));
    }
  }
  if (W.length === 0)
    return;
  if (W.length === 1)
    return W[0];
  return W;
};
var U1 = ($, W) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if (t0(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = M8[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && t0(W.cookie))
      W.headers["Set-Cookie"] = OY(W.cookie);
    if (W.headers["Set-Cookie"] && Array.isArray(W.headers["Set-Cookie"]))
      W.headers = PY(new Headers(W.headers), W.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, { status: W.status, headers: W.headers });
      case "Object":
      case "Array":
        return Response.json($, W);
      case undefined:
        if (!$)
          return new Response("", W);
        return Response.json($, W);
      case "Response":
        const Y = { ...W.headers };
        if (jY)
          W.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (Z in W.headers)
              W.headers[Z] = Q;
        for (let Z in Y)
          $.headers.append(Z, Y[Z]);
        return $;
      case "Error":
        return U$($, W);
      case "Promise":
        return $.then((Z) => U1(Z, W));
      case "Function":
        return U1($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!W.headers["Content-Type"])
            W.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), W);
        }
        return new Response(X, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return U$($, W);
      case "Promise":
        return $.then((X) => {
          const Z = K1(X);
          if (Z !== undefined)
            return Z;
          return new Response("");
        });
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        const Y = JSON.stringify($);
        if (Y.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(Y);
    }
};
var r0 = ($, W) => {
  if ($ === undefined || $ === null)
    return;
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if (t0(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = M8[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && t0(W.cookie))
      W.headers["Set-Cookie"] = OY(W.cookie);
    if (W.headers["Set-Cookie"] && Array.isArray(W.headers["Set-Cookie"]))
      W.headers = PY(new Headers(W.headers), W.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, W);
      case "Object":
      case "Array":
        return Response.json($, W);
      case "ReadableStream":
        if (!W.headers["content-type"]?.startsWith("text/event-stream"))
          W.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, W);
      case undefined:
        if (!$)
          return;
        return Response.json($, W);
      case "Response":
        const Y = Object.assign({}, W.headers);
        if (jY)
          W.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (!(Z in W.headers))
              W.headers[Z] = Q;
        for (let Z in Y)
          $.headers.append(Z, Y[Z]);
        if ($.status !== W.status)
          W.status = $.status;
        return $;
      case "Promise":
        return $.then((Z) => {
          const Q = r0(Z, W);
          if (Q !== undefined)
            return Q;
          return;
        });
      case "Error":
        return U$($, W);
      case "Function":
        return r0($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!W.headers["Content-Type"])
            W.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), W);
        }
        return new Response(X, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((X) => {
          const Z = r0(X, W);
          if (Z !== undefined)
            return Z;
          return;
        });
      case "Error":
        return U$($, W);
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        const Y = JSON.stringify($);
        if (Y.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(Y);
    }
};
var K1 = ($) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  switch ($?.constructor?.name) {
    case "String":
    case "Blob":
      return new Response($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "ReadableStream":
      return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return U$($);
    case "Promise":
      return $.then((Y) => {
        const X = K1(Y);
        if (X !== undefined)
          return X;
        return new Response("");
      });
    case "Function":
      return K1($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      const W = JSON.stringify($);
      if (W.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(W);
  }
};
var U$ = ($, W) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: W?.status !== 200 ? W?.status ?? 500 : 500, headers: W?.headers });
var vY = Q1(B8(), 1);
var A7 = new Headers().toJSON;
var pY = new RegExp(" (\\w+) = context", "g");
var iY = { value: 0 };
var mY = ({ hasTrace: $, hasTraceSet: W = false, addFn: Y, condition: X = {} }) => {
  if (Y("\nconst reporter = getReporter()\n"), $)
    return (Z, { name: Q, attribute: J = "", unit: z = 0 } = {}) => {
      const F = Z.indexOf("."), w = F === -1;
      if (Z !== "request" && Z !== "response" && !X[w ? Z : Z.slice(0, F)])
        return () => {
          if (W && Z === "afterHandle")
            Y("\nawait traceDone\n");
        };
      if (w)
        Q ||= Z;
      else
        Q ||= "anonymous";
      Y("\n" + `reporter.emit('event', { 
					id,
					event: '${Z}',
					type: 'begin',
					name: '${Q}',
					time: performance.now(),
					${w ? `unit: ${z},` : ""}
					${J}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let B = false;
      return () => {
        if (B)
          return;
        if (B = true, Y("\n" + `reporter.emit('event', {
							id,
							event: '${Z}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), W && Z === "afterHandle")
          Y("\nawait traceDone\n");
      };
    };
  else
    return () => () => {
    };
};
var D$ = ($) => {
  const W = $.indexOf(")");
  if ($.charCodeAt(W + 2) === 61 && $.charCodeAt(W + 5) !== 123)
    return true;
  return $.includes("return");
};
var F7 = ($, { injectResponse: W = "" } = {}) => ({ composeValidation: (Y, X = `c.${Y}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${Y}',
${Y},
${X}
)` : `c.set.status = 400; return new ValidationError(
	'${Y}',
	${Y},
	${X}
).toResponse(c.set.headers)`, composeResponseValidation: (Y = "r") => {
  const X = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${Y}
)` : `return new ValidationError(
'response',
response[c.set.status],
${Y}
).toResponse(c.set.headers)`;
  return `\n${W}
		if(response[c.set.status]?.Check(${Y}) === false) { 
	if(!(response instanceof Error))
		${X}
}\n`;
} });
var j0 = ($, W) => {
  if (W = W.trimStart(), W = W.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(W))
    W = W.slice(W.indexOf("("));
  const Y = W.charCodeAt(0) === 40 || W.startsWith("function") ? W.slice(W.indexOf("(") + 1, W.indexOf(")")) : W.slice(0, W.indexOf("=") - 1);
  if (Y === "")
    return false;
  const X = Y.charCodeAt(0) === 123 ? Y.indexOf("...") : -1;
  if (Y.charCodeAt(0) === 123) {
    if (Y.includes($))
      return true;
    if (X === -1)
      return false;
  }
  if (W.match(new RegExp(`${Y}(.${$}|\\["${$}"\\])`)))
    return true;
  const Z = X !== -1 ? Y.slice(X + 3, Y.indexOf(" ", X + 3)) : undefined;
  if (W.match(new RegExp(`${Z}(.${$}|\\["${$}"\\])`)))
    return true;
  const Q = [Y];
  if (Z)
    Q.push(Z);
  for (let z of W.matchAll(pY))
    Q.push(z[1]);
  const J = new RegExp(`{.*?} = (${Q.join("|")})`, "g");
  for (let [z] of W.matchAll(J))
    if (z.includes(`{ ${$}`) || z.includes(`, ${$}`))
      return true;
  return false;
};
var w$ = ($) => {
  if ($ = $.trimStart(), $ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const W = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (W === "")
    return false;
  const Y = W.charCodeAt(0) === 123 ? W.indexOf("...") : -1, X = Y !== -1 ? W.slice(Y + 3, W.indexOf(" ", Y + 3)) : undefined, Z = [W];
  if (X)
    Z.push(X);
  for (let J of $.matchAll(pY))
    Z.push(J[1]);
  for (let J of Z)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  const Q = new RegExp(`{.*?} = (${Z.join("|")})`, "g");
  for (let [J] of $.matchAll(Q))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var t1 = Symbol.for("TypeBox.Kind");
var h$ = ($, W) => {
  if (!W)
    return;
  if ((t1 in W) && W[t1] === $)
    return true;
  if (W.type === "object") {
    const Y = W.properties;
    for (let X of Object.keys(Y)) {
      const Z = Y[X];
      if (Z.type === "object") {
        if (h$($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let Q = 0;Q < Z.anyOf.length; Q++)
          if (h$($, Z.anyOf[Q]))
            return true;
      }
      if ((t1 in Z) && Z[t1] === $)
        return true;
    }
    return false;
  }
  return W.properties && (t1 in W.properties) && W.properties[t1] === $;
};
var D8 = Symbol.for("TypeBox.Transform");
var b1 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    const W = $.properties;
    for (let Y of Object.keys(W)) {
      const X = W[Y];
      if (X.type === "object") {
        if (b1(X))
          return true;
      } else if (X.anyOf) {
        for (let Q = 0;Q < X.anyOf.length; Q++)
          if (b1(X.anyOf[Q]))
            return true;
      }
      if (D8 in X)
        return true;
    }
    return false;
  }
  return (D8 in $) || $.properties && (D8 in $.properties);
};
var U7 = ($) => {
  if (!$)
    return;
  const W = $?.schema;
  if (W && ("anyOf" in W)) {
    let Y = false;
    const X = W.anyOf[0].type;
    for (let Z of W.anyOf)
      if (Z.type !== X) {
        Y = true;
        break;
      }
    if (!Y)
      return X;
  }
  return $.schema?.type;
};
var B7 = /(?:return|=>) \S*\(/g;
var M0 = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  return $.toString().match(B7);
};
var uY = ({ path: $, method: W, hooks: Y, validator: X, handler: Z, handleError: Q, definitions: J, schema: z, onRequest: F, config: w, getReporter: B }) => {
  const S = w.forceErrorEncapsulation || Y.error.length > 0 || typeof Bun === "undefined" || Y.onResponse.length > 0 || !!Y.trace.length, G = Y.onResponse.length ? `\n;(async () => {${Y.onResponse.map((R, f) => `await res${f}(c)`).join(";")}})();\n` : "", j = Y.trace.map((R) => R.toString());
  let M = false;
  if (w$(Z.toString()))
    M = true;
  if (!M)
    for (let [R, f] of Object.entries(Y)) {
      if (!Array.isArray(f) || !f.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(R))
        continue;
      for (let i of f) {
        if (typeof i !== "function")
          continue;
        if (w$(i.toString())) {
          M = true;
          break;
        }
      }
      if (M)
        break;
    }
  const O = { parse: j.some((R) => j0("parse", R)), transform: j.some((R) => j0("transform", R)), handle: j.some((R) => j0("handle", R)), beforeHandle: j.some((R) => j0("beforeHandle", R)), afterHandle: j.some((R) => j0("afterHandle", R)), error: S || j.some((R) => j0("error", R)) }, K = Y.trace.length > 0;
  let A = "";
  const D = X || W !== "GET" && W !== "HEAD" ? [Z, ...Y.transform, ...Y.beforeHandle, ...Y.afterHandle].map((R) => R.toString()) : [], I = M || W !== "GET" && W !== "HEAD" && Y.type !== "none" && (!!X.body || !!Y.type || D.some((R) => j0("body", R))), b = M || X.headers || D.some((R) => j0("headers", R)), V = M || X.cookie || D.some((R) => j0("cookie", R)), _ = X?.cookie?.schema;
  let a = "";
  if (_?.sign) {
    if (!_.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${W}) ${$}.`);
    const R = !_.secrets ? undefined : typeof _.secrets === "string" ? _.secrets : _.secrets[0];
    if (a += `const _setCookie = c.set.cookie
		if(_setCookie) {`, _.sign === true)
      a += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${R}')
			}`;
    else
      for (let f of _.sign)
        a += `if(_setCookie['${f}']?.value) { c.set.cookie['${f}'].value = await signCookie(_setCookie['${f}'].value, '${R}') }\n`;
    a += "}\n";
  }
  const { composeValidation: e, composeResponseValidation: o } = F7(S);
  if (b)
    A += A7 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (V) {
    const R = (i, u) => {
      const q0 = _?.[i] ?? u;
      if (!q0)
        return typeof u === "string" ? `${i}: "${u}",` : `${i}: ${u},`;
      if (typeof q0 === "string")
        return `${i}: '${q0}',`;
      if (q0 instanceof Date)
        return `${i}: new Date(${q0.getTime()}),`;
      return `${i}: ${q0},`;
    }, f = _ ? `{
			secret: ${_.secrets !== undefined ? typeof _.secrets === "string" ? `'${_.secrets}'` : "[" + _.secrets.reduce((i, u) => i + `'${u}',`, "") + "]" : "undefined"},
			sign: ${_.sign === true ? true : _.sign !== undefined ? "[" + _.sign.reduce((i, u) => i + `'${u}',`, "") + "]" : "undefined"},
			${R("domain")}
			${R("expires")}
			${R("httpOnly")}
			${R("maxAge")}
			${R("path", "/")}
			${R("priority")}
			${R("sameSite")}
			${R("secure")}
		}` : "undefined";
    if (b)
      A += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${f})\n`;
    else
      A += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${f})\n`;
  }
  if (M || X.query || D.some((R) => j0("query", R)))
    A += `const url = c.request.url

		if(c.qi !== -1) {
			c.query ??= parseQuery(url.substring(c.qi + 1))
		} else {
			c.query ??= {}
		}
		`;
  const C0 = Y.trace.map((R) => R.toString()).some((R) => j0("set", R) || w$(R));
  M || Y.trace.some((R) => j0("set", R.toString()));
  const Y0 = C0 || V || D.some((R) => j0("set", R)) || F.some((R) => j0("set", R.toString()));
  if (K)
    A += "\nconst id = c.$$requestId\n";
  const X0 = mY({ hasTrace: K, hasTraceSet: C0, condition: O, addFn: (R) => {
    A += R;
  } });
  if (A += S ? "try {\n" : "", K)
    A += "\nconst traceDone = new Promise(r => { reporter.once(`res${id}`, r) })\n";
  const u0 = V || I || C0 || M0(Z) || Y.parse.length > 0 || Y.afterHandle.some(M0) || Y.beforeHandle.some(M0) || Y.transform.some(M0), a0 = X0("parse", { unit: Y.parse.length });
  if (I) {
    const R = U7(X?.body);
    if (Y.type && !Array.isArray(Y.type)) {
      if (Y.type)
        switch (Y.type) {
          case "json":
          case "application/json":
            A += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            A += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            A += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            A += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            A += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (Y.parse.length)
        A += "}}";
    } else {
      const i = (() => {
        if (Y.parse.length && R && !Array.isArray(Y.type)) {
          const u = X?.body?.schema;
          switch (R) {
            case "object":
              if (h$("File", u) || h$("Files", u))
                return `c.body = {}
		
								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue
			
									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (i)
        A += i;
      else {
        if (A += "\n", A += b ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", A += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, Y.parse.length) {
          A += "let used = false\n";
          const u = X0("parse", { unit: Y.parse.length });
          for (let q0 = 0;q0 < Y.parse.length; q0++) {
            const D0 = X0("parse.unit", { name: Y.parse[q0].name }), w0 = `bo${q0}`;
            if (q0 !== 0)
              A += "if(!used) {\n";
            if (A += `let ${w0} = parse[${q0}](c, contentType)\n`, A += `if(${w0} instanceof Promise) ${w0} = await ${w0}\n`, A += `if(${w0} !== undefined) { c.body = ${w0}; used = true }\n`, D0(), q0 !== 0)
              A += "}";
          }
          u();
        }
        if (Y.parse.length)
          A += "if (!used)";
        A += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break
				
					case 'text/plain':
						c.body = await c.request.text()
						break
				
					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break
				
					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break
				
					case 'multipart/form-data':
						c.body = {}
				
						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue
				
							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
				
						break
					}\n`, A += "}\n";
      }
    }
    A += "\n";
  }
  if (a0(), Y?.transform) {
    const R = X0("transform", { unit: Y.transform.length });
    for (let f = 0;f < Y.transform.length; f++) {
      const i = Y.transform[f], u = X0("transform.unit", { name: i.name });
      if (i.$elysia === "derive")
        A += M0(Y.transform[f]) ? `Object.assign(c, await transform[${f}](c));` : `Object.assign(c, transform[${f}](c));`;
      else
        A += M0(Y.transform[f]) ? `await transform[${f}](c);` : `transform[${f}](c);`;
      u();
    }
    R();
  }
  if (X) {
    if (A += "\n", X.headers) {
      if (A += `if(headers.Check(c.headers) === false) {
				${e("headers")}
			}`, b1(X.headers.schema))
        A += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (X.params) {
      if (A += `if(params.Check(c.params) === false) {
				${e("params")}
			}`, b1(X.params.schema))
        A += "\nc.params = params.Decode(c.params)\n";
    }
    if (X.query) {
      if (A += `if(query.Check(c.query) === false) {
				${e("query")} 
			}`, b1(X.query.schema))
        A += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (X.body) {
      if (A += `if(body.Check(c.body) === false) { 
				${e("body")}
			}`, b1(X.body.schema))
        A += "\nc.body = body.Decode(c.body)\n";
    }
    if (t0(X.cookie?.schema.properties ?? {})) {
      if (A += `const cookieValue = {}
			for(const [key, value] of Object.entries(c.cookie))
				cookieValue[key] = value.value

			if(cookie.Check(cookieValue) === false) {
				${e("cookie", "cookieValue")}
			}`, b1(X.cookie.schema))
        A += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (Y?.beforeHandle) {
    const R = X0("beforeHandle", { unit: Y.beforeHandle.length });
    for (let f = 0;f < Y.beforeHandle.length; f++) {
      const i = X0("beforeHandle.unit", { name: Y.beforeHandle[f].name }), u = `be${f}`;
      if (!D$(Y.beforeHandle[f].toString()))
        A += M0(Y.beforeHandle[f]) ? `await beforeHandle[${f}](c);\n` : `beforeHandle[${f}](c);\n`, i();
      else {
        A += M0(Y.beforeHandle[f]) ? `let ${u} = await beforeHandle[${f}](c);\n` : `let ${u} = beforeHandle[${f}](c);\n`, i(), A += `if(${u} !== undefined) {\n`;
        const D0 = X0("afterHandle", { unit: Y.transform.length });
        if (Y.afterHandle) {
          const w0 = u;
          for (let K0 = 0;K0 < Y.afterHandle.length; K0++) {
            const N0 = D$(Y.afterHandle[K0].toString()), B1 = X0("afterHandle.unit", { name: Y.afterHandle[K0].name });
            if (A += `c.response = ${w0}\n`, !N0)
              A += M0(Y.afterHandle[K0]) ? `await afterHandle[${K0}](c, ${w0});\n` : `afterHandle[${K0}](c, ${w0});\n`;
            else {
              const P = `af${K0}`;
              A += M0(Y.afterHandle[K0]) ? `const ${P} = await afterHandle[${K0}](c);\n` : `const ${P} = afterHandle[${K0}](c);\n`, A += `if(${P} !== undefined) { c.response = ${w0} = ${P} }\n`;
            }
            B1();
          }
        }
        if (D0(), X.response)
          A += o(u);
        A += a, A += `return mapEarlyResponse(${u}, c.set)}\n`;
      }
    }
    R();
  }
  if (Y?.afterHandle.length) {
    const R = X0("handle", { name: Z.name });
    if (Y.afterHandle.length)
      A += M0(Z) ? "let r = c.response = await handler(c);\n" : "let r = c.response = handler(c);\n";
    else
      A += M0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n";
    R();
    const f = X0("afterHandle", { unit: Y.afterHandle.length });
    for (let i = 0;i < Y.afterHandle.length; i++) {
      const u = `af${i}`, q0 = D$(Y.afterHandle[i].toString()), D0 = X0("afterHandle.unit", { name: Y.afterHandle[i].name });
      if (!q0)
        A += M0(Y.afterHandle[i]) ? `await afterHandle[${i}](c)\n` : `afterHandle[${i}](c)\n`, D0();
      else {
        if (X.response)
          A += M0(Y.afterHandle[i]) ? `let ${u} = await afterHandle[${i}](c)\n` : `let ${u} = afterHandle[${i}](c)\n`;
        else
          A += M0(Y.afterHandle[i]) ? `let ${u} = mapEarlyResponse(await afterHandle[${i}](c), c.set)\n` : `let ${u} = mapEarlyResponse(afterHandle[${i}](c), c.set)\n`;
        if (D0(), X.response) {
          if (A += `if(${u} !== undefined) {`, A += o(u), A += `${u} = mapEarlyResponse(${u}, c.set)\n`, A += `if(${u}) {`, f(), C0)
            A += `${u} = mapEarlyResponse(${u}, c.set)\n`;
          A += `return ${u} } }`;
        } else {
          if (A += `if(${u}) {`, f(), C0)
            A += `${u} = mapEarlyResponse(${u}, c.set)\n`;
          A += `return ${u}}\n`;
        }
      }
    }
    if (f(), A += "r = c.response\n", X.response)
      A += o();
    if (A += a, Y0)
      A += "return mapResponse(r, c.set)\n";
    else
      A += "return mapCompactResponse(r)\n";
  } else {
    const R = X0("handle", { name: Z.name });
    if (X.response)
      if (A += M0(Z) ? "const r = await handler(c);\n" : "const r = handler(c);\n", R(), A += o(), X0("afterHandle")(), A += a, Y0)
        A += "return mapResponse(r, c.set)\n";
      else
        A += "return mapCompactResponse(r)\n";
    else if (O.handle || V)
      if (A += M0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n", R(), X0("afterHandle")(), A += a, Y0)
        A += "return mapResponse(r, c.set)\n";
      else
        A += "return mapCompactResponse(r)\n";
    else {
      R();
      const f = M0(Z) ? "await handler(c) " : "handler(c)";
      if (X0("afterHandle")(), Y0)
        A += `return mapResponse(${f}, c.set)\n`;
      else
        A += `return mapCompactResponse(${f})\n`;
    }
  }
  if (S || G) {
    if (A += `
} catch(error) {`, !u0)
      A += "return (async () => {";
    A += `const set = c.set

		if (!set.status || set.status < 300) set.status = 500
	`;
    const R = X0("error", { unit: Y.error.length });
    if (Y.error.length)
      for (let f = 0;f < Y.error.length; f++) {
        const i = `er${f}`, u = X0("error.unit", { name: Y.error[f].name });
        if (A += `\nlet ${i} = handleErrors[${f}](
					Object.assign(c, {
						error: error,
						code: error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
					})
				)\n`, M0(Y.error[f]))
          A += `if (${i} instanceof Promise) ${i} = await ${i}\n`;
        u(), A += `${i} = mapEarlyResponse(${i}, set)\n`, A += `if (${i}) {`, A += `return ${i} }\n`;
      }
    if (R(), A += "return handleError(c, error)\n\n", !u0)
      A += "})()";
    if (A += "}", G || K) {
      A += " finally { ";
      const f = X0("response", { unit: Y.onResponse.length });
      A += G, f(), A += "}";
    }
  }
  return A = `const { 
		handler,
		handleError,
		hooks: {
			transform,
			beforeHandle,
			afterHandle,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie
	} = hooks

	${Y.onResponse.length ? `const ${Y.onResponse.map((R, f) => `res${f} = onResponse[${f}]`).join(",")}` : ""}

	return ${u0 ? "async" : ""} function(c) {
		${z && J ? "c.schema = schema; c.defs = definitions;" : ""}
		${A}
	}`, Function("hooks", A)({ handler: Z, hooks: Y, validator: X, handleError: Q, utils: { mapResponse: U1, mapCompactResponse: K1, mapEarlyResponse: r0, parseQuery: vY.parse }, error: { NotFoundError: L1, ValidationError: S0, InternalServerError: f$ }, schema: z, definitions: J, ERROR_CODE: n1, getReporter: B, requestId: iY, parseCookie: u$, signCookie: l1 });
};
var w8 = ($) => {
  let W = "", Y = "";
  for (let j of Object.keys($.decorators))
    W += `,${j}: app.decorators.${j}`;
  const { router: X, staticRouter: Z } = $, Q = $.event.trace.length > 0, J = `
	const route = find(request.method, path) ${X.root.ALL ? '?? find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : `new Response(error404, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})`}

	ctx.params = route.params

	return route.store(ctx)`;
  let z = "";
  for (let [j, { code: M, all: O }] of Object.entries(Z.map))
    z += `case '${j}':\nswitch(request.method) {\n${M}\n${O ?? "default: break map"}}\n\n`;
  const F = $.event.request.some(M0);
  Y += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}

	${Z.variables}

	const find = router.find.bind(router)
	const findWs = wsRouter.find.bind(wsRouter)
	const handleError = app.handleError.bind(this)

	${$.event.error.length ? "" : "const error404 = notFound.message.toString()"}

	return ${F ? "async" : ""} function map(request) {
	`;
  const w = $.event.trace.map((j) => j.toString()), B = mY({ hasTrace: Q, hasTraceSet: $.event.trace.some((j) => {
    const M = j.toString();
    return j0("set", M) || w$(M);
  }), condition: { request: w.some((j) => j0("request", j) || w$(j)) }, addFn: (j) => {
    Y += j;
  } });
  if ($.event.request.length) {
    Y += `
			${Q ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					cookie: {},
					headers: {},
					status: 200
				}
				${Q ? ",$$requestId: +id" : ""}
				${W}
			}
		`;
    const j = B("request", { attribute: "ctx", unit: $.event.request.length });
    Y += "try {\n";
    for (let M = 0;M < $.event.request.length; M++) {
      const O = $.event.request[M], K = D$(O.toString()), A = M0(O), D = B("request.unit", { name: $.event.request[M].name }), I = `re${M}`;
      if (K)
        Y += `const ${I} = mapEarlyResponse(
					${A ? "await" : ""} onRequest[${M}](ctx),
					ctx.set
				)\n`, D(), Y += `if(${I}) return ${I}\n`;
      else
        Y += `${A ? "await" : ""} onRequest[${M}](ctx)\n`, D();
    }
    Y += `} catch (error) {
			return app.handleError(ctx, error)
		}`, j(), Y += `
		const url = request.url,
		s = url.indexOf('/', 11),
		i = ctx.qi = url.indexOf('?', s + 1),
		path = ctx.path = i === -1 ? url.substring(s) : url.substring(s, i);`;
  } else
    Y += `
		const url = request.url,
			s = url.indexOf('/', 11),
			qi = url.indexOf('?', s + 1),
			path = qi === -1
				? url.substring(s)
				: url.substring(s, qi)

		${Q ? "const id = +requestId.value++" : ""}

		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: {},
				status: 200
			}
			${Q ? ",$$requestId: id" : ""}
			${W}
		}`, B("request", { unit: $.event.request.length, attribute: w.some((j) => j0("context", j)) || w.some((j) => j0("store", j)) || w.some((j) => j0("set", j)) ? "ctx" : "" })();
  const { wsPaths: S, wsRouter: G } = $;
  if (Object.keys(S).length || G.history.length) {
    Y += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [j, M] of Object.entries(S))
      Y += `
					case '${j}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${M}(ctx)
							
						break`;
    Y += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = findWs('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}\n`;
  }
  return Y += `
		map: switch(path) {
			${z}

			default:
				break
		}

		${J}
	}`, $.handleError = K8($), Function("data", Y)({ app: $, mapEarlyResponse: r0, NotFoundError: L1, getReporter: () => $.reporter, requestId: iY });
};
var K8 = ($) => {
  let W = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE
	} = inject

	return ${$.event.error.find(M0) ? "async" : ""} function(context, error) {
		const { set } = context
		`;
  for (let Y = 0;Y < $.event.error.length; Y++) {
    const X = $.event.error[Y], Z = `${M0(X) ? "await " : ""}onError[${Y}](
			Object.assign(context, {
				code: error.code ?? error[ERROR_CODE] ?? 'UNKNOWN',
				error
			})
		)`;
    if (D$(X.toString()))
      W += `const r${Y} = ${Z}; if(r${Y} !== undefined) return mapResponse(r${Y}, set)\n`;
    else
      W += Z + "\n";
  }
  return W += `if(error.constructor.name === "ValidationError") {
		set.status = error.status ?? 400
		return new Response(
			error.message, 
			{ headers: set.headers, status: set.status }
		)
	} else {
		return new Response(error.message, { headers: set.headers, status: error.status ?? 500 })
	}
}`, Function("inject", W)({ app: $, mapResponse: U1, ERROR_CODE: n1 });
};
var n$ = Q1(B8(), 1);
var j8 = ($) => async (W) => {
  const Y = { cookie: {}, status: 200, headers: {} };
  let X;
  if ($.decorators)
    X = $.decorators, X.request = W, X.set = Y, X.store = $.store;
  else
    X = { set: Y, store: $.store, request: W };
  const Z = W.url, Q = Z.indexOf("/", 11), J = Z.indexOf("?", Q + 1), z = J === -1 ? Z.substring(Q) : Z.substring(Q, J);
  try {
    for (let K = 0;K < $.event.request.length; K++) {
      const A = $.event.request[K];
      let D = A(X);
      if (D instanceof Promise)
        D = await D;
      if (D = r0(D, Y), D)
        return D;
    }
    const F = $.dynamicRouter.find(W.method, z) ?? $.dynamicRouter.find("ALL", z);
    if (!F)
      throw new L1;
    const { handle: w, hooks: B, validator: S, content: G } = F.store;
    let j;
    if (W.method !== "GET" && W.method !== "HEAD")
      if (G)
        switch (G) {
          case "application/json":
            j = await W.json();
            break;
          case "text/plain":
            j = await W.text();
            break;
          case "application/x-www-form-urlencoded":
            j = n$.parse(await W.text());
            break;
          case "application/octet-stream":
            j = await W.arrayBuffer();
            break;
          case "multipart/form-data":
            j = {};
            const K = await W.formData();
            for (let A of K.keys()) {
              if (j[A])
                continue;
              const D = K.getAll(A);
              if (D.length === 1)
                j[A] = D[0];
              else
                j[A] = D;
            }
            break;
        }
      else {
        let K = W.headers.get("content-type");
        if (K) {
          const A = K.indexOf(";");
          if (A !== -1)
            K = K.slice(0, A);
          for (let D = 0;D < $.event.parse.length; D++) {
            let I = $.event.parse[D](X, K);
            if (I instanceof Promise)
              I = await I;
            if (I) {
              j = I;
              break;
            }
          }
          if (j === undefined)
            switch (K) {
              case "application/json":
                j = await W.json();
                break;
              case "text/plain":
                j = await W.text();
                break;
              case "application/x-www-form-urlencoded":
                j = n$.parse(await W.text());
                break;
              case "application/octet-stream":
                j = await W.arrayBuffer();
                break;
              case "multipart/form-data":
                j = {};
                const D = await W.formData();
                for (let I of D.keys()) {
                  if (j[I])
                    continue;
                  const b = D.getAll(I);
                  if (b.length === 1)
                    j[I] = b[0];
                  else
                    j[I] = b;
                }
                break;
            }
        }
      }
    X.body = j, X.params = F?.params || undefined, X.query = J === -1 ? {} : n$.parse(Z.substring(J + 1)), X.headers = {};
    for (let [K, A] of W.headers.entries())
      X.headers[K] = A;
    const M = S?.cookie?.schema;
    X.cookie = await u$(X.set, X.headers.cookie, M ? { secret: M.secrets !== undefined ? typeof M.secrets === "string" ? M.secrets : M.secrets.join(",") : undefined, sign: M.sign === true ? true : M.sign !== undefined ? typeof M.sign === "string" ? M.sign : M.sign.join(",") : undefined } : undefined);
    for (let K = 0;K < B.transform.length; K++) {
      const A = B.transform[K](X);
      if (B.transform[K].$elysia === "derive")
        if (A instanceof Promise)
          Object.assign(X, await A);
        else
          Object.assign(X, A);
      else if (A instanceof Promise)
        await A;
    }
    if (S) {
      if (S.headers) {
        const K = {};
        for (let A in W.headers)
          K[A] = W.headers.get(A);
        if (S.headers.Check(K) === false)
          throw new S0("header", S.headers, K);
      }
      if (S.params?.Check(X.params) === false)
        throw new S0("params", S.params, X.params);
      if (S.query?.Check(X.query) === false)
        throw new S0("query", S.query, X.query);
      if (S.cookie) {
        const K = {};
        for (let [A, D] of Object.entries(X.cookie))
          K[A] = D.value;
        if (S.cookie?.Check(K) === false)
          throw new S0("cookie", S.cookie, K);
      }
      if (S.body?.Check(j) === false)
        throw new S0("body", S.body, j);
    }
    for (let K = 0;K < B.beforeHandle.length; K++) {
      let A = B.beforeHandle[K](X);
      if (A instanceof Promise)
        A = await A;
      if (A !== undefined) {
        X.response = A;
        for (let I = 0;I < B.afterHandle.length; I++) {
          let b = B.afterHandle[I](X);
          if (b instanceof Promise)
            b = await b;
          if (b)
            A = b;
        }
        const D = r0(A, X.set);
        if (D)
          return D;
      }
    }
    let O = w(X);
    if (O instanceof Promise)
      O = await O;
    if (!B.afterHandle.length) {
      const K = S?.response?.[O.status];
      if (K?.Check(O) === false)
        throw new S0("response", K, O);
    } else {
      X.response = O;
      for (let K = 0;K < B.afterHandle.length; K++) {
        let A = B.afterHandle[K](X);
        if (A instanceof Promise)
          A = await A;
        const D = r0(A, X.set);
        if (D !== undefined) {
          const I = S?.response?.[O.status];
          if (I?.Check(D) === false)
            throw new S0("response", I, D);
          return D;
        }
      }
    }
    if (X.set.cookie && M?.sign) {
      const K = !M.secrets ? undefined : typeof M.secrets === "string" ? M.secrets : M.secrets[0];
      if (M.sign === true)
        for (let [A, D] of Object.entries(X.set.cookie))
          X.set.cookie[A].value = await l1(D.value, "${secret}");
      else
        for (let A of M.sign) {
          if (!(A in M.properties))
            continue;
          if (X.set.cookie[A]?.value)
            X.set.cookie[A].value = await l1(X.set.cookie[A].value, K);
        }
    }
    return U1(O, X.set);
  } catch (F) {
    if (F.status)
      Y.status = F.status;
    return $.handleError(X, F);
  } finally {
    for (let F of $.event.onResponse)
      await F(X);
  }
};
var hY = ($) => async (W, Y) => {
  const X = Object.assign(W, Y);
  X.set = W.set;
  for (let Z = 0;Z < $.event.error.length; Z++) {
    let Q = $.event.error[Z](X);
    if (Q instanceof Promise)
      Q = await Q;
    if (Q !== undefined && Q !== null)
      return U1(Q, W.set);
  }
  return new Response(typeof Y.cause === "string" ? Y.cause : Y.message, { headers: W.set.headers, status: Y.status ?? 500 });
};
var G1 = Q1(E$(), 1);
var W0 = Q1(f0(), 1);
try {
  G1.TypeSystem.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), G1.TypeSystem.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), G1.TypeSystem.Format("date", ($) => !Number.isNaN(new Date($).getTime())), G1.TypeSystem.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch ($) {
}
var nY = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var P8 = ($, W) => {
  if (!(W instanceof Blob))
    return false;
  if ($.minSize && W.size < nY($.minSize))
    return false;
  if ($.maxSize && W.size > nY($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!W.type.startsWith($.extension))
        return false;
    } else {
      for (let Y = 0;Y < $.extension.length; Y++)
        if (W.type.startsWith($.extension[Y]))
          return true;
      return false;
    }
  return true;
};
var D7 = G1.TypeSystem.Type("Files", ($, W) => {
  if (!Array.isArray(W))
    return P8($, W);
  if ($.minItems && W.length < $.minItems)
    return false;
  if ($.maxItems && W.length > $.maxItems)
    return false;
  for (let Y = 0;Y < W.length; Y++)
    if (!P8($, W[Y]))
      return false;
  return true;
});
W0.FormatRegistry.Set("numeric", ($) => !isNaN(+$));
W0.FormatRegistry.Set("ObjectString", ($) => {
  let W = $.charCodeAt(0);
  if (W === 9 || W === 10 || W === 32)
    W = $.trimStart().charCodeAt(0);
  if (W !== 123 && W !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var R1 = { Numeric: ($) => W0.Type.Transform(W0.Type.Union([W0.Type.String({ format: "numeric", default: 0 }), W0.Type.Number($)])).Decode((W) => {
  const Y = +W;
  if (isNaN(Y))
    return W;
  return Y;
}).Encode((W) => W), ObjectString: ($, W) => W0.Type.Transform(W0.Type.Union([W0.Type.String({ format: "ObjectString", default: "" }), W0.Type.Object($, W)])).Decode((Y) => {
  if (typeof Y === "string")
    try {
      return JSON.parse(Y);
    } catch {
      return Y;
    }
  return Y;
}).Encode((Y) => JSON.stringify(Y)), File: G1.TypeSystem.Type("File", P8), Files: ($ = {}) => W0.Type.Transform(W0.Type.Union([D7($)])).Decode((W) => {
  if (Array.isArray(W))
    return W;
  return [W];
}).Encode((W) => W), Nullable: ($) => W0.Type.Union([W0.Type.Null(), $]), MaybeEmpty: ($) => W0.Type.Union([W0.Type.Null(), W0.Type.Undefined(), $]), Cookie: ($, W) => W0.Type.Object($, W) };
W0.Type.ObjectString = R1.ObjectString;
W0.Type.Numeric = R1.Numeric;
W0.Type.File = ($ = {}) => R1.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
W0.Type.Files = ($ = {}) => R1.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
W0.Type.Nullable = ($) => R1.Nullable($);
W0.Type.MaybeEmpty = R1.MaybeEmpty;
W0.Type.Cookie = R1.Cookie;

class o$ {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new R8;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new j1;
  wsRouter = new j1;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  wsPaths = {};
  dynamicRouter = new j1;
  lazyLoadModules = [];
  path = "";
  constructor($) {
    this.config = { forceErrorEncapsulation: false, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, ...$, seed: $?.seed === undefined ? "" : $?.seed };
  }
  add($, W, Y, X, { allowMeta: Z = false, skipPrefix: Q = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof W === "string")
      W = [W];
    for (let J of W) {
      if (J = J === "" ? J : J.charCodeAt(0) === 47 ? J : `/${J}`, this.config.prefix && !Q)
        J = this.config.prefix + J;
      if (X?.type)
        switch (X.type) {
          case "text":
            X.type = "text/plain";
            break;
          case "json":
            X.type = "application/json";
            break;
          case "formdata":
            X.type = "multipart/form-data";
            break;
          case "urlencoded":
            X.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            X.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const z = this.definitions.type;
      let F = X1(X?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: z, additionalProperties: true });
      if (t0(this.config.cookie ?? {}))
        if (F)
          F.schema = DY(F.schema, this.config.cookie ?? {});
        else
          F = X1(W0.Type.Cookie({}, this.config.cookie), { dynamic: !this.config.aot, models: z, additionalProperties: true });
      const w = { body: X1(X?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: z }), headers: X1(X?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: z, additionalProperties: true }), params: X1(X?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: z }), query: X1(X?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: z }), cookie: F, response: H8(X?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: z }) }, B = I1(this.event, X), S = J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, J, { validator: w, hooks: B, content: X?.type, handle: Y }), this.config.strictPath === false)
          this.dynamicRouter.add($, S, { validator: w, hooks: B, content: X?.type, handle: Y });
        this.routes.push({ method: $, path: J, composed: null, handler: Y, hooks: B });
        return;
      }
      const G = uY({ path: J, method: $, hooks: B, validator: w, handler: Y, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: Z ? this.definitions.type : undefined, schema: Z ? this.schema : undefined, getReporter: () => this.reporter }), j = this.routes.findIndex((M) => M.path === J && M.method === $);
      if (j !== -1)
        this.routes.splice(j, 1);
      if (this.routes.push({ method: $, path: J, composed: G, handler: Y, hooks: B }), $ === "$INTERNALWS") {
        const M = this.config.strictPath ? undefined : J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/";
        if (J.indexOf(":") === -1 && J.indexOf("*") === -1) {
          const O = this.staticRouter.handlers.length;
          if (this.staticRouter.handlers.push(G), this.staticRouter.variables += `const st${O} = staticRouter.handlers[${O}]\n`, this.wsPaths[J] = O, M)
            this.wsPaths[M] = O;
        } else if (this.wsRouter.add("ws", J, G), M)
          this.wsRouter.add("ws", M, G);
        return;
      }
      if (J.indexOf(":") === -1 && J.indexOf("*") === -1) {
        const M = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(G), this.staticRouter.variables += `const st${M} = staticRouter.handlers[${M}]\n`, !this.staticRouter.map[J])
          this.staticRouter.map[J] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[J].all = `default: return st${M}(ctx)\n`;
        else
          this.staticRouter.map[J].code = `case '${$}': return st${M}(ctx)\n${this.staticRouter.map[J].code}`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[S])
            this.staticRouter.map[S] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[S].all = `default: return st${M}(ctx)\n`;
          else
            this.staticRouter.map[S].code = `case '${$}': return st${M}(ctx)\n${this.staticRouter.map[S].code}`;
        }
      } else if (this.router.add($, J, G), !this.config.strictPath)
        this.router.add($, J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/", G);
    }
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", _8(() => this.reporter, $)), this.on("trace", $), this;
  }
  addError($, W) {
    return this.error($, W);
  }
  error($, W) {
    switch (typeof $) {
      case "string":
        return W.prototype[n1] = $, this.definitions.error[$] = W, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [Y, X] of Object.entries($))
      X.prototype[n1] = Y, this.definitions.error[Y] = X;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, W) {
    for (let Y of Array.isArray(W) ? W : [W])
      switch (Y = wY(Y), $) {
        case "start":
          this.event.start.push(Y);
          break;
        case "request":
          this.event.request.push(Y);
          break;
        case "response":
          this.event.onResponse.push(Y);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, Y);
          break;
        case "transform":
          this.event.transform.push(Y);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(Y);
          break;
        case "afterHandle":
          this.event.afterHandle.push(Y);
          break;
        case "trace":
          this.event.trace.push(Y);
          break;
        case "error":
          this.event.error.push(Y);
          break;
        case "stop":
          this.event.stop.push(Y);
          break;
      }
    return this;
  }
  group($, W, Y) {
    const X = new o$({ ...this.config, prefix: "" });
    X.store = this.store;
    const Z = typeof W === "object", Q = (Z ? Y : W)(X);
    if (this.decorators = F1(this.decorators, X.decorators), Q.event.request.length)
      this.event.request = [...this.event.request, ...Q.event.request];
    if (Q.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...Q.event.onResponse];
    return this.model(Q.definitions.type), Object.values(X.routes).forEach(({ method: J, path: z, handler: F, hooks: w }) => {
      if (z = (Z ? "" : this.config.prefix) + $ + z, Z) {
        const B = W, S = w;
        this.add(J, z, F, I1(B, { ...S, error: !S.error ? Q.event.error : Array.isArray(S.error) ? [...S.error, ...Q.event.error] : [S.error, ...Q.event.error] }));
      } else
        this.add(J, z, F, I1(w, { error: Q.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, W) {
    if (!W)
      return this.event = m$(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const Y = new o$;
    Y.store = this.store;
    const X = W(Y);
    if (this.decorators = F1(this.decorators, Y.decorators), X.event.request.length)
      this.event.request = [...this.event.request, ...X.event.request];
    if (X.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...X.event.onResponse];
    return this.model(X.definitions.type), Object.values(Y.routes).forEach(({ method: Z, path: Q, handler: J, hooks: z }) => {
      this.add(Z, Q, J, I1($, { ...z, error: !z.error ? X.event.error : Array.isArray(z.error) ? [...z.error, ...X.event.error] : [z.error, ...X.event.error] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((W) => {
        if (typeof W === "function")
          return W(this);
        if (typeof W.default === "function")
          return W.default(this);
        return this._use(W);
      }).then((W) => W.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const Z = $(this);
      if (Z instanceof Promise)
        return this.lazyLoadModules.push(Z.then((Q) => {
          if (typeof Q === "function")
            return Q(this);
          if (typeof Q.default === "function")
            return Q.default(this);
          return this._use(Q);
        }).then((Q) => Q.compile())), this;
      return Z;
    }
    const { name: W, seed: Y } = $.config;
    $.getServer = () => this.getServer();
    const X = $.config.scoped;
    if (X) {
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        const Q = Y !== undefined ? q8(W + JSON.stringify(Y)) : 0;
        if (this.dependencies[W].some((J) => Q === J))
          return this;
        this.dependencies[W].push(Q);
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.onRequest((Q) => {
        Object.assign(Q, this.decorators), Object.assign(Q.store, this.store);
      }), $.event.trace = [...this.event.trace, ...$.event.trace], $.config.aot)
        $.compile();
      const Z = this.mount($.fetch);
      return this.routes = this.routes.concat(Z.routes), this;
    } else {
      $.reporter = this.reporter;
      for (let Z of $.event.trace)
        this.trace(Z);
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: Z, path: Q, handler: J, hooks: z } of Object.values($.routes))
      this.add(Z, Q, J, I1(z, { error: $.event.error }));
    if (!X)
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        const Z = Y !== undefined ? q8(W + JSON.stringify(Y)) : 0;
        if (this.dependencies[W].some((Q) => Z === Q))
          return this;
        this.dependencies[W].push(Z), this.event = m$(this.event, N8($.event), Z);
      } else
        this.event = m$(this.event, N8($.event));
    return this;
  }
  mount($, W) {
    if (typeof $ === "function" || $.length === 0 || $ === "/") {
      const Z = typeof $ === "function" ? $ : W, Q = async ({ request: J, path: z }) => Z(new Request("http://a.cc" + z || "/", J));
      return this.all("/", Q, { type: "none" }), this.all("/*", Q, { type: "none" }), this;
    }
    const Y = $.length, X = async ({ request: Z, path: Q }) => W(new Request("http://a.cc" + Q.slice(Y) || "/", Z));
    return this.all($, X, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), X, { type: "none" }), this;
  }
  get($, W, Y) {
    return this.add("GET", $, W, Y), this;
  }
  post($, W, Y) {
    return this.add("POST", $, W, Y), this;
  }
  put($, W, Y) {
    return this.add("PUT", $, W, Y), this;
  }
  patch($, W, Y) {
    return this.add("PATCH", $, W, Y), this;
  }
  delete($, W, Y) {
    return this.add("DELETE", $, W, Y), this;
  }
  options($, W, Y) {
    return this.add("OPTIONS", $, W, Y), this;
  }
  all($, W, Y) {
    return this.add("ALL", $, W, Y), this;
  }
  head($, W, Y) {
    return this.add("HEAD", $, W, Y), this;
  }
  connect($, W, Y) {
    return this.add("CONNECT", $, W, Y), this;
  }
  ws($, W) {
    const Y = W.transformMessage ? Array.isArray(W.transformMessage) ? W.transformMessage : [W.transformMessage] : undefined;
    let X = null;
    const Z = X1(W?.body, { models: this.definitions.type }), Q = X1(W?.response, { models: this.definitions.type }), J = (z) => {
      if (typeof z === "string") {
        const F = z?.charCodeAt(0);
        if (F === 47 || F === 123)
          try {
            z = JSON.parse(z);
          } catch {
          }
        else if (!Number.isNaN(+z))
          z = +z;
      }
      if (Y?.length)
        for (let F = 0;F < Y.length; F++) {
          const w = Y[F](z);
          if (w !== undefined)
            z = w;
        }
      return z;
    };
    return this.route("$INTERNALWS", $, (z) => {
      const { set: F, path: w, qi: B, headers: S, query: G, params: j } = z;
      if (X === null)
        X = this.getServer();
      if (X?.upgrade(z.request, { headers: typeof W.upgrade === "function" ? W.upgrade(z) : W.upgrade, data: { validator: Q, open(M) {
        W.open?.(new o1(M, z));
      }, message: (M, O) => {
        const K = J(O);
        if (Z?.Check(K) === false)
          return void M.send(new S0("message", Z, K).message);
        W.message?.(new o1(M, z), K);
      }, drain(M) {
        W.drain?.(new o1(M, z));
      }, close(M, O, K) {
        W.close?.(new o1(M, z), O, K);
      } } }))
        return;
      return F.status = 400, "Expected a websocket connection";
    }, { beforeHandle: W.beforeHandle, transform: W.transform, headers: W.headers, params: W.params, query: W.query }), this;
  }
  route($, W, Y, { config: X, ...Z } = { config: { allowMeta: false } }) {
    return this.add($, W, Y, Z, X), this;
  }
  state($, W) {
    switch (typeof $) {
      case "object":
        return this.store = F1(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = W;
    return this;
  }
  decorate($, W) {
    switch (typeof $) {
      case "object":
        return this.decorators = F1(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = W;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, W) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([Y, X]) => {
          if (!(Y in this.definitions.type))
            this.definitions.type[Y] = X;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = W, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, W, Y) {
    if (Y === "")
      return this;
    const X = ["_", "-", " "], Z = (F) => F[0].toUpperCase() + F.slice(1), Q = $ === "prefix" ? (F, w) => X.includes(F.at(-1) ?? "") ? F + w : F + Z(w) : X.includes(Y.at(-1) ?? "") ? (F, w) => w + F : (F, w) => w + Z(F), J = (F) => {
      const w = {};
      switch (F) {
        case "decorator":
          for (let B in this.decorators)
            w[Q(Y, B)] = this.decorators[B];
          this.decorators = w;
          break;
        case "state":
          for (let B in this.store)
            w[Q(Y, B)] = this.store[B];
          this.store = w;
          break;
        case "model":
          for (let B in this.definitions.type)
            w[Q(Y, B)] = this.definitions.type[B];
          this.definitions.type = w;
          break;
        case "error":
          for (let B in this.definitions.error)
            w[Q(Y, B)] = this.definitions.error[B];
          this.definitions.error = w;
          break;
      }
    }, z = Array.isArray(W) ? W : [W];
    for (let F of z.some((w) => w === "all") ? ["decorator", "state", "model", "error"] : z)
      J(F);
    return this;
  }
  prefix($, W) {
    return this.affix("prefix", $, W);
  }
  suffix($, W) {
    return this.affix("suffix", $, W);
  }
  compile() {
    if (this.fetch = this.config.aot ? w8(this) : j8(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => (this.fetch = this.config.aot ? w8(this) : j8(this))($);
  handleError = async ($, W) => (this.handleError = this.config.aot ? K8(this) : hY(this))($, W);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, W) => {
    if (!Bun)
      throw new Error("Bun to run");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const Y = this.fetch, X = typeof $ === "object" ? { development: !q$, ...this.config.serve, ...$, websocket: { ...this.config.websocket, ...W8 }, fetch: Y, error: this.outerErrorHandler } : { development: !q$, ...this.config.serve, websocket: { ...this.config.websocket, ...W8 }, port: $, fetch: Y, error: this.outerErrorHandler };
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.server = Bun?.serve(X), this.event.start.length)
      (async () => {
        const Z = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Q = 0;Q < this.event.transform.length; Q++) {
          const J = this.event.transform[Q](Z);
          if (this.event.transform[Q].$elysia === "derive")
            if (J instanceof Promise)
              Object.assign(Z, await J);
            else
              Object.assign(Z, J);
        }
        for (let Q = 0;Q < this.event.start.length; Q++)
          this.event.start[Q](Z);
      })();
    if (W)
      W(this.server);
    return Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      (async () => {
        const $ = Object.assign(this.decorators, { store: this.store, app: this });
        for (let W = 0;W < this.event.transform.length; W++) {
          const Y = this.event.transform[W]($);
          if (this.event.transform[W].$elysia === "derive")
            if (Y instanceof Promise)
              Object.assign($, await Y);
            else
              Object.assign($, Y);
        }
        for (let W = 0;W < this.event.stop.length; W++)
          this.event.stop[W]($);
      })();
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}
var export_t = W0.Type;

// src/index.ts
var app = new o$().get("/", () => "Hello Elysia").listen(3000);
console.log(`\uD83E\uDD8A Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
