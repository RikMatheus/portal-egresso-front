import { ThemeProvider } from "styled-components"

import Home from '../../pages/Home'

import { GlobalStyle, theme } from "../../theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
