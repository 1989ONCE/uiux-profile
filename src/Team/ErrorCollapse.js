import {
    Collapse,
    Text,
    Alert,
    Box,
    HStack,
    IconButton,
    VStack,
  } from "native-base";
import '..//App.css';
import { CloseIcon } from "native-base";
function ErrorCollapse(props) {

  return (
        <Collapse isOpen={props.show}>
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
                    onPress={() => props.setShow(false)}
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
    );
}

export default ErrorCollapse;