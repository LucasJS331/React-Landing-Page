import React from 'react';
import ReactDOM from 'react-dom';
import App from './templates/Home/App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
