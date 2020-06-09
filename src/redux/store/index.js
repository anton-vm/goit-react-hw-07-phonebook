import {createStore, applyMiddleware} from 'redux';
import {devToolsEnhancer, composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/index'
import {configureStore} from '@reduxjs/toolkit'
import {filterState, contacts} from '../reducers/contacts'
import thunk from 'redux-thunk'

// const globalState = createStore(rootReducer, devToolsEnhancer());

const middleware = [thunk]

const compose = composeWithDevTools(applyMiddleware(...middleware))

const globalState = createStore(rootReducer, compose)

// const rootReducer = {
//     filterState,
//     contacts
// }

// const globalState = configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== "production"
// })

export default globalState