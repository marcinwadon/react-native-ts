import { NavigationProps } from 'common/navigation'
import { Either, fromPredicate, left } from 'fp-ts/lib/Either'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputField } from 'ui/input/InputField'

// tslint:disable object-literal-sort-keys readonly-keyword no-object-mutation typedef

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  },
})

const required = fromPredicate((text: string) => Boolean(text) && text.length > 0, () => 'required')
const minLength = (n: number) => fromPredicate((text: string) => Boolean(text) && text.length >= n, () => `must have at least ${n} chars`)

class LoginForm extends React.Component<{}> {
  public readonly state = { values: { username: left<string, string>('empty'), password: left<string, string>('empty') } }

  private onPress = () => {
    console.log(this.state, this.isValid())
  }

  private isValid = (): boolean =>
    Object.keys(this.state.values)
      .map(key => this.state.values[key])
      .reduce((acc, field) => acc && field.isRight(), true)

  private setValue = (name: string) => (value: Either<string, string>): void => {
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }))
  }

  private onChange = (name: string) => this.setValue(name)

  public render(): React.ReactNode {
    return (
      <>
        <InputField
          onChangeText={this.onChange('username')}
          autoFocus={true}
          placeholder={'Username'}
          validators={[required, minLength(3)]}
        />
        <InputField
          onChangeText={this.onChange('password')}
          placeholder={'Password'}
          secureTextEntry={true}
          validators={[required, minLength(6)]}
        />
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </>
    )
  }
}

export const SignInScreen: React.SFC<NavigationProps> = () => (
  <View>
    <Text style={styles.header}>Sign In</Text>
    <LoginForm/>
  </View>
)
