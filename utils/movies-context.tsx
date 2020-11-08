import React, {createContext, useReducer, useContext} from 'react'
import {fetchMovies} from './api'

import {Movie, MovieState} from './types'

type Dispatch = (action: Action) => void
type MoviesProviderProps = {children: React.ReactNode}
interface Action {
  type: 'searchTerm' | 'status' | 'movies' | 'error'
  payload: any
}

const defaultState = {
  searchTerm: '',
  status: 'idle',
  movies: [],
  error: null,
}

const MoviesStateContext = createContext<MovieState | undefined>(undefined)
const MoviesDispatchContext = createContext<Dispatch | undefined>(undefined)

function moviesReducer(state: MovieState, action: Action) {
  switch (action.type) {
    case 'searchTerm': {
      return {...state, searchTerm: action.payload}
    }
    case 'status': {
      return {...state, status: action.payload}
    }
    case 'movies': {
      return {...state, movies: action.payload}
    }
    case 'error': {
      return {...state, error: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function MoviesProvider({children}: MoviesProviderProps) {
  const [state, dispatch] = useReducer(moviesReducer, defaultState)
  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  )
}

function useMoviesState() {
  const context = useContext(MoviesStateContext)
  if (context === undefined) {
    throw new Error('useMoviesState must be used within a MoviesProvider')
  }
  return context
}

function useMoviesDispatch() {
  const context = useContext(MoviesDispatchContext)
  if (context === undefined) {
    throw new Error('useMoviesDispatch must be used within a MoviesProvider')
  }
  return context
}

async function searchMovies(dispatch: Dispatch, searchTerm: string) {
  dispatch({type: 'status', payload: 'pending'})
  fetchMovies(searchTerm).then(
    (movies: [] | Movie[]) => {
      dispatch({type: 'movies', payload: movies})
      dispatch({type: 'status', payload: 'resolved'})
    },
    (error: string | null) => {
      dispatch({type: 'error', payload: error})
      dispatch({type: 'status', payload: 'rejected'})
    },
  )
}

export {MoviesProvider, useMoviesState, useMoviesDispatch, searchMovies}
