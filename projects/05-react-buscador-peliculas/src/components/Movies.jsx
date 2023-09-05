/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
 return (
  <ul className="movies">
    {
      movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))
    }
  </ul>
 )
}

function NoMoviesResults () {
  return <p>no se encontraron peliculas</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return ( 
    hasMovies 
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />
  )
}
