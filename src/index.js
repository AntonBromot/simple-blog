import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './store/reducers'
import Application from './view'
import 'babel-polyfill'

const store =  createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
))


const bootstrapApplication = ( Component ) => {
    ReactDOM.render(
		<Provider store = { store } >
		  <BrowserRouter  >
				<Component />
		  </BrowserRouter>
	   </Provider>,
	   document.getElementById('root')
   )
}

bootstrapApplication(Application)

