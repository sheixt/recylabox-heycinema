import React, {useEffect} from 'react'

import {
  searchMovies,
  useMoviesDispatch,
  useMoviesState,
} from '../utils/movies-context'
import Movies from './Movies'
import SearchForm from './SearchForm'

const SearchMovies: React.FC = () => {
  const {searchTerm} = useMoviesState()
  const dispatch = useMoviesDispatch()
  useEffect(() => {
    if (searchTerm) {
      searchMovies(dispatch, searchTerm)
    }
  }, [searchTerm])

  return (
    <>
      <SearchForm placeholder="Search for a movie title" />
      <Movies />
    </>
  )
}
export default SearchMovies
