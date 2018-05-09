import { CounterAction, CounterActionType } from './actions'

export const counterReducer = (state = 0, action: CounterAction): number => {
  switch (action.type) {
    case CounterActionType.Decrement:
      return state - 1
    case CounterActionType.Increment:
      return state + 1
    default:
      return state
  }
}
