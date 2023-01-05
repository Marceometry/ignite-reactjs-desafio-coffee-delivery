import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '@/styles'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
