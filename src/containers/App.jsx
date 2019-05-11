import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import CharacterList from '../components/CharacterList'

export const StyledLayout = styled.div`
  padding: 2em;
  min-height: 100vh;
  width: 100%;
`

const message = 'Welcome to Super React Project'

const App = () => (
  <StyledLayout>
    <Typography variant="h1" align="center">
      {message}
    </Typography>
    <CharacterList />
  </StyledLayout>
)

export default hot(module)(App)
