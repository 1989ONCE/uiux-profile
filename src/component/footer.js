import { Box, HStack, Text } from "native-base";
import "../App.css";
import React, { useState, useMemo, useEffect } from "react";
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
        bottom={2}
      >
        <HStack>
          <div className="third-step">
              <Link _pressed={{bg: "black"}}>
              <Text 
                onPress={() => {
                  setShow(!show);
                  handleClick();
                }}
              >使用教學</Text></Link>
          </div>
          <div className="fourth-step">
              <Link _pressed={{bg: "black"}}  to="/contact">
                <Text paddingX={3}>聯絡我們</Text>
              </Link>
          </div>
        </HStack>
      </Box>
      <ProgressToast show={isShowingToast} text={rate} />
    </>
  );
}

export default Footer;
