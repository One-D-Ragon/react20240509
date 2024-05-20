import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}> gray </Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Officia!</Button>
        <Button colorScheme={"yellow"}>Dolor.</Button>
        <Button colorScheme={"green"}>Pariatur.</Button>
        <Button colorScheme={"teal"}>Similique.</Button>
        <Button colorScheme={"blue"}>Dolorem?</Button>
        <Button colorScheme={"cyan"}>Atque.</Button>
        <Button colorScheme={"purple"}>Ad?</Button>
        <Button colorScheme={"pink"}>Cupiditate!</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Nobis.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Nemo!
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Hic.
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
