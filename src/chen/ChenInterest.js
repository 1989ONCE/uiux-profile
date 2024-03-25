import {
  NativeBaseProvider,
  Box,
  ZStack,
  VStack,
  HStack,
  Image,
  Text,
} from "native-base";
import "..//App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import InterestComponent from "../component/interestComponent";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";
import Footer from "../component/footer";

const ChenInterest = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
    setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"chen"} page={"interest"} />
        <ZStack w={"90%"} alignItems={"flex-end"}>
          <VStack>
            {parentShow ? <GoArrowUpLeft size={"2rem"} /> : null}
            {parentShow ? (
              <Text fontFamily={"cwTeXKai"}>點擊任一選項，前往該頁面</Text>
            ) : null}
          </VStack>
        </ZStack>
        <Image
          w={"100%"}
          height={"100%"}
          source={bg4}
          alt="bg"
          position={"fixed"}
          zIndex={-1}
        ></Image>
        <Text
          position={"fixed"}
          alignSelf={"end"}
          bottom={10}
          right={5}
          fontWeight={600}
          fontFamily={"cwTeXKai"}
          fontSize={24}
        >
          陳佳妤
        </Text>

        <HStack
          paddingTop={"5rem"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box paddingLeft={"2rem"}>
            <Link to={`/chen/project`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>

          <HStack w={"80%"} h={'455px'}>
            <InterestComponent img={i1} title={"歌唱"} />
            <InterestComponent img={i2} title={"電影"} />
            <InterestComponent img={i3} title={"閱讀"} />
          </HStack>

          <Box paddingRight={"2rem"}>
            <Link to={`/liu`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'33.35%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default ChenInterest;
