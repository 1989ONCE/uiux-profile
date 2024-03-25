import { Box, Avatar, VStack, Text, HStack, Pressable, Image, Center, AspectRatio, ZStack} from "native-base";
import '../App.css';
import React from "react";
import ncuapp from "./img/ncuapp.png";
import ai from "./img/aiproject.png";

function ProjectComponent() {

    return (
        <Center w={'80%'} h={'455px'}>
            <HStack w={'full'} h={'full'} space={10} paddingLeft={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyItems={'center'} justifyContent={'center'}>
                    <VStack h={'full'} alignItems={'center'}> 
                        <Text paddingBottom={'20px'} color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={{sm: '1.4rem', lg: '2rem'}}>NCU APP - 為中央學生開發的軟體</Text>
                        <AspectRatio w="60%" h={'full'} ratio={1} >
                            <Image source={{
                            uri: ncuapp
                            }} alt="image" />
                        </AspectRatio>
                        {/* <Image w={'375px'} h={'100%'} source={ncuapp} alt="ncuapp" />                 */}
                    </VStack>

                    <VStack h={'full'} alignItems={'center'}> 
                        <Text paddingBottom={'20px'} color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={{sm: '1.4rem', lg: '2rem'}}>AI污邊界 - 污水廠之監控與警示系統 </Text>
                        <AspectRatio w="100%" h={'full'} ratio={16/ 9} >
                            <Image source={{
                            uri: ai
                            }} alt="image" />
                        </AspectRatio>
                        {/* <Image w={'full'} h={'100%'} source={ai} alt="ncuapp" /> */}
                    </VStack>
            </HStack>
        </Center>
    );
}

export default ProjectComponent;