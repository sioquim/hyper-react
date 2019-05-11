import { applyMiddleware, compose, createStore } from 'redux'

import { createEpicMiddleware } from 'redux-observable'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import reducers from './reducers'
import { rootEpic } from './epics'

const observableMiddleware = createEpicMiddleware()
export const middlewares = [
  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  reduxImmutableStateInvariant(),
  observableMiddleware,
]

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const store = createStore(
    reducers,
    { ...(initialState || {}) },
    composeEnhancers(applyMiddleware(...middlewares))
  )

  observableMiddleware.run(rootEpic)
  return store
}
