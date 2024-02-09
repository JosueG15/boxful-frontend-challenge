"use client";

import { Col, Layout, Row, Typography } from "antd";

import { Orden } from "./types";
import OrderDetailForm from "./OrderDetailForm";
import OrderForm from "./OrderForm";
import React from "react";
import { globalConfig } from "../../config/config";
import { headerStyle } from "./styles";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function Page() {
  const [formStep, setFormStep] = React.useState(1);
  const [formData, setFormData] = React.useState({} as Orden);
  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);

  const handleBack = (values: Partial<Orden>) => {
    setFormData({ ...formData, ...values });
    prevStep();
  };
  const handleOrderSubmit = (values: Partial<Orden>) => {
    setFormData({ ...formData, ...values });
    nextStep();
  };
  const handleOrderDetailSubmit = async (values: Orden) => {
    try {
      const payload = { ...formData, ...values };

      const response = await fetch(`${globalConfig.apiUrl}/orden`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "force-cache",
      });

      if (!response.ok) {
        throw new Error(`Error de API con Status ${response.status}`);
      }

      alert("Orden creada exitosamente!");

      setFormData({} as Orden);
      setFormStep(1);
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <Title style={{ color: "#ff4300" }}>boxful</Title>
      </Header>
      <Content
        style={{ background: "#E5E8EE", height: "calc(100vh - 64px - 16px)" }}
      >
        <Row>
          <Col span={6} />
          <Col span={12}>
            <Title level={3}>Crea una orden</Title>
            <Text>
              Dale una ventaja competitiva a tu negocio con entregas el mismo
              día (Área Metropolitana) y el día siguiente a nivel nacional.
            </Text>
          </Col>
          <Col span={6} />
        </Row>
        <Row style={{ marginTop: 8 }}>
          <Col span={6} />
          <Col span={12}>
            {formStep === 1 && (
              <OrderForm
                onSubmit={handleOrderSubmit}
                initialValues={formData}
              />
            )}
            {formStep === 2 && (
              <OrderDetailForm
                onBack={handleBack}
                onSubmit={handleOrderDetailSubmit}
                initialValues={formData.items}
              />
            )}
          </Col>
          <Col span={6} />
        </Row>
      </Content>
    </Layout>
  );
}

export default Page;
