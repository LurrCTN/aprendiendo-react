import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

export function Filters () {
  const CategoriaId = useId()
  const PrecioId = useId()

  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // pasamos la funcion de actualizacion del estado a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={PrecioId}>Precio mínimo</label>
        <input
          type='range'
          id={PrecioId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        /> ${filters.minPrice}
      </div>

      <div>
        <label htmlFor={CategoriaId}>Categoria</label>
        <select id={CategoriaId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='home-decoration'>Decoracion del Hogar</option>
          <option value='smartphones'>Celulares</option>
          <option value='fragrances'>Fragancias</option>
          <option value='skincare'>Cuidado de la Piel</option>
          <option value='groceries'>Grocerias</option>
          <option value='fragrances'>Fragancias</option>
        </select>
      </div>
    </section>
  )
}
