import { Box, VStack, Text, Image } from "native-base";
import '../App.css';
import React from "react";

function InterestComponent(props) {

    return (
        <VStack h={'350px'} w={'1/3'} alignItems={'center'}>
            <Box w={'full'} h={'full'}>
                <Image w={'full'} h={'full'} resizeMode="contain" source={props.img} alt="infobg" />
            </Box>
            <Text color={'#8E9D7D'} paddingTop={'1rem'} fontFamily={"cwTeXKai"} fontWeight={800} fontSize={{sm: '1.3rem', lg: '2rem'}}>{props.title}</Text>
        </VStack>
    );
}

export default InterestComponent;