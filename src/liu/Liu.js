import {
  NativeBaseProvider,
  Box,
  HStack,
  ZStack,
  VStack,
  Image,
  Text,
} from "native-base";
import "..//App.css";
import liuImg from "./img/liu.png";
import liuinfo from "./img/liuinfo.png";
import { GoArrowUpLeft } from "react-icons/go";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg2 from "../Team/bg2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../component/footer";

const Liu = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
    setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"liu"} page={"about"} />
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
          source={bg2}
          alt="bg"
          position={"fixed"}
          zIndex={-1}
        ></Image>

        <HStack
          paddingTop={"5rem"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box paddingLeft={"2rem"}>
            <Link to={`/chen/interest`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
          <AvatarComponent2 img={liuImg} name={"劉泓毅"} info={liuinfo} />
          <Box paddingLeft={"2rem"}>
            <Link to={`/liu/job`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'40.02%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default Liu;
