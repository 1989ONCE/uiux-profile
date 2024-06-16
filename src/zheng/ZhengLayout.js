import { Box, ZStack, VStack, HStack, Image, Text } from "native-base";
import "../App.css";
import React, { useState, useMemo, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header";
import bg2 from "../Team/bg2.png";
import bg3 from "../Team/bg3.png";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import Footer from "../component/footer";
import routes from "../routes";
import { GiArrowCursor } from "react-icons/gi";

const ZhengLayout = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
    setParentShow(show);
  }
  const location = useLocation();
  const person = useMemo(() => location.pathname.split("/")[1], [location]);
  const page = useMemo(() => location.pathname.split("/")[2], [location]);
  const personIndex = useMemo(
    () => routes[0].children.findIndex((route) => route.path === person),
    [person]
  );
  const pageIndex = useMemo(
    () =>
      routes[0].children[personIndex].children.findIndex(
        (route) => route.path === page
      ),
    [page, personIndex]
  );
  const prevPage = useMemo(
    () =>
      pageIndex === 0
        ? "/liu/interest"
        : routes[0].children[personIndex].children[pageIndex - 1].path,
    [pageIndex, personIndex]
  );
  const nextPage = useMemo(
    () =>
      pageIndex === routes[0].children[personIndex].children.length - 1
        ? "/zheng/interest"
        : routes[0].children[personIndex].children[pageIndex + 1].path,
    [pageIndex, personIndex]
  );
  const bg = useMemo(() => {
    switch (page) {
      case "about":
        return bg2;
      case "highlight":
      case "job":
        return bg3;
      case "project":
      case "interest":
        return bg4;
      default:
        return bg2;
    }
  }, [page]);
  const [showProjectHeading, setShowProjectHeading] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  useEffect(() => {
    document
      .querySelector("#slide-body")
      .addEventListener("animationend", (e) => {
        if (
          e.animationName !== "next-slide" &&
          e.animationName !== "prev-slide"
        ) {
          return;
        }
        setAnimationClass("");
      });
    window.addEventListener("slidechange", (e) => {
      if (e.detail.direction === "next") {
        setAnimationClass("next-slide");
      } else if (e.detail.direction === "prev") {
        setAnimationClass("prev-slide");
      }
      return () => {
        window.removeEventListener("slidechange");
        document
          .querySelector("#slide-body")
          .removeEventListener("animationend");
      };
    });
  });
  return (
    <Box w={"full"} h={"full"}>
      {/* Header */}
      <Header link={"zheng"} page={page} />
      <ZStack w={"90%"} alignItems={"flex-end"}>
        <VStack>
          {parentShow ? <GoArrowUpLeft size={"2rem"} /> : null}
          {parentShow ? (
            <Text fontFamily={""}>點擊任一選項，前往該頁面</Text>
          ) : null}
        </VStack>
      </ZStack>
      <Image
        w={"100%"}
        height={"100%"}
        source={{ uri: bg }}
        alt="bg"
        position={"fixed"}
        zIndex={-1}
      ></Image>

      {showProjectHeading && (
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
              fontFamily={""}
              fontWeight={600}
              color={"#3F3134"}
            >
              影音行銷作品{" "}
            </Text>
            <GiArrowCursor
              color={"#3F3134"}
              size={28}
              style={{ paddingTop: "8px" }}
            />
          </HStack>
        </Box>
      )}

      <div id="slide-body" class={animationClass}>
        <HStack
          paddingTop={"5rem"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box paddingLeft={"2rem"}>
            <Link to={prevPage} style={{ textDecoration: "none" }}>
              <IoIosArrowBack size={"40px"} color="#3F3134" />
            </Link>
          </Box>
          <Outlet
            context={{
              showProjectHeading,
              setShowProjectHeading,
            }}
          />
          <Box paddingRight={"2rem"}>
            <Link to={nextPage} style={{ textDecoration: "none" }}>
              <IoIosArrowForward size={"40px"} color="#3F3134" />
            </Link>
          </Box>
        </HStack>
      </div>

      {/* Footer */}
      <Footer sendShow={handleDataFromChild} />
    </Box>
  );
};

export default ZhengLayout;
