import { NavigationProps } from 'common/navigation'
import * as React from 'react'
import { Text, View } from 'react-native'
import { RootScreens } from 'screens/stack'

const LOADING_TIME = 300

interface IProps extends NavigationProps {
}

export class LoadingScreen extends React.Component<IProps> {
  public componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate(RootScreens.Auth)
    }, LOADING_TIME)
  }

  public render(): React.ReactNode {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading, please wait...</Text>
      </View>
    )
  }
}
