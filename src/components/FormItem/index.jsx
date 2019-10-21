import React, { Component } from 'react';
import { Form } from 'antd';
import './index.less';
class FormItem extends Component {
  constructor() {
    super();
  }
  render() {
    const { form, item } = this.props;
    const { getFieldDecorator } = form;
    const { name, label, options, component, children, after } = item;
    return (
      <div>
        <Form.Item {...label}>
          {getFieldDecorator(name, { ...options })(component)}
          {children &&
            children.map(item => {
              const { name, options, component } = item;
              return (
                <span className="mar-l-10" key={name}>
                  {getFieldDecorator(name, { ...options })(component)}
                </span>
              );
            })}
          {after && <span className="mar-l-10">{after}</span>}
        </Form.Item>
      </div>
    );
  }
}
export default FormItem;
