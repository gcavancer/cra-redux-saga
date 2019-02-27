import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { 
    increment,
    incrementAsyncRequested,
    incrementAsyncFailure,
    decrement,
    decrementAsyncRequested
 } from '../containers/counter/actions'

export const loadSaga = () => {
    console.log('Sagas!')
}

export function* incrementAsyncSaga() {
    try {
        yield put(incrementAsyncRequested())
        yield delay(1000)
        yield put(increment())
        // Simulate an error.
        throw new Error('Increment async failed: broken!')
    }
    catch (err) {
        yield put(incrementAsyncFailure(err));
    }
}

export function* decrementAsyncSaga() {
    yield put(decrementAsyncRequested())
    yield delay(1000)
    yield put(decrement())
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}

export function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsyncSaga)
}

export default function* rootSaga() {
    yield all([
        loadSaga(),
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}