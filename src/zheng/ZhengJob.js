import "../App.css";
import React from "react";
import AvatarComponent2 from "../component/avatarComponent2";
import data from "../Team/TeamData";

const ZhengJob = () => {
  const member = data.member[2];
  return (
    <AvatarComponent2
      img={member.img}
      name={member.name}
      page={"job"}
      memberData={member.job}
    />
  );
};

export default ZhengJob;
