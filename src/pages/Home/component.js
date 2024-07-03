import React from "react";
import { Link } from "react-router-dom";
import { Flex, Divider, Row, Button, ConfigProvider, Space } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

const colors1 = ["#6253E1", "#04BEFE"];
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const colors3 = ["#40e495", "#30dd8a", "#2bb673"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function ButtonsAntdConfigured() {
  return (
    <Space>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Link to="render-props">
          <Button type="primary" size="large">
            Render Props
          </Button>
        </Link>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(90deg,  ${colors2.join(", ")})`,
              colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                colors2
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                colors2
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Link to="/hoc">
          <Button type="primary" size="large">
            Higher Order Component (HOC)
          </Button>
        </Link>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(116deg,  ${colors3.join(", ")})`,
              colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                colors3
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                colors3
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Link to="/compound-component">
          <Button type="primary" size="large">
            Compound Component
          </Button>
        </Link>
      </ConfigProvider>
    </Space>
  );
}

export default function Home() {
  return (
    <Flex align="center" justify="center" vertical className="main-home">
      <Divider style={{ marginTop: 0 }}>
        <h2>Advanced React Patterns</h2>
      </Divider>
      <Row>
        <ButtonsAntdConfigured />
      </Row>
    </Flex>
  );
}
