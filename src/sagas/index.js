import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

export const loadSaga = () => {
    console.log('Sagas!')
}

export function* incrementAsync() {
    yield put({ type: 'INCREMENT_ASYNC_REQUESTED' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* decrementAsync() {
    yield put({ type: 'DECREMENT_ASYNC_REQUESTED' })
    yield delay(1000)
    yield put({ type: 'DECREMENT' })
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga() {
    yield all([
      loadSaga(),
      watchIncrementAsync(),
      watchDecrementAsync()
    ])
}