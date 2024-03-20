import {
  NativeBaseProvider,
  Box,
  ZStack,
  VStack,
  HStack,
  Image,
  IconButton,
  Tooltip,
  Text,
} from "native-base";
import "..//App.css";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import InterestComponent from "../component/interestComponent";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";

const ChenInterest = () => {
  const [show, setShow] = useState(false);
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"chen"} page={"interest"} />
        <ZStack w={"90%"} alignItems={"flex-end"}>
          <VStack>
            {show ? <GoArrowUpLeft size={"2rem"} /> : null}
            {show ? (
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

          <HStack w={"80%"}>
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
        <Box
          className="footer"
          height={"20px"}
          paddingX={2}
          position={"fixed"}
          bottom={6}
        >
          <HStack>
            <Tooltip
              label="使用教學"
              bg="gray.600:alpha.30"
              color="gray"
              placement="top"
            >
              <IconButton
                borderRadius="10rem"
                icon={<BsInfo size={"27px"} />}
                _icon={{
                  color: "#8E9D7D",
                  size: "md",
                }}
                _hover={{
                  bg: "cyan.600:alpha.30",
                }}
                _pressed={{
                  bg: "cyan.600:alpha.20",
                }}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </Tooltip>
            <Tooltip
              label="聯絡我們"
              bg="gray.600:alpha.30"
              color="gray"
              placement="top"
            >
              <Link to="/contact">
                <IconButton
                  borderRadius="10rem"
                  icon={<RiCustomerService2Fill size={"27px"} />}
                  _icon={{
                    color: "#8E9D7D",
                    size: "md",
                    borderColor: "#8E9D7D",
                    borderWidth: "3px",
                    borderStyle: "solid",
                  }}
                  _hover={{
                    bg: "cyan.600:alpha.30",
                  }}
                  _pressed={{
                    bg: "cyan.600:alpha.20",
                  }}
                />
              </Link>
            </Tooltip>
          </HStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default ChenInterest;
