import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { App } from '../App'

describe('App', () => {
  it('should renders correctly', () => {
    const app = renderer.create(<App/>).toJSON()
    expect(app).toMatchSnapshot()
  })
})
