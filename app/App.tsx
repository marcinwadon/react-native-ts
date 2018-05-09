import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect, Dispatch, Provider } from 'react-redux'
import { CounterAction } from './lib/counter'
import { IState, store } from './lib/store'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
})

interface IStateProps {
  readonly counter: number,
}

interface IDispatchProps {
  readonly decrement: () => void,
  readonly increment: () => void,
}

interface IProps extends IStateProps, IDispatchProps {
}

const AppComponent: React.SFC<IProps> = ({ counter, decrement, increment }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Counter!
    </Text>
    <Button onPress={decrement} title='-'/>
    <Text style={styles.instructions}>
      {counter}
    </Text>
    <Button onPress={increment} title='+'/>
  </View>
)

const mapStateToProps = (state: IState): IStateProps => ({ counter: state.counter })
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  decrement: () => {
    dispatch(CounterAction.decrement())
  },
  increment: () => {
    dispatch(CounterAction.increment())
  },
})

const AppWithoutStore = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export const App = () => (
  <Provider store={store}>
    <AppWithoutStore/>
  </Provider>
)
