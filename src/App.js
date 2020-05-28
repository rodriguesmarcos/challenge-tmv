import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { CartProvider } from './context/cart';

import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
