import { ActionsUnion, createAction } from 'app/common/redux'

export enum CounterActionType {
  Decrement = 'DECREMENT',
  Increment = 'INCREMENT',
}

export const CounterAction = {
  decrement: () => createAction(CounterActionType.Decrement),
  increment: () => createAction(CounterActionType.Increment),
}

export type CounterAction = ActionsUnion<typeof CounterAction>
