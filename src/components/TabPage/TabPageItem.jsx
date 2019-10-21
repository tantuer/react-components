import React from 'react';

class TabPageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default TabPageItem;
