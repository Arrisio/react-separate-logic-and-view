import {Button, Checkbox, Form, Input, Typography, Space, Spin ,Divider } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

import {useEffect} from "react";


export const ZnoFormAComponent = ({zno, state, actions, computed}) => {
  const [form] = Form.useForm();
  console.log('form component ZnoFormAComponent', zno)
  useEffect(() => {
    console.log('form component ZnoFormAComponent useEffect', zno)
    form.setFieldsValue({...zno})
  }, [zno]);

  if (computed.inProgress ){
    return <Spin/>
  }
  return <Form
    form={form}
    name="znoForm"
    // onFinish={handleOnFinish}
  >
    <Typography>ZnoFormComponentA</Typography>
    <Form.Item
      label="Номер счета"
      name="billNumber"

    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Сумма с без НДС"
      name="amountWithNds"
      rules={[
        {
          required: true,
          message: 'Введите сумму!',
        },
      ]}
    >
      <Input/>
    </Form.Item>
    <Form.List name="items">
      {
        (fields, {}, errors) => (
          <>
            {fields.map(({key, name}, index) => (
                <Space key={index}>
                  <Form.Item
                    label="Позиция закупки"
                    name={[name, "name"]}
                    // key={index}
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    label="Стоимость"
                    name={[name, "amount"]}
                    // key={index}
                  >
                    <Input/>
                  </Form.Item>

                </Space>
              )
            )
            }
          </>
        )
      }
    </Form.List>

    <Divider ><PlusCircleOutlined onClick={actions.addItem}/></Divider >
  </Form>

}