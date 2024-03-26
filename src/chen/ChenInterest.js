import { HStack } from "native-base";
import "../App.css";
import React from "react";
import InterestComponent from "../component/interestComponent";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";

const ChenInterest = () => {
  return (
    <HStack w={"80%"} h={"455px"}>
      <InterestComponent img={i1} title={"歌唱"} />
      <InterestComponent img={i2} title={"電影"} />
      <InterestComponent img={i3} title={"閱讀"} />
    </HStack>
  );
};

export default ChenInterest;
