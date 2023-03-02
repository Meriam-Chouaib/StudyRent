import { ThemeProvider, Typography, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
