import React from "react";
import { faker } from "@faker-js/faker";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Divider, Row, Col } from "antd";

const { Meta } = Card;

const dataRandomProfiles = Array.from({ length: 10 }, (_, i) => ({
  avatar: faker.image.avatar(),
  background: faker.image.urlPicsumPhotos(),
  desc: `${faker.finance.amount({ min: 80 })}`,
  name: `${faker.person.firstName()} ${faker.person.lastName()} | ${faker.internet.emoji()}`,
}));

const description = (desc) => (
  <Flex justify="center" align="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
      style={{ width: 18, height: 18, marginRight: "5px" }}
      alt="background card"
    />
    {desc}
  </Flex>
);

export default function RenderProps() {
  return (
    <>
      <Divider orientation="center">
        <h2>Render Props</h2>
      </Divider>
      <Row gutter={[16, 16]} wrap>
        {dataRandomProfiles &&
          dataRandomProfiles.map((i, idx) => (
            <Col key={idx} className="gutter-row" span={6}>
              <Card
                cover={<img alt="background" src={i.background} />}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={i.avatar} />}
                  title={i.name}
                  description={description(i.desc)}
                />
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
