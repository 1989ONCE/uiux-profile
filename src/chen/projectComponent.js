import { Box, Avatar, VStack, Text, HStack, Pressable, Image, Center, AspectRatio, ZStack} from "native-base";
import '../App.css';
import React from "react";
import ncuapp from "./img/ncuapp.png";
import ai from "./img/aiproject.png";

function ProjectComponent() {

    return (
        <Center w={'80%'} h={'500px'}>
            <HStack w={'full'} h={'full'} space={10} paddingLeft={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyItems={'center'} justifyContent={'center'}>
                    <VStack alignItems={'center'}> 
                        <Text color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={{sm: '1.4rem', lg: '2rem'}}>NCU APP - 為中央學生開發的軟體</Text>
                        <Image w={'full'} h={'70%'} resizeMode="contain" source={ncuapp} alt="ncuapp" />
                        
                    </VStack>
                    <VStack alignItems={'center'}> 
                        <Text color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={{sm: '1.4rem', lg: '2rem'}}>AI污邊界 - 污水廠之監控與警示系統 </Text>
                        <Image w={'full'} h={'70%'} resizeMode="contain" source={ai} alt="ncuapp" />
                    </VStack>
            </HStack>
        </Center>
    );
}

export default ProjectComponent;