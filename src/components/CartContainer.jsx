import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function CartContainer() {
  const { cart, getTotal, removeFromCart } = useCartContext()
  getTotal()
  return (
    <div>
      <p>Total:{getTotal()}</p>
      {cart.map((prod) => (
        <div key={prod.id}>
          <p>{prod.name} - Cantidad: {prod.quantity}</p>

        <button onClick={() => removeFromCart(prod.id)}>❌</button>
        </div>
      ))}
      <Link to="/checkout">terminar compra</Link>
    </div>
  )
}
export default CartContainer
