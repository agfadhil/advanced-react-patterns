import { Avatar, Card, Flex, Row, Col } from "antd";

const { Meta } = Card;
const GUTTER = 16;
const SPAN_ITEM = 8;

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

export function ProfileCardList({ items }) {
  return (
    <Row gutter={[GUTTER, GUTTER]} wrap>
      {items.map((i, idx) => (
        <ProfileCardItem key={idx} item={i} />
      ))}
    </Row>
  );
}
