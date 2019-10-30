import React from 'react';
import { Icon, Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;

class PropertyPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      activeKey: '1'
    };
  }

  toggle = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  };

  togglePanel = activeKey => {
    this.setState({ opened: true, activeKey });
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  render() {
    const { opened, activeKey } = this.state;
    const { children } = this.props;
    return (
      <div className="panel-container">
        <div className="opened-panel" style={{ display: opened === true ? 'block' : 'none' }}>
          <Icon type="minus" title="点击显示/隐藏属性面板" className="icon-btn" onClick={this.toggle} />
          {children.length > 0 && (
            <Tabs onChange={this.onChange} type="card" activeKey={activeKey} defaultActiveKey={children[0].key}>
              {children.map(it => {
                return (
                  <TabPane tab={it.props.title} key={it.key}>
                    {it}
                  </TabPane>
                );
              })}
            </Tabs>
          )}
        </div>
        <div className="closed-panel" style={{ display: opened === false ? 'block' : 'none' }}>
          <Icon type="plus" title="点击显示/隐藏属性面板" className="icon-btn" onClick={this.toggle} />
          {children.map(it => {
            return (
              <div className="vertical" onClick={this.togglePanel.bind(this, it.key)} key={it.key}>
                {it.props.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PropertyPanel;
