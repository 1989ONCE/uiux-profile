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
import ProjectComponent2 from "./projectComponent2";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../component/footer";

const LiuProject = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
      setParentShow(show);
  }
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"liu"} page={"project"} />
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
          劉泓毅
        </Text>

        <HStack
          paddingTop={"5rem"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box paddingLeft={"2rem"}>
            <Link to={`/liu/job`} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>

          <ProjectComponent2 />
          <Box paddingRight={"2rem"}>
            <Link to={`/liu/interest`} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#8E9D7D" />
            </Link>
          </Box>
        </HStack>

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={'60.03%'}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default LiuProject;
