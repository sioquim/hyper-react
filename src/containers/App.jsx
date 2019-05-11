import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Demo from './Demo'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md}px`};
`

const App = () => (
  <Container>
    <Demo />
  </Container>
)

export default hot(module)(App)
