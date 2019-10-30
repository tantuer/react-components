import React, { Component } from 'react';
import Pannel from './SplitterPannelItem.jsx';
import './index.less';
class SplitterItem extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <div className='splitter-pannel splitter-pannel-vertical'>
        {children.map(item => {
          return <Pannel />;
        })}
      </div>
    );
  }
}

export default SplitterItem;
