import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { Avatar, Card, Flex, Divider, Row, Col } from "antd";
import { withToggles } from "./utils";

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

function ProfileCardList({ items }) {
  return (
    <Row gutter={[GUTTER, GUTTER]} wrap>
      {items.map((i, idx) => (
        <ProfileCardItem key={idx} item={i} />
      ))}
    </Row>
  );
}

const ProfileCardWithToggles = withToggles(ProfileCardList);

export default function HOC() {
  return (
    <>
      <Divider orientation="center" className="main-title">
        <Link to="/">
          <h2>Higher Order Component (HOC)</h2>
        </Link>
      </Divider>
      <Row gutter={GUTTER} className="main-content">
        <Col flex="1">
          <ProfileCardList items={dataRandomProfiles} title="Profile Card" />
        </Col>
        <Col flex="1">
          <ProfileCardWithToggles
            items={dataRandomProfiles}
            title="Profile Card with Toggles"
          />
        </Col>
      </Row>
    </>
  );
}
