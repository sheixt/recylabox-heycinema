import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'

import branding from './branding'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchForm from './components/SearchForm'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    helveticaNeue: require('./assets/HelveticaNeue.ttf'),
    helveticaNeueItalic: require('./assets/HelveticaNeueIt.ttf'),
    helveticaNeueBold: require('./assets/HelveticaNeueBd.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Header />
      <SearchForm placeholder="Search for a movie title" />
      <MovieList headline="Movie results:" />
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
