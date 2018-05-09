import { Dispatch } from 'react-redux'
import { AnyAction, applyMiddleware, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { reducer } from './reducer'

const REDUX_DEVTOOLS_MONITORING_ENABLED = true

// TODO: temporary, till real middleware needed
const empty = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => next(action)

const middlewares: Middleware[] = [empty]
const enhancer = composeWithDevTools({
  realtime: REDUX_DEVTOOLS_MONITORING_ENABLED,
})(applyMiddleware(...middlewares) as any) as any // tslint:disable-line no-any

export const store = createStore(reducer, enhancer)
