import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;

export const lightTheme = {
  background: '#f6f8fd',
  text: '#151620',
};

export const darkTheme = {
  background: '#151620',
  text: '#f6f8fd',
};
