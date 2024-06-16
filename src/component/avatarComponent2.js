import { Avatar, VStack, Text, HStack, Center } from "native-base";
import '../App.css';
import React from "react";
import AboutCard from "./aboutCard";
import JobCard from "./JobCard";
import HighlightCard from "./HighlightCard";

function AvatarComponent2(props) {

    return (
        
        <Center w={'80%'}>
            <HStack w={'full'} space={10} paddingLeft={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyItems={'center'} justifyContent={'center'}>
                    <VStack alignItems={'center'} w={'400px'} h={'full'}>
                        <Avatar size={'375px'}
                            source={{
                                uri: props.img, 
                            }} />
                        <Text color={'#94C6E1'} paddingTop={'2rem'} fontFamily={""} fontWeight={800} fontSize={'2rem'}>{props.name}</Text>
                    </VStack>
                    {props.page === 'about' && <AboutCard skill={props.memberData.skill}  school={props.memberData.school} email={props.memberData.email} subject={props.memberData.subject} />}
                    {props.page === 'highlight' && <HighlightCard title={props.memberData.title} content={props.memberData.content} />}
                    {props.page === 'job' && <JobCard JobCard={props.memberData.dots} section={props.memberData.section}/>}
            </HStack>
        </Center>
    );
}

export default AvatarComponent2;