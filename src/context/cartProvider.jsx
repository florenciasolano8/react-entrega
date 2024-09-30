/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      )
    } else {
      setCart([...cart, item])
    }
  }

  const getTotal = () => {
    const prices = cart.map((prod) => prod.price * prod.quantity)
    const total = prices.reduce((acc, current) => acc + current, 0)
    return total
  }

  const getTotalItems = () => {
    const totalItems = cart.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    )
    return totalItems
  }

  const clearCart = () => setCart([])

  return (
    <cartContext.Provider
      value={{ cart, addToCart, getTotal, getTotalItems, clearCart }}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
