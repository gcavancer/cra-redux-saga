import * as types from '../../constants/ActionTypes'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: false
      }

    case types.INCREMENT_ASYNC_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case types.INCREMENT_ASYNC_FAILURE:
      console.log(action)
      return {
        ...state,
        message: action.payload,
        isIncrementing: false
      }

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: false
      }

    case types.DECREMENT_ASYNC_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    default:
      return state
  }
}