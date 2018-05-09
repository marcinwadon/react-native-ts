import { combineReducers } from 'redux'
import { counterReducer } from '../counter'
import { IState } from './state'

export const reducer = combineReducers<IState>({
  counter: counterReducer,
})
