import { Box, VStack, HStack, Image, Center, Text, Button } from "native-base";
import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import bg2 from "./bg2.png";

function NoMatch(props) {
  return (
    <Box w={"full"} h={"full"}>
      <Image
        w={"100%"}
        height={"100%"}
        source={{ uri: bg2 }}
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
              color={"#3F3134"}
              paddingTop={"2rem"}
              fontFamily={""}
              fontWeight={800}
              fontSize={"2rem"}
            >
              您似乎迷路了，讓我們帶您回到主頁
            </Text>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button bg={'#cc4c24'} size="lg" marginTop={"2rem"} _hover={{bg: '#b34724'}} _pressed={{bg: '#ac4220'}}>
                回到主頁
              </Button>
            </Link>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
}

export default NoMatch;
