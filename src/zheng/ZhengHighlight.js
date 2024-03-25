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
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import Header from "../component/Header";
  import AvatarComponent2 from "../component/avatarComponent2";
  import bg3 from "../Team/bg3.png";
  import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
  import { GoArrowUpLeft } from "react-icons/go";
  import Footer from "../component/footer";
  import data from "../Team/TeamData";
  
  const ZhengHighlight = () => {
    const [parentShow, setParentShow] = useState();
    function handleDataFromChild(show) {
        setParentShow(show);
    }
    const member = data.member[2];
    return (
      <NativeBaseProvider>
        <Box w={"full"} h={"full"}>
          {/* Header */}
          <Header link={"zheng"} page={"highlight"} />
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
            <AvatarComponent2 img={member.img} name={member.name} page={'highlight'} memberData={member.highlight} />
            <Box paddingRight={"2rem"}>
              <Link to={`/zheng/job`} style={{ textDecoration: "none" }}>
                <IoIosArrowForward size={"40px"} color="#8E9D7D" />
              </Link>
            </Box>
          </HStack>
  
          {/* Footer */}
          <Footer sendShow={handleDataFromChild} rate={'80.04%'}/>
        </Box>
      </NativeBaseProvider>
    );
  };
  
  export default ZhengHighlight;
  