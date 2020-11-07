import React from 'react'
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import branding from '../branding'

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hey}>hey</Text>
      <Text style={styles.cinema}>cinema</Text>
    </View>
  )
}

interface Styles {
  container: ViewStyle
  hey: TextStyle
  cinema: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    paddingTop: branding.spacing.medium,
  },
  hey: {
    ...branding.typography.h1,
    color: branding.colors.primary,
  },
  cinema: {
    ...branding.typography.h1,
    color: branding.colors.secondary,
  },
})

export default Logo
