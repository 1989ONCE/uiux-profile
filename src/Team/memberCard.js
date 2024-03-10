import {Box, Text} from "native-base";
import '..//App.css';
import chenImg from '../chen/img/chen.jpg';
import liuImg from '../liu/img/liu.png';
import zhengImg from '../zheng/img/zheng.png';
import AvatarComponent from "../component/avatarComponent";

function MemberCard(props) {
    return (
        <Box w={'100%'} h={'100%'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Text paddingTop={'5rem'} fontFamily={"cwTeXKai"} color={'#8E9D7D'} fontWeight={600} fontSize={{
              sm: "1.5rem",
              md: "2rem",
              lg: "3rem"
            }}>
            使用者介面設計與評鑑 第二組
          </Text>
          <Box paddingTop={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'}>
            <AvatarComponent show={props.show} img={chenImg} name="陳佳妤" link="chen"></AvatarComponent>
            <AvatarComponent show={false} img={liuImg} name="劉泓毅" link="liu"></AvatarComponent>
            <AvatarComponent show={false} img={zhengImg} name="鄭彩纓" link="zheng"></AvatarComponent>
          </Box>
        </Box>
    );
}

export default MemberCard;