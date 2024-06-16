import { Box, Text } from "native-base";
import "../App.css";
import AvatarComponent from "../component/avatarComponent";
import data from "./TeamData";

function MemberCard(props) {
  const member1 = data.member[0];
  const member2 = data.member[1];
  const member3 = data.member[2];

  return (
    <Box
      w={"100%"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Text
        paddingTop={"5rem"}
        fontFamily={""}
        color={"#94C6E1"}
        fontWeight={600}
        fontSize={{
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
        }}
      >
        <div className="first-step">使用者介面設計與評鑑 第二組</div>
      </Text>
      <Box
        paddingTop={"2rem"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <AvatarComponent
          show={props.show}
          img={member1.img}
          name={member1.name}
          link="chen/about"
        ></AvatarComponent>
        <AvatarComponent
          show={false}
          img={member2.img}
          name={member2.name}
          link="liu/about"
        ></AvatarComponent>
        <AvatarComponent
          show={false}
          img={member3.img}
          name={member3.name}
          link="zheng/about"
        ></AvatarComponent>
      </Box>
    </Box>
  );
}

export default MemberCard;
