import {
  NativeBaseProvider,
  Box,
  VStack,
  ZStack,
  HStack,
  Image,
  IconButton,
  Tooltip,
  Text,
} from "native-base";
import "..//App.css";
import chenImg from "./img/chen.jpg";
import cheninfo from "./img/cheninfo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg2 from "../Team/bg2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import Footer from "../component/footer";

const Chen = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
    setParentShow(show);
  }

  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"chen"} page={"about"} />
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
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
          <AvatarComponent2 img={chenImg} name={"陳佳妤"} info={cheninfo} />
          <Box paddingRight={"2rem"}>
            <Link to={`/chen/highlight`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'6.67%'}/>
        
      </Box>
    </NativeBaseProvider>
  );
};

export default Chen;
