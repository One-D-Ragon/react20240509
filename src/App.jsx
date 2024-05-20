import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  /* 정해진 rem만 사용할 수 있다
     만약에 없는 11을 사용하면 44px이 아니라 11px이 나온다*/
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={2} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={10} bgColor={"tomato"}>
        Cum, libero, officiis!
      </Box>
      <Box m={20} bgColor={"tomato"}>
        Expedita minima, rerum.
      </Box>
    </ChakraProvider>
  );
}

export default App;
