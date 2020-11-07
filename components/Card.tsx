import React from 'react'
import {StyleSheet, View} from 'react-native'

import branding from '../branding'

type Props = {
  shadow?: 'small' | 'medium' | 'large'
  padding?: [
    'small' | 'medium' | 'large',
    'small' | 'medium' | 'large',
    'small' | 'medium' | 'large',
    'small' | 'medium' | 'large',
  ]
}

const Card: React.FC<Props> = ({shadow = 'medium', padding, children}) => {
  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      paddingTop: padding && padding[0] ? branding.spacing[padding[0]] : 0,
      paddingRight: padding && padding[1] ? branding.spacing[padding[1]] : 0,
      paddingBottom: padding && padding[2] ? branding.spacing[padding[2]] : 0,
      paddingLeft: padding && padding[3] ? branding.spacing[padding[3]] : 0,
      borderRadius: branding.spacing.small,
      backgroundColor: branding.colors.white,
      ...branding.shadow[shadow],
    },
  })

  return <View style={styles.card}>{children}</View>
}

export default Card
