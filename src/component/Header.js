import { Box, HStack, Text, Menu, IconButton } from "native-base";
import "../App.css";
import { PiUserSwitchDuotone } from "react-icons/pi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [shouldOverlapWithTrigger] = useState(false);
  return (
    <Box
      className="header"
      paddingX={2}
      justifyContent={"end"}
      flexDirection={"row"}
    >
      <HStack space={5} top={5}>
        <Link
          to={`/${props.link}/about`}
          style={{
            textDecoration: props.page === "about" ? "underline" : "none",
            textDecorationColor:
              props.page === "about" ? "black" : "transparent",
            color: props.page === "about" ? "black" : "#3F3134",
          }}
        >
          <Text
            color={props.page === "about" ? "black" : "#bb671b"}
            fontWeight={props.page === "about" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            About
          </Text>
        </Link>
        <Text color={"#bb671b"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/highlight`}
          style={{
            textDecoration: props.page === "highlight" ? "underline" : "none",
            textDecorationColor:
              props.page === "highlight" ? "black" : "transparent",
          }}
        >
          <Text
            color={props.page === "highlight" ? "black" : "#bb671b"}
            fontWeight={props.page === "highlight" ? 600 : 500}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Highlights
          </Text>
        </Link>
        <Text color={"#bb671b"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/job`}
          style={{
            textDecoration: props.page === "job" ? "underline" : "none",
            textDecorationColor: props.page === "job" ? "black" : "transparent",
          }}
        >
          <Text
            color={props.page === "job" ? "black" : "#bb671b"}
            fontWeight={props.page === "job" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Job Experience
          </Text>
        </Link>
        <Text color={"#bb671b"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/project`}
          style={{
            textDecoration: props.page === "project" ? "underline" : "none",
            textDecorationColor:
              props.page === "project" ? "black" : "transparent",
          }}
        >
          <Text
            color={props.page === "project" ? "black" : "#bb671b"}
            fontWeight={props.page === "project" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Project
          </Text>
        </Link>
        <Text color={"#bb671b"} fontSize={{ sm: "0.8rem", md: "1.3rem" }}>
          |
        </Text>
        <Link
          to={`/${props.link}/interest`}
          style={{
            textDecoration: props.page === "interest" ? "underline" : "none",
            textDecorationColor:
              props.page === "interest" ? "black" : "transparent",
          }}
        >
          <Text
            color={props.page === "interest" ? "black" : "#bb671b"}
            fontWeight={props.page === "interest" ? 600 : 300}
            fontSize={{ sm: "1rem", md: "1.5rem" }}
            fontFamily={"CormorantGaramond"}
          >
            Interests
          </Text>
        </Link>
      </HStack>

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
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Menu.Item
            _text={{
              fontSize: "18px",
              fontFamily: "cwTeXKai",
              color: "#3F3134",
            }}
          >
            首頁
          </Menu.Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/chen/about"}>
          <Menu.Item
            _text={{
              fontSize: "18px",
              fontFamily: "cwTeXKai",
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
              fontFamily: "cwTeXKai",
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
              fontFamily: "cwTeXKai",
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

export default Header;
