import {
  AlertDialog,
  Text,
  ZStack,
  Center,
  Box,
  Button,
  Image,
  FormControl,
  Input,
  VStack,
  TextArea,
  HStack,
} from "native-base";
import "..//App.css";
import bg from "./bg.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useState, useRef, useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import Header from "../component/Header2";
import { GoArrowUpLeft } from "react-icons/go";
import Swal from "sweetalert2";
import Footer from "../component/footer";
import ErrorCollapse from "./ErrorCollapse";

const Contact = () => {
  //form data
  const defaultForm = { name: "", email: "", content: "" };
  const [formData, setData] = useState(defaultForm);

  // data validation
  const [show, setShow] = useState(false);
  const [nameError, setNameError] = useState("此欄位必填");
  const [namehasError, setNamehasError] = useState(false);
  const [emailError, setEmailError] = useState("此欄位必填");
  const [emailhasError, setEmailhasError] = useState(false);
  const [contentError, setContentError] = useState("此欄位必填");
  const [contenthasError, setContenthasError] = useState(false);

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setData({ ...formData, email: value });

    if (value.trim() === "") {
      setEmailError("此欄位必填");
      setEmailhasError(true);
    } else if (!isEmailValid(value)) {
      setEmailError(
        "請檢查您輸入的信箱是否為有效信箱，常見的錯誤輸入可能缺少@或是.com"
      );
      setEmailhasError(true);
    } else {
      setEmailError("");
      setEmailhasError(false);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setData({ ...formData, name: value });

    if (value.trim() === "") {
      setNameError("此欄位必填");
      setNamehasError(true);
    } else if (value.length < 2) {
      setNameError("您的名字至少要有兩個字，您可能只成功輸入了一個字");
      setNamehasError(true);
    } else {
      setNameError("");
      setNamehasError(false);
    }
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    setData({ ...formData, content: value });

    if (value.trim() === "") {
      setContentError("此欄位必填");
      setContenthasError(true);
    } else {
      setContentError("");
      setContenthasError(false);
    }
  };

  function onSubmit() {
    if (namehasError || emailhasError || contenthasError) {
      setShow(true);
      return;
    }
    setData(defaultForm);
    setShow(false);
    Swal.fire({
      title: "寄送成功",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  // for the alert dialog
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  // show for the footer
  const [show2, setShow2] = useState();
  function handleDataFromChild(show2) {
    setShow2(show2);
  }

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <Box w={"full"} h={"full"}>
      {/* 'Background */}

      <Header />
      <Image
        w={"100%"}
        height={"100%"}
        source={{ uri: bg }}
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
          <VStack alignItems={"center"}>
            <HStack>
              <RiCustomerService2Fill size={"39px"} color={"#8E9D7D"} />
              <Text
                justifyContent={"center"}
                fontSize={"30px"}
                fontFamily={"cwTeXKai"}
                fontWeight={600}
                color={"#8E9D7D"}
                paddingTop={"-900px"}
              >
                &ensp;與我們聯絡{"\n"}
              </Text>
            </HStack>
            <Text
              justifyContent={"center"}
              fontSize={"16px"}
              fontFamily={"cwTeXKai"}
              fontWeight={300}
              color={"#8E9D7D"}
            >
              電話：(02) 1234-5678
            </Text>
          </VStack>
        </Box>

        <ErrorCollapse show={show} setShow={setShow} />

        <VStack w={"60%"} justifyContent={"center"}>
          <FormControl isRequired isInvalid={nameError}>
            {/* name section */}
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
              onChange={handleNameChange}
            />
            <ZStack w={"105%"} alignItems={"flex-end"}>
              <VStack>
                {show2 ? <GoArrowUpLeft size={"2rem"} /> : null}
                {show2 ? <Text fontFamily={"cwTeXKai"}>輸入文字</Text> : null}
              </VStack>
            </ZStack>

            <FormControl.ErrorMessage
              leftIcon={<BiErrorCircle size="18px" color="#e60000" />}
            >
              {nameError}
            </FormControl.ErrorMessage>

            <FormControl.HelperText>
              名字需為一個字以上 (Name should contain at least 1 character.)
            </FormControl.HelperText>
          </FormControl>
          <FormControl isRequired isInvalid={emailError}>
            {/* email section */}
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
              onChange={handleEmailChange}
            />
            {emailError ? (
              <FormControl.ErrorMessage
                leftIcon={<BiErrorCircle size="18px" color="#e60000" />}
                _text={{
                  fontSize: "xs",
                }}
              >
                {emailError}
              </FormControl.ErrorMessage>
            ) : null}

            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              "有效電子信箱需包含'@'和'.' (An valid email address at least
              contain '@' and '.')"
            </FormControl.HelperText>
          </FormControl>

          <FormControl isRequired isInvalid={contentError}>
            {/* content section */}
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
              onChange={handleContentChange}
              _hover={
                contentError
                  ? { borderColor: "#DC2625" }
                  : { borderColor: "gray.300" }
              }
              borderColor={contentError ? "#DC2625" : "gray.300"}
              borderWidth={contentError ? "2px" : "1px"}
            />
            {contentError ? (
              <FormControl.ErrorMessage
                leftIcon={<BiErrorCircle size="18px" color="#e60000" />}
                _text={{
                  fontSize: "xs",
                }}
              >
                {contentError}
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>

          <Button onPress={() => setIsOpen(!isOpen)} mt="5" colorScheme="cyan">
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
                you check your information before submitting. After submitting,
                you won't be able to edit it.)
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
      <Footer sendShow={handleDataFromChild} />
    </Box>
  );
};

export default Contact;
