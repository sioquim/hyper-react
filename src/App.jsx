import './App.css'

import React from 'react'
import { hot } from 'react-hot-loader'

const message = 'Welcome to Super React Project'

const App = () => (
  <div className="App">
    <h1>{message}</h1>
  </div>
)

export default hot(module)(App)
