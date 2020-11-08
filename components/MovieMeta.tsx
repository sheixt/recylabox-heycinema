import React from 'react'
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import branding from '../branding'

interface Meta {
  title: string
  rating: string
  year: string
}

const MovieMeta: React.FC<Meta> = ({title, rating, year}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.meta}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating}/10</Text>
      </View>
    </>
  )
}

interface Styles {
  title: TextStyle
  meta: ViewStyle
  year: TextStyle
  rating: TextStyle
}

const styles = StyleSheet.create<Styles>({
  title: {
    ...branding.typography.h1,
    color: branding.colors.primary,
    marginBottom: branding.spacing.small,
    width: '100%',
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  year: {
    ...branding.typography.body,
    color: branding.colors.grey,
  },
  rating: {
    ...branding.typography.body,
    color: branding.colors.secondary,
  },
})

export default MovieMeta
