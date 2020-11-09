import React, {createContext, useReducer, useContext} from 'react'

import {fetchMovieDetails} from './api'
import {Movie, MovieState} from './types'

type Dispatch = (action: Action) => void
type MovieProviderProps = {children: React.ReactNode}
interface Action {
  type: 'status' | 'movie' | 'error'
  payload: any
}

const defaultState = {
  status: 'idle',
  movie: null,
  error: null,
}

const MovieStateContext = createContext<MovieState | undefined>(undefined)
const MovieDispatchContext = createContext<Dispatch | undefined>(undefined)

function movieReducer(state: MovieState, action: Action) {
  switch (action.type) {
    case 'status': {
      return {...state, status: action.payload}
    }
    case 'movie': {
      return {...state, movie: action.payload}
    }
    case 'error': {
      return {...state, error: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function MovieProvider({children}: MovieProviderProps) {
  const [state, dispatch] = useReducer(movieReducer, defaultState)
  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  )
}

function useMovieState() {
  const context = useContext(MovieStateContext)
  if (context === undefined) {
    throw new Error('useMovieState must be used within a MovieProvider')
  }
  return context
}

function useMovieDispatch() {
  const context = useContext(MovieDispatchContext)
  if (context === undefined) {
    throw new Error('useMovieDispatch must be used within a MovieProvider')
  }
  return context
}

async function getMovieDetails(dispatch: Dispatch, id: string) {
  dispatch({type: 'status', payload: 'pending'})
  fetchMovieDetails(id).then(
    (movie: Movie) => {
      dispatch({type: 'movie', payload: movie})
      dispatch({type: 'status', payload: 'resolved'})
    },
    (error: string | null) => {
      dispatch({type: 'error', payload: error})
      dispatch({type: 'status', payload: 'rejected'})
    },
  )
}

export {MovieProvider, useMovieState, useMovieDispatch, getMovieDetails}
