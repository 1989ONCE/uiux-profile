import { NativeBaseProvider, AlertDialog, Collapse, Text, Alert, Center, Box, Button, HStack, Image, IconButton, Tooltip, FormControl, Input, VStack, TextArea} from "native-base";
import '..//App.css';
import bg from './bg.png';
import { BsInfo } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { CloseIcon } from 'native-base';

const Contact = () => {
    const [show, setShow] = useState(false);
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);


    const validate = () => {
      if (formData.name === undefined) {
        setErrors({ ...errors,
          name: 'Name is required'
        });
        return false;
      } else if (formData.name.length < 3) {
        setErrors({ ...errors,
          name: 'Name is too short'
        });
        return false;
      }
  
      return true;
    };
    const onSubmit = () => {
      validate() ? console.log('Submitted') : console.log('Validation Failed');
      setShow(true);
    };

    
    return (
        <NativeBaseProvider>
          <Box w={'full'} h={'full'}>
          {/* 'Background */}
          <Image w={'100%'} height={'100%'} source={bg} alt="bg" position={'fixed'} zIndex={-1}></Image>
                  

                 

          {/* Contact */}
          <Center paddingTop={'8rem'} h={'full'} justifyContent={'center'} justifyItems={'center'}>
          <Collapse isOpen={show}>
        <Alert maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  Please try again later!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              Your coupon could not be processed at this time.
            </Box>
          </VStack>
        </Alert>
      </Collapse>
          <VStack w={'60%'} justifyContent={'center'}>
          <FormControl isRequired isInvalid={'name' in errors}>
            <FormControl.Label _text={{
              bold: true
            }}>Name</FormControl.Label>
              <Input placeholder="John" onChangeText={value => setData({ ...formData,
              name: value
            })} />
            {'name' in errors ? <FormControl.ErrorMessage leftIcon={<BiErrorCircle size="18px" color="#e60000"/>}>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
                Name should contain atleast 3 character.
              </FormControl.HelperText>}

              <FormControl.Label _text={{
                bold: true
              }}>Email</FormControl.Label>
                <Input placeholder="John" onChangeText={value => setData({ ...formData,
                email: value
              })} />
              <FormControl.HelperText _text={{
              fontSize: 'xs'
              }}>
                  An valid email address at least contain '@' and '.'
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<BiErrorCircle size="18px" color="#e60000"/>} _text={{
              fontSize: 'xs'
            }}>
                Non-valid Email
              </FormControl.ErrorMessage>

            <FormControl.Label _text={{
            bold: true
          }}>Content</FormControl.Label>
            <TextArea placeholder="Something you want to say to us...." onChangeText={value => setData({ ...formData,
            content: value
          })} />
          </FormControl>
          <Button onPress={() => setIsOpen(!isOpen)} mt="5" colorScheme="cyan">
        Submit
      </Button>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Are you sure?</AlertDialog.Header>
          <AlertDialog.Body>
            Make sure you check your information before submitting. After submitting, you won't be able to edit it.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="success" onPress={()=> {
                onClose();
                onSubmit();
              }}>
                Submit
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
          </VStack>
          </Center>

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
                <IconButton borderRadius='10rem'icon={<RiCustomerService2Fill size={'27px'} />}
                _icon={{
                  name: "MdOutlineHeadsetMic",
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
                onPress={() => {
                  <Link to="/ncustudio/contact">Contact Us</Link>
                }}
                />
              </Tooltip>
            </HStack>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
};

export default Contact;