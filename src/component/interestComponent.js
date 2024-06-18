import { Box, VStack, Text, Image, Tooltip, Pressable } from "native-base";
import '../App.css';
import React from "react";
import { Linking } from "react-native-web";

function InterestComponent(props) {

    return (
        <VStack h={'350px'} w={'1/3'} alignItems={'center'}>
            <Pressable w={'full'} h={'full'} onPress={() => Linking.openURL(`${props.link}`)} >
                <Tooltip label={props.context}><Image w={'full'} h={'full'} resizeMode="contain" source={props.img} alt="infobg" /></Tooltip>
            </Pressable>
            <Text color={'#3F3134'} paddingTop={'1rem'} fontFamily={""} fontWeight={800} fontSize={{sm: '1.3rem', lg: '2rem'}}>{props.title}</Text>
        </VStack>
    );
}

export default InterestComponent;