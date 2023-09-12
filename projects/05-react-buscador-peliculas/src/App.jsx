import { useCallback, useEffect, useState } from 'react'
import './App.css'

import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from "just-debounce-it"

function App() {
  const [ sort, setSort ] = useState(false)
  const { search, UpdateSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
  , []) 

  const handleSubmit = (event) => {
    setSort(false)
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    UpdateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  useEffect(() => {
    console.log("new getMovies Received")
  }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Kingsman, Avengers, Thor Ragnarok ...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
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
