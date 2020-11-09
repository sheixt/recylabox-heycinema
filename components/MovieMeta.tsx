import React from 'react'
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native'

import branding from '../branding'

interface Meta {
  Title: string
  Year: string
  [x: string]: any
}

const MovieMeta: React.FC<Meta> = ({Title, Year}) => {
  return (
    <>
      <Text style={styles.year}>{Year}</Text>
      <Text style={styles.title}>{Title}</Text>
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
