import { Box, VStack, ZStack, HStack, Image, Text } from "native-base";
import "../App.css";
import React, { useState, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header";
import bg2 from "../Team/bg2.png";
import bg3 from "../Team/bg3.png";
import bg4 from "../Team/bg4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoArrowUpLeft } from "react-icons/go";
import Footer from "../component/footer";
import routes from "../routes";

const ChenLayout = () => {
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
        ? "/"
        : routes[0].children[personIndex].children[pageIndex - 1].path,
    [pageIndex, personIndex]
  );
  const nextPage = useMemo(
    () =>
      pageIndex === routes[0].children[personIndex].children.length - 1
        ? "/liu/about"
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
  return (
    <Box w={"full"} h={"full"}>
      {/* Header */}
      <Header link={"chen"} page={page} />
      <ZStack w={"90%"} alignItems={"flex-end"}>
        <VStack>
          {parentShow ? <GoArrowUpLeft size={"2rem"} /> : null}
          {parentShow ? (
            <Text fontFamily={"cwTeXKai"}>點擊任一選項，前往該頁面</Text>
          ) : null}
        </VStack>
      </ZStack>
      <Image
        w={"100%"}
        height={"100%"}
        source={bg}
        alt="bg"
        position={"fixed"}
        zIndex={-1}
      ></Image>

      <HStack
        paddingTop={"5rem"}
        alignItems={"center"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Box paddingLeft={"2rem"}>
          <Link to={prevPage} style={{ textDecoration: "none" }}>
            <IoIosArrowBack size={"40px"} color="#8E9D7D" />
          </Link>
        </Box>
        <Outlet />
        <Box paddingRight={"2rem"}>
          <Link to={nextPage} style={{ textDecoration: "none" }}>
            <IoIosArrowForward size={"40px"} color="#8E9D7D" />
          </Link>
        </Box>
      </HStack>

      {/* Footer */}
      <Footer sendShow={handleDataFromChild} />
    </Box>
  );
};

export default ChenLayout;
