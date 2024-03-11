import { Avatar, VStack, Text, HStack, Image, Center, AspectRatio } from "native-base";
import '../App.css';
import React from "react";


function AvatarComponent2(props) {

    return (
        
        <Center w={'80%'}>
            <HStack w={'full'} space={10} paddingLeft={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyItems={'center'} justifyContent={'center'}>
                    <VStack alignItems={'center'}>
                        <Avatar size={{sm: '275px', lg: '375px'}}
                            source={{
                                uri: props.img, 
                            }} />
                        <Text color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={'2rem'}>{props.name}</Text>
                    </VStack>
                    <AspectRatio>
                        <Image w={{sm: '455px', md:'600px', lg: '1000px'}} h={{sm: '300px', md:'300px', lg: '400px'}} resizeMode="contain" source={props.info} alt="infobg" />
                    </AspectRatio>
            </HStack>
        </Center>
    );
}

export default AvatarComponent2;