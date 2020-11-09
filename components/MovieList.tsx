import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import branding from '../branding'
import {useMoviesState} from '../utils/movies-context'
import MovieListItem from './MovieListItem'

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

const MovieList: React.FC<{headline: string}> = ({headline}) => {
  const {movies} = useMoviesState()
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{headline}</Text>
      <FlatList
        contentContainerStyle={{paddingBottom: 200}}
        keyExtractor={({imdbID}) => imdbID}
        data={movies}
        renderItem={({item}: {item: Movie}) => (
          <MovieListItem
            title={item.Title}
            year={item.Year}
            image={item.Poster}
            imdbID={item.imdbID}
          />
        )}
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
    paddingBottom: branding.spacing.large,
  },
  headline: {
    ...branding.typography.h2,
    paddingLeft: branding.spacing.medium,
    paddingRight: branding.spacing.medium,
    marginBottom: branding.spacing.small,
  },
})

export default MovieList
