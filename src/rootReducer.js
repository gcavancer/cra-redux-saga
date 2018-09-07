import { combineReducers } from 'redux'
import counterReducer from './containers/counter/reducer'

export default combineReducers({
  counterState: counterReducer
})