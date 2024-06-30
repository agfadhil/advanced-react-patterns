import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { Divider, Row, Col } from "antd";
import { ProfileCardList } from "./lib-component";
import { withToggles } from "./utils";

const GUTTER = 16;

const dataRandomProfiles = Array.from({ length: 10 }, (_, i) => {
  const avatar = faker.image.avatarLegacy();
  const bgUrl = faker.image.urlPicsumPhotos();
  const desc = `${faker.finance.amount({ min: 80 })}`;
  const emoji = faker.internet.emoji({ types: ["flag"] });
  const name = `${faker.person.firstName()} ${faker.person.lastName()}, ${emoji}`;

  return { avatar, bgUrl, desc, emoji, name };
});

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
