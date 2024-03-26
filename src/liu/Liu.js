import "../App.css";
import React from "react";
import AvatarComponent2 from "../component/avatarComponent2";
import data from "../Team/TeamData";

const Liu = () => {
  const member = data.member[1];
  return (
    <AvatarComponent2
      img={member.img}
      name={member.name}
      page={"about"}
      memberData={member.about}
    />
  );
};

export default Liu;
