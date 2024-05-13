import React from "react";
import { Badge, Button, ChakraProvider } from "@chakra-ui/react";

// node_modules에 외부 컴포넌트들이 설치됨
// 자동으로 import 된다
// 외부 컴포넌트들을 가져와서 쓸 수 있다

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}>클릭</Button>
        <Button colorScheme={"green"}>
          알림<Badge>new</Badge>
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
