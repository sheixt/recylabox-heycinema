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

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Details"
          component={MovieInfo}
          options={{
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
