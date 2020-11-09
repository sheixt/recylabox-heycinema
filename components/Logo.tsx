import React from 'react'
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import branding from '../branding'

const Logo: React.FC = () => {
  return (
    <>
      <Text style={styles.hey}>hey</Text>
      <Text style={styles.cinema}>cinema</Text>
    </>
  )
}

interface Styles {
  hey: TextStyle
  cinema: TextStyle
}

const styles = StyleSheet.create<Styles>({
  hey: {
    ...branding.typography.h1,
    color: branding.colors.primary,
    textAlign: 'center',
  },
  cinema: {
    ...branding.typography.h1,
    color: branding.colors.secondary,
    textAlign: 'center',
  },
})

export default Logo
