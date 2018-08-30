import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga);