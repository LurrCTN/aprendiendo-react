import { useEffect, useRef, useState } from 'react'
import './App.css'

import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

const useSearch = () => {
  const [search, UpdateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener por lo menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    setError(null)
  }, [search])

  return { search, UpdateSearch, error}
}

function App() {
  const { search, UpdateSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    UpdateSearch(newQuery)
  }

 

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Kingsman, Avengers, Thor Ragnarok ...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p>}
      </header>
      {
        loading 
        ? <p>Loading ...</p>
        :<main><Movies movies={movies}/></main>
      }
    </div>
  )
}

export default App
