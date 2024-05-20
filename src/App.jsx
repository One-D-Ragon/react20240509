import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-evenly"}>
        <Box bgColor={"blue"}>1</Box>
        <Box bgColor={"orange"}>2</Box>
        <Box bgColor={"yellow"}>3</Box>
      </Flex>
      <hr />
      <Flex>
        <Box bgColor={"gray"}>1</Box>
        <Box bgColor={"gold"}>2</Box>
        {/* spacer : 박스 사이의 간격이 멀리 떨어짐*/}
        <Spacer />
        <Box bgColor={"green"}>3</Box>
      </Flex>
      {/* Center : box를 가운데에 배치시켜줌*/}
      <Center>
        <Box w={{ base: "100%", md: "500px" }} bgColor={"linen"}>
          contents
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
