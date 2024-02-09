import { Button, Col, DatePicker, Form, Input, Row } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Orden } from "./types";
import React from "react";
import { nextButtonStyle } from "./styles";

type Props = {
  initialValues: Orden;
  onSubmit: (values: any) => void;
};

function OrderForm({ initialValues, onSubmit }: Props) {
  return (
    <>
      <Form
        name="OrderForm"
        layout="vertical"
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 22 }}
        style={{
          maxWidth: 800,
          background: "#fff",
          padding: 24,
          borderRadius: 8,
        }}
        onFinish={onSubmit}
        autoComplete="off"
        size="large"
        requiredMark={false}
        initialValues={initialValues}
      >
        <Row>
          <Col span={16}>
            <Form.Item<Orden>
              label="Direccion de recoleccion:"
              name="direccionRecoleccion"
              rules={[
                {
                  required: true,
                  message: "Direccion de recoleccion es requerida",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item<Orden>
              label="Fecha programada:"
              name="fecha"
              rules={[
                { required: true, message: "Fecha programada es requerida" },
              ]}
            >
              <DatePicker size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item<Orden>
              label="Nombres:"
              name="nombres"
              rules={[{ required: true, message: "Nombres son requeridos" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<Orden>
              label="Apellidos:"
              name="apellidos"
              rules={[{ required: true, message: "Apellidos son requeridos" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<Orden>
              label="Correo electronico:"
              name="correo"
              rules={[
                { required: true, message: "Correo electronico es requerido" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item<Orden>
              label="Telefono:"
              name="telefono"
              rules={[{ required: true, message: "Telefono es requerido" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item<Orden>
              label="Direccion de destino:"
              name="direccionDestinatario"
              rules={[
                {
                  required: true,
                  message: "Direccion de destino es requerida",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item<Orden>
              label="Departamento:"
              name="departamento"
              rules={[{ required: true, message: "Departamento es requerido" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<Orden>
              label="Municipio:"
              name="municipio"
              rules={[{ required: true, message: "Municipio es requerido" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<Orden>
              label="Punto de referencia:"
              name="puntoReferencia"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item<Orden> label="Indicaciones:" name="indicaciones">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button
          type="primary"
          size="large"
          style={nextButtonStyle}
          htmlType="submit"
        >
          Siguiente <ArrowRightOutlined />{" "}
        </Button>
      </Form>
    </>
  );
}

export default OrderForm;
