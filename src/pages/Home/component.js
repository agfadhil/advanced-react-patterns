import React from "react";
import { Link } from "react-router-dom";
import { Flex, Divider, Row, Button } from "antd";

export default function Home() {
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }} vertical>
      <Divider>
        <h2>HOME</h2>
      </Divider>
      <Row>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/render-props">
            <Button
              style={{
                background: "linear-gradient(45deg, #f3ec78, #af4261)",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <strong>Render Props</strong>
            </Button>
          </Link>
          <Link to="/hoc">
            <Button
              style={{
                background: "linear-gradient(45deg, #4facfe, #00f2fe)",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <strong>Higher Order Component (HOC)</strong>
            </Button>
          </Link>
          <Link to="/compound-component">
            <Button
              style={{
                background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <strong>Compound Component</strong>
            </Button>
          </Link>
        </div>
      </Row>
    </Flex>
  );
}
