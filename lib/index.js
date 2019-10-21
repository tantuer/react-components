'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Tabs = _interopDefault(require('antd/lib/tabs'));
var React = require('react');
var React__default = _interopDefault(React);
var _Button = _interopDefault(require('antd/lib/button'));
var _Icon = _interopDefault(require('antd/lib/icon'));
var ReactDOM = _interopDefault(require('react-dom'));
var _Form = _interopDefault(require('antd/lib/form'));
var antd = require('antd');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".tantuer-tab > .ant-tabs-card > .ant-tabs-card-bar.ant-tabs-bar {\n  margin-bottom: 0;\n}\n.tantuer-tab > .ant-tabs-card > .ant-tabs-card-bar.ant-tabs-bar > .ant-tabs-nav-container {\n  height: 42px;\n  padding: 6px 0;\n}\n.tantuer-tab > .ant-tabs-card > .ant-tabs-card-bar.ant-tabs-bar > .ant-tabs-nav-container > .ant-tabs-nav-wrap > .ant-tabs-nav-scroll > .ant-tabs-nav > div .ant-tabs-tab {\n  height: 28px;\n  padding: 0 6px;\n  line-height: 28px;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  color: #333;\n  font-size: 12px;\n  margin: 0 4px;\n}\n.tantuer-tab > .ant-tabs-card > .ant-tabs-card-bar.ant-tabs-bar > .ant-tabs-nav-container > .ant-tabs-nav-wrap > .ant-tabs-nav-scroll > .ant-tabs-nav > div .ant-tabs-tab-active {\n  background: #42b983;\n  border-color: transparent;\n  color: #fff;\n}\n.tantuer-tab > .ant-tabs-card > .ant-tabs-card-bar .ant-tabs-nav .ant-tabs-tab .anticon {\n  margin-right: 5px;\n}\n";
styleInject(css);

var TabPane = _Tabs.TabPane;

var TabPage =
/*#__PURE__*/
function (_Component) {
  _inherits(TabPage, _Component);

  function TabPage(props) {
    var _this;

    _classCallCheck(this, TabPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabPage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });

      _this.props.callback && _this.props.callback(activeKey);
    });

    _this.state = {
      activeKey: ''
    };
    return _this;
  }

  _createClass(TabPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        activeKey: this.props.defaultActiveKey
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeKey = this.state.activeKey;
      var _this$props = this.props,
          children = _this$props.children,
          defaultActiveKey = _this$props.defaultActiveKey;
      return React__default.createElement("div", {
        className: "tantuer-tab"
      }, React__default.createElement(_Tabs, {
        type: "card",
        defaultActiveKey: defaultActiveKey,
        activeKey: activeKey,
        onChange: this.onChange
      }, children.map(function (it) {
        return React__default.createElement(TabPane, {
          tab: React__default.createElement("span", null, it.props.title),
          key: it.key
        }, it);
      })));
    }
  }]);

  return TabPage;
}(React.Component);

var TabPageItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPageItem, _React$Component);

  function TabPageItem(props) {
    var _this;

    _classCallCheck(this, TabPageItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabPageItem).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(TabPageItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React__default.createElement(React__default.Fragment, null, children);
    }
  }]);

  return TabPageItem;
}(React__default.Component);

TabPage.Item = TabPageItem;

var randomKey = function randomKey() {
  var s = [];
  var hexDigits = '0123456789abcdef';

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
  }

  s[0] = 'x';
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010

  s[8] = s[13] = s[18] = s[23] = '_';
  return s.join('');
};

var css$1 = ".tantuer-modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 999;\n}\n.tantuer-modal .bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.tantuer-modal .inner {\n  background: #ffffff;\n  position: absolute;\n  left: 50%;\n  top: 30px;\n  transform: translate(-50%, 0);\n  max-height: 90%;\n  overflow: auto;\n}\n.tantuer-modal .inner .modal-hd {\n  height: 56px;\n  line-height: 56px;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e5e5e5;\n  background: #ffffff;\n}\n.tantuer-modal .inner .modal-hd h3 {\n  font-size: 18px;\n}\n.tantuer-modal .inner .modal-hd h3.error {\n  color: #ff0000;\n}\n.tantuer-modal .inner .modal-con {\n  padding: 10px;\n  height: 100%;\n  overflow: auto;\n  min-height: 42px;\n}\n.tantuer-modal .inner .modal-con-wp {\n  padding-top: 10px;\n  height: 100%;\n  overflow: auto;\n}\n.tantuer-modal .inner .modal-ft {\n  border-top: 1px solid #e5e5e5;\n  padding: 15px;\n  height: 60px;\n  display: flex;\n  justify-content: flex-end;\n}\n.tantuer-modal .inner .modal-cancel {\n  margin-right: 10px;\n}\n";
styleInject(css$1);

var defaultOptions = {
  show: false,
  title: 'modal',
  okTxt: '确定',
  isOkBtn: true,
  cancelTxt: '取消',
  isCancelBtn: true,
  width: 500,
  maskClosable: true,
  error: false,
  ok: function ok() {
    console.log('ok');
  },
  cancel: function cancel() {
    console.log('cancel');
  },
  content: 'some text'
};
var TantuterModal =
/*#__PURE__*/
function (_Component) {
  _inherits(TantuterModal, _Component);

  function TantuterModal() {
    var _this;

    _classCallCheck(this, TantuterModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TantuterModal).call(this));
    _this.state = {
      models: []
    };
    return _this;
  }

  _createClass(TantuterModal, [{
    key: "open",
    value: function open(options) {
      var models = this.state.models;
      defaultOptions.show = true;

      var current = _objectSpread2({}, defaultOptions, {}, options, {
        key: randomKey()
      });

      this.setState({
        show: true,
        models: models.concat([current])
      });
      return current.key;
    }
  }, {
    key: "findThis",
    value: function findThis(key) {
      return this.state.models.find(function (item) {
        return item.key === key;
      });
    }
  }, {
    key: "ok",
    value: function ok(key) {
      var current = this.findThis.bind(this, key)();
      current.ok();
    }
  }, {
    key: "cancel",
    value: function cancel(key) {
      var current = this.findThis.bind(this, key)();
      current.cancel();
      this.close(key);
    }
  }, {
    key: "close",
    value: function close(key) {
      if (key) {
        this.state.models.forEach(function (item) {
          if (item.key === key) {
            item.show = false;
          }
        });
      }

      this.setState({
        models: key ? this.state.models : []
      });
    }
  }, {
    key: "maskClose",
    value: function maskClose(key) {
      var current = this.findThis.bind(this, key)();

      if (current.maskClosable) {
        this.close.bind(this, key)();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var models = this.state.models;
      return React__default.createElement(React__default.Fragment, null, models.map(function (item) {
        var width = _typeof(item.width) === Number ? item.width + 'px' : item.width;
        var hasFooter = item.isOkBtn || item.isCancelBtn;
        var modelConClassName = hasFooter ? 'modal-con' : 'modal-con-wp';
        var titleClass = item.error ? 'error' : '';

        if (item.show) {
          return React__default.createElement("div", {
            className: "tantuer-modal",
            key: item.key
          }, React__default.createElement("div", {
            className: "bg",
            onClick: _this2.maskClose.bind(_this2, item.key)
          }), React__default.createElement("div", {
            className: "inner",
            style: {
              width: width
            }
          }, React__default.createElement("div", {
            className: "modal-hd"
          }, React__default.createElement("h3", {
            className: titleClass
          }, item.title), React__default.createElement(_Icon, {
            type: "close",
            onClick: _this2.close.bind(_this2, item.key)
          })), React__default.createElement("div", {
            className: modelConClassName
          }, item.content), item.isOkBtn || item.isCancelBtn ? React__default.createElement("div", {
            className: "modal-ft"
          }, item.isCancelBtn && React__default.createElement(_Button, {
            className: "modal-cancel",
            onClick: _this2.cancel.bind(_this2, item.key)
          }, item.cancelTxt), item.isOkBtn && React__default.createElement(_Button, {
            type: "primary",
            className: "modal-ok",
            onClick: _this2.ok.bind(_this2, item.key)
          }, item.okTxt)) : null));
        } else {
          return null;
        }
      }));
    }
  }]);

  return TantuterModal;
}(React.Component);
var div = document.createElement('div');
document.body.appendChild(div);
var Modal = ReactDOM.render(React__default.createElement(TantuterModal), div);

var css$2 = ".mar-l-10 {\n  margin-left: 10px;\n}\n/* form 样式覆盖*/\n.tantuer-form .tantuer-field-area {\n  color: #777777;\n  background: #ffffff;\n  margin: 20px 0 0 0;\n  border-bottom: none;\n}\n.tantuer-form .tantuer-form-item {\n  display: flex;\n  margin-bottom: 0;\n}\n.tantuer-form .tantuer-form-item .ant-form-item-label {\n  padding: 0 20px 20px 20px;\n}\n.tantuer-form .tantuer-form-item > .ant-form-item-control-wrapper {\n  padding: 0 20px 20px 20px;\n  position: relative;\n  width: 100%;\n}\n.tantuer-form .tantuer-form-item.tantuer-form-item-46 .ant-form-item-label {\n  padding: 0 20px 20px 20px;\n  width: 40%;\n}\n.tantuer-form .tantuer-form-item.tantuer-form-item-46 > .ant-form-item-control-wrapper {\n  padding: 0 20px 20px 20px;\n  position: relative;\n  width: 60%;\n}\n.tantuer-form .tantuer-form-item .ant-form-item-control {\n  line-height: auto;\n  position: static;\n}\n.tantuer-form .tantuer-form-item .ant-form-explain {\n  position: absolute;\n  left: 20px;\n  bottom: 0;\n  font-size: 12px;\n}\n.tantuer-form .tantuer-form-item .large {\n  width: 420px;\n}\n.tantuer-form .tantuer-form-item .large .ant-input {\n  min-width: 150px;\n}\n.tantuer-form .tantuer-form-item .default {\n  width: 200px;\n}\n.tantuer-form .tantuer-form-item .small {\n  width: 150px;\n}\n.tantuer-form .tantuer-form-item .num {\n  width: 50px;\n}\n.tantuer-form .tantuer-form-item input {\n  outline: none;\n}\n.tantuer-form .ant-input,\n.tantuer-form .ant-select-selection {\n  border-radius: 0;\n  border-color: #e2e2e2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-color: #ccc;\n}\n.tantuer-form .submit-ft {\n  border-top: 1px solid #e5e5e5;\n  padding: 15px;\n  height: 60px;\n  display: flex;\n  margin-top: 10px;\n  justify-content: flex-end;\n}\n.tantuer-form .submit-ft-1 {\n  padding: 15px 0 0 0;\n  margin-top: 0;\n  height: auto;\n}\n";
styleInject(css$2);

var FormItem =
/*#__PURE__*/
function (_Component) {
  _inherits(FormItem, _Component);

  function FormItem() {
    _classCallCheck(this, FormItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormItem).call(this));
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          form = _this$props.form,
          item = _this$props.item;
      var getFieldDecorator = form.getFieldDecorator;
      var name = item.name,
          label = item.label,
          options = item.options,
          component = item.component,
          children = item.children,
          after = item.after;
      return React__default.createElement("div", null, React__default.createElement(_Form.Item, label, getFieldDecorator(name, _objectSpread2({}, options))(component), children && children.map(function (item) {
        var name = item.name,
            options = item.options,
            component = item.component;
        return React__default.createElement("span", {
          className: "mar-l-10",
          key: name
        }, getFieldDecorator(name, _objectSpread2({}, options))(component));
      }), after && React__default.createElement("span", {
        className: "mar-l-10"
      }, after)));
    }
  }]);

  return FormItem;
}(React.Component);

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function () {
    return antd.Form;
  }
});
exports.FormItem = FormItem;
exports.Modal = Modal;
exports.TabPage = TabPage;
//# sourceMappingURL=index.js.map
