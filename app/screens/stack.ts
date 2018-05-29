import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { SignInScreen } from 'screens/auth/login'
import { HomeScreen } from './home'
import { LoadingScreen } from './loading'

export enum AuthScreens {
  SignIn = 'SignIn',
}

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
})

export enum RootScreens {
  Auth = 'Auth',
  Loading = 'Loading',
}

export const RootStack = createSwitchNavigator({
  Auth: AuthStack,
  Loading: LoadingScreen,
}, {
  initialRouteName: 'Loading',
})
