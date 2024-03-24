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
import zhengImg from "./img/zheng.png";
import zhengJob from "./img/zhengjob.png";
import { GoArrowUpLeft } from "react-icons/go";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg3 from "../Team/bg3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../component/footer";

const ZhengJob = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
      setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"zheng"} page={"job"} />
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
          source={bg3}
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
            <Link to={`/zheng`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
          <AvatarComponent2 img={zhengImg} name={"鄭彩纓"} info={zhengJob} />
          <Box paddingRight={"2rem"}>
            <Link to={`/zheng/project`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'86.71%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default ZhengJob;
