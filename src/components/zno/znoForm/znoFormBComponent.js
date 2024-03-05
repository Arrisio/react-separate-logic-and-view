import {Button, Checkbox, Form, Input, Space, Typography} from 'antd';
import {useEffect} from "react";


export const ZnoFormBComponent = ({zno})=> {
  const [form] = Form.useForm();
  console.log('form component ZnoFormBComponent', zno)
  useEffect(() => {
    console.log('form component ZnoFormBComponent useEffect', zno)

    // const amountWithNds = zno.items.reduce((accumulator, {amount}) => accumulator + amount, 0)
    form.setFieldsValue({...zno})

  }, [zno]);
  return <Form
    form={form}
    name="znoForm"
  >
    <Typography>ZnoFormComponentB!</Typography>
    <Form.Item
      label="Номер счета"
      name="billNumber"
      // initialValue={zno.billNumber}
    >
      <Input/>
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
  </Form>
}