import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Flex,
  Divider,
  Row,
  Col,
  QRCode,
  Space,
  Button,
} from "antd";

const { Meta } = Card;
const GUTTER = 16;
const SPAN_ITEM = 8;

const dataRandomProfiles = Array.from({ length: 10 }, (_, i) => {
  const avatar = faker.image.avatarLegacy();
  const bgUrl = faker.image.urlPicsumPhotos();
  const desc = `${faker.finance.amount({ min: 80 })}`;
  const emoji = faker.internet.emoji({ types: ["flag"] });
  const name = `${faker.person.firstName()} ${faker.person.lastName()}, ${emoji}`;

  return { avatar, bgUrl, desc, emoji, name };
});

const description = (desc) => (
  <Flex align="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
      style={{ width: 18, height: 18, marginRight: "5px" }}
      alt="background card"
    />
    {desc}
  </Flex>
);

function ProfileCardItem({ item }) {
  return (
    <Col className="gutter-row" span={SPAN_ITEM}>
      <Card
        hoverable
        cover={<img className="img-bg" alt="background" src={item.bgUrl} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.name}
          description={description(item.desc)}
        />
      </Card>
    </Col>
  );
}

function ProfileQRCodeItem({ item }) {
  return (
    <Col className="gutter-row col-center" span={SPAN_ITEM}>
      <Space align="center">
        <Card className="card-center">
          <QRCode value={item.bgUrl} icon={item.avatar} />
          <strong>{item.name}</strong>
        </Card>
      </Space>
    </Col>
  );
}

function List({ title, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const arrow = isOpen ? "⤵" : "⤴";
  return (
    <Col className="gutter-row" span={12}>
      <Divider>
        <h2 onClick={() => setIsOpen(!isOpen)}>
          {title}&nbsp; {arrow}
        </h2>
      </Divider>
      {isOpen && (
        <>
          <Row gutter={[GUTTER, GUTTER]} wrap>
            {render}
          </Row>
          <Flex justify="center">
            <Button
              className="btn-action"
              icon={<PoweroffOutlined />}
              onClick={() => setIsOpen(!isOpen)}
              shape="round"
              type="primary"
            >
              Show Less
            </Button>
          </Flex>
        </>
      )}
    </Col>
  );
}

export default function RenderProps() {
  return (
    <>
      <Divider orientation="center" className="main-title">
        <Link to="/">
          <h2>Render Props</h2>
        </Link>
      </Divider>
      <Row gutter={GUTTER} className="main-content">
        <List
          title="Profile Card"
          render={
            dataRandomProfiles &&
            dataRandomProfiles.map((i, idx) => (
              <ProfileCardItem key={idx} item={i} />
            ))
          }
        />
        <List
          title="Profile QRCode"
          render={
            dataRandomProfiles &&
            dataRandomProfiles.map((i, idx) => (
              <ProfileQRCodeItem key={idx} item={i} />
            ))
          }
        />
      </Row>
    </>
  );
}
