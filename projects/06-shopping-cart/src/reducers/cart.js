export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    // si el producto esta en el carrito aumentamos su cantidad
    if (productInCartIndex >= 0) {
      // con structureClone : mas legible
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1

      // con map : mas facil
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // con spread operator y slice : mas rapida
      // const newState = [
      //   ...state.slice(0, productInCartIndex),
      //   { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
      //   ...state.slice(productInCartIndex + 1)
      // ]

      updateLocalStorage(newState)
      return newState
    }

    // si no esta en el carrito, lo agregamos
    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, action) : state
}
