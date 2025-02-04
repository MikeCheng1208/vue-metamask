import { ref as en, onMounted as dl, createElementBlock as fl, openBlock as ll } from "vue";
var Ke;
(function(t) {
  t.NUMBER = "NUMBER_NUMBER", t.HEX = "NUMBER_HEX", t.STR = "NUMBER_STR", t.BIGINT = "NUMBER_BIGINT";
})(Ke || (Ke = {}));
var Bt;
(function(t) {
  t.HEX = "BYTES_HEX", t.UINT8ARRAY = "BYTES_UINT8ARRAY";
})(Bt || (Bt = {}));
const Be = {
  number: Ke.BIGINT,
  bytes: Bt.HEX
}, Z = { number: Ke.HEX, bytes: Bt.HEX };
var St;
(function(t) {
  t.EARLIEST = "earliest", t.LATEST = "latest", t.PENDING = "pending", t.SAFE = "safe", t.FINALIZED = "finalized", t.COMMITTED = "committed";
})(St || (St = {}));
var kr;
(function(t) {
  t.chainstart = "chainstart", t.frontier = "frontier", t.homestead = "homestead", t.dao = "dao", t.tangerineWhistle = "tangerineWhistle", t.spuriousDragon = "spuriousDragon", t.byzantium = "byzantium", t.constantinople = "constantinople", t.petersburg = "petersburg", t.istanbul = "istanbul", t.muirGlacier = "muirGlacier", t.berlin = "berlin", t.london = "london", t.altair = "altair", t.arrowGlacier = "arrowGlacier", t.grayGlacier = "grayGlacier", t.bellatrix = "bellatrix", t.merge = "merge", t.capella = "capella", t.shanghai = "shanghai";
})(kr || (kr = {}));
const Yo = Object.getPrototypeOf(Uint8Array);
var ic = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const sc = Symbol.for("web3/base-provider");
class si {
  static isWeb3Provider(e) {
    return e instanceof si || !!(e && e[sc]);
  }
  // To match an object "instanceof" does not work if
  // matcher class and object is using different package versions
  // to overcome this bottleneck used this approach.
  // The symbol value for one string will always remain same regardless of package versions
  // eslint-disable-next-line class-methods-use-this
  get [sc]() {
    return !0;
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   * @param callback - Callback
   */
  send(e, n) {
    this.request(e).then((r) => {
      n(null, r);
    }).catch((r) => {
      n(r);
    });
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   */
  sendAsync(e) {
    return ic(this, void 0, void 0, function* () {
      return this.request(e);
    });
  }
  /**
   * Modify the return type of the request method to be fully compatible with EIP-1193
   *
   * [deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
   * So this method will not be needed and would not be available in the future.
   *
   * @returns A new instance of the provider with the request method fully compatible with EIP-1193
   *
   * @example
   * ```ts
   * const provider = new Web3HttpProvider('http://localhost:8545');
   * const fullyCompatibleProvider = provider.asEIP1193Provider();
   * const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
   * console.log(result); // '0x0234c8a3397aab58' or something like that
   * ```
   */
  asEIP1193Provider() {
    const e = Object.create(this), n = e.request;
    return e.request = function(i) {
      return ic(this, void 0, void 0, function* () {
        return (yield n(i)).result;
      });
    }, e.asEIP1193Provider = void 0, e;
  }
}
class hl extends Array {
  constructor(e) {
    super(), this._accountProvider = e;
  }
}
const pl = 100, ml = 101, gl = 201, yl = 202, bl = 203, Al = 204, wl = 205, _l = 206, vl = 207, El = 208, Il = 300, xl = 301, Tl = 310, Sl = 311, kl = 400, Rl = 402, Bl = 405, Pl = 407, Cl = 408, Nl = 410, Ml = 411, Ol = 412, Ll = 413, Dl = 414, Fl = 415, Hl = 416, jl = 417, Ul = 418, Gl = 419, ql = 420, zl = 421, Vl = 422, Ql = 423, $l = 424, Zl = 425, Wl = 426, Kl = 427, Jl = 428, Yl = 429, Xl = 430, eh = 431, th = 432, nh = 433, rh = 434, ih = 435, sh = 436, oh = 437, ah = 438, ch = 439, uh = 440, dh = 441, fh = 500, lh = 503, hh = 505, ph = 506, mh = 507, gh = 600, yh = 602, bh = 603, Ah = 604, wh = 701, _h = 702, vh = 703, Eh = 704, Ih = 705, xh = 706, Th = 707, Sh = 709, kh = 801, Rh = 802, Bh = 4001, Ph = 4100, Ch = 4200, Nh = 4900, Mh = 4901, Oh = 902, Lh = 903, Dh = 1001, Fh = 1002, Hh = 1003, jh = 1004, Uh = 1005, Gh = 1006, qh = 1008, zh = 1009, Vh = 1010, Qh = 1011, $h = 1012, Zh = 1014, Wh = 1015, Kh = 1100, mu = 1101, Jh = 1200, Si = -32700, ki = -32600, Ri = -32601, Bi = -32602, Pi = -32603, Ci = -32e3, Ni = -32001, Mi = -32002, Oi = -32003, Li = -32004, Di = -32005, Fi = -32006;
class Q extends Error {
  /**
   * @deprecated Use the `cause` property instead.
   */
  get innerError() {
    return this.cause instanceof Rr ? this.cause.errors : this.cause;
  }
  /**
   * @deprecated Use the `cause` property instead.
   */
  set innerError(e) {
    Array.isArray(e) ? this.cause = new Rr(e) : this.cause = e;
  }
  constructor(e, n) {
    super(e), Array.isArray(n) ? this.cause = new Rr(n) : this.cause = n, this.name = this.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(new.target.constructor) : this.stack = new Error().stack;
  }
  static convertToString(e, n = !1) {
    if (e == null)
      return "undefined";
    const r = JSON.stringify(e, (i, s) => typeof s == "bigint" ? s.toString() : s);
    return n && ["bigint", "string"].includes(typeof e) ? r.replace(/['\\"]+/g, "") : r;
  }
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      cause: this.cause,
      // deprecated
      innerError: this.cause
    };
  }
}
class Rr extends Q {
  constructor(e) {
    super(`Multiple errors occurred: [${e.map((n) => n.message).join("], [")}]`), this.code = El, this.errors = e;
  }
}
class X extends Q {
  constructor(e, n) {
    super(`Invalid value given "${Q.convertToString(e, !0)}". Error: ${n}.`), this.name = this.constructor.name;
  }
}
class oc extends Q {
  constructor() {
    super("Private key must be 32 bytes."), this.code = wh;
  }
}
class Yh extends Q {
  constructor() {
    super("Invalid Private Key, Not a valid string or uint8Array"), this.code = _h;
  }
}
class Xh extends Q {
  constructor(e) {
    super(`"${e}"`), this.code = Rh;
  }
}
class gu extends Q {
  constructor() {
    super("Invalid key derivation function"), this.code = vh;
  }
}
class ep extends Q {
  constructor() {
    super("Key derivation failed - possibly wrong password"), this.code = Eh;
  }
}
class tp extends Q {
  constructor() {
    super("Unsupported key store version"), this.code = Ih;
  }
}
class np extends Q {
  constructor() {
    super("Password cannot be empty"), this.code = xh;
  }
}
class rp extends Q {
  constructor() {
    super("Initialization vector must be 16 bytes"), this.code = Th;
  }
}
class ip extends Q {
  constructor() {
    super("c > 1000, pbkdf2 is less secure with less iterations"), this.code = Sh;
  }
}
class oi extends Q {
  constructor(e, n) {
    super(e), this.code = fh, n && (this.errorCode = n.code, this.errorReason = n.reason);
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { errorCode: this.errorCode, errorReason: this.errorReason });
  }
}
class yo extends oi {
  constructor(e) {
    super("Connection not open", e), this.code = lh;
  }
}
class sp extends oi {
  constructor(e) {
    super(`Maximum number of reconnect attempts reached! (${e})`), this.code = hh;
  }
}
class op extends oi {
  constructor() {
    super("CONNECTION ERROR: Provider started to reconnect before the response got received!"), this.code = ph;
  }
}
class ap extends oi {
  constructor(e) {
    super(`Request already sent with following id: ${e}`), this.code = mh;
  }
}
class Pe extends Q {
  constructor(e, n) {
    super(e), this.code = Il, this.receipt = n;
  }
}
class ac extends Q {
  constructor(e, n) {
    super(`The resolver at ${e} does not implement requested method: "${n}".`), this.address = e, this.name = n, this.code = xl;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { address: this.address, name: this.name });
  }
}
class _s extends Pe {
  constructor(e) {
    if (super(e.message || "Error"), this.name = "name" in e && e.name || this.constructor.name, this.stack = "stack" in e && e.stack || void 0, this.code = e.code, typeof e.data == "object") {
      let n;
      e.data && "originalError" in e.data ? n = e.data.originalError : n = e.data, this.data = n.data, this.cause = new _s(n);
    } else
      this.data = e.data;
  }
  setDecodedProperties(e, n, r) {
    this.errorName = e, this.errorSignature = n, this.errorArgs = r;
  }
  toJSON() {
    let e = Object.assign(Object.assign({}, super.toJSON()), { data: this.data });
    return this.errorName && (e = Object.assign(Object.assign({}, e), { errorName: this.errorName, errorSignature: this.errorSignature, errorArgs: this.errorArgs })), e;
  }
}
class fn extends Pe {
  constructor(e) {
    super("Error happened while trying to execute a function inside a smart contract"), this.code = Tl, this.cause = new _s(e);
  }
}
class cp extends X {
  constructor(e) {
    var n, r;
    super(`data: ${(n = e.data) !== null && n !== void 0 ? n : "undefined"}, input: ${(r = e.input) !== null && r !== void 0 ? r : "undefined"}`, `You can't have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.`), this.code = Sl;
  }
}
class up extends Q {
  constructor(e) {
    super(`ENS is not supported on network ${e}`), this.code = Oh;
  }
}
class dp extends Q {
  constructor() {
    super("Network not synced"), this.code = Lh;
  }
}
class cc extends Q {
  constructor(e) {
    super(`Invalid parameters passed. "${typeof e < "u" ? e : ""}"`), this.hint = e, this.code = vl;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { hint: this.hint });
  }
}
class bo extends Q {
  constructor() {
    super(...arguments), this.code = gl;
  }
}
class bt extends Q {
  constructor() {
    super("The method you're trying to call is not implemented."), this.code = yl;
  }
}
class yu extends Q {
  constructor() {
    super(...arguments), this.code = bl;
  }
}
class fp extends Q {
  constructor() {
    super(...arguments), this.code = Al;
  }
}
class te extends Q {
  constructor(e, n) {
    super(e), this.code = wl, this.props = n ?? {};
  }
}
class lp extends Q {
  constructor(e) {
    super(`A plugin with the namespace: ${e} has already been registered.`), this.code = _l;
  }
}
class Ai extends Q {
  constructor() {
    super(...arguments), this.code = gh;
  }
}
class Ao extends Q {
  constructor(e) {
    super(`Client URL "${e}" is invalid.`), this.code = yh;
  }
}
class It extends Q {
  constructor() {
    super(...arguments), this.code = bh;
  }
}
class hp extends Q {
  constructor() {
    super(...arguments), this.code = Ah;
  }
}
class pp extends X {
  constructor() {
    super(...arguments), this.code = kh;
  }
}
class Xo extends Q {
  constructor(e, n) {
    super(e), this.receipt = n, this.code = kl;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { receipt: this.receipt });
  }
}
class Hi extends Q {
  constructor(e, n, r, i) {
    super(`Transaction has been reverted by the EVM${r === void 0 ? "" : `:
 ${Q.convertToString(r)}`}`), this.reason = e, this.signature = n, this.receipt = r, this.data = i, this.code = Rl;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reason: this.reason, signature: this.signature, receipt: this.receipt, data: this.data });
  }
}
class bu extends Hi {
  constructor(e, n, r, i, s, o, a) {
    super(e), this.reason = e, this.customErrorName = n, this.customErrorDecodedSignature = r, this.customErrorArguments = i, this.signature = s, this.receipt = o, this.data = a, this.code = ah;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reason: this.reason, customErrorName: this.customErrorName, customErrorDecodedSignature: this.customErrorDecodedSignature, customErrorArguments: this.customErrorArguments, signature: this.signature, receipt: this.receipt, data: this.data });
  }
}
class Au extends Xo {
  constructor(e) {
    super(`Transaction has been reverted by the EVM${e === void 0 ? "" : `:
 ${Q.convertToString(e)}`}`, e), this.code = Bl;
  }
}
class mp extends Xo {
  constructor() {
    super("Raw transaction undefined"), this.code = Pl;
  }
}
class uc extends Xo {
  constructor() {
    super("Transaction not found"), this.code = Xl;
  }
}
class gp extends X {
  constructor(e) {
    super(e, "invalid transaction with invalid sender"), this.code = Cl;
  }
}
class yp extends X {
  constructor(e) {
    super(e, "invalid transaction with invalid receiver"), this.code = oh;
  }
}
class bp extends X {
  constructor() {
    super("MissingCustomChainError", "If tx.common is provided it must have tx.common.customChain"), this.code = Nl;
  }
}
class Ap extends X {
  constructor() {
    super("MissingCustomChainIdError", "If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId"), this.code = Ml;
  }
}
class wp extends X {
  constructor(e) {
    super(
      JSON.stringify(e),
      // https://github.com/ChainSafe/web3.js/blob/8783f4d64e424456bdc53b34ef1142d0a7cee4d7/packages/web3-eth-accounts/src/index.js#L176
      "Chain Id doesnt match in tx.chainId tx.common.customChain.chainId"
    ), this.code = Ol;
  }
}
class _p extends X {
  constructor(e) {
    super(JSON.stringify(e), "Chain doesnt match in tx.chain tx.common.basechain"), this.code = ih;
  }
}
class vp extends X {
  constructor(e) {
    super(JSON.stringify(e), "hardfork doesnt match in tx.hardfork tx.common.hardfork"), this.code = sh;
  }
}
class Ep extends X {
  constructor() {
    super("CommonOrChainAndHardforkError", "Please provide the common object or the chain and hardfork property but not all together."), this.code = Ll;
  }
}
class Ip extends X {
  constructor(e) {
    var n, r;
    super("MissingChainOrHardforkError", `When specifying chain and hardfork, both values must be defined. Received "chain": ${(n = e.chain) !== null && n !== void 0 ? n : "undefined"}, "hardfork": ${(r = e.hardfork) !== null && r !== void 0 ? r : "undefined"}`), this.code = Dl;
  }
}
class xp extends Q {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions'), this.code = uh;
  }
}
class Tp extends X {
  constructor(e) {
    var n, r, i, s;
    super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}, maxPriorityFeePerGas: ${(i = e.maxPriorityFeePerGas) !== null && i !== void 0 ? i : "undefined"}, maxFeePerGas: ${(s = e.maxFeePerGas) !== null && s !== void 0 ? s : "undefined"}`, '"gas" is missing'), this.code = Fl, this.cause = new xp();
  }
}
class Sp extends Q {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both'), this.code = dh;
  }
}
class kp extends X {
  constructor(e) {
    var n, r, i, s;
    super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}, maxPriorityFeePerGas: ${(i = e.maxPriorityFeePerGas) !== null && i !== void 0 ? i : "undefined"}, maxFeePerGas: ${(s = e.maxFeePerGas) !== null && s !== void 0 ? s : "undefined"}`, "transaction must specify legacy or fee market gas properties, not both"), this.code = rh, this.cause = new Sp();
  }
}
class Rp extends X {
  constructor(e) {
    var n, r;
    super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}`, "Gas or gasPrice is lower than 0"), this.code = Hl;
  }
}
class Bp extends X {
  constructor(e) {
    var n, r;
    super(`maxPriorityFeePerGas: ${(n = e.maxPriorityFeePerGas) !== null && n !== void 0 ? n : "undefined"}, maxFeePerGas: ${(r = e.maxFeePerGas) !== null && r !== void 0 ? r : "undefined"}`, "maxPriorityFeePerGas or maxFeePerGas is lower than 0"), this.code = jl;
  }
}
class Pp extends X {
  constructor(e) {
    super(e, "eip-1559 transactions don't support gasPrice"), this.code = Ul;
  }
}
class wu extends X {
  constructor(e) {
    var n, r;
    super(`maxPriorityFeePerGas: ${(n = e.maxPriorityFeePerGas) !== null && n !== void 0 ? n : "undefined"}, maxFeePerGas: ${(r = e.maxFeePerGas) !== null && r !== void 0 ? r : "undefined"}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas"), this.code = Gl;
  }
}
class Cp extends X {
  constructor(e) {
    super(e, "invalid transaction object"), this.code = ql;
  }
}
class Np extends X {
  constructor(e) {
    var n, r;
    super(`nonce: ${(n = e.nonce) !== null && n !== void 0 ? n : "undefined"}, chainId: ${(r = e.chainId) !== null && r !== void 0 ? r : "undefined"}`, "Nonce or chainId is lower than 0"), this.code = zl;
  }
}
class Mp extends X {
  constructor() {
    super("UnableToPopulateNonceError", "unable to populate nonce, no from address available"), this.code = Vl;
  }
}
class Op extends X {
  constructor() {
    super("Eip1559NotSupportedError", "Network doesn't support eip-1559"), this.code = Ql;
  }
}
class dc extends X {
  constructor(e) {
    super(e, "unsupported transaction type"), this.code = $l;
  }
}
class _u extends X {
  constructor(e) {
    var n, r;
    super(`data: ${(n = e.data) !== null && n !== void 0 ? n : "undefined"}, input: ${(r = e.input) !== null && r !== void 0 ? r : "undefined"}`, `You can't have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.`), this.code = Zl;
  }
}
class Lp extends Q {
  constructor(e) {
    super(`The connected Ethereum Node did not respond within ${e.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!
	Transaction Hash: ${e.transactionHash ? e.transactionHash.toString() : "not available"}`), this.code = eh;
  }
}
function vu(t) {
  return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!
	Transaction Hash: ${t ? t.toString() : "not available"}`;
}
class Eu extends Q {
  constructor(e) {
    super(`Transaction was not mined within ${e.numberOfSeconds} seconds. ${vu(e.transactionHash)}`), this.code = Wl;
  }
}
class Iu extends Q {
  constructor(e) {
    super(`Transaction started at ${e.starterBlockNumber} but was not mined within ${e.numberOfBlocks} blocks. ${vu(e.transactionHash)}`), this.code = th;
  }
}
class Dp extends X {
  constructor(e) {
    var n, r;
    super(`receipt: ${JSON.stringify(e.receipt)}, blockHash: ${(n = e.blockHash) === null || n === void 0 ? void 0 : n.toString()}, transactionHash: ${(r = e.transactionHash) === null || r === void 0 ? void 0 : r.toString()}`, "Receipt missing or blockHash null"), this.code = Kl;
  }
}
class Fp extends X {
  constructor(e) {
    super(`receipt: ${JSON.stringify(e.receipt)}`, "Receipt missing block number"), this.code = Jl;
  }
}
class wo extends Q {
  constructor(e) {
    super(`Invalid signature. "${e}"`), this.code = nh;
  }
}
class fc extends X {
  constructor() {
    super("LocalWalletNotAvailableError", "Attempted to index account in local wallet, but no wallet is available"), this.code = Yl;
  }
}
class Hp extends Q {
  constructor(e, n) {
    const r = [];
    e.forEach((i) => r.push(i.keyword)), super(`The following properties are invalid for the transaction type ${n}: ${r.join(", ")}`), this.code = ch;
  }
}
class qn extends X {
  constructor(e) {
    super(e, "can not parse as byte data"), this.code = Fh;
  }
}
class ea extends X {
  constructor(e) {
    super(e, "can not parse as number data"), this.code = Hh;
  }
}
class ta extends X {
  constructor(e) {
    super(e, "invalid ethereum address"), this.code = Uh;
  }
}
class jp extends X {
  constructor(e) {
    super(e, "not a valid string"), this.code = Dh;
  }
}
class xu extends X {
  constructor(e) {
    super(e, "invalid unit"), this.code = jh;
  }
}
class Tu extends X {
  constructor(e) {
    super(e, "not a valid unit. Must be a positive integer"), this.code = Wh;
  }
}
class Up extends X {
  constructor(e) {
    super(e, "can not be converted to hex"), this.code = Gh;
  }
}
class Su extends X {
  constructor(e) {
    super(e, "value greater than the nibble width"), this.code = Zh;
  }
}
class na extends X {
  constructor(e) {
    super(e, "not a valid boolean."), this.code = qh;
  }
}
class Gp extends X {
  constructor(e) {
    super(e, "not a valid unsigned integer."), this.code = zh;
  }
}
class lc extends X {
  constructor(e) {
    super(e, "invalid size given."), this.code = Vh;
  }
}
class hc extends X {
  constructor(e) {
    super(e, "value is larger than size."), this.code = Qh;
  }
}
class qp extends X {
  constructor(e) {
    super(e, "invalid string given"), this.code = $h;
  }
}
const zp = (t) => !Array.isArray(t) && t.jsonrpc === "2.0" && !!t && // eslint-disable-next-line no-null/no-null
(t.result === void 0 || t.result === null) && // JSON RPC consider "null" as valid response
"error" in t && (typeof t.id == "number" || typeof t.id == "string"), pc = (t) => zp(t) ? t.error.message : "";
class ut extends Q {
  constructor(e, n, r, i) {
    var s;
    super(n ?? `Returned error: ${Array.isArray(e) ? e.map((a) => pc(a)).join(",") : pc(e)}`), this.code = pl, n || (this.data = Array.isArray(e) ? e.map((a) => {
      var d;
      return (d = a.error) === null || d === void 0 ? void 0 : d.data;
    }) : (s = e == null ? void 0 : e.error) === null || s === void 0 ? void 0 : s.data), this.statusCode = i, this.request = r;
    let o;
    "error" in e ? o = e.error : e instanceof Array && (o = e.filter((a) => a.error).map((a) => a.error)), Array.isArray(o) && o.length > 0 ? this.cause = new Rr(o) : this.cause = o;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { data: this.data, request: this.request, statusCode: this.statusCode });
  }
}
class vs extends ut {
  constructor(e, n) {
    super(e, void 0, n), this.code = ml;
    let r;
    "error" in e ? r = e.error : e instanceof Array && (r = e.map((i) => i.error)), Array.isArray(r) ? this.cause = new Rr(r) : this.cause = r;
  }
}
class mc extends Q {
  constructor(e, n) {
    super(`Web3Config hardfork doesnt match in defaultHardfork ${e} and common.hardfork ${n}`), this.code = mu;
  }
}
class gc extends Q {
  constructor(e, n) {
    super(`Web3Config chain doesnt match in defaultHardfork ${e} and common.hardfork ${n}`), this.code = mu;
  }
}
const ku = "An Rpc error has occured with a code of *code*", Se = {
  //  EIP-1474 & JSON RPC 2.0
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
  [Si]: {
    message: "Parse error",
    description: "Invalid JSON"
  },
  [ki]: {
    message: "Invalid request",
    description: "JSON is not a valid request object	"
  },
  [Ri]: {
    message: "Method not found",
    description: "Method does not exist	"
  },
  [Bi]: {
    message: "Invalid params",
    description: "Invalid method parameters"
  },
  [Pi]: {
    message: "Internal error",
    description: "Internal JSON-RPC error"
  },
  [Ci]: {
    message: "Invalid input",
    description: "Missing or invalid parameters"
  },
  [Ni]: {
    message: "Resource not found",
    description: "Requested resource not found"
  },
  [Mi]: {
    message: "Resource unavailable",
    description: "Requested resource not available"
  },
  [Oi]: {
    message: "Transaction rejected",
    description: "Transaction creation failed"
  },
  [Li]: {
    message: "Method not supported",
    description: "Method is not implemented"
  },
  [Di]: {
    message: "Limit exceeded",
    description: "Request exceeds defined limit"
  },
  [Fi]: {
    message: "JSON-RPC version not supported",
    description: "Version of JSON-RPC protocol is not supported"
  },
  // EIP-1193
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
  [Bh]: {
    name: "User Rejected Request",
    message: "The user rejected the request."
  },
  [Ph]: {
    name: "Unauthorized",
    message: "The requested method and/or account has not been authorized by the user."
  },
  [Ch]: {
    name: "Unsupported Method",
    message: "The Provider does not support the requested method."
  },
  [Nh]: {
    name: "Disconnected",
    message: "The Provider is disconnected from all chains."
  },
  [Mh]: {
    name: "Chain Disconnected",
    message: "The Provider is not connected to the requested chain."
  },
  // EIP-1193 - CloseEvent
  // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  "0-999": {
    name: "",
    message: "Not used."
  },
  1e3: {
    name: "Normal Closure",
    message: "The connection successfully completed the purpose for which it was created."
  },
  1001: {
    name: "Going Away",
    message: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
  },
  1002: {
    name: "Protocol error",
    message: "The endpoint is terminating the connection due to a protocol error."
  },
  1003: {
    name: "Unsupported Data",
    message: "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)"
  },
  1004: {
    name: "Reserved",
    message: "Reserved. A meaning might be defined in the future."
  },
  1005: {
    name: "No Status Rcvd",
    message: "Reserved. Indicates that no status code was provided even though one was expected."
  },
  1006: {
    name: "Abnormal Closure",
    message: "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
  },
  1007: {
    name: "Invalid frame payload data",
    message: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
  },
  1008: {
    name: "Policy Violation",
    message: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
  },
  1009: {
    name: "Message Too Big",
    message: "The endpoint is terminating the connection because a data frame was received that is too large."
  },
  1010: {
    name: "Mandatory Ext.",
    message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
  },
  1011: {
    name: "Internal Error",
    message: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
  },
  1012: {
    name: "Service Restart",
    message: "The server is terminating the connection because it is restarting."
  },
  1013: {
    name: "Try Again Later",
    message: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
  },
  1014: {
    name: "Bad Gateway",
    message: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
  },
  1015: {
    name: "TLS handshake",
    message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
  },
  "1016-2999": {
    name: "",
    message: "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications."
  },
  "3000-3999": {
    name: "",
    message: "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol."
  },
  "4000-4999": {
    name: "",
    message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
  }
};
class ze extends Q {
  constructor(e, n) {
    super(n ?? ku.replace("*code*", e.error.code.toString())), this.code = e.error.code, this.id = e.id, this.jsonrpc = e.jsonrpc, this.jsonRpcError = e.error;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { error: this.jsonRpcError, id: this.id, jsonRpc: this.jsonrpc });
  }
}
class Vp extends Q {
  constructor(e, n) {
    var r, i, s, o;
    if (!e)
      super();
    else if (!((r = Se[e]) === null || r === void 0) && r.message)
      super(Se[e].message);
    else {
      const a = Object.keys(Se).find((d) => typeof d == "string" && e >= parseInt(d.split("-")[0], 10) && e <= parseInt(d.split("-")[1], 10));
      super((s = (i = Se[a ?? ""]) === null || i === void 0 ? void 0 : i.message) !== null && s !== void 0 ? s : ku.replace("*code*", (o = e == null ? void 0 : e.toString()) !== null && o !== void 0 ? o : '""'));
    }
    this.code = e, this.data = n;
  }
}
class Qp extends ze {
  constructor(e) {
    super(e, Se[Si].message), this.code = Si;
  }
}
class $p extends ze {
  constructor(e) {
    super(e, Se[ki].message), this.code = ki;
  }
}
class Zp extends ze {
  constructor(e) {
    super(e, Se[Ri].message), this.code = Ri;
  }
}
class Wp extends ze {
  constructor(e) {
    super(e, Se[Bi].message), this.code = Bi;
  }
}
class Kp extends ze {
  constructor(e) {
    super(e, Se[Pi].message), this.code = Pi;
  }
}
class Jp extends ze {
  constructor(e) {
    super(e, Se[Ci].message), this.code = Ci;
  }
}
class Yp extends ze {
  constructor(e) {
    super(e, Se[Li].message), this.code = Li;
  }
}
class Xp extends ze {
  constructor(e) {
    super(e, Se[Mi].message), this.code = Mi;
  }
}
class em extends ze {
  constructor(e) {
    super(e, Se[Ni].message), this.code = Ni;
  }
}
class tm extends ze {
  constructor(e) {
    super(e, Se[Fi].message), this.code = Fi;
  }
}
class nm extends ze {
  constructor(e) {
    super(e, Se[Oi].message), this.code = Oi;
  }
}
class rm extends ze {
  constructor(e) {
    super(e, Se[Di].message), this.code = Di;
  }
}
const Ce = /* @__PURE__ */ new Map();
Ce.set(Si, { error: Qp });
Ce.set(ki, {
  error: $p
});
Ce.set(Ri, {
  error: Zp
});
Ce.set(Bi, { error: Wp });
Ce.set(Pi, { error: Kp });
Ce.set(Ci, { error: Jp });
Ce.set(Li, {
  error: Yp
});
Ce.set(Mi, {
  error: Xp
});
Ce.set(Oi, {
  error: nm
});
Ce.set(Ni, {
  error: em
});
Ce.set(Fi, {
  error: tm
});
Ce.set(Di, { error: rm });
class im extends Q {
  constructor(e) {
    super(`Format for the type ${e} is unsupported`), this.type = e, this.code = Jh;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { type: this.type });
  }
}
function Le(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function sm(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
function om(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function fr(t, ...e) {
  if (!om(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function ra(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Le(t.outputLen), Le(t.blockLen);
}
function yn(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function ia(t, e) {
  fr(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Ru = { number: Le, bool: sm, bytes: fr, hash: ra, exists: yn, output: ia }, pi = /* @__PURE__ */ BigInt(2 ** 32 - 1), yc = /* @__PURE__ */ BigInt(32);
function am(t, e = !1) {
  return e ? { h: Number(t & pi), l: Number(t >> yc & pi) } : { h: Number(t >> yc & pi) | 0, l: Number(t & pi) | 0 };
}
function cm(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: o } = am(t[i], e);
    [n[i], r[i]] = [s, o];
  }
  return [n, r];
}
const um = (t, e, n) => t << n | e >>> 32 - n, dm = (t, e, n) => e << n | t >>> 32 - n, fm = (t, e, n) => e << n - 32 | t >>> 64 - n, lm = (t, e, n) => t << n - 32 | e >>> 64 - n, wi = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _i = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), vi = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), st = (t, e) => t << 32 - e | t >>> e, ie = (t, e) => t << e | t >>> 32 - e >>> 0, ji = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, hm = (t) => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
function Ui(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = hm(t[e]);
}
function $n(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Zn(t) {
  return typeof t == "string" && (t = $n(t)), fr(t), t;
}
function Gi(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    fr(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
class sa {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
const pm = {}.toString;
function Bu(t, e) {
  if (e !== void 0 && pm.call(e) !== "[object Object]")
    throw new Error("Options should be object or undefined");
  return Object.assign(t, e);
}
function Pu(t) {
  const e = (r) => t().update(Zn(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Cu(t = 32) {
  if (wi && typeof wi.getRandomValues == "function")
    return wi.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const Nu = [], Mu = [], Ou = [], mm = /* @__PURE__ */ BigInt(0), Ar = /* @__PURE__ */ BigInt(1), gm = /* @__PURE__ */ BigInt(2), ym = /* @__PURE__ */ BigInt(7), bm = /* @__PURE__ */ BigInt(256), Am = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = Ar, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Nu.push(2 * (5 * r + n)), Mu.push((t + 1) * (t + 2) / 2 % 64);
  let i = mm;
  for (let s = 0; s < 7; s++)
    e = (e << Ar ^ (e >> ym) * Am) % bm, e & gm && (i ^= Ar << (Ar << /* @__PURE__ */ BigInt(s)) - Ar);
  Ou.push(i);
}
const [wm, _m] = /* @__PURE__ */ cm(Ou, !0), bc = (t, e, n) => n > 32 ? fm(t, e, n) : um(t, e, n), Ac = (t, e, n) => n > 32 ? lm(t, e, n) : dm(t, e, n);
function vm(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, d = (o + 2) % 10, u = n[d], c = n[d + 1], f = bc(u, c, 1) ^ n[a], h = Ac(u, c, 1) ^ n[a + 1];
      for (let g = 0; g < 50; g += 10)
        t[o + g] ^= f, t[o + g + 1] ^= h;
    }
    let i = t[2], s = t[3];
    for (let o = 0; o < 24; o++) {
      const a = Mu[o], d = bc(i, s, a), u = Ac(i, s, a), c = Nu[o];
      i = t[c], s = t[c + 1], t[c] = d, t[c + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    t[0] ^= wm[r], t[1] ^= _m[r];
  }
  n.fill(0);
}
class oa extends sa {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, n, r, i = !1, s = 24) {
    if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Le(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = _i(this.state);
  }
  keccak() {
    ji || Ui(this.state32), vm(this.state32, this.rounds), ji || Ui(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    yn(this);
    const { blockLen: n, state: r } = this;
    e = Zn(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(n - this.pos, i - s);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[s++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: i } = this;
    e[r] ^= n, n & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    yn(this, !1), fr(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let i = 0, s = e.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      e.set(n.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Le(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (ia(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o } = this;
    return e || (e = new oa(n, r, i, o, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const Em = (t, e, n) => Pu(() => new oa(e, t, n)), wc = /* @__PURE__ */ Em(1, 136, 256 / 8), qi = Ru.bytes;
function Lu(t) {
  if (!(t instanceof Uint8Array))
    throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof t}`);
  return new TextDecoder().decode(t);
}
function Im(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function xm(t) {
  return (e) => (Ru.bytes(e), t(e));
}
(() => {
  const t = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0, e = typeof module < "u" && typeof module.require == "function" && module.require.bind(module);
  return {
    node: e && !t ? e("crypto") : void 0,
    web: t
  };
})();
const Re = (() => {
  const t = xm(wc);
  return t.create = wc.create, t;
})();
var re;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function n(i) {
    throw new Error();
  }
  t.assertNever = n, t.arrayToEnum = (i) => {
    const s = {};
    for (const o of i)
      s[o] = o;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), o = {};
    for (const a of s)
      o[a] = i[a];
    return t.objectValues(o);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
    return s;
  }, t.find = (i, s) => {
    for (const o of i)
      if (s(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, s = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  t.joinValues = r, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(re || (re = {}));
var _o;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(_o || (_o = {}));
const O = re.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), xt = (t) => {
  switch (typeof t) {
    case "undefined":
      return O.undefined;
    case "string":
      return O.string;
    case "number":
      return isNaN(t) ? O.nan : O.number;
    case "boolean":
      return O.boolean;
    case "function":
      return O.function;
    case "bigint":
      return O.bigint;
    case "symbol":
      return O.symbol;
    case "object":
      return Array.isArray(t) ? O.array : t === null ? O.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? O.promise : typeof Map < "u" && t instanceof Map ? O.map : typeof Set < "u" && t instanceof Set ? O.set : typeof Date < "u" && t instanceof Date ? O.date : O.object;
    default:
      return O.unknown;
  }
}, S = re.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Tm = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ue extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const n = e || function(s) {
      return s.message;
    }, r = { _errors: [] }, i = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let a = r, d = 0;
          for (; d < o.path.length; ) {
            const u = o.path[d];
            d === o.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(o))) : a[u] = a[u] || { _errors: [] }, a = a[u], d++;
          }
        }
    };
    return i(this), r;
  }
  static assert(e) {
    if (!(e instanceof Ue))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, re.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e(i))) : r.push(e(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ue.create = (t) => new Ue(t);
const Wn = (t, e) => {
  let n;
  switch (t.code) {
    case S.invalid_type:
      t.received === O.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case S.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, re.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${re.joinValues(t.keys, ", ")}`;
      break;
    case S.invalid_union:
      n = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${re.joinValues(t.options)}`;
      break;
    case S.invalid_enum_value:
      n = `Invalid enum value. Expected ${re.joinValues(t.options)}, received '${t.received}'`;
      break;
    case S.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      n = "Invalid function return type";
      break;
    case S.invalid_date:
      n = "Invalid date";
      break;
    case S.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : re.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case S.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case S.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case S.custom:
      n = "Invalid input";
      break;
    case S.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case S.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, re.assertNever(t);
  }
  return { message: n };
};
let Du = Wn;
function Sm(t) {
  Du = t;
}
function zi() {
  return Du;
}
const Vi = (t) => {
  const { data: e, path: n, errorMaps: r, issueData: i } = t, s = [...n, ...i.path || []], o = {
    ...i,
    path: s
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: s,
      message: i.message
    };
  let a = "";
  const d = r.filter((u) => !!u).slice().reverse();
  for (const u of d)
    a = u(o, { data: e, defaultError: a }).message;
  return {
    ...i,
    path: s,
    message: a
  };
}, km = [];
function C(t, e) {
  const n = zi(), r = Vi({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      // contextual error map is first priority
      t.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === Wn ? void 0 : Wn
      // then global default map
    ].filter((i) => !!i)
  });
  t.common.issues.push(r);
}
class ke {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return V;
      i.status === "dirty" && e.dirty(), r.push(i.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const i of n) {
      const s = await i.key, o = await i.value;
      r.push({
        key: s,
        value: o
      });
    }
    return ke.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const i of n) {
      const { key: s, value: o } = i;
      if (s.status === "aborted" || o.status === "aborted")
        return V;
      s.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value);
    }
    return { status: e.value, value: r };
  }
}
const V = Object.freeze({
  status: "aborted"
}), jn = (t) => ({ status: "dirty", value: t }), Ne = (t) => ({ status: "valid", value: t }), vo = (t) => t.status === "aborted", Eo = (t) => t.status === "dirty", bn = (t) => t.status === "valid", Nr = (t) => typeof Promise < "u" && t instanceof Promise;
function Qi(t, e, n, r) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function Fu(t, e, n, r, i) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, n), n;
}
var H;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(H || (H = {}));
var Ir, xr;
class pt {
  constructor(e, n, r, i) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const _c = (t, e) => {
  if (bn(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Ue(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function J(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: r, description: i } = t;
  if (e && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (o, a) => {
    var d, u;
    const { message: c } = t;
    return o.code === "invalid_enum_value" ? { message: c ?? a.defaultError } : typeof a.data > "u" ? { message: (d = c ?? r) !== null && d !== void 0 ? d : a.defaultError } : o.code !== "invalid_type" ? { message: a.defaultError } : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError };
  }, description: i };
}
class Y {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return xt(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: xt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ke(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: xt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Nr(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: xt(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return _c(i, s);
  }
  "~validate"(e) {
    var n, r;
    const i = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: xt(e)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: e, path: [], parent: i });
        return bn(s) ? {
          value: s.value
        } : {
          issues: i.common.issues
        };
      } catch (s) {
        !((r = (n = s == null ? void 0 : s.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = !0), i.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: i }).then((s) => bn(s) ? {
      value: s.value
    } : {
      issues: i.common.issues
    });
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: xt(e)
    }, i = this._parse({ data: e, path: r.path, parent: r }), s = await (Nr(i) ? i : Promise.resolve(i));
    return _c(r, s);
  }
  refine(e, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, s) => {
      const o = e(i), a = () => s.addIssue({
        code: S.custom,
        ...r(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((d) => d ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(e) {
    return new rt({
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return ht.create(this, this._def);
  }
  nullable() {
    return Zt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return nt.create(this);
  }
  promise() {
    return Jn.create(this, this._def);
  }
  or(e) {
    return Dr.create([this, e], this._def);
  }
  and(e) {
    return Fr.create(this, e, this._def);
  }
  transform(e) {
    return new rt({
      ...J(this._def),
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new qr({
      ...J(this._def),
      innerType: this,
      defaultValue: n,
      typeName: z.ZodDefault
    });
  }
  brand() {
    return new aa({
      typeName: z.ZodBranded,
      type: this,
      ...J(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new zr({
      ...J(this._def),
      innerType: this,
      catchValue: n,
      typeName: z.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ai.create(this, e);
  }
  readonly() {
    return Vr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Rm = /^c[^\s-]{8,}$/i, Bm = /^[0-9a-z]+$/, Pm = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Cm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Nm = /^[a-z0-9_-]{21}$/i, Mm = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Om = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Lm = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Dm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zs;
const Fm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, jm = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Um = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Gm = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, qm = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Hu = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", zm = new RegExp(`^${Hu}$`);
function ju(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Vm(t) {
  return new RegExp(`^${ju(t)}$`);
}
function Uu(t) {
  let e = `${Hu}T${ju(t)}`;
  const n = [];
  return n.push(t.local ? "Z?" : "Z"), t.offset && n.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${n.join("|")})`, new RegExp(`^${e}$`);
}
function Qm(t, e) {
  return !!((e === "v4" || !e) && Fm.test(t) || (e === "v6" || !e) && jm.test(t));
}
function $m(t, e) {
  if (!Mm.test(t))
    return !1;
  try {
    const [n] = t.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
    return !(typeof i != "object" || i === null || !i.typ || !i.alg || e && i.alg !== e);
  } catch {
    return !1;
  }
}
function Zm(t, e) {
  return !!((e === "v4" || !e) && Hm.test(t) || (e === "v6" || !e) && Um.test(t));
}
class tt extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== O.string) {
      const s = this._getOrReturnCtx(e);
      return C(s, {
        code: S.invalid_type,
        expected: O.string,
        received: s.parsedType
      }), V;
    }
    const r = new ke();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), C(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), C(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const o = e.data.length > s.value, a = e.data.length < s.value;
        (o || a) && (i = this._getOrReturnCtx(e, i), o ? C(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && C(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        Lm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "email",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        Zs || (Zs = new RegExp(Dm, "u")), Zs.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "emoji",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        Cm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "uuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        Nm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "nanoid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        Rm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "cuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        Bm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "cuid2",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        Pm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
          validation: "ulid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), C(i, {
            validation: "url",
            code: S.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "regex",
        code: S.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? Uu(s).test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? zm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? Vm(s).test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? Om.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "duration",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? Qm(e.data, s.version) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "ip",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "jwt" ? $m(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "jwt",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "cidr" ? Zm(e.data, s.version) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "cidr",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? Gm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "base64",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64url" ? qm.test(e.data) || (i = this._getOrReturnCtx(e, i), C(i, {
        validation: "base64url",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : re.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _regex(e, n, r) {
    return this.refinement((i) => e.test(i), {
      validation: n,
      code: S.invalid_string,
      ...H.errToObj(r)
    });
  }
  _addCheck(e) {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...H.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...H.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...H.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...H.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...H.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...H.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...H.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...H.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...H.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...H.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...H.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...H.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...H.errToObj(e) });
  }
  datetime(e) {
    var n, r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
      local: (r = e == null ? void 0 : e.local) !== null && r !== void 0 ? r : !1,
      ...H.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...H.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...H.errToObj(e) });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...H.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...H.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...H.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...H.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...H.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...H.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...H.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, H.errToObj(e));
  }
  trim() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
tt.create = (t) => {
  var e;
  return new tt({
    checks: [],
    typeName: z.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...J(t)
  });
};
function Wm(t, e) {
  const n = (t.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, i = n > r ? n : r, s = parseInt(t.toFixed(i).replace(".", "")), o = parseInt(e.toFixed(i).replace(".", ""));
  return s % o / Math.pow(10, i);
}
class Vt extends Y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== O.number) {
      const s = this._getOrReturnCtx(e);
      return C(s, {
        code: S.invalid_type,
        expected: O.number,
        received: s.parsedType
      }), V;
    }
    let r;
    const i = new ke();
    for (const s of this._def.checks)
      s.kind === "int" ? re.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Wm(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.not_finite,
        message: s.message
      }), i.dirty()) : re.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, H.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, H.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, H.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, H.toString(n));
  }
  setLimit(e, n, r, i) {
    return new Vt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: H.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Vt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: H.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: H.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: H.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: H.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: H.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: H.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: H.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: H.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: H.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && re.isInteger(e.value));
  }
  get isFinite() {
    let e = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
Vt.create = (t) => new Vt({
  checks: [],
  typeName: z.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...J(t)
});
class Qt extends Y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== O.bigint)
      return this._getInvalidInput(e);
    let r;
    const i = new ke();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), C(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : re.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const n = this._getOrReturnCtx(e);
    return C(n, {
      code: S.invalid_type,
      expected: O.bigint,
      received: n.parsedType
    }), V;
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, H.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, H.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, H.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, H.toString(n));
  }
  setLimit(e, n, r, i) {
    return new Qt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: H.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Qt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: H.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
Qt.create = (t) => {
  var e;
  return new Qt({
    checks: [],
    typeName: z.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...J(t)
  });
};
class Mr extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== O.boolean) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.boolean,
        received: r.parsedType
      }), V;
    }
    return Ne(e.data);
  }
}
Mr.create = (t) => new Mr({
  typeName: z.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...J(t)
});
class An extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== O.date) {
      const s = this._getOrReturnCtx(e);
      return C(s, {
        code: S.invalid_type,
        expected: O.date,
        received: s.parsedType
      }), V;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return C(s, {
        code: S.invalid_date
      }), V;
    }
    const r = new ke();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), C(i, {
        code: S.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : re.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new An({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: H.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: H.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
}
An.create = (t) => new An({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: z.ZodDate,
  ...J(t)
});
class $i extends Y {
  _parse(e) {
    if (this._getType(e) !== O.symbol) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.symbol,
        received: r.parsedType
      }), V;
    }
    return Ne(e.data);
  }
}
$i.create = (t) => new $i({
  typeName: z.ZodSymbol,
  ...J(t)
});
class Or extends Y {
  _parse(e) {
    if (this._getType(e) !== O.undefined) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.undefined,
        received: r.parsedType
      }), V;
    }
    return Ne(e.data);
  }
}
Or.create = (t) => new Or({
  typeName: z.ZodUndefined,
  ...J(t)
});
class Lr extends Y {
  _parse(e) {
    if (this._getType(e) !== O.null) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.null,
        received: r.parsedType
      }), V;
    }
    return Ne(e.data);
  }
}
Lr.create = (t) => new Lr({
  typeName: z.ZodNull,
  ...J(t)
});
class Kn extends Y {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ne(e.data);
  }
}
Kn.create = (t) => new Kn({
  typeName: z.ZodAny,
  ...J(t)
});
class ln extends Y {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ne(e.data);
  }
}
ln.create = (t) => new ln({
  typeName: z.ZodUnknown,
  ...J(t)
});
class Pt extends Y {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return C(n, {
      code: S.invalid_type,
      expected: O.never,
      received: n.parsedType
    }), V;
  }
}
Pt.create = (t) => new Pt({
  typeName: z.ZodNever,
  ...J(t)
});
class Zi extends Y {
  _parse(e) {
    if (this._getType(e) !== O.undefined) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.void,
        received: r.parsedType
      }), V;
    }
    return Ne(e.data);
  }
}
Zi.create = (t) => new Zi({
  typeName: z.ZodVoid,
  ...J(t)
});
class nt extends Y {
  _parse(e) {
    const { ctx: n, status: r } = this._processInputParams(e), i = this._def;
    if (n.parsedType !== O.array)
      return C(n, {
        code: S.invalid_type,
        expected: O.array,
        received: n.parsedType
      }), V;
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value, a = n.data.length < i.exactLength.value;
      (o || a) && (C(n, {
        code: o ? S.too_big : S.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (C(n, {
      code: S.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (C(n, {
      code: S.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, a) => i.type._parseAsync(new pt(n, o, n.path, a)))).then((o) => ke.mergeArray(r, o));
    const s = [...n.data].map((o, a) => i.type._parseSync(new pt(n, o, n.path, a)));
    return ke.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new nt({
      ...this._def,
      minLength: { value: e, message: H.toString(n) }
    });
  }
  max(e, n) {
    return new nt({
      ...this._def,
      maxLength: { value: e, message: H.toString(n) }
    });
  }
  length(e, n) {
    return new nt({
      ...this._def,
      exactLength: { value: e, message: H.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
nt.create = (t, e) => new nt({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: z.ZodArray,
  ...J(e)
});
function Ln(t) {
  if (t instanceof me) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = ht.create(Ln(r));
    }
    return new me({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof nt ? new nt({
    ...t._def,
    type: Ln(t.element)
  }) : t instanceof ht ? ht.create(Ln(t.unwrap())) : t instanceof Zt ? Zt.create(Ln(t.unwrap())) : t instanceof mt ? mt.create(t.items.map((e) => Ln(e))) : t;
}
class me extends Y {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = re.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== O.object) {
      const u = this._getOrReturnCtx(e);
      return C(u, {
        code: S.invalid_type,
        expected: O.object,
        received: u.parsedType
      }), V;
    }
    const { status: r, ctx: i } = this._processInputParams(e), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Pt && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        o.includes(u) || a.push(u);
    const d = [];
    for (const u of o) {
      const c = s[u], f = i.data[u];
      d.push({
        key: { status: "valid", value: u },
        value: c._parse(new pt(i, f, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof Pt) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          d.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (u === "strict")
        a.length > 0 && (C(i, {
          code: S.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const f = i.data[c];
        d.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new pt(i, f, i.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of d) {
        const f = await c.key, h = await c.value;
        u.push({
          key: f,
          value: h,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => ke.mergeObjectSync(r, u)) : ke.mergeObjectSync(r, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return H.errToObj, new me({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var i, s, o, a;
          const d = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = H.errToObj(e).message) !== null && a !== void 0 ? a : d
          } : {
            message: d
          };
        }
      } : {}
    });
  }
  strip() {
    return new me({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new me({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new me({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new me({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: z.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, n) {
    return this.augment({ [e]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new me({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return re.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new me({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return re.objectKeys(this.shape).forEach((r) => {
      e[r] || (n[r] = this.shape[r]);
    }), new me({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ln(this);
  }
  partial(e) {
    const n = {};
    return re.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      e && !e[r] ? n[r] = i : n[r] = i.optional();
    }), new me({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return re.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof ht; )
          s = s._def.innerType;
        n[r] = s;
      }
    }), new me({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Gu(re.objectKeys(this.shape));
  }
}
me.create = (t, e) => new me({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: z.ZodObject,
  ...J(e)
});
me.strictCreate = (t, e) => new me({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Pt.create(),
  typeName: z.ZodObject,
  ...J(e)
});
me.lazycreate = (t, e) => new me({
  shape: t,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: z.ZodObject,
  ...J(e)
});
class Dr extends Y {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = this._def.options;
    function i(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new Ue(a.ctx.common.issues));
      return C(n, {
        code: S.invalid_union,
        unionErrors: o
      }), V;
    }
    if (n.common.async)
      return Promise.all(r.map(async (s) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let s;
      const o = [];
      for (const d of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, c = d._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !s && (s = { result: c, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((d) => new Ue(d));
      return C(n, {
        code: S.invalid_union,
        unionErrors: a
      }), V;
    }
  }
  get options() {
    return this._def.options;
  }
}
Dr.create = (t, e) => new Dr({
  options: t,
  typeName: z.ZodUnion,
  ...J(e)
});
const Et = (t) => t instanceof jr ? Et(t.schema) : t instanceof rt ? Et(t.innerType()) : t instanceof Ur ? [t.value] : t instanceof $t ? t.options : t instanceof Gr ? re.objectValues(t.enum) : t instanceof qr ? Et(t._def.innerType) : t instanceof Or ? [void 0] : t instanceof Lr ? [null] : t instanceof ht ? [void 0, ...Et(t.unwrap())] : t instanceof Zt ? [null, ...Et(t.unwrap())] : t instanceof aa || t instanceof Vr ? Et(t.unwrap()) : t instanceof zr ? Et(t._def.innerType) : [];
class Es extends Y {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== O.object)
      return C(n, {
        code: S.invalid_type,
        expected: O.object,
        received: n.parsedType
      }), V;
    const r = this.discriminator, i = n.data[r], s = this.optionsMap.get(i);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (C(n, {
      code: S.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), V);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const s of n) {
      const o = Et(s.shape[e]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        i.set(a, s);
      }
    }
    return new Es({
      typeName: z.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: i,
      ...J(r)
    });
  }
}
function Io(t, e) {
  const n = xt(t), r = xt(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === O.object && r === O.object) {
    const i = re.objectKeys(e), s = re.objectKeys(t).filter((a) => i.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of s) {
      const d = Io(t[a], e[a]);
      if (!d.valid)
        return { valid: !1 };
      o[a] = d.data;
    }
    return { valid: !0, data: o };
  } else if (n === O.array && r === O.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], a = e[s], d = Io(o, a);
      if (!d.valid)
        return { valid: !1 };
      i.push(d.data);
    }
    return { valid: !0, data: i };
  } else return n === O.date && r === O.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Fr extends Y {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), i = (s, o) => {
      if (vo(s) || vo(o))
        return V;
      const a = Io(s.value, o.value);
      return a.valid ? ((Eo(s) || Eo(o)) && n.dirty(), { status: n.value, value: a.data }) : (C(r, {
        code: S.invalid_intersection_types
      }), V);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([s, o]) => i(s, o)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Fr.create = (t, e, n) => new Fr({
  left: t,
  right: e,
  typeName: z.ZodIntersection,
  ...J(n)
});
class mt extends Y {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== O.array)
      return C(r, {
        code: S.invalid_type,
        expected: O.array,
        received: r.parsedType
      }), V;
    if (r.data.length < this._def.items.length)
      return C(r, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), V;
    !this._def.rest && r.data.length > this._def.items.length && (C(r, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...r.data].map((o, a) => {
      const d = this._def.items[a] || this._def.rest;
      return d ? d._parse(new pt(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(s).then((o) => ke.mergeArray(n, o)) : ke.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new mt({
      ...this._def,
      rest: e
    });
  }
}
mt.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new mt({
    items: t,
    typeName: z.ZodTuple,
    rest: null,
    ...J(e)
  });
};
class Hr extends Y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== O.object)
      return C(r, {
        code: S.invalid_type,
        expected: O.object,
        received: r.parsedType
      }), V;
    const i = [], s = this._def.keyType, o = this._def.valueType;
    for (const a in r.data)
      i.push({
        key: s._parse(new pt(r, a, r.path, a)),
        value: o._parse(new pt(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? ke.mergeObjectAsync(n, i) : ke.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, r) {
    return n instanceof Y ? new Hr({
      keyType: e,
      valueType: n,
      typeName: z.ZodRecord,
      ...J(r)
    }) : new Hr({
      keyType: tt.create(),
      valueType: e,
      typeName: z.ZodRecord,
      ...J(n)
    });
  }
}
class Wi extends Y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== O.map)
      return C(r, {
        code: S.invalid_type,
        expected: O.map,
        received: r.parsedType
      }), V;
    const i = this._def.keyType, s = this._def.valueType, o = [...r.data.entries()].map(([a, d], u) => ({
      key: i._parse(new pt(r, a, r.path, [u, "key"])),
      value: s._parse(new pt(r, d, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const d of o) {
          const u = await d.key, c = await d.value;
          if (u.status === "aborted" || c.status === "aborted")
            return V;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const d of o) {
        const u = d.key, c = d.value;
        if (u.status === "aborted" || c.status === "aborted")
          return V;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Wi.create = (t, e, n) => new Wi({
  valueType: e,
  keyType: t,
  typeName: z.ZodMap,
  ...J(n)
});
class wn extends Y {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== O.set)
      return C(r, {
        code: S.invalid_type,
        expected: O.set,
        received: r.parsedType
      }), V;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (C(r, {
      code: S.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (C(r, {
      code: S.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function o(d) {
      const u = /* @__PURE__ */ new Set();
      for (const c of d) {
        if (c.status === "aborted")
          return V;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((d, u) => s._parse(new pt(r, d, r.path, u)));
    return r.common.async ? Promise.all(a).then((d) => o(d)) : o(a);
  }
  min(e, n) {
    return new wn({
      ...this._def,
      minSize: { value: e, message: H.toString(n) }
    });
  }
  max(e, n) {
    return new wn({
      ...this._def,
      maxSize: { value: e, message: H.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
wn.create = (t, e) => new wn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: z.ZodSet,
  ...J(e)
});
class zn extends Y {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== O.function)
      return C(n, {
        code: S.invalid_type,
        expected: O.function,
        received: n.parsedType
      }), V;
    function r(a, d) {
      return Vi({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          zi(),
          Wn
        ].filter((u) => !!u),
        issueData: {
          code: S.invalid_arguments,
          argumentsError: d
        }
      });
    }
    function i(a, d) {
      return Vi({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          zi(),
          Wn
        ].filter((u) => !!u),
        issueData: {
          code: S.invalid_return_type,
          returnTypeError: d
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof Jn) {
      const a = this;
      return Ne(async function(...d) {
        const u = new Ue([]), c = await a._def.args.parseAsync(d, s).catch((g) => {
          throw u.addIssue(r(d, g)), u;
        }), f = await Reflect.apply(o, this, c);
        return await a._def.returns._def.type.parseAsync(f, s).catch((g) => {
          throw u.addIssue(i(f, g)), u;
        });
      });
    } else {
      const a = this;
      return Ne(function(...d) {
        const u = a._def.args.safeParse(d, s);
        if (!u.success)
          throw new Ue([r(d, u.error)]);
        const c = Reflect.apply(o, this, u.data), f = a._def.returns.safeParse(c, s);
        if (!f.success)
          throw new Ue([i(c, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new zn({
      ...this._def,
      args: mt.create(e).rest(ln.create())
    });
  }
  returns(e) {
    return new zn({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, n, r) {
    return new zn({
      args: e || mt.create([]).rest(ln.create()),
      returns: n || ln.create(),
      typeName: z.ZodFunction,
      ...J(r)
    });
  }
}
class jr extends Y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
jr.create = (t, e) => new jr({
  getter: t,
  typeName: z.ZodLazy,
  ...J(e)
});
class Ur extends Y {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return C(n, {
        received: n.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), V;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ur.create = (t, e) => new Ur({
  value: t,
  typeName: z.ZodLiteral,
  ...J(e)
});
function Gu(t, e) {
  return new $t({
    values: t,
    typeName: z.ZodEnum,
    ...J(e)
  });
}
class $t extends Y {
  constructor() {
    super(...arguments), Ir.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return C(n, {
        expected: re.joinValues(r),
        received: n.parsedType,
        code: S.invalid_type
      }), V;
    }
    if (Qi(this, Ir) || Fu(this, Ir, new Set(this._def.values)), !Qi(this, Ir).has(e.data)) {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return C(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: r
      }), V;
    }
    return Ne(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  extract(e, n = this._def) {
    return $t.create(e, {
      ...this._def,
      ...n
    });
  }
  exclude(e, n = this._def) {
    return $t.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Ir = /* @__PURE__ */ new WeakMap();
$t.create = Gu;
class Gr extends Y {
  constructor() {
    super(...arguments), xr.set(this, void 0);
  }
  _parse(e) {
    const n = re.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== O.string && r.parsedType !== O.number) {
      const i = re.objectValues(n);
      return C(r, {
        expected: re.joinValues(i),
        received: r.parsedType,
        code: S.invalid_type
      }), V;
    }
    if (Qi(this, xr) || Fu(this, xr, new Set(re.getValidEnumValues(this._def.values))), !Qi(this, xr).has(e.data)) {
      const i = re.objectValues(n);
      return C(r, {
        received: r.data,
        code: S.invalid_enum_value,
        options: i
      }), V;
    }
    return Ne(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
xr = /* @__PURE__ */ new WeakMap();
Gr.create = (t, e) => new Gr({
  values: t,
  typeName: z.ZodNativeEnum,
  ...J(e)
});
class Jn extends Y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== O.promise && n.common.async === !1)
      return C(n, {
        code: S.invalid_type,
        expected: O.promise,
        received: n.parsedType
      }), V;
    const r = n.parsedType === O.promise ? n.data : Promise.resolve(n.data);
    return Ne(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Jn.create = (t, e) => new Jn({
  type: t,
  typeName: z.ZodPromise,
  ...J(e)
});
class rt extends Y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (o) => {
        C(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const o = i.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted")
            return V;
          const d = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return d.status === "aborted" ? V : d.status === "dirty" || n.value === "dirty" ? jn(d.value) : d;
        });
      {
        if (n.value === "aborted")
          return V;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? V : a.status === "dirty" || n.value === "dirty" ? jn(a.value) : a;
      }
    }
    if (i.type === "refinement") {
      const o = (a) => {
        const d = i.refinement(a, s);
        if (r.common.async)
          return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? V : (a.status === "dirty" && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? V : (a.status === "dirty" && n.dirty(), o(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!bn(o))
          return o;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => bn(o) ? Promise.resolve(i.transform(o.value, s)).then((a) => ({ status: n.value, value: a })) : o);
    re.assertNever(i);
  }
}
rt.create = (t, e, n) => new rt({
  schema: t,
  typeName: z.ZodEffects,
  effect: e,
  ...J(n)
});
rt.createWithPreprocess = (t, e, n) => new rt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: z.ZodEffects,
  ...J(n)
});
class ht extends Y {
  _parse(e) {
    return this._getType(e) === O.undefined ? Ne(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ht.create = (t, e) => new ht({
  innerType: t,
  typeName: z.ZodOptional,
  ...J(e)
});
class Zt extends Y {
  _parse(e) {
    return this._getType(e) === O.null ? Ne(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Zt.create = (t, e) => new Zt({
  innerType: t,
  typeName: z.ZodNullable,
  ...J(e)
});
class qr extends Y {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === O.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
qr.create = (t, e) => new qr({
  innerType: t,
  typeName: z.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...J(e)
});
class zr extends Y {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Nr(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ue(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Ue(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
zr.create = (t, e) => new zr({
  innerType: t,
  typeName: z.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...J(e)
});
class Ki extends Y {
  _parse(e) {
    if (this._getType(e) !== O.nan) {
      const r = this._getOrReturnCtx(e);
      return C(r, {
        code: S.invalid_type,
        expected: O.nan,
        received: r.parsedType
      }), V;
    }
    return { status: "valid", value: e.data };
  }
}
Ki.create = (t) => new Ki({
  typeName: z.ZodNaN,
  ...J(t)
});
const Km = Symbol("zod_brand");
class aa extends Y {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ai extends Y {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? V : s.status === "dirty" ? (n.dirty(), jn(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? V : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, n) {
    return new ai({
      in: e,
      out: n,
      typeName: z.ZodPipeline
    });
  }
}
class Vr extends Y {
  _parse(e) {
    const n = this._def.innerType._parse(e), r = (i) => (bn(i) && (i.value = Object.freeze(i.value)), i);
    return Nr(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vr.create = (t, e) => new Vr({
  innerType: t,
  typeName: z.ZodReadonly,
  ...J(e)
});
function qu(t, e = {}, n) {
  return t ? Kn.create().superRefine((r, i) => {
    var s, o;
    if (!t(r)) {
      const a = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, d = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0, u = typeof a == "string" ? { message: a } : a;
      i.addIssue({ code: "custom", ...u, fatal: d });
    }
  }) : Kn.create();
}
const Jm = {
  object: me.lazycreate
};
var z;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(z || (z = {}));
const Ym = (t, e = {
  message: `Input not instance of ${t.name}`
}) => qu((n) => n instanceof t, e), zu = tt.create, Vu = Vt.create, Xm = Ki.create, eg = Qt.create, Qu = Mr.create, tg = An.create, ng = $i.create, rg = Or.create, ig = Lr.create, sg = Kn.create, og = ln.create, ag = Pt.create, cg = Zi.create, ug = nt.create, dg = me.create, fg = me.strictCreate, lg = Dr.create, hg = Es.create, pg = Fr.create, mg = mt.create, gg = Hr.create, yg = Wi.create, bg = wn.create, Ag = zn.create, wg = jr.create, _g = Ur.create, vg = $t.create, Eg = Gr.create, Ig = Jn.create, vc = rt.create, xg = ht.create, Tg = Zt.create, Sg = rt.createWithPreprocess, kg = ai.create, Rg = () => zu().optional(), Bg = () => Vu().optional(), Pg = () => Qu().optional(), Cg = {
  string: (t) => tt.create({ ...t, coerce: !0 }),
  number: (t) => Vt.create({ ...t, coerce: !0 }),
  boolean: (t) => Mr.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Qt.create({ ...t, coerce: !0 }),
  date: (t) => An.create({ ...t, coerce: !0 })
}, Ng = V;
var ot = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Wn,
  setErrorMap: Sm,
  getErrorMap: zi,
  makeIssue: Vi,
  EMPTY_PATH: km,
  addIssueToContext: C,
  ParseStatus: ke,
  INVALID: V,
  DIRTY: jn,
  OK: Ne,
  isAborted: vo,
  isDirty: Eo,
  isValid: bn,
  isAsync: Nr,
  get util() {
    return re;
  },
  get objectUtil() {
    return _o;
  },
  ZodParsedType: O,
  getParsedType: xt,
  ZodType: Y,
  datetimeRegex: Uu,
  ZodString: tt,
  ZodNumber: Vt,
  ZodBigInt: Qt,
  ZodBoolean: Mr,
  ZodDate: An,
  ZodSymbol: $i,
  ZodUndefined: Or,
  ZodNull: Lr,
  ZodAny: Kn,
  ZodUnknown: ln,
  ZodNever: Pt,
  ZodVoid: Zi,
  ZodArray: nt,
  ZodObject: me,
  ZodUnion: Dr,
  ZodDiscriminatedUnion: Es,
  ZodIntersection: Fr,
  ZodTuple: mt,
  ZodRecord: Hr,
  ZodMap: Wi,
  ZodSet: wn,
  ZodFunction: zn,
  ZodLazy: jr,
  ZodLiteral: Ur,
  ZodEnum: $t,
  ZodNativeEnum: Gr,
  ZodPromise: Jn,
  ZodEffects: rt,
  ZodTransformer: rt,
  ZodOptional: ht,
  ZodNullable: Zt,
  ZodDefault: qr,
  ZodCatch: zr,
  ZodNaN: Ki,
  BRAND: Km,
  ZodBranded: aa,
  ZodPipeline: ai,
  ZodReadonly: Vr,
  custom: qu,
  Schema: Y,
  ZodSchema: Y,
  late: Jm,
  get ZodFirstPartyTypeKind() {
    return z;
  },
  coerce: Cg,
  any: sg,
  array: ug,
  bigint: eg,
  boolean: Qu,
  date: tg,
  discriminatedUnion: hg,
  effect: vc,
  enum: vg,
  function: Ag,
  instanceof: Ym,
  intersection: pg,
  lazy: wg,
  literal: _g,
  map: yg,
  nan: Xm,
  nativeEnum: Eg,
  never: ag,
  null: ig,
  nullable: Tg,
  number: Vu,
  object: dg,
  oboolean: Pg,
  onumber: Bg,
  optional: xg,
  ostring: Rg,
  pipeline: kg,
  preprocess: Sg,
  promise: Ig,
  record: gg,
  set: bg,
  strictObject: fg,
  string: zu,
  symbol: ng,
  transformer: vc,
  tuple: mg,
  undefined: rg,
  union: lg,
  unknown: og,
  void: cg,
  NEVER: Ng,
  ZodIssueCode: S,
  quotelessJson: Tm,
  ZodError: Ue
});
const Mg = (t) => t.message ? t.message : "unspecified error";
class Yn extends Q {
  constructor(e) {
    super(), this.code = Kh, this.errors = e, super.message = `Web3 validator found ${e.length} error[s]:
${this._compileErrors().join(`
`)}`;
  }
  _compileErrors() {
    return this.errors.map(Mg);
  }
}
const Og = ["bool", "int", "uint", "bytes", "string", "address", "tuple"], $u = (t) => typeof t == "object" && "type" in t && "name" in t, ca = (t) => typeof t == "string", se = (t) => typeof t == "string" && /^((-)?0x[0-9a-f]+|(0x))$/i.test(t);
function Zu(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/));
}
const Ji = (t) => typeof t == "number" || typeof t == "bigint" || typeof t == "string" && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(t);
function ua(t) {
  if (typeof t != "string")
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof t}`);
  return t.startsWith("0x");
}
const da = function(t) {
  for (const [e, n] of Object.entries(t))
    if (n !== void 0 && n.length > 0 && n[0] === 0)
      throw new Error(`${e} cannot have leading zeroes, received: ${n.toString()}`);
}, Lg = ["hex", "number", "blockNumber", "blockNumberOrTag", "filter", "bloom"], Sn = (t) => {
  let e = t.replace(/ /, ""), n, r = !1, i = [];
  if (t.includes("[") && (e = e.slice(0, e.indexOf("[")), i = [...t.matchAll(/(?:\[(\d*)\])/g)].map((s) => parseInt(s[1], 10)).map((s) => Number.isNaN(s) ? -1 : s), r = i.length > 0), Og.includes(e))
    return { baseType: e, isArray: r, baseTypeSize: n, arraySizes: i };
  if (e.startsWith("int"))
    n = parseInt(e.substring(3), 10), e = "int";
  else if (e.startsWith("uint"))
    n = parseInt(t.substring(4), 10), e = "uint";
  else if (e.startsWith("bytes"))
    n = parseInt(e.substring(5), 10), e = "bytes";
  else
    return { baseType: void 0, isArray: !1, baseTypeSize: void 0, arraySizes: i };
  return { baseType: e, isArray: r, baseTypeSize: n, arraySizes: i };
}, Ws = (t, e = {}) => {
  if (Object.keys(e).includes("type"))
    throw new Yn([
      {
        keyword: "eth",
        message: 'Either "eth" or "type" can be presented in schema',
        params: { eth: t },
        instancePath: "",
        schemaPath: ""
      }
    ]);
  const { baseType: r, baseTypeSize: i } = Sn(t);
  if (!r && !Lg.includes(t))
    throw new Yn([
      {
        keyword: "eth",
        message: `Eth data type "${t}" is not valid`,
        params: { eth: t },
        instancePath: "",
        schemaPath: ""
      }
    ]);
  if (r) {
    if (r === "tuple")
      throw new Error('"tuple" type is not implemented directly.');
    return { format: `${r}${i ?? ""}`, required: !0 };
  }
  return t ? { format: t, required: !0 } : {};
}, Yi = (t, e = "/0") => {
  const n = {
    type: "array",
    items: [],
    maxItems: t.length,
    minItems: t.length
  };
  for (const [r, i] of t.entries()) {
    let s, o, a = [];
    $u(i) ? (s = i.type, o = i.name || `${e}/${r}`, a = i.components) : typeof i == "string" ? (s = i, o = `${e}/${r}`) : Array.isArray(i) && (i[0] && typeof i[0] == "string" && i[0].startsWith("tuple") && !Array.isArray(i[0]) && i[1] && Array.isArray(i[1]) ? (s = i[0], o = `${e}/${r}`, a = i[1]) : (s = "tuple", o = `${e}/${r}`, a = i));
    const { baseType: d, isArray: u, arraySizes: c } = Sn(s);
    let f, h = n;
    for (let g = c.length - 1; g > 0; g -= 1)
      f = {
        type: "array",
        $id: o,
        items: [],
        maxItems: c[g],
        minItems: c[g]
      }, c[g] < 0 && (delete f.maxItems, delete f.minItems), Array.isArray(h.items) ? h.items.length === 0 ? h.items = [f] : h.items.push(f) : h.items = [h.items, f], h = f;
    if (d === "tuple" && !u) {
      const g = Yi(a, o);
      g.$id = o, h.items.push(g);
    } else if (d === "tuple" && u) {
      const g = c[0], b = Object.assign({ type: "array", $id: o, items: Yi(a, o) }, g >= 0 && { minItems: g, maxItems: g });
      h.items.push(b);
    } else if (u) {
      const g = c[0], b = Object.assign({ type: "array", $id: o, items: Ws(s) }, g >= 0 && { minItems: g, maxItems: g });
      h.items.push(b);
    } else Array.isArray(h.items) ? h.items.push(Object.assign({ $id: o }, Ws(s))) : h.items.push(Object.assign({ $id: o }, Ws(s)));
    h = n;
  }
  return n;
}, fa = (t) => Yi(t), la = (t, e) => e === 1 ? t : la(t[0], e - 1), Br = (t, e, n) => {
  const r = [];
  for (const [i, s] of t.entries()) {
    let o, a, d = [];
    $u(s) ? (o = s.type, a = s.name, d = s.components) : typeof s == "string" ? o = s : Array.isArray(s) && (s[1] && Array.isArray(s[1]) ? (o = s[0], d = s[1]) : (o = "tuple", d = s));
    const { baseType: u, isArray: c, arraySizes: f } = Sn(o), h = Array.isArray(e) ? e[i] : e[a];
    if (u === "tuple" && !c)
      r.push(Br(d, h, n));
    else if (u === "tuple" && c) {
      const g = [];
      for (const b of h)
        if (f.length > 1) {
          const p = la(b, f.length - 1), m = [];
          for (const l of p)
            m.push(Br(d, l, n));
          g.push(m);
        } else
          g.push(Br(d, b, n));
      r.push(g);
    } else
      r.push(h);
  }
  return n = n ?? [], n.push(...r), n;
}, Wu = (t) => {
  if (t >= 48 && t <= 57)
    return t - 48;
  if (t >= 65 && t <= 70)
    return t - 55;
  if (t >= 97 && t <= 102)
    return t - 87;
  throw new Error(`Invalid code point: ${t}`);
}, Is = (t) => {
  if (!se(t))
    throw new Error("Invalid hex string");
  const [e, n] = t.startsWith("-") ? [!0, t.slice(1)] : [!1, t], r = BigInt(n);
  return r > Number.MAX_SAFE_INTEGER ? e ? -r : r : r < Number.MIN_SAFE_INTEGER ? r : e ? -1 * Number(r) : Number(r);
}, xs = (t) => {
  if ((typeof t == "number" || typeof t == "bigint") && t < 0)
    return `-0x${t.toString(16).slice(1)}`;
  if ((typeof t == "number" || typeof t == "bigint") && t >= 0)
    return `0x${t.toString(16)}`;
  if (typeof t == "string" && se(t)) {
    const [e, n] = t.startsWith("-") ? [!0, t.slice(1)] : [!1, t], r = n.split(/^(-)?0(x|X)/).slice(-1)[0];
    return `${e ? "-" : ""}0x${r.replace(/^0+/, "").toLowerCase()}`;
  }
  if (typeof t == "string" && !se(t))
    return xs(BigInt(t));
  throw new ea(t);
}, Xi = (t, e, n = "0") => {
  if (typeof t == "string" && !se(t))
    return t.padStart(e, n);
  const r = typeof t == "string" && se(t) ? t : xs(t), [i, s] = r.startsWith("-") ? ["-0x", r.slice(3)] : ["0x", r.slice(2)];
  return `${i}${s.padStart(e, n)}`;
};
function Mt(t) {
  let e = "0x";
  for (const n of t) {
    const r = n.toString(16);
    e += r.length === 1 ? `0${r}` : r;
  }
  return e;
}
const At = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Ec(t) {
  if (t >= At.zero && t <= At.nine)
    return t - At.zero;
  if (t >= At.A && t <= At.F)
    return t - (At.A - 10);
  if (t >= At.a && t <= At.f)
    return t - (At.a - 10);
}
function kn(t) {
  let e = 0;
  if (t.startsWith("0") && (t[1] === "x" || t[1] === "X") && (e = 2), t.length % 2 !== 0)
    throw new qn(`hex string has odd length: ${t}`);
  const n = (t.length - e) / 2, r = new Uint8Array(n);
  for (let i = 0, s = e; i < n; i += 1) {
    const o = Ec(t.charCodeAt(s++)), a = Ec(t.charCodeAt(s++));
    if (o === void 0 || a === void 0)
      throw new qn(`Invalid byte sequence ("${t[s - 2]}${t[s - 1]}" in "${t}").`);
    r[i] = o * 16 + a;
  }
  return r;
}
function Ts(t) {
  var e;
  return !(t instanceof Uint8Array) && ((e = t == null ? void 0 : t.constructor) === null || e === void 0 ? void 0 : e.name) === "Uint8Array" ? Uint8Array.from(t) : t;
}
const Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abiSchemaToJsonSchema: Yi,
  codePointToInt: Wu,
  ensureIfUint8Array: Ts,
  ethAbiToJsonSchema: fa,
  fetchArrayElement: la,
  hexToNumber: Is,
  hexToUint8Array: kn,
  numberToHex: xs,
  padLeft: Xi,
  parseBaseType: Sn,
  transformJsonDataToAbiFormat: Br,
  uint8ArrayToHexString: Mt
}, Symbol.toStringTag, { value: "Module" })), xo = (t) => {
  var e, n;
  return t instanceof Uint8Array || ((e = t == null ? void 0 : t.constructor) === null || e === void 0 ? void 0 : e.name) === "Uint8Array" || ((n = t == null ? void 0 : t.constructor) === null || n === void 0 ? void 0 : n.name) === "Buffer";
}, Kt = (t, e = {
  abiType: "bytes"
}) => {
  if (typeof t != "string" && !Array.isArray(t) && !xo(t) || typeof t == "string" && se(t) && t.startsWith("-") || typeof t == "string" && !se(t))
    return !1;
  let n;
  if (typeof t == "string") {
    if (t.length % 2 !== 0)
      return !1;
    n = kn(t);
  } else if (Array.isArray(t)) {
    if (t.some((r) => r < 0 || r > 255 || !Number.isInteger(r)))
      return !1;
    n = new Uint8Array(t);
  } else
    n = t;
  if (e != null && e.abiType) {
    const { baseTypeSize: r } = Sn(e.abiType);
    return r ? n.length === r : !0;
  }
  return e != null && e.size ? n.length === (e == null ? void 0 : e.size) : !0;
}, Ju = (t) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(t))
    return !1;
  const e = t.slice(2), n = $n(e.toLowerCase()), r = Mt(Re(Ts(n))).slice(2);
  for (let i = 0; i < 40; i += 1)
    if (parseInt(r[i], 16) > 7 && e[i].toUpperCase() !== e[i] || parseInt(r[i], 16) <= 7 && e[i].toLowerCase() !== e[i])
      return !1;
  return !0;
}, Ge = (t, e = !0) => {
  if (typeof t != "string" && !xo(t))
    return !1;
  let n;
  return xo(t) ? n = Mt(t) : typeof t == "string" && !se(t) ? n = t.toLowerCase().startsWith("0x") ? t : `0x${t}` : n = t, /^(0x)?[0-9a-f]{40}$/i.test(n) ? /^(0x|0X)?[0-9a-f]{40}$/.test(n) || /^(0x|0X)?[0-9A-F]{40}$/.test(n) ? !0 : e ? Ju(n) : !0 : !1;
}, _n = (t, e) => {
  if (e === BigInt(0))
    return BigInt(1);
  let n = t;
  for (let r = 1; r < e; r += 1)
    n *= t;
  return n;
}, Ct = (t, e = {
  abiType: "uint"
}) => {
  if (!["number", "string", "bigint"].includes(typeof t) || typeof t == "string" && t.length === 0)
    return !1;
  let n;
  if (e != null && e.abiType) {
    const { baseTypeSize: i } = Sn(e.abiType);
    i && (n = i);
  } else e.bitSize && (n = e.bitSize);
  const r = _n(BigInt(2), BigInt(n ?? 256)) - BigInt(1);
  try {
    const i = typeof t == "string" && se(t) ? BigInt(Is(t)) : BigInt(t);
    return i >= 0 && i <= r;
  } catch {
    return !1;
  }
}, Qr = (t, e = {
  abiType: "int"
}) => {
  if (!["number", "string", "bigint"].includes(typeof t) || typeof t == "number" && t > Number.MAX_SAFE_INTEGER)
    return !1;
  let n;
  if (e != null && e.abiType) {
    const { baseTypeSize: s, baseType: o } = Sn(e.abiType);
    if (o !== "int")
      return !1;
    s && (n = s);
  } else e.bitSize && (n = e.bitSize);
  const r = _n(BigInt(2), BigInt((n ?? 256) - 1)), i = BigInt(-1) * _n(BigInt(2), BigInt((n ?? 256) - 1));
  try {
    const s = typeof t == "string" && se(t) ? BigInt(Is(t)) : BigInt(t);
    return s >= i && s <= r;
  } catch {
    return !1;
  }
}, Yu = (t) => !!(Qr(t) || typeof t == "string" && /[0-9.]/.test(t) && t.indexOf(".") === t.lastIndexOf(".") || typeof t == "number"), Xu = (t) => Ct(t), Ie = (t) => Object.values(St).includes(t), To = (t) => Ie(t) || Xu(t), lr = (t) => typeof t != "string" || !/^(0x)?[0-9a-f]{512}$/i.test(t) ? !1 : !!(/^(0x)?[0-9a-f]{512}$/.test(t) || /^(0x)?[0-9A-F]{512}$/.test(t)), Ss = (t, e) => {
  if (typeof e == "string" && !se(e) || !lr(t))
    return !1;
  const n = typeof e == "string" ? kn(e) : e, r = Mt(Re(n)).slice(2);
  for (let i = 0; i < 12; i += 4) {
    const s = (
      // eslint-disable-next-line no-bitwise
      (parseInt(r.slice(i, i + 2), 16) << 8) + parseInt(r.slice(i + 2, i + 4), 16) & 2047
    ), o = Wu(t.charCodeAt(t.length - 1 - Math.floor(s / 4))), a = 1 << s % 4;
    if ((o & a) !== a)
      return !1;
  }
  return !0;
}, Dg = (t, e) => {
  if (!lr(t) || !Ge(e))
    return !1;
  const n = Xi(e, 64);
  return Ss(t, n);
}, Fg = (t, e) => !lr(t) || !Ge(e) ? !1 : Ss(t, e), Hg = (t) => ["number", "string", "boolean"].includes(typeof t) ? typeof t == "boolean" ? !0 : typeof t == "string" && !se(t) ? t === "1" || t === "0" : typeof t == "string" && se(t) ? t === "0x1" || t === "0x0" : t === 1 || t === 0 : !1, E = (t) => (
  // Using "null" value intentionally for validation
  // eslint-disable-next-line no-null/no-null
  t == null
), Xn = (t) => typeof t == "object" && !E(t) && !Array.isArray(t) && !(t instanceof Yo), es = (t) => typeof t != "string" || !/^(0x)?[0-9a-f]{64}$/i.test(t) ? !1 : !!(/^(0x)?[0-9a-f]{64}$/.test(t) || /^(0x)?[0-9A-F]{64}$/.test(t)), jg = (t, e) => !lr(t) || !es(e) ? !1 : Ss(t, e), Ug = (t) => {
  const e = [
    "fromBlock",
    "toBlock",
    "address",
    "topics",
    "blockHash"
  ];
  if (E(t) || typeof t != "object" || !Object.keys(t).every((n) => e.includes(n)) || !E(t.fromBlock) && !To(t.fromBlock) || !E(t.toBlock) && !To(t.toBlock))
    return !1;
  if (!E(t.address)) {
    if (Array.isArray(t.address)) {
      if (!t.address.every((n) => Ge(n)))
        return !1;
    } else if (!Ge(t.address))
      return !1;
  }
  return !(!E(t.topics) && !t.topics.every((n) => E(n) ? !0 : Array.isArray(n) ? n.every((r) => es(r)) : !!es(n)));
}, vn = {
  address: (t) => Ge(t),
  bloom: (t) => lr(t),
  blockNumber: (t) => Xu(t),
  blockTag: (t) => Ie(t),
  blockNumberOrTag: (t) => To(t),
  bool: (t) => Hg(t),
  bytes: (t) => Kt(t),
  filter: (t) => Ug(t),
  hex: (t) => se(t),
  uint: (t) => Ct(t),
  int: (t) => Qr(t),
  number: (t) => Yu(t),
  string: (t) => ca(t)
};
for (let t = 8; t <= 256; t += 8)
  vn[`int${t}`] = (e) => Qr(e, { bitSize: t }), vn[`uint${t}`] = (e) => Ct(e, { bitSize: t });
for (let t = 1; t <= 32; t += 1)
  vn[`bytes${t}`] = (e) => Kt(e, { size: t });
vn.bytes256 = vn.bytes;
const Tr = (t) => {
  if ((!(t != null && t.type) || (t == null ? void 0 : t.type) === "object") && (t != null && t.properties)) {
    const e = {};
    for (const n of Object.keys(t.properties)) {
      const r = Tr(t.properties[n]);
      r && (e[n] = r);
    }
    return Array.isArray(t.required) ? ot.object(e).partial().required(t.required.reduce((n, r) => Object.assign(Object.assign({}, n), { [r]: !0 }), {})) : ot.object(e).partial();
  }
  if ((t == null ? void 0 : t.type) === "array" && (t != null && t.items)) {
    if (Array.isArray(t.items) && t.items.length > 1 && t.maxItems !== void 0 && new Set(t.items.map((r) => r.$id)).size === t.items.length) {
      const r = [];
      for (const i of t.items) {
        const s = Tr(i);
        s && r.push(s);
      }
      return ot.tuple(r);
    }
    const e = Array.isArray(t.items) ? t.items[0] : t.items;
    let n = ot.array(Tr(e));
    return n = t.minItems !== void 0 ? n.min(t.minItems) : n, n = t.maxItems !== void 0 ? n.max(t.maxItems) : n, n;
  }
  if (t.oneOf && Array.isArray(t.oneOf))
    return ot.union(t.oneOf.map((e) => Tr(e)));
  if (t != null && t.format) {
    if (!vn[t.format])
      throw new im(t.format);
    return ot.any().refine(vn[t.format], (e) => ({
      params: { value: e, format: t.format }
    }));
  }
  return t != null && t.type && (t == null ? void 0 : t.type) !== "object" && typeof ot[String(t.type)] == "function" ? ot[String(t.type)]() : ot.object({ data: ot.any() }).partial();
};
class Un {
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  static factory() {
    return Un.validatorInstance || (Un.validatorInstance = new Un()), Un.validatorInstance;
  }
  validate(e, n, r) {
    var i, s;
    const a = Tr(e).safeParse(n);
    if (!a.success) {
      const d = this.convertErrors((s = (i = a.error) === null || i === void 0 ? void 0 : i.issues) !== null && s !== void 0 ? s : []);
      if (d) {
        if (r != null && r.silent)
          return d;
        throw new Yn(d);
      }
    }
  }
  // eslint-disable-next-line class-methods-use-this
  convertErrors(e) {
    if (e && Array.isArray(e) && e.length > 0)
      return e.map((n) => {
        var r;
        let i, s, o, a;
        a = n.path.join("/");
        const d = String(n.path[n.path.length - 1]), u = n.path.join("/");
        if (n.code === S.too_big)
          s = "maxItems", a = `${u}/maxItems`, o = { limit: n.maximum }, i = `must NOT have more than ${n.maximum} items`;
        else if (n.code === S.too_small)
          s = "minItems", a = `${u}/minItems`, o = { limit: n.minimum }, i = `must NOT have fewer than ${n.minimum} items`;
        else if (n.code === S.custom) {
          const { value: c, format: f } = (r = n.params) !== null && r !== void 0 ? r : {};
          typeof c > "u" ? i = `value at "/${a}" is required` : i = `value "${// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          typeof c == "object" ? JSON.stringify(c) : c}" at "/${a}" must pass "${f}" validation`, o = { value: c };
        }
        return {
          keyword: s ?? d,
          instancePath: u ? `/${u}` : "",
          schemaPath: a ? `#${a}` : "#",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          params: o ?? { value: n.message },
          message: i ?? n.message
        };
      });
  }
}
class Gg {
  constructor() {
    this._validator = Un.factory();
  }
  validateJSONSchema(e, n, r) {
    return this._validator.validate(e, n, r);
  }
  validate(e, n, r = { silent: !1 }) {
    var i, s;
    const o = fa(e);
    if (!(Array.isArray(o.items) && ((i = o.items) === null || i === void 0 ? void 0 : i.length) === 0 && n.length === 0)) {
      if (Array.isArray(o.items) && ((s = o.items) === null || s === void 0 ? void 0 : s.length) === 0 && n.length !== 0)
        throw new Yn([
          {
            instancePath: "/0",
            schemaPath: "/",
            keyword: "required",
            message: "empty schema against data can not be validated",
            params: n
          }
        ]);
      return this._validator.validate(o, n, r);
    }
  }
}
const G = new Gg();
function Jt(t) {
  var e, n;
  return t instanceof Uint8Array || ((e = t == null ? void 0 : t.constructor) === null || e === void 0 ? void 0 : e.name) === "Uint8Array" || ((n = t == null ? void 0 : t.constructor) === null || n === void 0 ? void 0 : n.name) === "Buffer";
}
function Me(...t) {
  const e = t.reduce((i, s) => i + s.length, 0), n = new Uint8Array(e);
  let r = 0;
  for (const i of t)
    n.set(i, r), r += i.length;
  return n;
}
function ks(t, e) {
  if (t === e)
    return !0;
  if (t.byteLength !== e.byteLength)
    return !1;
  for (let n = 0; n < t.byteLength; n += 1)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
const Rs = {
  noether: BigInt(0),
  wei: BigInt(1),
  kwei: BigInt(1e3),
  Kwei: BigInt(1e3),
  babbage: BigInt(1e3),
  femtoether: BigInt(1e3),
  mwei: BigInt(1e6),
  Mwei: BigInt(1e6),
  lovelace: BigInt(1e6),
  picoether: BigInt(1e6),
  gwei: BigInt(1e9),
  Gwei: BigInt(1e9),
  shannon: BigInt(1e9),
  nanoether: BigInt(1e9),
  nano: BigInt(1e9),
  szabo: BigInt(1e12),
  microether: BigInt(1e12),
  micro: BigInt(1e12),
  finney: BigInt(1e15),
  milliether: BigInt(1e15),
  milli: BigInt(1e15),
  ether: BigInt("1000000000000000000"),
  kether: BigInt("1000000000000000000000"),
  grand: BigInt("1000000000000000000000"),
  mether: BigInt("1000000000000000000000000"),
  gether: BigInt("1000000000000000000000000000"),
  tether: BigInt("1000000000000000000000000000000")
}, So = "Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods", gt = (t) => {
  if (G.validate(["bytes"], [t]), Jt(t))
    return t;
  if (Array.isArray(t))
    return new Uint8Array(t);
  if (typeof t == "string")
    return kn(t);
  throw new qn(t);
}, { uint8ArrayToHexString: qg } = Ku, ee = (t) => qg(gt(t)), fe = (t) => typeof t == "string" && t.slice(0, 2).toLowerCase() !== "0x" ? gt(`0x${t}`) : gt(t), ci = (t) => (G.validate(["hex"], [t]), Is(t)), zg = ci, _e = (t, e) => {
  typeof t != "bigint" && G.validate(["int"], [t]);
  let n = xs(t);
  return e && (!n.startsWith("-") && n.length % 2 === 1 ? n = "0x0".concat(n.slice(2)) : n.length % 2 === 0 && n.startsWith("-") && (n = "-0x0".concat(n.slice(3)))), n;
}, Vg = _e, Qg = (t) => ci(t).toString(), it = (t) => {
  G.validate(["string"], [t]);
  let e = t.replace(/^(?:\u0000)/, "");
  return e = e.replace(/(?:\u0000)$/, ""), ee(new TextEncoder().encode(e));
}, ed = it, $g = it, Bs = (t) => Lu(fe(t)), Zg = (t) => typeof t == "string" ? Bs(t) : (G.validate(["bytes"], [t]), Lu(t)), ha = $n, Wg = Bs, td = (t) => {
  G.validate(["string"], [t]);
  let e = "";
  for (let n = 0; n < t.length; n += 1) {
    const r = t.charCodeAt(n).toString(16);
    e += r.length % 2 !== 0 ? `0${r}` : r;
  }
  return `0x${e}`;
}, Kg = td, nd = (t) => new TextDecoder("ascii").decode(fe(t)), Jg = nd, Nt = (t, e) => {
  if (typeof t == "string" && Ge(t))
    return e ? "address" : `0x${t.toLowerCase().replace(/^0x/i, "")}`;
  if (typeof t == "boolean")
    return e ? "bool" : t ? "0x01" : "0x00";
  if (typeof t == "number")
    return e ? t < 0 ? "int256" : "uint256" : _e(t);
  if (typeof t == "bigint")
    return e ? "bigint" : _e(t);
  if (Jt(t))
    return e ? "bytes" : ee(t);
  if (typeof t == "object" && t)
    return e ? "string" : it(JSON.stringify(t));
  if (typeof t == "string") {
    if (t.startsWith("-0x") || t.startsWith("-0X"))
      return e ? "int256" : _e(t);
    if (se(t))
      return e ? "bytes" : t;
    if (Ji(t) && !Qr(t) && !Ct(t))
      return e ? "bytes" : `0x${t}`;
    if (Ji(t) && !Qr(t) && Ct(t))
      return e ? "uint" : _e(t);
    if (!Number.isFinite(t))
      return e ? "string" : it(t);
  }
  throw new Up(t);
}, Fe = (t) => {
  if (typeof t == "number")
    return t > 1e20 ? (console.warn(So), BigInt(t)) : t;
  if (typeof t == "bigint")
    return t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER ? Number(t) : t;
  if (typeof t == "string" && se(t))
    return ci(t);
  try {
    return Fe(BigInt(t));
  } catch {
    throw new ea(t);
  }
}, on = (t) => {
  if (typeof t == "number")
    return BigInt(t);
  if (typeof t == "bigint")
    return t;
  if (typeof t == "string" && Ji(t))
    return t.startsWith("-") ? -BigInt(t.substring(1)) : BigInt(t);
  throw new ea(t);
}, Yg = (t, e) => {
  let n;
  if (typeof e == "string") {
    if (n = Rs[e], !n)
      throw new xu(e);
  } else {
    if (e < 0 || !Number.isInteger(e))
      throw new Tu(e);
    n = _n(BigInt(10), BigInt(e));
  }
  const r = String(Fe(t)), i = n.toString().length - 1;
  if (i <= 0)
    return r.toString();
  const s = r.padStart(i, "0"), o = s.slice(0, -i), a = s.slice(-i).replace(/\.?0+$/, "");
  return o === "" ? a ? `0.${a}` : "0" : a === "" ? o : `${o}.${a}`.slice(0, o.length + i + 1);
}, Xg = (t, e) => {
  G.validate(["number"], [t]);
  let n;
  if (typeof e == "string") {
    if (n = Rs[e], !n)
      throw new xu(e);
  } else {
    if (e < 0 || !Number.isInteger(e))
      throw new Tu(e);
    n = _n(BigInt(10), BigInt(e));
  }
  let r = t;
  typeof r == "number" && (r < 1e-15 && console.warn(So), r > 1e20 ? (console.warn(So), r = BigInt(r)) : r = r.toLocaleString("fullwide", {
    useGrouping: !1,
    maximumFractionDigits: 20
  }));
  const [i, s] = String(typeof r == "string" && !se(r) ? r : Fe(r)).split(".").concat(""), a = BigInt(`${i}${s}`) * n, d = s.length;
  return d === 0 ? a.toString() : a.toString().slice(0, -d);
}, yt = (t) => {
  if (!Ge(t, !1))
    throw new ta(t);
  const e = t.toLowerCase().replace(/^0x/i, ""), n = Mt(Re(Ts(ha(e))));
  if (E(n) || n === "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")
    return "";
  let r = "0x";
  const i = n.replace(/^0x/i, "");
  for (let s = 0; s < e.length; s += 1)
    parseInt(i[s], 16) > 7 ? r += e[s].toUpperCase() : r += e[s];
  return r;
}, rd = (t) => {
  if (typeof t == "boolean")
    return t;
  if (typeof t == "number" && (t === 0 || t === 1) || typeof t == "bigint" && (t === BigInt(0) || t === BigInt(1)))
    return !!t;
  if (typeof t == "string" && !se(t) && (t === "1" || t === "0" || t === "false" || t === "true"))
    return t === "true" ? !0 : t === "false" ? !1 : !!Number(t);
  if (typeof t == "string" && se(t) && (t === "0x1" || t === "0x0"))
    return !!Fe(t);
  throw new na(t);
};
var Gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ks = { exports: {} }, Ic;
function ey() {
  return Ic || (Ic = 1, function(t) {
    var e = Object.prototype.hasOwnProperty, n = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
    function i(d, u, c) {
      this.fn = d, this.context = u, this.once = c || !1;
    }
    function s(d, u, c, f, h) {
      if (typeof c != "function")
        throw new TypeError("The listener must be a function");
      var g = new i(c, f || d, h), b = n ? n + u : u;
      return d._events[b] ? d._events[b].fn ? d._events[b] = [d._events[b], g] : d._events[b].push(g) : (d._events[b] = g, d._eventsCount++), d;
    }
    function o(d, u) {
      --d._eventsCount === 0 ? d._events = new r() : delete d._events[u];
    }
    function a() {
      this._events = new r(), this._eventsCount = 0;
    }
    a.prototype.eventNames = function() {
      var u = [], c, f;
      if (this._eventsCount === 0) return u;
      for (f in c = this._events)
        e.call(c, f) && u.push(n ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(c)) : u;
    }, a.prototype.listeners = function(u) {
      var c = n ? n + u : u, f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var h = 0, g = f.length, b = new Array(g); h < g; h++)
        b[h] = f[h].fn;
      return b;
    }, a.prototype.listenerCount = function(u) {
      var c = n ? n + u : u, f = this._events[c];
      return f ? f.fn ? 1 : f.length : 0;
    }, a.prototype.emit = function(u, c, f, h, g, b) {
      var p = n ? n + u : u;
      if (!this._events[p]) return !1;
      var m = this._events[p], l = arguments.length, A, w;
      if (m.fn) {
        switch (m.once && this.removeListener(u, m.fn, void 0, !0), l) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, c), !0;
          case 3:
            return m.fn.call(m.context, c, f), !0;
          case 4:
            return m.fn.call(m.context, c, f, h), !0;
          case 5:
            return m.fn.call(m.context, c, f, h, g), !0;
          case 6:
            return m.fn.call(m.context, c, f, h, g, b), !0;
        }
        for (w = 1, A = new Array(l - 1); w < l; w++)
          A[w - 1] = arguments[w];
        m.fn.apply(m.context, A);
      } else {
        var x = m.length, I;
        for (w = 0; w < x; w++)
          switch (m[w].once && this.removeListener(u, m[w].fn, void 0, !0), l) {
            case 1:
              m[w].fn.call(m[w].context);
              break;
            case 2:
              m[w].fn.call(m[w].context, c);
              break;
            case 3:
              m[w].fn.call(m[w].context, c, f);
              break;
            case 4:
              m[w].fn.call(m[w].context, c, f, h);
              break;
            default:
              if (!A) for (I = 1, A = new Array(l - 1); I < l; I++)
                A[I - 1] = arguments[I];
              m[w].fn.apply(m[w].context, A);
          }
      }
      return !0;
    }, a.prototype.on = function(u, c, f) {
      return s(this, u, c, f, !1);
    }, a.prototype.once = function(u, c, f) {
      return s(this, u, c, f, !0);
    }, a.prototype.removeListener = function(u, c, f, h) {
      var g = n ? n + u : u;
      if (!this._events[g]) return this;
      if (!c)
        return o(this, g), this;
      var b = this._events[g];
      if (b.fn)
        b.fn === c && (!h || b.once) && (!f || b.context === f) && o(this, g);
      else {
        for (var p = 0, m = [], l = b.length; p < l; p++)
          (b[p].fn !== c || h && !b[p].once || f && b[p].context !== f) && m.push(b[p]);
        m.length ? this._events[g] = m.length === 1 ? m[0] : m : o(this, g);
      }
      return this;
    }, a.prototype.removeAllListeners = function(u) {
      var c;
      return u ? (c = n ? n + u : u, this._events[c] && o(this, c)) : (this._events = new r(), this._eventsCount = 0), this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
  }(Ks)), Ks.exports;
}
var ty = ey();
const id = /* @__PURE__ */ pa(ty);
class ma extends id {
  constructor() {
    super(...arguments), this.maxListeners = Number.MAX_SAFE_INTEGER;
  }
  setMaxListeners(e) {
    return this.maxListeners = e, this;
  }
  getMaxListeners() {
    return this.maxListeners;
  }
}
const ny = se, ry = Ji, iy = Ju, sy = Ge, oy = lr, ay = Ss, cy = Dg, uy = Fg, dy = es, fy = jg, ly = (t, e) => {
  const n = typeof t == "string" && Ie(t), r = typeof e == "string" && Ie(e);
  if (t === e || (t === "earliest" || t === 0) && (e === "earliest" || e === 0))
    return 0;
  if (t === "earliest")
    return -1;
  if (e === "earliest")
    return 1;
  if (n && r) {
    const o = {
      [St.EARLIEST]: 1,
      [St.FINALIZED]: 2,
      [St.SAFE]: 3,
      [St.LATEST]: 4,
      [St.PENDING]: 5
    };
    return o[t] < o[e] ? -1 : 1;
  }
  if (n && !r || !n && r)
    throw new qp("Cannot compare blocktag with provided non-blocktag input.");
  const i = BigInt(t), s = BigInt(e);
  return i < s ? -1 : i === s ? 0 : 1;
}, Ut = (t) => typeof t == "object" && !E(t) && Object.keys(t).length !== 0 && [
  "input",
  "data",
  "from",
  "gas",
  "gasPrice",
  "gasLimit",
  "address",
  "jsonInterface",
  "syncWithContext",
  "dataInputFill"
].some((e) => e in t), q = E, xc = (t) => typeof t == "object" && !E(t) && !Array.isArray(t) && !(t instanceof Yo), Yt = (t, ...e) => {
  if (!xc(t))
    return t;
  const n = Object.assign({}, t);
  for (const r of e)
    for (const i in r)
      xc(r[i]) ? (n[i] || (n[i] = {}), n[i] = Yt(n[i], r[i])) : !E(r[i]) && Object.hasOwnProperty.call(r, i) && (Array.isArray(r[i]) || r[i] instanceof Yo ? n[i] = r[i].slice(0) : n[i] = r[i]);
  return n;
}, er = (t, e, n = "0") => typeof t == "string" ? se(t) ? Xi(t, e, n) : t.padStart(e, n) : (G.validate(["int"], [t]), Xi(t, e, n)), sd = (t, e, n = "0") => {
  if (typeof t == "string" && !se(t))
    return t.padEnd(e, n);
  const r = typeof t == "string" && se(t) ? t : _e(t), i = r.startsWith("-") ? 3 : 2;
  return G.validate([r.startsWith("-") ? "int" : "uint"], [t]), r.padEnd(e + i, n);
}, od = sd, $r = er, ad = (t, e = 64) => {
  G.validate(["int"], [t]);
  const n = Fe(t);
  if (n >= 0)
    return er(Nt(n), e);
  const r = _n(BigInt(2), BigInt(e * 4));
  if (-n >= r)
    throw new Su(`value: ${t}, nibbleWidth: ${e}`);
  const s = BigInt(n) + r;
  return er(_e(s), e);
}, hy = (t, e = 64) => {
  G.validate(["int"], [t]);
  const n = Fe(t);
  if (n < 0)
    return n;
  const r = Math.ceil(Math.log(Number(n)) / Math.log(2));
  if (r > e * 4)
    throw new Su(`value: "${t}", nibbleWidth: "${e}"`);
  if (e * 4 !== r)
    return n;
  const i = _n(BigInt(2), BigInt(e) * BigInt(4));
  return Fe(BigInt(n) - i);
}, { parseBaseType: py } = Ku, Tt = (t) => typeof t == "object" && !E(t) && "number" in t && "bytes" in t, my = (t, e, n = []) => {
  let r = Object.assign({}, t), i;
  for (const s of e) {
    if (r.oneOf && i) {
      const o = i, a = n.find(([d]) => d === o);
      a && a[0] === i && (r = r.oneOf[a[1]]);
    }
    if (!r.properties && !r.items)
      return;
    r.properties ? r = r.properties[s] : r.items && r.items.properties ? r = r.items.properties[s] : r.items && Xn(r.items) ? r = r.items : r.items && Array.isArray(r.items) && (r = r.items[parseInt(s, 10)]), r && s && (i = s);
  }
  return r;
}, Zr = (t, e, n) => {
  try {
    const { baseType: r, baseTypeSize: i } = py(e);
    if (r === "int" || r === "uint")
      switch (n.number) {
        case Ke.NUMBER:
          return Number(on(t));
        case Ke.HEX:
          return _e(on(t));
        case Ke.STR:
          return on(t).toString();
        case Ke.BIGINT:
          return on(t);
        default:
          throw new bo(`Invalid format: ${String(n.number)}`);
      }
    if (r === "bytes") {
      let s;
      switch (i ? typeof t == "string" ? s = er(t, i * 2) : Jt(t) && (s = Me(new Uint8Array(i - t.length), t)) : s = t, n.bytes) {
        case Bt.HEX:
          return ee(gt(s));
        case Bt.UINT8ARRAY:
          return gt(s);
        default:
          throw new bo(`Invalid format: ${String(n.bytes)}`);
      }
    }
    if (r === "string")
      return String(t);
  } catch {
    return t;
  }
  return t;
}, Tc = ({ value: t, schemaProp: e, schema: n, object: r, key: i, dataPath: s, format: o, oneOfPath: a = [] }) => {
  var d, u;
  if (Array.isArray(t)) {
    let c = e;
    if ((e == null ? void 0 : e.oneOf) !== void 0 && e.oneOf.forEach((f, h) => {
      var g, b;
      !Array.isArray(e == null ? void 0 : e.items) && (typeof t[0] == "object" && ((g = f == null ? void 0 : f.items) === null || g === void 0 ? void 0 : g.type) === "object" || typeof t[0] == "string" && ((b = f == null ? void 0 : f.items) === null || b === void 0 ? void 0 : b.type) !== "object") && (c = f, a.push([i, h]));
    }), E(c == null ? void 0 : c.items))
      return delete r[i], s.pop(), !0;
    if (Xn(c.items) && !E(c.items.format)) {
      for (let f = 0; f < t.length; f += 1)
        r[i][f] = Zr(
          t[f],
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          (d = c == null ? void 0 : c.items) === null || d === void 0 ? void 0 : d.format,
          o
        );
      return s.pop(), !0;
    }
    if (!Array.isArray(c == null ? void 0 : c.items) && ((u = c == null ? void 0 : c.items) === null || u === void 0 ? void 0 : u.type) === "object") {
      for (const f of t)
        Ps(f, n, s, o, a);
      return s.pop(), !0;
    }
    if (Array.isArray(c == null ? void 0 : c.items)) {
      for (let f = 0; f < t.length; f += 1)
        r[i][f] = Zr(t[f], c.items[f].format, o);
      return s.pop(), !0;
    }
  }
  return !1;
}, Ps = (t, e, n, r, i = []) => {
  var s;
  if (!Xn(t) && !Array.isArray(t))
    return Zr(t, e == null ? void 0 : e.format, r);
  const o = t;
  if (Array.isArray(o) && (e == null ? void 0 : e.type) === "array" && ((s = e == null ? void 0 : e.items) === null || s === void 0 ? void 0 : s.type) === "object")
    Tc({
      value: o,
      schemaProp: e,
      schema: e,
      object: o,
      key: "",
      dataPath: n,
      format: r,
      oneOfPath: i
    });
  else
    for (const [a, d] of Object.entries(o)) {
      n.push(a);
      let u = my(e, n, i);
      if (E(u)) {
        delete o[a], n.pop();
        continue;
      }
      if (Xn(d)) {
        Ps(d, e, n, r, i), n.pop();
        continue;
      }
      if (!Tc({
        value: d,
        schemaProp: u,
        schema: e,
        object: o,
        key: a,
        dataPath: n,
        format: r,
        oneOfPath: i
      })) {
        if ((u == null ? void 0 : u.format) === void 0 && (u == null ? void 0 : u.oneOf) !== void 0) {
          for (const [c, f] of u.oneOf.entries())
            if ((f == null ? void 0 : f.format) !== void 0) {
              u = f;
              break;
            }
        }
        o[a] = Zr(d, u.format, r), n.pop();
      }
    }
  return o;
}, T = (t, e, n = Be) => {
  let r;
  Xn(e) ? r = Yt({}, e) : Array.isArray(e) ? r = [...e] : r = e;
  const i = Xn(t) ? t : fa(t);
  if (!i.properties && !i.items && !i.format)
    throw new bo("Invalid json schema for formatting");
  return Ps(r, i, [], n);
}, cd = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", tr = (t) => {
  let e;
  return typeof t == "bigint" || typeof t == "number" ? e = $n(t.toString()) : Array.isArray(t) ? e = new Uint8Array(t) : typeof t == "string" && !se(t) ? e = $n(t) : e = gt(t), ee(Re(Ts(e)));
}, ui = (t) => {
  let e;
  typeof t == "string" ? t.startsWith("0x") && se(t) ? e = fe(t) : e = $n(t) : e = t;
  const n = tr(e);
  return n === cd ? void 0 : n;
}, qe = (t) => {
  const e = ui(t);
  return E(e) ? cd : e;
}, gy = (t) => {
  if (Array.isArray(t))
    throw new Error("Autodetection of array types is not supported.");
  let e, n;
  if (typeof t == "object" && ("t" in t || "type" in t) && ("v" in t || "value" in t))
    e = "t" in t ? t.t : t.type, n = "v" in t ? t.v : t.value, e = e.toLowerCase() === "bigint" ? "int" : e;
  else {
    if (typeof t == "bigint")
      return ["int", t];
    e = Nt(t, !0), n = Nt(t), !e.startsWith("int") && !e.startsWith("uint") && (e = "bytes");
  }
  return (e.startsWith("int") || e.startsWith("uint")) && typeof n == "string" && !/^(-)?0x/i.test(n) && (n = on(n)), [e, n];
}, yy = (t) => t.startsWith("int[") ? `int256${t.slice(3)}` : t === "int" ? "int256" : t.startsWith("uint[") ? `uint256'${t.slice(4)}` : t === "uint" ? "uint256" : t, Js = (t, e) => {
  const n = /^(\d+).*$/.exec(t.slice(e));
  return n ? parseInt(n[1], 10) : 0;
}, Sc = (t) => t.toString(2).length, kc = (t, e) => {
  const n = e.toString();
  if (t === "string") {
    if (typeof e == "string")
      return it(e);
    throw new jp(e);
  }
  if (t === "bool" || t === "boolean") {
    if (typeof e == "boolean")
      return e ? "01" : "00";
    throw new na(e);
  }
  if (t === "address") {
    if (!Ge(n))
      throw new ta(n);
    return n;
  }
  const r = yy(t);
  if (t.startsWith("uint")) {
    const i = Js(r, 4);
    if (i % 8 || i < 8 || i > 256)
      throw new lc(n);
    const s = Fe(n);
    if (Sc(s) > i)
      throw new hc(n);
    if (s < BigInt(0))
      throw new Gp(n);
    return i ? $r(s.toString(16), i / 8 * 2) : s.toString(16);
  }
  if (t.startsWith("int")) {
    const i = Js(r, 3);
    if (i % 8 || i < 8 || i > 256)
      throw new lc(t);
    const s = Fe(n);
    if (Sc(s) > i)
      throw new hc(n);
    return s < BigInt(0) ? ad(s.toString(), i / 8 * 2) : i ? $r(s.toString(16), i / 4) : s.toString(16);
  }
  if (r === "bytes") {
    if (n.replace(/^0x/i, "").length % 2 !== 0)
      throw new qn(n);
    return n;
  }
  if (t.startsWith("bytes")) {
    if (n.replace(/^0x/i, "").length % 2 !== 0)
      throw new qn(n);
    const i = Js(t, 5);
    if (!i || i < 1 || i > 64 || i < n.replace(/^0x/i, "").length / 2)
      throw new qn(n);
    return od(n, i * 2);
  }
  return "";
}, ud = (t) => {
  const [e, n] = gy(t);
  return Array.isArray(n) ? n.map((s) => kc(e, s).replace("0x", "")).join("") : kc(e, n).replace("0x", "");
}, ga = (...t) => `0x${t.map(ud).join("").toLowerCase()}`, by = (...t) => ui(ga(...t)), Ay = (...t) => qe(ga(...t)), wy = (t) => ui(`0x${(typeof t == "number" ? t.toString() : t).padStart(64, "0")}`);
function _y(t) {
  return Cu(t);
}
const Wr = (t) => _y(t), vy = (t) => ee(Wr(t));
var Cs = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function dd(t) {
  return (typeof t == "object" || typeof t == "function") && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  typeof t.then == "function";
}
function fd(t, e, n) {
  return Cs(this, void 0, void 0, function* () {
    let r;
    const i = yield Promise.race([
      t instanceof Promise ? t : t(),
      new Promise((s, o) => {
        r = setTimeout(() => n ? o(n) : s(void 0), e);
      })
    ]);
    if (r && clearTimeout(r), i instanceof Error)
      throw i;
    return i;
  });
}
function ya(t, e) {
  let n;
  return [new Promise((i, s) => {
    n = setInterval(
      function o() {
        return Cs(this, void 0, void 0, function* () {
          try {
            const a = yield fd(t, e);
            E(a) || (clearInterval(n), i(a));
          } catch (a) {
            clearInterval(n), s(a);
          }
        }), o;
      }(),
      // this will immediate invoke first call
      e
    );
  }), n];
}
function Ey(t, e) {
  return Cs(this, void 0, void 0, function* () {
    return ya(t, e)[0];
  });
}
function ba(t, e) {
  let n;
  const r = new Promise((i, s) => {
    n = setTimeout(() => {
      s(e);
    }, t);
  });
  return [n, r];
}
function ld(t, e) {
  let n;
  const r = new Promise((i, s) => {
    n = setInterval(() => {
      Cs(this, void 0, void 0, function* () {
        const o = yield t();
        o && (clearInterval(n), s(o));
      });
    }, e);
  });
  return [n, r];
}
const Aa = () => {
  const t = Wr(16);
  t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
  const e = ee(t);
  return [
    e.substring(2, 10),
    e.substring(10, 14),
    e.substring(14, 18),
    e.substring(18, 22),
    e.substring(22, 34)
  ].join("-");
}, wa = (t) => {
  const e = t.error.code;
  return Ce.has(e) || e >= -32099 && e <= -32e3;
}, qt = (t) => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && // JSON RPC consider "null" as valid response
"result" in t && E(t.error) && (typeof t.id == "number" || typeof t.id == "string"), zt = (t) => !Array.isArray(t) && t.jsonrpc === "2.0" && !!t && E(t.result) && // JSON RPC consider "null" as valid response
"error" in t && (typeof t.id == "number" || typeof t.id == "string"), Ns = (t) => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && !E(t.params) && !E(t.method), hd = (t) => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && "id" in t && // JSON RPC consider "null" as valid response
"result" in t, ts = (t) => qt(t) || zt(t), _a = (t) => Array.isArray(t) ? t.every(ts) : ts(t), Kr = (t) => Array.isArray(t) && t.length > 0 && _a(t);
let Ei;
const pd = (t) => {
  Ei = t;
}, En = (t) => {
  var e, n, r, i;
  return typeof Ei < "u" && (Ei += 1), {
    jsonrpc: (e = t.jsonrpc) !== null && e !== void 0 ? e : "2.0",
    id: (r = (n = t.id) !== null && n !== void 0 ? n : Ei) !== null && r !== void 0 ? r : Aa(),
    method: t.method,
    params: (i = t.params) !== null && i !== void 0 ? i : void 0
  };
}, va = (t) => t.map((e) => En(e)), at = (t) => Array.isArray(t) && t.length > 0, Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBatchRequest: at,
  isBatchResponse: Kr,
  isResponseRpcError: wa,
  isResponseWithError: zt,
  isResponseWithNotification: Ns,
  isResponseWithResult: qt,
  isSubscriptionResult: hd,
  isValidResponse: _a,
  setRequestIdStart: pd,
  toBatchPayload: va,
  toPayload: En,
  validateResponse: ts
}, Symbol.toStringTag, { value: "Module" }));
var Ys = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
}, md;
class ns {
  /**
   *
   * @param timeout - (optional) The timeout in milliseconds.
   * @param eagerStart - (optional) If true, the timer starts as soon as the promise is created.
   * @param timeoutMessage - (optional) The message to include in the timeout erro that is thrown when the promise times out.
   */
  constructor({ timeout: e, eagerStart: n, timeoutMessage: r } = {
    timeout: 0,
    eagerStart: !1,
    timeoutMessage: "DeferredPromise timed out"
  }) {
    this[md] = "Promise", this._state = "pending", this._promise = new Promise((i, s) => {
      this._resolve = i, this._reject = s;
    }), this._timeoutMessage = r, this._timeoutInterval = e, n && this.startTimer();
  }
  /**
   * Returns the current state of the promise.
   * @returns 'pending' | 'fulfilled' | 'rejected'
   */
  get state() {
    return this._state;
  }
  /**
   *
   * @param onfulfilled - (optional) The callback to execute when the promise is fulfilled.
   * @param onrejected  - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  then(e, n) {
    return Ys(this, void 0, void 0, function* () {
      return this._promise.then(e, n);
    });
  }
  /**
   *
   * @param onrejected - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  catch(e) {
    return Ys(this, void 0, void 0, function* () {
      return this._promise.catch(e);
    });
  }
  /**
   *
   * @param onfinally - (optional) The callback to execute when the promise is settled (fulfilled or rejected).
   * @returns
   */
  finally(e) {
    return Ys(this, void 0, void 0, function* () {
      return this._promise.finally(e);
    });
  }
  /**
   * Resolves the current promise.
   * @param value - The value to resolve the promise with.
   */
  resolve(e) {
    this._resolve(e), this._state = "fulfilled", this._clearTimeout();
  }
  /**
   * Rejects the current promise.
   * @param reason - The reason to reject the promise with.
   */
  reject(e) {
    this._reject(e), this._state = "rejected", this._clearTimeout();
  }
  /**
   * Starts the timeout timer for the promise.
   */
  startTimer() {
    this._timeoutInterval && this._timeoutInterval > 0 && (this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval));
  }
  _checkTimeout() {
    this._state === "pending" && this._timeoutId && this.reject(new yu(this._timeoutMessage));
  }
  _clearTimeout() {
    this._timeoutId && clearTimeout(this._timeoutId);
  }
}
md = Symbol.toStringTag;
class gd {
  constructor(e, n) {
    this.eventEmitter = e, this.autoReconnect = n, this.chunkTimeout = 1e3 * 15;
  }
  clearQueues() {
    typeof this._clearQueues == "function" && this._clearQueues();
  }
  onError(e) {
    this._clearQueues = e;
  }
  parseResponse(e) {
    const n = [];
    return e.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach((i) => {
      let s = i;
      this.lastChunk && (s = this.lastChunk + s);
      let o;
      try {
        o = JSON.parse(s);
      } catch {
        this.lastChunk = s, this.lastChunkTimeout && clearTimeout(this.lastChunkTimeout), this.lastChunkTimeout = setTimeout(() => {
          this.autoReconnect || (this.clearQueues(), this.eventEmitter.emit("error", new vs({
            id: 1,
            jsonrpc: "2.0",
            error: { code: 2, message: "Chunk timeout" }
          })));
        }, this.chunkTimeout);
        return;
      }
      clearTimeout(this.lastChunkTimeout), this.lastChunk = void 0, o && n.push(o);
    }), n;
  }
}
var Rc = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Ea extends si {
  constructor() {
    super(...arguments), this._eventEmitter = new id(), this._chainId = "", this._accounts = [];
  }
  _getChainId() {
    return Rc(this, void 0, void 0, function* () {
      var e;
      const n = yield this.request(En({
        method: "eth_chainId",
        params: []
      }));
      return (e = n == null ? void 0 : n.result) !== null && e !== void 0 ? e : "";
    });
  }
  _getAccounts() {
    return Rc(this, void 0, void 0, function* () {
      var e;
      const n = yield this.request(En({
        method: "eth_accounts",
        params: []
      }));
      return (e = n == null ? void 0 : n.result) !== null && e !== void 0 ? e : [];
    });
  }
  _onConnect() {
    Promise.all([
      this._getChainId().then((e) => {
        e !== this._chainId && (this._chainId = e, this._eventEmitter.emit("chainChanged", this._chainId));
      }).catch((e) => {
        console.error(e);
      }),
      this._getAccounts().then((e) => {
        this._accounts.length === e.length && e.every((n) => e.includes(n)) || (this._accounts = e, this._onAccountsChanged());
      }).catch((e) => {
        console.error(e);
      })
    ]).then(() => this._eventEmitter.emit("connect", {
      chainId: this._chainId
    })).catch((e) => {
      console.error(e);
    });
  }
  // todo this must be ProvideRpcError with a message too
  _onDisconnect(e, n) {
    this._eventEmitter.emit("disconnect", new Vp(e, n));
  }
  _onAccountsChanged() {
    this._eventEmitter.emit("accountsChanged", this._accounts);
  }
}
var Xs = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const xy = {
  autoReconnect: !0,
  delay: 5e3,
  maxAttempts: 5
}, Ty = 1e3;
class yd extends Ea {
  get SocketConnection() {
    return this._socketConnection;
  }
  /**
   * This is an abstract class for implementing a socket provider (e.g. WebSocket, IPC). It extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the socket (e.g. /ipc/path or ws://localhost:8546)
   * @param socketOptions - The options for the socket connection. Its type is supposed to be specified in the inherited classes.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
  constructor(e, n, r) {
    if (super(), this._connectionStatus = "connecting", this._onMessageHandler = this._onMessage.bind(this), this._onOpenHandler = this._onConnect.bind(this), this._onCloseHandler = this._onCloseEvent.bind(this), this._onErrorHandler = this._onError.bind(this), !this._validateProviderPath(e))
      throw new Ao(e);
    this._socketPath = e, this._socketOptions = n, this._reconnectOptions = Object.assign(Object.assign({}, xy), r ?? {}), this._pendingRequestsQueue = /* @__PURE__ */ new Map(), this._sentRequestsQueue = /* @__PURE__ */ new Map(), this._init(), this.connect(), this.chunkResponseParser = new gd(this._eventEmitter, this._reconnectOptions.autoReconnect), this.chunkResponseParser.onError(() => {
      this._clearQueues();
    }), this.isReconnecting = !1;
  }
  _init() {
    this._reconnectAttempts = 0;
  }
  /**
   * Try to establish a connection to the socket
   */
  connect() {
    try {
      this._openSocketConnection(), this._connectionStatus = "connecting", this._addSocketListeners();
    } catch (e) {
      if (this.isReconnecting)
        setImmediate(() => {
          this._reconnect();
        });
      else
        throw this._connectionStatus = "disconnected", e && e.message ? new oi(`Error while connecting to ${this._socketPath}. Reason: ${e.message}`) : new Ao(this._socketPath);
    }
  }
  // eslint-disable-next-line class-methods-use-this
  _validateProviderPath(e) {
    return !!e;
  }
  /**
   *
   * @returns the pendingRequestQueue size
   */
  // eslint-disable-next-line class-methods-use-this
  getPendingRequestQueueSize() {
    return this._pendingRequestsQueue.size;
  }
  /**
   *
   * @returns the sendPendingRequests size
   */
  // eslint-disable-next-line class-methods-use-this
  getSentRequestsQueueSize() {
    return this._sentRequestsQueue.size;
  }
  /**
   *
   * @returns `true` if the socket supports subscriptions
   */
  // eslint-disable-next-line class-methods-use-this
  supportsSubscriptions() {
    return !0;
  }
  on(e, n) {
    this._eventEmitter.on(e, n);
  }
  once(e, n) {
    this._eventEmitter.once(e, n);
  }
  removeListener(e, n) {
    this._eventEmitter.removeListener(e, n);
  }
  _onDisconnect(e, n) {
    this._connectionStatus = "disconnected", super._onDisconnect(e, n);
  }
  /**
   * Disconnects the socket
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  disconnect(e, n) {
    const r = e ?? Ty;
    this._removeSocketListeners(), this.getStatus() !== "disconnected" && this._closeSocketConnection(r, n), this._onDisconnect(r, n);
  }
  /**
   * Safely disconnects the socket, async and waits for request size to be 0 before disconnecting
   * @param forceDisconnect - If true, will clear queue after 5 attempts of waiting for both pending and sent queue to be 0
   * @param ms - Determines the ms of setInterval
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  safeDisconnect(e, n) {
    return Xs(this, arguments, void 0, function* (r, i, s = !1, o = 1e3) {
      let a = 0;
      yield Xs(this, void 0, void 0, function* () {
        return new Promise((u) => {
          const c = setInterval(() => {
            s && a >= 5 && this.clearQueues(), this.getPendingRequestQueueSize() === 0 && this.getSentRequestsQueueSize() === 0 && (clearInterval(c), u(!0)), a += 1;
          }, o);
        });
      }), this.disconnect(r, i);
    });
  }
  /**
   * Removes all listeners for the specified event type.
   * @param type - The event type to remove the listeners for
   */
  removeAllListeners(e) {
    this._eventEmitter.removeAllListeners(e);
  }
  _onError(e) {
    this.isReconnecting ? this._reconnect() : this._eventEmitter.emit("error", e);
  }
  /**
   * Resets the socket, removing all listeners and pending requests
   */
  reset() {
    this._sentRequestsQueue.clear(), this._pendingRequestsQueue.clear(), this._init(), this._removeSocketListeners(), this._addSocketListeners();
  }
  _reconnect() {
    this.isReconnecting || (this.isReconnecting = !0, this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach((e, n) => {
      e.deferredPromise.reject(new op()), this._sentRequestsQueue.delete(n);
    }), this._reconnectAttempts < this._reconnectOptions.maxAttempts ? (this._reconnectAttempts += 1, setTimeout(() => {
      this._removeSocketListeners(), this.connect(), this.isReconnecting = !1;
    }, this._reconnectOptions.delay)) : (this.isReconnecting = !1, this._clearQueues(), this._removeSocketListeners(), this._eventEmitter.emit("error", new sp(this._reconnectOptions.maxAttempts))));
  }
  /**
   *  Creates a request object to be sent to the server
   */
  request(e) {
    return Xs(this, void 0, void 0, function* () {
      if (q(this._socketConnection))
        throw new Error("Connection is undefined");
      this.getStatus() === "disconnected" && this.connect();
      const n = at(e) ? e[0].id : e.id;
      if (!n)
        throw new hp("Request Id not defined");
      if (this._sentRequestsQueue.has(n))
        throw new ap(n);
      const r = new ns();
      r.catch((s) => {
        this._eventEmitter.emit("error", s);
      });
      const i = {
        payload: e,
        deferredPromise: r
      };
      if (this.getStatus() === "connecting")
        return this._pendingRequestsQueue.set(n, i), i.deferredPromise;
      this._sentRequestsQueue.set(n, i);
      try {
        this._sendToSocket(i.payload);
      } catch (s) {
        this._sentRequestsQueue.delete(n), this._eventEmitter.emit("error", s);
      }
      return r;
    });
  }
  _onConnect() {
    this._connectionStatus = "connected", this._reconnectAttempts = 0, super._onConnect(), this._sendPendingRequests();
  }
  _sendPendingRequests() {
    for (const [e, n] of this._pendingRequestsQueue.entries())
      try {
        this._sendToSocket(n.payload), this._pendingRequestsQueue.delete(e), this._sentRequestsQueue.set(e, n);
      } catch (r) {
        this._pendingRequestsQueue.delete(e), this._eventEmitter.emit("error", r);
      }
  }
  _onMessage(e) {
    const n = this._parseResponses(e);
    if (!(q(n) || n.length === 0))
      for (const r of n) {
        if (Ns(r) && r.method.endsWith("_subscription")) {
          this._eventEmitter.emit("message", r);
          return;
        }
        const i = Kr(r) ? r[0].id : r.id, s = this._sentRequestsQueue.get(i);
        if (!s)
          return;
        (Kr(r) || qt(r) || zt(r)) && (this._eventEmitter.emit("message", r), s.deferredPromise.resolve(r)), this._sentRequestsQueue.delete(i);
      }
  }
  clearQueues(e) {
    this._clearQueues(e);
  }
  _clearQueues(e) {
    this._pendingRequestsQueue.size > 0 && this._pendingRequestsQueue.forEach((n, r) => {
      n.deferredPromise.reject(new yo(e)), this._pendingRequestsQueue.delete(r);
    }), this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach((n, r) => {
      n.deferredPromise.reject(new yo(e)), this._sentRequestsQueue.delete(r);
    }), this._removeSocketListeners();
  }
}
const bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChunkResponseParser: gd,
  Eip1193Provider: Ea,
  EventEmitter: ma,
  SocketProvider: yd,
  Web3DeferredPromise: ns,
  asciiToHex: td,
  bytesToHex: ee,
  bytesToUint8Array: gt,
  checkAddressCheckSum: iy,
  compareBlockNumbers: ly,
  convert: Ps,
  convertScalarValue: Zr,
  encodePacked: ga,
  ethUnitMap: Rs,
  format: T,
  fromAscii: Kg,
  fromDecimal: Vg,
  fromTwosComplement: hy,
  fromUtf8: ed,
  fromWei: Yg,
  getStorageSlotNumForLongString: wy,
  hexToAscii: nd,
  hexToBytes: fe,
  hexToNumber: ci,
  hexToNumberString: Qg,
  hexToString: Wg,
  hexToUtf8: Bs,
  isAddress: sy,
  isBatchRequest: at,
  isBatchResponse: Kr,
  isBloom: oy,
  isContractAddressInBloom: uy,
  isContractInitOptions: Ut,
  isDataFormat: Tt,
  isHex: ry,
  isHexStrict: ny,
  isInBloom: ay,
  isNullish: q,
  isPromise: dd,
  isResponseRpcError: wa,
  isResponseWithError: zt,
  isResponseWithNotification: Ns,
  isResponseWithResult: qt,
  isSubscriptionResult: hd,
  isTopic: dy,
  isTopicInBloom: fy,
  isUint8Array: Jt,
  isUserEthereumAddressInBloom: cy,
  isValidResponse: _a,
  jsonRpc: Iy,
  keccak256: tr,
  keccak256Wrapper: tr,
  leftPad: $r,
  mergeDeep: Yt,
  numberToHex: _e,
  padLeft: er,
  padRight: sd,
  pollTillDefined: Ey,
  pollTillDefinedAndReturnIntervalId: ya,
  processSolidityEncodePackedArgs: ud,
  randomBytes: Wr,
  randomHex: vy,
  rejectIfConditionAtInterval: ld,
  rejectIfTimeout: ba,
  rightPad: od,
  setRequestIdStart: pd,
  sha3: ui,
  sha3Raw: qe,
  soliditySha3: by,
  soliditySha3Raw: Ay,
  stringToHex: $g,
  toAscii: Jg,
  toBatchPayload: va,
  toBigInt: on,
  toBool: rd,
  toChecksumAddress: yt,
  toDecimal: zg,
  toHex: Nt,
  toNumber: Fe,
  toPayload: En,
  toTwosComplement: ad,
  toUtf8: Zg,
  toWei: Xg,
  uint8ArrayConcat: Me,
  uint8ArrayEquals: ks,
  utf8ToBytes: ha,
  utf8ToHex: it,
  uuidV4: Aa,
  validateResponse: ts,
  waitWithTimeout: fd
}, Symbol.toStringTag, { value: "Module" }));
class Ms {
  constructor() {
    this._emitter = new ma();
  }
  on(e, n) {
    this._emitter.on(e, n);
  }
  once(e, n) {
    this._emitter.once(e, n);
  }
  off(e, n) {
    this._emitter.off(e, n);
  }
  emit(e, n) {
    this._emitter.emit(e, n);
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  removeAllListeners() {
    return this._emitter.removeAllListeners();
  }
  setMaxListenerWarningThreshold(e) {
    this._emitter.setMaxListeners(e);
  }
  getMaxListeners() {
    return this._emitter.getMaxListeners();
  }
}
var In;
(function(t) {
  t.CONFIG_CHANGE = "CONFIG_CHANGE";
})(In || (In = {}));
class Sy extends Ms {
  constructor(e) {
    super(), this.config = {
      handleRevert: !1,
      defaultAccount: void 0,
      defaultBlock: "latest",
      transactionBlockTimeout: 50,
      transactionConfirmationBlocks: 24,
      transactionPollingInterval: 1e3,
      transactionPollingTimeout: 750 * 1e3,
      transactionReceiptPollingInterval: void 0,
      transactionSendTimeout: 750 * 1e3,
      transactionConfirmationPollingInterval: void 0,
      blockHeaderTimeout: 10,
      maxListenersWarningThreshold: 100,
      contractDataInputFill: "data",
      defaultNetworkId: void 0,
      defaultChain: "mainnet",
      defaultHardfork: "london",
      // TODO - Check if there is a default Common
      defaultCommon: void 0,
      defaultTransactionType: "0x2",
      defaultMaxPriorityFeePerGas: Nt(25e8),
      enableExperimentalFeatures: {
        useSubscriptionWhenCheckingBlockTimeout: !1,
        useRpcCallSpecification: !1
      },
      transactionBuilder: void 0,
      transactionTypeParser: void 0,
      customTransactionSchema: void 0,
      defaultReturnFormat: Be,
      ignoreGasPricing: !1
    }, this.setConfig(e ?? {});
  }
  setConfig(e) {
    const n = Object.keys(e);
    for (const r of n)
      this._triggerConfigChange(r, e[r]), !q(e[r]) && typeof e[r] == "number" && r === "maxListenersWarningThreshold" && this.setMaxListenerWarningThreshold(Number(e[r]));
    Object.assign(this.config, e);
  }
  /**
   * The `handleRevert` options property returns the revert reason string if enabled for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   * Default is `false`.
   *
   * `Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`
   */
  get handleRevert() {
    return this.config.handleRevert;
  }
  /**
   * Will set the handleRevert
   */
  set handleRevert(e) {
    this._triggerConfigChange("handleRevert", e), this.config.handleRevert = e;
  }
  /**
   * The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
   * either `data`, `input` or both within your contract.
   * This will affect the contracts send, call and estimateGas methods
   * Default is `data`.
   */
  get contractDataInputFill() {
    return this.config.contractDataInputFill;
  }
  /**
   * Will set the contractDataInputFill
   */
  set contractDataInputFill(e) {
    this._triggerConfigChange("contractDataInputFill", e), this.config.contractDataInputFill = e;
  }
  /**
   * This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   */
  get defaultAccount() {
    return this.config.defaultAccount;
  }
  /**
   * Will set the default account.
   */
  set defaultAccount(e) {
    this._triggerConfigChange("defaultAccount", e), this.config.defaultAccount = e;
  }
  /**
   * The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
   * - web3.eth.getBalance()
   * - web3.eth.getCode()
   * - web3.eth.getTransactionCount()
   * - web3.eth.getStorageAt()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   */
  get defaultBlock() {
    return this.config.defaultBlock;
  }
  /**
   * Will set the default block.
   *
   * - A block number
   * - `"earliest"` - String: The genesis block
   * - `"latest"` - String: The latest block (current head of the blockchain)
   * - `"pending"` - String: The currently mined block (including pending transactions)
   * - `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
   * - `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.
   */
  set defaultBlock(e) {
    this._triggerConfigChange("defaultBlock", e), this.config.defaultBlock = e;
  }
  /**
   * The time used to wait for Ethereum Node to return the sent transaction result.
   * Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionSendTimeout() {
    return this.config.transactionSendTimeout;
  }
  /**
   * Will set the transactionSendTimeout.
   */
  set transactionSendTimeout(e) {
    this._triggerConfigChange("transactionSendTimeout", e), this.config.transactionSendTimeout = e;
  }
  /**
   * The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
   * Default is `50`.
   */
  get transactionBlockTimeout() {
    return this.config.transactionBlockTimeout;
  }
  /**
   * Will set the transactionBlockTimeout.
   */
  set transactionBlockTimeout(e) {
    this._triggerConfigChange("transactionBlockTimeout", e), this.config.transactionBlockTimeout = e;
  }
  /**
   * This defines the number of blocks it requires until a transaction is considered confirmed.
   * Default is `24`.
   */
  get transactionConfirmationBlocks() {
    return this.config.transactionConfirmationBlocks;
  }
  /**
   * Will set the transactionConfirmationBlocks.
   */
  set transactionConfirmationBlocks(e) {
    this._triggerConfigChange("transactionConfirmationBlocks", e), this.config.transactionConfirmationBlocks = e;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `1000` ms.
   */
  get transactionPollingInterval() {
    return this.config.transactionPollingInterval;
  }
  /**
   * Will set the transactionPollingInterval.
   */
  set transactionPollingInterval(e) {
    this._triggerConfigChange("transactionPollingInterval", e), this.config.transactionPollingInterval = e, this.transactionReceiptPollingInterval = e, this.transactionConfirmationPollingInterval = e;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionPollingTimeout() {
    return this.config.transactionPollingTimeout;
  }
  /**
   * Will set the transactionPollingTimeout.
   */
  set transactionPollingTimeout(e) {
    this._triggerConfigChange("transactionPollingTimeout", e), this.config.transactionPollingTimeout = e;
  }
  /**
   * The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `undefined`
   */
  get transactionReceiptPollingInterval() {
    return this.config.transactionReceiptPollingInterval;
  }
  /**
   * Will set the transactionReceiptPollingInterval
   */
  set transactionReceiptPollingInterval(e) {
    this._triggerConfigChange("transactionReceiptPollingInterval", e), this.config.transactionReceiptPollingInterval = e;
  }
  get transactionConfirmationPollingInterval() {
    return this.config.transactionConfirmationPollingInterval;
  }
  set transactionConfirmationPollingInterval(e) {
    this._triggerConfigChange("transactionConfirmationPollingInterval", e), this.config.transactionConfirmationPollingInterval = e;
  }
  /**
   * The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
   * Default is `10` seconds.
   */
  get blockHeaderTimeout() {
    return this.config.blockHeaderTimeout;
  }
  /**
   * Will set the blockHeaderTimeout
   */
  set blockHeaderTimeout(e) {
    this._triggerConfigChange("blockHeaderTimeout", e), this.config.blockHeaderTimeout = e;
  }
  /**
   * The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
   * Default is `false` for every feature.
   */
  get enableExperimentalFeatures() {
    return this.config.enableExperimentalFeatures;
  }
  /**
   * Will set the enableExperimentalFeatures
   */
  set enableExperimentalFeatures(e) {
    this._triggerConfigChange("enableExperimentalFeatures", e), this.config.enableExperimentalFeatures = e;
  }
  get maxListenersWarningThreshold() {
    return this.config.maxListenersWarningThreshold;
  }
  set maxListenersWarningThreshold(e) {
    this._triggerConfigChange("maxListenersWarningThreshold", e), this.setMaxListenerWarningThreshold(e), this.config.maxListenersWarningThreshold = e;
  }
  get defaultReturnFormat() {
    return this.config.defaultReturnFormat;
  }
  set defaultReturnFormat(e) {
    this._triggerConfigChange("defaultReturnFormat", e), this.config.defaultReturnFormat = e;
  }
  get defaultNetworkId() {
    return this.config.defaultNetworkId;
  }
  set defaultNetworkId(e) {
    this._triggerConfigChange("defaultNetworkId", e), this.config.defaultNetworkId = e;
  }
  get defaultChain() {
    return this.config.defaultChain;
  }
  set defaultChain(e) {
    if (!q(this.config.defaultCommon) && !q(this.config.defaultCommon.baseChain) && e !== this.config.defaultCommon.baseChain)
      throw new gc(this.config.defaultChain, e);
    this._triggerConfigChange("defaultChain", e), this.config.defaultChain = e;
  }
  /**
   * Will return the default hardfork. Default is `london`
   * The default hardfork property can be one of the following:
   * - `chainstart`
   * - `homestead`
   * - `dao`
   * - `tangerineWhistle`
   * - `spuriousDragon`
   * - `byzantium`
   * - `constantinople`
   * - `petersburg`
   * - `istanbul`
   * - `berlin`
   * - `london`
   * - 'arrowGlacier',
   * - 'tangerineWhistle',
   * - 'muirGlacier'
   *
   */
  get defaultHardfork() {
    return this.config.defaultHardfork;
  }
  /**
   * Will set the default hardfork.
   *
   */
  set defaultHardfork(e) {
    if (!q(this.config.defaultCommon) && !q(this.config.defaultCommon.hardfork) && e !== this.config.defaultCommon.hardfork)
      throw new mc(this.config.defaultCommon.hardfork, e);
    this._triggerConfigChange("defaultHardfork", e), this.config.defaultHardfork = e;
  }
  /**
   *
   * Will get the default common property
   * The default common property does contain the following Common object:
   * - `customChain` - `Object`: The custom chain properties
   * 	- `name` - `string`: (optional) The name of the chain
   * 	- `networkId` - `number`: Network ID of the custom chain
   * 	- `chainId` - `number`: Chain ID of the custom chain
   * - `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
   * - `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
   * Default is `undefined`.
   *
   */
  get defaultCommon() {
    return this.config.defaultCommon;
  }
  /**
   * Will set the default common property
   *
   */
  set defaultCommon(e) {
    if (!q(this.config.defaultHardfork) && !q(e) && !q(e.hardfork) && this.config.defaultHardfork !== e.hardfork)
      throw new mc(this.config.defaultHardfork, e.hardfork);
    if (!q(this.config.defaultChain) && !q(e) && !q(e.baseChain) && this.config.defaultChain !== e.baseChain)
      throw new gc(this.config.defaultChain, e.baseChain);
    this._triggerConfigChange("defaultCommon", e), this.config.defaultCommon = e;
  }
  /**
   *  Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
   *  Useful when you want wallets to handle gas pricing.
   */
  get ignoreGasPricing() {
    return this.config.ignoreGasPricing;
  }
  set ignoreGasPricing(e) {
    this._triggerConfigChange("ignoreGasPricing", e), this.config.ignoreGasPricing = e;
  }
  get defaultTransactionType() {
    return this.config.defaultTransactionType;
  }
  set defaultTransactionType(e) {
    this._triggerConfigChange("defaultTransactionType", e), this.config.defaultTransactionType = e;
  }
  get defaultMaxPriorityFeePerGas() {
    return this.config.defaultMaxPriorityFeePerGas;
  }
  set defaultMaxPriorityFeePerGas(e) {
    this._triggerConfigChange("defaultMaxPriorityFeePerGas", e), this.config.defaultMaxPriorityFeePerGas = e;
  }
  get transactionBuilder() {
    return this.config.transactionBuilder;
  }
  set transactionBuilder(e) {
    this._triggerConfigChange("transactionBuilder", e), this.config.transactionBuilder = e;
  }
  get transactionTypeParser() {
    return this.config.transactionTypeParser;
  }
  set transactionTypeParser(e) {
    this._triggerConfigChange("transactionTypeParser", e), this.config.transactionTypeParser = e;
  }
  get customTransactionSchema() {
    return this.config.customTransactionSchema;
  }
  set customTransactionSchema(e) {
    this._triggerConfigChange("customTransactionSchema", e), this.config.customTransactionSchema = e;
  }
  _triggerConfigChange(e, n) {
    this.emit(In.CONFIG_CHANGE, {
      name: e,
      oldValue: this.config[e],
      newValue: n
    });
  }
}
var mi = { exports: {} }, Bc;
function ky() {
  return Bc || (Bc = 1, function(t, e) {
    var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof Gn < "u" && Gn, r = function() {
      function s() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return s.prototype = n, new s();
    }();
    (function(s) {
      (function(o) {
        var a = typeof s < "u" && s || typeof self < "u" && self || // eslint-disable-next-line no-undef
        typeof Gn < "u" && Gn || {}, d = {
          searchParams: "URLSearchParams" in a,
          iterable: "Symbol" in a && "iterator" in Symbol,
          blob: "FileReader" in a && "Blob" in a && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in a,
          arrayBuffer: "ArrayBuffer" in a
        };
        function u(y) {
          return y && DataView.prototype.isPrototypeOf(y);
        }
        if (d.arrayBuffer)
          var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], f = ArrayBuffer.isView || function(y) {
            return y && c.indexOf(Object.prototype.toString.call(y)) > -1;
          };
        function h(y) {
          if (typeof y != "string" && (y = String(y)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(y) || y === "")
            throw new TypeError('Invalid character in header field name: "' + y + '"');
          return y.toLowerCase();
        }
        function g(y) {
          return typeof y != "string" && (y = String(y)), y;
        }
        function b(y) {
          var _ = {
            next: function() {
              var B = y.shift();
              return { done: B === void 0, value: B };
            }
          };
          return d.iterable && (_[Symbol.iterator] = function() {
            return _;
          }), _;
        }
        function p(y) {
          this.map = {}, y instanceof p ? y.forEach(function(_, B) {
            this.append(B, _);
          }, this) : Array.isArray(y) ? y.forEach(function(_) {
            if (_.length != 2)
              throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + _.length);
            this.append(_[0], _[1]);
          }, this) : y && Object.getOwnPropertyNames(y).forEach(function(_) {
            this.append(_, y[_]);
          }, this);
        }
        p.prototype.append = function(y, _) {
          y = h(y), _ = g(_);
          var B = this.map[y];
          this.map[y] = B ? B + ", " + _ : _;
        }, p.prototype.delete = function(y) {
          delete this.map[h(y)];
        }, p.prototype.get = function(y) {
          return y = h(y), this.has(y) ? this.map[y] : null;
        }, p.prototype.has = function(y) {
          return this.map.hasOwnProperty(h(y));
        }, p.prototype.set = function(y, _) {
          this.map[h(y)] = g(_);
        }, p.prototype.forEach = function(y, _) {
          for (var B in this.map)
            this.map.hasOwnProperty(B) && y.call(_, this.map[B], B, this);
        }, p.prototype.keys = function() {
          var y = [];
          return this.forEach(function(_, B) {
            y.push(B);
          }), b(y);
        }, p.prototype.values = function() {
          var y = [];
          return this.forEach(function(_) {
            y.push(_);
          }), b(y);
        }, p.prototype.entries = function() {
          var y = [];
          return this.forEach(function(_, B) {
            y.push([B, _]);
          }), b(y);
        }, d.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
        function m(y) {
          if (!y._noBody) {
            if (y.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            y.bodyUsed = !0;
          }
        }
        function l(y) {
          return new Promise(function(_, B) {
            y.onload = function() {
              _(y.result);
            }, y.onerror = function() {
              B(y.error);
            };
          });
        }
        function A(y) {
          var _ = new FileReader(), B = l(_);
          return _.readAsArrayBuffer(y), B;
        }
        function w(y) {
          var _ = new FileReader(), B = l(_), D = /charset=([A-Za-z0-9_-]+)/.exec(y.type), j = D ? D[1] : "utf-8";
          return _.readAsText(y, j), B;
        }
        function x(y) {
          for (var _ = new Uint8Array(y), B = new Array(_.length), D = 0; D < _.length; D++)
            B[D] = String.fromCharCode(_[D]);
          return B.join("");
        }
        function I(y) {
          if (y.slice)
            return y.slice(0);
          var _ = new Uint8Array(y.byteLength);
          return _.set(new Uint8Array(y)), _.buffer;
        }
        function R() {
          return this.bodyUsed = !1, this._initBody = function(y) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = y, y ? typeof y == "string" ? this._bodyText = y : d.blob && Blob.prototype.isPrototypeOf(y) ? this._bodyBlob = y : d.formData && FormData.prototype.isPrototypeOf(y) ? this._bodyFormData = y : d.searchParams && URLSearchParams.prototype.isPrototypeOf(y) ? this._bodyText = y.toString() : d.arrayBuffer && d.blob && u(y) ? (this._bodyArrayBuffer = I(y.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(y) || f(y)) ? this._bodyArrayBuffer = I(y) : this._bodyText = y = Object.prototype.toString.call(y) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof y == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : d.searchParams && URLSearchParams.prototype.isPrototypeOf(y) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, d.blob && (this.blob = function() {
            var y = m(this);
            if (y)
              return y;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }), this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var y = m(this);
              return y || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else {
              if (d.blob)
                return this.blob().then(A);
              throw new Error("could not read as ArrayBuffer");
            }
          }, this.text = function() {
            var y = m(this);
            if (y)
              return y;
            if (this._bodyBlob)
              return w(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(x(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, d.formData && (this.formData = function() {
            return this.text().then(k);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var P = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function v(y) {
          var _ = y.toUpperCase();
          return P.indexOf(_) > -1 ? _ : y;
        }
        function U(y, _) {
          if (!(this instanceof U))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          _ = _ || {};
          var B = _.body;
          if (y instanceof U) {
            if (y.bodyUsed)
              throw new TypeError("Already read");
            this.url = y.url, this.credentials = y.credentials, _.headers || (this.headers = new p(y.headers)), this.method = y.method, this.mode = y.mode, this.signal = y.signal, !B && y._bodyInit != null && (B = y._bodyInit, y.bodyUsed = !0);
          } else
            this.url = String(y);
          if (this.credentials = _.credentials || this.credentials || "same-origin", (_.headers || !this.headers) && (this.headers = new p(_.headers)), this.method = v(_.method || this.method || "GET"), this.mode = _.mode || this.mode || null, this.signal = _.signal || this.signal || function() {
            if ("AbortController" in a) {
              var F = new AbortController();
              return F.signal;
            }
          }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && B)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(B), (this.method === "GET" || this.method === "HEAD") && (_.cache === "no-store" || _.cache === "no-cache")) {
            var D = /([?&])_=[^&]*/;
            if (D.test(this.url))
              this.url = this.url.replace(D, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            else {
              var j = /\?/;
              this.url += (j.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
        U.prototype.clone = function() {
          return new U(this, { body: this._bodyInit });
        };
        function k(y) {
          var _ = new FormData();
          return y.trim().split("&").forEach(function(B) {
            if (B) {
              var D = B.split("="), j = D.shift().replace(/\+/g, " "), F = D.join("=").replace(/\+/g, " ");
              _.append(decodeURIComponent(j), decodeURIComponent(F));
            }
          }), _;
        }
        function M(y) {
          var _ = new p(), B = y.replace(/\r?\n[\t ]+/g, " ");
          return B.split("\r").map(function(D) {
            return D.indexOf(`
`) === 0 ? D.substr(1, D.length) : D;
          }).forEach(function(D) {
            var j = D.split(":"), F = j.shift().trim();
            if (F) {
              var ce = j.join(":").trim();
              try {
                _.append(F, ce);
              } catch (ye) {
                console.warn("Response " + ye.message);
              }
            }
          }), _;
        }
        R.call(U.prototype);
        function L(y, _) {
          if (!(this instanceof L))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          if (_ || (_ = {}), this.type = "default", this.status = _.status === void 0 ? 200 : _.status, this.status < 200 || this.status > 599)
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          this.ok = this.status >= 200 && this.status < 300, this.statusText = _.statusText === void 0 ? "" : "" + _.statusText, this.headers = new p(_.headers), this.url = _.url || "", this._initBody(y);
        }
        R.call(L.prototype), L.prototype.clone = function() {
          return new L(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
          });
        }, L.error = function() {
          var y = new L(null, { status: 200, statusText: "" });
          return y.ok = !1, y.status = 0, y.type = "error", y;
        };
        var K = [301, 302, 303, 307, 308];
        L.redirect = function(y, _) {
          if (K.indexOf(_) === -1)
            throw new RangeError("Invalid status code");
          return new L(null, { status: _, headers: { location: y } });
        }, o.DOMException = a.DOMException;
        try {
          new o.DOMException();
        } catch {
          o.DOMException = function(_, B) {
            this.message = _, this.name = B;
            var D = Error(_);
            this.stack = D.stack;
          }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
        }
        function le(y, _) {
          return new Promise(function(B, D) {
            var j = new U(y, _);
            if (j.signal && j.signal.aborted)
              return D(new o.DOMException("Aborted", "AbortError"));
            var F = new XMLHttpRequest();
            function ce() {
              F.abort();
            }
            F.onload = function() {
              var ae = {
                statusText: F.statusText,
                headers: M(F.getAllResponseHeaders() || "")
              };
              j.url.indexOf("file://") === 0 && (F.status < 200 || F.status > 599) ? ae.status = 200 : ae.status = F.status, ae.url = "responseURL" in F ? F.responseURL : ae.headers.get("X-Request-URL");
              var xe = "response" in F ? F.response : F.responseText;
              setTimeout(function() {
                B(new L(xe, ae));
              }, 0);
            }, F.onerror = function() {
              setTimeout(function() {
                D(new TypeError("Network request failed"));
              }, 0);
            }, F.ontimeout = function() {
              setTimeout(function() {
                D(new TypeError("Network request timed out"));
              }, 0);
            }, F.onabort = function() {
              setTimeout(function() {
                D(new o.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function ye(ae) {
              try {
                return ae === "" && a.location.href ? a.location.href : ae;
              } catch {
                return ae;
              }
            }
            if (F.open(j.method, ye(j.url), !0), j.credentials === "include" ? F.withCredentials = !0 : j.credentials === "omit" && (F.withCredentials = !1), "responseType" in F && (d.blob ? F.responseType = "blob" : d.arrayBuffer && (F.responseType = "arraybuffer")), _ && typeof _.headers == "object" && !(_.headers instanceof p || a.Headers && _.headers instanceof a.Headers)) {
              var Je = [];
              Object.getOwnPropertyNames(_.headers).forEach(function(ae) {
                Je.push(h(ae)), F.setRequestHeader(ae, g(_.headers[ae]));
              }), j.headers.forEach(function(ae, xe) {
                Je.indexOf(xe) === -1 && F.setRequestHeader(xe, ae);
              });
            } else
              j.headers.forEach(function(ae, xe) {
                F.setRequestHeader(xe, ae);
              });
            j.signal && (j.signal.addEventListener("abort", ce), F.onreadystatechange = function() {
              F.readyState === 4 && j.signal.removeEventListener("abort", ce);
            }), F.send(typeof j._bodyInit > "u" ? null : j._bodyInit);
          });
        }
        return le.polyfill = !0, a.fetch || (a.fetch = le, a.Headers = p, a.Request = U, a.Response = L), o.Headers = p, o.Request = U, o.Response = L, o.fetch = le, o;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = n.fetch ? n : r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(mi, mi.exports)), mi.exports;
}
var Ry = ky();
const By = /* @__PURE__ */ pa(Ry);
var Py = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Os extends si {
  constructor(e, n) {
    if (super(), !Os.validateClientUrl(e))
      throw new Ao(e);
    this.clientUrl = e, this.httpProviderOptions = n;
  }
  static validateClientUrl(e) {
    return typeof e == "string" ? /^http(s)?:\/\//i.test(e) : !1;
  }
  /* eslint-disable class-methods-use-this */
  getStatus() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  supportsSubscriptions() {
    return !1;
  }
  request(e, n) {
    var r;
    return Py(this, void 0, void 0, function* () {
      const i = Object.assign(Object.assign({}, (r = this.httpProviderOptions) === null || r === void 0 ? void 0 : r.providerOptions), n), s = yield By(this.clientUrl, Object.assign(Object.assign({}, i), { method: "POST", headers: Object.assign(Object.assign({}, i.headers), { "Content-Type": "application/json" }), body: JSON.stringify(e) }));
      if (!s.ok)
        throw new ut(yield s.json(), void 0, void 0, s.status);
      return yield s.json();
    });
  }
  /* eslint-disable class-methods-use-this */
  on() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  removeListener() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  once() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  removeAllListeners() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  connect() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  disconnect() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  reset() {
    throw new bt();
  }
  /* eslint-disable class-methods-use-this */
  reconnect() {
    throw new bt();
  }
}
var Dn = null;
typeof WebSocket < "u" ? Dn = WebSocket : typeof MozWebSocket < "u" ? Dn = MozWebSocket : typeof global < "u" ? Dn = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Dn = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Dn = self.WebSocket || self.MozWebSocket);
const Cy = Dn;
class Ad extends yd {
  /**
   * This is a class used for Web Socket connections. It extends the abstract class SocketProvider {@link SocketProvider} that extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the Web Socket.
   * @param socketOptions - The options for the Web Socket client.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
  // this constructor is to specify the type for `socketOptions` for a better intellisense.
  // eslint-disable-next-line no-useless-constructor
  constructor(e, n, r) {
    super(e, n, r);
  }
  // eslint-disable-next-line class-methods-use-this
  _validateProviderPath(e) {
    return typeof e == "string" ? /^ws(s)?:\/\//i.test(e) : !1;
  }
  getStatus() {
    if (this._socketConnection && !q(this._socketConnection))
      switch (this._socketConnection.readyState) {
        case this._socketConnection.CONNECTING:
          return "connecting";
        case this._socketConnection.OPEN:
          return "connected";
        default:
          return "disconnected";
      }
    return "disconnected";
  }
  _openSocketConnection() {
    this._socketConnection = new Cy(this._socketPath, void 0, this._socketOptions && Object.keys(this._socketOptions).length === 0 ? void 0 : this._socketOptions);
  }
  _closeSocketConnection(e, n) {
    var r;
    (r = this._socketConnection) === null || r === void 0 || r.close(e, n);
  }
  _sendToSocket(e) {
    var n;
    if (this.getStatus() === "disconnected")
      throw new yo();
    (n = this._socketConnection) === null || n === void 0 || n.send(JSON.stringify(e));
  }
  _parseResponses(e) {
    return this.chunkResponseParser.parseResponse(e.data);
  }
  _addSocketListeners() {
    var e, n, r, i;
    (e = this._socketConnection) === null || e === void 0 || e.addEventListener("open", this._onOpenHandler), (n = this._socketConnection) === null || n === void 0 || n.addEventListener("message", this._onMessageHandler), (r = this._socketConnection) === null || r === void 0 || r.addEventListener("close", (s) => this._onCloseHandler(s)), (i = this._socketConnection) === null || i === void 0 || i.addEventListener("error", this._onErrorHandler);
  }
  _removeSocketListeners() {
    var e, n, r;
    (e = this._socketConnection) === null || e === void 0 || e.removeEventListener("message", this._onMessageHandler), (n = this._socketConnection) === null || n === void 0 || n.removeEventListener("open", this._onOpenHandler), (r = this._socketConnection) === null || r === void 0 || r.removeEventListener("close", this._onCloseHandler);
  }
  _onCloseEvent(e) {
    var n;
    if (this._reconnectOptions.autoReconnect && (![1e3, 1001].includes(e.code) || !e.wasClean)) {
      this._reconnect();
      return;
    }
    this._clearQueues(e), this._removeSocketListeners(), this._onDisconnect(e.code, e.reason), (n = this._socketConnection) === null || n === void 0 || n.removeEventListener("error", this._onErrorHandler);
  }
}
const wd = (t) => si.isWeb3Provider(t), _d = (t) => typeof t != "string" && "request" in t && t.request.constructor.name === "Function", vd = (t) => typeof t != "string" && "request" in t && t.request.constructor.name === "AsyncFunction", Ed = (t) => typeof t != "string" && "send" in t, Id = (t) => typeof t != "string" && "sendAsync" in t, rs = (t) => t && (wd(t) || vd(t) || _d(t) || Id(t) || Ed(t)), Ny = (t) => t && "supportsSubscriptions" in t ? t.supportsSubscriptions() : !!(t && typeof t != "string" && "on" in t);
var eo = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
}, nr;
(function(t) {
  t.PROVIDER_CHANGED = "PROVIDER_CHANGED", t.BEFORE_PROVIDER_CHANGE = "BEFORE_PROVIDER_CHANGE";
})(nr || (nr = {}));
const Pc = {
  HttpProvider: Os,
  WebsocketProvider: Ad
};
class hn extends Ms {
  constructor(e, n, r) {
    super(), q(e) || this.setProvider(e), this.useRpcCallSpecification = n, q(r) || (this.middleware = r);
  }
  /**
   * Will return all available providers
   */
  static get providers() {
    return Pc;
  }
  /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   */
  get provider() {
    return this._provider;
  }
  /**
   * Will return all available providers
   */
  // eslint-disable-next-line class-methods-use-this
  get providers() {
    return Pc;
  }
  /**
   * Use to set provider. Provider can be a provider instance or a string.
   *
   * @param provider - The provider to set
   */
  setProvider(e) {
    let n;
    if (e && typeof e == "string" && this.providers)
      if (/^http(s)?:\/\//i.test(e))
        n = new this.providers.HttpProvider(e);
      else if (/^ws(s)?:\/\//i.test(e))
        n = new this.providers.WebsocketProvider(e);
      else
        throw new Ai(`Can't autodetect provider for "${e}"`);
    else q(e) ? n = void 0 : n = e;
    return this.emit(nr.BEFORE_PROVIDER_CHANGE, this._provider), this._provider = n, this.emit(nr.PROVIDER_CHANGED, this._provider), !0;
  }
  setMiddleware(e) {
    this.middleware = e;
  }
  /**
   *
   * Will execute a request
   *
   * @param request - {@link Web3APIRequest} The request to send
   *
   * @returns The response of the request {@link ResponseType}. If there is error
   * in the response, will throw an error
   */
  send(e) {
    return eo(this, void 0, void 0, function* () {
      const n = Object.assign({}, e);
      let r = yield this._sendRequest(n);
      if (q(this.middleware) || (r = yield this.middleware.processResponse(r)), qt(r))
        return r.result;
      throw new ut(r);
    });
  }
  /**
   * Same as send, but, will execute a batch of requests
   *
   * @param request {@link JsonRpcBatchRequest} The batch request to send
   */
  sendBatch(e) {
    return eo(this, void 0, void 0, function* () {
      return yield this._sendRequest(e);
    });
  }
  _sendRequest(e) {
    return eo(this, void 0, void 0, function* () {
      const { provider: n } = this;
      if (q(n))
        throw new Ai("Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.");
      let r = at(e) ? va(e) : En(e);
      if (q(this.middleware) || (r = yield this.middleware.processRequest(r)), wd(n)) {
        let i;
        try {
          i = yield n.request(r);
        } catch (s) {
          i = s;
        }
        return this._processJsonRpcResponse(r, i, { legacy: !1, error: !1 });
      }
      if (vd(n))
        return n.request(r).then((i) => this._processJsonRpcResponse(r, i, {
          legacy: !0,
          error: !1
        })).catch((i) => this._processJsonRpcResponse(r, i, { legacy: !0, error: !0 }));
      if (_d(n))
        return new Promise((i, s) => {
          const o = (u) => {
            s(this._processJsonRpcResponse(r, u, {
              legacy: !0,
              error: !0
            }));
          }, a = (u) => i(this._processJsonRpcResponse(r, u, {
            legacy: !0,
            error: !1
          })), d = n.request(
            r,
            // a callback that is expected to be called after getting the response:
            (u, c) => u ? o(u) : a(c)
          );
          dd(d) && d.then(a).catch((c) => {
            try {
              const f = this._processJsonRpcResponse(r, c, { legacy: !0, error: !0 });
              s(f);
            } catch (f) {
              s(f);
            }
          });
        });
      if (Ed(n))
        return new Promise((i, s) => {
          n.send(r, (o, a) => {
            if (o)
              return s(this._processJsonRpcResponse(r, o, {
                legacy: !0,
                error: !0
              }));
            if (q(a))
              throw new ut({}, 'Got a "nullish" response from provider.');
            return i(this._processJsonRpcResponse(r, a, {
              legacy: !0,
              error: !1
            }));
          });
        });
      if (Id(n))
        return n.sendAsync(r).then((i) => this._processJsonRpcResponse(r, i, { legacy: !0, error: !1 })).catch((i) => this._processJsonRpcResponse(r, i, {
          legacy: !0,
          error: !0
        }));
      throw new Ai("Provider does not have a request or send method to use.");
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _processJsonRpcResponse(e, n, { legacy: r, error: i }) {
    if (q(n))
      return this._buildResponse(
        e,
        // Some providers uses "null" as valid empty response
        // eslint-disable-next-line no-null/no-null
        null,
        i
      );
    if (zt(n)) {
      if (this.useRpcCallSpecification && wa(n)) {
        const s = n;
        if (Ce.get(s.error.code)) {
          const o = Ce.get(s.error.code).error;
          throw new o(s);
        } else
          throw new ze(s);
      } else if (!hn._isReverted(n))
        throw new vs(n, e);
    }
    if (qt(n))
      return n;
    if (n instanceof Error)
      throw hn._isReverted(n), n;
    if (!r && at(e) && Kr(n) || r && !i && at(e))
      return n;
    if (r && i && at(e))
      throw n;
    if (r && !zt(n) && !qt(n))
      return this._buildResponse(e, n, i);
    throw at(e) && !Array.isArray(n) ? new ut(n, "Got normal response for a batch request.") : !at(e) && Array.isArray(n) ? new ut(n, "Got batch response for a normal request.") : new ut(n, "Invalid response");
  }
  static _isReverted(e) {
    let n;
    if (zt(e) ? n = e.error : e instanceof Error && (n = e), n != null && n.message.includes("revert"))
      throw new fn(n);
    return !1;
  }
  // Need to use same types as _processJsonRpcResponse so have to declare as instance method
  // eslint-disable-next-line class-methods-use-this
  _buildResponse(e, n, r) {
    const i = {
      jsonrpc: "2.0",
      // eslint-disable-next-line no-nested-ternary
      id: at(e) ? e[0].id : "id" in e ? e.id : (
        // Have to use the null here explicitly
        // eslint-disable-next-line no-null/no-null
        null
      )
    };
    return r ? Object.assign(Object.assign({}, i), { error: n }) : Object.assign(Object.assign({}, i), { result: n });
  }
}
var wr = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class is {
  constructor(e, n, r = !1) {
    this.requestManager = e, this.registeredSubscriptions = n, this.tolerateUnlinkedSubscription = r, this._subscriptions = /* @__PURE__ */ new Map(), this.requestManager.on(nr.BEFORE_PROVIDER_CHANGE, () => wr(this, void 0, void 0, function* () {
      yield this.unsubscribe();
    })), this.requestManager.on(nr.PROVIDER_CHANGED, () => {
      this.clear(), this.listenToProviderEvents();
    }), this.listenToProviderEvents();
  }
  listenToProviderEvents() {
    const e = this.requestManager.provider;
    !this.requestManager.provider || typeof (e == null ? void 0 : e.supportsSubscriptions) == "function" && !(e != null && e.supportsSubscriptions()) || typeof this.requestManager.provider.on == "function" && (typeof this.requestManager.provider.request == "function" ? this.requestManager.provider.on(
      "message",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      (n) => this.messageListener(n)
    ) : e.on("data", (n) => this.messageListener(n)));
  }
  messageListener(e) {
    var n, r, i;
    if (!e)
      throw new It("Should not call messageListener with no data. Type was");
    const s = ((n = e.params) === null || n === void 0 ? void 0 : n.subscription) || ((r = e.data) === null || r === void 0 ? void 0 : r.subscription) || ((i = e.id) === null || i === void 0 ? void 0 : i.toString(16));
    if (s) {
      const o = this._subscriptions.get(s);
      o == null || o.processSubscriptionData(e);
    }
  }
  /**
   * Will create a new subscription
   *
   * @param name - The subscription you want to subscribe to
   * @param args - Optional additional parameters, depending on the subscription type
   * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   *
   * Will subscribe to a specific topic (note: name)
   * @returns The subscription object
   */
  subscribe(e, n) {
    return wr(this, arguments, void 0, function* (r, i, s = Be) {
      const o = this.registeredSubscriptions[r];
      if (!o)
        throw new It("Invalid subscription type");
      const a = new o(i ?? void 0, {
        subscriptionManager: this,
        returnFormat: s
        // eslint.disable-next-line @typescript-eslint/no-unsafe-any
      });
      return yield this.addSubscription(a), a;
    });
  }
  /**
   * Will returns all subscriptions.
   */
  get subscriptions() {
    return this._subscriptions;
  }
  /**
   *
   * Adds an instance of {@link Web3Subscription} and subscribes to it
   *
   * @param sub - A {@link Web3Subscription} object
   */
  addSubscription(e) {
    return wr(this, void 0, void 0, function* () {
      if (!this.requestManager.provider)
        throw new Ai("Provider not available");
      if (!this.supportsSubscriptions())
        throw new It("The current provider does not support subscriptions");
      if (e.id && this._subscriptions.has(e.id))
        throw new It(`Subscription with id "${e.id}" already exists`);
      if (yield e.sendSubscriptionRequest(), q(e.id))
        throw new It("Subscription is not subscribed yet.");
      return this._subscriptions.set(e.id, e), e.id;
    });
  }
  /**
   * Will clear a subscription
   *
   * @param id - The subscription of type {@link Web3Subscription}  to remove
   */
  removeSubscription(e) {
    return wr(this, void 0, void 0, function* () {
      const { id: n } = e;
      if (q(n))
        throw new It("Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.");
      if (!this._subscriptions.has(n) && !this.tolerateUnlinkedSubscription)
        throw new It(`Subscription with id "${n.toString()}" does not exists`);
      return yield e.sendUnsubscribeRequest(), this._subscriptions.delete(n), n;
    });
  }
  /**
   * Will unsubscribe all subscriptions that fulfill the condition
   *
   * @param condition - A function that access and `id` and a `subscription` and return `true` or `false`
   * @returns An array of all the un-subscribed subscriptions
   */
  unsubscribe(e) {
    return wr(this, void 0, void 0, function* () {
      const n = [];
      for (const [r, i] of this.subscriptions.entries())
        (!e || typeof e == "function" && e({ id: r, sub: i })) && n.push(this.removeSubscription(i));
      return Promise.all(n);
    });
  }
  /**
   * Clears all subscriptions
   */
  clear() {
    this._subscriptions.clear();
  }
  /**
   * Check whether the current provider supports subscriptions.
   *
   * @returns `true` or `false` depending on if the current provider supports subscriptions
   */
  supportsSubscriptions() {
    return q(this.requestManager.provider) ? !1 : Ny(this.requestManager.provider);
  }
}
var _r = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class di extends Ms {
  constructor(e, n) {
    var r;
    super(), this.args = e;
    const { requestManager: i } = n, { subscriptionManager: s } = n;
    i ? this._subscriptionManager = new is(i, {}, !0) : this._subscriptionManager = s, this._returnFormat = (r = n == null ? void 0 : n.returnFormat) !== null && r !== void 0 ? r : Be;
  }
  get id() {
    return this._id;
  }
  get lastBlock() {
    return this._lastBlock;
  }
  subscribe() {
    return _r(this, void 0, void 0, function* () {
      return this._subscriptionManager.addSubscription(this);
    });
  }
  processSubscriptionData(e) {
    var n, r;
    e != null && e.data ? this._processSubscriptionResult((r = (n = e == null ? void 0 : e.data) === null || n === void 0 ? void 0 : n.result) !== null && r !== void 0 ? r : e == null ? void 0 : e.data) : e && Ns(e) && this._processSubscriptionResult(e == null ? void 0 : e.params.result);
  }
  sendSubscriptionRequest() {
    return _r(this, void 0, void 0, function* () {
      return this._id = yield this._subscriptionManager.requestManager.send({
        method: "eth_subscribe",
        params: this._buildSubscriptionParams()
      }), this.emit("connected", this._id), this._id;
    });
  }
  get returnFormat() {
    return this._returnFormat;
  }
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  resubscribe() {
    return _r(this, void 0, void 0, function* () {
      yield this.unsubscribe(), yield this.subscribe();
    });
  }
  unsubscribe() {
    return _r(this, void 0, void 0, function* () {
      this.id && (yield this._subscriptionManager.removeSubscription(this));
    });
  }
  sendUnsubscribeRequest() {
    return _r(this, void 0, void 0, function* () {
      yield this._subscriptionManager.requestManager.send({
        method: "eth_unsubscribe",
        params: [this.id]
      }), this._id = void 0;
    });
  }
  // eslint-disable-next-line class-methods-use-this
  formatSubscriptionResult(e) {
    return e;
  }
  _processSubscriptionResult(e) {
    this.emit("data", this.formatSubscriptionResult(e));
  }
  _processSubscriptionError(e) {
    this.emit("error", e);
  }
  // eslint-disable-next-line class-methods-use-this
  _buildSubscriptionParams() {
    throw new Error("Implement in the child class");
  }
}
var Cn = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class ss extends hl {
  constructor() {
    super(...arguments), this._addressMap = /* @__PURE__ */ new Map(), this._defaultKeyName = "web3js_wallet";
  }
  /**
   * Get the storage object of the browser
   *
   * @returns the storage
   */
  static getStorage() {
    let e;
    try {
      e = window.localStorage;
      const n = "__storage_test__";
      return e.setItem(n, n), e.removeItem(n), e;
    } catch (n) {
      return n && // everything except Firefox
      (n.code === 22 || // Firefox
      n.code === 1014 || // test name field too, because code might not be present
      // everything except Firefox
      n.name === "QuotaExceededError" || // Firefox
      n.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
      !E(e) && e.length !== 0 ? e : void 0;
    }
  }
  /**
   * Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.
   *
   * @param numberOfAccounts - Number of accounts to create. Leave empty to create an empty wallet.
   * @returns The wallet
   * ```ts
   * web3.eth.accounts.wallet.create(2)
   * > Wallet(2) [
   *   {
   *     address: '0xde38310a42B751AE57d30cFFF4a0A3c52A442fCE',
   *     privateKey: '0x6422c9d28efdcbee93c1d32a5fc6fd6fa081b985487885296cf8c9bbb5872600',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   {
   *     address: '0x766BF755246d924B1d017Fdb5390f38a60166691',
   *     privateKey: '0x756530f13c0eb636ebdda655335f5dea9921e3362e2e588b0ad59e556f7751f0',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(2) {
   *     '0xde38310a42b751ae57d30cfff4a0a3c52a442fce' => 0,
   *     '0x766bf755246d924b1d017fdb5390f38a60166691' => 1
   *   },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   *
   * ```
   */
  create(e) {
    for (let n = 0; n < e; n += 1)
      this.add(this._accountProvider.create());
    return this;
  }
  /**
   * Adds an account using a private key or account object to the wallet.
   *
   * @param account - A private key or account object
   * @returns The wallet
   *
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   * > Wallet(1) [
   *   {
   *     address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *     privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(1) { '0x85d70633b90e03e0276b98880286d0d055685ed7' => 0 },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  add(e) {
    var n;
    if (typeof e == "string")
      return this.add(this._accountProvider.privateKeyToAccount(e));
    let r = this.length;
    return this.get(e.address) && (console.warn(`Account ${e.address.toLowerCase()} already exists.`), r = (n = this._addressMap.get(e.address.toLowerCase())) !== null && n !== void 0 ? n : r), this._addressMap.set(e.address.toLowerCase(), r), this[r] = e, this;
  }
  /**
   * Get the account of the wallet with either the index or public address.
   *
   * @param addressOrIndex - A string of the address or number index within the wallet.
   * @returns The account object or undefined if the account doesn't exist
   */
  get(e) {
    if (typeof e == "string") {
      const n = this._addressMap.get(e.toLowerCase());
      return E(n) ? void 0 : this[n];
    }
    return this[e];
  }
  /**
   * Removes an account from the wallet.
   *
   * @param addressOrIndex - The account address, or index in the wallet.
   * @returns true if the wallet was removed. false if it couldn't be found.
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   *
   * web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
   * > true
   * web3.eth.accounts.wallet
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  remove(e) {
    if (typeof e == "string") {
      const n = this._addressMap.get(e.toLowerCase());
      return E(n) ? !1 : (this._addressMap.delete(e.toLowerCase()), this.splice(n, 1), !0);
    }
    return this[e] ? (this.splice(e, 1), !0) : !1;
  }
  /**
   * Securely empties the wallet and removes all its accounts.
   * Use this with *caution as it will remove all accounts stored in local wallet.
   *
   * @returns The wallet object
   * ```ts
   *
   * web3.eth.accounts.wallet.clear();
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  clear() {
    return this._addressMap.clear(), this.length = 0, this;
  }
  /**
   * Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
   *
   * @param password - The password which will be used for encryption
   * @param options - encryption options
   * @returns An array of the encrypted keystore v3.
   *
   * ```ts
   * web3.eth.accounts.wallet.create(1)
   * web3.eth.accounts.wallet.encrypt("abc").then(console.log);
   * > [
   * '{"version":3,"id":"fa46e213-a7c3-4844-b903-dd14d39cc7db",
   * "address":"fa3e41a401609103c241431cbdee8623ae2a321a","crypto":
   * {"ciphertext":"8d179a911d6146ad2924e86bf493ed89b8ff3596ffec0816e761c542016ab13c",
   * "cipherparams":{"iv":"acc888c6cf4a19b86846cef0185a7164"},"cipher":"aes-128-ctr",
   * "kdf":"scrypt","kdfparams":{"n":8192,"r":8,"p":1,"dklen":32,"salt":"6a743c9b367d15f4758e4f3f3378ff0fd443708d1c64854e07588ea5331823ae"},
   * "mac":"410544c8307e3691fda305eb3722d82c3431f212a87daa119a21587d96698b57"}}'
   * ]
   * ```
   */
  encrypt(e, n) {
    return Cn(this, void 0, void 0, function* () {
      return Promise.all(this.map((r) => Cn(this, void 0, void 0, function* () {
        return r.encrypt(e, n);
      })));
    });
  }
  /**
   * Decrypts keystore v3 objects.
   *
   * @param encryptedWallets - An array of encrypted keystore v3 objects to decrypt
   * @param password - The password to encrypt with
   * @param options - decrypt options for the wallets
   * @returns The decrypted wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.decrypt([
   * { version: 3,
   * id: '83191a81-aaca-451f-b63d-0c5f3b849289',
   * address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
   * crypto:
   * { ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
   *   cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
   * { version: 3,
   * id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
   * address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
   * crypto:
   * { ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
   *   cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
   * ], 'test').then(console.log)
   * > Wallet {
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _defaultKeyName: 'web3js_wallet',
   *   _accounts: {
   *     '0x85d70633b90e03e0276b98880286d0d055685ed7': {
   *       address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *       privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0x06f702337909c06c82b09b7a22f0a2f0855d1f68': {
   *       address: '0x06F702337909C06C82B09B7A22F0a2f0855d1F68',
   *       privateKey: '87a51da18900da7398b3bab03996833138f269f8f66dd1237b98df6b9ce14573',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0xb5d89661b59a9af0b34f58d19138baa2de48baaf': {
   *       address: '0xB5d89661B59a9aF0b34f58D19138bAa2de48BAaf',
   *       privateKey: '7ee61c5282979aae9dd795bb6a54e8bdc2bfe009acb64eb9a67322eec3b3da6e',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     }
   *   }
   * }
   * ```
   */
  decrypt(e, n, r) {
    return Cn(this, void 0, void 0, function* () {
      const i = yield Promise.all(e.map((s) => Cn(this, void 0, void 0, function* () {
        return this._accountProvider.decrypt(s, n, r);
      })));
      for (const s of i)
        this.add(s);
      return this;
    });
  }
  /**
   * Stores the wallet encrypted and as string in local storage.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to encrypt the wallet
   * @param keyName - (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.
   * @returns Will return boolean value true if saved properly
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * >true
   * ```
   */
  save(e, n) {
    return Cn(this, void 0, void 0, function* () {
      const r = ss.getStorage();
      if (!r)
        throw new Error("Local storage not available.");
      return r.setItem(n ?? this._defaultKeyName, JSON.stringify(yield this.encrypt(e))), !0;
    });
  }
  /**
   * Loads a wallet from local storage and decrypts it.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to decrypt the wallet.
   * @param keyName - (optional)The key used for local storage position, defaults to `web3js_wallet"`
   * @returns Returns the wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * > true
   * web3.eth.accounts.wallet.load('test#!$');
   * { defaultKeyName: "web3js_wallet",
   *   length: 0,
   *   _accounts: Accounts {_requestManager: RequestManager, givenProvider: Proxy, providers: {…}, _provider: WebsocketProvider, …},
   *   [[Prototype]]: Object
   * }
   * ```
   */
  load(e, n) {
    return Cn(this, void 0, void 0, function* () {
      const r = ss.getStorage();
      if (!r)
        throw new Error("Local storage not available.");
      const i = r.getItem(n ?? this._defaultKeyName);
      return i && (yield this.decrypt(JSON.parse(i) || [], e)), this;
    });
  }
}
const lt = { web: wi };
function xd(t, e, n) {
  if (!n.startsWith("aes-"))
    throw new Error(`AES submodule doesn't support mode ${n}`);
  if (e.length !== 16)
    throw new Error("AES: wrong IV length");
  if (n.startsWith("aes-128") && t.length !== 16 || n.startsWith("aes-256") && t.length !== 32)
    throw new Error("AES: wrong key length");
}
async function Td(t, e, n) {
  if (!lt.web)
    throw new Error("Browser crypto not available.");
  let r;
  if (["aes-128-cbc", "aes-256-cbc"].includes(t) && (r = "cbc"), ["aes-128-ctr", "aes-256-ctr"].includes(t) && (r = "ctr"), !r)
    throw new Error("AES: unsupported mode");
  return [await lt.web.subtle.importKey("raw", e, { name: `AES-${r.toUpperCase()}`, length: e.length * 8 }, !0, ["encrypt", "decrypt"]), { name: `aes-${r}`, iv: n, counter: n, length: 128 }];
}
async function Ia(t, e, n, r = "aes-128-ctr", i = !0) {
  if (xd(e, n, r), lt.web) {
    const [s, o] = await Td(r, e, n), a = await lt.web.subtle.encrypt(o, s, t);
    let d = new Uint8Array(a);
    return !i && o.name === "aes-cbc" && !(t.length % 16) && (d = d.slice(0, -16)), d;
  } else if (lt.node) {
    const s = lt.node.createCipheriv(r, e, n);
    return s.setAutoPadding(i), Gi(s.update(t), s.final());
  } else
    throw new Error("The environment doesn't have AES module");
}
async function My(t, e, n, r) {
  const i = t.slice(-16);
  for (let o = 0; o < 16; o++)
    i[o] ^= n[o] ^ 16;
  return (await Ia(i, e, n, r)).slice(0, 16);
}
async function Oy(t, e, n, r = "aes-128-ctr", i = !0) {
  if (xd(e, n, r), lt.web) {
    const [s, o] = await Td(r, e, n);
    if (!i && o.name === "aes-cbc") {
      const u = await My(t, e, n, r);
      t = Gi(t, u);
    }
    const a = await lt.web.subtle.decrypt(o, s, t), d = new Uint8Array(a);
    if (o.name === "aes-cbc") {
      const u = await Ia(d, e, n, r);
      if (!Im(u, t))
        throw new Error("AES: wrong padding");
    }
    return d;
  } else if (lt.node) {
    const s = lt.node.createDecipheriv(r, e, n);
    return s.setAutoPadding(i), Gi(s.update(t), s.final());
  } else
    throw new Error("The environment doesn't have AES module");
}
class Sd extends sa {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, ra(e);
    const r = Zn(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, s = new Uint8Array(i);
    s.set(r.length > i ? e.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++)
      s[o] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let o = 0; o < s.length; o++)
      s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(e) {
    return yn(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    yn(this), fr(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: i, destroyed: s, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = s, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const xa = (t, e, n) => new Sd(t, e).update(n).digest();
xa.create = (t, e) => new Sd(t, e);
function Ly(t, e, n, r) {
  ra(t);
  const i = Bu({ dkLen: 32, asyncTick: 10 }, r), { c: s, dkLen: o, asyncTick: a } = i;
  if (Le(s), Le(o), Le(a), s < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const d = Zn(e), u = Zn(n), c = new Uint8Array(o), f = xa.create(t, d), h = f._cloneInto().update(u);
  return { c: s, dkLen: o, asyncTick: a, DK: c, PRF: f, PRFSalt: h };
}
function Dy(t, e, n, r, i) {
  return t.destroy(), e.destroy(), r && r.destroy(), i.fill(0), n;
}
function Ta(t, e, n, r) {
  const { c: i, dkLen: s, DK: o, PRF: a, PRFSalt: d } = Ly(t, e, n, r);
  let u;
  const c = new Uint8Array(4), f = vi(c), h = new Uint8Array(a.outputLen);
  for (let g = 1, b = 0; b < s; g++, b += a.outputLen) {
    const p = o.subarray(b, b + a.outputLen);
    f.setInt32(0, g, !1), (u = d._cloneInto(u)).update(c).digestInto(h), p.set(h.subarray(0, p.length));
    for (let m = 1; m < i; m++) {
      a._cloneInto(u).update(h).digestInto(h);
      for (let l = 0; l < p.length; l++)
        p[l] ^= h[l];
    }
  }
  return Dy(a, d, o, u, h);
}
function Fy(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(n >> i & s), a = Number(n & s), d = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + d, o, r), t.setUint32(e + u, a, r);
}
const Hy = (t, e, n) => t & e ^ ~t & n, jy = (t, e, n) => t & e ^ t & n ^ e & n;
class Uy extends sa {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = vi(this.buffer);
  }
  update(e) {
    yn(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = Zn(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const d = vi(e);
        for (; i <= s - o; o += i)
          this.process(d, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    yn(this), ia(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
    for (let f = o; f < i; f++)
      n[f] = 0;
    Fy(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = vi(e), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = d / 4, c = this.get();
    if (u > c.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < u; f++)
      a.setUint32(4 * f, c[f], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: o, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = o, i % n && e.buffer.set(r), e;
  }
}
const Gy = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Ht = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), jt = /* @__PURE__ */ new Uint32Array(64);
class qy extends Uy {
  constructor() {
    super(64, 32, 8, !1), this.A = Ht[0] | 0, this.B = Ht[1] | 0, this.C = Ht[2] | 0, this.D = Ht[3] | 0, this.E = Ht[4] | 0, this.F = Ht[5] | 0, this.G = Ht[6] | 0, this.H = Ht[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: o, G: a, H: d } = this;
    return [e, n, r, i, s, o, a, d];
  }
  // prettier-ignore
  set(e, n, r, i, s, o, a, d) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = d | 0;
  }
  process(e, n) {
    for (let f = 0; f < 16; f++, n += 4)
      jt[f] = e.getUint32(n, !1);
    for (let f = 16; f < 64; f++) {
      const h = jt[f - 15], g = jt[f - 2], b = st(h, 7) ^ st(h, 18) ^ h >>> 3, p = st(g, 17) ^ st(g, 19) ^ g >>> 10;
      jt[f] = p + jt[f - 7] + b + jt[f - 16] | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: d, G: u, H: c } = this;
    for (let f = 0; f < 64; f++) {
      const h = st(a, 6) ^ st(a, 11) ^ st(a, 25), g = c + h + Hy(a, d, u) + Gy[f] + jt[f] | 0, p = (st(r, 2) ^ st(r, 13) ^ st(r, 22)) + jy(r, i, s) | 0;
      c = u, u = d, d = a, a = o + g | 0, o = s, s = i, i = r, r = g + p | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, d = d + this.F | 0, u = u + this.G | 0, c = c + this.H | 0, this.set(r, i, s, o, a, d, u, c);
  }
  roundClean() {
    jt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Ls = /* @__PURE__ */ Pu(() => new qy());
function kd(t, e, n, r, i) {
  if (!["sha256", "sha512"].includes(i))
    throw new Error("Only sha256 and sha512 are supported");
  return qi(t), qi(e), Ta(Ls, t, e, {
    c: n,
    dkLen: r
  });
}
function Cc(t, e, n, r, i, s) {
  let o = t[e++] ^ n[r++], a = t[e++] ^ n[r++], d = t[e++] ^ n[r++], u = t[e++] ^ n[r++], c = t[e++] ^ n[r++], f = t[e++] ^ n[r++], h = t[e++] ^ n[r++], g = t[e++] ^ n[r++], b = t[e++] ^ n[r++], p = t[e++] ^ n[r++], m = t[e++] ^ n[r++], l = t[e++] ^ n[r++], A = t[e++] ^ n[r++], w = t[e++] ^ n[r++], x = t[e++] ^ n[r++], I = t[e++] ^ n[r++], R = o, P = a, v = d, U = u, k = c, M = f, L = h, K = g, le = b, y = p, _ = m, B = l, D = A, j = w, F = x, ce = I;
  for (let ye = 0; ye < 8; ye += 2)
    k ^= ie(R + D | 0, 7), le ^= ie(k + R | 0, 9), D ^= ie(le + k | 0, 13), R ^= ie(D + le | 0, 18), y ^= ie(M + P | 0, 7), j ^= ie(y + M | 0, 9), P ^= ie(j + y | 0, 13), M ^= ie(P + j | 0, 18), F ^= ie(_ + L | 0, 7), v ^= ie(F + _ | 0, 9), L ^= ie(v + F | 0, 13), _ ^= ie(L + v | 0, 18), U ^= ie(ce + B | 0, 7), K ^= ie(U + ce | 0, 9), B ^= ie(K + U | 0, 13), ce ^= ie(B + K | 0, 18), P ^= ie(R + U | 0, 7), v ^= ie(P + R | 0, 9), U ^= ie(v + P | 0, 13), R ^= ie(U + v | 0, 18), L ^= ie(M + k | 0, 7), K ^= ie(L + M | 0, 9), k ^= ie(K + L | 0, 13), M ^= ie(k + K | 0, 18), B ^= ie(_ + y | 0, 7), le ^= ie(B + _ | 0, 9), y ^= ie(le + B | 0, 13), _ ^= ie(y + le | 0, 18), D ^= ie(ce + F | 0, 7), j ^= ie(D + ce | 0, 9), F ^= ie(j + D | 0, 13), ce ^= ie(F + j | 0, 18);
  i[s++] = o + R | 0, i[s++] = a + P | 0, i[s++] = d + v | 0, i[s++] = u + U | 0, i[s++] = c + k | 0, i[s++] = f + M | 0, i[s++] = h + L | 0, i[s++] = g + K | 0, i[s++] = b + le | 0, i[s++] = p + y | 0, i[s++] = m + _ | 0, i[s++] = l + B | 0, i[s++] = A + D | 0, i[s++] = w + j | 0, i[s++] = x + F | 0, i[s++] = I + ce | 0;
}
function to(t, e, n, r, i) {
  let s = r + 0, o = r + 16 * i;
  for (let a = 0; a < 16; a++)
    n[o + a] = t[e + (2 * i - 1) * 16 + a];
  for (let a = 0; a < i; a++, s += 16, e += 16)
    Cc(n, o, t, e, n, s), a > 0 && (o += 16), Cc(n, s, t, e += 16, n, o);
}
function zy(t, e, n) {
  const r = Bu({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1073742848
  }, n), { N: i, r: s, p: o, dkLen: a, asyncTick: d, maxmem: u, onProgress: c } = r;
  if (Le(i), Le(s), Le(o), Le(a), Le(d), Le(u), c !== void 0 && typeof c != "function")
    throw new Error("progressCb should be function");
  const f = 128 * s, h = f / 4;
  if (i <= 1 || i & i - 1 || i >= 2 ** (f / 8) || i > 2 ** 32)
    throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  if (o < 0 || o > (2 ** 32 - 1) * 32 / f)
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (a < 0 || a > (2 ** 32 - 1) * 32)
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  const g = f * (i + o);
  if (g > u)
    throw new Error(`Scrypt: parameters too large, ${g} (128 * r * (N + p)) > ${u} (maxmem)`);
  const b = Ta(Ls, t, e, { c: 1, dkLen: f * o }), p = _i(b), m = _i(new Uint8Array(f * i)), l = _i(new Uint8Array(f));
  let A = () => {
  };
  if (c) {
    const w = 2 * i * o, x = Math.max(Math.floor(w / 1e4), 1);
    let I = 0;
    A = () => {
      I++, c && (!(I % x) || I === w) && c(I / w);
    };
  }
  return { N: i, r: s, p: o, dkLen: a, blockSize32: h, V: m, B32: p, B: b, tmp: l, blockMixCb: A, asyncTick: d };
}
function Vy(t, e, n, r, i) {
  const s = Ta(Ls, t, n, { c: 1, dkLen: e });
  return n.fill(0), r.fill(0), i.fill(0), s;
}
function Qy(t, e, n) {
  const { N: r, r: i, p: s, dkLen: o, blockSize32: a, V: d, B32: u, B: c, tmp: f, blockMixCb: h } = zy(t, e, n);
  ji || Ui(u);
  for (let g = 0; g < s; g++) {
    const b = a * g;
    for (let p = 0; p < a; p++)
      d[p] = u[b + p];
    for (let p = 0, m = 0; p < r - 1; p++)
      to(d, m, d, m += a, i), h();
    to(d, (r - 1) * a, u, b, i), h();
    for (let p = 0; p < r; p++) {
      const m = u[b + a - 16] % r;
      for (let l = 0; l < a; l++)
        f[l] = u[b + l] ^ d[m * a + l];
      to(f, 0, u, b, i), h();
    }
  }
  return ji || Ui(u), Vy(t, o, c, d, f);
}
function Rd(t, e, n, r, i, s, o) {
  return qi(t), qi(e), Qy(t, e, { N: n, r: i, p: r, dkLen: s, onProgress: o });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Bd = /* @__PURE__ */ BigInt(0), Ds = /* @__PURE__ */ BigInt(1), $y = /* @__PURE__ */ BigInt(2);
function xn(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function fi(t) {
  if (!xn(t))
    throw new Error("Uint8Array expected");
}
const Zy = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function rr(t) {
  fi(t);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += Zy[t[n]];
  return e;
}
function Pd(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function Sa(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const wt = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Nc(t) {
  if (t >= wt._0 && t <= wt._9)
    return t - wt._0;
  if (t >= wt._A && t <= wt._F)
    return t - (wt._A - 10);
  if (t >= wt._a && t <= wt._f)
    return t - (wt._a - 10);
}
function ir(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let i = 0, s = 0; i < n; i++, s += 2) {
    const o = Nc(t.charCodeAt(s)), a = Nc(t.charCodeAt(s + 1));
    if (o === void 0 || a === void 0) {
      const d = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + d + '" at index ' + s);
    }
    r[i] = o * 16 + a;
  }
  return r;
}
function pn(t) {
  return Sa(rr(t));
}
function ka(t) {
  return fi(t), Sa(rr(Uint8Array.from(t).reverse()));
}
function sr(t, e) {
  return ir(t.toString(16).padStart(e * 2, "0"));
}
function Ra(t, e) {
  return sr(t, e).reverse();
}
function Wy(t) {
  return ir(Pd(t));
}
function et(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = ir(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (xn(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function Jr(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    fi(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
function Ky(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n |= t[r] ^ e[r];
  return n === 0;
}
function Jy(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Yy(t) {
  let e;
  for (e = 0; t > Bd; t >>= Ds, e += 1)
    ;
  return e;
}
function Xy(t, e) {
  return t >> BigInt(e) & Ds;
}
function e0(t, e, n) {
  return t | (n ? Ds : Bd) << BigInt(e);
}
const Ba = (t) => ($y << BigInt(t - 1)) - Ds, no = (t) => new Uint8Array(t), Mc = (t) => Uint8Array.from(t);
function Cd(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = no(t), i = no(t), s = 0;
  const o = () => {
    r.fill(1), i.fill(0), s = 0;
  }, a = (...f) => n(i, r, ...f), d = (f = no()) => {
    i = a(Mc([0]), f), r = a(), f.length !== 0 && (i = a(Mc([1]), f), r = a());
  }, u = () => {
    if (s++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let f = 0;
    const h = [];
    for (; f < e; ) {
      r = a();
      const g = r.slice();
      h.push(g), f += r.length;
    }
    return Jr(...h);
  };
  return (f, h) => {
    o(), d(f);
    let g;
    for (; !(g = h(u())); )
      d();
    return o(), g;
  };
}
const t0 = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || xn(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function li(t, e, n = {}) {
  const r = (i, s, o) => {
    const a = t0[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const d = t[i];
    if (!(o && d === void 0) && !a(d, t))
      throw new Error(`Invalid param ${String(i)}=${d} (${typeof d}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
const n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abytes: fi,
  bitGet: Xy,
  bitLen: Yy,
  bitMask: Ba,
  bitSet: e0,
  bytesToHex: rr,
  bytesToNumberBE: pn,
  bytesToNumberLE: ka,
  concatBytes: Jr,
  createHmacDrbg: Cd,
  ensureBytes: et,
  equalBytes: Ky,
  hexToBytes: ir,
  hexToNumber: Sa,
  isBytes: xn,
  numberToBytesBE: sr,
  numberToBytesLE: Ra,
  numberToHexUnpadded: Pd,
  numberToVarBytesBE: Wy,
  utf8ToBytes: Jy,
  validateObject: li
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ee = BigInt(0), be = BigInt(1), sn = BigInt(2), r0 = BigInt(3), ko = BigInt(4), Oc = BigInt(5), Lc = BigInt(8);
BigInt(9);
BigInt(16);
function Oe(t, e) {
  const n = t % e;
  return n >= Ee ? n : e + n;
}
function i0(t, e, n) {
  if (n <= Ee || e < Ee)
    throw new Error("Expected power/modulo > 0");
  if (n === be)
    return Ee;
  let r = be;
  for (; e > Ee; )
    e & be && (r = r * t % n), t = t * t % n, e >>= be;
  return r;
}
function Ve(t, e, n) {
  let r = t;
  for (; e-- > Ee; )
    r *= r, r %= n;
  return r;
}
function Ro(t, e) {
  if (t === Ee || e <= Ee)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = Oe(t, e), r = e, i = Ee, s = be;
  for (; n !== Ee; ) {
    const a = r / n, d = r % n, u = i - s * a;
    r = n, n = d, i = s, s = u;
  }
  if (r !== be)
    throw new Error("invert: does not exist");
  return Oe(i, e);
}
function s0(t) {
  const e = (t - be) / sn;
  let n, r, i;
  for (n = t - be, r = 0; n % sn === Ee; n /= sn, r++)
    ;
  for (i = sn; i < t && i0(i, e, t) !== t - be; i++)
    ;
  if (r === 1) {
    const o = (t + be) / ko;
    return function(d, u) {
      const c = d.pow(u, o);
      if (!d.eql(d.sqr(c), u))
        throw new Error("Cannot find square root");
      return c;
    };
  }
  const s = (n + be) / sn;
  return function(a, d) {
    if (a.pow(d, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, c = a.pow(a.mul(a.ONE, i), n), f = a.pow(d, s), h = a.pow(d, n);
    for (; !a.eql(h, a.ONE); ) {
      if (a.eql(h, a.ZERO))
        return a.ZERO;
      let g = 1;
      for (let p = a.sqr(h); g < u && !a.eql(p, a.ONE); g++)
        p = a.sqr(p);
      const b = a.pow(c, be << BigInt(u - g - 1));
      c = a.sqr(b), f = a.mul(f, b), h = a.mul(h, c), u = g;
    }
    return f;
  };
}
function o0(t) {
  if (t % ko === r0) {
    const e = (t + be) / ko;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Lc === Oc) {
    const e = (t - Oc) / Lc;
    return function(r, i) {
      const s = r.mul(i, sn), o = r.pow(s, e), a = r.mul(i, o), d = r.mul(r.mul(a, sn), o), u = r.mul(a, r.sub(d, r.ONE));
      if (!r.eql(r.sqr(u), i))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return s0(t);
}
const a0 = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function c0(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = a0.reduce((r, i) => (r[i] = "function", r), e);
  return li(t, n);
}
function u0(t, e, n) {
  if (n < Ee)
    throw new Error("Expected power > 0");
  if (n === Ee)
    return t.ONE;
  if (n === be)
    return e;
  let r = t.ONE, i = e;
  for (; n > Ee; )
    n & be && (r = t.mul(r, i)), i = t.sqr(i), n >>= be;
  return r;
}
function d0(t, e) {
  const n = new Array(e.length), r = e.reduce((s, o, a) => t.is0(o) ? s : (n[a] = s, t.mul(s, o)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, o, a) => t.is0(o) ? s : (n[a] = t.mul(s, n[a]), t.mul(s, o)), i), n;
}
function Nd(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function f0(t, e, n = !1, r = {}) {
  if (t <= Ee)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = Nd(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = o0(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: Ba(i),
    ZERO: Ee,
    ONE: be,
    create: (d) => Oe(d, t),
    isValid: (d) => {
      if (typeof d != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);
      return Ee <= d && d < t;
    },
    is0: (d) => d === Ee,
    isOdd: (d) => (d & be) === be,
    neg: (d) => Oe(-d, t),
    eql: (d, u) => d === u,
    sqr: (d) => Oe(d * d, t),
    add: (d, u) => Oe(d + u, t),
    sub: (d, u) => Oe(d - u, t),
    mul: (d, u) => Oe(d * u, t),
    pow: (d, u) => u0(a, d, u),
    div: (d, u) => Oe(d * Ro(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (d) => d * d,
    addN: (d, u) => d + u,
    subN: (d, u) => d - u,
    mulN: (d, u) => d * u,
    inv: (d) => Ro(d, t),
    sqrt: r.sqrt || ((d) => o(a, d)),
    invertBatch: (d) => d0(a, d),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (d, u, c) => c ? u : d,
    toBytes: (d) => n ? Ra(d, s) : sr(d, s),
    fromBytes: (d) => {
      if (d.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${d.length}`);
      return n ? ka(d) : pn(d);
    }
  });
  return Object.freeze(a);
}
function Md(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Od(t) {
  const e = Md(t);
  return e + Math.ceil(e / 2);
}
function l0(t, e, n = !1) {
  const r = t.length, i = Md(e), s = Od(e);
  if (r < 16 || r < s || r > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
  const o = n ? pn(t) : ka(t), a = Oe(o, e - be) + be;
  return n ? Ra(a, i) : sr(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const h0 = BigInt(0), ro = BigInt(1);
function p0(t, e) {
  const n = (i, s) => {
    const o = s.negate();
    return i ? o : s;
  }, r = (i) => {
    const s = Math.ceil(e / i) + 1, o = 2 ** (i - 1);
    return { windows: s, windowSize: o };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(i, s) {
      let o = t.ZERO, a = i;
      for (; s > h0; )
        s & ro && (o = o.add(a)), a = a.double(), s >>= ro;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(i, s) {
      const { windows: o, windowSize: a } = r(s), d = [];
      let u = i, c = u;
      for (let f = 0; f < o; f++) {
        c = u, d.push(c);
        for (let h = 1; h < a; h++)
          c = c.add(u), d.push(c);
        u = c.double();
      }
      return d;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, s, o) {
      const { windows: a, windowSize: d } = r(i);
      let u = t.ZERO, c = t.BASE;
      const f = BigInt(2 ** i - 1), h = 2 ** i, g = BigInt(i);
      for (let b = 0; b < a; b++) {
        const p = b * d;
        let m = Number(o & f);
        o >>= g, m > d && (m -= h, o += ro);
        const l = p, A = p + Math.abs(m) - 1, w = b % 2 !== 0, x = m < 0;
        m === 0 ? c = c.add(n(w, s[l])) : u = u.add(n(x, s[A]));
      }
      return { p: u, f: c };
    },
    wNAFCached(i, s, o, a) {
      const d = i._WINDOW_SIZE || 1;
      let u = s.get(i);
      return u || (u = this.precomputeWindow(i, d), d !== 1 && s.set(i, a(u))), this.wNAF(d, u, o);
    }
  };
}
function Ld(t) {
  return c0(t.Fp), li(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Nd(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function m0(t) {
  const e = Ld(t);
  li(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: i } = e;
  if (n) {
    if (!r.eql(i, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: g0, hexToBytes: y0 } = n0, an = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(t) {
    const { Err: e } = an;
    if (t.length < 2 || t[0] !== 2)
      throw new e("Invalid signature integer tag");
    const n = t[1], r = t.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new e("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: g0(r), l: t.subarray(n + 2) };
  },
  toSig(t) {
    const { Err: e } = an, n = typeof t == "string" ? y0(t) : t;
    fi(n);
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new e("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: i, l: s } = an._parseInt(n.subarray(2)), { d: o, l: a } = an._parseInt(s);
    if (a.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: i, s: o };
  },
  hexFromSig(t) {
    const e = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, n = (u) => {
      const c = u.toString(16);
      return c.length & 1 ? `0${c}` : c;
    }, r = e(n(t.s)), i = e(n(t.r)), s = r.length / 2, o = i.length / 2, a = n(s), d = n(o);
    return `30${n(o + s + 4)}02${d}${i}02${a}${r}`;
  }
}, kt = BigInt(0), $e = BigInt(1);
BigInt(2);
const Dc = BigInt(3);
BigInt(4);
function b0(t) {
  const e = m0(t), { Fp: n } = e, r = e.toBytes || ((b, p, m) => {
    const l = p.toAffine();
    return Jr(Uint8Array.from([4]), n.toBytes(l.x), n.toBytes(l.y));
  }), i = e.fromBytes || ((b) => {
    const p = b.subarray(1), m = n.fromBytes(p.subarray(0, n.BYTES)), l = n.fromBytes(p.subarray(n.BYTES, 2 * n.BYTES));
    return { x: m, y: l };
  });
  function s(b) {
    const { a: p, b: m } = e, l = n.sqr(b), A = n.mul(l, b);
    return n.add(n.add(A, n.mul(b, p)), m);
  }
  if (!n.eql(n.sqr(e.Gy), s(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(b) {
    return typeof b == "bigint" && kt < b && b < e.n;
  }
  function a(b) {
    if (!o(b))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function d(b) {
    const { allowedPrivateKeyLengths: p, nByteLength: m, wrapPrivateKey: l, n: A } = e;
    if (p && typeof b != "bigint") {
      if (xn(b) && (b = rr(b)), typeof b != "string" || !p.includes(b.length))
        throw new Error("Invalid key");
      b = b.padStart(m * 2, "0");
    }
    let w;
    try {
      w = typeof b == "bigint" ? b : pn(et("private key", b, m));
    } catch {
      throw new Error(`private key must be ${m} bytes, hex or bigint, not ${typeof b}`);
    }
    return l && (w = Oe(w, A)), a(w), w;
  }
  const u = /* @__PURE__ */ new Map();
  function c(b) {
    if (!(b instanceof f))
      throw new Error("ProjectivePoint expected");
  }
  class f {
    constructor(p, m, l) {
      if (this.px = p, this.py = m, this.pz = l, p == null || !n.isValid(p))
        throw new Error("x required");
      if (m == null || !n.isValid(m))
        throw new Error("y required");
      if (l == null || !n.isValid(l))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x: m, y: l } = p || {};
      if (!p || !n.isValid(m) || !n.isValid(l))
        throw new Error("invalid affine point");
      if (p instanceof f)
        throw new Error("projective point not allowed");
      const A = (w) => n.eql(w, n.ZERO);
      return A(m) && A(l) ? f.ZERO : new f(m, l, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(p) {
      const m = n.invertBatch(p.map((l) => l.pz));
      return p.map((l, A) => l.toAffine(m[A])).map(f.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(p) {
      const m = f.fromAffine(i(et("pointHex", p)));
      return m.assertValidity(), m;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(p) {
      return f.BASE.multiply(d(p));
    }
    // "Private method", don't use it directly
    _setWindowSize(p) {
      this._WINDOW_SIZE = p, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: p, y: m } = this.toAffine();
      if (!n.isValid(p) || !n.isValid(m))
        throw new Error("bad point: x or y not FE");
      const l = n.sqr(m), A = s(p);
      if (!n.eql(l, A))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: p } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(p);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(p) {
      c(p);
      const { px: m, py: l, pz: A } = this, { px: w, py: x, pz: I } = p, R = n.eql(n.mul(m, I), n.mul(w, A)), P = n.eql(n.mul(l, I), n.mul(x, A));
      return R && P;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new f(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: p, b: m } = e, l = n.mul(m, Dc), { px: A, py: w, pz: x } = this;
      let I = n.ZERO, R = n.ZERO, P = n.ZERO, v = n.mul(A, A), U = n.mul(w, w), k = n.mul(x, x), M = n.mul(A, w);
      return M = n.add(M, M), P = n.mul(A, x), P = n.add(P, P), I = n.mul(p, P), R = n.mul(l, k), R = n.add(I, R), I = n.sub(U, R), R = n.add(U, R), R = n.mul(I, R), I = n.mul(M, I), P = n.mul(l, P), k = n.mul(p, k), M = n.sub(v, k), M = n.mul(p, M), M = n.add(M, P), P = n.add(v, v), v = n.add(P, v), v = n.add(v, k), v = n.mul(v, M), R = n.add(R, v), k = n.mul(w, x), k = n.add(k, k), v = n.mul(k, M), I = n.sub(I, v), P = n.mul(k, U), P = n.add(P, P), P = n.add(P, P), new f(I, R, P);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(p) {
      c(p);
      const { px: m, py: l, pz: A } = this, { px: w, py: x, pz: I } = p;
      let R = n.ZERO, P = n.ZERO, v = n.ZERO;
      const U = e.a, k = n.mul(e.b, Dc);
      let M = n.mul(m, w), L = n.mul(l, x), K = n.mul(A, I), le = n.add(m, l), y = n.add(w, x);
      le = n.mul(le, y), y = n.add(M, L), le = n.sub(le, y), y = n.add(m, A);
      let _ = n.add(w, I);
      return y = n.mul(y, _), _ = n.add(M, K), y = n.sub(y, _), _ = n.add(l, A), R = n.add(x, I), _ = n.mul(_, R), R = n.add(L, K), _ = n.sub(_, R), v = n.mul(U, y), R = n.mul(k, K), v = n.add(R, v), R = n.sub(L, v), v = n.add(L, v), P = n.mul(R, v), L = n.add(M, M), L = n.add(L, M), K = n.mul(U, K), y = n.mul(k, y), L = n.add(L, K), K = n.sub(M, K), K = n.mul(U, K), y = n.add(y, K), M = n.mul(L, y), P = n.add(P, M), M = n.mul(_, y), R = n.mul(le, R), R = n.sub(R, M), M = n.mul(le, L), v = n.mul(_, v), v = n.add(v, M), new f(R, P, v);
    }
    subtract(p) {
      return this.add(p.negate());
    }
    is0() {
      return this.equals(f.ZERO);
    }
    wNAF(p) {
      return g.wNAFCached(this, u, p, (m) => {
        const l = n.invertBatch(m.map((A) => A.pz));
        return m.map((A, w) => A.toAffine(l[w])).map(f.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(p) {
      const m = f.ZERO;
      if (p === kt)
        return m;
      if (a(p), p === $e)
        return this;
      const { endo: l } = e;
      if (!l)
        return g.unsafeLadder(this, p);
      let { k1neg: A, k1: w, k2neg: x, k2: I } = l.splitScalar(p), R = m, P = m, v = this;
      for (; w > kt || I > kt; )
        w & $e && (R = R.add(v)), I & $e && (P = P.add(v)), v = v.double(), w >>= $e, I >>= $e;
      return A && (R = R.negate()), x && (P = P.negate()), P = new f(n.mul(P.px, l.beta), P.py, P.pz), R.add(P);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(p) {
      a(p);
      let m = p, l, A;
      const { endo: w } = e;
      if (w) {
        const { k1neg: x, k1: I, k2neg: R, k2: P } = w.splitScalar(m);
        let { p: v, f: U } = this.wNAF(I), { p: k, f: M } = this.wNAF(P);
        v = g.constTimeNegate(x, v), k = g.constTimeNegate(R, k), k = new f(n.mul(k.px, w.beta), k.py, k.pz), l = v.add(k), A = U.add(M);
      } else {
        const { p: x, f: I } = this.wNAF(m);
        l = x, A = I;
      }
      return f.normalizeZ([l, A])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(p, m, l) {
      const A = f.BASE, w = (I, R) => R === kt || R === $e || !I.equals(A) ? I.multiplyUnsafe(R) : I.multiply(R), x = w(this, m).add(w(p, l));
      return x.is0() ? void 0 : x;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(p) {
      const { px: m, py: l, pz: A } = this, w = this.is0();
      p == null && (p = w ? n.ONE : n.inv(A));
      const x = n.mul(m, p), I = n.mul(l, p), R = n.mul(A, p);
      if (w)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(R, n.ONE))
        throw new Error("invZ was invalid");
      return { x, y: I };
    }
    isTorsionFree() {
      const { h: p, isTorsionFree: m } = e;
      if (p === $e)
        return !0;
      if (m)
        return m(f, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: p, clearCofactor: m } = e;
      return p === $e ? this : m ? m(f, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(p = !0) {
      return this.assertValidity(), r(f, this, p);
    }
    toHex(p = !0) {
      return rr(this.toRawBytes(p));
    }
  }
  f.BASE = new f(e.Gx, e.Gy, n.ONE), f.ZERO = new f(n.ZERO, n.ONE, n.ZERO);
  const h = e.nBitLength, g = p0(f, e.endo ? Math.ceil(h / 2) : h);
  return {
    CURVE: e,
    ProjectivePoint: f,
    normPrivateKeyToScalar: d,
    weierstrassEquation: s,
    isWithinCurveOrder: o
  };
}
function A0(t) {
  const e = Ld(t);
  return li(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function w0(t) {
  const e = A0(t), { Fp: n, n: r } = e, i = n.BYTES + 1, s = 2 * n.BYTES + 1;
  function o(y) {
    return kt < y && y < n.ORDER;
  }
  function a(y) {
    return Oe(y, r);
  }
  function d(y) {
    return Ro(y, r);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: c, weierstrassEquation: f, isWithinCurveOrder: h } = b0({
    ...e,
    toBytes(y, _, B) {
      const D = _.toAffine(), j = n.toBytes(D.x), F = Jr;
      return B ? F(Uint8Array.from([_.hasEvenY() ? 2 : 3]), j) : F(Uint8Array.from([4]), j, n.toBytes(D.y));
    },
    fromBytes(y) {
      const _ = y.length, B = y[0], D = y.subarray(1);
      if (_ === i && (B === 2 || B === 3)) {
        const j = pn(D);
        if (!o(j))
          throw new Error("Point is not on curve");
        const F = f(j);
        let ce;
        try {
          ce = n.sqrt(F);
        } catch (ae) {
          const xe = ae instanceof Error ? ": " + ae.message : "";
          throw new Error("Point is not on curve" + xe);
        }
        const ye = (ce & $e) === $e;
        return (B & 1) === 1 !== ye && (ce = n.neg(ce)), { x: j, y: ce };
      } else if (_ === s && B === 4) {
        const j = n.fromBytes(D.subarray(0, n.BYTES)), F = n.fromBytes(D.subarray(n.BYTES, 2 * n.BYTES));
        return { x: j, y: F };
      } else
        throw new Error(`Point of length ${_} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`);
    }
  }), g = (y) => rr(sr(y, e.nByteLength));
  function b(y) {
    const _ = r >> $e;
    return y > _;
  }
  function p(y) {
    return b(y) ? a(-y) : y;
  }
  const m = (y, _, B) => pn(y.slice(_, B));
  class l {
    constructor(_, B, D) {
      this.r = _, this.s = B, this.recovery = D, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(_) {
      const B = e.nByteLength;
      return _ = et("compactSignature", _, B * 2), new l(m(_, 0, B), m(_, B, 2 * B));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(_) {
      const { r: B, s: D } = an.toSig(et("DER", _));
      return new l(B, D);
    }
    assertValidity() {
      if (!h(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!h(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(_) {
      return new l(this.r, this.s, _);
    }
    recoverPublicKey(_) {
      const { r: B, s: D, recovery: j } = this, F = P(et("msgHash", _));
      if (j == null || ![0, 1, 2, 3].includes(j))
        throw new Error("recovery id invalid");
      const ce = j === 2 || j === 3 ? B + e.n : B;
      if (ce >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const ye = j & 1 ? "03" : "02", Je = u.fromHex(ye + g(ce)), ae = d(ce), xe = a(-F * ae), br = a(D * ae), Ft = u.BASE.multiplyAndAddUnsafe(Je, xe, br);
      if (!Ft)
        throw new Error("point at infinify");
      return Ft.assertValidity(), Ft;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return b(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new l(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return ir(this.toDERHex());
    }
    toDERHex() {
      return an.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return ir(this.toCompactHex());
    }
    toCompactHex() {
      return g(this.r) + g(this.s);
    }
  }
  const A = {
    isValidPrivateKey(y) {
      try {
        return c(y), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: c,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const y = Od(e.n);
      return l0(e.randomBytes(y), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(y = 8, _ = u.BASE) {
      return _._setWindowSize(y), _.multiply(BigInt(3)), _;
    }
  };
  function w(y, _ = !0) {
    return u.fromPrivateKey(y).toRawBytes(_);
  }
  function x(y) {
    const _ = xn(y), B = typeof y == "string", D = (_ || B) && y.length;
    return _ ? D === i || D === s : B ? D === 2 * i || D === 2 * s : y instanceof u;
  }
  function I(y, _, B = !0) {
    if (x(y))
      throw new Error("first arg must be private key");
    if (!x(_))
      throw new Error("second arg must be public key");
    return u.fromHex(_).multiply(c(y)).toRawBytes(B);
  }
  const R = e.bits2int || function(y) {
    const _ = pn(y), B = y.length * 8 - e.nBitLength;
    return B > 0 ? _ >> BigInt(B) : _;
  }, P = e.bits2int_modN || function(y) {
    return a(R(y));
  }, v = Ba(e.nBitLength);
  function U(y) {
    if (typeof y != "bigint")
      throw new Error("bigint expected");
    if (!(kt <= y && y < v))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return sr(y, e.nByteLength);
  }
  function k(y, _, B = M) {
    if (["recovered", "canonical"].some((Xt) => Xt in B))
      throw new Error("sign() legacy options not supported");
    const { hash: D, randomBytes: j } = e;
    let { lowS: F, prehash: ce, extraEntropy: ye } = B;
    F == null && (F = !0), y = et("msgHash", y), ce && (y = et("prehashed msgHash", D(y)));
    const Je = P(y), ae = c(_), xe = [U(ae), U(Je)];
    if (ye != null && ye !== !1) {
      const Xt = ye === !0 ? j(n.BYTES) : ye;
      xe.push(et("extraEntropy", Xt));
    }
    const br = Jr(...xe), Ft = Je;
    function $s(Xt) {
      const Rn = R(Xt);
      if (!h(Rn))
        return;
      const tc = d(Rn), Bn = u.BASE.multiply(Rn).toAffine(), Ye = a(Bn.x);
      if (Ye === kt)
        return;
      const Pn = a(tc * a(Ft + Ye * ae));
      if (Pn === kt)
        return;
      let nc = (Bn.x === Ye ? 0 : 2) | Number(Bn.y & $e), rc = Pn;
      return F && b(Pn) && (rc = p(Pn), nc ^= 1), new l(Ye, rc, nc);
    }
    return { seed: br, k2sig: $s };
  }
  const M = { lowS: e.lowS, prehash: !1 }, L = { lowS: e.lowS, prehash: !1 };
  function K(y, _, B = M) {
    const { seed: D, k2sig: j } = k(y, _, B), F = e;
    return Cd(F.hash.outputLen, F.nByteLength, F.hmac)(D, j);
  }
  u.BASE._setWindowSize(8);
  function le(y, _, B, D = L) {
    var Bn;
    const j = y;
    if (_ = et("msgHash", _), B = et("publicKey", B), "strict" in D)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: F, prehash: ce } = D;
    let ye, Je;
    try {
      if (typeof j == "string" || xn(j))
        try {
          ye = l.fromDER(j);
        } catch (Ye) {
          if (!(Ye instanceof an.Err))
            throw Ye;
          ye = l.fromCompact(j);
        }
      else if (typeof j == "object" && typeof j.r == "bigint" && typeof j.s == "bigint") {
        const { r: Ye, s: Pn } = j;
        ye = new l(Ye, Pn);
      } else
        throw new Error("PARSE");
      Je = u.fromHex(B);
    } catch (Ye) {
      if (Ye.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (F && ye.hasHighS())
      return !1;
    ce && (_ = e.hash(_));
    const { r: ae, s: xe } = ye, br = P(_), Ft = d(xe), $s = a(br * Ft), Xt = a(ae * Ft), Rn = (Bn = u.BASE.multiplyAndAddUnsafe(Je, $s, Xt)) == null ? void 0 : Bn.toAffine();
    return Rn ? a(Rn.x) === ae : !1;
  }
  return {
    CURVE: e,
    getPublicKey: w,
    getSharedSecret: I,
    sign: K,
    verify: le,
    ProjectivePoint: u,
    Signature: l,
    utils: A
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function _0(t) {
  return {
    hash: t,
    hmac: (e, ...n) => xa(t, e, Gi(...n)),
    randomBytes: Cu
  };
}
function v0(t, e) {
  const n = (r) => w0({ ...t, ..._0(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Dd = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Fc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), E0 = BigInt(1), Bo = BigInt(2), Hc = (t, e) => (t + e / Bo) / e;
function I0(t) {
  const e = Dd, n = BigInt(3), r = BigInt(6), i = BigInt(11), s = BigInt(22), o = BigInt(23), a = BigInt(44), d = BigInt(88), u = t * t * t % e, c = u * u * t % e, f = Ve(c, n, e) * c % e, h = Ve(f, n, e) * c % e, g = Ve(h, Bo, e) * u % e, b = Ve(g, i, e) * g % e, p = Ve(b, s, e) * b % e, m = Ve(p, a, e) * p % e, l = Ve(m, d, e) * m % e, A = Ve(l, a, e) * p % e, w = Ve(A, n, e) * c % e, x = Ve(w, o, e) * b % e, I = Ve(x, r, e) * u % e, R = Ve(I, Bo, e);
  if (!Po.eql(Po.sqr(R), t))
    throw new Error("Cannot find square root");
  return R;
}
const Po = f0(Dd, void 0, void 0, { sqrt: I0 }), Pa = v0({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Po,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Fc,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = Fc, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -E0 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = n, o = BigInt("0x100000000000000000000000000000000"), a = Hc(s * t, e), d = Hc(-r * t, e);
      let u = Oe(t - a * n - d * i, e), c = Oe(-a * r - d * s, e);
      const f = u > o, h = c > o;
      if (f && (u = e - u), h && (c = e - c), u > o || c > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: f, k1: u, k2neg: h, k2: c };
    }
  }
}, Ls);
BigInt(0);
Pa.ProjectivePoint;
const x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: Pa
}, Symbol.toStringTag, { value: "Module" }));
var io;
const Ot = (io = Pa) !== null && io !== void 0 ? io : x0, jc = BigInt("0xffffffffffffffff"), Yr = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), T0 = Ot.CURVE.n, S0 = T0 / BigInt(2), k0 = {
  type: "object",
  required: ["crypto", "id", "version", "address"],
  properties: {
    crypto: {
      type: "object",
      required: ["cipher", "ciphertext", "cipherparams", "kdf", "kdfparams", "mac"],
      properties: {
        cipher: { type: "string" },
        ciphertext: { type: "string" },
        cipherparams: { type: "object" },
        kdf: { type: "string" },
        kdfparams: { type: "object" },
        salt: { type: "string" },
        mac: { type: "string" }
      }
    },
    id: { type: "string" },
    version: { type: "number" },
    address: { type: "string" }
  }
};
var os;
(function(t) {
  t[t.Mainnet = 1] = "Mainnet", t[t.Goerli = 5] = "Goerli", t[t.Sepolia = 11155111] = "Sepolia";
})(os || (os = {}));
var de;
(function(t) {
  t.Chainstart = "chainstart", t.Homestead = "homestead", t.Dao = "dao", t.TangerineWhistle = "tangerineWhistle", t.SpuriousDragon = "spuriousDragon", t.Byzantium = "byzantium", t.Constantinople = "constantinople", t.Petersburg = "petersburg", t.Istanbul = "istanbul", t.MuirGlacier = "muirGlacier", t.Berlin = "berlin", t.London = "london", t.ArrowGlacier = "arrowGlacier", t.GrayGlacier = "grayGlacier", t.MergeForkIdTransition = "mergeForkIdTransition", t.Merge = "merge", t.Shanghai = "shanghai", t.ShardingForkDev = "shardingFork";
})(de || (de = {}));
var Uc;
(function(t) {
  t.ProofOfStake = "pos", t.ProofOfWork = "pow", t.ProofOfAuthority = "poa";
})(Uc || (Uc = {}));
var Gc;
(function(t) {
  t.Ethash = "ethash", t.Clique = "clique", t.Casper = "casper";
})(Gc || (Gc = {}));
var Te;
(function(t) {
  t.PolygonMainnet = "polygon-mainnet", t.PolygonMumbai = "polygon-mumbai", t.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet", t.ArbitrumOne = "arbitrum-one", t.xDaiChain = "x-dai-chain", t.OptimisticKovan = "optimistic-kovan", t.OptimisticEthereum = "optimistic-ethereum";
})(Te || (Te = {}));
var Ze;
(function(t) {
  t[t.Number = 0] = "Number", t[t.BigInt = 1] = "BigInt", t[t.Uint8Array = 2] = "Uint8Array", t[t.PrefixedHexString = 3] = "PrefixedHexString";
})(Ze || (Ze = {}));
const Fd = (t) => {
  if (typeof t != "string")
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof t}`);
  return ua(t) ? t.slice(2) : t;
};
function R0(t) {
  return !t || t === "0x0" ? "0x0000000000000000" : ua(t) ? `0x${Fd(t).padStart(16, "0")}` : `0x${t.padStart(16, "0")}`;
}
const Hd = function(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Received an invalid integer type: ${t}`);
  return `0x${t.toString(16)}`;
};
function B0(t, e = !0) {
  var n, r;
  const { name: i, config: s, difficulty: o, mixHash: a, gasLimit: d, coinbase: u, baseFeePerGas: c } = t;
  let { extraData: f, timestamp: h, nonce: g } = t;
  const b = Number(h), { chainId: p } = s;
  if (f === "" && (f = "0x"), ua(h) || (h = Hd(parseInt(h))), g.length !== 18 && (g = R0(g)), s.eip155Block !== s.eip158Block)
    throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
  const m = {
    name: i,
    chainId: p,
    networkId: p,
    genesis: {
      timestamp: h,
      // eslint-disable-next-line radix
      gasLimit: parseInt(d),
      // geth gasLimit and difficulty are hex strings while ours are `number`s
      // eslint-disable-next-line radix
      difficulty: parseInt(o),
      nonce: g,
      extraData: f,
      mixHash: a,
      coinbase: u,
      baseFeePerGas: c
    },
    hardfork: void 0,
    hardforks: [],
    bootstrapNodes: [],
    consensus: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      s.clique !== void 0 ? {
        type: "poa",
        algorithm: "clique",
        clique: {
          // The recent geth genesis seems to be using blockperiodseconds
          // and epochlength for clique specification
          // see: https://hackmd.io/PqZgMpnkSWCWv5joJoFymQ
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          period: (n = s.clique.period) !== null && n !== void 0 ? n : s.clique.blockperiodseconds,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
          epoch: (r = s.clique.epoch) !== null && r !== void 0 ? r : s.clique.epochlength
        }
      } : {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
      }
    )
  }, l = {
    [de.Homestead]: { name: "homesteadBlock" },
    [de.Dao]: { name: "daoForkBlock" },
    [de.TangerineWhistle]: { name: "eip150Block" },
    [de.SpuriousDragon]: { name: "eip155Block" },
    [de.Byzantium]: { name: "byzantiumBlock" },
    [de.Constantinople]: { name: "constantinopleBlock" },
    [de.Petersburg]: { name: "petersburgBlock" },
    [de.Istanbul]: { name: "istanbulBlock" },
    [de.MuirGlacier]: { name: "muirGlacierBlock" },
    [de.Berlin]: { name: "berlinBlock" },
    [de.London]: { name: "londonBlock" },
    [de.MergeForkIdTransition]: {
      name: "mergeForkBlock",
      postMerge: e
    },
    [de.Shanghai]: { name: "shanghaiTime", postMerge: !0, isTimestamp: !0 },
    [de.ShardingForkDev]: {
      name: "shardingForkTime",
      postMerge: !0,
      isTimestamp: !0
    }
  }, A = Object.keys(l).reduce((I, R) => (I[l[R].name] = R, I), {}), w = Object.keys(s).filter(
    // eslint-disable-next-line no-null/no-null, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/prefer-optional-chain
    (I) => A[I] !== void 0 && s[I] !== void 0 && s[I] !== null
  );
  if (m.hardforks = w.map((I) => ({
    name: A[I],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    block: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      l[A[I]].isTimestamp === !0 || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof s[I] != "number" ? (
        // eslint-disable-next-line no-null/no-null
        null
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        s[I]
      )
    ),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    timestamp: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      l[A[I]].isTimestamp === !0 && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof s[I] == "number" ? (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        s[I]
      ) : void 0
    )
  })).filter((I) => I.block !== null || I.timestamp !== void 0), m.hardforks.sort((I, R) => {
    var P, v;
    return ((P = I.block) !== null && P !== void 0 ? P : 1 / 0) - ((v = R.block) !== null && v !== void 0 ? v : 1 / 0);
  }), m.hardforks.sort((I, R) => {
    var P, v;
    return ((P = I.timestamp) !== null && P !== void 0 ? P : b) - ((v = R.timestamp) !== null && v !== void 0 ? v : b);
  }), s.terminalTotalDifficulty !== void 0) {
    const I = {
      name: de.Merge,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      ttd: s.terminalTotalDifficulty,
      // eslint-disable-next-line no-null/no-null
      block: null
    }, R = m.hardforks.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (P) => {
        var v;
        return ((v = l[P.name]) === null || v === void 0 ? void 0 : v.postMerge) === !0;
      }
    );
    R !== -1 ? m.hardforks.splice(R, 0, I) : m.hardforks.push(I);
  }
  const x = m.hardforks.length > 0 ? m.hardforks.slice(-1)[0] : void 0;
  return m.hardfork = x == null ? void 0 : x.name, m.hardforks.unshift({ name: de.Chainstart, block: 0 }), m;
}
function P0(t, e, n) {
  try {
    if (["config", "difficulty", "gasLimit", "alloc"].some((r) => !(r in t)))
      throw new Error("Invalid format, expected geth genesis fields missing");
    return e !== void 0 && (t.name = e), B0(t, n);
  } catch (r) {
    throw new Error(`Error parsing parameters file: ${r.message}`);
  }
}
function jd(t) {
  let e = t;
  if (typeof e != "string")
    throw new Error(`[padToEven] value must be type 'string', received ${typeof e}`);
  return e.length % 2 && (e = `0${e}`), e;
}
const C0 = function(t) {
  const e = Hd(t);
  return fe(`0x${jd(e.slice(2))}`);
}, he = function(t) {
  var e;
  if (t == null)
    return new Uint8Array();
  if (t instanceof Uint8Array)
    return t;
  if (((e = t == null ? void 0 : t.constructor) === null || e === void 0 ? void 0 : e.name) === "Uint8Array" || Array.isArray(t))
    return Uint8Array.from(t);
  if (typeof t == "string") {
    if (!Zu(t))
      throw new Error(`Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${t}`);
    return fe(jd(Fd(t)));
  }
  if (typeof t == "number")
    return he(_e(t));
  if (typeof t == "bigint") {
    if (t < BigInt(0))
      throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${t}`);
    let n = t.toString(16);
    return n.length % 2 && (n = `0${n}`), he(`0x${n}`);
  }
  if (t.toArray)
    return Uint8Array.from(t.toArray());
  throw new Error("invalid type");
};
function ue(t) {
  const e = ee(t);
  return BigInt(e === "0x" ? 0 : e);
}
function N0(t) {
  return he(`0x${t.toString(16)}`);
}
const Ud = function(t) {
  return new Uint8Array(t).fill(0);
}, M0 = function(t, e, n) {
  const r = Ud(e);
  return t.length < e ? (r.set(t, e - t.length), r) : t.subarray(-e);
};
function Ca(t) {
  if (!Jt(t)) {
    const e = `This method only supports Uint8Array but input was: ${t}`;
    throw new Error(e);
  }
}
const qc = function(t, e) {
  return Ca(t), M0(t, e);
};
function O0(t) {
  let e = t[0];
  for (; t.length > 0 && e.toString() === "0"; )
    t = t.slice(1), e = t[0];
  return t;
}
const as = function(t) {
  return Ca(t), O0(t);
}, pe = (t) => `0x${t.toString(16)}`;
function ne(t) {
  return as(N0(t));
}
function L0(t, e) {
  return t === BigInt(0) || t === BigInt(1) ? t : e === void 0 ? t - BigInt(27) : t - (e * BigInt(2) + BigInt(35));
}
function D0(t) {
  return t === BigInt(0) || t === BigInt(1);
}
const Na = function(t, e, n, r, i) {
  const s = L0(e, i);
  if (!D0(s))
    throw new Error("Invalid signature v value");
  return new Ot.Signature(ue(n), ue(r)).addRecoveryBit(Number(s)).recoverPublicKey(t).toRawBytes(!1).slice(1);
};
function Nn(t, e) {
  if (t === null)
    return null;
  if (t === void 0)
    return;
  if (typeof t == "string" && !Zu(t))
    throw new Error(`A string must be provided with a 0x-prefix, given: ${t}`);
  if (typeof t == "number" && !Number.isSafeInteger(t))
    throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
  const n = he(t);
  switch (e) {
    case Ze.Uint8Array:
      return n;
    case Ze.BigInt:
      return ue(n);
    case Ze.Number: {
      const r = ue(n);
      if (r > BigInt(Number.MAX_SAFE_INTEGER))
        throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
      return Number(r);
    }
    case Ze.PrefixedHexString:
      return ee(n);
    default:
      throw new Error("unknown outputType");
  }
}
var Xe = {}, zc;
function F0() {
  if (zc) return Xe;
  zc = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.RLP = Xe.utils = Xe.decode = Xe.encode = void 0;
  function t(l) {
    if (Array.isArray(l)) {
      const w = [];
      let x = 0;
      for (let I = 0; I < l.length; I++) {
        const R = t(l[I]);
        w.push(R), x += R.length;
      }
      return c(r(x, 192), ...w);
    }
    const A = m(l);
    return A.length === 1 && A[0] < 128 ? A : c(r(A.length, 128), A);
  }
  Xe.encode = t;
  function e(l, A, w) {
    if (w > l.length)
      throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
    return l.slice(A, w);
  }
  function n(l) {
    if (l[0] === 0)
      throw new Error("invalid RLP: extra zeros");
    return d(a(l));
  }
  function r(l, A) {
    if (l < 56)
      return Uint8Array.from([l + A]);
    const w = h(l), x = w.length / 2, I = h(A + 55 + x);
    return Uint8Array.from(u(I + w));
  }
  function i(l, A = !1) {
    if (typeof l > "u" || l === null || l.length === 0)
      return Uint8Array.from([]);
    const w = m(l), x = s(w);
    if (A)
      return x;
    if (x.remainder.length !== 0)
      throw new Error("invalid RLP: remainder must be zero");
    return x.data;
  }
  Xe.decode = i;
  function s(l) {
    let A, w, x, I, R;
    const P = [], v = l[0];
    if (v <= 127)
      return {
        data: l.slice(0, 1),
        remainder: l.slice(1)
      };
    if (v <= 183) {
      if (A = v - 127, v === 128 ? x = Uint8Array.from([]) : x = e(l, 1, A), A === 2 && x[0] < 128)
        throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
      return {
        data: x,
        remainder: l.slice(A)
      };
    } else if (v <= 191) {
      if (w = v - 182, l.length - 1 < w)
        throw new Error("invalid RLP: not enough bytes for string length");
      if (A = n(e(l, 1, w)), A <= 55)
        throw new Error("invalid RLP: expected string length to be greater than 55");
      return x = e(l, w, A + w), {
        data: x,
        remainder: l.slice(A + w)
      };
    } else if (v <= 247) {
      for (A = v - 191, I = e(l, 1, A); I.length; )
        R = s(I), P.push(R.data), I = R.remainder;
      return {
        data: P,
        remainder: l.slice(A)
      };
    } else {
      if (w = v - 246, A = n(e(l, 1, w)), A < 56)
        throw new Error("invalid RLP: encoded list too short");
      const U = w + A;
      if (U > l.length)
        throw new Error("invalid RLP: total length is larger than the data");
      for (I = e(l, w, U); I.length; )
        R = s(I), P.push(R.data), I = R.remainder;
      return {
        data: P,
        remainder: l.slice(U)
      };
    }
  }
  const o = Array.from({ length: 256 }, (l, A) => A.toString(16).padStart(2, "0"));
  function a(l) {
    let A = "";
    for (let w = 0; w < l.length; w++)
      A += o[l[w]];
    return A;
  }
  function d(l) {
    const A = Number.parseInt(l, 16);
    if (Number.isNaN(A))
      throw new Error("Invalid byte sequence");
    return A;
  }
  function u(l) {
    if (typeof l != "string")
      throw new TypeError("hexToBytes: expected string, got " + typeof l);
    if (l.length % 2)
      throw new Error("hexToBytes: received invalid unpadded hex");
    const A = new Uint8Array(l.length / 2);
    for (let w = 0; w < A.length; w++) {
      const x = w * 2;
      A[w] = d(l.slice(x, x + 2));
    }
    return A;
  }
  function c(...l) {
    if (l.length === 1)
      return l[0];
    const A = l.reduce((x, I) => x + I.length, 0), w = new Uint8Array(A);
    for (let x = 0, I = 0; x < l.length; x++) {
      const R = l[x];
      w.set(R, I), I += R.length;
    }
    return w;
  }
  function f(l) {
    return new TextEncoder().encode(l);
  }
  function h(l) {
    if (l < 0)
      throw new Error("Invalid integer as argument, must be unsigned!");
    const A = l.toString(16);
    return A.length % 2 ? `0${A}` : A;
  }
  function g(l) {
    return l.length % 2 ? `0${l}` : l;
  }
  function b(l) {
    return l.length >= 2 && l[0] === "0" && l[1] === "x";
  }
  function p(l) {
    return typeof l != "string" ? l : b(l) ? l.slice(2) : l;
  }
  function m(l) {
    if (l instanceof Uint8Array)
      return l;
    if (typeof l == "string")
      return b(l) ? u(g(p(l))) : f(l);
    if (typeof l == "number" || typeof l == "bigint")
      return l ? u(h(l)) : Uint8Array.from([]);
    if (l == null)
      return Uint8Array.from([]);
    throw new Error("toBytes: received unsupported type " + typeof l);
  }
  return Xe.utils = {
    bytesToHex: a,
    concatBytes: c,
    hexToBytes: u,
    utf8ToBytes: f
  }, Xe.RLP = { encode: t, decode: i }, Xe;
}
var We = F0(), so = {};
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
var Vc;
function H0() {
  return Vc || (Vc = 1, function(t) {
    (function(e) {
      e(typeof DO_NOT_EXPORT_CRC > "u" ? t : {});
    })(function(e) {
      e.version = "1.2.2";
      function n() {
        for (var v = 0, U = new Array(256), k = 0; k != 256; ++k)
          v = k, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, U[k] = v;
        return typeof Int32Array < "u" ? new Int32Array(U) : U;
      }
      var r = n();
      function i(v) {
        var U = 0, k = 0, M = 0, L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
        for (M = 0; M != 256; ++M) L[M] = v[M];
        for (M = 0; M != 256; ++M)
          for (k = v[M], U = 256 + M; U < 4096; U += 256) k = L[U] = k >>> 8 ^ v[k & 255];
        var K = [];
        for (M = 1; M != 16; ++M) K[M - 1] = typeof Int32Array < "u" ? L.subarray(M * 256, M * 256 + 256) : L.slice(M * 256, M * 256 + 256);
        return K;
      }
      var s = i(r), o = s[0], a = s[1], d = s[2], u = s[3], c = s[4], f = s[5], h = s[6], g = s[7], b = s[8], p = s[9], m = s[10], l = s[11], A = s[12], w = s[13], x = s[14];
      function I(v, U) {
        for (var k = U ^ -1, M = 0, L = v.length; M < L; ) k = k >>> 8 ^ r[(k ^ v.charCodeAt(M++)) & 255];
        return ~k;
      }
      function R(v, U) {
        for (var k = U ^ -1, M = v.length - 15, L = 0; L < M; ) k = x[v[L++] ^ k & 255] ^ w[v[L++] ^ k >> 8 & 255] ^ A[v[L++] ^ k >> 16 & 255] ^ l[v[L++] ^ k >>> 24] ^ m[v[L++]] ^ p[v[L++]] ^ b[v[L++]] ^ g[v[L++]] ^ h[v[L++]] ^ f[v[L++]] ^ c[v[L++]] ^ u[v[L++]] ^ d[v[L++]] ^ a[v[L++]] ^ o[v[L++]] ^ r[v[L++]];
        for (M += 15; L < M; ) k = k >>> 8 ^ r[(k ^ v[L++]) & 255];
        return ~k;
      }
      function P(v, U) {
        for (var k = U ^ -1, M = 0, L = v.length, K = 0, le = 0; M < L; )
          K = v.charCodeAt(M++), K < 128 ? k = k >>> 8 ^ r[(k ^ K) & 255] : K < 2048 ? (k = k >>> 8 ^ r[(k ^ (192 | K >> 6 & 31)) & 255], k = k >>> 8 ^ r[(k ^ (128 | K & 63)) & 255]) : K >= 55296 && K < 57344 ? (K = (K & 1023) + 64, le = v.charCodeAt(M++) & 1023, k = k >>> 8 ^ r[(k ^ (240 | K >> 8 & 7)) & 255], k = k >>> 8 ^ r[(k ^ (128 | K >> 2 & 63)) & 255], k = k >>> 8 ^ r[(k ^ (128 | le >> 6 & 15 | (K & 3) << 4)) & 255], k = k >>> 8 ^ r[(k ^ (128 | le & 63)) & 255]) : (k = k >>> 8 ^ r[(k ^ (224 | K >> 12 & 15)) & 255], k = k >>> 8 ^ r[(k ^ (128 | K >> 6 & 63)) & 255], k = k >>> 8 ^ r[(k ^ (128 | K & 63)) & 255]);
        return ~k;
      }
      e.table = r, e.bstr = I, e.buf = R, e.str = P;
    });
  }(so)), so;
}
var j0 = H0();
const U0 = /* @__PURE__ */ pa(j0), G0 = {
  name: "goerli",
  chainId: 5,
  networkId: 5,
  defaultHardfork: "merge",
  consensus: {
    type: "poa",
    algorithm: "clique",
    clique: {
      period: 15,
      epoch: 3e4
    }
  },
  comment: "Cross-client PoA test network",
  url: "https://github.com/goerli/testnet",
  genesis: {
    timestamp: "0x5c51a607",
    gasLimit: 10485760,
    difficulty: 1,
    nonce: "0x0000000000000000",
    extraData: "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "homestead",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "tangerineWhistle",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "spuriousDragon",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "byzantium",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "constantinople",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "petersburg",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "istanbul",
      block: 1561651,
      forkHash: "0xc25efa5c"
    },
    {
      name: "berlin",
      block: 4460644,
      forkHash: "0x757a1c47"
    },
    {
      name: "london",
      block: 5062605,
      forkHash: "0xb8c6299d"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
      name: "merge",
      ttd: "10790000",
      block: 7382819,
      forkHash: "0xb8c6299d"
    },
    {
      name: "mergeForkIdTransition",
      block: null,
      forkHash: null
    },
    {
      name: "shanghai",
      block: null,
      forkHash: null
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"
  ]
}, q0 = {
  name: "mainnet",
  chainId: 1,
  networkId: 1,
  defaultHardfork: "merge",
  consensus: {
    type: "pow",
    algorithm: "ethash",
    ethash: {}
  },
  comment: "The Ethereum main chain",
  url: "https://ethstats.net/",
  genesis: {
    gasLimit: 5e3,
    difficulty: 17179869184,
    nonce: "0x0000000000000042",
    extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xfc64ec04"
    },
    {
      name: "homestead",
      block: 115e4,
      forkHash: "0x97c2c34c"
    },
    {
      name: "dao",
      block: 192e4,
      forkHash: "0x91d1f948"
    },
    {
      name: "tangerineWhistle",
      block: 2463e3,
      forkHash: "0x7a64da13"
    },
    {
      name: "spuriousDragon",
      block: 2675e3,
      forkHash: "0x3edd5b10"
    },
    {
      name: "byzantium",
      block: 437e4,
      forkHash: "0xa00bc324"
    },
    {
      name: "constantinople",
      block: 728e4,
      forkHash: "0x668db0af"
    },
    {
      name: "petersburg",
      block: 728e4,
      forkHash: "0x668db0af"
    },
    {
      name: "istanbul",
      block: 9069e3,
      forkHash: "0x879d6e30"
    },
    {
      name: "muirGlacier",
      block: 92e5,
      forkHash: "0xe029e991"
    },
    {
      name: "berlin",
      block: 12244e3,
      forkHash: "0x0eb440f6"
    },
    {
      name: "london",
      block: 12965e3,
      forkHash: "0xb715077d"
    },
    {
      name: "arrowGlacier",
      block: 13773e3,
      forkHash: "0x20c327fc"
    },
    {
      name: "grayGlacier",
      block: 1505e4,
      forkHash: "0xf0afd0e3"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
      name: "merge",
      ttd: "58750000000000000000000",
      block: 15537394,
      forkHash: "0xf0afd0e3"
    },
    {
      name: "mergeForkIdTransition",
      block: null,
      forkHash: null
    },
    {
      name: "shanghai",
      block: null,
      forkHash: null
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"
  ]
}, z0 = {
  name: "sepolia",
  chainId: 11155111,
  networkId: 11155111,
  defaultHardfork: "merge",
  consensus: {
    type: "pow",
    algorithm: "ethash",
    ethash: {}
  },
  comment: "PoW test network to replace Ropsten",
  url: "https://github.com/ethereum/go-ethereum/pull/23730",
  genesis: {
    timestamp: "0x6159af19",
    gasLimit: 3e7,
    difficulty: 131072,
    nonce: "0x0000000000000000",
    extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "homestead",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "tangerineWhistle",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "spuriousDragon",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "byzantium",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "constantinople",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "petersburg",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "istanbul",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "muirGlacier",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "berlin",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "london",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
      name: "merge",
      ttd: "17000000000000000",
      block: 1450409,
      forkHash: "0xfe3366e7"
    },
    {
      name: "mergeForkIdTransition",
      block: 1735371,
      forkHash: "0xb96cbd13"
    },
    {
      name: "shanghai",
      block: null,
      timestamp: "1677557088",
      forkHash: "0xf7f9bc08"
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"
  ]
}, V0 = {
  name: "EIP-1153",
  number: 1153,
  comment: "Transient Storage",
  url: "https://eips.ethereum.org/EIPS/eip-1153",
  status: "Review",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    tstore: {
      v: 100,
      d: "Base fee of the TSTORE opcode"
    },
    tload: {
      v: 100,
      d: "Base fee of the TLOAD opcode"
    }
  },
  vm: {},
  pow: {}
}, Q0 = {
  name: "EIP-1559",
  number: 1559,
  comment: "Fee market change for ETH 1.0 chain",
  url: "https://eips.ethereum.org/EIPS/eip-1559",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [2930],
  gasConfig: {
    baseFeeMaxChangeDenominator: {
      v: 8,
      d: "Maximum base fee change denominator"
    },
    elasticityMultiplier: {
      v: 2,
      d: "Maximum block gas target elasticity"
    },
    initialBaseFee: {
      v: 1e9,
      d: "Initial base fee on first EIP1559 block"
    }
  },
  gasPrices: {},
  vm: {},
  pow: {}
}, $0 = {
  name: "EIP-2315",
  number: 2315,
  comment: "Simple subroutines for the EVM",
  url: "https://eips.ethereum.org/EIPS/eip-2315",
  status: "Draft",
  minimumHardfork: "istanbul",
  gasConfig: {},
  gasPrices: {
    beginsub: {
      v: 2,
      d: "Base fee of the BEGINSUB opcode"
    },
    returnsub: {
      v: 5,
      d: "Base fee of the RETURNSUB opcode"
    },
    jumpsub: {
      v: 10,
      d: "Base fee of the JUMPSUB opcode"
    }
  },
  vm: {},
  pow: {}
}, Z0 = {
  name: "EIP-2537",
  number: 2537,
  comment: "BLS12-381 precompiles",
  url: "https://eips.ethereum.org/EIPS/eip-2537",
  status: "Draft",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {
    Bls12381G1AddGas: {
      v: 600,
      d: "Gas cost of a single BLS12-381 G1 addition precompile-call"
    },
    Bls12381G1MulGas: {
      v: 12e3,
      d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call"
    },
    Bls12381G2AddGas: {
      v: 4500,
      d: "Gas cost of a single BLS12-381 G2 addition precompile-call"
    },
    Bls12381G2MulGas: {
      v: 55e3,
      d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call"
    },
    Bls12381PairingBaseGas: {
      v: 115e3,
      d: "Base gas cost of BLS12-381 pairing check"
    },
    Bls12381PairingPerPairGas: {
      v: 23e3,
      d: "Per-pair gas cost of BLS12-381 pairing check"
    },
    Bls12381MapG1Gas: {
      v: 5500,
      d: "Gas cost of BLS12-381 map field element to G1"
    },
    Bls12381MapG2Gas: {
      v: 11e4,
      d: "Gas cost of BLS12-381 map field element to G2"
    },
    Bls12381MultiExpGasDiscount: {
      v: [
        [1, 1200],
        [2, 888],
        [3, 764],
        [4, 641],
        [5, 594],
        [6, 547],
        [7, 500],
        [8, 453],
        [9, 438],
        [10, 423],
        [11, 408],
        [12, 394],
        [13, 379],
        [14, 364],
        [15, 349],
        [16, 334],
        [17, 330],
        [18, 326],
        [19, 322],
        [20, 318],
        [21, 314],
        [22, 310],
        [23, 306],
        [24, 302],
        [25, 298],
        [26, 294],
        [27, 289],
        [28, 285],
        [29, 281],
        [30, 277],
        [31, 273],
        [32, 269],
        [33, 268],
        [34, 266],
        [35, 265],
        [36, 263],
        [37, 262],
        [38, 260],
        [39, 259],
        [40, 257],
        [41, 256],
        [42, 254],
        [43, 253],
        [44, 251],
        [45, 250],
        [46, 248],
        [47, 247],
        [48, 245],
        [49, 244],
        [50, 242],
        [51, 241],
        [52, 239],
        [53, 238],
        [54, 236],
        [55, 235],
        [56, 233],
        [57, 232],
        [58, 231],
        [59, 229],
        [60, 228],
        [61, 226],
        [62, 225],
        [63, 223],
        [64, 222],
        [65, 221],
        [66, 220],
        [67, 219],
        [68, 219],
        [69, 218],
        [70, 217],
        [71, 216],
        [72, 216],
        [73, 215],
        [74, 214],
        [75, 213],
        [76, 213],
        [77, 212],
        [78, 211],
        [79, 211],
        [80, 210],
        [81, 209],
        [82, 208],
        [83, 208],
        [84, 207],
        [85, 206],
        [86, 205],
        [87, 205],
        [88, 204],
        [89, 203],
        [90, 202],
        [91, 202],
        [92, 201],
        [93, 200],
        [94, 199],
        [95, 199],
        [96, 198],
        [97, 197],
        [98, 196],
        [99, 196],
        [100, 195],
        [101, 194],
        [102, 193],
        [103, 193],
        [104, 192],
        [105, 191],
        [106, 191],
        [107, 190],
        [108, 189],
        [109, 188],
        [110, 188],
        [111, 187],
        [112, 186],
        [113, 185],
        [114, 185],
        [115, 184],
        [116, 183],
        [117, 182],
        [118, 182],
        [119, 181],
        [120, 180],
        [121, 179],
        [122, 179],
        [123, 178],
        [124, 177],
        [125, 176],
        [126, 176],
        [127, 175],
        [128, 174]
      ],
      d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"
    }
  },
  vm: {},
  pow: {}
}, W0 = {
  name: "EIP-2565",
  number: 2565,
  comment: "ModExp gas cost",
  url: "https://eips.ethereum.org/EIPS/eip-2565",
  status: "Final",
  minimumHardfork: "byzantium",
  gasConfig: {},
  gasPrices: {
    modexpGquaddivisor: {
      v: 3,
      d: "Gquaddivisor from modexp precompile for gas calculation"
    }
  },
  vm: {},
  pow: {}
}, K0 = {
  name: "EIP-2718",
  comment: "Typed Transaction Envelope",
  url: "https://eips.ethereum.org/EIPS/eip-2718",
  status: "Final",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, J0 = {
  name: "EIP-2929",
  comment: "Gas cost increases for state access opcodes",
  url: "https://eips.ethereum.org/EIPS/eip-2929",
  status: "Final",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {
    coldsload: {
      v: 2100,
      d: "Gas cost of the first read of storage from a given location (per transaction)"
    },
    coldaccountaccess: {
      v: 2600,
      d: "Gas cost of the first read of a given address (per transaction)"
    },
    warmstorageread: {
      v: 100,
      d: "Gas cost of reading storage locations which have already loaded 'cold'"
    },
    sstoreCleanGasEIP2200: {
      v: 2900,
      d: "Once per SSTORE operation from clean non-zero to something else"
    },
    sstoreNoopGasEIP2200: {
      v: 100,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    sstoreDirtyGasEIP2200: {
      v: 100,
      d: "Once per SSTORE operation if a dirty value is changed"
    },
    sstoreInitRefundEIP2200: {
      v: 19900,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    sstoreCleanRefundEIP2200: {
      v: 4900,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    call: {
      v: 0,
      d: "Base fee of the CALL opcode"
    },
    callcode: {
      v: 0,
      d: "Base fee of the CALLCODE opcode"
    },
    delegatecall: {
      v: 0,
      d: "Base fee of the DELEGATECALL opcode"
    },
    staticcall: {
      v: 0,
      d: "Base fee of the STATICCALL opcode"
    },
    balance: {
      v: 0,
      d: "Base fee of the BALANCE opcode"
    },
    extcodesize: {
      v: 0,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 0,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    extcodehash: {
      v: 0,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    sload: {
      v: 0,
      d: "Base fee of the SLOAD opcode"
    },
    sstore: {
      v: 0,
      d: "Base fee of the SSTORE opcode"
    }
  },
  vm: {},
  pow: {}
}, Y0 = {
  name: "EIP-2930",
  comment: "Optional access lists",
  url: "https://eips.ethereum.org/EIPS/eip-2930",
  status: "Final",
  minimumHardfork: "istanbul",
  requiredEIPs: [2718, 2929],
  gasConfig: {},
  gasPrices: {
    accessListStorageKeyCost: {
      v: 1900,
      d: "Gas cost per storage key in an Access List transaction"
    },
    accessListAddressCost: {
      v: 2400,
      d: "Gas cost per storage key in an Access List transaction"
    }
  },
  vm: {},
  pow: {}
}, X0 = {
  name: "EIP-3198",
  number: 3198,
  comment: "BASEFEE opcode",
  url: "https://eips.ethereum.org/EIPS/eip-3198",
  status: "Final",
  minimumHardfork: "london",
  gasConfig: {},
  gasPrices: {
    basefee: {
      v: 2,
      d: "Gas cost of the BASEFEE opcode"
    }
  },
  vm: {},
  pow: {}
}, eb = {
  name: "EIP-3529",
  comment: "Reduction in refunds",
  url: "https://eips.ethereum.org/EIPS/eip-3529",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [2929],
  gasConfig: {
    maxRefundQuotient: {
      v: 5,
      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
    }
  },
  gasPrices: {
    selfdestructRefund: {
      v: 0,
      d: "Refunded following a selfdestruct operation"
    },
    sstoreClearRefundEIP2200: {
      v: 4800,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    }
  },
  vm: {},
  pow: {}
}, tb = {
  name: "EIP-3540",
  number: 3540,
  comment: "EVM Object Format (EOF) v1",
  url: "https://eips.ethereum.org/EIPS/eip-3540",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [3541],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, nb = {
  name: "EIP-3541",
  comment: "Reject new contracts starting with the 0xEF byte",
  url: "https://eips.ethereum.org/EIPS/eip-3541",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, rb = {
  name: "EIP-3554",
  comment: "Reduction in refunds",
  url: "Difficulty Bomb Delay to December 1st 2021",
  status: "Final",
  minimumHardfork: "muirGlacier",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 95e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, ib = {
  name: "EIP-3607",
  number: 3607,
  comment: "Reject transactions from senders with deployed code",
  url: "https://eips.ethereum.org/EIPS/eip-3607",
  status: "Final",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, sb = {
  name: "EIP-3651",
  number: 3198,
  comment: "Warm COINBASE",
  url: "https://eips.ethereum.org/EIPS/eip-3651",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [2929],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, ob = {
  name: "EIP-3670",
  number: 3670,
  comment: "EOF - Code Validation",
  url: "https://eips.ethereum.org/EIPS/eip-3670",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [3540],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, ab = {
  name: "EIP-3675",
  number: 3675,
  comment: "Upgrade consensus to Proof-of-Stake",
  url: "https://eips.ethereum.org/EIPS/eip-3675",
  status: "Final",
  minimumHardfork: "london",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, cb = {
  name: "EIP-3855",
  number: 3855,
  comment: "PUSH0 instruction",
  url: "https://eips.ethereum.org/EIPS/eip-3855",
  status: "Review",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    push0: {
      v: 2,
      d: "Base fee of the PUSH0 opcode"
    }
  },
  vm: {},
  pow: {}
}, ub = {
  name: "EIP-3860",
  number: 3860,
  comment: "Limit and meter initcode",
  url: "https://eips.ethereum.org/EIPS/eip-3860",
  status: "Review",
  minimumHardfork: "spuriousDragon",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    initCodeWordCost: {
      v: 2,
      d: "Gas to pay for each word (32 bytes) of initcode when creating a contract"
    }
  },
  vm: {
    maxInitCodeSize: {
      v: 49152,
      d: "Maximum length of initialization code when creating a contract"
    }
  },
  pow: {}
}, db = {
  name: "EIP-4345",
  number: 4345,
  comment: "Difficulty Bomb Delay to June 2022",
  url: "https://eips.ethereum.org/EIPS/eip-4345",
  status: "Final",
  minimumHardfork: "london",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 107e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, fb = {
  name: "EIP-4399",
  number: 4399,
  comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
  url: "https://eips.ethereum.org/EIPS/eip-4399",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, lb = {
  name: "EIP-5133",
  number: 5133,
  comment: "Delaying Difficulty Bomb to mid-September 2022",
  url: "https://eips.ethereum.org/EIPS/eip-5133",
  status: "Draft",
  minimumHardfork: "grayGlacier",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 114e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, Mn = {
  1153: V0,
  1559: Q0,
  2315: $0,
  2537: Z0,
  2565: W0,
  2718: K0,
  2929: J0,
  2930: Y0,
  3198: X0,
  3529: eb,
  3540: tb,
  3541: nb,
  3554: rb,
  3607: ib,
  3651: sb,
  3670: ob,
  3675: ab,
  3855: cb,
  3860: ub,
  4345: db,
  4399: fb,
  5133: lb
}, hb = {
  name: "chainstart",
  comment: "Start of the Ethereum main chain",
  url: "",
  status: "",
  gasConfig: {
    minGasLimit: {
      v: 5e3,
      d: "Minimum the gas limit may ever be"
    },
    gasLimitBoundDivisor: {
      v: 1024,
      d: "The bound divisor of the gas limit, used in update calculations"
    },
    maxRefundQuotient: {
      v: 2,
      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
    }
  },
  gasPrices: {
    base: {
      v: 2,
      d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)"
    },
    tierStep: {
      v: [0, 2, 3, 5, 8, 10, 20],
      d: "Once per operation, for a selection of them"
    },
    exp: {
      v: 10,
      d: "Base fee of the EXP opcode"
    },
    expByte: {
      v: 10,
      d: "Times ceil(log256(exponent)) for the EXP instruction"
    },
    sha3: {
      v: 30,
      d: "Base fee of the SHA3 opcode"
    },
    sha3Word: {
      v: 6,
      d: "Once per word of the SHA3 operation's data"
    },
    sload: {
      v: 50,
      d: "Base fee of the SLOAD opcode"
    },
    sstoreSet: {
      v: 2e4,
      d: "Once per SSTORE operation if the zeroness changes from zero"
    },
    sstoreReset: {
      v: 5e3,
      d: "Once per SSTORE operation if the zeroness does not change from zero"
    },
    sstoreRefund: {
      v: 15e3,
      d: "Once per SSTORE operation if the zeroness changes to zero"
    },
    jumpdest: {
      v: 1,
      d: "Base fee of the JUMPDEST opcode"
    },
    log: {
      v: 375,
      d: "Base fee of the LOG opcode"
    },
    logData: {
      v: 8,
      d: "Per byte in a LOG* operation's data"
    },
    logTopic: {
      v: 375,
      d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
    },
    create: {
      v: 32e3,
      d: "Base fee of the CREATE opcode"
    },
    call: {
      v: 40,
      d: "Base fee of the CALL opcode"
    },
    callStipend: {
      v: 2300,
      d: "Free gas given at beginning of call"
    },
    callValueTransfer: {
      v: 9e3,
      d: "Paid for CALL when the value transfor is non-zero"
    },
    callNewAccount: {
      v: 25e3,
      d: "Paid for CALL when the destination address didn't exist prior"
    },
    selfdestructRefund: {
      v: 24e3,
      d: "Refunded following a selfdestruct operation"
    },
    memory: {
      v: 3,
      d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
    },
    quadCoeffDiv: {
      v: 512,
      d: "Divisor for the quadratic particle of the memory cost equation"
    },
    createData: {
      v: 200,
      d: ""
    },
    tx: {
      v: 21e3,
      d: "Per transaction. NOTE: Not payable on data of calls between transactions"
    },
    txCreation: {
      v: 32e3,
      d: "The cost of creating a contract via tx"
    },
    txDataZero: {
      v: 4,
      d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
    },
    txDataNonZero: {
      v: 68,
      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
    },
    copy: {
      v: 3,
      d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
    },
    ecRecover: {
      v: 3e3,
      d: ""
    },
    sha256: {
      v: 60,
      d: ""
    },
    sha256Word: {
      v: 12,
      d: ""
    },
    ripemd160: {
      v: 600,
      d: ""
    },
    ripemd160Word: {
      v: 120,
      d: ""
    },
    identity: {
      v: 15,
      d: ""
    },
    identityWord: {
      v: 3,
      d: ""
    },
    stop: {
      v: 0,
      d: "Base fee of the STOP opcode"
    },
    add: {
      v: 3,
      d: "Base fee of the ADD opcode"
    },
    mul: {
      v: 5,
      d: "Base fee of the MUL opcode"
    },
    sub: {
      v: 3,
      d: "Base fee of the SUB opcode"
    },
    div: {
      v: 5,
      d: "Base fee of the DIV opcode"
    },
    sdiv: {
      v: 5,
      d: "Base fee of the SDIV opcode"
    },
    mod: {
      v: 5,
      d: "Base fee of the MOD opcode"
    },
    smod: {
      v: 5,
      d: "Base fee of the SMOD opcode"
    },
    addmod: {
      v: 8,
      d: "Base fee of the ADDMOD opcode"
    },
    mulmod: {
      v: 8,
      d: "Base fee of the MULMOD opcode"
    },
    signextend: {
      v: 5,
      d: "Base fee of the SIGNEXTEND opcode"
    },
    lt: {
      v: 3,
      d: "Base fee of the LT opcode"
    },
    gt: {
      v: 3,
      d: "Base fee of the GT opcode"
    },
    slt: {
      v: 3,
      d: "Base fee of the SLT opcode"
    },
    sgt: {
      v: 3,
      d: "Base fee of the SGT opcode"
    },
    eq: {
      v: 3,
      d: "Base fee of the EQ opcode"
    },
    iszero: {
      v: 3,
      d: "Base fee of the ISZERO opcode"
    },
    and: {
      v: 3,
      d: "Base fee of the AND opcode"
    },
    or: {
      v: 3,
      d: "Base fee of the OR opcode"
    },
    xor: {
      v: 3,
      d: "Base fee of the XOR opcode"
    },
    not: {
      v: 3,
      d: "Base fee of the NOT opcode"
    },
    byte: {
      v: 3,
      d: "Base fee of the BYTE opcode"
    },
    address: {
      v: 2,
      d: "Base fee of the ADDRESS opcode"
    },
    balance: {
      v: 20,
      d: "Base fee of the BALANCE opcode"
    },
    origin: {
      v: 2,
      d: "Base fee of the ORIGIN opcode"
    },
    caller: {
      v: 2,
      d: "Base fee of the CALLER opcode"
    },
    callvalue: {
      v: 2,
      d: "Base fee of the CALLVALUE opcode"
    },
    calldataload: {
      v: 3,
      d: "Base fee of the CALLDATALOAD opcode"
    },
    calldatasize: {
      v: 2,
      d: "Base fee of the CALLDATASIZE opcode"
    },
    calldatacopy: {
      v: 3,
      d: "Base fee of the CALLDATACOPY opcode"
    },
    codesize: {
      v: 2,
      d: "Base fee of the CODESIZE opcode"
    },
    codecopy: {
      v: 3,
      d: "Base fee of the CODECOPY opcode"
    },
    gasprice: {
      v: 2,
      d: "Base fee of the GASPRICE opcode"
    },
    extcodesize: {
      v: 20,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 20,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    blockhash: {
      v: 20,
      d: "Base fee of the BLOCKHASH opcode"
    },
    coinbase: {
      v: 2,
      d: "Base fee of the COINBASE opcode"
    },
    timestamp: {
      v: 2,
      d: "Base fee of the TIMESTAMP opcode"
    },
    number: {
      v: 2,
      d: "Base fee of the NUMBER opcode"
    },
    difficulty: {
      v: 2,
      d: "Base fee of the DIFFICULTY opcode"
    },
    gaslimit: {
      v: 2,
      d: "Base fee of the GASLIMIT opcode"
    },
    pop: {
      v: 2,
      d: "Base fee of the POP opcode"
    },
    mload: {
      v: 3,
      d: "Base fee of the MLOAD opcode"
    },
    mstore: {
      v: 3,
      d: "Base fee of the MSTORE opcode"
    },
    mstore8: {
      v: 3,
      d: "Base fee of the MSTORE8 opcode"
    },
    sstore: {
      v: 0,
      d: "Base fee of the SSTORE opcode"
    },
    jump: {
      v: 8,
      d: "Base fee of the JUMP opcode"
    },
    jumpi: {
      v: 10,
      d: "Base fee of the JUMPI opcode"
    },
    pc: {
      v: 2,
      d: "Base fee of the PC opcode"
    },
    msize: {
      v: 2,
      d: "Base fee of the MSIZE opcode"
    },
    gas: {
      v: 2,
      d: "Base fee of the GAS opcode"
    },
    push: {
      v: 3,
      d: "Base fee of the PUSH opcode"
    },
    dup: {
      v: 3,
      d: "Base fee of the DUP opcode"
    },
    swap: {
      v: 3,
      d: "Base fee of the SWAP opcode"
    },
    callcode: {
      v: 40,
      d: "Base fee of the CALLCODE opcode"
    },
    return: {
      v: 0,
      d: "Base fee of the RETURN opcode"
    },
    invalid: {
      v: 0,
      d: "Base fee of the INVALID opcode"
    },
    selfdestruct: {
      v: 0,
      d: "Base fee of the SELFDESTRUCT opcode"
    }
  },
  vm: {
    stackLimit: {
      v: 1024,
      d: "Maximum size of VM stack allowed"
    },
    callCreateDepth: {
      v: 1024,
      d: "Maximum depth of call/create stack"
    },
    maxExtraDataSize: {
      v: 32,
      d: "Maximum size extra data may be after Genesis"
    }
  },
  pow: {
    minimumDifficulty: {
      v: 131072,
      d: "The minimum that the difficulty may ever be"
    },
    difficultyBoundDivisor: {
      v: 2048,
      d: "The bound divisor of the difficulty, used in the update calculations"
    },
    durationLimit: {
      v: 13,
      d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
    },
    epochDuration: {
      v: 3e4,
      d: "Duration between proof-of-work epochs"
    },
    timebombPeriod: {
      v: 1e5,
      d: "Exponential difficulty timebomb period"
    },
    minerReward: {
      v: "5000000000000000000",
      d: "the amount a miner get rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 0,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, pb = {
  name: "dao",
  comment: "DAO rescue hardfork",
  url: "https://eips.ethereum.org/EIPS/eip-779",
  status: "Final",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, mb = {
  name: "homestead",
  comment: "Homestead hardfork with protocol and network changes",
  url: "https://eips.ethereum.org/EIPS/eip-606",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    delegatecall: {
      v: 40,
      d: "Base fee of the DELEGATECALL opcode"
    }
  },
  vm: {},
  pow: {}
}, gb = {
  name: "tangerineWhistle",
  comment: "Hardfork with gas cost changes for IO-heavy operations",
  url: "https://eips.ethereum.org/EIPS/eip-608",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    sload: {
      v: 200,
      d: "Once per SLOAD operation"
    },
    call: {
      v: 700,
      d: "Once per CALL operation & message call transaction"
    },
    extcodesize: {
      v: 700,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 700,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    balance: {
      v: 400,
      d: "Base fee of the BALANCE opcode"
    },
    delegatecall: {
      v: 700,
      d: "Base fee of the DELEGATECALL opcode"
    },
    callcode: {
      v: 700,
      d: "Base fee of the CALLCODE opcode"
    },
    selfdestruct: {
      v: 5e3,
      d: "Base fee of the SELFDESTRUCT opcode"
    }
  },
  vm: {},
  pow: {}
}, yb = {
  name: "spuriousDragon",
  comment: "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
  url: "https://eips.ethereum.org/EIPS/eip-607",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    expByte: {
      v: 50,
      d: "Times ceil(log256(exponent)) for the EXP instruction"
    }
  },
  vm: {
    maxCodeSize: {
      v: 24576,
      d: "Maximum length of contract code"
    }
  },
  pow: {}
}, bb = {
  name: "byzantium",
  comment: "Hardfork with new precompiles, instructions and other protocol changes",
  url: "https://eips.ethereum.org/EIPS/eip-609",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    modexpGquaddivisor: {
      v: 20,
      d: "Gquaddivisor from modexp precompile for gas calculation"
    },
    ecAdd: {
      v: 500,
      d: "Gas costs for curve addition precompile"
    },
    ecMul: {
      v: 4e4,
      d: "Gas costs for curve multiplication precompile"
    },
    ecPairing: {
      v: 1e5,
      d: "Base gas costs for curve pairing precompile"
    },
    ecPairingWord: {
      v: 8e4,
      d: "Gas costs regarding curve pairing precompile input length"
    },
    revert: {
      v: 0,
      d: "Base fee of the REVERT opcode"
    },
    staticcall: {
      v: 700,
      d: "Base fee of the STATICCALL opcode"
    },
    returndatasize: {
      v: 2,
      d: "Base fee of the RETURNDATASIZE opcode"
    },
    returndatacopy: {
      v: 3,
      d: "Base fee of the RETURNDATACOPY opcode"
    }
  },
  vm: {},
  pow: {
    minerReward: {
      v: "3000000000000000000",
      d: "the amount a miner get rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 3e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, Ab = {
  name: "constantinople",
  comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
  url: "https://eips.ethereum.org/EIPS/eip-1013",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    netSstoreNoopGas: {
      v: 200,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    netSstoreInitGas: {
      v: 2e4,
      d: "Once per SSTORE operation from clean zero"
    },
    netSstoreCleanGas: {
      v: 5e3,
      d: "Once per SSTORE operation from clean non-zero"
    },
    netSstoreDirtyGas: {
      v: 200,
      d: "Once per SSTORE operation from dirty"
    },
    netSstoreClearRefund: {
      v: 15e3,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    },
    netSstoreResetRefund: {
      v: 4800,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    netSstoreResetClearRefund: {
      v: 19800,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    shl: {
      v: 3,
      d: "Base fee of the SHL opcode"
    },
    shr: {
      v: 3,
      d: "Base fee of the SHR opcode"
    },
    sar: {
      v: 3,
      d: "Base fee of the SAR opcode"
    },
    extcodehash: {
      v: 400,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    create2: {
      v: 32e3,
      d: "Base fee of the CREATE2 opcode"
    }
  },
  vm: {},
  pow: {
    minerReward: {
      v: "2000000000000000000",
      d: "The amount a miner gets rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 5e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, wb = {
  name: "petersburg",
  comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
  url: "https://eips.ethereum.org/EIPS/eip-1716",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    netSstoreNoopGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreInitGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreCleanGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreDirtyGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreClearRefund: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreResetRefund: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreResetClearRefund: {
      v: null,
      d: "Removed along EIP-1283"
    }
  },
  vm: {},
  pow: {}
}, _b = {
  name: "istanbul",
  comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
  url: "https://eips.ethereum.org/EIPS/eip-1679",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    blake2Round: {
      v: 1,
      d: "Gas cost per round for the Blake2 F precompile"
    },
    ecAdd: {
      v: 150,
      d: "Gas costs for curve addition precompile"
    },
    ecMul: {
      v: 6e3,
      d: "Gas costs for curve multiplication precompile"
    },
    ecPairing: {
      v: 45e3,
      d: "Base gas costs for curve pairing precompile"
    },
    ecPairingWord: {
      v: 34e3,
      d: "Gas costs regarding curve pairing precompile input length"
    },
    txDataNonZero: {
      v: 16,
      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
    },
    sstoreSentryGasEIP2200: {
      v: 2300,
      d: "Minimum gas required to be present for an SSTORE call, not consumed"
    },
    sstoreNoopGasEIP2200: {
      v: 800,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    sstoreDirtyGasEIP2200: {
      v: 800,
      d: "Once per SSTORE operation if a dirty value is changed"
    },
    sstoreInitGasEIP2200: {
      v: 2e4,
      d: "Once per SSTORE operation from clean zero to non-zero"
    },
    sstoreInitRefundEIP2200: {
      v: 19200,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    sstoreCleanGasEIP2200: {
      v: 5e3,
      d: "Once per SSTORE operation from clean non-zero to something else"
    },
    sstoreCleanRefundEIP2200: {
      v: 4200,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    sstoreClearRefundEIP2200: {
      v: 15e3,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    },
    balance: {
      v: 700,
      d: "Base fee of the BALANCE opcode"
    },
    extcodehash: {
      v: 700,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    chainid: {
      v: 2,
      d: "Base fee of the CHAINID opcode"
    },
    selfbalance: {
      v: 5,
      d: "Base fee of the SELFBALANCE opcode"
    },
    sload: {
      v: 800,
      d: "Base fee of the SLOAD opcode"
    }
  },
  vm: {},
  pow: {}
}, vb = {
  name: "muirGlacier",
  comment: "HF to delay the difficulty bomb",
  url: "https://eips.ethereum.org/EIPS/eip-2384",
  status: "Final",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 9e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
}, Eb = {
  name: "berlin",
  comment: "HF targeted for July 2020 following the Muir Glacier HF",
  url: "https://eips.ethereum.org/EIPS/eip-2070",
  status: "Final",
  eips: [2565, 2929, 2718, 2930]
}, Ib = {
  name: "london",
  comment: "HF targeted for July 2021 following the Berlin fork",
  url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
  status: "Final",
  eips: [1559, 3198, 3529, 3541]
}, xb = {
  name: "shanghai",
  comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
  status: "Final",
  eips: [3651, 3855, 3860, 4895]
}, Tb = {
  name: "arrowGlacier",
  comment: "HF to delay the difficulty bomb",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
  status: "Final",
  eips: [4345],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, Sb = {
  name: "grayGlacier",
  comment: "Delaying the difficulty bomb to Mid September 2022",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
  status: "Draft",
  eips: [5133],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
}, kb = {
  name: "mergeForkIdTransition",
  comment: "Pre-merge hardfork to fork off non-upgraded clients",
  url: "https://eips.ethereum.org/EIPS/eip-3675",
  status: "Draft",
  eips: []
}, Rb = {
  name: "merge",
  comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
  status: "Final",
  consensus: {
    type: "pos",
    algorithm: "casper",
    casper: {}
  },
  eips: [3675, 4399]
}, Bb = {
  chainstart: hb,
  homestead: mb,
  dao: pb,
  tangerineWhistle: gb,
  spuriousDragon: yb,
  byzantium: bb,
  constantinople: Ab,
  petersburg: wb,
  istanbul: _b,
  muirGlacier: vb,
  berlin: Eb,
  london: Ib,
  shanghai: xb,
  arrowGlacier: Tb,
  grayGlacier: Sb,
  mergeForkIdTransition: kb,
  merge: Rb
}, { buf: Pb } = U0;
class we extends ma {
  /**
   * Creates a {@link Common} object for a custom chain, based on a standard one.
   *
   * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
   * in a provided {@link chainParamsOrName} dictionary. Some usage example:
   *
   * ```javascript
   * Common.custom({chainId: 123})
   * ```
   *
   * There are also selected supported custom chains which can be initialized by using one of the
   * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
   *
   * ```javascript
   * Common.custom(CustomChains.MaticMumbai)
   * ```
   *
   * Note that these supported custom chains only provide some base parameters (usually the chain and
   * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
   * the `web3-utils/tx` library to a Layer-2 chain).
   *
   * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
   * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
   */
  static custom(e, n = {}) {
    var r;
    const i = (r = n.baseChain) !== null && r !== void 0 ? r : "mainnet", s = Object.assign({}, we._getChainParams(i));
    if (s.name = "custom-chain", typeof e != "string")
      return new we(Object.assign({ chain: Object.assign(Object.assign({}, s), e) }, n));
    if (e === Te.PolygonMainnet)
      return we.custom({
        name: Te.PolygonMainnet,
        chainId: 137,
        networkId: 137
      }, n);
    if (e === Te.PolygonMumbai)
      return we.custom({
        name: Te.PolygonMumbai,
        chainId: 80001,
        networkId: 80001
      }, n);
    if (e === Te.ArbitrumRinkebyTestnet)
      return we.custom({
        name: Te.ArbitrumRinkebyTestnet,
        chainId: 421611,
        networkId: 421611
      }, n);
    if (e === Te.ArbitrumOne)
      return we.custom({
        name: Te.ArbitrumOne,
        chainId: 42161,
        networkId: 42161
      }, n);
    if (e === Te.xDaiChain)
      return we.custom({
        name: Te.xDaiChain,
        chainId: 100,
        networkId: 100
      }, n);
    if (e === Te.OptimisticKovan)
      return we.custom({
        name: Te.OptimisticKovan,
        chainId: 69,
        networkId: 69
      }, Object.assign({ hardfork: de.Berlin }, n));
    if (e === Te.OptimisticEthereum)
      return we.custom({
        name: Te.OptimisticEthereum,
        chainId: 10,
        networkId: 10
      }, Object.assign({ hardfork: de.Berlin }, n));
    throw new Error(`Custom chain ${e} not supported`);
  }
  /**
   * Static method to load and set common from a geth genesis json
   * @param genesisJson json of geth configuration
   * @param { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge } to further configure the common instance
   * @returns Common
   */
  static fromGethGenesis(e, { chain: n, eips: r, genesisHash: i, hardfork: s, mergeForkIdPostMerge: o }) {
    var a;
    const d = P0(e, n, o), u = new we({
      chain: (a = d.name) !== null && a !== void 0 ? a : "custom",
      customChains: [d],
      eips: r,
      hardfork: s ?? d.hardfork
    });
    return i !== void 0 && u.setForkHashes(i), u;
  }
  /**
   * Static method to determine if a {@link chainId} is supported as a standard chain
   * @param chainId bigint id (`1`) of a standard chain
   * @returns boolean
   */
  static isSupportedChainId(e) {
    return !!this._getInitializedChains().names[e.toString()];
  }
  static _getChainParams(e, n) {
    let r = e;
    const i = this._getInitializedChains(n);
    if (typeof r == "number" || typeof r == "bigint") {
      if (r = r.toString(), i.names[r]) {
        const s = i.names[r];
        return i[s];
      }
      throw new Error(`Chain with ID ${r} not supported`);
    }
    if (i[r] !== void 0)
      return i[r];
    throw new Error(`Chain with name ${r} not supported`);
  }
  constructor(e) {
    var n, r;
    super(), this._eips = [], this._customChains = (n = e.customChains) !== null && n !== void 0 ? n : [], this._chainParams = this.setChain(e.chain), this.DEFAULT_HARDFORK = (r = this._chainParams.defaultHardfork) !== null && r !== void 0 ? r : de.Merge, this.HARDFORK_CHANGES = this.hardforks().map((i) => [
      i.name,
      Bb[i.name]
    ]), this._hardfork = this.DEFAULT_HARDFORK, e.hardfork !== void 0 && this.setHardfork(e.hardfork), e.eips && this.setEIPs(e.eips);
  }
  /**
   * Sets the chain
   * @param chain String ('mainnet') or Number (1) chain representation.
   *              Or, a Dictionary of chain parameters for a private network.
   * @returns The dictionary with parameters set as chain
   */
  setChain(e) {
    if (typeof e == "number" || typeof e == "bigint" || typeof e == "string")
      this._chainParams = we._getChainParams(e, this._customChains);
    else if (typeof e == "object") {
      if (this._customChains.length > 0)
        throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
      const n = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
      for (const r of n)
        if (!(r in e))
          throw new Error(`Missing required chain parameter: ${r}`);
      this._chainParams = e;
    } else
      throw new Error("Wrong input format");
    for (const n of this.hardforks())
      if (n.block === void 0)
        throw new Error("Hardfork cannot have undefined block number");
    return this._chainParams;
  }
  /**
   * Sets the hardfork to get params for
   * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
   */
  setHardfork(e) {
    let n = !1;
    for (const r of this.HARDFORK_CHANGES)
      r[0] === e && (this._hardfork !== e && (this._hardfork = e, this.emit("hardforkChanged", e)), n = !0);
    if (!n)
      throw new Error(`Hardfork with name ${e} not supported`);
  }
  /**
   * Returns the hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td : total difficulty of the parent block (for block hf) OR of the chain latest (for chain hf)
   * @param timestamp: timestamp in seconds at which block was/is to be minted
   * @returns The name of the HF
   */
  getHardforkByBlockNumber(e, n, r) {
    const i = Nn(e, Ze.BigInt), s = Nn(n, Ze.BigInt), o = Nn(r, Ze.Number), a = this.hardforks().filter((g) => (
      // eslint-disable-next-line no-null/no-null
      g.block !== null || // eslint-disable-next-line no-null/no-null
      g.ttd !== null && g.ttd !== void 0 || g.timestamp !== void 0
    )), d = a.findIndex((g) => g.ttd !== null && g.ttd !== void 0);
    if (a.slice(d + 1).findIndex((g) => g.ttd !== null && g.ttd !== void 0) >= 0)
      throw Error("More than one merge hardforks found with ttd specified");
    let c = a.findIndex((g) => (
      // eslint-disable-next-line no-null/no-null
      g.block !== null && g.block > i || o !== void 0 && Number(g.timestamp) > o
    ));
    if (c === -1)
      c = a.length;
    else if (c === 0)
      throw Error("Must have at least one hardfork at block 0");
    if (o === void 0) {
      const g = a.slice(0, c).reverse().findIndex((b) => b.block !== null || b.ttd !== void 0);
      c -= g;
    }
    if (c -= 1, a[c].block === null && a[c].timestamp === void 0)
      (s == null || BigInt(a[c].ttd) > s) && (c -= 1);
    else if (d >= 0 && s !== void 0 && s !== null) {
      if (c >= d && BigInt(a[d].ttd) > s)
        throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
      if (c < d && BigInt(a[d].ttd) <= s)
        throw Error("HF determined by block number is lower than the minimum total difficulty HF");
    }
    const f = c;
    for (; c < a.length - 1 && !(a[c].block !== a[c + 1].block || a[c].timestamp !== a[c + 1].timestamp); c += 1)
      ;
    if (o) {
      if (a.slice(0, f).reduce((p, m) => {
        var l;
        return Math.max(Number((l = m.timestamp) !== null && l !== void 0 ? l : "0"), p);
      }, 0) > o)
        throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
      if (a.slice(c + 1).reduce((p, m) => {
        var l;
        return Math.min(Number((l = m.timestamp) !== null && l !== void 0 ? l : o), p);
      }, o) < o)
        throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF");
    }
    return a[c].name;
  }
  /**
   * Sets a new hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td
   * @param timestamp
   * @returns The name of the HF set
   */
  setHardforkByBlockNumber(e, n, r) {
    const i = this.getHardforkByBlockNumber(e, n, r);
    return this.setHardfork(i), i;
  }
  /**
   * Internal helper function, returns the params for the given hardfork for the chain set
   * @param hardfork Hardfork name
   * @returns Dictionary with hardfork params or null if hardfork not on chain
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  _getHardfork(e) {
    const n = this.hardforks();
    for (const r of n)
      if (r.name === e)
        return r;
    return null;
  }
  /**
   * Sets the active EIPs
   * @param eips
   */
  setEIPs(e = []) {
    for (const n of e) {
      if (!(n in Mn))
        throw new Error(`${n} not supported`);
      const r = this.gteHardfork(Mn[n].minimumHardfork);
      if (!r)
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${n} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${r}`
        );
      if (Mn[n].requiredEIPs !== void 0) {
        for (const i of Mn[n].requiredEIPs)
          if (!(e.includes(i) || this.isActivatedEIP(i)))
            throw new Error(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${n} requires EIP ${i}, but is not included in the EIP list`
            );
      }
    }
    this._eips = e;
  }
  /**
   * Returns a parameter for the current chain setup
   *
   * If the parameter is present in an EIP, the EIP always takes precedence.
   * Otherwise the parameter if taken from the latest applied HF with
   * a change on the respective parameter.
   *
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @returns The value requested or `BigInt(0)` if not found
   */
  param(e, n) {
    let r;
    for (const i of this._eips)
      if (r = this.paramByEIP(e, n, i), r !== void 0)
        return r;
    return this.paramByHardfork(e, n, this._hardfork);
  }
  /**
   * Returns the parameter corresponding to a hardfork
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param hardfork Hardfork name
   * @returns The value requested or `BigInt(0)` if not found
   */
  paramByHardfork(e, n, r) {
    let i = null;
    for (const s of this.HARDFORK_CHANGES) {
      if ("eips" in s[1]) {
        const o = s[1].eips;
        for (const a of o) {
          const d = this.paramByEIP(e, n, a);
          i = typeof d == "bigint" ? d : i;
        }
      } else {
        if (s[1][e] === void 0)
          throw new Error(`Topic ${e} not defined`);
        s[1][e][n] !== void 0 && (i = s[1][e][n].v);
      }
      if (s[0] === r)
        break;
    }
    return BigInt(i ?? 0);
  }
  /**
   * Returns a parameter corresponding to an EIP
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param eip Number of the EIP
   * @returns The value requested or `undefined` if not found
   */
  // eslint-disable-next-line class-methods-use-this
  paramByEIP(e, n, r) {
    if (!(r in Mn))
      throw new Error(`${r} not supported`);
    const i = Mn[r];
    if (!(e in i))
      throw new Error(`Topic ${e} not defined`);
    if (i[e][n] === void 0)
      return;
    const s = i[e][n].v;
    return BigInt(s);
  }
  /**
   * Returns a parameter for the hardfork active on block number or
   * optional provided total difficulty (Merge HF)
   * @param topic Parameter topic
   * @param name Parameter name
   * @param blockNumber Block number
   * @param td Total difficulty
   *    * @returns The value requested or `BigInt(0)` if not found
   */
  paramByBlock(e, n, r, i, s) {
    const o = this.getHardforkByBlockNumber(r, i, s);
    return this.paramByHardfork(e, n, o);
  }
  /**
   * Checks if an EIP is activated by either being included in the EIPs
   * manually passed in with the {@link CommonOpts.eips} or in a
   * hardfork currently being active
   *
   * Note: this method only works for EIPs being supported
   * by the {@link CommonOpts.eips} constructor option
   * @param eip
   */
  isActivatedEIP(e) {
    if (this.eips().includes(e))
      return !0;
    for (const n of this.HARDFORK_CHANGES) {
      const r = n[1];
      if (this.gteHardfork(r.name) && "eips" in r && r.eips.includes(e))
        return !0;
    }
    return !1;
  }
  /**
   * Checks if set or provided hardfork is active on block number
   * @param hardfork Hardfork name or null (for HF set)
   * @param blockNumber
   * @returns True if HF is active on block number
   */
  hardforkIsActiveOnBlock(e, n) {
    const r = Nn(n, Ze.BigInt), i = e ?? this._hardfork, s = this.hardforkBlock(i);
    return typeof s == "bigint" && s !== BigInt(0) && r >= s;
  }
  /**
   * Alias to hardforkIsActiveOnBlock when hardfork is set
   * @param blockNumber
   * @returns True if HF is active on block number
   */
  activeOnBlock(e) {
    return this.hardforkIsActiveOnBlock(null, e);
  }
  /**
   * Sequence based check if given or set HF1 is greater than or equal HF2
   * @param hardfork1 Hardfork name or null (if set)
   * @param hardfork2 Hardfork name
   * @param opts Hardfork options
   * @returns True if HF1 gte HF2
   */
  hardforkGteHardfork(e, n) {
    const r = e ?? this._hardfork, i = this.hardforks();
    let s = -1, o = -1, a = 0;
    for (const d of i)
      d.name === r && (s = a), d.name === n && (o = a), a += 1;
    return s >= o && o !== -1;
  }
  /**
   * Alias to hardforkGteHardfork when hardfork is set
   * @param hardfork Hardfork name
   * @returns True if hardfork set is greater than hardfork provided
   */
  gteHardfork(e) {
    return this.hardforkGteHardfork(null, e);
  }
  /**
   * Returns the hardfork change block for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if unscheduled
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkBlock(e) {
    var n;
    const r = e ?? this._hardfork, i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.block;
    return i == null ? null : BigInt(i);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkTimestamp(e) {
    var n;
    const r = e ?? this._hardfork, i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.timestamp;
    return i == null ? null : BigInt(i);
  }
  /**
   * Returns the hardfork change block for eip
   * @param eip EIP number
   * @returns Block number or null if unscheduled
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  eipBlock(e) {
    for (const n of this.HARDFORK_CHANGES) {
      const r = n[1];
      if ("eips" in r && r.eips.includes(e))
        return this.hardforkBlock(typeof n[0] == "number" ? String(n[0]) : n[0]);
    }
    return null;
  }
  /**
   * Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Total difficulty or null if no set
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkTTD(e) {
    var n;
    const r = e ?? this._hardfork, i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.ttd;
    return i == null ? null : BigInt(i);
  }
  /**
   * True if block number provided is the hardfork (given or set) change block
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */
  isHardforkBlock(e, n) {
    const r = Nn(e, Ze.BigInt), i = n ?? this._hardfork, s = this.hardforkBlock(i);
    return typeof s == "bigint" && s !== BigInt(0) ? s === r : !1;
  }
  /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block timestamp, number or null if not available
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  nextHardforkBlockOrTimestamp(e) {
    var n, r, i;
    const s = (n = e) !== null && n !== void 0 ? n : this._hardfork, o = this.hardforks();
    let a = o.findIndex((f) => f.name === s);
    if (s === de.Merge && (a -= 1), a < 0)
      return null;
    let d = (r = o[a].timestamp) !== null && r !== void 0 ? r : o[a].block;
    d = // eslint-disable-next-line no-null/no-null
    d != null ? Number(d) : (
      // eslint-disable-next-line no-null/no-null
      null
    );
    const u = o.slice(a + 1).find((f) => {
      var h;
      let g = (h = f.timestamp) !== null && h !== void 0 ? h : f.block;
      return g = // eslint-disable-next-line no-null/no-null
      g != null ? Number(g) : (
        // eslint-disable-next-line no-null/no-null
        null
      ), f.name !== de.Merge && // eslint-disable-next-line no-null/no-null
      g !== null && g !== void 0 && g !== d;
    });
    if (u === void 0)
      return null;
    const c = (i = u.timestamp) !== null && i !== void 0 ? i : u.block;
    return c == null ? null : BigInt(c);
  }
  /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if not available
   * @deprecated
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  nextHardforkBlock(e) {
    var n;
    const r = (n = e) !== null && n !== void 0 ? n : this._hardfork;
    let i = this.hardforkBlock(r);
    if (i === null && r === de.Merge) {
      const o = this.hardforks(), a = o.findIndex((d) => d.ttd !== null && d.ttd !== void 0);
      if (a < 0)
        throw Error("Merge hardfork should have been found");
      i = this.hardforkBlock(o[a - 1].name);
    }
    return i === null ? null : this.hardforks().reduce((o, a) => {
      const d = BigInt(
        // eslint-disable-next-line no-null/no-null
        a.block === null || a.ttd !== void 0 && a.ttd !== null ? 0 : a.block
      );
      return d > i && o === null ? d : o;
    }, null);
  }
  /**
   * True if block number provided is the hardfork change block following the hardfork given or set
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */
  isNextHardforkBlock(e, n) {
    const r = Nn(e, Ze.BigInt), i = n ?? this._hardfork, s = this.nextHardforkBlock(i);
    return s === null ? !1 : s === r;
  }
  /**
   * Internal helper function to calculate a fork hash
   * @param hardfork Hardfork name
   * @param genesisHash Genesis block hash of the chain
   * @returns Fork hash as hex string
   */
  _calcForkHash(e, n) {
    let r = new Uint8Array(), i = 0;
    for (const a of this.hardforks()) {
      const { block: d, timestamp: u, name: c } = a;
      let f = u ?? d;
      if (f = f !== null ? Number(f) : null, typeof f == "number" && f !== 0 && f !== i && c !== de.Merge) {
        const h = fe(f.toString(16).padStart(16, "0"));
        r = Me(r, h), i = f;
      }
      if (a.name === e)
        break;
    }
    const s = Me(n, r);
    return ee(C0(Pb(s) >>> 0));
  }
  /**
   * Returns an eth/64 compliant fork hash (EIP-2124)
   * @param hardfork Hardfork name, optional if HF set
   * @param genesisHash Genesis block hash of the chain, optional if already defined and not needed to be calculated
   */
  forkHash(e, n) {
    const r = e ?? this._hardfork, i = this._getHardfork(r);
    if (
      // eslint-disable-next-line no-null/no-null
      i === null || // eslint-disable-next-line no-null/no-null
      (i == null ? void 0 : i.block) === null && (i == null ? void 0 : i.timestamp) === void 0 && (i == null ? void 0 : i.ttd) === void 0
    ) {
      const s = "No fork hash calculation possible for future hardfork";
      throw new Error(s);
    }
    if ((i == null ? void 0 : i.forkHash) !== null && (i == null ? void 0 : i.forkHash) !== void 0)
      return i.forkHash;
    if (!n)
      throw new Error("genesisHash required for forkHash calculation");
    return this._calcForkHash(r, n);
  }
  /**
   *
   * @param forkHash Fork hash as a hex string
   * @returns Array with hardfork data (name, block, forkHash)
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkForForkHash(e) {
    const n = this.hardforks().filter((r) => r.forkHash === e);
    return n.length >= 1 ? n[n.length - 1] : null;
  }
  /**
   * Sets any missing forkHashes on the passed-in {@link Common} instance
   * @param common The {@link Common} to set the forkHashes for
   * @param genesisHash The genesis block hash
   */
  setForkHashes(e) {
    var n;
    for (const r of this.hardforks()) {
      const i = (n = r.timestamp) !== null && n !== void 0 ? n : r.block;
      // eslint-disable-next-line no-null/no-null
      (r.forkHash === null || r.forkHash === void 0) && // eslint-disable-next-line no-null/no-null
      (i != null || typeof r.ttd < "u") && (r.forkHash = this.forkHash(r.name, e));
    }
  }
  /**
   * Returns the Genesis parameters of the current chain
   * @returns Genesis dictionary
   */
  genesis() {
    return this._chainParams.genesis;
  }
  /**
   * Returns the hardforks for current chain
   * @returns {Array} Array with arrays of hardforks
   */
  hardforks() {
    return this._chainParams.hardforks;
  }
  /**
   * Returns bootstrap nodes for the current chain
   * @returns {Dictionary} Dict with bootstrap nodes
   */
  bootstrapNodes() {
    return this._chainParams.bootstrapNodes;
  }
  /**
   * Returns DNS networks for the current chain
   * @returns {String[]} Array of DNS ENR urls
   */
  dnsNetworks() {
    return this._chainParams.dnsNetworks;
  }
  /**
   * Returns the hardfork set
   * @returns Hardfork name
   */
  hardfork() {
    return this._hardfork;
  }
  /**
   * Returns the Id of current chain
   * @returns chain Id
   */
  chainId() {
    return BigInt(this._chainParams.chainId);
  }
  /**
   * Returns the name of current chain
   * @returns chain name (lower case)
   */
  chainName() {
    return this._chainParams.name;
  }
  /**
   * Returns the Id of current network
   * @returns network Id
   */
  networkId() {
    return BigInt(this._chainParams.networkId);
  }
  /**
   * Returns the active EIPs
   * @returns List of EIPs
   */
  eips() {
    return this._eips;
  }
  /**
   * Returns the consensus type of the network
   * Possible values: "pow"|"poa"|"pos"
   *
   * Note: This value can update along a Hardfork.
   */
  consensusType() {
    const e = this.hardfork();
    let n;
    for (const r of this.HARDFORK_CHANGES)
      if ("consensus" in r[1] && (n = r[1].consensus.type), r[0] === e)
        break;
    return n ?? this._chainParams.consensus.type;
  }
  /**
   * Returns the concrete consensus implementation
   * algorithm or protocol for the network
   * e.g. "ethash" for "pow" consensus type,
   * "clique" for "poa" consensus type or
   * "casper" for "pos" consensus type.
   *
   * Note: This value can update along a Hardfork.
   */
  consensusAlgorithm() {
    const e = this.hardfork();
    let n;
    for (const r of this.HARDFORK_CHANGES)
      if ("consensus" in r[1] && (n = r[1].consensus.algorithm), r[0] === e)
        break;
    return n ?? this._chainParams.consensus.algorithm;
  }
  /**
   * Returns a dictionary with consensus configuration
   * parameters based on the consensus algorithm
   *
   * Expected returns (parameters must be present in
   * the respective chain json files):
   *
   * ethash: empty object
   * clique: period, epoch
   * casper: empty object
   *
   * Note: This value can update along a Hardfork.
   */
  consensusConfig() {
    var e;
    const n = this.hardfork();
    let r;
    for (const i of this.HARDFORK_CHANGES)
      if ("consensus" in i[1] && (r = i[1].consensus[i[1].consensus.algorithm]), i[0] === n)
        break;
    return (e = r ?? this._chainParams.consensus[this.consensusAlgorithm()]) !== null && e !== void 0 ? e : {};
  }
  /**
   * Returns a deep copy of this {@link Common} instance.
   */
  copy() {
    const e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return e.removeAllListeners(), e;
  }
  static _getInitializedChains(e) {
    const n = {};
    for (const [i, s] of Object.entries(os))
      n[s] = i.toLowerCase();
    const r = { mainnet: q0, goerli: G0, sepolia: z0 };
    if (e)
      for (const i of e) {
        const { name: s } = i;
        n[i.chainId.toString()] = s, r[s] = i;
      }
    return r.names = n, r;
  }
}
var dt;
(function(t) {
  t[t.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", t[t.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket", t[t.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", t[t.EIP2930AccessLists = 2930] = "EIP2930AccessLists";
})(dt || (dt = {}));
function Cb(t) {
  if (t.length === 0)
    return !0;
  const e = t[0];
  return !!Array.isArray(e);
}
function Nb(t) {
  return !Cb(t);
}
class Vn {
  constructor(e) {
    if (e.length !== 20)
      throw new Error("Invalid address length");
    this.buf = e;
  }
  /**
   * Returns the zero address.
   */
  static zero() {
    return new Vn(Ud(20));
  }
  /**
   * Is address equal to another.
   */
  equals(e) {
    return ks(this.buf, e.buf);
  }
  /**
   * Is address zero.
   */
  isZero() {
    return this.equals(Vn.zero());
  }
  /**
   * Returns hex encoding of address.
   */
  toString() {
    return ee(this.buf);
  }
  /**
   * Returns Uint8Array representation of address.
   */
  toArray() {
    return this.buf;
  }
  /**
   * Returns the ethereum address of a given public key.
   * Accepts "Ethereum public keys" and SEC1 encoded keys.
   * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
   * @param sanitize Accept public keys in other formats
   */
  static publicToAddress(e, n = !1) {
    let r = e;
    if (Ca(r), n && r.length !== 64 && (r = Ot.ProjectivePoint.fromHex(r).toRawBytes(!1).slice(1)), r.length !== 64)
      throw new Error("Expected pubKey to be of length 64");
    return Re(r).slice(-20);
  }
}
const Mb = (t, e) => {
  const n = t.param("vm", "maxInitCodeSize");
  if (n && BigInt(e) > n)
    throw new Error(`the initcode size of this transaction is too large: it is ${e} while the max is ${t.param("vm", "maxInitCodeSize")}`);
}, Gd = (t) => {
  let e, n;
  if (Nb(t)) {
    e = t;
    const r = [];
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i], o = he(s.address), a = [];
      for (let d = 0; d < s.storageKeys.length; d += 1)
        a.push(he(s.storageKeys[d]));
      r.push([o, a]);
    }
    n = r;
  } else {
    n = t ?? [];
    const r = [];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i], o = ee(s[0]), a = [];
      for (let u = 0; u < s[1].length; u += 1)
        a.push(ee(s[1][u]));
      const d = {
        address: o,
        storageKeys: a
      };
      r.push(d);
    }
    e = r;
  }
  return {
    AccessListJSON: e,
    accessList: n
  };
}, qd = (t) => {
  for (let e = 0; e < t.length; e += 1) {
    const n = t[e], r = n[0], i = n[1];
    if (n[2] !== void 0)
      throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
    if (r.length !== 20)
      throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
    for (let s = 0; s < i.length; s += 1)
      if (i[s].length !== 32)
        throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
  }
}, zd = (t) => {
  const e = [];
  for (let n = 0; n < t.length; n += 1) {
    const r = t[n], i = {
      address: ee(qc(r[0], 20)),
      storageKeys: []
    }, s = r && r[1];
    for (let o = 0; o < s.length; o += 1) {
      const a = s[o];
      i.storageKeys.push(ee(qc(a, 32)));
    }
    e.push(i);
  }
  return e;
}, Vd = (t, e) => {
  const n = e.param("gasPrices", "accessListStorageKeyCost"), r = e.param("gasPrices", "accessListAddressCost");
  let i = 0;
  for (let o = 0; o < t.length; o += 1) {
    const d = t[o][1];
    i += d.length;
  }
  return t.length * Number(r) + i * Number(n);
};
class or {
  constructor(e, n) {
    var r, i;
    this.cache = {
      hash: void 0,
      dataFee: void 0
    }, this.activeCapabilities = [], this.DEFAULT_CHAIN = os.Mainnet, this.DEFAULT_HARDFORK = de.Merge;
    const { nonce: s, gasLimit: o, to: a, value: d, data: u, v: c, r: f, s: h, type: g } = e;
    this._type = Number(ue(he(g))), this.txOptions = n;
    const b = he(a === "" ? "0x" : a), p = he(c === "" ? "0x" : c), m = he(f === "" ? "0x" : f), l = he(h === "" ? "0x" : h);
    this.nonce = ue(he(s === "" ? "0x" : s)), this.gasLimit = ue(he(o === "" ? "0x" : o)), this.to = b.length > 0 ? new Vn(b) : void 0, this.value = ue(he(d === "" ? "0x" : d)), this.data = he(u === "" ? "0x" : u), this.v = p.length > 0 ? ue(p) : void 0, this.r = m.length > 0 ? ue(m) : void 0, this.s = l.length > 0 ? ue(l) : void 0, this._validateCannotExceedMaxInteger({ value: this.value, r: this.r, s: this.s }), this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64), this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, !0);
    const A = this.to === void 0 || this.to === null, w = (r = n.allowUnlimitedInitCodeSize) !== null && r !== void 0 ? r : !1, x = (i = n.common) !== null && i !== void 0 ? i : this._getCommon();
    A && x.isActivatedEIP(3860) && !w && Mb(x, this.data.length);
  }
  /**
   * Returns the transaction type.
   *
   * Note: legacy txs will return tx type `0`.
   */
  get type() {
    return this._type;
  }
  /**
   * Checks if a tx type defining capability is active
   * on a tx, for example the EIP-1559 fee market mechanism
   * or the EIP-2930 access list feature.
   *
   * Note that this is different from the tx type itself,
   * so EIP-2930 access lists can very well be active
   * on an EIP-1559 tx for example.
   *
   * This method can be useful for feature checks if the
   * tx type is unknown (e.g. when instantiated with
   * the tx factory).
   *
   * See `Capabilites` in the `types` module for a reference
   * on all supported capabilities.
   */
  supports(e) {
    return this.activeCapabilities.includes(e);
  }
  validate(e = !1) {
    const n = [];
    return this.getBaseFee() > this.gasLimit && n.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`), this.isSigned() && !this.verifySignature() && n.push("Invalid Signature"), e ? n : n.length === 0;
  }
  _validateYParity() {
    const { v: e } = this;
    if (e !== void 0 && e !== BigInt(0) && e !== BigInt(1)) {
      const n = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
      throw new Error(n);
    }
  }
  /**
   * EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
   * Reasoning: https://ethereum.stackexchange.com/a/55728
   */
  _validateHighS() {
    const { s: e } = this;
    if (this.common.gteHardfork("homestead") && e !== void 0 && e > S0) {
      const n = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
      throw new Error(n);
    }
  }
  /**
   * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
   */
  getBaseFee() {
    const e = this.common.param("gasPrices", "tx");
    let n = this.getDataFee();
    if (e && (n += e), this.common.gteHardfork("homestead") && this.toCreationAddress()) {
      const r = this.common.param("gasPrices", "txCreation");
      r && (n += r);
    }
    return n;
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    const e = this.common.param("gasPrices", "txDataZero"), n = this.common.param("gasPrices", "txDataNonZero");
    let r = BigInt(0);
    for (let i = 0; i < this.data.length; i += 1)
      this.data[i] === 0 ? r += e : r += n;
    if ((this.to === void 0 || this.to === null) && this.common.isActivatedEIP(3860)) {
      const i = BigInt(Math.ceil(this.data.length / 32)), s = this.common.param("gasPrices", "initCodeWordCost") * i;
      r += s;
    }
    return r;
  }
  /**
   * If the tx's `to` is to the creation address
   */
  toCreationAddress() {
    return this.to === void 0 || this.to.buf.length === 0;
  }
  isSigned() {
    const { v: e, r: n, s: r } = this;
    return !(e === void 0 || n === void 0 || r === void 0);
  }
  /**
   * Determines if the signature is valid
   */
  verifySignature() {
    try {
      const e = this.getSenderPublicKey();
      return as(e).length !== 0;
    } catch {
      return !1;
    }
  }
  /**
   * Returns the sender's address
   */
  getSenderAddress() {
    return new Vn(Vn.publicToAddress(this.getSenderPublicKey()));
  }
  /**
   * Signs a transaction.
   *
   * Note that the signed tx is returned as a new object,
   * use as follows:
   * ```javascript
   * const signedTx = tx.sign(privateKey)
   * ```
   */
  sign(e) {
    if (e.length !== 32) {
      const d = this._errorMsg("Private key must be 32 bytes in length.");
      throw new Error(d);
    }
    let n = !1;
    this.type === 0 && this.common.gteHardfork("spuriousDragon") && !this.supports(dt.EIP155ReplayProtection) && (this.activeCapabilities.push(dt.EIP155ReplayProtection), n = !0);
    const r = this.getMessageToSign(!0), { v: i, r: s, s: o } = this._ecsign(r, e), a = this._processSignature(i, s, o);
    if (n) {
      const d = this.activeCapabilities.indexOf(dt.EIP155ReplayProtection);
      d > -1 && this.activeCapabilities.splice(d, 1);
    }
    return a;
  }
  /**
   * Does chain ID checks on common and returns a common
   * to be used on instantiation
   * @hidden
   *
   * @param common - {@link Common} instance from tx options
   * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
   */
  _getCommon(e, n) {
    var r, i, s, o;
    if (n !== void 0) {
      const a = ue(he(n));
      if (e) {
        if (e.chainId() !== a) {
          const d = this._errorMsg("The chain ID does not match the chain ID of Common");
          throw new Error(d);
        }
        return e.copy();
      }
      return we.isSupportedChainId(a) ? new we({ chain: a, hardfork: this.DEFAULT_HARDFORK }) : we.custom({
        name: "custom-chain",
        networkId: a,
        chainId: a
      }, { baseChain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
    }
    if (e != null && e.copy && typeof (e == null ? void 0 : e.copy) == "function")
      return e.copy();
    if (e) {
      const a = typeof e.hardfork == "function" ? e.hardfork() : (
        // eslint-disable-next-line @typescript-eslint/unbound-method
        e.hardfork
      );
      return we.custom({
        name: "custom-chain",
        networkId: e.networkId ? e.networkId() : (i = BigInt((r = e.customChain) === null || r === void 0 ? void 0 : r.networkId)) !== null && i !== void 0 ? i : void 0,
        chainId: e.chainId ? e.chainId() : (o = BigInt((s = e.customChain) === null || s === void 0 ? void 0 : s.chainId)) !== null && o !== void 0 ? o : void 0
      }, {
        baseChain: this.DEFAULT_CHAIN,
        hardfork: a || this.DEFAULT_HARDFORK
      });
    }
    return new we({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
  }
  /**
   * Validates that an object with BigInt values cannot exceed the specified bit limit.
   * @param values Object containing string keys and BigInt values
   * @param bits Number of bits to check (64 or 256)
   * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
   */
  _validateCannotExceedMaxInteger(e, n = 256, r = !1) {
    for (const [i, s] of Object.entries(e))
      switch (n) {
        case 64:
          if (r) {
            if (s !== void 0 && s >= jc) {
              const o = this._errorMsg(`${i} cannot equal or exceed MAX_UINT64 (2^64-1), given ${s}`);
              throw new Error(o);
            }
          } else if (s !== void 0 && s > jc) {
            const o = this._errorMsg(`${i} cannot exceed MAX_UINT64 (2^64-1), given ${s}`);
            throw new Error(o);
          }
          break;
        case 256:
          if (r) {
            if (s !== void 0 && s >= Yr) {
              const o = this._errorMsg(`${i} cannot equal or exceed MAX_INTEGER (2^256-1), given ${s}`);
              throw new Error(o);
            }
          } else if (s !== void 0 && s > Yr) {
            const o = this._errorMsg(`${i} cannot exceed MAX_INTEGER (2^256-1), given ${s}`);
            throw new Error(o);
          }
          break;
        default: {
          const o = this._errorMsg("unimplemented bits value");
          throw new Error(o);
        }
      }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _validateNotArray(e) {
    const n = [
      "nonce",
      "gasPrice",
      "gasLimit",
      "to",
      "value",
      "data",
      "v",
      "r",
      "s",
      "type",
      "baseFee",
      "maxFeePerGas",
      "chainId"
    ];
    for (const [r, i] of Object.entries(e))
      if (n.includes(r) && Array.isArray(i))
        throw new Error(`${r} cannot be an array`);
  }
  /**
   * Returns the shared error postfix part for _error() method
   * tx type implementations.
   */
  _getSharedErrorPostfix() {
    let e = "";
    try {
      e = this.isSigned() ? ee(this.hash()) : "not available (unsigned)";
    } catch {
      e = "error";
    }
    let n = "";
    try {
      n = this.isSigned().toString();
    } catch {
      e = "error";
    }
    let r = "";
    try {
      r = this.common.hardfork();
    } catch {
      r = "error";
    }
    let i = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
    return i += `signed=${n} hf=${r}`, i;
  }
  // eslint-disable-next-line class-methods-use-this
  _ecsign(e, n, r) {
    const i = Ot.sign(e, n), s = i.toCompactRawBytes(), o = s.subarray(0, 32), a = s.subarray(32, 64), d = r === void 0 ? BigInt(i.recovery + 27) : BigInt(i.recovery + 35) + BigInt(r) * BigInt(2);
    return { r: o, s: a, v: d };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromSerializedTx(e, n = {}) {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromTxData(e, n = {}) {
  }
}
const Co = 2, oo = fe(Co.toString(16).padStart(2, "0"));
class cn extends or {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(e, n = {}) {
    return new cn(e, n);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   */
  static fromSerializedTx(e, n = {}) {
    if (!ks(e.subarray(0, 1), oo))
      throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${Co}, received: ${ee(e.subarray(0, 1))}`);
    const r = We.RLP.decode(e.subarray(1));
    if (!Array.isArray(r))
      throw new Error("Invalid serialized tx input: must be array");
    return cn.fromValuesArray(r, n);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   */
  static fromValuesArray(e, n = {}) {
    if (e.length !== 9 && e.length !== 12)
      throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
    const [r, i, s, o, a, d, u, c, f, h, g, b] = e;
    return this._validateNotArray({ chainId: r, v: h }), da({
      nonce: i,
      maxPriorityFeePerGas: s,
      maxFeePerGas: o,
      gasLimit: a,
      value: u,
      v: h,
      r: g,
      s: b
    }), new cn({
      chainId: ue(r),
      nonce: i,
      maxPriorityFeePerGas: s,
      maxFeePerGas: o,
      gasLimit: a,
      to: d,
      value: u,
      data: c,
      accessList: f ?? [],
      v: h !== void 0 ? ue(h) : void 0,
      // EIP2930 supports v's with value 0 (empty Uint8Array)
      r: g,
      s: b
    }, n);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(e, n = {}) {
    var r;
    super(Object.assign(Object.assign({}, e), { type: Co }), n), this.DEFAULT_HARDFORK = "london";
    const { chainId: i, accessList: s, maxFeePerGas: o, maxPriorityFeePerGas: a } = e;
    if (this.common = this._getCommon(n.common, i), this.chainId = this.common.chainId(), !this.common.isActivatedEIP(1559))
      throw new Error("EIP-1559 not enabled on Common");
    this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
    const d = Gd(s ?? []);
    if (this.accessList = d.accessList, this.AccessListJSON = d.AccessListJSON, qd(this.accessList), this.maxFeePerGas = ue(he(o === "" ? "0x" : o)), this.maxPriorityFeePerGas = ue(he(a === "" ? "0x" : a)), this._validateCannotExceedMaxInteger({
      maxFeePerGas: this.maxFeePerGas,
      maxPriorityFeePerGas: this.maxPriorityFeePerGas
    }), or._validateNotArray(e), this.gasLimit * this.maxFeePerGas > Yr) {
      const c = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
      throw new Error(c);
    }
    if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
      const c = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
      throw new Error(c);
    }
    this._validateYParity(), this._validateHighS(), ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this);
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork())
      return this.cache.dataFee.value;
    let e = super.getDataFee();
    return e += BigInt(Vd(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
      value: e,
      hardfork: this.common.hardfork()
    }), e;
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   * @param baseFee The base fee of the block (will be set to 0 if not provided)
   */
  getUpfrontCost(e = BigInt(0)) {
    const n = this.maxPriorityFeePerGas, r = this.maxFeePerGas - e, s = (n < r ? n : r) + e;
    return this.gasLimit * s + this.value;
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-1559 transaction, in order.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   *
   * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
   */
  raw() {
    return [
      ne(this.chainId),
      ne(this.nonce),
      ne(this.maxPriorityFeePerGas),
      ne(this.maxFeePerGas),
      ne(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      ne(this.value),
      this.data,
      this.accessList,
      this.v !== void 0 ? ne(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? ne(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? ne(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the EIP-1559 transaction.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */
  serialize() {
    const e = this.raw();
    return Me(oo, We.RLP.encode(e));
  }
  /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */
  getMessageToSign(e = !0) {
    const n = this.raw().slice(0, 9), r = Me(oo, We.RLP.encode(n));
    return e ? Re(r) : r;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const e = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(e);
    }
    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Re(this.serialize())), this.cache.hash) : Re(this.serialize());
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    return this.getMessageToSign();
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    if (!this.isSigned()) {
      const s = this._errorMsg("Cannot call this method if transaction is not signed");
      throw new Error(s);
    }
    const e = this.getMessageToVerifySignature(), { v: n, r, s: i } = this;
    this._validateHighS();
    try {
      return Na(
        e,
        n + BigInt(27),
        // Recover the 27 which was stripped from ecsign
        ne(r),
        ne(i)
      );
    } catch {
      const o = this._errorMsg("Invalid Signature");
      throw new Error(o);
    }
  }
  _processSignature(e, n, r) {
    const i = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return cn.fromTxData({
      chainId: this.chainId,
      nonce: this.nonce,
      maxPriorityFeePerGas: this.maxPriorityFeePerGas,
      maxFeePerGas: this.maxFeePerGas,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      accessList: this.accessList,
      v: e - BigInt(27),
      // This looks extremely hacky: /util actually adds 27 to the value, the recovery bit is either 0 or 1.
      r: ue(n),
      s: ue(r)
    }, i);
  }
  /**
   * Returns an object with the JSON representation of the transaction
   */
  toJSON() {
    const e = zd(this.accessList);
    return {
      chainId: pe(this.chainId),
      nonce: pe(this.nonce),
      maxPriorityFeePerGas: pe(this.maxPriorityFeePerGas),
      maxFeePerGas: pe(this.maxFeePerGas),
      gasLimit: pe(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: pe(this.value),
      data: ee(this.data),
      accessList: e,
      v: this.v !== void 0 ? pe(this.v) : void 0,
      r: this.r !== void 0 ? pe(this.r) : void 0,
      s: this.s !== void 0 ? pe(this.s) : void 0
    };
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    let e = this._getSharedErrorPostfix();
    return e += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`, e;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(e) {
    return `${e} (${this.errorStr()})`;
  }
}
const No = 1, ao = fe(No.toString(16).padStart(2, "0"));
class un extends or {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(e, n = {}) {
    return new un(e, n);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   */
  static fromSerializedTx(e, n = {}) {
    if (!ks(e.subarray(0, 1), ao))
      throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${No}, received: ${ee(e.subarray(0, 1))}`);
    const r = We.RLP.decode(Uint8Array.from(e.subarray(1)));
    if (!Array.isArray(r))
      throw new Error("Invalid serialized tx input: must be array");
    return un.fromValuesArray(r, n);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   */
  static fromValuesArray(e, n = {}) {
    if (e.length !== 8 && e.length !== 11)
      throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
    const [r, i, s, o, a, d, u, c, f, h, g] = e;
    this._validateNotArray({ chainId: r, v: f }), da({ nonce: i, gasPrice: s, gasLimit: o, value: d, v: f, r: h, s: g });
    const b = [];
    return new un({
      chainId: ue(r),
      nonce: i,
      gasPrice: s,
      gasLimit: o,
      to: a,
      value: d,
      data: u,
      accessList: c ?? b,
      v: f !== void 0 ? ue(f) : void 0,
      // EIP2930 supports v's with value 0 (empty Uint8Array)
      r: h,
      s: g
    }, n);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(e, n = {}) {
    var r;
    super(Object.assign(Object.assign({}, e), { type: No }), n), this.DEFAULT_HARDFORK = "berlin";
    const { chainId: i, accessList: s, gasPrice: o } = e;
    if (this.common = this._getCommon(n.common, i), this.chainId = this.common.chainId(), !this.common.isActivatedEIP(2930))
      throw new Error("EIP-2930 not enabled on Common");
    this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
    const a = Gd(s ?? []);
    if (this.accessList = a.accessList, this.AccessListJSON = a.AccessListJSON, qd(this.accessList), this.gasPrice = ue(he(o === "" ? "0x" : o)), this._validateCannotExceedMaxInteger({
      gasPrice: this.gasPrice
    }), or._validateNotArray(e), this.gasPrice * this.gasLimit > Yr) {
      const u = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
      throw new Error(u);
    }
    this._validateYParity(), this._validateHighS(), ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this);
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork())
      return this.cache.dataFee.value;
    let e = super.getDataFee();
    return e += BigInt(Vd(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
      value: e,
      hardfork: this.common.hardfork()
    }), e;
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   */
  getUpfrontCost() {
    return this.gasLimit * this.gasPrice + this.value;
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-2930 transaction, in order.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   *
   * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty UINT8ARRAY values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
   */
  raw() {
    return [
      ne(this.chainId),
      ne(this.nonce),
      ne(this.gasPrice),
      ne(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      ne(this.value),
      this.data,
      this.accessList,
      this.v !== void 0 ? ne(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? ne(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? ne(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the EIP-2930 transaction.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */
  serialize() {
    const e = this.raw();
    return Me(ao, We.RLP.encode(e));
  }
  /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */
  getMessageToSign(e = !0) {
    const n = this.raw().slice(0, 8), r = Me(ao, We.RLP.encode(n));
    return e ? Re(r) : r;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const e = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(e);
    }
    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Re(this.serialize())), this.cache.hash) : Re(this.serialize());
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    return this.getMessageToSign();
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    if (!this.isSigned()) {
      const s = this._errorMsg("Cannot call this method if transaction is not signed");
      throw new Error(s);
    }
    const e = this.getMessageToVerifySignature(), { v: n, r, s: i } = this;
    this._validateHighS();
    try {
      return Na(
        e,
        n + BigInt(27),
        // Recover the 27 which was stripped from ecsign
        ne(r),
        ne(i)
      );
    } catch {
      const o = this._errorMsg("Invalid Signature");
      throw new Error(o);
    }
  }
  _processSignature(e, n, r) {
    const i = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return un.fromTxData({
      chainId: this.chainId,
      nonce: this.nonce,
      gasPrice: this.gasPrice,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      accessList: this.accessList,
      v: e - BigInt(27),
      // This looks extremely hacky: /util actually adds 27 to the value, the recovery bit is either 0 or 1.
      r: ue(n),
      s: ue(r)
    }, i);
  }
  /**
   * Returns an object with the JSON representation of the transaction
   */
  toJSON() {
    const e = zd(this.accessList);
    return {
      chainId: pe(this.chainId),
      nonce: pe(this.nonce),
      gasPrice: pe(this.gasPrice),
      gasLimit: pe(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: pe(this.value),
      data: ee(this.data),
      accessList: e,
      v: this.v !== void 0 ? pe(this.v) : void 0,
      r: this.r !== void 0 ? pe(this.r) : void 0,
      s: this.s !== void 0 ? pe(this.s) : void 0
    };
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    var e, n;
    let r = this._getSharedErrorPostfix();
    return r += ` gasPrice=${this.gasPrice} accessListCount=${(n = (e = this.accessList) === null || e === void 0 ? void 0 : e.length) !== null && n !== void 0 ? n : 0}`, r;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(e) {
    return `${e} (${this.errorStr()})`;
  }
}
const Ob = 0;
function Qc(t, e) {
  const n = Number(t), r = Number(e) * 2;
  return n === r + 35 || n === r + 36;
}
class Gt extends or {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
   *
   * Notes:
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(e, n = {}) {
    return new Gt(e, n);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   */
  static fromSerializedTx(e, n = {}) {
    const r = We.RLP.decode(e);
    if (!Array.isArray(r))
      throw new Error("Invalid serialized tx input. Must be array");
    return this.fromValuesArray(r, n);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   */
  static fromValuesArray(e, n = {}) {
    if (e.length !== 6 && e.length !== 9)
      throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
    const [r, i, s, o, a, d, u, c, f] = e;
    return da({ nonce: r, gasPrice: i, gasLimit: s, value: a, v: u, r: c, s: f }), new Gt({
      nonce: r,
      gasPrice: i,
      gasLimit: s,
      to: o,
      value: a,
      data: d,
      v: u,
      r: c,
      s: f
    }, n);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(e, n = {}) {
    var r;
    if (super(Object.assign(Object.assign({}, e), { type: Ob }), n), this.common = this._validateTxV(this.v, n.common), this.gasPrice = ue(he(e.gasPrice === "" ? "0x" : e.gasPrice)), this.gasPrice * this.gasLimit > Yr) {
      const s = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
      throw new Error(s);
    }
    this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice }), or._validateNotArray(e), this.common.gteHardfork("spuriousDragon") && (this.isSigned() ? Qc(this.v, this.common.chainId()) && this.activeCapabilities.push(dt.EIP155ReplayProtection) : this.activeCapabilities.push(dt.EIP155ReplayProtection)), ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this);
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the legacy transaction, in order.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   *
   * For legacy txs this is also the correct format to add transactions
   * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
   * for typed txs).
   *
   * For an unsigned tx this method returns the empty Uint8Array values
   * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
   * representation have a look at {@link Transaction.getMessageToSign}.
   */
  raw() {
    return [
      ne(this.nonce),
      ne(this.gasPrice),
      ne(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      ne(this.value),
      this.data,
      this.v !== void 0 ? ne(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? ne(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? ne(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the legacy transaction.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link Transaction.getMessageToSign}.
   */
  serialize() {
    return We.RLP.encode(this.raw());
  }
  _getMessageToSign() {
    const e = [
      ne(this.nonce),
      ne(this.gasPrice),
      ne(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      ne(this.value),
      this.data
    ];
    return this.supports(dt.EIP155ReplayProtection) && (e.push(he(this.common.chainId())), e.push(as(he(0))), e.push(as(he(0)))), e;
  }
  getMessageToSign(e = !0) {
    const n = this._getMessageToSign();
    return e ? Re(We.RLP.encode(n)) : n;
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value : (Object.isFrozen(this) && (this.cache.dataFee = {
      value: super.getDataFee(),
      hardfork: this.common.hardfork()
    }), super.getDataFee());
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   */
  getUpfrontCost() {
    return this.gasLimit * this.gasPrice + this.value;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const e = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(e);
    }
    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Re(We.RLP.encode(this.raw()))), this.cache.hash) : Re(We.RLP.encode(this.raw()));
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    if (!this.isSigned()) {
      const n = this._errorMsg("This transaction is not signed");
      throw new Error(n);
    }
    const e = this._getMessageToSign();
    return Re(We.RLP.encode(e));
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    const e = this.getMessageToVerifySignature(), { v: n, r, s: i } = this;
    this._validateHighS();
    try {
      return Na(e, n, ne(r), ne(i), this.supports(dt.EIP155ReplayProtection) ? this.common.chainId() : void 0);
    } catch {
      const o = this._errorMsg("Invalid Signature");
      throw new Error(o);
    }
  }
  /**
   * Process the v, r, s values from the `sign` method of the base transaction.
   */
  _processSignature(e, n, r) {
    let i = e;
    this.supports(dt.EIP155ReplayProtection) && (i += this.common.chainId() * BigInt(2) + BigInt(8));
    const s = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return Gt.fromTxData({
      nonce: this.nonce,
      gasPrice: this.gasPrice,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      v: i,
      r: ue(n),
      s: ue(r)
    }, s);
  }
  /**
   * Returns an object with the JSON representation of the transaction.
   */
  toJSON() {
    return {
      nonce: pe(this.nonce),
      gasPrice: pe(this.gasPrice),
      gasLimit: pe(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: pe(this.value),
      data: ee(this.data),
      v: this.v !== void 0 ? pe(this.v) : void 0,
      r: this.r !== void 0 ? pe(this.r) : void 0,
      s: this.s !== void 0 ? pe(this.s) : void 0
    };
  }
  /**
   * Validates tx's `v` value
   */
  _validateTxV(e, n) {
    let r;
    const i = e !== void 0 ? Number(e) : void 0;
    if (i !== void 0 && i < 37 && i !== 27 && i !== 28)
      throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${i}`);
    if (i !== void 0 && i !== 0 && (!n || n.gteHardfork("spuriousDragon")) && i !== 27 && i !== 28)
      if (n) {
        if (!Qc(BigInt(i), n.chainId()))
          throw new Error(`Incompatible EIP155-based V ${i} and chain id ${n.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
      } else {
        let s;
        (i - 35) % 2 === 0 ? s = 35 : s = 36, r = BigInt(i - s) / BigInt(2);
      }
    return this._getCommon(n, r);
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    let e = this._getSharedErrorPostfix();
    return e += ` gasPrice=${this.gasPrice}`, e;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(e) {
    return `${e} (${this.errorStr()})`;
  }
}
const co = /* @__PURE__ */ new Map();
class Tn {
  // It is not possible to instantiate a TransactionFactory object.
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {
  }
  static typeToInt(e) {
    return Number(ue(he(e)));
  }
  static registerTransactionType(e, n) {
    const r = Tn.typeToInt(e);
    co.set(r, n);
  }
  /**
   * Create a transaction from a `txData` object
   *
   * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
   * @param txOptions - Options to pass on to the constructor of the transaction
   */
  static fromTxData(e, n = {}) {
    if (!("type" in e) || e.type === void 0)
      return Gt.fromTxData(e, n);
    const r = Tn.typeToInt(e.type);
    if (r === 0)
      return Gt.fromTxData(e, n);
    if (r === 1)
      return un.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        e,
        n
      );
    if (r === 2)
      return cn.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        e,
        n
      );
    const i = co.get(r);
    if (i != null && i.fromTxData)
      return i.fromTxData(e, n);
    throw new Error(`Tx instantiation with type ${r} not supported`);
  }
  /**
   * This method tries to decode serialized data.
   *
   * @param data - The data Uint8Array
   * @param txOptions - The transaction options
   */
  static fromSerializedData(e, n = {}) {
    if (e[0] <= 127)
      switch (e[0]) {
        case 1:
          return un.fromSerializedTx(e, n);
        case 2:
          return cn.fromSerializedTx(e, n);
        default: {
          const r = co.get(Number(e[0]));
          if (r != null && r.fromSerializedTx)
            return r.fromSerializedTx(e, n);
          throw new Error(`TypedTransaction with ID ${e[0]} unknown`);
        }
      }
    else
      return Gt.fromSerializedTx(e, n);
  }
  /**
   * When decoding a BlockBody, in the transactions field, a field is either:
   * A Uint8Array (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
   * A Uint8Array[] (Legacy Transaction)
   * This method returns the right transaction.
   *
   * @param data - A Uint8Array or Uint8Array[]
   * @param txOptions - The transaction options
   */
  static fromBlockBodyData(e, n = {}) {
    if (Jt(e))
      return this.fromSerializedData(e, n);
    if (Array.isArray(e))
      return Gt.fromValuesArray(e, n);
    throw new Error("Cannot decode transaction: unknown type input");
  }
}
var Fs = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const hr = (t, e) => {
  let n;
  if (!e && typeof t == "string" && se(t) && t.length !== 66)
    throw new oc();
  try {
    n = Jt(t) ? t : gt(t);
  } catch {
    throw new Yh();
  }
  if (!e && n.byteLength !== 32)
    throw new oc();
  return n;
}, Ma = (t, e = !1) => {
  const n = se(t) ? t : it(t), r = fe(n), i = fe(ed(`Ethereum Signed Message:
${r.byteLength}`)), s = e ? r : Me(i, r);
  return qe(s);
}, Lb = (t, e) => {
  const n = hr(e), r = Ot.sign(t.substring(2), n), i = r.toCompactRawBytes(), s = r.r.toString(16).padStart(64, "0"), o = r.s.toString(16).padStart(64, "0"), a = r.recovery + 27;
  return {
    messageHash: t,
    v: _e(a),
    r: `0x${s}`,
    s: `0x${o}`,
    signature: `${ee(i)}${a.toString(16)}`
  };
}, Qd = (t, e) => {
  const n = Ma(t), { messageHash: r, v: i, r: s, s: o, signature: a } = Lb(n, e);
  return {
    message: t,
    messageHash: r,
    v: i,
    r: s,
    s: o,
    signature: a
  };
}, Db = (t, e) => Fs(void 0, void 0, void 0, function* () {
  const n = t.sign(fe(e));
  if (E(n.v) || E(n.r) || E(n.s))
    throw new wo("Signer Error");
  const r = n.validate(!0);
  if (r.length > 0) {
    let o = "Signer Error ";
    for (const a of r)
      o += `${o} ${a}.`;
    throw new wo(o);
  }
  const i = ee(n.serialize()), s = qe(i);
  return {
    messageHash: ee(n.getMessageToSign(!0)),
    v: `0x${n.v.toString(16)}`,
    r: `0x${n.r.toString(16).padStart(64, "0")}`,
    s: `0x${n.s.toString(16).padStart(64, "0")}`,
    rawTransaction: i,
    transactionHash: ee(s)
  };
}), Fb = (t) => {
  if (E(t))
    throw new mp();
  const e = Tn.fromSerializedData(fe(t));
  return yt(e.getSenderAddress().toString());
}, Mo = (t, e, n, r, i) => {
  if (typeof t == "object") {
    const f = `${t.r}${t.s.slice(2)}${t.v.slice(2)}`;
    return Mo(t.messageHash, f, n);
  }
  if (typeof e == "string" && typeof n == "string" && !E(r)) {
    const f = `${n}${r.slice(2)}${e.slice(2)}`;
    return Mo(t, f, i);
  }
  if (E(e))
    throw new Xh("signature string undefined");
  const s = 130, o = n ? t : Ma(t);
  let a = parseInt(e.substring(s), 16);
  a > 26 && (a -= 27);
  const d = Ot.Signature.fromCompact(e.slice(2, s)).addRecoveryBit(a).recoverPublicKey(o.replace("0x", "")).toRawBytes(!1), u = qe(d.subarray(1));
  return yt(`0x${u.slice(-40)}`);
}, Hs = (t) => {
  const e = hr(t), n = Ot.getPublicKey(e, !1), i = qe(n.slice(1)).slice(-40);
  return yt(`0x${i}`);
}, Hb = (t, e) => {
  const n = hr(t);
  return `0x${ee(Ot.getPublicKey(n, e)).slice(4)}`;
}, $d = (t, e, n) => Fs(void 0, void 0, void 0, function* () {
  var r, i, s, o, a, d, u;
  const c = hr(t);
  let f;
  if (n != null && n.salt ? f = typeof n.salt == "string" ? fe(n.salt) : n.salt : f = Wr(32), !(ca(e) || Jt(e)))
    throw new np();
  const h = typeof e == "string" ? fe(it(e)) : e;
  let g;
  if (n != null && n.iv) {
    if (g = typeof n.iv == "string" ? fe(n.iv) : n.iv, g.length !== 16)
      throw new rp();
  } else
    g = Wr(16);
  const b = (r = n == null ? void 0 : n.kdf) !== null && r !== void 0 ? r : "scrypt";
  let p, m;
  if (b === "pbkdf2") {
    if (m = {
      dklen: (i = n == null ? void 0 : n.dklen) !== null && i !== void 0 ? i : 32,
      salt: ee(f).replace("0x", ""),
      c: (s = n == null ? void 0 : n.c) !== null && s !== void 0 ? s : 262144,
      prf: "hmac-sha256"
    }, m.c < 1e3)
      throw new ip();
    p = kd(h, f, m.c, m.dklen, "sha256");
  } else if (b === "scrypt")
    m = {
      n: (o = n == null ? void 0 : n.n) !== null && o !== void 0 ? o : 8192,
      r: (a = n == null ? void 0 : n.r) !== null && a !== void 0 ? a : 8,
      p: (d = n == null ? void 0 : n.p) !== null && d !== void 0 ? d : 1,
      dklen: (u = n == null ? void 0 : n.dklen) !== null && u !== void 0 ? u : 32,
      salt: ee(f).replace("0x", "")
    }, p = Rd(h, f, m.n, m.p, m.r, m.dklen);
  else
    throw new gu();
  const l = yield Ia(c, p.slice(0, 16), g, "aes-128-ctr"), A = ee(l).slice(2), w = qe(Me(p.slice(16, 32), l)).replace("0x", "");
  return {
    version: 3,
    id: Aa(),
    address: Hs(c).toLowerCase().replace("0x", ""),
    crypto: {
      ciphertext: A,
      cipherparams: {
        iv: ee(g).replace("0x", "")
      },
      cipher: "aes-128-ctr",
      kdf: b,
      kdfparams: m,
      mac: w
    }
  };
}), Oa = (t, e) => {
  const n = hr(t, e);
  return {
    address: Hs(n),
    privateKey: ee(n),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signTransaction: (r) => {
      throw new wo("Do not have network access to sign the transaction");
    },
    sign: (r) => Qd(typeof r == "string" ? r : JSON.stringify(r), n),
    encrypt: (r, i) => Fs(void 0, void 0, void 0, function* () {
      return $d(n, r, i);
    })
  };
}, jb = () => {
  const t = Ot.utils.randomPrivateKey();
  return Oa(`${ee(t)}`);
}, Ub = (t, e, n) => Fs(void 0, void 0, void 0, function* () {
  const r = typeof t == "object" ? t : JSON.parse(n ? t.toLowerCase() : t);
  if (G.validateJSONSchema(k0, r), r.version !== 3)
    throw new tp();
  const i = typeof e == "string" ? fe(it(e)) : e;
  G.validate(["bytes"], [i]);
  let s;
  if (r.crypto.kdf === "scrypt") {
    const u = r.crypto.kdfparams, c = typeof u.salt == "string" ? fe(u.salt) : u.salt;
    s = Rd(i, c, u.n, u.p, u.r, u.dklen);
  } else if (r.crypto.kdf === "pbkdf2") {
    const u = r.crypto.kdfparams, c = typeof u.salt == "string" ? fe(u.salt) : u.salt;
    s = kd(i, c, u.c, u.dklen, "sha256");
  } else
    throw new gu();
  const o = fe(r.crypto.ciphertext);
  if (qe(Me(s.slice(16, 32), o)).replace("0x", "") !== r.crypto.mac)
    throw new ep();
  const d = yield Oy(fe(r.crypto.ciphertext), s.slice(0, 16), fe(r.crypto.cipherparams.iv));
  return Oa(d);
});
var $c = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const Gb = 1e3;
class qb {
  constructor(e) {
    this._requestManager = e, this._requests = /* @__PURE__ */ new Map();
  }
  get requests() {
    return [...this._requests.values()].map((e) => e.payload);
  }
  add(e) {
    const n = En(e), r = new ns();
    return this._requests.set(n.id, { payload: n, promise: r }), r;
  }
  // eslint-disable-next-line class-methods-use-this
  execute(e) {
    return $c(this, void 0, void 0, function* () {
      var n;
      if (this.requests.length === 0)
        return Promise.resolve([]);
      const r = new ns({
        timeout: (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Gb,
        eagerStart: !0,
        timeoutMessage: "Batch request timeout"
      });
      return this._processBatchRequest(r).catch((i) => r.reject(i)), r.catch((i) => {
        i instanceof yu && this._abortAllRequests("Batch request timeout"), r.reject(i);
      }), r;
    });
  }
  _processBatchRequest(e) {
    return $c(this, void 0, void 0, function* () {
      var n, r;
      const i = yield this._requestManager.sendBatch([...this._requests.values()].map((a) => a.payload));
      if (i.length !== this._requests.size)
        throw this._abortAllRequests("Invalid batch response"), new ut(i, `Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${i.length}`);
      const s = this.requests.map((a) => a.id).map(Number).sort((a, d) => a - d), o = i.map((a) => a.id).map(Number).sort((a, d) => a - d);
      if (JSON.stringify(s) !== JSON.stringify(o))
        throw this._abortAllRequests("Invalid batch response"), new ut(i, `Batch request mismatch the results. Requests: [${s.join()}], Responses: [${o.join()}]`);
      for (const a of i)
        qt(a) ? (n = this._requests.get(a.id)) === null || n === void 0 || n.promise.resolve(a.result) : zt(a) && ((r = this._requests.get(a.id)) === null || r === void 0 || r.promise.reject(a.error));
      e.resolve(i);
    });
  }
  _abortAllRequests(e) {
    for (const { promise: n } of this._requests.values())
      n.reject(new fp(e));
  }
}
var zb = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class He extends Sy {
  constructor(e) {
    var n;
    if (super(), this.providers = hn.providers, q(e) || typeof e == "string" && e.trim() !== "" || rs(e)) {
      this._requestManager = new hn(e), this._subscriptionManager = new is(this._requestManager, {});
      return;
    }
    const { config: r, provider: i, requestManager: s, subscriptionManager: o, registeredSubscriptions: a, accountProvider: d, wallet: u, requestManagerMiddleware: c } = e;
    this.setConfig(r ?? {}), this._requestManager = s ?? new hn(i, (n = r == null ? void 0 : r.enableExperimentalFeatures) === null || n === void 0 ? void 0 : n.useSubscriptionWhenCheckingBlockTimeout, c), o ? this._subscriptionManager = o : this._subscriptionManager = new is(this.requestManager, a ?? {}), d && (this._accountProvider = d), u && (this._wallet = u);
  }
  get requestManager() {
    return this._requestManager;
  }
  /**
   * Will return the current subscriptionManager ({@link Web3SubscriptionManager})
   */
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  get wallet() {
    return this._wallet;
  }
  get accountProvider() {
    return this._accountProvider;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromContextObject(...e) {
    return new this(...e.reverse());
  }
  getContextObject() {
    var e;
    return {
      config: this.config,
      provider: this.provider,
      requestManager: this.requestManager,
      subscriptionManager: this.subscriptionManager,
      registeredSubscriptions: (e = this.subscriptionManager) === null || e === void 0 ? void 0 : e.registeredSubscriptions,
      providers: this.providers,
      wallet: this.wallet,
      accountProvider: this.accountProvider
    };
  }
  /**
   * Use to create new object of any type extended by `Web3Context`
   * and link it to current context. This can be used to initiate a global context object
   * and then use it to create new objects of any type extended by `Web3Context`.
   */
  use(e, ...n) {
    const r = new e(...n, this.getContextObject());
    return this.on(In.CONFIG_CHANGE, (i) => {
      r.setConfig({ [i.name]: i.newValue });
    }), this[e.name] = r, r;
  }
  /**
   * Link current context to another context.
   */
  link(e) {
    this.setConfig(e.config), this._requestManager = e.requestManager, this.provider = e.provider, this._subscriptionManager = e.subscriptionManager, this._wallet = e.wallet, this._accountProvider = e._accountProvider, e.on(In.CONFIG_CHANGE, (n) => {
      this.setConfig({ [n.name]: n.newValue });
    });
  }
  // eslint-disable-next-line no-use-before-define
  registerPlugin(e) {
    if (this[e.pluginNamespace] !== void 0)
      throw new lp(e.pluginNamespace);
    const n = {
      [e.pluginNamespace]: e
    };
    n[e.pluginNamespace].link(this), Object.assign(this, n);
  }
  /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3 = new Web3Context("http://localhost:8545");
   * console.log(web3.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */
  get provider() {
    return this.currentProvider;
  }
  /**
   * Will set the current provider.
   *
   * @param provider - The provider to set
   *
   * Accepted providers are of type {@link SupportedProviders}
   * @example
   * ```ts
   *  const web3Context = new web3ContextContext("http://localhost:8545");
   * web3Context.provider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */
  set provider(e) {
    this.requestManager.setProvider(e);
  }
  /**
   * Will return the current provider. (The same as `provider`)
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3Context = new Web3Context("http://localhost:8545");
   * console.log(web3Context.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */
  get currentProvider() {
    return this.requestManager.provider;
  }
  /**
   * Will set the current provider. (The same as `provider`)
   *
   * @param provider - {@link SupportedProviders} The provider to set
   *
   * @example
   * ```ts
   *  const web3Context = new Web3Context("http://localhost:8545");
   * web3Context.currentProvider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */
  set currentProvider(e) {
    this.requestManager.setProvider(e);
  }
  /**
   * Will return the givenProvider if available.
   *
   * When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.
   */
  // eslint-disable-next-line class-methods-use-this
  get givenProvider() {
    return He.givenProvider;
  }
  /**
   * Will set the provider.
   *
   * @param provider - {@link SupportedProviders} The provider to set
   * @returns Returns true if the provider was set
   */
  setProvider(e) {
    return this.provider = e, !0;
  }
  setRequestManagerMiddleware(e) {
    this.requestManager.setMiddleware(e);
  }
  /**
   * Will return the {@link Web3BatchRequest} constructor.
   */
  get BatchRequest() {
    return qb.bind(void 0, this._requestManager);
  }
  /**
   * This method allows extending the web3 modules.
   * Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.
   */
  extend(e) {
    var n;
    return e.property && !this[e.property] && (this[e.property] = {}), (n = e.methods) === null || n === void 0 || n.forEach((r) => {
      const i = (...s) => zb(this, void 0, void 0, function* () {
        return this.requestManager.send({
          method: r.call,
          params: s
        });
      });
      e.property ? this[e.property][r.name] = i : this[r.name] = i;
    }), this;
  }
}
He.providers = hn.providers;
class Ae {
  /**
   * Construct a direct or indirect IBAN that has conversion methods and validity checks.
   * If the provided string was not of either the length of a direct IBAN (34 or 35),
   * nor the length of an indirect IBAN (20), an Error will be thrown ('Invalid IBAN was provided').
   *
   * @param iban - a Direct or an Indirect IBAN
   * @returns - Iban instance
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
   * > Iban { _iban: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS' }
   * ```
   */
  constructor(e) {
    if (this.toAddress = () => {
      if (this.isDirect()) {
        const n = this._iban.slice(4), r = Ae._parseInt(n, 36), i = $r(r, 40);
        return yt(i);
      }
      throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35");
    }, Ae.isIndirect(e) || Ae.isDirect(e))
      this._iban = e;
    else
      throw new Error("Invalid IBAN was provided");
  }
  /**
   * A static method that checks if an IBAN is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isDirect("XE81ETHXREGGAVOFYORK");
   * > false
   * ```
   */
  static isDirect(e) {
    return e.length === 34 || e.length === 35;
  }
  /**
   * An instance method that checks if iban number is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isDirect();
   * > false
   * ```
   */
  isDirect() {
    return Ae.isDirect(this._iban);
  }
  /**
   * A static method that checks if an IBAN is Indirect.
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isIndirect("XE81ETHXREGGAVOFYORK");
   * > true
   * ```
   */
  static isIndirect(e) {
    return e.length === 20;
  }
  /**
   * check if iban number if indirect
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isIndirect();
   * > true
   * ```
   */
  isIndirect() {
    return Ae.isIndirect(this._iban);
  }
  /**
   * This method could be used to check if a given string is valid IBAN object.
   * Note: this is also available as a method at an Iban instance.
   *
   * @param iban - a string to be checked if it is in IBAN
   * @returns - true if it is valid IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.isValid("XE81ETHXREGGAVOFYORK");
   * > true
   *
   * web3.eth.Iban.isValid("XE82ETHXREGGAVOFYORK");
   * > false // because the checksum is incorrect
   * ```
   */
  static isValid(e) {
    return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(e) && Ae._mod9710(Ae._iso13616Prepare(e)) === 1;
  }
  /**
   * Should be called to check if the early provided IBAN is correct.
   * Note: this is also available as a static method.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isValid();
   * > true
   *
   * const iban = new web3.eth.Iban("XE82ETHXREGGAVOFYORK");
   * iban.isValid();
   * > false // because the checksum is incorrect
   * ```
   */
  isValid() {
    return Ae.isValid(this._iban);
  }
  /**
   * Convert the passed BBAN to an IBAN for this country specification.
   * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
   * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
   *
   * @param bban - the BBAN to convert to IBAN
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromBban('ETHXREGGAVOFYORK');
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static fromBban(e) {
    const n = "XE", i = `0${(98 - this._mod9710(this._iso13616Prepare(`${n}00${e}`))).toString()}`.slice(-2);
    return new Ae(`${n}${i}${e}`);
  }
  /**
   * Should be used to create IBAN object for given institution and identifier
   *
   * @param options - an object holds the `institution` and the `identifier` which will be composed to create an `Iban` object from.
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.createIndirect({
   *     institution: "XREG",
   *     identifier: "GAVOFYORK"
   * });
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static createIndirect(e) {
    return Ae.fromBban(`ETH${e.institution}${e.identifier}`);
  }
  /**
   * This method should be used to create iban object from an Ethereum address.
   *
   * @param address - an Ethereum address
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static fromAddress(e) {
    if (!Ge(e))
      throw new ta(e);
    const r = BigInt(ci(e)).toString(36), i = $r(r, 15);
    return Ae.fromBban(i.toUpperCase());
  }
  /**
   * This method should be used to create IBAN address from an Ethereum address
   *
   * @param address - an Ethereum address
   * @return the equivalent IBAN address
   *
   * @example
   * ```ts
   * web3.eth.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"
   * ```
   */
  static toIban(e) {
    return Ae.fromAddress(e).toString();
  }
  /**
   * Should be called to get client identifier within institution
   *
   * @return the client of the IBAN instance.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.client();
   * > 'GAVOFYORK'
   * ```
   */
  client() {
    return this.isIndirect() ? this._iban.slice(11) : "";
  }
  /**
   * Returns the IBAN checksum of the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.checksum();
   * > "81"
   * ```
   *
   */
  checksum() {
    return this._iban.slice(2, 4);
  }
  /**
   * Returns institution identifier from the early provided  IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.institution();
   * > 'XREG'
   * ```
   */
  institution() {
    return this.isIndirect() ? this._iban.slice(7, 11) : "";
  }
  /**
   * Simply returns the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
   * iban.toString();
   * > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'
   * ```
   */
  toString() {
    return this._iban;
  }
}
Ae._iso13616Prepare = (t) => {
  const r = t.toUpperCase();
  return `${r.slice(4)}${r.slice(0, 4)}`.split("").map((s) => {
    const o = s.charCodeAt(0);
    return o >= 65 && o <= 90 ? o - 65 + 10 : s;
  }).join("");
};
Ae._parseInt = (t, e) => [...t].reduce((n, r) => BigInt(parseInt(r, e)) + BigInt(e) * n, BigInt(0));
Ae._mod9710 = (t) => {
  let e = t, n;
  for (; e.length > 2; )
    n = e.slice(0, 9), e = `${(parseInt(n, 10) % 97).toString()}${e.slice(n.length)}`;
  return parseInt(e, 10) % 97;
};
Ae.toAddress = (t) => new Ae(t).toAddress();
var uo = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
}, Zd;
class Wd extends Ms {
  constructor(e) {
    super(), this[Zd] = "Promise", this._promise = new Promise(e);
  }
  then(e, n) {
    return uo(this, void 0, void 0, function* () {
      return this._promise.then(e, n);
    });
  }
  catch(e) {
    return uo(this, void 0, void 0, function* () {
      return this._promise.catch(e);
    });
  }
  finally(e) {
    return uo(this, void 0, void 0, function* () {
      return this._promise.finally(e);
    });
  }
  on(e, n) {
    return super.on(e, n), this;
  }
  once(e, n) {
    return super.once(e, n), this;
  }
}
Zd = Symbol.toStringTag;
var fo = {}, Zc;
function Vb() {
  return Zc || (Zc = 1, function(t, e) {
    if (t.setImmediate)
      return;
    var n = 1, r = {}, i = !1, s = t.document, o;
    function a(A) {
      typeof A != "function" && (A = new Function("" + A));
      for (var w = new Array(arguments.length - 1), x = 0; x < w.length; x++)
        w[x] = arguments[x + 1];
      var I = { callback: A, args: w };
      return r[n] = I, o(n), n++;
    }
    function d(A) {
      delete r[A];
    }
    function u(A) {
      var w = A.callback, x = A.args;
      switch (x.length) {
        case 0:
          w();
          break;
        case 1:
          w(x[0]);
          break;
        case 2:
          w(x[0], x[1]);
          break;
        case 3:
          w(x[0], x[1], x[2]);
          break;
        default:
          w.apply(e, x);
          break;
      }
    }
    function c(A) {
      if (i)
        setTimeout(c, 0, A);
      else {
        var w = r[A];
        if (w) {
          i = !0;
          try {
            u(w);
          } finally {
            d(A), i = !1;
          }
        }
      }
    }
    function f() {
      o = function(A) {
        process.nextTick(function() {
          c(A);
        });
      };
    }
    function h() {
      if (t.postMessage && !t.importScripts) {
        var A = !0, w = t.onmessage;
        return t.onmessage = function() {
          A = !1;
        }, t.postMessage("", "*"), t.onmessage = w, A;
      }
    }
    function g() {
      var A = "setImmediate$" + Math.random() + "$", w = function(x) {
        x.source === t && typeof x.data == "string" && x.data.indexOf(A) === 0 && c(+x.data.slice(A.length));
      };
      t.addEventListener ? t.addEventListener("message", w, !1) : t.attachEvent("onmessage", w), o = function(x) {
        t.postMessage(A + x, "*");
      };
    }
    function b() {
      var A = new MessageChannel();
      A.port1.onmessage = function(w) {
        var x = w.data;
        c(x);
      }, o = function(w) {
        A.port2.postMessage(w);
      };
    }
    function p() {
      var A = s.documentElement;
      o = function(w) {
        var x = s.createElement("script");
        x.onreadystatechange = function() {
          c(w), x.onreadystatechange = null, A.removeChild(x), x = null;
        }, A.appendChild(x);
      };
    }
    function m() {
      o = function(A) {
        setTimeout(c, 0, A);
      };
    }
    var l = Object.getPrototypeOf && Object.getPrototypeOf(t);
    l = l && l.setTimeout ? l : t, {}.toString.call(t.process) === "[object process]" ? f() : h() ? g() : t.MessageChannel ? b() : s && "onreadystatechange" in s.createElement("script") ? p() : m(), l.setImmediate = a, l.clearImmediate = d;
  }(typeof self > "u" ? typeof Gn > "u" ? fo : Gn : self)), fo;
}
Vb();
var $ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function Qb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_protocolVersion",
      params: []
    });
  });
}
function Kd(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_syncing",
      params: []
    });
  });
}
function $b(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_coinbase",
      params: []
    });
  });
}
function Zb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_mining",
      params: []
    });
  });
}
function Wb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_hashrate",
      params: []
    });
  });
}
function Kb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_gasPrice",
      params: []
    });
  });
}
function Jb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_maxPriorityFeePerGas",
      params: []
    });
  });
}
function Yb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_accounts",
      params: []
    });
  });
}
function Xb(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_blockNumber",
      params: []
    });
  });
}
function eA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "blockNumberOrTag"], [e, n]), t.send({
      method: "eth_getBalance",
      params: [e, n]
    });
  });
}
function tA(t, e, n, r) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "hex", "blockNumberOrTag"], [e, n, r]), t.send({
      method: "eth_getStorageAt",
      params: [e, n, r]
    });
  });
}
function nA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "blockNumberOrTag"], [e, n]), t.send({
      method: "eth_getTransactionCount",
      params: [e, n]
    });
  });
}
function rA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32"], [e]), t.send({
      method: "eth_getBlockTransactionCountByHash",
      params: [e]
    });
  });
}
function iA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag"], [e]), t.send({
      method: "eth_getBlockTransactionCountByNumber",
      params: [e]
    });
  });
}
function sA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32"], [e]), t.send({
      method: "eth_getUncleCountByBlockHash",
      params: [e]
    });
  });
}
function oA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag"], [e]), t.send({
      method: "eth_getUncleCountByBlockNumber",
      params: [e]
    });
  });
}
function aA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "blockNumberOrTag"], [e, n]), t.send({
      method: "eth_getCode",
      params: [e, n]
    });
  });
}
function cA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "hex"], [e, n]), t.send({
      method: "eth_sign",
      params: [e, n]
    });
  });
}
function uA(t, e) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_signTransaction",
      params: [e]
    });
  });
}
function dA(t, e) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_sendTransaction",
      params: [e]
    });
  });
}
function Jd(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["hex"], [e]), t.send({
      method: "eth_sendRawTransaction",
      params: [e]
    });
  });
}
function fA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag"], [n]), t.send({
      method: "eth_call",
      params: [e, n]
    });
  });
}
function lA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag"], [n]), t.send({
      method: "eth_estimateGas",
      params: [e, n]
    });
  });
}
function hA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32", "bool"], [e, n]), t.send({
      method: "eth_getBlockByHash",
      params: [e, n]
    });
  });
}
function Yd(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag", "bool"], [e, n]), t.send({
      method: "eth_getBlockByNumber",
      params: [e, n]
    });
  });
}
function pA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32"], [e]), t.send({
      method: "eth_getTransactionByHash",
      params: [e]
    });
  });
}
function mA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32", "hex"], [e, n]), t.send({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [e, n]
    });
  });
}
function gA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag", "hex"], [e, n]), t.send({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [e, n]
    });
  });
}
function yA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32"], [e]), t.send({
      method: "eth_getTransactionReceipt",
      params: [e]
    });
  });
}
function bA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes32", "hex"], [e, n]), t.send({
      method: "eth_getUncleByBlockHashAndIndex",
      params: [e, n]
    });
  });
}
function AA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag", "hex"], [e, n]), t.send({
      method: "eth_getUncleByBlockNumberAndIndex",
      params: [e, n]
    });
  });
}
function wA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["filter"], [e]), t.send({
      method: "eth_newFilter",
      params: [e]
    });
  });
}
function _A(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_newBlockFilter",
      params: []
    });
  });
}
function vA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_newPendingTransactionFilter",
      params: []
    });
  });
}
function EA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["hex"], [e]), t.send({
      method: "eth_uninstallFilter",
      params: [e]
    });
  });
}
function IA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["hex"], [e]), t.send({
      method: "eth_getFilterChanges",
      params: [e]
    });
  });
}
function xA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["hex"], [e]), t.send({
      method: "eth_getFilterLogs",
      params: [e]
    });
  });
}
function TA(t, e) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["filter"], [e]), t.send({
      method: "eth_getLogs",
      params: [e]
    });
  });
}
function SA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_getWork",
      params: []
    });
  });
}
function kA(t, e, n, r) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["bytes8", "bytes32", "bytes32"], [e, n, r]), t.send({
      method: "eth_submitWork",
      params: [e, n, r]
    });
  });
}
function RA(t, e, n, r) {
  return $(this, void 0, void 0, function* () {
    G.validate(["hex", "blockNumberOrTag"], [e, n]);
    for (const i of r)
      G.validate(["number"], [i]);
    return t.send({
      method: "eth_feeHistory",
      params: [e, n, r]
    });
  });
}
function BA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_pendingTransactions",
      params: []
    });
  });
}
function PA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_requestAccounts",
      params: []
    });
  });
}
function CA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "eth_chainId",
      params: []
    });
  });
}
function NA(t, e, n, r) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address", "bytes32[]", "blockNumberOrTag"], [e, n, r]), t.send({
      method: "eth_getProof",
      params: [e, n, r]
    });
  });
}
function MA(t) {
  return $(this, void 0, void 0, function* () {
    return t.send({
      method: "web3_clientVersion",
      params: []
    });
  });
}
function OA(t, e, n) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["blockNumberOrTag"], [n]), t.send({
      method: "eth_createAccessList",
      params: [e, n]
    });
  });
}
function LA(t, e, n, r = !1) {
  return $(this, void 0, void 0, function* () {
    return G.validate(["address"], [e]), t.send({
      method: `eth_signTypedData${r ? "" : "_v4"}`,
      params: [e, n]
    });
  });
}
var La = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function DA(t) {
  return La(this, void 0, void 0, function* () {
    return t.send({
      method: "net_version",
      params: []
    });
  });
}
function FA(t) {
  return La(this, void 0, void 0, function* () {
    return t.send({
      method: "net_peerCount",
      params: []
    });
  });
}
function HA(t) {
  return La(this, void 0, void 0, function* () {
    return t.send({
      method: "net_listening",
      params: []
    });
  });
}
var Lt = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const jA = (t) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_listAccounts",
    params: []
  });
}), UA = (t, e) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_newAccount",
    params: [e]
  });
}), GA = (t, e, n, r) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_unlockAccount",
    params: [e, n, r]
  });
}), qA = (t, e) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_lockAccount",
    params: [e]
  });
}), zA = (t, e, n) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_importRawKey",
    params: [e, n]
  });
}), VA = (t, e, n) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_sendTransaction",
    params: [e, n]
  });
}), QA = (t, e, n) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_signTransaction",
    params: [e, n]
  });
}), $A = (t, e, n, r) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_sign",
    params: [e, n, r]
  });
}), ZA = (t, e, n) => Lt(void 0, void 0, void 0, function* () {
  return t.send({
    method: "personal_ecRecover",
    params: [e, n]
  });
}), Wc = {
  type: "object",
  properties: {
    accessList: {
      type: "null"
    },
    maxFeePerGas: {
      type: "null"
    },
    maxPriorityFeePerGas: {
      type: "null"
    }
  }
}, Kc = {
  type: "object",
  properties: {
    maxFeePerGas: {
      type: "null"
    },
    maxPriorityFeePerGas: {
      type: "null"
    }
  }
}, Jc = {
  type: "object",
  properties: {
    gasPrice: {
      type: "null"
    }
  }
}, gi = (t, e, n) => {
  try {
    G.validateJSONSchema(t, e);
  } catch (r) {
    throw r instanceof Yn ? new Hp(r.errors, n) : r;
  }
}, WA = (t) => {
  var e, n;
  const r = t;
  if (!E(r.type)) {
    let s;
    switch (r.type) {
      case "0x0":
        s = Wc;
        break;
      case "0x1":
        s = Kc;
        break;
      case "0x2":
        s = Jc;
        break;
      default:
        return T({ format: "uint" }, r.type, Z);
    }
    return gi(s, r, r.type), T({ format: "uint" }, r.type, Z);
  }
  if (!E(r.maxFeePerGas) || !E(r.maxPriorityFeePerGas))
    return gi(Jc, r, "0x2"), "0x2";
  if (!E(r.accessList))
    return gi(Kc, r, "0x1"), "0x1";
  const i = (e = r.hardfork) !== null && e !== void 0 ? e : (n = r.common) === null || n === void 0 ? void 0 : n.hardfork;
  if (!E(i)) {
    const s = Object.keys(kr).indexOf(i);
    if (s >= Object.keys(kr).indexOf("london"))
      return E(r.gasPrice) ? "0x2" : "0x0";
    if (s === Object.keys(kr).indexOf("berlin"))
      return "0x0";
  }
  if (!E(r.gasPrice))
    return gi(Wc, r, "0x0"), "0x0";
}, KA = (t, e) => {
  var n;
  return ((n = e == null ? void 0 : e.transactionTypeParser) !== null && n !== void 0 ? n : WA)(t);
}, JA = (t) => t[0] > 127 ? "0x0" : Nt(t[0]), YA = {
  type: "object",
  properties: {
    address: {
      format: "address"
    },
    storageKeys: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
}, Da = {
  type: "array",
  items: Object.assign({}, YA)
}, XA = {
  type: "object",
  properties: {
    accessList: Object.assign({}, Da),
    gasUsed: {
      type: "string"
    }
  }
}, Yc = {
  type: "string",
  enum: ["goerli", "kovan", "mainnet", "rinkeby", "ropsten", "sepolia"]
}, Xc = {
  type: "string",
  enum: [
    "arrowGlacier",
    "berlin",
    "byzantium",
    "chainstart",
    "constantinople",
    "dao",
    "homestead",
    "istanbul",
    "london",
    "merge",
    "muirGlacier",
    "petersburg",
    "shanghai",
    "spuriousDragon",
    "tangerineWhistle"
  ]
}, ew = {
  type: "object",
  properties: {
    name: {
      format: "string"
    },
    networkId: {
      format: "uint"
    },
    chainId: {
      format: "uint"
    }
  }
}, Xd = {
  type: "object",
  properties: {
    from: {
      format: "address"
    },
    to: {
      oneOf: [{ format: "address" }, { type: "null" }]
    },
    value: {
      format: "uint"
    },
    gas: {
      format: "uint"
    },
    gasPrice: {
      format: "uint"
    },
    effectiveGasPrice: {
      format: "uint"
    },
    type: {
      format: "uint"
    },
    maxFeePerGas: {
      format: "uint"
    },
    maxPriorityFeePerGas: {
      format: "uint"
    },
    accessList: Object.assign({}, Da),
    data: {
      format: "bytes"
    },
    input: {
      format: "bytes"
    },
    nonce: {
      format: "uint"
    },
    chain: Object.assign({}, Yc),
    hardfork: Object.assign({}, Xc),
    chainId: {
      format: "uint"
    },
    networkId: {
      format: "uint"
    },
    common: {
      type: "object",
      properties: {
        customChain: Object.assign({}, ew),
        baseChain: Object.assign({}, Yc),
        hardfork: Object.assign({}, Xc)
      }
    },
    gasLimit: {
      format: "uint"
    },
    v: {
      format: "uint"
    },
    r: {
      format: "bytes32"
    },
    s: {
      format: "bytes32"
    }
  }
}, Oo = {
  type: "object",
  properties: Object.assign(Object.assign({}, Xd.properties), { blockHash: {
    format: "bytes32"
  }, blockNumber: {
    format: "uint"
  }, hash: {
    format: "bytes32"
  }, transactionIndex: {
    format: "uint"
  }, from: {
    format: "address"
  }, to: {
    oneOf: [{ format: "address" }, { type: "null" }]
  }, value: {
    format: "uint"
  }, gas: {
    format: "uint"
  }, gasPrice: {
    format: "uint"
  }, effectiveGasPrice: {
    format: "uint"
  }, type: {
    format: "uint"
  }, maxFeePerGas: {
    format: "uint"
  }, maxPriorityFeePerGas: {
    format: "uint"
  }, accessList: Object.assign({}, Da), data: {
    format: "bytes"
  }, input: {
    format: "bytes"
  }, nonce: {
    format: "uint"
  }, gasLimit: {
    format: "uint"
  }, v: {
    format: "uint"
  }, r: {
    format: "bytes32"
  }, s: {
    format: "bytes32"
  } })
}, ef = {
  type: "object",
  properties: {
    index: {
      format: "uint"
    },
    validatorIndex: {
      format: "uint"
    },
    address: {
      format: "address"
    },
    amount: {
      format: "uint"
    }
  }
}, cs = {
  type: "object",
  properties: {
    baseFeePerGas: {
      format: "uint"
    },
    blobGasUsed: {
      format: "uint"
    },
    difficulty: {
      format: "uint"
    },
    excessBlobGas: {
      format: "uint"
    },
    extraData: {
      format: "bytes"
    },
    gasLimit: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    hash: {
      format: "bytes32"
    },
    logsBloom: {
      format: "bytes256"
    },
    miner: {
      format: "bytes"
    },
    mixHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    number: {
      format: "uint"
    },
    parentBeaconBlockRoot: {
      format: "bytes32"
    },
    parentHash: {
      format: "bytes32"
    },
    receiptsRoot: {
      format: "bytes32"
    },
    sha3Uncles: {
      format: "bytes32"
    },
    size: {
      format: "uint"
    },
    stateRoot: {
      format: "bytes32"
    },
    timestamp: {
      format: "uint"
    },
    totalDifficulty: {
      format: "uint"
    },
    transactions: {
      oneOf: [
        {
          type: "array",
          items: Object.assign({}, Oo)
        },
        {
          type: "array",
          items: {
            format: "bytes32"
          }
        }
      ]
    },
    transactionsRoot: {
      format: "bytes32"
    },
    uncles: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    withdrawals: {
      type: "array",
      items: Object.assign({}, ef)
    },
    withdrawalsRoot: {
      format: "bytes32"
    }
  }
}, tw = {
  type: "object",
  properties: {
    author: {
      format: "bytes32"
    },
    excessDataGas: {
      format: "uint"
    },
    baseFeePerGas: {
      format: "uint"
    },
    blobGasUsed: {
      format: "uint"
    },
    difficulty: {
      format: "uint"
    },
    excessBlobGas: {
      format: "uint"
    },
    extraData: {
      format: "bytes"
    },
    gasLimit: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    hash: {
      format: "bytes32"
    },
    logsBloom: {
      format: "bytes256"
    },
    miner: {
      format: "bytes"
    },
    mixHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    number: {
      format: "uint"
    },
    parentBeaconBlockRoot: {
      format: "bytes32"
    },
    parentHash: {
      format: "bytes32"
    },
    receiptsRoot: {
      format: "bytes32"
    },
    sha3Uncles: {
      format: "bytes32"
    },
    size: {
      format: "uint"
    },
    stateRoot: {
      format: "bytes32"
    },
    timestamp: {
      format: "uint"
    },
    totalDifficulty: {
      format: "uint"
    },
    transactions: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    transactionsRoot: {
      format: "bytes32"
    },
    uncles: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    withdrawals: {
      type: "array",
      items: Object.assign({}, ef)
    },
    withdrawalsRoot: {
      format: "bytes32"
    }
  }
}, pr = {
  type: "object",
  properties: {
    removed: {
      format: "bool"
    },
    logIndex: {
      format: "uint"
    },
    transactionIndex: {
      format: "uint"
    },
    transactionHash: {
      format: "bytes32"
    },
    blockHash: {
      format: "bytes32"
    },
    blockNumber: {
      format: "uint"
    },
    address: {
      format: "address"
    },
    data: {
      format: "bytes"
    },
    topics: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
}, nw = {
  type: "object",
  properties: {
    startingBlock: {
      format: "string"
    },
    currentBlock: {
      format: "string"
    },
    highestBlock: {
      format: "string"
    },
    knownStates: {
      format: "string"
    },
    pulledStates: {
      format: "string"
    }
  }
}, mr = {
  type: "object",
  properties: {
    transactionHash: {
      format: "bytes32"
    },
    transactionIndex: {
      format: "uint"
    },
    blockHash: {
      format: "bytes32"
    },
    blockNumber: {
      format: "uint"
    },
    from: {
      format: "address"
    },
    to: {
      format: "address"
    },
    cumulativeGasUsed: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    effectiveGasPrice: {
      format: "uint"
    },
    contractAddress: {
      format: "address"
    },
    logs: {
      type: "array",
      items: Object.assign({}, pr)
    },
    logsBloom: {
      format: "bytes"
    },
    root: {
      format: "bytes"
    },
    status: {
      format: "uint"
    },
    type: {
      format: "uint"
    }
  }
}, rw = {
  type: "object",
  properties: {
    messageHash: {
      format: "bytes"
    },
    r: {
      format: "bytes32"
    },
    s: {
      format: "bytes32"
    },
    v: {
      format: "bytes"
    },
    message: {
      format: "bytes"
    },
    signature: {
      format: "bytes"
    }
  }
}, iw = {
  type: "object",
  properties: {
    oldestBlock: {
      format: "uint"
    },
    baseFeePerGas: {
      type: "array",
      items: {
        format: "uint"
      }
    },
    reward: {
      type: "array",
      items: {
        type: "array",
        items: {
          format: "uint"
        }
      }
    },
    gasUsedRatio: {
      type: "array",
      items: {
        type: "number"
      }
    }
  }
}, sw = {
  type: "object",
  properties: {
    key: {
      format: "bytes32"
    },
    value: {
      format: "uint"
    },
    proof: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
}, ow = {
  type: "object",
  properties: {
    balance: {
      format: "uint"
    },
    codeHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    storageHash: {
      format: "bytes32"
    },
    accountProof: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    storageProof: {
      type: "array",
      items: Object.assign({}, sw)
    }
  }
};
function je(t, e = Be, n = {
  transactionSchema: Oo,
  fillInputAndData: !1
}) {
  var r, i;
  let s = Yt({}, t);
  if (E(t == null ? void 0 : t.common) || (s.common = Object.assign({}, t.common), E((r = t.common) === null || r === void 0 ? void 0 : r.customChain) || (s.common.customChain = Object.assign({}, t.common.customChain))), s = T((i = n.transactionSchema) !== null && i !== void 0 ? i : Oo, s, e), !E(s.data) && !E(s.input) && // Converting toHex is accounting for data and input being Uint8Arrays
  // since comparing Uint8Array is not as straightforward as comparing strings
  Nt(s.data) !== Nt(s.input))
    throw new _u({
      data: ee(s.data),
      input: ee(s.input)
    });
  return n.fillInputAndData && (E(s.data) ? E(s.input) || (s.data = s.input) : s.input = s.data), E(s.gasLimit) || (s.gas = s.gasLimit, delete s.gasLimit), s;
}
function aw(t, e, n = {
  fillInputAndData: !1
}) {
  return {
    raw: T({ format: "bytes" }, t, e),
    tx: je(Object.assign(Object.assign({}, Tn.fromSerializedData(fe(t)).toJSON()), { hash: ee(tr(fe(t))), type: JA(fe(t)) }), e, {
      fillInputAndData: n.fillInputAndData,
      transactionSchema: n.transactionSchema
    })
  };
}
var Fa = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function Ha(t, e) {
  return Fa(this, void 0, void 0, function* () {
    const n = yield DA(t.requestManager);
    return T({ format: "uint" }, n, e);
  });
}
function cw(t, e) {
  return Fa(this, void 0, void 0, function* () {
    const n = yield FA(t.requestManager);
    return T({ format: "uint" }, n, e);
  });
}
const uw = (t) => Fa(void 0, void 0, void 0, function* () {
  return HA(t.requestManager);
});
var lo = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class tf extends He {
  /**
   * Gets the current network ID
   *
   * @param returnFormat - Return format
   * @returns A Promise of the network ID.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getId();
   * > 1
   * ```
   */
  getId(e = this.defaultReturnFormat) {
    return lo(this, void 0, void 0, function* () {
      return Ha(this, e);
    });
  }
  /**
   * Get the number of peers connected to.
   *
   * @param returnFormat - Return format
   * @returns A promise of the number of the peers connected to.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getPeerCount();
   * > 0
   * ```
   */
  getPeerCount(e = this.defaultReturnFormat) {
    return lo(this, void 0, void 0, function* () {
      return cw(this, e);
    });
  }
  /**
   * Check if the node is listening for peers
   *
   * @returns A promise of a boolean if the node is listening to peers
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.isListening();
   * > true
   * ```
   */
  isListening() {
    return lo(this, void 0, void 0, function* () {
      return uw(this);
    });
  }
}
const ar = "ALLEVENTS", Lo = {
  name: ar,
  signature: "",
  type: "event",
  inputs: []
}, js = { bytes: Bt.HEX, number: Ke.NUMBER };
var nf = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function dw(t, e, n) {
  return nf(this, void 0, void 0, function* () {
    var r, i, s, o;
    const a = yield Cf(e, e.defaultBlock, !1, Z);
    if (E(a.baseFeePerGas))
      throw new Op();
    let d;
    if (E(t.gasPrice) && BigInt(a.baseFeePerGas) === BigInt(0) && (d = yield Za(e, n)), !E(t.gasPrice) || !E(d)) {
      const u = T({ format: "uint" }, (r = t.gasPrice) !== null && r !== void 0 ? r : d, n);
      return {
        maxPriorityFeePerGas: u,
        maxFeePerGas: u
      };
    }
    return {
      maxPriorityFeePerGas: T({ format: "uint" }, (i = t.maxPriorityFeePerGas) !== null && i !== void 0 ? i : e.defaultMaxPriorityFeePerGas, n),
      maxFeePerGas: T({ format: "uint" }, (s = t.maxFeePerGas) !== null && s !== void 0 ? s : BigInt(a.baseFeePerGas) * BigInt(2) + BigInt((o = t.maxPriorityFeePerGas) !== null && o !== void 0 ? o : e.defaultMaxPriorityFeePerGas), n)
    };
  });
}
function rf(t, e, n) {
  return nf(this, void 0, void 0, function* () {
    const r = sf(t, e);
    if (!E(r)) {
      if (r.startsWith("-"))
        throw new dc(r);
      if (Number(r) < 0 || Number(r) > 127)
        throw new dc(r);
      if (E(t.gasPrice) && (r === "0x0" || r === "0x1"))
        return {
          gasPrice: yield Za(e, n),
          maxPriorityFeePerGas: void 0,
          maxFeePerGas: void 0
        };
      if (r === "0x2")
        return Object.assign({ gasPrice: void 0 }, yield dw(t, e, n));
    }
  });
}
var ja = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const Do = (t, e, n, r) => {
  if (n !== void 0 && t in n && n[t] !== void 0) {
    if (typeof n[t] == "string" && Ge(n[t]))
      return n[t];
    if (!se(n[t]) && Yu(n[t])) {
      if (e.wallet) {
        const i = e.wallet.get(T({ format: "uint" }, n[t], js));
        if (!E(i))
          return i.address;
        throw new fc();
      }
      throw new fc();
    } else
      throw t === "from" ? new gp(n.from) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new yp(n.to)
      );
  }
  if (t === "from") {
    if (!E(r))
      return Hs(r);
    if (!E(e.defaultAccount))
      return e.defaultAccount;
  }
}, fw = (t, e, ...n) => ja(void 0, [t, e, ...n], void 0, function* (r, i, s = r.defaultReturnFormat) {
  if (E(i))
    throw new Mp();
  return Mf(r, i, r.defaultBlock, s);
}), sf = (t, e) => {
  const n = KA(t, e);
  if (!E(n))
    return n;
  if (!E(e.defaultTransactionType))
    return T({ format: "uint" }, e.defaultTransactionType, Z);
};
function lw(t) {
  return ja(this, void 0, void 0, function* () {
    var e, n;
    let r = T(Xd, t.transaction, t.web3Context.defaultReturnFormat);
    if (E(r.from) && (r.from = Do("from", t.web3Context, void 0, t.privateKey)), E(r.nonce) && (r.nonce = yield fw(t.web3Context, r.from, Z)), E(r.value) && (r.value = "0x0"), E(r.data))
      E(r.input) ? r.input = "0x" : r.input.startsWith("0x") || (r.input = `0x${r.input}`);
    else {
      if (!E(r.input) && r.data !== r.input)
        throw new _u({
          data: ee(r.data),
          input: ee(r.input)
        });
      r.data.startsWith("0x") || (r.data = `0x${r.data}`);
    }
    if (E(r.common)) {
      if (t.web3Context.defaultCommon) {
        const i = t.web3Context.defaultCommon, s = i.customChain.chainId, o = i.customChain.networkId, a = i.customChain.name;
        r.common = Object.assign(Object.assign({}, i), { customChain: { chainId: s, networkId: o, name: a } });
      }
      E(r.chain) && (r.chain = t.web3Context.defaultChain), E(r.hardfork) && (r.hardfork = t.web3Context.defaultHardfork);
    }
    if (E(r.chainId) && E((e = r.common) === null || e === void 0 ? void 0 : e.customChain.chainId) && (r.chainId = yield Lf(t.web3Context, Z)), E(r.networkId) && (r.networkId = (n = t.web3Context.defaultNetworkId) !== null && n !== void 0 ? n : yield Ha(t.web3Context, Z)), E(r.gasLimit) && !E(r.gas) && (r.gasLimit = r.gas), r.type = sf(r, t.web3Context), E(r.accessList) && (r.type === "0x1" || r.type === "0x2") && (r.accessList = []), t.fillGasPrice && (r = Object.assign(Object.assign({}, r), yield rf(r, t.web3Context, Z))), E(r.gas) && E(r.gasLimit) && t.fillGasLimit) {
      const i = yield Ja(t.web3Context, r, "latest", Z);
      r = Object.assign(Object.assign({}, r), { gas: T({ format: "uint" }, i, Z) });
    }
    return r;
  });
}
const hw = (t) => ja(void 0, void 0, void 0, function* () {
  var e;
  return ((e = t.web3Context.transactionBuilder) !== null && e !== void 0 ? e : lw)(Object.assign(Object.assign({}, t), { transaction: t.transaction }));
});
var Ua = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function Fo(t, e, n) {
  const r = t.transactionPollingInterval, [i, s] = ld(() => Ua(this, void 0, void 0, function* () {
    let a;
    try {
      a = yield Wa(t, js);
    } catch (u) {
      console.warn("An error happen while trying to get the block number", u);
      return;
    }
    const d = a - e;
    if (d >= t.transactionBlockTimeout)
      return new Iu({
        starterBlockNumber: e,
        numberOfBlocks: d,
        transactionHash: n
      });
  }), r);
  return [s, { clean: () => {
    clearInterval(i);
  } }];
}
function pw(t, e, n) {
  return Ua(this, void 0, void 0, function* () {
    var r;
    let i = !0, s, o;
    function a(u, c) {
      c && console.warn("error happened at subscription. So revert to polling...", c), o.clean(), i = !1;
      const [f, h] = Fo(t, e, n);
      o.clean = h.clean, f.catch((g) => u(g));
    }
    try {
      s = yield (r = t.subscriptionManager) === null || r === void 0 ? void 0 : r.subscribe("newHeads"), o = {
        clean: () => {
          var u;
          s.id && ((u = t.subscriptionManager) === null || u === void 0 || u.removeSubscription(s).then(() => {
          }).catch(() => {
          }));
        }
      };
    } catch {
      return Fo(t, e, n);
    }
    return [new Promise((u, c) => {
      try {
        s.on("data", (f) => {
          if (i = !1, !(f != null && f.number))
            return;
          const h = Number(BigInt(f.number) - BigInt(e));
          h >= t.transactionBlockTimeout && c(new Iu({
            starterBlockNumber: e,
            numberOfBlocks: h,
            transactionHash: n
          }));
        }), s.on("error", (f) => {
          a(c, f);
        });
      } catch (f) {
        a(c, f);
      }
      setTimeout(() => {
        i && a(c);
      }, t.blockHeaderTimeout * 1e3);
    }), o];
  });
}
function of(t, e) {
  return Ua(this, void 0, void 0, function* () {
    var n, r;
    const { provider: i } = t.requestManager;
    let s;
    const o = yield Wa(t, js);
    return !((r = (n = i).supportsSubscriptions) === null || r === void 0) && r.call(n) && t.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout ? s = yield pw(t, o, e) : s = Fo(t, o, e), s;
  });
}
var mw = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function Ho(t, e, n) {
  return mw(this, void 0, void 0, function* () {
    const [r, i] = ba(t.transactionSendTimeout, new Lp({
      numberOfSeconds: t.transactionSendTimeout / 1e3,
      transactionHash: n
    })), [s, o] = yield of(t, n);
    try {
      return yield Promise.race([
        e(),
        // this is the function that will send the transaction
        i,
        // this will throw an error on Transaction Send Timeout
        s
        // this will throw an error on Transaction Block Timeout
      ]);
    } finally {
      clearTimeout(r), o.clean();
    }
  });
}
var eu = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function af(t, e, n, r) {
  return eu(this, void 0, void 0, function* () {
    var i;
    const s = (i = t.transactionReceiptPollingInterval) !== null && i !== void 0 ? i : t.transactionPollingInterval, [o, a] = ya(() => eu(this, void 0, void 0, function* () {
      try {
        return (r ?? Nf)(t, e, n);
      } catch (h) {
        console.warn("An error happen while trying to get the transaction receipt", h);
        return;
      }
    }), s), [d, u] = ba(t.transactionPollingTimeout, new Eu({
      numberOfSeconds: t.transactionPollingTimeout / 1e3,
      transactionHash: e
    })), [c, f] = yield of(t, e);
    try {
      return yield Promise.race([
        o,
        u,
        // this will throw an error on Transaction Polling Timeout
        c
        // this will throw an error on Transaction Block Timeout
      ]);
    } finally {
      d && clearTimeout(d), a && clearInterval(a), f.clean();
    }
  });
}
var gw = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const Ii = ({ web3Context: t, transactionReceipt: e, transactionPromiEvent: n, customTransactionReceiptSchema: r, returnFormat: i }) => {
  var s;
  let o = 1;
  const a = setInterval(() => {
    gw(void 0, void 0, void 0, function* () {
      if (o >= t.transactionConfirmationBlocks) {
        clearInterval(a);
        return;
      }
      const d = yield Yd(t.requestManager, _e(BigInt(e.blockNumber) + BigInt(o)), !1);
      d != null && d.hash && (o += 1, n.emit("confirmation", {
        confirmations: T({ format: "uint" }, o, i),
        receipt: T(r ?? mr, e, i),
        latestBlockHash: T({ format: "bytes32" }, d.hash, i)
      }));
    });
  }, (s = t.transactionReceiptPollingInterval) !== null && s !== void 0 ? s : t.transactionPollingInterval);
};
var tu = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const yw = ({ web3Context: t, transactionReceipt: e, transactionPromiEvent: n, customTransactionReceiptSchema: r, returnFormat: i }) => {
  let s = !0, o;
  setImmediate(() => {
    var a;
    (a = t.subscriptionManager) === null || a === void 0 || a.subscribe("newHeads").then((d) => {
      d.on("data", (u) => tu(void 0, void 0, void 0, function* () {
        var c;
        if (s = !1, !(u != null && u.number) || // For some cases, the on-data event is fired couple times for the same block!
        // This needs investigation but seems to be because of multiple `subscription.on('data'...)` even this should not cause that.
        o === (u == null ? void 0 : u.parentHash))
          return;
        o = u == null ? void 0 : u.parentHash;
        const f = BigInt(u.number) - BigInt(e.blockNumber) + BigInt(1);
        n.emit("confirmation", {
          confirmations: T({ format: "uint" }, f, i),
          receipt: T(r ?? mr, e, i),
          latestBlockHash: T({ format: "bytes32" }, u.parentHash, i)
        }), f >= t.transactionConfirmationBlocks && (yield (c = t.subscriptionManager) === null || c === void 0 ? void 0 : c.removeSubscription(d));
      })), d.on("error", () => tu(void 0, void 0, void 0, function* () {
        var u;
        yield (u = t.subscriptionManager) === null || u === void 0 ? void 0 : u.removeSubscription(d), s = !1, Ii({
          web3Context: t,
          transactionReceipt: e,
          transactionPromiEvent: n,
          customTransactionReceiptSchema: r,
          returnFormat: i
        });
      }));
    }).catch(() => {
      s = !1, Ii({
        web3Context: t,
        transactionReceipt: e,
        customTransactionReceiptSchema: r,
        transactionPromiEvent: n,
        returnFormat: i
      });
    });
  }), setTimeout(() => {
    s && Ii({
      web3Context: t,
      transactionReceipt: e,
      transactionPromiEvent: n,
      returnFormat: i
    });
  }, t.blockHeaderTimeout * 1e3);
};
function bw(t, e, n, r, i, s) {
  if (E(n) || E(n.blockHash))
    throw new Dp({
      receipt: n,
      blockHash: T({ format: "bytes32" }, n == null ? void 0 : n.blockHash, i),
      transactionHash: T({ format: "bytes32" }, r, i)
    });
  if (!n.blockNumber)
    throw new Fp({ receipt: n });
  e.emit("confirmation", {
    confirmations: T({ format: "uint" }, 1, i),
    receipt: T(s ?? mr, n, i),
    latestBlockHash: T({ format: "bytes32" }, n.blockHash, i)
  });
  const o = t.requestManager.provider;
  o && "supportsSubscriptions" in o && o.supportsSubscriptions() ? yw({
    web3Context: t,
    transactionReceipt: n,
    transactionPromiEvent: e,
    customTransactionReceiptSchema: s,
    returnFormat: i
  }) : Ii({
    web3Context: t,
    transactionReceipt: n,
    transactionPromiEvent: e,
    customTransactionReceiptSchema: s,
    returnFormat: i
  });
}
const Us = (t) => !q(t) && typeof t == "object" && !q(t.type) && t.type === "error", Ga = (t) => !q(t) && typeof t == "object" && !q(t.type) && t.type === "event", Gs = (t) => !q(t) && typeof t == "object" && !q(t.type) && t.type === "function", Aw = (t) => !q(t) && typeof t == "object" && !q(t.type) && t.type === "constructor", ww = (t) => typeof t == "object" && typeof t.components > "u" && typeof t.name > "u", cf = (t) => t.includes("[]") ? { type: "tuple[]", name: t.slice(0, -2) } : { type: "tuple", name: t }, uf = (t) => {
  const e = [];
  for (const n of Object.keys(t)) {
    const r = t[n];
    typeof r == "object" ? e.push(Object.assign(Object.assign({}, cf(n)), { components: uf(r) })) : e.push({
      name: n,
      type: t[n]
    });
  }
  return e;
}, jo = (t, e) => {
  const n = [];
  return e.forEach((r) => {
    if (typeof r.components == "object") {
      if (!r.type.startsWith("tuple"))
        throw new te(`Invalid value given "${r.type}". Error: components found but type is not tuple.`);
      const i = r.type.indexOf("["), s = i >= 0 ? r.type.substring(i) : "", o = jo(t, r.components);
      n.push(`(${o.join(",")})${s}`);
    } else
      n.push(r.type);
  }), n;
}, Rt = (t) => {
  var e, n, r, i;
  return Us(t) || Ga(t) || Gs(t) ? !((e = t.name) === null || e === void 0) && e.includes("(") ? t.name : `${(n = t.name) !== null && n !== void 0 ? n : ""}(${jo(!1, (r = t.inputs) !== null && r !== void 0 ? r : []).join(",")})` : `(${jo(!1, (i = t.inputs) !== null && i !== void 0 ? i : []).join(",")})`;
}, _w = (t) => {
  if (typeof t != "string" && !Us(t))
    throw new te("Invalid parameter value in encodeErrorSignature");
  let e;
  return t && (typeof t == "function" || typeof t == "object") ? e = Rt(t) : e = t, qe(e);
}, qa = (t) => {
  if (typeof t != "string" && !Ga(t))
    throw new te("Invalid parameter value in encodeEventSignature");
  let e;
  return t && (typeof t == "function" || typeof t == "object") ? e = Rt(t) : e = t, qe(e);
};
function za(t, e) {
  const n = t.exec(e);
  return n == null ? void 0 : n.groups;
}
var df = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, ff = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, lf = /^\(.+?\).*?$/, vw = Object.defineProperty, Ew = (t, e, n) => e in t ? vw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, vr = (t, e, n) => (Ew(t, typeof e != "symbol" ? e + "" : e, n), n), Iw = "abitype", xw = "0.7.1", De = class extends Error {
  constructor(t, e = {}) {
    var s;
    const n = e.cause instanceof De ? e.cause.details : (s = e.cause) != null && s.message ? e.cause.message : e.details, r = e.cause instanceof De && e.cause.docsPath || e.docsPath, i = [
      t || "An error occurred.",
      "",
      ...e.metaMessages ? [...e.metaMessages, ""] : [],
      ...r ? [`Docs: https://abitype.dev${r}`] : [],
      ...n ? [`Details: ${n}`] : [],
      `Version: ${Iw}@${xw}`
    ].join(`
`);
    super(i), vr(this, "details"), vr(this, "docsPath"), vr(this, "metaMessages"), vr(this, "shortMessage"), vr(this, "name", "AbiTypeError"), e.cause && (this.cause = e.cause), this.details = n, this.docsPath = r, this.metaMessages = e.metaMessages, this.shortMessage = t;
  }
}, hf = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
function pf(t) {
  return hf.test(t);
}
function Tw(t) {
  return za(
    hf,
    t
  );
}
var nu = /* @__PURE__ */ new Set([
  "memory",
  "indexed",
  "storage",
  "calldata"
]), Sw = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
function kw(t, e) {
  return e ? `${e}:${t}` : t;
}
var ho = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]), Rw = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/, Bw = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/, Pw = /^u?int$/;
function us(t, e) {
  var f, h;
  const n = kw(t, e == null ? void 0 : e.type);
  if (ho.has(n))
    return ho.get(n);
  const r = lf.test(t), i = za(
    r ? Bw : Rw,
    t
  );
  if (!i)
    throw new De("Invalid ABI parameter.", {
      details: t
    });
  if (i.name && Nw(i.name))
    throw new De("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `"${i.name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    });
  const s = i.name ? { name: i.name } : {}, o = i.modifier === "indexed" ? { indexed: !0 } : {}, a = (e == null ? void 0 : e.structs) ?? {};
  let d, u = {};
  if (r) {
    d = "tuple";
    const g = Fn(i.type), b = [], p = g.length;
    for (let m = 0; m < p; m++)
      b.push(us(g[m], { structs: a }));
    u = { components: b };
  } else if (i.type in a)
    d = "tuple", u = { components: a[i.type] };
  else if (Pw.test(i.type))
    d = `${i.type}256`;
  else if (d = i.type, (e == null ? void 0 : e.type) !== "struct" && !mf(d))
    throw new De("Unknown type.", {
      metaMessages: [`Type "${d}" is not a valid ABI type.`]
    });
  if (i.modifier) {
    if (!((h = (f = e == null ? void 0 : e.modifiers) == null ? void 0 : f.has) != null && h.call(f, i.modifier)))
      throw new De("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${i.modifier}" not allowed${e != null && e.type ? ` in "${e.type}" type` : ""}.`
        ]
      });
    if (Sw.has(i.modifier) && !Mw(d, !!i.array))
      throw new De("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${i.modifier}" not allowed${e != null && e.type ? ` in "${e.type}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${i.modifier}" was given.`
        ]
      });
  }
  const c = {
    type: `${d}${i.array ?? ""}`,
    ...s,
    ...o,
    ...u
  };
  return ho.set(n, c), c;
}
function Fn(t, e = [], n = "", r = 0) {
  if (t === "") {
    if (n === "")
      return e;
    if (r !== 0)
      throw new De("Unbalanced parentheses.", {
        metaMessages: [
          `"${n.trim()}" has too many ${r > 0 ? "opening" : "closing"} parentheses.`
        ],
        details: `Depth "${r}"`
      });
    return [...e, n.trim()];
  }
  const i = t.length;
  for (let s = 0; s < i; s++) {
    const o = t[s], a = t.slice(s + 1);
    switch (o) {
      case ",":
        return r === 0 ? Fn(a, [...e, n.trim()]) : Fn(a, e, `${n}${o}`, r);
      case "(":
        return Fn(a, e, `${n}${o}`, r + 1);
      case ")":
        return Fn(a, e, `${n}${o}`, r - 1);
      default:
        return Fn(a, e, `${n}${o}`, r);
    }
  }
  return [];
}
function mf(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || df.test(t) || ff.test(t);
}
var Cw = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Nw(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || t === "tuple" || df.test(t) || ff.test(t) || Cw.test(t);
}
function Mw(t, e) {
  return e || t === "bytes" || t === "string" || t === "tuple";
}
function Ow(t) {
  const e = {}, n = t.length;
  for (let o = 0; o < n; o++) {
    const a = t[o];
    if (!pf(a))
      continue;
    const d = Tw(a);
    if (!d)
      throw new De("Invalid struct signature.", {
        details: a
      });
    const u = d.properties.split(";"), c = [], f = u.length;
    for (let h = 0; h < f; h++) {
      const b = u[h].trim();
      if (!b)
        continue;
      const p = us(b, {
        type: "struct"
      });
      c.push(p);
    }
    if (!c.length)
      throw new De("Invalid struct signature.", {
        details: a,
        metaMessages: ["No properties exist."]
      });
    e[d.name] = c;
  }
  const r = {}, i = Object.entries(e), s = i.length;
  for (let o = 0; o < s; o++) {
    const [a, d] = i[o];
    r[a] = gf(d, e);
  }
  return r;
}
var Lw = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;
function gf(t, e, n = /* @__PURE__ */ new Set()) {
  const r = [], i = t.length;
  for (let s = 0; s < i; s++) {
    const o = t[s];
    if (lf.test(o.type))
      r.push(o);
    else {
      const d = za(
        Lw,
        o.type
      );
      if (!(d != null && d.type))
        throw new De("Invalid ABI parameter.", {
          details: JSON.stringify(o, null, 2),
          metaMessages: ["ABI parameter type is invalid."]
        });
      const { array: u, type: c } = d;
      if (c in e) {
        if (n.has(c))
          throw new De("Circular reference detected.", {
            metaMessages: [`Struct "${c}" is a circular reference.`]
          });
        r.push({
          ...o,
          type: `tuple${u ?? ""}`,
          components: gf(
            e[c] ?? [],
            e,
            /* @__PURE__ */ new Set([...n, c])
          )
        });
      } else if (mf(c))
        r.push(o);
      else
        throw new De("Unknown type.", {
          metaMessages: [
            `Type "${c}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
          ]
        });
    }
  }
  return r;
}
function Dw(t) {
  let e;
  if (typeof t == "string")
    e = us(t, {
      modifiers: nu
    });
  else {
    const n = Ow(t), r = t.length;
    for (let i = 0; i < r; i++) {
      const s = t[i];
      if (!pf(s)) {
        e = us(s, { modifiers: nu, structs: n });
        break;
      }
    }
  }
  if (!e)
    throw new De("Failed to parse ABI parameter.", {
      details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human.html#parseabiparameter-1"
    });
  return e;
}
const ge = 32;
function Uo(t = 0) {
  var e;
  if (((e = globalThis.Buffer) === null || e === void 0 ? void 0 : e.alloc) !== void 0) {
    const n = globalThis.Buffer.alloc(t);
    return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
  }
  return new Uint8Array(t);
}
function yf(t) {
  var e, n;
  return Object.assign(Object.assign({}, t), { name: (e = t.name) !== null && e !== void 0 ? e : "", components: (n = t.components) === null || n === void 0 ? void 0 : n.map((r) => yf(r)) });
}
function Fw(t) {
  return !q(t) && typeof t == "object" && !q(t.type) && typeof t.type == "string";
}
function bf(t) {
  return t.map((e) => {
    var n;
    if (Fw(e))
      return e;
    if (typeof e == "string")
      return yf(Dw(e.replace(/tuple/, "")));
    if (ww(e)) {
      const r = Object.keys(e)[0], i = cf(r);
      return i.name = (n = i.name) !== null && n !== void 0 ? n : "", Object.assign(Object.assign({}, i), { components: uf(e[r]) });
    }
    throw new te("Invalid abi");
  });
}
function Va(t) {
  const e = t.type.lastIndexOf("["), n = t.type.substring(0, e), r = t.type.substring(e);
  let i = -1;
  if (r !== "[]" && (i = Number(r.slice(1, -1)), isNaN(i)))
    throw new te("Invalid fixed array size", { size: r });
  return {
    param: { type: n, name: "", components: t.components },
    size: i
  };
}
function ds(t) {
  var e, n;
  return t.type === "string" || t.type === "bytes" || t.type.endsWith("[]") ? !0 : t.type === "tuple" ? (n = (e = t.components) === null || e === void 0 ? void 0 : e.some(ds)) !== null && n !== void 0 ? n : !1 : t.type.endsWith("]") ? ds(Va(t).param) : !1;
}
const Af = 20, wf = ge - Af;
function Hw(t, e) {
  if (typeof e != "string")
    throw new te("address type expects string as input type", {
      value: e,
      name: t.name,
      type: t.type
    });
  let n = e.toLowerCase();
  if (n.startsWith("0x") || (n = `0x${n}`), !Ge(n))
    throw new te("provided input is not valid address", {
      value: e,
      name: t.name,
      type: t.type
    });
  const r = kn(n), i = Uo(ge);
  return i.set(r, wf), {
    dynamic: !1,
    encoded: i
  };
}
function jw(t, e) {
  const n = e.subarray(wf, ge);
  if (n.length !== Af)
    throw new te("Invalid decoding input, not enough bytes to decode address", { bytes: e });
  const r = Mt(n);
  return {
    result: yt(r),
    encoded: e.subarray(ge),
    consumed: ge
  };
}
const Wt = /* @__PURE__ */ new Map();
let yi = BigInt(256);
for (let t = 8; t <= 256; t += 8)
  Wt.set(`uint${t}`, {
    min: BigInt(0),
    max: yi - BigInt(1)
  }), Wt.set(`int${t}`, {
    min: -yi / BigInt(2),
    max: yi / BigInt(2) - BigInt(1)
  }), yi *= BigInt(256);
Wt.set("int", Wt.get("int256"));
Wt.set("uint", Wt.get("uint256"));
const _f = BigInt(1) << BigInt(256);
function Uw(t, e = ge) {
  let n;
  return t < 0 ? n = (_f + t).toString(16) : n = t.toString(16), n = er(n, e * 2), kn(n);
}
function Gw(t, e) {
  const n = Mt(t), r = BigInt(n);
  return r <= e ? r : r - _f;
}
function hi(t, e) {
  let n;
  try {
    n = on(e);
  } catch {
    throw new te("provided input is not number value", {
      type: t.type,
      value: e,
      name: t.name
    });
  }
  const r = Wt.get(t.type);
  if (!r)
    throw new te("provided abi contains invalid number datatype", { type: t.type });
  if (n < r.min)
    throw new te("provided input is less then minimum for given type", {
      type: t.type,
      value: e,
      name: t.name,
      minimum: r.min.toString()
    });
  if (n > r.max)
    throw new te("provided input is greater then maximum for given type", {
      type: t.type,
      value: e,
      name: t.name,
      maximum: r.max.toString()
    });
  return {
    dynamic: !1,
    encoded: Uw(n)
  };
}
function cr(t, e) {
  if (e.length < ge)
    throw new te("Not enough bytes left to decode", { param: t, bytesLeft: e.length });
  const n = e.subarray(0, ge), r = Wt.get(t.type);
  if (!r)
    throw new te("provided abi contains invalid number datatype", { type: t.type });
  const i = Gw(n, r.max);
  if (i < r.min)
    throw new te("decoded value is less then minimum for given type", {
      type: t.type,
      value: i,
      name: t.name,
      minimum: r.min.toString()
    });
  if (i > r.max)
    throw new te("decoded value is greater then maximum for given type", {
      type: t.type,
      value: i,
      name: t.name,
      maximum: r.max.toString()
    });
  return {
    result: i,
    encoded: e.subarray(ge),
    consumed: ge
  };
}
function qw(t, e) {
  let n;
  try {
    n = rd(e);
  } catch (r) {
    if (r instanceof na)
      throw new te("provided input is not valid boolean value", {
        type: t.type,
        value: e,
        name: t.name
      });
  }
  return hi({ type: "uint8", name: "" }, Number(n));
}
function zw(t, e) {
  const n = cr({ type: "uint8", name: "" }, e);
  if (n.result > 1 || n.result < 0)
    throw new te("Invalid boolean value encoded", {
      boolBytes: e.subarray(0, ge),
      numberResult: n
    });
  return {
    result: n.result === BigInt(1),
    encoded: n.encoded,
    consumed: ge
  };
}
const Vw = 32;
function vf(t, e) {
  if (typeof e == "string" && e.length % 2 !== 0 && (e += "0"), !Kt(e))
    throw new te("provided input is not valid bytes value", {
      type: t.type,
      value: e,
      name: t.name
    });
  const n = gt(e), [, r] = t.type.split("bytes");
  if (r) {
    if (Number(r) > Vw || Number(r) < 1)
      throw new te("invalid bytes type. Static byte type can have between 1 and 32 bytes", {
        type: t.type
      });
    if (Number(r) < n.length)
      throw new te("provided input size is different than type size", {
        type: t.type,
        value: e,
        name: t.name
      });
    const o = Uo(ge);
    return o.set(n), {
      dynamic: !1,
      encoded: o
    };
  }
  const i = Math.ceil(n.length / ge), s = Uo(ge + i * ge);
  return s.set(hi({ type: "uint32", name: "" }, n.length).encoded), s.set(n, ge), {
    dynamic: !0,
    encoded: s
  };
}
function Ef(t, e) {
  const [, n] = t.type.split("bytes");
  let r = Number(n), i = e, s = 1, o = 0;
  if (!r) {
    const a = cr({ type: "uint32", name: "" }, i);
    r = Number(a.result), o += a.consumed, i = a.encoded, s = Math.ceil(r / ge);
  }
  if (r > e.length)
    throw new te("there is not enough data to decode", {
      type: t.type,
      encoded: e,
      size: r
    });
  return {
    result: ee(i.subarray(0, r)),
    encoded: i.subarray(s * ge),
    consumed: o + s * ge
  };
}
function Qw(t, e) {
  if (typeof e != "string")
    throw new te("invalid input, should be string", { input: e });
  const n = ha(e);
  return vf({ type: "bytes", name: "" }, n);
}
function $w(t, e) {
  const n = Ef({ type: "bytes" }, e);
  return {
    result: Bs(n.result),
    encoded: n.encoded,
    consumed: n.consumed
  };
}
function If(t) {
  let e = 0, n = 0;
  const r = [], i = [];
  for (const s of t)
    s.dynamic ? e += ge : e += s.encoded.length;
  for (const s of t)
    s.dynamic ? (r.push(hi({ type: "uint256", name: "" }, e + n)), i.push(s), n += s.encoded.length) : r.push(s);
  return Me(...r.map((s) => s.encoded), ...i.map((s) => s.encoded));
}
function Zw(t, e) {
  if (!Array.isArray(e))
    throw new te("Expected value to be array", { abi: t, values: e });
  const { size: n, param: r } = Va(t), i = e.map((a) => Go(r, a)), s = n === -1, o = i.length > 0 && i[0].dynamic;
  if (!s && e.length !== n)
    throw new te("Given arguments count doesn't match array length", {
      arrayLength: n,
      argumentsLength: e.length
    });
  if (s || o) {
    const a = If(i);
    if (s) {
      const d = hi({ type: "uint256", name: "" }, i.length).encoded;
      return {
        dynamic: !0,
        encoded: i.length > 0 ? Me(d, a) : d
      };
    }
    return {
      dynamic: !0,
      encoded: a
    };
  }
  return {
    dynamic: !1,
    encoded: Me(...i.map((a) => a.encoded))
  };
}
function Ww(t, e) {
  let { size: n, param: r } = Va(t);
  const i = n === -1;
  let s = 0;
  const o = [];
  let a = e;
  if (i) {
    const u = cr({ type: "uint32", name: "" }, e);
    n = Number(u.result), s = u.consumed, a = u.encoded;
  }
  if (ds(r)) {
    for (let u = 0; u < n; u += 1) {
      const c = cr({ type: "uint32", name: "" }, a.subarray(u * ge));
      s += c.consumed;
      const f = fs(r, a.subarray(Number(c.result)));
      s += f.consumed, o.push(f.result);
    }
    return {
      result: o,
      encoded: a.subarray(s),
      consumed: s
    };
  }
  for (let u = 0; u < n; u += 1) {
    const c = fs(r, e.subarray(s));
    s += c.consumed, o.push(c.result);
  }
  return {
    result: o,
    encoded: e.subarray(s),
    consumed: s
  };
}
function Go(t, e) {
  if (t.type === "string")
    return Qw(t, e);
  if (t.type === "bool")
    return qw(t, e);
  if (t.type === "address")
    return Hw(t, e);
  if (t.type === "tuple")
    return Qa(t, e);
  if (t.type.endsWith("]"))
    return Zw(t, e);
  if (t.type.startsWith("bytes"))
    return vf(t, e);
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return hi(t, e);
  throw new te("Unsupported", {
    param: t,
    value: e
  });
}
function fs(t, e) {
  if (t.type === "string")
    return $w(t, e);
  if (t.type === "bool")
    return zw(t, e);
  if (t.type === "address")
    return jw(t, e);
  if (t.type === "tuple")
    return xf(t, e);
  if (t.type.endsWith("]"))
    return Ww(t, e);
  if (t.type.startsWith("bytes"))
    return Ef(t, e);
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return cr(t, e);
  throw new te("Unsupported", {
    param: t,
    bytes: e
  });
}
function Qa(t, e) {
  var n, r, i;
  let s = !1;
  if (!Array.isArray(e) && typeof e != "object")
    throw new te("param must be either Array or Object", {
      param: t,
      input: e
    });
  const o = e, a = [];
  for (let d = 0; d < ((r = (n = t.components) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0); d += 1) {
    const u = t.components[d];
    let c;
    if (Array.isArray(o)) {
      if (d >= o.length)
        throw new te("input param length missmatch", {
          param: t,
          input: e
        });
      c = Go(u, o[d]);
    } else {
      const f = o[(i = u.name) !== null && i !== void 0 ? i : ""];
      if (f == null)
        throw new te("missing input defined in abi", {
          param: t,
          input: e,
          paramName: u.name
        });
      c = Go(u, f);
    }
    c.dynamic && (s = !0), a.push(c);
  }
  return s ? {
    dynamic: !0,
    encoded: If(a)
  } : {
    dynamic: !1,
    encoded: Me(...a.map((d) => d.encoded))
  };
}
function xf(t, e) {
  const n = {
    __length__: 0
  };
  let r = 0;
  if (!t.components)
    return {
      result: n,
      encoded: e,
      consumed: r
    };
  let i = 0;
  for (const [s, o] of t.components.entries()) {
    let a;
    if (ds(o)) {
      const d = cr({ type: "uint32", name: "" }, e.subarray(r));
      a = fs(o, e.subarray(Number(d.result))), r += d.consumed, i += a.consumed;
    } else
      a = fs(o, e.subarray(r)), r += a.consumed;
    n.__length__ += 1, n[s] = a.result, o.name && o.name !== "" && (n[o.name] = a.result);
  }
  return {
    encoded: e.subarray(r + i),
    result: n,
    consumed: r + i
  };
}
function Kw(t, e, n) {
  const r = bf(t), i = kn(e);
  return xf({ components: r }, i).result;
}
function Tf(t) {
  const e = [];
  return t.forEach((n) => {
    if (Array.isArray(n)) {
      const r = Tf(n);
      e.push({
        type: "tuple",
        components: r,
        name: ""
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      });
    } else
      e.push({ type: Nt(n, !0) });
  }), e;
}
function qs(t, e) {
  if ((t == null ? void 0 : t.length) !== e.length)
    throw new te("Invalid number of values received for given ABI", {
      expected: t == null ? void 0 : t.length,
      received: e.length
    });
  const n = bf(t);
  return Mt(Qa({ type: "tuple", name: "", components: n }, e).encoded);
}
function Jw(t) {
  try {
    const e = Tf(t);
    return Mt(Qa({ type: "tuple", name: "", components: e }, t).encoded);
  } catch {
    throw new te("Could not infer types from given params", {
      params: t
    });
  }
}
const qo = (t, e) => qs([t], [e]), Sf = (t, e, n) => {
  try {
    if (t.length > 0 && (!e || e === "0x" || e === "0X"))
      throw new te("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");
    return Kw(t, `0x${e.replace(/0x/i, "")}`, n);
  } catch (r) {
    throw new te(`Parameter decoding error: ${r.message}`, {
      internalErr: r
    });
  }
}, mn = (t, e) => Sf(t, e, !1), kf = (t, e) => mn([t], e)[0], Xr = (t) => {
  if (typeof t != "string" && !Gs(t))
    throw new te("Invalid parameter value in encodeFunctionSignature");
  let e;
  return t && (typeof t == "function" || typeof t == "object") ? e = Rt(t) : e = t, qe(e).slice(0, 10);
}, Yw = (t, e) => {
  var n;
  if (!Gs(t))
    throw new te("Invalid parameter value in encodeFunctionCall");
  return `${Xr(t)}${qs((n = t.inputs) !== null && n !== void 0 ? n : [], e ?? []).replace("0x", "")}`;
}, zo = (t, e, n = !0) => {
  const r = n && e && e.length >= 10 && e.startsWith("0x") ? e.slice(10) : e;
  if (!t.inputs)
    throw new Pe("No inputs found in the ABI");
  const i = mn([...t.inputs], r);
  return Object.assign(Object.assign({}, i), { __method__: Rt(t) });
}, Xw = (t, e) => {
  if (t.type === "constructor")
    return e;
  if (!e)
    return null;
  const n = e.length >= 2 ? e.slice(2) : e;
  if (!t.outputs)
    return null;
  const r = mn([...t.outputs], n);
  return r.__length__ === 1 ? r[0] : r;
}, e_ = ["bool", "string", "int", "uint", "address", "fixed", "ufixed"], t_ = (t, e) => t === "string" ? e : kf(t, e), Rf = (t, e, n) => {
  const r = Array.isArray(n) ? n : [n], i = {}, s = {};
  for (const [h, g] of t.entries())
    g.indexed ? i[h] = g : s[h] = g;
  const o = e ? Sf(Object.values(s), e, !0) : { __length__: 0 }, a = r.length - Object.keys(i).length, d = Object.values(i).map((h, g) => e_.some((b) => h.type.startsWith(b)) ? t_(h.type, r[g + a]) : r[g + a]), u = { __length__: 0 };
  let c = 0, f = 0;
  for (const [h, g] of t.entries())
    u[h] = g.type === "string" ? "" : void 0, i[h] && (u[h] = d[c], c += 1), s[h] && (u[h] = o[String(f)], f += 1), g.name && (u[g.name] = u[h]), u.__length__ += 1;
  return u;
}, xi = (t, e) => {
  if (e != null && e.data) {
    let n, r, i;
    try {
      const s = e.data.slice(0, 10), o = t.find((a) => _w(a).startsWith(s));
      o != null && o.inputs ? (n = o.name, r = Rt(o), i = mn([...o.inputs], e.data.substring(10))) : e.data.startsWith("0x08c379a0") ? (n = "Error", r = "Error(string)", i = mn([
        {
          name: "message",
          type: "string"
        }
      ], e.data.substring(10))) : e.data.startsWith("0x4e487b71") ? (n = "Panic", r = "Panic(uint256)", i = mn([
        {
          name: "code",
          type: "uint256"
        }
      ], e.data.substring(10))) : console.error("No matching error abi found for error data", e.data);
    } catch (s) {
      console.error(s);
    }
    n && e.setDecodedProperties(n, r, i);
  }
};
var n_ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const r_ = (t, e) => {
  var n, r, i, s, o;
  if (t instanceof fn && t.cause instanceof _s) {
    if (e !== void 0) {
      const a = e.filter((d) => Us(d));
      return xi(a, t.cause), {
        reason: t.cause.message,
        signature: (n = t.cause.data) === null || n === void 0 ? void 0 : n.slice(0, 10),
        data: (r = t.cause.data) === null || r === void 0 ? void 0 : r.substring(10),
        customErrorName: t.cause.errorName,
        customErrorDecodedSignature: t.cause.errorSignature,
        customErrorArguments: t.cause.errorArgs
      };
    }
    return {
      reason: t.cause.message,
      signature: (i = t.cause.data) === null || i === void 0 ? void 0 : i.slice(0, 10),
      data: (s = t.cause.data) === null || s === void 0 ? void 0 : s.substring(10)
    };
  }
  if (t instanceof vs && !Array.isArray((o = t.cause) === null || o === void 0 ? void 0 : o.errors) && t.cause !== void 0)
    return t.cause.message;
  throw t;
};
function Bf(t, e, n) {
  return n_(this, arguments, void 0, function* (r, i, s, o = r.defaultReturnFormat) {
    try {
      yield Ka(r, i, r.defaultBlock, o);
      return;
    } catch (a) {
      return r_(a, s);
    }
  });
}
var i_ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function po(t, e, n, r, i, s) {
  return i_(this, void 0, void 0, function* () {
    let o = s;
    o === void 0 && t.handleRevert && e !== void 0 && (o = yield Bf(t, e, i));
    let a;
    if (o === void 0)
      a = new Au(n);
    else if (typeof o == "string")
      a = new Hi(o, void 0, n);
    else if (o.customErrorName !== void 0 && o.customErrorDecodedSignature !== void 0 && o.customErrorArguments !== void 0) {
      const d = o;
      a = new bu(d.reason, d.customErrorName, d.customErrorDecodedSignature, d.customErrorArguments, d.signature, n, d.data);
    } else
      a = new Hi(o.reason, o.signature, n, o.data);
    return a;
  });
}
const $a = (t, e, n, r = Be) => {
  var i, s, o, a, d, u;
  let c = Object.assign({}, t);
  const f = T(pr, e, r);
  if ([ar, "allEvents"].includes(c.name)) {
    const g = n.find((b) => b.signature === e.topics[0]);
    g ? c = g : c = { anonymous: !0 };
  }
  if (c.inputs = (s = (i = c.inputs) !== null && i !== void 0 ? i : t.inputs) !== null && s !== void 0 ? s : [], !c.anonymous) {
    let g = 0;
    ((o = c.inputs) !== null && o !== void 0 ? o : []).forEach((b) => {
      b.indexed && (g += 1);
    }), g > 0 && (e != null && e.topics) && (e == null ? void 0 : e.topics.length) !== g + 1 && (c = Object.assign(Object.assign({}, c), { anonymous: !0, inputs: [] }));
  }
  const h = c.anonymous ? e.topics : ((a = e.topics) !== null && a !== void 0 ? a : []).slice(1);
  return Object.assign(Object.assign({}, f), { returnValues: Rf([...(d = c.inputs) !== null && d !== void 0 ? d : []], e.data, h), event: c.name, signature: !c.anonymous && ((u = e.topics) === null || u === void 0 ? void 0 : u.length) > 0 && e.topics[0] ? e.topics[0] : void 0, raw: {
    data: e.data,
    topics: e.topics
  } });
};
var tn = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Pf {
  constructor({ options: e, web3Context: n, promiEvent: r, returnFormat: i }) {
    this.options = {
      checkRevertBeforeSending: !0
    }, this.options = e, this.web3Context = n, this.promiEvent = r, this.returnFormat = i;
  }
  getReceiptWithEvents(e) {
    var n, r;
    const i = Object.assign({}, e ?? {});
    if (!((n = this.options) === null || n === void 0) && n.contractAbi && i.logs && i.logs.length > 0) {
      i.events = {};
      for (const s of i.logs) {
        const o = $a(Lo, s, (r = this.options) === null || r === void 0 ? void 0 : r.contractAbi, this.returnFormat);
        o.event && (i.events[o.event] = o);
      }
    }
    return i;
  }
  checkRevertBeforeSending(e) {
    return tn(this, void 0, void 0, function* () {
      if (this.options.checkRevertBeforeSending !== !1) {
        let n = e;
        E(e.data) && E(e.input) && E(e.gas) && (n = Object.assign(Object.assign({}, e), { gas: 21e3 }));
        const r = yield Bf(this.web3Context, n, this.options.contractAbi);
        if (r !== void 0)
          throw yield po(this.web3Context, e, void 0, void 0, this.options.contractAbi, r);
      }
    });
  }
  emitSending(e) {
    this.promiEvent.listenerCount("sending") > 0 && this.promiEvent.emit("sending", e);
  }
  populateGasPrice(e) {
    return tn(this, arguments, void 0, function* ({ transactionFormatted: n, transaction: r }) {
      var i;
      let s = n;
      return !this.web3Context.config.ignoreGasPricing && !(!((i = this.options) === null || i === void 0) && i.ignoreGasPricing) && E(n.gasPrice) && (E(r.maxPriorityFeePerGas) || E(r.maxFeePerGas)) && (s = Object.assign(Object.assign({}, n), yield rf(n, this.web3Context, Z))), s;
    });
  }
  signAndSend(e) {
    return tn(this, arguments, void 0, function* ({ wallet: n, tx: r }) {
      if (n) {
        const i = yield n.signTransaction(r);
        return Ho(this.web3Context, () => tn(this, void 0, void 0, function* () {
          return Jd(this.web3Context.requestManager, i.rawTransaction);
        }), i.transactionHash);
      }
      return Ho(this.web3Context, () => tn(this, void 0, void 0, function* () {
        return dA(this.web3Context.requestManager, r);
      }));
    });
  }
  emitSent(e) {
    this.promiEvent.listenerCount("sent") > 0 && this.promiEvent.emit("sent", e);
  }
  emitTransactionHash(e) {
    this.promiEvent.listenerCount("transactionHash") > 0 && this.promiEvent.emit("transactionHash", e);
  }
  emitReceipt(e) {
    this.promiEvent.listenerCount("receipt") > 0 && this.promiEvent.emit(
      "receipt",
      // @ts-expect-error unknown type fix
      e
    );
  }
  handleError(e) {
    return tn(this, arguments, void 0, function* ({ error: n, tx: r }) {
      var i;
      let s = n;
      return s instanceof fn && this.web3Context.handleRevert && (s = yield po(this.web3Context, r, void 0, void 0, (i = this.options) === null || i === void 0 ? void 0 : i.contractAbi)), (s instanceof vs || s instanceof fn || s instanceof bu || s instanceof Au || s instanceof Hi || s instanceof Eu) && this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", s), s;
    });
  }
  emitConfirmation({ receipt: e, transactionHash: n, customTransactionReceiptSchema: r }) {
    this.promiEvent.listenerCount("confirmation") > 0 && bw(this.web3Context, this.promiEvent, e, n, this.returnFormat, r);
  }
  handleResolve(e) {
    return tn(this, arguments, void 0, function* ({ receipt: n, tx: r }) {
      var i, s, o;
      if (!((i = this.options) === null || i === void 0) && i.transactionResolver)
        return (s = this.options) === null || s === void 0 ? void 0 : s.transactionResolver(n);
      if (n.status === BigInt(0)) {
        const a = yield po(
          this.web3Context,
          r,
          // @ts-expect-error unknown type fix
          n,
          void 0,
          (o = this.options) === null || o === void 0 ? void 0 : o.contractAbi
        );
        throw this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", a), a;
      } else
        return n;
    });
  }
}
var oe = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
}, s_ = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
const o_ = (t) => oe(void 0, void 0, void 0, function* () {
  return Kd(t.requestManager);
});
function a_(t, e) {
  return oe(this, void 0, void 0, function* () {
    const n = yield Wb(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function Za(t, e) {
  return oe(this, void 0, void 0, function* () {
    const n = yield Kb(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function c_(t, e) {
  return oe(this, void 0, void 0, function* () {
    const n = yield Jb(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function Wa(t, e) {
  return oe(this, void 0, void 0, function* () {
    const n = yield Xb(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function u_(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s) {
    const o = Ie(i) ? i : T({ format: "uint" }, i, Z), a = yield eA(n.requestManager, r, o);
    return T({ format: "uint" }, a, s ?? n.defaultReturnFormat);
  });
}
function d_(t, e, n) {
  return oe(this, arguments, void 0, function* (r, i, s, o = r.defaultBlock, a) {
    const d = T({ format: "uint" }, s, Z), u = Ie(o) ? o : T({ format: "uint" }, o, Z), c = yield tA(r.requestManager, i, d, u);
    return T({ format: "bytes" }, c, a ?? r.defaultReturnFormat);
  });
}
function f_(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s) {
    const o = Ie(i) ? i : T({ format: "uint" }, i, Z), a = yield aA(n.requestManager, r, o);
    return T({ format: "bytes" }, a, s ?? n.defaultReturnFormat);
  });
}
function Cf(t) {
  return oe(this, arguments, void 0, function* (e, n = e.defaultBlock, r = !1, i) {
    var s;
    let o;
    if (Kt(n)) {
      const d = T({ format: "bytes32" }, n, Z);
      o = yield hA(e.requestManager, d, r);
    } else {
      const d = Ie(n) ? n : T({ format: "uint" }, n, Z);
      o = yield Yd(e.requestManager, d, r);
    }
    const a = T(cs, o, i ?? e.defaultReturnFormat);
    return E(a) ? a : Object.assign(Object.assign({}, a), { transactions: (s = a.transactions) !== null && s !== void 0 ? s : [] });
  });
}
function l_(t) {
  return oe(this, arguments, void 0, function* (e, n = e.defaultBlock, r) {
    let i;
    if (Kt(n)) {
      const s = T({ format: "bytes32" }, n, Z);
      i = yield rA(e.requestManager, s);
    } else {
      const s = Ie(n) ? n : T({ format: "uint" }, n, Z);
      i = yield iA(e.requestManager, s);
    }
    return T({ format: "uint" }, i, r ?? e.defaultReturnFormat);
  });
}
function h_(t) {
  return oe(this, arguments, void 0, function* (e, n = e.defaultBlock, r) {
    let i;
    if (Kt(n)) {
      const s = T({ format: "bytes32" }, n, Z);
      i = yield sA(e.requestManager, s);
    } else {
      const s = Ie(n) ? n : T({ format: "uint" }, n, Z);
      i = yield oA(e.requestManager, s);
    }
    return T({ format: "uint" }, i, r ?? e.defaultReturnFormat);
  });
}
function p_(t) {
  return oe(this, arguments, void 0, function* (e, n = e.defaultBlock, r, i) {
    const s = T({ format: "uint" }, r, Z);
    let o;
    if (Kt(n)) {
      const a = T({ format: "bytes32" }, n, Z);
      o = yield bA(e.requestManager, a, s);
    } else {
      const a = Ie(n) ? n : T({ format: "uint" }, n, Z);
      o = yield AA(e.requestManager, a, s);
    }
    return T(cs, o, i ?? e.defaultReturnFormat);
  });
}
function m_(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultReturnFormat) {
    const s = T({ format: "bytes32" }, r, Be), o = yield pA(n.requestManager, s);
    return E(o) ? o : je(o, i, {
      transactionSchema: n.config.customTransactionSchema,
      fillInputAndData: !0
    });
  });
}
function g_(t, e) {
  return oe(this, void 0, void 0, function* () {
    return (yield BA(t.requestManager)).map((r) => je(r, e ?? t.defaultReturnFormat, {
      transactionSchema: t.config.customTransactionSchema,
      fillInputAndData: !0
    }));
  });
}
function y_(t) {
  return oe(this, arguments, void 0, function* (e, n = e.defaultBlock, r, i) {
    const s = T({ format: "uint" }, r, Z);
    let o;
    if (Kt(n)) {
      const a = T({ format: "bytes32" }, n, Z);
      o = yield mA(e.requestManager, a, s);
    } else {
      const a = Ie(n) ? n : T({ format: "uint" }, n, Z);
      o = yield gA(e.requestManager, a, s);
    }
    return E(o) ? o : je(o, i ?? e.defaultReturnFormat, {
      transactionSchema: e.config.customTransactionSchema,
      fillInputAndData: !0
    });
  });
}
function Nf(t, e, n) {
  return oe(this, void 0, void 0, function* () {
    const r = T({ format: "bytes32" }, e, Be);
    let i;
    try {
      i = yield yA(t.requestManager, r);
    } catch (s) {
      if (typeof s == "object" && !E(s) && "message" in s && s.message === "transaction indexing is in progress")
        console.warn("Transaction indexing is in progress.");
      else
        throw s;
    }
    return E(i) ? i : T(mr, i, n ?? t.defaultReturnFormat);
  });
}
function Mf(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s) {
    const o = Ie(i) ? i : T({ format: "uint" }, i, Z), a = yield nA(n.requestManager, r, o);
    return T({ format: "uint" }, a, s ?? n.defaultReturnFormat);
  });
}
function ei(t, e, n, r = { checkRevertBeforeSending: !0 }, i) {
  const s = new Wd((o, a) => {
    setImmediate(() => {
      oe(this, void 0, void 0, function* () {
        const d = new Pf({
          web3Context: t,
          promiEvent: s,
          options: r,
          returnFormat: n
        });
        let u = Object.assign({}, e);
        E(i) || (u = yield i.processTransaction(u));
        let c = je(Object.assign(Object.assign({}, u), { from: Do("from", t, u), to: Do("to", t, u) }), Z, {
          transactionSchema: t.config.customTransactionSchema
        });
        try {
          c = yield d.populateGasPrice({
            transaction: u,
            transactionFormatted: c
          }), yield d.checkRevertBeforeSending(c), d.emitSending(c);
          let f;
          t.wallet && !E(c.from) && (f = t.wallet.get(c.from));
          const h = yield d.signAndSend({
            wallet: f,
            tx: c
          }), g = T({ format: "bytes32" }, h, n ?? t.defaultReturnFormat);
          d.emitSent(c), d.emitTransactionHash(g);
          const b = yield af(t, h, n ?? t.defaultReturnFormat), p = d.getReceiptWithEvents(T(mr, b, n ?? t.defaultReturnFormat));
          d.emitReceipt(p), o(yield d.handleResolve({
            receipt: p,
            tx: c
          })), d.emitConfirmation({
            receipt: p,
            transactionHash: h
          });
        } catch (f) {
          a(yield d.handleError({
            error: f,
            tx: c
          }));
        }
      });
    });
  });
  return s;
}
function b_(t, e, n, r = { checkRevertBeforeSending: !0 }) {
  const i = new Wd((s, o) => {
    setImmediate(() => {
      oe(this, void 0, void 0, function* () {
        const a = new Pf({
          web3Context: t,
          promiEvent: i,
          options: r,
          returnFormat: n
        }), d = T({ format: "bytes" }, e, Z), u = Tn.fromSerializedData(gt(fe(d))), c = Object.assign(Object.assign({}, u.toJSON()), {
          // Some providers will default `from` to address(0) causing the error
          // reported from `eth_call` to not be the reason the user's tx failed
          // e.g. `eth_call` will return an Out of Gas error for a failed
          // smart contract execution contract, because the sender, address(0),
          // has no balance to pay for the gas of the transaction execution
          from: u.getSenderAddress().toString()
        });
        try {
          const { v: f, r: h, s: g } = c, b = s_(c, ["v", "r", "s"]);
          yield a.checkRevertBeforeSending(b), a.emitSending(d);
          const p = yield Ho(t, () => oe(this, void 0, void 0, function* () {
            return Jd(t.requestManager, d);
          }));
          a.emitSent(d);
          const m = T({ format: "bytes32" }, p, n ?? t.defaultReturnFormat);
          a.emitTransactionHash(m);
          const l = yield af(t, p, n ?? t.defaultReturnFormat), A = a.getReceiptWithEvents(T(mr, l, n ?? t.defaultReturnFormat));
          a.emitReceipt(A), s(yield a.handleResolve({
            receipt: A,
            tx: c
          })), a.emitConfirmation({
            receipt: A,
            transactionHash: p
          });
        } catch (f) {
          o(yield a.handleError({
            error: f,
            tx: c
          }));
        }
      });
    });
  });
  return i;
}
function A_(t, e, n) {
  return oe(this, arguments, void 0, function* (r, i, s, o = r.defaultReturnFormat) {
    var a;
    const d = T({ format: "bytes" }, i, Be);
    if (!((a = r.wallet) === null || a === void 0) && a.get(s)) {
      const f = r.wallet.get(s).sign(d);
      return T(rw, f, o);
    }
    if (typeof s == "number")
      throw new pp(i, 'RPC method "eth_sign" does not support index signatures');
    const u = yield cA(r.requestManager, s, d);
    return T({ format: "bytes" }, u, o);
  });
}
function w_(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultReturnFormat) {
    const s = yield uA(n.requestManager, je(r, Z, {
      transactionSchema: n.config.customTransactionSchema
    }));
    return ca(s) ? aw(s, i, {
      fillInputAndData: !0
    }) : {
      raw: T({ format: "bytes" }, s.raw, i),
      tx: je(s.tx, i, {
        transactionSchema: n.config.customTransactionSchema,
        fillInputAndData: !0
      })
    };
  });
}
function Ka(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s = n.defaultReturnFormat) {
    const o = Ie(i) ? i : T({ format: "uint" }, i, Z), a = yield fA(n.requestManager, je(r, Z, {
      transactionSchema: n.config.customTransactionSchema
    }), o);
    return T({ format: "bytes" }, a, s);
  });
}
function Ja(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s) {
    const o = je(r, Z, {
      transactionSchema: n.config.customTransactionSchema
    }), a = Ie(i) ? i : T({ format: "uint" }, i, Z), d = yield lA(n.requestManager, o, a);
    return T({ format: "uint" }, d, s ?? n.defaultReturnFormat);
  });
}
function Of(t, e, n) {
  return oe(this, void 0, void 0, function* () {
    let { toBlock: r, fromBlock: i } = e;
    E(r) || (typeof r == "number" || typeof r == "bigint") && (r = _e(r)), E(i) || (typeof i == "number" || typeof i == "bigint") && (i = _e(i));
    const s = Object.assign(Object.assign({}, e), { fromBlock: i, toBlock: r });
    return (yield TA(t.requestManager, s)).map((d) => typeof d == "string" ? d : T(pr, d, n ?? t.defaultReturnFormat));
  });
}
function Lf(t, e) {
  return oe(this, void 0, void 0, function* () {
    const n = yield CA(t.requestManager);
    return T(
      { format: "uint" },
      // Response is number in hex formatted string
      n,
      e ?? t.defaultReturnFormat
    );
  });
}
function __(t, e, n) {
  return oe(this, arguments, void 0, function* (r, i, s, o = r.defaultBlock, a) {
    const d = s.map((f) => T({ format: "bytes" }, f, Z)), u = Ie(o) ? o : T({ format: "uint" }, o, Z), c = yield NA(r.requestManager, i, d, u);
    return T(ow, c, a ?? r.defaultReturnFormat);
  });
}
function v_(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s, o) {
    const a = T({ format: "uint" }, r, Z), d = Ie(i) ? i : T({ format: "uint" }, i, Z), u = T({
      type: "array",
      items: {
        format: "uint"
      }
    }, s, js), c = yield RA(n.requestManager, a, d, u);
    return T(iw, c, o ?? n.defaultReturnFormat);
  });
}
function Df(t, e) {
  return oe(this, arguments, void 0, function* (n, r, i = n.defaultBlock, s) {
    const o = Ie(i) ? i : T({ format: "uint" }, i, Z), a = yield OA(n.requestManager, je(r, Z, {
      transactionSchema: n.config.customTransactionSchema
    }), o);
    return T(XA, a, s ?? n.defaultReturnFormat);
  });
}
function E_(t, e, n, r, i) {
  return oe(this, void 0, void 0, function* () {
    const s = yield LA(t.requestManager, e, n, r);
    return T({ format: "bytes" }, s, i ?? t.defaultReturnFormat);
  });
}
var gr = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
function I_(t, e) {
  return gr(this, void 0, void 0, function* () {
    const n = yield vA(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function x_(t, e, n) {
  return gr(this, void 0, void 0, function* () {
    let { toBlock: r, fromBlock: i } = e;
    E(r) || (typeof r == "number" || typeof r == "bigint") && (r = _e(r)), E(i) || (typeof i == "number" || typeof i == "bigint") && (i = _e(i));
    const s = Object.assign(Object.assign({}, e), { fromBlock: i, toBlock: r }), o = yield wA(t.requestManager, s);
    return T({ format: "uint" }, o, n ?? t.defaultReturnFormat);
  });
}
function T_(t, e) {
  return gr(this, void 0, void 0, function* () {
    const n = yield _A(t.requestManager);
    return T({ format: "uint" }, n, e ?? t.defaultReturnFormat);
  });
}
function S_(t, e) {
  return gr(this, void 0, void 0, function* () {
    return yield EA(t.requestManager, _e(e));
  });
}
function k_(t, e, n) {
  return gr(this, void 0, void 0, function* () {
    return (yield IA(t.requestManager, _e(e))).map((s) => typeof s == "string" ? s : T(pr, s, n ?? t.defaultReturnFormat));
  });
}
function R_(t, e, n) {
  return gr(this, void 0, void 0, function* () {
    return (yield xA(t.requestManager, _e(e))).map((s) => typeof s == "string" ? s : T(pr, s, n ?? t.defaultReturnFormat));
  });
}
class Ff extends di {
  _buildSubscriptionParams() {
    return ["logs", this.args];
  }
  formatSubscriptionResult(e) {
    return T(pr, e, super.returnFormat);
  }
}
class ru extends di {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["newPendingTransactions"];
  }
  formatSubscriptionResult(e) {
    return T({ format: "string" }, e, super.returnFormat);
  }
}
class ls extends di {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["newHeads"];
  }
  formatSubscriptionResult(e) {
    return T(tw, e, super.returnFormat);
  }
}
class Hf extends di {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["syncing"];
  }
  _processSubscriptionResult(e) {
    if (typeof e == "boolean")
      this.emit("changed", e);
    else {
      const n = Object.fromEntries(Object.entries((e == null ? void 0 : e.status) || e).map(([r, i]) => [
        r.charAt(0).toLowerCase() + r.substring(1),
        i
      ]));
      this.emit("changed", e.syncing), this.emit("data", T(nw, n, super.returnFormat));
    }
  }
}
var W = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const Vo = {
  logs: Ff,
  newPendingTransactions: ru,
  newHeads: ls,
  syncing: Hf,
  pendingTransactions: ru,
  // the same as newPendingTransactions. just for support API like in version 1.x
  newBlockHeaders: ls
  // the same as newHeads. just for support API like in version 1.x
};
class zs extends He {
  constructor(e) {
    if (typeof e == "string" || // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    rs(e)) {
      super({
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        provider: e,
        registeredSubscriptions: Vo
      });
      return;
    }
    if (e.registeredSubscriptions) {
      super(e);
      return;
    }
    super(Object.assign(Object.assign({}, e), { registeredSubscriptions: Vo })), this.getFeeData = this.calculateFeeData;
  }
  setTransactionMiddleware(e) {
    this.transactionMiddleware = e;
  }
  getTransactionMiddleware() {
    return this.transactionMiddleware;
  }
  /**
   * @returns Returns the ethereum protocol version of the node.
   *
   * ```ts
   * web3.eth.getProtocolVersion().then(console.log);
   * > "63"
   * ```
   */
  getProtocolVersion() {
    return W(this, void 0, void 0, function* () {
      return Qb(this.requestManager);
    });
  }
  // TODO Add returnFormat parameter
  /**
   * Checks if the node is currently syncing.
   *
   * @returns Either a {@link SyncingStatusAPI}, or `false`.
   *
   * ```ts
   * web3.eth.isSyncing().then(console.log);
   * > {
   *     startingBlock: 100,
   *     currentBlock: 312,
   *     highestBlock: 512,
   *     knownStates: 234566,
   *     pulledStates: 123455
   * }
   * ```
   */
  isSyncing() {
    return W(this, void 0, void 0, function* () {
      return Kd(this.requestManager);
    });
  }
  // TODO consider adding returnFormat parameter (to format address as bytes)
  /**
   * @returns Returns the coinbase address to which mining rewards will go.
   *
   * ```ts
   * web3.eth.getCoinbase().then(console.log);
   * > "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
   * ```
   */
  getCoinbase() {
    return W(this, void 0, void 0, function* () {
      return $b(this.requestManager);
    });
  }
  /**
   * Checks whether the node is mining or not.
   *
   * @returns `true` if the node is mining, otherwise `false`.
   *
   * ```ts
   * web3.eth.isMining().then(console.log);
   * > true
   * ```
   */
  isMining() {
    return W(this, void 0, void 0, function* () {
      return Zb(this.requestManager);
    });
  }
  /**
   * @deprecated Will be removed in the future, please use {@link Web3Eth.getHashRate} method instead.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashrate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashrate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */
  getHashrate(e) {
    return W(this, void 0, void 0, function* () {
      var n;
      return e === void 0 && (e = (n = this.defaultReturnFormat) !== null && n !== void 0 ? n : Be), this.getHashRate(e);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashRate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashRate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */
  getHashRate() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return a_(this, e);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The gas price determined by the last few blocks median gas price.
   *
   * ```ts
   * web3.eth.getGasPrice().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getGasPrice({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */
  getGasPrice() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return Za(this, e);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns the current maxPriorityFeePerGas per gas in wei.
   *
   * ```ts
   * web3.eth.getMaxPriorityFeePerGas().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getMaxPriorityFeePerGas({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */
  getMaxPriorityFeePerGas() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return c_(this, e);
    });
  }
  /**
   * Calculates the current Fee Data.
   * If the node supports EIP-1559, then `baseFeePerGas` and `maxPriorityFeePerGas` will be returned along with the calculated `maxFeePerGas` value.
   * `maxFeePerGas` is calculated as `baseFeePerGas` * `baseFeePerGasFactor` + `maxPriorityFeePerGas`.
   * If the node does not support EIP-1559, then the `gasPrice` will be returned and the other values will be undefined.
   *
   * @param baseFeePerGasFactor (optional) The factor to multiply the `baseFeePerGas` with when calculating `maxFeePerGas`, if the node supports EIP-1559. This can be a `bigint` for precise calculation or a `number` to support decimals. The default value is 2 (BigInt).
   * If a `number` is provided, it will be converted to `bigint` with three decimal precision.
   * @param alternativeMaxPriorityFeePerGas (optional) The alternative `maxPriorityFeePerGas` to use when calculating `maxFeePerGas`, if the node supports EIP-1559 but does not support the method `eth_maxPriorityFeePerGas`. The default value is 1 gwei.
   * @returns The current fee data.
   *
   * @example
   * web3.eth.calculateFeeData().then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 60000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * // Using a `bigint` for baseFeePerGasFactor
   * web3.eth.calculateFeeData(1n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 40000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * // Using a `number` for baseFeePerGasFactor (with decimals)
   * web3.eth.calculateFeeData(1.5).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 50000000000n,  // baseFeePerGasFactor is converted to BigInt(1.500)
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * web3.eth.calculateFeeData(3n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 80000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   */
  calculateFeeData() {
    return W(this, arguments, void 0, function* (e = BigInt(2), n = Rs.Gwei) {
      var r;
      const i = yield this.getBlock(void 0, !1), s = (r = i == null ? void 0 : i.baseFeePerGas) !== null && r !== void 0 ? r : void 0;
      let o;
      try {
        o = yield this.getGasPrice();
      } catch {
      }
      let a;
      try {
        a = yield this.getMaxPriorityFeePerGas();
      } catch {
      }
      let d;
      if (s) {
        a = a ?? n;
        let u;
        typeof e == "number" ? u = BigInt(Math.floor(e * 1e3)) / BigInt(1e3) : u = e, d = s * u + a;
      }
      return { gasPrice: o, maxFeePerGas: d, maxPriorityFeePerGas: a, baseFeePerGas: s };
    });
  }
  /**
   * @returns A list of accounts the node controls (addresses are checksummed).
   *
   * ```ts
   * web3.eth.getAccounts().then(console.log);
   * > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
   * ```
   */
  getAccounts() {
    return W(this, void 0, void 0, function* () {
      var e;
      return ((e = yield Yb(this.requestManager)) !== null && e !== void 0 ? e : []).map((r) => yt(r));
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current block number.
   *
   * ```ts
   * web3.eth.getBlockNumber().then(console.log);
   * > 2744n
   *
   * web3.eth.getBlockNumber({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0xab8"
   * ```
   */
  getBlockNumber() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return Wa(this, e);
    });
  }
  /**
   * Get the balance of an address at a given block.
   *
   * @param address The address to get the balance of.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the balance query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current balance for the given address in `wei`.
   *
   * ```ts
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1000000000000n
   *
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > "0xe8d4a51000"
   * ```
   */
  getBalance(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return u_(this, n, r, i);
    });
  }
  /**
   * Get the storage at a specific position of an address.
   *
   * @param address The address to get the storage from.
   * @param storageSlot The index position of the storage.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the storage query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The value in storage at the given position.
   *
   * ```ts
   * web3.eth.getStorageAt("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234", 0).then(console.log);
   * > "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
   *
   * web3.eth.getStorageAt(
   *      "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234",
   *      0,
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(31) [
   *       3, 52,  86, 115,  33,  35, 255, 255,
   *       35, 66,  52,  45, 209,  35,  66,  67,
   *       67, 36,  35,  66,  52, 253,  35,  79,
   *       210, 63, 212, 242,  61,  66,  52
   *    ]
   * ```
   */
  getStorageAt(e, n) {
    return W(this, arguments, void 0, function* (r, i, s = this.defaultBlock, o = this.defaultReturnFormat) {
      return d_(this, r, i, s, o);
    });
  }
  /**
   * Get the code at a specific address.
   *
   * @param address The address to get the code from.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the code query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The [data](https://ethereum.org/en/developers/docs/transactions/#the-data-field) at the provided `address`.
   *
   * ```ts
   * web3.eth.getCode("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234").then(console.log);
   * > "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
   *
   * web3.eth.getCode(
   *      "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(50) [
   *   96,  1,  96,   0, 128, 53, 129, 26, 129, 129, 129,
   *   20, 96,  18,  87, 131,  1,   0, 91,  96,  27,  96,
   *   1, 53,  96,  37,  86, 91, 128, 96,   0,  82,  96,
   *   32, 96,   0, 242,  91, 96,   0, 96,   7, 130,   2,
   *   144, 80, 145, 144,  80, 86
   * ]
   * ```
   */
  getCode(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return f_(this, n, r, i);
    });
  }
  /**
   * Retrieves a {@link Block} matching the provided block number, block hash or block tag.
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param hydrated If specified `true`, the returned block will contain all transactions as objects. If `false` it will only contain transaction hashes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted (does not format transaction objects or hashes).
   * @returns A {@link Block} object matching the provided block number or block hash.
   *
   * ```ts
   * web3.eth.getBlock(0).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getBlock(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      false,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */
  getBlock() {
    return W(this, arguments, void 0, function* (e = this.defaultBlock, n = !1, r = this.defaultReturnFormat) {
      return Cf(this, e, n, r);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions in the provided block.
   *
   * ```ts
   * web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getBlockTransactionCount() {
    return W(this, arguments, void 0, function* (e = this.defaultBlock, n = this.defaultReturnFormat) {
      return l_(this, e, n);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of [uncles](https://ethereum.org/en/glossary/#ommer) in the provided block.
   *
   * ```ts
   * web3.eth.getBlockUncleCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockUncleCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getBlockUncleCount() {
    return W(this, arguments, void 0, function* (e = this.defaultBlock, n = this.defaultReturnFormat) {
      return h_(this, e, n);
    });
  }
  /**
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param uncleIndex The index position of the uncle.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A blocks [uncle](https://ethereum.org/en/glossary/#ommer) by a given uncle index position.
   *
   * ```ts
   * web3.eth.getUncle(0, 1).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getUncle(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      1,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */
  getUncle() {
    return W(this, arguments, void 0, function* (e = this.defaultBlock, n, r = this.defaultReturnFormat) {
      return p_(this, e, n, r);
    });
  }
  /**
   * @param transactionHash The hash of the desired transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc').then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransaction(
   *     web3.utils.hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */
  getTransaction(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      const i = yield m_(this, n, r);
      if (!i)
        throw new uc();
      return i;
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A list of pending transactions.
   *
   * ```ts
   * web3.eth.getPendingTransactions().then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0n,
   *          nonce: 0n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2709n,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0n,
   *          nonce: 1n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2710n,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   *
   * * web3.eth.getPendingTransactions({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0,
   *          nonce: 0,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2709,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0,
   *          nonce: 1,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2710,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   * ```
   */
  getPendingTransactions() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return g_(this, e);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param transactionIndex The index position of the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransactionFromBlock(
   *     hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     0,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */
  getTransactionFromBlock() {
    return W(this, arguments, void 0, function* (e = this.defaultBlock, n, r = this.defaultReturnFormat) {
      return y_(this, e, n, r);
    });
  }
  /**
   * @param transactionHash Hash of the transaction to retrieve the receipt for.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired {@link TransactionReceipt} object.
   *
   * ```ts
   * web3.eth.getTransactionReceipt("0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f").then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   *  }
   *
   * web3.eth.getTransactionReceipt(
   *      "0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f",
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0,
   *      blockNumber: 2,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000,
   *      gasUsed: 21000,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1,
   *      effectiveGasPrice: 2000000000,
   *      type: 0n
   *  }
   * ```
   */
  getTransactionReceipt(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      const i = yield Nf(this, n, r);
      if (!i)
        throw new uc();
      return i;
    });
  }
  /**
   * @param address The address to get the number of transactions for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions sent from the provided address.
   *
   * ```ts
   * web3.eth.getTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getTransactionCount(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return Mf(this, n, r, i);
    });
  }
  /**
   * @param transaction The {@link Transaction}, {@link TransactionWithFromLocalWalletIndex}, {@link TransactionWithToLocalWalletIndex} or {@link TransactionWithFromAndToLocalWalletIndex} to send. __Note:__ In the `to` and `from` fields when hex strings are used, it is assumed they are addresses, for any other form (number, string number, etc.) it is assumed they are wallet indexes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the `sendTransaction` method.
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const transaction = {
   *   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *   value: '0x1'
   * }
   *
   * const transactionReceipt = await web3.eth.sendTransaction(transaction);
   * console.log(transactionReceipt);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   *
   * web3.eth.sendTransaction(transaction).then(console.log);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   *
   * web3.eth.sendTransaction(transaction).catch(console.log);
   * > <Some TransactionError>
   *
   * // Example using options.ignoreGasPricing = true
   * web3.eth.sendTransaction(transaction, undefined, { ignoreGasPricing: true }).then(console.log);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > {
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *      value: '0x1',
   *      gasPrice: '0x77359400',
   *      maxPriorityFeePerGas: undefined,
   *      maxFeePerGas: undefined
   * }
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > {
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *      value: '0x1',
   *      gasPrice: '0x77359400',
   *      maxPriorityFeePerGas: undefined,
   *      maxFeePerGas: undefined
   * }
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *      confirmations: 1n,
   *      receipt: {
   *         transactionHash: '0xb4a3a35ae0f3e77ef0ff7be42010d948d011b21a4e341072ee18717b67e99ab8',
   *         transactionIndex: 0n,
   *         blockNumber: 5n,
   *         blockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548',
   *         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *         cumulativeGasUsed: 21000n,
   *         gasUsed: 21000n,
   *         logs: [],
   *         logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *         status: 1n,
   *         effectiveGasPrice: 2000000000n,
   *         type: 0n
   *      },
   *      latestBlockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('error', error => console.log);
   * > <Some TransactionError>
   * ```
   */
  sendTransaction(e, n = this.defaultReturnFormat, r) {
    return ei(this, e, n, r, this.transactionMiddleware);
  }
  /**
   * @param transaction Signed transaction in one of the valid {@link Bytes} format.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the method
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   *
   * const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction);
   * console.log(transactionHash);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).catch(console.log);
   * > <Some TransactionError>
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *      blockNumber: 1n,
   *      cumulativeGasUsed: 21000n,
   *      effectiveGasPrice: 1000000001n,
   *      from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *      transactionIndex: 0n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *     confirmations: 1n,
   *     receipt: {
   *          blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *          blockNumber: 1n,
   *          cumulativeGasUsed: 21000n,
   *          effectiveGasPrice: 1000000001n,
   *          from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          gasUsed: 21000n,
   *          logs: [],
   *          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *          status: 1n,
   *          to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *          transactionIndex: 0n,
   *          type: 0n
   *     },
   *     latestBlockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('error', error => console.log(error));
   * > <Some TransactionError>
   * ```
   */
  sendSignedTransaction(e, n = this.defaultReturnFormat, r) {
    return b_(this, e, n, r);
  }
  /**
   * @param message Data to sign in one of the valid {@link Bytes} format.
   * @param address Address to sign data with, can be an address or the index of a local wallet.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The signed `message`.
   *
   * ```ts
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   *
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.UINT8ARRAY }).then(console.log);
   * > Uint8Array(65) [
   *    48, 117,  94, 214,  83, 150, 250, 207, 134, 197,  62,
   *    98,  23, 197,  43,  77, 174, 190, 114, 170,  73,  65,
   *   216, 150,  53,  64, 157, 228, 201, 199, 249,  70, 109,
   *    78, 154, 174, 199, 151, 127,   5, 233,  35, 136, 155,
   *    51, 192, 208, 221,  39, 215,  34, 107, 110, 111,  86,
   *   206, 115, 116, 101, 197, 207, 208,  75, 228,   0
   * ]
   * ```
   *
   * // Using an indexed account managed by local Web3 wallet
   * web3.eth.sign("0x48656c6c6f20776f726c64", 0).then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   */
  sign(e, n) {
    return W(this, arguments, void 0, function* (r, i, s = this.defaultReturnFormat) {
      return A_(this, r, i, s);
    });
  }
  /**
   * @param transaction The transaction object to sign.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns {@link SignedTransactionInfoAPI}, an object containing the [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/#top) encoded signed transaction (accessed via the `raw` property) and the signed transaction object (accessed via the `tx` property).
   *
   * ```ts
   * const transaction = {
   *      from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      value: '0x1',
   *      gas: '21000',
   *      gasPrice: await web3Eth.getGasPrice(),
   *      nonce: '0x1',
   *      type: '0x0'
   * }
   *
   * web3.eth.signTransaction(transaction).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0n,
   *      nonce: 1n,
   *      gasPrice: 1000000001n,
   *      gas: 21000n,
   *      value: 1n,
   *      v: 2710n,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   *
   * web3.eth.signTransaction(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0,
   *      nonce: 1,
   *      gasPrice: 1000000001,
   *      gas: 21000,
   *      value: 1,
   *      v: 2710,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   * ```
   */
  signTransaction(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      return w_(this, n, r);
    });
  }
  // TODO Decide what to do with transaction.to
  // https://github.com/ChainSafe/web3.js/pull/4525#issuecomment-982330076
  /**
   * Executes a message call within the EVM without creating a transaction.
   * It does not publish anything to the blockchain and does not consume any gas.
   *
   * @param transaction - A transaction object where all properties are optional except `to`, however it's recommended to include the `from` property or it may default to `0x0000000000000000000000000000000000000000` depending on your node or provider.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The returned data of the call, e.g. a smart contract function's return value.
   */
  call(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return Ka(this, n, r, i);
    });
  }
  /**
   * Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
   * The transaction will not be added to the blockchain, and actual gas usage can vary when interacting
   * with a contract as a result of updating the contract's state.
   *
   * @param transaction The {@link Transaction} object to estimate the gas for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The used gas for the simulated transaction execution.
   *
   * ```ts
   * const transaction = {
   *       from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       value: '0x1',
   *       nonce: '0x1',
   *       type: '0x0'
   * }
   *
   * web3.eth.estimateGas(transaction).then(console.log);
   * > 21000n
   *
   * web3.eth.estimateGas(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 21000
   * ```
   */
  estimateGas(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return Ja(this, n, r, i);
    });
  }
  /**
   * Gets past logs, matching the provided `filter`.
   *
   * @param filter A {@link Filter} object containing the properties for the desired logs.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getPastLogs({
   *      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *      topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *  }).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   *
   * web3.eth.getPastLogs(
   *     {
   *       address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *       topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *     },
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0,
   *       transactionIndex: 0,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   * ```
   */
  getPastLogs(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      return Of(this, n, r);
    });
  }
  /**
   * Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
   *
   * @returns The mining work as an array of strings with the following structure:
   *
   * String 32 Bytes - at index 0: current block header pow-hash
   * String 32 Bytes - at index 1: the seed hash used for the DAG.
   * String 32 Bytes - at index 2: the boundary condition ('target'), 2^256 / difficulty.
   *
   * ```ts
   * web3.eth.getWork().then(console.log);
   * > [
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
   *     "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
   * ]
   * ```
   */
  getWork() {
    return W(this, void 0, void 0, function* () {
      return SA(this.requestManager);
    });
  }
  /**
   * Used for submitting a proof-of-work solution.
   *
   * @param nonce The nonce found (8 bytes).
   * @param hash  The header’s pow-hash (32 bytes).
   * @param digest The mix digest (32 bytes).
   * @returns Returns `true` if the provided solution is valid, otherwise `false`.
   *
   * ```ts
   * web3.eth.submitWork([
   *     "0x0000000000000001",
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
   * ]).then(console.log);
   * > true
   * ```
   */
  submitWork(e, n, r) {
    return W(this, void 0, void 0, function* () {
      return kA(this.requestManager, e, n, r);
    });
  }
  // TODO - Format addresses
  /**
   * This method will request/enable the accounts from the current environment and for supporting [EIP 1102](https://eips.ethereum.org/EIPS/eip-1102)
   * This method will only work if you’re using the injected provider from a application like Metamask, Status or TrustWallet.
   * It doesn’t work if you’re connected to a node with a default Web3.js provider (WebsocketProvider, HttpProvider and IpcProvider).
   * For more information about the behavior of this method please read [EIP-1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md): Opt-in account exposure.
   *
   * @returns An array of enabled accounts.
   *
   * ```ts
   * web3.eth.requestAccounts().then(console.log);
   * > ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe']
   * ```
   */
  requestAccounts() {
    return W(this, void 0, void 0, function* () {
      return PA(this.requestManager);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The chain ID of the current connected node as described in the [EIP-695](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).
   *
   * ```ts
   * web3.eth.getChainId().then(console.log);
   * > 61n
   *
   * web3.eth.getChainId({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 61
   * ```
   */
  getChainId() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return Lf(this, e);
    });
  }
  /**
   * @returns The current client version.
   *
   * ```ts
   * web3.eth.getNodeInfo().then(console.log);
   * > "Mist/v0.9.3/darwin/go1.4.1"
   * ```
   */
  getNodeInfo() {
    return W(this, void 0, void 0, function* () {
      return MA(this.requestManager);
    });
  }
  /**
   * @param address The Address of the account or contract.
   * @param storageKeys Array of storage-keys which should be proofed and included. See {@link web3.getStorageAt}.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The account and storage-values of the specified account including the Merkle-proof as described in [EIP-1186](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).
   *
   * ```ts
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     "latest"
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0n,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0n,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0n,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0n,
   *             "proof": []
   *         }
   *     ]
   * }
   *
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0,
   *             "proof": []
   *         }
   *     ]
   * }
   * ```
   */
  getProof(e, n) {
    return W(this, arguments, void 0, function* (r, i, s = this.defaultBlock, o = this.defaultReturnFormat) {
      return __(this, r, i, s, o);
    });
  }
  // TODO Throwing an error with Geth, but not Infura
  // TODO gasUsedRatio and reward not formatting
  /**
   * @param blockCount Number of blocks in the requested range. Between `1` and `1024` blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
   * @param newestBlock Highest number block of the requested range.
   * @param rewardPercentiles A monotonically increasing list of percentile values to sample from each block’s effective priority fees per gas in ascending order, weighted by gas used. Example: `['0', '25', '50', '75', '100']` or `['0', '0.5', '1', '1.5', '3', '80']`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns `baseFeePerGas` and transaction effective `priorityFeePerGas` history for the requested block range if available.
   * The range between `headBlock - 4` and `headBlock` is guaranteed to be available while retrieving data from the `pending` block and older history are optional to support.
   * For pre-EIP-1559 blocks the `gasPrice`s are returned as `rewards` and zeroes are returned for the `baseFeePerGas`.
   *
   * ```ts
   * web3.eth.getFeeHistory(4, 'pending', [0, 25, 75, 100]).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621n,
   *         21417903463n,
   *         19989260230n,
   *         17770954829n,
   *         18850641304n
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343n,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   *
   * web3.eth.getFeeHistory(4, BlockTags.LATEST, [0, 25, 75, 100], { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621,
   *         21417903463,
   *         19989260230,
   *         17770954829,
   *         18850641304
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   * ```
   */
  getFeeHistory(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i, s = this.defaultReturnFormat) {
      return v_(this, n, r, i, s);
    });
  }
  /**
   * This method generates an access list for a transaction.
   *
   * @param transaction - A transaction object where all properties are optional except `from`, however it's recommended to include the `to` property.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the createAccessList should be formatted.
   * @returns The returned data of the createAccessList,  e.g. The generated access list for transaction.
   * @example
   * ```ts
   * web3.eth.createAccessList({
   * from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
   * data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
   * gasPrice: '0x3b9aca00',
   * gas: '0x3d0900',
   * to: '0x940b25304947ae863568B3804434EC77E2160b87'
   * })
   * .then(console.log);
   *
   * > {
   *  "accessList": [
   *     {
   *       "address": "0x15859bdf5aff2080a9968f6a410361e9598df62f",
   *       "storageKeys": [
   *         "0x0000000000000000000000000000000000000000000000000000000000000000"
   *       ]
   *     }
   *   ],
   *   "gasUsed": "0x7671"
   * }
   * ```
   */
  createAccessList(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultBlock, i = this.defaultReturnFormat) {
      return Df(this, n, r, i);
    });
  }
  /**
   * This method sends EIP-712 typed data to the RPC provider to be signed.
   *
   * @param address The address that corresponds with the private key used to sign the typed data.
   * @param typedData The EIP-712 typed data object.
   * @param useLegacy A boolean flag determining whether the RPC call uses the legacy method `eth_signTypedData` or the newer method `eth_signTypedData_v4`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the signed typed data should be formatted.
   * @returns The signed typed data.
   */
  signTypedData(e, n, r, i) {
    return W(this, void 0, void 0, function* () {
      var s;
      return r === void 0 && (r = !1), i === void 0 && (i = (s = this.defaultReturnFormat) !== null && s !== void 0 ? s : Be), E_(this, e, n, r, i);
    });
  }
  /**
   * Lets you subscribe to specific events in the blockchain.
   *
   * @param name - The subscription you want to subscribe to.
   * @param args - Optional additional parameters, depending on the subscription type.
   * @returns A subscription object of type {@link RegisteredSubscription}. The object contains:
   *  - subscription.id: The subscription id, used to identify and unsubscribing the subscription.
   *  - subscription.subscribe(): Can be used to re-subscribe with the same parameters.
   *  - subscription.unsubscribe(): Unsubscribes the subscription and returns TRUE in the callback if successful.
   *  - subscription.args: The subscription arguments, used when re-subscribing.
   *
   *
   * You can use the subscription object to listen on:
   *
   * - on("data") - Fires on each incoming log with the log object as argument.
   * - on("changed") - Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
   * - on("error") - Fires when an error in the subscription occurs.
   * - on("connected") - Fires once after the subscription successfully connected. Returns the subscription id.
   *
   * @example **Subscribe to Smart Contract events**
   * ```ts
   * // Subscribe to `logs`
   * const logSubscription = web3.eth.subscribe('logs', {
   *     address: '0x1234567890123456789012345678901234567890',
   *     topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
   * });
   * logSubscription.on('data', (data: any) => console.log(data));
   * logSubscription.on('error', (error: any) => console.log(error));
   *
   * ```
   *
   * @example **Subscribe to new block headers**
   * ```ts
   * // Subscribe to `newBlockHeaders`
   * const newBlocksSubscription = await web3.eth.subscribe('newBlockHeaders');
   *
   * newBlocksSubscription.on('data', async blockhead => {
   * 	console.log('New block header: ', blockhead);
   *
   * 	// You do not need the next line, if you like to keep notified for every new block
   * 	await newBlocksSubscription.unsubscribe();
   * 	console.log('Unsubscribed from new block headers.');
   * });
   * newBlocksSubscription.on('error', error =>
   * 	console.log('Error when subscribing to New block header: ', error),
   * );
   * ```
   *
   * 	### subscribe('pendingTransactions')
   *
   * Subscribes to incoming pending transactions.
   * You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').
   *
   * ```ts
   * (await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
   * ```
   *
   * ### subscribe('newHeads')
   * ( same as subscribe('newBlockHeaders'))
   * Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.
   *
   * The structure of a returned block header is {@link BlockHeaderOutput}:
   *
   * ```ts
   * (await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
   *  'data',
   * console.log
   * );
   * >{
   * parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
   * sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   * miner: '0x0000000000000000000000000000000000000000',
   * stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
   * transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
   * logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   * difficulty: 2n,
   * number: 21n,
   * gasLimit: 11738125n,
   * gasUsed: 830006n,
   * timestamp: 1678797237n,
   * extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
   * nonce: 0n
   * }
   * ```
   *
   * ### subscribe('syncing')
   * Subscribe to syncing events. This will return `true` when the node is syncing and when it’s finished syncing will return `false`, for the `changed` event.
   *
   * ```ts
   * (await web3.eth.subscribe('syncing')).on('changed', console.log);
   * > `true` // when syncing
   *
   * (await web3.eth.subscribe('syncing')).on('data', console.log);
   * > {
   *      startingBlock: 0,
   *      currentBlock: 0,
   *      highestBlock: 0,
   *      pulledStates: 0,
   *      knownStates: 0
   *   }
   * ```
   *
   * ### subscribe('logs', options)
   * Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.
   *
   * options: You can subscribe to logs matching a given filter object, which can take the following parameters:
   * - `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
   * - `address`: (optional) Contract address or a list of addresses from which logs should originate.
   * - `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.
   *
   * ```ts
   *  (await web3.eth.subscribe('logs', {
   *    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *   })).on('data', console.log);
   *
   * > {
   * removed: false,
   * logIndex: 119n,
   * transactionIndex: 58n,
   * transactionHash: '0x61533efa77937360215069d5d6cb0be09a22af9721e6dc3df59d957833ed8870',
   * blockHash: '0xe32bb97084479d32247f66f8b46d00af2fbc3c2db2bc6e5843fe2e4d1ca9b099',
   * blockNumber: 18771966n,
   * address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   * data: '0x00000000000000000000000000000000000000000000000000000000d88b2e40',
   * topics: [
   * '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
   * '0x0000000000000000000000002fb2457f6ec1865dc0d4e7300c696b69c2a1b989',
   * '0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4'
   * ]
   * }
   *```
   */
  subscribe(e, n, r) {
    return W(this, void 0, void 0, function* () {
      var i, s;
      r === void 0 && (r = (i = this.defaultReturnFormat) !== null && i !== void 0 ? i : Be);
      const o = yield (s = this.subscriptionManager) === null || s === void 0 ? void 0 : s.subscribe(e, n, r);
      return o instanceof Ff && e === "logs" && typeof n == "object" && !q(n.fromBlock) && Number.isFinite(Number(n.fromBlock)) && setImmediate(() => {
        this.getPastLogs(n).then((a) => {
          for (const d of a)
            o._processSubscriptionResult(d);
        }).catch((a) => {
          o._processSubscriptionError(a);
        });
      }), o;
    });
  }
  static shouldClearSubscription({ sub: e }) {
    return !(e instanceof Hf);
  }
  /**
   * Resets subscriptions.
   *
   * @param notClearSyncing If `true` it keeps the `syncing` subscription.
   * @returns A promise to an array of subscription ids that were cleared.
   *
   * ```ts
   * web3.eth.clearSubscriptions().then(console.log);
   * > [...] An array of subscription ids that were cleared
   * ```
   */
  clearSubscriptions(e = !1) {
    var n;
    return (n = this.subscriptionManager) === null || n === void 0 ? void 0 : n.unsubscribe(
      // eslint-disable-next-line
      e ? zs.shouldClearSubscription : void 0
    );
  }
  /**
   * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewPendingTransactionFilter().then(console.log);
   * > 1n
   *
   * web3.eth.createNewPendingTransactionFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewPendingTransactionFilter() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return I_(this, e);
    });
  }
  /**
   * Creates a filter object, based on filter options, to notify when the state changes (logs)
   *
   * @param filter A {@link FilterParams} object containing the filter properties.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewFilter(filterParams).then(console.log);
   * > 1n
   *
   * web3.eth.createNewFilter(filterParams, { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewFilter(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      return x_(this, n, r);
    });
  }
  /**
   * Creates a filter in the node, to notify when a new block arrives.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewBlockFilter().then(console.log);
   * > 1n
   *
   * web3.eth.createNewBlockFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewBlockFilter() {
    return W(this, arguments, void 0, function* (e = this.defaultReturnFormat) {
      return T_(this, e);
    });
  }
  /**
   * Uninstalls a filter with given id. Should always be called when watch is no longer needed.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @returns true if the filter was successfully uninstalled, otherwise false.
   *
   * ```ts
   * web3.eth.uninstallFilter(123).then(console.log);
   * > true
   *
   * web3.eth.uninstallFilter('0x123').then(console.log);
   * > true
   *
   * web3.eth.uninstallFilter(12n).then(console.log);
   * > true
   * ```
   */
  uninstallFilter(e) {
    return W(this, void 0, void 0, function* () {
      return S_(this, e);
    });
  }
  /**
   *  Polling method for a filter, which returns an array of logs which occurred since last poll.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getFilterChanges(123).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   */
  getFilterChanges(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      return k_(this, n, r);
    });
  }
  /**
   *  Returns an array of all logs matching filter with given id.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getFilterLogs(123).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   */
  getFilterLogs(e) {
    return W(this, arguments, void 0, function* (n, r = this.defaultReturnFormat) {
      return R_(this, n, r);
    });
  }
}
const B_ = (t) => {
  if (!E(t.common)) {
    if (E(t.common.customChain))
      throw new bp();
    if (E(t.common.customChain.chainId))
      throw new Ap();
    if (!E(t.chainId) && t.chainId !== t.common.customChain.chainId)
      throw new wp({
        txChainId: t.chainId,
        customChainId: t.common.customChain.chainId
      });
  }
}, P_ = (t) => {
  if (!E(t.common) && !E(t.chain) && !E(t.hardfork))
    throw new Ep();
  if (!E(t.chain) && E(t.hardfork) || !E(t.hardfork) && E(t.chain))
    throw new Ip({
      chain: t.chain,
      hardfork: t.hardfork
    });
}, C_ = (t) => {
  if (!E(t.common) && !E(t.common.baseChain) && !E(t.chain) && t.chain !== t.common.baseChain)
    throw new _p({
      txChain: t.chain,
      baseChain: t.common.baseChain
    });
}, N_ = (t) => {
  if (!E(t.common) && !E(t.common.hardfork) && !E(t.hardfork) && t.hardfork !== t.common.hardfork)
    throw new vp({
      txHardfork: t.hardfork,
      commonHardfork: t.common.hardfork
    });
}, iu = (t) => {
  if (
    // This check is verifying gas and gasPrice aren't less than 0.
    E(t.gas) || !Ct(t.gas) || E(t.gasPrice) || !Ct(t.gasPrice)
  )
    throw new Rp({
      gas: t.gas,
      gasPrice: t.gasPrice
    });
  if (!E(t.maxFeePerGas) || !E(t.maxPriorityFeePerGas))
    throw new wu({
      maxFeePerGas: t.maxFeePerGas,
      maxPriorityFeePerGas: t.maxPriorityFeePerGas
    });
}, su = (t) => {
  if (!E(t.gasPrice) && t.type === "0x2")
    throw new Pp(t.gasPrice);
  if (t.type === "0x0" || t.type === "0x1")
    throw new wu({
      maxFeePerGas: t.maxFeePerGas,
      maxPriorityFeePerGas: t.maxPriorityFeePerGas
    });
  if (E(t.maxFeePerGas) || !Ct(t.maxFeePerGas) || E(t.maxPriorityFeePerGas) || !Ct(t.maxPriorityFeePerGas))
    throw new Bp({
      maxPriorityFeePerGas: t.maxPriorityFeePerGas,
      maxFeePerGas: t.maxFeePerGas
    });
}, M_ = (t) => {
  const e = !E(t.gas) || !E(t.gasLimit), n = e && !E(t.gasPrice), r = e && !E(t.maxPriorityFeePerGas) && !E(t.maxFeePerGas);
  if (!n && !r)
    throw new Tp({
      gas: t.gas,
      gasPrice: t.gasPrice,
      maxPriorityFeePerGas: t.maxPriorityFeePerGas,
      maxFeePerGas: t.maxFeePerGas
    });
  if (n && r)
    throw new kp({
      gas: t.gas,
      gasPrice: t.gasPrice,
      maxPriorityFeePerGas: t.maxPriorityFeePerGas,
      maxFeePerGas: t.maxFeePerGas
    });
  (n ? iu : su)(t), (!E(t.type) && t.type > "0x1" ? su : iu)(t);
}, O_ = (t, e, n = { transactionSchema: void 0 }) => {
  if (!E(e)) {
    e(t);
    return;
  }
  if (typeof t != "object" || E(t))
    throw new Cp(t);
  B_(t), P_(t), C_(t), N_(t);
  const r = je(t, Z, {
    transactionSchema: n.transactionSchema
  });
  if (M_(r), E(r.nonce) || E(r.chainId) || r.nonce.startsWith("-") || r.chainId.startsWith("-"))
    throw new Np({
      nonce: t.nonce,
      chainId: t.chainId
    });
};
var L_ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const D_ = (t) => {
  var e, n;
  return Object.assign(Object.assign({}, t), { nonce: t.nonce, gasPrice: t.gasPrice, gasLimit: (e = t.gasLimit) !== null && e !== void 0 ? e : t.gas, to: t.to, value: t.value, data: (n = t.data) !== null && n !== void 0 ? n : t.input, type: t.type, chainId: t.chainId, accessList: t.accessList, maxPriorityFeePerGas: t.maxPriorityFeePerGas, maxFeePerGas: t.maxFeePerGas });
}, F_ = (t, e) => {
  var n, r, i, s, o, a, d, u, c, f, h, g, b, p, m, l, A, w;
  const x = !E(t.chain) && !E(t.hardfork) || !E(t.common);
  let I;
  if (!x)
    e.defaultCommon ? (I = Object.assign({}, e.defaultCommon), E(I.hardfork) && (I.hardfork = (n = t.hardfork) !== null && n !== void 0 ? n : e.defaultHardfork), E(I.baseChain) && (I.baseChain = e.defaultChain)) : I = we.custom({
      name: "custom-network",
      chainId: Fe(t.chainId),
      networkId: E(t.networkId) ? void 0 : Fe(t.networkId),
      defaultHardfork: (r = t.hardfork) !== null && r !== void 0 ? r : e.defaultHardfork
    }, {
      baseChain: e.defaultChain
    });
  else {
    const R = (a = (o = (s = (i = t == null ? void 0 : t.common) === null || i === void 0 ? void 0 : i.customChain) === null || s === void 0 ? void 0 : s.name) !== null && o !== void 0 ? o : t.chain) !== null && a !== void 0 ? a : "custom-network", P = Fe((c = (u = (d = t == null ? void 0 : t.common) === null || d === void 0 ? void 0 : d.customChain) === null || u === void 0 ? void 0 : u.chainId) !== null && c !== void 0 ? c : t == null ? void 0 : t.chainId), v = Fe((g = (h = (f = t == null ? void 0 : t.common) === null || f === void 0 ? void 0 : f.customChain) === null || h === void 0 ? void 0 : h.networkId) !== null && g !== void 0 ? g : t == null ? void 0 : t.networkId), U = (m = (p = (b = t == null ? void 0 : t.common) === null || b === void 0 ? void 0 : b.hardfork) !== null && p !== void 0 ? p : t == null ? void 0 : t.hardfork) !== null && m !== void 0 ? m : e.defaultHardfork, k = (w = (A = (l = t.common) === null || l === void 0 ? void 0 : l.baseChain) !== null && A !== void 0 ? A : t.chain) !== null && w !== void 0 ? w : e.defaultChain;
    P && v && R && (I = we.custom({
      name: R,
      chainId: P,
      networkId: v,
      defaultHardfork: U
    }, {
      baseChain: k
    }));
  }
  return { common: I };
}, H_ = (t, e, n, ...r) => L_(void 0, [t, e, n, ...r], void 0, function* (i, s, o, a = !1, d = !0) {
  const u = yield hw({
    transaction: i,
    web3Context: s,
    privateKey: o,
    fillGasPrice: a,
    fillGasLimit: d
  }), c = je(u, Z, {
    transactionSchema: s.config.customTransactionSchema
  });
  return O_(c, void 0, {
    transactionSchema: s.config.customTransactionSchema
  }), Tn.fromTxData(D_(c), F_(c, s));
}), ou = ({ address: t }, e, n) => {
  var r, i;
  const s = n == null ? void 0 : n.topics, o = (r = n == null ? void 0 : n.filter) !== null && r !== void 0 ? r : {}, a = {};
  if (q(n == null ? void 0 : n.fromBlock) || (a.fromBlock = T(cs.properties.number, n == null ? void 0 : n.fromBlock, {
    number: Ke.HEX,
    bytes: Bt.HEX
  })), q(n == null ? void 0 : n.toBlock) || (a.toBlock = T(cs.properties.number, n == null ? void 0 : n.toBlock, {
    number: Ke.HEX,
    bytes: Bt.HEX
  })), s && Array.isArray(s))
    a.topics = [...s];
  else if (a.topics = [], e && !e.anonymous && ![ar, "allEvents"].includes(e.name) && a.topics.push((i = e.signature) !== null && i !== void 0 ? i : qa(Rt(e))), ![ar, "allEvents"].includes(e.name) && e.inputs)
    for (const d of e.inputs) {
      if (!d.indexed)
        continue;
      const u = o[d.name];
      if (!u) {
        a.topics.push(null);
        continue;
      }
      Array.isArray(u) ? a.topics.push(u.map((c) => qo(d.type, c))) : d.type === "string" ? a.topics.push(tr(u)) : a.topics.push(qo(d.type, u));
    }
  return a.topics.length || delete a.topics, t && (a.address = t.toLowerCase()), a;
}, Pr = (t, e, n) => {
  const r = Array.isArray(t.inputs) ? t.inputs.length : 0;
  if (t.inputs && r !== e.length)
    throw new Pe(`The number of arguments is not matching the methods required number. You need to pass ${r} arguments.`);
  let i;
  if (t.inputs ? i = qs(Array.isArray(t.inputs) ? t.inputs : [], e).replace("0x", "") : i = Jw(e).replace("0x", ""), Aw(t)) {
    if (!n)
      throw new Pe("The contract has no contract data option set. This is necessary to append the constructor parameters.");
    return n.startsWith("0x") ? `${n}${i}` : `0x${n}${i}`;
  }
  return `${Xr(t)}${i}`;
};
class jf extends di {
  constructor(e, n) {
    super(e, n), this.address = e.address, this.topics = e.topics, this.abi = e.abi, this.jsonInterface = e.jsonInterface;
  }
  _buildSubscriptionParams() {
    return ["logs", { address: this.address, topics: this.topics }];
  }
  formatSubscriptionResult(e) {
    return $a(this.abi, e, this.jsonInterface, super.returnFormat);
  }
}
Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
const Vs = (t, e, n, r) => {
  var i, s;
  const o = {};
  return (!q(t.data) || r === "both") && (o.data = Pr(e, n, (i = t.data) !== null && i !== void 0 ? i : t.input)), (!q(t.input) || r === "both") && (o.input = Pr(e, n, (s = t.input) !== null && s !== void 0 ? s : t.data)), q(o.input) && q(o.data) && (o[r] = Pr(e, n)), { data: o.data, input: o.input };
}, Qo = ({ abi: t, params: e, options: n, contractOptions: r }) => {
  var i, s, o;
  if (!((o = (s = (i = n == null ? void 0 : n.input) !== null && i !== void 0 ? i : n == null ? void 0 : n.data) !== null && s !== void 0 ? s : r.input) !== null && o !== void 0 ? o : r.data) && !(n != null && n.to) && !r.address)
    throw new Pe("Contract address not specified");
  if (!(n != null && n.from) && !r.from)
    throw new Pe('Contract "from" address not specified');
  let d = Yt({
    to: r.address,
    gas: r.gas,
    gasPrice: r.gasPrice,
    from: r.from,
    input: r.input,
    maxPriorityFeePerGas: r.maxPriorityFeePerGas,
    maxFeePerGas: r.maxFeePerGas,
    data: r.data
  }, n);
  const u = Vs(d, t, e, n == null ? void 0 : n.dataInputFill);
  return d = Object.assign(Object.assign({}, d), { data: u.data, input: u.input }), d;
}, j_ = ({ abi: t, params: e, options: n, contractOptions: r }) => {
  if (!(n != null && n.to) && !r.address)
    throw new Pe("Contract address not specified");
  let i = Yt({
    to: r.address,
    gas: r.gas,
    gasPrice: r.gasPrice,
    from: r.from,
    input: r.input,
    maxPriorityFeePerGas: r.maxPriorityFeePerGas,
    maxFeePerGas: r.maxFeePerGas,
    data: r.data
  }, n);
  const s = Vs(i, t, e, n == null ? void 0 : n.dataInputFill);
  return i = Object.assign(Object.assign({}, i), { data: s.data, input: s.input }), i;
}, U_ = ({ abi: t, params: e, options: n, contractOptions: r }) => {
  let i = Yt({
    to: r.address,
    gas: r.gas,
    gasPrice: r.gasPrice,
    from: r.from,
    input: r.input,
    data: r.data
  }, n);
  const s = Vs(i, t, e, n == null ? void 0 : n.dataInputFill);
  return i = Object.assign(Object.assign({}, i), { data: s.data, input: s.input }), i;
}, au = (t) => typeof t == "object" && !q(t) && Object.keys(t).length !== 0 && !Ut(t), G_ = ({ abi: t, params: e, options: n, contractOptions: r }) => {
  if (!(n != null && n.to) && !r.address)
    throw new Pe("Contract address not specified");
  if (!(n != null && n.from) && !r.from)
    throw new Pe('Contract "from" address not specified');
  let i = Yt({
    to: r.address,
    gas: r.gas,
    gasPrice: r.gasPrice,
    from: r.from,
    input: r.input,
    maxPriorityFeePerGas: r.maxPriorityFeePerGas,
    maxFeePerGas: r.maxFeePerGas,
    data: r.data
  }, n);
  const s = Vs(i, t, e, n == null ? void 0 : n.dataInputFill);
  return i = Object.assign(Object.assign({}, i), { data: s.data, input: s.input }), i;
};
var q_ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class z_ {
  _contractMethodDeploySend(e) {
    const n = {
      transactionResolver: (r) => {
        if (r.status === BigInt(0))
          throw new Pe("code couldn't be stored", r);
        const i = this.parent.clone();
        return i.options.address = r.contractAddress, i;
      },
      contractAbi: this.parent.options.jsonInterface,
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: !1
    };
    return E(this.parent.getTransactionMiddleware()) ? ei(this.parent, e, this.parent.defaultReturnFormat, n) : ei(this.parent, e, this.parent.defaultReturnFormat, n, this.parent.getTransactionMiddleware());
  }
  constructor(e, n) {
    this.parent = e, this.deployOptions = n;
    const { args: r, abi: i, contractOptions: s, deployData: o } = this.calculateDeployParams();
    this.args = r, this.constructorAbi = i, this.contractOptions = s, this.deployData = o;
  }
  send(e) {
    const n = Object.assign({}, e), r = this.populateTransaction(n);
    return this._contractMethodDeploySend(r);
  }
  populateTransaction(e) {
    var n, r;
    const i = Object.assign(Object.assign({}, this.contractOptions), { from: (r = (n = this.contractOptions.from) !== null && n !== void 0 ? n : this.parent.defaultAccount) !== null && r !== void 0 ? r : void 0 }), s = Qo({
      abi: this.constructorAbi,
      params: this.args,
      options: Object.assign(Object.assign({}, e), { dataInputFill: this.parent.contractDataInputFill }),
      contractOptions: i
    });
    return s.dataInputFill && delete s.dataInputFill, s;
  }
  calculateDeployParams() {
    var e, n, r, i, s, o;
    let a = this.parent.options.jsonInterface.find((g) => g.type === "constructor");
    a || (a = {
      type: "constructor",
      stateMutability: ""
    });
    const d = T({ format: "bytes" }, (n = (e = this.deployOptions) === null || e === void 0 ? void 0 : e.input) !== null && n !== void 0 ? n : this.parent.options.input, Be), u = T({ format: "bytes" }, (i = (r = this.deployOptions) === null || r === void 0 ? void 0 : r.data) !== null && i !== void 0 ? i : this.parent.options.data, Be);
    if ((!d || d.trim() === "0x") && (!u || u.trim() === "0x"))
      throw new Pe("contract creation without any data provided.");
    const c = (o = (s = this.deployOptions) === null || s === void 0 ? void 0 : s.arguments) !== null && o !== void 0 ? o : [], f = Object.assign(Object.assign({}, this.parent.options), { input: d, data: u });
    return { args: c, abi: a, contractOptions: f, deployData: d ?? u };
  }
  estimateGas(e) {
    return q_(this, arguments, void 0, function* (n, r = this.parent.defaultReturnFormat) {
      const i = Object.assign({}, n);
      return this.parent.contractMethodEstimateGas({
        abi: this.constructorAbi,
        params: this.args,
        returnFormat: r,
        options: i,
        contractOptions: this.contractOptions
      });
    });
  }
  encodeABI() {
    return Pr(this.constructorAbi, this.args, T({ format: "bytes" }, this.deployData, this.parent.defaultReturnFormat));
  }
  decodeData(e) {
    return Object.assign(Object.assign({}, zo(this.constructorAbi, e.replace(this.deployData, ""), !1)), { __method__: this.constructorAbi.type });
  }
}
var V_ = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Q_ extends is {
  /**
   *
   * @param - Web3SubscriptionManager
   * @param - parentContract
   *
   * @example
   * ```ts
   * const requestManager = new Web3RequestManager("ws://localhost:8545");
   * const contract = new Contract(...)
   * const subscriptionManager = new Web3SubscriptionManager(requestManager, {}, contract);
   * ```
   */
  constructor(e, n) {
    super(e.requestManager, e.registeredSubscriptions), this.parentContract = n;
  }
  /**
   * Will create a new subscription
   *
   * @param name - The subscription you want to subscribe to
   * @param args - Optional additional parameters, depending on the subscription type
   * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   *
   * Will subscribe to a specific topic (note: name)
   * @returns The subscription object
   */
  subscribe(e, n) {
    const r = Object.create(null, {
      subscribe: { get: () => super.subscribe }
    });
    return V_(this, arguments, void 0, function* (i, s, o = Be) {
      return r.subscribe.call(this, i, s ?? this.parentContract.options, o);
    });
  }
}
var nn = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const $_ = {
  logs: jf,
  newHeads: ls,
  newBlockHeaders: ls
};
class gn extends He {
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  constructor(e, n, r, i, s) {
    var o, a, d;
    const u = Ut(n) ? n : Ut(r) ? r : void 0;
    let c;
    au(n) ? c = n : au(r) ? c = r : c = i;
    let f;
    if (typeof n == "object" && "provider" in n ? f = n.provider : typeof r == "object" && "provider" in r ? f = r.provider : typeof i == "object" && "provider" in i ? f = i.provider : f = gn.givenProvider, super(Object.assign(Object.assign({}, c), { provider: f, registeredSubscriptions: $_ })), this.syncWithContext = !1, this._functions = {}, this._subscriptionManager = new Q_(super.subscriptionManager, this), c != null && c.wallet && (this._wallet = c.wallet), c != null && c.accountProvider && (this._accountProvider = c.accountProvider), !E(u) && !E(u.data) && !E(u.input) && this.config.contractDataInputFill !== "both")
      throw new cp({
        data: u.data,
        input: u.input
      });
    this._overloadedMethodAbis = /* @__PURE__ */ new Map();
    const h = Tt(i) ? i : Tt(r) ? r : s ?? this.defaultReturnFormat, g = typeof n == "string" ? n : void 0;
    this.config.contractDataInputFill = (o = u == null ? void 0 : u.dataInputFill) !== null && o !== void 0 ? o : this.config.contractDataInputFill, this._parseAndSetJsonInterface(e, h), this.defaultReturnFormat !== h && (this.defaultReturnFormat = h), E(g) || this._parseAndSetAddress(g, h), this.options = {
      address: g,
      jsonInterface: this._jsonInterface,
      gas: (a = u == null ? void 0 : u.gas) !== null && a !== void 0 ? a : u == null ? void 0 : u.gasLimit,
      gasPrice: u == null ? void 0 : u.gasPrice,
      from: u == null ? void 0 : u.from,
      input: u == null ? void 0 : u.input,
      data: u == null ? void 0 : u.data
    }, this.syncWithContext = (d = u == null ? void 0 : u.syncWithContext) !== null && d !== void 0 ? d : !1, c instanceof He && this.subscribeToContextEvents(c), Object.defineProperty(this.options, "address", {
      set: (b) => this._parseAndSetAddress(b, h),
      get: () => this._address
    }), Object.defineProperty(this.options, "jsonInterface", {
      set: (b) => this._parseAndSetJsonInterface(b, h),
      get: () => this._jsonInterface
    }), c instanceof He && c.on(In.CONFIG_CHANGE, (b) => {
      this.setConfig({ [b.name]: b.newValue });
    });
  }
  setTransactionMiddleware(e) {
    this.transactionMiddleware = e;
  }
  getTransactionMiddleware() {
    return this.transactionMiddleware;
  }
  /**
   * Subscribe to an event.
   *
   * ```ts
   * await myContract.events.MyEvent([options])
   * ```
   *
   * There is a special event `allEvents` that can be used to subscribe all events.
   *
   * ```ts
   * await myContract.events.allEvents([options])
   * ```
   *
   * @returns - When individual event is accessed will returns {@link ContractBoundEvent} object
   */
  get events() {
    return this._events;
  }
  /**
   * Creates a transaction object for that method, which then can be `called`, `send`, `estimated`, `createAccessList` , or `ABI encoded`.
   *
   * The methods of this smart contract are available through:
   *
   * The name: `myContract.methods.myMethod(123)`
   * The name with parameters: `myContract.methods['myMethod(uint256)'](123)`
   * The signature `myContract.methods['0x58cf5f10'](123)`
   *
   * This allows calling functions with same name but different parameters from the JavaScript contract object.
   *
   * \> The method signature does not provide a type safe interface, so we recommend to use method `name` instead.
   *
   * ```ts
   * // calling a method
   * const result = await myContract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using a promise
   * const receipt = await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using the events
   * const sendObject = myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   * sendObject.on('transactionHash', function(hash){
   *   ...
   * });
   * sendObject.on('receipt', function(receipt){
   *   ...
   * });
   * sendObject.on('confirmation', function(confirmationNumber, receipt){
   *   ...
   * });
   * sendObject.on('error', function(error, receipt) {
   *   ...
   * });
   * ```
   *
   * @returns - Either returns {@link PayableMethodObject} or {@link NonPayableMethodObject} based on the definitions of the ABI of that contract.
   */
  get methods() {
    return this._methods;
  }
  /**
   * Clones the current contract instance. This doesn't deploy contract on blockchain and only creates a local clone.
   *
   * @returns - The new contract instance.
   *
   * ```ts
   * const contract1 = new web3.eth.Contract(abi, address, {gasPrice: '12345678', from: fromAddress});
   *
   * const contract2 = contract1.clone();
   * contract2.options.address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
   *
   * (contract1.options.address !== contract2.options.address);
   * > true
   * ```
   */
  clone() {
    let e;
    return this.options.address ? e = new gn([...this._jsonInterface, ...this._errorsInterface], this.options.address, {
      gas: this.options.gas,
      gasPrice: this.options.gasPrice,
      from: this.options.from,
      input: this.options.input,
      data: this.options.data,
      provider: this.currentProvider,
      syncWithContext: this.syncWithContext,
      dataInputFill: this.config.contractDataInputFill
    }, this.getContextObject()) : e = new gn([...this._jsonInterface, ...this._errorsInterface], {
      gas: this.options.gas,
      gasPrice: this.options.gasPrice,
      from: this.options.from,
      input: this.options.input,
      data: this.options.data,
      provider: this.currentProvider,
      syncWithContext: this.syncWithContext,
      dataInputFill: this.config.contractDataInputFill
    }, this.getContextObject()), this.context && e.subscribeToContextEvents(this.context), e;
  }
  /**
   * Call this function to deploy the contract to the blockchain. After successful deployment the promise will resolve with a new contract instance.
   *
   * ```ts
   * myContract.deploy({
   *   input: '0x12345...', // data keyword can be used, too.
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * }, function(error, transactionHash){ ... })
   * .on('error', function(error){ ... })
   * .on('transactionHash', function(transactionHash){ ... })
   * .on('receipt', function(receipt){
   *  console.log(receipt.contractAddress) // contains the new contract address
   * })
   * .on('confirmation', function(confirmationNumber, receipt){ ... })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // When the data is already set as an option to the contract itself
   * myContract.options.data = '0x12345...';
   *
   * myContract.deploy({
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // Simply encoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .encodeABI();
   * > '0x12345...0000012345678765432'
   *
   *
   * // decoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   // arguments: [123, 'My Greeting'] if you just need to decode the data, you can skip the arguments
   * })
   * .decodeData('0x12345...0000012345678765432');
   * > {
   *      __method__: 'constructor',
   *      __length__: 2,
   *      '0': '123',
   *      _id: '123',
   *      '1': 'My Greeting',
   *      _greeting: 'My Greeting',
   *   }
   *
   *
   * // Gas estimation
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .estimateGas(function(err, gas){
   *   console.log(gas);
   * });
   * ```
   *
   * @returns - The transaction object
   */
  deploy(e) {
    return new z_(this, e);
  }
  getPastEvents(e, n, r) {
    return nn(this, void 0, void 0, function* () {
      var i;
      const s = typeof e == "string" ? e : ar, o = (
        // eslint-disable-next-line no-nested-ternary
        typeof e != "string" && !Tt(e) ? e : Tt(n) ? {} : n
      ), a = Tt(e) ? e : Tt(n) ? n : r ?? this.defaultReturnFormat, d = s === "allEvents" || s === ar ? Lo : this._jsonInterface.find((l) => "name" in l && l.name === s);
      if (!d)
        throw new Pe(`Event ${String(s)} not found.`);
      const { fromBlock: u, toBlock: c, topics: f, address: h } = ou(this.options, d, o ?? {}), g = yield Of(this, { fromBlock: u, toBlock: c, topics: f, address: h }, a), b = g ? g.map((l) => typeof l == "string" ? l : $a(d, l, this._jsonInterface, a)) : [], p = (i = o == null ? void 0 : o.filter) !== null && i !== void 0 ? i : {}, m = Object.keys(p);
      return m.length > 0 ? b.filter((l) => typeof l == "string" ? !0 : m.every((A) => {
        var w;
        if (Array.isArray(p[A]))
          return p[A].some((I) => String(l.returnValues[A]).toUpperCase() === String(I).toUpperCase());
        const x = (w = d.inputs) === null || w === void 0 ? void 0 : w.filter((I) => I.name === A)[0];
        return x != null && x.indexed && x.type === "string" && tr(p[A]) === String(l.returnValues[A]) ? !0 : String(l.returnValues[A]).toUpperCase() === String(p[A]).toUpperCase();
      })) : b;
    });
  }
  _parseAndSetAddress(e, n = this.defaultReturnFormat) {
    this._address = e && yt(T({ format: "address" }, e, n));
  }
  decodeMethodData(e) {
    const n = e.slice(0, 10), i = this._jsonInterface.filter((s) => s.type !== "error").find((s) => n === Xr(Rt(s)));
    if (!i)
      throw new Pe(`The ABI for the provided method signature ${n} was not found.`);
    return zo(i, e);
  }
  _parseAndSetJsonInterface(e, n = this.defaultReturnFormat) {
    var r, i;
    this._functions = {}, this._methods = {}, this._events = {};
    let s = [];
    const o = e.filter((d) => d.type !== "error"), a = e.filter((d) => Us(d));
    for (const d of o) {
      const u = Object.assign(Object.assign({}, d), { signature: "" });
      if (Gs(u)) {
        const c = Rt(u), f = Xr(c);
        u.methodNameWithInputs = c, u.signature = f, u.constant = u.stateMutability === "view" || u.stateMutability === "pure" || u.constant, u.payable = u.stateMutability === "payable" || u.payable, this._overloadedMethodAbis.set(u.name, [
          ...(r = this._overloadedMethodAbis.get(u.name)) !== null && r !== void 0 ? r : [],
          u
        ]);
        const h = (i = this._overloadedMethodAbis.get(u.name)) !== null && i !== void 0 ? i : [], g = this._createContractMethod(h, a), b = this._createContractMethod(h, a, !0);
        this._functions[c] = {
          signature: f,
          method: b
        }, this._methods[u.name] = g, this._methods[c] = b, this._methods[f] = b;
      } else if (Ga(u)) {
        const c = Rt(u), f = qa(c), h = this._createContractEvent(u, n);
        u.signature = f, (!(c in this._events) || u.name === "bound") && (this._events[c] = h), this._events[u.name] = h, this._events[f] = h;
      }
      s = [...s, u];
    }
    this._events.allEvents = this._createContractEvent(Lo, n), this._jsonInterface = [...s], this._errorsInterface = a;
  }
  // eslint-disable-next-line class-methods-use-this
  _getAbiParams(e, n) {
    var r;
    try {
      return Br((r = e.inputs) !== null && r !== void 0 ? r : [], n);
    } catch (i) {
      throw new Pe(`Invalid parameters for method ${e.name}: ${i.message}`);
    }
  }
  _createContractMethod(e, n, r = !1) {
    const i = e[e.length - 1];
    return (...s) => {
      var o, a, d;
      let u;
      const c = (a = r ? (o = this._overloadedMethodAbis.get(i.name)) === null || o === void 0 ? void 0 : o.filter((p) => p.signature === i.signature) : this._overloadedMethodAbis.get(i.name)) !== null && a !== void 0 ? a : [];
      let f = c[0];
      const h = n, g = c.filter((p) => {
        var m;
        return ((m = p.inputs) !== null && m !== void 0 ? m : []).length === s.length;
      });
      if (c.length === 1 || g.length === 0)
        u = this._getAbiParams(f, s), G.validate((d = i.inputs) !== null && d !== void 0 ? d : [], u);
      else {
        const p = [], m = [];
        for (const l of g)
          try {
            u = this._getAbiParams(l, s), G.validate(l.inputs, u), m.push(l);
          } catch (A) {
            p.push(A);
          }
        if (m.length === 1 ? [f] = m : m.length > 1 && ([f] = m, console.warn(`Multiple methods found that is compatible with the given inputs.
	Found ${m.length} compatible methods: ${JSON.stringify(m.map((l) => `${l.methodNameWithInputs} (signature: ${l.signature})`))} 
	The first one will be used: ${f.methodNameWithInputs}`)), p.length === g.length)
          throw new Yn(p);
      }
      const b = {
        arguments: u,
        call: (p, m) => nn(this, void 0, void 0, function* () {
          return this._contractMethodCall(f, u, h, p, m);
        }),
        send: (p) => this._contractMethodSend(f, u, h, p),
        populateTransaction: (p, m) => {
          var l, A;
          let w = m ?? this.options;
          w = Object.assign(Object.assign({}, w), { input: void 0, from: (A = (l = w == null ? void 0 : w.from) !== null && l !== void 0 ? l : this.defaultAccount) !== null && A !== void 0 ? A : void 0 });
          const x = Qo({
            abi: i,
            params: s,
            options: Object.assign(Object.assign({}, p), { dataInputFill: this.config.contractDataInputFill }),
            contractOptions: w
          });
          return x.dataInputFill && delete x.dataInputFill, x;
        },
        estimateGas: (p, ...m) => nn(this, [p, ...m], void 0, function* (l, A = this.defaultReturnFormat) {
          return this.contractMethodEstimateGas({
            abi: f,
            params: u,
            returnFormat: A,
            options: l
          });
        }),
        encodeABI: () => Pr(f, u),
        decodeData: (p) => zo(f, p),
        createAccessList: (p, m) => nn(this, void 0, void 0, function* () {
          return this._contractMethodCreateAccessList(f, u, h, p, m);
        })
      };
      return f.stateMutability === "payable", b;
    };
  }
  _contractMethodCall(e, n, r, i, s) {
    return nn(this, void 0, void 0, function* () {
      var o;
      const a = j_({
        abi: e,
        params: n,
        options: Object.assign(Object.assign({}, i), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: Object.assign(Object.assign({}, this.options), { from: (o = this.options.from) !== null && o !== void 0 ? o : this.config.defaultAccount })
      });
      try {
        const d = yield Ka(this, a, s, this.defaultReturnFormat);
        return Xw(e, d);
      } catch (d) {
        throw d instanceof fn && xi(r, d.cause), d;
      }
    });
  }
  _contractMethodCreateAccessList(e, n, r, i, s) {
    return nn(this, void 0, void 0, function* () {
      var o;
      const a = G_({
        abi: e,
        params: n,
        options: Object.assign(Object.assign({}, i), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: Object.assign(Object.assign({}, this.options), { from: (o = this.options.from) !== null && o !== void 0 ? o : this.config.defaultAccount })
      });
      try {
        return Df(this, a, s, this.defaultReturnFormat);
      } catch (d) {
        throw d instanceof fn && xi(r, d.cause), d;
      }
    });
  }
  _contractMethodSend(e, n, r, i, s) {
    var o, a;
    let d = s ?? this.options;
    d = Object.assign(Object.assign({}, d), { input: void 0, from: (a = (o = d.from) !== null && o !== void 0 ? o : this.defaultAccount) !== null && a !== void 0 ? a : void 0 });
    const u = Qo({
      abi: e,
      params: n,
      options: Object.assign(Object.assign({}, i), { dataInputFill: this.config.contractDataInputFill }),
      contractOptions: d
    }), c = E(this.transactionMiddleware) ? ei(this, u, this.defaultReturnFormat, {
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: !1,
      contractAbi: this._jsonInterface
      // explicitly not passing middleware so if some one is using old eth package it will not break
    }) : ei(this, u, this.defaultReturnFormat, {
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: !1,
      contractAbi: this._jsonInterface
    }, this.transactionMiddleware);
    return c.on("error", (f) => {
      f instanceof fn && xi(r, f.cause);
    }), c;
  }
  contractMethodEstimateGas(e) {
    return nn(this, arguments, void 0, function* ({ abi: n, params: r, returnFormat: i, options: s, contractOptions: o }) {
      const a = U_({
        abi: n,
        params: r,
        options: Object.assign(Object.assign({}, s), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: o ?? this.options
      });
      return Ja(this, a, St.LATEST, i ?? this.defaultReturnFormat);
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _createContractEvent(e, n = this.defaultReturnFormat) {
    return (...r) => {
      var i;
      const { topics: s, fromBlock: o } = ou(this.options, e, r[0]), a = new jf({
        address: this.options.address,
        topics: s,
        abi: e,
        jsonInterface: this._jsonInterface
      }, {
        subscriptionManager: this.subscriptionManager,
        returnFormat: n
      });
      return E(o) || this.getPastEvents(e.name, { fromBlock: o, topics: s }, n).then((d) => {
        d && d.forEach((u) => a.emit("data", u));
      }).catch((d) => {
        a.emit("error", new It("Failed to get past events.", d));
      }), (i = this.subscriptionManager) === null || i === void 0 || i.addSubscription(a).catch((d) => {
        a.emit("error", new It("Failed to subscribe.", d));
      }), a;
    };
  }
  subscribeToContextEvents(e) {
    const n = this;
    this.context = e, n.syncWithContext && e.on(In.CONFIG_CHANGE, (r) => {
      n.setConfig({ [r.name]: r.newValue });
    });
  }
}
const cu = {
  addr: "0x3b3b57de",
  name: "0x691f3431",
  abi: "0x2203ab56",
  pubkey: "0xc8690233",
  text: "0x59d1d43c",
  contenthash: "0xbc1c58d1"
}, On = {
  setAddr: "addr",
  addr: "addr",
  pubkey: "pubkey",
  contenthash: "contenthash",
  text: "text",
  name: "name"
}, hs = {
  main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
}, Z_ = {
  "0x1": "main",
  "0x5": "goerli"
}, W_ = [
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "NewOwner",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
    name: "NewResolver",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "recordExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "resolver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "ttl",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], K_ = [
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "AddrChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "newAddress",
        type: "bytes"
      }
    ],
    name: "AddressChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "hash",
        type: "bytes"
      }
    ],
    name: "ContenthashChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "record",
        type: "bytes"
      }
    ],
    name: "DNSRecordChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      }
    ],
    name: "DNSRecordDeleted",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "DNSZoneCleared",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "lastzonehash",
        type: "bytes"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "zonehash",
        type: "bytes"
      }
    ],
    name: "DNSZonehashChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !0,
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "implementer",
        type: "address"
      }
    ],
    name: "InterfaceChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
      }
    ],
    name: "NameChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
      }
    ],
    name: "PubkeyChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: !0,
        internalType: "string",
        name: "indexedKey",
        type: "string"
      },
      {
        indexed: !1,
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "TextChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256"
      }
    ],
    name: "ABI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "addr",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
      }
    ],
    name: "addr",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "contenthash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
      },
      {
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      }
    ],
    name: "dnsRecord",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
      }
    ],
    name: "hasDNSRecords",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "interfaceImplementer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "pubkey",
    outputs: [
      {
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "text",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "zonehash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var J_ = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const uu = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), du = 4;
function Y_(t) {
  let e = 0;
  function n() {
    return t[e++] << 8 | t[e++];
  }
  let r = n(), i = 1, s = [0, 1];
  for (let I = 1; I < r; I++)
    s.push(i += n());
  let o = n(), a = e;
  e += o;
  let d = 0, u = 0;
  function c() {
    return d == 0 && (u = u << 8 | t[e++], d = 8), u >> --d & 1;
  }
  const f = 31, h = 2 ** f, g = h >>> 1, b = g >> 1, p = h - 1;
  let m = 0;
  for (let I = 0; I < f; I++) m = m << 1 | c();
  let l = [], A = 0, w = h;
  for (; ; ) {
    let I = Math.floor(((m - A + 1) * i - 1) / w), R = 0, P = r;
    for (; P - R > 1; ) {
      let k = R + P >>> 1;
      I < s[k] ? P = k : R = k;
    }
    if (R == 0) break;
    l.push(R);
    let v = A + Math.floor(w * s[R] / i), U = A + Math.floor(w * s[R + 1] / i) - 1;
    for (; !((v ^ U) & g); )
      m = m << 1 & p | c(), v = v << 1 & p, U = U << 1 & p | 1;
    for (; v & ~U & b; )
      m = m & g | m << 1 & p >>> 1 | c(), v = v << 1 ^ g, U = (U ^ g) << 1 | g | 1;
    A = v, w = 1 + U - v;
  }
  let x = r - 4;
  return l.map((I) => {
    switch (I - x) {
      case 3:
        return x + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
      case 2:
        return x + 256 + (t[a++] << 8 | t[a++]);
      case 1:
        return x + t[a++];
      default:
        return I - 1;
    }
  });
}
function X_(t) {
  let e = 0;
  return () => t[e++];
}
function Uf(t) {
  return X_(Y_(ev(t)));
}
function ev(t) {
  let e = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((i, s) => e[i.charCodeAt(0)] = s);
  let n = t.length, r = new Uint8Array(6 * n >> 3);
  for (let i = 0, s = 0, o = 0, a = 0; i < n; i++)
    a = a << 6 | e[t.charCodeAt(i)], o += 6, o >= 8 && (r[s++] = a >> (o -= 8));
  return r;
}
function tv(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function nv(t, e) {
  let n = Array(t);
  for (let r = 0, i = 0; r < t; r++) n[r] = i += tv(e());
  return n;
}
function ti(t, e = 0) {
  let n = [];
  for (; ; ) {
    let r = t(), i = t();
    if (!i) break;
    e += r;
    for (let s = 0; s < i; s++)
      n.push(e + s);
    e += i + 1;
  }
  return n;
}
function Gf(t) {
  return ni(() => {
    let e = ti(t);
    if (e.length) return e;
  });
}
function qf(t) {
  let e = [];
  for (; ; ) {
    let n = t();
    if (n == 0) break;
    e.push(rv(n, t));
  }
  for (; ; ) {
    let n = t() - 1;
    if (n < 0) break;
    e.push(iv(n, t));
  }
  return e.flat();
}
function ni(t) {
  let e = [];
  for (; ; ) {
    let n = t(e.length);
    if (!n) break;
    e.push(n);
  }
  return e;
}
function zf(t, e, n) {
  let r = Array(t).fill().map(() => []);
  for (let i = 0; i < e; i++)
    nv(t, n).forEach((s, o) => r[o].push(s));
  return r;
}
function rv(t, e) {
  let n = 1 + e(), r = e(), i = ni(e);
  return zf(i.length, 1 + t, e).flatMap((o, a) => {
    let [d, ...u] = o;
    return Array(i[a]).fill().map((c, f) => {
      let h = f * r;
      return [d + f * n, u.map((g) => g + h)];
    });
  });
}
function iv(t, e) {
  let n = 1 + e();
  return zf(n, 1 + t, e).map((i) => [i[0], i.slice(1)]);
}
function sv(t) {
  let e = [], n = ti(t);
  return i(r([]), []), e;
  function r(s) {
    let o = t(), a = ni(() => {
      let d = ti(t).map((u) => n[u]);
      if (d.length) return r(d);
    });
    return { S: o, B: a, Q: s };
  }
  function i({ S: s, B: o }, a, d) {
    if (!(s & 4 && d === a[a.length - 1])) {
      s & 2 && (d = a[a.length - 1]), s & 1 && e.push(a);
      for (let u of o)
        for (let c of u.Q)
          i(u, [...a, c], d);
    }
  }
}
function ov(t) {
  return t.toString(16).toUpperCase().padStart(2, "0");
}
function Vf(t) {
  return `{${ov(t)}}`;
}
function av(t) {
  let e = [];
  for (let n = 0, r = t.length; n < r; ) {
    let i = t.codePointAt(n);
    n += i < 65536 ? 1 : 2, e.push(i);
  }
  return e;
}
function ur(t) {
  let n = t.length;
  if (n < 4096) return String.fromCodePoint(...t);
  let r = [];
  for (let i = 0; i < n; )
    r.push(String.fromCodePoint(...t.slice(i, i += 4096)));
  return r.join("");
}
function cv(t, e) {
  let n = t.length, r = n - e.length;
  for (let i = 0; r == 0 && i < n; i++) r = t[i] - e[i];
  return r;
}
var uv = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const ri = 44032, ps = 4352, ms = 4449, gs = 4519, Qf = 19, $f = 21, dr = 28, ys = $f * dr, dv = Qf * ys, fv = ri + dv, lv = ps + Qf, hv = ms + $f, pv = gs + dr;
function Sr(t) {
  return t >> 24 & 255;
}
function Zf(t) {
  return t & 16777215;
}
let $o, fu, Zo, Ti;
function mv() {
  let t = Uf(uv);
  $o = new Map(Gf(t).flatMap((e, n) => e.map((r) => [r, n + 1 << 24]))), fu = new Set(ti(t)), Zo = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
  for (let [e, n] of qf(t)) {
    if (!fu.has(e) && n.length == 2) {
      let [r, i] = n, s = Ti.get(r);
      s || (s = /* @__PURE__ */ new Map(), Ti.set(r, s)), s.set(i, e);
    }
    Zo.set(e, n.reverse());
  }
}
function Wf(t) {
  return t >= ri && t < fv;
}
function gv(t, e) {
  if (t >= ps && t < lv && e >= ms && e < hv)
    return ri + (t - ps) * ys + (e - ms) * dr;
  if (Wf(t) && e > gs && e < pv && (t - ri) % dr == 0)
    return t + (e - gs);
  {
    let n = Ti.get(t);
    return n && (n = n.get(e), n) ? n : -1;
  }
}
function Kf(t) {
  $o || mv();
  let e = [], n = [], r = !1;
  function i(s) {
    let o = $o.get(s);
    o && (r = !0, s |= o), e.push(s);
  }
  for (let s of t)
    for (; ; ) {
      if (s < 128)
        e.push(s);
      else if (Wf(s)) {
        let o = s - ri, a = o / ys | 0, d = o % ys / dr | 0, u = o % dr;
        i(ps + a), i(ms + d), u > 0 && i(gs + u);
      } else {
        let o = Zo.get(s);
        o ? n.push(...o) : i(s);
      }
      if (!n.length) break;
      s = n.pop();
    }
  if (r && e.length > 1) {
    let s = Sr(e[0]);
    for (let o = 1; o < e.length; o++) {
      let a = Sr(e[o]);
      if (a == 0 || s <= a) {
        s = a;
        continue;
      }
      let d = o - 1;
      for (; ; ) {
        let u = e[d + 1];
        if (e[d + 1] = e[d], e[d] = u, !d || (s = Sr(e[--d]), s <= a)) break;
      }
      s = Sr(e[o]);
    }
  }
  return e;
}
function yv(t) {
  let e = [], n = [], r = -1, i = 0;
  for (let s of t) {
    let o = Sr(s), a = Zf(s);
    if (r == -1)
      o == 0 ? r = a : e.push(a);
    else if (i > 0 && i >= o)
      o == 0 ? (e.push(r, ...n), n.length = 0, r = a) : n.push(a), i = o;
    else {
      let d = gv(r, a);
      d >= 0 ? r = d : i == 0 && o == 0 ? (e.push(r), r = a) : (n.push(a), i = o);
    }
  }
  return r >= 0 && e.push(r, ...n), e;
}
function Jf(t) {
  return Kf(t).map(Zf);
}
function bv(t) {
  return yv(Kf(t));
}
const lu = 45, Yf = ".", Xf = 65039, el = 1, bs = (t) => Array.from(t);
function ii(t, e) {
  return t.P.has(e) || t.Q.has(e);
}
class Av extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Wo, tl, dn, Ko, nl, Qn, mo, Hn, rn, hu, Jo;
function Ya() {
  if (Wo) return;
  let t = Uf(J_);
  const e = () => ti(t), n = () => new Set(e()), r = (c, f) => f.forEach((h) => c.add(h));
  Wo = new Map(qf(t)), tl = n(), dn = e(), Ko = new Set(e().map((c) => dn[c])), dn = new Set(dn), nl = n(), n();
  let i = Gf(t), s = t();
  const o = () => {
    let c = /* @__PURE__ */ new Set();
    return e().forEach((f) => r(c, i[f])), r(c, e()), c;
  };
  Qn = ni((c) => {
    let f = ni(t).map((h) => h + 96);
    if (f.length) {
      let h = c >= s;
      f[0] -= 32, f = ur(f), h && (f = `Restricted[${f}]`);
      let g = o(), b = o(), p = !t();
      return { N: f, P: g, Q: b, M: p, R: h };
    }
  }), mo = n(), Hn = /* @__PURE__ */ new Map();
  let a = e().concat(bs(mo)).sort((c, f) => c - f);
  a.forEach((c, f) => {
    let h = t(), g = a[f] = h ? a[f - h] : { V: [], M: /* @__PURE__ */ new Map() };
    g.V.push(c), mo.has(c) || Hn.set(c, g);
  });
  for (let { V: c, M: f } of new Set(Hn.values())) {
    let h = [];
    for (let b of c) {
      let p = Qn.filter((l) => ii(l, b)), m = h.find(({ G: l }) => p.some((A) => l.has(A)));
      m || (m = { G: /* @__PURE__ */ new Set(), V: [] }, h.push(m)), m.V.push(b), r(m.G, p);
    }
    let g = h.flatMap((b) => bs(b.G));
    for (let { G: b, V: p } of h) {
      let m = new Set(g.filter((l) => !b.has(l)));
      for (let l of p)
        f.set(l, m);
    }
  }
  rn = /* @__PURE__ */ new Set();
  let d = /* @__PURE__ */ new Set();
  const u = (c) => rn.has(c) ? d.add(c) : rn.add(c);
  for (let c of Qn) {
    for (let f of c.P) u(f);
    for (let f of c.Q) u(f);
  }
  for (let c of rn)
    !Hn.has(c) && !d.has(c) && Hn.set(c, el);
  r(rn, Jf(rn)), hu = sv(t).map((c) => Av.from(c)).sort(cv), Jo = /* @__PURE__ */ new Map();
  for (let c of hu) {
    let f = [Jo];
    for (let h of c) {
      let g = f.map((b) => {
        let p = b.get(h);
        return p || (p = /* @__PURE__ */ new Map(), b.set(h, p)), p;
      });
      h === Xf ? f.push(...g) : f = g;
    }
    for (let h of f)
      h.V = c;
  }
}
function Xa(t) {
  return (rl(t) ? "" : `${ec(Qs([t]))} `) + Vf(t);
}
function ec(t) {
  return `"${t}"‎`;
}
function wv(t) {
  if (t.length >= 4 && t[2] == lu && t[3] == lu)
    throw new Error(`invalid label extension: "${ur(t.slice(0, 4))}"`);
}
function _v(t) {
  for (let n = t.lastIndexOf(95); n > 0; )
    if (t[--n] !== 95)
      throw new Error("underscore allowed only at start");
}
function vv(t) {
  let e = t[0], n = uu.get(e);
  if (n) throw Cr(`leading ${n}`);
  let r = t.length, i = -1;
  for (let s = 1; s < r; s++) {
    e = t[s];
    let o = uu.get(e);
    if (o) {
      if (i == s) throw Cr(`${n} + ${o}`);
      i = s + 1, n = o;
    }
  }
  if (i == r) throw Cr(`trailing ${n}`);
}
function Qs(t, e = 1 / 0, n = Vf) {
  let r = [];
  Ev(t[0]) && r.push("◌"), t.length > e && (e >>= 1, t = [...t.slice(0, e), 8230, ...t.slice(-e)]);
  let i = 0, s = t.length;
  for (let o = 0; o < s; o++) {
    let a = t[o];
    rl(a) && (r.push(ur(t.slice(i, o))), r.push(n(a)), i = o + 1);
  }
  return r.push(ur(t.slice(i, s))), r.join("");
}
function Ev(t) {
  return Ya(), dn.has(t);
}
function rl(t) {
  return Ya(), nl.has(t);
}
function Iv(t) {
  return kv(xv(t, bv, Pv));
}
function xv(t, e, n) {
  if (!t) return [];
  Ya();
  let r = 0;
  return t.split(Yf).map((i) => {
    let s = av(i), o = {
      input: s,
      offset: r
      // codepoint, not substring!
    };
    r += s.length + 1;
    try {
      let a = o.tokens = Bv(s, e, n), d = a.length, u;
      if (!d)
        throw new Error("empty label");
      let c = o.output = a.flat();
      if (_v(c), !(o.emoji = d > 1 || a[0].is_emoji) && c.every((h) => h < 128))
        wv(c), u = "ASCII";
      else {
        let h = a.flatMap((g) => g.is_emoji ? [] : g);
        if (!h.length)
          u = "Emoji";
        else {
          if (dn.has(c[0])) throw Cr("leading combining mark");
          for (let p = 1; p < d; p++) {
            let m = a[p];
            if (!m.is_emoji && dn.has(m[0]))
              throw Cr(`emoji + combining mark: "${ur(a[p - 1])} + ${Qs([m[0]])}"`);
          }
          vv(c);
          let g = bs(new Set(h)), [b] = Sv(g);
          Rv(b, h), Tv(b, g), u = b.N;
        }
      }
      o.type = u;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function Tv(t, e) {
  let n, r = [];
  for (let i of e) {
    let s = Hn.get(i);
    if (s === el) return;
    if (s) {
      let o = s.M.get(i);
      if (n = n ? n.filter((a) => o.has(a)) : bs(o), !n.length) return;
    } else
      r.push(i);
  }
  if (n) {
    for (let i of n)
      if (r.every((s) => ii(i, s)))
        throw new Error(`whole-script confusable: ${t.N}/${i.N}`);
  }
}
function Sv(t) {
  let e = Qn;
  for (let n of t) {
    let r = e.filter((i) => ii(i, n));
    if (!r.length)
      throw Qn.some((i) => ii(i, n)) ? sl(e[0], n) : il(n);
    if (e = r, r.length == 1) break;
  }
  return e;
}
function kv(t) {
  return t.map(({ input: e, error: n, output: r }) => {
    if (n) {
      let i = n.message;
      throw new Error(t.length == 1 ? i : `Invalid label ${ec(Qs(e, 63))}: ${i}`);
    }
    return ur(r);
  }).join(Yf);
}
function il(t) {
  return new Error(`disallowed character: ${Xa(t)}`);
}
function sl(t, e) {
  let n = Xa(e), r = Qn.find((i) => i.P.has(e));
  return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${t.N} + ${n}`);
}
function Cr(t) {
  return new Error(`illegal placement: ${t}`);
}
function Rv(t, e) {
  for (let n of e)
    if (!ii(t, n))
      throw sl(t, n);
  if (t.M) {
    let n = Jf(e);
    for (let r = 1, i = n.length; r < i; r++)
      if (Ko.has(n[r])) {
        let s = r + 1;
        for (let o; s < i && Ko.has(o = n[s]); s++)
          for (let a = r; a < s; a++)
            if (n[a] == o)
              throw new Error(`duplicate non-spacing marks: ${Xa(o)}`);
        if (s - r > du)
          throw new Error(`excessive non-spacing marks: ${ec(Qs(n.slice(r - 1, s)))} (${s - r}/${du})`);
        r = s;
      }
  }
}
function Bv(t, e, n) {
  let r = [], i = [];
  for (t = t.slice().reverse(); t.length; ) {
    let s = Cv(t);
    if (s)
      i.length && (r.push(e(i)), i = []), r.push(n(s));
    else {
      let o = t.pop();
      if (rn.has(o))
        i.push(o);
      else {
        let a = Wo.get(o);
        if (a)
          i.push(...a);
        else if (!tl.has(o))
          throw il(o);
      }
    }
  }
  return i.length && r.push(e(i)), r;
}
function Pv(t) {
  return t.filter((e) => e != Xf);
}
function Cv(t, e) {
  let n = Jo, r, i = t.length;
  for (; i && (n = n.get(t[--i]), !!n); ) {
    let { V: s } = n;
    s && (r = s, t.length = i);
  }
  return r;
}
const Nv = (t) => Iv(t), ct = (t) => {
  let e = "";
  for (let n = 0; n < 32; n += 1)
    e += "00";
  if (t) {
    const r = Nv(t).split(".");
    for (let i = r.length - 1; i >= 0; i -= 1) {
      const s = qe(r[i]).slice(2);
      e = qe(`0x${e}${s}`).slice(2);
    }
  }
  return `0x${e}`;
};
var bi = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Mv {
  constructor(e, n) {
    this.contract = new gn(W_, n ?? hs.main, e), this.context = e;
  }
  getOwner(e) {
    return bi(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.owner(ct(e)).call();
      } catch {
        throw new Error();
      }
    });
  }
  getTTL(e) {
    return bi(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.ttl(ct(e)).call();
      } catch {
        throw new Error();
      }
    });
  }
  recordExists(e) {
    return bi(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.recordExists(ct(e)).call();
      } catch {
        throw new Error();
      }
    });
  }
  getResolver(e) {
    return bi(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.resolver(ct(e)).call().then((n) => {
          if (typeof n == "string")
            return new gn(K_, n, this.context);
          throw new Error();
        });
      } catch {
        throw new Error();
      }
    });
  }
  get events() {
    return this.contract.events;
  }
}
var _t = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class Ov {
  constructor(e) {
    this.registry = e;
  }
  getResolverContractAdapter(e) {
    return _t(this, void 0, void 0, function* () {
      return this.registry.getResolver(e);
    });
  }
  //  https://eips.ethereum.org/EIPS/eip-165
  // eslint-disable-next-line class-methods-use-this
  checkInterfaceSupport(e, n) {
    var r, i;
    return _t(this, void 0, void 0, function* () {
      if (q(cu[n]))
        throw new ac((r = e.options.address) !== null && r !== void 0 ? r : "", n);
      if (!(yield e.methods.supportsInterface(cu[n]).call()))
        throw new ac((i = e.options.address) !== null && i !== void 0 ? i : "", n);
    });
  }
  supportsInterface(e, n) {
    var r;
    return _t(this, void 0, void 0, function* () {
      const i = yield this.getResolverContractAdapter(e);
      let s = n;
      if (!se(s)) {
        if (s = (r = ui(n)) !== null && r !== void 0 ? r : "", n === "")
          throw new Error("Invalid interface Id");
        s = s.slice(0, 10);
      }
      return i.methods.supportsInterface(s).call();
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  getAddress(e, n = 60) {
    return _t(this, void 0, void 0, function* () {
      const r = yield this.getResolverContractAdapter(e);
      return yield this.checkInterfaceSupport(r, On.addr), r.methods.addr(ct(e), n).call();
    });
  }
  getPubkey(e) {
    return _t(this, void 0, void 0, function* () {
      const n = yield this.getResolverContractAdapter(e);
      return yield this.checkInterfaceSupport(n, On.pubkey), n.methods.pubkey(ct(e)).call();
    });
  }
  getContenthash(e) {
    return _t(this, void 0, void 0, function* () {
      const n = yield this.getResolverContractAdapter(e);
      return yield this.checkInterfaceSupport(n, On.contenthash), n.methods.contenthash(ct(e)).call();
    });
  }
  setAddress(e, n, r) {
    return _t(this, void 0, void 0, function* () {
      const i = yield this.getResolverContractAdapter(e);
      return yield this.checkInterfaceSupport(i, On.setAddr), i.methods.setAddr(ct(e), n).send(r);
    });
  }
  getText(e, n) {
    return _t(this, void 0, void 0, function* () {
      const r = yield this.getResolverContractAdapter(e);
      return yield this.checkInterfaceSupport(r, On.text), r.methods.text(ct(e), n).call();
    });
  }
  getName(e, n = !0) {
    return _t(this, void 0, void 0, function* () {
      const r = `${e.toLowerCase().substring(2)}.addr.reverse`, i = yield this.getResolverContractAdapter(r);
      return n && (yield this.checkInterfaceSupport(i, On.name)), i.methods.name(ct(r)).call();
    });
  }
}
var Qe = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class ol extends He {
  /**
   * Use to create an instance of ENS
   * @param registryAddr - (Optional) The address of the ENS registry (default: mainnet registry address)
   * @param provider - (Optional) The provider to use for the ENS instance
   * @example
   * ```ts
   * const ens = new ENS(
   * 	"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
   * 	"http://localhost:8545"
   * );
   *
   * console.log( ens.defaultChain);
   * > mainnet
   * ```
   */
  constructor(e, n) {
    super(n ?? ""), this.registryAddress = e ?? hs.main, this._registry = new Mv(this.getContextObject(), e), this._resolver = new Ov(this._registry);
  }
  /**
   * Returns the Resolver by the given address
   * @param name - The name of the ENS domain
   * @returns - An contract instance of the resolver
   *
   * @example
   * ```ts
   * const resolver = await ens.getResolver('resolver');
   *
   * console.log(resolver.options.address);
   * > '0x1234567890123456789012345678901234567890'
   * ```
   */
  getResolver(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._registry.getResolver(e);
    });
  }
  /**
   * Returns true if the record exists
   * @param name - The ENS name
   * @returns - Returns `true` if node exists in this ENS registry. This will return `false` for records that are in the legacy ENS registry but have not yet been migrated to the new one.
   * @example
   * ```ts
   * const exists = await web3.eth.ens.recordExists('ethereum.eth');
   * ```
   */
  recordExists(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._registry.recordExists(e);
    });
  }
  /**
   * Returns the caching TTL (time-to-live) of an ENS name.
   * @param name - The ENS name
   * @returns - Returns the caching TTL (time-to-live) of a name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getTTL('ethereum.eth');
   * ```
   */
  getTTL(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._registry.getTTL(e);
    });
  }
  /**
   * Returns the owner by the given name and current configured or detected Registry
   * @param name - The ENS name
   * @returns - Returns the address of the owner of the name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getOwner('ethereum.eth');
   * ```
   */
  getOwner(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._registry.getOwner(e);
    });
  }
  /**
   * Resolves an ENS name to an Ethereum address.
   * @param ENSName - The ENS name to resolve
   * @param coinType - (Optional) The coin type, defaults to 60 (ETH)
   * @returns - The Ethereum address of the given name
   * ```ts
   * const address = await web3.eth.ens.getAddress('ethereum.eth');
   * console.log(address);
   * > '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
   * ```
   */
  getAddress(e, n = 60) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.getAddress(e, n);
    });
  }
  /**
   * ERC-634 - Returns the text content stored in the resolver for the specified key.
   * @param ENSName - The ENS name to resolve
   * @param key - The key to resolve https://github.com/ethereum/ercs/blob/master/ERCS/erc-634.md#global-keys
   * @returns - The value content stored in the resolver for the specified key
   */
  getText(e, n) {
    return Qe(this, void 0, void 0, function* () {
      return Ge(e) ? this._resolver.getText(yield this._resolver.getName(e, !1), n) : this._resolver.getText(e, n);
    });
  }
  /**
   * Resolves the name of an ENS node.
   * @param ENSName - The node to resolve
   * @returns - The name
   */
  getName(e, n = !0) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.getName(e, n);
    });
  }
  /**
   * Returns the X and Y coordinates of the curve point for the public key.
   * @param ENSName - The ENS name
   * @returns - The X and Y coordinates of the curve point for the public key
   * @example
   * ```ts
   * const key = await web3.eth.ens.getPubkey('ethereum.eth');
   * console.log(key);
   * > {
   * "0": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "1": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "x": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "y": "0x0000000000000000000000000000000000000000000000000000000000000000"
   * }
   * ```
   */
  getPubkey(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.getPubkey(e);
    });
  }
  /**
   * Returns the content hash object associated with an ENS node.
   * @param ENSName - The ENS name
   * @returns - The content hash object associated with an ENS node
   * @example
   * ```ts
   * const hash = await web3.eth.ens.getContenthash('ethereum.eth');
   * console.log(hash);
   * > 'QmaEBknbGT4bTQiQoe2VNgBJbRfygQGktnaW5TbuKixjYL'
   * ```
   */
  getContenthash(e) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.getContenthash(e);
    });
  }
  /**
   * Checks if the current used network is synced and looks for ENS support there.
   * Throws an error if not.
   * @returns - The address of the ENS registry if the network has been detected successfully
   * @example
   * ```ts
   * console.log(await web3.eth.ens.checkNetwork());
   * > '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
   * ```
   */
  checkNetwork() {
    return Qe(this, void 0, void 0, function* () {
      const e = Date.now() / 1e3;
      if (!this._lastSyncCheck || e - this._lastSyncCheck > 3600) {
        const i = yield o_(this);
        if (!(typeof i == "boolean" && !i))
          throw new dp();
        this._lastSyncCheck = e;
      }
      if (this._detectedAddress)
        return this._detectedAddress;
      const n = yield Ha(this, Object.assign(Object.assign({}, this.defaultReturnFormat), { number: Ke.HEX })), r = hs[Z_[n]];
      if (typeof r > "u")
        throw new up(n);
      return this._detectedAddress = r, this._detectedAddress;
    });
  }
  /**
   * Returns true if the related Resolver does support the given signature or interfaceId.
   * @param ENSName - The ENS name
   * @param interfaceId - The signature of the function or the interfaceId as described in the ENS documentation
   * @returns - `true` if the related Resolver does support the given signature or interfaceId.
   * @example
   * ```ts
   * const supports = await web3.eth.ens.supportsInterface('ethereum.eth', 'addr(bytes32');
   * console.log(supports);
   * > true
   * ```
   */
  supportsInterface(e, n) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.supportsInterface(e, n);
    });
  }
  /**
   * @returns - Returns all events that can be emitted by the ENS registry.
   */
  get events() {
    return this._registry.events;
  }
  /**
   * Sets the address of an ENS name in his resolver.
   * @param name - The ENS name
   * @param address - The address to set
   * @param txConfig - (Optional) The transaction config
   * @returns - The transaction receipt
   * ```ts
   * const receipt = await ens.setAddress('web3js.eth','0xe2597eb05cf9a87eb1309e86750c903ec38e527e');
   *```
   */
  setAddress(e, n, r) {
    return Qe(this, void 0, void 0, function* () {
      return this._resolver.setAddress(e, n, r);
    });
  }
}
var Dt = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const Lv = (t) => Dt(void 0, void 0, void 0, function* () {
  return (yield jA(t)).map(yt);
}), Dv = (t, e) => Dt(void 0, void 0, void 0, function* () {
  G.validate(["string"], [e]);
  const n = yield UA(t, e);
  return yt(n);
}), Fv = (t, e, n, r) => Dt(void 0, void 0, void 0, function* () {
  return G.validate(["address", "string", "uint"], [e, n, r]), GA(t, e, n, r);
}), Hv = (t, e) => Dt(void 0, void 0, void 0, function* () {
  return G.validate(["address"], [e]), qA(t, e);
}), jv = (t, e, n) => Dt(void 0, void 0, void 0, function* () {
  return G.validate(["string", "string"], [e, n]), zA(t, e, n);
}), Uv = (t, e, n, r) => Dt(void 0, void 0, void 0, function* () {
  const i = je(e, Z, {
    transactionSchema: r == null ? void 0 : r.customTransactionSchema
  });
  return VA(t, i, n);
}), Gv = (t, e, n, r) => Dt(void 0, void 0, void 0, function* () {
  const i = je(e, Z, {
    transactionSchema: r == null ? void 0 : r.customTransactionSchema
  });
  return QA(t, i, n);
}), qv = (t, e, n, r) => Dt(void 0, void 0, void 0, function* () {
  G.validate(["string", "address", "string"], [e, n, r]);
  const i = se(e) ? e : it(e);
  return $A(t, i, n, r);
}), zv = (t, e, n) => Dt(void 0, void 0, void 0, function* () {
  G.validate(["string", "string"], [e, n]);
  const r = se(e) ? e : it(e);
  return ZA(t, r, n);
});
var vt = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class al extends He {
  /**
   *Returns a list of accounts the node controls by using the provider and calling the RPC method personal_listAccounts. Using `web3.eth.accounts.create()` will not add accounts into this list. For that use `web3.eth.personal.newAccount()`.
   * @returns - An array of addresses controlled by the node.
   * @example
   * ```ts
   *  const accounts = await personal.getAccounts();
   * console.log(accounts);
   * >
   * [
   * 	'0x79D7BbaC53C9aF700d0B250e9AE789E503Fcd6AE',
   * 	'0xe2597eB05CF9a87eB1309e86750C903EC38E527e',
   * 	'0x7eD0e85B8E1E925600B4373e6d108F34AB38a401',
   * 	'0xE4bEEf667408b99053dC147Ed19592aDa0d77F59',
   * 	'0x7AB80aeB6bb488B7f6c41c58e83Ef248eB39c882',
   * 	'0x12B1D9d74d73b1C3A245B19C1C5501c653aF1af9',
   * 	'0x1a6075A263Ee140e00Dbf8E374Fc5A443d097894',
   * 	'0x4FEC0A51024B13030D26E70904B066C6d41157A5',
   * 	'0x03095dc4857BB26f3a4550c5651Df8b7f6b6B1Ef',
   * 	'0xac0B9b6e8A17991cb172B2ABAF45Fb5eb769E540'
   * ]
   * ```
   */
  getAccounts() {
    return vt(this, void 0, void 0, function* () {
      return Lv(this.requestManager);
    });
  }
  /**
   * Creates a new account and returns its address.
   * **_NOTE:_**  This function sends a sensitive information like password. Never call this function over a unsecured Websocket or HTTP provider, as your password will be sent in plain text!
   * @param password - The password to encrypt the account with.
   * @returns - The address of the new account.
   * @example
   * ```ts
   * const addr = await web3.eth.personal.newAccount('password');
   * console.log(addr);
   * > '0x1234567891011121314151617181920212223456'
   * ```
   */
  newAccount(e) {
    return vt(this, void 0, void 0, function* () {
      return Dv(this.requestManager, e);
    });
  }
  /**
   * Unlocks an account for a given duration.
   * @param address - The address of the account to unlock.
   * @param password - The password of the account to unlock.
   * @param unlockDuration - The duration in seconds to unlock the account for.
   * @example
   * ```ts
   * await personal.unlockAccount(
   * 	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	"123456",
   * 	600
   * );
   * ```
   */
  unlockAccount(e, n, r) {
    return vt(this, void 0, void 0, function* () {
      return Fv(this.requestManager, e, n, r);
    });
  }
  /**
   * Locks the given account
   * @param address - The address of the account to lock.
   * @returns - `true` if the account was locked, otherwise `false`.
   * @example
   * ```ts
   * await personal.lockAccount(
   * 	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e"
   * );
   * ```
   */
  lockAccount(e) {
    return vt(this, void 0, void 0, function* () {
      return Hv(this.requestManager, e);
    });
  }
  /**
   * Imports the given private key into the key store, encrypting it with the passphrase.
   * @param keyData - An unencrypted private key (hex string).
   * @param passphrase  - The password of the account
   * @returns - The address of the new account.
   * @example
   * ```ts
   * const accountAddress = await personal.importRawKey(
   * 	"abe40cb08850da918ee951b237fa87946499b2d8643e4aa12b0610b050c731f6",
   * 	"123456"
   * );
   *
   * console.log(unlockTx);
   * > 0x8727a8b34ec833154b72b62cac05d69f86eb6556
   * ```
   */
  importRawKey(e, n) {
    return vt(this, void 0, void 0, function* () {
      return jv(this.requestManager, e, n);
    });
  }
  /**
   * This method sends a transaction over the management API.
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param tx - The transaction options
   * @param passphrase - The passphrase of the current account
   * @returns - The transaction hash
   * @example
   * ```ts
   * const txHash = personal
   * .sendTransaction({
   *  	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	gasPrice: "20000000000",
   * 	gas: "21000",
   * 	to: "0x3535353535353535353535353535353535353535",
   * 	value: "1000000",
   * 	data: "",
   * 	nonce: 0,
   * },
   * "123456");
   *
   * console.log(txHash);
   * > 0x9445325c3c5638c9fe425b003b8c32f03e9f99d409555a650a6838ba712bb51b
   * ```
   */
  sendTransaction(e, n) {
    return vt(this, void 0, void 0, function* () {
      return Uv(this.requestManager, e, n, this.config);
    });
  }
  /**
   * Signs a transaction. This account needs to be unlocked.
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param tx - The transaction data to sign. See sendTransaction  for more information.
   * @param passphrase - The password of the `from` account, to sign the transaction with.
   * @returns - The RLP encoded transaction. The `raw` property can be used to send the transaction using  sendSignedTransaction.
   * @example
   * ```ts
   * const tx = personal
   * .signTransaction({
   * 	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	gasPrice: "20000000000",
   * 	gas: "21000",
   * 	to: "0x3535353535353535353535353535353535353535",
   * 	value: "1000000000000000000",
   * 	data: "",
   * 	nonce: 0,
   * },
   * "123456");
   *
   * console.log(tx);
   *
   * > {
   * 	raw: '0xf86e808504a817c800825208943535353535353535353535353535353535353535880de0b6b3a764000080820a95a0c951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526a038b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
   * 	tx: {
   * 	type: '0x0',
   * 	nonce: '0x0',
   * 	gasPrice: '0x4a817c800',
   * 	maxPriorityFeePerGas: null,
   * 	maxFeePerGas: null,
   * 	gas: '0x5208',
   * 	value: '0xde0b6b3a7640000',
   * 	input: '0x',
   * 	v: '0xa95',
   * 	r: '0xc951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526',
   * 	s: '0x38b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
   * 	to: '0x3535353535353535353535353535353535353535',
   * 	hash: '0x65e3df790ab2a32068b13cff970b26445b8995229ae4abbed61bd996f09fce69'
   * 	}
   * }
   * ```
   */
  signTransaction(e, n) {
    return vt(this, void 0, void 0, function* () {
      return Gv(this.requestManager, e, n, this.config);
    });
  }
  /**
   * Calculates an Ethereum specific signature with:
   * sign(keccak256("\x19Ethereum Signed Message:\n" + dataToSign.length + dataToSign)))
   * Adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature.
   *
   * If you have the original message and the signed message, you can discover the signing account address using web3.eth.personal.ecRecover
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param data - The data to sign.
   * @param address - The address to sign with.
   * @param passphrase - The passphrase to decrypt the account with.
   * @returns - The signature.
   * @example
   * ```ts
   * const sig = await personal.sign("Hello world", "0x0D4Aa485ECbC499c70860fEb7e5AaeAf5fd8172E", "123456")
   * console.log(sig)
   * > 0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b
   * ```
   */
  sign(e, n, r) {
    return vt(this, void 0, void 0, function* () {
      return qv(this.requestManager, e, n, r);
    });
  }
  /**
   * Recovers the account that signed the data.
   * @param signedData - Data that was signed. If String it will be converted using {@link utf8ToHex}
   * @param signature - The signature
   * @returns - The address of the account that signed the data.
   * @example
   * ```ts
   *  const address = await personal.ecRecover(
   * 	"Hello world",
   * 	"0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b"
   * );
   * console.log(address);
   * > 0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e
   * ```
   */
  ecRecover(e, n) {
    return vt(this, void 0, void 0, function* () {
      return zv(this.requestManager, e, n);
    });
  }
}
var ft;
(function(t) {
  t.HTTPS = "https", t.WebSocket = "wss";
})(ft || (ft = {}));
var N;
(function(t) {
  t.ETH_MAINNET = "eth_mainnet", t.ETH_SEPOLIA = "eth_sepolia", t.ETH_HOLESKY = "eth_holesky", t.POLYGON_MAINNET = "polygon_mainnet", t.POLYGON_AMOY = "polygon_amoy", t.AVALANCHE_C_MAINNET = "avalanche_c_mainnet", t.AVALANCHE_P_MAINNET = "avalanche_p_mainnet", t.AVALANCHE_X_MAINNET = "avalanche_x_mainnet", t.ARBITRUM_MAINNET = "arbitrum_mainnet", t.ARBITRUM_SEPOLIA = "arbitrum_sepolia", t.BASE_MAINNET = "base_mainnet", t.BASE_SEPOLIA = "base_sepolia", t.OPTIMISM_MAINNET = "optimism_mainnet", t.OPTIMISM_SEPOLIA = "optimism_sepolia", t.FANTOM_MAINNET = "fantom_mainnet", t.FANTOM_TESTNET = "fantom_testnet", t.DYMENSION_MAINNET = "dymension_mainnet", t.DYMENSION_TESTNET = "dymension_testnet", t.BNB_MAINNET = "bnb_mainnet", t.BNB_TESTNET = "bnb_testnet", t.BSC_MAINNET = "bsc_mainnet", t.BSC_TESTNET = "bsc_testnet", t.ARBITRUM_ONE = "arbitrum_one", t.ARBITRUM_NOVA = "arbitrum_nova", t.AVALANCHE_FUJI_C = "avalanche_fuji_c", t.AVALANCHE_FUJI_P = "avalanche_fuji_p", t.AVALANCHE_FUJI_X = "avalanche_fuji_x", t.BLAST_MAINNET = "blast_mainnet", t.OPBNB_MAINNET = "opbnb_mainnet", t.OPBNB_TESTNET = "opbnb_testnet", t.GNOSIS_MAINNET = "gnosis_mainnet", t.GNOSIS_CHIADO = "gnosis_chiado", t.PULSECHAIN_MAINNET = "pulsechain_mainnet", t.PULSECHAIN_TESTNET = "pulsechain_testnet", t.KAVA_MAINNET = "kava_mainnet", t.CRONOS_MAINNET = "cronos_mainnet", t.MANTLE_MAINNET = "mantle_mainnet", t.CHILIZ_MAINNET = "chiliz_mainnet", t.CHILIZ_SPICY = "chiliz_spicy", t.MOONBEAM_MAINNET = "moonbeam_mainnet", t.TAIKO_MAINNET = "taiko_mainnet", t.TAIKO_HEKLA = "taiko_hekla", t.LINEA_MAINNET = "linea_mainnet", t.LINEA_SEPOLIA = "linea_sepolia", t.BAHAMUT_MAINNET = "bahamut_mainnet", t.SCROLL_MAINNET = "scroll_mainnet", t.SCROLL_SEPOLIA = "scroll_sepolia", t.TRON_MAINNET = "tron_mainnet", t.SYSCOIN_MAINNET = "syscoin_mainnet", t.SYSCOIN_TANENBAUM = "syscoin_tanenbaum", t.MOONRIVER_MAINNET = "moonriver_mainnet", t.HAQQ_MAINNET = "haqq_mainnet", t.EVMOS_MAINNET = "evmos_mainnet", t.EVMOS_TESTNET = "evmos_testnet", t.BERACHAIN_TESTNET = "berachain_testnet";
})(N || (N = {}));
const Vv = 1300;
class Qv extends Q {
  constructor(e) {
    super("You've reach the rate limit of free RPC calls from our Partner Quick Nodes. There are two options you can either create a paid Quick Nodes account and get 20% off for 2 months using WEB3JS referral code, or use Free public RPC endpoint.", e), this.code = Vv;
  }
}
const $v = 1301;
class pu extends Q {
  constructor(e) {
    super(`Invalid provider config options given for ${e}`), this.code = $v;
  }
}
var Zv = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
class cl extends Ea {
  constructor(e, n, r, i, s) {
    if (super(), s !== void 0 && n === ft.HTTPS && !("providerOptions" in s))
      throw new pu("HTTP Provider");
    if (s !== void 0 && n === ft.WebSocket && !("socketOptions" in s || "reconnectOptions" in s))
      throw new pu("Websocket Provider");
    this.transport = n, n === ft.HTTPS ? this.provider = new Os(this.getRPCURL(e, n, r, i), s) : n === ft.WebSocket && (this.provider = new Ad(this.getRPCURL(e, n, r, i), s == null ? void 0 : s.socketOptions, s == null ? void 0 : s.reconnectOptions));
  }
  request(e, n) {
    return Zv(this, void 0, void 0, function* () {
      return this.transport === ft.HTTPS ? yield this.provider.request(e, n) : this.provider.request(e);
    });
  }
  getStatus() {
    return this.provider.getStatus();
  }
  supportsSubscriptions() {
    return this.provider.supportsSubscriptions();
  }
  once(e, n) {
    var r;
    !((r = this.provider) === null || r === void 0) && r.once && this.provider.once(e, n);
  }
  removeAllListeners(e) {
    var n;
    !((n = this.provider) === null || n === void 0) && n.removeAllListeners && this.provider.removeAllListeners(e);
  }
  connect() {
    var e;
    !((e = this.provider) === null || e === void 0) && e.connect && this.provider.connect();
  }
  disconnect(e, n) {
    var r;
    !((r = this.provider) === null || r === void 0) && r.disconnect && this.provider.disconnect(e, n);
  }
  reset() {
    var e;
    !((e = this.provider) === null || e === void 0) && e.reset && this.provider.reset();
  }
  on(e, n) {
    this.provider && this.provider.on(e, n);
  }
  removeListener(e, n) {
    this.provider && this.provider.removeListener(e, n);
  }
}
var Wv = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const ve = (t) => t !== void 0 && t.trim().length > 0;
class Kv extends cl {
  // eslint-disable-next-line default-param-last
  constructor(e = N.ETH_MAINNET, n = ft.HTTPS, r = "", i = "", s) {
    super(e, n, r, i, s);
  }
  request(e, n) {
    const r = Object.create(null, {
      request: { get: () => super.request }
    });
    return Wv(this, void 0, void 0, function* () {
      try {
        return yield r.request.call(this, e, n);
      } catch (i) {
        throw i instanceof ut && i.statusCode === 429 ? new Qv(i) : i;
      }
    });
  }
  // eslint-disable-next-line class-methods-use-this
  getRPCURL(e, n, r, i) {
    let s = "", o = "";
    switch (e) {
      case N.ETH_MAINNET:
        s = ve(i) ? i : "powerful-holy-bush.quiknode.pro", o = ve(r) ? r : "3240624a343867035925ff7561eb60dfdba2a668";
        break;
      case N.ETH_SEPOLIA:
        s = ve(i) ? i : "dimensional-fabled-glitter.ethereum-sepolia.quiknode.pro", o = ve(r) ? r : "382a3b5a4b938f2d6e8686c19af4b22921fde2cd";
        break;
      case N.ETH_HOLESKY:
        s = ve(i) ? i : "yolo-morning-card.ethereum-holesky.quiknode.pro", o = ve(r) ? r : "481ebe70638c4dcf176af617a16d02ab866b9af9";
        break;
      case N.ARBITRUM_MAINNET:
        s = ve(i) ? i : "autumn-divine-dinghy.arbitrum-mainnet.quiknode.pro", o = ve(r) ? r : "a5d7bfbf60b5ae9ce3628e53d69ef50d529e9a8c";
        break;
      case N.ARBITRUM_SEPOLIA:
        s = ve(i) ? i : "few-patient-pond.arbitrum-sepolia.quiknode.pro", o = ve(r) ? r : "3be985450970628c860b959c65cd2642dcafe53c";
        break;
      case N.BNB_MAINNET:
        s = ve(i) ? i : "purple-empty-reel.bsc.quiknode.pro", o = ve(r) ? r : "ebf6c532961e21f092ff2facce1ec4c89c540158";
        break;
      case N.BNB_TESTNET:
        s = ve(i) ? i : "floral-rough-scion.bsc-testnet.quiknode.pro", o = ve(r) ? r : "5b297e5acff5f81f4c37ebf6f235f7299b6f9d28";
        break;
      case N.POLYGON_MAINNET:
        s = ve(i) ? i : "small-chaotic-moon.matic.quiknode.pro", o = ve(r) ? r : "847569f8a017e84d985e10d0f44365d965a951f1";
        break;
      case N.POLYGON_AMOY:
        s = ve(i) ? i : "prettiest-side-shape.matic-amoy.quiknode.pro", o = ve(r) ? r : "79a9476eea661d4f82de614db1d8a895b14b881c";
        break;
      default:
        throw new Error("Network info not avalible.");
    }
    return `${n}://${s}/${o}`;
  }
}
const Jv = (t) => t !== void 0 && t.trim().length > 0, Yv = [
  N.DYMENSION_MAINNET,
  N.DYMENSION_TESTNET,
  N.KAVA_MAINNET,
  N.CRONOS_MAINNET,
  // deprecated
  N.POLYGON_MAINNET
];
class As extends cl {
  // eslint-disable-next-line default-param-last
  constructor(e = N.ETH_MAINNET, n = ft.HTTPS, r = "", i) {
    super(e, n, "", r, i);
  }
  // eslint-disable-next-line class-methods-use-this
  getRPCURL(e, n, r, i) {
    if (!As.networkHostMap[e])
      throw new Error("Network info not avalible.");
    const s = `${As.networkHostMap[e]}.publicnode.com`, o = Jv(i) ? i : s;
    return Yv.includes(e) && n === ft.WebSocket ? `${n}://${o}/websocket` : `${n}://${o}`;
  }
}
As.networkHostMap = {
  [N.POLYGON_AMOY]: "polygon-amoy-bor-rpc",
  [N.DYMENSION_MAINNET]: "dymension-evm-rpc",
  [N.DYMENSION_TESTNET]: "dymension-testnet-evm-rpc",
  [N.BLAST_MAINNET]: "blast-rpc",
  [N.GNOSIS_MAINNET]: "gnosis-rpc",
  [N.PULSECHAIN_MAINNET]: "pulsechain-rpc",
  [N.PULSECHAIN_TESTNET]: "pulsechain-testnet-rpc",
  [N.KAVA_MAINNET]: "kava-evm-rpc",
  [N.CRONOS_MAINNET]: "cronos-evm-rpc",
  [N.MANTLE_MAINNET]: "mantle-rpc",
  [N.TAIKO_MAINNET]: "taiko-rpc",
  [N.TAIKO_HEKLA]: "taiko-hekla-rpc",
  [N.LINEA_MAINNET]: "linea-rpc",
  [N.LINEA_SEPOLIA]: "linea-sepolia-rpc",
  [N.SCROLL_MAINNET]: "scroll-rpc",
  [N.SCROLL_SEPOLIA]: "scroll-sepolia-rpc",
  [N.SYSCOIN_MAINNET]: "syscoin-evm-rpc",
  [N.SYSCOIN_TANENBAUM]: "syscoin-tanenbaum-evm-rpc",
  [N.HAQQ_MAINNET]: "haqq-evm-rpc",
  [N.EVMOS_MAINNET]: "evmos-evm-rpc",
  [N.EVMOS_TESTNET]: "evmos-testnet-evm-rpc",
  [N.BERACHAIN_TESTNET]: "berachain-testnet-evm-rpc",
  [N.ETH_MAINNET]: "ethereum-rpc",
  [N.ETH_SEPOLIA]: "ethereum-sepolia-rpc",
  [N.ETH_HOLESKY]: "ethereum-holesky-rpc",
  [N.BSC_MAINNET]: "bsc-rpc",
  [N.BSC_TESTNET]: "bsc-testnet-rpc",
  [N.POLYGON_MAINNET]: "polygon-bor-rpc",
  [N.BASE_MAINNET]: "base-rpc",
  [N.BASE_SEPOLIA]: "base-sepolia-rpc",
  [N.ARBITRUM_ONE]: "arbitrum-one-rpc",
  [N.ARBITRUM_NOVA]: "arbitrum-nova-rpc",
  [N.ARBITRUM_SEPOLIA]: "arbitrum-sepolia-rpc",
  [N.AVALANCHE_C_MAINNET]: "avalanche-c-chain-rpc",
  [N.AVALANCHE_P_MAINNET]: "avalanche-p-chain-rpc",
  [N.AVALANCHE_X_MAINNET]: "avalanche-x-chain-rpc",
  [N.AVALANCHE_FUJI_C]: "avalanche-fuji-c-chain-rpc",
  [N.AVALANCHE_FUJI_P]: "avalanche-fuji-p-chain-rpc",
  [N.AVALANCHE_FUJI_X]: "avalanche-fuji-x-chain-rpc",
  [N.OPTIMISM_MAINNET]: "optimism-rpc",
  [N.OPTIMISM_SEPOLIA]: "optimism-sepolia-rpc",
  [N.FANTOM_MAINNET]: "fantom-rpc",
  [N.FANTOM_TESTNET]: "fantom-testnet-rpc",
  [N.OPBNB_MAINNET]: "opbnb-rpc",
  [N.OPBNB_TESTNET]: "opbnb-testnet-rpc",
  [N.GNOSIS_CHIADO]: "gnosis-chiado-rpc",
  [N.CHILIZ_MAINNET]: "chiliz-rpc",
  [N.CHILIZ_SPICY]: "chiliz-spicy-rpc",
  [N.MOONBEAM_MAINNET]: "moonbeam-rpc",
  [N.BAHAMUT_MAINNET]: "bahamut-rpc",
  [N.TRON_MAINNET]: "tron-evm-rpc",
  [N.MOONRIVER_MAINNET]: "moonriver-rpc"
};
const Xv = new Kv(), eE = {
  encodeEventSignature: qa,
  encodeFunctionCall: Yw,
  encodeFunctionSignature: Xr,
  encodeParameter: qo,
  encodeParameters: qs,
  decodeParameter: kf,
  decodeParameters: mn,
  decodeLog: Rf
};
var Er = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
const tE = (t) => {
  const e = (o, a) => Er(void 0, void 0, void 0, function* () {
    const d = yield H_(o, t), u = T({ format: "bytes" }, a, Z);
    return Db(d, u);
  }), n = (o) => {
    const a = Oa(o);
    return Object.assign(Object.assign({}, a), { signTransaction: (d) => Er(void 0, void 0, void 0, function* () {
      return e(d, a.privateKey);
    }) });
  }, r = (o, a, d) => Er(void 0, void 0, void 0, function* () {
    var u;
    const c = yield Ub(o, a, (u = d == null ? void 0 : d.nonStrict) !== null && u !== void 0 ? u : !0);
    return Object.assign(Object.assign({}, c), { signTransaction: (f) => Er(void 0, void 0, void 0, function* () {
      return e(f, c.privateKey);
    }) });
  }), i = () => {
    const o = jb();
    return Object.assign(Object.assign({}, o), { signTransaction: (a) => Er(void 0, void 0, void 0, function* () {
      return e(a, o.privateKey);
    }) });
  }, s = new ss({
    create: i,
    privateKeyToAccount: n,
    decrypt: r
  });
  return {
    signTransaction: e,
    create: i,
    privateKeyToAccount: n,
    decrypt: r,
    recoverTransaction: Fb,
    hashMessage: Ma,
    sign: Qd,
    recover: Mo,
    encrypt: $d,
    wallet: s,
    privateKeyToAddress: Hs,
    parseAndValidatePrivateKey: hr,
    privateKeyToPublicKey: Hb
  };
}, nE = { version: "4.16.0" };
var rE = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function d(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, d);
    }
    u((r = r.apply(t, e || [])).next());
  });
}, ws;
(function(t) {
  t.eip6963announceProvider = "eip6963:announceProvider", t.eip6963requestProvider = "eip6963:requestProvider";
})(ws || (ws = {}));
const go = /* @__PURE__ */ new Map(), ul = "web3:providersMapUpdated", iE = () => rE(void 0, void 0, void 0, function* () {
  return new Promise((t, e) => {
    typeof window > "u" && e(new Error("window object not available, EIP-6963 is intended to be used within a browser")), window.addEventListener(ws.eip6963announceProvider, (n) => {
      go.set(n.detail.info.uuid, n.detail);
      const r = new CustomEvent(ul, { detail: go });
      window.dispatchEvent(r), t(go);
    }), window.dispatchEvent(new Event(ws.eip6963requestProvider));
  });
}), sE = (t) => {
  if (typeof window > "u")
    throw new Error("window object not available, EIP-6963 is intended to be used within a browser");
  window.addEventListener(ul, t);
};
class yr extends He {
  constructor(e = Xv) {
    var n;
    (q(e) || typeof e == "string" && e.trim() === "" || typeof e != "string" && !rs(e) && !e.provider) && console.warn("NOTE: web3.js is running without provider. You need to pass a provider in order to interact with the network!");
    let r = {};
    typeof e == "string" || rs(e) ? r.provider = e : e ? r = e : r = {}, r.registeredSubscriptions = Object.assign(Object.assign({}, Vo), (n = r.registeredSubscriptions) !== null && n !== void 0 ? n : {}), super(r);
    const i = tE(this);
    this._wallet = i.wallet, this._accountProvider = i, this.utils = bd;
    const s = this;
    class o extends gn {
      constructor(u, c, f, h, g) {
        if (Ut(c) && Ut(f))
          throw new cc("Should not provide options at both 2nd and 3rd parameters");
        let b, p = {}, m, l;
        if (!q(c) && typeof c != "object" && typeof c != "string")
          throw new cc();
        if (typeof c == "string" && (b = c), Ut(c) ? p = c : Ut(f) ? p = f : p = {}, c instanceof He ? m = c : f instanceof He ? m = f : h instanceof He ? m = h : m = s.getContextObject(), g ? l = g : Tt(f) ? l = f : Tt(h) && (l = h), super(u, b, p, m, l), super.subscribeToContextEvents(s), !q(a)) {
          const A = a.getTransactionMiddleware();
          q(A) || super.setTransactionMiddleware(A);
        }
      }
    }
    const a = s.use(zs);
    this.eth = Object.assign(a, {
      // ENS module
      ens: s.use(ol, hs.main),
      // registry address defaults to main network
      // Iban helpers
      Iban: Ae,
      net: s.use(tf),
      personal: s.use(al),
      // Contract helper and module
      Contract: o,
      // ABI Helpers
      abi: eE,
      // Accounts helper
      accounts: i
    });
  }
}
yr.version = nE.version;
yr.utils = bd;
yr.requestEIP6963Providers = iE;
yr.onNewProviderDiscovered = sE;
yr.modules = {
  Web3Eth: zs,
  Iban: Ae,
  Net: tf,
  ENS: ol,
  Personal: al
};
const oE = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, aE = { id: "vue-metamask" }, cE = {
  __name: "VueMetamask",
  props: {
    userMessage: {
      type: String,
      default: "null"
    },
    initConnect: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["complete"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = n, s = en(null), o = en("1"), a = en(""), d = en(null), u = en(null), c = en(null), f = en("INIT"), h = {
      EMPTY_METAMASK_ACCOUNT: "Please log in to your metamask to continue with this app.",
      NETWORK_ERROR: "The connection is abnormal, please try again",
      METAMASK_NOT_INSTALL: "Please install metamask for this application",
      METAMASK_TEST_NET: "Currently not in the main network.",
      METAMASK_MAIN_NET: "Currently Main network",
      USER_DENIED_ACCOUNT_AUTHORIZATION: "User denied account authorization"
    }, g = () => {
      typeof window.ethereum > "u" && (s.value = null, m(h.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK"));
    }, b = async () => {
      if (s.value !== null)
        try {
          const w = await s.value.eth.getAccounts();
          if (w.length === 0) {
            a.value = "", m(h.EMPTY_METAMASK_ACCOUNT, "NO_LOGIN");
            return;
          }
          a.value = w[0];
        } catch {
          m(h.NETWORK_ERROR, "NETWORK_ERROR");
        }
    }, p = async () => {
      try {
        const w = await s.value.eth.getChainId();
        if (o.value = w, a.value === "") return;
        const I = {
          1: { message: h.METAMASK_MAIN_NET, type: "MAINNET" },
          3: { message: h.METAMASK_TEST_NET, type: "ROPSTEN" },
          42: { message: h.METAMASK_TEST_NET, type: "KOVAN" },
          4: { message: h.METAMASK_TEST_NET, type: "RINKEBY" },
          5: { message: h.METAMASK_TEST_NET, type: "GOERLI" }
        }[w] || {
          message: h.METAMASK_TEST_NET,
          type: "UNKNOWN"
        };
        m(I.message, I.type);
      } catch {
        m(h.NETWORK_ERROR, "NETWORK_ERROR");
      }
    }, m = (w, x = "") => {
      if (x === f.value) return;
      const I = r.userMessage === "null" ? w : r.userMessage;
      f.value = x, i("complete", {
        web3: s.value,
        type: x,
        metaMaskAddress: a.value,
        message: I,
        netID: o.value
      });
    }, l = (w) => {
      s.value = w, b(), p(), d.value = setInterval(() => g(), 1e3), u.value = setInterval(() => b(), 1e3), c.value = setInterval(() => p(), 1e3);
    }, A = async () => {
      if (window.ethereum) {
        const w = new yr(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" }), l(w);
        } catch {
          m(
            h.USER_DENIED_ACCOUNT_AUTHORIZATION,
            "USER_DENIED_ACCOUNT_AUTHORIZATION"
          );
        }
      } else
        s.value = null, m(h.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK"), console.error(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
    };
    return e({
      init: A
    }), dl(() => {
      r.initConnect && A();
    }), (w, x) => (ll(), fl("div", aE));
  }
}, fE = /* @__PURE__ */ oE(cE, [["__scopeId", "data-v-5c37c06e"]]);
export {
  fE as default
};
