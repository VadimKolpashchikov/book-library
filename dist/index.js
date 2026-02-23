function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var AbstractView = /*#__PURE__*/function () {
  function AbstractView() {
    _classCallCheck(this, AbstractView);
    this.$app = document.getElementById('root');
  }
  return _createClass(AbstractView, [{
    key: "setTitle",
    value: function setTitle(title) {
      document.title = title;
    }
  }, {
    key: "render",
    value: function render() {
      return;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return;
    }
  }]);
}();

var Main = /*#__PURE__*/function (_AbstractView) {
  function Main() {
    var _this;
    _classCallCheck(this, Main);
    _this = _callSuper(this, Main);
    _this.setTitle('Поиск Книг');
    return _this;
  }
  _inherits(Main, _AbstractView);
  return _createClass(Main, [{
    key: "render",
    value: function render() {
      var main = document.createElement('div');
      main.innerText = 'Main Text';
      this.$app.innerHTML = '';
      this.$app.append(main);
    }
  }]);
}(AbstractView);

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    _defineProperty(this, "routes", [{
      path: '/',
      component: Main
    }]);
    this.route = this.route.bind(this);
    window.addEventListener('hashchange', this.route);
    this.route();
  }
  return _createClass(App, [{
    key: "route",
    value: function route() {
      if (this.currentView) {
        this.currentView.destroy();
      }
      var view = this.routes.find(function (_ref) {
        var path = _ref.path;
        return path === location.hash;
      });
      if (!view) {
        view = this.routes[0];
      }
      this.currentView = new view.component();
      this.currentView.render();
    }
  }]);
}();
new App();
