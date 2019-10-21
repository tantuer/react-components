import React, { Component } from 'react';
import { randomKey } from '../../utils/index';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'antd';
import './index.less';
const defaultOptions = {
  show: false,
  title: 'modal',
  okTxt: '确定',
  isOkBtn: true,
  cancelTxt: '取消',
  isCancelBtn: true,
  width: 500,
  maskClosable: true,
  error: false,
  ok: () => {
    console.log('ok');
  },
  cancel: () => {
    console.log('cancel');
  },
  content: 'some text'
};
export class TantuterModal extends Component {
  constructor() {
    super();
    this.state = {
      models: []
    };
  }
  open(options) {
    const { models } = this.state;
    defaultOptions.show = true;
    const current = {
      ...defaultOptions,
      ...options,
      key: randomKey()
    };
    this.setState({
      show: true,
      models: models.concat([current])
    });
    return current.key;
  }
  findThis(key) {
    return this.state.models.find(item => {
      return item.key === key;
    });
  }
  ok(key) {
    const current = this.findThis.bind(this, key)();
    current.ok();
  }
  cancel(key) {
    const current = this.findThis.bind(this, key)();
    current.cancel();
    this.close(key);
  }
  close(key) {
    if (key) {
      this.state.models.forEach(item => {
        if (item.key === key) {
          item.show = false;
        }
      });
    }
    this.setState({
      models: key ? this.state.models : []
    });
  }
  maskClose(key) {
    const current = this.findThis.bind(this, key)();
    if (current.maskClosable) {
      this.close.bind(this, key)();
    }
  }
  render() {
    const { models } = this.state;
    return (
      <>
        {models.map(item => {
          const width = typeof item.width === Number ? item.width + 'px' : item.width;
          const hasFooter = item.isOkBtn || item.isCancelBtn;
          const modelConClassName = hasFooter ? 'modal-con' : 'modal-con-wp';
          const titleClass = item.error ? 'error' : '';
          if (item.show) {
            return (
              <div className="tantuer-modal" key={item.key}>
                <div className="bg" onClick={this.maskClose.bind(this, item.key)} />
                <div className="inner" style={{ width: width }}>
                  <div className="modal-hd">
                    <h3 className={titleClass}>{item.title}</h3>
                    <Icon type="close" onClick={this.close.bind(this, item.key)} />
                  </div>
                  <div className={modelConClassName}>{item.content}</div>
                  {item.isOkBtn || item.isCancelBtn ? (
                    <div className="modal-ft">
                      {item.isCancelBtn && (
                        <Button className="modal-cancel" onClick={this.cancel.bind(this, item.key)}>
                          {item.cancelTxt}
                        </Button>
                      )}
                      {item.isOkBtn && (
                        <Button type="primary" className="modal-ok" onClick={this.ok.bind(this, item.key)}>
                          {item.okTxt}
                        </Button>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  }
}

let div = document.createElement('div');
document.body.appendChild(div);
let Modal = ReactDOM.render(React.createElement(TantuterModal), div);
export default Modal;
