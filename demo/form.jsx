import React from 'react';
import { Button, Radio, Input } from 'antd';
import 'antd/dist/antd.min.css';
import { Form, FormItem } from '../lib';

const RadioGroup = Radio.Group;

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  onChange = e => {
    console.log(e.target.value);
  };

  render() {
    const formItems1 = [
      {
        label: {
          label: '姓名:',
          className: 'tantuer-form-item tantuer-form-item-46'
        },
        name: 'file',
        options: {
          initialValue: '',
          rules: [{ required: true, message: '请输入姓名' }]
        },
        component: <Input onChange={this.onChange} />
      },
      {
        label: {
          label: '性别:',
          className: 'tantuer-form-item tantuer-form-item-46'
        },
        name: 'sex',
        options: {
          initialValue: true,
          rules: [{ required: true, message: '请选择性别' }]
        },
        component: (
          <RadioGroup>
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </RadioGroup>
        )
      }
    ];
    return (
      <div className="tantuer">
        <div className="tantuer-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className="tantuer-field-area">
              {formItems1.map(item => {
                return <FormItem key={item.name} form={this.props.form} item={item} />;
              })}
            </div>
            <div className="submit-ft">
              <Button type="primary" htmlType="submit" className="login-form-button">
                确定
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(FormDemo);
