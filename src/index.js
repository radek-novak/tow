import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import { replaceState, replacer } from './redux-devtools-prompt-state/src/index'
import 'todomvc-app-css/index.css'

function configureStore(initialState)
{
  const createWithReplaceState = compose(replaceState())(createStore) // replaceState can take an array of key sequence
  const store = createWithReplaceState(reducer, initialState)
  replacer(store, [ 'shift+k' ]) // replacer for dom - could be extended in the future

  return store
}


const store = configureStore(reducer)
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
