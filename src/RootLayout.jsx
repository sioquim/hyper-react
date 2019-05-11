import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import App from './containers/App'
import theme from './styles/theme'

const RootLayout = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default RootLayout
