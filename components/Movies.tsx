import React from 'react'
import {Text} from 'react-native'

import {useMoviesState} from '../utils/movies-context'
import MovieList from './MovieList'
import Warning from './Notice'

const Movies: React.FC = () => {
  const {status, searchTerm, error} = useMoviesState()
  if (!searchTerm || status === 'idle') {
    return <Text>Please search for a movie by it's title</Text>
  } else if (status === 'rejected') {
    return (
      <Warning
        message={
          error && error.message ? error.message : 'Something went wrong'
        }
      />
    )
  } else if (status === 'pending') {
    return <Text>Loading...</Text>
  } else if (status === 'resolved') {
    return <MovieList headline={`Movie results for "${searchTerm}:`} />
  }

  throw new Error('This should be impossible')
}

export default Movies
