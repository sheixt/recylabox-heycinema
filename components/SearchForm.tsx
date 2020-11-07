import {Ionicons} from '@expo/vector-icons'
import React, {useState} from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import branding from '../branding'
import Card from './Card'

const SearchForm: React.FC<{placeholder: string}> = ({placeholder}) => {
  const {colors} = branding
  const [title, setTitle] = useState('')
  const search = () => console.log(title)

  return (
    <View style={styles.container}>
      <Card padding={['small', 'small', 'small', 'small']}>
        <View style={styles.form}>
          <TextInput
            placeholder={placeholder}
            onChangeText={input => setTitle(input)}
            defaultValue={title}
            style={styles.input}
          />
          <TouchableOpacity onPress={search} style={styles.button}>
            <Ionicons
              name="md-search"
              size={32}
              color={title.length ? colors.primary : colors.lightGrey}
            />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  )
}

interface Styles {
  container: ViewStyle
  form: ViewStyle
  input: ViewStyle
  button: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    paddingLeft: branding.spacing.medium,
    paddingRight: branding.spacing.medium,
    paddingBottom: branding.spacing.large,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    flexGrow: 1,
    ...branding.typography.body,
  },
  button: {
    height: 40,
    paddingLeft: branding.spacing.small,
    paddingRight: branding.spacing.small,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default SearchForm
