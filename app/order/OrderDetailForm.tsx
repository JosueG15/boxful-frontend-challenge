import React, { useEffect } from 'react'
import { Button, Typography, Row, Col, Input, InputNumber, Form, Space, Flex } from 'antd';
import { DeleteFilled, PlusOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { OrdenItem } from './types';
import { nextButtonStyle, backButtonStyle } from './styles';

type Props = {
  initialValues: OrdenItem[]
  onBack: (values: any) => void
  onSubmit: (values: any) => void
}

function OrderDetailForm({ onBack, onSubmit, initialValues }: Props) {
  const [form] = Form.useForm();
  console.log('initialValues', initialValues)
  return (
    <>
      <Form
        name="OrderDetailForm"
        layout='vertical'
        form={form}
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 22 }}
        style={{ maxWidth: 800, background: '#fff', padding: 24, borderRadius: 8 }}
        onFinish={onSubmit}
        autoComplete="off"
        size='large'
        requiredMark={false}
        initialValues={{ items: initialValues }}
      >
        <Typography.Title level={5}>Agrega tus bultos</Typography.Title>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} align={'middle'}>
                  <Col span={3}>
                    <Form.Item
                      {...restField}
                      name={[name, 'peso']}
                      label="Peso"
                      rules={[{ required: true, message: 'Peso es requerido' }]}
                    >
                      <InputNumber placeholder="(lb)" />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item
                      {...restField}
                      name={[name, 'contenido']}
                      label="Contenido"
                      rules={[{ required: true, message: 'Contenido es requerido' }]}
                    >
                      <Input placeholder="Descripcion" />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Space direction='horizontal'>
                      <Form.Item
                        {...restField}
                        name={[name, 'largo']}
                        label="Largo"
                        rules={[{ required: true, message: 'Largo es requerido' }]}
                      >
                        <InputNumber placeholder="(cm)" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'ancho']}
                        label="Ancho"
                        rules={[{ required: true, message: 'Ancho es requerido' }]}
                      >
                        <InputNumber placeholder="(cm)" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'alto']}
                        label="Alto"
                        rules={[{ required: true, message: 'Alto es requerido' }]}
                      >
                        <InputNumber placeholder="(cm)" />
                      </Form.Item>
                    </Space>
                  </Col>
                  <Col span={1}>
                    <Flex style={{ height: '88px', paddingTop: 20 }}>
                      <DeleteFilled onClick={() => remove(name)} style={{ fontSize: '24px', color: '#F85454' }} />
                    </Flex>
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Agregar
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Row>
          <Col span={12}>
            <Button type="primary" size='large' style={backButtonStyle} onClick={() => onBack(form.getFieldsValue())}><ArrowLeftOutlined /> Regresar</Button>
          </Col>
          <Col span={12}>
            <Button type="primary" size='large' style={nextButtonStyle} htmlType='submit'>Enviar <ArrowRightOutlined /></Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default OrderDetailForm