
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  )
}

export default App
