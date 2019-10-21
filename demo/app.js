import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.min.css';
import { TabPage, Modal } from '../lib';
import FormDemo from './form.jsx';

class App extends React.Component {
  openModal = () => {
    Modal.open({
      title: '测试一下',
      okTxt: '确定',
      isOkBtn: false,
      cancelTxt: '取消',
      isCancelBtn: false,
      width: 600,
      content: <FormDemo />
    });
  };
  render() {
    return (
      <TabPage defaultActiveKey="1">
        <TabPage.Item
          title={
            <>
              <span>规则</span>
            </>
          }
          key="1"
        >
          <Button onClick={this.openModal}>弹窗</Button>
        </TabPage.Item>
        <TabPage.Item
          title={
            <>
              <span>测试</span>
            </>
          }
          key="2"
        >
          bbb
        </TabPage.Item>
      </TabPage>
    );
  }
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
