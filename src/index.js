import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { GlobalContextProvider } from './contexts/GlobalContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <App />
//       </ThemeProvider>
//     </React.StrictMode>
//   </BrowserRouter>
// );

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </GlobalContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
