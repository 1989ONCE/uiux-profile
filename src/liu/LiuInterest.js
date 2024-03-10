import { NativeBaseProvider, Box, HStack, Image, IconButton, Tooltip, Text, AspectRatio} from "native-base";
import '..//App.css';
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import InterestComponent from "../component/interestComponent";
import bg4 from '../Team/bg4.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import i1 from './img/i1.png';
import i2 from './img/i2.png';

const LiuInterest = () => {
  const [show, setShow] = useState(false);
  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      window.location.href = '/ncustudio/zheng';
    }
    else if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
        window.location.href = '/ncustudio/liu/project';
    }
  }
  useEffect(() => {
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount
    return (
        <NativeBaseProvider>
          <Box w={'full'} h={'full'}>
        
            {/* Header */}
            <Header link={'liu'} page={'interest'}/>
            <Image w={'100%'} height={'100%'} source={bg4} alt="bg" position={'fixed'} zIndex={-1}></Image>
            <Text position={'fixed'} alignSelf={'end'} bottom={10} right={5} fontWeight={600} fontFamily={'cwTeXKai'} fontSize={24}>劉泓毅</Text>

            <HStack paddingTop={'5rem'} alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
                <Box paddingLeft={'2rem'}>
                    <Link to={`/ncustudio/liu/project`} style={{textDecoration: 'none'}}  >
                        <IoIosArrowBack size={'40px'} color="#8E9D7D" />
                    </Link>
                </Box>

                <HStack w={'80%'} justifyContent={'center'}>
                    <InterestComponent img={i1} title={'音樂'} />
                    <InterestComponent img={i2} title={'美食'} />
                </HStack>

                <Box paddingRight={'2rem'}>
                    <Link to={`/ncustudio/zheng`} style={{textDecoration: 'none'}}  >
                        <IoIosArrowForward size={'40px'} color="#8E9D7D" />
                    </Link>                   
                </Box>
            </HStack>

            {/* Footer */}
            <Box className='footer' height={'20px'} paddingX={2} position={'fixed'} bottom={6}>
              <HStack>
                <Tooltip label="使用教學" bg="gray.600:alpha.30" color="gray" placement="top">
                  <IconButton borderRadius='10rem' icon={<BsInfo size={'27px'} />}
                  _icon={{
                    color: "#8E9D7D",
                    size: "md"
                  }} 
                  _hover={{
                    bg: "cyan.600:alpha.30", 
                  }} 
                  _pressed={{
                    bg: "cyan.600:alpha.20",
                  }} 
                  onPress={() => {
                    setShow(!show);
                  }}
                  />
                </Tooltip>
                <Tooltip label="聯絡我們" bg="gray.600:alpha.30" color="gray" placement="top">
                  <Link to="/ncustudio/contact">
                  <IconButton borderRadius='10rem' icon={<RiCustomerService2Fill size={'27px'} />}
                  _icon={{
                    color: "#8E9D7D",
                    size: "md", 
                    borderColor: '#8E9D7D',
                    borderWidth: '3px', 
                    borderStyle: 'solid'
                  }} 
                  _hover={{
                    bg: "cyan.600:alpha.30", 
                  }} 
                  _pressed={{
                    bg: "cyan.600:alpha.20",
                  }} 
                  />
                  </Link>
                </Tooltip>
              </HStack>
            </Box>
          </Box>
        </NativeBaseProvider>
    );
}

export default LiuInterest;