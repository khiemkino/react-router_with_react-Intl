// @flow
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'

import { createHashHistory } from 'history'
import createSagaMiddleWare from 'redux-saga'
// Root action saga
import rootSaga from '../actionSaga/rootSaga'
// Start history
const history = createHashHistory()

// Merge middlewares
const sagaMiddleWare = createSagaMiddleWare()

const middleWare = [sagaMiddleWare, thunkMiddleware]

if (process.env['NODE_ENV'] === 'development') {
  middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleWare.run(rootSaga)

export { store, history }
