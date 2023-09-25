import { createContext, useState } from 'react'

// 1. crear el contexto
export const FiltersContext = createContext()

// 2. Proveer el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
