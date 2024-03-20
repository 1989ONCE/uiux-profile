import {
  NativeBaseProvider,
  Box,
  ZStack,
  VStack,
  HStack,
  Image,
  IconButton,
  Tooltip,
  Center,
  AspectRatio,
  Text,
  Button,
} from "native-base";
import "..//App.css";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg2 from "./bg2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import "../App.css";

function NoMatch(props) {
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        <Image
          w={"100%"}
          height={"100%"}
          source={bg2}
          alt="bg"
          position={"fixed"}
          zIndex={-1}
        ></Image>
        <Center w="full" marginTop="56">
          <HStack
            w={"full"}
            space={10}
            paddingLeft={"2rem"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyItems={"center"}
            justifyContent={"center"}
          >
            <VStack alignItems={"center"}>
              <Text
                color={"#8E9D7D"}
                paddingTop={"2rem"}
                fontFamily={"cwTeXKai"}
                fontWeight={800}
                fontSize={"2rem"}
              >
                您似乎迷路了，讓我們帶您回到主頁
              </Text>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button size="lg" marginTop={"2rem"}>
                  回到主頁
                </Button>
              </Link>
            </VStack>
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export default NoMatch;
