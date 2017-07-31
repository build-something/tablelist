import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const middlewares = (environment) =>{
  if(environment === 'development') return applyMiddleware(logger, thunk)
    return applyMiddleware(thunk)
}
const store = createStore(rootReducer, middlewares(process.env.NODE_ENV))

export default store