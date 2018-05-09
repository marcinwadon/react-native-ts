import { Dispatch } from 'react-redux'
import { AnyAction, applyMiddleware, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { reducer } from './reducer'

// TODO: temporary, till real middleware needed
const empty = () => (next: Dispatch<AnyAction>) => next

const middlewares: Middleware[] = [empty]
const enhancer = composeWithDevTools(applyMiddleware(...middlewares) as any) as any // tslint:disable-line no-any

export const store = createStore(reducer, enhancer)
