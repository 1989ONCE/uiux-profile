import { HStack, Text } from "native-base";
import "../App.css";
import React from "react";
import InterestComponent from "../component/interestComponent";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";

const ZhengInterest = () => {
  return (
    <>
      <Text
        position={"fixed"}
        alignSelf={"end"}
        bottom={10}
        right={5}
        fontWeight={600}
        fontFamily={"cwTeXKai"}
        fontSize={24}
      >
        鄭彩纓
      </Text>
      <HStack w={"80%"} h={"455px"} justifyContent={"center"}>
        <InterestComponent img={i1} title={"電影"} />
        <InterestComponent img={i2} title={"音樂"} />
        <InterestComponent img={i3} title={"旅遊"} />
      </HStack>
    </>
  );
};

export default ZhengInterest;
