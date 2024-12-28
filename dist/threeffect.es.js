import Co, { useRef as qs, useEffect as Po } from "react";
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Rs = "171", Do = 0, Ys = 1, Lo = 2, qa = 1, Uo = 2, Kt = 3, pn = 0, xt = 1, $t = 2, fn = 0, Zn = 1, Or = 2, Zs = 3, Ks = 4, Io = 5, An = 100, No = 101, Fo = 102, Oo = 103, Bo = 104, zo = 200, Ho = 201, Vo = 202, Go = 203, Br = 204, zr = 205, ko = 206, Wo = 207, Xo = 208, qo = 209, Yo = 210, Zo = 211, Ko = 212, $o = 213, jo = 214, Hr = 0, Vr = 1, Gr = 2, jn = 3, kr = 4, Wr = 5, Xr = 6, qr = 7, Ya = 0, Jo = 1, Qo = 2, dn = 0, el = 1, tl = 2, nl = 3, il = 4, rl = 5, sl = 6, al = 7, Za = 300, Jn = 301, Qn = 302, Yr = 303, Zr = 304, nr = 306, Kr = 1e3, Rn = 1001, $r = 1002, Ot = 1003, ol = 1004, Ti = 1005, zt = 1006, or = 1007, wn = 1008, tn = 1009, Ka = 1010, $a = 1011, di = 1012, ws = 1013, Cn = 1014, jt = 1015, mi = 1016, Cs = 1017, Ps = 1018, ei = 1020, ja = 35902, Ja = 1021, Qa = 1022, Ft = 1023, eo = 1024, to = 1025, Kn = 1026, ti = 1027, no = 1028, Ds = 1029, io = 1030, Ls = 1031, Us = 1033, Zi = 33776, Ki = 33777, $i = 33778, ji = 33779, jr = 35840, Jr = 35841, Qr = 35842, es = 35843, ts = 36196, ns = 37492, is = 37496, rs = 37808, ss = 37809, as = 37810, os = 37811, ls = 37812, cs = 37813, us = 37814, hs = 37815, fs = 37816, ds = 37817, ps = 37818, ms = 37819, _s = 37820, gs = 37821, Ji = 36492, vs = 36494, xs = 36495, ro = 36283, Ms = 36284, Ss = 36285, Es = 36286, ll = 3200, cl = 3201, ul = 0, hl = 1, hn = "", wt = "srgb", ni = "srgb-linear", er = "linear", Ye = "srgb", Ln = 7680, $s = 519, fl = 512, dl = 513, pl = 514, so = 515, ml = 516, _l = 517, gl = 518, vl = 519, js = 35044, Js = "300 es", Jt = 2e3, tr = 2001;
class ri {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], lr = Math.PI / 180, ys = 180 / Math.PI;
function _i() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ft[i & 255] + ft[i >> 8 & 255] + ft[i >> 16 & 255] + ft[i >> 24 & 255] + "-" + ft[e & 255] + ft[e >> 8 & 255] + "-" + ft[e >> 16 & 15 | 64] + ft[e >> 24 & 255] + "-" + ft[t & 63 | 128] + ft[t >> 8 & 255] + "-" + ft[t >> 16 & 255] + ft[t >> 24 & 255] + ft[n & 255] + ft[n >> 8 & 255] + ft[n >> 16 & 255] + ft[n >> 24 & 255]).toLowerCase();
}
function Ie(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function xl(i, e) {
  return (i % e + e) % e;
}
function cr(i, e, t) {
  return (1 - t) * i + t * e;
}
function oi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function vt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ze {
  constructor(e = 0, t = 0) {
    Ze.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Ie(this.x, e.x, t.x), this.y = Ie(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ie(this.x, e, t), this.y = Ie(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ie(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ie(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ce {
  constructor(e, t, n, r, s, a, o, l, c) {
    Ce.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], d = n[7], f = n[2], p = n[5], g = n[8], M = r[0], m = r[3], u = r[6], A = r[1], T = r[4], y = r[7], U = r[2], b = r[5], C = r[8];
    return s[0] = a * M + o * A + l * U, s[3] = a * m + o * T + l * b, s[6] = a * u + o * y + l * C, s[1] = c * M + h * A + d * U, s[4] = c * m + h * T + d * b, s[7] = c * u + h * y + d * C, s[2] = f * M + p * A + g * U, s[5] = f * m + p * T + g * b, s[8] = f * u + p * y + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], d = h * a - o * c, f = o * l - h * s, p = c * s - a * l, g = t * d + n * f + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return e[0] = d * M, e[1] = (r * c - h * n) * M, e[2] = (o * n - r * a) * M, e[3] = f * M, e[4] = (h * t - r * l) * M, e[5] = (r * s - o * t) * M, e[6] = p * M, e[7] = (n * l - c * t) * M, e[8] = (a * t - n * s) * M, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(ur.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ur.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ur.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ur = /* @__PURE__ */ new Ce();
function ao(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function pi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Ml() {
  const i = pi("canvas");
  return i.style.display = "block", i;
}
const Qs = {};
function qn(i) {
  i in Qs || (Qs[i] = !0, console.warn(i));
}
function Sl(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function El(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function yl(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const ea = /* @__PURE__ */ new Ce().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ta = /* @__PURE__ */ new Ce().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function Tl() {
  const i = {
    enabled: !0,
    workingColorSpace: ni,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ye && (r.r = Qt(r.r), r.g = Qt(r.g), r.b = Qt(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ye && (r.r = $n(r.r), r.g = $n(r.g), r.b = $n(r.b))), r;
    },
    fromWorkingColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    toWorkingColorSpace: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === hn ? er : this.spaces[r].transfer;
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [ni]: {
      primaries: e,
      whitePoint: n,
      transfer: er,
      toXYZ: ea,
      fromXYZ: ta,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: wt },
      outputColorSpaceConfig: { drawingBufferColorSpace: wt }
    },
    [wt]: {
      primaries: e,
      whitePoint: n,
      transfer: Ye,
      toXYZ: ea,
      fromXYZ: ta,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: wt }
    }
  }), i;
}
const Ge = /* @__PURE__ */ Tl();
function Qt(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function $n(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Un;
class Al {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Un === void 0 && (Un = pi("canvas")), Un.width = e.width, Un.height = e.height;
      const n = Un.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Un;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = pi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Qt(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Qt(t[n] / 255) * 255) : t[n] = Qt(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let bl = 0;
class oo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: bl++ }), this.uuid = _i(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(hr(r[a].image)) : s.push(hr(r[a]));
      } else
        s = hr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function hr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Al.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Rl = 0;
class _t extends ri {
  constructor(e = _t.DEFAULT_IMAGE, t = _t.DEFAULT_MAPPING, n = Rn, r = Rn, s = zt, a = wn, o = Ft, l = tn, c = _t.DEFAULT_ANISOTROPY, h = hn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Rl++ }), this.uuid = _i(), this.name = "", this.source = new oo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ze(0, 0), this.repeat = new Ze(1, 1), this.center = new Ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ce(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Za) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Kr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Rn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case $r:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Kr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Rn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case $r:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = Za;
_t.DEFAULT_ANISOTROPY = 1;
class rt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    rt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], h = l[4], d = l[8], f = l[1], p = l[5], g = l[9], M = l[2], m = l[6], u = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, y = (p + 1) / 2, U = (u + 1) / 2, b = (h + f) / 4, C = (d + M) / 4, I = (g + m) / 4;
      return T > y && T > U ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = b / n, s = C / n) : y > U ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = b / r, s = I / r) : U < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(U), n = C / s, r = I / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((m - g) * (m - g) + (d - M) * (d - M) + (f - h) * (f - h));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - g) / A, this.y = (d - M) / A, this.z = (f - h) / A, this.w = Math.acos((c + p + u - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Ie(this.x, e.x, t.x), this.y = Ie(this.y, e.y, t.y), this.z = Ie(this.z, e.z, t.z), this.w = Ie(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ie(this.x, e, t), this.y = Ie(this.y, e, t), this.z = Ie(this.z, e, t), this.w = Ie(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ie(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class wl extends ri {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new rt(0, 0, e, t), this.scissorTest = !1, this.viewport = new rt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: zt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new _t(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new oo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Pn extends wl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class lo extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = Rn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Cl extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = Rn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], d = n[r + 3];
    const f = s[a + 0], p = s[a + 1], g = s[a + 2], M = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = p, e[t + 2] = g, e[t + 3] = M;
      return;
    }
    if (d !== M || l !== f || c !== p || h !== g) {
      let m = 1 - o;
      const u = l * f + c * p + h * g + d * M, A = u >= 0 ? 1 : -1, T = 1 - u * u;
      if (T > Number.EPSILON) {
        const U = Math.sqrt(T), b = Math.atan2(U, u * A);
        m = Math.sin(m * b) / U, o = Math.sin(o * b) / U;
      }
      const y = o * A;
      if (l = l * m + f * y, c = c * m + p * y, h = h * m + g * y, d = d * m + M * y, m === 1 - o) {
        const U = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        l *= U, c *= U, h *= U, d *= U;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], d = s[a], f = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * d + l * p - c * f, e[t + 1] = l * g + h * f + c * d - o * p, e[t + 2] = c * g + h * p + o * f - l * d, e[t + 3] = h * g - o * d - l * f - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(r / 2), d = o(s / 2), f = l(n / 2), p = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * d + c * p * g, this._y = c * p * d - f * h * g, this._z = c * h * g + f * p * d, this._w = c * h * d - f * p * g;
        break;
      case "YXZ":
        this._x = f * h * d + c * p * g, this._y = c * p * d - f * h * g, this._z = c * h * g - f * p * d, this._w = c * h * d + f * p * g;
        break;
      case "ZXY":
        this._x = f * h * d - c * p * g, this._y = c * p * d + f * h * g, this._z = c * h * g + f * p * d, this._w = c * h * d - f * p * g;
        break;
      case "ZYX":
        this._x = f * h * d - c * p * g, this._y = c * p * d + f * h * g, this._z = c * h * g - f * p * d, this._w = c * h * d + f * p * g;
        break;
      case "YZX":
        this._x = f * h * d + c * p * g, this._y = c * p * d + f * h * g, this._z = c * h * g - f * p * d, this._w = c * h * d - f * p * g;
        break;
      case "XZY":
        this._x = f * h * d - c * p * g, this._y = c * p * d - f * h * g, this._z = c * h * g + f * p * d, this._w = c * h * d + f * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], d = t[10], f = n + o + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (s - c) * p, this._z = (a - r) * p;
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + c) / p;
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      this._w = (s - c) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - r) / p, this._x = (s + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ie(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + r * c - s * l, this._y = r * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - r * o, this._w = a * h - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), d = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = a * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class O {
  constructor(e = 0, t = 0, n = 0) {
    O.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(na.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(na.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), h = 2 * (o * t - s * r), d = 2 * (s * n - a * t);
    return this.x = t + l * c + a * d - o * h, this.y = n + l * h + o * c - s * d, this.z = r + l * d + s * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Ie(this.x, e.x, t.x), this.y = Ie(this.y, e.y, t.y), this.z = Ie(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ie(this.x, e, t), this.y = Ie(this.y, e, t), this.z = Ie(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ie(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return fr.copy(this).projectOnVector(e), this.sub(fr);
  }
  reflect(e) {
    return this.sub(fr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ie(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const fr = /* @__PURE__ */ new O(), na = /* @__PURE__ */ new gi();
class vi {
  constructor(e = new O(1 / 0, 1 / 0, 1 / 0), t = new O(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Lt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Lt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Lt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Lt) : Lt.fromBufferAttribute(s, a), Lt.applyMatrix4(e.matrixWorld), this.expandByPoint(Lt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ai.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ai.copy(n.boundingBox)), Ai.applyMatrix4(e.matrixWorld), this.union(Ai);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Lt), Lt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(li), bi.subVectors(this.max, li), In.subVectors(e.a, li), Nn.subVectors(e.b, li), Fn.subVectors(e.c, li), sn.subVectors(Nn, In), an.subVectors(Fn, Nn), gn.subVectors(In, Fn);
    let t = [
      0,
      -sn.z,
      sn.y,
      0,
      -an.z,
      an.y,
      0,
      -gn.z,
      gn.y,
      sn.z,
      0,
      -sn.x,
      an.z,
      0,
      -an.x,
      gn.z,
      0,
      -gn.x,
      -sn.y,
      sn.x,
      0,
      -an.y,
      an.x,
      0,
      -gn.y,
      gn.x,
      0
    ];
    return !dr(t, In, Nn, Fn, bi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !dr(t, In, Nn, Fn, bi)) ? !1 : (Ri.crossVectors(sn, an), t = [Ri.x, Ri.y, Ri.z], dr(t, In, Nn, Fn, bi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Lt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Lt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Wt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Wt = [
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O()
], Lt = /* @__PURE__ */ new O(), Ai = /* @__PURE__ */ new vi(), In = /* @__PURE__ */ new O(), Nn = /* @__PURE__ */ new O(), Fn = /* @__PURE__ */ new O(), sn = /* @__PURE__ */ new O(), an = /* @__PURE__ */ new O(), gn = /* @__PURE__ */ new O(), li = /* @__PURE__ */ new O(), bi = /* @__PURE__ */ new O(), Ri = /* @__PURE__ */ new O(), vn = /* @__PURE__ */ new O();
function dr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    vn.fromArray(i, s);
    const o = r.x * Math.abs(vn.x) + r.y * Math.abs(vn.y) + r.z * Math.abs(vn.z), l = e.dot(vn), c = t.dot(vn), h = n.dot(vn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const Pl = /* @__PURE__ */ new vi(), ci = /* @__PURE__ */ new O(), pr = /* @__PURE__ */ new O();
class ir {
  constructor(e = new O(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Pl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ci.subVectors(e, this.center);
    const t = ci.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ci, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (pr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ci.copy(e.center).add(pr)), this.expandByPoint(ci.copy(e.center).sub(pr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xt = /* @__PURE__ */ new O(), mr = /* @__PURE__ */ new O(), wi = /* @__PURE__ */ new O(), on = /* @__PURE__ */ new O(), _r = /* @__PURE__ */ new O(), Ci = /* @__PURE__ */ new O(), gr = /* @__PURE__ */ new O();
class Is {
  constructor(e = new O(), t = new O(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Xt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Xt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Xt.copy(this.origin).addScaledVector(this.direction, t), Xt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    mr.copy(e).add(t).multiplyScalar(0.5), wi.copy(t).sub(e).normalize(), on.copy(this.origin).sub(mr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(wi), o = on.dot(this.direction), l = -on.dot(wi), c = on.lengthSq(), h = Math.abs(1 - a * a);
    let d, f, p, g;
    if (h > 0)
      if (d = a * l - o, f = a * o - l, g = s * h, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const M = 1 / h;
            d *= M, f *= M, p = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * l) + c;
          } else
            f = s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * l) + c;
        else
          f = -s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * l) + c;
      else
        f <= -g ? (d = Math.max(0, -(-a * s + o)), f = d > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -d * d + f * (f + 2 * l) + c) : f <= g ? (d = 0, f = Math.min(Math.max(-s, -l), s), p = f * (f + 2 * l) + c) : (d = Math.max(0, -(a * s + o)), f = d > 0 ? s : Math.min(Math.max(-s, -l), s), p = -d * d + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(mr).addScaledVector(wi, f), p;
  }
  intersectSphere(e, t) {
    Xt.subVectors(e.center, this.origin);
    const n = Xt.dot(this.direction), r = Xt.dot(Xt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), h >= 0 ? (s = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (e.min.z - f.z) * d, l = (e.max.z - f.z) * d) : (o = (e.max.z - f.z) * d, l = (e.min.z - f.z) * d), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Xt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    _r.subVectors(t, e), Ci.subVectors(n, e), gr.crossVectors(_r, Ci);
    let a = this.direction.dot(gr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    on.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ci.crossVectors(on, Ci));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(_r.cross(on));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * on.dot(gr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class nt {
  constructor(e, t, n, r, s, a, o, l, c, h, d, f, p, g, M, m) {
    nt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, h, d, f, p, g, M, m);
  }
  set(e, t, n, r, s, a, o, l, c, h, d, f, p, g, M, m) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = l, u[2] = c, u[6] = h, u[10] = d, u[14] = f, u[3] = p, u[7] = g, u[11] = M, u[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new nt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / On.setFromMatrixColumn(e, 0).length(), s = 1 / On.setFromMatrixColumn(e, 1).length(), a = 1 / On.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * h, p = a * d, g = o * h, M = o * d;
      t[0] = l * h, t[4] = -l * d, t[8] = c, t[1] = p + g * c, t[5] = f - M * c, t[9] = -o * l, t[2] = M - f * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * h, p = l * d, g = c * h, M = c * d;
      t[0] = f + M * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = M + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * h, p = l * d, g = c * h, M = c * d;
      t[0] = f - M * o, t[4] = -a * d, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = M - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * h, p = a * d, g = o * h, M = o * d;
      t[0] = l * h, t[4] = g * c - p, t[8] = f * c + M, t[1] = l * d, t[5] = M * c + f, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, p = a * c, g = o * l, M = o * c;
      t[0] = l * h, t[4] = M - f * d, t[8] = g * d + p, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * d + g, t[10] = f - M * d;
    } else if (e.order === "XZY") {
      const f = a * l, p = a * c, g = o * l, M = o * c;
      t[0] = l * h, t[4] = -d, t[8] = c * h, t[1] = f * d + M, t[5] = a * h, t[9] = p * d - g, t[2] = g * d - p, t[6] = o * h, t[10] = M * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Dl, e, Ll);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Et.subVectors(e, t), Et.lengthSq() === 0 && (Et.z = 1), Et.normalize(), ln.crossVectors(n, Et), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Et.x += 1e-4 : Et.z += 1e-4, Et.normalize(), ln.crossVectors(n, Et)), ln.normalize(), Pi.crossVectors(Et, ln), r[0] = ln.x, r[4] = Pi.x, r[8] = Et.x, r[1] = ln.y, r[5] = Pi.y, r[9] = Et.y, r[2] = ln.z, r[6] = Pi.z, r[10] = Et.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], d = n[5], f = n[9], p = n[13], g = n[2], M = n[6], m = n[10], u = n[14], A = n[3], T = n[7], y = n[11], U = n[15], b = r[0], C = r[4], I = r[8], S = r[12], x = r[1], w = r[5], k = r[9], z = r[13], W = r[2], $ = r[6], G = r[10], J = r[14], H = r[3], re = r[7], ue = r[11], ge = r[15];
    return s[0] = a * b + o * x + l * W + c * H, s[4] = a * C + o * w + l * $ + c * re, s[8] = a * I + o * k + l * G + c * ue, s[12] = a * S + o * z + l * J + c * ge, s[1] = h * b + d * x + f * W + p * H, s[5] = h * C + d * w + f * $ + p * re, s[9] = h * I + d * k + f * G + p * ue, s[13] = h * S + d * z + f * J + p * ge, s[2] = g * b + M * x + m * W + u * H, s[6] = g * C + M * w + m * $ + u * re, s[10] = g * I + M * k + m * G + u * ue, s[14] = g * S + M * z + m * J + u * ge, s[3] = A * b + T * x + y * W + U * H, s[7] = A * C + T * w + y * $ + U * re, s[11] = A * I + T * k + y * G + U * ue, s[15] = A * S + T * z + y * J + U * ge, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], d = e[6], f = e[10], p = e[14], g = e[3], M = e[7], m = e[11], u = e[15];
    return g * (+s * l * d - r * c * d - s * o * f + n * c * f + r * o * p - n * l * p) + M * (+t * l * p - t * c * f + s * a * f - r * a * p + r * c * h - s * l * h) + m * (+t * c * d - t * o * p - s * a * d + n * a * p + s * o * h - n * c * h) + u * (-r * o * h - t * l * d + t * o * f + r * a * d - n * a * f + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], d = e[9], f = e[10], p = e[11], g = e[12], M = e[13], m = e[14], u = e[15], A = d * m * c - M * f * c + M * l * p - o * m * p - d * l * u + o * f * u, T = g * f * c - h * m * c - g * l * p + a * m * p + h * l * u - a * f * u, y = h * M * c - g * d * c + g * o * p - a * M * p - h * o * u + a * d * u, U = g * d * l - h * M * l - g * o * f + a * M * f + h * o * m - a * d * m, b = t * A + n * T + r * y + s * U;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / b;
    return e[0] = A * C, e[1] = (M * f * s - d * m * s - M * r * p + n * m * p + d * r * u - n * f * u) * C, e[2] = (o * m * s - M * l * s + M * r * c - n * m * c - o * r * u + n * l * u) * C, e[3] = (d * l * s - o * f * s - d * r * c + n * f * c + o * r * p - n * l * p) * C, e[4] = T * C, e[5] = (h * m * s - g * f * s + g * r * p - t * m * p - h * r * u + t * f * u) * C, e[6] = (g * l * s - a * m * s - g * r * c + t * m * c + a * r * u - t * l * u) * C, e[7] = (a * f * s - h * l * s + h * r * c - t * f * c - a * r * p + t * l * p) * C, e[8] = y * C, e[9] = (g * d * s - h * M * s - g * n * p + t * M * p + h * n * u - t * d * u) * C, e[10] = (a * M * s - g * o * s + g * n * c - t * M * c - a * n * u + t * o * u) * C, e[11] = (h * o * s - a * d * s - h * n * c + t * d * c + a * n * p - t * o * p) * C, e[12] = U * C, e[13] = (h * M * r - g * d * r + g * n * f - t * M * f - h * n * m + t * d * m) * C, e[14] = (g * o * r - a * M * r - g * n * l + t * M * l + a * n * m - t * o * m) * C, e[15] = (a * d * r - h * o * r + h * n * l - t * d * l - a * n * f + t * o * f) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      h * o + n,
      h * l - r * a,
      0,
      c * l - r * o,
      h * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, d = o + o, f = s * c, p = s * h, g = s * d, M = a * h, m = a * d, u = o * d, A = l * c, T = l * h, y = l * d, U = n.x, b = n.y, C = n.z;
    return r[0] = (1 - (M + u)) * U, r[1] = (p + y) * U, r[2] = (g - T) * U, r[3] = 0, r[4] = (p - y) * b, r[5] = (1 - (f + u)) * b, r[6] = (m + A) * b, r[7] = 0, r[8] = (g + T) * C, r[9] = (m - A) * C, r[10] = (1 - (f + M)) * C, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = On.set(r[0], r[1], r[2]).length();
    const a = On.set(r[4], r[5], r[6]).length(), o = On.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Ut.copy(this);
    const c = 1 / s, h = 1 / a, d = 1 / o;
    return Ut.elements[0] *= c, Ut.elements[1] *= c, Ut.elements[2] *= c, Ut.elements[4] *= h, Ut.elements[5] *= h, Ut.elements[6] *= h, Ut.elements[8] *= d, Ut.elements[9] *= d, Ut.elements[10] *= d, t.setFromRotationMatrix(Ut), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = Jt) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r);
    let p, g;
    if (o === Jt)
      p = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === tr)
      p = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = Jt) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), d = 1 / (a - s), f = (t + e) * c, p = (n + r) * h;
    let g, M;
    if (o === Jt)
      g = (a + s) * d, M = -2 * d;
    else if (o === tr)
      g = s * d, M = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = M, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const On = /* @__PURE__ */ new O(), Ut = /* @__PURE__ */ new nt(), Dl = /* @__PURE__ */ new O(0, 0, 0), Ll = /* @__PURE__ */ new O(1, 1, 1), ln = /* @__PURE__ */ new O(), Pi = /* @__PURE__ */ new O(), Et = /* @__PURE__ */ new O(), ia = /* @__PURE__ */ new nt(), ra = /* @__PURE__ */ new gi();
class nn {
  constructor(e = 0, t = 0, n = 0, r = nn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], d = r[2], f = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ie(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ie(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ie(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ie(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ie(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ie(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ia.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ia, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ra.setFromEuler(this), this.setFromQuaternion(ra, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
nn.DEFAULT_ORDER = "XYZ";
class Ns {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Ul = 0;
const sa = /* @__PURE__ */ new O(), Bn = /* @__PURE__ */ new gi(), qt = /* @__PURE__ */ new nt(), Di = /* @__PURE__ */ new O(), ui = /* @__PURE__ */ new O(), Il = /* @__PURE__ */ new O(), Nl = /* @__PURE__ */ new gi(), aa = /* @__PURE__ */ new O(1, 0, 0), oa = /* @__PURE__ */ new O(0, 1, 0), la = /* @__PURE__ */ new O(0, 0, 1), ca = { type: "added" }, Fl = { type: "removed" }, zn = { type: "childadded", child: null }, vr = { type: "childremoved", child: null };
class Mt extends ri {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ul++ }), this.uuid = _i(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Mt.DEFAULT_UP.clone();
    const e = new O(), t = new nn(), n = new gi(), r = new O(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new nt()
      },
      normalMatrix: {
        value: new Ce()
      }
    }), this.matrix = new nt(), this.matrixWorld = new nt(), this.matrixAutoUpdate = Mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ns(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.multiply(Bn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.premultiply(Bn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(aa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(oa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(la, e);
  }
  translateOnAxis(e, t) {
    return sa.copy(e).applyQuaternion(this.quaternion), this.position.add(sa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(aa, e);
  }
  translateY(e) {
    return this.translateOnAxis(oa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(la, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(qt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Di.copy(e) : Di.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ui.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? qt.lookAt(ui, Di, this.up) : qt.lookAt(Di, ui, this.up), this.quaternion.setFromRotationMatrix(qt), r && (qt.extractRotation(r.matrixWorld), Bn.setFromRotationMatrix(qt), this.quaternion.premultiply(Bn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ca), zn.child = e, this.dispatchEvent(zn), zn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Fl), vr.child = e, this.dispatchEvent(vr), vr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), qt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), qt.multiply(e.parent.matrixWorld)), e.applyMatrix4(qt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(ca), zn.child = e, this.dispatchEvent(zn), zn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, e, Il), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, Nl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), d = a(e.shapes), f = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Mt.DEFAULT_UP = /* @__PURE__ */ new O(0, 1, 0);
Mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const It = /* @__PURE__ */ new O(), Yt = /* @__PURE__ */ new O(), xr = /* @__PURE__ */ new O(), Zt = /* @__PURE__ */ new O(), Hn = /* @__PURE__ */ new O(), Vn = /* @__PURE__ */ new O(), ua = /* @__PURE__ */ new O(), Mr = /* @__PURE__ */ new O(), Sr = /* @__PURE__ */ new O(), Er = /* @__PURE__ */ new O(), yr = /* @__PURE__ */ new rt(), Tr = /* @__PURE__ */ new rt(), Ar = /* @__PURE__ */ new rt();
class Nt {
  constructor(e = new O(), t = new O(), n = new O()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), It.subVectors(e, t), r.cross(It);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    It.subVectors(r, t), Yt.subVectors(n, t), xr.subVectors(e, t);
    const a = It.dot(It), o = It.dot(Yt), l = It.dot(xr), c = Yt.dot(Yt), h = Yt.dot(xr), d = a * c - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, p = (c * l - o * h) * f, g = (a * h - o * l) * f;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Zt) === null ? !1 : Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, Zt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Zt.x), l.addScaledVector(a, Zt.y), l.addScaledVector(o, Zt.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return yr.setScalar(0), Tr.setScalar(0), Ar.setScalar(0), yr.fromBufferAttribute(e, t), Tr.fromBufferAttribute(e, n), Ar.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(yr, s.x), a.addScaledVector(Tr, s.y), a.addScaledVector(Ar, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return It.subVectors(n, t), Yt.subVectors(e, t), It.cross(Yt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return It.subVectors(this.c, this.b), Yt.subVectors(this.a, this.b), It.cross(Yt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Nt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Nt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Nt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Nt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Nt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Hn.subVectors(r, n), Vn.subVectors(s, n), Mr.subVectors(e, n);
    const l = Hn.dot(Mr), c = Vn.dot(Mr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Sr.subVectors(e, r);
    const h = Hn.dot(Sr), d = Vn.dot(Sr);
    if (h >= 0 && d <= h)
      return t.copy(r);
    const f = l * d - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(Hn, a);
    Er.subVectors(e, s);
    const p = Hn.dot(Er), g = Vn.dot(Er);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const M = p * c - l * g;
    if (M <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Vn, o);
    const m = h * g - p * d;
    if (m <= 0 && d - h >= 0 && p - g >= 0)
      return ua.subVectors(s, r), o = (d - h) / (d - h + (p - g)), t.copy(r).addScaledVector(ua, o);
    const u = 1 / (m + M + f);
    return a = M * u, o = f * u, t.copy(n).addScaledVector(Hn, a).addScaledVector(Vn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const co = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, cn = { h: 0, s: 0, l: 0 }, Li = { h: 0, s: 0, l: 0 };
function br(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ke {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = wt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ge.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Ge.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ge.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Ge.workingColorSpace) {
    if (e = xl(e, 1), t = Ie(t, 0, 1), n = Ie(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = br(a, s, e + 1 / 3), this.g = br(a, s, e), this.b = br(a, s, e - 1 / 3);
    }
    return Ge.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = wt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = wt) {
    const n = co[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Qt(e.r), this.g = Qt(e.g), this.b = Qt(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = $n(e.r), this.g = $n(e.g), this.b = $n(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = wt) {
    return Ge.fromWorkingColorSpace(dt.copy(this), e), Math.round(Ie(dt.r * 255, 0, 255)) * 65536 + Math.round(Ie(dt.g * 255, 0, 255)) * 256 + Math.round(Ie(dt.b * 255, 0, 255));
  }
  getHexString(e = wt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ge.workingColorSpace) {
    Ge.fromWorkingColorSpace(dt.copy(this), t);
    const n = dt.r, r = dt.g, s = dt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const d = a - o;
      switch (c = h <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Ge.workingColorSpace) {
    return Ge.fromWorkingColorSpace(dt.copy(this), t), e.r = dt.r, e.g = dt.g, e.b = dt.b, e;
  }
  getStyle(e = wt) {
    Ge.fromWorkingColorSpace(dt.copy(this), e);
    const t = dt.r, n = dt.g, r = dt.b;
    return e !== wt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(cn), this.setHSL(cn.h + e, cn.s + t, cn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(cn), e.getHSL(Li);
    const n = cr(cn.h, Li.h, t), r = cr(cn.s, Li.s, t), s = cr(cn.l, Li.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const dt = /* @__PURE__ */ new ke();
ke.NAMES = co;
let Ol = 0;
class xi extends ri {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ol++ }), this.uuid = _i(), this.name = "", this.type = "Material", this.blending = Zn, this.side = pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Br, this.blendDst = zr, this.blendEquation = An, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = jn, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = $s, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ln, this.stencilZFail = Ln, this.stencilZPass = Ln, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Zn && (n.blending = this.blending), this.side !== pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Br && (n.blendSrc = this.blendSrc), this.blendDst !== zr && (n.blendDst = this.blendDst), this.blendEquation !== An && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== jn && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== $s && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ln && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ln && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ln && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Fs extends xi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new nn(), this.combine = Ya, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const at = /* @__PURE__ */ new O(), Ui = /* @__PURE__ */ new Ze();
class Vt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = js, this.updateRanges = [], this.gpuType = jt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ui.fromBufferAttribute(this, t), Ui.applyMatrix3(e), this.setXY(t, Ui.x, Ui.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        at.fromBufferAttribute(this, t), at.applyMatrix3(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.applyMatrix4(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.applyNormalMatrix(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.transformDirection(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = oi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = vt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = oi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array), s = vt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== js && (e.usage = this.usage), e;
  }
}
class uo extends Vt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ho extends Vt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class en extends Vt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Bl = 0;
const Rt = /* @__PURE__ */ new nt(), Rr = /* @__PURE__ */ new Mt(), Gn = /* @__PURE__ */ new O(), yt = /* @__PURE__ */ new vi(), hi = /* @__PURE__ */ new vi(), ct = /* @__PURE__ */ new O();
class Gt extends ri {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Bl++ }), this.uuid = _i(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ao(e) ? ho : uo)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ce().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Rt.makeRotationFromQuaternion(e), this.applyMatrix4(Rt), this;
  }
  rotateX(e) {
    return Rt.makeRotationX(e), this.applyMatrix4(Rt), this;
  }
  rotateY(e) {
    return Rt.makeRotationY(e), this.applyMatrix4(Rt), this;
  }
  rotateZ(e) {
    return Rt.makeRotationZ(e), this.applyMatrix4(Rt), this;
  }
  translate(e, t, n) {
    return Rt.makeTranslation(e, t, n), this.applyMatrix4(Rt), this;
  }
  scale(e, t, n) {
    return Rt.makeScale(e, t, n), this.applyMatrix4(Rt), this;
  }
  lookAt(e) {
    return Rr.lookAt(e), Rr.updateMatrix(), this.applyMatrix4(Rr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Gn).negate(), this.translate(Gn.x, Gn.y, Gn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new en(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new O(-1 / 0, -1 / 0, -1 / 0),
        new O(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ct.addVectors(this.boundingBox.min, yt.min), this.boundingBox.expandByPoint(ct), ct.addVectors(this.boundingBox.max, yt.max), this.boundingBox.expandByPoint(ct)) : (this.boundingBox.expandByPoint(yt.min), this.boundingBox.expandByPoint(yt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ir());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (yt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          hi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ct.addVectors(yt.min, hi.min), yt.expandByPoint(ct), ct.addVectors(yt.max, hi.max), yt.expandByPoint(ct)) : (yt.expandByPoint(hi.min), yt.expandByPoint(hi.max));
        }
      yt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        ct.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ct));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            ct.fromBufferAttribute(o, c), l && (Gn.fromBufferAttribute(e, c), ct.add(Gn)), r = Math.max(r, n.distanceToSquared(ct));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Vt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let I = 0; I < n.count; I++)
      o[I] = new O(), l[I] = new O();
    const c = new O(), h = new O(), d = new O(), f = new Ze(), p = new Ze(), g = new Ze(), M = new O(), m = new O();
    function u(I, S, x) {
      c.fromBufferAttribute(n, I), h.fromBufferAttribute(n, S), d.fromBufferAttribute(n, x), f.fromBufferAttribute(s, I), p.fromBufferAttribute(s, S), g.fromBufferAttribute(s, x), h.sub(c), d.sub(c), p.sub(f), g.sub(f);
      const w = 1 / (p.x * g.y - g.x * p.y);
      isFinite(w) && (M.copy(h).multiplyScalar(g.y).addScaledVector(d, -p.y).multiplyScalar(w), m.copy(d).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(w), o[I].add(M), o[S].add(M), o[x].add(M), l[I].add(m), l[S].add(m), l[x].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: e.count
    }]);
    for (let I = 0, S = A.length; I < S; ++I) {
      const x = A[I], w = x.start, k = x.count;
      for (let z = w, W = w + k; z < W; z += 3)
        u(
          e.getX(z + 0),
          e.getX(z + 1),
          e.getX(z + 2)
        );
    }
    const T = new O(), y = new O(), U = new O(), b = new O();
    function C(I) {
      U.fromBufferAttribute(r, I), b.copy(U);
      const S = o[I];
      T.copy(S), T.sub(U.multiplyScalar(U.dot(S))).normalize(), y.crossVectors(b, S);
      const w = y.dot(l[I]) < 0 ? -1 : 1;
      a.setXYZW(I, T.x, T.y, T.z, w);
    }
    for (let I = 0, S = A.length; I < S; ++I) {
      const x = A[I], w = x.start, k = x.count;
      for (let z = w, W = w + k; z < W; z += 3)
        C(e.getX(z + 0)), C(e.getX(z + 1)), C(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Vt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new O(), s = new O(), a = new O(), o = new O(), l = new O(), c = new O(), h = new O(), d = new O();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const g = e.getX(f + 0), M = e.getX(f + 1), m = e.getX(f + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, M), a.fromBufferAttribute(t, m), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, M), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(M, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ct.fromBufferAttribute(e, t), ct.normalize(), e.setXYZ(t, ct.x, ct.y, ct.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, d = o.normalized, f = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let M = 0, m = l.length; M < m; M++) {
        o.isInterleavedBufferAttribute ? p = l[M] * o.data.stride + o.offset : p = l[M] * h;
        for (let u = 0; u < h; u++)
          f[g++] = c[p++];
      }
      return new Vt(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Gt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, d = c.length; h < d; h++) {
        const f = c[h], p = e(f, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const p = c[d];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], d = s[c];
      for (let f = 0, p = d.length; f < p; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ha = /* @__PURE__ */ new nt(), xn = /* @__PURE__ */ new Is(), Ii = /* @__PURE__ */ new ir(), fa = /* @__PURE__ */ new O(), Ni = /* @__PURE__ */ new O(), Fi = /* @__PURE__ */ new O(), Oi = /* @__PURE__ */ new O(), wr = /* @__PURE__ */ new O(), Bi = /* @__PURE__ */ new O(), da = /* @__PURE__ */ new O(), zi = /* @__PURE__ */ new O();
class Ht extends Mt {
  constructor(e = new Gt(), t = new Fs()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Bi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], d = s[l];
        h !== 0 && (wr.fromBufferAttribute(d, e), a ? Bi.addScaledVector(wr, h) : Bi.addScaledVector(wr.sub(t), h));
      }
      t.add(Bi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ii.copy(n.boundingSphere), Ii.applyMatrix4(s), xn.copy(e.ray).recast(e.near), !(Ii.containsPoint(xn.origin) === !1 && (xn.intersectSphere(Ii, fa) === null || xn.origin.distanceToSquared(fa) > (e.far - e.near) ** 2)) && (ha.copy(s).invert(), xn.copy(e.ray).applyMatrix4(ha), !(n.boundingBox !== null && xn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, xn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, f = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const m = f[g], u = a[m.materialIndex], A = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let y = A, U = T; y < U; y += 3) {
            const b = o.getX(y), C = o.getX(y + 1), I = o.getX(y + 2);
            r = Hi(this, u, e, n, c, h, d, b, C, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), M = Math.min(o.count, p.start + p.count);
        for (let m = g, u = M; m < u; m += 3) {
          const A = o.getX(m), T = o.getX(m + 1), y = o.getX(m + 2);
          r = Hi(this, a, e, n, c, h, d, A, T, y), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const m = f[g], u = a[m.materialIndex], A = Math.max(m.start, p.start), T = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
          for (let y = A, U = T; y < U; y += 3) {
            const b = y, C = y + 1, I = y + 2;
            r = Hi(this, u, e, n, c, h, d, b, C, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), M = Math.min(l.count, p.start + p.count);
        for (let m = g, u = M; m < u; m += 3) {
          const A = m, T = m + 1, y = m + 2;
          r = Hi(this, a, e, n, c, h, d, A, T, y), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
  }
}
function zl(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === xt ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === pn, o), l === null) return null;
  zi.copy(o), zi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(zi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: zi.clone(),
    object: i
  };
}
function Hi(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Ni), i.getVertexPosition(l, Fi), i.getVertexPosition(c, Oi);
  const h = zl(i, e, t, n, Ni, Fi, Oi, da);
  if (h) {
    const d = new O();
    Nt.getBarycoord(da, Ni, Fi, Oi, d), r && (h.uv = Nt.getInterpolatedAttribute(r, o, l, c, d, new Ze())), s && (h.uv1 = Nt.getInterpolatedAttribute(s, o, l, c, d, new Ze())), a && (h.normal = Nt.getInterpolatedAttribute(a, o, l, c, d, new O()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: l,
      c,
      normal: new O(),
      materialIndex: 0
    };
    Nt.getNormal(Ni, Fi, Oi, f.normal), h.face = f, h.barycoord = d;
  }
  return h;
}
class Mi extends Gt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], d = [];
    let f = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new en(c, 3)), this.setAttribute("normal", new en(h, 3)), this.setAttribute("uv", new en(d, 2));
    function g(M, m, u, A, T, y, U, b, C, I, S) {
      const x = y / C, w = U / I, k = y / 2, z = U / 2, W = b / 2, $ = C + 1, G = I + 1;
      let J = 0, H = 0;
      const re = new O();
      for (let ue = 0; ue < G; ue++) {
        const ge = ue * w - z;
        for (let Le = 0; Le < $; Le++) {
          const Ke = Le * x - k;
          re[M] = Ke * A, re[m] = ge * T, re[u] = W, c.push(re.x, re.y, re.z), re[M] = 0, re[m] = 0, re[u] = b > 0 ? 1 : -1, h.push(re.x, re.y, re.z), d.push(Le / C), d.push(1 - ue / I), J += 1;
        }
      }
      for (let ue = 0; ue < I; ue++)
        for (let ge = 0; ge < C; ge++) {
          const Le = f + ge + $ * ue, Ke = f + ge + $ * (ue + 1), q = f + (ge + 1) + $ * (ue + 1), ee = f + (ge + 1) + $ * ue;
          l.push(Le, Ke, ee), l.push(Ke, q, ee), H += 6;
        }
      o.addGroup(p, H, S), p += H, f += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Mi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ii(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function mt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ii(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Hl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function fo(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ge.workingColorSpace;
}
const Vl = { clone: ii, merge: mt };
var Gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, kl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class rn extends xi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gl, this.fragmentShader = kl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ii(e.uniforms), this.uniformsGroups = Hl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class po extends Mt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new nt(), this.projectionMatrix = new nt(), this.projectionMatrixInverse = new nt(), this.coordinateSystem = Jt;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const un = /* @__PURE__ */ new O(), pa = /* @__PURE__ */ new Ze(), ma = /* @__PURE__ */ new Ze();
class Ct extends po {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ys * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(lr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ys * 2 * Math.atan(
      Math.tan(lr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    un.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(un.x, un.y).multiplyScalar(-e / un.z), un.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(un.x, un.y).multiplyScalar(-e / un.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, pa, ma), t.subVectors(ma, pa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(lr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const kn = -90, Wn = 1;
class Wl extends Mt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ct(kn, Wn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ct(kn, Wn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ct(kn, Wn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ct(kn, Wn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ct(kn, Wn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ct(kn, Wn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === Jt)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === tr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, h] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(d, f, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class mo extends _t {
  constructor(e, t, n, r, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Jn, super(e, t, n, r, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Xl extends Pn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new mo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : zt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Mi(5, 5, 5), s = new rn({
      name: "CubemapFromEquirect",
      uniforms: ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: xt,
      blending: fn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Ht(r, s), o = t.minFilter;
    return t.minFilter === wn && (t.minFilter = zt), new Wl(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class ql extends Mt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new nn(), this.environmentIntensity = 1, this.environmentRotation = new nn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Cr = /* @__PURE__ */ new O(), Yl = /* @__PURE__ */ new O(), Zl = /* @__PURE__ */ new Ce();
class yn {
  constructor(e = new O(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Cr.subVectors(n, t).cross(Yl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Cr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Zl.getNormalMatrix(e), r = this.coplanarPoint(Cr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mn = /* @__PURE__ */ new ir(), Vi = /* @__PURE__ */ new O();
class _o {
  constructor(e = new yn(), t = new yn(), n = new yn(), r = new yn(), s = new yn(), a = new yn()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Jt) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], d = r[6], f = r[7], p = r[8], g = r[9], M = r[10], m = r[11], u = r[12], A = r[13], T = r[14], y = r[15];
    if (n[0].setComponents(l - s, f - c, m - p, y - u).normalize(), n[1].setComponents(l + s, f + c, m + p, y + u).normalize(), n[2].setComponents(l + a, f + h, m + g, y + A).normalize(), n[3].setComponents(l - a, f - h, m - g, y - A).normalize(), n[4].setComponents(l - o, f - d, m - M, y - T).normalize(), t === Jt)
      n[5].setComponents(l + o, f + d, m + M, y + T).normalize();
    else if (t === tr)
      n[5].setComponents(o, d, M, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Mn);
  }
  intersectsSprite(e) {
    return Mn.center.set(0, 0, 0), Mn.radius = 0.7071067811865476, Mn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Vi.x = r.normal.x > 0 ? e.max.x : e.min.x, Vi.y = r.normal.y > 0 ? e.max.y : e.min.y, Vi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Vi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Kl extends xi {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ke(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const _a = /* @__PURE__ */ new nt(), Ts = /* @__PURE__ */ new Is(), Gi = /* @__PURE__ */ new ir(), ki = /* @__PURE__ */ new O();
class $l extends Mt {
  constructor(e = new Gt(), t = new Kl()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Gi.copy(n.boundingSphere), Gi.applyMatrix4(r), Gi.radius += s, e.ray.intersectsSphere(Gi) === !1) return;
    _a.copy(r).invert(), Ts.copy(e.ray).applyMatrix4(_a);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = f, M = p; g < M; g++) {
        const m = c.getX(g);
        ki.fromBufferAttribute(d, m), ga(ki, m, l, r, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), p = Math.min(d.count, a.start + a.count);
      for (let g = f, M = p; g < M; g++)
        ki.fromBufferAttribute(d, g), ga(ki, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ga(i, e, t, n, r, s, a) {
  const o = Ts.distanceSqToPoint(i);
  if (o < t) {
    const l = new O();
    Ts.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Wi extends Mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
class go extends _t {
  constructor(e, t, n, r, s, a, o, l, c, h = Kn) {
    if (h !== Kn && h !== ti)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Kn && (n = Cn), n === void 0 && h === ti && (n = ei), super(null, r, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Ot, this.minFilter = l !== void 0 ? l : Ot, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Si extends Gt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, d = e / o, f = t / l, p = [], g = [], M = [], m = [];
    for (let u = 0; u < h; u++) {
      const A = u * f - a;
      for (let T = 0; T < c; T++) {
        const y = T * d - s;
        g.push(y, -A, 0), M.push(0, 0, 1), m.push(T / o), m.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let A = 0; A < o; A++) {
        const T = A + c * u, y = A + c * (u + 1), U = A + 1 + c * (u + 1), b = A + 1 + c * u;
        p.push(T, y, b), p.push(y, U, b);
      }
    this.setIndex(p), this.setAttribute("position", new en(g, 3)), this.setAttribute("normal", new en(M, 3)), this.setAttribute("uv", new en(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Si(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class jl extends xi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = ll, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Jl extends xi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const va = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class vo {
  constructor(e, t, n) {
    const r = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && r.onStart !== void 0 && r.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, r.onProgress !== void 0 && r.onProgress(h, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, d) {
      return c.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = c.indexOf(h);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, f = c.length; d < f; d += 2) {
        const p = c[d], g = c[d + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const Ql = /* @__PURE__ */ new vo();
class Os {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ql, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Os.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class ec extends Os {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = va.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = pi("img");
    function l() {
      h(), va.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      h(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class tc extends Os {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new _t(), a = new ec(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class nc extends po {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class ic extends Ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
const xa = /* @__PURE__ */ new nt();
class rc {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new Is(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Ns(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return xa.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(xa), this;
  }
  intersectObject(e, t = !0, n = []) {
    return As(e, this, n, t), n.sort(Ma), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++)
      As(e[r], this, n, t);
    return n.sort(Ma), n;
  }
}
function Ma(i, e) {
  return i.distance - e.distance;
}
function As(i, e, t, n) {
  let r = !0;
  if (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1), r === !0 && n === !0) {
    const s = i.children;
    for (let a = 0, o = s.length; a < o; a++)
      As(s[a], e, t, !0);
  }
}
function Sa(i, e, t, n) {
  const r = sc(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Ja:
      return i * e;
    case eo:
      return i * e;
    case to:
      return i * e * 2;
    case no:
      return i * e / r.components * r.byteLength;
    case Ds:
      return i * e / r.components * r.byteLength;
    case io:
      return i * e * 2 / r.components * r.byteLength;
    case Ls:
      return i * e * 2 / r.components * r.byteLength;
    case Qa:
      return i * e * 3 / r.components * r.byteLength;
    case Ft:
      return i * e * 4 / r.components * r.byteLength;
    case Us:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Zi:
    case Ki:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case $i:
    case ji:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Jr:
    case es:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case jr:
    case Qr:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case ts:
    case ns:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case is:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case rs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ss:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case as:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case os:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ls:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case cs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case us:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case hs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case fs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ds:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ps:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case ms:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case _s:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case gs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Ji:
    case vs:
    case xs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case ro:
    case Ms:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Ss:
    case Es:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function sc(i) {
  switch (i) {
    case tn:
    case Ka:
      return { byteLength: 1, components: 1 };
    case di:
    case $a:
    case mi:
      return { byteLength: 2, components: 1 };
    case Cs:
    case Ps:
      return { byteLength: 2, components: 4 };
    case Cn:
    case ws:
    case jt:
      return { byteLength: 4, components: 1 };
    case ja:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Rs
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Rs);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function xo() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function ac(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, d = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, l, c) {
    const h = l.array, d = l.updateRanges;
    if (i.bindBuffer(c, o), d.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      d.sort((p, g) => p.start - g.start);
      let f = 0;
      for (let p = 1; p < d.length; p++) {
        const g = d[f], M = d[p];
        M.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          M.start + M.count - g.start
        ) : (++f, d[f] = M);
      }
      d.length = f + 1;
      for (let p = 0, g = d.length; p < g; p++) {
        const M = d[p];
        i.bufferSubData(
          c,
          M.start * h.BYTES_PER_ELEMENT,
          h,
          M.start,
          M.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var oc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, lc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, cc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, uc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, fc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, dc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, pc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, mc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, _c = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, gc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, vc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, xc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Mc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Sc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ec = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, yc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Tc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ac = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, bc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Rc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, wc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Cc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Pc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Dc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Lc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Uc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ic = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Nc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Fc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Oc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Bc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, zc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Hc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Vc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Gc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, kc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Wc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Xc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, qc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Yc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Zc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Kc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, $c = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, jc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Jc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Qc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, eu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, tu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, nu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, iu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ru = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, su = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, au = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, ou = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, cu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, uu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, hu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, du = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, pu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, mu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, _u = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, gu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, vu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, xu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Mu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Su = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Eu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, yu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Tu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Au = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, bu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ru = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, wu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Cu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Pu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Du = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Lu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Uu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Iu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Nu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Fu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ou = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Bu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, zu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Hu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Vu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Gu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, ku = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Wu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Xu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, qu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Yu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Zu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Ku = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, $u = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ju = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ju = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Qu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, eh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, th = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, nh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ih = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, rh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, sh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ah = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, oh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ch = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, dh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, ph = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, mh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, _h = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, gh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, xh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Mh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Sh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Eh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, yh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Th = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ah = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Rh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, wh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ch = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ph = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Dh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ih = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Nh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Fh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Oh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Bh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, zh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, De = {
  alphahash_fragment: oc,
  alphahash_pars_fragment: lc,
  alphamap_fragment: cc,
  alphamap_pars_fragment: uc,
  alphatest_fragment: hc,
  alphatest_pars_fragment: fc,
  aomap_fragment: dc,
  aomap_pars_fragment: pc,
  batching_pars_vertex: mc,
  batching_vertex: _c,
  begin_vertex: gc,
  beginnormal_vertex: vc,
  bsdfs: xc,
  iridescence_fragment: Mc,
  bumpmap_pars_fragment: Sc,
  clipping_planes_fragment: Ec,
  clipping_planes_pars_fragment: yc,
  clipping_planes_pars_vertex: Tc,
  clipping_planes_vertex: Ac,
  color_fragment: bc,
  color_pars_fragment: Rc,
  color_pars_vertex: wc,
  color_vertex: Cc,
  common: Pc,
  cube_uv_reflection_fragment: Dc,
  defaultnormal_vertex: Lc,
  displacementmap_pars_vertex: Uc,
  displacementmap_vertex: Ic,
  emissivemap_fragment: Nc,
  emissivemap_pars_fragment: Fc,
  colorspace_fragment: Oc,
  colorspace_pars_fragment: Bc,
  envmap_fragment: zc,
  envmap_common_pars_fragment: Hc,
  envmap_pars_fragment: Vc,
  envmap_pars_vertex: Gc,
  envmap_physical_pars_fragment: Qc,
  envmap_vertex: kc,
  fog_vertex: Wc,
  fog_pars_vertex: Xc,
  fog_fragment: qc,
  fog_pars_fragment: Yc,
  gradientmap_pars_fragment: Zc,
  lightmap_pars_fragment: Kc,
  lights_lambert_fragment: $c,
  lights_lambert_pars_fragment: jc,
  lights_pars_begin: Jc,
  lights_toon_fragment: eu,
  lights_toon_pars_fragment: tu,
  lights_phong_fragment: nu,
  lights_phong_pars_fragment: iu,
  lights_physical_fragment: ru,
  lights_physical_pars_fragment: su,
  lights_fragment_begin: au,
  lights_fragment_maps: ou,
  lights_fragment_end: lu,
  logdepthbuf_fragment: cu,
  logdepthbuf_pars_fragment: uu,
  logdepthbuf_pars_vertex: hu,
  logdepthbuf_vertex: fu,
  map_fragment: du,
  map_pars_fragment: pu,
  map_particle_fragment: mu,
  map_particle_pars_fragment: _u,
  metalnessmap_fragment: gu,
  metalnessmap_pars_fragment: vu,
  morphinstance_vertex: xu,
  morphcolor_vertex: Mu,
  morphnormal_vertex: Su,
  morphtarget_pars_vertex: Eu,
  morphtarget_vertex: yu,
  normal_fragment_begin: Tu,
  normal_fragment_maps: Au,
  normal_pars_fragment: bu,
  normal_pars_vertex: Ru,
  normal_vertex: wu,
  normalmap_pars_fragment: Cu,
  clearcoat_normal_fragment_begin: Pu,
  clearcoat_normal_fragment_maps: Du,
  clearcoat_pars_fragment: Lu,
  iridescence_pars_fragment: Uu,
  opaque_fragment: Iu,
  packing: Nu,
  premultiplied_alpha_fragment: Fu,
  project_vertex: Ou,
  dithering_fragment: Bu,
  dithering_pars_fragment: zu,
  roughnessmap_fragment: Hu,
  roughnessmap_pars_fragment: Vu,
  shadowmap_pars_fragment: Gu,
  shadowmap_pars_vertex: ku,
  shadowmap_vertex: Wu,
  shadowmask_pars_fragment: Xu,
  skinbase_vertex: qu,
  skinning_pars_vertex: Yu,
  skinning_vertex: Zu,
  skinnormal_vertex: Ku,
  specularmap_fragment: $u,
  specularmap_pars_fragment: ju,
  tonemapping_fragment: Ju,
  tonemapping_pars_fragment: Qu,
  transmission_fragment: eh,
  transmission_pars_fragment: th,
  uv_pars_fragment: nh,
  uv_pars_vertex: ih,
  uv_vertex: rh,
  worldpos_vertex: sh,
  background_vert: ah,
  background_frag: oh,
  backgroundCube_vert: lh,
  backgroundCube_frag: ch,
  cube_vert: uh,
  cube_frag: hh,
  depth_vert: fh,
  depth_frag: dh,
  distanceRGBA_vert: ph,
  distanceRGBA_frag: mh,
  equirect_vert: _h,
  equirect_frag: gh,
  linedashed_vert: vh,
  linedashed_frag: xh,
  meshbasic_vert: Mh,
  meshbasic_frag: Sh,
  meshlambert_vert: Eh,
  meshlambert_frag: yh,
  meshmatcap_vert: Th,
  meshmatcap_frag: Ah,
  meshnormal_vert: bh,
  meshnormal_frag: Rh,
  meshphong_vert: wh,
  meshphong_frag: Ch,
  meshphysical_vert: Ph,
  meshphysical_frag: Dh,
  meshtoon_vert: Lh,
  meshtoon_frag: Uh,
  points_vert: Ih,
  points_frag: Nh,
  shadow_vert: Fh,
  shadow_frag: Oh,
  sprite_vert: Bh,
  sprite_frag: zh
}, te = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ce() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ce() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ce() },
    normalScale: { value: /* @__PURE__ */ new Ze(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ce() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ke(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ce() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ze(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 }
  }
}, Bt = {
  basic: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.fog
    ]),
    vertexShader: De.meshbasic_vert,
    fragmentShader: De.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: De.meshlambert_vert,
    fragmentShader: De.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        specular: { value: /* @__PURE__ */ new ke(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: De.meshphong_vert,
    fragmentShader: De.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.roughnessmap,
      te.metalnessmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: De.meshphysical_vert,
    fragmentShader: De.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.gradientmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: De.meshtoon_vert,
    fragmentShader: De.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: De.meshmatcap_vert,
    fragmentShader: De.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ mt([
      te.points,
      te.fog
    ]),
    vertexShader: De.points_vert,
    fragmentShader: De.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: De.linedashed_vert,
    fragmentShader: De.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.displacementmap
    ]),
    vertexShader: De.depth_vert,
    fragmentShader: De.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.meshnormal_vert,
    fragmentShader: De.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ mt([
      te.sprite,
      te.fog
    ]),
    vertexShader: De.sprite_vert,
    fragmentShader: De.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ce() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: De.background_vert,
    fragmentShader: De.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ce() }
    },
    vertexShader: De.backgroundCube_vert,
    fragmentShader: De.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: De.cube_vert,
    fragmentShader: De.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: De.equirect_vert,
    fragmentShader: De.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ mt([
      te.common,
      te.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new O() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: De.distanceRGBA_vert,
    fragmentShader: De.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ mt([
      te.lights,
      te.fog,
      {
        color: { value: /* @__PURE__ */ new ke(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.shadow_vert,
    fragmentShader: De.shadow_frag
  }
};
Bt.physical = {
  uniforms: /* @__PURE__ */ mt([
    Bt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ce() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ce() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ze(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ce() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ce() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ce() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ke(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ce() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ce() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ce() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ze() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ce() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ke(0) },
      specularColor: { value: /* @__PURE__ */ new ke(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ce() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ce() },
      anisotropyVector: { value: /* @__PURE__ */ new Ze() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ce() }
    }
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag
};
const Xi = { r: 0, b: 0, g: 0 }, Sn = /* @__PURE__ */ new nn(), Hh = /* @__PURE__ */ new nt();
function Vh(i, e, t, n, r, s, a) {
  const o = new ke(0);
  let l = s === !0 ? 0 : 1, c, h, d = null, f = 0, p = null;
  function g(T) {
    let y = T.isScene === !0 ? T.background : null;
    return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function M(T) {
    let y = !1;
    const U = g(T);
    U === null ? u(o, l) : U && U.isColor && (u(U, 1), y = !0);
    const b = i.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || y) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, y) {
    const U = g(y);
    U && (U.isCubeTexture || U.mapping === nr) ? (h === void 0 && (h = new Ht(
      new Mi(1, 1, 1),
      new rn({
        name: "BackgroundCubeMaterial",
        uniforms: ii(Bt.backgroundCube.uniforms),
        vertexShader: Bt.backgroundCube.vertexShader,
        fragmentShader: Bt.backgroundCube.fragmentShader,
        side: xt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(b, C, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), Sn.copy(y.backgroundRotation), Sn.x *= -1, Sn.y *= -1, Sn.z *= -1, U.isCubeTexture && U.isRenderTargetTexture === !1 && (Sn.y *= -1, Sn.z *= -1), h.material.uniforms.envMap.value = U, h.material.uniforms.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hh.makeRotationFromEuler(Sn)), h.material.toneMapped = Ge.getTransfer(U.colorSpace) !== Ye, (d !== U || f !== U.version || p !== i.toneMapping) && (h.material.needsUpdate = !0, d = U, f = U.version, p = i.toneMapping), h.layers.enableAll(), T.unshift(h, h.geometry, h.material, 0, 0, null)) : U && U.isTexture && (c === void 0 && (c = new Ht(
      new Si(2, 2),
      new rn({
        name: "BackgroundMaterial",
        uniforms: ii(Bt.background.uniforms),
        vertexShader: Bt.background.vertexShader,
        fragmentShader: Bt.background.fragmentShader,
        side: pn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = U, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Ge.getTransfer(U.colorSpace) !== Ye, U.matrixAutoUpdate === !0 && U.updateMatrix(), c.material.uniforms.uvTransform.value.copy(U.matrix), (d !== U || f !== U.version || p !== i.toneMapping) && (c.material.needsUpdate = !0, d = U, f = U.version, p = i.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function u(T, y) {
    T.getRGB(Xi, fo(i)), n.buffers.color.setClear(Xi.r, Xi.g, Xi.b, y, a);
  }
  function A() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, y = 1) {
      o.set(T), l = y, u(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, u(o, l);
    },
    render: M,
    addToRenderList: m,
    dispose: A
  };
}
function Gh(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = !1;
  function o(x, w, k, z, W) {
    let $ = !1;
    const G = d(z, k, w);
    s !== G && (s = G, c(s.object)), $ = p(x, z, k, W), $ && g(x, z, k, W), W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, y(x, w, k, z), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(x) {
    return i.bindVertexArray(x);
  }
  function h(x) {
    return i.deleteVertexArray(x);
  }
  function d(x, w, k) {
    const z = k.wireframe === !0;
    let W = n[x.id];
    W === void 0 && (W = {}, n[x.id] = W);
    let $ = W[w.id];
    $ === void 0 && ($ = {}, W[w.id] = $);
    let G = $[z];
    return G === void 0 && (G = f(l()), $[z] = G), G;
  }
  function f(x) {
    const w = [], k = [], z = [];
    for (let W = 0; W < t; W++)
      w[W] = 0, k[W] = 0, z[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: w,
      enabledAttributes: k,
      attributeDivisors: z,
      object: x,
      attributes: {},
      index: null
    };
  }
  function p(x, w, k, z) {
    const W = s.attributes, $ = w.attributes;
    let G = 0;
    const J = k.getAttributes();
    for (const H in J)
      if (J[H].location >= 0) {
        const ue = W[H];
        let ge = $[H];
        if (ge === void 0 && (H === "instanceMatrix" && x.instanceMatrix && (ge = x.instanceMatrix), H === "instanceColor" && x.instanceColor && (ge = x.instanceColor)), ue === void 0 || ue.attribute !== ge || ge && ue.data !== ge.data) return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== z;
  }
  function g(x, w, k, z) {
    const W = {}, $ = w.attributes;
    let G = 0;
    const J = k.getAttributes();
    for (const H in J)
      if (J[H].location >= 0) {
        let ue = $[H];
        ue === void 0 && (H === "instanceMatrix" && x.instanceMatrix && (ue = x.instanceMatrix), H === "instanceColor" && x.instanceColor && (ue = x.instanceColor));
        const ge = {};
        ge.attribute = ue, ue && ue.data && (ge.data = ue.data), W[H] = ge, G++;
      }
    s.attributes = W, s.attributesNum = G, s.index = z;
  }
  function M() {
    const x = s.newAttributes;
    for (let w = 0, k = x.length; w < k; w++)
      x[w] = 0;
  }
  function m(x) {
    u(x, 0);
  }
  function u(x, w) {
    const k = s.newAttributes, z = s.enabledAttributes, W = s.attributeDivisors;
    k[x] = 1, z[x] === 0 && (i.enableVertexAttribArray(x), z[x] = 1), W[x] !== w && (i.vertexAttribDivisor(x, w), W[x] = w);
  }
  function A() {
    const x = s.newAttributes, w = s.enabledAttributes;
    for (let k = 0, z = w.length; k < z; k++)
      w[k] !== x[k] && (i.disableVertexAttribArray(k), w[k] = 0);
  }
  function T(x, w, k, z, W, $, G) {
    G === !0 ? i.vertexAttribIPointer(x, w, k, W, $) : i.vertexAttribPointer(x, w, k, z, W, $);
  }
  function y(x, w, k, z) {
    M();
    const W = z.attributes, $ = k.getAttributes(), G = w.defaultAttributeValues;
    for (const J in $) {
      const H = $[J];
      if (H.location >= 0) {
        let re = W[J];
        if (re === void 0 && (J === "instanceMatrix" && x.instanceMatrix && (re = x.instanceMatrix), J === "instanceColor" && x.instanceColor && (re = x.instanceColor)), re !== void 0) {
          const ue = re.normalized, ge = re.itemSize, Le = e.get(re);
          if (Le === void 0) continue;
          const Ke = Le.buffer, q = Le.type, ee = Le.bytesPerElement, me = q === i.INT || q === i.UNSIGNED_INT || re.gpuType === ws;
          if (re.isInterleavedBufferAttribute) {
            const se = re.data, ye = se.stride, Re = re.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Ue = 0; Ue < H.locationSize; Ue++)
                u(H.location + Ue, se.meshPerAttribute);
              x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let Ue = 0; Ue < H.locationSize; Ue++)
                m(H.location + Ue);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let Ue = 0; Ue < H.locationSize; Ue++)
              T(
                H.location + Ue,
                ge / H.locationSize,
                q,
                ue,
                ye * ee,
                (Re + ge / H.locationSize * Ue) * ee,
                me
              );
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let se = 0; se < H.locationSize; se++)
                u(H.location + se, re.meshPerAttribute);
              x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let se = 0; se < H.locationSize; se++)
                m(H.location + se);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let se = 0; se < H.locationSize; se++)
              T(
                H.location + se,
                ge / H.locationSize,
                q,
                ue,
                ge * ee,
                ge / H.locationSize * se * ee,
                me
              );
          }
        } else if (G !== void 0) {
          const ue = G[J];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                i.vertexAttrib2fv(H.location, ue);
                break;
              case 3:
                i.vertexAttrib3fv(H.location, ue);
                break;
              case 4:
                i.vertexAttrib4fv(H.location, ue);
                break;
              default:
                i.vertexAttrib1fv(H.location, ue);
            }
        }
      }
    }
    A();
  }
  function U() {
    I();
    for (const x in n) {
      const w = n[x];
      for (const k in w) {
        const z = w[k];
        for (const W in z)
          h(z[W].object), delete z[W];
        delete w[k];
      }
      delete n[x];
    }
  }
  function b(x) {
    if (n[x.id] === void 0) return;
    const w = n[x.id];
    for (const k in w) {
      const z = w[k];
      for (const W in z)
        h(z[W].object), delete z[W];
      delete w[k];
    }
    delete n[x.id];
  }
  function C(x) {
    for (const w in n) {
      const k = n[w];
      if (k[x.id] === void 0) continue;
      const z = k[x.id];
      for (const W in z)
        h(z[W].object), delete z[W];
      delete k[x.id];
    }
  }
  function I() {
    S(), a = !0, s !== r && (s = r, c(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: I,
    resetDefaultState: S,
    dispose: U,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: C,
    initAttributes: M,
    enableAttribute: m,
    disableUnusedAttributes: A
  };
}
function kh(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, h) {
    i.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, d) {
    d !== 0 && (i.drawArraysInstanced(n, c, h, d), t.update(h, n, d));
  }
  function o(c, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++)
      p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, d, f) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], h[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, d);
      let g = 0;
      for (let M = 0; M < d; M++)
        g += h[M] * f[M];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Wh(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(C) {
    return !(C !== Ft && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const I = C === mi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== tn && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    C !== jt && !I);
  }
  function l(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const d = t.logarithmicDepthBuffer === !0, f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), u = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), U = g > 0, b = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: M,
    maxCubemapSize: m,
    maxAttributes: u,
    maxVertexUniforms: A,
    maxVaryings: T,
    maxFragmentUniforms: y,
    vertexTextures: U,
    maxSamples: b
  };
}
function Xh(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new yn(), o = new Ce(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const p = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, p;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = h(d, f, 0);
  }, this.setState = function(d, f, p) {
    const g = d.clippingPlanes, M = d.clipIntersection, m = d.clipShadows, u = i.get(d);
    if (!r || g === null || g.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const A = s ? 0 : n, T = A * 4;
      let y = u.clippingState || null;
      l.value = y, y = h(g, f, T, p);
      for (let U = 0; U !== T; ++U)
        y[U] = t[U];
      u.clippingState = y, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, f, p, g) {
    const M = d !== null ? d.length : 0;
    let m = null;
    if (M !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const u = p + M * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (m === null || m.length < u) && (m = new Float32Array(u));
        for (let T = 0, y = p; T !== M; ++T, y += 4)
          a.copy(d[T]).applyMatrix4(A, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = M, e.numIntersection = 0, m;
  }
}
function qh(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Yr ? a.mapping = Jn : o === Zr && (a.mapping = Qn), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Yr || o === Zr)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Xl(l.height);
            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const Yn = 4, Ea = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], bn = 20, Pr = /* @__PURE__ */ new nc(), ya = /* @__PURE__ */ new ke();
let Dr = null, Lr = 0, Ur = 0, Ir = !1;
const Tn = (1 + Math.sqrt(5)) / 2, Xn = 1 / Tn, Ta = [
  /* @__PURE__ */ new O(-Tn, Xn, 0),
  /* @__PURE__ */ new O(Tn, Xn, 0),
  /* @__PURE__ */ new O(-Xn, 0, Tn),
  /* @__PURE__ */ new O(Xn, 0, Tn),
  /* @__PURE__ */ new O(0, Tn, -Xn),
  /* @__PURE__ */ new O(0, Tn, Xn),
  /* @__PURE__ */ new O(-1, 1, -1),
  /* @__PURE__ */ new O(1, 1, -1),
  /* @__PURE__ */ new O(-1, 1, 1),
  /* @__PURE__ */ new O(1, 1, 1)
];
class Aa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Dr = this._renderer.getRenderTarget(), Lr = this._renderer.getActiveCubeFace(), Ur = this._renderer.getActiveMipmapLevel(), Ir = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = wa(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ra(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Dr, Lr, Ur), this._renderer.xr.enabled = Ir, e.scissorTest = !1, qi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Jn || e.mapping === Qn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Dr = this._renderer.getRenderTarget(), Lr = this._renderer.getActiveCubeFace(), Ur = this._renderer.getActiveMipmapLevel(), Ir = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: zt,
      minFilter: zt,
      generateMipmaps: !1,
      type: mi,
      format: Ft,
      colorSpace: ni,
      depthBuffer: !1
    }, r = ba(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ba(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Yh(s)), this._blurMaterial = Zh(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ht(this._lodPlanes[0], e);
    this._renderer.compile(t, Pr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Ct(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, f = h.toneMapping;
    h.getClearColor(ya), h.toneMapping = dn, h.autoClear = !1;
    const p = new Fs({
      name: "PMREM.Background",
      side: xt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ht(new Mi(), p);
    let M = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, M = !0) : (p.color.copy(ya), M = !0);
    for (let u = 0; u < 6; u++) {
      const A = u % 3;
      A === 0 ? (o.up.set(0, l[u], 0), o.lookAt(c[u], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[u]), o.lookAt(0, c[u], 0)) : (o.up.set(0, l[u], 0), o.lookAt(0, 0, c[u]));
      const T = this._cubeSize;
      qi(r, A * T, u > 2 ? T : 0, T, T), h.setRenderTarget(r), M && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = d, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Jn || e.mapping === Qn;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = wa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ra());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Ht(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    qi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Pr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Ta[(r - s - 1) % Ta.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new Ht(this._lodPlanes[r], c), f = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * bn - 1), M = s / g, m = isFinite(s) ? 1 + Math.floor(h * M) : bn;
    m > bn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bn}`);
    const u = [];
    let A = 0;
    for (let C = 0; C < bn; ++C) {
      const I = C / M, S = Math.exp(-I * I / 2);
      u.push(S), C === 0 ? A += S : C < m && (A += 2 * S);
    }
    for (let C = 0; C < u.length; C++)
      u[C] = u[C] / A;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = u, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: T } = this;
    f.dTheta.value = g, f.mipInt.value = T - n;
    const y = this._sizeLods[r], U = 3 * y * (r > T - Yn ? r - T + Yn : 0), b = 4 * (this._cubeSize - y);
    qi(t, U, b, 3 * y, 2 * y), l.setRenderTarget(t), l.render(d, Pr);
  }
}
function Yh(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Yn + 1 + Ea.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - Yn ? l = Ea[a - i + Yn - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, d = 1 + c, f = [h, h, d, h, d, d, h, h, d, d, h, d], p = 6, g = 6, M = 3, m = 2, u = 1, A = new Float32Array(M * g * p), T = new Float32Array(m * g * p), y = new Float32Array(u * g * p);
    for (let b = 0; b < p; b++) {
      const C = b % 3 * 2 / 3 - 1, I = b > 2 ? 0 : -1, S = [
        C,
        I,
        0,
        C + 2 / 3,
        I,
        0,
        C + 2 / 3,
        I + 1,
        0,
        C,
        I,
        0,
        C + 2 / 3,
        I + 1,
        0,
        C,
        I + 1,
        0
      ];
      A.set(S, M * g * b), T.set(f, m * g * b);
      const x = [b, b, b, b, b, b];
      y.set(x, u * g * b);
    }
    const U = new Gt();
    U.setAttribute("position", new Vt(A, M)), U.setAttribute("uv", new Vt(T, m)), U.setAttribute("faceIndex", new Vt(y, u)), e.push(U), r > Yn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ba(i, e, t) {
  const n = new Pn(i, e, t);
  return n.texture.mapping = nr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function qi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Zh(i, e, t) {
  const n = new Float32Array(bn), r = new O(0, 1, 0);
  return new rn({
    name: "SphericalGaussianBlur",
    defines: {
      n: bn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Bs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ra() {
  return new rn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Bs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function wa() {
  return new rn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Bs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Bs() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Kh(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Yr || l === Zr, h = l === Jn || l === Qn;
      if (c || h) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new Aa(i)), d = c ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && r(p) ? (t === null && (t = new Aa(i)), d = c ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function $h(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && qn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function jh(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const p = s.get(f);
    p && (e.remove(p), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, t.memory.geometries++), f;
  }
  function l(d) {
    const f = d.attributes;
    for (const p in f)
      e.update(f[p], i.ARRAY_BUFFER);
  }
  function c(d) {
    const f = [], p = d.index, g = d.attributes.position;
    let M = 0;
    if (p !== null) {
      const A = p.array;
      M = p.version;
      for (let T = 0, y = A.length; T < y; T += 3) {
        const U = A[T + 0], b = A[T + 1], C = A[T + 2];
        f.push(U, b, b, C, C, U);
      }
    } else if (g !== void 0) {
      const A = g.array;
      M = g.version;
      for (let T = 0, y = A.length / 3 - 1; T < y; T += 3) {
        const U = T + 0, b = T + 1, C = T + 2;
        f.push(U, b, b, C, C, U);
      }
    } else
      return;
    const m = new (ao(f) ? ho : uo)(f, 1);
    m.version = M;
    const u = s.get(d);
    u && e.remove(u), s.set(d, m);
  }
  function h(d) {
    const f = s.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && c(d);
    } else
      c(d);
    return s.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function Jh(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function l(f, p) {
    i.drawElements(n, p, s, f * a), t.update(p, n, 1);
  }
  function c(f, p, g) {
    g !== 0 && (i.drawElementsInstanced(n, p, s, f * a, g), t.update(p, n, g));
  }
  function h(f, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, f, 0, g);
    let m = 0;
    for (let u = 0; u < g; u++)
      m += p[u];
    t.update(m, n, 1);
  }
  function d(f, p, g, M) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let u = 0; u < f.length; u++)
        c(f[u] / a, p[u], M[u]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, f, 0, M, 0, g);
      let u = 0;
      for (let A = 0; A < g; A++)
        u += p[A] * M[A];
      t.update(u, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = d;
}
function Qh(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function ef(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new rt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], u = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let T = 0;
      p === !0 && (T = 1), g === !0 && (T = 2), M === !0 && (T = 3);
      let y = o.attributes.position.count * T, U = 1;
      y > e.maxTextureSize && (U = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const b = new Float32Array(y * U * 4 * d), C = new lo(b, y, U, d);
      C.type = jt, C.needsUpdate = !0;
      const I = T * 4;
      for (let x = 0; x < d; x++) {
        const w = m[x], k = u[x], z = A[x], W = y * U * 4 * x;
        for (let $ = 0; $ < w.count; $++) {
          const G = $ * I;
          p === !0 && (r.fromBufferAttribute(w, $), b[W + G + 0] = r.x, b[W + G + 1] = r.y, b[W + G + 2] = r.z, b[W + G + 3] = 0), g === !0 && (r.fromBufferAttribute(k, $), b[W + G + 4] = r.x, b[W + G + 5] = r.y, b[W + G + 6] = r.z, b[W + G + 7] = 0), M === !0 && (r.fromBufferAttribute(z, $), b[W + G + 8] = r.x, b[W + G + 9] = r.y, b[W + G + 10] = r.z, b[W + G + 11] = z.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: d,
        texture: C,
        size: new Ze(y, U)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let M = 0; M < c.length; M++)
        p += c[M];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function tf(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, d = e.get(l, h);
    if (r.get(d) !== c && (e.update(d), r.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return d;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const Mo = /* @__PURE__ */ new _t(), Ca = /* @__PURE__ */ new go(1, 1), So = /* @__PURE__ */ new lo(), Eo = /* @__PURE__ */ new Cl(), yo = /* @__PURE__ */ new mo(), Pa = [], Da = [], La = new Float32Array(16), Ua = new Float32Array(9), Ia = new Float32Array(4);
function si(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Pa[r];
  if (s === void 0 && (s = new Float32Array(r), Pa[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function ot(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function lt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function rr(i, e) {
  let t = Da[e];
  t === void 0 && (t = new Int32Array(e), Da[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function nf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function rf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2fv(this.addr, e), lt(t, e);
  }
}
function sf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ot(t, e)) return;
    i.uniform3fv(this.addr, e), lt(t, e);
  }
}
function af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4fv(this.addr, e), lt(t, e);
  }
}
function of(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    Ia.set(n), i.uniformMatrix2fv(this.addr, !1, Ia), lt(t, n);
  }
}
function lf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    Ua.set(n), i.uniformMatrix3fv(this.addr, !1, Ua), lt(t, n);
  }
}
function cf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    La.set(n), i.uniformMatrix4fv(this.addr, !1, La), lt(t, n);
  }
}
function uf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function hf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2iv(this.addr, e), lt(t, e);
  }
}
function ff(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ot(t, e)) return;
    i.uniform3iv(this.addr, e), lt(t, e);
  }
}
function df(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4iv(this.addr, e), lt(t, e);
  }
}
function pf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function mf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2uiv(this.addr, e), lt(t, e);
  }
}
function _f(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ot(t, e)) return;
    i.uniform3uiv(this.addr, e), lt(t, e);
  }
}
function gf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4uiv(this.addr, e), lt(t, e);
  }
}
function vf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Ca.compareFunction = so, s = Ca) : s = Mo, t.setTexture2D(e || s, r);
}
function xf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Eo, r);
}
function Mf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || yo, r);
}
function Sf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || So, r);
}
function Ef(i) {
  switch (i) {
    case 5126:
      return nf;
    // FLOAT
    case 35664:
      return rf;
    // _VEC2
    case 35665:
      return sf;
    // _VEC3
    case 35666:
      return af;
    // _VEC4
    case 35674:
      return of;
    // _MAT2
    case 35675:
      return lf;
    // _MAT3
    case 35676:
      return cf;
    // _MAT4
    case 5124:
    case 35670:
      return uf;
    // INT, BOOL
    case 35667:
    case 35671:
      return hf;
    // _VEC2
    case 35668:
    case 35672:
      return ff;
    // _VEC3
    case 35669:
    case 35673:
      return df;
    // _VEC4
    case 5125:
      return pf;
    // UINT
    case 36294:
      return mf;
    // _VEC2
    case 36295:
      return _f;
    // _VEC3
    case 36296:
      return gf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return vf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return xf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Mf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Sf;
  }
}
function yf(i, e) {
  i.uniform1fv(this.addr, e);
}
function Tf(i, e) {
  const t = si(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Af(i, e) {
  const t = si(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function bf(i, e) {
  const t = si(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Rf(i, e) {
  const t = si(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function wf(i, e) {
  const t = si(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Cf(i, e) {
  const t = si(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Pf(i, e) {
  i.uniform1iv(this.addr, e);
}
function Df(i, e) {
  i.uniform2iv(this.addr, e);
}
function Lf(i, e) {
  i.uniform3iv(this.addr, e);
}
function Uf(i, e) {
  i.uniform4iv(this.addr, e);
}
function If(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Nf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Ff(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Of(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Bf(i, e, t) {
  const n = this.cache, r = e.length, s = rr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || Mo, s[a]);
}
function zf(i, e, t) {
  const n = this.cache, r = e.length, s = rr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Eo, s[a]);
}
function Hf(i, e, t) {
  const n = this.cache, r = e.length, s = rr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || yo, s[a]);
}
function Vf(i, e, t) {
  const n = this.cache, r = e.length, s = rr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || So, s[a]);
}
function Gf(i) {
  switch (i) {
    case 5126:
      return yf;
    // FLOAT
    case 35664:
      return Tf;
    // _VEC2
    case 35665:
      return Af;
    // _VEC3
    case 35666:
      return bf;
    // _VEC4
    case 35674:
      return Rf;
    // _MAT2
    case 35675:
      return wf;
    // _MAT3
    case 35676:
      return Cf;
    // _MAT4
    case 5124:
    case 35670:
      return Pf;
    // INT, BOOL
    case 35667:
    case 35671:
      return Df;
    // _VEC2
    case 35668:
    case 35672:
      return Lf;
    // _VEC3
    case 35669:
    case 35673:
      return Uf;
    // _VEC4
    case 5125:
      return If;
    // UINT
    case 36294:
      return Nf;
    // _VEC2
    case 36295:
      return Ff;
    // _VEC3
    case 36296:
      return Of;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Bf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return zf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Hf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Vf;
  }
}
class kf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Ef(t.type);
  }
}
class Wf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Gf(t.type);
  }
}
class Xf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Nr = /(\w+)(\])?(\[|\.)?/g;
function Na(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function qf(i, e, t) {
  const n = i.name, r = n.length;
  for (Nr.lastIndex = 0; ; ) {
    const s = Nr.exec(n), a = Nr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Na(t, c === void 0 ? new kf(o, i, e) : new Wf(o, i, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new Xf(o), Na(t, d)), t = d;
    }
  }
}
class Qi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      qf(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Fa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Yf = 37297;
let Zf = 0;
function Kf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Oa = /* @__PURE__ */ new Ce();
function $f(i) {
  Ge._getMatrix(Oa, Ge.workingColorSpace, i);
  const e = `mat3( ${Oa.elements.map((t) => t.toFixed(4))} )`;
  switch (Ge.getTransfer(i)) {
    case er:
      return [e, "LinearTransferOETF"];
    case Ye:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Ba(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Kf(i.getShaderSource(e), a);
  } else
    return r;
}
function jf(i, e) {
  const t = $f(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function Jf(i, e) {
  let t;
  switch (e) {
    case el:
      t = "Linear";
      break;
    case tl:
      t = "Reinhard";
      break;
    case nl:
      t = "Cineon";
      break;
    case il:
      t = "ACESFilmic";
      break;
    case sl:
      t = "AgX";
      break;
    case al:
      t = "Neutral";
      break;
    case rl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Yi = /* @__PURE__ */ new O();
function Qf() {
  Ge.getLuminanceCoefficients(Yi);
  const i = Yi.x.toFixed(4), e = Yi.y.toFixed(4), t = Yi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function ed(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(fi).join(`
`);
}
function td(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function nd(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function fi(i) {
  return i !== "";
}
function za(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ha(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const id = /^[ \t]*#include +<([\w\d./]+)>/gm;
function bs(i) {
  return i.replace(id, sd);
}
const rd = /* @__PURE__ */ new Map();
function sd(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = rd.get(e);
    if (n !== void 0)
      t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return bs(t);
}
const ad = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Va(i) {
  return i.replace(ad, od);
}
function od(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ga(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ld(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === qa ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Uo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Kt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function cd(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Jn:
      case Qn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case nr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function ud(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Qn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function hd(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ya:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Jo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Qo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function fd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function dd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = ld(t), c = cd(t), h = ud(t), d = hd(t), f = fd(t), p = ed(t), g = td(s), M = r.createProgram();
  let m, u, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(fi).join(`
`), m.length > 0 && (m += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(fi).join(`
`), u.length > 0 && (u += `
`)) : (m = [
    Ga(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(fi).join(`
`), u = [
    Ga(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== dn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== dn ? De.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== dn ? Jf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    De.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    jf("linearToOutputTexel", t.outputColorSpace),
    Qf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(fi).join(`
`)), a = bs(a), a = za(a, t), a = Ha(a, t), o = bs(o), o = za(o, t), o = Ha(o, t), a = Va(a), o = Va(o), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, u = [
    "#define varying in",
    t.glslVersion === Js ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Js ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + u);
  const T = A + m + a, y = A + u + o, U = Fa(r, r.VERTEX_SHADER, T), b = Fa(r, r.FRAGMENT_SHADER, y);
  r.attachShader(M, U), r.attachShader(M, b), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function C(w) {
    if (i.debug.checkShaderErrors) {
      const k = r.getProgramInfoLog(M).trim(), z = r.getShaderInfoLog(U).trim(), W = r.getShaderInfoLog(b).trim();
      let $ = !0, G = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if ($ = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, M, U, b);
        else {
          const J = Ba(r, U, "vertex"), H = Ba(r, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + k + `
` + J + `
` + H
          );
        }
      else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (z === "" || W === "") && (G = !1);
      G && (w.diagnostics = {
        runnable: $,
        programLog: k,
        vertexShader: {
          log: z,
          prefix: m
        },
        fragmentShader: {
          log: W,
          prefix: u
        }
      });
    }
    r.deleteShader(U), r.deleteShader(b), I = new Qi(r, M), S = nd(r, M);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && C(this), I;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let x = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return x === !1 && (x = r.getProgramParameter(M, Yf)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Zf++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = U, this.fragmentShader = b, this;
}
let pd = 0;
class md {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new _d(e), t.set(e, n)), n;
  }
}
class _d {
  constructor(e) {
    this.id = pd++, this.code = e, this.usedTimes = 0;
  }
}
function gd(i, e, t, n, r, s, a) {
  const o = new Ns(), l = new md(), c = /* @__PURE__ */ new Set(), h = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let p = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function M(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, x, w, k, z) {
    const W = k.fog, $ = z.geometry, G = S.isMeshStandardMaterial ? k.environment : null, J = (S.isMeshStandardMaterial ? t : e).get(S.envMap || G), H = J && J.mapping === nr ? J.image.height : null, re = g[S.type];
    S.precision !== null && (p = r.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const ue = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, ge = ue !== void 0 ? ue.length : 0;
    let Le = 0;
    $.morphAttributes.position !== void 0 && (Le = 1), $.morphAttributes.normal !== void 0 && (Le = 2), $.morphAttributes.color !== void 0 && (Le = 3);
    let Ke, q, ee, me;
    if (re) {
      const qe = Bt[re];
      Ke = qe.vertexShader, q = qe.fragmentShader;
    } else
      Ke = S.vertexShader, q = S.fragmentShader, l.update(S), ee = l.getVertexShaderID(S), me = l.getFragmentShaderID(S);
    const se = i.getRenderTarget(), ye = i.state.buffers.depth.getReversed(), Re = z.isInstancedMesh === !0, Ue = z.isBatchedMesh === !0, Qe = !!S.map, Be = !!S.matcap, it = !!J, R = !!S.aoMap, Tt = !!S.lightMap, Ne = !!S.bumpMap, Fe = !!S.normalMap, ve = !!S.displacementMap, je = !!S.emissiveMap, xe = !!S.metalnessMap, E = !!S.roughnessMap, _ = S.anisotropy > 0, N = S.clearcoat > 0, Y = S.dispersion > 0, K = S.iridescence > 0, X = S.sheen > 0, _e = S.transmission > 0, ae = _ && !!S.anisotropyMap, he = N && !!S.clearcoatMap, ze = N && !!S.clearcoatNormalMap, Q = N && !!S.clearcoatRoughnessMap, fe = K && !!S.iridescenceMap, Ee = K && !!S.iridescenceThicknessMap, Te = X && !!S.sheenColorMap, de = X && !!S.sheenRoughnessMap, Oe = !!S.specularMap, Pe = !!S.specularColorMap, $e = !!S.specularIntensityMap, P = _e && !!S.transmissionMap, ne = _e && !!S.thicknessMap, V = !!S.gradientMap, Z = !!S.alphaMap, le = S.alphaTest > 0, oe = !!S.alphaHash, we = !!S.extensions;
    let et = dn;
    S.toneMapped && (se === null || se.isXRRenderTarget === !0) && (et = i.toneMapping);
    const ht = {
      shaderID: re,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Ke,
      fragmentShader: q,
      defines: S.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: me,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: p,
      batching: Ue,
      batchingColor: Ue && z._colorsTexture !== null,
      instancing: Re,
      instancingColor: Re && z.instanceColor !== null,
      instancingMorph: Re && z.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: se === null ? i.outputColorSpace : se.isXRRenderTarget === !0 ? se.texture.colorSpace : ni,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Qe,
      matcap: Be,
      envMap: it,
      envMapMode: it && J.mapping,
      envMapCubeUVHeight: H,
      aoMap: R,
      lightMap: Tt,
      bumpMap: Ne,
      normalMap: Fe,
      displacementMap: f && ve,
      emissiveMap: je,
      normalMapObjectSpace: Fe && S.normalMapType === hl,
      normalMapTangentSpace: Fe && S.normalMapType === ul,
      metalnessMap: xe,
      roughnessMap: E,
      anisotropy: _,
      anisotropyMap: ae,
      clearcoat: N,
      clearcoatMap: he,
      clearcoatNormalMap: ze,
      clearcoatRoughnessMap: Q,
      dispersion: Y,
      iridescence: K,
      iridescenceMap: fe,
      iridescenceThicknessMap: Ee,
      sheen: X,
      sheenColorMap: Te,
      sheenRoughnessMap: de,
      specularMap: Oe,
      specularColorMap: Pe,
      specularIntensityMap: $e,
      transmission: _e,
      transmissionMap: P,
      thicknessMap: ne,
      gradientMap: V,
      opaque: S.transparent === !1 && S.blending === Zn && S.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: le,
      alphaHash: oe,
      combine: S.combine,
      //
      mapUv: Qe && M(S.map.channel),
      aoMapUv: R && M(S.aoMap.channel),
      lightMapUv: Tt && M(S.lightMap.channel),
      bumpMapUv: Ne && M(S.bumpMap.channel),
      normalMapUv: Fe && M(S.normalMap.channel),
      displacementMapUv: ve && M(S.displacementMap.channel),
      emissiveMapUv: je && M(S.emissiveMap.channel),
      metalnessMapUv: xe && M(S.metalnessMap.channel),
      roughnessMapUv: E && M(S.roughnessMap.channel),
      anisotropyMapUv: ae && M(S.anisotropyMap.channel),
      clearcoatMapUv: he && M(S.clearcoatMap.channel),
      clearcoatNormalMapUv: ze && M(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && M(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: fe && M(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ee && M(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && M(S.sheenColorMap.channel),
      sheenRoughnessMapUv: de && M(S.sheenRoughnessMap.channel),
      specularMapUv: Oe && M(S.specularMap.channel),
      specularColorMapUv: Pe && M(S.specularColorMap.channel),
      specularIntensityMapUv: $e && M(S.specularIntensityMap.channel),
      transmissionMapUv: P && M(S.transmissionMap.channel),
      thicknessMapUv: ne && M(S.thicknessMap.channel),
      alphaMapUv: Z && M(S.alphaMap.channel),
      //
      vertexTangents: !!$.attributes.tangent && (Fe || _),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4,
      pointsUvs: z.isPoints === !0 && !!$.attributes.uv && (Qe || Z),
      fog: !!W,
      useFog: S.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: ye,
      skinning: z.isSkinnedMesh === !0,
      morphTargets: $.morphAttributes.position !== void 0,
      morphNormals: $.morphAttributes.normal !== void 0,
      morphColors: $.morphAttributes.color !== void 0,
      morphTargetsCount: ge,
      morphTextureStride: Le,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && w.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: et,
      decodeVideoTexture: Qe && S.map.isVideoTexture === !0 && Ge.getTransfer(S.map.colorSpace) === Ye,
      decodeVideoTextureEmissive: je && S.emissiveMap.isVideoTexture === !0 && Ge.getTransfer(S.emissiveMap.colorSpace) === Ye,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === $t,
      flipSided: S.side === xt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: we && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (we && S.extensions.multiDraw === !0 || Ue) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return ht.vertexUv1s = c.has(1), ht.vertexUv2s = c.has(2), ht.vertexUv3s = c.has(3), c.clear(), ht;
  }
  function u(S) {
    const x = [];
    if (S.shaderID ? x.push(S.shaderID) : (x.push(S.customVertexShaderID), x.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const w in S.defines)
        x.push(w), x.push(S.defines[w]);
    return S.isRawShaderMaterial === !1 && (A(x, S), T(x, S), x.push(i.outputColorSpace)), x.push(S.customProgramCacheKey), x.join();
  }
  function A(S, x) {
    S.push(x.precision), S.push(x.outputColorSpace), S.push(x.envMapMode), S.push(x.envMapCubeUVHeight), S.push(x.mapUv), S.push(x.alphaMapUv), S.push(x.lightMapUv), S.push(x.aoMapUv), S.push(x.bumpMapUv), S.push(x.normalMapUv), S.push(x.displacementMapUv), S.push(x.emissiveMapUv), S.push(x.metalnessMapUv), S.push(x.roughnessMapUv), S.push(x.anisotropyMapUv), S.push(x.clearcoatMapUv), S.push(x.clearcoatNormalMapUv), S.push(x.clearcoatRoughnessMapUv), S.push(x.iridescenceMapUv), S.push(x.iridescenceThicknessMapUv), S.push(x.sheenColorMapUv), S.push(x.sheenRoughnessMapUv), S.push(x.specularMapUv), S.push(x.specularColorMapUv), S.push(x.specularIntensityMapUv), S.push(x.transmissionMapUv), S.push(x.thicknessMapUv), S.push(x.combine), S.push(x.fogExp2), S.push(x.sizeAttenuation), S.push(x.morphTargetsCount), S.push(x.morphAttributeCount), S.push(x.numDirLights), S.push(x.numPointLights), S.push(x.numSpotLights), S.push(x.numSpotLightMaps), S.push(x.numHemiLights), S.push(x.numRectAreaLights), S.push(x.numDirLightShadows), S.push(x.numPointLightShadows), S.push(x.numSpotLightShadows), S.push(x.numSpotLightShadowsWithMaps), S.push(x.numLightProbes), S.push(x.shadowMapType), S.push(x.toneMapping), S.push(x.numClippingPlanes), S.push(x.numClipIntersection), S.push(x.depthPacking);
  }
  function T(S, x) {
    o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reverseDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const x = g[S.type];
    let w;
    if (x) {
      const k = Bt[x];
      w = Vl.clone(k.uniforms);
    } else
      w = S.uniforms;
    return w;
  }
  function U(S, x) {
    let w;
    for (let k = 0, z = h.length; k < z; k++) {
      const W = h[k];
      if (W.cacheKey === x) {
        w = W, ++w.usedTimes;
        break;
      }
    }
    return w === void 0 && (w = new dd(i, x, S, s), h.push(w)), w;
  }
  function b(S) {
    if (--S.usedTimes === 0) {
      const x = h.indexOf(S);
      h[x] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function C(S) {
    l.remove(S);
  }
  function I() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: u,
    getUniforms: y,
    acquireProgram: U,
    releaseProgram: b,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: I
  };
}
function vd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function xd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ka(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Wa() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(d, f, p, g, M, m) {
    let u = i[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: f,
      material: p,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: M,
      group: m
    }, i[e] = u) : (u.id = d.id, u.object = d, u.geometry = f, u.material = p, u.groupOrder = g, u.renderOrder = d.renderOrder, u.z = M, u.group = m), e++, u;
  }
  function o(d, f, p, g, M, m) {
    const u = a(d, f, p, g, M, m);
    p.transmission > 0 ? n.push(u) : p.transparent === !0 ? r.push(u) : t.push(u);
  }
  function l(d, f, p, g, M, m) {
    const u = a(d, f, p, g, M, m);
    p.transmission > 0 ? n.unshift(u) : p.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || xd), n.length > 1 && n.sort(f || ka), r.length > 1 && r.sort(f || ka);
  }
  function h() {
    for (let d = e, f = i.length; d < f; d++) {
      const p = i[d];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Md() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Wa(), i.set(n, [a])) : r >= s.length ? (a = new Wa(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Sd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new O(),
            color: new ke()
          };
          break;
        case "SpotLight":
          t = {
            position: new O(),
            direction: new O(),
            color: new ke(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new O(),
            color: new ke(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new O(),
            skyColor: new ke(),
            groundColor: new ke()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ke(),
            position: new O(),
            halfWidth: new O(),
            halfHeight: new O()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Ed() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let yd = 0;
function Td(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Ad(i) {
  const e = new Sd(), t = Ed(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new O());
  const r = new O(), s = new nt(), a = new nt();
  function o(c) {
    let h = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, g = 0, M = 0, m = 0, u = 0, A = 0, T = 0, y = 0, U = 0, b = 0, C = 0;
    c.sort(Td);
    for (let S = 0, x = c.length; S < x; S++) {
      const w = c[S], k = w.color, z = w.intensity, W = w.distance, $ = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
      if (w.isAmbientLight)
        h += k.r * z, d += k.g * z, f += k.b * z;
      else if (w.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(w.sh.coefficients[G], z);
        C++;
      } else if (w.isDirectionalLight) {
        const G = e.get(w);
        if (G.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow) {
          const J = w.shadow, H = t.get(w);
          H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = $, n.directionalShadowMatrix[p] = w.shadow.matrix, A++;
        }
        n.directional[p] = G, p++;
      } else if (w.isSpotLight) {
        const G = e.get(w);
        G.position.setFromMatrixPosition(w.matrixWorld), G.color.copy(k).multiplyScalar(z), G.distance = W, G.coneCos = Math.cos(w.angle), G.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), G.decay = w.decay, n.spot[M] = G;
        const J = w.shadow;
        if (w.map && (n.spotLightMap[U] = w.map, U++, J.updateMatrices(w), w.castShadow && b++), n.spotLightMatrix[M] = J.matrix, w.castShadow) {
          const H = t.get(w);
          H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, n.spotShadow[M] = H, n.spotShadowMap[M] = $, y++;
        }
        M++;
      } else if (w.isRectAreaLight) {
        const G = e.get(w);
        G.color.copy(k).multiplyScalar(z), G.halfWidth.set(w.width * 0.5, 0, 0), G.halfHeight.set(0, w.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (w.isPointLight) {
        const G = e.get(w);
        if (G.color.copy(w.color).multiplyScalar(w.intensity), G.distance = w.distance, G.decay = w.decay, w.castShadow) {
          const J = w.shadow, H = t.get(w);
          H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, H.shadowCameraNear = J.camera.near, H.shadowCameraFar = J.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = w.shadow.matrix, T++;
        }
        n.point[g] = G, g++;
      } else if (w.isHemisphereLight) {
        const G = e.get(w);
        G.skyColor.copy(w.color).multiplyScalar(z), G.groundColor.copy(w.groundColor).multiplyScalar(z), n.hemi[u] = G, u++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = te.LTC_FLOAT_1, n.rectAreaLTC2 = te.LTC_FLOAT_2) : (n.rectAreaLTC1 = te.LTC_HALF_1, n.rectAreaLTC2 = te.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = d, n.ambient[2] = f;
    const I = n.hash;
    (I.directionalLength !== p || I.pointLength !== g || I.spotLength !== M || I.rectAreaLength !== m || I.hemiLength !== u || I.numDirectionalShadows !== A || I.numPointShadows !== T || I.numSpotShadows !== y || I.numSpotMaps !== U || I.numLightProbes !== C) && (n.directional.length = p, n.spot.length = M, n.rectArea.length = m, n.point.length = g, n.hemi.length = u, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + U - b, n.spotLightMap.length = U, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = C, I.directionalLength = p, I.pointLength = g, I.spotLength = M, I.rectAreaLength = m, I.hemiLength = u, I.numDirectionalShadows = A, I.numPointShadows = T, I.numSpotShadows = y, I.numSpotMaps = U, I.numLightProbes = C, n.version = yd++);
  }
  function l(c, h) {
    let d = 0, f = 0, p = 0, g = 0, M = 0;
    const m = h.matrixWorldInverse;
    for (let u = 0, A = c.length; u < A; u++) {
      const T = c[u];
      if (T.isDirectionalLight) {
        const y = n.directional[d];
        y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), d++;
      } else if (T.isSpotLight) {
        const y = n.spot[p];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), a.identity(), s.copy(T.matrixWorld), s.premultiply(m), a.extractRotation(s), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), f++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[M];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(m), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Xa(i) {
  const e = new Ad(i), t = [], n = [];
  function r(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function bd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Xa(i), e.set(r, [o])) : s >= a.length ? (o = new Xa(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Rd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, wd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Cd(i, e, t) {
  let n = new _o();
  const r = new Ze(), s = new Ze(), a = new rt(), o = new jl({ depthPacking: cl }), l = new Jl(), c = {}, h = t.maxTextureSize, d = { [pn]: xt, [xt]: pn, [$t]: $t }, f = new rn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ze() },
      radius: { value: 4 }
    },
    vertexShader: Rd,
    fragmentShader: wd
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Gt();
  g.setAttribute(
    "position",
    new Vt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new Ht(g, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = qa;
  let u = this.type;
  this.render = function(b, C, I) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || b.length === 0) return;
    const S = i.getRenderTarget(), x = i.getActiveCubeFace(), w = i.getActiveMipmapLevel(), k = i.state;
    k.setBlending(fn), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1);
    const z = u !== Kt && this.type === Kt, W = u === Kt && this.type !== Kt;
    for (let $ = 0, G = b.length; $ < G; $++) {
      const J = b[$], H = J.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const re = H.getFrameExtents();
      if (r.multiply(re), s.copy(H.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / re.x), r.x = s.x * re.x, H.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / re.y), r.y = s.y * re.y, H.mapSize.y = s.y)), H.map === null || z === !0 || W === !0) {
        const ge = this.type !== Kt ? { minFilter: Ot, magFilter: Ot } : {};
        H.map !== null && H.map.dispose(), H.map = new Pn(r.x, r.y, ge), H.map.texture.name = J.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(H.map), i.clear();
      const ue = H.getViewportCount();
      for (let ge = 0; ge < ue; ge++) {
        const Le = H.getViewport(ge);
        a.set(
          s.x * Le.x,
          s.y * Le.y,
          s.x * Le.z,
          s.y * Le.w
        ), k.viewport(a), H.updateMatrices(J, ge), n = H.getFrustum(), y(C, I, H.camera, J, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === Kt && A(H, I), H.needsUpdate = !1;
    }
    u = this.type, m.needsUpdate = !1, i.setRenderTarget(S, x, w);
  };
  function A(b, C) {
    const I = e.update(M);
    f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples, p.defines.VSM_SAMPLES = b.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Pn(r.x, r.y)), f.uniforms.shadow_pass.value = b.map.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, i.setRenderTarget(b.mapPass), i.clear(), i.renderBufferDirect(C, null, I, f, M, null), p.uniforms.shadow_pass.value = b.mapPass.texture, p.uniforms.resolution.value = b.mapSize, p.uniforms.radius.value = b.radius, i.setRenderTarget(b.map), i.clear(), i.renderBufferDirect(C, null, I, p, M, null);
  }
  function T(b, C, I, S) {
    let x = null;
    const w = I.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (w !== void 0)
      x = w;
    else if (x = I.isPointLight === !0 ? l : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const k = x.uuid, z = C.uuid;
      let W = c[k];
      W === void 0 && (W = {}, c[k] = W);
      let $ = W[z];
      $ === void 0 && ($ = x.clone(), W[z] = $, C.addEventListener("dispose", U)), x = $;
    }
    if (x.visible = C.visible, x.wireframe = C.wireframe, S === Kt ? x.side = C.shadowSide !== null ? C.shadowSide : C.side : x.side = C.shadowSide !== null ? C.shadowSide : d[C.side], x.alphaMap = C.alphaMap, x.alphaTest = C.alphaTest, x.map = C.map, x.clipShadows = C.clipShadows, x.clippingPlanes = C.clippingPlanes, x.clipIntersection = C.clipIntersection, x.displacementMap = C.displacementMap, x.displacementScale = C.displacementScale, x.displacementBias = C.displacementBias, x.wireframeLinewidth = C.wireframeLinewidth, x.linewidth = C.linewidth, I.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
      const k = i.properties.get(x);
      k.light = I;
    }
    return x;
  }
  function y(b, C, I, S, x) {
    if (b.visible === !1) return;
    if (b.layers.test(C.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && x === Kt) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, b.matrixWorld);
      const z = e.update(b), W = b.material;
      if (Array.isArray(W)) {
        const $ = z.groups;
        for (let G = 0, J = $.length; G < J; G++) {
          const H = $[G], re = W[H.materialIndex];
          if (re && re.visible) {
            const ue = T(b, re, S, x);
            b.onBeforeShadow(i, b, C, I, z, ue, H), i.renderBufferDirect(I, null, z, ue, b, H), b.onAfterShadow(i, b, C, I, z, ue, H);
          }
        }
      } else if (W.visible) {
        const $ = T(b, W, S, x);
        b.onBeforeShadow(i, b, C, I, z, $, null), i.renderBufferDirect(I, null, z, $, b, null), b.onAfterShadow(i, b, C, I, z, $, null);
      }
    }
    const k = b.children;
    for (let z = 0, W = k.length; z < W; z++)
      y(k[z], C, I, S, x);
  }
  function U(b) {
    b.target.removeEventListener("dispose", U);
    for (const I in c) {
      const S = c[I], x = b.target.uuid;
      x in S && (S[x].dispose(), delete S[x]);
    }
  }
}
const Pd = {
  [Hr]: Vr,
  [Gr]: Xr,
  [kr]: qr,
  [jn]: Wr,
  [Vr]: Hr,
  [Xr]: Gr,
  [qr]: kr,
  [Wr]: jn
};
function Dd(i, e) {
  function t() {
    let P = !1;
    const ne = new rt();
    let V = null;
    const Z = new rt(0, 0, 0, 0);
    return {
      setMask: function(le) {
        V !== le && !P && (i.colorMask(le, le, le, le), V = le);
      },
      setLocked: function(le) {
        P = le;
      },
      setClear: function(le, oe, we, et, ht) {
        ht === !0 && (le *= et, oe *= et, we *= et), ne.set(le, oe, we, et), Z.equals(ne) === !1 && (i.clearColor(le, oe, we, et), Z.copy(ne));
      },
      reset: function() {
        P = !1, V = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, ne = !1, V = null, Z = null, le = null;
    return {
      setReversed: function(oe) {
        if (ne !== oe) {
          const we = e.get("EXT_clip_control");
          ne ? we.clipControlEXT(we.LOWER_LEFT_EXT, we.ZERO_TO_ONE_EXT) : we.clipControlEXT(we.LOWER_LEFT_EXT, we.NEGATIVE_ONE_TO_ONE_EXT);
          const et = le;
          le = null, this.setClear(et);
        }
        ne = oe;
      },
      getReversed: function() {
        return ne;
      },
      setTest: function(oe) {
        oe ? se(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function(oe) {
        V !== oe && !P && (i.depthMask(oe), V = oe);
      },
      setFunc: function(oe) {
        if (ne && (oe = Pd[oe]), Z !== oe) {
          switch (oe) {
            case Hr:
              i.depthFunc(i.NEVER);
              break;
            case Vr:
              i.depthFunc(i.ALWAYS);
              break;
            case Gr:
              i.depthFunc(i.LESS);
              break;
            case jn:
              i.depthFunc(i.LEQUAL);
              break;
            case kr:
              i.depthFunc(i.EQUAL);
              break;
            case Wr:
              i.depthFunc(i.GEQUAL);
              break;
            case Xr:
              i.depthFunc(i.GREATER);
              break;
            case qr:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Z = oe;
        }
      },
      setLocked: function(oe) {
        P = oe;
      },
      setClear: function(oe) {
        le !== oe && (ne && (oe = 1 - oe), i.clearDepth(oe), le = oe);
      },
      reset: function() {
        P = !1, V = null, Z = null, le = null, ne = !1;
      }
    };
  }
  function r() {
    let P = !1, ne = null, V = null, Z = null, le = null, oe = null, we = null, et = null, ht = null;
    return {
      setTest: function(qe) {
        P || (qe ? se(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function(qe) {
        ne !== qe && !P && (i.stencilMask(qe), ne = qe);
      },
      setFunc: function(qe, Pt, kt) {
        (V !== qe || Z !== Pt || le !== kt) && (i.stencilFunc(qe, Pt, kt), V = qe, Z = Pt, le = kt);
      },
      setOp: function(qe, Pt, kt) {
        (oe !== qe || we !== Pt || et !== kt) && (i.stencilOp(qe, Pt, kt), oe = qe, we = Pt, et = kt);
      },
      setLocked: function(qe) {
        P = qe;
      },
      setClear: function(qe) {
        ht !== qe && (i.clearStencil(qe), ht = qe);
      },
      reset: function() {
        P = !1, ne = null, V = null, Z = null, le = null, oe = null, we = null, et = null, ht = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, M = !1, m = null, u = null, A = null, T = null, y = null, U = null, b = null, C = new ke(0, 0, 0), I = 0, S = !1, x = null, w = null, k = null, z = null, W = null;
  const $ = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = !1, J = 0;
  const H = i.getParameter(i.VERSION);
  H.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(H)[1]), G = J >= 1) : H.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), G = J >= 2);
  let re = null, ue = {};
  const ge = i.getParameter(i.SCISSOR_BOX), Le = i.getParameter(i.VIEWPORT), Ke = new rt().fromArray(ge), q = new rt().fromArray(Le);
  function ee(P, ne, V, Z) {
    const le = new Uint8Array(4), oe = i.createTexture();
    i.bindTexture(P, oe), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let we = 0; we < V; we++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(ne, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(ne + we, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
    return oe;
  }
  const me = {};
  me[i.TEXTURE_2D] = ee(i.TEXTURE_2D, i.TEXTURE_2D, 1), me[i.TEXTURE_CUBE_MAP] = ee(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), me[i.TEXTURE_2D_ARRAY] = ee(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), me[i.TEXTURE_3D] = ee(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), se(i.DEPTH_TEST), a.setFunc(jn), Ne(!1), Fe(Ys), se(i.CULL_FACE), R(fn);
  function se(P) {
    h[P] !== !0 && (i.enable(P), h[P] = !0);
  }
  function ye(P) {
    h[P] !== !1 && (i.disable(P), h[P] = !1);
  }
  function Re(P, ne) {
    return d[P] !== ne ? (i.bindFramebuffer(P, ne), d[P] = ne, P === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ne), P === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ne), !0) : !1;
  }
  function Ue(P, ne) {
    let V = p, Z = !1;
    if (P) {
      V = f.get(ne), V === void 0 && (V = [], f.set(ne, V));
      const le = P.textures;
      if (V.length !== le.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let oe = 0, we = le.length; oe < we; oe++)
          V[oe] = i.COLOR_ATTACHMENT0 + oe;
        V.length = le.length, Z = !0;
      }
    } else
      V[0] !== i.BACK && (V[0] = i.BACK, Z = !0);
    Z && i.drawBuffers(V);
  }
  function Qe(P) {
    return g !== P ? (i.useProgram(P), g = P, !0) : !1;
  }
  const Be = {
    [An]: i.FUNC_ADD,
    [No]: i.FUNC_SUBTRACT,
    [Fo]: i.FUNC_REVERSE_SUBTRACT
  };
  Be[Oo] = i.MIN, Be[Bo] = i.MAX;
  const it = {
    [zo]: i.ZERO,
    [Ho]: i.ONE,
    [Vo]: i.SRC_COLOR,
    [Br]: i.SRC_ALPHA,
    [Yo]: i.SRC_ALPHA_SATURATE,
    [Xo]: i.DST_COLOR,
    [ko]: i.DST_ALPHA,
    [Go]: i.ONE_MINUS_SRC_COLOR,
    [zr]: i.ONE_MINUS_SRC_ALPHA,
    [qo]: i.ONE_MINUS_DST_COLOR,
    [Wo]: i.ONE_MINUS_DST_ALPHA,
    [Zo]: i.CONSTANT_COLOR,
    [Ko]: i.ONE_MINUS_CONSTANT_COLOR,
    [$o]: i.CONSTANT_ALPHA,
    [jo]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(P, ne, V, Z, le, oe, we, et, ht, qe) {
    if (P === fn) {
      M === !0 && (ye(i.BLEND), M = !1);
      return;
    }
    if (M === !1 && (se(i.BLEND), M = !0), P !== Io) {
      if (P !== m || qe !== S) {
        if ((u !== An || y !== An) && (i.blendEquation(i.FUNC_ADD), u = An, y = An), qe)
          switch (P) {
            case Zn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Or:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Zs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ks:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case Zn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Or:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Zs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ks:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        A = null, T = null, U = null, b = null, C.set(0, 0, 0), I = 0, m = P, S = qe;
      }
      return;
    }
    le = le || ne, oe = oe || V, we = we || Z, (ne !== u || le !== y) && (i.blendEquationSeparate(Be[ne], Be[le]), u = ne, y = le), (V !== A || Z !== T || oe !== U || we !== b) && (i.blendFuncSeparate(it[V], it[Z], it[oe], it[we]), A = V, T = Z, U = oe, b = we), (et.equals(C) === !1 || ht !== I) && (i.blendColor(et.r, et.g, et.b, ht), C.copy(et), I = ht), m = P, S = !1;
  }
  function Tt(P, ne) {
    P.side === $t ? ye(i.CULL_FACE) : se(i.CULL_FACE);
    let V = P.side === xt;
    ne && (V = !V), Ne(V), P.blending === Zn && P.transparent === !1 ? R(fn) : R(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const Z = P.stencilWrite;
    o.setTest(Z), Z && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), je(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? se(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ne(P) {
    x !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = P);
  }
  function Fe(P) {
    P !== Do ? (se(i.CULL_FACE), P !== w && (P === Ys ? i.cullFace(i.BACK) : P === Lo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), w = P;
  }
  function ve(P) {
    P !== k && (G && i.lineWidth(P), k = P);
  }
  function je(P, ne, V) {
    P ? (se(i.POLYGON_OFFSET_FILL), (z !== ne || W !== V) && (i.polygonOffset(ne, V), z = ne, W = V)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function xe(P) {
    P ? se(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function E(P) {
    P === void 0 && (P = i.TEXTURE0 + $ - 1), re !== P && (i.activeTexture(P), re = P);
  }
  function _(P, ne, V) {
    V === void 0 && (re === null ? V = i.TEXTURE0 + $ - 1 : V = re);
    let Z = ue[V];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, ue[V] = Z), (Z.type !== P || Z.texture !== ne) && (re !== V && (i.activeTexture(V), re = V), i.bindTexture(P, ne || me[P]), Z.type = P, Z.texture = ne);
  }
  function N() {
    const P = ue[re];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function Y() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function K() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function X() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function _e() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function he() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ze() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Q() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function fe() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ee() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Te(P) {
    Ke.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), Ke.copy(P));
  }
  function de(P) {
    q.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), q.copy(P));
  }
  function Oe(P, ne) {
    let V = c.get(ne);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), c.set(ne, V));
    let Z = V.get(P);
    Z === void 0 && (Z = i.getUniformBlockIndex(ne, P.name), V.set(P, Z));
  }
  function Pe(P, ne) {
    const Z = c.get(ne).get(P);
    l.get(ne) !== Z && (i.uniformBlockBinding(ne, Z, P.__bindingPointIndex), l.set(ne, Z));
  }
  function $e() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, re = null, ue = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, M = !1, m = null, u = null, A = null, T = null, y = null, U = null, b = null, C = new ke(0, 0, 0), I = 0, S = !1, x = null, w = null, k = null, z = null, W = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), q.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: se,
    disable: ye,
    bindFramebuffer: Re,
    drawBuffers: Ue,
    useProgram: Qe,
    setBlending: R,
    setMaterial: Tt,
    setFlipSided: Ne,
    setCullFace: Fe,
    setLineWidth: ve,
    setPolygonOffset: je,
    setScissorTest: xe,
    activeTexture: E,
    bindTexture: _,
    unbindTexture: N,
    compressedTexImage2D: Y,
    compressedTexImage3D: K,
    texImage2D: fe,
    texImage3D: Ee,
    updateUBOMapping: Oe,
    uniformBlockBinding: Pe,
    texStorage2D: ze,
    texStorage3D: Q,
    texSubImage2D: X,
    texSubImage3D: _e,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: he,
    scissor: Te,
    viewport: de,
    reset: $e
  };
}
function Ld(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Ze(), h = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : pi("canvas");
  }
  function M(E, _, N) {
    let Y = 1;
    const K = xe(E);
    if ((K.width > N || K.height > N) && (Y = N / Math.max(K.width, K.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const X = Math.floor(Y * K.width), _e = Math.floor(Y * K.height);
        d === void 0 && (d = g(X, _e));
        const ae = _ ? g(X, _e) : d;
        return ae.width = X, ae.height = _e, ae.getContext("2d").drawImage(E, 0, 0, X, _e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + X + "x" + _e + ")."), ae;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function u(E) {
    i.generateMipmap(E);
  }
  function A(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, _, N, Y, K = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = _;
    if (_ === i.RED && (N === i.FLOAT && (X = i.R32F), N === i.HALF_FLOAT && (X = i.R16F), N === i.UNSIGNED_BYTE && (X = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.R8UI), N === i.UNSIGNED_SHORT && (X = i.R16UI), N === i.UNSIGNED_INT && (X = i.R32UI), N === i.BYTE && (X = i.R8I), N === i.SHORT && (X = i.R16I), N === i.INT && (X = i.R32I)), _ === i.RG && (N === i.FLOAT && (X = i.RG32F), N === i.HALF_FLOAT && (X = i.RG16F), N === i.UNSIGNED_BYTE && (X = i.RG8)), _ === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RG8UI), N === i.UNSIGNED_SHORT && (X = i.RG16UI), N === i.UNSIGNED_INT && (X = i.RG32UI), N === i.BYTE && (X = i.RG8I), N === i.SHORT && (X = i.RG16I), N === i.INT && (X = i.RG32I)), _ === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RGB8UI), N === i.UNSIGNED_SHORT && (X = i.RGB16UI), N === i.UNSIGNED_INT && (X = i.RGB32UI), N === i.BYTE && (X = i.RGB8I), N === i.SHORT && (X = i.RGB16I), N === i.INT && (X = i.RGB32I)), _ === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RGBA8UI), N === i.UNSIGNED_SHORT && (X = i.RGBA16UI), N === i.UNSIGNED_INT && (X = i.RGBA32UI), N === i.BYTE && (X = i.RGBA8I), N === i.SHORT && (X = i.RGBA16I), N === i.INT && (X = i.RGBA32I)), _ === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5), _ === i.RGBA) {
      const _e = K ? er : Ge.getTransfer(Y);
      N === i.FLOAT && (X = i.RGBA32F), N === i.HALF_FLOAT && (X = i.RGBA16F), N === i.UNSIGNED_BYTE && (X = _e === Ye ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (X === i.R16F || X === i.R32F || X === i.RG16F || X === i.RG32F || X === i.RGBA16F || X === i.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function y(E, _) {
    let N;
    return E ? _ === null || _ === Cn || _ === ei ? N = i.DEPTH24_STENCIL8 : _ === jt ? N = i.DEPTH32F_STENCIL8 : _ === di && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Cn || _ === ei ? N = i.DEPTH_COMPONENT24 : _ === jt ? N = i.DEPTH_COMPONENT32F : _ === di && (N = i.DEPTH_COMPONENT16), N;
  }
  function U(E, _) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== Ot && E.minFilter !== zt ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function b(E) {
    const _ = E.target;
    _.removeEventListener("dispose", b), I(_), _.isVideoTexture && h.delete(_);
  }
  function C(E) {
    const _ = E.target;
    _.removeEventListener("dispose", C), x(_);
  }
  function I(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const N = E.source, Y = f.get(N);
    if (Y) {
      const K = Y[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && S(E), Object.keys(Y).length === 0 && f.delete(N);
    }
    n.remove(E);
  }
  function S(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const N = E.source, Y = f.get(N);
    delete Y[_.__cacheKey], a.memory.textures--;
  }
  function x(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(_.__webglFramebuffer[Y]))
          for (let K = 0; K < _.__webglFramebuffer[Y].length; K++) i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[Y]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let Y = 0; Y < _.__webglFramebuffer.length; Y++) i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
          _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const N = E.textures;
    for (let Y = 0, K = N.length; Y < K; Y++) {
      const X = n.get(N[Y]);
      X.__webglTexture && (i.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(N[Y]);
    }
    n.remove(E);
  }
  let w = 0;
  function k() {
    w = 0;
  }
  function z() {
    const E = w;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), w += 1, E;
  }
  function W(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function $(E, _) {
    const N = n.get(E);
    if (E.isVideoTexture && ve(E), E.isRenderTargetTexture === !1 && E.version > 0 && N.__version !== E.version) {
      const Y = E.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(N, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function G(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      q(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function J(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      q(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function H(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ee(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const re = {
    [Kr]: i.REPEAT,
    [Rn]: i.CLAMP_TO_EDGE,
    [$r]: i.MIRRORED_REPEAT
  }, ue = {
    [Ot]: i.NEAREST,
    [ol]: i.NEAREST_MIPMAP_NEAREST,
    [Ti]: i.NEAREST_MIPMAP_LINEAR,
    [zt]: i.LINEAR,
    [or]: i.LINEAR_MIPMAP_NEAREST,
    [wn]: i.LINEAR_MIPMAP_LINEAR
  }, ge = {
    [fl]: i.NEVER,
    [vl]: i.ALWAYS,
    [dl]: i.LESS,
    [so]: i.LEQUAL,
    [pl]: i.EQUAL,
    [gl]: i.GEQUAL,
    [ml]: i.GREATER,
    [_l]: i.NOTEQUAL
  };
  function Le(E, _) {
    if (_.type === jt && e.has("OES_texture_float_linear") === !1 && (_.magFilter === zt || _.magFilter === or || _.magFilter === Ti || _.magFilter === wn || _.minFilter === zt || _.minFilter === or || _.minFilter === Ti || _.minFilter === wn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, re[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, re[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, re[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ue[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ue[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, ge[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === Ot || _.minFilter !== Ti && _.minFilter !== wn || _.type === jt && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Ke(E, _) {
    let N = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", b));
    const Y = _.source;
    let K = f.get(Y);
    K === void 0 && (K = {}, f.set(Y, K));
    const X = W(_);
    if (X !== E.__cacheKey) {
      K[X] === void 0 && (K[X] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), K[X].usedTimes++;
      const _e = K[E.__cacheKey];
      _e !== void 0 && (K[E.__cacheKey].usedTimes--, _e.usedTimes === 0 && S(_)), E.__cacheKey = X, E.__webglTexture = K[X].texture;
    }
    return N;
  }
  function q(E, _, N) {
    let Y = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Y = i.TEXTURE_3D);
    const K = Ke(E, _), X = _.source;
    t.bindTexture(Y, E.__webglTexture, i.TEXTURE0 + N);
    const _e = n.get(X);
    if (X.version !== _e.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const ae = Ge.getPrimaries(Ge.workingColorSpace), he = _.colorSpace === hn ? null : Ge.getPrimaries(_.colorSpace), ze = _.colorSpace === hn || ae === he ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ze);
      let Q = M(_.image, !1, r.maxTextureSize);
      Q = je(_, Q);
      const fe = s.convert(_.format, _.colorSpace), Ee = s.convert(_.type);
      let Te = T(_.internalFormat, fe, Ee, _.colorSpace, _.isVideoTexture);
      Le(Y, _);
      let de;
      const Oe = _.mipmaps, Pe = _.isVideoTexture !== !0, $e = _e.__version === void 0 || K === !0, P = X.dataReady, ne = U(_, Q);
      if (_.isDepthTexture)
        Te = y(_.format === ti, _.type), $e && (Pe ? t.texStorage2D(i.TEXTURE_2D, 1, Te, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, Te, Q.width, Q.height, 0, fe, Ee, null));
      else if (_.isDataTexture)
        if (Oe.length > 0) {
          Pe && $e && t.texStorage2D(i.TEXTURE_2D, ne, Te, Oe[0].width, Oe[0].height);
          for (let V = 0, Z = Oe.length; V < Z; V++)
            de = Oe[V], Pe ? P && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, fe, Ee, de.data) : t.texImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, fe, Ee, de.data);
          _.generateMipmaps = !1;
        } else
          Pe ? ($e && t.texStorage2D(i.TEXTURE_2D, ne, Te, Q.width, Q.height), P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, fe, Ee, Q.data)) : t.texImage2D(i.TEXTURE_2D, 0, Te, Q.width, Q.height, 0, fe, Ee, Q.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Pe && $e && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, Oe[0].width, Oe[0].height, Q.depth);
          for (let V = 0, Z = Oe.length; V < Z; V++)
            if (de = Oe[V], _.format !== Ft)
              if (fe !== null)
                if (Pe) {
                  if (P)
                    if (_.layerUpdates.size > 0) {
                      const le = Sa(de.width, de.height, _.format, _.type);
                      for (const oe of _.layerUpdates) {
                        const we = de.data.subarray(
                          oe * le / de.data.BYTES_PER_ELEMENT,
                          (oe + 1) * le / de.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, oe, de.width, de.height, 1, fe, we);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, Q.depth, fe, de.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, Te, de.width, de.height, Q.depth, 0, de.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Pe ? P && t.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, Q.depth, fe, Ee, de.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, V, Te, de.width, de.height, Q.depth, 0, fe, Ee, de.data);
        } else {
          Pe && $e && t.texStorage2D(i.TEXTURE_2D, ne, Te, Oe[0].width, Oe[0].height);
          for (let V = 0, Z = Oe.length; V < Z; V++)
            de = Oe[V], _.format !== Ft ? fe !== null ? Pe ? P && t.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, fe, de.data) : t.compressedTexImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? P && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, fe, Ee, de.data) : t.texImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, fe, Ee, de.data);
        }
      else if (_.isDataArrayTexture)
        if (Pe) {
          if ($e && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, Q.width, Q.height, Q.depth), P)
            if (_.layerUpdates.size > 0) {
              const V = Sa(Q.width, Q.height, _.format, _.type);
              for (const Z of _.layerUpdates) {
                const le = Q.data.subarray(
                  Z * V / Q.data.BYTES_PER_ELEMENT,
                  (Z + 1) * V / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Z, Q.width, Q.height, 1, fe, Ee, le);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, Ee, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Te, Q.width, Q.height, Q.depth, 0, fe, Ee, Q.data);
      else if (_.isData3DTexture)
        Pe ? ($e && t.texStorage3D(i.TEXTURE_3D, ne, Te, Q.width, Q.height, Q.depth), P && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, Ee, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, Te, Q.width, Q.height, Q.depth, 0, fe, Ee, Q.data);
      else if (_.isFramebufferTexture) {
        if ($e)
          if (Pe)
            t.texStorage2D(i.TEXTURE_2D, ne, Te, Q.width, Q.height);
          else {
            let V = Q.width, Z = Q.height;
            for (let le = 0; le < ne; le++)
              t.texImage2D(i.TEXTURE_2D, le, Te, V, Z, 0, fe, Ee, null), V >>= 1, Z >>= 1;
          }
      } else if (Oe.length > 0) {
        if (Pe && $e) {
          const V = xe(Oe[0]);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        for (let V = 0, Z = Oe.length; V < Z; V++)
          de = Oe[V], Pe ? P && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, fe, Ee, de) : t.texImage2D(i.TEXTURE_2D, V, Te, fe, Ee, de);
        _.generateMipmaps = !1;
      } else if (Pe) {
        if ($e) {
          const V = xe(Q);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, Ee, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Te, fe, Ee, Q);
      m(_) && u(Y), _e.__version = X.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ee(E, _, N) {
    if (_.image.length !== 6) return;
    const Y = Ke(E, _), K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const X = n.get(K);
    if (K.version !== X.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const _e = Ge.getPrimaries(Ge.workingColorSpace), ae = _.colorSpace === hn ? null : Ge.getPrimaries(_.colorSpace), he = _.colorSpace === hn || _e === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      const ze = _.isCompressedTexture || _.image[0].isCompressedTexture, Q = _.image[0] && _.image[0].isDataTexture, fe = [];
      for (let Z = 0; Z < 6; Z++)
        !ze && !Q ? fe[Z] = M(_.image[Z], !0, r.maxCubemapSize) : fe[Z] = Q ? _.image[Z].image : _.image[Z], fe[Z] = je(_, fe[Z]);
      const Ee = fe[0], Te = s.convert(_.format, _.colorSpace), de = s.convert(_.type), Oe = T(_.internalFormat, Te, de, _.colorSpace), Pe = _.isVideoTexture !== !0, $e = X.__version === void 0 || Y === !0, P = K.dataReady;
      let ne = U(_, Ee);
      Le(i.TEXTURE_CUBE_MAP, _);
      let V;
      if (ze) {
        Pe && $e && t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Oe, Ee.width, Ee.height);
        for (let Z = 0; Z < 6; Z++) {
          V = fe[Z].mipmaps;
          for (let le = 0; le < V.length; le++) {
            const oe = V[le];
            _.format !== Ft ? Te !== null ? Pe ? P && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le, 0, 0, oe.width, oe.height, Te, oe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le, Oe, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le, 0, 0, oe.width, oe.height, Te, de, oe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le, Oe, oe.width, oe.height, 0, Te, de, oe.data);
          }
        }
      } else {
        if (V = _.mipmaps, Pe && $e) {
          V.length > 0 && ne++;
          const Z = xe(fe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Oe, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (Q) {
            Pe ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, fe[Z].width, fe[Z].height, Te, de, fe[Z].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Oe, fe[Z].width, fe[Z].height, 0, Te, de, fe[Z].data);
            for (let le = 0; le < V.length; le++) {
              const we = V[le].image[Z].image;
              Pe ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le + 1, 0, 0, we.width, we.height, Te, de, we.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le + 1, Oe, we.width, we.height, 0, Te, de, we.data);
            }
          } else {
            Pe ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Te, de, fe[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Oe, Te, de, fe[Z]);
            for (let le = 0; le < V.length; le++) {
              const oe = V[le];
              Pe ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le + 1, 0, 0, Te, de, oe.image[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, le + 1, Oe, Te, de, oe.image[Z]);
            }
          }
      }
      m(_) && u(i.TEXTURE_CUBE_MAP), X.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function me(E, _, N, Y, K, X) {
    const _e = s.convert(N.format, N.colorSpace), ae = s.convert(N.type), he = T(N.internalFormat, _e, ae, N.colorSpace), ze = n.get(_), Q = n.get(N);
    if (Q.__renderTarget = _, !ze.__hasExternalTextures) {
      const fe = Math.max(1, _.width >> X), Ee = Math.max(1, _.height >> X);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, X, he, fe, Ee, _.depth, 0, _e, ae, null) : t.texImage2D(K, X, he, fe, Ee, 0, _e, ae, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), Fe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, K, Q.__webglTexture, 0, Ne(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, K, Q.__webglTexture, X), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function se(E, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const Y = _.depthTexture, K = Y && Y.isDepthTexture ? Y.type : null, X = y(_.stencilBuffer, K), _e = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = Ne(_);
      Fe(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ae, X, _.width, _.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, X, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, X, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, _e, i.RENDERBUFFER, E);
    } else {
      const Y = _.textures;
      for (let K = 0; K < Y.length; K++) {
        const X = Y[K], _e = s.convert(X.format, X.colorSpace), ae = s.convert(X.type), he = T(X.internalFormat, _e, ae, X.colorSpace), ze = Ne(_);
        N && Fe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ze, he, _.width, _.height) : Fe(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ze, he, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, he, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ye(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = n.get(_.depthTexture);
    Y.__renderTarget = _, (!Y.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), $(_.depthTexture, 0);
    const K = Y.__webglTexture, X = Ne(_);
    if (_.depthTexture.format === Kn)
      Fe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (_.depthTexture.format === ti)
      Fe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Re(E) {
    const _ = n.get(E), N = E.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), Y) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, Y.removeEventListener("dispose", K);
        };
        Y.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ye(_.__webglFramebuffer, E);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]), _.__webglDepthbuffer[Y] === void 0)
          _.__webglDepthbuffer[Y] = i.createRenderbuffer(), se(_.__webglDepthbuffer[Y], E, !1);
        else {
          const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = _.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, X);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
      _.__webglDepthbuffer = i.createRenderbuffer(), se(_.__webglDepthbuffer, E, !1);
    else {
      const Y = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, K = _.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, K), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, K);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ue(E, _, N) {
    const Y = n.get(E);
    _ !== void 0 && me(Y.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Re(E);
  }
  function Qe(E) {
    const _ = E.texture, N = n.get(E), Y = n.get(_);
    E.addEventListener("dispose", C);
    const K = E.textures, X = E.isWebGLCubeRenderTarget === !0, _e = K.length > 1;
    if (_e || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = _.version, a.memory.textures++), X) {
      N.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          N.__webglFramebuffer[ae] = [];
          for (let he = 0; he < _.mipmaps.length; he++)
            N.__webglFramebuffer[ae][he] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let ae = 0; ae < _.mipmaps.length; ae++)
          N.__webglFramebuffer[ae] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (_e)
        for (let ae = 0, he = K.length; ae < he; ae++) {
          const ze = n.get(K[ae]);
          ze.__webglTexture === void 0 && (ze.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && Fe(E) === !1) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < K.length; ae++) {
          const he = K[ae];
          N.__webglColorRenderbuffer[ae] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
          const ze = s.convert(he.format, he.colorSpace), Q = s.convert(he.type), fe = T(he.internalFormat, ze, Q, he.colorSpace, E.isXRRenderTarget === !0), Ee = Ne(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, fe, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), se(N.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), Le(i.TEXTURE_CUBE_MAP, _);
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let he = 0; he < _.mipmaps.length; he++)
            me(N.__webglFramebuffer[ae][he], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, he);
        else
          me(N.__webglFramebuffer[ae], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      m(_) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (_e) {
      for (let ae = 0, he = K.length; ae < he; ae++) {
        const ze = K[ae], Q = n.get(ze);
        t.bindTexture(i.TEXTURE_2D, Q.__webglTexture), Le(i.TEXTURE_2D, ze), me(N.__webglFramebuffer, E, ze, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, 0), m(ze) && u(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ae = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, Y.__webglTexture), Le(ae, _), _.mipmaps && _.mipmaps.length > 0)
        for (let he = 0; he < _.mipmaps.length; he++)
          me(N.__webglFramebuffer[he], E, _, i.COLOR_ATTACHMENT0, ae, he);
      else
        me(N.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, ae, 0);
      m(_) && u(ae), t.unbindTexture();
    }
    E.depthBuffer && Re(E);
  }
  function Be(E) {
    const _ = E.textures;
    for (let N = 0, Y = _.length; N < Y; N++) {
      const K = _[N];
      if (m(K)) {
        const X = A(E), _e = n.get(K).__webglTexture;
        t.bindTexture(X, _e), u(X), t.unbindTexture();
      }
    }
  }
  const it = [], R = [];
  function Tt(E) {
    if (E.samples > 0) {
      if (Fe(E) === !1) {
        const _ = E.textures, N = E.width, Y = E.height;
        let K = i.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, _e = n.get(E), ae = _.length > 1;
        if (ae)
          for (let he = 0; he < _.length; he++)
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, _e.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer);
        for (let he = 0; he < _.length; he++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), ae) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _e.__webglColorRenderbuffer[he]);
            const ze = n.get(_[he]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ze, 0);
          }
          i.blitFramebuffer(0, 0, N, Y, 0, 0, N, Y, K, i.NEAREST), l === !0 && (it.length = 0, R.length = 0, it.push(i.COLOR_ATTACHMENT0 + he), E.depthBuffer && E.resolveDepthBuffer === !1 && (it.push(X), R.push(X), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, it));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ae)
          for (let he = 0; he < _.length; he++) {
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, _e.__webglColorRenderbuffer[he]);
            const ze = n.get(_[he]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, ze, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Ne(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function Fe(E) {
    const _ = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function ve(E) {
    const _ = a.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function je(E, _) {
    const N = E.colorSpace, Y = E.format, K = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || N !== ni && N !== hn && (Ge.getTransfer(N) === Ye ? (Y !== Ft || K !== tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  function xe(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = k, this.setTexture2D = $, this.setTexture2DArray = G, this.setTexture3D = J, this.setTextureCube = H, this.rebindTextures = Ue, this.setupRenderTarget = Qe, this.updateRenderTargetMipmap = Be, this.updateMultisampleRenderTarget = Tt, this.setupDepthRenderbuffer = Re, this.setupFrameBufferTexture = me, this.useMultisampledRTT = Fe;
}
function Ud(i, e) {
  function t(n, r = hn) {
    let s;
    const a = Ge.getTransfer(r);
    if (n === tn) return i.UNSIGNED_BYTE;
    if (n === Cs) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ps) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === ja) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ka) return i.BYTE;
    if (n === $a) return i.SHORT;
    if (n === di) return i.UNSIGNED_SHORT;
    if (n === ws) return i.INT;
    if (n === Cn) return i.UNSIGNED_INT;
    if (n === jt) return i.FLOAT;
    if (n === mi) return i.HALF_FLOAT;
    if (n === Ja) return i.ALPHA;
    if (n === Qa) return i.RGB;
    if (n === Ft) return i.RGBA;
    if (n === eo) return i.LUMINANCE;
    if (n === to) return i.LUMINANCE_ALPHA;
    if (n === Kn) return i.DEPTH_COMPONENT;
    if (n === ti) return i.DEPTH_STENCIL;
    if (n === no) return i.RED;
    if (n === Ds) return i.RED_INTEGER;
    if (n === io) return i.RG;
    if (n === Ls) return i.RG_INTEGER;
    if (n === Us) return i.RGBA_INTEGER;
    if (n === Zi || n === Ki || n === $i || n === ji)
      if (a === Ye)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Zi) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Ki) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === $i) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ji) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Zi) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Ki) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === $i) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === ji) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === jr || n === Jr || n === Qr || n === es)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === jr) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Jr) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Qr) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === es) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === ts || n === ns || n === is)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === ts || n === ns) return a === Ye ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === is) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === rs || n === ss || n === as || n === os || n === ls || n === cs || n === us || n === hs || n === fs || n === ds || n === ps || n === ms || n === _s || n === gs)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === rs) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ss) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === as) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === os) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ls) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === cs) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === us) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === hs) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === fs) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ds) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ps) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ms) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === _s) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === gs) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ji || n === vs || n === xs)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Ji) return a === Ye ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === vs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === xs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === ro || n === Ms || n === Ss || n === Es)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Ji) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ms) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ss) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Es) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ei ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Id = { type: "move" };
class Fr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Wi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Wi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Wi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new O()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const m = t.getJointPose(M, n), u = this._getHandJoint(c, M);
          m !== null && (u.matrix.fromArray(m.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = m.radius), u.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = h.position.distanceTo(d.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && f > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Id)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Wi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Nd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Fd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Od {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new _t(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new rn({
        vertexShader: Nd,
        fragmentShader: Fd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Ht(new Si(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Bd extends ri {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, d = null, f = null, p = null, g = null;
    const M = new Od(), m = t.getContextAttributes();
    let u = null, A = null;
    const T = [], y = [], U = new Ze();
    let b = null;
    const C = new Ct();
    C.viewport = new rt();
    const I = new Ct();
    I.viewport = new rt();
    const S = [C, I], x = new ic();
    let w = null, k = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let ee = T[q];
      return ee === void 0 && (ee = new Fr(), T[q] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let ee = T[q];
      return ee === void 0 && (ee = new Fr(), T[q] = ee), ee.getGripSpace();
    }, this.getHand = function(q) {
      let ee = T[q];
      return ee === void 0 && (ee = new Fr(), T[q] = ee), ee.getHandSpace();
    };
    function z(q) {
      const ee = y.indexOf(q.inputSource);
      if (ee === -1)
        return;
      const me = T[ee];
      me !== void 0 && (me.update(q.inputSource, q.frame, c || a), me.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", $);
      for (let q = 0; q < T.length; q++) {
        const ee = y[q];
        ee !== null && (y[q] = null, T[q].disconnect(ee));
      }
      w = null, k = null, M.reset(), e.setRenderTarget(u), p = null, f = null, d = null, r = null, A = null, Ke.stop(), n.isPresenting = !1, e.setPixelRatio(b), e.setSize(U.width, U.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      s = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(q) {
      if (r = q, r !== null) {
        if (u = e.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", W), r.addEventListener("inputsourceschange", $), m.xrCompatible !== !0 && await t.makeXRCompatible(), b = e.getPixelRatio(), e.getSize(U), r.renderState.layers === void 0) {
          const ee = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ee), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), A = new Pn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Ft,
              type: tn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let ee = null, me = null, se = null;
          m.depth && (se = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? ti : Kn, me = m.stencil ? ei : Cn);
          const ye = {
            colorFormat: t.RGBA8,
            depthFormat: se,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), f = d.createProjectionLayer(ye), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), A = new Pn(
            f.textureWidth,
            f.textureHeight,
            {
              format: Ft,
              type: tn,
              depthTexture: new go(f.textureWidth, f.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, ee),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        A.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Ke.setContext(r), Ke.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    function $(q) {
      for (let ee = 0; ee < q.removed.length; ee++) {
        const me = q.removed[ee], se = y.indexOf(me);
        se >= 0 && (y[se] = null, T[se].disconnect(me));
      }
      for (let ee = 0; ee < q.added.length; ee++) {
        const me = q.added[ee];
        let se = y.indexOf(me);
        if (se === -1) {
          for (let Re = 0; Re < T.length; Re++)
            if (Re >= y.length) {
              y.push(me), se = Re;
              break;
            } else if (y[Re] === null) {
              y[Re] = me, se = Re;
              break;
            }
          if (se === -1) break;
        }
        const ye = T[se];
        ye && ye.connect(me);
      }
    }
    const G = new O(), J = new O();
    function H(q, ee, me) {
      G.setFromMatrixPosition(ee.matrixWorld), J.setFromMatrixPosition(me.matrixWorld);
      const se = G.distanceTo(J), ye = ee.projectionMatrix.elements, Re = me.projectionMatrix.elements, Ue = ye[14] / (ye[10] - 1), Qe = ye[14] / (ye[10] + 1), Be = (ye[9] + 1) / ye[5], it = (ye[9] - 1) / ye[5], R = (ye[8] - 1) / ye[0], Tt = (Re[8] + 1) / Re[0], Ne = Ue * R, Fe = Ue * Tt, ve = se / (-R + Tt), je = ve * -R;
      if (ee.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(je), q.translateZ(ve), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), ye[10] === -1)
        q.projectionMatrix.copy(ee.projectionMatrix), q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const xe = Ue + ve, E = Qe + ve, _ = Ne - je, N = Fe + (se - je), Y = Be * Qe / E * xe, K = it * Qe / E * xe;
        q.projectionMatrix.makePerspective(_, N, Y, K, xe, E), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function re(q, ee) {
      ee === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(ee.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (r === null) return;
      let ee = q.near, me = q.far;
      M.texture !== null && (M.depthNear > 0 && (ee = M.depthNear), M.depthFar > 0 && (me = M.depthFar)), x.near = I.near = C.near = ee, x.far = I.far = C.far = me, (w !== x.near || k !== x.far) && (r.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), w = x.near, k = x.far), C.layers.mask = q.layers.mask | 2, I.layers.mask = q.layers.mask | 4, x.layers.mask = C.layers.mask | I.layers.mask;
      const se = q.parent, ye = x.cameras;
      re(x, se);
      for (let Re = 0; Re < ye.length; Re++)
        re(ye[Re], se);
      ye.length === 2 ? H(x, C, I) : x.projectionMatrix.copy(C.projectionMatrix), ue(q, x, se);
    };
    function ue(q, ee, me) {
      me === null ? q.matrix.copy(ee.matrixWorld) : (q.matrix.copy(me.matrixWorld), q.matrix.invert(), q.matrix.multiply(ee.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(ee.projectionMatrix), q.projectionMatrixInverse.copy(ee.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = ys * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return x;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return l;
    }, this.setFoveation = function(q) {
      l = q, f !== null && (f.fixedFoveation = q), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(x);
    };
    let ge = null;
    function Le(q, ee) {
      if (h = ee.getViewerPose(c || a), g = ee, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(A, p.framebuffer), e.setRenderTarget(A));
        let se = !1;
        me.length !== x.cameras.length && (x.cameras.length = 0, se = !0);
        for (let Re = 0; Re < me.length; Re++) {
          const Ue = me[Re];
          let Qe = null;
          if (p !== null)
            Qe = p.getViewport(Ue);
          else {
            const it = d.getViewSubImage(f, Ue);
            Qe = it.viewport, Re === 0 && (e.setRenderTargetTextures(
              A,
              it.colorTexture,
              f.ignoreDepthValues ? void 0 : it.depthStencilTexture
            ), e.setRenderTarget(A));
          }
          let Be = S[Re];
          Be === void 0 && (Be = new Ct(), Be.layers.enable(Re), Be.viewport = new rt(), S[Re] = Be), Be.matrix.fromArray(Ue.transform.matrix), Be.matrix.decompose(Be.position, Be.quaternion, Be.scale), Be.projectionMatrix.fromArray(Ue.projectionMatrix), Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(), Be.viewport.set(Qe.x, Qe.y, Qe.width, Qe.height), Re === 0 && (x.matrix.copy(Be.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), se === !0 && x.cameras.push(Be);
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing")) {
          const Re = d.getDepthInformation(me[0]);
          Re && Re.isValid && Re.texture && M.init(e, Re, r.renderState);
        }
      }
      for (let me = 0; me < T.length; me++) {
        const se = y[me], ye = T[me];
        se !== null && ye !== void 0 && ye.update(se, ee, c || a);
      }
      ge && ge(q, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const Ke = new xo();
    Ke.setAnimationLoop(Le), this.setAnimationLoop = function(q) {
      ge = q;
    }, this.dispose = function() {
    };
  }
}
const En = /* @__PURE__ */ new nn(), zd = /* @__PURE__ */ new nt();
function Hd(i, e) {
  function t(m, u) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), u.value.copy(m.matrix);
  }
  function n(m, u) {
    u.color.getRGB(m.fogColor.value, fo(i)), u.isFog ? (m.fogNear.value = u.near, m.fogFar.value = u.far) : u.isFogExp2 && (m.fogDensity.value = u.density);
  }
  function r(m, u, A, T, y) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(m, u) : u.isMeshToonMaterial ? (s(m, u), d(m, u)) : u.isMeshPhongMaterial ? (s(m, u), h(m, u)) : u.isMeshStandardMaterial ? (s(m, u), f(m, u), u.isMeshPhysicalMaterial && p(m, u, y)) : u.isMeshMatcapMaterial ? (s(m, u), g(m, u)) : u.isMeshDepthMaterial ? s(m, u) : u.isMeshDistanceMaterial ? (s(m, u), M(m, u)) : u.isMeshNormalMaterial ? s(m, u) : u.isLineBasicMaterial ? (a(m, u), u.isLineDashedMaterial && o(m, u)) : u.isPointsMaterial ? l(m, u, A, T) : u.isSpriteMaterial ? c(m, u) : u.isShadowMaterial ? (m.color.value.copy(u.color), m.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(m, u) {
    m.opacity.value = u.opacity, u.color && m.diffuse.value.copy(u.color), u.emissive && m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.bumpMap && (m.bumpMap.value = u.bumpMap, t(u.bumpMap, m.bumpMapTransform), m.bumpScale.value = u.bumpScale, u.side === xt && (m.bumpScale.value *= -1)), u.normalMap && (m.normalMap.value = u.normalMap, t(u.normalMap, m.normalMapTransform), m.normalScale.value.copy(u.normalScale), u.side === xt && m.normalScale.value.negate()), u.displacementMap && (m.displacementMap.value = u.displacementMap, t(u.displacementMap, m.displacementMapTransform), m.displacementScale.value = u.displacementScale, m.displacementBias.value = u.displacementBias), u.emissiveMap && (m.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, m.emissiveMapTransform)), u.specularMap && (m.specularMap.value = u.specularMap, t(u.specularMap, m.specularMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
    const A = e.get(u), T = A.envMap, y = A.envMapRotation;
    T && (m.envMap.value = T, En.copy(y), En.x *= -1, En.y *= -1, En.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (En.y *= -1, En.z *= -1), m.envMapRotation.value.setFromMatrix4(zd.makeRotationFromEuler(En)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = u.reflectivity, m.ior.value = u.ior, m.refractionRatio.value = u.refractionRatio), u.lightMap && (m.lightMap.value = u.lightMap, m.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, m.lightMapTransform)), u.aoMap && (m.aoMap.value = u.aoMap, m.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, m.aoMapTransform));
  }
  function a(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, u.map && (m.map.value = u.map, t(u.map, m.mapTransform));
  }
  function o(m, u) {
    m.dashSize.value = u.dashSize, m.totalSize.value = u.dashSize + u.gapSize, m.scale.value = u.scale;
  }
  function l(m, u, A, T) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.size.value = u.size * A, m.scale.value = T * 0.5, u.map && (m.map.value = u.map, t(u.map, m.uvTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function c(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.rotation.value = u.rotation, u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function h(m, u) {
    m.specular.value.copy(u.specular), m.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(m, u) {
    u.gradientMap && (m.gradientMap.value = u.gradientMap);
  }
  function f(m, u) {
    m.metalness.value = u.metalness, u.metalnessMap && (m.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, m.metalnessMapTransform)), m.roughness.value = u.roughness, u.roughnessMap && (m.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, m.roughnessMapTransform)), u.envMap && (m.envMapIntensity.value = u.envMapIntensity);
  }
  function p(m, u, A) {
    m.ior.value = u.ior, u.sheen > 0 && (m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), m.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (m.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, m.sheenColorMapTransform)), u.sheenRoughnessMap && (m.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, m.sheenRoughnessMapTransform))), u.clearcoat > 0 && (m.clearcoat.value = u.clearcoat, m.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (m.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, m.clearcoatMapTransform)), u.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (m.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === xt && m.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (m.dispersion.value = u.dispersion), u.iridescence > 0 && (m.iridescence.value = u.iridescence, m.iridescenceIOR.value = u.iridescenceIOR, m.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (m.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, m.iridescenceMapTransform)), u.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), u.transmission > 0 && (m.transmission.value = u.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), u.transmissionMap && (m.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, m.transmissionMapTransform)), m.thickness.value = u.thickness, u.thicknessMap && (m.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = u.attenuationDistance, m.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (m.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (m.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = u.specularIntensity, m.specularColor.value.copy(u.specularColor), u.specularColorMap && (m.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, m.specularColorMapTransform)), u.specularIntensityMap && (m.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, u) {
    u.matcap && (m.matcap.value = u.matcap);
  }
  function M(m, u) {
    const A = e.get(u).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Vd(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, T) {
    const y = T.program;
    n.uniformBlockBinding(A, y);
  }
  function c(A, T) {
    let y = r[A.id];
    y === void 0 && (g(A), y = h(A), r[A.id] = y, A.addEventListener("dispose", m));
    const U = T.program;
    n.updateUBOMapping(A, U);
    const b = e.render.frame;
    s[A.id] !== b && (f(A), s[A.id] = b);
  }
  function h(A) {
    const T = d();
    A.__bindingPointIndex = T;
    const y = i.createBuffer(), U = A.__size, b = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, U, b), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, y), y;
  }
  function d() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const T = r[A.id], y = A.uniforms, U = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let b = 0, C = y.length; b < C; b++) {
      const I = Array.isArray(y[b]) ? y[b] : [y[b]];
      for (let S = 0, x = I.length; S < x; S++) {
        const w = I[S];
        if (p(w, b, S, U) === !0) {
          const k = w.__offset, z = Array.isArray(w.value) ? w.value : [w.value];
          let W = 0;
          for (let $ = 0; $ < z.length; $++) {
            const G = z[$], J = M(G);
            typeof G == "number" || typeof G == "boolean" ? (w.__data[0] = G, i.bufferSubData(i.UNIFORM_BUFFER, k + W, w.__data)) : G.isMatrix3 ? (w.__data[0] = G.elements[0], w.__data[1] = G.elements[1], w.__data[2] = G.elements[2], w.__data[3] = 0, w.__data[4] = G.elements[3], w.__data[5] = G.elements[4], w.__data[6] = G.elements[5], w.__data[7] = 0, w.__data[8] = G.elements[6], w.__data[9] = G.elements[7], w.__data[10] = G.elements[8], w.__data[11] = 0) : (G.toArray(w.__data, W), W += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, k, w.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(A, T, y, U) {
    const b = A.value, C = T + "_" + y;
    if (U[C] === void 0)
      return typeof b == "number" || typeof b == "boolean" ? U[C] = b : U[C] = b.clone(), !0;
    {
      const I = U[C];
      if (typeof b == "number" || typeof b == "boolean") {
        if (I !== b)
          return U[C] = b, !0;
      } else if (I.equals(b) === !1)
        return I.copy(b), !0;
    }
    return !1;
  }
  function g(A) {
    const T = A.uniforms;
    let y = 0;
    const U = 16;
    for (let C = 0, I = T.length; C < I; C++) {
      const S = Array.isArray(T[C]) ? T[C] : [T[C]];
      for (let x = 0, w = S.length; x < w; x++) {
        const k = S[x], z = Array.isArray(k.value) ? k.value : [k.value];
        for (let W = 0, $ = z.length; W < $; W++) {
          const G = z[W], J = M(G), H = y % U, re = H % J.boundary, ue = H + re;
          y += re, ue !== 0 && U - ue < J.storage && (y += U - ue), k.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = y, y += J.storage;
        }
      }
    }
    const b = y % U;
    return b > 0 && (y += U - b), A.__size = y, A.__cache = {}, this;
  }
  function M(A) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (T.boundary = 4, T.storage = 4) : A.isVector2 ? (T.boundary = 8, T.storage = 8) : A.isVector3 || A.isColor ? (T.boundary = 16, T.storage = 12) : A.isVector4 ? (T.boundary = 16, T.storage = 16) : A.isMatrix3 ? (T.boundary = 48, T.storage = 48) : A.isMatrix4 ? (T.boundary = 64, T.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), T;
  }
  function m(A) {
    const T = A.target;
    T.removeEventListener("dispose", m);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function u() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: u
  };
}
class Gd {
  constructor(e = {}) {
    const {
      canvas: t = Ml(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reverseDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const g = new Uint32Array(4), M = new Int32Array(4);
    let m = null, u = null;
    const A = [], T = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = wt, this.toneMapping = dn, this.toneMappingExposure = 1;
    const y = this;
    let U = !1, b = 0, C = 0, I = null, S = -1, x = null;
    const w = new rt(), k = new rt();
    let z = null;
    const W = new ke(0);
    let $ = 0, G = t.width, J = t.height, H = 1, re = null, ue = null;
    const ge = new rt(0, 0, G, J), Le = new rt(0, 0, G, J);
    let Ke = !1;
    const q = new _o();
    let ee = !1, me = !1;
    const se = new nt(), ye = new nt(), Re = new O(), Ue = new rt(), Qe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Be = !1;
    function it() {
      return I === null ? H : 1;
    }
    let R = n;
    function Tt(v, D) {
      return t.getContext(v, D);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Rs}`), t.addEventListener("webglcontextlost", Z, !1), t.addEventListener("webglcontextrestored", le, !1), t.addEventListener("webglcontextcreationerror", oe, !1), R === null) {
        const D = "webgl2";
        if (R = Tt(D, v), R === null)
          throw Tt(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Ne, Fe, ve, je, xe, E, _, N, Y, K, X, _e, ae, he, ze, Q, fe, Ee, Te, de, Oe, Pe, $e, P;
    function ne() {
      Ne = new $h(R), Ne.init(), Pe = new Ud(R, Ne), Fe = new Wh(R, Ne, e, Pe), ve = new Dd(R, Ne), Fe.reverseDepthBuffer && f && ve.buffers.depth.setReversed(!0), je = new Qh(R), xe = new vd(), E = new Ld(R, Ne, ve, xe, Fe, Pe, je), _ = new qh(y), N = new Kh(y), Y = new ac(R), $e = new Gh(R, Y), K = new jh(R, Y, je, $e), X = new tf(R, K, Y, je), Te = new ef(R, Fe, E), Q = new Xh(xe), _e = new gd(y, _, N, Ne, Fe, $e, Q), ae = new Hd(y, xe), he = new Md(), ze = new bd(Ne), Ee = new Vh(y, _, N, ve, X, p, l), fe = new Cd(y, X, Fe), P = new Vd(R, je, Fe, ve), de = new kh(R, Ne, je), Oe = new Jh(R, Ne, je), je.programs = _e.programs, y.capabilities = Fe, y.extensions = Ne, y.properties = xe, y.renderLists = he, y.shadowMap = fe, y.state = ve, y.info = je;
    }
    ne();
    const V = new Bd(y, R);
    this.xr = V, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ne.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ne.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return H;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (H = v, this.setSize(G, J, !1));
    }, this.getSize = function(v) {
      return v.set(G, J);
    }, this.setSize = function(v, D, F = !0) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = v, J = D, t.width = Math.floor(v * H), t.height = Math.floor(D * H), F === !0 && (t.style.width = v + "px", t.style.height = D + "px"), this.setViewport(0, 0, v, D);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(G * H, J * H).floor();
    }, this.setDrawingBufferSize = function(v, D, F) {
      G = v, J = D, H = F, t.width = Math.floor(v * F), t.height = Math.floor(D * F), this.setViewport(0, 0, v, D);
    }, this.getCurrentViewport = function(v) {
      return v.copy(w);
    }, this.getViewport = function(v) {
      return v.copy(ge);
    }, this.setViewport = function(v, D, F, B) {
      v.isVector4 ? ge.set(v.x, v.y, v.z, v.w) : ge.set(v, D, F, B), ve.viewport(w.copy(ge).multiplyScalar(H).round());
    }, this.getScissor = function(v) {
      return v.copy(Le);
    }, this.setScissor = function(v, D, F, B) {
      v.isVector4 ? Le.set(v.x, v.y, v.z, v.w) : Le.set(v, D, F, B), ve.scissor(k.copy(Le).multiplyScalar(H).round());
    }, this.getScissorTest = function() {
      return Ke;
    }, this.setScissorTest = function(v) {
      ve.setScissorTest(Ke = v);
    }, this.setOpaqueSort = function(v) {
      re = v;
    }, this.setTransparentSort = function(v) {
      ue = v;
    }, this.getClearColor = function(v) {
      return v.copy(Ee.getClearColor());
    }, this.setClearColor = function() {
      Ee.setClearColor.apply(Ee, arguments);
    }, this.getClearAlpha = function() {
      return Ee.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ee.setClearAlpha.apply(Ee, arguments);
    }, this.clear = function(v = !0, D = !0, F = !0) {
      let B = 0;
      if (v) {
        let L = !1;
        if (I !== null) {
          const j = I.texture.format;
          L = j === Us || j === Ls || j === Ds;
        }
        if (L) {
          const j = I.texture.type, ie = j === tn || j === Cn || j === di || j === ei || j === Cs || j === Ps, ce = Ee.getClearColor(), pe = Ee.getClearAlpha(), Ae = ce.r, be = ce.g, Me = ce.b;
          ie ? (g[0] = Ae, g[1] = be, g[2] = Me, g[3] = pe, R.clearBufferuiv(R.COLOR, 0, g)) : (M[0] = Ae, M[1] = be, M[2] = Me, M[3] = pe, R.clearBufferiv(R.COLOR, 0, M));
        } else
          B |= R.COLOR_BUFFER_BIT;
      }
      D && (B |= R.DEPTH_BUFFER_BIT), F && (B |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Z, !1), t.removeEventListener("webglcontextrestored", le, !1), t.removeEventListener("webglcontextcreationerror", oe, !1), Ee.dispose(), he.dispose(), ze.dispose(), xe.dispose(), _.dispose(), N.dispose(), X.dispose(), $e.dispose(), P.dispose(), _e.dispose(), V.dispose(), V.removeEventListener("sessionstart", zs), V.removeEventListener("sessionend", Hs), mn.stop();
    };
    function Z(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), U = !0;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), U = !1;
      const v = je.autoReset, D = fe.enabled, F = fe.autoUpdate, B = fe.needsUpdate, L = fe.type;
      ne(), je.autoReset = v, fe.enabled = D, fe.autoUpdate = F, fe.needsUpdate = B, fe.type = L;
    }
    function oe(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function we(v) {
      const D = v.target;
      D.removeEventListener("dispose", we), et(D);
    }
    function et(v) {
      ht(v), xe.remove(v);
    }
    function ht(v) {
      const D = xe.get(v).programs;
      D !== void 0 && (D.forEach(function(F) {
        _e.releaseProgram(F);
      }), v.isShaderMaterial && _e.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, D, F, B, L, j) {
      D === null && (D = Qe);
      const ie = L.isMesh && L.matrixWorld.determinant() < 0, ce = To(v, D, F, B, L);
      ve.setMaterial(B, ie);
      let pe = F.index, Ae = 1;
      if (B.wireframe === !0) {
        if (pe = K.getWireframeAttribute(F), pe === void 0) return;
        Ae = 2;
      }
      const be = F.drawRange, Me = F.attributes.position;
      let He = be.start * Ae, We = (be.start + be.count) * Ae;
      j !== null && (He = Math.max(He, j.start * Ae), We = Math.min(We, (j.start + j.count) * Ae)), pe !== null ? (He = Math.max(He, 0), We = Math.min(We, pe.count)) : Me != null && (He = Math.max(He, 0), We = Math.min(We, Me.count));
      const st = We - He;
      if (st < 0 || st === 1 / 0) return;
      $e.setup(L, B, ce, F, pe);
      let tt, Ve = de;
      if (pe !== null && (tt = Y.get(pe), Ve = Oe, Ve.setIndex(tt)), L.isMesh)
        B.wireframe === !0 ? (ve.setLineWidth(B.wireframeLinewidth * it()), Ve.setMode(R.LINES)) : Ve.setMode(R.TRIANGLES);
      else if (L.isLine) {
        let Se = B.linewidth;
        Se === void 0 && (Se = 1), ve.setLineWidth(Se * it()), L.isLineSegments ? Ve.setMode(R.LINES) : L.isLineLoop ? Ve.setMode(R.LINE_LOOP) : Ve.setMode(R.LINE_STRIP);
      } else L.isPoints ? Ve.setMode(R.POINTS) : L.isSprite && Ve.setMode(R.TRIANGLES);
      if (L.isBatchedMesh)
        if (L._multiDrawInstances !== null)
          Ve.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
        else if (Ne.get("WEBGL_multi_draw"))
          Ve.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
        else {
          const Se = L._multiDrawStarts, ut = L._multiDrawCounts, Xe = L._multiDrawCount, Dt = pe ? Y.get(pe).bytesPerElement : 1, Dn = xe.get(B).currentProgram.getUniforms();
          for (let St = 0; St < Xe; St++)
            Dn.setValue(R, "_gl_DrawID", St), Ve.render(Se[St] / Dt, ut[St]);
        }
      else if (L.isInstancedMesh)
        Ve.renderInstances(He, st, L.count);
      else if (F.isInstancedBufferGeometry) {
        const Se = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, ut = Math.min(F.instanceCount, Se);
        Ve.renderInstances(He, st, ut);
      } else
        Ve.render(He, st);
    };
    function qe(v, D, F) {
      v.transparent === !0 && v.side === $t && v.forceSinglePass === !1 ? (v.side = xt, v.needsUpdate = !0, yi(v, D, F), v.side = pn, v.needsUpdate = !0, yi(v, D, F), v.side = $t) : yi(v, D, F);
    }
    this.compile = function(v, D, F = null) {
      F === null && (F = v), u = ze.get(F), u.init(D), T.push(u), F.traverseVisible(function(L) {
        L.isLight && L.layers.test(D.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L));
      }), v !== F && v.traverseVisible(function(L) {
        L.isLight && L.layers.test(D.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L));
      }), u.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(L) {
        if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite))
          return;
        const j = L.material;
        if (j)
          if (Array.isArray(j))
            for (let ie = 0; ie < j.length; ie++) {
              const ce = j[ie];
              qe(ce, F, L), B.add(ce);
            }
          else
            qe(j, F, L), B.add(j);
      }), T.pop(), u = null, B;
    }, this.compileAsync = function(v, D, F = null) {
      const B = this.compile(v, D, F);
      return new Promise((L) => {
        function j() {
          if (B.forEach(function(ie) {
            xe.get(ie).currentProgram.isReady() && B.delete(ie);
          }), B.size === 0) {
            L(v);
            return;
          }
          setTimeout(j, 10);
        }
        Ne.get("KHR_parallel_shader_compile") !== null ? j() : setTimeout(j, 10);
      });
    };
    let Pt = null;
    function kt(v) {
      Pt && Pt(v);
    }
    function zs() {
      mn.stop();
    }
    function Hs() {
      mn.start();
    }
    const mn = new xo();
    mn.setAnimationLoop(kt), typeof self < "u" && mn.setContext(self), this.setAnimationLoop = function(v) {
      Pt = v, V.setAnimationLoop(v), v === null ? mn.stop() : mn.start();
    }, V.addEventListener("sessionstart", zs), V.addEventListener("sessionend", Hs), this.render = function(v, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (U === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(D), D = V.getCamera()), v.isScene === !0 && v.onBeforeRender(y, v, D, I), u = ze.get(v, T.length), u.init(D), T.push(u), ye.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), q.setFromProjectionMatrix(ye), me = this.localClippingEnabled, ee = Q.init(this.clippingPlanes, me), m = he.get(v, A.length), m.init(), A.push(m), V.enabled === !0 && V.isPresenting === !0) {
        const j = y.xr.getDepthSensingMesh();
        j !== null && sr(j, D, -1 / 0, y.sortObjects);
      }
      sr(v, D, 0, y.sortObjects), m.finish(), y.sortObjects === !0 && m.sort(re, ue), Be = V.enabled === !1 || V.isPresenting === !1 || V.hasDepthSensing() === !1, Be && Ee.addToRenderList(m, v), this.info.render.frame++, ee === !0 && Q.beginShadows();
      const F = u.state.shadowsArray;
      fe.render(F, v, D), ee === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const B = m.opaque, L = m.transmissive;
      if (u.setupLights(), D.isArrayCamera) {
        const j = D.cameras;
        if (L.length > 0)
          for (let ie = 0, ce = j.length; ie < ce; ie++) {
            const pe = j[ie];
            Gs(B, L, v, pe);
          }
        Be && Ee.render(v);
        for (let ie = 0, ce = j.length; ie < ce; ie++) {
          const pe = j[ie];
          Vs(m, v, pe, pe.viewport);
        }
      } else
        L.length > 0 && Gs(B, L, v, D), Be && Ee.render(v), Vs(m, v, D);
      I !== null && (E.updateMultisampleRenderTarget(I), E.updateRenderTargetMipmap(I)), v.isScene === !0 && v.onAfterRender(y, v, D), $e.resetDefaultState(), S = -1, x = null, T.pop(), T.length > 0 ? (u = T[T.length - 1], ee === !0 && Q.setGlobalState(y.clippingPlanes, u.state.camera)) : u = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function sr(v, D, F, B) {
      if (v.visible === !1) return;
      if (v.layers.test(D.layers)) {
        if (v.isGroup)
          F = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(D);
        else if (v.isLight)
          u.pushLight(v), v.castShadow && u.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || q.intersectsSprite(v)) {
            B && Ue.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ye);
            const ie = X.update(v), ce = v.material;
            ce.visible && m.push(v, ie, ce, F, Ue.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || q.intersectsObject(v))) {
          const ie = X.update(v), ce = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Ue.copy(v.boundingSphere.center)) : (ie.boundingSphere === null && ie.computeBoundingSphere(), Ue.copy(ie.boundingSphere.center)), Ue.applyMatrix4(v.matrixWorld).applyMatrix4(ye)), Array.isArray(ce)) {
            const pe = ie.groups;
            for (let Ae = 0, be = pe.length; Ae < be; Ae++) {
              const Me = pe[Ae], He = ce[Me.materialIndex];
              He && He.visible && m.push(v, ie, He, F, Ue.z, Me);
            }
          } else ce.visible && m.push(v, ie, ce, F, Ue.z, null);
        }
      }
      const j = v.children;
      for (let ie = 0, ce = j.length; ie < ce; ie++)
        sr(j[ie], D, F, B);
    }
    function Vs(v, D, F, B) {
      const L = v.opaque, j = v.transmissive, ie = v.transparent;
      u.setupLightsView(F), ee === !0 && Q.setGlobalState(y.clippingPlanes, F), B && ve.viewport(w.copy(B)), L.length > 0 && Ei(L, D, F), j.length > 0 && Ei(j, D, F), ie.length > 0 && Ei(ie, D, F), ve.buffers.depth.setTest(!0), ve.buffers.depth.setMask(!0), ve.buffers.color.setMask(!0), ve.setPolygonOffset(!1);
    }
    function Gs(v, D, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[B.id] === void 0 && (u.state.transmissionRenderTarget[B.id] = new Pn(1, 1, {
        generateMipmaps: !0,
        type: Ne.has("EXT_color_buffer_half_float") || Ne.has("EXT_color_buffer_float") ? mi : tn,
        minFilter: wn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Ge.workingColorSpace
      }));
      const j = u.state.transmissionRenderTarget[B.id], ie = B.viewport || w;
      j.setSize(ie.z, ie.w);
      const ce = y.getRenderTarget();
      y.setRenderTarget(j), y.getClearColor(W), $ = y.getClearAlpha(), $ < 1 && y.setClearColor(16777215, 0.5), y.clear(), Be && Ee.render(F);
      const pe = y.toneMapping;
      y.toneMapping = dn;
      const Ae = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), u.setupLightsView(B), ee === !0 && Q.setGlobalState(y.clippingPlanes, B), Ei(v, F, B), E.updateMultisampleRenderTarget(j), E.updateRenderTargetMipmap(j), Ne.has("WEBGL_multisampled_render_to_texture") === !1) {
        let be = !1;
        for (let Me = 0, He = D.length; Me < He; Me++) {
          const We = D[Me], st = We.object, tt = We.geometry, Ve = We.material, Se = We.group;
          if (Ve.side === $t && st.layers.test(B.layers)) {
            const ut = Ve.side;
            Ve.side = xt, Ve.needsUpdate = !0, ks(st, F, B, tt, Ve, Se), Ve.side = ut, Ve.needsUpdate = !0, be = !0;
          }
        }
        be === !0 && (E.updateMultisampleRenderTarget(j), E.updateRenderTargetMipmap(j));
      }
      y.setRenderTarget(ce), y.setClearColor(W, $), Ae !== void 0 && (B.viewport = Ae), y.toneMapping = pe;
    }
    function Ei(v, D, F) {
      const B = D.isScene === !0 ? D.overrideMaterial : null;
      for (let L = 0, j = v.length; L < j; L++) {
        const ie = v[L], ce = ie.object, pe = ie.geometry, Ae = B === null ? ie.material : B, be = ie.group;
        ce.layers.test(F.layers) && ks(ce, D, F, pe, Ae, be);
      }
    }
    function ks(v, D, F, B, L, j) {
      v.onBeforeRender(y, D, F, B, L, j), v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), L.onBeforeRender(y, D, F, B, v, j), L.transparent === !0 && L.side === $t && L.forceSinglePass === !1 ? (L.side = xt, L.needsUpdate = !0, y.renderBufferDirect(F, D, B, L, v, j), L.side = pn, L.needsUpdate = !0, y.renderBufferDirect(F, D, B, L, v, j), L.side = $t) : y.renderBufferDirect(F, D, B, L, v, j), v.onAfterRender(y, D, F, B, L, j);
    }
    function yi(v, D, F) {
      D.isScene !== !0 && (D = Qe);
      const B = xe.get(v), L = u.state.lights, j = u.state.shadowsArray, ie = L.state.version, ce = _e.getParameters(v, L.state, j, D, F), pe = _e.getProgramCacheKey(ce);
      let Ae = B.programs;
      B.environment = v.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (v.isMeshStandardMaterial ? N : _).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? D.environmentRotation : v.envMapRotation, Ae === void 0 && (v.addEventListener("dispose", we), Ae = /* @__PURE__ */ new Map(), B.programs = Ae);
      let be = Ae.get(pe);
      if (be !== void 0) {
        if (B.currentProgram === be && B.lightsStateVersion === ie)
          return Xs(v, ce), be;
      } else
        ce.uniforms = _e.getUniforms(v), v.onBeforeCompile(ce, y), be = _e.acquireProgram(ce, pe), Ae.set(pe, be), B.uniforms = ce.uniforms;
      const Me = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Me.clippingPlanes = Q.uniform), Xs(v, ce), B.needsLights = bo(v), B.lightsStateVersion = ie, B.needsLights && (Me.ambientLightColor.value = L.state.ambient, Me.lightProbe.value = L.state.probe, Me.directionalLights.value = L.state.directional, Me.directionalLightShadows.value = L.state.directionalShadow, Me.spotLights.value = L.state.spot, Me.spotLightShadows.value = L.state.spotShadow, Me.rectAreaLights.value = L.state.rectArea, Me.ltc_1.value = L.state.rectAreaLTC1, Me.ltc_2.value = L.state.rectAreaLTC2, Me.pointLights.value = L.state.point, Me.pointLightShadows.value = L.state.pointShadow, Me.hemisphereLights.value = L.state.hemi, Me.directionalShadowMap.value = L.state.directionalShadowMap, Me.directionalShadowMatrix.value = L.state.directionalShadowMatrix, Me.spotShadowMap.value = L.state.spotShadowMap, Me.spotLightMatrix.value = L.state.spotLightMatrix, Me.spotLightMap.value = L.state.spotLightMap, Me.pointShadowMap.value = L.state.pointShadowMap, Me.pointShadowMatrix.value = L.state.pointShadowMatrix), B.currentProgram = be, B.uniformsList = null, be;
    }
    function Ws(v) {
      if (v.uniformsList === null) {
        const D = v.currentProgram.getUniforms();
        v.uniformsList = Qi.seqWithValue(D.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Xs(v, D) {
      const F = xe.get(v);
      F.outputColorSpace = D.outputColorSpace, F.batching = D.batching, F.batchingColor = D.batchingColor, F.instancing = D.instancing, F.instancingColor = D.instancingColor, F.instancingMorph = D.instancingMorph, F.skinning = D.skinning, F.morphTargets = D.morphTargets, F.morphNormals = D.morphNormals, F.morphColors = D.morphColors, F.morphTargetsCount = D.morphTargetsCount, F.numClippingPlanes = D.numClippingPlanes, F.numIntersection = D.numClipIntersection, F.vertexAlphas = D.vertexAlphas, F.vertexTangents = D.vertexTangents, F.toneMapping = D.toneMapping;
    }
    function To(v, D, F, B, L) {
      D.isScene !== !0 && (D = Qe), E.resetTextureUnits();
      const j = D.fog, ie = B.isMeshStandardMaterial ? D.environment : null, ce = I === null ? y.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : ni, pe = (B.isMeshStandardMaterial ? N : _).get(B.envMap || ie), Ae = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, be = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Me = !!F.morphAttributes.position, He = !!F.morphAttributes.normal, We = !!F.morphAttributes.color;
      let st = dn;
      B.toneMapped && (I === null || I.isXRRenderTarget === !0) && (st = y.toneMapping);
      const tt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Ve = tt !== void 0 ? tt.length : 0, Se = xe.get(B), ut = u.state.lights;
      if (ee === !0 && (me === !0 || v !== x)) {
        const pt = v === x && B.id === S;
        Q.setState(B, v, pt);
      }
      let Xe = !1;
      B.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== ut.state.version || Se.outputColorSpace !== ce || L.isBatchedMesh && Se.batching === !1 || !L.isBatchedMesh && Se.batching === !0 || L.isBatchedMesh && Se.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && Se.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && Se.instancing === !1 || !L.isInstancedMesh && Se.instancing === !0 || L.isSkinnedMesh && Se.skinning === !1 || !L.isSkinnedMesh && Se.skinning === !0 || L.isInstancedMesh && Se.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && Se.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && Se.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && Se.instancingMorph === !1 && L.morphTexture !== null || Se.envMap !== pe || B.fog === !0 && Se.fog !== j || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== Q.numPlanes || Se.numIntersection !== Q.numIntersection) || Se.vertexAlphas !== Ae || Se.vertexTangents !== be || Se.morphTargets !== Me || Se.morphNormals !== He || Se.morphColors !== We || Se.toneMapping !== st || Se.morphTargetsCount !== Ve) && (Xe = !0) : (Xe = !0, Se.__version = B.version);
      let Dt = Se.currentProgram;
      Xe === !0 && (Dt = yi(B, D, L));
      let Dn = !1, St = !1, ai = !1;
      const Je = Dt.getUniforms(), At = Se.uniforms;
      if (ve.useProgram(Dt.program) && (Dn = !0, St = !0, ai = !0), B.id !== S && (S = B.id, St = !0), Dn || x !== v) {
        ve.buffers.depth.getReversed() ? (se.copy(v.projectionMatrix), El(se), yl(se), Je.setValue(R, "projectionMatrix", se)) : Je.setValue(R, "projectionMatrix", v.projectionMatrix), Je.setValue(R, "viewMatrix", v.matrixWorldInverse);
        const gt = Je.map.cameraPosition;
        gt !== void 0 && gt.setValue(R, Re.setFromMatrixPosition(v.matrixWorld)), Fe.logarithmicDepthBuffer && Je.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && Je.setValue(R, "isOrthographic", v.isOrthographicCamera === !0), x !== v && (x = v, St = !0, ai = !0);
      }
      if (L.isSkinnedMesh) {
        Je.setOptional(R, L, "bindMatrix"), Je.setOptional(R, L, "bindMatrixInverse");
        const pt = L.skeleton;
        pt && (pt.boneTexture === null && pt.computeBoneTexture(), Je.setValue(R, "boneTexture", pt.boneTexture, E));
      }
      L.isBatchedMesh && (Je.setOptional(R, L, "batchingTexture"), Je.setValue(R, "batchingTexture", L._matricesTexture, E), Je.setOptional(R, L, "batchingIdTexture"), Je.setValue(R, "batchingIdTexture", L._indirectTexture, E), Je.setOptional(R, L, "batchingColorTexture"), L._colorsTexture !== null && Je.setValue(R, "batchingColorTexture", L._colorsTexture, E));
      const bt = F.morphAttributes;
      if ((bt.position !== void 0 || bt.normal !== void 0 || bt.color !== void 0) && Te.update(L, F, Dt), (St || Se.receiveShadow !== L.receiveShadow) && (Se.receiveShadow = L.receiveShadow, Je.setValue(R, "receiveShadow", L.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (At.envMap.value = pe, At.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (At.envMapIntensity.value = D.environmentIntensity), St && (Je.setValue(R, "toneMappingExposure", y.toneMappingExposure), Se.needsLights && Ao(At, ai), j && B.fog === !0 && ae.refreshFogUniforms(At, j), ae.refreshMaterialUniforms(At, B, H, J, u.state.transmissionRenderTarget[v.id]), Qi.upload(R, Ws(Se), At, E)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Qi.upload(R, Ws(Se), At, E), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && Je.setValue(R, "center", L.center), Je.setValue(R, "modelViewMatrix", L.modelViewMatrix), Je.setValue(R, "normalMatrix", L.normalMatrix), Je.setValue(R, "modelMatrix", L.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const pt = B.uniformsGroups;
        for (let gt = 0, ar = pt.length; gt < ar; gt++) {
          const _n = pt[gt];
          P.update(_n, Dt), P.bind(_n, Dt);
        }
      }
      return Dt;
    }
    function Ao(v, D) {
      v.ambientLightColor.needsUpdate = D, v.lightProbe.needsUpdate = D, v.directionalLights.needsUpdate = D, v.directionalLightShadows.needsUpdate = D, v.pointLights.needsUpdate = D, v.pointLightShadows.needsUpdate = D, v.spotLights.needsUpdate = D, v.spotLightShadows.needsUpdate = D, v.rectAreaLights.needsUpdate = D, v.hemisphereLights.needsUpdate = D;
    }
    function bo(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(v, D, F) {
      xe.get(v.texture).__webglTexture = D, xe.get(v.depthTexture).__webglTexture = F;
      const B = xe.get(v);
      B.__hasExternalTextures = !0, B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || Ne.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(v, D) {
      const F = xe.get(v);
      F.__webglFramebuffer = D, F.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(v, D = 0, F = 0) {
      I = v, b = D, C = F;
      let B = !0, L = null, j = !1, ie = !1;
      if (v) {
        const pe = xe.get(v);
        if (pe.__useDefaultFramebuffer !== void 0)
          ve.bindFramebuffer(R.FRAMEBUFFER, null), B = !1;
        else if (pe.__webglFramebuffer === void 0)
          E.setupRenderTarget(v);
        else if (pe.__hasExternalTextures)
          E.rebindTextures(v, xe.get(v.texture).__webglTexture, xe.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Me = v.depthTexture;
          if (pe.__boundDepthTexture !== Me) {
            if (Me !== null && xe.has(Me) && (v.width !== Me.image.width || v.height !== Me.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(v);
          }
        }
        const Ae = v.texture;
        (Ae.isData3DTexture || Ae.isDataArrayTexture || Ae.isCompressedArrayTexture) && (ie = !0);
        const be = xe.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(be[D]) ? L = be[D][F] : L = be[D], j = !0) : v.samples > 0 && E.useMultisampledRTT(v) === !1 ? L = xe.get(v).__webglMultisampledFramebuffer : Array.isArray(be) ? L = be[F] : L = be, w.copy(v.viewport), k.copy(v.scissor), z = v.scissorTest;
      } else
        w.copy(ge).multiplyScalar(H).floor(), k.copy(Le).multiplyScalar(H).floor(), z = Ke;
      if (ve.bindFramebuffer(R.FRAMEBUFFER, L) && B && ve.drawBuffers(v, L), ve.viewport(w), ve.scissor(k), ve.setScissorTest(z), j) {
        const pe = xe.get(v.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + D, pe.__webglTexture, F);
      } else if (ie) {
        const pe = xe.get(v.texture), Ae = D || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, pe.__webglTexture, F || 0, Ae);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, D, F, B, L, j, ie) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ce = xe.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        ve.bindFramebuffer(R.FRAMEBUFFER, ce);
        try {
          const pe = v.texture, Ae = pe.format, be = pe.type;
          if (!Fe.textureFormatReadable(Ae)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Fe.textureTypeReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= v.width - B && F >= 0 && F <= v.height - L && R.readPixels(D, F, B, L, Pe.convert(Ae), Pe.convert(be), j);
        } finally {
          const pe = I !== null ? xe.get(I).__webglFramebuffer : null;
          ve.bindFramebuffer(R.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, D, F, B, L, j, ie) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ce = xe.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        const pe = v.texture, Ae = pe.format, be = pe.type;
        if (!Fe.textureFormatReadable(Ae))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Fe.textureTypeReadable(be))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (D >= 0 && D <= v.width - B && F >= 0 && F <= v.height - L) {
          ve.bindFramebuffer(R.FRAMEBUFFER, ce);
          const Me = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Me), R.bufferData(R.PIXEL_PACK_BUFFER, j.byteLength, R.STREAM_READ), R.readPixels(D, F, B, L, Pe.convert(Ae), Pe.convert(be), 0);
          const He = I !== null ? xe.get(I).__webglFramebuffer : null;
          ve.bindFramebuffer(R.FRAMEBUFFER, He);
          const We = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Sl(R, We, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Me), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, j), R.deleteBuffer(Me), R.deleteSync(We), j;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(v, D = null, F = 0) {
      v.isTexture !== !0 && (qn("WebGLRenderer: copyFramebufferToTexture function signature has changed."), D = arguments[0] || null, v = arguments[1]);
      const B = Math.pow(2, -F), L = Math.floor(v.image.width * B), j = Math.floor(v.image.height * B), ie = D !== null ? D.x : 0, ce = D !== null ? D.y : 0;
      E.setTexture2D(v, 0), R.copyTexSubImage2D(R.TEXTURE_2D, F, 0, 0, ie, ce, L, j), ve.unbindTexture();
    };
    const Ro = R.createFramebuffer(), wo = R.createFramebuffer();
    this.copyTextureToTexture = function(v, D, F = null, B = null, L = 0, j = null) {
      v.isTexture !== !0 && (qn("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, v = arguments[1], D = arguments[2], j = arguments[3] || 0, F = null), j === null && (L !== 0 ? (qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), j = L, L = 0) : j = 0);
      let ie, ce, pe, Ae, be, Me, He, We, st;
      const tt = v.isCompressedTexture ? v.mipmaps[j] : v.image;
      if (F !== null)
        ie = F.max.x - F.min.x, ce = F.max.y - F.min.y, pe = F.isBox3 ? F.max.z - F.min.z : 1, Ae = F.min.x, be = F.min.y, Me = F.isBox3 ? F.min.z : 0;
      else {
        const bt = Math.pow(2, -L);
        ie = Math.floor(tt.width * bt), ce = Math.floor(tt.height * bt), v.isDataArrayTexture ? pe = tt.depth : v.isData3DTexture ? pe = Math.floor(tt.depth * bt) : pe = 1, Ae = 0, be = 0, Me = 0;
      }
      B !== null ? (He = B.x, We = B.y, st = B.z) : (He = 0, We = 0, st = 0);
      const Ve = Pe.convert(D.format), Se = Pe.convert(D.type);
      let ut;
      D.isData3DTexture ? (E.setTexture3D(D, 0), ut = R.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (E.setTexture2DArray(D, 0), ut = R.TEXTURE_2D_ARRAY) : (E.setTexture2D(D, 0), ut = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Xe = R.getParameter(R.UNPACK_ROW_LENGTH), Dt = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Dn = R.getParameter(R.UNPACK_SKIP_PIXELS), St = R.getParameter(R.UNPACK_SKIP_ROWS), ai = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, tt.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, tt.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ae), R.pixelStorei(R.UNPACK_SKIP_ROWS, be), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Me);
      const Je = v.isDataArrayTexture || v.isData3DTexture, At = D.isDataArrayTexture || D.isData3DTexture;
      if (v.isDepthTexture) {
        const bt = xe.get(v), pt = xe.get(D), gt = xe.get(bt.__renderTarget), ar = xe.get(pt.__renderTarget);
        ve.bindFramebuffer(R.READ_FRAMEBUFFER, gt.__webglFramebuffer), ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, ar.__webglFramebuffer);
        for (let _n = 0; _n < pe; _n++)
          Je && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, xe.get(v).__webglTexture, L, Me + _n), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, xe.get(D).__webglTexture, j, st + _n)), R.blitFramebuffer(Ae, be, ie, ce, He, We, ie, ce, R.DEPTH_BUFFER_BIT, R.NEAREST);
        ve.bindFramebuffer(R.READ_FRAMEBUFFER, null), ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else if (L !== 0 || v.isRenderTargetTexture || xe.has(v)) {
        const bt = xe.get(v), pt = xe.get(D);
        ve.bindFramebuffer(R.READ_FRAMEBUFFER, Ro), ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, wo);
        for (let gt = 0; gt < pe; gt++)
          Je ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, bt.__webglTexture, L, Me + gt) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, bt.__webglTexture, L), At ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, pt.__webglTexture, j, st + gt) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, pt.__webglTexture, j), L !== 0 ? R.blitFramebuffer(Ae, be, ie, ce, He, We, ie, ce, R.COLOR_BUFFER_BIT, R.NEAREST) : At ? R.copyTexSubImage3D(ut, j, He, We, st + gt, Ae, be, ie, ce) : R.copyTexSubImage2D(ut, j, He, We, Ae, be, ie, ce);
        ve.bindFramebuffer(R.READ_FRAMEBUFFER, null), ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else
        At ? v.isDataTexture || v.isData3DTexture ? R.texSubImage3D(ut, j, He, We, st, ie, ce, pe, Ve, Se, tt.data) : D.isCompressedArrayTexture ? R.compressedTexSubImage3D(ut, j, He, We, st, ie, ce, pe, Ve, tt.data) : R.texSubImage3D(ut, j, He, We, st, ie, ce, pe, Ve, Se, tt) : v.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, j, He, We, ie, ce, Ve, Se, tt.data) : v.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, j, He, We, tt.width, tt.height, Ve, tt.data) : R.texSubImage2D(R.TEXTURE_2D, j, He, We, ie, ce, Ve, Se, tt);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, Xe), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Dt), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Dn), R.pixelStorei(R.UNPACK_SKIP_ROWS, St), R.pixelStorei(R.UNPACK_SKIP_IMAGES, ai), j === 0 && D.generateMipmaps && R.generateMipmap(ut), ve.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, D, F = null, B = null, L = 0) {
      return v.isTexture !== !0 && (qn("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, B = arguments[1] || null, v = arguments[2], D = arguments[3], L = arguments[4] || 0), qn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, D, F, B, L);
    }, this.initRenderTarget = function(v) {
      xe.get(v).__webglFramebuffer === void 0 && E.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? E.setTextureCube(v, 0) : v.isData3DTexture ? E.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? E.setTexture2DArray(v, 0) : E.setTexture2D(v, 0), ve.unbindTexture();
    }, this.resetState = function() {
      b = 0, C = 0, I = null, ve.reset(), $e.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Ge._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ge._getUnpackColorSpace();
  }
}
const kd = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`, Wd = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(color * vColor, 1.0);
    gl_FragColor *= texture2D(pointTexture, gl_PointCoord);
  }
`;
function qd({
  imageUrl: i = "",
  particleTextureUrl: e = "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png",
  particleSize: t = 5,
  particleArea: n = 5e4,
  particleAmount: r = 1e5,
  ease: s = 0.5,
  style: a = {}
}) {
  const o = qs(null), l = qs(null);
  Po(() => {
    if (l.current)
      return;
    const d = new vo();
    let f = null;
    return d.onLoad = function() {
      l.current = new c(f);
    }, f = new tc(d).load(e), () => {
      l.current && (l.current.dispose(), l.current = null);
    };
  }, [e]);
  class c {
    constructor(f) {
      this.particle = f, this.container = o.current, this.scene = new ql(), this.scene.background = new ke(2236962), this.createCamera(), this.createRenderer(), this.setup(), this.bindEvents();
    }
    setup() {
      this.createParticles = new h(
        this.scene,
        this.particle,
        this.camera,
        this.renderer
      );
    }
    bindEvents() {
      window.addEventListener("resize", this.onWindowResize.bind(this));
    }
    createCamera() {
      this.camera = new Ct(
        65,
        this.container.clientWidth / this.container.clientHeight,
        1,
        1e4
      ), this.camera.position.set(0, 0, 800);
    }
    createRenderer() {
      this.renderer = new Gd({ antialias: !0 }), this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      ), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.container.appendChild(this.renderer.domElement), this.renderer.setAnimationLoop(() => {
        this.render();
      });
    }
    render() {
      this.createParticles.render(), this.renderer.render(this.scene, this.camera);
    }
    onWindowResize() {
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
    }
    dispose() {
      window.removeEventListener("resize", this.onWindowResize), this.renderer.dispose();
    }
  }
  class h {
    constructor(f, p, g, M) {
      this.scene = f, this.particleImg = p, this.camera = g, this.renderer = M, this.raycaster = new rc(), this.mouse = new Ze(-200, 200), this.currenPosition = new O(), this.isMouseDown = !1, this.images = [i], this.data = {
        amount: r,
        particleSize: t,
        area: n,
        ease: s
      }, this.currentImageIndex = 0;
      const m = new Si(
        this.visibleWidthAtZDepth(100, this.camera),
        this.visibleHeightAtZDepth(100, this.camera)
      ), u = new Fs({
        color: 65280,
        transparent: !0,
        opacity: 0
      });
      this.planeArea = new Ht(m, u), this.scene.add(this.planeArea), this.loadImageAndCreateParticles(this.images[this.currentImageIndex]);
      const A = this.renderer.domElement;
      A.addEventListener("mousedown", this.onMouseDown.bind(this)), A.addEventListener("mousemove", this.onMouseMove.bind(this)), A.addEventListener("mouseup", this.onMouseUp.bind(this));
    }
    loadImageAndCreateParticles(f) {
      const p = new Image();
      p.crossOrigin = "Anonymous", p.src = f, p.onload = () => {
        const g = document.createElement("canvas"), M = g.getContext("2d");
        g.width = p.width, g.height = p.height, M.drawImage(p, 0, 0);
        const m = M.getImageData(0, 0, g.width, g.height), u = this.createGeometryFromImageData(m);
        this.particles && (this.scene.remove(this.particles), this.particles.geometry.dispose(), this.particles.material.dispose());
        const A = new rn({
          uniforms: {
            color: { value: new ke(16777215) },
            pointTexture: { value: this.particleImg }
          },
          vertexShader: kd,
          fragmentShader: Wd,
          blending: Or,
          depthTest: !1,
          transparent: !0
        });
        this.particles = new $l(u, A), this.scene.add(this.particles), this.geometryCopy = new Gt(), this.geometryCopy.copy(this.particles.geometry);
      };
    }
    createGeometryFromImageData(f) {
      const { width: p, height: g, data: M } = f, m = [], u = [], A = [];
      let T = Math.floor(Math.sqrt(p * g / this.data.amount));
      T < 1 && (T = 1);
      for (let U = 0; U < g; U += T)
        for (let b = 0; b < p; b += T) {
          const C = (U * p + b) * 4, I = M[C], S = M[C + 1], x = M[C + 2];
          if (M[C + 3] > 50) {
            const k = b - p / 2, z = -(U - g / 2);
            m.push(new O(k, z, 0)), u.push(I / 255, S / 255, x / 255), A.push(this.data.particleSize);
          }
        }
      const y = new Gt().setFromPoints(m);
      return y.setAttribute(
        "customColor",
        new en(u, 3)
      ), y.setAttribute(
        "size",
        new en(A, 1)
      ), y;
    }
    onMouseDown(f) {
      this.isMouseDown = !0, this.data.ease = 0.01, this.updateMousePosition(f), this.updateCurrentPosition();
    }
    onMouseUp() {
      this.isMouseDown = !1, this.data.ease = s;
    }
    onMouseMove(f) {
      const p = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = (f.clientX - p.left) / p.width * 2 - 1, this.mouse.y = -((f.clientY - p.top) / p.height) * 2 + 1;
    }
    updateMousePosition(f) {
      const p = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = (f.clientX - p.left) / p.width * 2 - 1, this.mouse.y = -((f.clientY - p.top) / p.height) * 2 + 1;
    }
    updateCurrentPosition() {
      const f = new O(this.mouse.x, this.mouse.y, 0.5);
      f.unproject(this.camera);
      const p = f.sub(this.camera.position).normalize(), g = -this.camera.position.z / p.z;
      this.currenPosition.copy(
        this.camera.position.clone().add(p.multiplyScalar(g))
      );
    }
    render() {
      if (!this.particles || !this.geometryCopy) return;
      const f = this.particles.geometry.attributes.position, p = this.geometryCopy.attributes.position, g = this.particles.geometry.attributes.size, M = f.array, m = p.array, u = g.array;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const A = this.raycaster.intersectObject(this.planeArea);
      let T = null, y = null;
      A.length > 0 && (T = A[0].point.x, y = A[0].point.y);
      for (let U = 0; U < f.count; U++) {
        const b = U * 3, C = m[b], I = m[b + 1], S = m[b + 2];
        let x = M[b], w = M[b + 1], k = M[b + 2];
        if (T !== null && y !== null) {
          const z = T - x, W = y - w, $ = z * z + W * W, G = -this.data.area / $;
          if (this.isMouseDown) {
            const J = Math.atan2(W, z);
            x -= G * Math.cos(J), w -= G * Math.sin(J);
          } else if (Math.sqrt($) < this.data.area) {
            const H = Math.atan2(W, z);
            U % 5 === 0 ? (x -= 0.03 * Math.cos(H), w -= 0.03 * Math.sin(H), u[U] = this.data.particleSize / 1.2) : (x += G * Math.cos(H), w += G * Math.sin(H), u[U] = this.data.particleSize * 1.3);
          }
        }
        x += (C - x) * this.data.ease, w += (I - w) * this.data.ease, k += (S - k) * this.data.ease, M[b] = x, M[b + 1] = w, M[b + 2] = k;
      }
      f.needsUpdate = !0, g.needsUpdate = !0;
    }
    visibleHeightAtZDepth(f, p) {
      const g = p.position.z;
      f < g ? f -= g : f += g;
      const M = p.fov * Math.PI / 180;
      return 2 * Math.tan(M / 2) * Math.abs(f);
    }
    visibleWidthAtZDepth(f, p) {
      return this.visibleHeightAtZDepth(f, p) * p.aspect;
    }
  }
  return /* @__PURE__ */ Co.createElement(
    "div",
    {
      ref: o,
      style: { width: "100%", height: "100%", ...a }
    }
  );
}
export {
  qd as MagicParticles
};
