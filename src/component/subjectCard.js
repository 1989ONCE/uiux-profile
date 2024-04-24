import { Text, Modal, Pressable } from "native-base";
import "../App.css";
import React, { useState} from "react";

function SubjectCard(props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal margin={0} isOpen={modalVisible} onClose={() => setModalVisible(false)} size={'lg'} >
            <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header
                _text={{
                    fontSize: { sm: "22px", xl: "30px" },
                    fontWeight: "400",
                    fontFamily: "cwTeXKai",
                    color: '#3F3134'
                }}
                >{props.subject.title}
            </Modal.Header>
            <Modal.Body>
                <Text
                bgColor={'#3f3134'}
                fontWeight={"400"}
                fontSize={{ sm: "22px", xl: "24px" }}
                fontFamily={"cwTeXKai"}
                >
                難易度
                </Text>
                <Text
                    color={'darkBlue.700'}
                    fontWeight={"500"}
                    fontSize={'20px'}
                    fontFamily={"cwTeXKai"}>
                    {props.level}
                </Text>
                {'\n'}
                <Text
                // w={'fit-content'}
                // paddingX={'5px'}
                // bg={'#9d5642'}
                color={'#3f3134'}
                fontWeight={"500"}
                fontSize={{ sm: "22px", xl: "24px" }}
                fontFamily={"cwTeXKai"}>
                喜歡原因
                </Text>
                <Text
                    color={'#3f3134'}
                    fontWeight={"500"}
                    fontSize={'20px'}
                    fontFamily={"cwTeXKai"}>
                {props.subject.reason}
                </Text>
            </Modal.Body>
            </Modal.Content>
        </Modal>

        <Text>  </Text>
        <Pressable _hover={
            {
                bg: "gray.200"
            }
        } onPress={() => {
            setModalVisible(!modalVisible);
            }} space="4" justifyContent="center" alignItems="center">
            <Text
                textDecorationLine={"underline"}
                fontWeight={"400"}
                color={'#3F3134'}
                fontSize={{ sm: "22px", xl: "26px" }}
                fontFamily={"cwTeXKai"}
            >{props.subject.title}</Text>
        </Pressable>
    </>
    );
}

export default SubjectCard;
