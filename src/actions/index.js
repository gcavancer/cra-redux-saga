import * as types from '../constants/ActionTypes'

export const increment = () => {
    return { type: types.INCREMENT };
}

export const incrementAsync = () => {
    return { type: types.INCREMENT_ASYNC };
}

export const decrement = () => {
    return { type: types.DECREMENT };
}

export const decrementAsync = () => {
    return { type: types.DECREMENT_ASYNC };
}