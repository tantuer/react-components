import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;
class TabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ''
    };
  }
  componentDidMount() {
    this.setState({
      activeKey: this.props.defaultActiveKey
    });
  }
  onChange = activeKey => {
    this.setState({ activeKey });
    this.props.callback && this.props.callback(activeKey);
  };

  render() {
    const { activeKey } = this.state;
    const { children, defaultActiveKey } = this.props;
    return (
      <div className="tantuer-tab">
        <Tabs type="card" defaultActiveKey={defaultActiveKey} activeKey={activeKey} onChange={this.onChange}>
          {children.map(it => {
            return (
              <TabPane tab={<span>{it.props.title}</span>} key={it.key}>
                {it}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

export default TabPage;
