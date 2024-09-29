/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider ({children}){
    const [cart, setCart] = useState ([])

    const addToCart = (item) => setCart([...cart, item])

    const getTotal = () =>{
        const prices = cart.map(prod => prod.price*prod.quantity)
        const total = prices.reduce((acc, current)=> acc + current, 0)
        return total
    }

  return (
    <cartContext.Provider value= {{cart, addToCart, getTotal}}>
        {children}
    </cartContext.Provider>    
  )
}
export default CartProvider