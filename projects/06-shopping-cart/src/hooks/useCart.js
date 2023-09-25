import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const cart = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('deberias usar el hook dentro de su contexto')
  }

  return cart
}
