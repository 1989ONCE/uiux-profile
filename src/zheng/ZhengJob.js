import { NativeBaseProvider, Box, HStack, Image, IconButton, Tooltip, Text, AspectRatio} from "native-base";
import '..//App.css';
import zhengImg from './img/zheng.png';
import zhengJob from './img/zhengjob.png';
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Header from "../component/Header";
import AvatarComponent2 from "../component/avatarComponent2";
import bg3 from '../Team/bg3.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ZhengJob = () => {
  const [show, setShow] = useState(false);
  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      window.location.href = '/ncustudio/zheng/project';
    }
    else if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
        window.location.href = '/ncustudio/zheng';
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
            <Header link={'zheng'} page={'job'}/>
            <Image w={'100%'} height={'100%'} source={bg3} alt="bg" position={'fixed'} zIndex={-1}></Image>
            
            <HStack paddingTop={'5rem'} alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
                <Box paddingLeft={'2rem'}>
                    <Link to={`/ncustudio/zheng`} style={{textDecoration: 'none'}}  >
                        <IoIosArrowBack size={'40px'} color="#8E9D7D" />
                    </Link>
                </Box>
                <AvatarComponent2 img={zhengImg} name={'鄭彩纓'} info={zhengJob} />
                <Box paddingRight={'2rem'}>
                    <Link to={`/ncustudio/zheng/project`} style={{textDecoration: 'none'}}  >
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

export default ZhengJob;