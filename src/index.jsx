import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
