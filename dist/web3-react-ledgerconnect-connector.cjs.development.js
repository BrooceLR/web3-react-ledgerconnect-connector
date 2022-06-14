'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var abstractConnector = require('@web3-react/abstract-connector');
var warning = _interopDefault(require('tiny-warning'));

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function parseSendReturn(sendReturn) {
  return sendReturn.hasOwnProperty('result') ? sendReturn.result : sendReturn;
}

var NoEthereumProviderError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(NoEthereumProviderError, _Error);

  function NoEthereumProviderError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.name = _this.constructor.name;
    _this.message = 'No Ethereum provider was found on window.ethereum.';
    return _this;
  }

  return NoEthereumProviderError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var NotLedgerConnectProviderError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(NotLedgerConnectProviderError, _Error2);

  function NotLedgerConnectProviderError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.name = _this2.constructor.name;
    _this2.message = 'The provider found on window.ethereum is not Ledger Connect.';
    return _this2;
  }

  return NotLedgerConnectProviderError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var UserRejectedRequestError = /*#__PURE__*/function (_Error3) {
  _inheritsLoose(UserRejectedRequestError, _Error3);

  function UserRejectedRequestError() {
    var _this3;

    _this3 = _Error3.call(this) || this;
    _this3.name = _this3.constructor.name;
    _this3.message = 'The user rejected the request.';
    return _this3;
  }

  return UserRejectedRequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var LedgerConnectConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(LedgerConnectConnector, _AbstractConnector);

  function LedgerConnectConnector(kwargs) {
    var _this4;

    _this4 = _AbstractConnector.call(this, kwargs) || this;
    _this4.handleNetworkChanged = _this4.handleNetworkChanged.bind(_assertThisInitialized(_this4));
    _this4.handleChainChanged = _this4.handleChainChanged.bind(_assertThisInitialized(_this4));
    _this4.handleAccountsChanged = _this4.handleAccountsChanged.bind(_assertThisInitialized(_this4));
    _this4.handleClose = _this4.handleClose.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  var _proto = LedgerConnectConnector.prototype;

  _proto.handleChainChanged = function handleChainChanged(chainId) {
    {
      console.log("Handling 'chainChanged' event with payload", chainId);
    }

    this.emitUpdate({
      chainId: chainId,
      provider: window.ethereum
    });
  };

  _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
    {
      console.log("Handling 'accountsChanged' event with payload", accounts);
    }

    if (accounts.length === 0) {
      this.emitDeactivate();
    } else {
      this.emitUpdate({
        account: accounts[0]
      });
    }
  };

  _proto.handleClose = function handleClose(code, reason) {
    {
      console.log("Handling 'close' event with payload", code, reason);
    }

    this.emitDeactivate();
  };

  _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
    {
      console.log("Handling 'networkChanged' event with payload", networkId);
    }

    this.emitUpdate({
      chainId: networkId,
      provider: window.ethereum
    });
  };

  _proto.activate = /*#__PURE__*/function () {
    var _activate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _window$ethereum;

      var account;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (window.ethereum) {
                _context.next = 2;
                break;
              }

              throw new NoEthereumProviderError();

            case 2:
              if ((_window$ethereum = window.ethereum) != null && _window$ethereum.isLedgerConnect) {
                _context.next = 5;
                break;
              }

              console.log('Ledger Connect extension not found');
              throw new NotLedgerConnectProviderError();

            case 5:
              console.log('Ledger Connect extension is installed and enabled');

              if (window.ethereum.on) {
                window.ethereum.on('chainChanged', this.handleChainChanged);
                window.ethereum.on('accountsChanged', this.handleAccountsChanged);
                window.ethereum.on('close', this.handleClose);
                window.ethereum.on('networkChanged', this.handleNetworkChanged);
              } // TODO


              if (window.ethereum.isMetaMask) {
                window.ethereum.autoRefreshOnNetworkChange = false;
              } // try to activate + get account via eth_requestAccounts


              _context.prev = 8;
              _context.next = 11;
              return window.ethereum.send('eth_requestAccounts').then(function (sendReturn) {
                return parseSendReturn(sendReturn)[0];
              });

            case 11:
              account = _context.sent;
              _context.next = 19;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](8);

              if (!(_context.t0.code === 4001)) {
                _context.next = 18;
                break;
              }

              throw new UserRejectedRequestError();

            case 18:
               warning(false, 'eth_requestAccounts was unsuccessful, falling back to enable') ;

            case 19:
              if (account) {
                _context.next = 23;
                break;
              }

              _context.next = 22;
              return window.ethereum.enable().then(function (sendReturn) {
                return sendReturn && parseSendReturn(sendReturn)[0];
              });

            case 22:
              account = _context.sent;

            case 23:
              return _context.abrupt("return", _extends({
                provider: window.ethereum
              }, account ? {
                account: account
              } : {}));

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[8, 14]]);
    }));

    function activate() {
      return _activate.apply(this, arguments);
    }

    return activate;
  }();

  _proto.getProvider = /*#__PURE__*/function () {
    var _getProvider = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", window.ethereum);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getProvider() {
      return _getProvider.apply(this, arguments);
    }

    return getProvider;
  }();

  _proto.getChainId = /*#__PURE__*/function () {
    var _getChainId = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var chainId;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (window.ethereum) {
                _context3.next = 2;
                break;
              }

              throw new NoEthereumProviderError();

            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return window.ethereum.send('eth_chainId').then(parseSendReturn);

            case 5:
              chainId = _context3.sent;
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
               warning(false, 'eth_chainId was unsuccessful, falling back to net_version') ;

            case 11:
              if (chainId) {
                _context3.next = 21;
                break;
              }

              _context3.prev = 12;
              _context3.next = 15;
              return window.ethereum.send('net_version').then(parseSendReturn);

            case 15:
              chainId = _context3.sent;
              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t1 = _context3["catch"](12);
               warning(false, 'net_version was unsuccessful, falling back to net version v2') ;

            case 21:
              if (!chainId) {
                try {
                  chainId = parseSendReturn(window.ethereum.send({
                    method: 'net_version'
                  }));
                } catch (_unused3) {
                   warning(false, 'net_version v2 was unsuccessful, falling back to manual matches and static properties') ;
                }
              }

              if (!chainId) {
                if (window.ethereum.isDapper) {
                  chainId = parseSendReturn(window.ethereum.cachedResults.net_version);
                } else {
                  chainId = window.ethereum.chainId || window.ethereum.netVersion || window.ethereum.networkVersion || window.ethereum._chainId;
                }
              }

              return _context3.abrupt("return", chainId);

            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 8], [12, 18]]);
    }));

    function getChainId() {
      return _getChainId.apply(this, arguments);
    }

    return getChainId;
  }();

  _proto.getAccount = /*#__PURE__*/function () {
    var _getAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var account;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (window.ethereum) {
                _context4.next = 2;
                break;
              }

              throw new NoEthereumProviderError();

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return window.ethereum.send('eth_accounts').then(function (sendReturn) {
                return parseSendReturn(sendReturn)[0];
              });

            case 5:
              account = _context4.sent;
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
               warning(false, 'eth_accounts was unsuccessful, falling back to enable') ;

            case 11:
              if (account) {
                _context4.next = 21;
                break;
              }

              _context4.prev = 12;
              _context4.next = 15;
              return window.ethereum.enable().then(function (sendReturn) {
                return parseSendReturn(sendReturn)[0];
              });

            case 15:
              account = _context4.sent;
              _context4.next = 21;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t1 = _context4["catch"](12);
               warning(false, 'enable was unsuccessful, falling back to eth_accounts v2') ;

            case 21:
              if (!account) {
                account = parseSendReturn(window.ethereum.send({
                  method: 'eth_accounts'
                }))[0];
              }

              return _context4.abrupt("return", account);

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8], [12, 18]]);
    }));

    function getAccount() {
      return _getAccount.apply(this, arguments);
    }

    return getAccount;
  }();

  _proto.deactivate = function deactivate() {
    if (window.ethereum && window.ethereum.removeListener) {
      window.ethereum.removeListener('chainChanged', this.handleChainChanged);
      window.ethereum.removeListener('accountsChanged', this.handleAccountsChanged);
      window.ethereum.removeListener('close', this.handleClose);
      window.ethereum.removeListener('networkChanged', this.handleNetworkChanged);
    }
  };

  _proto.isAuthorized = /*#__PURE__*/function () {
    var _isAuthorized = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (window.ethereum) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", false);

            case 2:
              _context5.prev = 2;
              _context5.next = 5;
              return window.ethereum.send('eth_accounts').then(function (sendReturn) {
                if (parseSendReturn(sendReturn).length > 0) {
                  return true;
                } else {
                  return false;
                }
              });

            case 5:
              return _context5.abrupt("return", _context5.sent);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](2);
              return _context5.abrupt("return", false);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 8]]);
    }));

    function isAuthorized() {
      return _isAuthorized.apply(this, arguments);
    }

    return isAuthorized;
  }();

  return LedgerConnectConnector;
}(abstractConnector.AbstractConnector);

exports.LedgerConnectConnector = LedgerConnectConnector;
exports.NoEthereumProviderError = NoEthereumProviderError;
exports.NotLedgerConnectProviderError = NotLedgerConnectProviderError;
exports.UserRejectedRequestError = UserRejectedRequestError;
//# sourceMappingURL=web3-react-ledgerconnect-connector.cjs.development.js.map
