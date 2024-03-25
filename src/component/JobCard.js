import { Box, Avatar, VStack, ZStack, Text, HStack, Image, Center, AspectRatio } from "native-base";
import '../App.css';
import React, { useEffect } from "react";

function JobCard(props) {
    const Jobs = () => (
        Array.from(props.section).map((s) => {
        return(
            <Box>
                <Text fontWeight={'600'} color={'#8E9D7D'} fontSize={{sm:'20px', xl:'24px'}} fontFamily={'cwTeXKai'}>{s.title}{'\n'}</Text>
                <Text fontWeight={'400'} color={'#8E9D7D'} fontSize={{sm:'14px', xl:'16px'}} fontFamily={'cwTeXKai'}>{s.period}{'\n\n\n'}</Text>
            </Box>
        )})
      );

    return (
        <Box w={'600px'}>
            <AspectRatio w="100%" ratio={4 / 3} >
                <Image source={{
                uri: props.JobCard
                }} alt="image" />
            </AspectRatio>
            
            <VStack position={'absolute'} alignSelf={'center'} paddingTop={{sm: '40px', xl: '20px'}}>
                <Jobs />
            </VStack>
        </Box>
        
    );
}

export default JobCard;