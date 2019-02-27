import * as types from '../../constants/ActionTypes'

export const increment = () => {
  return { type: types.INCREMENT };
}

export const incrementAsync = () => {
  return { type: types.INCREMENT_ASYNC };
}

export const incrementAsyncRequested = () => {
  return { 
    type: types.INCREMENT_ASYNC_REQUESTED
  };
}

export const incrementAsyncFailure = (err) => {
  return { 
    type: types.INCREMENT_ASYNC_FAILURE,
    payload: err 
  };
}

export const decrement = () => {
  return { type: types.DECREMENT };
}

export const decrementAsync = () => {
  return { type: types.DECREMENT_ASYNC };
}

export const decrementAsyncRequested = () => {
  return { type: types.DECREMENT_ASYNC_REQUESTED };
}