
export default class Arithmetic {
  static abs (x) {
    return Math.abs(x)
  }

  static acos (x) {
    return Math.acos(x)
  }

  static acosh (x) {
    return Math.acosh(x)
  }

  static acot (x) {
    return Math.atan(1 / x)
  }

  static acoth (x) {
    return Number.isFinite(x) ? (Math.log((x + 1) / x) + Math.log(x / (x - 1))) / 2 : 0
  }

  static acsc (x) {
    return Math.asin(1 / x)
  }

  static acsch (x) {
    const xInv = 1 / x
    return Math.log(xInv + Math.sqrt(xInv * xInv + 1))
  }

  static asec (x) {
    return Math.acos(1 / x)
  }

  static asech (x) {
    const xInv = 1 / x
    const ret = Math.sqrt(xInv * xInv - 1)
    return Math.log(ret + xInv)
  }

  static and (a, b) {
    return a & b
  }

  static asin (x) {
    return Math.asin(x)
  }

  static asinh (x) {
    return Math.asinh(x)
  }

  static atan (x) {
    return Math.atan(x)
  }

  static atan2 (x) {
    return Math.atan2(x)
  }

  static atanh (x) {
    return Math.atanh(x)
  }

  static cbrt (x) {
    return Math.cbrt(x)
  }

  static ceil (x) {
    return Math.ceil(x)
  }

  static clip (x, minValue, maxValue) {
    if (x > maxValue) {
      return maxValue
    }

    return x < minValue ? minValue : x
  }

  static clz32 (x) {
    return Math.clz32(x)
  }

  static cos (x) {
    return Math.cos(x)
  }

  static cosh (x) {
    return Math.cosh(x)
  }

  static cot (x) {
    return 1 / Math.tan(x)
  }

  static coth (x) {
    const e = Math.exp(2 * x)
    return (e + 1) / (e - 1)
  }

  static cube (x) {
    return x * x * x
  }

  static csc (x) {
    return 1 / Math.sin(x)
  }

  static csch (x) {
    if (x === 0) {
      return Number.POSITIVE_INFINITY
    } else {
      return Math.abs(2 / (Math.exp(x) - Math.exp(-x))) * Math.sign(x)
    }
  }

  static elu (x) {
    return x >= 0 ? x : (Math.exp(x) - 1)
  }

  static equal (a, b) {
    return a === b ? 1 : 0
  }

  static exp (x) {
    return Math.exp(x)
  }

  static expm1 (x) {
    return Math.expm1(x)
  }

  static floor (x) {
    return Math.floor(x)
  }

  static floorDiv (a, b) {
    return Math.floor(a / b)
  }

  static fround (x) {
    return Math.fround(x)
  }

  static gcd (a, b) {
    let r
    while (b !== 0) {
      r = a % b
      a = b
      b = r
    }
    return (a < 0) ? -a : a
  }

  static greater (a, b) {
    return a > b ? 1 : 0
  }

  static greaterEqual (a, b) {
    return a >= b ? 1 : 0
  }

  static hardMish (x, alpha = 2.85, threshold = 4.85) {
    return (
      x *
      this.clip(
        this.relu6(x + alpha) / threshold,
        -1,
        1
      )
    )
  }

  static hardSwish (x, alpha = 3.0, threshold = 6.0) {
    return (x * this.relu6(x + alpha)) / threshold
  }

  static hardSigmoid (x) {
    return Math.min(
      1,
      Math.max(
        0,
        (x * 0.2) + 0.5
      )
    )
  }

  static hypot (...nums) {
    return Math.hypot(...nums)
  }

  static imul (a, b) {
    return Math.imul(a, b)
  }

  static isFinite (x) {
    return Number.isFinite(x) ? 1 : 0
  }

  static isInfinity (x) {
    return Math.abs(x) === Infinity ? 1 : 0
  }

  static isNaN (x) {
    return Number.isNaN(x) ? 1 : 0
  }

  static lcd (a, b) {
    if (a === 0 || b === 0) {
      return 0
    }

    let t
    const prod = a * b
    while (b !== 0) {
      t = b
      b = a % t
      a = t
    }

    return Math.abs(prod / a)
  }

  static leakyRelu (x, alpha) {
    return x < 0 ? x * alpha : x
  }

  static less (a, b) {
    return a < b ? 1 : 0
  }

  static lessEqual (a, b) {
    return a <= b ? 1 : 0
  }

  static log (x) {
    return Math.log(x)
  }

  static log10 (x) {
    return Math.log10(x)
  }

  static log1p (x) {
    return Math.log1p(x)
  }

  static log2 (x) {
    return Math.log2(x)
  }

  static max (...values) {
    return Math.max(...values)
  }

  static mean (values) {
    let total = 0

    for (let index = 0; index < values.length; index++) {
      total += values[index]
    }

    return total / values.length
  }

  static min (...values) {
    return Math.min(...values)
  }

  static mish (x) {
    return x * Math.tanh(this.softplus(x))
  }

  static mod (a, b) {
    const rem = a % b
    if ((a < 0 && b < 0) || (a >= 0 && b >= 0)) {
      return rem
    } else {
      return (rem + b) % b
    }
  }

  static notEqual (a, b) {
    return a !== b ? 1 : 0
  }

  static pow (x, y) {
    return Math.pow(x, y)
  }

  static prelu (x, alpha) {
    return x < 0 ? alpha * x : x
  }

  static reciprocal (x) {
    return 1 / x
  }

  static relu (x) {
    return Math.max(0, x)
  }

  static relu6 (x) {
    return Math.min(Math.max(0, x), 6)
  }

  static rsqrt (x) {
    return 1 / Math.sqrt(x)
  }

  static round (x) {
    return Math.round(x)
  }

  static sec (x) {
    return 1 / Math.cos(x)
  }

  static sech (x) {
    return 2 / (Math.exp(x) + Math.exp(-x))
  }

  static sigmoid (x) {
    return 1 / (1 + Math.exp(-x))
  }

  static sign (x) {
    return Math.sign(x)
  }

  static sin (x) {
    return Math.sin(x)
  }

  static sinh (x) {
    return Math.sinh(x)
  }

  static selu (x, alpha = 1.67326324, scale = 1.05070098) {
    if (x >= 0) {
      return scale * x
    } else {
      return scale * alpha * (Math.exp(x) - 1)
    }
  }

  static shiftLeft (a, b) {
    return a << b
  }

  static shiftRight (a, b) {
    return a >> b
  }

  static softplus (x) {
    const threshold = -13.942385152878742

    const expX = Math.exp(x)

    if (x < threshold) {
      return expX
    } else if (x > -threshold) {
      return x
    } else {
      return Math.log(1.0 + expX)
    }
  }

  static sqrt (x) {
    return Math.sqrt(x)
  }

  static square (x) {
    return x * x
  }

  static squaredDifference (a, b) {
    const diff = a - b
    return diff * diff
  }

  static swish (x, alpha = 1) {
    return (
      x *
      this.sigmoid(x * alpha)
    )
  }

  static tan (x) {
    return Math.tan(x)
  }

  static tanh (x) {
    return Math.tanh(x)
  }

  static trunc (x) {
    return Math.trunc(x)
  }

  static xgcd (a, b) {
    let t // used to swap two variables
    let q // quotient
    let r // remainder
    let x = 0
    let lastx = 1
    let y = 1
    let lasty = 0

    while (b) {
      q = Math.floor(a / b)
      r = a - q * b

      t = x
      x = lastx - q * x
      lastx = t

      t = y
      y = lasty - q * y
      lasty = t

      a = b
      b = r
    }

    let res
    if (a < 0) {
      res = [-a, -lastx, -lasty]
    } else {
      res = [a, a ? lastx : 0, lasty]
    }
    return res
  }

  static xor (a, b) {
    return a ^ b
  }
}
