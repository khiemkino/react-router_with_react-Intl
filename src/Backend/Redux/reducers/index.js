import * as mainReducers from './mainReducers'
import * as sagaReducers from './sagaReducers'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ...mainReducers,
  ...sagaReducers
})

export default rootReducer
