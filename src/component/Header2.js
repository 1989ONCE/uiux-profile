import { Box, Menu, Text } from "native-base";
import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header2(props) {
  const [shouldOverlapWithTrigger] = useState(false);
  return (

    <Box
      className="header2"
      paddingX={2}
      justifyContent={"end"}
      flexDirection={"row"}
    >
      <Box borderRadius={30} top={4} backgroundColor={'#EFAC91'} shadow={'3'} position={"absolute"} left={"1rem"} >
        <Link margin={10} to={"/"} style={{ textDecoration: "none" }} >
          <Text fontWeight={500}
            color={'#F8EDE6'}
            margin={6}
            fontSize={{ sm: "1rem", md: "1.5rem" }}>
            NCU UIUX STUDIO
          </Text>
        </Link> 
      </Box>
      <Menu
        w="160"
        shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
        placement={"top right"}
        trigger={(triggerProps) => {
          return (
            <Text {...triggerProps} borderWidth={2} borderColor={'#bb671b'} color={'#3F3134'} fontSize={"18px"} marginTop={4} paddingX={2} borderRadius="10rem">成員列表▼</Text>
          );
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/chen/about"}>
          <Menu.Item
            _text={{
              fontSize: "18px",
              fontFamily: "",
              color: "#3F3134",
            }}
          >
            陳佳妤
          </Menu.Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/liu/about"}>
          <Menu.Item
            _text={{
              fontSize: "18px",
              fontFamily: "",
              color: "#3F3134",
            }}
          >
            劉泓毅
          </Menu.Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/zheng/about"}>
          <Menu.Item
            _text={{
              fontSize: "18px",
              fontFamily: "",
              color: "#3F3134",
            }}
          >
            鄭彩纓
          </Menu.Item>
        </Link>
      </Menu>
    </Box>
  );
}

export default Header2;
