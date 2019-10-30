import _Tabs from 'antd/lib/tabs';
import React, { Component } from 'react';
import _Button from 'antd/lib/button';
import _Icon from 'antd/lib/icon';
import ReactDOM from 'react-dom';
import _Form from 'antd/lib/form';
import Hammer from 'react-hammerjs';
export { Form } from 'antd';

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

function _extends() {
  _extends = Object.assign || function (target) {
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
      return React.createElement("div", {
        className: "tantuer-tab"
      }, React.createElement(_Tabs, {
        type: "card",
        defaultActiveKey: defaultActiveKey,
        activeKey: activeKey,
        onChange: this.onChange
      }, children.map(function (it) {
        return React.createElement(TabPane, {
          tab: React.createElement("span", null, it.props.title),
          key: it.key
        }, it);
      })));
    }
  }]);

  return TabPage;
}(Component);

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
      return React.createElement(React.Fragment, null, children);
    }
  }]);

  return TabPageItem;
}(React.Component);

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
/**
 * deepCopy 深拷贝
 * @source : 对象或者数组
 * @maxLevel: 最大拷贝的深度
 * @level:当前拷贝深度
 *  */

var deepCopy = function deepCopy(source, maxLevel, level) {
  var sourceCopy = source instanceof Array ? [] : {};

  for (var key in source) {
    if (level >= maxLevel) {
      sourceCopy[key] = source[key];
      return;
    }

    if (source[key] instanceof Object) {
      sourceCopy[key] = deepCopy(source[key], maxLevel, level++);
    } else {
      sourceCopy[key] = source[key];
    }
  }

  return sourceCopy;
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
      return React.createElement(React.Fragment, null, models.map(function (item) {
        var width = _typeof(item.width) === Number ? item.width + 'px' : item.width;
        var hasFooter = item.isOkBtn || item.isCancelBtn;
        var modelConClassName = hasFooter ? 'modal-con' : 'modal-con-wp';
        var titleClass = item.error ? 'error' : '';

        if (item.show) {
          return React.createElement("div", {
            className: "tantuer-modal",
            key: item.key
          }, React.createElement("div", {
            className: "bg",
            onClick: _this2.maskClose.bind(_this2, item.key)
          }), React.createElement("div", {
            className: "inner",
            style: {
              width: width
            }
          }, React.createElement("div", {
            className: "modal-hd"
          }, React.createElement("h3", {
            className: titleClass
          }, item.title), React.createElement(_Icon, {
            type: "close",
            onClick: _this2.close.bind(_this2, item.key)
          })), React.createElement("div", {
            className: modelConClassName
          }, item.content), item.isOkBtn || item.isCancelBtn ? React.createElement("div", {
            className: "modal-ft"
          }, item.isCancelBtn && React.createElement(_Button, {
            className: "modal-cancel",
            onClick: _this2.cancel.bind(_this2, item.key)
          }, item.cancelTxt), item.isOkBtn && React.createElement(_Button, {
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
}(Component);
var div = document.createElement('div');
document.body.appendChild(div);
var Modal = ReactDOM.render(React.createElement(TantuterModal), div);

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
      return React.createElement("div", null, React.createElement(_Form.Item, label, getFieldDecorator(name, _objectSpread2({}, options))(component), children && children.map(function (item) {
        var name = item.name,
            options = item.options,
            component = item.component;
        return React.createElement("span", {
          className: "mar-l-10",
          key: name
        }, getFieldDecorator(name, _objectSpread2({}, options))(component));
      }), after && React.createElement("span", {
        className: "mar-l-10"
      }, after)));
    }
  }]);

  return FormItem;
}(Component);

var css$3 = ".splitter-pannel {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.splitter-pannel.splitter-pannel-vertical > div > .splitter-item {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.splitter-pannel.splitter-pannel-vertical > div > .splitter-item .cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.splitter-pannel.splitter-pannel-vertical > div > .splitter-item > .drag-line {\n  position: absolute;\n  top: -1px;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 5px;\n  cursor: row-resize;\n  background: #ccc;\n}\n.splitter-pannel.splitter-pannel-vertical > div > .splitter-item > .drag-line.nobg {\n  background: none;\n}\n.splitter-pannel.splitter-pannel-horizontal {\n  display: flex;\n  flex-direction: row;\n}\n.splitter-pannel.splitter-pannel-horizontal > div > .splitter-item {\n  position: relative;\n  height: 100%;\n}\n.splitter-pannel.splitter-pannel-horizontal > div > .splitter-item .cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.splitter-pannel.splitter-pannel-horizontal > div > .splitter-item > .drag-line {\n  position: absolute;\n  top: 0;\n  left: -2px;\n  width: 2px;\n  z-index: 2;\n  height: 100%;\n  cursor: col-resize;\n  background: #ccc;\n}\n";
styleInject(css$3);

var x = {
  start: 0,
  move: 0,
  end: 0
};
var y = {
  start: 0,
  move: 0,
  end: 0
};

var SplitterPannelItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SplitterPannelItem, _Component);

  _createClass(SplitterPannelItem, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return _objectSpread2({}, nextProps);
    }
  }]);

  function SplitterPannelItem() {
    var _this;

    _classCallCheck(this, SplitterPannelItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterPannelItem).call(this));

    _defineProperty(_assertThisInitialized(_this), "onPanStart", function (event) {
      _this.setState({
        move: true
      });

      if (_this.props.vertical) {
        _this.onPanStartY(event);
      } else {
        _this.onPanStartX(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPanMove", function (event) {
      _this.setState({
        move: true
      });

      if (_this.props.vertical) {
        _this.onPanY(event);
      } else {
        _this.onPanX(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPanStartX", function (event) {
      x.start = _this.state.size;
      var direction = event.velocityX <= 0 ? 'up' : 'down';

      _this.props.countStart(x.start, event.deltaX, _this.state.index, direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanX", function (event) {
      var direction = event.velocityX <= 0 ? 'up' : 'down';

      if (x.start - event.deltaX > _this.state.max) {
        x.move = _this.state.max;
      } else if (x.start - event.deltaX < _this.state.min) {
        x.move = _this.state.min;
      } else {
        x.move = x.start - event.deltaX;
      }

      _this.props.countMove(x.move, x.start - event.deltaX - x.move, _this.state.index, direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanStartY", function (event) {
      y.start = _this.state.size;
      var direction = event.velocityY <= 0 ? 'up' : 'down';

      _this.props.countStart(y.start, event.deltaY, _this.state.index, direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanY", function (event) {
      var direction = event.velocityY <= 0 ? 'up' : 'down';

      if (y.start - event.deltaY > _this.state.max) {
        y.move = _this.state.max;
      } else if (y.start - event.deltaY < _this.state.min) {
        y.move = _this.state.min;
      } else {
        y.move = y.start - event.deltaY;
      }

      _this.props.countMove(y.move, y.start - event.deltaY - y.move, _this.state.index, direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanEnd", function (event) {
      _this.setState({
        move: false
      });

      _this.props.countEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      if (_this.state.size > _this.state.min) {
        _this.props.countStart();

        _this.props.countMove(_this.state.min, 0, _this.state.index, 'down');
      } else {
        _this.props.countStart(_this.state.size, 0, _this.state.index, 'up');

        _this.props.countMove(_this.state.openDefault, 0, _this.state.index, 'up');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPress", function (event) {
      _this.setState({
        move: true
      });
    });

    _this.state = {
      move: false
    };
    return _this;
  }

  _createClass(SplitterPannelItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var size = this.state.size;
      var style = this.props.vertical ? {
        height: size + 'px'
      } : {
        width: size + 'px'
      };
      var lineClass = "drag-line ".concat(this.props.lineClass);
      return React.createElement("div", {
        style: style
      }, React.createElement("div", {
        className: "splitter-item"
      }, this.state.move && React.createElement("div", {
        className: "cover"
      }), React.cloneElement(children, {
        open: this.open
      }), this.state.index !== 0 && React.createElement(Hammer, {
        onPress: this.onPress,
        onPanStart: this.onPanStart,
        onPan: this.onPanMove,
        onPanEnd: this.onPanEnd,
        options: {
          domEvents: true
        }
      }, React.createElement("div", {
        className: lineClass
      }))));
    }
  }]);

  return SplitterPannelItem;
}(Component);

var SplitterPannel =
/*#__PURE__*/
function (_Component) {
  _inherits(SplitterPannel, _Component);

  function SplitterPannel() {
    var _this;

    _classCallCheck(this, SplitterPannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterPannel).call(this));

    _defineProperty(_assertThisInitialized(_this), "randomKey", function () {
      var s = [];
      var hexDigits = '0123456789abcdef';

      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
      }

      s[0] = 'x';
      s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010

      s[8] = s[13] = s[18] = s[23] = '_';
      return s.join('');
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      var allSize = _this.props.vertical ? _this.myRef.current.offsetHeight : _this.myRef.current.offsetWidth;
      var len = _this.pannelAttr.length; //改变最后一个pannel的size,maxSize

      var size = allSize - _this.state.size + _this.pannelAttr[len - 1].size;
      var max = allSize - _this.state.size + _this.pannelAttr[len - 1].max;
      _this.pannelAttr[len - 1].size = size;
      _this.pannelAttr[len - 1].max = max;

      _this.setState({
        pannelAttr: _this.pannelAttr,
        size: allSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setDefaultProps", function (children) {
      var pannelAttr = [];
      var allSize = _this.props.vertical ? _this.myRef.current.offsetHeight : _this.myRef.current.offsetWidth;
      var isOther = false;
      children.forEach(function (item, i) {
        var _this$getOtherTotalSi = _this.getOtherTotalSize(children, i),
            otherTotalSize = _this$getOtherTotalSi.otherTotalSize,
            otherTotalMin = _this$getOtherTotalSi.otherTotalMin;

        var size = 0;

        if (item.props.init) {
          size = item.props.init;
        } else {
          if ((i === 0 || i === children.length - 1) && !isOther) {
            size = allSize - otherTotalSize;
            isOther = true;
          } else {
            size = item.props.min;
          }
        }

        var pannel = {
          size: size,
          index: i,
          max: _this.props.vertical ? allSize - otherTotalMin : allSize - otherTotalMin,
          min: item.props.min,
          hd: item.props.hd,
          openDefault: _this.openDefault,
          id: _this.randomKey(),
          props: item.props
        };
        pannelAttr.push(pannel);
      });

      _this.setState({
        size: allSize,
        pannelAttr: pannelAttr
      });

      _this.pannelAttr = pannelAttr;
    });

    _defineProperty(_assertThisInitialized(_this), "getOtherTotalSize", function (children, index) {
      var otherTotalMin = 0;
      var otherTotalSize = 0;
      children.forEach(function (item, i) {
        if (i === index) {
          return;
        }

        otherTotalSize += item.props.init ? item.props.init : item.props.min;
        otherTotalMin += item.props.min;
      });
      return {
        otherTotalSize: otherTotalSize,
        otherTotalMin: otherTotalMin
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getOtherTotalMin", function (start, end, currentIndex) {
      // console.log(start, end, currentIndex);
      var otherTotalMin = 0;

      _this.pannelAttr.forEach(function (item, i) {
        if (i < start || i > end || i === currentIndex) {
          return;
        }

        otherTotalMin += item.min;
      });

      return otherTotalMin;
    });

    _defineProperty(_assertThisInitialized(_this), "countStart", function () {
      _this.pannelAttrClone = deepCopy(_this.pannelAttr, 3, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "countMove", function (size, move, index, direction) {
      if (_this.isTouch && _this.direction !== direction) ;

      if (direction === 'up') {
        if (index === 0) {
          return;
        }

        _this.direction = 'up';
        var current = _this.pannelAttr[index];

        var maxSize = _this.getTotalSizeForUp(index, index) - _this.getOtherTotalMin(index - index, index, index);

        current.size = size > maxSize ? maxSize : size;

        _this.setPrevSize(current.size, index, index, 1);
      }

      if (direction === 'down') {
        if (index === 0) {
          return;
        }

        _this.direction = 'down'; // 以index-1为current

        var _current = _this.pannelAttr[index - 1];

        var _maxSize = _this.getTotalSizeForDown(index - 1, _this.pannelAttr.length - index) - _this.getOtherTotalMin(index - 1, _this.pannelAttr.length - 1, index - 1);

        _current.size = _this.getTotalSizeForDown(index - 1, 1) - size - move >= _maxSize ? _maxSize : _this.getTotalSizeForDown(index - 1, 1) - size - move;

        _this.setNextSize(_current.size, index - 1, index - 1, 1);
      }

      _this.setState({
        pannelAttr: _this.pannelAttr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "countEnd", function () {
      _this.isTouch = false;
    });

    _defineProperty(_assertThisInitialized(_this), "setNextSize", function (size, index, initIndex, n) {
      if (index >= _this.pannelAttr.length - 1) {
        return;
      }

      var next = _this.pannelAttr[index + 1];

      if (next.size <= next.min) {
        var exceptSize = size + next.min;

        _this.setNextSize(exceptSize, index + 1, initIndex, n + 1);

        next.size = next.min;
        _this.isTouch = true; // 触碰到下面的pannel
      } else {
        next.size = _this.getTotalSizeForDown(initIndex, n) - size;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPrevSize", function (size, index, initIndex, n) {
      if (index <= 0) {
        return;
      }

      var prev = _this.pannelAttr[index - 1];

      if (prev.size <= prev.min) {
        var xsize = size + prev.min;

        _this.setPrevSize(xsize, index - 1, initIndex, n + 1);

        prev.size = prev.min;
        _this.isTouch = true; // 触碰到上面的pannel
      } else {
        prev.size = _this.getTotalSizeForUp(initIndex, n) - size;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTotalSizeForUp", function (index, n) {
      if (index === 0) {
        return 0;
      }

      var start = index - n < 0 ? 0 : index - n;
      var totalSize = 0;

      for (var i = start; i <= index; i++) {
        totalSize += _this.pannelAttrClone[i].size;
      }

      return totalSize;
    });

    _defineProperty(_assertThisInitialized(_this), "getTotalSizeForDown", function (index, n) {
      var end = index + n > _this.pannelAttrClone.length - 1 ? _this.pannelAttrClone.length - 1 : index + n;
      var totalSize = 0;

      for (var i = index; i <= end; i++) {
        totalSize += _this.pannelAttrClone[i].size;
      }

      return totalSize;
    });

    _this.myRef = React.createRef();
    _this.pannelAttr = [];
    _this.pannelAttrClone = []; // clone

    _this.prevPanel = {};
    _this.currentPanel = {};
    _this.prevDirection = '';
    _this.min = 40;
    _this.upTotalHeight = 0;
    _this.downTotalHeight = 0;
    _this.startMove = 0;
    _this.openDefault = 200;
    _this.direction = '';
    _this.isTouch = false;
    _this.state = {
      width: '100%',
      size: 0,
      // 总高度
      pannelAttr: [] // pannel属性集

    };
    return _this;
  }

  _createClass(SplitterPannel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDefaultProps(this.props.children);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      var currentChildren = this.props.children.filter(function (item) {
        return item;
      });
      var nextChildren = nextProps.children.filter(function (item) {
        return item;
      });

      if (nextChildren.length !== currentChildren.length) {
        this.setDefaultProps(nextChildren);
      }
    } // 随机生成key

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pannelAttr = this.state.pannelAttr;
      var className = this.props.vertical ? 'splitter-pannel splitter-pannel-vertical' : 'splitter-pannel splitter-pannel-horizontal';
      return React.createElement("div", {
        className: className,
        ref: this.myRef
      }, pannelAttr.map(function (item, index) {
        return React.createElement(SplitterPannelItem, _extends({
          key: item.id
        }, item, item.props, {
          vertical: _this2.props.vertical,
          lineClass: _this2.props.lineClass,
          countStart: _this2.countStart,
          countMove: _this2.countMove,
          countEnd: _this2.countEnd
        }));
      }));
    }
  }]);

  return SplitterPannel;
}(Component);

SplitterPannel.Item = SplitterPannelItem;

var css$4 = ".container .panel-container {\n  z-index: 999;\n  border-radius: 0px;\n  top: 0;\n  width: auto;\n  display: flex;\n  position: relative;\n  background: #ffffff;\n  border-left: solid 1px #ddd;\n}\n.container .opened-panel {\n  width: 350px;\n  height: 100%;\n  display: none;\n}\n.container .closed-panel {\n  width: 28px;\n  padding-top: 36px;\n  height: 100%;\n}\n.container .panel-container .nav-tabs > li > a {\n  border-radius: 0;\n}\n.container .icon-btn {\n  color: #304156;\n  font-size: 14px;\n  cursor: pointer;\n  position: absolute;\n  right: 6px;\n  top: 12px;\n  z-index: 111;\n}\n.container .vertical {\n  width: 100%;\n  color: #304156;\n  cursor: pointer;\n  background: #fff;\n  letter-spacing: 5px;\n  padding: 10px 5px 5px;\n  writing-mode: vertical-rl;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.container .vertical:nth-child(3) {\n  border-top: none;\n}\n.container .vertical:hover {\n  background: #eee;\n}\n.container #for-nav {\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n.container .ant-tabs .ant-tabs-top-content,\n.container .ant-tabs .ant-tabs-bottom-content {\n  padding: 0 5px;\n}\n.container .anchor {\n  padding: 5px;\n  color: #304156;\n  cursor: pointer;\n}\n.container .anchor span {\n  cursor: pointer;\n  margin-left: 5px;\n}\n.container .anchor:hover {\n  background: #eee;\n  transition: all 0.3s;\n}\n";
styleInject(css$4);

var TabPane$1 = _Tabs.TabPane;

var PropertyPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropertyPanel, _React$Component);

  function PropertyPanel(props) {
    var _this;

    _classCallCheck(this, PropertyPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyPanel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var opened = _this.state.opened;

      _this.setState({
        opened: !opened
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePanel", function (activeKey) {
      _this.setState({
        opened: true,
        activeKey: activeKey
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });
    });

    _this.state = {
      opened: false,
      activeKey: '1'
    };
    return _this;
  }

  _createClass(PropertyPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          opened = _this$state.opened,
          activeKey = _this$state.activeKey;
      var children = this.props.children;
      return React.createElement("div", {
        className: "panel-container"
      }, React.createElement("div", {
        className: "opened-panel",
        style: {
          display: opened === true ? 'block' : 'none'
        }
      }, React.createElement(_Icon, {
        type: "minus",
        title: "\u70B9\u51FB\u663E\u793A/\u9690\u85CF\u5C5E\u6027\u9762\u677F",
        className: "icon-btn",
        onClick: this.toggle
      }), children.length > 0 && React.createElement(_Tabs, {
        onChange: this.onChange,
        type: "card",
        activeKey: activeKey,
        defaultActiveKey: children[0].key
      }, children.map(function (it) {
        return React.createElement(TabPane$1, {
          tab: it.props.title,
          key: it.key
        }, it);
      }))), React.createElement("div", {
        className: "closed-panel",
        style: {
          display: opened === false ? 'block' : 'none'
        }
      }, React.createElement(_Icon, {
        type: "plus",
        title: "\u70B9\u51FB\u663E\u793A/\u9690\u85CF\u5C5E\u6027\u9762\u677F",
        className: "icon-btn",
        onClick: this.toggle
      }), children.map(function (it) {
        return React.createElement("div", {
          className: "vertical",
          onClick: _this2.togglePanel.bind(_this2, it.key),
          key: it.key
        }, it.props.title);
      })));
    }
  }]);

  return PropertyPanel;
}(React.Component);

var PropertyPanelItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropertyPanelItem, _React$Component);

  function PropertyPanelItem(props) {
    var _this;

    _classCallCheck(this, PropertyPanelItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyPanelItem).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(PropertyPanelItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(React.Fragment, null, children);
    }
  }]);

  return PropertyPanelItem;
}(React.Component);

PropertyPanel.Item = PropertyPanelItem;

export { FormItem, Modal, PropertyPanel, SplitterPannel, TabPage };
//# sourceMappingURL=index.es.js.map
