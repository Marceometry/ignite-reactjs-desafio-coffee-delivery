import { ThemeProvider } from 'styled-components'
import { CheckoutContextProvider } from '@/contexts'
import { defaultTheme, GlobalStyle } from '@/styles'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CheckoutContextProvider>
        <Router />
      </CheckoutContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
