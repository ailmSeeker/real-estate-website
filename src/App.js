import logo from './logo.svg';
import './App.css';
import GetInfo from './getInfo.js'
import Login from './GetLogin.js'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <h1>hello</h1>
    <ChakraProvider>
        <Login />
    </ChakraProvider>
    </>
  );
}

export default App;
