import {Ionicons} from '@expo/vector-icons'
import React, {useEffect, useRef, useState} from 'react'
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import branding from '../branding'
import {useMoviesDispatch, useMoviesState} from '../utils/movies-context'
import Card from './Card'

const SearchForm: React.FC<{
  placeholder: string
}> = ({placeholder}) => {
  const {colors} = branding
  const {status} = useMoviesState()
  const dispatch = useMoviesDispatch()
  const [title, setTitle] = useState('')
  const search = () => dispatch({type: 'searchTerm', payload: title})

  const scaleAnim = useRef(new Animated.Value(0)).current
  const pulse = () =>
    Animated.loop(
      Animated.sequence([
        Animated.delay(300),
        Animated.timing(scaleAnim, {
          toValue: 1.03,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 3,
      },
    ).start()

  useEffect(() => {
    if (status === 'idle') {
      pulse()
    }
  }, [status])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            scaleX: scaleAnim,
            scaleY: scaleAnim,
          },
        ]}
      >
        <Card padding={['small', 'small', 'small', 'small']}>
          <View style={styles.form}>
            <TextInput
              placeholder={placeholder}
              onChangeText={input => setTitle(input.trim())}
              defaultValue={title}
              style={styles.input}
            />
            <TouchableOpacity
              testID="searchForm-button"
              onPress={search}
              style={styles.button}
              disabled={status === 'pending'}
            >
              <Ionicons
                name="md-search"
                size={32}
                color={title.length ? colors.primary : colors.lightGrey}
              />
            </TouchableOpacity>
          </View>
        </Card>
      </Animated.View>
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
