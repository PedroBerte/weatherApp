import React from 'react';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box h="100vh">
          <Home />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
