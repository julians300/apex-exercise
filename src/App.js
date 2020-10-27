import { Box, Flex } from '@chakra-ui/core';

import { CSSReset } from '@chakra-ui/core';
import CatCard from './components/CatCard';
import Navigation from './components/Navigation';
import StoreProvider from './context/Store';
import { ThemeProvider } from '@chakra-ui/core';
import theme from './theme';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Flex bg={'#e8f2f7'} height={'100vh'} justifyItems={'center'}>
          <Box maxWidth={'500px'} margin={'auto'}>
            <CatCard />
            <Navigation />
          </Box>
        </Flex>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
