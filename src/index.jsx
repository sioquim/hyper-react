import React from 'react'

import { Provider } from 'react-redux'

import { render } from 'react-dom'
import RootLayout from './RootLayout'
import configureStore from './store/configureStore'

const store = configureStore()
render(
  <Provider store={store}>
    <RootLayout />
  </Provider>,
  document.getElementById('root')
)
