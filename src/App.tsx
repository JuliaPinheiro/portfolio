import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import ResponsiveAppBar from './layouts/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
