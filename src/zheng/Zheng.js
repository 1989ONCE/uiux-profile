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
import zhengImg from "./img/zheng.png";
import zhenginfo from "./img/zhenginfo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg2 from "../Team/bg2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import Footer from "../component/footer";

const Zheng = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
      setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"zheng"} page={"about"} />
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
            <Link to={`/liu/interest`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
          <AvatarComponent2 img={zhengImg} name={"鄭彩纓"} info={zhenginfo} />
          <Box paddingLeft={"2rem"}>
            <Link to={`/zheng/job`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'73.37%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default Zheng;
