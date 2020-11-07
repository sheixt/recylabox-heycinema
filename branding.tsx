import {TextStyle, ViewStyle} from 'react-native'

const spacing = {
  small: 8,
  medium: 16,
  large: 32,
}

const colors = {
  primary: '#7faae4',
  secondary: '#834db7',
  tirtiary: '#34283f',
  black: '#000',
  lightGrey: '#eee',
  grey: '#999',
  white: '#fff',
}

interface Typography {
  h1: TextStyle
  h2: TextStyle
  body: TextStyle
}

const typography: Typography = {
  h1: {
    fontFamily: 'helveticaNeueBold',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
  },
  h2: {
    fontFamily: 'helveticaNeueBold',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
  },
  body: {
    fontFamily: 'helveticaNeue',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 18,
  },
}

interface Shadow {
  small: ViewStyle
  medium: ViewStyle
  large: ViewStyle
}

const shadow: Shadow = {
  small: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
}

const branding = {spacing, colors, typography, shadow}

export default branding
