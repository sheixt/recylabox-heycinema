import React from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'

import branding from '../branding'
import Card from './Card'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <View style={styles.card}>
      <Card padding={['medium', 'medium', 'medium', 'medium']}>
        <Logo />
      </Card>
    </View>
  )
}

interface Styles {
  card: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  card: {
    width: '100%',
    marginBottom: branding.spacing.large,
  },
})

export default Header
