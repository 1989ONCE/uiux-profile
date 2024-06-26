import { VStack, Text, Image, Center} from "native-base";
import '../App.css';
import React from "react";
import trader from "./img/trader.png";

function ProjectComponent2() {

    return (
        <Center w={'80%'} h={'455px'}>
            <VStack w={'full'} h={'full'} space={10} paddingLeft={'2rem'} flexDirection={'row'} flexWrap={'wrap'} justifyItems={'center'} justifyContent={'center'}>
                <Text color={'#3F3134'} paddingTop={'2rem'} fontFamily={""} fontWeight={800} fontSize={{sm: '1.4rem', lg: '2rem'}}>Brick Trader - NoCode 交易策略編寫及回測平台</Text>
                <Image w={'full'} h={'70%'} resizeMode="contain" source={trader} alt="ncuapp" />       
            </VStack>
        </Center>
    );
}

export default ProjectComponent2;