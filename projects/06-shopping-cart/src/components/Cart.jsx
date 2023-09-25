import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, title, price, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          {quantity}
        </small>
      </footer>
      <button onClick={addToCart}>+</button>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            Array.isArray(cart) &&
            cart?.map(product => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            ))
          }
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
