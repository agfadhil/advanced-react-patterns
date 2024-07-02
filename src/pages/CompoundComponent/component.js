import { Link } from "react-router-dom";
import ProfileGenerator from "./ProfileGenerator";
import { Flex, Card, Typography, Divider } from "antd";
import whiteWolf from "../../white-wolf.svg";

function CompoundComponent() {
  return (
    <Flex align="center" vertical className="main-full">
      <Card bordered={false} className="main-card">
        <Divider>
          <Link to="/">
            <Typography.Title level={3} className="main-title">
              Compound Component
            </Typography.Title>
          </Link>
        </Divider>
        <Flex align="center" vertical>
          <ProfileGenerator>
            <ProfileGenerator.Logo image={whiteWolf} width={300} />
            <Flex gap="middle">
              <ProfileGenerator.BtnRemove icon="⦿" text="remove" />
              <ProfileGenerator.BtnGenerate icon="⦿" text="generate" />
            </Flex>
            <ProfileGenerator.Display />
          </ProfileGenerator>
        </Flex>
      </Card>
    </Flex>
  );
}

export default CompoundComponent;
