import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import { createStore } from 'redux'
import rootReducer from './reducers'
import './skeleton.css'

const rootElement = document.getElementById("root")
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  rootElement
)