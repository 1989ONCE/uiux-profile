import "../App.css";
import React from "react";
import ProjectComponent2 from "./projectComponent2";
import { Text } from "native-base";

const LiuProject = () => {
  return (
    <>
      <Text
        position={"fixed"}
        alignSelf={"end"}
        bottom={10}
        right={5}
        fontWeight={600}
        fontFamily={"cwTeXKai"}
        fontSize={24}
      >
        劉泓毅
      </Text>
      <ProjectComponent2 />
    </>
  );
};

export default LiuProject;
