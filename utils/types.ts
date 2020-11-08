export interface Movie {
  title: string
  image?: string
  rating: string
  year: string
}

export interface MovieState {
  // status: 'idle' | 'pending' | 'response' | 'error'
  status: string
  searchTerm: string
  movies: Movie[] | []
  error: null | Error
}
