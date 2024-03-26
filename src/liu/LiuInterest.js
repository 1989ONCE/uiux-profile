import { HStack } from "native-base";
import "../App.css";
import React from "react";
import InterestComponent from "../component/interestComponent";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";

const LiuInterest = () => {
  return (
    <HStack w={"80%"} justifyContent={"center"} h={"455px"}>
      <InterestComponent img={i1} title={"音樂"} />
      <InterestComponent img={i2} title={"美食"} />
    </HStack>
  );
};

export default LiuInterest;
