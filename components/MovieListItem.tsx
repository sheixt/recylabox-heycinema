import React from 'react'
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'

import branding from '../branding'
import Card from './Card'
import MovieMeta from './MovieMeta'

interface Movie {
  title: string
  image?: string
  rating: number
  year: number
}

const MovieListItem: React.FC<Movie> = ({image, ...rest}) => {
  const imageSrc: string = image
    ? image
    : `https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.item}>
          <View style={{flex: 1}}>
            <Image style={styles.image} source={{uri: imageSrc}} />
          </View>
          <View style={styles.meta}>
            <MovieMeta {...rest} />
          </View>
        </View>
      </Card>
    </View>
  )
}

interface Styles {
  container: ViewStyle
  item: ViewStyle
  image: ImageStyle
  meta: ViewStyle
}

const {
  spacing: {small, medium, large},
} = branding

const styles = StyleSheet.create<Styles>({
  container: {
    marginBottom: large,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    maxWidth: '100%',
    borderTopLeftRadius: small,
    borderBottomLeftRadius: small,
  },
  meta: {
    paddingTop: small,
    paddingRight: medium,
    paddingBottom: small,
    paddingLeft: medium,
    flex: 2,
  },
})

export default MovieListItem
