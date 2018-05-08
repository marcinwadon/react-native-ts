import { ActionsUnion, createAction } from 'common/redux/action'

export enum CounterActionType {
  Decrement = 'DECREMENT',
  Increment = 'INCREMENT',
}

export const CounterAction = {
  decrement: () => createAction(CounterActionType.Decrement),
  increment: () => createAction(CounterActionType.Increment),
}

export type CounterAction = ActionsUnion<typeof CounterAction>
