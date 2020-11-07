import React from 'react'
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import branding from '../branding'
import MovieListItem from './MovieListItem'

const MovieList: React.FC<{headline: string}> = ({headline}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{headline}</Text>
      <MovieListItem
        title="A really long Movie Title Goes here"
        year={2001}
        rating={8}
      />
    </View>
  )
}

interface Styles {
  container: ViewStyle
  headline: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    paddingLeft: branding.spacing.medium,
    paddingRight: branding.spacing.medium,
    paddingBottom: branding.spacing.large,
  },
  headline: {
    ...branding.typography.h2,
    marginBottom: branding.spacing.small,
  },
})

export default MovieList
