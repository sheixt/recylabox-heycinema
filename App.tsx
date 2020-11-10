import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'
import React from 'react'

import Logo from './components/Logo'
import HomeScreen from './screens/HomeScreen'
import MovieInfo from './screens/MovieScreen'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    helveticaNeue: require('./assets/HelveticaNeue.ttf'),
    helveticaNeueItalic: require('./assets/HelveticaNeueIt.ttf'),
    helveticaNeueBold: require('./assets/HelveticaNeueBd.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const {Navigator, Screen} = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
          }}
        />
        <Screen
          name="Details"
          component={MovieInfo}
          options={{
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
