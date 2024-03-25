import { Tooltip, Box, IconButton, HStack, Pressable, Image, Center, AspectRatio, ZStack} from "native-base";
import '../App.css';
import React, { useState } from "react";
import Progress from "../component/Progress";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


function Footer(props) {
    const [show, setShow] = useState(false);

    function handleClick() {
        props.sendShow(!show);
      }
    
    return (
        <Box
          className="footer"
          height={"20px"}
          paddingX={2}
          position={"fixed"}
          bottom={6}
        >
          
          <HStack>
            <div className="third-step"><Tooltip
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
                    handleClick();
                }}
              />
            </Tooltip></div>
            <div className="fourth-step"><Tooltip
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
            </Tooltip></div>
            {props.rate ? <Progress rate={props.rate}/> : null }
          </HStack>
        </Box>
    );
}

export default Footer;