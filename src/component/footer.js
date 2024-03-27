import { Tooltip, Box, IconButton, HStack } from "native-base";
import "../App.css";
import React, { useState, useMemo, useEffect } from "react";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";
import ProgressToast from "./ProgressToast";

const personList = ["chen", "liu", "zheng"];

function Footer(props) {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const rate = useMemo(() => {
    const curPerson = location.pathname.split("/")[1];
    const curPage = location.pathname.split("/")[2];
    if (!personList.includes(curPerson)) {
      return "";
    }
    let pages = [];
    for (const person of personList) {
      const pagesOfPerson = routes[0].children.find(
        (e) => e.path === person
      ).children;
      if (pagesOfPerson !== undefined) {
        pages.push(...pagesOfPerson.map((e) => `${person}/${e.path}`));
      }
    }
    const curPageIndex = pages.findIndex(
      (e) => e === `${curPerson}/${curPage}`
    );
    return curPageIndex === -1
      ? ""
      : `${(((curPageIndex + 1) / pages.length) * 100).toFixed(1)}%`;
  }, [location]);

  function handleClick() {
    props.sendShow(!show);
  }

  const [isShowingToast, setIsShowingToast] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  function showToast() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsShowingToast(true);
    setTimeoutId(
      setTimeout(() => {
        setIsShowingToast(false);
        console.log("timeout");
      }, 2000)
    );
  }

  useEffect(
    () => {
      if (rate === "") {
        return;
      }
      showToast(rate);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rate]
  );

  return (
    <>
      <Box
        className="footer"
        height={"20px"}
        paddingX={2}
        position={"fixed"}
        bottom={6}
      >
        <HStack>
          <div className="third-step">
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
                  handleClick();
                }}
              />
            </Tooltip>
          </div>
          <div className="fourth-step">
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
          </div>
        </HStack>
      </Box>
      <ProgressToast show={isShowingToast} text={rate} />
    </>
  );
}

export default Footer;
