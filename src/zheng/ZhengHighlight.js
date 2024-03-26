import "../App.css";
import React from "react";
import AvatarComponent2 from "../component/avatarComponent2";
import data from "../Team/TeamData";

const ZhengHighlight = () => {
  const member = data.member[2];
  return (
    <AvatarComponent2
      img={member.img}
      name={member.name}
      page={"highlight"}
      memberData={member.highlight}
    />
  );
};

export default ZhengHighlight;
