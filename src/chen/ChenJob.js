import "../App.css";
import React from "react";
import AvatarComponent2 from "../component/avatarComponent2";
import data from "../Team/TeamData";

const ChenJob = () => {
  const member = data.member[0];
  return (
    <AvatarComponent2
      img={member.img}
      name={member.name}
      page={"job"}
      memberData={member.job}
    />
  );
};

export default ChenJob;
