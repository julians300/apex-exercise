import './App.css';

import { CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from '@chakra-ui/core';
import logo from './logo.svg';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
