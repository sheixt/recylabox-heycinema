export interface Movie {
  Title: string
  imdbID: string
  Year: string
  Ratings?: Rating[] | []
  Plot?: string
  Poster?: string
  [x: string]: any
}

export interface Rating {
  Source: string
  Value: string
}

export interface MoviesState {
  status: string
  searchTerm: string
  movies: Movie[] | []
  error: null | Error
}

export interface MovieState {
  status: string
  movie: Movie | null
  error: null | Error
}
