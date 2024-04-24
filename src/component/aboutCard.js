import { Box, VStack, Text, HStack, Image, AspectRatio } from "native-base";
import "../App.css";
import React from "react";
import aboutCard from "../Team/aboutCard.png";
import SubjectCard from "./subjectCard";

function AboutCard(props) {
  return (
    <Box w={"600px"} paddingTop={"50px"}>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: aboutCard,
          }}
          alt="image"
        />
      </AspectRatio>

      <VStack position={"absolute"} alignSelf={"center"} paddingTop={"105px"} paddingLeft={'25px'}>
        <HStack>
          <Text
            fontWeight={"600"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            專長
          </Text>
          <Text
            fontWeight={"400"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            {props.skill}
            {"\n"}
          </Text>
        </HStack>
        <HStack>
          <Text
            fontWeight={"600"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            畢業學校
          </Text>
          <Text
            fontWeight={"400"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            {props.school}
            {"\n"}
          </Text>
        </HStack>
        <HStack>
          <Text
            fontWeight={"600"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            喜歡科目
          </Text>
          <SubjectCard subject={props.subject[0]} level={'★ 簡單'}/>
          <SubjectCard subject={props.subject[1]} level={'★★ 中等'}/>
          <SubjectCard subject={props.subject[2]} level={'★★★ 困難'}/>
        </HStack>
        <HStack>
          <Text
            fontWeight={"600"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"cwTeXKai"}
          >
            聯絡方式
          </Text>
          <Text
            fontWeight={"400"}
            color={"#3F3134"}
            fontSize={{ sm: "22px", xl: "26px" }}
            fontFamily={"CormorantGaramond"}
          >
            {props.email}
            {"\n"}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default AboutCard;
