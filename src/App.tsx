import { CssBaseline, ThemeProvider } from '@mui/material'
import { useTheme } from 'core/theme'
import { BrowserRouter } from 'react-router-dom'
import { RoutesProvider } from './core/router'

function App() {
  const theme = useTheme()

  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesProvider />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
