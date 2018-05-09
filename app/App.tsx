import { store } from 'lib/store'
import * as React from 'react'
import { Provider } from 'react-redux'
import { RootStack } from 'screens/stack'

export const App = () => (
  <Provider store={store}>
    <RootStack/>
  </Provider>
)
