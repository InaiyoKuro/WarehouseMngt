import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider> 
  </StrictMode>,
)
