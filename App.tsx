import {AppLoading} from 'expo'
import {LinearGradient} from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native'

import branding from './branding'
import Header from './components/Header'
import SearchMovies from './components/SearchMovies'
import {MoviesProvider} from './utils/movies-context'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    helveticaNeue: require('./assets/HelveticaNeue.ttf'),
    helveticaNeueItalic: require('./assets/HelveticaNeueIt.ttf'),
    helveticaNeueBold: require('./assets/HelveticaNeueBd.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const {height} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={[branding.colors.primary, branding.colors.secondary]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height,
        }}
      />
      <Header />
      <MoviesProvider>
        <SearchMovies />
      </MoviesProvider>
      <StatusBar style="auto" />
    </View>
  )
}

interface Styles {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: branding.colors.lightGrey,
    alignItems: 'center',
  },
})

export default App
