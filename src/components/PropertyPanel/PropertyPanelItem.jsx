import React from 'react';

class PropertyPanelItem extends React.Component {
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

export default PropertyPanelItem;
