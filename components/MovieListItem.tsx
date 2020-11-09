import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import branding from '../branding'
import {imageWithFallback} from '../utils'
import {Movie} from '../utils/types'
import Card from './Card'
import MovieMeta from './MovieMeta'

const MovieListItem: React.FC<Movie> = ({image, ...rest}) => {
  const imageSrc: string = imageWithFallback(image)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {id: rest.imdbID})}
      >
        <Card>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <Image style={styles.image} source={{uri: imageSrc}} />
            </View>
            <View style={styles.meta}>
              <MovieMeta {...rest} />
              <Text style={styles.link}>More details ►</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  )
}

interface Styles {
  container: ViewStyle
  item: ViewStyle
  image: ImageStyle
  meta: ViewStyle
  link: TextStyle
}

const {
  spacing: {small, medium},
  colors,
} = branding

const styles = StyleSheet.create<Styles>({
  container: {
    paddingLeft: medium,
    paddingRight: medium,
    paddingBottom: medium,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
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
  link: {
    marginTop: small,
    fontSize: 18,
    lineHeight: 20,
    color: colors.secondary,
  },
})

export default MovieListItem
