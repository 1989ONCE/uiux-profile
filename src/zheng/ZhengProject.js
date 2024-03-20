import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  ZStack,
  Image,
  IconButton,
  Tooltip,
  Text,
} from "native-base";
import "..//App.css";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoArrowUpLeft } from "react-icons/go";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import ProjectComponent3 from "./projectComponent3";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiArrowCursor } from "react-icons/gi";

const ZhengProject = () => {
  const [show, setShow] = useState(false);
  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* Header */}
        <Header link={"zheng"} page={"project"} />
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

export default ZhengProject;