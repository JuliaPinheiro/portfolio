import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header';
import About from './components/about';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Header>
      </Router>
    </ThemeProvider>
  );
}

export default App;
