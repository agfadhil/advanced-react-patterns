import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { Button, Col, Image, Collapse, QRCode, Space, Typography } from "antd";

const ProfileContext = createContext();

function ProfileLabel({ item }) {
  return (
    <span>
      <strong>{item.name}</strong>, {item.job}
    </span>
  );
}

function ProfileQRCode({ item }) {
  const { Text } = Typography;
  return (
    <Col className="gutter-row col-center" flex="auto">
      <Space align="center">
        <QRCode value={item.imageUrl} icon={item.avatar} />
        <Text keyboard>"{item.phrase}"</Text>
      </Space>
    </Col>
  );
}

function ProfileGenerator({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [activeKey, setActiveKey] = useState("");
  const generateProfile = () => {
    const data = {
      key: faker.string.nanoid(8),
      avatar: faker.image.avatarLegacy(),
      imageUrl: faker.image.urlPicsumPhotos(),
      emoji: faker.internet.emoji({ types: ["flag"] }),
      job: faker.person.jobTitle(),
      name: faker.person.fullName(),
      phrase: faker.hacker.phrase(),
    };
    const defaultKey = profiles.length ? profiles[0]["key"] : data.key;

    const label = <ProfileLabel item={data} />;
    const children = <ProfileQRCode item={data} />;

    setProfiles([
      ...profiles,
      {
        key: data.key,
        label,
        children,
        extra: data.emoji,
      },
    ]);
    setActiveKey(defaultKey);
  };

  const removeProfile = () => {
    if (profiles.length) {
      const updatedProfile = profiles.slice(1);
      setProfiles(updatedProfile);
      setActiveKey(updatedProfile[0]["key"]);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        activeKey,
        setActiveKey,
        profiles,
        generateProfile,
        removeProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function Logo({ image, width }) {
  return <Image width={width} src={image} />;
}

function BtnGenerate({ children, icon, text }) {
  const { generateProfile } = useContext(ProfileContext);
  return (
    <Col flex={1}>
      <Button
        block
        className="btn-action"
        icon={icon}
        onClick={generateProfile}
        type="primary"
      >
        {text} {children}
      </Button>
    </Col>
  );
}

function BtnRemove({ children, icon, text }) {
  const { removeProfile } = useContext(ProfileContext);
  return (
    <Button block className="btn-action" icon={icon} onClick={removeProfile}>
      {text} {children}
    </Button>
  );
}

function Display() {
  const { activeKey, setActiveKey, profiles } = useContext(ProfileContext);

  const onChange = (key) => setActiveKey(key);

  return (
    <Collapse
      bordered={profiles.length}
      activeKey={activeKey}
      items={profiles}
      onChange={onChange}
    />
  );
}

ProfileGenerator.Display = Display;
ProfileGenerator.Logo = Logo;
ProfileGenerator.BtnGenerate = BtnGenerate;
ProfileGenerator.BtnRemove = BtnRemove;

export default ProfileGenerator;
