import { HStack, Text } from "native-base";
import "../App.css";
import React from "react";
import InterestComponent from "../component/interestComponent";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";

const ChenInterest = () => {
  return (
    <>
      <Text
        position={"fixed"}
        alignSelf={"end"}
        bottom={10}
        right={5}
        fontWeight={600}
        fontFamily={""}
        fontSize={24}
      >
        陳佳妤
      </Text>
      <HStack w={"80%"} h={"455px"}>
        <InterestComponent img={i1} title={"歌唱"} context={'On Wednesdays we wear pink!'} link={'https://www.youtube.com/watch?v=WiIi7STG3e0'}/>
        <InterestComponent img={i2} title={"電影"} context={"Here's to the one who dreams"} link={'https://zh.wikipedia.org/zh-tw/%E6%A8%82%E4%BE%86%E8%B6%8A%E6%84%9B%E4%BD%A0'}/>
        <InterestComponent img={i3} title={"閱讀"} context={'波西傑克森的小說好好看 > < '} link={'https://zh.wikipedia.org/zh-tw/%E6%B3%A2%E8%A5%BF%E5%82%91%E5%85%8B%E6%A3%AE_(%E5%B0%8F%E8%AA%AA)'}/>
      </HStack>
    </>
  );
};

export default ChenInterest;
