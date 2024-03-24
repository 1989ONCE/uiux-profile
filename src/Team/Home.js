import {
  NativeBaseProvider,
  Box,
  Image,
} from "native-base";
import "..//App.css";
import bg from "./bg.png";
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState } from "react";
import MemberCard from "./memberCard";
import Footer from "../component/footer";

const Home = () => {
  const [parentShow, setParentShow] = useState();
  function handleDataFromChild(show) {
    setParentShow(show);
  }

  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* 'Background */}
        <Image
          w={"100%"}
          height={"100%"}
          source={bg}
          alt="bg"
          position={"fixed"}
          zIndex={-1}
        ></Image>

        <MemberCard show={parentShow} />

        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={''}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
