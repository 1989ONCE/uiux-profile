import { Box, VStack, Text, Image, Center} from "native-base";
import '../App.css';
import React from "react";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import { Link } from "react-router-dom";

function ProjectComponent3() {

    return (
        <Center style={{transform: [{translateY: '-60px'}]}} w={'80%'} h={'334.9px'} alignItems={'flex-start'}>
            <Box flexDirection={'row'} w={'full'} h={'full'} space={30} flexWrap={'wrap'} >
                    <VStack space={5} w={{sm: 'full', lg: '50%'}} h={'493px'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}> 
                        <Box w={'full'} h={'45%'} alignSelf={'flex-start'} alignItems={'center'}>
                            <Image w={'full'} h={'90%'} resizeMode="contain" source={p1} alt="project1" />
                            <Link target="_blank" to='https://youtu.be/nsszk8THTUI?si=LTdimSV1zRcb_cMp' style={{textDecorationColor: '#3F3134'}}><Text color={'#3F3134'} fontFamily={""} fontWeight={800} fontSize={'1.3rem'}>我聽見另一種聲音</Text></Link>
                        </Box>
                        <Box w={'full'} h={'45%'} alignSelf={'flex-start'} alignItems={'center'}>
                            <Image w={'full'} h={'90%'} resizeMode="contain" source={p2} alt="project2" />
                            <Link target="_blank" to='https://youtu.be/OzKp9HN0nDE' style={{textDecorationColor: '#3F3134'}}><Text color={'#3F3134'} fontFamily={""} fontWeight={800} fontSize={'1.3rem'}>捐助年菜 創造善的循環</Text></Link>
                        </Box>
                    </VStack>
                    <VStack w={{sm: 'full', lg: '50%'}} h={{sm: '300px', lg: '454px'}}> 
                        <Box w={'full'} h={'full'} alignSelf={'flex-start'} alignItems={'center'}>
                            <Image w={'full'} h={'full'} resizeMode="contain" source={p3} alt="project3" />
                            <Link target="_blank" to='https://drive.google.com/file/d/1NH_2G3cW22wRzHIpVygo_0eEgeNvXKxT/view?usp=drive_link' style={{textDecorationColor: '#3F3134'}}><Text color={'#3F3134'} fontFamily={""} fontWeight={800} fontSize={'1.3rem'}>公益傳播大使成果冊</Text></Link>
                        </Box>
                    </VStack>
            </Box>
        </Center>
    );
}

export default ProjectComponent3;