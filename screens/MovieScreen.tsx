import {LinearGradient} from 'expo-linear-gradient'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native'

import branding from '../branding'
import MovieDetails from '../components/MovieDetails'
import {MovieProvider} from '../utils/movie-context'

const MovieScreen: React.FC = () => {
  const {height} = Dimensions.get('screen')
  return (
    <View style={styles.container}>
      <MovieProvider>
        <MovieDetails />
      </MovieProvider>
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

export default MovieScreen
