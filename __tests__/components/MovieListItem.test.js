import {useNavigation} from '@react-navigation/native'
import React from 'react'

import MovieListItem from '../../components/MovieListItem'
import {render} from '../../utils/test-utils'

// Configure Jest to mock react-navigation
jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  }
})
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}))
jest.mock('@react-native-community/masked-view', () => ({}))

beforeEach(() => {
  useNavigation.mockReset()
})

// Perform test
test('MovieListItem default rendering ', () => {
  const data = {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  }
  const {getByTestId, getByA11yLabel} = render(<MovieListItem {...data} />)

  // Check image has correct extension
  const image = getByTestId('MovieListItem-image')
  expect(image).toBeDefined()
  const imageTypes = `bmp|gif|jpg|jpeg|png|svg|webp`.split('|')
  const imageSrc = image.props.source.uri
  const imageExt = imageSrc.substring(
    imageSrc.lastIndexOf('.') + 1,
    imageSrc.length,
  )
  expect(imageTypes).toContain(imageExt)

  // Check title has correct content
  const title = getByA11yLabel('Title')
  expect(title.props.children).toBe(data.Title)

  // Check release has correct content
  const release = getByA11yLabel('Year of release')
  expect(release.props.children).toBe(data.Year)
})
