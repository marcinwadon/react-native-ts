import { Either, right } from 'fp-ts/lib/Either'
import { fromNullable } from 'fp-ts/lib/Option'
import * as React from 'react'
import { Dimensions, StyleSheet, TextInput, TextInputProps } from 'react-native'

/* tslint:disable no-magic-numbers */

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    color: '#333333',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingLeft: 25,
    width: DEVICE_WIDTH - 40,
  },
})

type Validator = (value: string) => Either<string, string>

interface IInputFieldProps {
  readonly validators?: Validator[],
  readonly onChangeText: (value: Either<string, string>) => void,
}

export class InputField extends React.Component<TextInputProps & IInputFieldProps | IInputFieldProps> {
  private readonly isValid = (value: string): Either<string, string> =>
    fromNullable(this.props.validators)
      .map(validators => validators.reduce(
        (acc, validator) => acc.chain(validator),
        right<string, string>(value)))
      .getOrElse(right(value))
  private readonly onChangeText = (text: string) => {
    const cb = fromNullable(this.props.onChangeText).getOrElse(() => {
    })
    cb(this.isValid(text))
  }

  public render(): React.ReactNode {
    return (
      <TextInput
        style={styles.input}
        {...this.props}
        onChangeText={this.onChangeText}
      />
    )
  }
}
