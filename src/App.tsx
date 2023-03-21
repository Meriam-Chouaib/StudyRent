import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './routes';
import theme from './theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
