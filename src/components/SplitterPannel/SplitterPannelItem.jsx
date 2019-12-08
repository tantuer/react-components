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
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  onPanStart = event => {
    this.props.moving(true);
    if (this.props.vertical) {
      this.onPanStartY(event);
    } else {
      this.onPanStartX(event);
    }
  };

  onPanMove = event => {
    this.props.moving(true);
    if (this.props.vertical) {
      this.onPanY(event);
    } else {
      this.onPanX(event);
    }
  };

  onPanStartX = event => {
    x.start = this.props.size;
    const direction = event.velocityX <= 0 ? 'up' : 'down';
    this.props.countStart(x.start, event.deltaX, this.props.index, direction);
  };

  onPanX = event => {
    const direction = event.velocityX <= 0 ? 'up' : 'down';
    if (x.start - event.deltaX > this.props.max) {
      x.move = this.props.max;
    } else if (x.start - event.deltaX < this.props.min) {
      x.move = this.props.min;
    } else {
      x.move = x.start - event.deltaX;
    }
    this.props.countMove(x.move, x.start - event.deltaX - x.move, this.props.index, direction);
  };

  onPanStartY = event => {
    y.start = this.props.size;
    const direction = event.velocityY <= 0 ? 'up' : 'down';
    this.props.countStart(y.start, event.deltaY, this.props.index, direction);
  };
  onPanY = event => {
    const direction = event.velocityY <= 0 ? 'up' : 'down';
    if (y.start - event.deltaY > this.props.max) {
      y.move = this.props.max;
    } else if (y.start - event.deltaY < this.props.min) {
      y.move = this.props.min;
    } else {
      y.move = y.start - event.deltaY;
    }
    this.props.countMove(y.move, y.start - event.deltaY - y.move, this.props.index, direction);
  };

  onPanEnd = event => {
    this.props.moving(false);
    this.props.countEnd();
  };

  open = () => {
    if (this.props.size > this.props.min) {
      this.props.countStart();
      this.props.countMove(this.props.min, 0, this.props.index, 'down');
    } else {
      this.props.countStart(this.props.size, 0, this.props.index, 'up');
      this.props.countMove(this.props.openDefault, 0, this.props.index, 'up');
    }
  };
  onPress = event => {
    this.props.moving(true);
  };
  render() {
    const { children, size } = this.props;
    const style = this.props.vertical ? { height: size + 'px' } : { width: size + 'px' };
    const prop =
      children.type instanceof Object ? { toggle: this.open, isMin: !(this.props.size > this.props.min) } : {};
    return (
      <div style={style}>
        <div className='splitter-item'>
          {this.props.isMoving && <div className='cover' />}
          {React.cloneElement(children, prop)}
          {this.props.index !== 0 && (
            <Hammer
              onPress={this.onPress}
              onPanStart={this.onPanStart}
              onPan={this.onPanMove}
              onPanEnd={this.onPanEnd}
              options={{ domEvents: true }}
            >
              <div className={this.props.lineClass ? `drag-line ${this.props.lineClass}` : 'drag-line'} />
            </Hammer>
          )}
        </div>
      </div>
    );
  }
}

export default SplitterPannelItem;
