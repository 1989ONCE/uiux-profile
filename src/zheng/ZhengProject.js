import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  ZStack,
  Image,
  Text,
} from "native-base";
import "..//App.css";
import { GoArrowUpLeft } from "react-icons/go";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import ProjectComponent3 from "./projectComponent3";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiArrowCursor } from "react-icons/gi";
import Footer from "../component/footer";

const ZhengProject = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
      setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"zheng"} page={"project"} />
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
          鄭彩纓
        </Text>

        <Box
          paddingLeft={"13rem"}
          paddingTop={"1rem"}
          alignItems={"flex-start"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <HStack>
            <Text
              fontSize={30}
              fontFamily={"cwTeXKai"}
              fontWeight={600}
              color={"#8E9D7D"}
            >
              影音行銷作品{" "}
            </Text>
            <GiArrowCursor
              color={"#8E9D7D"}
              size={28}
              style={{ paddingTop: "8px" }}
            />
          </HStack>
        </Box>

        <HStack
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box paddingLeft={"2rem"}>
            <Link to={`/zheng/job`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>

          <ProjectComponent3 />
          <Box paddingRight={"2rem"}>
            <Link to={`/zheng/interest`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'93.38%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default ZhengProject;
