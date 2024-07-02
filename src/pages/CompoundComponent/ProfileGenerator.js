import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { Button, Col, Image, Collapse } from "antd";

const ProfileContext = createContext();

function ProfileGenerator({ children }) {
  const [profiles, setProfiles] = useState([]);
  const generateProfile = () => {
    const data = {
      key: faker.string.nanoid(8),
      avatar: faker.image.avatarLegacy(),
      bgurl: faker.image.urlPicsumPhotos(),
      emoji: faker.internet.emoji({ types: ["flag"] }),
      job: faker.person.jobTitle(),
      name: faker.person.fullName(),
      phrase: faker.hacker.phrase(),
    };
    setProfiles([
      ...profiles,
      {
        key: data.key,
        label: data.name,
        children: <p>{data.phrase}</p>,
      },
    ]);
  };
  const removeProfile = () => {
    if (profiles.length) {
      setProfiles(profiles.slice(1));
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, generateProfile, removeProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function Logo({ image, width }) {
  return <Image width={width} src={image} />;
}

function BtnGenerate({ icon, text }) {
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
        {text}
      </Button>
    </Col>
  );
}

function BtnRemove({ icon, text }) {
  const { removeProfile } = useContext(ProfileContext);
  return (
    // <Col span={12}>
    //   <Button icon={icon} block onClick={removeProfile}>
    //     {text}
    //   </Button>
    // </Col>
    <Button block className="btn-action" icon={icon} onClick={removeProfile}>
      {text}
    </Button>
  );
}

function Display() {
  const { profiles } = useContext(ProfileContext);
  const defaultActiveKey = profiles.length ? profiles[0]["key"] : [];

  console.log("profiles display", profiles);
  console.log("defaultActiveKey display", defaultActiveKey);

  return (
    <Collapse
      bordered={profiles.length}
      defaultActiveKey={defaultActiveKey}
      items={profiles}
    />
  );
}

ProfileGenerator.Display = Display;
ProfileGenerator.Logo = Logo;
ProfileGenerator.BtnGenerate = BtnGenerate;
ProfileGenerator.BtnRemove = BtnRemove;

export default ProfileGenerator;
