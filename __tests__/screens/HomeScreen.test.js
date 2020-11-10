import {render} from '@testing-library/react-native'
import React from 'react'

import HomeScreen from '../../screens/HomeScreen'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
jest.useFakeTimers()

test('HomeScreen default render test', async () => {
  const {findByText, findByPlaceholderText} = render(<HomeScreen />)
  const textInput = findByPlaceholderText('Search (e.g. Batman)')
  const helperText = findByText("Please search for a movie by it's title")

  expect(textInput).toBeDefined()
  expect(helperText).toBeDefined()
})
