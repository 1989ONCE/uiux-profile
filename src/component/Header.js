import { Box, Avatar, HStack, Text, ZStack, Pressable, Menu, IconButton, Button} from "native-base";
import '../App.css';
import { PiUserSwitchDuotone } from "react-icons/pi";
import React, {useState} from "react";
import { Link } from "react-router-dom";

function Header(props) {
    const [shouldOverlapWithTrigger] = useState(false);
    return (
        <Box className='header' paddingX={2} justifyContent={'end'} flexDirection={'row'} >
                <HStack space={5} top={5}>
                    <Link to={`/ncustudio/${props.link}`} style={{textDecoration: props.page === 'about' ? 'underline' : 'none', textDecorationColor: props.page === 'about' ? 'black' : 'transparent', color: props.page === 'about' ? 'black' : '#8E9D7D'}}  >
                        <Text color={props.page==='about' ? 'black' : '#8E9D7D'} fontWeight={props.page === 'about' ? 600 : 300} fontSize={{ 'sm' : '1rem', 'md': '1.5rem'}} fontFamily={'CormorantGaramond'}>
                            About
                        </Text>
                    </Link>
                    <Text color={'#8E9D7D'} fontSize={{ 'sm' : '0.8rem', 'md': '1.3rem'}}>|</Text>
                    <Link to={`/ncustudio/${props.link}/job`} style={{textDecoration: props.page === 'job' ? 'underline' : 'none',  textDecorationColor: props.page === 'job' ? 'black' : 'transparent'}}>
                        <Text color={props.page==='job' ? 'black' : '#8E9D7D'} fontWeight={props.page === 'job' ? 600 : 300} fontSize={{ 'sm' : '1rem', 'md': '1.5rem'}} fontFamily={'CormorantGaramond'}>
                            Job Experience
                        </Text>
                    </Link>
                    <Text color={'#8E9D7D'} fontSize={{ 'sm' : '0.8rem', 'md': '1.3rem'}}>|</Text>
                    <Link to={`/ncustudio/${props.link}/project`} style={{textDecoration: props.page === 'project' ? 'underline' : 'none'}}>
                        <Text color={props.page==='project' ? 'black' : '#8E9D7D'} fontWeight={props.page === 'project' ? 600 : 300} fontSize={{ 'sm' : '1rem', 'md': '1.5rem'}} fontFamily={'CormorantGaramond'}>
                            Project
                        </Text>
                    </Link>
                    <Text color={'#8E9D7D'} fontSize={{ 'sm' : '0.8rem', 'md': '1.3rem'}}>|</Text>
                    <Link to={`/ncustudio/${props.link}/interest`} style={{textDecoration: props.page === 'interest' ? 'underline' : 'none'}}>
                        <Text color={props.page==='interest' ? 'black' : '#8E9D7D'} fontWeight={props.page === 'interest' ? 600 : 300} fontSize={{ 'sm' : '1rem', 'md': '1.5rem'}} fontFamily={'CormorantGaramond'}>
                            Interests
                        </Text>
                    </Link>

                    
                </HStack>
                <Menu w="160" shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
                    placement={'top right'} trigger={triggerProps => {
                    return <IconButton {...triggerProps} top={{sm: 2, md: 3}} borderRadius='10rem' icon={<PiUserSwitchDuotone size={'30px'}/>}
                    _icon={{
                        color: "#8E9D7D",
                        size: "md", 
                    }} 
                    _hover={{
                        bg: "cyan.600:alpha.30", 
                    }} 
                    _pressed={{
                        bg: "cyan.600:alpha.20",
                    }} 
                    >
                            </IconButton>;
                    }}>
                        <Menu.Item><Link style={{color: '#8E9D7D', textDecoration: 'none'}} to={'/ncustudio'}>首頁</Link></Menu.Item>
                        <Menu.Item><Link style={{color: '#8E9D7D', textDecoration: 'none'}} to={'/ncustudio/chen'}>陳佳妤</Link></Menu.Item>
                        <Menu.Item><Link style={{color: '#8E9D7D', textDecoration: 'none'}} to={'/ncustudio/liu'}>劉泓毅</Link></Menu.Item>
                        <Menu.Item><Link style={{color: '#8E9D7D', textDecoration: 'none'}} to={'/ncustudio/zheng'}>鄭彩纓</Link></Menu.Item>
                </Menu>
                    
        </Box>
    );
}

export default Header;