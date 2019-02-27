import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './containers/counter/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  counterState: counterReducer
})