import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      light: '#8e99f3',
      dark: '#26418f',
    },
    secondary: {
      main: '#19857b',
      light: '#53a8ad',
      dark: '#11574a',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    error: {
      main: red.A400,
      light: '#ff5c8d',
      dark: '#c51162',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    heartColor: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
    },
  },
});

export default theme;
