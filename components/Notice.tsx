import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import branding from '../branding'

const Notice: React.FC<{message: string}> = ({message}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-warning" size={32} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

interface Styles {
  container: ViewStyle
  icon: ViewStyle
  message: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: branding.spacing.small,
  },
  message: {
    ...branding.typography.h2,
    opacity: 0.7,
    textAlign: 'center',
  },
})

export default Notice
