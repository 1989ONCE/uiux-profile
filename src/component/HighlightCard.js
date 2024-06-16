import { Box, VStack, Text, Image, AspectRatio } from "native-base";
import '../App.css';
import React from "react";
import HighlightImg from "../Team/highlightCard.png";

function HighlightCard(props) {

    return (
        <Box w={'600px'} paddingTop={'50px'}>
            <AspectRatio w="100%" ratio={16 / 9} >
                <Image source={{
                uri: HighlightImg
                }} alt="image" />
            </AspectRatio>
        
            <VStack position={'absolute'} alignSelf={'center'} paddingTop={'50px'} paddingLeft={'10px'}>
                    <Text fontWeight={'600'} color={'#3F3134'} fontSize={{sm:'22px', xl:'24px'}} fontFamily={''}>{props.title}{'\n'}</Text>
                    <Text paddingTop={'15px'} w={'400px'} fontWeight={'400'} color={'#3F3134'} fontSize={{sm:'18px', xl:'20px'}} fontFamily={''}>{props.content}{'\n'}</Text>
            </VStack>
        </Box>
        
    );
}

export default HighlightCard;