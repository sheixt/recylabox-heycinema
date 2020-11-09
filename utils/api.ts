export function fetchMovies(title: string) {
  return fetch(`http://www.omdbapi.com/?apikey=da0bfa12&s=${title}`).then(
    async response => {
      const data = await response.json()
      if (response.ok) {
        const movies = data?.Search
        if (movies) {
          return movies
        } else {
          return Promise.reject(
            new Error(`No movies found with the name "${title}"`),
          )
        }
      } else {
        const error = {
          message: data?.Error,
        }
        return Promise.reject(error)
      }
    },
  )
}

export function fetchMovieDetails(id: string) {
  return fetch(
    `http://www.omdbapi.com/?apikey=da0bfa12&i=${id}&plot=full`,
  ).then(async response => {
    const data = await response.json()
    if (response.ok) {
      const movie = data
      if (movie) {
        return movie
      } else {
        return Promise.reject(new Error(`No movie found with the name "${id}"`))
      }
    } else {
      const error = {
        message: data?.Error,
      }
      return Promise.reject(error)
    }
  })
}
