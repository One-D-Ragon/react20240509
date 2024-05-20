import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  /* 검사로 확인해보기 (스타일 박스에서) */
  return (
    <div>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <ChakraProvider>
        <Box
          p={"10px"}
          m={"20px"}
          border={"1px solid black"}
          bgColor={"tomato"}
        >
          Lorem ipsum dolor.
        </Box>
        <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
        <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
        <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
        <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
        <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
        <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
        <hr />
        <Box m={"10px"} bgColor={"yellow"}>
          Lorem ipsum dolor.
        </Box>
        <Box mt={"10px"} bgColor={"yellow"}>
          Ex facere, fugit.
        </Box>
        <Box mb={"10px"} bgColor={"yellow"}>
          Fuga totam, vero.
        </Box>
        <Box ml={"10px"} bgColor={"yellow"}>
          Animi, fugit, sit?
        </Box>
        <Box mr={"10px"} bgColor={"yellow"}>
          Aut, quas, ullam?
        </Box>
        <Box mx={"10px"} bgColor={"yellow"}>
          Asperiores in, minus.
        </Box>
        <Box my={"10px"} bgColor={"yellow"}>
          Perferendis, sapiente veritatis!
        </Box>
        <Box bgColor={"teal"} p={"10px"}>
          Lorem ipsum dolor.
        </Box>
        <Box bgColor={"teal"} pt={"10px"}>
          Aperiam error, quaerat!
        </Box>
        <Box bgColor={"teal"} pb={"10px"}>
          Cumque, deserunt officiis.
        </Box>
        <Box bgColor={"teal"} pl={"10px"}>
          Ex, molestias, nulla.
        </Box>
        <Box bgColor={"teal"} pr={"10px"}>
          Deleniti, dolorum, voluptatibus.
        </Box>
        <Box bgColor={"teal"} px={"10px"}>
          Et numquam, sit.
        </Box>
        <Box bgColor={"teal"} py={"10px"}>
          Reprehenderit saepe, ut.
        </Box>
        <hr />
        <Box w={"500px"}>Lorem ipsum dolor.</Box>
        <Box h={"500px"}>Commodi ipsam, unde.</Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
