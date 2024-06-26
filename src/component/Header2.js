import { Box, Menu, IconButton, Text } from "native-base";
import "../App.css";
import { PiUserSwitchDuotone } from "react-icons/pi";
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
      <Box top={4} backgroundColor={'#EFAC91'} shadow={'3'} position={"absolute"} left={"1rem"} >
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
            <IconButton
              {...triggerProps}
              top={{ sm: 2, md: 3 }}
              borderRadius="10rem"
              icon={<PiUserSwitchDuotone size={"30px"} />}
              _icon={{
                color: "#3F3134",
                size: "md",
              }}
              _hover={{
                bg: "cyan.600:alpha.30",
              }}
              _pressed={{
                bg: "cyan.600:alpha.20",
              }}
            ></IconButton>
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
