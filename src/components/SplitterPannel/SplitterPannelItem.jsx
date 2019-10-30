import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import './index.less';
const x = {
  start: 0,
  move: 0,
  end: 0
};
const y = {
  start: 0,
  move: 0,
  end: 0
};
class SplitterPannelItem extends Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      ...nextProps
    };
  }
  constructor() {
    super();
    this.state = {
      move: false
    };
  }
  componentDidMount() {}

  onPanStart = event => {
    this.setState({
      move: true
    });
    if (this.props.vertical) {
      this.onPanStartY(event);
    } else {
      this.onPanStartX(event);
    }
  };

  onPanMove = event => {
    this.setState({
      move: true
    });
    if (this.props.vertical) {
      this.onPanY(event);
    } else {
      this.onPanX(event);
    }
  };

  onPanStartX = event => {
    x.start = this.state.size;
    const direction = event.velocityX <= 0 ? 'up' : 'down';
    this.props.countStart(x.start, event.deltaX, this.state.index, direction);
  };

  onPanX = event => {
    const direction = event.velocityX <= 0 ? 'up' : 'down';
    if (x.start - event.deltaX > this.state.max) {
      x.move = this.state.max;
    } else if (x.start - event.deltaX < this.state.min) {
      x.move = this.state.min;
    } else {
      x.move = x.start - event.deltaX;
    }
    this.props.countMove(x.move, x.start - event.deltaX - x.move, this.state.index, direction);
  };

  onPanStartY = event => {
    y.start = this.state.size;
    const direction = event.velocityY <= 0 ? 'up' : 'down';
    this.props.countStart(y.start, event.deltaY, this.state.index, direction);
  };
  onPanY = event => {
    const direction = event.velocityY <= 0 ? 'up' : 'down';
    if (y.start - event.deltaY > this.state.max) {
      y.move = this.state.max;
    } else if (y.start - event.deltaY < this.state.min) {
      y.move = this.state.min;
    } else {
      y.move = y.start - event.deltaY;
    }
    this.props.countMove(y.move, y.start - event.deltaY - y.move, this.state.index, direction);
  };

  onPanEnd = event => {
    this.setState({
      move: false
    });
    this.props.countEnd();
  };

  open = () => {
    if (this.state.size > this.state.min) {
      this.props.countStart();
      this.props.countMove(this.state.min, 0, this.state.index, 'down');
    } else {
      this.props.countStart(this.state.size, 0, this.state.index, 'up');

      this.props.countMove(this.state.openDefault, 0, this.state.index, 'up');
    }
  };
  onPress = event => {
    this.setState({
      move: true
    });
  };
  render() {
    const { children } = this.props;
    const { size } = this.state;
    const style = this.props.vertical ? { height: size + 'px' } : { width: size + 'px' };
    const lineClass = `drag-line ${this.props.lineClass}`;
    return (
      <div style={style}>
        <div className="splitter-item">
          {this.state.move && <div className="cover" />}
          {React.cloneElement(children, { open: this.open })}
          {this.state.index !== 0 && (
            <Hammer
              onPress={this.onPress}
              onPanStart={this.onPanStart}
              onPan={this.onPanMove}
              onPanEnd={this.onPanEnd}
              options={{ domEvents: true }}
            >
              <div className={lineClass} />
            </Hammer>
          )}
        </div>
      </div>
    );
  }
}

export default SplitterPannelItem;
