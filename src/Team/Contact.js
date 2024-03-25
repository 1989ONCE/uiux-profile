import {
  NativeBaseProvider,
  AlertDialog,
  Collapse,
  Text,
  ZStack,
  Alert,
  Center,
  Box,
  Button,
  HStack,
  Image,
  IconButton,
  FormControl,
  Input,
  VStack,
  TextArea,
} from "native-base";
import "..//App.css";
import bg from "./bg.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { CloseIcon } from "native-base";
import Header from "../component/Header2";
import { GoArrowUpLeft } from "react-icons/go";
import Swal from "sweetalert2";
import Footer from "../component/footer";

const Contact = () => {
  const defaultForm = { name: "", email: "", content: "" };
  const [show, setShow] = useState(false);
  const [formData, setData] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const [show2, setShow2] = useState();
  function handleDataFromChild(show2) {
    setShow2(show2);
  }

  function validate() {
    if (formData.name === undefined) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors, name: "Name is too short" });
      return false;
    }

    return true;
  }

  function onSubmit() {
    if (!validate()) {
      setShow(true);
      return;
    }
    setData(defaultForm);
    Swal.fire({
      title: "寄送成功",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  return (
    <NativeBaseProvider>
      <Box w={"full"} h={"full"}>
        {/* 'Background */}

        <Header />
        <Image
          w={"100%"}
          height={"100%"}
          source={bg}
          alt="bg"
          position={"fixed"}
          zIndex={-1}
        ></Image>

        {/* Contact */}
        <Center
          paddingTop={"3rem"}
          h={"full"}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          <Box
            flexDirection={"row"}
            alignItems={"center"}
            alignContent={"center"}
            justifyItems={"center"}
          >
            <RiCustomerService2Fill size={"30px"} color={"#8E9D7D"} />
            <Text
              justifyContent={"center"}
              fontSize={"30px"}
              fontFamily={"cwTeXKai"}
              fontWeight={600}
              color={"#8E9D7D"}
            >
              &ensp;與我們聯絡
            </Text>
          </Box>
          <Collapse isOpen={show}>
            <Alert maxW="600" status="error">
              <VStack space={1} flexShrink={1} w="100%">
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text
                      fontSize="xl"
                      fontWeight="medium"
                      _dark={{
                        color: "coolGray.800",
                      }}
                      fontFamily={"cwTeXKai"}
                    >
                      寄送失敗
                    </Text>
                  </HStack>
                  <IconButton
                    variant="unstyled"
                    _focus={{
                      borderWidth: 0,
                    }}
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "coolGray.600",
                    }}
                    onPress={() => setShow(false)}
                  />
                </HStack>
                <Box
                  pl="6"
                  _dark={{
                    _text: {
                      color: "coolGray.600",
                    },
                  }}
                  _text={{ fontFamily: "cwTeXKai" }}
                >
                  可能發生的原因:
                </Box>
                <Box
                  pl="6"
                  _dark={{
                    _text: {
                      color: "coolGray.600",
                    },
                  }}
                  _text={{ fontFamily: "cwTeXKai" }}
                >
                  1、您的網路可能遇到了點問題，請幾分鐘後再試一次！
                </Box>
                <Box
                  pl="6"
                  _dark={{
                    _text: {
                      color: "coolGray.600",
                    },
                  }}
                  _text={{ fontFamily: "cwTeXKai" }}
                >
                  2、您所輸入的資訊不符合欄位的要求，請您依據欄位下方的輸入建議重新輸入！
                </Box>
              </VStack>
            </Alert>
          </Collapse>
          <VStack w={"60%"} justifyContent={"center"}>
            <FormControl isRequired isInvalid={"name" in errors}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                姓名 Name
              </FormControl.Label>
              <Input
                placeholder="John"
                value={formData.name}
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <ZStack w={"105%"} alignItems={"flex-end"}>
                <VStack>
                  {show2 ? <GoArrowUpLeft size={"2rem"} /> : null}
                  {show2 ? <Text fontFamily={"cwTeXKai"}>輸入文字</Text> : null}
                </VStack>
              </ZStack>
              {"name" in errors ? (
                <FormControl.ErrorMessage
                  leftIcon={<BiErrorCircle size="18px" color="#e60000" />}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>
                  名字需為一個字以上 (Name should contain atleast 1 character.)
                </FormControl.HelperText>
              )}
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                電子信箱 Email
              </FormControl.Label>
              <Input
                placeholder="john@gmail.com"
                value={formData.email}
                onChangeText={(value) => setData({ ...formData, email: value })}
              />
              <FormControl.HelperText
                _text={{
                  fontSize: "xs",
                }}
              >
                "有效電子信箱需包含'@'和'.' (An valid email address at least
                contain '@' and '.')"
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<BiErrorCircle size="18px" color="#e60000" />}
                _text={{
                  fontSize: "xs",
                }}
              >
                Non-valid Email
              </FormControl.ErrorMessage>

              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                您想與我們說的話 Content
              </FormControl.Label>
              <TextArea
                placeholder="Something you want to say to us...."
                value={formData.content}
                onChangeText={(value) =>
                  setData({ ...formData, content: value })
                }
              />
            </FormControl>
            <Button
              onPress={() => setIsOpen(!isOpen)}
              mt="5"
              colorScheme="cyan"
            >
              Submit
            </Button>
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header _text={{ fontFamily: "cwTeXKai" }}>
                  確定送出嗎？ Are you sure?
                </AlertDialog.Header>
                <AlertDialog.Body _text={{ fontFamily: "cwTeXKai" }}>
                  請在送出前確認您的資訊是否正確。送出後將無法修改。 (Make sure
                  you check your information before submitting. After
                  submitting, you won't be able to edit it.)
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      colorScheme="danger"
                      onPress={onClose}
                      ref={cancelRef}
                    >
                      Cancel
                    </Button>
                    <Button
                      colorScheme="success"
                      onPress={() => {
                        onClose();
                        onSubmit();
                      }}
                    >
                      Submit
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </VStack>
        </Center>
        <ZStack w={"80%"} alignItems={"flex-end"}>
          <VStack>
            {show2 ? <GoArrowUpLeft size={"2rem"} /> : null}
            {show2 ? <Text fontFamily={"cwTeXKai"}>點擊按鈕送出</Text> : null}
          </VStack>
        </ZStack>
        {/* Footer */}
        <Footer sendShow={handleDataFromChild} rate={''}/>

      </Box>
    </NativeBaseProvider>
  );
};

export default Contact;
