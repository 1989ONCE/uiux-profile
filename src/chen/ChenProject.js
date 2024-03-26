import "../App.css";
import React from "react";
import ProjectComponent from "./projectComponent";
import { Text } from "native-base";

const ChenProject = () => {
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
        陳佳妤
      </Text>
      <ProjectComponent />
    </>
  );
};

export default ChenProject;
