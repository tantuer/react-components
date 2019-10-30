import React, { Component } from 'react';
import Pannel from './SplitterPannelItem.jsx';
import { deepCopy } from '../../utils';
import './index.less';

class SplitterPannel extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.pannelAttr = [];
    this.pannelAttrClone = []; // clone
    this.prevPanel = {};
    this.currentPanel = {};
    this.prevDirection = '';
    this.min = 40;
    this.upTotalHeight = 0;
    this.downTotalHeight = 0;
    this.startMove = 0;
    this.openDefault = 200;
    this.direction = '';
    this.isTouch = false;
    this.state = {
      width: '100%',
      size: 0, // 总高度
      pannelAttr: [] // pannel属性集
    };
  }
  componentDidMount() {
    this.setDefaultProps(this.props.children);
    window.addEventListener('resize', this.resize);
  }
  componentDidUpdate(nextProps) {
    const currentChildren = this.props.children.filter(item => item);
    const nextChildren = nextProps.children.filter(item => item);
    if (nextChildren.length !== currentChildren.length) {
      this.setDefaultProps(nextChildren);
    }
  }
  // 随机生成key
  randomKey = () => {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    s[0] = 'x';
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[8] = s[13] = s[18] = s[23] = '_';
    return s.join('');
  };
  resize = () => {
    const allSize = this.props.vertical ? this.myRef.current.offsetHeight : this.myRef.current.offsetWidth;
    const len = this.pannelAttr.length;
    //改变最后一个pannel的size,maxSize
    const size = allSize - this.state.size + this.pannelAttr[len - 1].size;
    const max = allSize - this.state.size + this.pannelAttr[len - 1].max;
    this.pannelAttr[len - 1].size = size;
    this.pannelAttr[len - 1].max = max;

    this.setState({
      pannelAttr: this.pannelAttr,
      size: allSize
    });
  };
  setDefaultProps = children => {
    const pannelAttr = [];
    const allSize = this.props.vertical ? this.myRef.current.offsetHeight : this.myRef.current.offsetWidth;
    let isOther = false;
    children.forEach((item, i) => {
      const { otherTotalSize, otherTotalMin } = this.getOtherTotalSize(children, i);
      let size = 0;
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
      const pannel = {
        size: size,
        index: i,
        max: this.props.vertical ? allSize - otherTotalMin : allSize - otherTotalMin,
        min: item.props.min,
        hd: item.props.hd,
        openDefault: this.openDefault,
        id: this.randomKey(),
        props: item.props
      };
      pannelAttr.push(pannel);
    });

    this.setState({
      size: allSize,
      pannelAttr
    });
    this.pannelAttr = pannelAttr;
  };

  getOtherTotalSize = (children, index) => {
    let otherTotalMin = 0;
    let otherTotalSize = 0;
    children.forEach((item, i) => {
      if (i === index) {
        return;
      }
      otherTotalSize += item.props.init ? item.props.init : item.props.min;
      otherTotalMin += item.props.min;
    });
    return {
      otherTotalSize,
      otherTotalMin
    };
  };

  getOtherTotalMin = (start, end, currentIndex) => {
    // console.log(start, end, currentIndex);
    let otherTotalMin = 0;
    this.pannelAttr.forEach((item, i) => {
      if (i < start || i > end || i === currentIndex) {
        return;
      }
      otherTotalMin += item.min;
    });
    return otherTotalMin;
  };

  countStart = () => {
    this.pannelAttrClone = deepCopy(this.pannelAttr, 3, 0);
  };

  countMove = (size, move, index, direction) => {
    if (this.isTouch && this.direction !== direction) {
      // this.countStart();
    }
    if (direction === 'up') {
      if (index === 0) {
        return;
      }
      this.direction = 'up';
      const current = this.pannelAttr[index];
      const maxSize = this.getTotalSizeForUp(index, index) - this.getOtherTotalMin(index - index, index, index);
      current.size = size > maxSize ? maxSize : size;
      this.setPrevSize(current.size, index, index, 1);
    }
    if (direction === 'down') {
      if (index === 0) {
        return;
      }
      this.direction = 'down';
      // 以index-1为current
      const current = this.pannelAttr[index - 1];
      const maxSize =
        this.getTotalSizeForDown(index - 1, this.pannelAttr.length - index) -
        this.getOtherTotalMin(index - 1, this.pannelAttr.length - 1, index - 1);
      current.size =
        this.getTotalSizeForDown(index - 1, 1) - size - move >= maxSize
          ? maxSize
          : this.getTotalSizeForDown(index - 1, 1) - size - move;
      this.setNextSize(current.size, index - 1, index - 1, 1);
    }
    this.setState({
      pannelAttr: this.pannelAttr
    });
  };
  countEnd = () => {
    this.isTouch = false;
  };

  setNextSize = (size, index, initIndex, n) => {
    if (index >= this.pannelAttr.length - 1) {
      return;
    }
    const next = this.pannelAttr[index + 1];
    if (next.size <= next.min) {
      const exceptSize = size + next.min;
      this.setNextSize(exceptSize, index + 1, initIndex, n + 1);
      next.size = next.min;
      this.isTouch = true; // 触碰到下面的pannel
    } else {
      next.size = this.getTotalSizeForDown(initIndex, n) - size;
    }
  };

  setPrevSize = (size, index, initIndex, n) => {
    if (index <= 0) {
      return;
    }
    const prev = this.pannelAttr[index - 1];
    if (prev.size <= prev.min) {
      const xsize = size + prev.min;
      this.setPrevSize(xsize, index - 1, initIndex, n + 1);
      prev.size = prev.min;
      this.isTouch = true; // 触碰到上面的pannel
    } else {
      prev.size = this.getTotalSizeForUp(initIndex, n) - size;
    }
  };

  // 往上、左边拖拽的时候，获取当前index(包含)pannel及往前的n个之和
  getTotalSizeForUp = (index, n) => {
    if (index === 0) {
      return 0;
    }
    const start = index - n < 0 ? 0 : index - n;
    let totalSize = 0;
    for (let i = start; i <= index; i++) {
      totalSize += this.pannelAttrClone[i].size;
    }
    return totalSize;
  };

  // 往下\右边拖拽的时候，获取当前index(包含)pannel及往后的n个之和
  getTotalSizeForDown = (index, n) => {
    const end = index + n > this.pannelAttrClone.length - 1 ? this.pannelAttrClone.length - 1 : index + n;
    let totalSize = 0;
    for (let i = index; i <= end; i++) {
      totalSize += this.pannelAttrClone[i].size;
    }
    return totalSize;
  };

  render() {
    const { pannelAttr } = this.state;
    const className = this.props.vertical
      ? 'splitter-pannel splitter-pannel-vertical'
      : 'splitter-pannel splitter-pannel-horizontal';
    return (
      <div className={className} ref={this.myRef}>
        {pannelAttr.map((item, index) => {
          return (
            <Pannel
              key={item.id}
              {...item}
              {...item.props}
              vertical={this.props.vertical}
              lineClass={this.props.lineClass}
              countStart={this.countStart}
              countMove={this.countMove}
              countEnd={this.countEnd}
            />
          );
        })}
      </div>
    );
  }
}

export default SplitterPannel;
