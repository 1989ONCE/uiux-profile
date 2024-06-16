import "../App.css";
import React, { useEffect } from "react";
import ProjectComponent3 from "./projectComponent3";
import { Text } from "native-base";
import { useOutletContext } from "react-router-dom";

const ZhengProject = () => {
  const { setShowProjectHeading } = useOutletContext();
  useEffect(() => {
    setShowProjectHeading(true);
    return () => setShowProjectHeading(false);
  });
  return (
    <>
      <Text
        position={"fixed"}
        alignSelf={"end"}
        bottom={10}
        right={5}
        fontWeight={600}
        fontFamily={""}
        fontSize={24}
      >
        鄭彩纓
      </Text>
      <ProjectComponent3 />
    </>
  );
};

export default ZhengProject;
