import { useState, useEffect, useRef } from "react"

export function useSearch () {
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