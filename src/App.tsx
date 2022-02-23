import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {Button, ChakraProvider} from "@chakra-ui/react"

import theme from "./theme/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <p>Hello World</p>
      <Button>ボタン</Button>
    </ChakraProvider> 
  );
}

export default App;
