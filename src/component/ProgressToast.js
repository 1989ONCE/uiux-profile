import { Box, Text } from "native-base";

function ProgressToast(props) {
  return (
    <Box
      display={props.show ? "block" : "none"}
      position="fixed"
      p="2"
      right="2"
      bottom="12"
      bgColor="gray.700"
      rounded="sm"
    >
      <Text color="white" fontWeight="bold">
        {props.text}
      </Text>
    </Box>
  );
}

export default ProgressToast;
