import {useRoute} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import branding from '../branding'
import {imageWithFallback} from '../utils'
import {
  getMovieDetails,
  useMovieDispatch,
  useMovieState,
} from '../utils/movie-context'
import {Rating} from '../utils/types'
import MovieMeta from './MovieMeta'
import Notice from './Notice'

const MovieDetails: React.FC = () => {
  const {params}: {params: any} = useRoute()
  const dispatch = useMovieDispatch()
  const {status, movie, error} = useMovieState()
  useEffect(() => {
    if (params && params.id) {
      getMovieDetails(dispatch, params.id)
    }
  }, [params.id])

  if (status === 'pending' || status === 'idle') {
    return <Text>Loading...</Text>
  } else if (status === 'rejected') {
    return (
      <Notice
        message={
          error && error.message ? error.message : 'Something went wrong'
        }
      />
    )
  } else if (status === 'resolved' && movie) {
    const {height, width} = Dimensions.get('screen')
    const {Title, Poster, Year, Ratings, Plot, ...meta} = movie
    const includedMeta: string[] = [
      'Released',
      'Runtime',
      'Director',
      'Writer',
      'Awards',
      'Actors',
      'Genre',
    ]
    const imageSrc: string = movie ? imageWithFallback(movie.Poster) : 'N/A'
    return (
      <ScrollView>
        <Image source={{uri: imageSrc}} style={{width, height: height / 3}} />
        <View style={styles.container}>
          <MovieMeta title={Title} year={Year} />
          {Ratings ? (
            <View style={styles.ratings}>
              {Ratings.map((item: Rating, index: number) => (
                <View key={`rating-${index}`} style={styles.ratingItem}>
                  <Text style={styles.ratingValue}>{item.Value}</Text>
                  <Text style={styles.ratingSource}>{item.Source}</Text>
                </View>
              ))}
            </View>
          ) : null}
          {Plot ? <Text style={styles.paragraph}>{Plot}</Text> : null}
          <Text style={styles.subHeadline}>Additional Information</Text>
          {Object.keys(meta).map((key, index) => {
            if (includedMeta.includes(key)) {
              return (
                <Text key={`meta-${index}`} style={styles.paragraph}>
                  <Text style={styles.strong}>{key}</Text>: {meta[key]}
                </Text>
              )
            }

            return null
          })}
        </View>
      </ScrollView>
    )
  }

  throw new Error('This should be impossible')
}

interface Styles {
  container: ViewStyle
  paragraph: TextStyle
  subHeadline: TextStyle
  ratings: ViewStyle
  ratingItem: ViewStyle
  ratingValue: TextStyle
  ratingSource: TextStyle
  strong: TextStyle
}

const {
  spacing: {small, medium},
  colors,
  typography: {h2},
} = branding

const styles = StyleSheet.create<Styles>({
  container: {
    paddingLeft: medium,
    paddingRight: medium,
    paddingBottom: medium,
    paddingTop: medium,
  },
  paragraph: {
    marginBottom: small,
  },
  subHeadline: {
    ...h2,
    color: colors.secondary,
    marginTop: small,
    marginBottom: small,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: medium,
    paddingBottom: medium,
  },
  ratingItem: {
    flex: 1,
    justifyContent: 'center',
  },
  ratingValue: {
    ...h2,
    color: colors.secondary,
    textAlign: 'center',
  },
  ratingSource: {
    fontStyle: 'italic',
    color: colors.grey,
    fontSize: 10,
    textAlign: 'center',
  },
  strong: {
    fontWeight: 'bold',
  },
})

export default MovieDetails
