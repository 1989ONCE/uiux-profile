import { Box, HStack, Text, Menu, IconButton, Pressable } from "native-base";
import "../App.css";
import { PiUserSwitchDuotone } from "react-icons/pi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowBarRight, BsArrowBarLeft} from "react-icons/bs";

function Header(props) {
  const [shouldOverlapWithTrigger] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  return (
    <Box
      className="header"
      paddingX={2}
      justifyContent={"end"}
      flexDirection={"row"}
    >
      <Box top={4} backgroundColor={'#94C6E1'} shadow={'3'} position={"absolute"} left={"1rem"} >
        <Link margin={10} to={"/"} style={{ textDecoration: "none" }} >
          <Text fontWeight={500}
            color={'#133363'}
            margin={6}
            fontSize={{ sm: "1rem", md: "1.5rem" }}>
            NCU UIUX STUDIO
          </Text>
        </Link> 
      </Box>
      {showHeader && (
      <HStack space={5} top={5}>
        <Link
          to={`/${props.link}/about`}
          style={{
            textDecoration: props.page === "about" ? "underline" : "none",
            textDecorationColor:
              props.page === "about" ? "white" : "transparent",
            color: props.page === "about" ? "#94C6E1" : "#94C6E1",
          }}
        >
          <Text
            color={props.page === "about" ? "white" : "#94C6E1"}
            fontWeight={props.page === "about" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            About
          </Text>
        </Link>
        <Text color={"#94C6E1"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/highlight`}
          style={{
            textDecoration: props.page === "highlight" ? "underline" : "none",
            textDecorationColor:
              props.page === "highlight" ? "white" : "transparent",
          }}
        >
          <Text
            color={props.page === "highlight" ? "white" : "#94C6E1"}
            fontWeight={props.page === "highlight" ? 600 : 500}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Highlights
          </Text>
        </Link>
        <Text color={"#94C6E1"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/job`}
          style={{
            textDecoration: props.page === "job" ? "underline" : "none",
            textDecorationColor: props.page === "job" ? "white" : "transparent",
          }}
        >
          <Text
            color={props.page === "job" ? "white" : "#94C6E1"}
            fontWeight={props.page === "job" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Job Experience
          </Text>
        </Link>
        <Text color={"#94C6E1"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/project`}
          style={{
            textDecoration: props.page === "project" ? "underline" : "none",
            textDecorationColor:
              props.page === "project" ? "white" : "transparent",
          }}
        >
          <Text
            color={props.page === "project" ? "white" : "#94C6E1"}
            fontWeight={props.page === "project" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Project
          </Text>
        </Link>
        <Text color={"#94C6E1"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/interest`}
          style={{
            textDecoration: props.page === "interest" ? "underline" : "none",
            textDecorationColor:
              props.page === "interest" ? "white" : "transparent",
          }}
        >
          <Text
            color={props.page === "interest" ? "white" : "#94C6E1"}
            fontWeight={props.page === "interest" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Interests
          </Text>
        </Link>
      </HStack>
      )}
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
                color: "#94C6E1",
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
              color: "#133363",
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
              color: "#133363",
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
              color: "#133363",
            }}
          >
            鄭彩纓
          </Menu.Item>
        </Link>
      </Menu>
      <Pressable top={5}>
        {showHeader ? <BsArrowBarRight size={30} color={'#94C6E1'} onClick={() => setShowHeader(false)} /> : <BsArrowBarLeft size={30} color={'#94C6E1'} onClick={() => setShowHeader(true)} />}
      </Pressable>
    </Box>
  );
}

export default Header;
